/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/changeOrderWorkspace.cmdUpdateChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/changeOrderWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdUpdateChangeOrder (command); Output kind=object; route buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder.

export interface CmdUpdateChangeOrderInput {
  changeOrderId: string;
  title?: string;
  description?: string;
  impactType?: string;
  costAdjustment?: number;
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
