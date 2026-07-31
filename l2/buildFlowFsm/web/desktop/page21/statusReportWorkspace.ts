/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/statusReportWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmStatusReportWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.js';
import type {
  GenerateReportOutput,
  UpdateReportContentOutput,
  UpdateReportStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page21--status-report-workspace-102045')
export class BuildFlowFsmDesktopPage21StatusReportWorkspacePage extends BuildFlowFsmStatusReportWorkspaceBase {
  render() {
    const generated = this.generateReportOutput;
    const contentOut = this.updateReportContentOutput;
    const statusOut = this.updateReportStatusOutput;

    const report: GenerateReportOutput | UpdateReportContentOutput | UpdateReportStatusOutput | null =
      statusOut ?? contentOut ?? generated;

    const reportRecord = report as Record<string, unknown> | null;
    const currentStatusRaw =
      (typeof reportRecord?.['status'] === 'string' ? reportRecord['status'] : '') ||
      this.updateReportStatusStatus ||
      '';
    const currentStatus = currentStatusRaw.toLowerCase();

    const periodStart =
      (typeof reportRecord?.['reportPeriodStart'] === 'string'
        ? (reportRecord['reportPeriodStart'] as string)
        : '') || this.generateReportReportPeriodStart;
    const periodEnd =
      (typeof reportRecord?.['reportPeriodEnd'] === 'string'
        ? (reportRecord['reportPeriodEnd'] as string)
        : '') || this.generateReportReportPeriodEnd;
    const generatedAt =
      typeof reportRecord?.['generatedAt'] === 'string'
        ? (reportRecord['generatedAt'] as string)
        : '';

    const hasReport = Boolean(
      report ||
        this.updateReportContentStatusReportId ||
        this.updateReportStatusStatusReportId,
    );

    const generateLoading = this.generateReportState === 'loading';
    const contentLoading = this.updateReportContentState === 'loading';
    const statusLoading = this.updateReportStatusState === 'loading';

    const allowedTransitions: { next: string; label: string }[] = [];
    if (currentStatus === 'draft') {
      allowedTransitions.push({ next: 'reviewed', label: 'Mark Reviewed' /* TODO: i18n key */ });
    } else if (currentStatus === 'reviewed') {
      allowedTransitions.push({ next: 'shared', label: 'Share with Client' /* TODO: i18n key */ });
    }

    const statusBadgeClass =
      currentStatus === 'shared'
        ? 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]'
        : currentStatus === 'reviewed'
          ? 'bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#075985)]'
          : 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.statusReportWorkspace.sec-generate.title']}
          </h1>
        </header>

        <!-- 1. Report generation panel -->
        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4"
          aria-labelledby="sec-generate-title"
        >
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h2 id="sec-generate-title" class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['organism.statusReportWorkspace.generateReport.title']}
              </h2>
              <p class="text-sm text-[var(--text-muted,#64748b)] mt-1">
                ${this.msg['intent.statusReportWorkspace.generateReport.form.title']}
              </p>
            </div>
          </div>

          <div class="grid gap-4 md:grid-cols-2 max-w-3xl">
            <label class="flex flex-col gap-1.5 text-sm">
              <span class="font-medium text-[var(--text-default,#0f172a)]">
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
            <label class="flex flex-col gap-1.5 text-sm">
              <span class="font-medium text-[var(--text-default,#0f172a)]">
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
              class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60 disabled:cursor-not-allowed"
              ?disabled=${generateLoading || !this.generateReportReportPeriodStart || !this.generateReportReportPeriodEnd}
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
                  Report generated successfully.
                </div>
              `
            : nothing}
          ${this.generateReportState === 'error'
            ? html`
                <div
                  class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                  role="alert"
                >
                  ${this.generateReportError || 'Failed to generate report.'}
                </div>
              `
            : nothing}
        </section>

        <!-- 2–4. Review detail, editable content, lifecycle transitions -->
        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-5"
          aria-labelledby="sec-review-title"
        >
          <div class="flex flex-wrap items-start justify-between gap-3">
            <div class="space-y-1 min-w-0">
              <h2 id="sec-review-title" class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['section.statusReportWorkspace.sec-review-share.title']}
              </h2>
              <p class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['organism.statusReportWorkspace.updateReportStatus.title']}
              </p>
            </div>

            ${hasReport && currentStatus
              ? html`
                  <span
                    class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusBadgeClass}"
                  >
                    ${currentStatus}
                  </span>
                `
              : nothing}
          </div>

          ${hasReport
            ? html`
                <div
                  class="grid gap-3 sm:grid-cols-3 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] border border-[var(--border-subtle,#e2e8f0)] p-3 text-sm"
                >
                  <div>
                    <div class="text-[var(--text-muted,#64748b)] text-xs uppercase tracking-wide">
                      ${this.msg['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label']}
                    </div>
                    <div class="font-medium text-[var(--text-default,#0f172a)] mt-0.5">
                      ${periodStart || '—'}
                    </div>
                  </div>
                  <div>
                    <div class="text-[var(--text-muted,#64748b)] text-xs uppercase tracking-wide">
                      ${this.msg['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label']}
                    </div>
                    <div class="font-medium text-[var(--text-default,#0f172a)] mt-0.5">
                      ${periodEnd || '—'}
                    </div>
                  </div>
                  <div>
                    <div class="text-[var(--text-muted,#64748b)] text-xs uppercase tracking-wide">
                      Generated at
                    </div>
                    <div class="font-medium text-[var(--text-default,#0f172a)] mt-0.5">
                      ${generatedAt || '—'}
                    </div>
                  </div>
                </div>

                <!-- Contextual lifecycle transitions (never a free status select) -->
                <div class="flex flex-wrap items-center gap-2">
                  <span class="text-sm font-medium text-[var(--text-default,#0f172a)] mr-1">
                    ${this.msg['intent.statusReportWorkspace.updateReportStatus.form.title']}
                  </span>
                  ${allowedTransitions.length > 0
                    ? allowedTransitions.map(
                        (t) => html`
                          <button
                            type="button"
                            class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60 disabled:cursor-not-allowed"
                            ?disabled=${statusLoading}
                            @click=${() => {
                              this.setUpdateReportStatusStatus(t.next);
                              this.handleUpdateReportStatusClick();
                            }}
                          >
                            ${statusLoading ? 'Updating…' : t.label}
                          </button>
                        `,
                      )
                    : html`
                        <span class="text-sm text-[var(--text-muted,#64748b)]">
                          ${currentStatus === 'shared'
                            ? 'Report is shared with the client.'
                            : 'No further transitions available.'}
                        </span>
                      `}
                </div>

                ${this.updateReportStatusState === 'success'
                  ? html`
                      <div
                        class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                        role="status"
                      >
                        Report status updated.
                      </div>
                    `
                  : nothing}
                ${this.updateReportStatusState === 'error'
                  ? html`
                      <div
                        class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                        role="alert"
                      >
                        ${this.updateReportStatusError || 'Failed to update report status.'}
                      </div>
                    `
                  : nothing}

                <!-- Editable content sections -->
                <div class="border-t border-[var(--border-subtle,#e2e8f0)] pt-5 space-y-4">
                  <div>
                    <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">
                      ${this.msg['organism.statusReportWorkspace.updateReportContent.title']}
                    </h3>
                    <p class="text-sm text-[var(--text-muted,#64748b)] mt-1">
                      ${this.msg['intent.statusReportWorkspace.updateReportContent.form.title']}
                    </p>
                  </div>

                  <div class="grid gap-4">
                    <label class="flex flex-col gap-1.5 text-sm">
                      <span class="font-medium text-[var(--text-default,#0f172a)]">
                        ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.summary.label']}
                      </span>
                      <textarea
                        rows="4"
                        class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)] resize-y min-h-[6rem]"
                        .value=${this.updateReportContentSummary}
                        ?disabled=${contentLoading}
                        @change=${this.handleUpdateReportContentSummaryChange}
                      ></textarea>
                    </label>

                    <label class="flex flex-col gap-1.5 text-sm">
                      <span class="font-medium text-[var(--text-default,#0f172a)]">
                        ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label']}
                      </span>
                      <textarea
                        rows="4"
                        class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)] resize-y min-h-[6rem]"
                        .value=${this.updateReportContentTasksOverview}
                        ?disabled=${contentLoading}
                        @change=${this.handleUpdateReportContentTasksOverviewChange}
                      ></textarea>
                    </label>

                    <label class="flex flex-col gap-1.5 text-sm">
                      <span class="font-medium text-[var(--text-default,#0f172a)]">
                        ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label']}
                      </span>
                      <textarea
                        rows="4"
                        class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)] resize-y min-h-[6rem]"
                        .value=${this.updateReportContentTimeLogsOverview}
                        ?disabled=${contentLoading}
                        @change=${this.handleUpdateReportContentTimeLogsOverviewChange}
                      ></textarea>
                    </label>

                    <label class="flex flex-col gap-1.5 text-sm">
                      <span class="font-medium text-[var(--text-default,#0f172a)]">
                        ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label']}
                      </span>
                      <textarea
                        rows="4"
                        class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)] resize-y min-h-[6rem]"
                        .value=${this.updateReportContentMaterialsOverview}
                        ?disabled=${contentLoading}
                        @change=${this.handleUpdateReportContentMaterialsOverviewChange}
                      ></textarea>
                    </label>

                    <label class="flex flex-col gap-1.5 text-sm">
                      <span class="font-medium text-[var(--text-default,#0f172a)]">
                        ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label']}
                      </span>
                      <textarea
                        rows="4"
                        class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)] resize-y min-h-[6rem]"
                        .value=${this.updateReportContentDelayRiskAssessment}
                        ?disabled=${contentLoading}
                        @change=${this.handleUpdateReportContentDelayRiskAssessmentChange}
                      ></textarea>
                    </label>

                    <label class="flex flex-col gap-1.5 text-sm">
                      <span class="font-medium text-[var(--text-default,#0f172a)]">
                        ${this.msg['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label']}
                      </span>
                      <textarea
                        rows="4"
                        class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)] resize-y min-h-[6rem]"
                        .value=${this.updateReportContentPmNotes}
                        ?disabled=${contentLoading}
                        @change=${this.handleUpdateReportContentPmNotesChange}
                      ></textarea>
                    </label>
                  </div>

                  <div class="flex flex-wrap items-center gap-3 sticky bottom-0 py-3 bg-[var(--surface-bg,#ffffff)] border-t border-[var(--border-subtle,#e2e8f0)]">
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60 disabled:cursor-not-allowed"
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
                          Report content saved.
                        </div>
                      `
                    : nothing}
                  ${this.updateReportContentState === 'error'
                    ? html`
                        <div
                          class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                          role="alert"
                        >
                          ${this.updateReportContentError || 'Failed to save report content.'}
                        </div>
                      `
                    : nothing}
                </div>
              `
            : html`
                <div
                  class="rounded-md border border-dashed border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-8 text-center text-sm text-[var(--text-muted,#64748b)]"
                >
                  Generate a report for a period to review AI-produced sections and advance its lifecycle.
                </div>
              `}
        </section>
      </div>
    `;
  }
}
