/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryMaterialUsages.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IMaterialUsageRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { MaterialUsage } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

export interface QueryMaterialUsagesInput {
  projectId: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface QueryMaterialUsagesItem {
  materialUsageId: string;
  projectId: string;
  status: string;
  materialName: string;
  quantity: number;
  unit: string;
  unitCost: number;
  costCode: string | null;
  usageDate: string;
  recordedBy: string | null;
  voidedAt: string | null;
  voidedReason: string | null;
  createdAt: string;
}

export interface QueryMaterialUsagesOutput {
  materialUsages: QueryMaterialUsagesItem[];
  total: number;
}

export async function queryMaterialUsages(
  ctx: RequestContext,
  input: QueryMaterialUsagesInput,
): Promise<QueryMaterialUsagesOutput> {
  if (!input.projectId) {
    throw new AppError('VALIDATION_ERROR', 'projectId is required.', 400, { field: 'projectId' });
  }

  const repo = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');

  // rule: materialUsageIsProjectLevel — all material usage records are scoped to the given projectId
  const allRecords = await repo.listByProjectId(input.projectId);

  // Apply optional status filter
  let filtered = allRecords;
  if (input.status === 'posted' || input.status === 'voided') {
    filtered = allRecords.filter((r) => r.status === input.status);
  }

  // Sort by usageDate ascending then createdAt ascending
  const sorted = filtered.slice().sort((a, b) => {
    if (a.usageDate < b.usageDate) return -1;
    if (a.usageDate > b.usageDate) return 1;
    if (a.createdAt < b.createdAt) return -1;
    if (a.createdAt > b.createdAt) return 1;
    return 0;
  });

  const total = sorted.length;

  // Pagination
  const page = input.page && input.page > 0 ? input.page : 1;
  const pageSize = input.pageSize && input.pageSize > 0 ? input.pageSize : 50;
  const startIndex = (page - 1) * pageSize;
  const paged = sorted.slice(startIndex, startIndex + pageSize);

  // rule: jobCostDerivation — each returned record includes materialName, quantity, unit, unitCost, and status
  const materialUsages: QueryMaterialUsagesItem[] = paged.map((r: MaterialUsage) => ({
    materialUsageId: r.materialUsageId,
    projectId: r.projectId,
    status: r.status,
    materialName: r.materialName,
    quantity: r.quantity,
    unit: r.unit,
    unitCost: r.unitCost,
    costCode: r.costCode,
    usageDate: r.usageDate,
    recordedBy: r.recordedBy,
    voidedAt: r.voidedAt,
    voidedReason: r.voidedReason,
    createdAt: r.createdAt,
  }));

  return { materialUsages, total };
}
