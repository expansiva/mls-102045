/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmBillingSummaryWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';
import type { CreateBillingSummaryCmdInput, CreateBillingSummaryCmdOutput, ListBillingSummariesInput, ListBillingSummariesOutput, ShareBillingSummaryCmdInput, ShareBillingSummaryCmdOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/billingSummaryWorkspace.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmBillingSummaryWorkspaceBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_listBillingSummariesState = Assert<Assignable<typeof page.listBillingSummariesState, "idle" | "loading" | "success" | "error">>;
type _State_listBillingSummariesProjectId = Assert<Assignable<typeof page.listBillingSummariesProjectId, string | ListBillingSummariesInput["projectId"]>>;
type _State_listBillingSummariesStatus = Assert<Assignable<typeof page.listBillingSummariesStatus, string | ListBillingSummariesInput["status"]>>;
type _State_listBillingSummariesPage = Assert<Assignable<typeof page.listBillingSummariesPage, string | ListBillingSummariesInput["page"]>>;
type _State_listBillingSummariesPageSize = Assert<Assignable<typeof page.listBillingSummariesPageSize, string | ListBillingSummariesInput["pageSize"]>>;
type _State_listBillingSummariesData = Assert<Assignable<typeof page.listBillingSummariesData, ListBillingSummariesOutput>>;
type _State_createBillingSummaryCmdState = Assert<Assignable<typeof page.createBillingSummaryCmdState, "idle" | "loading" | "success" | "error">>;
type _State_createBillingSummaryCmdProjectId = Assert<Assignable<typeof page.createBillingSummaryCmdProjectId, string | CreateBillingSummaryCmdInput["projectId"]>>;
type _State_createBillingSummaryCmdPeriodStart = Assert<Assignable<typeof page.createBillingSummaryCmdPeriodStart, string | CreateBillingSummaryCmdInput["periodStart"]>>;
type _State_createBillingSummaryCmdPeriodEnd = Assert<Assignable<typeof page.createBillingSummaryCmdPeriodEnd, string | CreateBillingSummaryCmdInput["periodEnd"]>>;
type _State_createBillingSummaryCmdOutput = Assert<Assignable<typeof page.createBillingSummaryCmdOutput, CreateBillingSummaryCmdOutput | null>>;
type _State_createBillingSummaryCmdError = Assert<Assignable<typeof page.createBillingSummaryCmdError, string>>;
type _State_shareBillingSummaryCmdState = Assert<Assignable<typeof page.shareBillingSummaryCmdState, "idle" | "loading" | "success" | "error">>;
type _State_shareBillingSummaryCmdBillingSummaryId = Assert<Assignable<typeof page.shareBillingSummaryCmdBillingSummaryId, string | ShareBillingSummaryCmdInput["billingSummaryId"]>>;
type _State_shareBillingSummaryCmdStatus = Assert<Assignable<typeof page.shareBillingSummaryCmdStatus, string | ShareBillingSummaryCmdInput["status"]>>;
type _State_shareBillingSummaryCmdOutput = Assert<Assignable<typeof page.shareBillingSummaryCmdOutput, ShareBillingSummaryCmdOutput | null>>;
type _State_shareBillingSummaryCmdError = Assert<Assignable<typeof page.shareBillingSummaryCmdError, string>>;
type _Action_loadListBillingSummaries = Assert<Assignable<typeof page.loadListBillingSummaries, (...args: any[]) => unknown>>;
type _Handler_handleListBillingSummariesClick = Assert<Assignable<typeof page.handleListBillingSummariesClick, (...args: any[]) => unknown>>;
type _Action_createBillingSummaryCmd = Assert<Assignable<typeof page.createBillingSummaryCmd, (...args: any[]) => unknown>>;
type _Handler_handleCreateBillingSummaryCmdClick = Assert<Assignable<typeof page.handleCreateBillingSummaryCmdClick, (...args: any[]) => unknown>>;
type _Action_shareBillingSummaryCmd = Assert<Assignable<typeof page.shareBillingSummaryCmd, (...args: any[]) => unknown>>;
type _Handler_handleShareBillingSummaryCmdClick = Assert<Assignable<typeof page.handleShareBillingSummaryCmdClick, (...args: any[]) => unknown>>;
type _Action_setListBillingSummariesProjectId = Assert<Assignable<typeof page.setListBillingSummariesProjectId, (...args: any[]) => unknown>>;
type _Handler_handleListBillingSummariesProjectIdChange = Assert<Assignable<typeof page.handleListBillingSummariesProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setListBillingSummariesStatus = Assert<Assignable<typeof page.setListBillingSummariesStatus, (...args: any[]) => unknown>>;
type _Handler_handleListBillingSummariesStatusChange = Assert<Assignable<typeof page.handleListBillingSummariesStatusChange, (...args: any[]) => unknown>>;
type _Action_setListBillingSummariesPage = Assert<Assignable<typeof page.setListBillingSummariesPage, (...args: any[]) => unknown>>;
type _Handler_handleListBillingSummariesPageChange = Assert<Assignable<typeof page.handleListBillingSummariesPageChange, (...args: any[]) => unknown>>;
type _Action_setListBillingSummariesPageSize = Assert<Assignable<typeof page.setListBillingSummariesPageSize, (...args: any[]) => unknown>>;
type _Handler_handleListBillingSummariesPageSizeChange = Assert<Assignable<typeof page.handleListBillingSummariesPageSizeChange, (...args: any[]) => unknown>>;
type _Action_setCreateBillingSummaryCmdProjectId = Assert<Assignable<typeof page.setCreateBillingSummaryCmdProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCreateBillingSummaryCmdProjectIdChange = Assert<Assignable<typeof page.handleCreateBillingSummaryCmdProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCreateBillingSummaryCmdPeriodStart = Assert<Assignable<typeof page.setCreateBillingSummaryCmdPeriodStart, (...args: any[]) => unknown>>;
type _Handler_handleCreateBillingSummaryCmdPeriodStartChange = Assert<Assignable<typeof page.handleCreateBillingSummaryCmdPeriodStartChange, (...args: any[]) => unknown>>;
type _Action_setCreateBillingSummaryCmdPeriodEnd = Assert<Assignable<typeof page.setCreateBillingSummaryCmdPeriodEnd, (...args: any[]) => unknown>>;
type _Handler_handleCreateBillingSummaryCmdPeriodEndChange = Assert<Assignable<typeof page.handleCreateBillingSummaryCmdPeriodEndChange, (...args: any[]) => unknown>>;
type _Action_setShareBillingSummaryCmdBillingSummaryId = Assert<Assignable<typeof page.setShareBillingSummaryCmdBillingSummaryId, (...args: any[]) => unknown>>;
type _Handler_handleShareBillingSummaryCmdBillingSummaryIdChange = Assert<Assignable<typeof page.handleShareBillingSummaryCmdBillingSummaryIdChange, (...args: any[]) => unknown>>;
type _Action_setShareBillingSummaryCmdStatus = Assert<Assignable<typeof page.setShareBillingSummaryCmdStatus, (...args: any[]) => unknown>>;
type _Handler_handleShareBillingSummaryCmdStatusChange = Assert<Assignable<typeof page.handleShareBillingSummaryCmdStatusChange, (...args: any[]) => unknown>>;

export {};