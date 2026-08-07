/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  GetDashboardSummaryInput,
  GetDashboardSummaryOutput,
  GetProjectListInput,
  GetProjectListOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/dashboardWorkspace.js';
import {
  getDashboardSummaryRoute,
  getProjectListRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/dashboardWorkspace.js';

export type {
  GetDashboardSummaryInput,
  GetDashboardSummaryOutput,
  GetProjectListInput,
  GetProjectListOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/dashboardWorkspace.js';

/// **collab_i18n_start**
const message_en = {
  'section.dashboardWorkspace.kpiAndBudgetSection.title': 'KPI & Budget Overview',
  'organism.dashboardWorkspace.inline-row-command10.title': 'Inline row command',
  'intent.dashboardWorkspace.inline-row-command10.content.title': 'Inline row command',
  'organism.dashboardWorkspace.getDashboardSummary.title': 'View operational dashboard',
  'intent.dashboardWorkspace.getDashboardSummary.list.title': 'View operational dashboard',
  'intent.dashboardWorkspace.getDashboardSummary.list.empty': 'Nenhum registro encontrado',
  'intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label': 'Projects',
  'intent.dashboardWorkspace.getDashboardSummary.list.column.total.label': 'Total',
  'intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label': 'Status',
  'intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label': 'Page',
  'intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label': 'Page Size',
  'section.dashboardWorkspace.projectListSection.title': 'Project List',
  'organism.dashboardWorkspace.getProjectList.title': 'Browse projects',
  'intent.dashboardWorkspace.getProjectList.list.title': 'Browse projects',
  'intent.dashboardWorkspace.getProjectList.list.empty': 'Nenhum registro encontrado',
  'intent.dashboardWorkspace.getProjectList.list.column.projects.label': 'Projects',
  'intent.dashboardWorkspace.getProjectList.list.column.total.label': 'Total',
  'intent.dashboardWorkspace.getProjectList.list.filter.status.label': 'Status',
  'intent.dashboardWorkspace.getProjectList.list.filter.page.label': 'Page',
  'intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label': 'Page Size',
  'section.dashboardWorkspace.sec-kpi.title': 'KPI & Budget Overview',
  'section.dashboardWorkspace.sec-project-list.title': 'Project List',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.dashboardWorkspace.kpiAndBudgetSection.title': 'KPI & Budget Overview',
  'organism.dashboardWorkspace.inline-row-command10.title': 'Inline row command',
  'intent.dashboardWorkspace.inline-row-command10.content.title': 'Inline row command',
  'organism.dashboardWorkspace.getDashboardSummary.title': 'View operational dashboard',
  'intent.dashboardWorkspace.getDashboardSummary.list.title': 'View operational dashboard',
  'intent.dashboardWorkspace.getDashboardSummary.list.empty': 'Nenhum registro encontrado',
  'intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label': 'Projects',
  'intent.dashboardWorkspace.getDashboardSummary.list.column.total.label': 'Total',
  'intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label': 'Status',
  'intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label': 'Page',
  'intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label': 'Page Size',
  'section.dashboardWorkspace.projectListSection.title': 'Project List',
  'organism.dashboardWorkspace.getProjectList.title': 'Browse projects',
  'intent.dashboardWorkspace.getProjectList.list.title': 'Browse projects',
  'intent.dashboardWorkspace.getProjectList.list.empty': 'Nenhum registro encontrado',
  'intent.dashboardWorkspace.getProjectList.list.column.projects.label': 'Projects',
  'intent.dashboardWorkspace.getProjectList.list.column.total.label': 'Total',
  'intent.dashboardWorkspace.getProjectList.list.filter.status.label': 'Status',
  'intent.dashboardWorkspace.getProjectList.list.filter.page.label': 'Page',
  'intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label': 'Page Size',
  'section.dashboardWorkspace.sec-kpi.title': 'KPI & Budget Overview',
  'section.dashboardWorkspace.sec-project-list.title': 'Project List',
};
const message_es: MessageType = {
  'section.dashboardWorkspace.kpiAndBudgetSection.title': 'KPI & Budget Overview',
  'organism.dashboardWorkspace.inline-row-command10.title': 'Inline row command',
  'intent.dashboardWorkspace.inline-row-command10.content.title': 'Inline row command',
  'organism.dashboardWorkspace.getDashboardSummary.title': 'View operational dashboard',
  'intent.dashboardWorkspace.getDashboardSummary.list.title': 'View operational dashboard',
  'intent.dashboardWorkspace.getDashboardSummary.list.empty': 'Nenhum registro encontrado',
  'intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label': 'Projects',
  'intent.dashboardWorkspace.getDashboardSummary.list.column.total.label': 'Total',
  'intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label': 'Status',
  'intent.dashboardWorkspace.getDashboardSummary.list.filter.page.label': 'Page',
  'intent.dashboardWorkspace.getDashboardSummary.list.filter.pageSize.label': 'Page Size',
  'section.dashboardWorkspace.projectListSection.title': 'Project List',
  'organism.dashboardWorkspace.getProjectList.title': 'Browse projects',
  'intent.dashboardWorkspace.getProjectList.list.title': 'Browse projects',
  'intent.dashboardWorkspace.getProjectList.list.empty': 'Nenhum registro encontrado',
  'intent.dashboardWorkspace.getProjectList.list.column.projects.label': 'Projects',
  'intent.dashboardWorkspace.getProjectList.list.column.total.label': 'Total',
  'intent.dashboardWorkspace.getProjectList.list.filter.status.label': 'Status',
  'intent.dashboardWorkspace.getProjectList.list.filter.page.label': 'Page',
  'intent.dashboardWorkspace.getProjectList.list.filter.pageSize.label': 'Page Size',
  'section.dashboardWorkspace.sec-kpi.title': 'KPI & Budget Overview',
  'section.dashboardWorkspace.sec-project-list.title': 'Project List',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const GET_DASHBOARD_SUMMARY_DATA_DEFAULT: GetDashboardSummaryOutput = { projects: [], total: 0 };
const GET_PROJECT_LIST_DATA_DEFAULT: GetProjectListOutput = { projects: [], total: 0 };

const SUBSCRIBED_STATE_KEYS: string[] = [
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
  /** state status — pageStatus */
  @property() status: string = '';
  /** state getDashboardSummaryState — actionStatus, values: idle|loading|success|error */
  @property() getDashboardSummaryState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state getDashboardSummaryStatus — input */
  @property() getDashboardSummaryStatus: string = '';
  /** state getDashboardSummaryPage — input */
  @property() getDashboardSummaryPage: string = '';
  /** state getDashboardSummaryPageSize — input */
  @property() getDashboardSummaryPageSize: string = '';
  /** state getDashboardSummaryData — queryResult, outputShape: paginated */
  @property() getDashboardSummaryData: GetDashboardSummaryOutput = GET_DASHBOARD_SUMMARY_DATA_DEFAULT;
  /** state getProjectListState — actionStatus, values: idle|loading|success|error */
  @property() getProjectListState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state getProjectListStatus — input */
  @property() getProjectListStatus: string = '';
  /** state getProjectListPage — input */
  @property() getProjectListPage: string = '';
  /** state getProjectListPageSize — input */
  @property() getProjectListPageSize: string = '';
  /** state getProjectListData — queryResult, outputShape: paginated */
  @property() getProjectListData: GetProjectListOutput = GET_PROJECT_LIST_DATA_DEFAULT;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.dashboardWorkspace.status', '');
    this.initStateValue('ui.dashboardWorkspace.action.getDashboardSummary.status', 'idle');
    this.initStateValue('ui.dashboardWorkspace.input.getDashboardSummary.status', '');
    this.initStateValue('ui.dashboardWorkspace.input.getDashboardSummary.page', '');
    this.initStateValue('ui.dashboardWorkspace.input.getDashboardSummary.pageSize', '');
    this.initStateValue('ui.dashboardWorkspace.data.getDashboardSummary', GET_DASHBOARD_SUMMARY_DATA_DEFAULT);
    this.initStateValue('ui.dashboardWorkspace.action.getProjectList.status', 'idle');
    this.initStateValue('ui.dashboardWorkspace.input.getProjectList.status', '');
    this.initStateValue('ui.dashboardWorkspace.input.getProjectList.page', '');
    this.initStateValue('ui.dashboardWorkspace.input.getProjectList.pageSize', '');
    this.initStateValue('ui.dashboardWorkspace.data.getProjectList', GET_PROJECT_LIST_DATA_DEFAULT);
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadGetDashboardSummary();
    void this.loadGetProjectList();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.dashboardWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.action.getDashboardSummary.status':
        this.getDashboardSummaryState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.dashboardWorkspace.input.getDashboardSummary.status':
        this.getDashboardSummaryStatus = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.input.getDashboardSummary.page':
        this.getDashboardSummaryPage = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.input.getDashboardSummary.pageSize':
        this.getDashboardSummaryPageSize = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.data.getDashboardSummary':
        this.getDashboardSummaryData = (value as GetDashboardSummaryOutput) ?? GET_DASHBOARD_SUMMARY_DATA_DEFAULT;
        break;
      case 'ui.dashboardWorkspace.action.getProjectList.status':
        this.getProjectListState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.dashboardWorkspace.input.getProjectList.status':
        this.getProjectListStatus = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.input.getProjectList.page':
        this.getProjectListPage = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.input.getProjectList.pageSize':
        this.getProjectListPageSize = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.data.getProjectList':
        this.getProjectListData = (value as GetProjectListOutput) ?? GET_PROJECT_LIST_DATA_DEFAULT;
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
      case 'ui.dashboardWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.action.getDashboardSummary.status':
        this.getDashboardSummaryState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.dashboardWorkspace.input.getDashboardSummary.status':
        this.getDashboardSummaryStatus = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.input.getDashboardSummary.page':
        this.getDashboardSummaryPage = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.input.getDashboardSummary.pageSize':
        this.getDashboardSummaryPageSize = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.data.getDashboardSummary':
        this.getDashboardSummaryData = (value as GetDashboardSummaryOutput) ?? GET_DASHBOARD_SUMMARY_DATA_DEFAULT;
        break;
      case 'ui.dashboardWorkspace.action.getProjectList.status':
        this.getProjectListState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.dashboardWorkspace.input.getProjectList.status':
        this.getProjectListStatus = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.input.getProjectList.page':
        this.getProjectListPage = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.input.getProjectList.pageSize':
        this.getProjectListPageSize = (value as string) ?? '';
        break;
      case 'ui.dashboardWorkspace.data.getProjectList':
        this.getProjectListData = (value as GetProjectListOutput) ?? GET_PROJECT_LIST_DATA_DEFAULT;
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  /** action getDashboardSummary (query) — route buildFlowFsm.dashboardWorkspace.getDashboardSummary; inputs: status, page, pageSize; writes ui.dashboardWorkspace.data.getDashboardSummary; status ui.dashboardWorkspace.action.getDashboardSummary.status */
  async loadGetDashboardSummary(): Promise<void> {
    this.getDashboardSummaryState = 'loading';
    setState('ui.dashboardWorkspace.action.getDashboardSummary.status', 'loading');
    const params: GetDashboardSummaryInput = {
    };
    if (this.getDashboardSummaryStatus) {
      params.status = this.getDashboardSummaryStatus;
    }
    if (this.getDashboardSummaryPage !== '') {
      const pageNum = Number(this.getDashboardSummaryPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.getDashboardSummaryPageSize !== '') {
      const pageSizeNum = Number(this.getDashboardSummaryPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetDashboardSummaryOutput>(getDashboardSummaryRoute, params, options);
    if (response.ok) {
      const data = response.data ?? GET_DASHBOARD_SUMMARY_DATA_DEFAULT;
      this.getDashboardSummaryData = data;
      setState('ui.dashboardWorkspace.data.getDashboardSummary', data);
      this.getDashboardSummaryState = 'success';
      setState('ui.dashboardWorkspace.action.getDashboardSummary.status', 'success');
    } else {
      this.getDashboardSummaryState = 'error';
      setState('ui.dashboardWorkspace.action.getDashboardSummary.status', 'error');
      if (response.error) {
        console.error('getDashboardSummary failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action getDashboardSummary — bind UI events here */
  handleGetDashboardSummaryClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadGetDashboardSummary();
  }

  /** action getProjectList (query) — route buildFlowFsm.dashboardWorkspace.getProjectList; inputs: status, page, pageSize; writes ui.dashboardWorkspace.data.getProjectList; status ui.dashboardWorkspace.action.getProjectList.status */
  async loadGetProjectList(): Promise<void> {
    this.getProjectListState = 'loading';
    setState('ui.dashboardWorkspace.action.getProjectList.status', 'loading');
    const params: GetProjectListInput = {
    };
    if (this.getProjectListStatus) {
      params.status = this.getProjectListStatus;
    }
    if (this.getProjectListPage !== '') {
      const pageNum = Number(this.getProjectListPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.getProjectListPageSize !== '') {
      const pageSizeNum = Number(this.getProjectListPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetProjectListOutput>(getProjectListRoute, params, options);
    if (response.ok) {
      const data = response.data ?? GET_PROJECT_LIST_DATA_DEFAULT;
      this.getProjectListData = data;
      setState('ui.dashboardWorkspace.data.getProjectList', data);
      this.getProjectListState = 'success';
      setState('ui.dashboardWorkspace.action.getProjectList.status', 'success');
    } else {
      this.getProjectListState = 'error';
      setState('ui.dashboardWorkspace.action.getProjectList.status', 'error');
      if (response.error) {
        console.error('getProjectList failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action getProjectList — bind UI events here */
  handleGetProjectListClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadGetProjectList();
  }

  /** setter for state ui.dashboardWorkspace.input.getDashboardSummary.status */
  setGetDashboardSummaryStatus(value: string): void {
    this.getDashboardSummaryStatus = value;
    setState('ui.dashboardWorkspace.input.getDashboardSummary.status', value);
    this.requestUpdate();
  }

  /** handler for action set.getDashboardSummaryStatus — bind UI events here */
  handleGetDashboardSummaryStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetDashboardSummaryStatus(value);
  }

  /** setter for state ui.dashboardWorkspace.input.getDashboardSummary.page */
  setGetDashboardSummaryPage(value: string): void {
    this.getDashboardSummaryPage = value;
    setState('ui.dashboardWorkspace.input.getDashboardSummary.page', value);
    this.requestUpdate();
  }

  /** handler for action set.getDashboardSummaryPage — bind UI events here */
  handleGetDashboardSummaryPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetDashboardSummaryPage(value);
  }

  /** setter for state ui.dashboardWorkspace.input.getDashboardSummary.pageSize */
  setGetDashboardSummaryPageSize(value: string): void {
    this.getDashboardSummaryPageSize = value;
    setState('ui.dashboardWorkspace.input.getDashboardSummary.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.getDashboardSummaryPageSize — bind UI events here */
  handleGetDashboardSummaryPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetDashboardSummaryPageSize(value);
  }

  /** setter for state ui.dashboardWorkspace.input.getProjectList.status */
  setGetProjectListStatus(value: string): void {
    this.getProjectListStatus = value;
    setState('ui.dashboardWorkspace.input.getProjectList.status', value);
    this.requestUpdate();
  }

  /** handler for action set.getProjectListStatus — bind UI events here */
  handleGetProjectListStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetProjectListStatus(value);
  }

  /** setter for state ui.dashboardWorkspace.input.getProjectList.page */
  setGetProjectListPage(value: string): void {
    this.getProjectListPage = value;
    setState('ui.dashboardWorkspace.input.getProjectList.page', value);
    this.requestUpdate();
  }

  /** handler for action set.getProjectListPage — bind UI events here */
  handleGetProjectListPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetProjectListPage(value);
  }

  /** setter for state ui.dashboardWorkspace.input.getProjectList.pageSize */
  setGetProjectListPageSize(value: string): void {
    this.getProjectListPageSize = value;
    setState('ui.dashboardWorkspace.input.getProjectList.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.getProjectListPageSize — bind UI events here */
  handleGetProjectListPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetProjectListPageSize(value);
  }
}
