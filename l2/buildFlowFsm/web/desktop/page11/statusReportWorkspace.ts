/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/statusReportWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmStatusReportWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page11--status-report-workspace-102045')
export class BuildFlowFsmDesktopPage11StatusReportWorkspacePage extends BuildFlowFsmStatusReportWorkspaceBase {
  render() {
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.statusReportWorkspace.sec-generate.title']}
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['organism.statusReportWorkspace.generateReport.title']}
            </h2>

            <div class="space-y-4">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label']}
                  </span>
                  <input
                    type="date"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.generateReportReportPeriodStart}
                    @change=${(e: Event) => this.handleGenerateReportReportPeriodStartChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label']}
                  </span>
                  <input
                    type="date"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.generateReportReportPeriodEnd}
                    @change=${(e: Event) => this.handleGenerateReportReportPeriodEndChange(e)}
                  />
                </label>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.generateReportState === 'loading'}
                  @click=${() => this.handleGenerateReportClick()}
                >
                  ${this.generateReportState === 'loading'
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                    : nothing}
                  <span>${this.msg['intent.statusReportWorkspace.generateReport.form.action.generateReport']}</span>
                </button>
              </div>

              ${this.generateReportState === 'success'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                      role="status"
                    >
                      <!-- TODO: action.generateReport.success not in MessageType -->
                      Report generated successfully.
                    </div>
                  `
                : nothing}
              ${this.generateReportState === 'error'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                      role="alert"
                    >
                      ${this.generateReportError
                        ? this.generateReportError
                        : html`<!-- TODO: action.generateReport.error not in MessageType -->Failed to generate report.`}
                    </div>
                  `
                : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-6">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.statusReportWorkspace.sec-review-share.title']}
            </h2>

            <div class="space-y-4 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
              <h3 class="text-base font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['organism.statusReportWorkspace.updateReportContent.title']}
              </h3>

              <div class="space-y-4">
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.summary.label']}
                  </span>
                  <textarea
                    rows="3"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.updateReportContentSummary}
                    @change=${(e: Event) => this.handleUpdateReportContentSummaryChange(e)}
                  ></textarea>
                </label>

                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label']}
                  </span>
                  <textarea
                    rows="3"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.updateReportContentTasksOverview}
                    @change=${(e: Event) => this.handleUpdateReportContentTasksOverviewChange(e)}
                  ></textarea>
                </label>

                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label']}
                  </span>
                  <textarea
                    rows="3"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.updateReportContentTimeLogsOverview}
                    @change=${(e: Event) => this.handleUpdateReportContentTimeLogsOverviewChange(e)}
                  ></textarea>
                </label>

                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label']}
                  </span>
                  <textarea
                    rows="3"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.updateReportContentMaterialsOverview}
                    @change=${(e: Event) => this.handleUpdateReportContentMaterialsOverviewChange(e)}
                  ></textarea>
                </label>

                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label']}
                  </span>
                  <textarea
                    rows="3"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.updateReportContentDelayRiskAssessment}
                    @change=${(e: Event) => this.handleUpdateReportContentDelayRiskAssessmentChange(e)}
                  ></textarea>
                </label>

                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label']}
                  </span>
                  <textarea
                    rows="3"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.updateReportContentPmNotes}
                    @change=${(e: Event) => this.handleUpdateReportContentPmNotesChange(e)}
                  ></textarea>
                </label>

                <div class="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                    ?disabled=${this.updateReportContentState === 'loading'}
                    @click=${() => this.handleUpdateReportContentClick()}
                  >
                    ${this.updateReportContentState === 'loading'
                      ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                      : nothing}
                    <span>${this.msg['intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent']}</span>
                  </button>
                </div>

                ${this.updateReportContentState === 'success'
                  ? html`
                      <div
                        class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
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
                        class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                        role="alert"
                      >
                        ${this.updateReportContentError
                          ? this.updateReportContentError
                          : html`<!-- TODO: action.updateReportContent.error not in MessageType -->Failed to update report content.`}
                      </div>
                    `
                  : nothing}
              </div>
            </div>

            <div class="space-y-4 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4">
              <h3 class="text-base font-medium text-[var(--text-strong,#0f172a)]">
                ${this.msg['organism.statusReportWorkspace.updateReportStatus.title']}
              </h3>

              <div class="space-y-4">
                <label class="block space-y-1 max-w-md">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.statusReportWorkspace.updateReportStatus.form.field.status.label']}
                  </span>
                  <input
                    type="text"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.updateReportStatusStatus}
                    @change=${(e: Event) => this.handleUpdateReportStatusStatusChange(e)}
                  />
                </label>

                <div class="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                    ?disabled=${this.updateReportStatusState === 'loading'}
                    @click=${() => this.handleUpdateReportStatusClick()}
                  >
                    ${this.updateReportStatusState === 'loading'
                      ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                      : nothing}
                    <span>${this.msg['intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus']}</span>
                  </button>
                </div>

                ${this.updateReportStatusState === 'success'
                  ? html`
                      <div
                        class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
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
                        class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                        role="alert"
                      >
                        ${this.updateReportStatusError
                          ? this.updateReportStatusError
                          : html`<!-- TODO: action.updateReportStatus.error not in MessageType -->Failed to update report status.`}
                      </div>
                    `
                  : nothing}
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
