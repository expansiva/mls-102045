/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/taskBoardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmTaskBoardWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.js';

/// **collab_i18n_start**
const s_en = {
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
const s_pt_br = s_en;
const s_es = s_en;

const message_en = {
  'page.title': s_en['section.taskBoardWorkspace.sec-task-board.title'],
  'create.section': s_en['section.taskBoardWorkspace.sec-create-task.title'],
  'create.title': s_en['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label'],
  'create.description': s_en['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label'],
  'create.assignedWorkerId': s_en['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label'],
  'create.dueDate': s_en['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label'],
  'create.projectSelected': 'Selected project',
  'create.projectEmpty': 'Select a project to create a task',
  'create.submit': s_en['intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask'],
  'create.loading': 'Creating…',
  'create.success': s_en['action.cmdCreateWorkTask.success'],
  'create.error': s_en['action.cmdCreateWorkTask.error'],
  'create.dismiss': 'Dismiss',
  'edit.section': s_en['section.taskBoardWorkspace.editTaskSection.title'],
  'edit.taskId': 'Task',
  'edit.taskEmpty': 'Open a task from the route to edit assignment and details',
  'edit.title': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label'],
  'edit.description': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label'],
  'edit.assignedWorkerId': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label'],
  'edit.dueDate': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label'],
  'edit.status': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label'],
  'edit.cancellationReason': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label'],
  'edit.submit': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
  'edit.loading': 'Saving…',
  'edit.success': s_en['action.cmdUpdateWorkTask.success'],
  'edit.error': s_en['action.cmdUpdateWorkTask.error'],
  'edit.dismiss': 'Dismiss',
  'status.section': s_en['section.taskBoardWorkspace.fieldStatusSection.title'],
  'status.taskSelected': 'Selected task',
  'status.taskEmpty': 'Select a task to update its status from the field',
  'status.status': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label'],
  'status.cancellationReason': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label'],
  'status.actorId': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label'],
  'status.submit': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus'],
  'status.loading': 'Updating…',
  'status.success': s_en['action.cmdUpdateWorkTaskStatus.success'],
  'status.error': s_en['action.cmdUpdateWorkTaskStatus.error'],
  'status.dismiss': 'Dismiss',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'page.title': s_pt_br['section.taskBoardWorkspace.sec-task-board.title'],
  'create.section': s_pt_br['section.taskBoardWorkspace.sec-create-task.title'],
  'create.title': s_pt_br['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label'],
  'create.description': s_pt_br['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label'],
  'create.assignedWorkerId': s_pt_br['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label'],
  'create.dueDate': s_pt_br['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label'],
  'create.projectSelected': 'Projeto selecionado',
  'create.projectEmpty': 'Selecione um projeto para criar uma tarefa',
  'create.submit': s_pt_br['intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask'],
  'create.loading': 'Criando…',
  'create.success': s_pt_br['action.cmdCreateWorkTask.success'],
  'create.error': s_pt_br['action.cmdCreateWorkTask.error'],
  'create.dismiss': 'Dispensar',
  'edit.section': s_pt_br['section.taskBoardWorkspace.editTaskSection.title'],
  'edit.taskId': 'Tarefa',
  'edit.taskEmpty': 'Abra uma tarefa pela rota para editar atribuição e detalhes',
  'edit.title': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label'],
  'edit.description': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label'],
  'edit.assignedWorkerId': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label'],
  'edit.dueDate': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label'],
  'edit.status': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label'],
  'edit.cancellationReason': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label'],
  'edit.submit': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
  'edit.loading': 'Salvando…',
  'edit.success': s_pt_br['action.cmdUpdateWorkTask.success'],
  'edit.error': s_pt_br['action.cmdUpdateWorkTask.error'],
  'edit.dismiss': 'Dispensar',
  'status.section': s_pt_br['section.taskBoardWorkspace.fieldStatusSection.title'],
  'status.taskSelected': 'Tarefa selecionada',
  'status.taskEmpty': 'Selecione uma tarefa para atualizar o status em campo',
  'status.status': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label'],
  'status.cancellationReason': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label'],
  'status.actorId': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label'],
  'status.submit': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus'],
  'status.loading': 'Atualizando…',
  'status.success': s_pt_br['action.cmdUpdateWorkTaskStatus.success'],
  'status.error': s_pt_br['action.cmdUpdateWorkTaskStatus.error'],
  'status.dismiss': 'Dispensar',
};
const message_es: MessageType = {
  'page.title': s_es['section.taskBoardWorkspace.sec-task-board.title'],
  'create.section': s_es['section.taskBoardWorkspace.sec-create-task.title'],
  'create.title': s_es['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label'],
  'create.description': s_es['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label'],
  'create.assignedWorkerId': s_es['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label'],
  'create.dueDate': s_es['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label'],
  'create.projectSelected': 'Proyecto seleccionado',
  'create.projectEmpty': 'Seleccione un proyecto para crear una tarea',
  'create.submit': s_es['intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask'],
  'create.loading': 'Creando…',
  'create.success': s_es['action.cmdCreateWorkTask.success'],
  'create.error': s_es['action.cmdCreateWorkTask.error'],
  'create.dismiss': 'Descartar',
  'edit.section': s_es['section.taskBoardWorkspace.editTaskSection.title'],
  'edit.taskId': 'Tarea',
  'edit.taskEmpty': 'Abra una tarea desde la ruta para editar asignación y detalles',
  'edit.title': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label'],
  'edit.description': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label'],
  'edit.assignedWorkerId': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label'],
  'edit.dueDate': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label'],
  'edit.status': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label'],
  'edit.cancellationReason': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label'],
  'edit.submit': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
  'edit.loading': 'Guardando…',
  'edit.success': s_es['action.cmdUpdateWorkTask.success'],
  'edit.error': s_es['action.cmdUpdateWorkTask.error'],
  'edit.dismiss': 'Descartar',
  'status.section': s_es['section.taskBoardWorkspace.fieldStatusSection.title'],
  'status.taskSelected': 'Tarea seleccionada',
  'status.taskEmpty': 'Seleccione una tarea para actualizar su estado en campo',
  'status.status': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label'],
  'status.cancellationReason': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label'],
  'status.actorId': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label'],
  'status.submit': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus'],
  'status.loading': 'Actualizando…',
  'status.success': s_es['action.cmdUpdateWorkTaskStatus.success'],
  'status.error': s_es['action.cmdUpdateWorkTaskStatus.error'],
  'status.dismiss': 'Descartar',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

@customElement('build-flow-fsm--web--desktop--page11--task-board-workspace-102045')
export class BuildFlowFsmDesktopPage11TaskBoardWorkspacePage extends BuildFlowFsmTaskBoardWorkspaceBase {
  get msg(): MessageType {
    const lang = (typeof document !== 'undefined' && document.documentElement.lang)
      ? document.documentElement.lang.toLowerCase()
      : 'en';
    return messages[lang] ?? messages['en']!;
  }

  render() {
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          ${this.renderHeader()}
          ${this.renderCreateTask()}
          ${this.renderEditTask()}
          ${this.renderUpdateStatus()}
        </div>
      </div>
    `;
  }

  renderHeader() {
    const msg = this.msg;
    return html`
      <header class="space-y-1">
        <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
      </header>
    `;
  }

  renderCreateTask() {
    const msg = this.msg;
    const loading = this.cmdCreateWorkTaskState === 'loading';
    const showSuccess = this.cmdCreateWorkTaskState === 'success';
    const showError = this.cmdCreateWorkTaskState === 'error';
    const errorText = this.cmdCreateWorkTaskError || msg['create.error'];
    const hasProject = Boolean(this.cmdCreateWorkTaskProjectId);

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['create.section']}</h2>

        ${hasProject
          ? html`
              <div class="inline-flex items-center gap-2 rounded-md border border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)] px-3 py-1.5 text-sm text-[var(--selected-text,#1e3a8a)]">
                <span class="text-[var(--text-muted,#64748b)]">${msg['create.projectSelected']}</span>
                <span class="font-medium">${this.cmdCreateWorkTaskProjectId}</span>
              </div>
            `
          : html`
              <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.projectEmpty']}</p>
            `}

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['create.title']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdCreateWorkTaskTitle}
              ?disabled=${loading || !hasProject}
              @input=${this.handleCmdCreateWorkTaskTitleChange}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['create.assignedWorkerId']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdCreateWorkTaskAssignedWorkerId}
              ?disabled=${loading || !hasProject}
              @input=${this.handleCmdCreateWorkTaskAssignedWorkerIdChange}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)] md:col-span-2">
            <span>${msg['create.description']}</span>
            <textarea
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 min-h-[5rem]"
              .value=${this.cmdCreateWorkTaskDescription}
              ?disabled=${loading || !hasProject}
              @input=${this.handleCmdCreateWorkTaskDescriptionChange}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['create.dueDate']}</span>
            <input
              type="date"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdCreateWorkTaskDueDate}
              ?disabled=${loading || !hasProject}
              @input=${this.handleCmdCreateWorkTaskDueDateChange}
            />
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${loading || !hasProject}
            @click=${this.handleCmdCreateWorkTaskClick}
          >
            ${loading ? msg['create.loading'] : msg['create.submit']}
          </button>
        </div>

        ${showSuccess
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]" role="status">
                <span>${msg['create.success']}</span>
                <button type="button" class="underline" @click=${() => this.cmdCreateWorkTaskState = 'idle'}>${msg['create.dismiss']}</button>
              </div>
            `
          : nothing}
        ${showError
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
                <span>${errorText}</span>
                <button type="button" class="underline" @click=${() => this.cmdCreateWorkTaskState = 'idle'}>${msg['create.dismiss']}</button>
              </div>
            `
          : nothing}
      </section>
    `;
  }

  renderEditTask() {
    const msg = this.msg;
    const loading = this.cmdUpdateWorkTaskState === 'loading';
    const showSuccess = this.cmdUpdateWorkTaskState === 'success';
    const showError = this.cmdUpdateWorkTaskState === 'error';
    const errorText = this.cmdUpdateWorkTaskError || msg['edit.error'];
    const hasTask = Boolean(this.cmdUpdateWorkTaskWorkTaskId);

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['edit.section']}</h2>

        ${hasTask
          ? html`
              <div class="inline-flex items-center gap-2 rounded-md border border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)] px-3 py-1.5 text-sm text-[var(--selected-text,#1e3a8a)]">
                <span class="text-[var(--text-muted,#64748b)]">${msg['edit.taskId']}</span>
                <span class="font-medium">${this.cmdUpdateWorkTaskWorkTaskId}</span>
              </div>
            `
          : html`
              <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['edit.taskEmpty']}</p>
            `}

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['edit.title']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdUpdateWorkTaskTitle}
              ?disabled=${loading || !hasTask}
              @input=${this.handleCmdUpdateWorkTaskTitleChange}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['edit.assignedWorkerId']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdUpdateWorkTaskAssignedWorkerId}
              ?disabled=${loading || !hasTask}
              @input=${this.handleCmdUpdateWorkTaskAssignedWorkerIdChange}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)] md:col-span-2">
            <span>${msg['edit.description']}</span>
            <textarea
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 min-h-[5rem]"
              .value=${this.cmdUpdateWorkTaskDescription}
              ?disabled=${loading || !hasTask}
              @input=${this.handleCmdUpdateWorkTaskDescriptionChange}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['edit.dueDate']}</span>
            <input
              type="date"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdUpdateWorkTaskDueDate}
              ?disabled=${loading || !hasTask}
              @input=${this.handleCmdUpdateWorkTaskDueDateChange}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['edit.status']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdUpdateWorkTaskStatusValue}
              ?disabled=${loading || !hasTask}
              @input=${this.handleCmdUpdateWorkTaskStatusValueChange}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)] md:col-span-2">
            <span>${msg['edit.cancellationReason']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdUpdateWorkTaskCancellationReason}
              ?disabled=${loading || !hasTask}
              @input=${this.handleCmdUpdateWorkTaskCancellationReasonChange}
            />
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${loading || !hasTask}
            @click=${this.handleCmdUpdateWorkTaskClick}
          >
            ${loading ? msg['edit.loading'] : msg['edit.submit']}
          </button>
        </div>

        ${showSuccess
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]" role="status">
                <span>${msg['edit.success']}</span>
                <button type="button" class="underline" @click=${() => this.cmdUpdateWorkTaskState = 'idle'}>${msg['edit.dismiss']}</button>
              </div>
            `
          : nothing}
        ${showError
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
                <span>${errorText}</span>
                <button type="button" class="underline" @click=${() => this.cmdUpdateWorkTaskState = 'idle'}>${msg['edit.dismiss']}</button>
              </div>
            `
          : nothing}
      </section>
    `;
  }

  renderUpdateStatus() {
    const msg = this.msg;
    const loading = this.cmdUpdateWorkTaskStatusState === 'loading';
    const showSuccess = this.cmdUpdateWorkTaskStatusState === 'success';
    const showError = this.cmdUpdateWorkTaskStatusState === 'error';
    const errorText = this.cmdUpdateWorkTaskStatusError || msg['status.error'];
    const hasTask = Boolean(this.cmdUpdateWorkTaskStatusWorkTaskId);

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['status.section']}</h2>

        ${hasTask
          ? html`
              <div class="inline-flex items-center gap-2 rounded-md border border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)] px-3 py-1.5 text-sm text-[var(--selected-text,#1e3a8a)]">
                <span class="text-[var(--text-muted,#64748b)]">${msg['status.taskSelected']}</span>
                <span class="font-medium">${this.cmdUpdateWorkTaskStatusWorkTaskId}</span>
              </div>
            `
          : html`
              <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['status.taskEmpty']}</p>
            `}

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['status.status']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdUpdateWorkTaskStatusStatus}
              ?disabled=${loading || !hasTask}
              @input=${this.handleCmdUpdateWorkTaskStatusStatusChange}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['status.actorId']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdUpdateWorkTaskStatusActorId}
              ?disabled=${loading || !hasTask}
              @input=${this.handleCmdUpdateWorkTaskStatusActorIdChange}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)] md:col-span-2">
            <span>${msg['status.cancellationReason']}</span>
            <input
              type="text"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.cmdUpdateWorkTaskStatusCancellationReason}
              ?disabled=${loading || !hasTask}
              @input=${this.handleCmdUpdateWorkTaskStatusCancellationReasonChange}
            />
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${loading || !hasTask}
            @click=${this.handleCmdUpdateWorkTaskStatusClick}
          >
            ${loading ? msg['status.loading'] : msg['status.submit']}
          </button>
        </div>

        ${showSuccess
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]" role="status">
                <span>${msg['status.success']}</span>
                <button type="button" class="underline" @click=${() => this.cmdUpdateWorkTaskStatusState = 'idle'}>${msg['status.dismiss']}</button>
              </div>
            `
          : nothing}
        ${showError
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
                <span>${errorText}</span>
                <button type="button" class="underline" @click=${() => this.cmdUpdateWorkTaskStatusState = 'idle'}>${msg['status.dismiss']}</button>
              </div>
            `
          : nothing}
      </section>
    `;
  }
}
