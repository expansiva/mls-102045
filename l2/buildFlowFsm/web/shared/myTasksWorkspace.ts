/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/myTasksWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState } from '/_102029_/l2/collabState.js';

import type { ListMyWorkTasksInput, ListMyWorkTasksOutput, GetWorkTaskDetailInput, GetWorkTaskDetailOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/myTasksWorkspace.js';
import { listMyWorkTasksRoute, getWorkTaskDetailRoute } from '/_102045_/l2/buildFlowFsm/web/contracts/myTasksWorkspace.js';

export type { ListMyWorkTasksInput, ListMyWorkTasksOutput, GetWorkTaskDetailInput, GetWorkTaskDetailOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/myTasksWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.myTasksWorkspace.taskListSection.title": "My Tasks",
"organism.myTasksWorkspace.inline-row-command10.title": "Inline row command",
"intent.myTasksWorkspace.inline-row-command10.content.title": "Inline row command",
"organism.myTasksWorkspace.listMyWorkTasks.title": "Browse my assigned tasks",
"intent.myTasksWorkspace.listMyWorkTasks.list.title": "Browse my assigned tasks",
"intent.myTasksWorkspace.listMyWorkTasks.list.empty": "Nenhum registro encontrado",
"intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks.label": "Work Tasks",
"intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label": "Total",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.assignedWorkerId.label": "Assigned Worker Id",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label": "Status",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label": "Page",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize.label": "Page Size",
"organism.myTasksWorkspace.getWorkTaskDetail.title": "View work task details",
"intent.myTasksWorkspace.getWorkTaskDetail.list.title": "View work task details",
"intent.myTasksWorkspace.getWorkTaskDetail.list.empty": "Nenhum registro encontrado",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label": "Work Task Id",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label": "Project Id",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label": "Project Name",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label": "Title",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label": "Description",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId.label": "Assigned Worker Id",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label": "Status",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label": "Due Date",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label": "Is Overdue",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label": "Completed At",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label": "Cancelled At",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label": "Cancellation Reason",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label": "Created At",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label": "Updated At",
"intent.myTasksWorkspace.getWorkTaskDetail.list.filter.actorId.label": "Actor Id",
"organism.myTasksWorkspace.summary-first10.title": "Summary first",
"intent.myTasksWorkspace.summary-first10.content.title": "Summary first"
};

const message_pt_br = {
"section.myTasksWorkspace.taskListSection.title": "Minhas Tarefas",
"organism.myTasksWorkspace.inline-row-command10.title": "Comando de linha inline",
"intent.myTasksWorkspace.inline-row-command10.content.title": "Comando de linha inline",
"organism.myTasksWorkspace.listMyWorkTasks.title": "Navegar pelas minhas tarefas atribuídas",
"intent.myTasksWorkspace.listMyWorkTasks.list.title": "Navegar pelas minhas tarefas atribuídas",
"intent.myTasksWorkspace.listMyWorkTasks.list.empty": "Nenhum registro encontrado",
"intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks.label": "Tarefas",
"intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label": "Total",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.assignedWorkerId.label": "ID do trabalhador atribuído",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label": "Status",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label": "Página",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize.label": "Tamanho da página",
"organism.myTasksWorkspace.getWorkTaskDetail.title": "Ver detalhes da tarefa",
"intent.myTasksWorkspace.getWorkTaskDetail.list.title": "Ver detalhes da tarefa",
"intent.myTasksWorkspace.getWorkTaskDetail.list.empty": "Nenhum registro encontrado",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label": "ID da tarefa",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label": "ID do projeto",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label": "Nome do projeto",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label": "Título",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label": "Descrição",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId.label": "ID do trabalhador atribuído",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label": "Status",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label": "Data de vencimento",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label": "Está atrasado",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label": "Concluído em",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label": "Cancelado em",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label": "Motivo do cancelamento",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label": "Criado em",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label": "Atualizado em",
"intent.myTasksWorkspace.getWorkTaskDetail.list.filter.actorId.label": "ID do ator",
"organism.myTasksWorkspace.summary-first10.title": "Resumo inicial",
"intent.myTasksWorkspace.summary-first10.content.title": "Resumo inicial"
};

const message_es = {
"section.myTasksWorkspace.taskListSection.title": "Mis Tareas",
"organism.myTasksWorkspace.inline-row-command10.title": "Comando de fila en línea",
"intent.myTasksWorkspace.inline-row-command10.content.title": "Comando de fila en línea",
"organism.myTasksWorkspace.listMyWorkTasks.title": "Navegar por mis tareas asignadas",
"intent.myTasksWorkspace.listMyWorkTasks.list.title": "Navegar por mis tareas asignadas",
"intent.myTasksWorkspace.listMyWorkTasks.list.empty": "No se encontraron registros",
"intent.myTasksWorkspace.listMyWorkTasks.list.column.workTasks.label": "Tareas",
"intent.myTasksWorkspace.listMyWorkTasks.list.column.total.label": "Total",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.assignedWorkerId.label": "ID del trabajador asignado",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.status.label": "Estado",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.page.label": "Página",
"intent.myTasksWorkspace.listMyWorkTasks.list.filter.pageSize.label": "Tamaño de página",
"organism.myTasksWorkspace.getWorkTaskDetail.title": "Ver detalles de la tarea",
"intent.myTasksWorkspace.getWorkTaskDetail.list.title": "Ver detalles de la tarea",
"intent.myTasksWorkspace.getWorkTaskDetail.list.empty": "No se encontraron registros",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.workTaskId.label": "ID de la tarea",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectId.label": "ID del proyecto",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.projectName.label": "Nombre del proyecto",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.title.label": "Título",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.description.label": "Descripción",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.assignedWorkerId.label": "ID del trabajador asignado",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.status.label": "Estado",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.dueDate.label": "Fecha de vencimiento",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.isOverdue.label": "Está atrasado",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.completedAt.label": "Completado en",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancelledAt.label": "Cancelado en",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.cancellationReason.label": "Razón de cancelación",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.createdAt.label": "Creado en",
"intent.myTasksWorkspace.getWorkTaskDetail.list.column.updatedAt.label": "Actualizado en",
"intent.myTasksWorkspace.getWorkTaskDetail.list.filter.actorId.label": "ID del actor",
"organism.myTasksWorkspace.summary-first10.title": "Resumen inicial",
"intent.myTasksWorkspace.summary-first10.content.title": "Resumen inicial"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmMyTasksWorkspaceBase extends CollabLitElement {
  /** state ui.myTasksWorkspace.status — pageStatus */
  @property({ type: String }) status: string = '';

  /** state ui.myTasksWorkspace.action.listMyWorkTasks.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) listMyWorkTasksState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId — input, source: actorSession, presentation: form */
  @property({ type: String }) listMyWorkTasksAssignedWorkerId: string = '';

  /** state ui.myTasksWorkspace.input.listMyWorkTasks.status — input, source: userInput, presentation: form */
  @property({ type: String }) listMyWorkTasksStatus: string = '';

  /** state ui.myTasksWorkspace.input.listMyWorkTasks.page — input, source: userInput, presentation: form */
  @property({ type: String }) listMyWorkTasksPage: string = '';

  /** state ui.myTasksWorkspace.input.listMyWorkTasks.pageSize — input, source: userInput, presentation: form */
  @property({ type: String }) listMyWorkTasksPageSize: string = '';

  /** state ui.myTasksWorkspace.data.listMyWorkTasks — queryResult, outputShape: paginated */
  @property({ type: Object }) listMyWorkTasksData: ListMyWorkTasksOutput = { workTasks: [], total: 0 };

  /** state ui.myTasksWorkspace.action.getWorkTaskDetail.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) getWorkTaskDetailState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId — input, source: routeParam, presentation: route */
  @property({ type: String }) getWorkTaskDetailWorkTaskId: string = '';

  /** state ui.myTasksWorkspace.input.getWorkTaskDetail.actorId — input, source: actorSession, presentation: form */
  @property({ type: String }) getWorkTaskDetailActorId: string = '';

  /** state ui.myTasksWorkspace.data.getWorkTaskDetail — queryResult, outputShape: object */
  @property({ type: Object }) getWorkTaskDetailData: GetWorkTaskDetailOutput | null = null;

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  /** action listMyWorkTasks (query) — route buildFlowFsm.myTasksWorkspace.listMyWorkTasks; inputs: assignedWorkerId, status, page, pageSize; writes listMyWorkTasksData; status listMyWorkTasksState */
  async loadListMyWorkTasks(): Promise<void> {
    this.listMyWorkTasksState = 'loading';
    setState('ui.myTasksWorkspace.action.listMyWorkTasks.status', 'loading');

    const params: ListMyWorkTasksInput = {
      assignedWorkerId: this.listMyWorkTasksAssignedWorkerId,
    };
    if (this.listMyWorkTasksStatus) {
      params.status = this.listMyWorkTasksStatus;
    }
    if (this.listMyWorkTasksPage) {
      const page = Number(this.listMyWorkTasksPage);
      if (!isNaN(page)) {
        params.page = page;
      }
    }
    if (this.listMyWorkTasksPageSize) {
      const pageSize = Number(this.listMyWorkTasksPageSize);
      if (!isNaN(pageSize)) {
        params.pageSize = pageSize;
      }
    }

    const opts: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListMyWorkTasksOutput>(listMyWorkTasksRoute, params, opts);

    if (response.ok) {
      const data: ListMyWorkTasksOutput = response.data ?? { workTasks: [], total: 0 };
      this.listMyWorkTasksData = data;
      setState('ui.myTasksWorkspace.data.listMyWorkTasks', data);
      this.listMyWorkTasksState = 'success';
      setState('ui.myTasksWorkspace.action.listMyWorkTasks.status', 'success');
    } else {
      this.listMyWorkTasksState = 'error';
      setState('ui.myTasksWorkspace.action.listMyWorkTasks.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action listMyWorkTasks — bind UI events here */
  handleListMyWorkTasksClick(): void {
    void this.loadListMyWorkTasks();
  }

  /** action getWorkTaskDetail (query) — route buildFlowFsm.myTasksWorkspace.getWorkTaskDetail; inputs: workTaskId, actorId; writes getWorkTaskDetailData; status getWorkTaskDetailState */
  async loadGetWorkTaskDetail(): Promise<void> {
    const routeParams = this.parseRouteParams();
    const routeWorkTaskId = routeParams['workTaskId'] || '';
    if (routeWorkTaskId && !this.getWorkTaskDetailWorkTaskId) {
      this.getWorkTaskDetailWorkTaskId = routeWorkTaskId;
      setState('ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId', routeWorkTaskId);
    }

    if (!this.getWorkTaskDetailWorkTaskId) {
      this.getWorkTaskDetailState = 'idle';
      setState('ui.myTasksWorkspace.action.getWorkTaskDetail.status', 'idle');
      this.getWorkTaskDetailData = null;
      setState('ui.myTasksWorkspace.data.getWorkTaskDetail', null);
      this.requestUpdate();
      return;
    }

    this.getWorkTaskDetailState = 'loading';
    setState('ui.myTasksWorkspace.action.getWorkTaskDetail.status', 'loading');

    const params: GetWorkTaskDetailInput = {
      workTaskId: this.getWorkTaskDetailWorkTaskId,
      actorId: this.getWorkTaskDetailActorId,
    };

    const opts: BffClientOptions = { mode: 'silent' };
    const response = await execBff<GetWorkTaskDetailOutput>(getWorkTaskDetailRoute, params, opts);

    if (response.ok) {
      const data: GetWorkTaskDetailOutput | null = response.data ?? null;
      this.getWorkTaskDetailData = data;
      setState('ui.myTasksWorkspace.data.getWorkTaskDetail', data);
      this.getWorkTaskDetailState = 'success';
      setState('ui.myTasksWorkspace.action.getWorkTaskDetail.status', 'success');
    } else {
      this.getWorkTaskDetailState = 'error';
      setState('ui.myTasksWorkspace.action.getWorkTaskDetail.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action getWorkTaskDetail — bind UI events here */
  handleGetWorkTaskDetailClick(): void {
    void this.loadGetWorkTaskDetail();
  }

  /** setter for state ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId */
  setListMyWorkTasksAssignedWorkerId(value: string): void {
    this.listMyWorkTasksAssignedWorkerId = value;
    setState('ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId', value);
    this.requestUpdate();
  }

  /** handler for action set.listMyWorkTasksAssignedWorkerId — bind UI events here */
  handleListMyWorkTasksAssignedWorkerIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setListMyWorkTasksAssignedWorkerId(target.value);
  }

  /** setter for state ui.myTasksWorkspace.input.listMyWorkTasks.status */
  setListMyWorkTasksStatus(value: string): void {
    this.listMyWorkTasksStatus = value;
    setState('ui.myTasksWorkspace.input.listMyWorkTasks.status', value);
    this.requestUpdate();
  }

  /** handler for action set.listMyWorkTasksStatus — bind UI events here */
  handleListMyWorkTasksStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setListMyWorkTasksStatus(target.value);
  }

  /** setter for state ui.myTasksWorkspace.input.listMyWorkTasks.page */
  setListMyWorkTasksPage(value: string): void {
    this.listMyWorkTasksPage = value;
    setState('ui.myTasksWorkspace.input.listMyWorkTasks.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listMyWorkTasksPage — bind UI events here */
  handleListMyWorkTasksPageChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setListMyWorkTasksPage(target.value);
  }

  /** setter for state ui.myTasksWorkspace.input.listMyWorkTasks.pageSize */
  setListMyWorkTasksPageSize(value: string): void {
    this.listMyWorkTasksPageSize = value;
    setState('ui.myTasksWorkspace.input.listMyWorkTasks.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listMyWorkTasksPageSize — bind UI events here */
  handleListMyWorkTasksPageSizeChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setListMyWorkTasksPageSize(target.value);
  }

  /** setter for state ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId */
  setGetWorkTaskDetailWorkTaskId(value: string): void {
    this.getWorkTaskDetailWorkTaskId = value;
    setState('ui.myTasksWorkspace.input.getWorkTaskDetail.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.getWorkTaskDetailWorkTaskId — bind UI events here */
  handleGetWorkTaskDetailWorkTaskIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGetWorkTaskDetailWorkTaskId(target.value);
  }

  /** setter for state ui.myTasksWorkspace.input.getWorkTaskDetail.actorId */
  setGetWorkTaskDetailActorId(value: string): void {
    this.getWorkTaskDetailActorId = value;
    setState('ui.myTasksWorkspace.input.getWorkTaskDetail.actorId', value);
    this.requestUpdate();
  }

  /** handler for action set.getWorkTaskDetailActorId — bind UI events here */
  handleGetWorkTaskDetailActorIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGetWorkTaskDetailActorId(target.value);
  }

  connectedCallback(): void {
    super.connectedCallback();
    const savedWorkerId = getState('ui.myTasksWorkspace.input.listMyWorkTasks.assignedWorkerId') as string | undefined;
    if (savedWorkerId) {
      this.listMyWorkTasksAssignedWorkerId = savedWorkerId;
    }
    const savedActorId = getState('ui.myTasksWorkspace.input.getWorkTaskDetail.actorId') as string | undefined;
    if (savedActorId) {
      this.getWorkTaskDetailActorId = savedActorId;
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  private parseRouteParams(): Record<string, string> {
    const pattern = '/buildFlowFsm/myTasksWorkspace/:workTaskId?';
    const path = window.location.pathname;
    const patternParts = pattern.split('/');
    const pathParts = path.split('/');
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const pPart = patternParts[i];
      if (pPart.startsWith(':')) {
        const optional = pPart.endsWith('?');
        const name = optional ? pPart.slice(1, -1) : pPart.slice(1);
        if (i < pathParts.length && pathParts[i]) {
          try {
            params[name] = decodeURIComponent(pathParts[i]);
          } catch {
            params[name] = pathParts[i];
          }
        }
      }
    }
    return params;
  }
}
