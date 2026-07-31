/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmJobCostWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.js';
import type { ViewJobCostSummaryInput, ViewJobCostSummaryOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/jobCostWorkspace.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmJobCostWorkspaceBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_viewJobCostSummaryState = Assert<Assignable<typeof page.viewJobCostSummaryState, "idle" | "loading" | "success" | "error">>;
type _State_viewJobCostSummaryProjectId = Assert<Assignable<typeof page.viewJobCostSummaryProjectId, string | ViewJobCostSummaryInput["projectId"]>>;
type _State_viewJobCostSummaryData = Assert<Assignable<typeof page.viewJobCostSummaryData, ViewJobCostSummaryOutput | null>>;
type _Action_loadViewJobCostSummary = Assert<Assignable<typeof page.loadViewJobCostSummary, (...args: any[]) => unknown>>;
type _Handler_handleViewJobCostSummaryClick = Assert<Assignable<typeof page.handleViewJobCostSummaryClick, (...args: any[]) => unknown>>;
type _Action_setViewJobCostSummaryProjectId = Assert<Assignable<typeof page.setViewJobCostSummaryProjectId, (...args: any[]) => unknown>>;
type _Handler_handleViewJobCostSummaryProjectIdChange = Assert<Assignable<typeof page.handleViewJobCostSummaryProjectIdChange, (...args: any[]) => unknown>>;

export {};