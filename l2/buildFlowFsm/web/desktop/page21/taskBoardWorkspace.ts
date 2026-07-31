/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/taskBoardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmTaskBoardWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page21--task-board-workspace-102045')
export class BuildFlowFsmDesktopPage21TaskBoardWorkspacePage extends BuildFlowFsmTaskBoardWorkspaceBase {
  render() {
    const boardLanes: ReadonlyArray<{ id: string; label: string }> = [
      { id: 'assigned', label: 'assigned' },
      { id: 'inProgress', label: 'inProgress' },
      { id: 'completed', label: 'completed' },
      { id: 'cancelled', label: 'cancelled' },
    ];

    const lifecycleNext: Record<string, ReadonlyArray<string>> = {
      assigned: ['inProgress', 'cancelled'],
      inProgress: ['completed', 'cancelled'],
      completed: [],
      cancelled: [],
    };

    const selectedTaskId =
      this.cmdUpdateWorkTaskWorkTaskId || this.cmdUpdateWorkTaskStatusWorkTaskId || '';
    const currentStatus = (this.cmdUpdateWorkTaskStatusStatus || this.cmdUpdateWorkTaskStatusValue || 'assigned').trim();
    const allowedNext = lifecycleNext[currentStatus] ?? ['inProgress', 'completed', 'cancelled'];
    const showCancelReason =
      this.cmdUpdateWorkTaskStatusStatus === 'cancelled' ||
      this.cmdUpdateWorkTaskCancellationReason.length > 0;

    const createLoading = this.cmdCreateWorkTaskState === 'loading';
    const updateLoading = this.cmdUpdateWorkTaskState === 'loading';
    const statusLoading = this.cmdUpdateWorkTaskStatusState === 'loading';

    const transitionLabel = (status: string): string => {
      if (status === 'inProgress') return 'Start Task';
      if (status === 'completed') return 'Complete Task';
      if (status === 'cancelled') return 'Cancel Task';
      if (status === 'assigned') return 'Assign Task';
      return status;
    };

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['organism.taskBoardWorkspace.card-board10.title']}
          </h1>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['intent.taskBoardWorkspace.card-board10.content.title']}
          </p>
        </header>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <!-- Card board (master) -->
          <section class="xl:col-span-2 space-y-3" aria-label=${this.msg['section.taskBoardWorkspace.sec-board.title']}>
            <div class="flex items-center justify-between">
              <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['section.taskBoardWorkspace.sec-board.title']}
              </h2>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              ${boardLanes.map(
                (lane) => html`
                  <div
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] min-h-[12rem] flex flex-col"
                  >
                    <div
                      class="px-3 py-2 border-b border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] rounded-t-lg"
                    >
                      <span class="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                        ${lane.label}
                      </span>
                    </div>
                    <div class="p-3 flex-1 flex items-center justify-center">
                      <p class="text-xs text-center text-[var(--text-muted,#64748b)]">
                        <!-- TODO: board rows require a shared queryResult state (not on base) -->
                        No tasks
                      </p>
                    </div>
                  </div>
                `,
              )}
            </div>

            ${selectedTaskId
              ? html`
                  <div
                    class="rounded-lg border border-[var(--selected-border,#94a3b8)] bg-[var(--selected-bg,#e2e8f0)] text-[var(--selected-text,#0f172a)] px-4 py-3 text-sm"
                  >
                    Selected task: <span class="font-medium">${selectedTaskId}</span>
                    · status: <span class="font-medium">${currentStatus || '—'}</span>
                  </div>
                `
              : nothing}
          </section>

          <!-- Detail + transitions (detail panel) -->
          <section class="space-y-4" aria-label=${this.msg['section.taskBoardWorkspace.sec-task-detail.title']}>
            <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['section.taskBoardWorkspace.sec-task-detail.title']}
            </h2>

            <!-- Summary-first snapshot from bound edit inputs -->
            <div
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-2"
            >
              <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['organism.taskBoardWorkspace.cmdUpdateWorkTask.title']}
              </h3>
              ${selectedTaskId
                ? html`
                    <dl class="grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${this.cmdUpdateWorkTaskTitle || '—'}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label']}
                        </dt>
                        <dd class="text-[var(--text-default,#0f172a)]">
                          ${this.cmdUpdateWorkTaskDescription || '—'}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${this.cmdUpdateWorkTaskAssignedWorkerId || '—'}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label']}
                        </dt>
                        <dd class="font-medium text-[var(--text-default,#0f172a)]">
                          ${this.cmdUpdateWorkTaskDueDate || '—'}
                        </dd>
                      </div>
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label']}
                        </dt>
                        <dd>
                          <span
                            class="inline-flex px-2 py-0.5 rounded text-xs font-medium bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#0c4a6e)]"
                          >
                            ${currentStatus || this.cmdUpdateWorkTaskStatusValue || '—'}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  `
                : html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      <!-- TODO: select a task from the board (query list not on base) -->
                      Select a task to view details
                    </p>
                  `}
            </div>

            <!-- Contextual lifecycle transition actions -->
            <div
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3"
            >
              <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title']}
              </h3>
              <p class="text-xs text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.title']}
              </p>

              <div class="flex flex-wrap gap-2">
                ${allowedNext.map(
                  (nextStatus) => html`
                    <button
                      type="button"
                      class="min-h-[2.75rem] px-4 py-2 rounded-lg text-sm font-medium
                        ${nextStatus === 'cancelled'
                          ? 'bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)]'
                          : 'bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]'}
                        disabled:opacity-60"
                      ?disabled=${statusLoading || !selectedTaskId}
                      @click=${() => {
                        if (selectedTaskId) {
                          this.setCmdUpdateWorkTaskStatusWorkTaskId(selectedTaskId);
                        }
                        this.setCmdUpdateWorkTaskStatusStatus(nextStatus);
                        if (nextStatus === 'completed') {
                          this.setCmdUpdateWorkTaskStatusCompletedAt(new Date().toISOString());
                        }
                        this.handleCmdUpdateWorkTaskStatusClick();
                      }}
                    >
                      ${statusLoading ? '…' : transitionLabel(nextStatus)}
                    </button>
                  `,
                )}
                ${allowedNext.length === 0
                  ? html`
                      <span
                        class="text-xs px-2 py-1 rounded bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]"
                      >
                        ${currentStatus || 'terminal'}
                      </span>
                    `
                  : nothing}
              </div>

              ${showCancelReason || allowedNext.includes('cancelled')
                ? html`
                    <label class="block space-y-1">
                      <span class="text-xs font-medium text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label']}
                      </span>
                      <input
                        type="text"
                        class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                        .value=${this.cmdUpdateWorkTaskStatusCancellationReason}
                        ?disabled=${statusLoading}
                        @input=${(e: Event) => this.handleCmdUpdateWorkTaskStatusCancellationReasonChange(e)}
                      />
                    </label>
                  `
                : nothing}

              ${this.cmdUpdateWorkTaskStatusState === 'success'
                ? html`
                    <div
                      class="rounded-lg px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#14532d)]"
                      role="status"
                    >
                      <!-- TODO: action.cmdUpdateWorkTaskStatus.success not in MessageType -->
                      Status updated
                    </div>
                  `
                : nothing}
              ${this.cmdUpdateWorkTaskStatusState === 'error'
                ? html`
                    <div
                      class="rounded-lg px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#7f1d1d)]"
                      role="alert"
                    >
                      ${this.cmdUpdateWorkTaskStatusError ||
                      '<!-- TODO: action.cmdUpdateWorkTaskStatus.error not in MessageType --> Status update failed'}
                    </div>
                  `
                : nothing}
            </div>

            <!-- Inline edit form for selected task -->
            <div
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3"
            >
              <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.title']}
              </h3>

              <label class="block space-y-1">
                <span class="text-xs font-medium text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label']}
                </span>
                <input
                  type="text"
                  class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm min-h-[2.75rem] text-[var(--text-default,#0f172a)]"
                  .value=${this.cmdUpdateWorkTaskTitle}
                  ?disabled=${updateLoading || !selectedTaskId}
                  @input=${(e: Event) => this.handleCmdUpdateWorkTaskTitleChange(e)}
                />
              </label>

              <label class="block space-y-1">
                <span class="text-xs font-medium text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label']}
                </span>
                <textarea
                  class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] min-h-[5rem]"
                  .value=${this.cmdUpdateWorkTaskDescription}
                  ?disabled=${updateLoading || !selectedTaskId}
                  @input=${(e: Event) => this.handleCmdUpdateWorkTaskDescriptionChange(e)}
                ></textarea>
              </label>

              <label class="block space-y-1">
                <span class="text-xs font-medium text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label']}
                </span>
                <input
                  type="text"
                  class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm min-h-[2.75rem] text-[var(--text-default,#0f172a)]"
                  .value=${this.cmdUpdateWorkTaskAssignedWorkerId}
                  ?disabled=${updateLoading || !selectedTaskId}
                  @input=${(e: Event) => this.handleCmdUpdateWorkTaskAssignedWorkerIdChange(e)}
                />
              </label>

              <label class="block space-y-1">
                <span class="text-xs font-medium text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label']}
                </span>
                <input
                  type="date"
                  class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm min-h-[2.75rem] text-[var(--text-default,#0f172a)]"
                  .value=${this.cmdUpdateWorkTaskDueDate}
                  ?disabled=${updateLoading || !selectedTaskId}
                  @input=${(e: Event) => this.handleCmdUpdateWorkTaskDueDateChange(e)}
                />
              </label>

              <button
                type="button"
                class="w-full min-h-[2.75rem] px-4 py-2 rounded-lg text-sm font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
                ?disabled=${updateLoading || !selectedTaskId}
                @click=${() => this.handleCmdUpdateWorkTaskClick()}
              >
                ${updateLoading
                  ? '…'
                  : this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask']}
              </button>

              ${this.cmdUpdateWorkTaskState === 'success'
                ? html`
                    <div
                      class="rounded-lg px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#14532d)]"
                      role="status"
                    >
                      <!-- TODO: action.cmdUpdateWorkTask.success not in MessageType -->
                      Task updated
                    </div>
                  `
                : nothing}
              ${this.cmdUpdateWorkTaskState === 'error'
                ? html`
                    <div
                      class="rounded-lg px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#7f1d1d)]"
                      role="alert"
                    >
                      ${this.cmdUpdateWorkTaskError ||
                      '<!-- TODO: action.cmdUpdateWorkTask.error not in MessageType --> Update failed'}
                    </div>
                  `
                : nothing}
            </div>
          </section>
        </div>

        <!-- Create task form -->
        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4 max-w-3xl"
          aria-label=${this.msg['section.taskBoardWorkspace.sec-create-task.title']}
        >
          <div class="space-y-1">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['section.taskBoardWorkspace.sec-create-task.title']}
            </h2>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['organism.taskBoardWorkspace.cmdCreateWorkTask.title']}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="block space-y-1 md:col-span-2">
              <span class="text-xs font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label']}
              </span>
              <input
                type="text"
                class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm min-h-[2.75rem] text-[var(--text-default,#0f172a)]"
                .value=${this.cmdCreateWorkTaskTitle}
                ?disabled=${createLoading}
                @input=${(e: Event) => this.handleCmdCreateWorkTaskTitleChange(e)}
              />
            </label>

            <label class="block space-y-1 md:col-span-2">
              <span class="text-xs font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label']}
              </span>
              <textarea
                class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] min-h-[5rem]"
                .value=${this.cmdCreateWorkTaskDescription}
                ?disabled=${createLoading}
                @input=${(e: Event) => this.handleCmdCreateWorkTaskDescriptionChange(e)}
              ></textarea>
            </label>

            <label class="block space-y-1">
              <span class="text-xs font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label']}
              </span>
              <input
                type="text"
                class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm min-h-[2.75rem] text-[var(--text-default,#0f172a)]"
                .value=${this.cmdCreateWorkTaskAssignedWorkerId}
                ?disabled=${createLoading}
                @input=${(e: Event) => this.handleCmdCreateWorkTaskAssignedWorkerIdChange(e)}
              />
            </label>

            <label class="block space-y-1">
              <span class="text-xs font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label']}
              </span>
              <input
                type="date"
                class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm min-h-[2.75rem] text-[var(--text-default,#0f172a)]"
                .value=${this.cmdCreateWorkTaskDueDate}
                ?disabled=${createLoading}
                @input=${(e: Event) => this.handleCmdCreateWorkTaskDueDateChange(e)}
              />
            </label>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button
              type="button"
              class="min-h-[2.75rem] px-5 py-2 rounded-lg text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${createLoading}
              @click=${() => this.handleCmdCreateWorkTaskClick()}
            >
              ${createLoading
                ? '…'
                : this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask']}
            </button>
          </div>

          ${this.cmdCreateWorkTaskState === 'success'
            ? html`
                <div
                  class="rounded-lg px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#14532d)]"
                  role="status"
                >
                  <!-- TODO: action.cmdCreateWorkTask.success not in MessageType -->
                  Task created
                </div>
              `
            : nothing}
          ${this.cmdCreateWorkTaskState === 'error'
            ? html`
                <div
                  class="rounded-lg px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#7f1d1d)]"
                  role="alert"
                >
                  ${this.cmdCreateWorkTaskError ||
                  '<!-- TODO: action.cmdCreateWorkTask.error not in MessageType --> Create failed'}
                </div>
              `
            : nothing}
        </section>
      </div>
    `;
  }
}
