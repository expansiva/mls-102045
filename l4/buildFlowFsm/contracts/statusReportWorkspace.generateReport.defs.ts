/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/statusReportWorkspace.generateReport.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/statusReportWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall generateReport (command); Output kind=object; route buildFlowFsm.statusReportWorkspace.generateReport.

export interface GenerateReportInput {
  projectId: string;
  reportPeriodStart: string;
  reportPeriodEnd: string;
}

export interface GenerateReportOutput {
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
  generatedAt: string;
  createdAt: string;
  updatedAt: string;
}

export const generateReportRoute = 'buildFlowFsm.statusReportWorkspace.generateReport' as const;
