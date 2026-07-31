/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmInvoiceWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.js';
import type { CreateInvoiceCmdInput, CreateInvoiceCmdOutput, ListInvoicesInput, ListInvoicesOutput, SendInvoiceCmdInput, SendInvoiceCmdOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/invoiceWorkspace.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmInvoiceWorkspaceBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_listInvoicesState = Assert<Assignable<typeof page.listInvoicesState, "idle" | "loading" | "success" | "error">>;
type _State_listInvoicesStatus = Assert<Assignable<typeof page.listInvoicesStatus, string | ListInvoicesInput["status"]>>;
type _State_listInvoicesProjectId = Assert<Assignable<typeof page.listInvoicesProjectId, string | ListInvoicesInput["projectId"]>>;
type _State_listInvoicesClientId = Assert<Assignable<typeof page.listInvoicesClientId, string | ListInvoicesInput["clientId"]>>;
type _State_listInvoicesPage = Assert<Assignable<typeof page.listInvoicesPage, string | ListInvoicesInput["page"]>>;
type _State_listInvoicesPageSize = Assert<Assignable<typeof page.listInvoicesPageSize, string | ListInvoicesInput["pageSize"]>>;
type _State_listInvoicesData = Assert<Assignable<typeof page.listInvoicesData, ListInvoicesOutput>>;
type _State_createInvoiceCmdState = Assert<Assignable<typeof page.createInvoiceCmdState, "idle" | "loading" | "success" | "error">>;
type _State_createInvoiceCmdProjectId = Assert<Assignable<typeof page.createInvoiceCmdProjectId, string | CreateInvoiceCmdInput["projectId"]>>;
type _State_createInvoiceCmdInvoiceNumber = Assert<Assignable<typeof page.createInvoiceCmdInvoiceNumber, string | CreateInvoiceCmdInput["invoiceNumber"]>>;
type _State_createInvoiceCmdClientId = Assert<Assignable<typeof page.createInvoiceCmdClientId, string | CreateInvoiceCmdInput["clientId"]>>;
type _State_createInvoiceCmdOutput = Assert<Assignable<typeof page.createInvoiceCmdOutput, CreateInvoiceCmdOutput | null>>;
type _State_createInvoiceCmdError = Assert<Assignable<typeof page.createInvoiceCmdError, string>>;
type _State_sendInvoiceCmdState = Assert<Assignable<typeof page.sendInvoiceCmdState, "idle" | "loading" | "success" | "error">>;
type _State_sendInvoiceCmdInvoiceId = Assert<Assignable<typeof page.sendInvoiceCmdInvoiceId, string | SendInvoiceCmdInput["invoiceId"]>>;
type _State_sendInvoiceCmdOutput = Assert<Assignable<typeof page.sendInvoiceCmdOutput, SendInvoiceCmdOutput | null>>;
type _State_sendInvoiceCmdError = Assert<Assignable<typeof page.sendInvoiceCmdError, string>>;
type _Action_loadListInvoices = Assert<Assignable<typeof page.loadListInvoices, (...args: any[]) => unknown>>;
type _Handler_handleListInvoicesClick = Assert<Assignable<typeof page.handleListInvoicesClick, (...args: any[]) => unknown>>;
type _Action_createInvoiceCmd = Assert<Assignable<typeof page.createInvoiceCmd, (...args: any[]) => unknown>>;
type _Handler_handleCreateInvoiceCmdClick = Assert<Assignable<typeof page.handleCreateInvoiceCmdClick, (...args: any[]) => unknown>>;
type _Action_sendInvoiceCmd = Assert<Assignable<typeof page.sendInvoiceCmd, (...args: any[]) => unknown>>;
type _Handler_handleSendInvoiceCmdClick = Assert<Assignable<typeof page.handleSendInvoiceCmdClick, (...args: any[]) => unknown>>;
type _Action_setListInvoicesStatus = Assert<Assignable<typeof page.setListInvoicesStatus, (...args: any[]) => unknown>>;
type _Handler_handleListInvoicesStatusChange = Assert<Assignable<typeof page.handleListInvoicesStatusChange, (...args: any[]) => unknown>>;
type _Action_setListInvoicesProjectId = Assert<Assignable<typeof page.setListInvoicesProjectId, (...args: any[]) => unknown>>;
type _Handler_handleListInvoicesProjectIdChange = Assert<Assignable<typeof page.handleListInvoicesProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setListInvoicesClientId = Assert<Assignable<typeof page.setListInvoicesClientId, (...args: any[]) => unknown>>;
type _Handler_handleListInvoicesClientIdChange = Assert<Assignable<typeof page.handleListInvoicesClientIdChange, (...args: any[]) => unknown>>;
type _Action_setListInvoicesPage = Assert<Assignable<typeof page.setListInvoicesPage, (...args: any[]) => unknown>>;
type _Handler_handleListInvoicesPageChange = Assert<Assignable<typeof page.handleListInvoicesPageChange, (...args: any[]) => unknown>>;
type _Action_setListInvoicesPageSize = Assert<Assignable<typeof page.setListInvoicesPageSize, (...args: any[]) => unknown>>;
type _Handler_handleListInvoicesPageSizeChange = Assert<Assignable<typeof page.handleListInvoicesPageSizeChange, (...args: any[]) => unknown>>;
type _Action_setCreateInvoiceCmdProjectId = Assert<Assignable<typeof page.setCreateInvoiceCmdProjectId, (...args: any[]) => unknown>>;
type _Handler_handleCreateInvoiceCmdProjectIdChange = Assert<Assignable<typeof page.handleCreateInvoiceCmdProjectIdChange, (...args: any[]) => unknown>>;
type _Action_setCreateInvoiceCmdInvoiceNumber = Assert<Assignable<typeof page.setCreateInvoiceCmdInvoiceNumber, (...args: any[]) => unknown>>;
type _Handler_handleCreateInvoiceCmdInvoiceNumberChange = Assert<Assignable<typeof page.handleCreateInvoiceCmdInvoiceNumberChange, (...args: any[]) => unknown>>;
type _Action_setCreateInvoiceCmdClientId = Assert<Assignable<typeof page.setCreateInvoiceCmdClientId, (...args: any[]) => unknown>>;
type _Handler_handleCreateInvoiceCmdClientIdChange = Assert<Assignable<typeof page.handleCreateInvoiceCmdClientIdChange, (...args: any[]) => unknown>>;
type _Action_setSendInvoiceCmdInvoiceId = Assert<Assignable<typeof page.setSendInvoiceCmdInvoiceId, (...args: any[]) => unknown>>;
type _Handler_handleSendInvoiceCmdInvoiceIdChange = Assert<Assignable<typeof page.handleSendInvoiceCmdInvoiceIdChange, (...args: any[]) => unknown>>;

export {};