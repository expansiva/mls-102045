/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientStatusWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientStatusWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.js';
import type { ViewStatusReportOutput } from '/_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page21--client-status-workspace-102045')
export class BuildFlowFsmDesktopPage21ClientStatusWorkspacePage extends BuildFlowFsmClientStatusWorkspaceBase {
  render() {
    const report: ViewStatusReportOutput | null = this.viewStatusReportData;
    const isLoading = this.viewStatusReportState === 'loading';
    const isError = this.viewStatusReportState === 'error';
    const hasReport = report !== null && report !== undefined;

    const formatValue = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
        return String(value);
      }
      try {
        return JSON.stringify(value, null, 2);
      } catch {
        return String(value);
      }
    };

    const formatDate = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      const raw = String(value);
      const d = new Date(raw);
      if (!Number.isNaN(d.getTime())) {
        return d.toLocaleDateString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        });
      }
      return raw;
    };

    const formatDateTime = (value: unknown): string => {
      if (value === null || value === undefined || value === '') return '—';
      const raw = String(value);
      const d = new Date(raw);
      if (!Number.isNaN(d.getTime())) {
        return d.toLocaleString(undefined, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
      }
      return raw;
    };

    const statusBadgeClass = (status: unknown): string => {
      const s = String(status ?? '').toLowerCase();
      if (s.includes('share') || s.includes('success') || s.includes('complete') || s.includes('done')) {
        return 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]';
      }
      if (s.includes('warn') || s.includes('risk') || s.includes('delay') || s.includes('pending')) {
        return 'bg-[var(--status-warning-bg,#fef9c3)] text-[var(--status-warning-text,#854d0e)]';
      }
      if (s.includes('error') || s.includes('fail') || s.includes('block')) {
        return 'bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]';
      }
      if (s.includes('draft') || s.includes('idle') || s.includes('neutral')) {
        return 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]';
      }
      return 'bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#075985)]';
    };

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 md:p-8">
        <div class="mx-auto max-w-5xl space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['organism.clientStatusWorkspace.viewStatusReport.title']}
            </h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['section.clientStatusWorkspace.sec-report-header.title']}
            </p>
          </header>

          ${isLoading
            ? html`
                <div
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-4"
                  aria-busy="true"
                >
                  <div class="h-6 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-4 w-1/2 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
                    <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                    <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  </div>
                  <div class="h-24 rounded bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                </div>
              `
            : nothing}

          ${!isLoading && isError
            ? html`
                <div
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-4 py-3 text-sm"
                  role="alert"
                >
                  ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.empty']}
                </div>
              `
            : nothing}

          ${!isLoading && !isError && !hasReport
            ? html`
                <div
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-6 py-10 text-center text-[var(--text-muted,#64748b)]"
                >
                  ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.empty']}
                </div>
              `
            : nothing}

          ${!isLoading && hasReport && report
            ? html`
                <section
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))] overflow-hidden"
                  aria-label=${this.msg['section.clientStatusWorkspace.sec-report-header.title']}
                >
                  <div class="px-6 py-5 border-b border-[var(--border-subtle,#f1f5f9)] bg-[var(--surface-alt-bg,#f8fafc)]">
                    <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div class="space-y-2 min-w-0">
                        <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label']}
                        </p>
                        <h2 class="text-xl md:text-2xl font-semibold text-[var(--text-strong,#020617)] break-words">
                          ${formatValue(report.projectName)}
                        </h2>
                        <div class="flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted,#64748b)]">
                          <span>
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label']}:
                            <span class="text-[var(--text-default,#0f172a)] font-medium">${formatDate(report.reportPeriodStart)}</span>
                          </span>
                          <span aria-hidden="true">·</span>
                          <span>
                            ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label']}:
                            <span class="text-[var(--text-default,#0f172a)] font-medium">${formatDate(report.reportPeriodEnd)}</span>
                          </span>
                        </div>
                      </div>
                      <div class="flex flex-col items-start md:items-end gap-2 shrink-0">
                        <span
                          class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${statusBadgeClass(report.status)}"
                        >
                          ${formatValue(report.status)}
                        </span>
                        <p class="text-xs text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label']}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="px-6 py-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm border-b border-[var(--border-subtle,#f1f5f9)]">
                    <div>
                      <p class="text-xs text-[var(--text-muted,#64748b)] mb-0.5">
                        ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label']}
                      </p>
                      <p class="font-medium text-[var(--text-default,#0f172a)]">${formatDateTime(report.generatedAt)}</p>
                    </div>
                    <div>
                      <p class="text-xs text-[var(--text-muted,#64748b)] mb-0.5">
                        ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label']}
                      </p>
                      <p class="font-medium text-[var(--text-default,#0f172a)]">${formatDateTime(report.sharedAt)}</p>
                    </div>
                  </div>
                </section>

                <section
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]"
                  aria-label=${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label']}
                >
                  <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-3">
                    ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label']}
                  </h3>
                  <div class="prose-sm max-w-none text-[var(--text-default,#0f172a)] whitespace-pre-wrap leading-relaxed">
                    ${formatValue(report.summary)}
                  </div>
                </section>

                <section
                  class="space-y-4"
                  aria-label=${this.msg['section.clientStatusWorkspace.sec-report-body.title']}
                >
                  <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                    ${this.msg['section.clientStatusWorkspace.sec-report-body.title']}
                  </h2>

                  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <article
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]"
                    >
                      <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)] mb-3 flex items-center gap-2">
                        <span
                          class="inline-block h-2 w-2 rounded-full bg-[var(--chart-series-1,#3b82f6)]"
                          aria-hidden="true"
                        ></span>
                        ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label']}
                      </h3>
                      <div class="text-sm text-[var(--text-default,#0f172a)] whitespace-pre-wrap leading-relaxed">
                        ${formatValue(report.tasksOverview)}
                      </div>
                    </article>

                    <article
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]"
                    >
                      <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)] mb-3 flex items-center gap-2">
                        <span
                          class="inline-block h-2 w-2 rounded-full bg-[var(--chart-series-2,#10b981)]"
                          aria-hidden="true"
                        ></span>
                        ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label']}
                      </h3>
                      <div class="text-sm text-[var(--text-default,#0f172a)] whitespace-pre-wrap leading-relaxed">
                        ${formatValue(report.timeLogsOverview)}
                      </div>
                    </article>

                    <article
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]"
                    >
                      <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)] mb-3 flex items-center gap-2">
                        <span
                          class="inline-block h-2 w-2 rounded-full bg-[var(--chart-series-3,#f59e0b)]"
                          aria-hidden="true"
                        ></span>
                        ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label']}
                      </h3>
                      <div class="text-sm text-[var(--text-default,#0f172a)] whitespace-pre-wrap leading-relaxed">
                        ${formatValue(report.materialsOverview)}
                      </div>
                    </article>
                  </div>
                </section>

                <section
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-warning-bg,#fef9c3)] p-6 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]"
                  aria-label=${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label']}
                >
                  <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--status-warning-text,#854d0e)] mb-3">
                    ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label']}
                  </h3>
                  <div class="text-sm text-[var(--status-warning-text,#854d0e)] whitespace-pre-wrap leading-relaxed">
                    ${formatValue(report.delayRiskAssessment)}
                  </div>
                </section>

                <section
                  class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]"
                  aria-label=${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label']}
                >
                  <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-3">
                    ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label']}
                  </h3>
                  <div class="text-sm text-[var(--text-default,#0f172a)] whitespace-pre-wrap leading-relaxed">
                    ${formatValue(report.pmNotes)}
                  </div>
                </section>

                <footer
                  class="rounded-lg border border-[var(--border-subtle,#f1f5f9)] bg-[var(--surface-alt-bg,#f8fafc)] px-5 py-4 text-xs text-[var(--text-muted,#64748b)] flex flex-wrap gap-x-6 gap-y-2"
                  aria-label=${this.msg['section.clientStatusWorkspace.sec-report-meta.title']}
                >
                  <span>
                    ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label']}:
                    <span class="text-[var(--text-default,#0f172a)]">${formatValue(report.statusReportId)}</span>
                  </span>
                  <span>
                    ${this.msg['intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label']}:
                    <span class="text-[var(--text-default,#0f172a)]">${formatValue(report.projectId)}</span>
                  </span>
                </footer>
              `
            : nothing}
        </div>
      </div>
    `;
  }
}
