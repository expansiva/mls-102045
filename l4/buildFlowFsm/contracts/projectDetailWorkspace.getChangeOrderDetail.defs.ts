/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.getChangeOrderDetail.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectDetailWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall getChangeOrderDetail (query); Output kind=object; route buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail.

export interface GetChangeOrderDetailInput {
  changeOrderId: string;
}

export interface GetChangeOrderDetailOutput {
  changeOrderId: string;
  projectId: string;
  title: string;
  description: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays: number;
  status: string;
  rejectionReason: string;
  approvedAt: string;
  rejectedAt: string;
  projectName: string;
  projectBudget: number;
  affectsJobCosting: boolean;
}

export const getChangeOrderDetailRoute = 'buildFlowFsm.projectDetailWorkspace.getChangeOrderDetail' as const;
