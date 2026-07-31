/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmChangeOrderWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.js';
import type { CmdCreateChangeOrderInput, CmdCreateChangeOrderOutput, CmdUpdateChangeOrderInput, CmdUpdateChangeOrderOutput, CmdUpdateChangeOrderStatusInput, CmdUpdateChangeOrderStatusOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/changeOrderWorkspace.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmChangeOrderWorkspaceBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_cmdCreateChangeOrderState = Assert<Assignable<typeof page.cmdCreateChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_cmdCreateChangeOrderProjectId = Assert<Assignable<typeof page.cmdCreateChangeOrderProjectId, string | CmdCreateChangeOrderInput["projectId"]>>;
type _State_cmdCreateChangeOrderTitle = Assert<Assignable<typeof page.cmdCreateChangeOrderTitle, string | CmdCreateChangeOrderInput["title"]>>;
type _State_cmdCreateChangeOrderDescription = Assert<Assignable<typeof page.cmdCreateChangeOrderDescription, string | CmdCreateChangeOrderInput["description"]>>;
type _State_cmdCreateChangeOrderImpactType = Assert<Assignable<typeof page.cmdCreateChangeOrderImpactType, string | CmdCreateChangeOrderInput["impactType"]>>;
type _State_cmdCreateChangeOrderCostAdjustment = Assert<Assignable<typeof page.cmdCreateChangeOrderCostAdjustment, string | CmdCreateChangeOrderInput["costAdjustment"]>>;
type _State_cmdCreateChangeOrderScheduleAdjustmentDays = Assert<Assignable<typeof page.cmdCreateChangeOrderScheduleAdjustmentDays, string | CmdCreateChangeOrderInput["scheduleAdjustmentDays"]>>;
type _State_cmdCreateChangeOrderOutput = Assert<Assignable<typeof page.cmdCreateChangeOrderOutput, CmdCreateChangeOrderOutput | null>>;
type _State_cmdCreateChangeOrderError = Assert<Assignable<typeof page.cmdCreateChangeOrderError, string>>;
type _State_cmdUpdateChangeOrderState = Assert<Assignable<typeof page.cmdUpdateChangeOrderState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateChangeOrderChangeOrderId = Assert<Assignable<typeof page.cmdUpdateChangeOrderChangeOrderId, string | CmdUpdateChangeOrderInput["changeOrderId"]>>;
type _State_cmdUpdateChangeOrderTitle = Assert<Assignable<typeof page.cmdUpdateChangeOrderTitle, string | CmdUpdateChangeOrderInput["title"]>>;
type _State_cmdUpdateChangeOrderDescription = Assert<Assignable<typeof page.cmdUpdateChangeOrderDescription, string | CmdUpdateChangeOrderInput["description"]>>;
type _State_cmdUpdateChangeOrderImpactType = Assert<Assignable<typeof page.cmdUpdateChangeOrderImpactType, string | CmdUpdateChangeOrderInput["impactType"]>>;
type _State_cmdUpdateChangeOrderCostAdjustment = Assert<Assignable<typeof page.cmdUpdateChangeOrderCostAdjustment, string | CmdUpdateChangeOrderInput["costAdjustment"]>>;
type _State_cmdUpdateChangeOrderScheduleAdjustmentDays = Assert<Assignable<typeof page.cmdUpdateChangeOrderScheduleAdjustmentDays, string | CmdUpdateChangeOrderInput["scheduleAdjustmentDays"]>>;
type _State_cmdUpdateChangeOrderOutput = Assert<Assignable<typeof page.cmdUpdateChangeOrderOutput, CmdUpdateChangeOrderOutput | null>>;
type _State_cmdUpdateChangeOrderError = Assert<Assignable<typeof page.cmdUpdateChangeOrderError, string>>;
type _State_cmdUpdateChangeOrderStatusState = Assert<Assignable<typeof page.cmdUpdateChangeOrderStatusState, "idle" | "loading" | "success" | "error">>;
type _State_cmdUpdateChangeOrderStatusChangeOrderId = Assert<Assignable<typeof page.cmdUpdateChangeOrderStatusChangeOrderId, string | CmdUpdateChangeOrderStatusInput["changeOrderId"]>>;
type _State_cmdUpdateChangeOrderStatusStatus = Assert<Assignable<typeof page.cmdUpdateChangeOrderStatusStatus, string | CmdUpdateChangeOrderStatusInput["status"]>>;
type _State_cmdUpdateChangeOrderStatusRejectionReason = Assert<Assignable<typeof page.cmdUpdateChangeOrderStatusRejectionReason, string | CmdUpdateChangeOrderStatusInput["rejectionReason"]>>;
type _State_cmdUpdateChangeOrderStatusOutput = Assert<Assignable<typeof page.cmdUpdateChangeOrderStatusOutput, CmdUpdateChangeOrderStatusOutput | null>>;
type _State_cmdUpdateChangeOrderStatusError = Assert<Assignable<typeof page.cmdUpdateChangeOrderStatusError, string>>;
type _Action_cmdCreateChangeOrder = Assert<Assignable<typeof page.cmdCreateChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderClick = Assert<Assignable<typeof page.handleCmdCreateChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateChangeOrder = Assert<Assignable<typeof page.cmdUpdateChangeOrder, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderClick = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderClick, (...args: any[]) => unknown>>;
type _Action_cmdUpdateChangeOrderStatus = Assert<Assignable<typeof page.cmdUpdateChangeOrderStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderStatusClick = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderStatusClick, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderProjectId = Assert<Assignable<typeof page.setCmdCreateChangeOrderProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderProjectIdChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderTitle = Assert<Assignable<typeof page.setCmdCreateChangeOrderTitle, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderTitleChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderTitleChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderDescription = Assert<Assignable<typeof page.setCmdCreateChangeOrderDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderDescriptionChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderImpactType = Assert<Assignable<typeof page.setCmdCreateChangeOrderImpactType, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderImpactTypeChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderImpactTypeChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderCostAdjustment = Assert<Assignable<typeof page.setCmdCreateChangeOrderCostAdjustment, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderCostAdjustmentChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderCostAdjustmentChange, (...args: any[]) => unknown>>;
type _Action_setCmdCreateChangeOrderScheduleAdjustmentDays = Assert<Assignable<typeof page.setCmdCreateChangeOrderScheduleAdjustmentDays, (...args: any[]) => unknown>>;
type _Handler_handleCmdCreateChangeOrderScheduleAdjustmentDaysChange = Assert<Assignable<typeof page.handleCmdCreateChangeOrderScheduleAdjustmentDaysChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderChangeOrderId = Assert<Assignable<typeof page.setCmdUpdateChangeOrderChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderTitle = Assert<Assignable<typeof page.setCmdUpdateChangeOrderTitle, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderTitleChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderTitleChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderDescription = Assert<Assignable<typeof page.setCmdUpdateChangeOrderDescription, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderDescriptionChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderDescriptionChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderImpactType = Assert<Assignable<typeof page.setCmdUpdateChangeOrderImpactType, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderImpactTypeChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderImpactTypeChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderCostAdjustment = Assert<Assignable<typeof page.setCmdUpdateChangeOrderCostAdjustment, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderCostAdjustmentChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderCostAdjustmentChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderScheduleAdjustmentDays = Assert<Assignable<typeof page.setCmdUpdateChangeOrderScheduleAdjustmentDays, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderStatusChangeOrderId = Assert<Assignable<typeof page.setCmdUpdateChangeOrderStatusChangeOrderId, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderStatusChangeOrderIdChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderStatusChangeOrderIdChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderStatusStatus = Assert<Assignable<typeof page.setCmdUpdateChangeOrderStatusStatus, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderStatusStatusChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderStatusStatusChange, (...args: any[]) => unknown>>;
type _Action_setCmdUpdateChangeOrderStatusRejectionReason = Assert<Assignable<typeof page.setCmdUpdateChangeOrderStatusRejectionReason, (...args: any[]) => unknown>>;
type _Handler_handleCmdUpdateChangeOrderStatusRejectionReasonChange = Assert<Assignable<typeof page.handleCmdUpdateChangeOrderStatusRejectionReasonChange, (...args: any[]) => unknown>>;

export {};