/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/clientStatusWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace clientStatusWorkspace; one contract file per workspace, all bffCalls).

// bffCall viewStatusReport (query) — Output kind=object; route buildFlowFsm.clientStatusWorkspace.viewStatusReport.
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
  tasksOverview: Record<string, unknown>;
  timeLogsOverview: Record<string, unknown>;
  materialsOverview: Record<string, unknown>;
  delayRiskAssessment: Record<string, unknown>;
  pmNotes: string;
  generatedAt: string;
  sharedAt: string;
}
export const viewStatusReportRoute = 'buildFlowFsm.clientStatusWorkspace.viewStatusReport' as const;
