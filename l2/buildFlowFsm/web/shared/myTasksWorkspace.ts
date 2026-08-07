/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  ListMyWorkTasksInput,
  ListMyWorkTasksOutput,
  GetWorkTaskDetailInput,
  GetWorkTaskDetailOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/myTasksWorkspace.js';
import {
  listMyWorkTasksRoute,
  getWorkTaskDetailRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/myTasksWorkspace.js';

export type {
  ListMyWorkTasksInput,
  ListMyWorkTasksOutput,
  GetWorkTaskDetailInput,
  GetWorkTaskDetailOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/myTasksWorkspace.js';

/// **collab_i18n_start**
const message_en = {
  'section.myTasksWorkspace.taskListSection.title': 'My Tasks',
  'organism.myTasksWorkspace.listMyWorkTasks.title': 'Browse my assigned tasks',
  'intent.myTasksWorkspace.listMyWorkTasks.list.title': 'Browse my assigned tasks',
  'intent.myTasksWorkspace.listMyWorkTasks.list.empty': 'Nenhum registro encontrado',
  'intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks.label': 'Work Tasks',
  'intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label': 'Total',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label': 'Status',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label': 'Page',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize.label': 'Page Size',
  'organism.myTasksWorkspace.getWorkTaskDetail.title': 'View work task details',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.title': 'View work task details',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.empty': 'Nenhum registro encontrado',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label': 'Work Task Id',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label': 'Project Id',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label': 'Project Name',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label': 'Title',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label': 'Description',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label': 'Status',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label': 'Due Date',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label': 'Is Overdue',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label': 'Completed At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label': 'Cancelled At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label': 'Cancellation Reason',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label': 'Created At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label': 'Updated At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.filter.actorId.label': 'Actor Id',
  'organism.myTasksWorkspace.inline-row-command20.title': 'Inline row command',
  'intent.myTasksWorkspace.inline-row-command20.content.title': 'Inline row command',
  'organism.myTasksWorkspace.contextual-transition-actions20.title': 'Contextual transition actions',
  'intent.myTasksWorkspace.contextual-transition-actions20.content.title': 'Contextual transition actions',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.myTasksWorkspace.taskListSection.title': 'My Tasks',
  'organism.myTasksWorkspace.listMyWorkTasks.title': 'Browse my assigned tasks',
  'intent.myTasksWorkspace.listMyWorkTasks.list.title': 'Browse my assigned tasks',
  'intent.myTasksWorkspace.listMyWorkTasks.list.empty': 'Nenhum registro encontrado',
  'intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks.label': 'Work Tasks',
  'intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label': 'Total',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label': 'Status',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label': 'Page',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize.label': 'Page Size',
  'organism.myTasksWorkspace.getWorkTaskDetail.title': 'View work task details',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.title': 'View work task details',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.empty': 'Nenhum registro encontrado',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label': 'Work Task Id',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label': 'Project Id',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label': 'Project Name',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label': 'Title',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label': 'Description',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label': 'Status',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label': 'Due Date',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label': 'Is Overdue',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label': 'Completed At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label': 'Cancelled At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label': 'Cancellation Reason',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label': 'Created At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label': 'Updated At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.filter.actorId.label': 'Actor Id',
  'organism.myTasksWorkspace.inline-row-command20.title': 'Inline row command',
  'intent.myTasksWorkspace.inline-row-command20.content.title': 'Inline row command',
  'organism.myTasksWorkspace.contextual-transition-actions20.title': 'Contextual transition actions',
  'intent.myTasksWorkspace.contextual-transition-actions20.content.title': 'Contextual transition actions',
};
const message_es: MessageType = {
  'section.myTasksWorkspace.taskListSection.title': 'My Tasks',
  'organism.myTasksWorkspace.listMyWorkTasks.title': 'Browse my assigned tasks',
  'intent.myTasksWorkspace.listMyWorkTasks.list.title': 'Browse my assigned tasks',
  'intent.myTasksWorkspace.listMyWorkTasks.list.empty': 'Nenhum registro encontrado',
  'intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks.label': 'Work Tasks',
  'intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label': 'Total',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label': 'Status',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label': 'Page',
  'intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize.label': 'Page Size',
  'organism.myTasksWorkspace.getWorkTaskDetail.title': 'View work task details',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.title': 'View work task details',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.empty': 'Nenhum registro encontrado',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label': 'Work Task Id',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label': 'Project Id',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label': 'Project Name',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label': 'Title',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label': 'Description',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label': 'Status',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label': 'Due Date',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label': 'Is Overdue',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label': 'Completed At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label': 'Cancelled At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label': 'Cancellation Reason',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label': 'Created At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label': 'Updated At',
  'intent.myTasksWorkspace.getWorkTaskDetail.list.filter.actorId.label': 'Actor Id',
  'organism.myTasksWorkspace.inline-row-command20.title': 'Inline row command',
  'intent.myTasksWorkspace.inline-row-command20.content.title': 'Inline row command',
  'organism.myTasksWorkspace.contextual-transition-actions20.title': 'Contextual transition actions',
  'intent.myTasksWorkspace.contextual-transition-actions20.content.title': 'Contextual transition actions',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const LIST_MY_WORK_TASKS_DATA_DEFAULT: ListMyWorkTasksOutput = { workTasks: [], total: 0 };

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.myTasksWorkspace.status',
  'ui.myTasksWorkspace.action.listMyWorkTasks.status',
  'ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId',
  'ui.myTasksWorkspace.input.listMyWorkTasks.status',
  'ui.myTasksWorkspace.input.listMyWorkTasks.page',
  'ui.myTasksWorkspace.input.listMyWorkTasks.pageSize',
  'ui.myTasksWorkspace.data.listMyWorkTasks',
  'ui.myTasksWorkspace.action.getWorkTaskDetail.status',
  'ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId',
  'ui.myTasksWorkspace.input.getWorkTaskDetail.actorId',
  'ui.myTasksWorkspace.data.getWorkTaskDetail',
];

export class BuildFlowFsmMyTasksWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state listMyWorkTasksState — actionStatus, values: idle|loading|success|error */
  @property() listMyWorkTasksState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state listMyWorkTasksAssignedWorkerId — input */
  @property() listMyWorkTasksAssignedWorkerId: string = '';
  /** state listMyWorkTasksStatus — input */
  @property() listMyWorkTasksStatus: string = '';
  /** state listMyWorkTasksPage — input */
  @property() listMyWorkTasksPage: string = '';
  /** state listMyWorkTasksPageSize — input */
  @property() listMyWorkTasksPageSize: string = '';
  /** state listMyWorkTasksData — queryResult, outputShape: paginated */
  @property() listMyWorkTasksData: ListMyWorkTasksOutput = LIST_MY_WORK_TASKS_DATA_DEFAULT;
  /** state getWorkTaskDetailState — actionStatus, values: idle|loading|success|error */
  @property() getWorkTaskDetailState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state getWorkTaskDetailWorkTaskId — input */
  @property() getWorkTaskDetailWorkTaskId: string = '';
  /** state getWorkTaskDetailActorId — input */
  @property() getWorkTaskDetailActorId: string = '';
  /** state getWorkTaskDetailData — queryResult, outputShape: object */
  @property() getWorkTaskDetailData: GetWorkTaskDetailOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.myTasksWorkspace.status', '');
    this.initStateValue('ui.myTasksWorkspace.action.listMyWorkTasks.status', 'idle');
    this.initStateValue('ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId', '');
    this.initStateValue('ui.myTasksWorkspace.input.listMyWorkTasks.status', '');
    this.initStateValue('ui.myTasksWorkspace.input.listMyWorkTasks.page', '');
    this.initStateValue('ui.myTasksWorkspace.input.listMyWorkTasks.pageSize', '');
    this.initStateValue('ui.myTasksWorkspace.data.listMyWorkTasks', LIST_MY_WORK_TASKS_DATA_DEFAULT);
    this.initStateValue('ui.myTasksWorkspace.action.getWorkTaskDetail.status', 'idle');
    this.initStateValue('ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId', '');
    this.initStateValue('ui.myTasksWorkspace.input.getWorkTaskDetail.actorId', '');
    this.initStateValue('ui.myTasksWorkspace.data.getWorkTaskDetail', null);
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
      case 'ui.myTasksWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.action.listMyWorkTasks.status':
        this.listMyWorkTasksState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId':
        this.listMyWorkTasksAssignedWorkerId = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.input.listMyWorkTasks.status':
        this.listMyWorkTasksStatus = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.input.listMyWorkTasks.page':
        this.listMyWorkTasksPage = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.input.listMyWorkTasks.pageSize':
        this.listMyWorkTasksPageSize = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.data.listMyWorkTasks':
        this.listMyWorkTasksData = (value as ListMyWorkTasksOutput) ?? LIST_MY_WORK_TASKS_DATA_DEFAULT;
        break;
      case 'ui.myTasksWorkspace.action.getWorkTaskDetail.status':
        this.getWorkTaskDetailState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId':
        this.getWorkTaskDetailWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.input.getWorkTaskDetail.actorId':
        this.getWorkTaskDetailActorId = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.data.getWorkTaskDetail':
        this.getWorkTaskDetailData = (value as GetWorkTaskDetailOutput | null) ?? null;
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
      case 'ui.myTasksWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.action.listMyWorkTasks.status':
        this.listMyWorkTasksState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId':
        this.listMyWorkTasksAssignedWorkerId = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.input.listMyWorkTasks.status':
        this.listMyWorkTasksStatus = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.input.listMyWorkTasks.page':
        this.listMyWorkTasksPage = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.input.listMyWorkTasks.pageSize':
        this.listMyWorkTasksPageSize = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.data.listMyWorkTasks':
        this.listMyWorkTasksData = (value as ListMyWorkTasksOutput) ?? LIST_MY_WORK_TASKS_DATA_DEFAULT;
        break;
      case 'ui.myTasksWorkspace.action.getWorkTaskDetail.status':
        this.getWorkTaskDetailState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId':
        this.getWorkTaskDetailWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.input.getWorkTaskDetail.actorId':
        this.getWorkTaskDetailActorId = (value as string) ?? '';
        break;
      case 'ui.myTasksWorkspace.data.getWorkTaskDetail':
        this.getWorkTaskDetailData = (value as GetWorkTaskDetailOutput | null) ?? null;
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
      /^\/buildFlowFsm\/myTasksWorkspace(?:\/([^/]+))?\/?$/,
    );
    const rawWorkTaskId: string = match && match[1] ? match[1] : '';
    let workTaskId: string = '';
    if (rawWorkTaskId) {
      try {
        workTaskId = decodeURIComponent(rawWorkTaskId);
      } catch {
        workTaskId = rawWorkTaskId;
      }
    }
    if (workTaskId) {
      if (!this.getWorkTaskDetailWorkTaskId) {
        this.getWorkTaskDetailWorkTaskId = workTaskId;
        setState('ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId', workTaskId);
      }
    }
  }

  /** action listMyWorkTasks (query) — route buildFlowFsm.myTasksWorkspace.listMyWorkTasks; inputs: assignedWorkerId, status, page, pageSize; writes ui.myTasksWorkspace.data.listMyWorkTasks; status ui.myTasksWorkspace.action.listMyWorkTasks.status */
  async loadListMyWorkTasks(): Promise<void> {
    this.syncRouteParams();
    this.listMyWorkTasksState = 'loading';
    setState('ui.myTasksWorkspace.action.listMyWorkTasks.status', 'loading');
    const params: ListMyWorkTasksInput = {
      assignedWorkerId: this.listMyWorkTasksAssignedWorkerId,
    };
    if (this.listMyWorkTasksStatus) {
      params.status = this.listMyWorkTasksStatus;
    }
    if (this.listMyWorkTasksPage !== '') {
      const pageNum = Number(this.listMyWorkTasksPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.listMyWorkTasksPageSize !== '') {
      const pageSizeNum = Number(this.listMyWorkTasksPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListMyWorkTasksOutput>(listMyWorkTasksRoute, params, options);
    if (response.ok) {
      const data = response.data ?? LIST_MY_WORK_TASKS_DATA_DEFAULT;
      this.listMyWorkTasksData = data;
      setState('ui.myTasksWorkspace.data.listMyWorkTasks', data);
      this.listMyWorkTasksState = 'success';
      setState('ui.myTasksWorkspace.action.listMyWorkTasks.status', 'success');
    } else {
      this.listMyWorkTasksState = 'error';
      setState('ui.myTasksWorkspace.action.listMyWorkTasks.status', 'error');
      if (response.error) {
        console.error('listMyWorkTasks failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action listMyWorkTasks — bind UI events here */
  handleListMyWorkTasksClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadListMyWorkTasks();
  }

  /** action getWorkTaskDetail (query) — route buildFlowFsm.myTasksWorkspace.getWorkTaskDetail; inputs: workTaskId, actorId; writes ui.myTasksWorkspace.data.getWorkTaskDetail; status ui.myTasksWorkspace.action.getWorkTaskDetail.status */
  async loadGetWorkTaskDetail(): Promise<void> {
    this.syncRouteParams();
    if (!this.getWorkTaskDetailWorkTaskId) {
      this.getWorkTaskDetailState = 'idle';
      setState('ui.myTasksWorkspace.action.getWorkTaskDetail.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.getWorkTaskDetailState = 'loading';
    setState('ui.myTasksWorkspace.action.getWorkTaskDetail.status', 'loading');
    const params: GetWorkTaskDetailInput = {
      workTaskId: this.getWorkTaskDetailWorkTaskId,
      actorId: this.getWorkTaskDetailActorId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetWorkTaskDetailOutput>(getWorkTaskDetailRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.getWorkTaskDetailData = data;
      setState('ui.myTasksWorkspace.data.getWorkTaskDetail', data);
      this.getWorkTaskDetailState = 'success';
      setState('ui.myTasksWorkspace.action.getWorkTaskDetail.status', 'success');
    } else {
      this.getWorkTaskDetailState = 'error';
      setState('ui.myTasksWorkspace.action.getWorkTaskDetail.status', 'error');
      if (response.error) {
        console.error('getWorkTaskDetail failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action getWorkTaskDetail — bind UI events here */
  handleGetWorkTaskDetailClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadGetWorkTaskDetail();
  }

  /** setter for state ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId */
  setListMyWorkTasksAssignedWorkerId(value: string): void {
    this.listMyWorkTasksAssignedWorkerId = value;
    setState('ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId', value);
    this.requestUpdate();
  }

  /** handler for action set.listMyWorkTasksAssignedWorkerId — bind UI events here */
  handleListMyWorkTasksAssignedWorkerIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListMyWorkTasksAssignedWorkerId(value);
  }

  /** setter for state ui.myTasksWorkspace.input.listMyWorkTasks.status */
  setListMyWorkTasksStatus(value: string): void {
    this.listMyWorkTasksStatus = value;
    setState('ui.myTasksWorkspace.input.listMyWorkTasks.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listMyWorkTasksStatus — bind UI events here */
  handleListMyWorkTasksStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListMyWorkTasksStatus(value);
  }

  /** setter for state ui.myTasksWorkspace.input.listMyWorkTasks.page */
  setListMyWorkTasksPage(value: string): void {
    this.listMyWorkTasksPage = value;
    setState('ui.myTasksWorkspace.input.listMyWorkTasks.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listMyWorkTasksPage — bind UI events here */
  handleListMyWorkTasksPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListMyWorkTasksPage(value);
  }

  /** setter for state ui.myTasksWorkspace.input.listMyWorkTasks.pageSize */
  setListMyWorkTasksPageSize(value: string): void {
    this.listMyWorkTasksPageSize = value;
    setState('ui.myTasksWorkspace.input.listMyWorkTasks.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listMyWorkTasksPageSize — bind UI events here */
  handleListMyWorkTasksPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListMyWorkTasksPageSize(value);
  }

  /** setter for state ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId */
  setGetWorkTaskDetailWorkTaskId(value: string): void {
    this.getWorkTaskDetailWorkTaskId = value;
    setState('ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.getWorkTaskDetailWorkTaskId — bind UI events here */
  handleGetWorkTaskDetailWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetWorkTaskDetailWorkTaskId(value);
  }

  /** setter for state ui.myTasksWorkspace.input.getWorkTaskDetail.actorId */
  setGetWorkTaskDetailActorId(value: string): void {
    this.getWorkTaskDetailActorId = value;
    setState('ui.myTasksWorkspace.input.getWorkTaskDetail.actorId', value);
    this.requestUpdate();
  }

  /** handler for action set.getWorkTaskDetailActorId — bind UI events here */
  handleGetWorkTaskDetailActorIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGetWorkTaskDetailActorId(value);
  }
}
