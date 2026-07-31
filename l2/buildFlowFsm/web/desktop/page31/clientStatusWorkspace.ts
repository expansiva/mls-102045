/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/clientStatusWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientStatusWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--client-status-workspace-102045')
export class BuildFlowFsmDesktopPage31ClientStatusWorkspacePage extends BuildFlowFsmClientStatusWorkspaceBase {
  render() {
    const report = this.viewStatusReportData;
    const isLoading = this.viewStatusReportState === 'loading';
    const isError = this.viewStatusReportState === 'error';
    const isSuccess = this.viewStatusReportState === 'success';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.clientStatusWorkspace.sec-status-report-detail.title']}
          </h1>
        </header>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
            ${this.msg['organism.clientStatusWorkspace.viewStatusReport.title']}
          </h2>

          <div class="grid gap-4 md:grid-cols-2">
            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label']}
              </span>
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="text"
                .value=${this.viewStatusReportClientId ?? ''}
                @change=${this.handleViewStatusReportClientIdChange}
              />
            </label>

            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label']}
              </span>
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="text"
                .value=${this.viewStatusReportStatusReportId ?? ''}
                @change=${this.handleViewStatusReportStatusReportIdChange}
              />
            </label>
          </div>

          <div class="flex items-center gap-3">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60 disabled:cursor-not-allowed"
              ?disabled=${isLoading}
              @click=${this.handleViewStatusReportClick}
            >
              ${isLoading
                ? html`<span>${this.msg['organism.clientStatusWorkspace.viewStatusReport.title']}…</span>`
                : this.msg['organism.clientStatusWorkspace.viewStatusReport.title']}
            </button>
          </div>

          ${isError
            ? html`
                <div
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                  role="alert"
                >
                  ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.empty']}
                </div>
              `
            : nothing}

          ${isSuccess && !report
            ? html`
                <div
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-neutral-bg,#f1f5f9)] px-3 py-2 text-sm text-[var(--status-neutral-text,#334155)]"
                >
                  ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.empty']}
                </div>
              `
            : nothing}
        </section>

        ${isLoading
          ? html`
              <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-3 animate-pulse">
                <div class="h-4 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                <div class="h-4 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                <div class="h-24 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
              </div>
            `
          : report
            ? html`
                <div class="grid gap-6 lg:grid-cols-3">
                  <section class="lg:col-span-2 space-y-6">
                    <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
                      <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                        ${this.msg['section.clientStatusWorkspace.sec-report-header.title']}
                      </h2>
                      <dl class="grid gap-3 sm:grid-cols-2 text-sm">
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label']}
                          </dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">
                            ${report.projectName ?? ''}
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label']}
                          </dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">
                            ${report.projectId ?? ''}
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label']}
                          </dt>
                          <dd>
                            <span
                              class="inline-flex rounded-md px-2 py-0.5 text-xs font-medium bg-[var(--status-info-bg,#eff6ff)] text-[var(--status-info-text,#1e40af)]"
                            >
                              ${report.status ?? ''}
                            </span>
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label']}
                          </dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">
                            ${report.statusReportId ?? ''}
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label']}
                          </dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">
                            ${report.reportPeriodStart ?? ''}
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label']}
                          </dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">
                            ${report.reportPeriodEnd ?? ''}
                          </dd>
                        </div>
                      </dl>
                    </div>

                    <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
                      <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                        ${this.msg['section.clientStatusWorkspace.sec-report-body.title']}
                      </h2>
                      <div class="space-y-4 text-sm">
                        <div>
                          <h3 class="text-[var(--text-muted,#64748b)] mb-1">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label']}
                          </h3>
                          <p class="text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
                            ${report.summary ?? ''}
                          </p>
                        </div>
                        <div>
                          <h3 class="text-[var(--text-muted,#64748b)] mb-1">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label']}
                          </h3>
                          <p class="text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
                            ${report.tasksOverview ?? ''}
                          </p>
                        </div>
                        <div>
                          <h3 class="text-[var(--text-muted,#64748b)] mb-1">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label']}
                          </h3>
                          <p class="text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
                            ${report.timeLogsOverview ?? ''}
                          </p>
                        </div>
                        <div>
                          <h3 class="text-[var(--text-muted,#64748b)] mb-1">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label']}
                          </h3>
                          <p class="text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
                            ${report.materialsOverview ?? ''}
                          </p>
                        </div>
                        <div>
                          <h3 class="text-[var(--text-muted,#64748b)] mb-1">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label']}
                          </h3>
                          <p class="text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
                            ${report.delayRiskAssessment ?? ''}
                          </p>
                        </div>
                        <div>
                          <h3 class="text-[var(--text-muted,#64748b)] mb-1">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label']}
                          </h3>
                          <p class="text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
                            ${report.pmNotes ?? ''}
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  <aside class="space-y-6">
                    <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-4 shadow-sm space-y-3">
                      <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
                        ${this.msg['section.clientStatusWorkspace.sec-report-meta.title']}
                      </h2>
                      <dl class="space-y-3 text-sm">
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label']}
                          </dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">
                            ${report.generatedAt ?? ''}
                          </dd>
                        </div>
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label']}
                          </dt>
                          <dd class="font-medium text-[var(--text-default,#0f172a)]">
                            ${report.sharedAt ?? ''}
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </aside>
                </div>
              `
            : !isLoading && !isError
              ? html`
                  <div
                    class="rounded-lg border border-dashed border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-4 py-8 text-center text-sm text-[var(--text-muted,#64748b)]"
                  >
                    ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.empty']}
                  </div>
                `
              : nothing}
      </div>
    `;
  }
}
