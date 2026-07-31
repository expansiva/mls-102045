/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmMyTasksWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.js';
import type { GetWorkTaskDetailInput, GetWorkTaskDetailOutput, ListMyWorkTasksInput, ListMyWorkTasksOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/myTasksWorkspace.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmMyTasksWorkspaceBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_listMyWorkTasksState = Assert<Assignable<typeof page.listMyWorkTasksState, "idle" | "loading" | "success" | "error">>;
type _State_listMyWorkTasksAssignedWorkerId = Assert<Assignable<typeof page.listMyWorkTasksAssignedWorkerId, string | ListMyWorkTasksInput["assignedWorkerId"]>>;
type _State_listMyWorkTasksStatus = Assert<Assignable<typeof page.listMyWorkTasksStatus, string | ListMyWorkTasksInput["status"]>>;
type _State_listMyWorkTasksPage = Assert<Assignable<typeof page.listMyWorkTasksPage, string | ListMyWorkTasksInput["page"]>>;
type _State_listMyWorkTasksPageSize = Assert<Assignable<typeof page.listMyWorkTasksPageSize, string | ListMyWorkTasksInput["pageSize"]>>;
type _State_listMyWorkTasksData = Assert<Assignable<typeof page.listMyWorkTasksData, ListMyWorkTasksOutput>>;
type _State_getWorkTaskDetailState = Assert<Assignable<typeof page.getWorkTaskDetailState, "idle" | "loading" | "success" | "error">>;
type _State_getWorkTaskDetailWorkTaskId = Assert<Assignable<typeof page.getWorkTaskDetailWorkTaskId, string | GetWorkTaskDetailInput["workTaskId"]>>;
type _State_getWorkTaskDetailActorId = Assert<Assignable<typeof page.getWorkTaskDetailActorId, string | GetWorkTaskDetailInput["actorId"]>>;
type _State_getWorkTaskDetailData = Assert<Assignable<typeof page.getWorkTaskDetailData, GetWorkTaskDetailOutput | null>>;
type _Action_loadListMyWorkTasks = Assert<Assignable<typeof page.loadListMyWorkTasks, (...args: any[]) => unknown>>;
type _Handler_handleListMyWorkTasksClick = Assert<Assignable<typeof page.handleListMyWorkTasksClick, (...args: any[]) => unknown>>;
type _Action_loadGetWorkTaskDetail = Assert<Assignable<typeof page.loadGetWorkTaskDetail, (...args: any[]) => unknown>>;
type _Handler_handleGetWorkTaskDetailClick = Assert<Assignable<typeof page.handleGetWorkTaskDetailClick, (...args: any[]) => unknown>>;
type _Action_setListMyWorkTasksAssignedWorkerId = Assert<Assignable<typeof page.setListMyWorkTasksAssignedWorkerId, (...args: any[]) => unknown>>;
type _Handler_handleListMyWorkTasksAssignedWorkerIdChange = Assert<Assignable<typeof page.handleListMyWorkTasksAssignedWorkerIdChange, (...args: any[]) => unknown>>;
type _Action_setListMyWorkTasksStatus = Assert<Assignable<typeof page.setListMyWorkTasksStatus, (...args: any[]) => unknown>>;
type _Handler_handleListMyWorkTasksStatusChange = Assert<Assignable<typeof page.handleListMyWorkTasksStatusChange, (...args: any[]) => unknown>>;
type _Action_setListMyWorkTasksPage = Assert<Assignable<typeof page.setListMyWorkTasksPage, (...args: any[]) => unknown>>;
type _Handler_handleListMyWorkTasksPageChange = Assert<Assignable<typeof page.handleListMyWorkTasksPageChange, (...args: any[]) => unknown>>;
type _Action_setListMyWorkTasksPageSize = Assert<Assignable<typeof page.setListMyWorkTasksPageSize, (...args: any[]) => unknown>>;
type _Handler_handleListMyWorkTasksPageSizeChange = Assert<Assignable<typeof page.handleListMyWorkTasksPageSizeChange, (...args: any[]) => unknown>>;
type _Action_setGetWorkTaskDetailWorkTaskId = Assert<Assignable<typeof page.setGetWorkTaskDetailWorkTaskId, (...args: any[]) => unknown>>;
type _Handler_handleGetWorkTaskDetailWorkTaskIdChange = Assert<Assignable<typeof page.handleGetWorkTaskDetailWorkTaskIdChange, (...args: any[]) => unknown>>;
type _Action_setGetWorkTaskDetailActorId = Assert<Assignable<typeof page.setGetWorkTaskDetailActorId, (...args: any[]) => unknown>>;
type _Handler_handleGetWorkTaskDetailActorIdChange = Assert<Assignable<typeof page.handleGetWorkTaskDetailActorIdChange, (...args: any[]) => unknown>>;

export {};