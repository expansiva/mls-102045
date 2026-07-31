/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/projectLifecycleWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectLifecycleWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page21--project-lifecycle-workspace-102045')
export class BuildFlowFsmDesktopPage21ProjectLifecycleWorkspacePage extends BuildFlowFsmProjectLifecycleWorkspaceBase {
  render() {
    const statusLoading = this.updateProjectStatusCmdState === 'loading';
    const updateLoading = this.updateProjectCmdState === 'loading';
    const createLoading = this.createProjectCmdState === 'loading';

    const targetStatus = this.updateProjectStatusCmdStatus || '';
    const showHoldReason = targetStatus === 'on_hold' || targetStatus === 'onHold' || targetStatus === 'hold';
    const showCancelReason = targetStatus === 'cancelled' || targetStatus === 'canceled';

    // Contextual lifecycle transitions — one button per next status (no free <select>).
    const transitions: ReadonlyArray<{ status: string; label: string }> = [
      { status: 'active', label: 'Activate' },
      { status: 'on_hold', label: 'Place on Hold' },
      { status: 'closed', label: 'Close' },
      { status: 'cancelled', label: 'Cancel' },
    ];

    const runStatusTransition = (nextStatus: string): void => {
      this.setUpdateProjectStatusCmdStatus(nextStatus);
      // Hold/cancel need a reason first — only auto-submit simple transitions.
      if (nextStatus === 'on_hold' || nextStatus === 'cancelled') {
        return;
      }
      this.handleUpdateProjectStatusCmdClick();
    };

    const selectedProjectId =
      this.updateProjectCmdProjectId || this.updateProjectStatusCmdProjectId || '';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.projectLifecycleWorkspace.sec-project-detail.title']}
          </h1>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['section.projectLifecycleWorkspace.sec-project-board.title']}
          </p>
        </header>

        ${selectedProjectId
          ? html`
              <div
                class="inline-flex items-center gap-2 rounded-lg border border-[var(--selected-border,#94a3b8)] bg-[var(--selected-bg,#e2e8f0)] px-3 py-1.5 text-sm text-[var(--selected-text,#0f172a)]"
              >
                <span class="font-medium">${selectedProjectId}</span>
              </div>
            `
          : nothing}

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <!-- Master / status context + contextual transitions -->
          <section
            class="lg:col-span-1 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['organism.projectLifecycleWorkspace.updateProjectStatusCmd.title']}
            </h2>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.title']}
            </p>

            <div class="space-y-1">
              <span class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label']}
              </span>
              <div
                class="inline-flex items-center rounded-md bg-[var(--status-info-bg,#e0f2fe)] px-2.5 py-1 text-sm font-medium text-[var(--status-info-text,#0c4a6e)]"
              >
                ${targetStatus ? targetStatus : '—'}
              </div>
            </div>

            <div class="flex flex-col gap-2">
              ${transitions.map(
                (t) => html`
                  <button
                    type="button"
                    class="w-full rounded-lg px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] hover:opacity-90 disabled:opacity-50"
                    ?disabled=${statusLoading || !selectedProjectId}
                    @click=${() => runStatusTransition(t.status)}
                  >
                    ${t.label}
                  </button>
                `,
              )}
            </div>

            ${showHoldReason
              ? html`
                  <label class="block space-y-1">
                    <span class="text-sm font-medium">
                      ${this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label']}
                    </span>
                    <textarea
                      class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      rows="2"
                      .value=${this.updateProjectStatusCmdHoldReason}
                      ?disabled=${statusLoading}
                      @input=${(e: Event) => this.handleUpdateProjectStatusCmdHoldReasonChange(e)}
                    ></textarea>
                  </label>
                `
              : nothing}

            ${showCancelReason
              ? html`
                  <label class="block space-y-1">
                    <span class="text-sm font-medium">
                      ${this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label']}
                    </span>
                    <textarea
                      class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      rows="2"
                      .value=${this.updateProjectStatusCmdCancellationReason}
                      ?disabled=${statusLoading}
                      @input=${(e: Event) => this.handleUpdateProjectStatusCmdCancellationReasonChange(e)}
                    ></textarea>
                  </label>
                `
              : nothing}

            ${showHoldReason || showCancelReason
              ? html`
                  <button
                    type="button"
                    class="w-full rounded-lg px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
                    ?disabled=${statusLoading || !selectedProjectId}
                    @click=${() => this.handleUpdateProjectStatusCmdClick()}
                  >
                    ${statusLoading
                      ? '…'
                      : this.msg['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd']}
                  </button>
                `
              : nothing}

            ${this.updateProjectStatusCmdState === 'success'
              ? html`
                  <div
                    class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#14532d)]"
                  >
                    <!-- TODO: action.updateProjectStatusCmd.success msg key not in shared MessageType -->
                    Status updated.
                  </div>
                `
              : nothing}
            ${this.updateProjectStatusCmdState === 'error'
              ? html`
                  <div
                    class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#7f1d1d)]"
                  >
                    ${this.updateProjectStatusCmdError ||
                    '<!-- TODO: action.updateProjectStatusCmd.error --> Error updating status.'}
                  </div>
                `
              : nothing}
          </section>

          <!-- Detail: edit selected project -->
          <section
            class="lg:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4"
          >
            <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['organism.projectLifecycleWorkspace.updateProjectCmd.title']}
            </h2>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.title']}
            </p>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
              <label class="block space-y-1 md:col-span-2">
                <span class="text-sm font-medium">
                  ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label']}
                </span>
                <input
                  type="text"
                  class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProjectCmdName}
                  ?disabled=${updateLoading}
                  @input=${(e: Event) => this.handleUpdateProjectCmdNameChange(e)}
                />
              </label>

              <label class="block space-y-1">
                <span class="text-sm font-medium">
                  ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label']}
                </span>
                <input
                  type="text"
                  class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProjectCmdClientId}
                  ?disabled=${updateLoading}
                  @input=${(e: Event) => this.handleUpdateProjectCmdClientIdChange(e)}
                />
              </label>

              <label class="block space-y-1">
                <span class="text-sm font-medium">
                  ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label']}
                </span>
                <input
                  type="text"
                  class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProjectCmdBudget}
                  ?disabled=${updateLoading}
                  @input=${(e: Event) => this.handleUpdateProjectCmdBudgetChange(e)}
                />
              </label>

              <label class="block space-y-1 md:col-span-2">
                <span class="text-sm font-medium">
                  ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label']}
                </span>
                <input
                  type="text"
                  class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProjectCmdSiteAddress}
                  ?disabled=${updateLoading}
                  @input=${(e: Event) => this.handleUpdateProjectCmdSiteAddressChange(e)}
                />
              </label>

              <label class="block space-y-1">
                <span class="text-sm font-medium">
                  ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label']}
                </span>
                <input
                  type="date"
                  class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProjectCmdStartDate}
                  ?disabled=${updateLoading}
                  @input=${(e: Event) => this.handleUpdateProjectCmdStartDateChange(e)}
                />
              </label>

              <label class="block space-y-1">
                <span class="text-sm font-medium">
                  ${this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label']}
                </span>
                <input
                  type="date"
                  class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.updateProjectCmdEndDate}
                  ?disabled=${updateLoading}
                  @input=${(e: Event) => this.handleUpdateProjectCmdEndDateChange(e)}
                />
              </label>
            </div>

            <div class="flex items-center gap-3 pt-2">
              <button
                type="button"
                class="rounded-lg px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
                ?disabled=${updateLoading || !this.updateProjectCmdProjectId}
                @click=${() => this.handleUpdateProjectCmdClick()}
              >
                ${updateLoading
                  ? '…'
                  : this.msg['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd']}
              </button>
            </div>

            ${this.updateProjectCmdState === 'success'
              ? html`
                  <div
                    class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#14532d)]"
                  >
                    <!-- TODO: action.updateProjectCmd.success msg key not in shared MessageType -->
                    Project updated.
                  </div>
                `
              : nothing}
            ${this.updateProjectCmdState === 'error'
              ? html`
                  <div
                    class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#7f1d1d)]"
                  >
                    ${this.updateProjectCmdError ||
                    '<!-- TODO: action.updateProjectCmd.error --> Error updating project.'}
                  </div>
                `
              : nothing}
          </section>
        </div>

        <!-- Create new project (secondary / lower hierarchy) -->
        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 shadow-sm space-y-4"
        >
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.projectLifecycleWorkspace.sec-create-project.title']}
          </h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['organism.projectLifecycleWorkspace.createProjectCmd.title']}
          </p>

          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <label class="block space-y-1 md:col-span-2 lg:col-span-1">
              <span class="text-sm font-medium">
                ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label']}
              </span>
              <input
                type="text"
                class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                .value=${this.createProjectCmdName}
                ?disabled=${createLoading}
                @input=${(e: Event) => this.handleCreateProjectCmdNameChange(e)}
              />
            </label>

            <label class="block space-y-1">
              <span class="text-sm font-medium">
                ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label']}
              </span>
              <input
                type="text"
                class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                .value=${this.createProjectCmdClientId}
                ?disabled=${createLoading}
                @input=${(e: Event) => this.handleCreateProjectCmdClientIdChange(e)}
              />
            </label>

            <label class="block space-y-1">
              <span class="text-sm font-medium">
                ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label']}
              </span>
              <input
                type="text"
                class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                .value=${this.createProjectCmdBudget}
                ?disabled=${createLoading}
                @input=${(e: Event) => this.handleCreateProjectCmdBudgetChange(e)}
              />
            </label>

            <label class="block space-y-1 md:col-span-2 lg:col-span-3">
              <span class="text-sm font-medium">
                ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label']}
              </span>
              <input
                type="text"
                class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                .value=${this.createProjectCmdSiteAddress}
                ?disabled=${createLoading}
                @input=${(e: Event) => this.handleCreateProjectCmdSiteAddressChange(e)}
              />
            </label>

            <label class="block space-y-1">
              <span class="text-sm font-medium">
                ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label']}
              </span>
              <input
                type="date"
                class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                .value=${this.createProjectCmdStartDate}
                ?disabled=${createLoading}
                @input=${(e: Event) => this.handleCreateProjectCmdStartDateChange(e)}
              />
            </label>

            <label class="block space-y-1">
              <span class="text-sm font-medium">
                ${this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label']}
              </span>
              <input
                type="date"
                class="w-full rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                .value=${this.createProjectCmdEndDate}
                ?disabled=${createLoading}
                @input=${(e: Event) => this.handleCreateProjectCmdEndDateChange(e)}
              />
            </label>
          </div>

          <div class="flex items-center gap-3 pt-2">
            <button
              type="button"
              class="rounded-lg px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
              ?disabled=${createLoading}
              @click=${() => this.handleCreateProjectCmdClick()}
            >
              ${createLoading
                ? '…'
                : this.msg['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd']}
            </button>
          </div>

          ${this.createProjectCmdState === 'success'
            ? html`
                <div
                  class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#14532d)]"
                >
                  <!-- TODO: action.createProjectCmd.success msg key not in shared MessageType -->
                  Project created.
                </div>
              `
            : nothing}
          ${this.createProjectCmdState === 'error'
            ? html`
                <div
                  class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#7f1d1d)]"
                >
                  ${this.createProjectCmdError ||
                  '<!-- TODO: action.createProjectCmd.error --> Error creating project.'}
                </div>
              `
            : nothing}
        </section>
      </div>
    `;
  }
}
