/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/statusReportWorkspace.updateReportContent.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/statusReportWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall updateReportContent (command); Output kind=object; route buildFlowFsm.statusReportWorkspace.updateReportContent.

export interface UpdateReportContentInput {
  statusReportId: string;
  summary?: string;
  tasksOverview?: string;
  timeLogsOverview?: string;
  materialsOverview?: string;
  delayRiskAssessment?: string;
  pmNotes?: string;
}

export interface UpdateReportContentOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  reportPeriodStart: string;
  reportPeriodEnd: string;
  summary: string;
  tasksOverview: string;
  timeLogsOverview: string;
  materialsOverview: string;
  delayRiskAssessment: string;
  pmNotes: string;
  updatedAt: string;
}

export const updateReportContentRoute = 'buildFlowFsm.statusReportWorkspace.updateReportContent' as const;
