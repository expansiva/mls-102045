/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmStatusReportWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.js';
import type { GenerateReportInput, GenerateReportOutput, UpdateReportContentInput, UpdateReportContentOutput, UpdateReportStatusInput, UpdateReportStatusOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/statusReportWorkspace.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmStatusReportWorkspaceBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_generateReportState = Assert<Assignable<typeof page.generateReportState, "idle" | "loading" | "success" | "error">>;
type _State_generateReportProjectId = Assert<Assignable<typeof page.generateReportProjectId, string | GenerateReportInput["projectId"]>>;
type _State_generateReportReportPeriodStart = Assert<Assignable<typeof page.generateReportReportPeriodStart, string | GenerateReportInput["reportPeriodStart"]>>;
type _State_generateReportReportPeriodEnd = Assert<Assignable<typeof page.generateReportReportPeriodEnd, string | GenerateReportInput["reportPeriodEnd"]>>;
type _State_generateReportOutput = Assert<Assignable<typeof page.generateReportOutput, GenerateReportOutput | null>>;
type _State_generateReportError = Assert<Assignable<typeof page.generateReportError, string>>;
type _State_updateReportContentState = Assert<Assignable<typeof page.updateReportContentState, "idle" | "loading" | "success" | "error">>;
type _State_updateReportContentStatusReportId = Assert<Assignable<typeof page.updateReportContentStatusReportId, string | UpdateReportContentInput["statusReportId"]>>;
type _State_updateReportContentSummary = Assert<Assignable<typeof page.updateReportContentSummary, string | UpdateReportContentInput["summary"]>>;
type _State_updateReportContentTasksOverview = Assert<Assignable<typeof page.updateReportContentTasksOverview, string | UpdateReportContentInput["tasksOverview"]>>;
type _State_updateReportContentTimeLogsOverview = Assert<Assignable<typeof page.updateReportContentTimeLogsOverview, string | UpdateReportContentInput["timeLogsOverview"]>>;
type _State_updateReportContentMaterialsOverview = Assert<Assignable<typeof page.updateReportContentMaterialsOverview, string | UpdateReportContentInput["materialsOverview"]>>;
type _State_updateReportContentDelayRiskAssessment = Assert<Assignable<typeof page.updateReportContentDelayRiskAssessment, string | UpdateReportContentInput["delayRiskAssessment"]>>;
type _State_updateReportContentPmNotes = Assert<Assignable<typeof page.updateReportContentPmNotes, string | UpdateReportContentInput["pmNotes"]>>;
type _State_updateReportContentOutput = Assert<Assignable<typeof page.updateReportContentOutput, UpdateReportContentOutput | null>>;
type _State_updateReportContentError = Assert<Assignable<typeof page.updateReportContentError, string>>;
type _State_updateReportStatusState = Assert<Assignable<typeof page.updateReportStatusState, "idle" | "loading" | "success" | "error">>;
type _State_updateReportStatusStatusReportId = Assert<Assignable<typeof page.updateReportStatusStatusReportId, string | UpdateReportStatusInput["statusReportId"]>>;
type _State_updateReportStatusStatus = Assert<Assignable<typeof page.updateReportStatusStatus, string | UpdateReportStatusInput["status"]>>;
type _State_updateReportStatusOutput = Assert<Assignable<typeof page.updateReportStatusOutput, UpdateReportStatusOutput | null>>;
type _State_updateReportStatusError = Assert<Assignable<typeof page.updateReportStatusError, string>>;
type _Action_generateReport = Assert<Assignable<typeof page.generateReport, (...args: any[]) => unknown>>;
type _Handler_handleGenerateReportClick = Assert<Assignable<typeof page.handleGenerateReportClick, (...args: any[]) => unknown>>;
type _Action_updateReportContent = Assert<Assignable<typeof page.updateReportContent, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportContentClick = Assert<Assignable<typeof page.handleUpdateReportContentClick, (...args: any[]) => unknown>>;
type _Action_updateReportStatus = Assert<Assignable<typeof page.updateReportStatus, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportStatusClick = Assert<Assignable<typeof page.handleUpdateReportStatusClick, (...args: any[]) => unknown>>;
type _Action_setGenerateReportProjectId = Assert<Assignable<typeof page.setGenerateReportProjectId, (...args: any[]) => unknown>>;
type _Handler_handleGenerateReportProjectIdChange = Assert<Assignable<typeof page.handleGenerateReportProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setGenerateReportReportPeriodStart = Assert<Assignable<typeof page.setGenerateReportReportPeriodStart, (...args: any[]) => unknown>>;
type _Handler_handleGenerateReportReportPeriodStartChange = Assert<Assignable<typeof page.handleGenerateReportReportPeriodStartChange, (...args: any[]) => unknown>>;
type _Action_setGenerateReportReportPeriodEnd = Assert<Assignable<typeof page.setGenerateReportReportPeriodEnd, (...args: any[]) => unknown>>;
type _Handler_handleGenerateReportReportPeriodEndChange = Assert<Assignable<typeof page.handleGenerateReportReportPeriodEndChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReportContentStatusReportId = Assert<Assignable<typeof page.setUpdateReportContentStatusReportId, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportContentStatusReportIdChange = Assert<Assignable<typeof page.handleUpdateReportContentStatusReportIdChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReportContentSummary = Assert<Assignable<typeof page.setUpdateReportContentSummary, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportContentSummaryChange = Assert<Assignable<typeof page.handleUpdateReportContentSummaryChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReportContentTasksOverview = Assert<Assignable<typeof page.setUpdateReportContentTasksOverview, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportContentTasksOverviewChange = Assert<Assignable<typeof page.handleUpdateReportContentTasksOverviewChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReportContentTimeLogsOverview = Assert<Assignable<typeof page.setUpdateReportContentTimeLogsOverview, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportContentTimeLogsOverviewChange = Assert<Assignable<typeof page.handleUpdateReportContentTimeLogsOverviewChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReportContentMaterialsOverview = Assert<Assignable<typeof page.setUpdateReportContentMaterialsOverview, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportContentMaterialsOverviewChange = Assert<Assignable<typeof page.handleUpdateReportContentMaterialsOverviewChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReportContentDelayRiskAssessment = Assert<Assignable<typeof page.setUpdateReportContentDelayRiskAssessment, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportContentDelayRiskAssessmentChange = Assert<Assignable<typeof page.handleUpdateReportContentDelayRiskAssessmentChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReportContentPmNotes = Assert<Assignable<typeof page.setUpdateReportContentPmNotes, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportContentPmNotesChange = Assert<Assignable<typeof page.handleUpdateReportContentPmNotesChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReportStatusStatusReportId = Assert<Assignable<typeof page.setUpdateReportStatusStatusReportId, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportStatusStatusReportIdChange = Assert<Assignable<typeof page.handleUpdateReportStatusStatusReportIdChange, (...args: any[]) => unknown>>;
type _Action_setUpdateReportStatusStatus = Assert<Assignable<typeof page.setUpdateReportStatusStatus, (...args: any[]) => unknown>>;
type _Handler_handleUpdateReportStatusStatusChange = Assert<Assignable<typeof page.handleUpdateReportStatusStatusChange, (...args: any[]) => unknown>>;

export {};