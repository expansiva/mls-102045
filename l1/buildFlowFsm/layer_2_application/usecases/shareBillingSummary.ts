/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/shareBillingSummary.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IBillingSummaryRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.js';
import type { BillingSummary } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.js';
import { canTransitionBillingSummary, validateBillingSummaryInvariants } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.js';

export interface ShareBillingSummaryInput {
  billingSummaryId: string;
}

export interface ShareBillingSummaryOutput {
  billingSummaryId: string;
  projectId: string;
  status: string;
  periodStart: string;
  periodEnd: string;
  laborCost: number;
  materialCost: number;
  changeOrderCost: number;
  totalCost: number;
  sharedAt: string;
  updatedAt: string;
}

export async function shareBillingSummary(
  ctx: RequestContext,
  input: ShareBillingSummaryInput,
): Promise<ShareBillingSummaryOutput> {
  const summaries = resolveRepository<IBillingSummaryRepository>(ctx, 'BillingSummary');
  const now = ctx.clock.nowIso();

  return ctx.data.runInTransaction(async () => {
    // 1. Load the BillingSummary aggregate by billingSummaryId
    let summary: BillingSummary;
    try {
      summary = await summaries.getById(input.billingSummaryId);
    } catch {
      throw new AppError('VALIDATION_ERROR', 'BillingSummary not found', 400, {
        billingSummaryId: input.billingSummaryId,
      });
    }

    // 2. Validate the current status is 'draft' (rule: clientBillingAccess — only a draft billing summary can be shared)
    if (summary.status === 'shared') {
      throw new AppError('VALIDATION_ERROR', 'BillingSummary is already shared and cannot be shared again', 400, {
        ruleId: 'clientBillingAccess',
      });
    }

    // rule: clientBillingAccess — only a draft billing summary can be shared
    if (!canTransitionBillingSummary(summary.status, 'shared')) {
      throw new AppError('VALIDATION_ERROR', `BillingSummary in status "${summary.status}" cannot be shared.`, 400, {
        ruleId: 'clientBillingAccess',
        currentStatus: summary.status,
      });
    }

    // 3. Set status to 'shared', sharedAt and updatedAt to now
    const updated: BillingSummary = {
      ...summary,
      status: 'shared',
      sharedAt: now,
      updatedAt: now,
    };

    // Validate domain invariants before persisting
    const invariantErrors = validateBillingSummaryInvariants(updated);
    if (invariantErrors.length > 0) {
      throw new AppError('VALIDATION_ERROR', invariantErrors.join(' '), 400, {
        ruleId: 'billingSummaryInvariants',
        errors: invariantErrors,
      });
    }

    // 4. Save the updated BillingSummary aggregate
    await summaries.save(updated);

    // 5. Return the client-facing projection (rule: billingSummaryClientFacing — exposes only summary cost fields, never internal cost-code detail)
    // rule: billingSummaryClientFacing
    return {
      billingSummaryId: updated.billingSummaryId,
      projectId: updated.projectId,
      status: updated.status,
      periodStart: updated.periodStart,
      periodEnd: updated.periodEnd,
      laborCost: updated.laborCost,
      materialCost: updated.materialCost,
      changeOrderCost: updated.changeOrderCost,
      totalCost: updated.totalCost,
      sharedAt: updated.sharedAt as string,
      updatedAt: updated.updatedAt,
    };
  });
}
