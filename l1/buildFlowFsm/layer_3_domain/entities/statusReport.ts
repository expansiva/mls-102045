/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.ts" enhancement="_blank"/>

export type StatusReportStatus = 'draft' | 'reviewed' | 'shared';

export type DelayRiskLevel = 'low' | 'medium' | 'high';

export interface DelayRiskSuggestion {
  delayRiskSuggestionId: string;
  statusReportId: string;
  workTaskId: string;
  riskLevel: DelayRiskLevel;
  reason: string;
  suggestedAction: string | null;
  acknowledged: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface StatusReport {
  statusReportId: string;
  projectId: string;
  status: StatusReportStatus;
  reportPeriodStart: string;
  reportPeriodEnd: string;
  summary: string;
  tasksOverview: string | null;
  timeLogsOverview: string | null;
  materialsOverview: string | null;
  delayRiskAssessment: string | null;
  pmNotes: string | null;
  generatedAt: string;
  reviewedAt: string | null;
  sharedAt: string | null;
  createdAt: string;
  updatedAt: string;
  delayRiskSuggestions: DelayRiskSuggestion[];
}

export const STATUS_REPORT_STATUS_TRANSITIONS: Record<StatusReportStatus, StatusReportStatus[]> = {
  draft: ['reviewed'],
  reviewed: ['shared'],
  shared: [],
};

export function canTransitionStatusReport(
  from: StatusReportStatus,
  to: StatusReportStatus,
): boolean {
  return STATUS_REPORT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function validatePeriod(
  report: Pick<StatusReport, 'reportPeriodStart' | 'reportPeriodEnd'>,
): boolean {
  return report.reportPeriodStart <= report.reportPeriodEnd;
}

export function validateTimestampOrdering(
  report: Pick<StatusReport, 'createdAt' | 'generatedAt' | 'reviewedAt' | 'sharedAt' | 'updatedAt'>,
): boolean {
  if (report.createdAt > report.generatedAt) return false;
  if (report.reviewedAt !== null && report.generatedAt > report.reviewedAt) return false;
  if (report.sharedAt !== null && report.reviewedAt !== null && report.reviewedAt > report.sharedAt) {
    return false;
  }
  if (report.createdAt > report.updatedAt) return false;
  return true;
}

export function validateStatusTimestamps(
  report: Pick<StatusReport, 'status' | 'reviewedAt' | 'sharedAt'>,
): boolean {
  switch (report.status) {
    case 'draft':
      return report.reviewedAt === null && report.sharedAt === null;
    case 'reviewed':
      return report.reviewedAt !== null && report.sharedAt === null;
    case 'shared':
      return report.reviewedAt !== null && report.sharedAt !== null;
    default:
      return false;
  }
}

export function validatePmNotes(
  report: Pick<StatusReport, 'status' | 'pmNotes'>,
): boolean {
  if (report.pmNotes !== null && report.status === 'draft') return false;
  return true;
}

export function validateDelayRiskSuggestions(
  report: Pick<StatusReport, 'statusReportId' | 'status' | 'generatedAt' | 'updatedAt' | 'delayRiskSuggestions'>,
): boolean {
  for (const suggestion of report.delayRiskSuggestions) {
    if (suggestion.statusReportId !== report.statusReportId) return false;
    if (suggestion.createdAt > report.generatedAt) return false;
    if (suggestion.updatedAt > report.updatedAt) return false;
    if (suggestion.acknowledged && report.status === 'draft') return false;
  }
  return true;
}

export function validateStatusReport(report: StatusReport): boolean {
  if (!validatePeriod(report)) return false;
  if (!validateTimestampOrdering(report)) return false;
  if (!validateStatusTimestamps(report)) return false;
  if (!validatePmNotes(report)) return false;
  if (!validateDelayRiskSuggestions(report)) return false;
  return true;
}
