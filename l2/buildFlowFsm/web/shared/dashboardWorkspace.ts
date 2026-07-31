/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';

import type { GetDashboardSummaryInput, GetDashboardSummaryOutput, GetProjectListInput, GetProjectListOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/dashboardWorkspace.js';
import { getDashboardSummaryRoute, getProjectListRoute } from '/_102045_/l2/buildFlowFsm/web/contracts/dashboardWorkspace.js';

export type { GetDashboardSummaryInput, GetDashboardSummaryOutput, GetProjectListInput, GetProjectListOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/dashboardWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.dashboardWorkspace.kpiAndBudgetSection.title": "KPI & Budget Overview",
"organism.dashboardWorkspace.inline-row-command10.title": "Inline row command",
"intent.dashboardWorkspace.inline-row-command10.content.title": "Inline row command",
"organism.dashboardWorkspace.getDashboardSummary.title": "View operational dashboard",
"intent.dashboardWorkspace.getDashboardSummary.list.title": "View operational dashboard",
"intent.dashboardWorkspace.getDashboardSummary.list.empty": "Nenhum registro encontrado",
"intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label": "Projects",
"intent.dashboardWorkspace.getDashboardSummary.list.column.total.label": "Total",
"intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label": "Status",
"intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label": "Page",
"intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label": "Page Size",
"section.dashboardWorkspace.projectListSection.title": "Project List",
"organism.dashboardWorkspace.getProjectList.title": "Browse projects",
"intent.dashboardWorkspace.getProjectList.list.title": "Browse projects",
"intent.dashboardWorkspace.getProjectList.list.empty": "Nenhum registro encontrado",
"intent.dashboardWorkspace.getProjectList.list.column.projects.label": "Projects",
"intent.dashboardWorkspace.getProjectList.list.column.total.label": "Total",
"intent.dashboardWorkspace.getProjectList.list.filter.status.label": "Status",
"intent.dashboardWorkspace.getProjectList.list.filter.page.label": "Page",
"intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label": "Page Size"
};

const message_pt_br = {
"section.dashboardWorkspace.kpiAndBudgetSection.title": "Visão Geral de KPI e Orçamento",
"organism.dashboardWorkspace.inline-row-command10.title": "Comando de linha embutida",
"intent.dashboardWorkspace.inline-row-command10.content.title": "Comando de linha embutida",
"organism.dashboardWorkspace.getDashboardSummary.title": "Visualizar painel operacional",
"intent.dashboardWorkspace.getDashboardSummary.list.title": "Visualizar painel operacional",
"intent.dashboardWorkspace.getDashboardSummary.list.empty": "Nenhum registro encontrado",
"intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label": "Projetos",
"intent.dashboardWorkspace.getDashboardSummary.list.column.total.label": "Total",
"intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label": "Status",
"intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label": "Página",
"intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label": "Tamanho da página",
"section.dashboardWorkspace.projectListSection.title": "Lista de Projetos",
"organism.dashboardWorkspace.getProjectList.title": "Navegar por projetos",
"intent.dashboardWorkspace.getProjectList.list.title": "Navegar por projetos",
"intent.dashboardWorkspace.getProjectList.list.empty": "Nenhum registro encontrado",
"intent.dashboardWorkspace.getProjectList.list.column.projects.label": "Projetos",
"intent.dashboardWorkspace.getProjectList.list.column.total.label": "Total",
"intent.dashboardWorkspace.getProjectList.list.filter.status.label": "Status",
"intent.dashboardWorkspace.getProjectList.list.filter.page.label": "Página",
"intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label": "Tamanho da página"
};

const message_es = {
"section.dashboardWorkspace.kpiAndBudgetSection.title": "Resumen de KPI y Presupuesto",
"organism.dashboardWorkspace.inline-row-command10.title": "Comando de fila en línea",
"intent.dashboardWorkspace.inline-row-command10.content.title": "Comando de fila en línea",
"organism.dashboardWorkspace.getDashboardSummary.title": "Ver panel operativo",
"intent.dashboardWorkspace.getDashboardSummary.list.title": "Ver panel operativo",
"intent.dashboardWorkspace.getDashboardSummary.list.empty": "No se encontraron registros",
"intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label": "Proyectos",
"intent.dashboardWorkspace.getDashboardSummary.list.column.total.label": "Total",
"intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label": "Estado",
"intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label": "Página",
"intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label": "Tamaño de página",
"section.dashboardWorkspace.projectListSection.title": "Lista de Proyectos",
"organism.dashboardWorkspace.getProjectList.title": "Explorar proyectos",
"intent.dashboardWorkspace.getProjectList.list.title": "Explorar proyectos",
"intent.dashboardWorkspace.getProjectList.list.empty": "No se encontraron registros",
"intent.dashboardWorkspace.getProjectList.list.column.projects.label": "Proyectos",
"intent.dashboardWorkspace.getProjectList.list.column.total.label": "Total",
"intent.dashboardWorkspace.getProjectList.list.filter.status.label": "Estado",
"intent.dashboardWorkspace.getProjectList.list.filter.page.label": "Página",
"intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label": "Tamaño de página"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const STATE_KEYS: string[] = [
  'ui.dashboardWorkspace.status',
  'ui.dashboardWorkspace.action.getDashboardSummary.status',
  'ui.dashboardWorkspace.input.getDashboardSummary.status',
  'ui.dashboardWorkspace.input.getDashboardSummary.page',
  'ui.dashboardWorkspace.input.getDashboardSummary.pageSize',
  'ui.dashboardWorkspace.data.getDashboardSummary',
  'ui.dashboardWorkspace.action.getProjectList.status',
  'ui.dashboardWorkspace.input.getProjectList.status',
  'ui.dashboardWorkspace.input.getProjectList.page',
  'ui.dashboardWorkspace.input.getProjectList.pageSize',
  'ui.dashboardWorkspace.data.getProjectList',
];

export class BuildFlowFsmDashboardWorkspaceBase extends CollabLitElement {
  /** state ui.dashboardWorkspace.status — pageStatus */
  @property({ type: String }) status = '';

  /** state ui.dashboardWorkspace.action.getDashboardSummary.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) getDashboardSummaryState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.dashboardWorkspace.input.getDashboardSummary.status — input */
  @property({ type: String }) getDashboardSummaryStatus = '';

  /** state ui.dashboardWorkspace.input.getDashboardSummary.page — input */
  @property({ type: String }) getDashboardSummaryPage = '';

  /** state ui.dashboardWorkspace.input.getDashboardSummary.pageSize — input */
  @property({ type: String }) getDashboardSummaryPageSize = '';

  /** state ui.dashboardWorkspace.data.getDashboardSummary — queryResult, outputShape: paginated */
  @property({ type: Object }) getDashboardSummaryData: GetDashboardSummaryOutput = { projects: [], total: 0 };

  /** state ui.dashboardWorkspace.action.getProjectList.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) getProjectListState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.dashboardWorkspace.input.getProjectList.status — input */
  @property({ type: String }) getProjectListStatus = '';

  /** state ui.dashboardWorkspace.input.getProjectList.page — input */
  @property({ type: String }) getProjectListPage = '';

  /** state ui.dashboardWorkspace.input.getProjectList.pageSize — input */
  @property({ type: String }) getProjectListPageSize = '';

  /** state ui.dashboardWorkspace.data.getProjectList — queryResult, outputShape: paginated */
  @property({ type: Object }) getProjectListData: GetProjectListOutput = { projects: [], total: 0 };

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  /** action getDashboardSummary (query) — route buildFlowFsm.dashboardWorkspace.getDashboardSummary; inputs: status, page, pageSize; writes getDashboardSummaryData; status getDashboardSummaryState */
  async loadGetDashboardSummary(): Promise<void> {
    this.getDashboardSummaryState = 'loading';
    setState('ui.dashboardWorkspace.action.getDashboardSummary.status', 'loading');
    this.requestUpdate();

    const params: GetDashboardSummaryInput = {
      status: this.getDashboardSummaryStatus || undefined,
      page: this.getDashboardSummaryPage ? Number(this.getDashboardSummaryPage) : undefined,
      pageSize: this.getDashboardSummaryPageSize ? Number(this.getDashboardSummaryPageSize) : undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetDashboardSummaryOutput>(getDashboardSummaryRoute, params, options);

    if (response.ok) {
      const data: GetDashboardSummaryOutput = response.data ?? { projects: [], total: 0 };
      this.getDashboardSummaryData = data;
      setState('ui.dashboardWorkspace.data.getDashboardSummary', data);
      this.getDashboardSummaryState = 'success';
      setState('ui.dashboardWorkspace.action.getDashboardSummary.status', 'success');
    } else {
      this.getDashboardSummaryState = 'error';
      setState('ui.dashboardWorkspace.action.getDashboardSummary.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action getDashboardSummary — bind UI events here */
  handleGetDashboardSummaryClick(): void {
    this.loadGetDashboardSummary();
  }

  /** action getProjectList (query) — route buildFlowFsm.dashboardWorkspace.getProjectList; inputs: status, page, pageSize; writes getProjectListData; status getProjectListState */
  async loadGetProjectList(): Promise<void> {
    this.getProjectListState = 'loading';
    setState('ui.dashboardWorkspace.action.getProjectList.status', 'loading');
    this.requestUpdate();

    const params: GetProjectListInput = {
      status: this.getProjectListStatus || undefined,
      page: this.getProjectListPage ? Number(this.getProjectListPage) : undefined,
      pageSize: this.getProjectListPageSize ? Number(this.getProjectListPageSize) : undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetProjectListOutput>(getProjectListRoute, params, options);

    if (response.ok) {
      const data: GetProjectListOutput = response.data ?? { projects: [], total: 0 };
      this.getProjectListData = data;
      setState('ui.dashboardWorkspace.data.getProjectList', data);
      this.getProjectListState = 'success';
      setState('ui.dashboardWorkspace.action.getProjectList.status', 'success');
    } else {
      this.getProjectListState = 'error';
      setState('ui.dashboardWorkspace.action.getProjectList.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action getProjectList — bind UI events here */
  handleGetProjectListClick(): void {
    this.loadGetProjectList();
  }

  /** setter for state ui.dashboardWorkspace.input.getDashboardSummary.status */
  setGetDashboardSummaryStatus(value: string): void {
    this.getDashboardSummaryStatus = value;
    setState('ui.dashboardWorkspace.input.getDashboardSummary.status', value);
    this.requestUpdate();
  }

  /** handler for action set.getDashboardSummaryStatus — bind UI events here */
  handleGetDashboardSummaryStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGetDashboardSummaryStatus(target.value);
  }

  /** setter for state ui.dashboardWorkspace.input.getDashboardSummary.page */
  setGetDashboardSummaryPage(value: string): void {
    this.getDashboardSummaryPage = value;
    setState('ui.dashboardWorkspace.input.getDashboardSummary.page', value);
    this.requestUpdate();
  }

  /** handler for action set.getDashboardSummaryPage — bind UI events here */
  handleGetDashboardSummaryPageChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGetDashboardSummaryPage(target.value);
  }

  /** setter for state ui.dashboardWorkspace.input.getDashboardSummary.pageSize */
  setGetDashboardSummaryPageSize(value: string): void {
    this.getDashboardSummaryPageSize = value;
    setState('ui.dashboardWorkspace.input.getDashboardSummary.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.getDashboardSummaryPageSize — bind UI events here */
  handleGetDashboardSummaryPageSizeChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGetDashboardSummaryPageSize(target.value);
  }

  /** setter for state ui.dashboardWorkspace.input.getProjectList.status */
  setGetProjectListStatus(value: string): void {
    this.getProjectListStatus = value;
    setState('ui.dashboardWorkspace.input.getProjectList.status', value);
    this.requestUpdate();
  }

  /** handler for action set.getProjectListStatus — bind UI events here */
  handleGetProjectListStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGetProjectListStatus(target.value);
  }

  /** setter for state ui.dashboardWorkspace.input.getProjectList.page */
  setGetProjectListPage(value: string): void {
    this.getProjectListPage = value;
    setState('ui.dashboardWorkspace.input.getProjectList.page', value);
    this.requestUpdate();
  }

  /** handler for action set.getProjectListPage — bind UI events here */
  handleGetProjectListPageChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGetProjectListPage(target.value);
  }

  /** setter for state ui.dashboardWorkspace.input.getProjectList.pageSize */
  setGetProjectListPageSize(value: string): void {
    this.getProjectListPageSize = value;
    setState('ui.dashboardWorkspace.input.getProjectList.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.getProjectListPageSize — bind UI events here */
  handleGetProjectListPageSizeChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGetProjectListPageSize(target.value);
  }

  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.dashboardWorkspace.status':
        this.status = value as string;
        break;
      case 'ui.dashboardWorkspace.action.getDashboardSummary.status':
        this.getDashboardSummaryState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.dashboardWorkspace.input.getDashboardSummary.status':
        this.getDashboardSummaryStatus = value as string;
        break;
      case 'ui.dashboardWorkspace.input.getDashboardSummary.page':
        this.getDashboardSummaryPage = value as string;
        break;
      case 'ui.dashboardWorkspace.input.getDashboardSummary.pageSize':
        this.getDashboardSummaryPageSize = value as string;
        break;
      case 'ui.dashboardWorkspace.data.getDashboardSummary':
        this.getDashboardSummaryData = value as GetDashboardSummaryOutput;
        break;
      case 'ui.dashboardWorkspace.action.getProjectList.status':
        this.getProjectListState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.dashboardWorkspace.input.getProjectList.status':
        this.getProjectListStatus = value as string;
        break;
      case 'ui.dashboardWorkspace.input.getProjectList.page':
        this.getProjectListPage = value as string;
        break;
      case 'ui.dashboardWorkspace.input.getProjectList.pageSize':
        this.getProjectListPageSize = value as string;
        break;
      case 'ui.dashboardWorkspace.data.getProjectList':
        this.getProjectListData = value as GetProjectListOutput;
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  override connectedCallback(): void {
    super.connectedCallback();

    const savedStatus = getState('ui.dashboardWorkspace.status') as string | undefined;
    if (savedStatus !== undefined) this.status = savedStatus;

    const savedGdsState = getState('ui.dashboardWorkspace.action.getDashboardSummary.status') as 'idle' | 'loading' | 'success' | 'error' | undefined;
    if (savedGdsState !== undefined) this.getDashboardSummaryState = savedGdsState;

    const savedGdsStatus = getState('ui.dashboardWorkspace.input.getDashboardSummary.status') as string | undefined;
    if (savedGdsStatus !== undefined) this.getDashboardSummaryStatus = savedGdsStatus;

    const savedGdsPage = getState('ui.dashboardWorkspace.input.getDashboardSummary.page') as string | undefined;
    if (savedGdsPage !== undefined) this.getDashboardSummaryPage = savedGdsPage;

    const savedGdsPageSize = getState('ui.dashboardWorkspace.input.getDashboardSummary.pageSize') as string | undefined;
    if (savedGdsPageSize !== undefined) this.getDashboardSummaryPageSize = savedGdsPageSize;

    const savedGdsData = getState('ui.dashboardWorkspace.data.getDashboardSummary') as GetDashboardSummaryOutput | undefined;
    if (savedGdsData !== undefined) this.getDashboardSummaryData = savedGdsData;

    const savedGplState = getState('ui.dashboardWorkspace.action.getProjectList.status') as 'idle' | 'loading' | 'success' | 'error' | undefined;
    if (savedGplState !== undefined) this.getProjectListState = savedGplState;

    const savedGplStatus = getState('ui.dashboardWorkspace.input.getProjectList.status') as string | undefined;
    if (savedGplStatus !== undefined) this.getProjectListStatus = savedGplStatus;

    const savedGplPage = getState('ui.dashboardWorkspace.input.getProjectList.page') as string | undefined;
    if (savedGplPage !== undefined) this.getProjectListPage = savedGplPage;

    const savedGplPageSize = getState('ui.dashboardWorkspace.input.getProjectList.pageSize') as string | undefined;
    if (savedGplPageSize !== undefined) this.getProjectListPageSize = savedGplPageSize;

    const savedGplData = getState('ui.dashboardWorkspace.data.getProjectList') as GetProjectListOutput | undefined;
    if (savedGplData !== undefined) this.getProjectListData = savedGplData;

    subscribe(STATE_KEYS, this);

    this.loadGetDashboardSummary();
    this.loadGetProjectList();
  }

  override disconnectedCallback(): void {
    unsubscribe(STATE_KEYS, this);
    super.disconnectedCallback();
  }
}
