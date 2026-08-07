/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  GetBillingSummaryInput,
  GetBillingSummaryOutput,
  GetInvoiceInput,
  GetInvoiceOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/clientBillingWorkspace.js';
import {
  getBillingSummaryRoute,
  getInvoiceRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/clientBillingWorkspace.js';

export type {
  GetBillingSummaryInput,
  GetBillingSummaryOutput,
  GetInvoiceInput,
  GetInvoiceOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/clientBillingWorkspace.js';

/// **collab_i18n_start**
const message_en = {
  'section.clientBillingWorkspace.billingSummarySection.title': 'Billing Summary',
  'organism.clientBillingWorkspace.getBillingSummary.title': 'View billing summary',
  'intent.clientBillingWorkspace.getBillingSummary.list.title': 'View billing summary',
  'intent.clientBillingWorkspace.getBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label': 'Billing Summary Id',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label': 'Project Name',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.status.label': 'Status',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label': 'Period Start',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label': 'Period End',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label': 'Labor Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label': 'Material Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label': 'Change Order Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label': 'Total Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label': 'Shared At',
  'intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId.label': 'Client Id',
  'section.clientBillingWorkspace.invoiceSection.title': 'Invoice',
  'organism.clientBillingWorkspace.getInvoice.title': 'View invoice',
  'intent.clientBillingWorkspace.getInvoice.list.title': 'View invoice',
  'intent.clientBillingWorkspace.getInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.clientBillingWorkspace.getInvoice.list.column.projectId.label': 'Project Id',
  'intent.clientBillingWorkspace.getInvoice.list.column.clientId.label': 'Client Id',
  'intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label': 'Invoice Number',
  'intent.clientBillingWorkspace.getInvoice.list.column.status.label': 'Status',
  'intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label': 'Total Amount',
  'intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label': 'Sent At',
  'intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label': 'Created At',
  'intent.clientBillingWorkspace.getInvoice.list.filter.clientId.label': 'Client Id',
  'section.clientBillingWorkspace.billing-summary-section.title': 'Billing Summary',
  'section.clientBillingWorkspace.invoice-section.title': 'Invoice',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.clientBillingWorkspace.billingSummarySection.title': 'Billing Summary',
  'organism.clientBillingWorkspace.getBillingSummary.title': 'View billing summary',
  'intent.clientBillingWorkspace.getBillingSummary.list.title': 'View billing summary',
  'intent.clientBillingWorkspace.getBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label': 'Billing Summary Id',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label': 'Project Name',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.status.label': 'Status',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label': 'Period Start',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label': 'Period End',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label': 'Labor Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label': 'Material Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label': 'Change Order Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label': 'Total Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label': 'Shared At',
  'intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId.label': 'Client Id',
  'section.clientBillingWorkspace.invoiceSection.title': 'Invoice',
  'organism.clientBillingWorkspace.getInvoice.title': 'View invoice',
  'intent.clientBillingWorkspace.getInvoice.list.title': 'View invoice',
  'intent.clientBillingWorkspace.getInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.clientBillingWorkspace.getInvoice.list.column.projectId.label': 'Project Id',
  'intent.clientBillingWorkspace.getInvoice.list.column.clientId.label': 'Client Id',
  'intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label': 'Invoice Number',
  'intent.clientBillingWorkspace.getInvoice.list.column.status.label': 'Status',
  'intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label': 'Total Amount',
  'intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label': 'Sent At',
  'intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label': 'Created At',
  'intent.clientBillingWorkspace.getInvoice.list.filter.clientId.label': 'Client Id',
  'section.clientBillingWorkspace.billing-summary-section.title': 'Billing Summary',
  'section.clientBillingWorkspace.invoice-section.title': 'Invoice',
};
const message_es: MessageType = {
  'section.clientBillingWorkspace.billingSummarySection.title': 'Billing Summary',
  'organism.clientBillingWorkspace.getBillingSummary.title': 'View billing summary',
  'intent.clientBillingWorkspace.getBillingSummary.list.title': 'View billing summary',
  'intent.clientBillingWorkspace.getBillingSummary.list.empty': 'Nenhum registro encontrado',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label': 'Billing Summary Id',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label': 'Project Id',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label': 'Project Name',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.status.label': 'Status',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label': 'Period Start',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label': 'Period End',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label': 'Labor Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label': 'Material Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label': 'Change Order Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label': 'Total Cost',
  'intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label': 'Shared At',
  'intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId.label': 'Client Id',
  'section.clientBillingWorkspace.invoiceSection.title': 'Invoice',
  'organism.clientBillingWorkspace.getInvoice.title': 'View invoice',
  'intent.clientBillingWorkspace.getInvoice.list.title': 'View invoice',
  'intent.clientBillingWorkspace.getInvoice.list.empty': 'Nenhum registro encontrado',
  'intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label': 'Invoice Id',
  'intent.clientBillingWorkspace.getInvoice.list.column.projectId.label': 'Project Id',
  'intent.clientBillingWorkspace.getInvoice.list.column.clientId.label': 'Client Id',
  'intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label': 'Invoice Number',
  'intent.clientBillingWorkspace.getInvoice.list.column.status.label': 'Status',
  'intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label': 'Total Amount',
  'intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label': 'Sent At',
  'intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label': 'Created At',
  'intent.clientBillingWorkspace.getInvoice.list.filter.clientId.label': 'Client Id',
  'section.clientBillingWorkspace.billing-summary-section.title': 'Billing Summary',
  'section.clientBillingWorkspace.invoice-section.title': 'Invoice',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.clientBillingWorkspace.status',
  'ui.clientBillingWorkspace.action.getBillingSummary.status',
  'ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId',
  'ui.clientBillingWorkspace.input.getBillingSummary.clientId',
  'ui.clientBillingWorkspace.data.getBillingSummary',
  'ui.clientBillingWorkspace.action.getInvoice.status',
  'ui.clientBillingWorkspace.input.getInvoice.invoiceId',
  'ui.clientBillingWorkspace.input.getInvoice.clientId',
  'ui.clientBillingWorkspace.data.getInvoice',
];

export class BuildFlowFsmClientBillingWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state getBillingSummaryState — actionStatus, values: idle|loading|success|error */
  @property() getBillingSummaryState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state getBillingSummaryBillingSummaryId — input */
  @property() getBillingSummaryBillingSummaryId: string = '';
  /** state getBillingSummaryClientId — input */
  @property() getBillingSummaryClientId: string = '';
  /** state getBillingSummaryData — queryResult, outputShape: object */
  @property() getBillingSummaryData: GetBillingSummaryOutput | null = null;
  /** state getInvoiceState — actionStatus, values: idle|loading|success|error */
  @property() getInvoiceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state getInvoiceInvoiceId — input */
  @property() getInvoiceInvoiceId: string = '';
  /** state getInvoiceClientId — input */
  @property() getInvoiceClientId: string = '';
  /** state getInvoiceData — queryResult, outputShape: object */
  @property() getInvoiceData: GetInvoiceOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.clientBillingWorkspace.status', '');
    this.initStateValue('ui.clientBillingWorkspace.action.getBillingSummary.status', 'idle');
    this.initStateValue('ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId', '');
    this.initStateValue('ui.clientBillingWorkspace.input.getBillingSummary.clientId', '');
    this.initStateValue('ui.clientBillingWorkspace.data.getBillingSummary', null);
    this.initStateValue('ui.clientBillingWorkspace.action.getInvoice.status', 'idle');
    this.initStateValue('ui.clientBillingWorkspace.input.getInvoice.invoiceId', '');
    this.initStateValue('ui.clientBillingWorkspace.input.getInvoice.clientId', '');
    this.initStateValue('ui.clientBillingWorkspace.data.getInvoice', null);
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.clientBillingWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.clientBillingWorkspace.action.getBillingSummary.status':
        this.getBillingSummaryState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId':
        this.getBillingSummaryBillingSummaryId = (value as string) ?? '';
        break;
      case 'ui.clientBillingWorkspace.input.getBillingSummary.clientId':
        this.getBillingSummaryClientId = (value as string) ?? '';
        break;
      case 'ui.clientBillingWorkspace.data.getBillingSummary':
        this.getBillingSummaryData = (value as GetBillingSummaryOutput | null) ?? null;
        break;
      case 'ui.clientBillingWorkspace.action.getInvoice.status':
        this.getInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientBillingWorkspace.input.getInvoice.invoiceId':
        this.getInvoiceInvoiceId = (value as string) ?? '';
        break;
      case 'ui.clientBillingWorkspace.input.getInvoice.clientId':
        this.getInvoiceClientId = (value as string) ?? '';
        break;
      case 'ui.clientBillingWorkspace.data.getInvoice':
        this.getInvoiceData = (value as GetInvoiceOutput | null) ?? null;
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  private initStateValue(stateKey: string, defaultValue: unknown): void {
    const existing: unknown = getState(stateKey);
    const value: unknown = existing !== undefined ? existing : defaultValue;
    switch (stateKey) {
      case 'ui.clientBillingWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.clientBillingWorkspace.action.getBillingSummary.status':
        this.getBillingSummaryState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId':
        this.getBillingSummaryBillingSummaryId = (value as string) ?? '';
        break;
      case 'ui.clientBillingWorkspace.input.getBillingSummary.clientId':
        this.getBillingSummaryClientId = (value as string) ?? '';
        break;
      case 'ui.clientBillingWorkspace.data.getBillingSummary':
        this.getBillingSummaryData = (value as GetBillingSummaryOutput | null) ?? null;
        break;
      case 'ui.clientBillingWorkspace.action.getInvoice.status':
        this.getInvoiceState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientBillingWorkspace.input.getInvoice.invoiceId':
        this.getInvoiceInvoiceId = (value as string) ?? '';
        break;
      case 'ui.clientBillingWorkspace.input.getInvoice.clientId':
        this.getInvoiceClientId = (value as string) ?? '';
        break;
      case 'ui.clientBillingWorkspace.data.getInvoice':
        this.getInvoiceData = (value as GetInvoiceOutput | null) ?? null;
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  private syncRouteParams(): void {
    const pathname: string = window.location.pathname;
    const match: RegExpMatchArray | null = pathname.match(
      /^\/buildFlowFsm\/clientBillingWorkspace(?:\/([^/]+))?(?:\/([^/]+))?\/?$/,
    );
    const rawBillingSummaryId: string = match && match[1] ? match[1] : '';
    let billingSummaryId: string = '';
    if (rawBillingSummaryId) {
      try {
        billingSummaryId = decodeURIComponent(rawBillingSummaryId);
      } catch {
        billingSummaryId = rawBillingSummaryId;
      }
    }
    if (billingSummaryId) {
      if (!this.getBillingSummaryBillingSummaryId) {
        this.getBillingSummaryBillingSummaryId = billingSummaryId;
        setState('ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId', billingSummaryId);
      }
    }
    const rawInvoiceId: string = match && match[2] ? match[2] : '';
    let invoiceId: string = '';
    if (rawInvoiceId) {
      try {
        invoiceId = decodeURIComponent(rawInvoiceId);
      } catch {
        invoiceId = rawInvoiceId;
      }
    }
    if (invoiceId) {
      if (!this.getInvoiceInvoiceId) {
        this.getInvoiceInvoiceId = invoiceId;
        setState('ui.clientBillingWorkspace.input.getInvoice.invoiceId', invoiceId);
      }
    }
  }

  /** action getBillingSummary (query) — route buildFlowFsm.clientBillingWorkspace.getBillingSummary; inputs: billingSummaryId, clientId; writes ui.clientBillingWorkspace.data.getBillingSummary; status ui.clientBillingWorkspace.action.getBillingSummary.status */
  async loadGetBillingSummary(): Promise<void> {
    this.syncRouteParams();
    if (!this.getBillingSummaryBillingSummaryId) {
      this.getBillingSummaryState = 'idle';
      setState('ui.clientBillingWorkspace.action.getBillingSummary.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.getBillingSummaryState = 'loading';
    setState('ui.clientBillingWorkspace.action.getBillingSummary.status', 'loading');
    const params: GetBillingSummaryInput = {
      billingSummaryId: this.getBillingSummaryBillingSummaryId,
      clientId: this.getBillingSummaryClientId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetBillingSummaryOutput>(getBillingSummaryRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.getBillingSummaryData = data;
      setState('ui.clientBillingWorkspace.data.getBillingSummary', data);
      this.getBillingSummaryState = 'success';
      setState('ui.clientBillingWorkspace.action.getBillingSummary.status', 'success');
    } else {
      this.getBillingSummaryState = 'error';
      setState('ui.clientBillingWorkspace.action.getBillingSummary.status', 'error');
      if (response.error) {
        console.error('getBillingSummary failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action getBillingSummary — bind UI events here */
  handleGetBillingSummaryClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadGetBillingSummary();
  }

  /** action getInvoice (query) — route buildFlowFsm.clientBillingWorkspace.getInvoice; inputs: invoiceId, clientId; writes ui.clientBillingWorkspace.data.getInvoice; status ui.clientBillingWorkspace.action.getInvoice.status */
  async loadGetInvoice(): Promise<void> {
    this.syncRouteParams();
    if (!this.getInvoiceInvoiceId) {
      this.getInvoiceState = 'idle';
      setState('ui.clientBillingWorkspace.action.getInvoice.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.getInvoiceState = 'loading';
    setState('ui.clientBillingWorkspace.action.getInvoice.status', 'loading');
    const params: GetInvoiceInput = {
      invoiceId: this.getInvoiceInvoiceId,
      clientId: this.getInvoiceClientId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetInvoiceOutput>(getInvoiceRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.getInvoiceData = data;
      setState('ui.clientBillingWorkspace.data.getInvoice', data);
      this.getInvoiceState = 'success';
      setState('ui.clientBillingWorkspace.action.getInvoice.status', 'success');
    } else {
      this.getInvoiceState = 'error';
      setState('ui.clientBillingWorkspace.action.getInvoice.status', 'error');
      if (response.error) {
        console.error('getInvoice failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action getInvoice — bind UI events here */
  handleGetInvoiceClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadGetInvoice();
  }

  /** setter for state ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId */
  setGetBillingSummaryBillingSummaryId(value: string): void {
    this.getBillingSummaryBillingSummaryId = value;
    setState('ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId', value);
    this.requestUpdate();
  }

  /** handler for action set.getBillingSummaryBillingSummaryId — bind UI events here */
  handleGetBillingSummaryBillingSummaryIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetBillingSummaryBillingSummaryId(value);
  }

  /** setter for state ui.clientBillingWorkspace.input.getBillingSummary.clientId */
  setGetBillingSummaryClientId(value: string): void {
    this.getBillingSummaryClientId = value;
    setState('ui.clientBillingWorkspace.input.getBillingSummary.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.getBillingSummaryClientId — bind UI events here */
  handleGetBillingSummaryClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetBillingSummaryClientId(value);
  }

  /** setter for state ui.clientBillingWorkspace.input.getInvoice.invoiceId */
  setGetInvoiceInvoiceId(value: string): void {
    this.getInvoiceInvoiceId = value;
    setState('ui.clientBillingWorkspace.input.getInvoice.invoiceId', value);
    this.requestUpdate();
  }

  /** handler for action set.getInvoiceInvoiceId — bind UI events here */
  handleGetInvoiceInvoiceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetInvoiceInvoiceId(value);
  }

  /** setter for state ui.clientBillingWorkspace.input.getInvoice.clientId */
  setGetInvoiceClientId(value: string): void {
    this.getInvoiceClientId = value;
    setState('ui.clientBillingWorkspace.input.getInvoice.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.getInvoiceClientId — bind UI events here */
  handleGetInvoiceClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetInvoiceClientId(value);
  }
}
