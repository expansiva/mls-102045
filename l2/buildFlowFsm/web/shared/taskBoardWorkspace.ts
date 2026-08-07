/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  CmdCreateWorkTaskInput,
  CmdCreateWorkTaskOutput,
  CmdUpdateWorkTaskInput,
  CmdUpdateWorkTaskOutput,
  CmdUpdateWorkTaskStatusInput,
  CmdUpdateWorkTaskStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/taskBoardWorkspace.js';
import {
  cmdCreateWorkTaskRoute,
  cmdUpdateWorkTaskRoute,
  cmdUpdateWorkTaskStatusRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/taskBoardWorkspace.js';

export type {
  CmdCreateWorkTaskInput,
  CmdCreateWorkTaskOutput,
  CmdUpdateWorkTaskInput,
  CmdUpdateWorkTaskOutput,
  CmdUpdateWorkTaskStatusInput,
  CmdUpdateWorkTaskStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/taskBoardWorkspace.js';

/// **collab_i18n_start**
const message_en = {
  'section.taskBoardWorkspace.createTaskSection.title': 'Create Work Task',
  'organism.taskBoardWorkspace.cmdCreateWorkTask.title': 'Create work task',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.title': 'Create work task',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Create work task',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label': 'Title',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'section.taskBoardWorkspace.editTaskSection.title': 'Edit Work Task',
  'organism.taskBoardWorkspace.cmdUpdateWorkTask.title': 'Update work task assignment and details',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.title': 'Update work task assignment and details',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Update work task assignment and details',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label': 'Title',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label': 'Status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label': 'Cancellation Reason',
  'section.taskBoardWorkspace.fieldStatusSection.title': 'Update Task Status',
  'organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title': 'Update work task status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.title': 'Update work task status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus': 'Update work task status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label': 'Status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label': 'Cancellation Reason',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt.label': 'Completed At',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label': 'Actor Id',
  'action.cmdCreateWorkTask.success': 'Create work task: OK',
  'action.cmdCreateWorkTask.error': 'Create work task: falhou',
  'action.cmdUpdateWorkTask.success': 'Update work task assignment and details: OK',
  'action.cmdUpdateWorkTask.error': 'Update work task assignment and details: falhou',
  'action.cmdUpdateWorkTaskStatus.success': 'Update work task status: OK',
  'action.cmdUpdateWorkTaskStatus.error': 'Update work task status: falhou',
  'section.taskBoardWorkspace.sec-task-board.title': 'Task Board',
  'organism.taskBoardWorkspace.card-board10.title': 'Card board',
  'intent.taskBoardWorkspace.card-board10.content.title': 'Card board',
  'section.taskBoardWorkspace.sec-task-detail.title': 'Task Detail Panel',
  'organism.taskBoardWorkspace.summary-first10.title': 'Summary first',
  'intent.taskBoardWorkspace.summary-first10.content.title': 'Summary first',
  'section.taskBoardWorkspace.sec-create-task.title': 'Create New Task',
  'section.taskBoardWorkspace.sec-board-toolbar.title': 'Board Toolbar',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.taskBoardWorkspace.createTaskSection.title': 'Create Work Task',
  'organism.taskBoardWorkspace.cmdCreateWorkTask.title': 'Create work task',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.title': 'Create work task',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Create work task',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label': 'Title',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'section.taskBoardWorkspace.editTaskSection.title': 'Edit Work Task',
  'organism.taskBoardWorkspace.cmdUpdateWorkTask.title': 'Update work task assignment and details',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.title': 'Update work task assignment and details',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Update work task assignment and details',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label': 'Title',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label': 'Status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label': 'Cancellation Reason',
  'section.taskBoardWorkspace.fieldStatusSection.title': 'Update Task Status',
  'organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title': 'Update work task status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.title': 'Update work task status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus': 'Update work task status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label': 'Status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label': 'Cancellation Reason',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt.label': 'Completed At',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label': 'Actor Id',
  'action.cmdCreateWorkTask.success': 'Create work task: OK',
  'action.cmdCreateWorkTask.error': 'Create work task: falhou',
  'action.cmdUpdateWorkTask.success': 'Update work task assignment and details: OK',
  'action.cmdUpdateWorkTask.error': 'Update work task assignment and details: falhou',
  'action.cmdUpdateWorkTaskStatus.success': 'Update work task status: OK',
  'action.cmdUpdateWorkTaskStatus.error': 'Update work task status: falhou',
  'section.taskBoardWorkspace.sec-task-board.title': 'Task Board',
  'organism.taskBoardWorkspace.card-board10.title': 'Card board',
  'intent.taskBoardWorkspace.card-board10.content.title': 'Card board',
  'section.taskBoardWorkspace.sec-task-detail.title': 'Task Detail Panel',
  'organism.taskBoardWorkspace.summary-first10.title': 'Summary first',
  'intent.taskBoardWorkspace.summary-first10.content.title': 'Summary first',
  'section.taskBoardWorkspace.sec-create-task.title': 'Create New Task',
  'section.taskBoardWorkspace.sec-board-toolbar.title': 'Board Toolbar',
};
const message_es: MessageType = {
  'section.taskBoardWorkspace.createTaskSection.title': 'Create Work Task',
  'organism.taskBoardWorkspace.cmdCreateWorkTask.title': 'Create work task',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.title': 'Create work task',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask': 'Create work task',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label': 'Title',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label': 'Description',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label': 'Due Date',
  'section.taskBoardWorkspace.editTaskSection.title': 'Edit Work Task',
  'organism.taskBoardWorkspace.cmdUpdateWorkTask.title': 'Update work task assignment and details',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.title': 'Update work task assignment and details',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask': 'Update work task assignment and details',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label': 'Title',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label': 'Description',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label': 'Assigned Worker Id',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label': 'Due Date',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label': 'Status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label': 'Cancellation Reason',
  'section.taskBoardWorkspace.fieldStatusSection.title': 'Update Task Status',
  'organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title': 'Update work task status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.title': 'Update work task status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus': 'Update work task status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label': 'Status',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label': 'Cancellation Reason',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt.label': 'Completed At',
  'intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label': 'Actor Id',
  'action.cmdCreateWorkTask.success': 'Create work task: OK',
  'action.cmdCreateWorkTask.error': 'Create work task: falhou',
  'action.cmdUpdateWorkTask.success': 'Update work task assignment and details: OK',
  'action.cmdUpdateWorkTask.error': 'Update work task assignment and details: falhou',
  'action.cmdUpdateWorkTaskStatus.success': 'Update work task status: OK',
  'action.cmdUpdateWorkTaskStatus.error': 'Update work task status: falhou',
  'section.taskBoardWorkspace.sec-task-board.title': 'Task Board',
  'organism.taskBoardWorkspace.card-board10.title': 'Card board',
  'intent.taskBoardWorkspace.card-board10.content.title': 'Card board',
  'section.taskBoardWorkspace.sec-task-detail.title': 'Task Detail Panel',
  'organism.taskBoardWorkspace.summary-first10.title': 'Summary first',
  'intent.taskBoardWorkspace.summary-first10.content.title': 'Summary first',
  'section.taskBoardWorkspace.sec-create-task.title': 'Create New Task',
  'section.taskBoardWorkspace.sec-board-toolbar.title': 'Board Toolbar',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.taskBoardWorkspace.status',
  'ui.taskBoardWorkspace.action.cmdCreateWorkTask.status',
  'ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId',
  'ui.taskBoardWorkspace.input.cmdCreateWorkTask.title',
  'ui.taskBoardWorkspace.input.cmdCreateWorkTask.description',
  'ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId',
  'ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate',
  'ui.taskBoardWorkspace.output.cmdCreateWorkTask',
  'ui.taskBoardWorkspace.action.cmdCreateWorkTask.error',
  'ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason',
  'ui.taskBoardWorkspace.output.cmdUpdateWorkTask',
  'ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error',
  'ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt',
  'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId',
  'ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus',
  'ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error',
];

export class BuildFlowFsmTaskBoardWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state cmdCreateWorkTaskState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateWorkTaskProjectId — input */
  @property() cmdCreateWorkTaskProjectId: string = '';
  /** state cmdCreateWorkTaskTitle — input */
  @property() cmdCreateWorkTaskTitle: string = '';
  /** state cmdCreateWorkTaskDescription — input */
  @property() cmdCreateWorkTaskDescription: string = '';
  /** state cmdCreateWorkTaskAssignedWorkerId — input */
  @property() cmdCreateWorkTaskAssignedWorkerId: string = '';
  /** state cmdCreateWorkTaskDueDate — input */
  @property() cmdCreateWorkTaskDueDate: string = '';
  /** state cmdCreateWorkTaskOutput — commandOutput */
  @property() cmdCreateWorkTaskOutput: CmdCreateWorkTaskOutput | null = null;
  /** state cmdCreateWorkTaskError — actionError */
  @property() cmdCreateWorkTaskError: string = '';
  /** state cmdUpdateWorkTaskState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateWorkTaskWorkTaskId — input */
  @property() cmdUpdateWorkTaskWorkTaskId: string = '';
  /** state cmdUpdateWorkTaskTitle — input */
  @property() cmdUpdateWorkTaskTitle: string = '';
  /** state cmdUpdateWorkTaskDescription — input */
  @property() cmdUpdateWorkTaskDescription: string = '';
  /** state cmdUpdateWorkTaskAssignedWorkerId — input */
  @property() cmdUpdateWorkTaskAssignedWorkerId: string = '';
  /** state cmdUpdateWorkTaskDueDate — input */
  @property() cmdUpdateWorkTaskDueDate: string = '';
  /** state cmdUpdateWorkTaskStatusValue — input */
  @property() cmdUpdateWorkTaskStatusValue: string = '';
  /** state cmdUpdateWorkTaskCancellationReason — input */
  @property() cmdUpdateWorkTaskCancellationReason: string = '';
  /** state cmdUpdateWorkTaskOutput — commandOutput */
  @property() cmdUpdateWorkTaskOutput: CmdUpdateWorkTaskOutput | null = null;
  /** state cmdUpdateWorkTaskError — actionError */
  @property() cmdUpdateWorkTaskError: string = '';
  /** state cmdUpdateWorkTaskStatusState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateWorkTaskStatusState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateWorkTaskStatusWorkTaskId — input */
  @property() cmdUpdateWorkTaskStatusWorkTaskId: string = '';
  /** state cmdUpdateWorkTaskStatusStatus — input */
  @property() cmdUpdateWorkTaskStatusStatus: string = '';
  /** state cmdUpdateWorkTaskStatusCancellationReason — input */
  @property() cmdUpdateWorkTaskStatusCancellationReason: string = '';
  /** state cmdUpdateWorkTaskStatusCompletedAt — input */
  @property() cmdUpdateWorkTaskStatusCompletedAt: string = '';
  /** state cmdUpdateWorkTaskStatusActorId — input */
  @property() cmdUpdateWorkTaskStatusActorId: string = '';
  /** state cmdUpdateWorkTaskStatusOutput — commandOutput */
  @property() cmdUpdateWorkTaskStatusOutput: CmdUpdateWorkTaskStatusOutput | null = null;
  /** state cmdUpdateWorkTaskStatusError — actionError */
  @property() cmdUpdateWorkTaskStatusError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.taskBoardWorkspace.status', '');
    this.initStateValue('ui.taskBoardWorkspace.action.cmdCreateWorkTask.status', 'idle');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdCreateWorkTask.title', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdCreateWorkTask.description', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate', '');
    this.initStateValue('ui.taskBoardWorkspace.output.cmdCreateWorkTask', null);
    this.initStateValue('ui.taskBoardWorkspace.action.cmdCreateWorkTask.error', '');
    this.initStateValue('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status', 'idle');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason', '');
    this.initStateValue('ui.taskBoardWorkspace.output.cmdUpdateWorkTask', null);
    this.initStateValue('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error', '');
    this.initStateValue('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status', 'idle');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt', '');
    this.initStateValue('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId', '');
    this.initStateValue('ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus', null);
    this.initStateValue('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error', '');
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
      case 'ui.taskBoardWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.action.cmdCreateWorkTask.status':
        this.cmdCreateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId':
        this.cmdCreateWorkTaskProjectId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdCreateWorkTask.title':
        this.cmdCreateWorkTaskTitle = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdCreateWorkTask.description':
        this.cmdCreateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId':
        this.cmdCreateWorkTaskAssignedWorkerId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate':
        this.cmdCreateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.output.cmdCreateWorkTask':
        this.cmdCreateWorkTaskOutput = (value as CmdCreateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.taskBoardWorkspace.action.cmdCreateWorkTask.error':
        this.cmdCreateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status':
        this.cmdUpdateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId':
        this.cmdUpdateWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title':
        this.cmdUpdateWorkTaskTitle = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description':
        this.cmdUpdateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId':
        this.cmdUpdateWorkTaskAssignedWorkerId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate':
        this.cmdUpdateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status':
        this.cmdUpdateWorkTaskStatusValue = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason':
        this.cmdUpdateWorkTaskCancellationReason = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.output.cmdUpdateWorkTask':
        this.cmdUpdateWorkTaskOutput = (value as CmdUpdateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error':
        this.cmdUpdateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status':
        this.cmdUpdateWorkTaskStatusState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId':
        this.cmdUpdateWorkTaskStatusWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status':
        this.cmdUpdateWorkTaskStatusStatus = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason':
        this.cmdUpdateWorkTaskStatusCancellationReason = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt':
        this.cmdUpdateWorkTaskStatusCompletedAt = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId':
        this.cmdUpdateWorkTaskStatusActorId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus':
        this.cmdUpdateWorkTaskStatusOutput = (value as CmdUpdateWorkTaskStatusOutput | null) ?? null;
        break;
      case 'ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error':
        this.cmdUpdateWorkTaskStatusError = (value as string) ?? '';
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
      case 'ui.taskBoardWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.action.cmdCreateWorkTask.status':
        this.cmdCreateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId':
        this.cmdCreateWorkTaskProjectId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdCreateWorkTask.title':
        this.cmdCreateWorkTaskTitle = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdCreateWorkTask.description':
        this.cmdCreateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId':
        this.cmdCreateWorkTaskAssignedWorkerId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate':
        this.cmdCreateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.output.cmdCreateWorkTask':
        this.cmdCreateWorkTaskOutput = (value as CmdCreateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.taskBoardWorkspace.action.cmdCreateWorkTask.error':
        this.cmdCreateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status':
        this.cmdUpdateWorkTaskState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId':
        this.cmdUpdateWorkTaskWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title':
        this.cmdUpdateWorkTaskTitle = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description':
        this.cmdUpdateWorkTaskDescription = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId':
        this.cmdUpdateWorkTaskAssignedWorkerId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate':
        this.cmdUpdateWorkTaskDueDate = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status':
        this.cmdUpdateWorkTaskStatusValue = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason':
        this.cmdUpdateWorkTaskCancellationReason = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.output.cmdUpdateWorkTask':
        this.cmdUpdateWorkTaskOutput = (value as CmdUpdateWorkTaskOutput | null) ?? null;
        break;
      case 'ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error':
        this.cmdUpdateWorkTaskError = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status':
        this.cmdUpdateWorkTaskStatusState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId':
        this.cmdUpdateWorkTaskStatusWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status':
        this.cmdUpdateWorkTaskStatusStatus = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason':
        this.cmdUpdateWorkTaskStatusCancellationReason = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt':
        this.cmdUpdateWorkTaskStatusCompletedAt = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId':
        this.cmdUpdateWorkTaskStatusActorId = (value as string) ?? '';
        break;
      case 'ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus':
        this.cmdUpdateWorkTaskStatusOutput = (value as CmdUpdateWorkTaskStatusOutput | null) ?? null;
        break;
      case 'ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error':
        this.cmdUpdateWorkTaskStatusError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/taskBoardWorkspace(?:\/([^/]+))?\/?$/,
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
      if (!this.cmdUpdateWorkTaskWorkTaskId) {
        this.cmdUpdateWorkTaskWorkTaskId = workTaskId;
        setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId', workTaskId);
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

  /** action cmdCreateWorkTask (command) — route buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask; inputs: projectId, title, description, assignedWorkerId, dueDate; writes ui.taskBoardWorkspace.output.cmdCreateWorkTask; status ui.taskBoardWorkspace.action.cmdCreateWorkTask.status; feedback keys action.cmdCreateWorkTask.success / action.cmdCreateWorkTask.error */
  async cmdCreateWorkTask(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateWorkTaskProjectId) {
      this.cmdCreateWorkTaskState = 'idle';
      setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateWorkTaskState = 'loading';
    setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.status', 'loading');
    this.cmdCreateWorkTaskError = '';
    setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.error', '');
    const params: CmdCreateWorkTaskInput = {
      projectId: this.cmdCreateWorkTaskProjectId,
      title: this.cmdCreateWorkTaskTitle,
      assignedWorkerId: this.cmdCreateWorkTaskAssignedWorkerId,
      dueDate: this.cmdCreateWorkTaskDueDate,
    };
    if (this.cmdCreateWorkTaskDescription) {
      params.description = this.cmdCreateWorkTaskDescription;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateWorkTaskOutput>(cmdCreateWorkTaskRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateWorkTask.error');
      this.cmdCreateWorkTaskError = errMsg;
      setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.error', errMsg);
      this.cmdCreateWorkTaskState = 'error';
      setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateWorkTaskOutput | null = response.data ?? null;
    this.cmdCreateWorkTaskOutput = data;
    setState('ui.taskBoardWorkspace.output.cmdCreateWorkTask', data);
    this.cmdCreateWorkTaskProjectId = '';
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId', '');
    this.cmdCreateWorkTaskTitle = '';
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.title', '');
    this.cmdCreateWorkTaskDescription = '';
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.description', '');
    this.cmdCreateWorkTaskAssignedWorkerId = '';
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId', '');
    this.cmdCreateWorkTaskDueDate = '';
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate', '');
    this.cmdCreateWorkTaskState = 'success';
    setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateWorkTask — bind UI events here */
  handleCmdCreateWorkTaskClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateWorkTask();
    });
  }

  /** action cmdUpdateWorkTask (command) — route buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask; inputs: workTaskId, title, description, assignedWorkerId, dueDate, status, cancellationReason; writes ui.taskBoardWorkspace.output.cmdUpdateWorkTask; status ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status; feedback keys action.cmdUpdateWorkTask.success / action.cmdUpdateWorkTask.error */
  async cmdUpdateWorkTask(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdUpdateWorkTaskWorkTaskId) {
      this.cmdUpdateWorkTaskState = 'idle';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateWorkTaskState = 'loading';
    setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status', 'loading');
    this.cmdUpdateWorkTaskError = '';
    setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error', '');
    const params: CmdUpdateWorkTaskInput = {
      workTaskId: this.cmdUpdateWorkTaskWorkTaskId,
    };
    if (this.cmdUpdateWorkTaskTitle) {
      params.title = this.cmdUpdateWorkTaskTitle;
    }
    if (this.cmdUpdateWorkTaskDescription) {
      params.description = this.cmdUpdateWorkTaskDescription;
    }
    if (this.cmdUpdateWorkTaskAssignedWorkerId) {
      params.assignedWorkerId = this.cmdUpdateWorkTaskAssignedWorkerId;
    }
    if (this.cmdUpdateWorkTaskDueDate) {
      params.dueDate = this.cmdUpdateWorkTaskDueDate;
    }
    if (this.cmdUpdateWorkTaskStatusValue) {
      params.status = this.cmdUpdateWorkTaskStatusValue;
    }
    if (this.cmdUpdateWorkTaskCancellationReason) {
      params.cancellationReason = this.cmdUpdateWorkTaskCancellationReason;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateWorkTaskOutput>(cmdUpdateWorkTaskRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateWorkTask.error');
      this.cmdUpdateWorkTaskError = errMsg;
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error', errMsg);
      this.cmdUpdateWorkTaskState = 'error';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateWorkTaskOutput | null = response.data ?? null;
    this.cmdUpdateWorkTaskOutput = data;
    setState('ui.taskBoardWorkspace.output.cmdUpdateWorkTask', data);
    this.cmdUpdateWorkTaskTitle = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title', '');
    this.cmdUpdateWorkTaskDescription = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description', '');
    this.cmdUpdateWorkTaskAssignedWorkerId = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId', '');
    this.cmdUpdateWorkTaskDueDate = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate', '');
    this.cmdUpdateWorkTaskStatusValue = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status', '');
    this.cmdUpdateWorkTaskCancellationReason = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason', '');
    this.cmdUpdateWorkTaskState = 'success';
    setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateWorkTask — bind UI events here */
  handleCmdUpdateWorkTaskClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateWorkTask();
    });
  }

  /** action cmdUpdateWorkTaskStatus (command) — route buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus; inputs: workTaskId, status, cancellationReason, completedAt, actorId; writes ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus; status ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status; feedback keys action.cmdUpdateWorkTaskStatus.success / action.cmdUpdateWorkTaskStatus.error */
  async cmdUpdateWorkTaskStatus(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdUpdateWorkTaskStatusWorkTaskId) {
      this.cmdUpdateWorkTaskStatusState = 'idle';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateWorkTaskStatusState = 'loading';
    setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status', 'loading');
    this.cmdUpdateWorkTaskStatusError = '';
    setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error', '');
    const params: CmdUpdateWorkTaskStatusInput = {
      workTaskId: this.cmdUpdateWorkTaskStatusWorkTaskId,
      status: this.cmdUpdateWorkTaskStatusStatus,
      actorId: this.cmdUpdateWorkTaskStatusActorId,
    };
    if (this.cmdUpdateWorkTaskStatusCancellationReason) {
      params.cancellationReason = this.cmdUpdateWorkTaskStatusCancellationReason;
    }
    if (this.cmdUpdateWorkTaskStatusCompletedAt) {
      params.completedAt = this.cmdUpdateWorkTaskStatusCompletedAt;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateWorkTaskStatusOutput>(cmdUpdateWorkTaskStatusRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateWorkTaskStatus.error');
      this.cmdUpdateWorkTaskStatusError = errMsg;
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error', errMsg);
      this.cmdUpdateWorkTaskStatusState = 'error';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateWorkTaskStatusOutput | null = response.data ?? null;
    this.cmdUpdateWorkTaskStatusOutput = data;
    setState('ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus', data);
    this.cmdUpdateWorkTaskStatusWorkTaskId = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId', '');
    this.cmdUpdateWorkTaskStatusStatus = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status', '');
    this.cmdUpdateWorkTaskStatusCancellationReason = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason', '');
    this.cmdUpdateWorkTaskStatusCompletedAt = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt', '');
    this.cmdUpdateWorkTaskStatusActorId = '';
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId', '');
    this.cmdUpdateWorkTaskStatusState = 'success';
    setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateWorkTaskStatus — bind UI events here */
  handleCmdUpdateWorkTaskStatusClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateWorkTaskStatus();
    });
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId */
  setCmdCreateWorkTaskProjectId(value: string): void {
    this.cmdCreateWorkTaskProjectId = value;
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskProjectId — bind UI events here */
  handleCmdCreateWorkTaskProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskProjectId(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdCreateWorkTask.title */
  setCmdCreateWorkTaskTitle(value: string): void {
    this.cmdCreateWorkTaskTitle = value;
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.title', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskTitle — bind UI events here */
  handleCmdCreateWorkTaskTitleChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskTitle(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdCreateWorkTask.description */
  setCmdCreateWorkTaskDescription(value: string): void {
    this.cmdCreateWorkTaskDescription = value;
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskDescription — bind UI events here */
  handleCmdCreateWorkTaskDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskDescription(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId */
  setCmdCreateWorkTaskAssignedWorkerId(value: string): void {
    this.cmdCreateWorkTaskAssignedWorkerId = value;
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskAssignedWorkerId — bind UI events here */
  handleCmdCreateWorkTaskAssignedWorkerIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskAssignedWorkerId(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate */
  setCmdCreateWorkTaskDueDate(value: string): void {
    this.cmdCreateWorkTaskDueDate = value;
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskDueDate — bind UI events here */
  handleCmdCreateWorkTaskDueDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateWorkTaskDueDate(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId */
  setCmdUpdateWorkTaskWorkTaskId(value: string): void {
    this.cmdUpdateWorkTaskWorkTaskId = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskWorkTaskId — bind UI events here */
  handleCmdUpdateWorkTaskWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskWorkTaskId(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title */
  setCmdUpdateWorkTaskTitle(value: string): void {
    this.cmdUpdateWorkTaskTitle = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskTitle — bind UI events here */
  handleCmdUpdateWorkTaskTitleChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskTitle(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description */
  setCmdUpdateWorkTaskDescription(value: string): void {
    this.cmdUpdateWorkTaskDescription = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskDescription — bind UI events here */
  handleCmdUpdateWorkTaskDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskDescription(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId */
  setCmdUpdateWorkTaskAssignedWorkerId(value: string): void {
    this.cmdUpdateWorkTaskAssignedWorkerId = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskAssignedWorkerId — bind UI events here */
  handleCmdUpdateWorkTaskAssignedWorkerIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskAssignedWorkerId(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate */
  setCmdUpdateWorkTaskDueDate(value: string): void {
    this.cmdUpdateWorkTaskDueDate = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskDueDate — bind UI events here */
  handleCmdUpdateWorkTaskDueDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskDueDate(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status */
  setCmdUpdateWorkTaskStatusValue(value: string): void {
    this.cmdUpdateWorkTaskStatusValue = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusValue — bind UI events here */
  handleCmdUpdateWorkTaskStatusValueChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskStatusValue(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason */
  setCmdUpdateWorkTaskCancellationReason(value: string): void {
    this.cmdUpdateWorkTaskCancellationReason = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskCancellationReason — bind UI events here */
  handleCmdUpdateWorkTaskCancellationReasonChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskCancellationReason(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId */
  setCmdUpdateWorkTaskStatusWorkTaskId(value: string): void {
    this.cmdUpdateWorkTaskStatusWorkTaskId = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusWorkTaskId — bind UI events here */
  handleCmdUpdateWorkTaskStatusWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskStatusWorkTaskId(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status */
  setCmdUpdateWorkTaskStatusStatus(value: string): void {
    this.cmdUpdateWorkTaskStatusStatus = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusStatus — bind UI events here */
  handleCmdUpdateWorkTaskStatusStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskStatusStatus(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason */
  setCmdUpdateWorkTaskStatusCancellationReason(value: string): void {
    this.cmdUpdateWorkTaskStatusCancellationReason = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusCancellationReason — bind UI events here */
  handleCmdUpdateWorkTaskStatusCancellationReasonChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskStatusCancellationReason(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt */
  setCmdUpdateWorkTaskStatusCompletedAt(value: string): void {
    this.cmdUpdateWorkTaskStatusCompletedAt = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusCompletedAt — bind UI events here */
  handleCmdUpdateWorkTaskStatusCompletedAtChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskStatusCompletedAt(value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId */
  setCmdUpdateWorkTaskStatusActorId(value: string): void {
    this.cmdUpdateWorkTaskStatusActorId = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusActorId — bind UI events here */
  handleCmdUpdateWorkTaskStatusActorIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateWorkTaskStatusActorId(value);
  }
}
