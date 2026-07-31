/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/statusReportWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace statusReportWorkspace; one contract file per workspace, all bffCalls).

// bffCall generateReport (command) — Output kind=object; route buildFlowFsm.statusReportWorkspace.generateReport.
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

// bffCall updateReportContent (command) — Output kind=object; route buildFlowFsm.statusReportWorkspace.updateReportContent.
export interface UpdateReportContentInput {
  statusReportId: string;
  summary: string;
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

// bffCall updateReportStatus (command) — Output kind=object; route buildFlowFsm.statusReportWorkspace.updateReportStatus.
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
