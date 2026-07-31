/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/changeOrderWorkspace.cmdCreateChangeOrder.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/changeOrderWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall cmdCreateChangeOrder (command); Output kind=object; route buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder.

export interface CmdCreateChangeOrderInput {
  projectId: string;
  title: string;
  description?: string;
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
