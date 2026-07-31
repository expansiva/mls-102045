/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  ListBillingSummariesInput,
  ListBillingSummariesOutput,
  CreateBillingSummaryCmdInput,
  CreateBillingSummaryCmdOutput,
  ShareBillingSummaryCmdInput,
  ShareBillingSummaryCmdOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/billingSummaryWorkspace.js';
import {
  listBillingSummariesRoute,
  createBillingSummaryCmdRoute,
  shareBillingSummaryCmdRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/billingSummaryWorkspace.js';

export type {
  ListBillingSummariesInput,
  ListBillingSummariesOutput,
  CreateBillingSummaryCmdInput,
  CreateBillingSummaryCmdOutput,
  ShareBillingSummaryCmdInput,
  ShareBillingSummaryCmdOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/billingSummaryWorkspace.js';

/// **collab_i18n_start**
const message_en = {
  'section.billingSummaryWorkspace.sec-billing-board.title': 'Billing Summary Pipeline',
  'organism.billingSummaryWorkspace.listBillingSummaries.title': 'Browse billing summaries',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.title': 'Browse billing summaries',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.empty': 'Nenhum registro encontrado',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.column.billingSummaries.label': 'Billing Summaries',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label': 'Total',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label': 'Project Id',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label': 'Status',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.page.label': 'Page',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.pageSize.label': 'Page Size',
  'organism.billingSummaryWorkspace.createBillingSummaryCmd.title': 'Create billing summary',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.title': 'Create billing summary',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd': 'Create billing summary',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label': 'Period Start',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label': 'Period End',
  'organism.billingSummaryWorkspace.shareBillingSummaryCmd.title': 'Share billing summary with client',
  'intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.title': 'Share billing summary with client',
  'intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd': 'Share billing summary with client',
  'intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.field.status.label': 'Status',
  'section.billingSummaryWorkspace.sec-billing-workspace.title': 'Billing Summaries Workspace',
};

const message_pt_br = {
  'section.billingSummaryWorkspace.sec-billing-board.title': 'Pipeline de Resumo de Faturamento',
  'organism.billingSummaryWorkspace.listBillingSummaries.title': 'Navegar pelos resumos de faturamento',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.title': 'Navegar pelos resumos de faturamento',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.empty': 'Nenhum registro encontrado',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.column.billingSummaries.label': 'Resumos de Faturamento',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label': 'Total',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label': 'ID do Projeto',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label': 'Status',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.page.label': 'Página',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.pageSize.label': 'Tamanho da Página',
  'organism.billingSummaryWorkspace.createBillingSummaryCmd.title': 'Criar resumo de faturamento',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.title': 'Criar resumo de faturamento',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd': 'Criar resumo de faturamento',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label': 'Início do Período',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label': 'Fim do Período',
  'organism.billingSummaryWorkspace.shareBillingSummaryCmd.title': 'Compartilhar resumo de faturamento com o cliente',
  'intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.title': 'Compartilhar resumo de faturamento com o cliente',
  'intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd': 'Compartilhar resumo de faturamento com o cliente',
  'intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.field.status.label': 'Status',
  'section.billingSummaryWorkspace.sec-billing-workspace.title': 'Área de Trabalho de Resumos de Faturamento',
};

const message_es = {
  'section.billingSummaryWorkspace.sec-billing-board.title': 'Resumen de Facturación Pipeline',
  'organism.billingSummaryWorkspace.listBillingSummaries.title': 'Explorar resúmenes de facturación',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.title': 'Explorar resúmenes de facturación',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.empty': 'No se encontraron registros',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.column.billingSummaries.label': 'Resúmenes de Facturación',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label': 'Total',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label': 'ID del Proyecto',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label': 'Estado',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.page.label': 'Página',
  'intent.billingSummaryWorkspace.listBillingSummaries.list.filter.pageSize.label': 'Tamaño de Página',
  'organism.billingSummaryWorkspace.createBillingSummaryCmd.title': 'Crear resumen de facturación',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.title': 'Crear resumen de facturación',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd': 'Crear resumen de facturación',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label': 'Inicio del Período',
  'intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label': 'Fin del Período',
  'organism.billingSummaryWorkspace.shareBillingSummaryCmd.title': 'Compartir resumen de facturación con el cliente',
  'intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.title': 'Compartir resumen de facturación con el cliente',
  'intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd': 'Compartir resumen de facturación con el cliente',
  'intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.field.status.label': 'Estado',
  'section.billingSummaryWorkspace.sec-billing-workspace.title': 'Área de Trabajo de Resúmenes de Facturación',
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, 'pt-br': message_pt_br, es: message_es };
/// **collab_i18n_end**

const LIST_BILLING_SUMMARIES_DATA_DEFAULT: ListBillingSummariesOutput = { billingSummaries: [], total: 0 };

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.billingSummaryWorkspace.status',
  'ui.billingSummaryWorkspace.action.listBillingSummaries.status',
  'ui.billingSummaryWorkspace.input.listBillingSummaries.projectId',
  'ui.billingSummaryWorkspace.input.listBillingSummaries.status',
  'ui.billingSummaryWorkspace.input.listBillingSummaries.page',
  'ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize',
  'ui.billingSummaryWorkspace.data.listBillingSummaries',
  'ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status',
  'ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId',
  'ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart',
  'ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd',
  'ui.billingSummaryWorkspace.output.createBillingSummaryCmd',
  'ui.billingSummaryWorkspace.action.createBillingSummaryCmd.error',
  'ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status',
  'ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId',
  'ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status',
  'ui.billingSummaryWorkspace.output.shareBillingSummaryCmd',
  'ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.error',
];

export class BuildFlowFsmBillingSummaryWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state listBillingSummariesState — actionStatus, values: idle|loading|success|error */
  @property() listBillingSummariesState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state listBillingSummariesProjectId — input */
  @property() listBillingSummariesProjectId: string = '';
  /** state listBillingSummariesStatus — input */
  @property() listBillingSummariesStatus: string = '';
  /** state listBillingSummariesPage — input */
  @property() listBillingSummariesPage: string = '';
  /** state listBillingSummariesPageSize — input */
  @property() listBillingSummariesPageSize: string = '';
  /** state listBillingSummariesData — queryResult, outputShape: paginated */
  @property() listBillingSummariesData: ListBillingSummariesOutput = LIST_BILLING_SUMMARIES_DATA_DEFAULT;
  /** state createBillingSummaryCmdState — actionStatus, values: idle|loading|success|error */
  @property() createBillingSummaryCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state createBillingSummaryCmdProjectId — input */
  @property() createBillingSummaryCmdProjectId: string = '';
  /** state createBillingSummaryCmdPeriodStart — input */
  @property() createBillingSummaryCmdPeriodStart: string = '';
  /** state createBillingSummaryCmdPeriodEnd — input */
  @property() createBillingSummaryCmdPeriodEnd: string = '';
  /** state createBillingSummaryCmdOutput — commandOutput */
  @property() createBillingSummaryCmdOutput: CreateBillingSummaryCmdOutput | null = null;
  /** state createBillingSummaryCmdError — actionError */
  @property() createBillingSummaryCmdError: string = '';
  /** state shareBillingSummaryCmdState — actionStatus, values: idle|loading|success|error */
  @property() shareBillingSummaryCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state shareBillingSummaryCmdBillingSummaryId — input */
  @property() shareBillingSummaryCmdBillingSummaryId: string = '';
  /** state shareBillingSummaryCmdStatus — input */
  @property() shareBillingSummaryCmdStatus: string = '';
  /** state shareBillingSummaryCmdOutput — commandOutput */
  @property() shareBillingSummaryCmdOutput: ShareBillingSummaryCmdOutput | null = null;
  /** state shareBillingSummaryCmdError — actionError */
  @property() shareBillingSummaryCmdError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.billingSummaryWorkspace.status', '');
    this.initStateValue('ui.billingSummaryWorkspace.action.listBillingSummaries.status', 'idle');
    this.initStateValue('ui.billingSummaryWorkspace.input.listBillingSummaries.projectId', '');
    this.initStateValue('ui.billingSummaryWorkspace.input.listBillingSummaries.status', '');
    this.initStateValue('ui.billingSummaryWorkspace.input.listBillingSummaries.page', '');
    this.initStateValue('ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize', '');
    this.initStateValue('ui.billingSummaryWorkspace.data.listBillingSummaries', LIST_BILLING_SUMMARIES_DATA_DEFAULT);
    this.initStateValue('ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status', 'idle');
    this.initStateValue('ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId', '');
    this.initStateValue('ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart', '');
    this.initStateValue('ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd', '');
    this.initStateValue('ui.billingSummaryWorkspace.output.createBillingSummaryCmd', null);
    this.initStateValue('ui.billingSummaryWorkspace.action.createBillingSummaryCmd.error', '');
    this.initStateValue('ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status', 'idle');
    this.initStateValue('ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId', '');
    this.initStateValue('ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status', '');
    this.initStateValue('ui.billingSummaryWorkspace.output.shareBillingSummaryCmd', null);
    this.initStateValue('ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.error', '');
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadListBillingSummaries();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.billingSummaryWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.action.listBillingSummaries.status':
        this.listBillingSummariesState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.billingSummaryWorkspace.input.listBillingSummaries.projectId':
        this.listBillingSummariesProjectId = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.listBillingSummaries.status':
        this.listBillingSummariesStatus = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.listBillingSummaries.page':
        this.listBillingSummariesPage = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize':
        this.listBillingSummariesPageSize = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.data.listBillingSummaries':
        this.listBillingSummariesData = (value as ListBillingSummariesOutput) ?? LIST_BILLING_SUMMARIES_DATA_DEFAULT;
        break;
      case 'ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status':
        this.createBillingSummaryCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId':
        this.createBillingSummaryCmdProjectId = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart':
        this.createBillingSummaryCmdPeriodStart = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd':
        this.createBillingSummaryCmdPeriodEnd = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.output.createBillingSummaryCmd':
        this.createBillingSummaryCmdOutput = (value as CreateBillingSummaryCmdOutput | null) ?? null;
        break;
      case 'ui.billingSummaryWorkspace.action.createBillingSummaryCmd.error':
        this.createBillingSummaryCmdError = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status':
        this.shareBillingSummaryCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId':
        this.shareBillingSummaryCmdBillingSummaryId = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status':
        this.shareBillingSummaryCmdStatus = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.output.shareBillingSummaryCmd':
        this.shareBillingSummaryCmdOutput = (value as ShareBillingSummaryCmdOutput | null) ?? null;
        break;
      case 'ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.error':
        this.shareBillingSummaryCmdError = (value as string) ?? '';
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
      case 'ui.billingSummaryWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.action.listBillingSummaries.status':
        this.listBillingSummariesState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.billingSummaryWorkspace.input.listBillingSummaries.projectId':
        this.listBillingSummariesProjectId = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.listBillingSummaries.status':
        this.listBillingSummariesStatus = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.listBillingSummaries.page':
        this.listBillingSummariesPage = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize':
        this.listBillingSummariesPageSize = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.data.listBillingSummaries':
        this.listBillingSummariesData = (value as ListBillingSummariesOutput) ?? LIST_BILLING_SUMMARIES_DATA_DEFAULT;
        break;
      case 'ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status':
        this.createBillingSummaryCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId':
        this.createBillingSummaryCmdProjectId = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart':
        this.createBillingSummaryCmdPeriodStart = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd':
        this.createBillingSummaryCmdPeriodEnd = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.output.createBillingSummaryCmd':
        this.createBillingSummaryCmdOutput = (value as CreateBillingSummaryCmdOutput | null) ?? null;
        break;
      case 'ui.billingSummaryWorkspace.action.createBillingSummaryCmd.error':
        this.createBillingSummaryCmdError = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status':
        this.shareBillingSummaryCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId':
        this.shareBillingSummaryCmdBillingSummaryId = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status':
        this.shareBillingSummaryCmdStatus = (value as string) ?? '';
        break;
      case 'ui.billingSummaryWorkspace.output.shareBillingSummaryCmd':
        this.shareBillingSummaryCmdOutput = (value as ShareBillingSummaryCmdOutput | null) ?? null;
        break;
      case 'ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.error':
        this.shareBillingSummaryCmdError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/billingSummaryWorkspace(?:\/([^/]+))?(?:\/([^/]+))?\/?$/,
    );
    const rawProjectId: string = match && match[1] ? match[1] : '';
    let projectId: string = '';
    if (rawProjectId) {
      try {
        projectId = decodeURIComponent(rawProjectId);
      } catch {
        projectId = rawProjectId;
      }
    }
    if (projectId) {
      if (!this.createBillingSummaryCmdProjectId) {
        this.createBillingSummaryCmdProjectId = projectId;
        setState('ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId', projectId);
      }
    }
    const rawBillingSummaryId: string = match && match[2] ? match[2] : '';
    let billingSummaryId: string = '';
    if (rawBillingSummaryId) {
      try {
        billingSummaryId = decodeURIComponent(rawBillingSummaryId);
      } catch {
        billingSummaryId = rawBillingSummaryId;
      }
    }
    if (billingSummaryId) {
      if (!this.shareBillingSummaryCmdBillingSummaryId) {
        this.shareBillingSummaryCmdBillingSummaryId = billingSummaryId;
        setState('ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId', billingSummaryId);
      }
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

  /** action listBillingSummaries (query) — route buildFlowFsm.billingSummaryWorkspace.listBillingSummaries; inputs: projectId, status, page, pageSize; writes ui.billingSummaryWorkspace.data.listBillingSummaries; status ui.billingSummaryWorkspace.action.listBillingSummaries.status */
  async loadListBillingSummaries(): Promise<void> {
    this.syncRouteParams();
    this.listBillingSummariesState = 'loading';
    setState('ui.billingSummaryWorkspace.action.listBillingSummaries.status', 'loading');
    const params: ListBillingSummariesInput = {
    };
    if (this.listBillingSummariesProjectId) {
      params.projectId = this.listBillingSummariesProjectId;
    }
    if (this.listBillingSummariesStatus) {
      params.status = this.listBillingSummariesStatus;
    }
    if (this.listBillingSummariesPage !== '') {
      const pageNum = Number(this.listBillingSummariesPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.listBillingSummariesPageSize !== '') {
      const pageSizeNum = Number(this.listBillingSummariesPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListBillingSummariesOutput>(listBillingSummariesRoute, params, options);
    if (response.ok) {
      const data = response.data ?? LIST_BILLING_SUMMARIES_DATA_DEFAULT;
      this.listBillingSummariesData = data;
      setState('ui.billingSummaryWorkspace.data.listBillingSummaries', data);
      this.listBillingSummariesState = 'success';
      setState('ui.billingSummaryWorkspace.action.listBillingSummaries.status', 'success');
    } else {
      this.listBillingSummariesState = 'error';
      setState('ui.billingSummaryWorkspace.action.listBillingSummaries.status', 'error');
      if (response.error) {
        console.error('listBillingSummaries failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action listBillingSummaries — bind UI events here */
  handleListBillingSummariesClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadListBillingSummaries();
  }

  /** action createBillingSummaryCmd (command) — route buildFlowFsm.billingSummaryWorkspace.createBillingSummaryCmd; inputs: projectId, periodStart, periodEnd; writes ui.billingSummaryWorkspace.output.createBillingSummaryCmd; status ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status; feedback keys action.createBillingSummaryCmd.success / action.createBillingSummaryCmd.error */
  async createBillingSummaryCmd(): Promise<void> {
    this.syncRouteParams();
    if (!this.createBillingSummaryCmdProjectId) {
      this.createBillingSummaryCmdState = 'idle';
      setState('ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.createBillingSummaryCmdState = 'loading';
    setState('ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status', 'loading');
    this.createBillingSummaryCmdError = '';
    setState('ui.billingSummaryWorkspace.action.createBillingSummaryCmd.error', '');
    const params: CreateBillingSummaryCmdInput = {
      projectId: this.createBillingSummaryCmdProjectId,
      periodStart: this.createBillingSummaryCmdPeriodStart,
      periodEnd: this.createBillingSummaryCmdPeriodEnd,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CreateBillingSummaryCmdOutput>(createBillingSummaryCmdRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.createBillingSummaryCmd.error');
      this.createBillingSummaryCmdError = errMsg;
      setState('ui.billingSummaryWorkspace.action.createBillingSummaryCmd.error', errMsg);
      this.createBillingSummaryCmdState = 'error';
      setState('ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CreateBillingSummaryCmdOutput | null = response.data ?? null;
    this.createBillingSummaryCmdOutput = data;
    setState('ui.billingSummaryWorkspace.output.createBillingSummaryCmd', data);
    try {
      await this.loadListBillingSummaries();
      if (this.listBillingSummariesState === 'error') {
        this.createBillingSummaryCmdState = 'error';
        setState('ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('createBillingSummaryCmd refresh failed', refreshError);
      this.createBillingSummaryCmdState = 'error';
      setState('ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    this.createBillingSummaryCmdPeriodStart = '';
    setState('ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart', '');
    this.createBillingSummaryCmdPeriodEnd = '';
    setState('ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd', '');
    this.createBillingSummaryCmdState = 'success';
    setState('ui.billingSummaryWorkspace.action.createBillingSummaryCmd.status', 'success');
    this.requestUpdate();
  }

  /** handler for action createBillingSummaryCmd — bind UI events here */
  handleCreateBillingSummaryCmdClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createBillingSummaryCmd();
    });
  }

  /** action shareBillingSummaryCmd (command) — route buildFlowFsm.billingSummaryWorkspace.shareBillingSummaryCmd; inputs: billingSummaryId, status; writes ui.billingSummaryWorkspace.output.shareBillingSummaryCmd; status ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status; feedback keys action.shareBillingSummaryCmd.success / action.shareBillingSummaryCmd.error */
  async shareBillingSummaryCmd(): Promise<void> {
    this.syncRouteParams();
    if (!this.shareBillingSummaryCmdBillingSummaryId) {
      this.shareBillingSummaryCmdState = 'idle';
      setState('ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.shareBillingSummaryCmdState = 'loading';
    setState('ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status', 'loading');
    this.shareBillingSummaryCmdError = '';
    setState('ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.error', '');
    const params: ShareBillingSummaryCmdInput = {
      billingSummaryId: this.shareBillingSummaryCmdBillingSummaryId,
      status: this.shareBillingSummaryCmdStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<ShareBillingSummaryCmdOutput>(shareBillingSummaryCmdRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.shareBillingSummaryCmd.error');
      this.shareBillingSummaryCmdError = errMsg;
      setState('ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.error', errMsg);
      this.shareBillingSummaryCmdState = 'error';
      setState('ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: ShareBillingSummaryCmdOutput | null = response.data ?? null;
    this.shareBillingSummaryCmdOutput = data;
    setState('ui.billingSummaryWorkspace.output.shareBillingSummaryCmd', data);
    try {
      await this.loadListBillingSummaries();
      if (this.listBillingSummariesState === 'error') {
        this.shareBillingSummaryCmdState = 'error';
        setState('ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('shareBillingSummaryCmd refresh failed', refreshError);
      this.shareBillingSummaryCmdState = 'error';
      setState('ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    this.shareBillingSummaryCmdStatus = '';
    setState('ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status', '');
    this.shareBillingSummaryCmdState = 'success';
    setState('ui.billingSummaryWorkspace.action.shareBillingSummaryCmd.status', 'success');
    this.requestUpdate();
  }

  /** handler for action shareBillingSummaryCmd — bind UI events here */
  handleShareBillingSummaryCmdClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.shareBillingSummaryCmd();
    });
  }

  /** setter for state ui.billingSummaryWorkspace.input.listBillingSummaries.projectId */
  setListBillingSummariesProjectId(value: string): void {
    this.listBillingSummariesProjectId = value;
    setState('ui.billingSummaryWorkspace.input.listBillingSummaries.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.listBillingSummariesProjectId — bind UI events here */
  handleListBillingSummariesProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListBillingSummariesProjectId(value);
  }

  /** setter for state ui.billingSummaryWorkspace.input.listBillingSummaries.status */
  setListBillingSummariesStatus(value: string): void {
    this.listBillingSummariesStatus = value;
    setState('ui.billingSummaryWorkspace.input.listBillingSummaries.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listBillingSummariesStatus — bind UI events here */
  handleListBillingSummariesStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListBillingSummariesStatus(value);
  }

  /** setter for state ui.billingSummaryWorkspace.input.listBillingSummaries.page */
  setListBillingSummariesPage(value: string): void {
    this.listBillingSummariesPage = value;
    setState('ui.billingSummaryWorkspace.input.listBillingSummaries.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listBillingSummariesPage — bind UI events here */
  handleListBillingSummariesPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListBillingSummariesPage(value);
  }

  /** setter for state ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize */
  setListBillingSummariesPageSize(value: string): void {
    this.listBillingSummariesPageSize = value;
    setState('ui.billingSummaryWorkspace.input.listBillingSummaries.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listBillingSummariesPageSize — bind UI events here */
  handleListBillingSummariesPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListBillingSummariesPageSize(value);
  }

  /** setter for state ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId */
  setCreateBillingSummaryCmdProjectId(value: string): void {
    this.createBillingSummaryCmdProjectId = value;
    setState('ui.billingSummaryWorkspace.input.createBillingSummaryCmd.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.createBillingSummaryCmdProjectId — bind UI events here */
  handleCreateBillingSummaryCmdProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateBillingSummaryCmdProjectId(value);
  }

  /** setter for state ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart */
  setCreateBillingSummaryCmdPeriodStart(value: string): void {
    this.createBillingSummaryCmdPeriodStart = value;
    setState('ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodStart', value);
    this.requestUpdate();
  }

  /** handler for action set.createBillingSummaryCmdPeriodStart — bind UI events here */
  handleCreateBillingSummaryCmdPeriodStartChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateBillingSummaryCmdPeriodStart(value);
  }

  /** setter for state ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd */
  setCreateBillingSummaryCmdPeriodEnd(value: string): void {
    this.createBillingSummaryCmdPeriodEnd = value;
    setState('ui.billingSummaryWorkspace.input.createBillingSummaryCmd.periodEnd', value);
    this.requestUpdate();
  }

  /** handler for action set.createBillingSummaryCmdPeriodEnd — bind UI events here */
  handleCreateBillingSummaryCmdPeriodEndChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateBillingSummaryCmdPeriodEnd(value);
  }

  /** setter for state ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId */
  setShareBillingSummaryCmdBillingSummaryId(value: string): void {
    this.shareBillingSummaryCmdBillingSummaryId = value;
    setState('ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.billingSummaryId', value);
    this.requestUpdate();
  }

  /** handler for action set.shareBillingSummaryCmdBillingSummaryId — bind UI events here */
  handleShareBillingSummaryCmdBillingSummaryIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setShareBillingSummaryCmdBillingSummaryId(value);
  }

  /** setter for state ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status */
  setShareBillingSummaryCmdStatus(value: string): void {
    this.shareBillingSummaryCmdStatus = value;
    setState('ui.billingSummaryWorkspace.input.shareBillingSummaryCmd.status', value);
    this.requestUpdate();
  }

  /** handler for action set.shareBillingSummaryCmdStatus — bind UI events here */
  handleShareBillingSummaryCmdStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setShareBillingSummaryCmdStatus(value);
  }
}
