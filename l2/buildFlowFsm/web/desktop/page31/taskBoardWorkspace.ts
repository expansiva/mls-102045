/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/taskBoardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmTaskBoardWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/taskBoardWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--task-board-workspace-102045')
export class BuildFlowFsmDesktopPage31TaskBoardWorkspacePage extends BuildFlowFsmTaskBoardWorkspaceBase {
  render() {
    const createLoading = this.cmdCreateWorkTaskState === 'loading';
    const updateLoading = this.cmdUpdateWorkTaskState === 'loading';
    const statusLoading = this.cmdUpdateWorkTaskStatusState === 'loading';

    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.taskBoardWorkspace.sec-board.title']}
          </h1>
        </header>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)] mb-3">
            ${this.msg['organism.taskBoardWorkspace.card-board10.title']}
          </h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['intent.taskBoardWorkspace.card-board10.content.title']}
          </p>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['section.taskBoardWorkspace.sec-create-task.title']}
            </h2>
            <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
              ${this.msg['organism.taskBoardWorkspace.cmdCreateWorkTask.title']}
            </h3>
            <div class="space-y-3">
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.title.label']}
                </span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.cmdCreateWorkTaskTitle}
                  @input=${this.handleCmdCreateWorkTaskTitleChange}
                />
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.description.label']}
                </span>
                <textarea
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  rows="3"
                  .value=${this.cmdCreateWorkTaskDescription}
                  @input=${this.handleCmdCreateWorkTaskDescriptionChange}
                ></textarea>
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.assignedWorkerId.label']}
                </span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.cmdCreateWorkTaskAssignedWorkerId}
                  @input=${this.handleCmdCreateWorkTaskAssignedWorkerIdChange}
                />
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.field.dueDate.label']}
                </span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="date"
                  .value=${this.cmdCreateWorkTaskDueDate}
                  @input=${this.handleCmdCreateWorkTaskDueDateChange}
                />
              </label>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${createLoading}
                @click=${this.handleCmdCreateWorkTaskClick}
              >
                ${createLoading
                  ? '…'
                  : this.msg['intent.taskBoardWorkspace.cmdCreateWorkTask.form.action.cmdCreateWorkTask']}
              </button>
              ${this.cmdCreateWorkTaskState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                      <!-- TODO: action.cmdCreateWorkTask.success message key not in MessageType -->
                      Task created successfully.
                    </div>
                  `
                : nothing}
              ${this.cmdCreateWorkTaskState === 'error'
                ? html`
                    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                      ${this.cmdCreateWorkTaskError || '<!-- TODO: action.cmdCreateWorkTask.error --> Error creating task.'}
                    </div>
                  `
                : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['section.taskBoardWorkspace.sec-task-detail.title']}
            </h2>
            <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
              ${this.msg['organism.taskBoardWorkspace.cmdUpdateWorkTask.title']}
            </h3>
            <div class="space-y-3">
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.title.label']}
                </span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.cmdUpdateWorkTaskTitle}
                  @input=${this.handleCmdUpdateWorkTaskTitleChange}
                />
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.description.label']}
                </span>
                <textarea
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  rows="3"
                  .value=${this.cmdUpdateWorkTaskDescription}
                  @input=${this.handleCmdUpdateWorkTaskDescriptionChange}
                ></textarea>
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.assignedWorkerId.label']}
                </span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.cmdUpdateWorkTaskAssignedWorkerId}
                  @input=${this.handleCmdUpdateWorkTaskAssignedWorkerIdChange}
                />
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.dueDate.label']}
                </span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="date"
                  .value=${this.cmdUpdateWorkTaskDueDate}
                  @input=${this.handleCmdUpdateWorkTaskDueDateChange}
                />
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.status.label']}
                </span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.cmdUpdateWorkTaskStatusValue}
                  @input=${this.handleCmdUpdateWorkTaskStatusValueChange}
                />
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.field.cancellationReason.label']}
                </span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.cmdUpdateWorkTaskCancellationReason}
                  @input=${this.handleCmdUpdateWorkTaskCancellationReasonChange}
                />
              </label>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${updateLoading}
                @click=${this.handleCmdUpdateWorkTaskClick}
              >
                ${updateLoading
                  ? '…'
                  : this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTask.form.action.cmdUpdateWorkTask']}
              </button>
              ${this.cmdUpdateWorkTaskState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                      <!-- TODO: action.cmdUpdateWorkTask.success message key not in MessageType -->
                      Task updated successfully.
                    </div>
                  `
                : nothing}
              ${this.cmdUpdateWorkTaskState === 'error'
                ? html`
                    <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                      ${this.cmdUpdateWorkTaskError || '<!-- TODO: action.cmdUpdateWorkTask.error --> Error updating task.'}
                    </div>
                  `
                : nothing}
            </div>
          </section>
        </div>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
            ${this.msg['section.taskBoardWorkspace.fieldStatusSection.title']}
          </h2>
          <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
            ${this.msg['organism.taskBoardWorkspace.cmdUpdateWorkTaskStatus.title']}
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-default,#0f172a)]">
                ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.status.label']}
              </span>
              <input
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                type="text"
                .value=${this.cmdUpdateWorkTaskStatusStatus}
                @input=${this.handleCmdUpdateWorkTaskStatusStatusChange}
              />
            </label>
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-default,#0f172a)]">
                ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.cancellationReason.label']}
              </span>
              <input
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                type="text"
                .value=${this.cmdUpdateWorkTaskStatusCancellationReason}
                @input=${this.handleCmdUpdateWorkTaskStatusCancellationReasonChange}
              />
            </label>
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-default,#0f172a)]">
                ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.completedAt.label']}
              </span>
              <input
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                type="datetime-local"
                .value=${this.cmdUpdateWorkTaskStatusCompletedAt}
                @input=${this.handleCmdUpdateWorkTaskStatusCompletedAtChange}
              />
            </label>
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-default,#0f172a)]">
                ${this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.field.actorId.label']}
              </span>
              <input
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                type="text"
                .value=${this.cmdUpdateWorkTaskStatusActorId}
                @input=${this.handleCmdUpdateWorkTaskStatusActorIdChange}
              />
            </label>
          </div>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${statusLoading}
            @click=${this.handleCmdUpdateWorkTaskStatusClick}
          >
            ${statusLoading
              ? '…'
              : this.msg['intent.taskBoardWorkspace.cmdUpdateWorkTaskStatus.form.action.cmdUpdateWorkTaskStatus']}
          </button>
          ${this.cmdUpdateWorkTaskStatusState === 'success'
            ? html`
                <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                  <!-- TODO: action.cmdUpdateWorkTaskStatus.success message key not in MessageType -->
                  Task status updated successfully.
                </div>
              `
            : nothing}
          ${this.cmdUpdateWorkTaskStatusState === 'error'
            ? html`
                <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                  ${this.cmdUpdateWorkTaskStatusError || '<!-- TODO: action.cmdUpdateWorkTaskStatus.error --> Error updating task status.'}
                </div>
              `
            : nothing}
        </section>
      </div>
    `;
  }
}
