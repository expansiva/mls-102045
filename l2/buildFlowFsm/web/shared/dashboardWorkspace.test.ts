/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmDashboardWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.js';
import type { GetDashboardSummaryInput, GetDashboardSummaryOutput, GetProjectListInput, GetProjectListOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/dashboardWorkspace.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmDashboardWorkspaceBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_getDashboardSummaryState = Assert<Assignable<typeof page.getDashboardSummaryState, "idle" | "loading" | "success" | "error">>;
type _State_getDashboardSummaryStatus = Assert<Assignable<typeof page.getDashboardSummaryStatus, string | GetDashboardSummaryInput["status"]>>;
type _State_getDashboardSummaryPage = Assert<Assignable<typeof page.getDashboardSummaryPage, string | GetDashboardSummaryInput["page"]>>;
type _State_getDashboardSummaryPageSize = Assert<Assignable<typeof page.getDashboardSummaryPageSize, string | GetDashboardSummaryInput["pageSize"]>>;
type _State_getDashboardSummaryData = Assert<Assignable<typeof page.getDashboardSummaryData, GetDashboardSummaryOutput>>;
type _State_getProjectListState = Assert<Assignable<typeof page.getProjectListState, "idle" | "loading" | "success" | "error">>;
type _State_getProjectListStatus = Assert<Assignable<typeof page.getProjectListStatus, string | GetProjectListInput["status"]>>;
type _State_getProjectListPage = Assert<Assignable<typeof page.getProjectListPage, string | GetProjectListInput["page"]>>;
type _State_getProjectListPageSize = Assert<Assignable<typeof page.getProjectListPageSize, string | GetProjectListInput["pageSize"]>>;
type _State_getProjectListData = Assert<Assignable<typeof page.getProjectListData, GetProjectListOutput>>;
type _Action_loadGetDashboardSummary = Assert<Assignable<typeof page.loadGetDashboardSummary, (...args: any[]) => unknown>>;
type _Handler_handleGetDashboardSummaryClick = Assert<Assignable<typeof page.handleGetDashboardSummaryClick, (...args: any[]) => unknown>>;
type _Action_loadGetProjectList = Assert<Assignable<typeof page.loadGetProjectList, (...args: any[]) => unknown>>;
type _Handler_handleGetProjectListClick = Assert<Assignable<typeof page.handleGetProjectListClick, (...args: any[]) => unknown>>;
type _Action_setGetDashboardSummaryStatus = Assert<Assignable<typeof page.setGetDashboardSummaryStatus, (...args: any[]) => unknown>>;
type _Handler_handleGetDashboardSummaryStatusChange = Assert<Assignable<typeof page.handleGetDashboardSummaryStatusChange, (...args: any[]) => unknown>>;
type _Action_setGetDashboardSummaryPage = Assert<Assignable<typeof page.setGetDashboardSummaryPage, (...args: any[]) => unknown>>;
type _Handler_handleGetDashboardSummaryPageChange = Assert<Assignable<typeof page.handleGetDashboardSummaryPageChange, (...args: any[]) => unknown>>;
type _Action_setGetDashboardSummaryPageSize = Assert<Assignable<typeof page.setGetDashboardSummaryPageSize, (...args: any[]) => unknown>>;
type _Handler_handleGetDashboardSummaryPageSizeChange = Assert<Assignable<typeof page.handleGetDashboardSummaryPageSizeChange, (...args: any[]) => unknown>>;
type _Action_setGetProjectListStatus = Assert<Assignable<typeof page.setGetProjectListStatus, (...args: any[]) => unknown>>;
type _Handler_handleGetProjectListStatusChange = Assert<Assignable<typeof page.handleGetProjectListStatusChange, (...args: any[]) => unknown>>;
type _Action_setGetProjectListPage = Assert<Assignable<typeof page.setGetProjectListPage, (...args: any[]) => unknown>>;
type _Handler_handleGetProjectListPageChange = Assert<Assignable<typeof page.handleGetProjectListPageChange, (...args: any[]) => unknown>>;
type _Action_setGetProjectListPageSize = Assert<Assignable<typeof page.setGetProjectListPageSize, (...args: any[]) => unknown>>;
type _Handler_handleGetProjectListPageSizeChange = Assert<Assignable<typeof page.handleGetProjectListPageSizeChange, (...args: any[]) => unknown>>;

export {};