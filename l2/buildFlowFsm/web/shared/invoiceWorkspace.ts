/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  ListInvoicesInput,
  ListInvoicesOutput,
  CreateInvoiceCmdInput,
  CreateInvoiceCmdOutput,
  SendInvoiceCmdInput,
  SendInvoiceCmdOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/invoiceWorkspace.js';
import {
  listInvoicesRoute,
  createInvoiceCmdRoute,
  sendInvoiceCmdRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/invoiceWorkspace.js';

export type {
  ListInvoicesInput,
  ListInvoicesOutput,
  CreateInvoiceCmdInput,
  CreateInvoiceCmdOutput,
  SendInvoiceCmdInput,
  SendInvoiceCmdOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/invoiceWorkspace.js';

/// **collab_i18n_start**
const message_en = {
  'section.invoiceWorkspace.invoiceListSection.title': 'Invoice Pipeline',
  'organism.invoiceWorkspace.listInvoices.title': 'Browse invoices',
  'intent.invoiceWorkspace.listInvoices.list.title': 'Browse invoices',
  'intent.invoiceWorkspace.listInvoices.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceWorkspace.listInvoices.list.column.invoices.label': 'Invoices',
  'intent.invoiceWorkspace.listInvoices.list.column.total.label': 'Total',
  'intent.invoiceWorkspace.listInvoices.list.filter.status.label': 'Status',
  'intent.invoiceWorkspace.listInvoices.list.filter.projectId.label': 'Project Id',
  'intent.invoiceWorkspace.listInvoices.list.filter.clientId.label': 'Client Id',
  'intent.invoiceWorkspace.listInvoices.list.filter.page.label': 'Page',
  'intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label': 'Page Size',
  'organism.invoiceWorkspace.sendInvoiceCmd.title': 'Send invoice to client',
  'intent.invoiceWorkspace.sendInvoiceCmd.form.title': 'Send invoice to client',
  'intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd': 'Send invoice to client',
  'section.invoiceWorkspace.createInvoiceSection.title': 'Create Invoice',
  'organism.invoiceWorkspace.createInvoiceCmd.title': 'Create invoice',
  'intent.invoiceWorkspace.createInvoiceCmd.form.title': 'Create invoice',
  'intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd': 'Create invoice',
  'intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label': 'Invoice Number',
  'action.createInvoiceCmd.success': 'Create invoice: OK',
  'action.createInvoiceCmd.error': 'Create invoice: falhou',
  'action.sendInvoiceCmd.success': 'Send invoice to client: OK',
  'action.sendInvoiceCmd.error': 'Send invoice to client: falhou',
  'section.invoiceWorkspace.sec-invoice-list.title': 'Invoice List',
  'organism.invoiceWorkspace.summary-first10.title': 'Summary first',
  'intent.invoiceWorkspace.summary-first10.content.title': 'Summary first',
  'section.invoiceWorkspace.sec-create-invoice.title': 'Create Invoice',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.invoiceWorkspace.invoiceListSection.title': 'Invoice Pipeline',
  'organism.invoiceWorkspace.listInvoices.title': 'Browse invoices',
  'intent.invoiceWorkspace.listInvoices.list.title': 'Browse invoices',
  'intent.invoiceWorkspace.listInvoices.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceWorkspace.listInvoices.list.column.invoices.label': 'Invoices',
  'intent.invoiceWorkspace.listInvoices.list.column.total.label': 'Total',
  'intent.invoiceWorkspace.listInvoices.list.filter.status.label': 'Status',
  'intent.invoiceWorkspace.listInvoices.list.filter.projectId.label': 'Project Id',
  'intent.invoiceWorkspace.listInvoices.list.filter.clientId.label': 'Client Id',
  'intent.invoiceWorkspace.listInvoices.list.filter.page.label': 'Page',
  'intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label': 'Page Size',
  'organism.invoiceWorkspace.sendInvoiceCmd.title': 'Send invoice to client',
  'intent.invoiceWorkspace.sendInvoiceCmd.form.title': 'Send invoice to client',
  'intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd': 'Send invoice to client',
  'section.invoiceWorkspace.createInvoiceSection.title': 'Create Invoice',
  'organism.invoiceWorkspace.createInvoiceCmd.title': 'Create invoice',
  'intent.invoiceWorkspace.createInvoiceCmd.form.title': 'Create invoice',
  'intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd': 'Create invoice',
  'intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label': 'Invoice Number',
  'action.createInvoiceCmd.success': 'Create invoice: OK',
  'action.createInvoiceCmd.error': 'Create invoice: falhou',
  'action.sendInvoiceCmd.success': 'Send invoice to client: OK',
  'action.sendInvoiceCmd.error': 'Send invoice to client: falhou',
  'section.invoiceWorkspace.sec-invoice-list.title': 'Invoice List',
  'organism.invoiceWorkspace.summary-first10.title': 'Summary first',
  'intent.invoiceWorkspace.summary-first10.content.title': 'Summary first',
  'section.invoiceWorkspace.sec-create-invoice.title': 'Create Invoice',
};
const message_es: MessageType = {
  'section.invoiceWorkspace.invoiceListSection.title': 'Invoice Pipeline',
  'organism.invoiceWorkspace.listInvoices.title': 'Browse invoices',
  'intent.invoiceWorkspace.listInvoices.list.title': 'Browse invoices',
  'intent.invoiceWorkspace.listInvoices.list.empty': 'Nenhum registro encontrado',
  'intent.invoiceWorkspace.listInvoices.list.column.invoices.label': 'Invoices',
  'intent.invoiceWorkspace.listInvoices.list.column.total.label': 'Total',
  'intent.invoiceWorkspace.listInvoices.list.filter.status.label': 'Status',
  'intent.invoiceWorkspace.listInvoices.list.filter.projectId.label': 'Project Id',
  'intent.invoiceWorkspace.listInvoices.list.filter.clientId.label': 'Client Id',
  'intent.invoiceWorkspace.listInvoices.list.filter.page.label': 'Page',
  'intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label': 'Page Size',
  'organism.invoiceWorkspace.sendInvoiceCmd.title': 'Send invoice to client',
  'intent.invoiceWorkspace.sendInvoiceCmd.form.title': 'Send invoice to client',
  'intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd': 'Send invoice to client',
  'section.invoiceWorkspace.createInvoiceSection.title': 'Create Invoice',
  'organism.invoiceWorkspace.createInvoiceCmd.title': 'Create invoice',
  'intent.invoiceWorkspace.createInvoiceCmd.form.title': 'Create invoice',
  'intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd': 'Create invoice',
  'intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label': 'Invoice Number',
  'action.createInvoiceCmd.success': 'Create invoice: OK',
  'action.createInvoiceCmd.error': 'Create invoice: falhou',
  'action.sendInvoiceCmd.success': 'Send invoice to client: OK',
  'action.sendInvoiceCmd.error': 'Send invoice to client: falhou',
  'section.invoiceWorkspace.sec-invoice-list.title': 'Invoice List',
  'organism.invoiceWorkspace.summary-first10.title': 'Summary first',
  'intent.invoiceWorkspace.summary-first10.content.title': 'Summary first',
  'section.invoiceWorkspace.sec-create-invoice.title': 'Create Invoice',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const LIST_INVOICES_DATA_DEFAULT: ListInvoicesOutput = { invoices: [], total: 0 };

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.invoiceWorkspace.status',
  'ui.invoiceWorkspace.action.listInvoices.status',
  'ui.invoiceWorkspace.input.listInvoices.status',
  'ui.invoiceWorkspace.input.listInvoices.projectId',
  'ui.invoiceWorkspace.input.listInvoices.clientId',
  'ui.invoiceWorkspace.input.listInvoices.page',
  'ui.invoiceWorkspace.input.listInvoices.pageSize',
  'ui.invoiceWorkspace.data.listInvoices',
  'ui.invoiceWorkspace.action.createInvoiceCmd.status',
  'ui.invoiceWorkspace.input.createInvoiceCmd.projectId',
  'ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber',
  'ui.invoiceWorkspace.input.createInvoiceCmd.clientId',
  'ui.invoiceWorkspace.output.createInvoiceCmd',
  'ui.invoiceWorkspace.action.createInvoiceCmd.error',
  'ui.invoiceWorkspace.action.sendInvoiceCmd.status',
  'ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId',
  'ui.invoiceWorkspace.output.sendInvoiceCmd',
  'ui.invoiceWorkspace.action.sendInvoiceCmd.error',
];

export class BuildFlowFsmInvoiceWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state listInvoicesState — actionStatus, values: idle|loading|success|error */
  @property() listInvoicesState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state listInvoicesStatus — input */
  @property() listInvoicesStatus: string = '';
  /** state listInvoicesProjectId — input */
  @property() listInvoicesProjectId: string = '';
  /** state listInvoicesClientId — input */
  @property() listInvoicesClientId: string = '';
  /** state listInvoicesPage — input */
  @property() listInvoicesPage: string = '';
  /** state listInvoicesPageSize — input */
  @property() listInvoicesPageSize: string = '';
  /** state listInvoicesData — queryResult, outputShape: paginated */
  @property() listInvoicesData: ListInvoicesOutput = LIST_INVOICES_DATA_DEFAULT;
  /** state createInvoiceCmdState — actionStatus, values: idle|loading|success|error */
  @property() createInvoiceCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state createInvoiceCmdProjectId — input */
  @property() createInvoiceCmdProjectId: string = '';
  /** state createInvoiceCmdInvoiceNumber — input */
  @property() createInvoiceCmdInvoiceNumber: string = '';
  /** state createInvoiceCmdClientId — input */
  @property() createInvoiceCmdClientId: string = '';
  /** state createInvoiceCmdOutput — commandOutput */
  @property() createInvoiceCmdOutput: CreateInvoiceCmdOutput | null = null;
  /** state createInvoiceCmdError — actionError */
  @property() createInvoiceCmdError: string = '';
  /** state sendInvoiceCmdState — actionStatus, values: idle|loading|success|error */
  @property() sendInvoiceCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state sendInvoiceCmdInvoiceId — input */
  @property() sendInvoiceCmdInvoiceId: string = '';
  /** state sendInvoiceCmdOutput — commandOutput */
  @property() sendInvoiceCmdOutput: SendInvoiceCmdOutput | null = null;
  /** state sendInvoiceCmdError — actionError */
  @property() sendInvoiceCmdError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.invoiceWorkspace.status', '');
    this.initStateValue('ui.invoiceWorkspace.action.listInvoices.status', 'idle');
    this.initStateValue('ui.invoiceWorkspace.input.listInvoices.status', '');
    this.initStateValue('ui.invoiceWorkspace.input.listInvoices.projectId', '');
    this.initStateValue('ui.invoiceWorkspace.input.listInvoices.clientId', '');
    this.initStateValue('ui.invoiceWorkspace.input.listInvoices.page', '');
    this.initStateValue('ui.invoiceWorkspace.input.listInvoices.pageSize', '');
    this.initStateValue('ui.invoiceWorkspace.data.listInvoices', LIST_INVOICES_DATA_DEFAULT);
    this.initStateValue('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'idle');
    this.initStateValue('ui.invoiceWorkspace.input.createInvoiceCmd.projectId', '');
    this.initStateValue('ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber', '');
    this.initStateValue('ui.invoiceWorkspace.input.createInvoiceCmd.clientId', '');
    this.initStateValue('ui.invoiceWorkspace.output.createInvoiceCmd', null);
    this.initStateValue('ui.invoiceWorkspace.action.createInvoiceCmd.error', '');
    this.initStateValue('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'idle');
    this.initStateValue('ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId', '');
    this.initStateValue('ui.invoiceWorkspace.output.sendInvoiceCmd', null);
    this.initStateValue('ui.invoiceWorkspace.action.sendInvoiceCmd.error', '');
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadListInvoices();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.invoiceWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.action.listInvoices.status':
        this.listInvoicesState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.status':
        this.listInvoicesStatus = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.projectId':
        this.listInvoicesProjectId = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.clientId':
        this.listInvoicesClientId = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.page':
        this.listInvoicesPage = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.pageSize':
        this.listInvoicesPageSize = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.data.listInvoices':
        this.listInvoicesData = (value as ListInvoicesOutput) ?? LIST_INVOICES_DATA_DEFAULT;
        break;
      case 'ui.invoiceWorkspace.action.createInvoiceCmd.status':
        this.createInvoiceCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceWorkspace.input.createInvoiceCmd.projectId':
        this.createInvoiceCmdProjectId = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber':
        this.createInvoiceCmdInvoiceNumber = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.createInvoiceCmd.clientId':
        this.createInvoiceCmdClientId = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.output.createInvoiceCmd':
        this.createInvoiceCmdOutput = (value as CreateInvoiceCmdOutput | null) ?? null;
        break;
      case 'ui.invoiceWorkspace.action.createInvoiceCmd.error':
        this.createInvoiceCmdError = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.action.sendInvoiceCmd.status':
        this.sendInvoiceCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId':
        this.sendInvoiceCmdInvoiceId = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.output.sendInvoiceCmd':
        this.sendInvoiceCmdOutput = (value as SendInvoiceCmdOutput | null) ?? null;
        break;
      case 'ui.invoiceWorkspace.action.sendInvoiceCmd.error':
        this.sendInvoiceCmdError = (value as string) ?? '';
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
      case 'ui.invoiceWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.action.listInvoices.status':
        this.listInvoicesState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.status':
        this.listInvoicesStatus = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.projectId':
        this.listInvoicesProjectId = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.clientId':
        this.listInvoicesClientId = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.page':
        this.listInvoicesPage = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.pageSize':
        this.listInvoicesPageSize = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.data.listInvoices':
        this.listInvoicesData = (value as ListInvoicesOutput) ?? LIST_INVOICES_DATA_DEFAULT;
        break;
      case 'ui.invoiceWorkspace.action.createInvoiceCmd.status':
        this.createInvoiceCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceWorkspace.input.createInvoiceCmd.projectId':
        this.createInvoiceCmdProjectId = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber':
        this.createInvoiceCmdInvoiceNumber = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.input.createInvoiceCmd.clientId':
        this.createInvoiceCmdClientId = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.output.createInvoiceCmd':
        this.createInvoiceCmdOutput = (value as CreateInvoiceCmdOutput | null) ?? null;
        break;
      case 'ui.invoiceWorkspace.action.createInvoiceCmd.error':
        this.createInvoiceCmdError = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.action.sendInvoiceCmd.status':
        this.sendInvoiceCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId':
        this.sendInvoiceCmdInvoiceId = (value as string) ?? '';
        break;
      case 'ui.invoiceWorkspace.output.sendInvoiceCmd':
        this.sendInvoiceCmdOutput = (value as SendInvoiceCmdOutput | null) ?? null;
        break;
      case 'ui.invoiceWorkspace.action.sendInvoiceCmd.error':
        this.sendInvoiceCmdError = (value as string) ?? '';
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  private readErrorMessage(error: unknown, fallback: string): string {
    if (error && typeof error === 'object') {
      const record = error as { message?: unknown; error?: unknown };
      if (typeof record.message === 'string' && record.message) {
        return record.message;
      }
      if (typeof record.error === 'string' && record.error) {
        return record.error;
      }
    }
    return fallback;
  }

  /** action listInvoices (query) — route buildFlowFsm.invoiceWorkspace.listInvoices; inputs: status, projectId, clientId, page, pageSize; writes ui.invoiceWorkspace.data.listInvoices; status ui.invoiceWorkspace.action.listInvoices.status */
  async loadListInvoices(): Promise<void> {
    this.listInvoicesState = 'loading';
    setState('ui.invoiceWorkspace.action.listInvoices.status', 'loading');
    const params: ListInvoicesInput = {
    };
    if (this.listInvoicesStatus) {
      params.status = this.listInvoicesStatus;
    }
    if (this.listInvoicesProjectId) {
      params.projectId = this.listInvoicesProjectId;
    }
    if (this.listInvoicesClientId) {
      params.clientId = this.listInvoicesClientId;
    }
    if (this.listInvoicesPage !== '') {
      const pageNum = Number(this.listInvoicesPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.listInvoicesPageSize !== '') {
      const pageSizeNum = Number(this.listInvoicesPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListInvoicesOutput>(listInvoicesRoute, params, options);
    if (response.ok) {
      const data = response.data ?? LIST_INVOICES_DATA_DEFAULT;
      this.listInvoicesData = data;
      setState('ui.invoiceWorkspace.data.listInvoices', data);
      this.listInvoicesState = 'success';
      setState('ui.invoiceWorkspace.action.listInvoices.status', 'success');
    } else {
      this.listInvoicesState = 'error';
      setState('ui.invoiceWorkspace.action.listInvoices.status', 'error');
      if (response.error) {
        console.error('listInvoices failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action listInvoices — bind UI events here */
  handleListInvoicesClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadListInvoices();
  }

  /** action createInvoiceCmd (command) — route buildFlowFsm.invoiceWorkspace.createInvoiceCmd; inputs: projectId, invoiceNumber, clientId; writes ui.invoiceWorkspace.output.createInvoiceCmd; status ui.invoiceWorkspace.action.createInvoiceCmd.status; feedback keys action.createInvoiceCmd.success / action.createInvoiceCmd.error */
  async createInvoiceCmd(): Promise<void> {
    if (!this.createInvoiceCmdProjectId) {
      this.createInvoiceCmdState = 'idle';
      setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'idle');
      this.requestUpdate();
      return;
    }
    if (!this.createInvoiceCmdClientId) {
      this.createInvoiceCmdState = 'idle';
      setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.createInvoiceCmdState = 'loading';
    setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'loading');
    this.createInvoiceCmdError = '';
    setState('ui.invoiceWorkspace.action.createInvoiceCmd.error', '');
    const params: CreateInvoiceCmdInput = {
      projectId: this.createInvoiceCmdProjectId,
      invoiceNumber: this.createInvoiceCmdInvoiceNumber,
      clientId: this.createInvoiceCmdClientId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CreateInvoiceCmdOutput>(createInvoiceCmdRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.createInvoiceCmd.error');
      this.createInvoiceCmdError = errMsg;
      setState('ui.invoiceWorkspace.action.createInvoiceCmd.error', errMsg);
      this.createInvoiceCmdState = 'error';
      setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CreateInvoiceCmdOutput | null = response.data ?? null;
    this.createInvoiceCmdOutput = data;
    setState('ui.invoiceWorkspace.output.createInvoiceCmd', data);
    try {
      await this.loadListInvoices();
      if (this.listInvoicesState === 'error') {
        this.createInvoiceCmdState = 'error';
        setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('createInvoiceCmd refresh failed', refreshError);
      this.createInvoiceCmdState = 'error';
      setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    this.createInvoiceCmdProjectId = '';
    setState('ui.invoiceWorkspace.input.createInvoiceCmd.projectId', '');
    this.createInvoiceCmdInvoiceNumber = '';
    setState('ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber', '');
    this.createInvoiceCmdClientId = '';
    setState('ui.invoiceWorkspace.input.createInvoiceCmd.clientId', '');
    this.createInvoiceCmdState = 'success';
    setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'success');
    this.requestUpdate();
  }

  /** handler for action createInvoiceCmd — bind UI events here */
  handleCreateInvoiceCmdClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createInvoiceCmd();
    });
  }

  /** action sendInvoiceCmd (command) — route buildFlowFsm.invoiceWorkspace.sendInvoiceCmd; inputs: invoiceId; writes ui.invoiceWorkspace.output.sendInvoiceCmd; status ui.invoiceWorkspace.action.sendInvoiceCmd.status; feedback keys action.sendInvoiceCmd.success / action.sendInvoiceCmd.error */
  async sendInvoiceCmd(): Promise<void> {
    if (!this.sendInvoiceCmdInvoiceId) {
      this.sendInvoiceCmdState = 'idle';
      setState('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.sendInvoiceCmdState = 'loading';
    setState('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'loading');
    this.sendInvoiceCmdError = '';
    setState('ui.invoiceWorkspace.action.sendInvoiceCmd.error', '');
    const params: SendInvoiceCmdInput = {
      invoiceId: this.sendInvoiceCmdInvoiceId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<SendInvoiceCmdOutput>(sendInvoiceCmdRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.sendInvoiceCmd.error');
      this.sendInvoiceCmdError = errMsg;
      setState('ui.invoiceWorkspace.action.sendInvoiceCmd.error', errMsg);
      this.sendInvoiceCmdState = 'error';
      setState('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: SendInvoiceCmdOutput | null = response.data ?? null;
    this.sendInvoiceCmdOutput = data;
    setState('ui.invoiceWorkspace.output.sendInvoiceCmd', data);
    try {
      await this.loadListInvoices();
      if (this.listInvoicesState === 'error') {
        this.sendInvoiceCmdState = 'error';
        setState('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('sendInvoiceCmd refresh failed', refreshError);
      this.sendInvoiceCmdState = 'error';
      setState('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    this.sendInvoiceCmdInvoiceId = '';
    setState('ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId', '');
    this.sendInvoiceCmdState = 'success';
    setState('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'success');
    this.requestUpdate();
  }

  /** handler for action sendInvoiceCmd — bind UI events here */
  handleSendInvoiceCmdClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.sendInvoiceCmd();
    });
  }

  /** setter for state ui.invoiceWorkspace.input.listInvoices.status */
  setListInvoicesStatus(value: string): void {
    this.listInvoicesStatus = value;
    setState('ui.invoiceWorkspace.input.listInvoices.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listInvoicesStatus — bind UI events here */
  handleListInvoicesStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListInvoicesStatus(value);
  }

  /** setter for state ui.invoiceWorkspace.input.listInvoices.projectId */
  setListInvoicesProjectId(value: string): void {
    this.listInvoicesProjectId = value;
    setState('ui.invoiceWorkspace.input.listInvoices.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.listInvoicesProjectId — bind UI events here */
  handleListInvoicesProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListInvoicesProjectId(value);
  }

  /** setter for state ui.invoiceWorkspace.input.listInvoices.clientId */
  setListInvoicesClientId(value: string): void {
    this.listInvoicesClientId = value;
    setState('ui.invoiceWorkspace.input.listInvoices.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.listInvoicesClientId — bind UI events here */
  handleListInvoicesClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListInvoicesClientId(value);
  }

  /** setter for state ui.invoiceWorkspace.input.listInvoices.page */
  setListInvoicesPage(value: string): void {
    this.listInvoicesPage = value;
    setState('ui.invoiceWorkspace.input.listInvoices.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listInvoicesPage — bind UI events here */
  handleListInvoicesPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListInvoicesPage(value);
  }

  /** setter for state ui.invoiceWorkspace.input.listInvoices.pageSize */
  setListInvoicesPageSize(value: string): void {
    this.listInvoicesPageSize = value;
    setState('ui.invoiceWorkspace.input.listInvoices.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listInvoicesPageSize — bind UI events here */
  handleListInvoicesPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListInvoicesPageSize(value);
  }

  /** setter for state ui.invoiceWorkspace.input.createInvoiceCmd.projectId */
  setCreateInvoiceCmdProjectId(value: string): void {
    this.createInvoiceCmdProjectId = value;
    setState('ui.invoiceWorkspace.input.createInvoiceCmd.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.createInvoiceCmdProjectId — bind UI events here */
  handleCreateInvoiceCmdProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateInvoiceCmdProjectId(value);
  }

  /** setter for state ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber */
  setCreateInvoiceCmdInvoiceNumber(value: string): void {
    this.createInvoiceCmdInvoiceNumber = value;
    setState('ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber', value);
    this.requestUpdate();
  }

  /** handler for action set.createInvoiceCmdInvoiceNumber — bind UI events here */
  handleCreateInvoiceCmdInvoiceNumberChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateInvoiceCmdInvoiceNumber(value);
  }

  /** setter for state ui.invoiceWorkspace.input.createInvoiceCmd.clientId */
  setCreateInvoiceCmdClientId(value: string): void {
    this.createInvoiceCmdClientId = value;
    setState('ui.invoiceWorkspace.input.createInvoiceCmd.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.createInvoiceCmdClientId — bind UI events here */
  handleCreateInvoiceCmdClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateInvoiceCmdClientId(value);
  }

  /** setter for state ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId */
  setSendInvoiceCmdInvoiceId(value: string): void {
    this.sendInvoiceCmdInvoiceId = value;
    setState('ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId', value);
    this.requestUpdate();
  }

  /** handler for action set.sendInvoiceCmdInvoiceId — bind UI events here */
  handleSendInvoiceCmdInvoiceIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSendInvoiceCmdInvoiceId(value);
  }
}
