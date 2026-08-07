/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/statusReportWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmStatusReportWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'page.title': 'Status Reports',
  'page.subtitle': 'Generate AI-assisted status reports, review delay-risk suggestions, and share with clients.',
  'generate.section': s_en['section.statusReportWorkspace.sec-generate.title'],
  'generate.project.label': 'Selected project',
  'generate.project.empty': 'Select a project to generate a status report.',
  'generate.project.value': 'Project',
  'generate.periodStart': s_en['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label'],
  'generate.periodEnd': s_en['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label'],
  'generate.action': s_en['intent.statusReportWorkspace.generateReport.form.action.generateReport'],
  'generate.loading': 'Generating report…',
  'generate.success': s_en['action.generateReport.success'],
  'generate.error': s_en['action.generateReport.error'],
  'generate.dismiss': 'Dismiss',
  'generate.output': 'Generated report ready',
  'review.section': s_en['section.statusReportWorkspace.sec-review-edit.title'],
  'review.report.label': 'Report in focus',
  'review.report.empty': 'Open a status report to review and edit its content.',
  'review.summary': s_en['intent.statusReportWorkspace.updateReportContent.form.field.summary.label'],
  'review.tasks': s_en['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label'],
  'review.timeLogs': s_en['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label'],
  'review.materials': s_en['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label'],
  'review.delayRisk': s_en['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label'],
  'review.pmNotes': s_en['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label'],
  'review.action': s_en['intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent'],
  'review.loading': 'Saving content…',
  'review.success': s_en['action.updateReportContent.success'],
  'review.error': s_en['action.updateReportContent.error'],
  'review.dismiss': 'Dismiss',
  'status.section': 'Share & status',
  'status.field': s_en['intent.statusReportWorkspace.updateReportStatus.form.field.status.label'],
  'status.action': s_en['intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus'],
  'status.loading': 'Updating status…',
  'status.success': s_en['action.updateReportStatus.success'],
  'status.error': s_en['action.updateReportStatus.error'],
  'status.dismiss': 'Dismiss',
  'status.hint': 'Set the report status when you are ready to share it with the client.',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'page.title': 'Relatórios de status',
  'page.subtitle': 'Gere relatórios de status com apoio de IA, revise riscos de atraso e compartilhe com clientes.',
  'generate.section': s_pt_br['section.statusReportWorkspace.sec-generate.title'],
  'generate.project.label': 'Projeto selecionado',
  'generate.project.empty': 'Selecione um projeto para gerar um relatório de status.',
  'generate.project.value': 'Projeto',
  'generate.periodStart': s_pt_br['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label'],
  'generate.periodEnd': s_pt_br['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label'],
  'generate.action': s_pt_br['intent.statusReportWorkspace.generateReport.form.action.generateReport'],
  'generate.loading': 'Gerando relatório…',
  'generate.success': s_pt_br['action.generateReport.success'],
  'generate.error': s_pt_br['action.generateReport.error'],
  'generate.dismiss': 'Dispensar',
  'generate.output': 'Relatório gerado pronto',
  'review.section': s_pt_br['section.statusReportWorkspace.sec-review-edit.title'],
  'review.report.label': 'Relatório em foco',
  'review.report.empty': 'Abra um relatório de status para revisar e editar o conteúdo.',
  'review.summary': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.summary.label'],
  'review.tasks': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label'],
  'review.timeLogs': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label'],
  'review.materials': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label'],
  'review.delayRisk': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label'],
  'review.pmNotes': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label'],
  'review.action': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent'],
  'review.loading': 'Salvando conteúdo…',
  'review.success': s_pt_br['action.updateReportContent.success'],
  'review.error': s_pt_br['action.updateReportContent.error'],
  'review.dismiss': 'Dispensar',
  'status.section': 'Compartilhar e status',
  'status.field': s_pt_br['intent.statusReportWorkspace.updateReportStatus.form.field.status.label'],
  'status.action': s_pt_br['intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus'],
  'status.loading': 'Atualizando status…',
  'status.success': s_pt_br['action.updateReportStatus.success'],
  'status.error': s_pt_br['action.updateReportStatus.error'],
  'status.dismiss': 'Dispensar',
  'status.hint': 'Defina o status do relatório quando estiver pronto para compartilhar com o cliente.',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'page.title': 'Informes de estado',
  'page.subtitle': 'Genere informes de estado con IA, revise riesgos de retraso y compártalos con clientes.',
  'generate.section': s_es['section.statusReportWorkspace.sec-generate.title'],
  'generate.project.label': 'Proyecto seleccionado',
  'generate.project.empty': 'Seleccione un proyecto para generar un informe de estado.',
  'generate.project.value': 'Proyecto',
  'generate.periodStart': s_es['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label'],
  'generate.periodEnd': s_es['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label'],
  'generate.action': s_es['intent.statusReportWorkspace.generateReport.form.action.generateReport'],
  'generate.loading': 'Generando informe…',
  'generate.success': s_es['action.generateReport.success'],
  'generate.error': s_es['action.generateReport.error'],
  'generate.dismiss': 'Descartar',
  'generate.output': 'Informe generado listo',
  'review.section': s_es['section.statusReportWorkspace.sec-review-edit.title'],
  'review.report.label': 'Informe en foco',
  'review.report.empty': 'Abra un informe de estado para revisar y editar su contenido.',
  'review.summary': s_es['intent.statusReportWorkspace.updateReportContent.form.field.summary.label'],
  'review.tasks': s_es['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label'],
  'review.timeLogs': s_es['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label'],
  'review.materials': s_es['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label'],
  'review.delayRisk': s_es['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label'],
  'review.pmNotes': s_es['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label'],
  'review.action': s_es['intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent'],
  'review.loading': 'Guardando contenido…',
  'review.success': s_es['action.updateReportContent.success'],
  'review.error': s_es['action.updateReportContent.error'],
  'review.dismiss': 'Descartar',
  'status.section': 'Compartir y estado',
  'status.field': s_es['intent.statusReportWorkspace.updateReportStatus.form.field.status.label'],
  'status.action': s_es['intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus'],
  'status.loading': 'Actualizando estado…',
  'status.success': s_es['action.updateReportStatus.success'],
  'status.error': s_es['action.updateReportStatus.error'],
  'status.dismiss': 'Descartar',
  'status.hint': 'Defina el estado del informe cuando esté listo para compartirlo con el cliente.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page11--status-report-workspace-102045')
export class BuildFlowFsmDesktopPage11StatusReportWorkspacePage extends BuildFlowFsmStatusReportWorkspaceBase {
  #msgLang: string | null = null;
  #msgCache: PageMessageType = pageFallback;

  /** i18n catalog — resolved once per language, refreshed only when the document language changes. */
  protected get msg(): PageMessageType {
    const lang = (document.documentElement.lang || '').toLowerCase();
    if (lang !== this.#msgLang) {
      this.#msgLang = lang;
      this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
    }
    return this.#msgCache;
  }

  /** Main render. Split the page into render<Name>() methods and call them from here. */
  render(): TemplateResult {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">${msg['page.title']}</h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['page.subtitle']}</p>
          </header>
          ${this.renderGenerateSection()}
          ${this.renderReviewSection()}
          ${this.renderStatusSection()}
        </div>
      </div>
    `;
  }

  renderGenerateSection(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.generateReportState === 'loading';
    const hasProject = Boolean(this.generateReportProjectId);
    const canGenerate =
      hasProject &&
      Boolean(this.generateReportReportPeriodStart) &&
      Boolean(this.generateReportReportPeriodEnd) &&
      !isLoading;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4 shadow-sm">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['generate.section']}</h2>

        <div class="space-y-1">
          <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['generate.project.label']}</p>
          ${
            hasProject
              ? html`
                  <div
                    class="inline-flex items-center gap-2 rounded-md border border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)] px-3 py-1.5 text-sm text-[var(--selected-text,#1e3a8a)]"
                  >
                    <span class="font-medium">${msg['generate.project.value']}</span>
                    <span>${this.generateReportProjectId}</span>
                  </div>
                `
              : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['generate.project.empty']}</p>`
          }
        </div>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['generate.periodStart']}</span>
            <input
              type="date"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.generateReportReportPeriodStart}
              ?disabled=${isLoading}
              @change=${(event: Event) => this.handleGenerateReportReportPeriodStartChange(event)}
            />
          </label>
          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['generate.periodEnd']}</span>
            <input
              type="date"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.generateReportReportPeriodEnd}
              ?disabled=${isLoading}
              @change=${(event: Event) => this.handleGenerateReportReportPeriodEndChange(event)}
            />
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="inline-flex items-center rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${!canGenerate}
            @click=${(event: Event) => this.handleGenerateReportClick(event)}
          >
            ${isLoading ? msg['generate.loading'] : msg['generate.action']}
          </button>
        </div>

        ${this.renderGenerateFeedback()}
        ${
          this.generateReportOutput
            ? html`
                <div
                  class="rounded-md border border-[var(--status-success-bg,#bbf7d0)] bg-[var(--status-success-bg,#bbf7d0)] px-3 py-2 text-sm text-[var(--status-success-text,#14532d)]"
                >
                  ${msg['generate.output']}
                </div>
              `
            : nothing
        }
      </section>
    `;
  }

  renderGenerateFeedback(): TemplateResult | typeof nothing {
    const msg = this.msg;
    if (this.generateReportState === 'success') {
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#bbf7d0)] px-3 py-2 text-sm text-[var(--status-success-text,#14532d)]"
          role="status"
        >
          <p>${msg['generate.success']}</p>
          <button
            type="button"
            class="shrink-0 text-xs font-medium underline"
            @click=${() => {
              this.generateReportState = 'idle';
            }}
          >
            ${msg['generate.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.generateReportState === 'error') {
      const errorText = this.generateReportError || msg['generate.error'];
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#7f1d1d)]"
          role="alert"
        >
          <p>${errorText}</p>
          <button
            type="button"
            class="shrink-0 text-xs font-medium underline"
            @click=${() => {
              this.generateReportState = 'idle';
            }}
          >
            ${msg['generate.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderReviewSection(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.updateReportContentState === 'loading';
    const reportId = this.updateReportContentStatusReportId;
    const hasReport = Boolean(reportId);
    const canSave = hasReport && Boolean(this.updateReportContentSummary) && !isLoading;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4 shadow-sm">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['review.section']}</h2>

        <div class="space-y-1">
          <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['review.report.label']}</p>
          ${
            hasReport
              ? html`
                  <div
                    class="inline-flex items-center rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-1.5 text-sm text-[var(--text-default,#0f172a)]"
                  >
                    ${reportId}
                  </div>
                `
              : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['review.report.empty']}</p>`
          }
        </div>

        ${
          hasReport
            ? html`
                <div class="space-y-4">
                  <label class="block space-y-1">
                    <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['review.summary']}</span>
                    <textarea
                      rows="3"
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      .value=${this.updateReportContentSummary}
                      ?disabled=${isLoading}
                      @change=${(event: Event) => this.handleUpdateReportContentSummaryChange(event)}
                    ></textarea>
                  </label>
                  <label class="block space-y-1">
                    <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['review.tasks']}</span>
                    <textarea
                      rows="3"
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      .value=${this.updateReportContentTasksOverview}
                      ?disabled=${isLoading}
                      @change=${(event: Event) => this.handleUpdateReportContentTasksOverviewChange(event)}
                    ></textarea>
                  </label>
                  <label class="block space-y-1">
                    <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['review.timeLogs']}</span>
                    <textarea
                      rows="3"
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      .value=${this.updateReportContentTimeLogsOverview}
                      ?disabled=${isLoading}
                      @change=${(event: Event) => this.handleUpdateReportContentTimeLogsOverviewChange(event)}
                    ></textarea>
                  </label>
                  <label class="block space-y-1">
                    <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['review.materials']}</span>
                    <textarea
                      rows="3"
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      .value=${this.updateReportContentMaterialsOverview}
                      ?disabled=${isLoading}
                      @change=${(event: Event) => this.handleUpdateReportContentMaterialsOverviewChange(event)}
                    ></textarea>
                  </label>
                  <label class="block space-y-1">
                    <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['review.delayRisk']}</span>
                    <textarea
                      rows="3"
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      .value=${this.updateReportContentDelayRiskAssessment}
                      ?disabled=${isLoading}
                      @change=${(event: Event) => this.handleUpdateReportContentDelayRiskAssessmentChange(event)}
                    ></textarea>
                  </label>
                  <label class="block space-y-1">
                    <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['review.pmNotes']}</span>
                    <textarea
                      rows="3"
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      .value=${this.updateReportContentPmNotes}
                      ?disabled=${isLoading}
                      @change=${(event: Event) => this.handleUpdateReportContentPmNotesChange(event)}
                    ></textarea>
                  </label>
                  <div class="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      class="inline-flex items-center rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                      ?disabled=${!canSave}
                      @click=${(event: Event) => this.handleUpdateReportContentClick(event)}
                    >
                      ${isLoading ? msg['review.loading'] : msg['review.action']}
                    </button>
                  </div>
                </div>
              `
            : nothing
        }

        ${this.renderReviewFeedback()}
      </section>
    `;
  }

  renderReviewFeedback(): TemplateResult | typeof nothing {
    const msg = this.msg;
    if (this.updateReportContentState === 'success') {
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#bbf7d0)] px-3 py-2 text-sm text-[var(--status-success-text,#14532d)]"
          role="status"
        >
          <p>${msg['review.success']}</p>
          <button
            type="button"
            class="shrink-0 text-xs font-medium underline"
            @click=${() => {
              this.updateReportContentState = 'idle';
            }}
          >
            ${msg['review.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.updateReportContentState === 'error') {
      const errorText = this.updateReportContentError || msg['review.error'];
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#7f1d1d)]"
          role="alert"
        >
          <p>${errorText}</p>
          <button
            type="button"
            class="shrink-0 text-xs font-medium underline"
            @click=${() => {
              this.updateReportContentState = 'idle';
            }}
          >
            ${msg['review.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderStatusSection(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.updateReportStatusState === 'loading';
    const reportId = this.updateReportStatusStatusReportId || this.updateReportContentStatusReportId;
    const hasReport = Boolean(reportId);
    const canUpdate = hasReport && Boolean(this.updateReportStatusStatus) && !isLoading;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4 shadow-sm">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['status.section']}</h2>
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['status.hint']}</p>

        ${
          hasReport
            ? html`
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label class="block space-y-1">
                    <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['status.field']}</span>
                    <input
                      type="text"
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                      .value=${this.updateReportStatusStatus}
                      ?disabled=${isLoading}
                      @change=${(event: Event) => this.handleUpdateReportStatusStatusChange(event)}
                    />
                  </label>
                </div>
                <div class="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    class="inline-flex items-center rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                    ?disabled=${!canUpdate}
                    @click=${(event: Event) => this.handleUpdateReportStatusClick(event)}
                  >
                    ${isLoading ? msg['status.loading'] : msg['status.action']}
                  </button>
                </div>
              `
            : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['review.report.empty']}</p>`
        }

        ${this.renderStatusFeedback()}
      </section>
    `;
  }

  renderStatusFeedback(): TemplateResult | typeof nothing {
    const msg = this.msg;
    if (this.updateReportStatusState === 'success') {
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#bbf7d0)] px-3 py-2 text-sm text-[var(--status-success-text,#14532d)]"
          role="status"
        >
          <p>${msg['status.success']}</p>
          <button
            type="button"
            class="shrink-0 text-xs font-medium underline"
            @click=${() => {
              this.updateReportStatusState = 'idle';
            }}
          >
            ${msg['status.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.updateReportStatusState === 'error') {
      const errorText = this.updateReportStatusError || msg['status.error'];
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#7f1d1d)]"
          role="alert"
        >
          <p>${errorText}</p>
          <button
            type="button"
            class="shrink-0 text-xs font-medium underline"
            @click=${() => {
              this.updateReportStatusState = 'idle';
            }}
          >
            ${msg['status.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }
}
