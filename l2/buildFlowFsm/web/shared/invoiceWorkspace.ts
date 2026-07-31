/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';

import type { ListInvoicesOutput, CreateInvoiceCmdOutput, SendInvoiceCmdOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/invoiceWorkspace.js';
import { listInvoicesRoute, createInvoiceCmdRoute, sendInvoiceCmdRoute } from '/_102045_/l2/buildFlowFsm/web/contracts/invoiceWorkspace.js';

export type { ListInvoicesInput, ListInvoicesOutput, CreateInvoiceCmdInput, CreateInvoiceCmdOutput, SendInvoiceCmdInput, SendInvoiceCmdOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/invoiceWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.invoiceWorkspace.invoiceListSection.title": "Invoice Pipeline",
"organism.invoiceWorkspace.inline-row-command10.title": "Inline row command",
"intent.invoiceWorkspace.inline-row-command10.content.title": "Inline row command",
"organism.invoiceWorkspace.listInvoices.title": "Browse invoices",
"intent.invoiceWorkspace.listInvoices.list.title": "Browse invoices",
"intent.invoiceWorkspace.listInvoices.list.empty": "Nenhum registro encontrado",
"intent.invoiceWorkspace.listInvoices.list.column.invoices.label": "Invoices",
"intent.invoiceWorkspace.listInvoices.list.column.total.label": "Total",
"intent.invoiceWorkspace.listInvoices.list.filter.status.label": "Status",
"intent.invoiceWorkspace.listInvoices.list.filter.projectId.label": "Project Id",
"intent.invoiceWorkspace.listInvoices.list.filter.clientId.label": "Client Id",
"intent.invoiceWorkspace.listInvoices.list.filter.page.label": "Page",
"intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label": "Page Size",
"organism.invoiceWorkspace.sendInvoiceCmd.title": "Send invoice to client",
"intent.invoiceWorkspace.sendInvoiceCmd.form.title": "Send invoice to client",
"intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd": "Send invoice to client",
"section.invoiceWorkspace.createInvoiceSection.title": "Create Invoice",
"organism.invoiceWorkspace.createInvoiceCmd.title": "Create invoice",
"intent.invoiceWorkspace.createInvoiceCmd.form.title": "Create invoice",
"intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd": "Create invoice",
"intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label": "Invoice Number",
"section.invoiceWorkspace.sec-invoice-list.title": "Invoice List",
"organism.invoiceWorkspace.summary-first10.title": "Summary first",
"intent.invoiceWorkspace.summary-first10.content.title": "Summary first",
"section.invoiceWorkspace.sec-create-invoice.title": "Create Invoice"
};

const message_pt_br = {
"section.invoiceWorkspace.invoiceListSection.title": "Pipeline de Faturas",
"organism.invoiceWorkspace.inline-row-command10.title": "Comando de linha embutida",
"intent.invoiceWorkspace.inline-row-command10.content.title": "Comando de linha embutida",
"organism.invoiceWorkspace.listInvoices.title": "Navegar faturas",
"intent.invoiceWorkspace.listInvoices.list.title": "Navegar faturas",
"intent.invoiceWorkspace.listInvoices.list.empty": "Nenhum registro encontrado",
"intent.invoiceWorkspace.listInvoices.list.column.invoices.label": "Faturas",
"intent.invoiceWorkspace.listInvoices.list.column.total.label": "Total",
"intent.invoiceWorkspace.listInvoices.list.filter.status.label": "Status",
"intent.invoiceWorkspace.listInvoices.list.filter.projectId.label": "ID do Projeto",
"intent.invoiceWorkspace.listInvoices.list.filter.clientId.label": "ID do Cliente",
"intent.invoiceWorkspace.listInvoices.list.filter.page.label": "Página",
"intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label": "Tamanho da Página",
"organism.invoiceWorkspace.sendInvoiceCmd.title": "Enviar fatura para o cliente",
"intent.invoiceWorkspace.sendInvoiceCmd.form.title": "Enviar fatura para o cliente",
"intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd": "Enviar fatura para o cliente",
"section.invoiceWorkspace.createInvoiceSection.title": "Criar Fatura",
"organism.invoiceWorkspace.createInvoiceCmd.title": "Criar fatura",
"intent.invoiceWorkspace.createInvoiceCmd.form.title": "Criar fatura",
"intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd": "Criar fatura",
"intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label": "Número da Fatura",
"section.invoiceWorkspace.sec-invoice-list.title": "Lista de Faturas",
"organism.invoiceWorkspace.summary-first10.title": "Resumo inicial",
"intent.invoiceWorkspace.summary-first10.content.title": "Resumo inicial",
"section.invoiceWorkspace.sec-create-invoice.title": "Criar Fatura"
};

const message_es = {
"section.invoiceWorkspace.invoiceListSection.title": "Flujo de Facturas",
"organism.invoiceWorkspace.inline-row-command10.title": "Comando de fila en línea",
"intent.invoiceWorkspace.inline-row-command10.content.title": "Comando de fila en línea",
"organism.invoiceWorkspace.listInvoices.title": "Explorar facturas",
"intent.invoiceWorkspace.listInvoices.list.title": "Explorar facturas",
"intent.invoiceWorkspace.listInvoices.list.empty": "No se encontraron registros",
"intent.invoiceWorkspace.listInvoices.list.column.invoices.label": "Facturas",
"intent.invoiceWorkspace.listInvoices.list.column.total.label": "Total",
"intent.invoiceWorkspace.listInvoices.list.filter.status.label": "Estado",
"intent.invoiceWorkspace.listInvoices.list.filter.projectId.label": "ID del Proyecto",
"intent.invoiceWorkspace.listInvoices.list.filter.clientId.label": "ID del Cliente",
"intent.invoiceWorkspace.listInvoices.list.filter.page.label": "Página",
"intent.invoiceWorkspace.listInvoices.list.filter.pageSize.label": "Tamaño de Página",
"organism.invoiceWorkspace.sendInvoiceCmd.title": "Enviar factura al cliente",
"intent.invoiceWorkspace.sendInvoiceCmd.form.title": "Enviar factura al cliente",
"intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd": "Enviar factura al cliente",
"section.invoiceWorkspace.createInvoiceSection.title": "Crear Factura",
"organism.invoiceWorkspace.createInvoiceCmd.title": "Crear factura",
"intent.invoiceWorkspace.createInvoiceCmd.form.title": "Crear factura",
"intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd": "Crear factura",
"intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label": "Número de Factura",
"section.invoiceWorkspace.sec-invoice-list.title": "Lista de Facturas",
"organism.invoiceWorkspace.summary-first10.title": "Resumen inicial",
"intent.invoiceWorkspace.summary-first10.content.title": "Resumen inicial",
"section.invoiceWorkspace.sec-create-invoice.title": "Crear Factura"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmInvoiceWorkspaceBase extends CollabLitElement {
  /** state ui.invoiceWorkspace.status — pageStatus */
  @property() status = '';

  /** state ui.invoiceWorkspace.action.listInvoices.status — actionStatus, values: idle|loading|success|error */
  @property() listInvoicesState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.invoiceWorkspace.input.listInvoices.status — input, form */
  @property() listInvoicesStatus = '';

  /** state ui.invoiceWorkspace.input.listInvoices.projectId — input, form */
  @property() listInvoicesProjectId = '';

  /** state ui.invoiceWorkspace.input.listInvoices.clientId — input, form */
  @property() listInvoicesClientId = '';

  /** state ui.invoiceWorkspace.input.listInvoices.page — input, form */
  @property() listInvoicesPage = '';

  /** state ui.invoiceWorkspace.input.listInvoices.pageSize — input, form */
  @property() listInvoicesPageSize = '';

  /** state ui.invoiceWorkspace.data.listInvoices — queryResult, outputShape: paginated */
  @property() listInvoicesData: ListInvoicesOutput = { invoices: [], total: 0 };

  /** state ui.invoiceWorkspace.action.createInvoiceCmd.status — actionStatus, values: idle|loading|success|error */
  @property() createInvoiceCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.invoiceWorkspace.input.createInvoiceCmd.projectId — input, selection */
  @property() createInvoiceCmdProjectId = '';

  /** state ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber — input, form */
  @property() createInvoiceCmdInvoiceNumber = '';

  /** state ui.invoiceWorkspace.input.createInvoiceCmd.clientId — input, selection */
  @property() createInvoiceCmdClientId = '';

  /** state ui.invoiceWorkspace.output.createInvoiceCmd — commandOutput, outputShape: object */
  @property() createInvoiceCmdOutput: CreateInvoiceCmdOutput | null = null;

  /** state ui.invoiceWorkspace.action.createInvoiceCmd.error — actionError */
  @property() createInvoiceCmdError = '';

  /** state ui.invoiceWorkspace.action.sendInvoiceCmd.status — actionStatus, values: idle|loading|success|error */
  @property() sendInvoiceCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId — input, selection */
  @property() sendInvoiceCmdInvoiceId = '';

  /** state ui.invoiceWorkspace.output.sendInvoiceCmd — commandOutput, outputShape: object */
  @property() sendInvoiceCmdOutput: SendInvoiceCmdOutput | null = null;

  /** state ui.invoiceWorkspace.action.sendInvoiceCmd.error — actionError */
  @property() sendInvoiceCmdError = '';

  private subscribedKeys: string[] = [
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
    'ui.invoiceWorkspace.action.sendInvoiceCmd.error'
  ];

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  /** handler for action listInvoices — bind UI events here */
  handleListInvoicesClick(_e: Event): void {
    this.loadListInvoices();
  }

  /** action listInvoices (query) — route buildFlowFsm.invoiceWorkspace.listInvoices; inputs: status, projectId, clientId, page, pageSize; writes ui.invoiceWorkspace.data.listInvoices; status ui.invoiceWorkspace.action.listInvoices.status */
  async loadListInvoices(): Promise<void> {
    this.listInvoicesState = 'loading';
    setState('ui.invoiceWorkspace.action.listInvoices.status', 'loading');
    this.requestUpdate();

    const params: Record<string, unknown> = {
      status: this.listInvoicesStatus || undefined,
      projectId: this.listInvoicesProjectId || undefined,
      clientId: this.listInvoicesClientId || undefined,
      page: this.listInvoicesPage ? Number(this.listInvoicesPage) : undefined,
      pageSize: this.listInvoicesPageSize ? Number(this.listInvoicesPageSize) : undefined
    };

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListInvoicesOutput>(listInvoicesRoute, params, options);

    if (response.ok) {
      const data: ListInvoicesOutput = response.data ?? { invoices: [], total: 0 };
      this.listInvoicesData = data;
      setState('ui.invoiceWorkspace.data.listInvoices', data);
      this.listInvoicesState = 'success';
      setState('ui.invoiceWorkspace.action.listInvoices.status', 'success');
    } else {
      this.listInvoicesState = 'error';
      setState('ui.invoiceWorkspace.action.listInvoices.status', 'error');
      if (response.error) {
        console.error('listInvoices error:', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action createInvoiceCmd — bind UI events here */
  handleCreateInvoiceCmdClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createInvoiceCmd();
    });
  }

  /** action createInvoiceCmd (command) — route buildFlowFsm.invoiceWorkspace.createInvoiceCmd; inputs: projectId, invoiceNumber, clientId; writes ui.invoiceWorkspace.output.createInvoiceCmd; status ui.invoiceWorkspace.action.createInvoiceCmd.status; feedback keys action.createInvoiceCmd.success / action.createInvoiceCmd.error */
  async createInvoiceCmd(): Promise<void> {
    this.createInvoiceCmdState = 'loading';
    setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'loading');
    this.createInvoiceCmdError = '';
    setState('ui.invoiceWorkspace.action.createInvoiceCmd.error', '');
    this.requestUpdate();

    const params: Record<string, unknown> = {
      projectId: this.createInvoiceCmdProjectId,
      invoiceNumber: this.createInvoiceCmdInvoiceNumber,
      clientId: this.createInvoiceCmdClientId
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CreateInvoiceCmdOutput>(createInvoiceCmdRoute, params, options);

    if (response.ok) {
      const data: CreateInvoiceCmdOutput | null = response.data ?? null;
      this.createInvoiceCmdOutput = data;
      setState('ui.invoiceWorkspace.output.createInvoiceCmd', data);

      // Refresh listInvoices before declaring success
      await this.loadListInvoices();
      if (this.listInvoicesState === 'error') {
        this.createInvoiceCmdState = 'error';
        setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'error');
        this.requestUpdate();
        return;
      }

      // Clear form inputs
      this.createInvoiceCmdProjectId = '';
      setState('ui.invoiceWorkspace.input.createInvoiceCmd.projectId', '');
      this.createInvoiceCmdInvoiceNumber = '';
      setState('ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber', '');
      this.createInvoiceCmdClientId = '';
      setState('ui.invoiceWorkspace.input.createInvoiceCmd.clientId', '');

      this.createInvoiceCmdState = 'success';
      setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'success');
    } else {
      const errorMsg: string = response.error?.message ?? '';
      this.createInvoiceCmdError = errorMsg;
      setState('ui.invoiceWorkspace.action.createInvoiceCmd.error', errorMsg);
      this.createInvoiceCmdState = 'error';
      setState('ui.invoiceWorkspace.action.createInvoiceCmd.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action sendInvoiceCmd — bind UI events here */
  handleSendInvoiceCmdClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.sendInvoiceCmd();
    });
  }

  /** action sendInvoiceCmd (command) — route buildFlowFsm.invoiceWorkspace.sendInvoiceCmd; inputs: invoiceId; writes ui.invoiceWorkspace.output.sendInvoiceCmd; status ui.invoiceWorkspace.action.sendInvoiceCmd.status; feedback keys action.sendInvoiceCmd.success / action.sendInvoiceCmd.error */
  async sendInvoiceCmd(): Promise<void> {
    this.sendInvoiceCmdState = 'loading';
    setState('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'loading');
    this.sendInvoiceCmdError = '';
    setState('ui.invoiceWorkspace.action.sendInvoiceCmd.error', '');
    this.requestUpdate();

    const params: Record<string, unknown> = {
      invoiceId: this.sendInvoiceCmdInvoiceId
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<SendInvoiceCmdOutput>(sendInvoiceCmdRoute, params, options);

    if (response.ok) {
      const data: SendInvoiceCmdOutput | null = response.data ?? null;
      this.sendInvoiceCmdOutput = data;
      setState('ui.invoiceWorkspace.output.sendInvoiceCmd', data);

      // Refresh listInvoices before declaring success
      await this.loadListInvoices();
      if (this.listInvoicesState === 'error') {
        this.sendInvoiceCmdState = 'error';
        setState('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'error');
        this.requestUpdate();
        return;
      }

      // Clear selection input
      this.sendInvoiceCmdInvoiceId = '';
      setState('ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId', '');

      this.sendInvoiceCmdState = 'success';
      setState('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'success');
    } else {
      const errorMsg: string = response.error?.message ?? '';
      this.sendInvoiceCmdError = errorMsg;
      setState('ui.invoiceWorkspace.action.sendInvoiceCmd.error', errorMsg);
      this.sendInvoiceCmdState = 'error';
      setState('ui.invoiceWorkspace.action.sendInvoiceCmd.status', 'error');
    }
    this.requestUpdate();
  }

  /** setter for state ui.invoiceWorkspace.input.listInvoices.status */
  setListInvoicesStatus(value: string): void {
    this.listInvoicesStatus = value;
    setState('ui.invoiceWorkspace.input.listInvoices.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listInvoicesStatus — bind UI events here */
  handleListInvoicesStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (target) {
      this.setListInvoicesStatus(target.value);
    }
  }

  /** setter for state ui.invoiceWorkspace.input.listInvoices.projectId */
  setListInvoicesProjectId(value: string): void {
    this.listInvoicesProjectId = value;
    setState('ui.invoiceWorkspace.input.listInvoices.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.listInvoicesProjectId — bind UI events here */
  handleListInvoicesProjectIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (target) {
      this.setListInvoicesProjectId(target.value);
    }
  }

  /** setter for state ui.invoiceWorkspace.input.listInvoices.clientId */
  setListInvoicesClientId(value: string): void {
    this.listInvoicesClientId = value;
    setState('ui.invoiceWorkspace.input.listInvoices.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.listInvoicesClientId — bind UI events here */
  handleListInvoicesClientIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (target) {
      this.setListInvoicesClientId(target.value);
    }
  }

  /** setter for state ui.invoiceWorkspace.input.listInvoices.page */
  setListInvoicesPage(value: string): void {
    this.listInvoicesPage = value;
    setState('ui.invoiceWorkspace.input.listInvoices.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listInvoicesPage — bind UI events here */
  handleListInvoicesPageChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (target) {
      this.setListInvoicesPage(target.value);
    }
  }

  /** setter for state ui.invoiceWorkspace.input.listInvoices.pageSize */
  setListInvoicesPageSize(value: string): void {
    this.listInvoicesPageSize = value;
    setState('ui.invoiceWorkspace.input.listInvoices.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listInvoicesPageSize — bind UI events here */
  handleListInvoicesPageSizeChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (target) {
      this.setListInvoicesPageSize(target.value);
    }
  }

  /** setter for state ui.invoiceWorkspace.input.createInvoiceCmd.projectId */
  setCreateInvoiceCmdProjectId(value: string): void {
    this.createInvoiceCmdProjectId = value;
    setState('ui.invoiceWorkspace.input.createInvoiceCmd.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.createInvoiceCmdProjectId — bind UI events here */
  handleCreateInvoiceCmdProjectIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (target) {
      this.setCreateInvoiceCmdProjectId(target.value);
    }
  }

  /** setter for state ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber */
  setCreateInvoiceCmdInvoiceNumber(value: string): void {
    this.createInvoiceCmdInvoiceNumber = value;
    setState('ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber', value);
    this.requestUpdate();
  }

  /** handler for action set.createInvoiceCmdInvoiceNumber — bind UI events here */
  handleCreateInvoiceCmdInvoiceNumberChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (target) {
      this.setCreateInvoiceCmdInvoiceNumber(target.value);
    }
  }

  /** setter for state ui.invoiceWorkspace.input.createInvoiceCmd.clientId */
  setCreateInvoiceCmdClientId(value: string): void {
    this.createInvoiceCmdClientId = value;
    setState('ui.invoiceWorkspace.input.createInvoiceCmd.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.createInvoiceCmdClientId — bind UI events here */
  handleCreateInvoiceCmdClientIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (target) {
      this.setCreateInvoiceCmdClientId(target.value);
    }
  }

  /** setter for state ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId */
  setSendInvoiceCmdInvoiceId(value: string): void {
    this.sendInvoiceCmdInvoiceId = value;
    setState('ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId', value);
    this.requestUpdate();
  }

  /** handler for action set.sendInvoiceCmdInvoiceId — bind UI events here */
  handleSendInvoiceCmdInvoiceIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement | null;
    if (target) {
      this.setSendInvoiceCmdInvoiceId(target.value);
    }
  }

  /** collabState notify handler — assigns external state changes to mapped class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.invoiceWorkspace.status':
        this.status = value as string;
        break;
      case 'ui.invoiceWorkspace.action.listInvoices.status':
        this.listInvoicesState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.status':
        this.listInvoicesStatus = value as string;
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.projectId':
        this.listInvoicesProjectId = value as string;
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.clientId':
        this.listInvoicesClientId = value as string;
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.page':
        this.listInvoicesPage = value as string;
        break;
      case 'ui.invoiceWorkspace.input.listInvoices.pageSize':
        this.listInvoicesPageSize = value as string;
        break;
      case 'ui.invoiceWorkspace.data.listInvoices':
        this.listInvoicesData = value as ListInvoicesOutput;
        break;
      case 'ui.invoiceWorkspace.action.createInvoiceCmd.status':
        this.createInvoiceCmdState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.invoiceWorkspace.input.createInvoiceCmd.projectId':
        this.createInvoiceCmdProjectId = value as string;
        break;
      case 'ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber':
        this.createInvoiceCmdInvoiceNumber = value as string;
        break;
      case 'ui.invoiceWorkspace.input.createInvoiceCmd.clientId':
        this.createInvoiceCmdClientId = value as string;
        break;
      case 'ui.invoiceWorkspace.output.createInvoiceCmd':
        this.createInvoiceCmdOutput = value as CreateInvoiceCmdOutput | null;
        break;
      case 'ui.invoiceWorkspace.action.createInvoiceCmd.error':
        this.createInvoiceCmdError = value as string;
        break;
      case 'ui.invoiceWorkspace.action.sendInvoiceCmd.status':
        this.sendInvoiceCmdState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId':
        this.sendInvoiceCmdInvoiceId = value as string;
        break;
      case 'ui.invoiceWorkspace.output.sendInvoiceCmd':
        this.sendInvoiceCmdOutput = value as SendInvoiceCmdOutput | null;
        break;
      case 'ui.invoiceWorkspace.action.sendInvoiceCmd.error':
        this.sendInvoiceCmdError = value as string;
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  override connectedCallback(): void {
    super.connectedCallback();

    // Initialize state from collabState where useful
    this.status = (getState('ui.invoiceWorkspace.status') as string) ?? '';
    this.listInvoicesState = (getState('ui.invoiceWorkspace.action.listInvoices.status') as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
    this.listInvoicesStatus = (getState('ui.invoiceWorkspace.input.listInvoices.status') as string) ?? '';
    this.listInvoicesProjectId = (getState('ui.invoiceWorkspace.input.listInvoices.projectId') as string) ?? '';
    this.listInvoicesClientId = (getState('ui.invoiceWorkspace.input.listInvoices.clientId') as string) ?? '';
    this.listInvoicesPage = (getState('ui.invoiceWorkspace.input.listInvoices.page') as string) ?? '';
    this.listInvoicesPageSize = (getState('ui.invoiceWorkspace.input.listInvoices.pageSize') as string) ?? '';
    const storedListInvoicesData = getState('ui.invoiceWorkspace.data.listInvoices') as ListInvoicesOutput | undefined;
    this.listInvoicesData = storedListInvoicesData ?? { invoices: [], total: 0 };
    this.createInvoiceCmdState = (getState('ui.invoiceWorkspace.action.createInvoiceCmd.status') as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
    this.createInvoiceCmdProjectId = (getState('ui.invoiceWorkspace.input.createInvoiceCmd.projectId') as string) ?? '';
    this.createInvoiceCmdInvoiceNumber = (getState('ui.invoiceWorkspace.input.createInvoiceCmd.invoiceNumber') as string) ?? '';
    this.createInvoiceCmdClientId = (getState('ui.invoiceWorkspace.input.createInvoiceCmd.clientId') as string) ?? '';
    this.createInvoiceCmdOutput = (getState('ui.invoiceWorkspace.output.createInvoiceCmd') as CreateInvoiceCmdOutput | null) ?? null;
    this.createInvoiceCmdError = (getState('ui.invoiceWorkspace.action.createInvoiceCmd.error') as string) ?? '';
    this.sendInvoiceCmdState = (getState('ui.invoiceWorkspace.action.sendInvoiceCmd.status') as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
    this.sendInvoiceCmdInvoiceId = (getState('ui.invoiceWorkspace.input.sendInvoiceCmd.invoiceId') as string) ?? '';
    this.sendInvoiceCmdOutput = (getState('ui.invoiceWorkspace.output.sendInvoiceCmd') as SendInvoiceCmdOutput | null) ?? null;
    this.sendInvoiceCmdError = (getState('ui.invoiceWorkspace.action.sendInvoiceCmd.error') as string) ?? '';

    // Subscribe to shared states
    subscribe(this.subscribedKeys, this);

    // Run initial loads
    this.loadListInvoices();
  }

  override disconnectedCallback(): void {
    unsubscribe(this.subscribedKeys, this);
    super.disconnectedCallback();
  }
}
