/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/statusReportWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmStatusReportWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.js';
import type {
  GenerateReportOutput,
  UpdateReportContentOutput,
  UpdateReportStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'sec.generate': s_en['section.statusReportWorkspace.sec-generate.title'],
  'sec.review': s_en['section.statusReportWorkspace.sec-review-edit.title'],
  'generate.action': s_en['intent.statusReportWorkspace.generateReport.form.action.generateReport'],
  'field.periodStart': s_en['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label'],
  'field.periodEnd': s_en['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label'],
  'field.summary': s_en['intent.statusReportWorkspace.updateReportContent.form.field.summary.label'],
  'field.tasks': s_en['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label'],
  'field.timeLogs': s_en['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label'],
  'field.materials': s_en['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label'],
  'field.delayRisk': s_en['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label'],
  'field.pmNotes': s_en['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label'],
  'save.content': s_en['intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent'],
  'generate.ok': s_en['action.generateReport.success'],
  'generate.err': s_en['action.generateReport.error'],
  'content.ok': s_en['action.updateReportContent.success'],
  'content.err': s_en['action.updateReportContent.error'],
  'status.ok': s_en['action.updateReportStatus.success'],
  'status.err': s_en['action.updateReportStatus.error'],
  'field.project': 'Project',
  'configure.hint': 'Select the project and reporting period, then generate the draft.',
  'generate.running': 'Generating status report…',
  'preview.empty': 'The generated report will appear here for review.',
  'preview.heading': 'Report preview',
  'rail.heading': 'Delay risk notes',
  'edit.heading': 'Refine report content',
  'lifecycle.heading': 'Advance lifecycle',
  'status.current': 'Current status',
  'mark.reviewed': 'Mark Reviewed',
  'share.client': 'Share with Client',
  'share.confirm': 'Share this status report with the client? This publishes the reviewed content.',
  'shared.done': 'Report shared with client.',
  'dismiss': 'Dismiss',
  'status.draft': 'Draft',
  'status.reviewed': 'Reviewed',
  'status.shared': 'Shared',
  'retry': 'Retry',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'sec.generate': s_pt_br['section.statusReportWorkspace.sec-generate.title'],
  'sec.review': s_pt_br['section.statusReportWorkspace.sec-review-edit.title'],
  'generate.action': s_pt_br['intent.statusReportWorkspace.generateReport.form.action.generateReport'],
  'field.periodStart': s_pt_br['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label'],
  'field.periodEnd': s_pt_br['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label'],
  'field.summary': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.summary.label'],
  'field.tasks': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label'],
  'field.timeLogs': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label'],
  'field.materials': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label'],
  'field.delayRisk': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label'],
  'field.pmNotes': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label'],
  'save.content': s_pt_br['intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent'],
  'generate.ok': s_pt_br['action.generateReport.success'],
  'generate.err': s_pt_br['action.generateReport.error'],
  'content.ok': s_pt_br['action.updateReportContent.success'],
  'content.err': s_pt_br['action.updateReportContent.error'],
  'status.ok': s_pt_br['action.updateReportStatus.success'],
  'status.err': s_pt_br['action.updateReportStatus.error'],
  'field.project': 'Projeto',
  'configure.hint': 'Selecione o projeto e o período do relatório e gere o rascunho.',
  'generate.running': 'Gerando relatório de status…',
  'preview.empty': 'O relatório gerado aparecerá aqui para revisão.',
  'preview.heading': 'Prévia do relatório',
  'rail.heading': 'Notas de risco de atraso',
  'edit.heading': 'Refinar conteúdo do relatório',
  'lifecycle.heading': 'Avançar ciclo de vida',
  'status.current': 'Status atual',
  'mark.reviewed': 'Marcar como revisado',
  'share.client': 'Compartilhar com o cliente',
  'share.confirm': 'Compartilhar este relatório de status com o cliente? Isso publica o conteúdo revisado.',
  'shared.done': 'Relatório compartilhado com o cliente.',
  'dismiss': 'Dispensar',
  'status.draft': 'Rascunho',
  'status.reviewed': 'Revisado',
  'status.shared': 'Compartilhado',
  'retry': 'Tentar de novo',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'sec.generate': s_es['section.statusReportWorkspace.sec-generate.title'],
  'sec.review': s_es['section.statusReportWorkspace.sec-review-edit.title'],
  'generate.action': s_es['intent.statusReportWorkspace.generateReport.form.action.generateReport'],
  'field.periodStart': s_es['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label'],
  'field.periodEnd': s_es['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label'],
  'field.summary': s_es['intent.statusReportWorkspace.updateReportContent.form.field.summary.label'],
  'field.tasks': s_es['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label'],
  'field.timeLogs': s_es['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label'],
  'field.materials': s_es['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label'],
  'field.delayRisk': s_es['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label'],
  'field.pmNotes': s_es['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label'],
  'save.content': s_es['intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent'],
  'generate.ok': s_es['action.generateReport.success'],
  'generate.err': s_es['action.generateReport.error'],
  'content.ok': s_es['action.updateReportContent.success'],
  'content.err': s_es['action.updateReportContent.error'],
  'status.ok': s_es['action.updateReportStatus.success'],
  'status.err': s_es['action.updateReportStatus.error'],
  'field.project': 'Proyecto',
  'configure.hint': 'Seleccione el proyecto y el período del informe y genere el borrador.',
  'generate.running': 'Generando informe de estado…',
  'preview.empty': 'El informe generado aparecerá aquí para revisión.',
  'preview.heading': 'Vista previa del informe',
  'rail.heading': 'Notas de riesgo de retraso',
  'edit.heading': 'Refinar contenido del informe',
  'lifecycle.heading': 'Avanzar ciclo de vida',
  'status.current': 'Estado actual',
  'mark.reviewed': 'Marcar como revisado',
  'share.client': 'Compartir con el cliente',
  'share.confirm': '¿Compartir este informe de estado con el cliente? Esto publica el contenido revisado.',
  'shared.done': 'Informe compartido con el cliente.',
  'dismiss': 'Descartar',
  'status.draft': 'Borrador',
  'status.reviewed': 'Revisado',
  'status.shared': 'Compartido',
  'retry': 'Reintentar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

type ReportArtifact = GenerateReportOutput | UpdateReportContentOutput | UpdateReportStatusOutput;

@customElement('build-flow-fsm--web--desktop--page21--status-report-workspace-102045')
export class BuildFlowFsmDesktopPage21StatusReportWorkspacePage extends BuildFlowFsmStatusReportWorkspaceBase {
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
    const report = this.resolveArtifact();
    return html`
      <div class="mx-auto flex w-full max-w-6xl flex-col gap-6 p-6 bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        ${this.renderConfigurePanel(msg)}
        ${report || this.generateReportState === 'loading' || this.generateReportState === 'error'
          ? html`
              <section class="flex flex-col gap-4">
                <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['sec.review']}</h2>
                <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div class="md:col-span-2 flex flex-col gap-4">
                    ${this.renderPreview(msg, report)}
                    ${report ? this.renderEditForm(msg, report) : nothing}
                  </div>
                  <div class="flex flex-col gap-4">
                    ${this.renderFindingsRail(msg, report)}
                    ${report ? this.renderLifecycle(msg, report) : nothing}
                  </div>
                </div>
              </section>
            `
          : html`
              <section
                class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 text-[var(--text-muted,#64748b)]"
              >
                ${msg['preview.empty']}
              </section>
            `}
      </div>
    `;
  }

  private resolveArtifact(): ReportArtifact | null {
    if (this.updateReportStatusOutput) {
      return this.updateReportStatusOutput;
    }
    if (this.updateReportContentOutput) {
      return this.updateReportContentOutput;
    }
    if (this.generateReportOutput) {
      return this.generateReportOutput;
    }
    return null;
  }

  private readField(report: ReportArtifact | null, key: string): string {
    if (!report || typeof report !== 'object') {
      return '';
    }
    const record = report as unknown as Record<string, unknown>;
    const value = record[key];
    if (value === null || value === undefined) {
      return '';
    }
    return String(value);
  }

  private resolveReportId(report: ReportArtifact | null): string {
    const fromReport = this.readField(report, 'statusReportId');
    if (fromReport) {
      return fromReport;
    }
    if (this.updateReportContentStatusReportId) {
      return this.updateReportContentStatusReportId;
    }
    if (this.updateReportStatusStatusReportId) {
      return this.updateReportStatusStatusReportId;
    }
    return '';
  }

  private resolveCurrentStatus(report: ReportArtifact | null): string {
    const raw = this.readField(report, 'status').toLowerCase();
    if (raw) {
      return raw;
    }
    return 'draft';
  }

  private statusLabel(msg: PageMessageType, status: string): string {
    if (status === 'reviewed') {
      return msg['status.reviewed'];
    }
    if (status === 'shared') {
      return msg['status.shared'];
    }
    return msg['status.draft'];
  }

  private ensureReportIds(report: ReportArtifact | null): void {
    const id = this.resolveReportId(report);
    if (!id) {
      return;
    }
    if (this.updateReportContentStatusReportId !== id) {
      this.setUpdateReportContentStatusReportId(id);
    }
    if (this.updateReportStatusStatusReportId !== id) {
      this.setUpdateReportStatusStatusReportId(id);
    }
  }

  private seedEditFieldsFromReport(report: ReportArtifact): void {
    if (!this.updateReportContentSummary) {
      const summary = this.readField(report, 'summary');
      if (summary) {
        this.setUpdateReportContentSummary(summary);
      }
    }
    if (!this.updateReportContentTasksOverview) {
      const tasks = this.readField(report, 'tasksOverview');
      if (tasks) {
        this.setUpdateReportContentTasksOverview(tasks);
      }
    }
    if (!this.updateReportContentTimeLogsOverview) {
      const timeLogs = this.readField(report, 'timeLogsOverview');
      if (timeLogs) {
        this.setUpdateReportContentTimeLogsOverview(timeLogs);
      }
    }
    if (!this.updateReportContentMaterialsOverview) {
      const materials = this.readField(report, 'materialsOverview');
      if (materials) {
        this.setUpdateReportContentMaterialsOverview(materials);
      }
    }
    if (!this.updateReportContentDelayRiskAssessment) {
      const delay = this.readField(report, 'delayRiskAssessment');
      if (delay) {
        this.setUpdateReportContentDelayRiskAssessment(delay);
      }
    }
    if (!this.updateReportContentPmNotes) {
      const notes = this.readField(report, 'pmNotes');
      if (notes) {
        this.setUpdateReportContentPmNotes(notes);
      }
    }
  }

  renderConfigurePanel(msg: PageMessageType): TemplateResult {
    const generating = this.generateReportState === 'loading';
    const canGenerate =
      Boolean(this.generateReportProjectId) &&
      Boolean(this.generateReportReportPeriodStart) &&
      Boolean(this.generateReportReportPeriodEnd) &&
      !generating;
    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"
      >
        <div class="mb-4 flex flex-col gap-1">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['sec.generate']}</h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['configure.hint']}</p>
        </div>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['field.project']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] disabled:opacity-60"
              type="text"
              .value=${this.generateReportProjectId}
              ?disabled=${generating}
              @change=${(e: Event) => this.handleGenerateReportProjectIdChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['field.periodStart']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] disabled:opacity-60"
              type="date"
              .value=${this.generateReportReportPeriodStart}
              ?disabled=${generating}
              @change=${(e: Event) => this.handleGenerateReportReportPeriodStartChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['field.periodEnd']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] disabled:opacity-60"
              type="date"
              .value=${this.generateReportReportPeriodEnd}
              ?disabled=${generating}
              @change=${(e: Event) => this.handleGenerateReportReportPeriodEndChange(e)}
            />
          </label>
        </div>
        <div class="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${!canGenerate}
            @click=${(e: Event) => this.handleGenerateReportClick(e)}
          >
            ${generating ? msg['generate.running'] : msg['generate.action']}
          </button>
          ${this.renderActionFeedback(
            this.generateReportState,
            this.generateReportError,
            msg['generate.ok'],
            msg['generate.err'],
            msg,
            () => this.handleGenerateReportClick(),
          )}
        </div>
      </section>
    `;
  }

  renderPreview(msg: PageMessageType, report: ReportArtifact | null): TemplateResult {
    if (this.generateReportState === 'loading') {
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-6 text-[var(--text-muted,#64748b)]"
        >
          ${msg['generate.running']}
        </div>
      `;
    }
    if (this.generateReportState === 'error' && !report) {
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 text-[var(--text-default,#0f172a)]"
        >
          <p class="mb-3">${this.generateReportError || msg['generate.err']}</p>
          <button
            type="button"
            class="rounded-md px-3 py-2 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
            @click=${(e: Event) => this.handleGenerateReportClick(e)}
          >
            ${msg['retry']}
          </button>
        </div>
      `;
    }
    if (!report) {
      return html`
        <div
          class="rounded-lg border border-dashed border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 text-[var(--text-muted,#64748b)]"
        >
          ${msg['preview.empty']}
        </div>
      `;
    }

    const summary = this.readField(report, 'summary');
    const tasks = this.readField(report, 'tasksOverview');
    const timeLogs = this.readField(report, 'timeLogsOverview');
    const materials = this.readField(report, 'materialsOverview');
    const pmNotes = this.readField(report, 'pmNotes');
    const status = this.resolveCurrentStatus(report);
    const periodStart = this.readField(report, 'reportPeriodStart');
    const periodEnd = this.readField(report, 'reportPeriodEnd');

    return html`
      <article
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"
      >
        <div class="mb-4 flex flex-wrap items-center justify-between gap-2">
          <h3 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['preview.heading']}</h3>
          <span
            class="rounded-full px-3 py-1 text-xs font-medium bg-[var(--status-neutral-bg,#e2e8f0)] text-[var(--status-neutral-text,#334155)]"
          >
            ${msg['status.current']}: ${this.statusLabel(msg, status)}
          </span>
        </div>
        ${periodStart || periodEnd
          ? html`
              <p class="mb-3 text-sm text-[var(--text-muted,#64748b)]">
                ${periodStart}${periodStart && periodEnd ? ' — ' : ''}${periodEnd}
              </p>
            `
          : nothing}
        <div class="flex flex-col gap-4 text-sm leading-relaxed">
          ${summary
            ? html`
                <div>
                  <div class="mb-1 font-medium text-[var(--text-default,#0f172a)]">${msg['field.summary']}</div>
                  <p class="whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${summary}</p>
                </div>
              `
            : nothing}
          ${tasks
            ? html`
                <div>
                  <div class="mb-1 font-medium text-[var(--text-default,#0f172a)]">${msg['field.tasks']}</div>
                  <p class="whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${tasks}</p>
                </div>
              `
            : nothing}
          ${timeLogs
            ? html`
                <div>
                  <div class="mb-1 font-medium text-[var(--text-default,#0f172a)]">${msg['field.timeLogs']}</div>
                  <p class="whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${timeLogs}</p>
                </div>
              `
            : nothing}
          ${materials
            ? html`
                <div>
                  <div class="mb-1 font-medium text-[var(--text-default,#0f172a)]">${msg['field.materials']}</div>
                  <p class="whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${materials}</p>
                </div>
              `
            : nothing}
          ${pmNotes
            ? html`
                <div>
                  <div class="mb-1 font-medium text-[var(--text-default,#0f172a)]">${msg['field.pmNotes']}</div>
                  <p class="whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${pmNotes}</p>
                </div>
              `
            : nothing}
        </div>
      </article>
    `;
  }

  renderFindingsRail(msg: PageMessageType, report: ReportArtifact | null): TemplateResult {
    const delayRisk = this.readField(report, 'delayRiskAssessment');
    if (!delayRisk) {
      return html`${nothing}`;
    }
    return html`
      <aside
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-4"
      >
        <h3 class="mb-2 text-sm font-semibold text-[var(--text-strong,#0f172a)]">${msg['rail.heading']}</h3>
        <p class="whitespace-pre-wrap text-sm text-[var(--text-muted,#64748b)]">${delayRisk}</p>
      </aside>
    `;
  }

  renderEditForm(msg: PageMessageType, report: ReportArtifact): TemplateResult {
    this.ensureReportIds(report);
    this.seedEditFieldsFromReport(report);
    const saving = this.updateReportContentState === 'loading';
    const canSave = Boolean(this.resolveReportId(report)) && Boolean(this.updateReportContentSummary) && !saving;
    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"
      >
        <h3 class="mb-4 text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['edit.heading']}</h3>
        <div class="flex flex-col gap-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">${msg['field.summary']}</span>
            <textarea
              class="min-h-[88px] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentSummary}
              ?disabled=${saving}
              @change=${(e: Event) => this.handleUpdateReportContentSummaryChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">${msg['field.tasks']}</span>
            <textarea
              class="min-h-[72px] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentTasksOverview}
              ?disabled=${saving}
              @change=${(e: Event) => this.handleUpdateReportContentTasksOverviewChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">${msg['field.timeLogs']}</span>
            <textarea
              class="min-h-[72px] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentTimeLogsOverview}
              ?disabled=${saving}
              @change=${(e: Event) => this.handleUpdateReportContentTimeLogsOverviewChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">${msg['field.materials']}</span>
            <textarea
              class="min-h-[72px] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentMaterialsOverview}
              ?disabled=${saving}
              @change=${(e: Event) => this.handleUpdateReportContentMaterialsOverviewChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">${msg['field.delayRisk']}</span>
            <textarea
              class="min-h-[72px] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentDelayRiskAssessment}
              ?disabled=${saving}
              @change=${(e: Event) => this.handleUpdateReportContentDelayRiskAssessmentChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">${msg['field.pmNotes']}</span>
            <textarea
              class="min-h-[72px] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentPmNotes}
              ?disabled=${saving}
              @change=${(e: Event) => this.handleUpdateReportContentPmNotesChange(e)}
            ></textarea>
          </label>
        </div>
        <div class="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
            ?disabled=${!canSave}
            @click=${(e: Event) => {
              this.ensureReportIds(report);
              this.handleUpdateReportContentClick(e);
            }}
          >
            ${saving ? msg['generate.running'] : msg['save.content']}
          </button>
          ${this.renderActionFeedback(
            this.updateReportContentState,
            this.updateReportContentError,
            msg['content.ok'],
            msg['content.err'],
            msg,
            () => {
              this.ensureReportIds(report);
              this.handleUpdateReportContentClick();
            },
          )}
        </div>
      </section>
    `;
  }

  renderLifecycle(msg: PageMessageType, report: ReportArtifact): TemplateResult {
    this.ensureReportIds(report);
    const status = this.resolveCurrentStatus(report);
    const transitioning = this.updateReportStatusState === 'loading';
    const reportId = this.resolveReportId(report);
    const canAct = Boolean(reportId) && !transitioning;

    if (status === 'shared' || this.updateReportStatusState === 'success' && status === 'shared') {
      return html`
        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] p-4 text-[var(--status-success-text,#166534)]"
        >
          <p class="text-sm font-medium">${msg['shared.done']}</p>
          ${this.renderActionFeedback(
            this.updateReportStatusState,
            this.updateReportStatusError,
            msg['status.ok'],
            msg['status.err'],
            msg,
            null,
          )}
        </section>
      `;
    }

    const transitions: Array<{ next: string; label: string; primary: boolean }> = [];
    if (status === 'draft') {
      transitions.push({ next: 'reviewed', label: msg['mark.reviewed'], primary: true });
    } else if (status === 'reviewed') {
      transitions.push({ next: 'shared', label: msg['share.client'], primary: true });
    } else {
      transitions.push({ next: 'reviewed', label: msg['mark.reviewed'], primary: true });
      transitions.push({ next: 'shared', label: msg['share.client'], primary: false });
    }

    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"
      >
        <h3 class="mb-1 text-sm font-semibold text-[var(--text-strong,#0f172a)]">${msg['lifecycle.heading']}</h3>
        <p class="mb-3 text-xs text-[var(--text-muted,#64748b)]">
          ${msg['status.current']}: ${this.statusLabel(msg, status)}
        </p>
        <div class="flex flex-col gap-2">
          ${transitions.map(
            (t) => html`
              <button
                type="button"
                class="rounded-md px-3 py-2 text-sm font-medium disabled:opacity-60 ${t.primary
                  ? 'bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]'
                  : 'bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]'}"
                ?disabled=${!canAct}
                @click=${(e: Event) => {
                  if (t.next === 'shared') {
                    const ok = window.confirm(msg['share.confirm']);
                    if (!ok) {
                      return;
                    }
                  }
                  this.ensureReportIds(report);
                  this.setUpdateReportStatusStatus(t.next);
                  this.handleUpdateReportStatusClick(e);
                }}
              >
                ${transitioning ? msg['generate.running'] : t.label}
              </button>
            `,
          )}
        </div>
        ${this.renderActionFeedback(
          this.updateReportStatusState,
          this.updateReportStatusError,
          msg['status.ok'],
          msg['status.err'],
          msg,
          null,
        )}
      </section>
    `;
  }

  renderActionFeedback(
    state: 'idle' | 'loading' | 'success' | 'error',
    errorText: string,
    successText: string,
    errorFallback: string,
    msg: PageMessageType,
    onRetry: (() => void) | null,
  ): TemplateResult {
    if (state === 'success') {
      return html`
        <div
          class="flex items-start gap-2 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]"
          role="status"
        >
          <span class="flex-1">${successText}</span>
        </div>
      `;
    }
    if (state === 'error') {
      return html`
        <div
          class="flex flex-wrap items-center gap-2 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]"
          role="alert"
        >
          <span class="flex-1">${errorText || errorFallback}</span>
          ${onRetry
            ? html`
                <button
                  type="button"
                  class="rounded px-2 py-1 text-xs font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)]"
                  @click=${() => onRetry()}
                >
                  ${msg['retry']}
                </button>
              `
            : nothing}
        </div>
      `;
    }
    return html`${nothing}`;
  }
}
