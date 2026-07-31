/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.test.ts" enhancement="_102020_/l2/enhancementAura"/>

import type { BuildFlowFsmClientBillingWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.js';
import type { GetBillingSummaryInput, GetBillingSummaryOutput, GetInvoiceInput, GetInvoiceOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/clientBillingWorkspace.js';

type IsAny<T> = 0 extends (1 & T) ? true : false;
type Assignable<Actual, Expected> = IsAny<Actual> extends true ? false : [Actual] extends [Expected] ? true : false;
type Assert<T extends true> = T;

declare const page: BuildFlowFsmClientBillingWorkspaceBase;

// This file is generated from .defs.ts. Add narrower state/action assertions here as materialization rules evolve.
type _State_status = Assert<Assignable<typeof page.status, string>>;
type _State_getBillingSummaryState = Assert<Assignable<typeof page.getBillingSummaryState, "idle" | "loading" | "success" | "error">>;
type _State_getBillingSummaryBillingSummaryId = Assert<Assignable<typeof page.getBillingSummaryBillingSummaryId, string | GetBillingSummaryInput["billingSummaryId"]>>;
type _State_getBillingSummaryClientId = Assert<Assignable<typeof page.getBillingSummaryClientId, string | GetBillingSummaryInput["clientId"]>>;
type _State_getBillingSummaryData = Assert<Assignable<typeof page.getBillingSummaryData, GetBillingSummaryOutput | null>>;
type _State_getInvoiceState = Assert<Assignable<typeof page.getInvoiceState, "idle" | "loading" | "success" | "error">>;
type _State_getInvoiceInvoiceId = Assert<Assignable<typeof page.getInvoiceInvoiceId, string | GetInvoiceInput["invoiceId"]>>;
type _State_getInvoiceClientId = Assert<Assignable<typeof page.getInvoiceClientId, string | GetInvoiceInput["clientId"]>>;
type _State_getInvoiceData = Assert<Assignable<typeof page.getInvoiceData, GetInvoiceOutput | null>>;
type _Action_loadGetBillingSummary = Assert<Assignable<typeof page.loadGetBillingSummary, (...args: any[]) => unknown>>;
type _Handler_handleGetBillingSummaryClick = Assert<Assignable<typeof page.handleGetBillingSummaryClick, (...args: any[]) => unknown>>;
type _Action_loadGetInvoice = Assert<Assignable<typeof page.loadGetInvoice, (...args: any[]) => unknown>>;
type _Handler_handleGetInvoiceClick = Assert<Assignable<typeof page.handleGetInvoiceClick, (...args: any[]) => unknown>>;
type _Action_setGetBillingSummaryBillingSummaryId = Assert<Assignable<typeof page.setGetBillingSummaryBillingSummaryId, (...args: any[]) => unknown>>;
type _Handler_handleGetBillingSummaryBillingSummaryIdChange = Assert<Assignable<typeof page.handleGetBillingSummaryBillingSummaryIdChange, (...args: any[]) => unknown>>;
type _Action_setGetBillingSummaryClientId = Assert<Assignable<typeof page.setGetBillingSummaryClientId, (...args: any[]) => unknown>>;
type _Handler_handleGetBillingSummaryClientIdChange = Assert<Assignable<typeof page.handleGetBillingSummaryClientIdChange, (...args: any[]) => unknown>>;
type _Action_setGetInvoiceInvoiceId = Assert<Assignable<typeof page.setGetInvoiceInvoiceId, (...args: any[]) => unknown>>;
type _Handler_handleGetInvoiceInvoiceIdChange = Assert<Assignable<typeof page.handleGetInvoiceInvoiceIdChange, (...args: any[]) => unknown>>;
type _Action_setGetInvoiceClientId = Assert<Assignable<typeof page.setGetInvoiceClientId, (...args: any[]) => unknown>>;
type _Handler_handleGetInvoiceClientIdChange = Assert<Assignable<typeof page.handleGetInvoiceClientIdChange, (...args: any[]) => unknown>>;

export {};