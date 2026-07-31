/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/projectLifecycleWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectLifecycleWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--project-lifecycle-workspace-102045')
export class BuildFlowFsmDesktopPage31ProjectLifecycleWorkspacePage extends BuildFlowFsmProjectLifecycleWorkspaceBase {
  render() {
    const createLoading = this.createProjectCmdState === 'loading';
    const updateLoading = this.updateProjectCmdState === 'loading';
    const statusLoading = this.updateProjectStatusCmdState === 'loading';
    const showHoldReason =
      this.updateProjectStatusCmdStatus === 'onHold' ||
      this.updateProjectStatusCmdStatus === 'hold' ||
      this.updateProjectStatusCmdStatus === 'ON_HOLD';
    const showCancellationReason =
      this.updateProjectStatusCmdStatus === 'cancelled' ||
      this.updateProjectStatusCmdStatus === 'canceled' ||
      this.updateProjectStatusCmdStatus === 'CANCELLED' ||
      this.updateProjectStatusCmdStatus === 'CANCELED';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.projectLifecycleWorkspace.sec-project-board.title']}
          </h1>
        </header>

        <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <section class="xl:col-span-1 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['section.projectLifecycleWorkspace.sec-create-project.title']}
            </h2>
            <div class="space-y-3">
              <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['organism.projectLifecycleWorkspace.createProjectCmd.title']}
              </h3>
              <div class="space-y-3">
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.createProjectCmdName}
                    ?disabled=${createLoading}
                    @input=${(e: Event) => this.handleCreateProjectCmdNameChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.createProjectCmdClientId}
                    ?disabled=${createLoading}
                    @input=${(e: Event) => this.handleCreateProjectCmdClientIdChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.createProjectCmdSiteAddress}
                    ?disabled=${createLoading}
                    @input=${(e: Event) => this.handleCreateProjectCmdSiteAddressChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.createProjectCmdBudget}
                    ?disabled=${createLoading}
                    @input=${(e: Event) => this.handleCreateProjectCmdBudgetChange(e)}
                  />
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label class="block space-y-1">
                    <span class="text-sm text-[var(--text-default,#0f172a)]">
                      ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label']}
                    </span>
                    <input
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="date"
                      .value=${this.createProjectCmdStartDate}
                      ?disabled=${createLoading}
                      @input=${(e: Event) => this.handleCreateProjectCmdStartDateChange(e)}
                    />
                  </label>
                  <label class="block space-y-1">
                    <span class="text-sm text-[var(--text-default,#0f172a)]">
                      ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label']}
                    </span>
                    <input
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="date"
                      .value=${this.createProjectCmdEndDate}
                      ?disabled=${createLoading}
                      @input=${(e: Event) => this.handleCreateProjectCmdEndDateChange(e)}
                    />
                  </label>
                </div>
                <button
                  type="button"
                  class="w-full rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${createLoading}
                  @click=${() => this.handleCreateProjectCmdClick()}
                >
                  ${createLoading
                    ? '…'
                    : this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd']}
                </button>
                ${this.createProjectCmdState === 'success'
                  ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] text-sm">
                      <!-- TODO: action.createProjectCmd.success -->
                      Project created successfully.
                    </div>`
                  : nothing}
                ${this.createProjectCmdState === 'error'
                  ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] text-sm">
                      ${this.createProjectCmdError || '<!-- TODO: action.createProjectCmd.error --> Failed to create project.'}
                    </div>`
                  : nothing}
              </div>
            </div>
          </section>

          <section class="xl:col-span-1 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['section.projectLifecycleWorkspace.sec-edit-project.title']}
            </h2>
            <div class="space-y-3">
              <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['organism.projectLifecycleWorkspace.updateProjectCmd.title']}
              </h3>
              <div class="space-y-3">
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectCmdName}
                    ?disabled=${updateLoading}
                    @input=${(e: Event) => this.handleUpdateProjectCmdNameChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectCmdClientId}
                    ?disabled=${updateLoading}
                    @input=${(e: Event) => this.handleUpdateProjectCmdClientIdChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectCmdSiteAddress}
                    ?disabled=${updateLoading}
                    @input=${(e: Event) => this.handleUpdateProjectCmdSiteAddressChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label']}
                  </span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.updateProjectCmdBudget}
                    ?disabled=${updateLoading}
                    @input=${(e: Event) => this.handleUpdateProjectCmdBudgetChange(e)}
                  />
                </label>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label class="block space-y-1">
                    <span class="text-sm text-[var(--text-default,#0f172a)]">
                      ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label']}
                    </span>
                    <input
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="date"
                      .value=${this.updateProjectCmdStartDate}
                      ?disabled=${updateLoading}
                      @input=${(e: Event) => this.handleUpdateProjectCmdStartDateChange(e)}
                    />
                  </label>
                  <label class="block space-y-1">
                    <span class="text-sm text-[var(--text-default,#0f172a)]">
                      ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label']}
                    </span>
                    <input
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="date"
                      .value=${this.updateProjectCmdEndDate}
                      ?disabled=${updateLoading}
                      @input=${(e: Event) => this.handleUpdateProjectCmdEndDateChange(e)}
                    />
                  </label>
                </div>
                <button
                  type="button"
                  class="w-full rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${updateLoading || !this.updateProjectCmdProjectId}
                  @click=${() => this.handleUpdateProjectCmdClick()}
                >
                  ${updateLoading
                    ? '…'
                    : this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd']}
                </button>
                ${this.updateProjectCmdState === 'success'
                  ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] text-sm">
                      <!-- TODO: action.updateProjectCmd.success -->
                      Project updated successfully.
                    </div>`
                  : nothing}
                ${this.updateProjectCmdState === 'error'
                  ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] text-sm">
                      ${this.updateProjectCmdError || '<!-- TODO: action.updateProjectCmd.error --> Failed to update project.'}
                    </div>`
                  : nothing}
              </div>
            </div>
          </section>

          <section class="xl:col-span-1 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['section.projectLifecycleWorkspace.sec-project-status.title']}
            </h2>
            <div class="space-y-3">
              <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
                ${this.msg['organism.projectLifecycleWorkspace.updateProjectStatusCmd.title']}
              </h3>
              <div class="space-y-3">
                <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2 text-sm text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label']}:
                  <span class="font-medium text-[var(--text-default,#0f172a)]">
                    ${this.updateProjectStatusCmdStatus || '—'}
                  </span>
                </div>
                <div class="flex flex-wrap gap-2">
                  <button
                    type="button"
                    class="rounded-md px-3 py-2 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                    ?disabled=${statusLoading || !this.updateProjectStatusCmdProjectId}
                    @click=${() => {
                      this.setUpdateProjectStatusCmdStatus('active');
                      this.handleUpdateProjectStatusCmdClick();
                    }}
                  >
                    active
                  </button>
                  <button
                    type="button"
                    class="rounded-md px-3 py-2 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                    ?disabled=${statusLoading || !this.updateProjectStatusCmdProjectId}
                    @click=${() => {
                      this.setUpdateProjectStatusCmdStatus('onHold');
                      this.handleUpdateProjectStatusCmdClick();
                    }}
                  >
                    onHold
                  </button>
                  <button
                    type="button"
                    class="rounded-md px-3 py-2 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                    ?disabled=${statusLoading || !this.updateProjectStatusCmdProjectId}
                    @click=${() => {
                      this.setUpdateProjectStatusCmdStatus('completed');
                      this.handleUpdateProjectStatusCmdClick();
                    }}
                  >
                    completed
                  </button>
                  <button
                    type="button"
                    class="rounded-md px-3 py-2 text-sm bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                    ?disabled=${statusLoading || !this.updateProjectStatusCmdProjectId}
                    @click=${() => {
                      this.setUpdateProjectStatusCmdStatus('cancelled');
                      this.handleUpdateProjectStatusCmdClick();
                    }}
                  >
                    cancelled
                  </button>
                </div>
                ${showHoldReason
                  ? html`
                      <label class="block space-y-1">
                        <span class="text-sm text-[var(--text-default,#0f172a)]">
                          ${this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label']}
                        </span>
                        <input
                          class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                          type="text"
                          .value=${this.updateProjectStatusCmdHoldReason}
                          ?disabled=${statusLoading}
                          @input=${(e: Event) => this.handleUpdateProjectStatusCmdHoldReasonChange(e)}
                        />
                      </label>
                    `
                  : nothing}
                ${showCancellationReason
                  ? html`
                      <label class="block space-y-1">
                        <span class="text-sm text-[var(--text-default,#0f172a)]">
                          ${this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label']}
                        </span>
                        <input
                          class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                          type="text"
                          .value=${this.updateProjectStatusCmdCancellationReason}
                          ?disabled=${statusLoading}
                          @input=${(e: Event) => this.handleUpdateProjectStatusCmdCancellationReasonChange(e)}
                        />
                      </label>
                    `
                  : nothing}
                <button
                  type="button"
                  class="w-full rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${statusLoading || !this.updateProjectStatusCmdProjectId || !this.updateProjectStatusCmdStatus}
                  @click=${() => this.handleUpdateProjectStatusCmdClick()}
                >
                  ${statusLoading
                    ? '…'
                    : this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd']}
                </button>
                ${this.updateProjectStatusCmdState === 'success'
                  ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] text-sm">
                      <!-- TODO: action.updateProjectStatusCmd.success -->
                      Project status updated successfully.
                    </div>`
                  : nothing}
                ${this.updateProjectStatusCmdState === 'error'
                  ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] text-sm">
                      ${this.updateProjectStatusCmdError ||
                      '<!-- TODO: action.updateProjectStatusCmd.error --> Failed to update project status.'}
                    </div>`
                  : nothing}
              </div>
            </div>
          </section>
        </div>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['organism.projectLifecycleWorkspace.card-board10.title']}
          </h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['intent.projectLifecycleWorkspace.card-board10.content.title']}
          </p>
          <div class="rounded-md border border-dashed border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-8 text-center text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['section.projectLifecycleWorkspace.sec-project-detail.title']}
            ${this.updateProjectCmdProjectId
              ? html`<div class="mt-2 text-[var(--text-default,#0f172a)] font-medium">${this.updateProjectCmdProjectId}</div>`
              : nothing}
          </div>
        </section>
      </div>
    `;
  }
}
