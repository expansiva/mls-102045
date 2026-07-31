/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.ts" enhancement="_blank"/>

export type ChangeOrderImpactType = 'scope' | 'cost' | 'schedule';
export type ChangeOrderStatus = 'draft' | 'pendingReview' | 'approved' | 'rejected';

export interface ChangeOrder {
  changeOrderId: string;
  projectId: string;
  title: string;
  description: string;
  impactType: ChangeOrderImpactType;
  costAdjustment: number;
  scheduleAdjustmentDays: number | null;
  status: ChangeOrderStatus;
  rejectionReason: string | null;
  approvedAt: string | null;
  rejectedAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export const CHANGE_ORDER_STATUS_TRANSITIONS: Record<ChangeOrderStatus, ChangeOrderStatus[]> = {
  draft: ['pendingReview'],
  pendingReview: ['approved', 'rejected'],
  approved: [],
  rejected: [],
};

export function canTransitionChangeOrder(from: ChangeOrderStatus, to: ChangeOrderStatus): boolean {
  return CHANGE_ORDER_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function changeOrderRequiresRejectionReason(
  status: ChangeOrderStatus,
  rejectionReason: string | null,
): boolean {
  if (status === 'rejected') {
    return rejectionReason !== null && rejectionReason.trim().length > 0;
  }
  return rejectionReason === null || rejectionReason.trim().length === 0;
}

export function changeOrderApprovedAtValid(
  status: ChangeOrderStatus,
  approvedAt: string | null,
): boolean {
  if (status === 'approved') {
    return approvedAt !== null;
  }
  return approvedAt === null;
}

export function changeOrderRejectedAtValid(
  status: ChangeOrderStatus,
  rejectedAt: string | null,
): boolean {
  if (status === 'rejected') {
    return rejectedAt !== null;
  }
  return rejectedAt === null;
}

export function changeOrderTimestampsMutuallyExclusive(
  approvedAt: string | null,
  rejectedAt: string | null,
): boolean {
  return !(approvedAt !== null && rejectedAt !== null);
}

export function changeOrderApprovedAtAfterCreatedAt(
  approvedAt: string | null,
  createdAt: string,
): boolean {
  if (approvedAt === null) return true;
  return approvedAt >= createdAt;
}

export function changeOrderRejectedAtAfterCreatedAt(
  rejectedAt: string | null,
  createdAt: string,
): boolean {
  if (rejectedAt === null) return true;
  return rejectedAt >= createdAt;
}

export function changeOrderUpdatedAtAfterCreatedAt(
  updatedAt: string,
  createdAt: string,
): boolean {
  return updatedAt >= createdAt;
}

export function changeOrderImpactTypeValid(
  impactType: ChangeOrderImpactType,
  costAdjustment: number,
  scheduleAdjustmentDays: number | null,
): boolean {
  if (impactType === 'schedule') {
    return scheduleAdjustmentDays !== null && scheduleAdjustmentDays !== 0;
  }
  if (impactType === 'cost') {
    return costAdjustment !== 0;
  }
  // scope: costAdjustment may be zero and scheduleAdjustmentDays may be null
  return true;
}

export function changeOrderCostAdjustmentRequired(costAdjustment: number): boolean {
  return costAdjustment !== null;
}

export function changeOrderIsApproved(status: ChangeOrderStatus): boolean {
  return status === 'approved';
}

export function changeOrderIsEligibleForJobCosting(status: ChangeOrderStatus): boolean {
  return status === 'approved';
}

export function validateChangeOrderInvariants(order: ChangeOrder): string[] {
  const errors: string[] = [];

  if (!changeOrderRequiresRejectionReason(order.status, order.rejectionReason)) {
    if (order.status === 'rejected') {
      errors.push('rejectionReason is required when status is rejected');
    } else {
      errors.push('rejectionReason must be empty when status is not rejected');
    }
  }

  if (!changeOrderApprovedAtValid(order.status, order.approvedAt)) {
    if (order.status === 'approved') {
      errors.push('approvedAt is required when status is approved');
    } else {
      errors.push('approvedAt must be null when status is not approved');
    }
  }

  if (!changeOrderRejectedAtValid(order.status, order.rejectedAt)) {
    if (order.status === 'rejected') {
      errors.push('rejectedAt is required when status is rejected');
    } else {
      errors.push('rejectedAt must be null when status is not rejected');
    }
  }

  if (!changeOrderTimestampsMutuallyExclusive(order.approvedAt, order.rejectedAt)) {
    errors.push('approvedAt and rejectedAt are mutually exclusive');
  }

  if (!changeOrderApprovedAtAfterCreatedAt(order.approvedAt, order.createdAt)) {
    errors.push('approvedAt must be greater than or equal to createdAt');
  }

  if (!changeOrderRejectedAtAfterCreatedAt(order.rejectedAt, order.createdAt)) {
    errors.push('rejectedAt must be greater than or equal to createdAt');
  }

  if (!changeOrderUpdatedAtAfterCreatedAt(order.updatedAt, order.createdAt)) {
    errors.push('updatedAt must be greater than or equal to createdAt');
  }

  if (!changeOrderImpactTypeValid(order.impactType, order.costAdjustment, order.scheduleAdjustmentDays)) {
    if (order.impactType === 'schedule') {
      errors.push('scheduleAdjustmentDays is required and must be non-zero when impactType is schedule');
    } else if (order.impactType === 'cost') {
      errors.push('costAdjustment must be non-zero when impactType is cost');
    }
  }

  return errors;
}
