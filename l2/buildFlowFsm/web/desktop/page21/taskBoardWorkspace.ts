/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/taskBoardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmTaskBoardWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.js';
import type {
  CmdCreateWorkTaskOutput,
  CmdUpdateWorkTaskOutput,
  CmdUpdateWorkTaskStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

// Return type for render<Name>() helpers: a template, or the Lit sentinel for an empty branch.
// Annotating them `: TemplateResult` alone is wrong — returning `nothing` is TS2322.
type Rendered = TemplateResult | typeof nothing;

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'create.open': 'New task',
  'create.title': s_en['section.taskBoardWorkspace.sec-create-task.title'],
  'create.save': 'Save task',
  'create.saving': 'Saving…',
  'create.field.title': s_en['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label'],
  'create.field.description': s_en['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label'],
  'create.field.assignee': 'Assignee',
  'create.field.dueDate': s_en['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label'],
  'create.success': s_en['action.cmdCreateWorkTask.success'],
  'create.error': s_en['action.cmdCreateWorkTask.error'],
  'list.empty': 'No tasks yet. Create a task to start planning by deadline.',
  'list.hint': 'Tasks appear here ordered by due date. Overdue dates are highlighted.',
  'detail.title': s_en['section.taskBoardWorkspace.sec-task-detail.title'],
  'detail.empty': 'Select a task to review and edit its details.',
  'detail.save': 'Save task',
  'detail.saving': 'Saving…',
  'detail.field.title': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label'],
  'detail.field.description': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label'],
  'detail.field.assignee': 'Assignee',
  'detail.field.dueDate': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label'],
  'detail.field.cancelReason': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label'],
  'detail.success': s_en['action.cmdUpdateWorkTask.success'],
  'detail.error': s_en['action.cmdUpdateWorkTask.error'],
  'status.heading': 'Next steps',
  'status.start': 'Start work',
  'status.complete': 'Mark completed',
  'status.cancel': 'Cancel task',
  'status.saving': 'Updating…',
  'status.success': s_en['action.cmdUpdateWorkTaskStatus.success'],
  'status.error': s_en['action.cmdUpdateWorkTaskStatus.error'],
  'status.cancelReason': s_en['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label'],
  'feedback.dismiss': 'Dismiss',
  'recent.create': 'Just created',
  'recent.update': 'Just updated',
  'recent.status': 'Status updated',
  'chip.assigned': 'Assigned',
  'chip.inProgress': 'In progress',
  'chip.completed': 'Completed',
  'chip.cancelled': 'Cancelled',
  'label.due': 'Due',
  'label.assignee': 'Assignee',
  'label.unassigned': 'Unassigned',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'create.open': 'Nova tarefa',
  'create.title': s_pt_br['section.taskBoardWorkspace.sec-create-task.title'],
  'create.save': 'Salvar tarefa',
  'create.saving': 'Salvando…',
  'create.field.title': s_pt_br['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label'],
  'create.field.description': s_pt_br['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label'],
  'create.field.assignee': 'Responsável',
  'create.field.dueDate': s_pt_br['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label'],
  'create.success': s_pt_br['action.cmdCreateWorkTask.success'],
  'create.error': s_pt_br['action.cmdCreateWorkTask.error'],
  'list.empty': 'Nenhuma tarefa ainda. Crie uma tarefa para planejar por prazo.',
  'list.hint': 'As tarefas aparecem aqui ordenadas por data de vencimento. Datas atrasadas são destacadas.',
  'detail.title': s_pt_br['section.taskBoardWorkspace.sec-task-detail.title'],
  'detail.empty': 'Selecione uma tarefa para revisar e editar os detalhes.',
  'detail.save': 'Salvar tarefa',
  'detail.saving': 'Salvando…',
  'detail.field.title': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label'],
  'detail.field.description': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label'],
  'detail.field.assignee': 'Responsável',
  'detail.field.dueDate': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label'],
  'detail.field.cancelReason': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label'],
  'detail.success': s_pt_br['action.cmdUpdateWorkTask.success'],
  'detail.error': s_pt_br['action.cmdUpdateWorkTask.error'],
  'status.heading': 'Próximos passos',
  'status.start': 'Iniciar trabalho',
  'status.complete': 'Marcar como concluída',
  'status.cancel': 'Cancelar tarefa',
  'status.saving': 'Atualizando…',
  'status.success': s_pt_br['action.cmdUpdateWorkTaskStatus.success'],
  'status.error': s_pt_br['action.cmdUpdateWorkTaskStatus.error'],
  'status.cancelReason': s_pt_br['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label'],
  'feedback.dismiss': 'Dispensar',
  'recent.create': 'Recém-criada',
  'recent.update': 'Recém-atualizada',
  'recent.status': 'Status atualizado',
  'chip.assigned': 'Atribuída',
  'chip.inProgress': 'Em andamento',
  'chip.completed': 'Concluída',
  'chip.cancelled': 'Cancelada',
  'label.due': 'Prazo',
  'label.assignee': 'Responsável',
  'label.unassigned': 'Sem responsável',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'create.open': 'Nueva tarea',
  'create.title': s_es['section.taskBoardWorkspace.sec-create-task.title'],
  'create.save': 'Guardar tarea',
  'create.saving': 'Guardando…',
  'create.field.title': s_es['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label'],
  'create.field.description': s_es['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label'],
  'create.field.assignee': 'Asignado',
  'create.field.dueDate': s_es['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label'],
  'create.success': s_es['action.cmdCreateWorkTask.success'],
  'create.error': s_es['action.cmdCreateWorkTask.error'],
  'list.empty': 'Aún no hay tareas. Crea una tarea para planificar por fecha límite.',
  'list.hint': 'Las tareas aparecen aquí ordenadas por fecha de vencimiento. Las fechas vencidas se resaltan.',
  'detail.title': s_es['section.taskBoardWorkspace.sec-task-detail.title'],
  'detail.empty': 'Selecciona una tarea para revisar y editar sus detalles.',
  'detail.save': 'Guardar tarea',
  'detail.saving': 'Guardando…',
  'detail.field.title': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label'],
  'detail.field.description': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label'],
  'detail.field.assignee': 'Asignado',
  'detail.field.dueDate': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label'],
  'detail.field.cancelReason': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label'],
  'detail.success': s_es['action.cmdUpdateWorkTask.success'],
  'detail.error': s_es['action.cmdUpdateWorkTask.error'],
  'status.heading': 'Próximos pasos',
  'status.start': 'Iniciar trabajo',
  'status.complete': 'Marcar como completada',
  'status.cancel': 'Cancelar tarea',
  'status.saving': 'Actualizando…',
  'status.success': s_es['action.cmdUpdateWorkTaskStatus.success'],
  'status.error': s_es['action.cmdUpdateWorkTaskStatus.error'],
  'status.cancelReason': s_es['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label'],
  'feedback.dismiss': 'Descartar',
  'recent.create': 'Recién creada',
  'recent.update': 'Recién actualizada',
  'recent.status': 'Estado actualizado',
  'chip.assigned': 'Asignada',
  'chip.inProgress': 'En progreso',
  'chip.completed': 'Completada',
  'chip.cancelled': 'Cancelada',
  'label.due': 'Vence',
  'label.assignee': 'Asignado',
  'label.unassigned': 'Sin asignar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page21--task-board-workspace-102045')
export class BuildFlowFsmDesktopPage21TaskBoardWorkspacePage extends BuildFlowFsmTaskBoardWorkspaceBase {
  #msgLang: string | null = null;
  #msgCache: PageMessageType = pageFallback;

  /** i18n catalog — resolved once per language, refreshed only when the document language changes. */
  protected get msg(): PageMessageType {
    const lang = (document.documentElement.lang || '').toLowerCase();
    if (lang !== this.#msgLang) {
      this.#msgLang = lang;
      this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
    }
    return this.#msgCache;
  }

  /** Main render. Split the page into render<Name>() methods and call them from here. */
  render(): TemplateResult {
    const msg = this.msg;
    const detailOpen: boolean = Boolean(this.cmdUpdateWorkTaskWorkTaskId);
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-4 p-4 md:p-6">
          ${this.renderToolbar(msg)}
          <div class="grid grid-cols-1 gap-4 ${detailOpen ? 'lg:grid-cols-3' : 'lg:grid-cols-1'}">
            <div class="${detailOpen ? 'lg:col-span-2' : ''} flex flex-col gap-4">
              ${this.renderTaskList(msg)}
              ${this.renderCreatePanel(msg)}
            </div>
            ${detailOpen ? html`<div class="lg:col-span-1">${this.renderDetailPanel(msg)}</div>` : nothing}
          </div>
        </div>
      </div>
    `;
  }

  renderToolbar(msg: PageMessageType): Rendered {
    return html`
      <div class="flex flex-wrap items-center justify-between gap-3 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-4 py-3 shadow-sm">
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.hint']}</p>
        <a
          href="#create-task-panel"
          class="inline-flex items-center justify-center rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] hover:bg-[var(--button-primary-bg-hover,#1d4ed8)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
        >
          ${msg['create.open']}
        </a>
      </div>
    `;
  }

  renderTaskList(msg: PageMessageType): Rendered {
    const created: CmdCreateWorkTaskOutput | null = this.cmdCreateWorkTaskOutput;
    const updated: CmdUpdateWorkTaskOutput | null = this.cmdUpdateWorkTaskOutput;
    const statused: CmdUpdateWorkTaskStatusOutput | null = this.cmdUpdateWorkTaskStatusOutput;
    const hasRecent: boolean = Boolean(created || updated || statused);
    const selectedId: string = this.cmdUpdateWorkTaskWorkTaskId;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="border-b border-[var(--border-subtle,#e2e8f0)] px-4 py-3">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.hint']}</p>
        </div>
        <div class="flex flex-col gap-2 p-4">
          ${hasRecent
            ? html`
                <ul class="flex flex-col gap-2">
                  ${created
                    ? html`
                        <li>
                          <button
                            type="button"
                            class="flex w-full flex-col gap-1 rounded-md border px-3 py-3 text-left transition ${selectedId && this.recentId(created) === selectedId
                              ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]'
                              : 'border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] hover:bg-[var(--surface-alt-bg,#f8fafc)]'}"
                            @click=${(event: Event) => {
                              event.preventDefault();
                              const id: string = this.recentId(created);
                              if (id) {
                                this.setCmdUpdateWorkTaskWorkTaskId(id);
                              }
                            }}
                          >
                            <div class="flex items-start justify-between gap-3">
                              <span class="font-medium text-[var(--text-strong,#0f172a)]">${this.recentTitle(created, msg['recent.create'])}</span>
                              <span class="rounded-full bg-[var(--status-success-bg,#dcfce7)] px-2 py-0.5 text-xs text-[var(--status-success-text,#166534)]">${msg['recent.create']}</span>
                            </div>
                            ${this.renderRecentMeta(created, msg)}
                          </button>
                        </li>
                      `
                    : nothing}
                  ${updated
                    ? html`
                        <li>
                          <button
                            type="button"
                            class="flex w-full flex-col gap-1 rounded-md border px-3 py-3 text-left transition ${selectedId && this.recentId(updated) === selectedId
                              ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]'
                              : 'border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] hover:bg-[var(--surface-alt-bg,#f8fafc)]'}"
                            @click=${(event: Event) => {
                              event.preventDefault();
                              const id: string = this.recentId(updated);
                              if (id) {
                                this.setCmdUpdateWorkTaskWorkTaskId(id);
                              }
                            }}
                          >
                            <div class="flex items-start justify-between gap-3">
                              <span class="font-medium text-[var(--text-strong,#0f172a)]">${this.recentTitle(updated, msg['recent.update'])}</span>
                              <span class="rounded-full bg-[var(--status-info-bg,#e0f2fe)] px-2 py-0.5 text-xs text-[var(--status-info-text,#075985)]">${msg['recent.update']}</span>
                            </div>
                            ${this.renderRecentMeta(updated, msg)}
                          </button>
                        </li>
                      `
                    : nothing}
                  ${statused
                    ? html`
                        <li>
                          <button
                            type="button"
                            class="flex w-full flex-col gap-1 rounded-md border px-3 py-3 text-left transition ${selectedId && this.recentId(statused) === selectedId
                              ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]'
                              : 'border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] hover:bg-[var(--surface-alt-bg,#f8fafc)]'}"
                            @click=${(event: Event) => {
                              event.preventDefault();
                              const id: string = this.recentId(statused);
                              if (id) {
                                this.setCmdUpdateWorkTaskWorkTaskId(id);
                              }
                            }}
                          >
                            <div class="flex items-start justify-between gap-3">
                              <span class="font-medium text-[var(--text-strong,#0f172a)]">${this.recentTitle(statused, msg['recent.status'])}</span>
                              <span class="rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-0.5 text-xs text-[var(--status-neutral-text,#334155)]">${msg['recent.status']}</span>
                            </div>
                            ${this.renderRecentMeta(statused, msg)}
                          </button>
                        </li>
                      `
                    : nothing}
                </ul>
              `
            : html`
                <div class="rounded-md border border-dashed border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-10 text-center">
                  <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</p>
                </div>
              `}
        </div>
      </section>
    `;
  }

  renderCreatePanel(msg: PageMessageType): Rendered {
    const loading: boolean = this.cmdCreateWorkTaskState === 'loading';
    const canSave: boolean =
      Boolean(this.cmdCreateWorkTaskTitle) &&
      Boolean(this.cmdCreateWorkTaskAssignedWorkerId) &&
      Boolean(this.cmdCreateWorkTaskDueDate) &&
      Boolean(this.cmdCreateWorkTaskProjectId) &&
      !loading;

    return html`
      <section
        id="create-task-panel"
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm"
      >
        <div class="border-b border-[var(--border-subtle,#e2e8f0)] px-4 py-3">
          <h2 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['create.title']}</h2>
        </div>
        <div class="flex flex-col gap-3 p-4">
          ${this.cmdCreateWorkTaskState === 'success'
            ? html`
                <div class="flex items-start justify-between gap-2 rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                  <span>${msg['create.success']}</span>
                </div>
              `
            : nothing}
          ${this.cmdCreateWorkTaskState === 'error'
            ? html`
                <div class="flex items-start justify-between gap-2 rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                  <span>${this.cmdCreateWorkTaskError || msg['create.error']}</span>
                  <button
                    type="button"
                    class="underline"
                    ?disabled=${loading}
                    @click=${(event: Event) => this.handleCmdCreateWorkTaskClick(event)}
                  >
                    ${msg['create.save']}
                  </button>
                </div>
              `
            : nothing}

          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['create.field.title']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
              type="text"
              .value=${this.cmdCreateWorkTaskTitle}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleCmdCreateWorkTaskTitleChange(event)}
            />
          </label>

          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['create.field.description']}</span>
            <textarea
              class="min-h-[5rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
              .value=${this.cmdCreateWorkTaskDescription}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleCmdCreateWorkTaskDescriptionChange(event)}
            ></textarea>
          </label>

          <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">${msg['create.field.assignee']}</span>
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                type="text"
                .value=${this.cmdCreateWorkTaskAssignedWorkerId}
                ?disabled=${loading}
                @input=${(event: Event) => this.handleCmdCreateWorkTaskAssignedWorkerIdChange(event)}
              />
            </label>
            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">${msg['create.field.dueDate']}</span>
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                type="date"
                .value=${this.cmdCreateWorkTaskDueDate}
                ?disabled=${loading}
                @input=${(event: Event) => this.handleCmdCreateWorkTaskDueDateChange(event)}
              />
            </label>
          </div>

          <div class="flex justify-end pt-1">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] hover:bg-[var(--button-primary-bg-hover,#1d4ed8)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)] disabled:cursor-not-allowed disabled:opacity-60"
              ?disabled=${!canSave}
              @click=${(event: Event) => this.handleCmdCreateWorkTaskClick(event)}
            >
              ${loading ? msg['create.saving'] : msg['create.save']}
            </button>
          </div>
        </div>
      </section>
    `;
  }

  renderDetailPanel(msg: PageMessageType): Rendered {
    if (!this.cmdUpdateWorkTaskWorkTaskId) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['detail.empty']}</p>
        </section>
      `;
    }

    const loading: boolean = this.cmdUpdateWorkTaskState === 'loading';
    const statusLoading: boolean = this.cmdUpdateWorkTaskStatusState === 'loading';
    const canSave: boolean = !loading;

    return html`
      <aside class="flex flex-col gap-4">
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
          <div class="border-b border-[var(--border-subtle,#e2e8f0)] px-4 py-3">
            <h2 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['detail.title']}</h2>
          </div>
          <div class="flex flex-col gap-3 p-4">
            ${this.cmdUpdateWorkTaskState === 'success'
              ? html`
                  <div class="rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                    ${msg['detail.success']}
                  </div>
                `
              : nothing}
            ${this.cmdUpdateWorkTaskState === 'error'
              ? html`
                  <div class="flex items-start justify-between gap-2 rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                    <span>${this.cmdUpdateWorkTaskError || msg['detail.error']}</span>
                    <button
                      type="button"
                      class="underline"
                      ?disabled=${loading}
                      @click=${(event: Event) => this.handleCmdUpdateWorkTaskClick(event)}
                    >
                      ${msg['detail.save']}
                    </button>
                  </div>
                `
              : nothing}

            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">${msg['detail.field.title']}</span>
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                type="text"
                .value=${this.cmdUpdateWorkTaskTitle}
                ?disabled=${loading}
                @input=${(event: Event) => this.handleCmdUpdateWorkTaskTitleChange(event)}
              />
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">${msg['detail.field.description']}</span>
              <textarea
                class="min-h-[5rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                .value=${this.cmdUpdateWorkTaskDescription}
                ?disabled=${loading}
                @input=${(event: Event) => this.handleCmdUpdateWorkTaskDescriptionChange(event)}
              ></textarea>
            </label>

            <div class="grid grid-cols-1 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${msg['detail.field.assignee']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                  type="text"
                  .value=${this.cmdUpdateWorkTaskAssignedWorkerId}
                  ?disabled=${loading}
                  @input=${(event: Event) => this.handleCmdUpdateWorkTaskAssignedWorkerIdChange(event)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${msg['detail.field.dueDate']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                  type="date"
                  .value=${this.cmdUpdateWorkTaskDueDate}
                  ?disabled=${loading}
                  @input=${(event: Event) => this.handleCmdUpdateWorkTaskDueDateChange(event)}
                />
              </label>
            </div>

            <div class="flex justify-end pt-1">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] hover:bg-[var(--button-primary-bg-hover,#1d4ed8)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)] disabled:cursor-not-allowed disabled:opacity-60"
                ?disabled=${!canSave}
                @click=${(event: Event) => this.handleCmdUpdateWorkTaskClick(event)}
              >
                ${loading ? msg['detail.saving'] : msg['detail.save']}
              </button>
            </div>
          </div>
        </section>

        ${this.renderStatusActions(msg, statusLoading)}
      </aside>
    `;
  }

  renderStatusActions(msg: PageMessageType, statusLoading: boolean): Rendered {
    const workTaskId: string = this.cmdUpdateWorkTaskWorkTaskId;
    if (!workTaskId) {
      return nothing;
    }

    const current: string = (this.cmdUpdateWorkTaskStatusValue || this.cmdUpdateWorkTaskStatusStatus || 'assigned').toLowerCase();
    const showStart: boolean = current === 'assigned' || current === '';
    const showComplete: boolean = current === 'inprogress' || current === 'in_progress' || current === 'assigned';
    const showCancel: boolean = current !== 'completed' && current !== 'cancelled';

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="border-b border-[var(--border-subtle,#e2e8f0)] px-4 py-3">
          <h2 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['status.heading']}</h2>
        </div>
        <div class="flex flex-col gap-3 p-4">
          ${this.cmdUpdateWorkTaskStatusState === 'success'
            ? html`
                <div class="rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                  ${msg['status.success']}
                </div>
              `
            : nothing}
          ${this.cmdUpdateWorkTaskStatusState === 'error'
            ? html`
                <div class="rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                  ${this.cmdUpdateWorkTaskStatusError || msg['status.error']}
                </div>
              `
            : nothing}

          <div class="flex flex-wrap gap-2">
            ${showStart
              ? html`
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md bg-[var(--button-secondary-bg,#f8fafc)] px-3 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] ring-1 ring-inset ring-[var(--button-secondary-border,#e2e8f0)] hover:bg-[var(--button-secondary-bg-hover,#f1f5f9)] disabled:cursor-not-allowed disabled:opacity-60"
                    ?disabled=${statusLoading}
                    @click=${(event: Event) => {
                      event.preventDefault();
                      this.setCmdUpdateWorkTaskStatusWorkTaskId(workTaskId);
                      this.setCmdUpdateWorkTaskStatusStatus('inProgress');
                      this.handleCmdUpdateWorkTaskStatusClick();
                    }}
                  >
                    ${statusLoading ? msg['status.saving'] : msg['status.start']}
                  </button>
                `
              : nothing}
            ${showComplete
              ? html`
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] hover:bg-[var(--button-primary-bg-hover,#1d4ed8)] disabled:cursor-not-allowed disabled:opacity-60"
                    ?disabled=${statusLoading}
                    @click=${(event: Event) => {
                      event.preventDefault();
                      this.setCmdUpdateWorkTaskStatusWorkTaskId(workTaskId);
                      this.setCmdUpdateWorkTaskStatusStatus('completed');
                      this.handleCmdUpdateWorkTaskStatusClick();
                    }}
                  >
                    ${statusLoading ? msg['status.saving'] : msg['status.complete']}
                  </button>
                `
              : nothing}
          </div>

          ${showCancel
            ? html`
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">${msg['status.cancelReason']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                    type="text"
                    .value=${this.cmdUpdateWorkTaskStatusCancellationReason}
                    ?disabled=${statusLoading}
                    @input=${(event: Event) => this.handleCmdUpdateWorkTaskStatusCancellationReasonChange(event)}
                  />
                </label>
                <div class="flex justify-start">
                  <button
                    type="button"
                    class="inline-flex items-center justify-center rounded-md bg-[var(--button-danger-bg,#dc2626)] px-3 py-2 text-sm font-medium text-[var(--button-danger-text,#ffffff)] hover:bg-[var(--button-danger-bg-hover,#b91c1c)] disabled:cursor-not-allowed disabled:opacity-60"
                    ?disabled=${statusLoading}
                    @click=${(event: Event) => {
                      event.preventDefault();
                      const label: string = this.cmdUpdateWorkTaskTitle || workTaskId;
                      const ok: boolean = window.confirm(`${msg['status.cancel']}: ${label}`);
                      if (!ok) {
                        return;
                      }
                      this.setCmdUpdateWorkTaskStatusWorkTaskId(workTaskId);
                      this.setCmdUpdateWorkTaskStatusStatus('cancelled');
                      this.handleCmdUpdateWorkTaskStatusClick();
                    }}
                  >
                    ${statusLoading ? msg['status.saving'] : msg['status.cancel']}
                  </button>
                </div>
              `
            : nothing}
        </div>
      </section>
    `;
  }

  private recentId(value: unknown): string {
    if (!value || typeof value !== 'object') {
      return '';
    }
    const record = value as Record<string, unknown>;
    const candidates: unknown[] = [
      record['workTaskId'],
      record['id'],
      record['taskId'],
    ];
    for (const candidate of candidates) {
      if (typeof candidate === 'string' && candidate) {
        return candidate;
      }
    }
    return '';
  }

  private recentTitle(value: unknown, fallback: string): string {
    if (!value || typeof value !== 'object') {
      return fallback;
    }
    const record = value as Record<string, unknown>;
    if (typeof record['title'] === 'string' && record['title']) {
      return record['title'];
    }
    const id: string = this.recentId(value);
    return id || fallback;
  }

  private renderRecentMeta(value: unknown, msg: PageMessageType): Rendered {
    if (!value || typeof value !== 'object') {
      return nothing;
    }
    const record = value as Record<string, unknown>;
    const dueRaw: unknown = record['dueDate'];
    const dueDate: string = typeof dueRaw === 'string' ? dueRaw : '';
    const assigneeRaw: unknown = record['assignedWorkerId'] ?? record['assigneeName'];
    const assignee: string = typeof assigneeRaw === 'string' && assigneeRaw ? assigneeRaw : msg['label.unassigned'];
    const statusRaw: unknown = record['status'];
    const status: string = typeof statusRaw === 'string' ? statusRaw : '';
    const overdue: boolean = this.isOverdue(dueDate);

    return html`
      <div class="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[var(--text-muted,#64748b)]">
        ${dueDate
          ? html`
              <span>
                ${msg['label.due']}:
                <span class="${overdue ? 'font-semibold text-[var(--status-error-text,#991b1b)]' : 'text-[var(--text-default,#0f172a)]'}">
                  ${dueDate}
                </span>
              </span>
            `
          : nothing}
        <span>${msg['label.assignee']}: ${assignee}</span>
        ${status ? html`<span class="rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-0.5 text-[var(--status-neutral-text,#334155)]">${this.statusLabel(status, msg)}</span>` : nothing}
      </div>
    `;
  }

  private statusLabel(status: string, msg: PageMessageType): string {
    const normalized: string = status.toLowerCase();
    if (normalized === 'assigned') {
      return msg['chip.assigned'];
    }
    if (normalized === 'inprogress' || normalized === 'in_progress') {
      return msg['chip.inProgress'];
    }
    if (normalized === 'completed') {
      return msg['chip.completed'];
    }
    if (normalized === 'cancelled' || normalized === 'canceled') {
      return msg['chip.cancelled'];
    }
    return status;
  }

  private isOverdue(dueDate: string): boolean {
    if (!dueDate) {
      return false;
    }
    const due: number = Date.parse(dueDate);
    if (Number.isNaN(due)) {
      return false;
    }
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0);
    return due < today.getTime();
  }
}
