/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.listChangeOrders.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectDetailWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall listChangeOrders (query); Output kind=paginated; route buildFlowFsm.projectDetailWorkspace.listChangeOrders.

export interface ListChangeOrdersInput {
  projectId: string;
  status?: string;
  impactType?: string;
  page?: number;
  pageSize?: number;
}

export interface ListChangeOrdersChangeOrdersItem {
  changeOrderId: string;
  title: string;
  impactType: string;
  costAdjustment: number;
  scheduleAdjustmentDays: number;
  status: string;
  approvedAt: string;
  rejectedAt: string;
  createdAt: string;
}

export interface ListChangeOrdersOutput {
  changeOrders: ListChangeOrdersChangeOrdersItem[];
  total: number;
}

export const listChangeOrdersRoute = 'buildFlowFsm.projectDetailWorkspace.listChangeOrders' as const;
