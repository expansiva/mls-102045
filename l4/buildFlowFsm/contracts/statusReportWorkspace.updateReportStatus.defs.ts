/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/statusReportWorkspace.updateReportStatus.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/statusReportWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall updateReportStatus (command); Output kind=object; route buildFlowFsm.statusReportWorkspace.updateReportStatus.

export interface UpdateReportStatusInput {
  statusReportId: string;
  status: string;
}

export interface UpdateReportStatusOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  reviewedAt: string;
  sharedAt: string;
  updatedAt: string;
}

export const updateReportStatusRoute = 'buildFlowFsm.statusReportWorkspace.updateReportStatus' as const;
