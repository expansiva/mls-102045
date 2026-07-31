/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/statusReportWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmStatusReportWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--status-report-workspace-102045')
export class BuildFlowFsmDesktopPage31StatusReportWorkspacePage extends BuildFlowFsmStatusReportWorkspaceBase {
  render() {
    const generateLoading = this.generateReportState === 'loading';
    const contentLoading = this.updateReportContentState === 'loading';
    const statusLoading = this.updateReportStatusState === 'loading';
    const hasGeneratedReport = this.generateReportOutput !== null;
    const reportId =
      this.updateReportContentStatusReportId ||
      this.updateReportStatusStatusReportId ||
      '';

    const statusTransitions: ReadonlyArray<{ value: string; label: string }> = [
      { value: 'draft', label: 'Draft' },
      { value: 'ready_for_review', label: 'Ready for review' },
      { value: 'shared', label: 'Share with client' },
      { value: 'archived', label: 'Archive' },
    ];

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
            ${this.msg['section.statusReportWorkspace.sec-generate.title']}
          </h1>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['section.statusReportWorkspace.sec-review-share.title']}
          </p>
        </header>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4">
          <div class="flex flex-wrap items-center justify-between gap-3">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['organism.statusReportWorkspace.generateReport.title']}
            </h2>
            ${hasGeneratedReport
              ? html`
                  <span
                    class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]"
                  >
                    Report ready
                  </span>
                `
              : nothing}
          </div>

          <div class="space-y-3">
            <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.statusReportWorkspace.generateReport.form.title']}
            </h3>
            <div class="grid gap-4 md:grid-cols-2">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label']}
                </span>
                <input
                  type="date"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                  .value=${this.generateReportReportPeriodStart}
                  ?disabled=${generateLoading}
                  @change=${this.handleGenerateReportReportPeriodStartChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label']}
                </span>
                <input
                  type="date"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                  .value=${this.generateReportReportPeriodEnd}
                  ?disabled=${generateLoading}
                  @change=${this.handleGenerateReportReportPeriodEndChange}
                />
              </label>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${generateLoading}
                @click=${this.handleGenerateReportClick}
              >
                ${generateLoading
                  ? 'Generating…'
                  : this.msg['intent.statusReportWorkspace.generateReport.form.action.generateReport']}
              </button>
            </div>
            ${this.generateReportState === 'success'
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                    role="status"
                  >
                    <!-- TODO: action.generateReport.success not in MessageType -->
                    Status report generated successfully.
                  </div>
                `
              : nothing}
            ${this.generateReportState === 'error'
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                    role="alert"
                  >
                    ${this.generateReportError ||
                    '<!-- TODO: action.generateReport.error not in MessageType --> Failed to generate status report.'}
                  </div>
                `
              : nothing}
          </div>
        </section>

        <section class="grid gap-6 lg:grid-cols-3">
          <div
            class="lg:col-span-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4"
          >
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['organism.statusReportWorkspace.updateReportContent.title']}
            </h2>
            <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.statusReportWorkspace.updateReportContent.form.title']}
            </h3>

            ${reportId
              ? html`
                  <p class="text-xs text-[var(--text-muted,#64748b)]">
                    Report ID:
                    <span class="font-medium text-[var(--text-default,#0f172a)]">${reportId}</span>
                  </p>
                `
              : nothing}

            <div class="grid gap-4">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.summary.label']}
                </span>
                <textarea
                  rows="3"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                  .value=${this.updateReportContentSummary}
                  ?disabled=${contentLoading}
                  @change=${this.handleUpdateReportContentSummaryChange}
                ></textarea>
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label']}
                </span>
                <textarea
                  rows="3"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                  .value=${this.updateReportContentTasksOverview}
                  ?disabled=${contentLoading}
                  @change=${this.handleUpdateReportContentTasksOverviewChange}
                ></textarea>
              </label>
              <div class="grid gap-4 md:grid-cols-2">
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label']}
                  </span>
                  <textarea
                    rows="3"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                    .value=${this.updateReportContentTimeLogsOverview}
                    ?disabled=${contentLoading}
                    @change=${this.handleUpdateReportContentTimeLogsOverviewChange}
                  ></textarea>
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label']}
                  </span>
                  <textarea
                    rows="3"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                    .value=${this.updateReportContentMaterialsOverview}
                    ?disabled=${contentLoading}
                    @change=${this.handleUpdateReportContentMaterialsOverviewChange}
                  ></textarea>
                </label>
              </div>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label']}
                </span>
                <textarea
                  rows="3"
                  class="rounded-md border border-[var(--border-warning,#f59e0b)] bg-[var(--status-warning-bg,#fef3c7)] px-3 py-2 text-[var(--status-warning-text,#92400e)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                  .value=${this.updateReportContentDelayRiskAssessment}
                  ?disabled=${contentLoading}
                  @change=${this.handleUpdateReportContentDelayRiskAssessmentChange}
                ></textarea>
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label']}
                </span>
                <textarea
                  rows="3"
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                  .value=${this.updateReportContentPmNotes}
                  ?disabled=${contentLoading}
                  @change=${this.handleUpdateReportContentPmNotesChange}
                ></textarea>
              </label>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${contentLoading}
                @click=${this.handleUpdateReportContentClick}
              >
                ${contentLoading
                  ? 'Saving…'
                  : this.msg['intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent']}
              </button>
            </div>

            ${this.updateReportContentState === 'success'
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                    role="status"
                  >
                    <!-- TODO: action.updateReportContent.success not in MessageType -->
                    Report content updated successfully.
                  </div>
                `
              : nothing}
            ${this.updateReportContentState === 'error'
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                    role="alert"
                  >
                    ${this.updateReportContentError ||
                    '<!-- TODO: action.updateReportContent.error not in MessageType --> Failed to update report content.'}
                  </div>
                `
              : nothing}
          </div>

          <aside
            class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-5 shadow-sm space-y-4 h-fit"
          >
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['organism.statusReportWorkspace.updateReportStatus.title']}
            </h2>
            <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.statusReportWorkspace.updateReportStatus.form.title']}
            </h3>

            <div class="space-y-2">
              <p class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.statusReportWorkspace.updateReportStatus.form.field.status.label']}
              </p>
              ${this.updateReportStatusStatus
                ? html`
                    <span
                      class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#075985)]"
                    >
                      ${this.updateReportStatusStatus}
                    </span>
                  `
                : html`
                    <span
                      class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]"
                    >
                      —
                    </span>
                  `}
            </div>

            <div class="flex flex-col gap-2">
              ${statusTransitions.map(
                (transition) => html`
                  <button
                    type="button"
                    class="inline-flex w-full items-center justify-center rounded-md px-3 py-2 text-sm font-medium border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-60 ${this
                      .updateReportStatusStatus === transition.value
                      ? 'ring-2 ring-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#1e3a8a)]'
                      : ''}"
                    ?disabled=${statusLoading || !reportId}
                    @click=${() => {
                      this.setUpdateReportStatusStatus(transition.value);
                      this.handleUpdateReportStatusClick();
                    }}
                  >
                    ${statusLoading && this.updateReportStatusStatus === transition.value
                      ? 'Updating…'
                      : transition.label}
                  </button>
                `,
              )}
            </div>

            <p class="text-xs text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus']}
            </p>

            ${this.updateReportStatusState === 'success'
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                    role="status"
                  >
                    <!-- TODO: action.updateReportStatus.success not in MessageType -->
                    Report status updated successfully.
                  </div>
                `
              : nothing}
            ${this.updateReportStatusState === 'error'
              ? html`
                  <div
                    class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                    role="alert"
                  >
                    ${this.updateReportStatusError ||
                    '<!-- TODO: action.updateReportStatus.error not in MessageType --> Failed to update report status.'}
                  </div>
                `
              : nothing}
          </aside>
        </section>
      </div>
    `;
  }
}
