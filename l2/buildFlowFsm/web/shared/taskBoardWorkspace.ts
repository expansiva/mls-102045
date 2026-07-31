/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';

import type { CmdCreateWorkTaskOutput, CmdUpdateWorkTaskOutput, CmdUpdateWorkTaskStatusOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/taskBoardWorkspace.js';
import { cmdCreateWorkTaskRoute, cmdUpdateWorkTaskRoute, cmdUpdateWorkTaskStatusRoute } from '/_102045_/l2/buildFlowFsm/web/contracts/taskBoardWorkspace.js';

export type { CmdCreateWorkTaskInput, CmdCreateWorkTaskOutput, CmdUpdateWorkTaskInput, CmdUpdateWorkTaskOutput, CmdUpdateWorkTaskStatusInput, CmdUpdateWorkTaskStatusOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/taskBoardWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.taskBoardWorkspace.createTaskSection.title": "Create Work Task",
"organism.taskBoardWorkspace.cmdCreateWorkTask.title": "Create work task",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.title": "Create work task",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask": "Create work task",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label": "Title",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label": "Description",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label": "Assigned Worker Id",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label": "Due Date",
"section.taskBoardWorkspace.editTaskSection.title": "Edit Work Task",
"organism.taskBoardWorkspace.cmdUpdateWorkTask.title": "Update work task assignment and details",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.title": "Update work task assignment and details",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask": "Update work task assignment and details",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label": "Title",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label": "Description",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label": "Assigned Worker Id",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label": "Due Date",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label": "Status",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label": "Cancellation Reason",
"section.taskBoardWorkspace.fieldStatusSection.title": "Update Task Status",
"organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title": "Update work task status",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.title": "Update work task status",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus": "Update work task status",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label": "Status",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label": "Cancellation Reason",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt.label": "Completed At",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label": "Actor Id",
"section.taskBoardWorkspace.sec-board.title": "Task Board",
"organism.taskBoardWorkspace.card-board10.title": "Card board",
"intent.taskBoardWorkspace.card-board10.content.title": "Card board",
"section.taskBoardWorkspace.sec-task-detail.title": "Task Detail & Edit",
"section.taskBoardWorkspace.sec-create-task.title": "Create Task"
};

const message_pt_br = {
"section.taskBoardWorkspace.createTaskSection.title": "Criar Tarefa de Trabalho",
"organism.taskBoardWorkspace.cmdCreateWorkTask.title": "Criar tarefa de trabalho",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.title": "Criar tarefa de trabalho",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask": "Criar tarefa de trabalho",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label": "Título",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label": "Descrição",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label": "ID do Trabalhador Designado",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label": "Data de Vencimento",
"section.taskBoardWorkspace.editTaskSection.title": "Editar Tarefa de Trabalho",
"organism.taskBoardWorkspace.cmdUpdateWorkTask.title": "Atualizar atribuição e detalhes da tarefa de trabalho",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.title": "Atualizar atribuição e detalhes da tarefa de trabalho",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask": "Atualizar atribuição e detalhes da tarefa de trabalho",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label": "Título",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label": "Descrição",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label": "ID do Trabalhador Designado",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label": "Data de Vencimento",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label": "Status",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label": "Motivo do Cancelamento",
"section.taskBoardWorkspace.fieldStatusSection.title": "Atualizar Status da Tarefa",
"organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title": "Atualizar status da tarefa de trabalho",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.title": "Atualizar status da tarefa de trabalho",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus": "Atualizar status da tarefa de trabalho",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label": "Status",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label": "Motivo do Cancelamento",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt.label": "Concluído Em",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label": "ID do Ator",
"section.taskBoardWorkspace.sec-board.title": "Quadro de Tarefas",
"organism.taskBoardWorkspace.card-board10.title": "Quadro de Cartões",
"intent.taskBoardWorkspace.card-board10.content.title": "Quadro de Cartões",
"section.taskBoardWorkspace.sec-task-detail.title": "Detalhes e Edição da Tarefa",
"section.taskBoardWorkspace.sec-create-task.title": "Criar Tarefa"
};

const message_es = {
"section.taskBoardWorkspace.createTaskSection.title": "Crear Tarea de Trabajo",
"organism.taskBoardWorkspace.cmdCreateWorkTask.title": "Crear tarea de trabajo",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.title": "Crear tarea de trabajo",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask": "Crear tarea de trabajo",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label": "Título",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label": "Descripción",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label": "ID del Trabajador Asignado",
"intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label": "Fecha de Vencimiento",
"section.taskBoardWorkspace.editTaskSection.title": "Editar Tarea de Trabajo",
"organism.taskBoardWorkspace.cmdUpdateWorkTask.title": "Actualizar asignación y detalles de la tarea de trabajo",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.title": "Actualizar asignación y detalles de la tarea de trabajo",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask": "Actualizar asignación y detalles de la tarea de trabajo",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label": "Título",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label": "Descripción",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label": "ID del Trabajador Asignado",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label": "Fecha de Vencimiento",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label": "Estado",
"intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label": "Razón de Cancelación",
"section.taskBoardWorkspace.fieldStatusSection.title": "Actualizar Estado de la Tarea",
"organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title": "Actualizar estado de la tarea de trabajo",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.title": "Actualizar estado de la tarea de trabajo",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus": "Actualizar estado de la tarea de trabajo",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label": "Estado",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label": "Razón de Cancelación",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt.label": "Completado En",
"intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label": "ID del Actor",
"section.taskBoardWorkspace.sec-board.title": "Tablero de Tareas",
"organism.taskBoardWorkspace.card-board10.title": "Tablero de Tarjetas",
"intent.taskBoardWorkspace.card-board10.content.title": "Tablero de Tarjetas",
"section.taskBoardWorkspace.sec-task-detail.title": "Detalle y Edición de la Tarea",
"section.taskBoardWorkspace.sec-create-task.title": "Crear Tarea"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmTaskBoardWorkspaceBase extends CollabLitElement {
  /** state ui.taskBoardWorkspace.status — pageStatus */
  @property({ type: String }) status: string = '';

  /** state ui.taskBoardWorkspace.action.cmdCreateWorkTask.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) cmdCreateWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId — input, selection */
  @property({ type: String }) cmdCreateWorkTaskProjectId: string = '';

  /** state ui.taskBoardWorkspace.input.cmdCreateWorkTask.title — input, form */
  @property({ type: String }) cmdCreateWorkTaskTitle: string = '';

  /** state ui.taskBoardWorkspace.input.cmdCreateWorkTask.description — input, form */
  @property({ type: String }) cmdCreateWorkTaskDescription: string = '';

  /** state ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId — input, form */
  @property({ type: String }) cmdCreateWorkTaskAssignedWorkerId: string = '';

  /** state ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate — input, form */
  @property({ type: String }) cmdCreateWorkTaskDueDate: string = '';

  /** state ui.taskBoardWorkspace.output.cmdCreateWorkTask — commandOutput, outputShape: object */
  @property({ type: Object }) cmdCreateWorkTaskOutput: CmdCreateWorkTaskOutput | null = null;

  /** state ui.taskBoardWorkspace.action.cmdCreateWorkTask.error — actionError */
  @property({ type: String }) cmdCreateWorkTaskError: string = '';

  /** state ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) cmdUpdateWorkTaskState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId — input, route */
  @property({ type: String }) cmdUpdateWorkTaskWorkTaskId: string = '';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title — input, form */
  @property({ type: String }) cmdUpdateWorkTaskTitle: string = '';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description — input, form */
  @property({ type: String }) cmdUpdateWorkTaskDescription: string = '';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId — input, form */
  @property({ type: String }) cmdUpdateWorkTaskAssignedWorkerId: string = '';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate — input, form */
  @property({ type: String }) cmdUpdateWorkTaskDueDate: string = '';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status — input, form */
  @property({ type: String }) cmdUpdateWorkTaskStatusValue: string = '';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason — input, form */
  @property({ type: String }) cmdUpdateWorkTaskCancellationReason: string = '';

  /** state ui.taskBoardWorkspace.output.cmdUpdateWorkTask — commandOutput, outputShape: object */
  @property({ type: Object }) cmdUpdateWorkTaskOutput: CmdUpdateWorkTaskOutput | null = null;

  /** state ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error — actionError */
  @property({ type: String }) cmdUpdateWorkTaskError: string = '';

  /** state ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) cmdUpdateWorkTaskStatusState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId — input, selection */
  @property({ type: String }) cmdUpdateWorkTaskStatusWorkTaskId: string = '';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status — input, form */
  @property({ type: String }) cmdUpdateWorkTaskStatusStatus: string = '';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason — input, form */
  @property({ type: String }) cmdUpdateWorkTaskStatusCancellationReason: string = '';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt — input, form */
  @property({ type: String }) cmdUpdateWorkTaskStatusCompletedAt: string = '';

  /** state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId — input, form */
  @property({ type: String }) cmdUpdateWorkTaskStatusActorId: string = '';

  /** state ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus — commandOutput, outputShape: object */
  @property({ type: Object }) cmdUpdateWorkTaskStatusOutput: CmdUpdateWorkTaskStatusOutput | null = null;

  /** state ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error — actionError */
  @property({ type: String }) cmdUpdateWorkTaskStatusError: string = '';

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  /**
   * Parse the route pattern `/buildFlowFsm/taskBoardWorkspace/:workTaskId?`
   * against the current window.location.pathname and return a map of param name to decoded value.
   */
  private parseRouteParams(): Record<string, string> {
    const pattern = '/buildFlowFsm/taskBoardWorkspace/:workTaskId?';
    const path = window.location.pathname;
    const patternParts = pattern.split('/').filter((p: string) => p.length > 0);
    const pathParts = path.split('/').filter((p: string) => p.length > 0);
    const result: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const pPart = patternParts[i];
      if (pPart.startsWith(':')) {
        const isOptional = pPart.endsWith('?');
        const paramName = isOptional ? pPart.slice(1, -1) : pPart.slice(1);
        if (i < pathParts.length) {
          try {
            result[paramName] = decodeURIComponent(pathParts[i]);
          } catch {
            result[paramName] = pathParts[i];
          }
        }
      }
    }
    return result;
  }

  /** action cmdCreateWorkTask (command) — route buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask; inputs: projectId, title, description, assignedWorkerId, dueDate; writes cmdCreateWorkTaskOutput; status cmdCreateWorkTaskState; feedback keys action.cmdCreateWorkTask.success / action.cmdCreateWorkTask.error */
  async cmdCreateWorkTask(signal: AbortSignal): Promise<void> {
    this.cmdCreateWorkTaskState = 'loading';
    setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.status', 'loading');

    const params = {
      projectId: this.cmdCreateWorkTaskProjectId,
      title: this.cmdCreateWorkTaskTitle,
      description: this.cmdCreateWorkTaskDescription,
      assignedWorkerId: this.cmdCreateWorkTaskAssignedWorkerId,
      dueDate: this.cmdCreateWorkTaskDueDate,
    };

    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<CmdCreateWorkTaskOutput>(cmdCreateWorkTaskRoute, params, options);

    if (response.ok) {
      this.cmdCreateWorkTaskOutput = response.data ?? null;
      setState('ui.taskBoardWorkspace.output.cmdCreateWorkTask', this.cmdCreateWorkTaskOutput);

      // Clear input state keys
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

      this.cmdCreateWorkTaskError = '';
      setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.error', '');
      this.cmdCreateWorkTaskState = 'success';
      setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? '';
      this.cmdCreateWorkTaskError = errorMsg;
      setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.error', errorMsg);
      this.cmdCreateWorkTaskState = 'error';
      setState('ui.taskBoardWorkspace.action.cmdCreateWorkTask.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action cmdCreateWorkTask — bind UI events here */
  handleCmdCreateWorkTaskClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.cmdCreateWorkTask(signal);
    }, { mode: 'blocking' });
  }

  /** action cmdUpdateWorkTask (command) — route buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask; inputs: workTaskId, title, description, assignedWorkerId, dueDate, status, cancellationReason; writes cmdUpdateWorkTaskOutput; status cmdUpdateWorkTaskState; feedback keys action.cmdUpdateWorkTask.success / action.cmdUpdateWorkTask.error */
  async cmdUpdateWorkTask(signal: AbortSignal): Promise<void> {
    // Parse route params for workTaskId
    const routeParams = this.parseRouteParams();
    const routeWorkTaskId = routeParams['workTaskId'] ?? '';
    if (routeWorkTaskId) {
      this.cmdUpdateWorkTaskWorkTaskId = routeWorkTaskId;
      setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId', routeWorkTaskId);
    }

    // If required route param is absent, do not call execBff
    if (!this.cmdUpdateWorkTaskWorkTaskId) {
      this.cmdUpdateWorkTaskState = 'idle';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status', 'idle');
      this.requestUpdate();
      return;
    }

    this.cmdUpdateWorkTaskState = 'loading';
    setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status', 'loading');

    const params = {
      workTaskId: this.cmdUpdateWorkTaskWorkTaskId,
      title: this.cmdUpdateWorkTaskTitle,
      description: this.cmdUpdateWorkTaskDescription,
      assignedWorkerId: this.cmdUpdateWorkTaskAssignedWorkerId,
      dueDate: this.cmdUpdateWorkTaskDueDate,
      status: this.cmdUpdateWorkTaskStatusValue,
      cancellationReason: this.cmdUpdateWorkTaskCancellationReason,
    };

    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<CmdUpdateWorkTaskOutput>(cmdUpdateWorkTaskRoute, params, options);

    if (response.ok) {
      this.cmdUpdateWorkTaskOutput = response.data ?? null;
      setState('ui.taskBoardWorkspace.output.cmdUpdateWorkTask', this.cmdUpdateWorkTaskOutput);

      // Clear input state keys (not workTaskId — it is a route param)
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

      this.cmdUpdateWorkTaskError = '';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error', '');
      this.cmdUpdateWorkTaskState = 'success';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? '';
      this.cmdUpdateWorkTaskError = errorMsg;
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.error', errorMsg);
      this.cmdUpdateWorkTaskState = 'error';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTask.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action cmdUpdateWorkTask — bind UI events here */
  handleCmdUpdateWorkTaskClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.cmdUpdateWorkTask(signal);
    }, { mode: 'blocking' });
  }

  /** action cmdUpdateWorkTaskStatus (command) — route buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTaskStatus; inputs: workTaskId, status, cancellationReason, completedAt, actorId; writes cmdUpdateWorkTaskStatusOutput; status cmdUpdateWorkTaskStatusState; feedback keys action.cmdUpdateWorkTaskStatus.success / action.cmdUpdateWorkTaskStatus.error */
  async cmdUpdateWorkTaskStatus(signal: AbortSignal): Promise<void> {
    this.cmdUpdateWorkTaskStatusState = 'loading';
    setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status', 'loading');

    const params = {
      workTaskId: this.cmdUpdateWorkTaskStatusWorkTaskId,
      status: this.cmdUpdateWorkTaskStatusStatus,
      cancellationReason: this.cmdUpdateWorkTaskStatusCancellationReason,
      completedAt: this.cmdUpdateWorkTaskStatusCompletedAt,
      actorId: this.cmdUpdateWorkTaskStatusActorId,
    };

    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<CmdUpdateWorkTaskStatusOutput>(cmdUpdateWorkTaskStatusRoute, params, options);

    if (response.ok) {
      this.cmdUpdateWorkTaskStatusOutput = response.data ?? null;
      setState('ui.taskBoardWorkspace.output.cmdUpdateWorkTaskStatus', this.cmdUpdateWorkTaskStatusOutput);

      // Clear input state keys
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

      this.cmdUpdateWorkTaskStatusError = '';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error', '');
      this.cmdUpdateWorkTaskStatusState = 'success';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status', 'success');
    } else {
      const errorMsg = response.error?.message ?? '';
      this.cmdUpdateWorkTaskStatusError = errorMsg;
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.error', errorMsg);
      this.cmdUpdateWorkTaskStatusState = 'error';
      setState('ui.taskBoardWorkspace.action.cmdUpdateWorkTaskStatus.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action cmdUpdateWorkTaskStatus — bind UI events here */
  handleCmdUpdateWorkTaskStatusClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.cmdUpdateWorkTaskStatus(signal);
    }, { mode: 'blocking' });
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId */
  setCmdCreateWorkTaskProjectId(value: string): void {
    this.cmdCreateWorkTaskProjectId = value;
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskProjectId — bind UI events here */
  handleCmdCreateWorkTaskProjectIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCmdCreateWorkTaskProjectId(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdCreateWorkTask.title */
  setCmdCreateWorkTaskTitle(value: string): void {
    this.cmdCreateWorkTaskTitle = value;
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.title', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskTitle — bind UI events here */
  handleCmdCreateWorkTaskTitleChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.setCmdCreateWorkTaskTitle(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdCreateWorkTask.description */
  setCmdCreateWorkTaskDescription(value: string): void {
    this.cmdCreateWorkTaskDescription = value;
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskDescription — bind UI events here */
  handleCmdCreateWorkTaskDescriptionChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.setCmdCreateWorkTaskDescription(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId */
  setCmdCreateWorkTaskAssignedWorkerId(value: string): void {
    this.cmdCreateWorkTaskAssignedWorkerId = value;
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.assignedWorkerId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskAssignedWorkerId — bind UI events here */
  handleCmdCreateWorkTaskAssignedWorkerIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCmdCreateWorkTaskAssignedWorkerId(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate */
  setCmdCreateWorkTaskDueDate(value: string): void {
    this.cmdCreateWorkTaskDueDate = value;
    setState('ui.taskBoardWorkspace.input.cmdCreateWorkTask.dueDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateWorkTaskDueDate — bind UI events here */
  handleCmdCreateWorkTaskDueDateChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCmdCreateWorkTaskDueDate(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId */
  setCmdUpdateWorkTaskWorkTaskId(value: string): void {
    this.cmdUpdateWorkTaskWorkTaskId = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskWorkTaskId — bind UI events here */
  handleCmdUpdateWorkTaskWorkTaskIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCmdUpdateWorkTaskWorkTaskId(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title */
  setCmdUpdateWorkTaskTitle(value: string): void {
    this.cmdUpdateWorkTaskTitle = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.title', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskTitle — bind UI events here */
  handleCmdUpdateWorkTaskTitleChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.setCmdUpdateWorkTaskTitle(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description */
  setCmdUpdateWorkTaskDescription(value: string): void {
    this.cmdUpdateWorkTaskDescription = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskDescription — bind UI events here */
  handleCmdUpdateWorkTaskDescriptionChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.setCmdUpdateWorkTaskDescription(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId */
  setCmdUpdateWorkTaskAssignedWorkerId(value: string): void {
    this.cmdUpdateWorkTaskAssignedWorkerId = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.assignedWorkerId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskAssignedWorkerId — bind UI events here */
  handleCmdUpdateWorkTaskAssignedWorkerIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCmdUpdateWorkTaskAssignedWorkerId(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate */
  setCmdUpdateWorkTaskDueDate(value: string): void {
    this.cmdUpdateWorkTaskDueDate = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.dueDate', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskDueDate — bind UI events here */
  handleCmdUpdateWorkTaskDueDateChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCmdUpdateWorkTaskDueDate(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status */
  setCmdUpdateWorkTaskStatusValue(value: string): void {
    this.cmdUpdateWorkTaskStatusValue = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusValue — bind UI events here */
  handleCmdUpdateWorkTaskStatusValueChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCmdUpdateWorkTaskStatusValue(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason */
  setCmdUpdateWorkTaskCancellationReason(value: string): void {
    this.cmdUpdateWorkTaskCancellationReason = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTask.cancellationReason', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskCancellationReason — bind UI events here */
  handleCmdUpdateWorkTaskCancellationReasonChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.setCmdUpdateWorkTaskCancellationReason(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId */
  setCmdUpdateWorkTaskStatusWorkTaskId(value: string): void {
    this.cmdUpdateWorkTaskStatusWorkTaskId = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusWorkTaskId — bind UI events here */
  handleCmdUpdateWorkTaskStatusWorkTaskIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCmdUpdateWorkTaskStatusWorkTaskId(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status */
  setCmdUpdateWorkTaskStatusStatus(value: string): void {
    this.cmdUpdateWorkTaskStatusStatus = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusStatus — bind UI events here */
  handleCmdUpdateWorkTaskStatusStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCmdUpdateWorkTaskStatusStatus(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason */
  setCmdUpdateWorkTaskStatusCancellationReason(value: string): void {
    this.cmdUpdateWorkTaskStatusCancellationReason = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.cancellationReason', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusCancellationReason — bind UI events here */
  handleCmdUpdateWorkTaskStatusCancellationReasonChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLTextAreaElement;
    this.setCmdUpdateWorkTaskStatusCancellationReason(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt */
  setCmdUpdateWorkTaskStatusCompletedAt(value: string): void {
    this.cmdUpdateWorkTaskStatusCompletedAt = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.completedAt', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusCompletedAt — bind UI events here */
  handleCmdUpdateWorkTaskStatusCompletedAtChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setCmdUpdateWorkTaskStatusCompletedAt(target.value);
  }

  /** setter for state ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId */
  setCmdUpdateWorkTaskStatusActorId(value: string): void {
    this.cmdUpdateWorkTaskStatusActorId = value;
    setState('ui.taskBoardWorkspace.input.cmdUpdateWorkTaskStatus.actorId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateWorkTaskStatusActorId — bind UI events here */
  handleCmdUpdateWorkTaskStatusActorIdChange(e: Event): void {
    const target = e.target as HTMLInputElement | HTMLSelectElement;
    this.setCmdUpdateWorkTaskStatusActorId(target.value);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    // Initialize state from getState where useful, falling back to defaultValue
    const savedStatus = getState('ui.taskBoardWorkspace.status');
    if (savedStatus !== undefined) {
      this.status = savedStatus as string;
    }
    // No initialLoads to run; no shared state subscriptions needed
  }

  override disconnectedCallback(): void {
    // No subscriptions to unsubscribe
    super.disconnectedCallback();
  }
}
