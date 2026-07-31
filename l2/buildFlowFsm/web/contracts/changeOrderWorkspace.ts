/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/changeOrderWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace changeOrderWorkspace; one contract file per workspace, all bffCalls).

// bffCall cmdCreateChangeOrder (command) — Output kind=object; route buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder.
export interface CmdCreateChangeOrderInput {
  projectId: string;
  title: string;
  description: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays?: number;
}
export interface CmdCreateChangeOrderOutput {
  changeOrderId: string;
  projectId: string;
  title: string;
  description: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays: number;
  status: string;
  createdAt: string;
}
export const cmdCreateChangeOrderRoute = 'buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder' as const;

// bffCall cmdUpdateChangeOrder (command) — Output kind=object; route buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder.
export interface CmdUpdateChangeOrderInput {
  changeOrderId: string;
  title: string;
  description: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays?: number;
}
export interface CmdUpdateChangeOrderOutput {
  changeOrderId: string;
  projectId: string;
  title: string;
  description: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays: number;
  status: string;
  updatedAt: string;
}
export const cmdUpdateChangeOrderRoute = 'buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder' as const;

// bffCall cmdUpdateChangeOrderStatus (command) — Output kind=object; route buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus.
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
