/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryBillingSummaries.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IBillingSummaryRepository, BillingSummaryListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { BillingSummary, BillingSummaryStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface QueryBillingSummariesInput {
  projectId?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface BillingSummaryItem {
  billingSummaryId: string;
  projectId: string;
  projectName: string;
  status: string;
  periodStart: string;
  periodEnd: string;
  laborCost: number;
  materialCost: number;
  changeOrderCost: number;
  totalCost: number;
  sharedAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface QueryBillingSummariesOutput {
  billingSummaries: BillingSummaryItem[];
  total: number;
}

export async function queryBillingSummaries(
  ctx: RequestContext,
  input: QueryBillingSummariesInput,
): Promise<QueryBillingSummariesOutput> {
  // Step 1: Resolve pagination defaults and validate
  const page = input.page ?? 1;
  const pageSize = input.pageSize ?? 20;

  if (page < 1) {
    throw new AppError('VALIDATION_ERROR', 'page must be greater than or equal to 1.', 400, { field: 'page' });
  }
  if (pageSize < 1) {
    throw new AppError('VALIDATION_ERROR', 'pageSize must be greater than or equal to 1.', 400, { field: 'pageSize' });
  }

  // Step 2: Build filter criteria
  const filter: BillingSummaryListFilter = {};
  if (input.projectId) {
    filter.projectId = input.projectId;
  }
  if (input.status) {
    if (input.status !== 'draft' && input.status !== 'shared') {
      throw new AppError('VALIDATION_ERROR', 'status must be "draft" or "shared".', 400, { field: 'status' });
    }
    filter.status = input.status as BillingSummaryStatus;
  }

  // Step 3: Query the BillingSummary port
  const billingSummaries = resolveRepository<IBillingSummaryRepository>(ctx, 'BillingSummary');
  const allMatching = await billingSummaries.list(filter);

  // Sort by periodStart desc then createdAt desc
  const sorted = [...allMatching].sort((a, b) => {
    if (a.periodStart !== b.periodStart) {
      return a.periodStart < b.periodStart ? 1 : -1;
    }
    return a.createdAt < b.createdAt ? 1 : a.createdAt > b.createdAt ? -1 : 0;
  });

  const total = sorted.length;
  const offset = (page - 1) * pageSize;
  const pageItems = sorted.slice(offset, offset + pageSize);

  // Step 4: Collect unique projectId values
  const projectIds = new Set<string>();
  for (const item of pageItems) {
    projectIds.add(item.projectId);
  }

  // Step 5: Bulk-load Project entities and build lookup map
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const projectNameMap = new Map<string, string>();
  for (const pid of projectIds) {
    try {
      const project: Project = await projects.getById(pid);
      projectNameMap.set(pid, project.name);
    } catch {
      // Project may have been removed; leave name as fallback
      projectNameMap.set(pid, pid);
    }
  }

  // Step 6 & 7: Apply rules and project to client-facing shape
  // rule: onlyApprovedChangeOrdersAffectCosting — stored changeOrderCost and totalCost already
  //   reflect only approved change orders (enforced at write time). Return stored values as-is.
  // rule: billingSummaryClientFacing — project only client-facing cost fields plus identity,
  //   period, status, and timestamps. Never include internal material cost-code breakdown.
  const billingSummariesOutput: BillingSummaryItem[] = pageItems.map((summary: BillingSummary) => ({
    billingSummaryId: summary.billingSummaryId,
    projectId: summary.projectId,
    projectName: projectNameMap.get(summary.projectId) ?? summary.projectId,
    status: summary.status,
    periodStart: summary.periodStart,
    periodEnd: summary.periodEnd,
    laborCost: summary.laborCost,
    materialCost: summary.materialCost,
    changeOrderCost: summary.changeOrderCost,
    totalCost: summary.totalCost,
    sharedAt: summary.sharedAt ?? undefined,
    createdAt: summary.createdAt,
    updatedAt: summary.updatedAt,
  }));

  return {
    billingSummaries: billingSummariesOutput,
    total,
  };
}
