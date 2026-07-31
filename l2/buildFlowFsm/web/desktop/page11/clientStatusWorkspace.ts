/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientStatusWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientStatusWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.js';
import type { ViewStatusReportOutput } from '/_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page11--client-status-workspace-102045')
export class BuildFlowFsmDesktopPage11ClientStatusWorkspacePage extends BuildFlowFsmClientStatusWorkspaceBase {
  render() {
    const report: ViewStatusReportOutput | null = this.viewStatusReportData;
    const isLoading = this.viewStatusReportState === 'loading';
    const isError = this.viewStatusReportState === 'error';
    const isSuccess = this.viewStatusReportState === 'success';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.clientStatusWorkspace.sec-status-report-detail.title']}
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <div class="flex flex-col gap-4 sm:flex-row sm:items-end">
              <label class="flex flex-col gap-1 min-w-0 flex-1">
                <span class="text-sm text-[var(--text-muted,#64748b)]">
                  ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label']}
                </span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.viewStatusReportClientId}
                  @input=${(e: Event) => this.handleViewStatusReportClientIdChange(e)}
                />
              </label>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${isLoading}
                @click=${() => this.handleViewStatusReportClick()}
              >
                ${isLoading
                  ? html`<span class="inline-flex items-center gap-2">
                      <span class="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                      ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.title']}
                    </span>`
                  : this.msg['intent.clientStatusWorkspace.viewStatusReport.list.title']}
              </button>
            </div>

            ${isSuccess
              ? html`
                  <div
                    class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]"
                    role="status"
                  >
                    <span>${this.msg['organism.clientStatusWorkspace.viewStatusReport.title']}</span>
                    <button
                      type="button"
                      class="text-sm underline"
                      @click=${() => this.handleViewStatusReportClick()}
                    >
                      ×
                    </button>
                  </div>
                `
              : nothing}
            ${isError
              ? html`
                  <div
                    class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]"
                    role="alert"
                  >
                    <span>${this.status || this.msg['intent.clientStatusWorkspace.viewStatusReport.list.empty']}</span>
                    <button
                      type="button"
                      class="text-sm underline"
                      @click=${() => this.handleViewStatusReportClick()}
                    >
                      ×
                    </button>
                  </div>
                `
              : nothing}
          </section>

          ${isLoading
            ? html`
                <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-3">
                  <div class="h-5 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-4 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-4 w-5/6 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-4 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                </section>
              `
            : !report
              ? html`
                  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6">
                    <p class="text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.empty']}
                    </p>
                  </section>
                `
              : html`
                  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
                    <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                      ${this.msg['organism.clientStatusWorkspace.viewStatusReport.title']}
                    </h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div class="space-y-1">
                        <div class="text-sm text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label']}
                        </div>
                        <div class="font-medium text-[var(--text-default,#0f172a)]">${report.projectName}</div>
                      </div>
                      <div class="space-y-1">
                        <div class="text-sm text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label']}
                        </div>
                        <div>
                          <span class="inline-flex rounded-md px-2 py-1 text-sm bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#075985)]">
                            ${report.status}
                          </span>
                        </div>
                      </div>
                      <div class="space-y-1">
                        <div class="text-sm text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label']}
                        </div>
                        <div class="text-[var(--text-default,#0f172a)]">${report.projectId}</div>
                      </div>
                      <div class="space-y-1">
                        <div class="text-sm text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label']}
                        </div>
                        <div class="text-[var(--text-default,#0f172a)]">${report.statusReportId}</div>
                      </div>
                      <div class="space-y-1">
                        <div class="text-sm text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label']}
                        </div>
                        <div class="text-[var(--text-default,#0f172a)]">${report.reportPeriodStart}</div>
                      </div>
                      <div class="space-y-1">
                        <div class="text-sm text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label']}
                        </div>
                        <div class="text-[var(--text-default,#0f172a)]">${report.reportPeriodEnd}</div>
                      </div>
                      <div class="space-y-1">
                        <div class="text-sm text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label']}
                        </div>
                        <div class="text-[var(--text-default,#0f172a)]">${report.generatedAt}</div>
                      </div>
                      <div class="space-y-1">
                        <div class="text-sm text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label']}
                        </div>
                        <div class="text-[var(--text-default,#0f172a)]">${report.sharedAt}</div>
                      </div>
                    </div>
                  </section>

                  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-3">
                    <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
                      ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label']}
                    </h2>
                    <p class="whitespace-pre-wrap leading-relaxed text-[var(--text-default,#0f172a)]">
                      ${report.summary}
                    </p>
                  </section>

                  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-3 space-y-2">
                        <h3 class="text-sm font-semibold text-[var(--text-strong,#0f172a)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label']}
                        </h3>
                        <p class="text-sm whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${report.tasksOverview}</p>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-3 space-y-2">
                        <h3 class="text-sm font-semibold text-[var(--text-strong,#0f172a)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label']}
                        </h3>
                        <p class="text-sm whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${report.timeLogsOverview}</p>
                      </div>
                      <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-3 space-y-2">
                        <h3 class="text-sm font-semibold text-[var(--text-strong,#0f172a)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label']}
                        </h3>
                        <p class="text-sm whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${report.materialsOverview}</p>
                      </div>
                    </div>
                  </section>

                  <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="space-y-2">
                        <h3 class="text-sm font-semibold text-[var(--text-strong,#0f172a)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label']}
                        </h3>
                        <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-warning-bg,#fef3c7)] p-3 text-[var(--status-warning-text,#92400e)] whitespace-pre-wrap">
                          ${report.delayRiskAssessment}
                        </div>
                      </div>
                      <div class="space-y-2">
                        <h3 class="text-sm font-semibold text-[var(--text-strong,#0f172a)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label']}
                        </h3>
                        <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-3 text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
                          ${report.pmNotes}
                        </div>
                      </div>
                    </div>
                  </section>
                `}
        </div>
      </div>
    `;
  }
}
