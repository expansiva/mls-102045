/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewBillingSummary.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IBillingSummaryRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { BillingSummary } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface ViewBillingSummaryInput {
  billingSummaryId: string;
}

export interface ViewBillingSummaryOutput {
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
}

export async function viewBillingSummary(
  ctx: RequestContext,
  input: ViewBillingSummaryInput,
): Promise<ViewBillingSummaryOutput> {
  // 1. Resolve clientId from the authenticated session (actorSession) — never sent by the caller.
  const clientId = ctx.sessionContext.actorSession.actorId;
  if (!clientId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Authenticated client identity is required to view a billing summary.',
      401,
      { ruleId: 'clientBillingAccess' },
    );
  }

  const billingSummaries = resolveRepository<IBillingSummaryRepository>(ctx, 'BillingSummary');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  // 2. Load the BillingSummary by id.
  const summary: BillingSummary = await billingSummaries.getById(input.billingSummaryId);

  // 3. rule: billingSummaryClientFacing — only summaries with status 'shared' are visible to the client.
  if (String(summary.status) !== 'shared') {
    throw new AppError(
      'VALIDATION_ERROR',
      'billingSummaryClientFacing: summary is not yet shared with the client.',
      400,
      { ruleId: 'billingSummaryClientFacing' },
    );
  }

  // 4. Load the related Project.
  const project: Project = await projects.getById(summary.projectId);

  // 5. rule: clientBillingAccess — the billing summary must belong to the authenticated client's project.
  if (project.clientId !== clientId) {
    throw new AppError(
      'VALIDATION_ERROR',
      'clientBillingAccess: billing summary does not belong to the authenticated client\'s project.',
      403,
      { ruleId: 'clientBillingAccess' },
    );
  }

  // 6. rule: onlyApprovedChangeOrdersAffectCosting — the stored changeOrderCost already reflects
  //    only approved change orders (enforced at write time); no re-computation is needed here.
  //    The value is returned as-is in the client-facing projection below.

  // 7. Assemble the client-facing output projection (no internal cost-code or draft-only fields).
  return {
    billingSummaryId: summary.billingSummaryId,
    projectId: summary.projectId,
    projectName: project.name,
    status: summary.status,
    periodStart: summary.periodStart,
    periodEnd: summary.periodEnd,
    laborCost: summary.laborCost,
    materialCost: summary.materialCost,
    changeOrderCost: summary.changeOrderCost,
    totalCost: summary.totalCost,
    sharedAt: summary.sharedAt ?? undefined,
  };
}
