/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/clientBillingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState } from '/_102029_/l2/collabState.js';

import type { GetBillingSummaryOutput, GetInvoiceOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/clientBillingWorkspace.js';
import { getBillingSummaryRoute, getInvoiceRoute } from '/_102045_/l2/buildFlowFsm/web/contracts/clientBillingWorkspace.js';

export type { GetBillingSummaryInput, GetBillingSummaryOutput, GetInvoiceInput, GetInvoiceOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/clientBillingWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.clientBillingWorkspace.billingSummarySection.title": "Billing Summary",
"organism.clientBillingWorkspace.getBillingSummary.title": "View billing summary",
"intent.clientBillingWorkspace.getBillingSummary.list.title": "View billing summary",
"intent.clientBillingWorkspace.getBillingSummary.list.empty": "Nenhum registro encontrado",
"intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label": "Billing Summary Id",
"intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label": "Project Id",
"intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label": "Project Name",
"intent.clientBillingWorkspace.getBillingSummary.list.column.status.label": "Status",
"intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label": "Period Start",
"intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label": "Period End",
"intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label": "Labor Cost",
"intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label": "Material Cost",
"intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label": "Change Order Cost",
"intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label": "Total Cost",
"intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label": "Shared At",
"intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId.label": "Client Id",
"section.clientBillingWorkspace.invoiceSection.title": "Invoice",
"organism.clientBillingWorkspace.getInvoice.title": "View invoice",
"intent.clientBillingWorkspace.getInvoice.list.title": "View invoice",
"intent.clientBillingWorkspace.getInvoice.list.empty": "Nenhum registro encontrado",
"intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label": "Invoice Id",
"intent.clientBillingWorkspace.getInvoice.list.column.projectId.label": "Project Id",
"intent.clientBillingWorkspace.getInvoice.list.column.clientId.label": "Client Id",
"intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label": "Invoice Number",
"intent.clientBillingWorkspace.getInvoice.list.column.status.label": "Status",
"intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label": "Total Amount",
"intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label": "Sent At",
"intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label": "Created At",
"intent.clientBillingWorkspace.getInvoice.list.filter.clientId.label": "Client Id",
"section.clientBillingWorkspace.billing-summary-section.title": "Billing Summary",
"section.clientBillingWorkspace.invoice-section.title": "Invoice"
};

const message_pt_br = {
"section.clientBillingWorkspace.billingSummarySection.title": "Resumo de Cobrança",
"organism.clientBillingWorkspace.getBillingSummary.title": "Visualizar resumo de cobrança",
"intent.clientBillingWorkspace.getBillingSummary.list.title": "Visualizar resumo de cobrança",
"intent.clientBillingWorkspace.getBillingSummary.list.empty": "Nenhum registro encontrado",
"intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label": "ID do Resumo de Cobrança",
"intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label": "ID do Projeto",
"intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label": "Nome do Projeto",
"intent.clientBillingWorkspace.getBillingSummary.list.column.status.label": "Status",
"intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label": "Início do Período",
"intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label": "Fim do Período",
"intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label": "Custo de Mão de Obra",
"intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label": "Custo de Material",
"intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label": "Custo de Ordem de Mudança",
"intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label": "Custo Total",
"intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label": "Compartilhado Em",
"intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId.label": "ID do Cliente",
"section.clientBillingWorkspace.invoiceSection.title": "Fatura",
"organism.clientBillingWorkspace.getInvoice.title": "Visualizar fatura",
"intent.clientBillingWorkspace.getInvoice.list.title": "Visualizar fatura",
"intent.clientBillingWorkspace.getInvoice.list.empty": "Nenhum registro encontrado",
"intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label": "ID da Fatura",
"intent.clientBillingWorkspace.getInvoice.list.column.projectId.label": "ID do Projeto",
"intent.clientBillingWorkspace.getInvoice.list.column.clientId.label": "ID do Cliente",
"intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label": "Número da Fatura",
"intent.clientBillingWorkspace.getInvoice.list.column.status.label": "Status",
"intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label": "Valor Total",
"intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label": "Enviado Em",
"intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label": "Criado Em",
"intent.clientBillingWorkspace.getInvoice.list.filter.clientId.label": "ID do Cliente",
"section.clientBillingWorkspace.billing-summary-section.title": "Resumo de Cobrança",
"section.clientBillingWorkspace.invoice-section.title": "Fatura"
};

const message_es = {
"section.clientBillingWorkspace.billingSummarySection.title": "Resumen de Facturación",
"organism.clientBillingWorkspace.getBillingSummary.title": "Ver resumen de facturación",
"intent.clientBillingWorkspace.getBillingSummary.list.title": "Ver resumen de facturación",
"intent.clientBillingWorkspace.getBillingSummary.list.empty": "Ningún registro encontrado",
"intent.clientBillingWorkspace.getBillingSummary.list.column.billingSummaryId.label": "ID del Resumen de Facturación",
"intent.clientBillingWorkspace.getBillingSummary.list.column.projectId.label": "ID del Proyecto",
"intent.clientBillingWorkspace.getBillingSummary.list.column.projectName.label": "Nombre del Proyecto",
"intent.clientBillingWorkspace.getBillingSummary.list.column.status.label": "Estado",
"intent.clientBillingWorkspace.getBillingSummary.list.column.periodStart.label": "Inicio del Período",
"intent.clientBillingWorkspace.getBillingSummary.list.column.periodEnd.label": "Fin del Período",
"intent.clientBillingWorkspace.getBillingSummary.list.column.laborCost.label": "Costo de Mano de Obra",
"intent.clientBillingWorkspace.getBillingSummary.list.column.materialCost.label": "Costo de Material",
"intent.clientBillingWorkspace.getBillingSummary.list.column.changeOrderCost.label": "Costo de Orden de Cambio",
"intent.clientBillingWorkspace.getBillingSummary.list.column.totalCost.label": "Costo Total",
"intent.clientBillingWorkspace.getBillingSummary.list.column.sharedAt.label": "Compartido En",
"intent.clientBillingWorkspace.getBillingSummary.list.filter.clientId.label": "ID del Cliente",
"section.clientBillingWorkspace.invoiceSection.title": "Factura",
"organism.clientBillingWorkspace.getInvoice.title": "Ver factura",
"intent.clientBillingWorkspace.getInvoice.list.title": "Ver factura",
"intent.clientBillingWorkspace.getInvoice.list.empty": "Ningún registro encontrado",
"intent.clientBillingWorkspace.getInvoice.list.column.invoiceId.label": "ID de la Factura",
"intent.clientBillingWorkspace.getInvoice.list.column.projectId.label": "ID del Proyecto",
"intent.clientBillingWorkspace.getInvoice.list.column.clientId.label": "ID del Cliente",
"intent.clientBillingWorkspace.getInvoice.list.column.invoiceNumber.label": "Número de Factura",
"intent.clientBillingWorkspace.getInvoice.list.column.status.label": "Estado",
"intent.clientBillingWorkspace.getInvoice.list.column.totalAmount.label": "Monto Total",
"intent.clientBillingWorkspace.getInvoice.list.column.sentAt.label": "Enviado En",
"intent.clientBillingWorkspace.getInvoice.list.column.createdAt.label": "Creado En",
"intent.clientBillingWorkspace.getInvoice.list.filter.clientId.label": "ID del Cliente",
"section.clientBillingWorkspace.billing-summary-section.title": "Resumen de Facturación",
"section.clientBillingWorkspace.invoice-section.title": "Factura"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmClientBillingWorkspaceBase extends CollabLitElement {
  /** state ui.clientBillingWorkspace.status — pageStatus */
  @property({ type: String }) status = '';

  /** state ui.clientBillingWorkspace.action.getBillingSummary.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) getBillingSummaryState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId — input, route */
  @property({ type: String }) getBillingSummaryBillingSummaryId = '';

  /** state ui.clientBillingWorkspace.input.getBillingSummary.clientId — input, form */
  @property({ type: String }) getBillingSummaryClientId = '';

  /** state ui.clientBillingWorkspace.data.getBillingSummary — queryResult, outputShape: object */
  @property({ type: Object }) getBillingSummaryData: GetBillingSummaryOutput | null = null;

  /** state ui.clientBillingWorkspace.action.getInvoice.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) getInvoiceState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.clientBillingWorkspace.input.getInvoice.invoiceId — input, route */
  @property({ type: String }) getInvoiceInvoiceId = '';

  /** state ui.clientBillingWorkspace.input.getInvoice.clientId — input, form */
  @property({ type: String }) getInvoiceClientId = '';

  /** state ui.clientBillingWorkspace.data.getInvoice — queryResult, outputShape: object */
  @property({ type: Object }) getInvoiceData: GetInvoiceOutput | null = null;

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  /**
   * Parse the route pattern against the current pathname and return
   * a map of route-param name to decoded value.
   */
  private parseRouteParams(): Record<string, string> {
    const pattern = '/buildFlowFsm/clientBillingWorkspace/:billingSummaryId?/:invoiceId?';
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const part = patternParts[i]!;
      if (part.startsWith(':')) {
        const optional = part.endsWith('?');
        const name = optional ? part.slice(1, -1) : part.slice(1);
        if (i < pathParts.length && pathParts[i] !== undefined) {
          params[name] = decodeURIComponent(pathParts[i]!);
        }
      }
    }
    return params;
  }

  /** action getBillingSummary (query) — route buildFlowFsm.clientBillingWorkspace.getBillingSummary; inputs: billingSummaryId, clientId; writes getBillingSummaryData; status getBillingSummaryState */
  async loadGetBillingSummary(): Promise<void> {
    const routeParams = this.parseRouteParams();
    const routeBillingSummaryId = routeParams['billingSummaryId'] || '';
    if (routeBillingSummaryId) {
      this.getBillingSummaryBillingSummaryId = routeBillingSummaryId;
      setState('ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId', routeBillingSummaryId);
    }

    const billingSummaryId = this.getBillingSummaryBillingSummaryId;
    if (!billingSummaryId) {
      this.getBillingSummaryState = 'idle';
      setState('ui.clientBillingWorkspace.action.getBillingSummary.status', 'idle');
      this.getBillingSummaryData = null;
      setState('ui.clientBillingWorkspace.data.getBillingSummary', null);
      this.requestUpdate();
      return;
    }

    const clientId = this.getBillingSummaryClientId;
    if (!clientId) {
      this.getBillingSummaryState = 'idle';
      setState('ui.clientBillingWorkspace.action.getBillingSummary.status', 'idle');
      this.getBillingSummaryData = null;
      setState('ui.clientBillingWorkspace.data.getBillingSummary', null);
      this.requestUpdate();
      return;
    }

    this.getBillingSummaryState = 'loading';
    setState('ui.clientBillingWorkspace.action.getBillingSummary.status', 'loading');
    this.requestUpdate();

    const params = { billingSummaryId, clientId };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetBillingSummaryOutput>(getBillingSummaryRoute, params, options);

    if (response.ok) {
      this.getBillingSummaryData = response.data ?? null;
      setState('ui.clientBillingWorkspace.data.getBillingSummary', this.getBillingSummaryData);
      this.getBillingSummaryState = 'success';
      setState('ui.clientBillingWorkspace.action.getBillingSummary.status', 'success');
    } else {
      this.getBillingSummaryData = null;
      setState('ui.clientBillingWorkspace.data.getBillingSummary', null);
      this.getBillingSummaryState = 'error';
      setState('ui.clientBillingWorkspace.action.getBillingSummary.status', 'error');
      if (response.error) {
        console.error('getBillingSummary failed:', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action getBillingSummary — bind UI events here */
  handleGetBillingSummaryClick(_e: Event): void {
    void this.loadGetBillingSummary();
  }

  /** action getInvoice (query) — route buildFlowFsm.clientBillingWorkspace.getInvoice; inputs: invoiceId, clientId; writes getInvoiceData; status getInvoiceState */
  async loadGetInvoice(): Promise<void> {
    const routeParams = this.parseRouteParams();
    const routeInvoiceId = routeParams['invoiceId'] || '';
    if (routeInvoiceId) {
      this.getInvoiceInvoiceId = routeInvoiceId;
      setState('ui.clientBillingWorkspace.input.getInvoice.invoiceId', routeInvoiceId);
    }

    const invoiceId = this.getInvoiceInvoiceId;
    if (!invoiceId) {
      this.getInvoiceState = 'idle';
      setState('ui.clientBillingWorkspace.action.getInvoice.status', 'idle');
      this.getInvoiceData = null;
      setState('ui.clientBillingWorkspace.data.getInvoice', null);
      this.requestUpdate();
      return;
    }

    const clientId = this.getInvoiceClientId;
    if (!clientId) {
      this.getInvoiceState = 'idle';
      setState('ui.clientBillingWorkspace.action.getInvoice.status', 'idle');
      this.getInvoiceData = null;
      setState('ui.clientBillingWorkspace.data.getInvoice', null);
      this.requestUpdate();
      return;
    }

    this.getInvoiceState = 'loading';
    setState('ui.clientBillingWorkspace.action.getInvoice.status', 'loading');
    this.requestUpdate();

    const params = { invoiceId, clientId };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetInvoiceOutput>(getInvoiceRoute, params, options);

    if (response.ok) {
      this.getInvoiceData = response.data ?? null;
      setState('ui.clientBillingWorkspace.data.getInvoice', this.getInvoiceData);
      this.getInvoiceState = 'success';
      setState('ui.clientBillingWorkspace.action.getInvoice.status', 'success');
    } else {
      this.getInvoiceData = null;
      setState('ui.clientBillingWorkspace.data.getInvoice', null);
      this.getInvoiceState = 'error';
      setState('ui.clientBillingWorkspace.action.getInvoice.status', 'error');
      if (response.error) {
        console.error('getInvoice failed:', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action getInvoice — bind UI events here */
  handleGetInvoiceClick(_e: Event): void {
    void this.loadGetInvoice();
  }

  /** setter for state ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId */
  setGetBillingSummaryBillingSummaryId(value: string): void {
    this.getBillingSummaryBillingSummaryId = value;
    setState('ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId', value);
    this.requestUpdate();
  }

  /** handler for action set.getBillingSummaryBillingSummaryId — bind UI events here */
  handleGetBillingSummaryBillingSummaryIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setGetBillingSummaryBillingSummaryId(value);
  }

  /** setter for state ui.clientBillingWorkspace.input.getBillingSummary.clientId */
  setGetBillingSummaryClientId(value: string): void {
    this.getBillingSummaryClientId = value;
    setState('ui.clientBillingWorkspace.input.getBillingSummary.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.getBillingSummaryClientId — bind UI events here */
  handleGetBillingSummaryClientIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setGetBillingSummaryClientId(value);
  }

  /** setter for state ui.clientBillingWorkspace.input.getInvoice.invoiceId */
  setGetInvoiceInvoiceId(value: string): void {
    this.getInvoiceInvoiceId = value;
    setState('ui.clientBillingWorkspace.input.getInvoice.invoiceId', value);
    this.requestUpdate();
  }

  /** handler for action set.getInvoiceInvoiceId — bind UI events here */
  handleGetInvoiceInvoiceIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setGetInvoiceInvoiceId(value);
  }

  /** setter for state ui.clientBillingWorkspace.input.getInvoice.clientId */
  setGetInvoiceClientId(value: string): void {
    this.getInvoiceClientId = value;
    setState('ui.clientBillingWorkspace.input.getInvoice.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.getInvoiceClientId — bind UI events here */
  handleGetInvoiceClientIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setGetInvoiceClientId(value);
  }

  override connectedCallback(): void {
    super.connectedCallback();

    const storedStatus = getState('ui.clientBillingWorkspace.status');
    if (typeof storedStatus === 'string') {
      this.status = storedStatus;
    }

    const storedGetBillingSummaryState = getState('ui.clientBillingWorkspace.action.getBillingSummary.status');
    if (typeof storedGetBillingSummaryState === 'string') {
      this.getBillingSummaryState = storedGetBillingSummaryState as 'idle' | 'loading' | 'success' | 'error';
    }

    const storedBillingSummaryId = getState('ui.clientBillingWorkspace.input.getBillingSummary.billingSummaryId');
    if (typeof storedBillingSummaryId === 'string') {
      this.getBillingSummaryBillingSummaryId = storedBillingSummaryId;
    }

    const storedBillingSummaryClientId = getState('ui.clientBillingWorkspace.input.getBillingSummary.clientId');
    if (typeof storedBillingSummaryClientId === 'string') {
      this.getBillingSummaryClientId = storedBillingSummaryClientId;
    }

    const storedBillingSummaryData = getState('ui.clientBillingWorkspace.data.getBillingSummary');
    if (storedBillingSummaryData !== undefined && storedBillingSummaryData !== null) {
      this.getBillingSummaryData = storedBillingSummaryData as GetBillingSummaryOutput;
    }

    const storedGetInvoiceState = getState('ui.clientBillingWorkspace.action.getInvoice.status');
    if (typeof storedGetInvoiceState === 'string') {
      this.getInvoiceState = storedGetInvoiceState as 'idle' | 'loading' | 'success' | 'error';
    }

    const storedInvoiceId = getState('ui.clientBillingWorkspace.input.getInvoice.invoiceId');
    if (typeof storedInvoiceId === 'string') {
      this.getInvoiceInvoiceId = storedInvoiceId;
    }

    const storedInvoiceClientId = getState('ui.clientBillingWorkspace.input.getInvoice.clientId');
    if (typeof storedInvoiceClientId === 'string') {
      this.getInvoiceClientId = storedInvoiceClientId;
    }

    const storedInvoiceData = getState('ui.clientBillingWorkspace.data.getInvoice');
    if (storedInvoiceData !== undefined && storedInvoiceData !== null) {
      this.getInvoiceData = storedInvoiceData as GetInvoiceOutput;
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}
