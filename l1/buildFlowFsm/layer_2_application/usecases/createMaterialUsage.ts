/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IMaterialUsageRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { MaterialUsage, MaterialUsageUnit } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

export interface CreateMaterialUsageInput {
  projectId: string;
  materialName: string;
  quantity: number;
  unit: string;
  unitCost: number;
  costCode?: string;
  usageDate: string;
}

export interface CreateMaterialUsageOutput {
  materialUsageId: string;
  projectId: string;
  status: string;
  materialName: string;
  quantity: number;
  unit: string;
  unitCost: number;
  costCode?: string;
  usageDate: string;
  recordedBy?: string;
  createdAt: string;
}

const VALID_UNITS: MaterialUsageUnit[] = ['kg', 'liter', 'meter', 'unit', 'bag', 'box'];

export async function createMaterialUsage(
  ctx: RequestContext,
  input: CreateMaterialUsageInput,
): Promise<CreateMaterialUsageOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');

  // Step 1: Load the Project referenced by projectId
  const project = await projects.getById(input.projectId);
  if (!project) {
    throw new AppError('VALIDATION_ERROR', `Project not found for projectId ${input.projectId}`, 400, {
      projectId: input.projectId,
    });
  }

  // rule: materialUsageIsProjectLevel — project must be in an accepting status
  const acceptingStatuses = ['active', 'registered'];
  if (!acceptingStatuses.includes(project.status)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Cannot record material usage against a project with status ${project.status}`,
      400,
      { ruleId: 'materialUsageIsProjectLevel', projectStatus: project.status },
    );
  }

  // Step 3: Validate user-supplied fields
  if (!input.materialName || input.materialName.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'materialName must be non-empty.', 400, {
      field: 'materialName',
    });
  }
  if (!(input.quantity > 0)) {
    throw new AppError('VALIDATION_ERROR', 'quantity must be greater than zero.', 400, {
      field: 'quantity',
    });
  }
  if (!VALID_UNITS.includes(input.unit as MaterialUsageUnit)) {
    throw new AppError('VALIDATION_ERROR', `unit must be one of [kg, liter, meter, unit, bag, box].`, 400, {
      field: 'unit',
      value: input.unit,
    });
  }
  if (!(input.unitCost >= 0)) {
    throw new AppError('VALIDATION_ERROR', 'unitCost must be greater than or equal to zero.', 400, {
      field: 'unitCost',
    });
  }
  const parsedDate = new Date(input.usageDate);
  if (isNaN(parsedDate.getTime())) {
    throw new AppError('VALIDATION_ERROR', 'usageDate must be a valid date string.', 400, {
      field: 'usageDate',
    });
  }

  // Step 4: Resolve context values
  const materialUsageId = ctx.idGenerator.newId();
  const now = ctx.clock.nowIso();
  const recordedBy = ctx.sessionContext.actorId ?? null;

  // rule: jobCostDerivation — status 'posted' is the signal that this record contributes to job cost;
  // no separate write is needed, the domain invariant includes only 'posted' records in aggregation.
  const record: MaterialUsage = {
    materialUsageId,
    projectId: input.projectId,
    status: 'posted',
    materialName: input.materialName,
    quantity: input.quantity,
    unit: input.unit as MaterialUsageUnit,
    unitCost: input.unitCost,
    costCode: input.costCode ?? null,
    usageDate: input.usageDate,
    recordedBy,
    voidedAt: null,
    voidedReason: null,
    createdAt: now,
  };

  // Step 7: Persist inside a single transaction
  await ctx.data.runInTransaction(async () => {
    await materialUsages.append(record);
  });

  // Step 8: Return the created record
  return {
    materialUsageId: record.materialUsageId,
    projectId: record.projectId,
    status: record.status,
    materialName: record.materialName,
    quantity: record.quantity,
    unit: record.unit,
    unitCost: record.unitCost,
    costCode: record.costCode ?? undefined,
    usageDate: record.usageDate,
    recordedBy: record.recordedBy ?? undefined,
    createdAt: record.createdAt,
  };
}
