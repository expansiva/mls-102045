/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/voidMaterialUsage.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IMaterialUsageRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { MaterialUsage } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';
import { canTransitionMaterialUsage } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

export interface VoidMaterialUsageInput {
  materialUsageId: string;
  voidedReason: string;
}

export interface VoidMaterialUsageOutput {
  materialUsageId: string;
  projectId: string;
  status: string;
  materialName: string;
  quantity: number;
  unit: string;
  unitCost: number;
  voidedAt: string;
  voidedReason: string;
}

export async function voidMaterialUsage(
  ctx: RequestContext,
  input: VoidMaterialUsageInput,
): Promise<VoidMaterialUsageOutput> {
  const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');
  const now = ctx.clock.nowIso();

  // Modeling gap: IMaterialUsageRepository lacks a getById(materialUsageId) method.
  // The available port methods (listByProjectId, listByPeriod, listByMaterialType) cannot
  // locate a single record by materialUsageId alone. Using listByPeriod with a wide range
  // as a workaround to find the record, then filtering in memory by materialUsageId.
  const candidates = await materialUsages.listByPeriod(
    '2000-01-01T00:00:00.000Z',
    '2100-01-01T00:00:00.000Z',
  );
  const existing: MaterialUsage | null =
    candidates.find((r) => r.materialUsageId === input.materialUsageId) ?? null;

  if (!existing) {
    throw new AppError('NOT_FOUND', 'Material usage record not found', 404, {
      materialUsageId: input.materialUsageId,
    });
  }

  // rule: materialUsageIsProjectLevel — only a posted material usage record can be voided
  if (String(existing.status) !== 'posted') {
    throw new AppError(
      'VALIDATION_ERROR',
      'Only a material usage record with status posted can be voided',
      400,
      { ruleId: 'materialUsageIsProjectLevel', currentStatus: existing.status },
    );
  }

  if (!canTransitionMaterialUsage(existing.status, 'voided')) {
    throw new AppError(
      'CONFLICT',
      `Cannot transition material usage from ${existing.status} to voided`,
      409,
      { from: existing.status, to: 'voided' },
    );
  }

  const voidedRecord: MaterialUsage = {
    ...existing,
    status: 'voided',
    voidedAt: now,
    voidedReason: input.voidedReason,
  };

  // rule: jobCostDerivation — voided status signals downstream cost calculations to exclude
  // this record from project job cost and budget-vs-actual totals; no separate job-cost
  // entity mutation is performed in this usecase.
  await ctx.data.runInTransaction(async () => {
    await materialUsages.append(voidedRecord);
  });

  return {
    materialUsageId: voidedRecord.materialUsageId,
    projectId: voidedRecord.projectId,
    status: voidedRecord.status,
    materialName: voidedRecord.materialName,
    quantity: voidedRecord.quantity,
    unit: voidedRecord.unit,
    unitCost: voidedRecord.unitCost,
    voidedAt: now,
    voidedReason: input.voidedReason,
  };
}
