/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectLifecycleWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectLifecycleWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page11--project-lifecycle-workspace-102045')
export class BuildFlowFsmDesktopPage11ProjectLifecycleWorkspacePage extends BuildFlowFsmProjectLifecycleWorkspaceBase {
  render() {
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              Manage Projects
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.projectLifecycleWorkspace.sec-create-project.title']}
            </h2>
            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.createProjectCmdName}
                    @input=${(e: Event) => this.handleCreateProjectCmdNameChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.createProjectCmdClientId}
                    @input=${(e: Event) => this.handleCreateProjectCmdClientIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 md:col-span-2">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.createProjectCmdSiteAddress}
                    @input=${(e: Event) => this.handleCreateProjectCmdSiteAddressChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.createProjectCmdBudget}
                    @input=${(e: Event) => this.handleCreateProjectCmdBudgetChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    .value=${this.createProjectCmdStartDate}
                    @input=${(e: Event) => this.handleCreateProjectCmdStartDateChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    .value=${this.createProjectCmdEndDate}
                    @input=${(e: Event) => this.handleCreateProjectCmdEndDateChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="rounded-lg px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.createProjectCmdState === 'loading'}
                  @click=${() => this.handleCreateProjectCmdClick()}
                >
                  ${this.createProjectCmdState === 'loading'
                    ? '…'
                    : this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd']}
                </button>
              </div>
              ${this.createProjectCmdState === 'success'
                ? html`
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]"
                      role="status"
                    >
                      <!-- TODO: action.createProjectCmd.success not in MessageType -->
                      Project created successfully.
                    </div>
                  `
                : nothing}
              ${this.createProjectCmdState === 'error'
                ? html`
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]"
                      role="alert"
                    >
                      ${this.createProjectCmdError
                        ? this.createProjectCmdError
                        : html`<!-- TODO: action.createProjectCmd.error not in MessageType -->Failed to create project.`}
                    </div>
                  `
                : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.projectLifecycleWorkspace.sec-edit-project.title']}
            </h2>
            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectCmdName}
                    @input=${(e: Event) => this.handleUpdateProjectCmdNameChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectCmdClientId}
                    @input=${(e: Event) => this.handleUpdateProjectCmdClientIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 md:col-span-2">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectCmdSiteAddress}
                    @input=${(e: Event) => this.handleUpdateProjectCmdSiteAddressChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectCmdBudget}
                    @input=${(e: Event) => this.handleUpdateProjectCmdBudgetChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    .value=${this.updateProjectCmdStartDate}
                    @input=${(e: Event) => this.handleUpdateProjectCmdStartDateChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    .value=${this.updateProjectCmdEndDate}
                    @input=${(e: Event) => this.handleUpdateProjectCmdEndDateChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="rounded-lg px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.updateProjectCmdState === 'loading'}
                  @click=${() => this.handleUpdateProjectCmdClick()}
                >
                  ${this.updateProjectCmdState === 'loading'
                    ? '…'
                    : this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd']}
                </button>
              </div>
              ${this.updateProjectCmdState === 'success'
                ? html`
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]"
                      role="status"
                    >
                      <!-- TODO: action.updateProjectCmd.success not in MessageType -->
                      Project updated successfully.
                    </div>
                  `
                : nothing}
              ${this.updateProjectCmdState === 'error'
                ? html`
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]"
                      role="alert"
                    >
                      ${this.updateProjectCmdError
                        ? this.updateProjectCmdError
                        : html`<!-- TODO: action.updateProjectCmd.error not in MessageType -->Failed to update project.`}
                    </div>
                  `
                : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.projectLifecycleWorkspace.sec-project-status.title']}
            </h2>
            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectStatusCmdStatus}
                    @input=${(e: Event) => this.handleUpdateProjectStatusCmdStatusChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectStatusCmdHoldReason}
                    @input=${(e: Event) => this.handleUpdateProjectStatusCmdHoldReasonChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 md:col-span-2">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label']}
                  </span>
                  <input
                    class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectStatusCmdCancellationReason}
                    @input=${(e: Event) => this.handleUpdateProjectStatusCmdCancellationReasonChange(e)}
                  />
                </label>
              </div>
              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="rounded-lg px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.updateProjectStatusCmdState === 'loading'}
                  @click=${() => this.handleUpdateProjectStatusCmdClick()}
                >
                  ${this.updateProjectStatusCmdState === 'loading'
                    ? '…'
                    : this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd']}
                </button>
              </div>
              ${this.updateProjectStatusCmdState === 'success'
                ? html`
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]"
                      role="status"
                    >
                      <!-- TODO: action.updateProjectStatusCmd.success not in MessageType -->
                      Project status updated successfully.
                    </div>
                  `
                : nothing}
              ${this.updateProjectStatusCmdState === 'error'
                ? html`
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]"
                      role="alert"
                    >
                      ${this.updateProjectStatusCmdError
                        ? this.updateProjectStatusCmdError
                        : html`<!-- TODO: action.updateProjectStatusCmd.error not in MessageType -->Failed to update project status.`}
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
