/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.ts" enhancement="_blank"/>
export type BillingSummaryStatus = 'draft' | 'shared';

export interface BillingSummary {
  billingSummaryId: string;
  projectId: string;
  status: BillingSummaryStatus;
  periodStart: string;
  periodEnd: string;
  laborCost: number;
  materialCost: number;
  changeOrderCost: number;
  totalCost: number;
  sharedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export const BILLING_SUMMARY_STATUS_TRANSITIONS: Record<BillingSummaryStatus, BillingSummaryStatus[]> = {
  draft: ['shared'],
  shared: [],
};

export function canTransitionBillingSummary(from: BillingSummaryStatus, to: BillingSummaryStatus): boolean {
  return BILLING_SUMMARY_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function billingSummaryTotalEqualsComponents(summary: Pick<BillingSummary, 'laborCost' | 'materialCost' | 'changeOrderCost' | 'totalCost'>): boolean {
  return summary.totalCost === summary.laborCost + summary.materialCost + summary.changeOrderCost;
}

export function billingSummaryPeriodIsValid(summary: Pick<BillingSummary, 'periodStart' | 'periodEnd'>): boolean {
  return summary.periodEnd >= summary.periodStart;
}

export function billingSummarySharedAtIsValid(summary: Pick<BillingSummary, 'status' | 'sharedAt' | 'createdAt'>): boolean {
  if (summary.status === 'shared') {
    if (summary.sharedAt === null) return false;
    return summary.sharedAt >= summary.createdAt;
  }
  return summary.sharedAt === null;
}

export function billingSummaryTimestampsAreValid(summary: Pick<BillingSummary, 'createdAt' | 'updatedAt'>): boolean {
  return summary.createdAt <= summary.updatedAt;
}

export function billingSummaryCostsAreNonNegative(summary: Pick<BillingSummary, 'laborCost' | 'materialCost' | 'changeOrderCost' | 'totalCost'>): boolean {
  return (
    summary.laborCost >= 0 &&
    summary.materialCost >= 0 &&
    summary.changeOrderCost >= 0 &&
    summary.totalCost >= 0
  );
}

export function recomputeBillingSummaryTotal(
  laborCost: number,
  materialCost: number,
  changeOrderCost: number,
): number {
  return laborCost + materialCost + changeOrderCost;
}

export function validateBillingSummaryInvariants(summary: BillingSummary): string[] {
  const errors: string[] = [];

  if (!billingSummaryTotalEqualsComponents(summary)) {
    errors.push('totalCost must equal laborCost + materialCost + changeOrderCost.');
  }

  if (!billingSummaryPeriodIsValid(summary)) {
    errors.push('periodEnd must be on or after periodStart.');
  }

  if (!billingSummarySharedAtIsValid(summary)) {
    errors.push('sharedAt is required when status is "shared" and must be null when status is "draft"; when present it must be >= createdAt.');
  }

  if (!billingSummaryTimestampsAreValid(summary)) {
    errors.push('createdAt must be less than or equal to updatedAt.');
  }

  if (!billingSummaryCostsAreNonNegative(summary)) {
    errors.push('All monetary fields must be non-negative.');
  }

  return errors;
}
