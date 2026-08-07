/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/taskBoardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmTaskBoardWorkspaceBase,
  messages as sharedMessages,
} from '/_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.js';

/// **collab_i18n_start**
const s_en = {
  createTask: sharedMessages['en']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask'],
  createTitle: sharedMessages['en']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label'],
  createDescription: sharedMessages['en']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label'],
  createAssignee: sharedMessages['en']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label'],
  createDueDate: sharedMessages['en']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label'],
  createSuccess: sharedMessages['en']['action.cmdCreateWorkTask.success'],
  createError: sharedMessages['en']['action.cmdCreateWorkTask.error'],
  saveTask: sharedMessages['en']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
  editTitle: sharedMessages['en']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label'],
  editDescription: sharedMessages['en']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label'],
  editAssignee: sharedMessages['en']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label'],
  editDueDate: sharedMessages['en']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label'],
  editCancellationReason: sharedMessages['en']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label'],
  updateSuccess: sharedMessages['en']['action.cmdUpdateWorkTask.success'],
  updateError: sharedMessages['en']['action.cmdUpdateWorkTask.error'],
  statusSuccess: sharedMessages['en']['action.cmdUpdateWorkTaskStatus.success'],
  statusError: sharedMessages['en']['action.cmdUpdateWorkTaskStatus.error'],
  statusCancellationReason: sharedMessages['en']['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label'],
  statusActorId: sharedMessages['en']['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label'],
  today: 'Today',
  canvasHint: 'Plan drawn in time — select a task to inspect and adjust dates',
  detailHeading: 'Selected task',
  noSelection: 'No task selected',
  saving: 'Saving…',
  creating: 'Creating…',
  advancing: 'Updating…',
  startTask: 'Start',
  completeTask: 'Complete',
  cancelTask: 'Cancel task',
  dismiss: 'Dismiss',
  projectContext: 'Project',
  dueLabel: 'Due',
  assigneeLabel: 'Assignee',
  barsReadOnly: 'Bars are read-only — reschedule by editing dates in the detail panel',
};
type Msg = typeof s_en;
const s_pt_br: Msg = {
  createTask: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask'],
  createTitle: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label'],
  createDescription: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label'],
  createAssignee: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label'],
  createDueDate: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label'],
  createSuccess: sharedMessages['pt-br']['action.cmdCreateWorkTask.success'],
  createError: sharedMessages['pt-br']['action.cmdCreateWorkTask.error'],
  saveTask: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
  editTitle: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label'],
  editDescription: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label'],
  editAssignee: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label'],
  editDueDate: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label'],
  editCancellationReason: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label'],
  updateSuccess: sharedMessages['pt-br']['action.cmdUpdateWorkTask.success'],
  updateError: sharedMessages['pt-br']['action.cmdUpdateWorkTask.error'],
  statusSuccess: sharedMessages['pt-br']['action.cmdUpdateWorkTaskStatus.success'],
  statusError: sharedMessages['pt-br']['action.cmdUpdateWorkTaskStatus.error'],
  statusCancellationReason: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label'],
  statusActorId: sharedMessages['pt-br']['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label'],
  today: 'Hoje',
  canvasHint: 'Plano no tempo — selecione uma tarefa para inspecionar e ajustar datas',
  detailHeading: 'Tarefa selecionada',
  noSelection: 'Nenhuma tarefa selecionada',
  saving: 'Salvando…',
  creating: 'Criando…',
  advancing: 'Atualizando…',
  startTask: 'Iniciar',
  completeTask: 'Concluir',
  cancelTask: 'Cancelar tarefa',
  dismiss: 'Dispensar',
  projectContext: 'Projeto',
  dueLabel: 'Prazo',
  assigneeLabel: 'Responsável',
  barsReadOnly: 'Barras somente leitura — reagende editando as datas no painel de detalhe',
};
const s_es: Msg = {
  createTask: sharedMessages['es']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask'],
  createTitle: sharedMessages['es']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label'],
  createDescription: sharedMessages['es']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label'],
  createAssignee: sharedMessages['es']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label'],
  createDueDate: sharedMessages['es']['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label'],
  createSuccess: sharedMessages['es']['action.cmdCreateWorkTask.success'],
  createError: sharedMessages['es']['action.cmdCreateWorkTask.error'],
  saveTask: sharedMessages['es']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask'],
  editTitle: sharedMessages['es']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label'],
  editDescription: sharedMessages['es']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label'],
  editAssignee: sharedMessages['es']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label'],
  editDueDate: sharedMessages['es']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label'],
  editCancellationReason: sharedMessages['es']['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label'],
  updateSuccess: sharedMessages['es']['action.cmdUpdateWorkTask.success'],
  updateError: sharedMessages['es']['action.cmdUpdateWorkTask.error'],
  statusSuccess: sharedMessages['es']['action.cmdUpdateWorkTaskStatus.success'],
  statusError: sharedMessages['es']['action.cmdUpdateWorkTaskStatus.error'],
  statusCancellationReason: sharedMessages['es']['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label'],
  statusActorId: sharedMessages['es']['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label'],
  today: 'Hoy',
  canvasHint: 'Plan en el tiempo — seleccione una tarea para inspeccionar y ajustar fechas',
  detailHeading: 'Tarea seleccionada',
  noSelection: 'Ninguna tarea seleccionada',
  saving: 'Guardando…',
  creating: 'Creando…',
  advancing: 'Actualizando…',
  startTask: 'Iniciar',
  completeTask: 'Completar',
  cancelTask: 'Cancelar tarea',
  dismiss: 'Descartar',
  projectContext: 'Proyecto',
  dueLabel: 'Vencimiento',
  assigneeLabel: 'Asignado',
  barsReadOnly: 'Barras de solo lectura — reprogramar editando fechas en el panel de detalle',
};
const collab_i18n_msg: { [key: string]: Msg } = { 'en': s_en, 'pt-br': s_pt_br, 'es': s_es };
/// **collab_i18n_end**

@customElement('build-flow-fsm--web--desktop--page31--task-board-workspace-102045')
export class BuildFlowFsmDesktopPage31TaskBoardWorkspacePage extends BuildFlowFsmTaskBoardWorkspaceBase {
  get msg(): Msg {
    const raw: string = (typeof document !== 'undefined' && document.documentElement.lang) || 'en';
    const lang: string = raw.toLowerCase();
    return collab_i18n_msg[lang] ?? collab_i18n_msg[lang.split('-')[0] ?? ''] ?? s_en;
  }

  render(): unknown {
    const msg = this.msg;
    return html`
      <div class="min-h-full w-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6 flex flex-col gap-4">
        ${this.renderCreateToolbar(msg)}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 items-start">
          <div class="lg:col-span-2 flex flex-col gap-2">
            ${this.renderCanvas(msg)}
          </div>
          <div class="lg:col-span-1">
            ${this.renderDetailPanel(msg)}
          </div>
        </div>
      </div>
    `;
  }

  renderCreateToolbar(msg: Msg): unknown {
    const creating: boolean = this.cmdCreateWorkTaskState === 'loading';
    const canCreate: boolean =
      Boolean(this.cmdCreateWorkTaskProjectId) &&
      Boolean(this.cmdCreateWorkTaskTitle) &&
      Boolean(this.cmdCreateWorkTaskAssignedWorkerId) &&
      Boolean(this.cmdCreateWorkTaskDueDate) &&
      !creating;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 flex flex-col gap-3 shadow-sm">
        ${this.cmdCreateWorkTaskProjectId
          ? html`
              <div class="inline-flex items-center gap-2 self-start rounded-md px-2 py-1 text-sm bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
                <span class="text-[var(--text-muted,#64748b)]">${msg['projectContext']}</span>
                <span class="font-medium text-[var(--text-strong,#0f172a)]">${this.cmdCreateWorkTaskProjectId}</span>
              </div>
            `
          : nothing}

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['createTitle']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.cmdCreateWorkTaskTitle}
              ?disabled=${creating}
              @input=${(e: Event) => this.handleCmdCreateWorkTaskTitleChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['createAssignee']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.cmdCreateWorkTaskAssignedWorkerId}
              ?disabled=${creating}
              @input=${(e: Event) => this.handleCmdCreateWorkTaskAssignedWorkerIdChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['createDueDate']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="date"
              .value=${this.cmdCreateWorkTaskDueDate}
              ?disabled=${creating}
              @input=${(e: Event) => this.handleCmdCreateWorkTaskDueDateChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm md:col-span-2 xl:col-span-1">
            <span class="text-[var(--text-muted,#64748b)]">${msg['createDescription']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.cmdCreateWorkTaskDescription}
              ?disabled=${creating}
              @input=${(e: Event) => this.handleCmdCreateWorkTaskDescriptionChange(e)}
            />
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${!canCreate}
            @click=${(e: Event) => this.handleCmdCreateWorkTaskClick(e)}
          >
            ${creating ? msg['creating'] : msg['createTask']}
          </button>
          ${this.renderCreateFeedback(msg)}
        </div>
      </section>
    `;
  }

  renderCreateFeedback(msg: Msg): unknown {
    if (this.cmdCreateWorkTaskState === 'success') {
      return html`
        <div class="flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]" role="status">
          <span>${msg['createSuccess']}</span>
        </div>
      `;
    }
    if (this.cmdCreateWorkTaskState === 'error') {
      const errText: string = this.cmdCreateWorkTaskError || msg['createError'];
      return html`
        <div class="flex items-center gap-2 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]" role="alert">
          <span>${errText}</span>
          <button
            type="button"
            class="underline text-[var(--status-error-text,#991b1b)]"
            @click=${(e: Event) => this.handleCmdCreateWorkTaskClick(e)}
          >
            ${msg['createTask']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderCanvas(msg: Msg): unknown {
    const todayLabel: string = msg['today'];
    const selectedId: string = this.cmdUpdateWorkTaskWorkTaskId || this.cmdUpdateWorkTaskStatusWorkTaskId || '';

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] overflow-hidden shadow-sm">
        <div class="relative min-h-[280px] p-4">
          <p class="text-sm text-[var(--text-muted,#64748b)] mb-4">${msg['canvasHint']}</p>
          <p class="text-xs text-[var(--text-muted,#64748b)] mb-6">${msg['barsReadOnly']}</p>

          <div class="relative h-40 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)]">
            <div
              class="absolute top-0 bottom-0 w-px bg-[var(--border-default,#94a3b8)]"
              style="left: 50%;"
              aria-hidden="true"
            ></div>
            <div
              class="absolute top-2 text-xs font-medium text-[var(--text-muted,#64748b)] bg-[var(--surface-alt-bg,#f8fafc)] px-1"
              style="left: 50%; transform: translateX(-50%);"
            >
              ${todayLabel}
            </div>

            ${selectedId
              ? html`
                  <div class="absolute left-4 right-4 top-14 flex items-center gap-3">
                    <div class="w-36 shrink-0 truncate text-sm font-medium text-[var(--text-strong,#0f172a)]" title=${selectedId}>
                      ${selectedId}
                    </div>
                    <div class="relative flex-1 h-8">
                      <div
                        class="absolute h-8 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-info-bg,#e0f2fe)]"
                        style="left: 20%; width: 40%;"
                      >
                        <div
                          class="absolute top-0 bottom-0 right-0 w-1/3 rounded-r-md bg-[var(--status-warning-bg,#fef3c7)]"
                          title=${msg['dueLabel']}
                        ></div>
                      </div>
                    </div>
                  </div>
                `
              : html`
                  <div class="absolute inset-0 flex items-center justify-center text-sm text-[var(--text-muted,#64748b)]">
                    ${msg['noSelection']}
                  </div>
                `}
          </div>
        </div>
      </section>
    `;
  }

  renderDetailPanel(msg: Msg): unknown {
    const workTaskId: string = this.cmdUpdateWorkTaskWorkTaskId || '';
    const saving: boolean = this.cmdUpdateWorkTaskState === 'loading';
    const advancing: boolean = this.cmdUpdateWorkTaskStatusState === 'loading';
    const busy: boolean = saving || advancing;

    if (!workTaskId) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['noSelection']}</p>
        </section>
      `;
    }

    const canSave: boolean =
      !busy &&
      (Boolean(this.cmdUpdateWorkTaskTitle) ||
        Boolean(this.cmdUpdateWorkTaskDescription) ||
        Boolean(this.cmdUpdateWorkTaskAssignedWorkerId) ||
        Boolean(this.cmdUpdateWorkTaskDueDate) ||
        Boolean(this.cmdUpdateWorkTaskCancellationReason));

    return html`
      <section class="rounded-lg border border-[var(--selected-border,#93c5fd)] bg-[var(--surface-bg,#ffffff)] p-4 flex flex-col gap-4 shadow-sm">
        <div class="flex flex-col gap-1">
          <h2 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['detailHeading']}</h2>
          <p class="text-xs text-[var(--text-muted,#64748b)] truncate" title=${workTaskId}>${workTaskId}</p>
        </div>

        <div class="flex flex-col gap-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['editTitle']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.cmdUpdateWorkTaskTitle}
              ?disabled=${busy}
              @input=${(e: Event) => this.handleCmdUpdateWorkTaskTitleChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['editDescription']}</span>
            <textarea
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] min-h-[72px]"
              .value=${this.cmdUpdateWorkTaskDescription}
              ?disabled=${busy}
              @input=${(e: Event) => this.handleCmdUpdateWorkTaskDescriptionChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['editAssignee']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.cmdUpdateWorkTaskAssignedWorkerId}
              ?disabled=${busy}
              @input=${(e: Event) => this.handleCmdUpdateWorkTaskAssignedWorkerIdChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['editDueDate']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="date"
              .value=${this.cmdUpdateWorkTaskDueDate}
              ?disabled=${busy}
              @input=${(e: Event) => this.handleCmdUpdateWorkTaskDueDateChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['editCancellationReason']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.cmdUpdateWorkTaskCancellationReason}
              ?disabled=${busy}
              @input=${(e: Event) => this.handleCmdUpdateWorkTaskCancellationReasonChange(e)}
            />
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${!canSave}
            @click=${(e: Event) => this.handleCmdUpdateWorkTaskClick(e)}
          >
            ${saving ? msg['saving'] : msg['saveTask']}
          </button>
        </div>
        ${this.renderUpdateFeedback(msg)}

        <div class="border-t border-[var(--border-subtle,#e2e8f0)] pt-3 flex flex-col gap-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['statusActorId']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.cmdUpdateWorkTaskStatusActorId}
              ?disabled=${busy}
              @input=${(e: Event) => this.handleCmdUpdateWorkTaskStatusActorIdChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['statusCancellationReason']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.cmdUpdateWorkTaskStatusCancellationReason}
              ?disabled=${busy}
              @input=${(e: Event) => this.handleCmdUpdateWorkTaskStatusCancellationReasonChange(e)}
            />
          </label>

          <div class="flex flex-wrap gap-2">
            <button
              type="button"
              class="rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
              ?disabled=${busy || !this.cmdUpdateWorkTaskStatusActorId}
              @click=${(e: Event) => this.onStatusTransition(e, 'inProgress')}
            >
              ${advancing && this.cmdUpdateWorkTaskStatusStatus === 'inProgress' ? msg['advancing'] : msg['startTask']}
            </button>
            <button
              type="button"
              class="rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
              ?disabled=${busy || !this.cmdUpdateWorkTaskStatusActorId}
              @click=${(e: Event) => this.onStatusTransition(e, 'completed')}
            >
              ${advancing && this.cmdUpdateWorkTaskStatusStatus === 'completed' ? msg['advancing'] : msg['completeTask']}
            </button>
            <button
              type="button"
              class="rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
              ?disabled=${busy || !this.cmdUpdateWorkTaskStatusActorId}
              @click=${(e: Event) => this.onCancelTransition(e, workTaskId)}
            >
              ${advancing && this.cmdUpdateWorkTaskStatusStatus === 'cancelled' ? msg['advancing'] : msg['cancelTask']}
            </button>
          </div>
          ${this.renderStatusFeedback(msg)}
        </div>
      </section>
    `;
  }

  renderUpdateFeedback(msg: Msg): unknown {
    if (this.cmdUpdateWorkTaskState === 'success') {
      return html`
        <div class="rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]" role="status">
          ${msg['updateSuccess']}
        </div>
      `;
    }
    if (this.cmdUpdateWorkTaskState === 'error') {
      const errText: string = this.cmdUpdateWorkTaskError || msg['updateError'];
      return html`
        <div class="flex flex-wrap items-center gap-2 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]" role="alert">
          <span>${errText}</span>
          <button
            type="button"
            class="underline"
            @click=${(e: Event) => this.handleCmdUpdateWorkTaskClick(e)}
          >
            ${msg['saveTask']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderStatusFeedback(msg: Msg): unknown {
    if (this.cmdUpdateWorkTaskStatusState === 'success') {
      return html`
        <div class="rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]" role="status">
          ${msg['statusSuccess']}
        </div>
      `;
    }
    if (this.cmdUpdateWorkTaskStatusState === 'error') {
      const errText: string = this.cmdUpdateWorkTaskStatusError || msg['statusError'];
      return html`
        <div class="flex flex-wrap items-center gap-2 rounded-md px-3 py-2 text-sm text-[var(--text-default,#0f172a)]" role="alert">
          <span>${errText}</span>
          <button
            type="button"
            class="underline text-[var(--text-default,#0f172a)]"
            @click=${(e: Event) => this.handleCmdUpdateWorkTaskStatusClick(e)}
          >
            ${msg['completeTask']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  private onStatusTransition(event: Event, nextStatus: string): void {
    if (event) {
      event.preventDefault();
    }
    const workTaskId: string = this.cmdUpdateWorkTaskWorkTaskId || this.cmdUpdateWorkTaskStatusWorkTaskId;
    if (!workTaskId) {
      return;
    }
    this.setCmdUpdateWorkTaskStatusWorkTaskId(workTaskId);
    this.setCmdUpdateWorkTaskStatusStatus(nextStatus);
    if (nextStatus === 'completed') {
      this.setCmdUpdateWorkTaskStatusCompletedAt(new Date().toISOString());
    }
    this.handleCmdUpdateWorkTaskStatusClick(event);
  }

  private onCancelTransition(event: Event, workTaskId: string): void {
    if (event) {
      event.preventDefault();
    }
    const label: string = workTaskId || '';
    const confirmed: boolean =
      typeof window !== 'undefined' ? window.confirm(`${this.msg['cancelTask']}: ${label}`) : false;
    if (!confirmed) {
      return;
    }
    this.onStatusTransition(event, 'cancelled');
  }
}
