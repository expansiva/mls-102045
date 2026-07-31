/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/taskBoardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmTaskBoardWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page11--task-board-workspace-102045')
export class BuildFlowFsmDesktopPage11TaskBoardWorkspacePage extends BuildFlowFsmTaskBoardWorkspaceBase {
  render() {
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.taskBoardWorkspace.sec-board.title']}
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.taskBoardWorkspace.createTaskSection.title']}
            </h2>
            <div class="space-y-4">
              <div class="space-y-3">
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.cmdCreateWorkTaskTitle}
                    @input=${(e: Event) => this.handleCmdCreateWorkTaskTitleChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label']}
                  </span>
                  <textarea
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    rows="3"
                    .value=${this.cmdCreateWorkTaskDescription}
                    @input=${(e: Event) => this.handleCmdCreateWorkTaskDescriptionChange(e)}
                  ></textarea>
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.cmdCreateWorkTaskAssignedWorkerId}
                    @input=${(e: Event) => this.handleCmdCreateWorkTaskAssignedWorkerIdChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    .value=${this.cmdCreateWorkTaskDueDate}
                    @input=${(e: Event) => this.handleCmdCreateWorkTaskDueDateChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.cmdCreateWorkTaskState === 'loading'}
                  @click=${() => this.handleCmdCreateWorkTaskClick()}
                >
                  ${this.cmdCreateWorkTaskState === 'loading'
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                    : nothing}
                  <span>${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask']}</span>
                </button>
              </div>
              ${this.cmdCreateWorkTaskState === 'success'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                      role="status"
                    >
                      <!-- TODO: action.cmdCreateWorkTask.success msg key not in shared MessageType -->
                      Work task created successfully.
                    </div>
                  `
                : nothing}
              ${this.cmdCreateWorkTaskState === 'error'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                      role="alert"
                    >
                      ${this.cmdCreateWorkTaskError
                        ? this.cmdCreateWorkTaskError
                        : html`<!-- TODO: action.cmdCreateWorkTask.error msg key not in shared MessageType -->Failed to create work task.`}
                    </div>
                  `
                : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.taskBoardWorkspace.editTaskSection.title']}
            </h2>
            <div class="space-y-4">
              <div class="space-y-3">
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.cmdUpdateWorkTaskTitle}
                    @input=${(e: Event) => this.handleCmdUpdateWorkTaskTitleChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label']}
                  </span>
                  <textarea
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    rows="3"
                    .value=${this.cmdUpdateWorkTaskDescription}
                    @input=${(e: Event) => this.handleCmdUpdateWorkTaskDescriptionChange(e)}
                  ></textarea>
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.cmdUpdateWorkTaskAssignedWorkerId}
                    @input=${(e: Event) => this.handleCmdUpdateWorkTaskAssignedWorkerIdChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    .value=${this.cmdUpdateWorkTaskDueDate}
                    @input=${(e: Event) => this.handleCmdUpdateWorkTaskDueDateChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.cmdUpdateWorkTaskStatusValue}
                    @input=${(e: Event) => this.handleCmdUpdateWorkTaskStatusValueChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.cmdUpdateWorkTaskCancellationReason}
                    @input=${(e: Event) => this.handleCmdUpdateWorkTaskCancellationReasonChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.cmdUpdateWorkTaskState === 'loading'}
                  @click=${() => this.handleCmdUpdateWorkTaskClick()}
                >
                  ${this.cmdUpdateWorkTaskState === 'loading'
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                    : nothing}
                  <span>${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask']}</span>
                </button>
              </div>
              ${this.cmdUpdateWorkTaskState === 'success'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                      role="status"
                    >
                      <!-- TODO: action.cmdUpdateWorkTask.success msg key not in shared MessageType -->
                      Work task updated successfully.
                    </div>
                  `
                : nothing}
              ${this.cmdUpdateWorkTaskState === 'error'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                      role="alert"
                    >
                      ${this.cmdUpdateWorkTaskError
                        ? this.cmdUpdateWorkTaskError
                        : html`<!-- TODO: action.cmdUpdateWorkTask.error msg key not in shared MessageType -->Failed to update work task.`}
                    </div>
                  `
                : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.taskBoardWorkspace.fieldStatusSection.title']}
            </h2>
            <div class="space-y-4">
              <div class="space-y-3">
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.cmdUpdateWorkTaskStatusStatus}
                    @input=${(e: Event) => this.handleCmdUpdateWorkTaskStatusStatusChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.cmdUpdateWorkTaskStatusCancellationReason}
                    @input=${(e: Event) => this.handleCmdUpdateWorkTaskStatusCancellationReasonChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="datetime-local"
                    .value=${this.cmdUpdateWorkTaskStatusCompletedAt}
                    @input=${(e: Event) => this.handleCmdUpdateWorkTaskStatusCompletedAtChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.cmdUpdateWorkTaskStatusActorId}
                    @input=${(e: Event) => this.handleCmdUpdateWorkTaskStatusActorIdChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.cmdUpdateWorkTaskStatusState === 'loading'}
                  @click=${() => this.handleCmdUpdateWorkTaskStatusClick()}
                >
                  ${this.cmdUpdateWorkTaskStatusState === 'loading'
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                    : nothing}
                  <span>${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus']}</span>
                </button>
              </div>
              ${this.cmdUpdateWorkTaskStatusState === 'success'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                      role="status"
                    >
                      <!-- TODO: action.cmdUpdateWorkTaskStatus.success msg key not in shared MessageType -->
                      Work task status updated successfully.
                    </div>
                  `
                : nothing}
              ${this.cmdUpdateWorkTaskStatusState === 'error'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                      role="alert"
                    >
                      ${this.cmdUpdateWorkTaskStatusError
                        ? this.cmdUpdateWorkTaskStatusError
                        : html`<!-- TODO: action.cmdUpdateWorkTaskStatus.error msg key not in shared MessageType -->Failed to update work task status.`}
                    </div>
                  `
                : nothing}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
