/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/changeOrderWorkspace.cmdUpdateChangeOrderStatus.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/changeOrderWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateChangeOrderStatus (command); Output kind=object; route buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus.

export interface CmdUpdateChangeOrderStatusInput {
  changeOrderId: string;
  status: string;
  rejectionReason?: string;
}

export interface CmdUpdateChangeOrderStatusOutput {
  changeOrderId: string;
  projectId: string;
  title: string;
  status: string;
  costAdjustment: number;
  scheduleAdjustmentDays: number;
  rejectionReason: string;
  approvedAt: string;
  rejectedAt: string;
  updatedAt: string;
}

export const cmdUpdateChangeOrderStatusRoute = 'buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus' as const;
