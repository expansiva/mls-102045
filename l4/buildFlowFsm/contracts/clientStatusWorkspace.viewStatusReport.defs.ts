/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/clientStatusWorkspace.viewStatusReport.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/clientStatusWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall viewStatusReport (query); Output kind=object; route buildFlowFsm.clientStatusWorkspace.viewStatusReport.

export interface ViewStatusReportInput {
  statusReportId: string;
  clientId: string;
}

export interface ViewStatusReportOutput {
  statusReportId: string;
  projectId: string;
  projectName: string;
  status: string;
  reportPeriodStart: string;
  reportPeriodEnd: string;
  summary: string;
  tasksOverview: string;
  timeLogsOverview: string;
  materialsOverview: string;
  delayRiskAssessment: string;
  pmNotes: string;
  generatedAt: string;
  sharedAt: string;
}

export const viewStatusReportRoute = 'buildFlowFsm.clientStatusWorkspace.viewStatusReport' as const;
