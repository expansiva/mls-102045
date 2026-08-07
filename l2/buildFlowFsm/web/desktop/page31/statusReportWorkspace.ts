/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/statusReportWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmStatusReportWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.js';
import { messages as s_en } from '/_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.js';

/// **collab_i18n_start**
const message_en = {
  'page.title': 'Status Reports',
  'generate.heading': 'Generate report',
  'generate.periodStart': s_en['en']['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label'],
  'generate.periodEnd': s_en['en']['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label'],
  'generate.projectContext': 'Project',
  'generate.action': s_en['en']['intent.statusReportWorkspace.generateReport.form.action.generateReport'],
  'generate.loading': 'Generating…',
  'generate.success': s_en['en']['action.generateReport.success'],
  'generate.error': s_en['en']['action.generateReport.error'],
  'canvas.heading': 'Report draft',
  'canvas.summary': s_en['en']['intent.statusReportWorkspace.updateReportContent.form.field.summary.label'],
  'canvas.tasksOverview': s_en['en']['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label'],
  'canvas.timeLogsOverview': s_en['en']['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label'],
  'canvas.materialsOverview': s_en['en']['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label'],
  'canvas.delayRiskAssessment': s_en['en']['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label'],
  'canvas.pmNotes': s_en['en']['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label'],
  'canvas.save': 'Save draft',
  'canvas.saving': 'Saving…',
  'canvas.saveSuccess': s_en['en']['action.updateReportContent.success'],
  'canvas.saveError': s_en['en']['action.updateReportContent.error'],
  'lifecycle.heading': 'Advance report',
  'lifecycle.current': 'Current status',
  'lifecycle.markReviewed': 'Mark reviewed',
  'lifecycle.shareWithClient': 'Share with client',
  'lifecycle.loading': 'Updating…',
  'lifecycle.success': s_en['en']['action.updateReportStatus.success'],
  'lifecycle.error': s_en['en']['action.updateReportStatus.error'],
  'lifecycle.confirmShare': 'Share this report with the client?',
  'status.draft': 'Draft',
  'status.reviewed': 'Reviewed',
  'status.shared': 'Shared',
  'empty.canvas': 'Generate a report for a project period to start editing the draft here.',
  'dismiss.feedback': 'Dismiss',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'page.title': 'Relatórios de status',
  'generate.heading': 'Gerar relatório',
  'generate.periodStart': s_en['pt-br']['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label'],
  'generate.periodEnd': s_en['pt-br']['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label'],
  'generate.projectContext': 'Projeto',
  'generate.action': s_en['pt-br']['intent.statusReportWorkspace.generateReport.form.action.generateReport'],
  'generate.loading': 'Gerando…',
  'generate.success': s_en['pt-br']['action.generateReport.success'],
  'generate.error': s_en['pt-br']['action.generateReport.error'],
  'canvas.heading': 'Rascunho do relatório',
  'canvas.summary': s_en['pt-br']['intent.statusReportWorkspace.updateReportContent.form.field.summary.label'],
  'canvas.tasksOverview': s_en['pt-br']['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label'],
  'canvas.timeLogsOverview': s_en['pt-br']['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label'],
  'canvas.materialsOverview': s_en['pt-br']['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label'],
  'canvas.delayRiskAssessment': s_en['pt-br']['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label'],
  'canvas.pmNotes': s_en['pt-br']['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label'],
  'canvas.save': 'Salvar rascunho',
  'canvas.saving': 'Salvando…',
  'canvas.saveSuccess': s_en['pt-br']['action.updateReportContent.success'],
  'canvas.saveError': s_en['pt-br']['action.updateReportContent.error'],
  'lifecycle.heading': 'Avançar relatório',
  'lifecycle.current': 'Status atual',
  'lifecycle.markReviewed': 'Marcar como revisado',
  'lifecycle.shareWithClient': 'Compartilhar com o cliente',
  'lifecycle.loading': 'Atualizando…',
  'lifecycle.success': s_en['pt-br']['action.updateReportStatus.success'],
  'lifecycle.error': s_en['pt-br']['action.updateReportStatus.error'],
  'lifecycle.confirmShare': 'Compartilhar este relatório com o cliente?',
  'status.draft': 'Rascunho',
  'status.reviewed': 'Revisado',
  'status.shared': 'Compartilhado',
  'empty.canvas': 'Gere um relatório para um período do projeto para começar a editar o rascunho aqui.',
  'dismiss.feedback': 'Dispensar',
};
const message_es: MessageType = {
  'page.title': 'Informes de estado',
  'generate.heading': 'Generar informe',
  'generate.periodStart': s_en['es']['intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label'],
  'generate.periodEnd': s_en['es']['intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label'],
  'generate.projectContext': 'Proyecto',
  'generate.action': s_en['es']['intent.statusReportWorkspace.generateReport.form.action.generateReport'],
  'generate.loading': 'Generando…',
  'generate.success': s_en['es']['action.generateReport.success'],
  'generate.error': s_en['es']['action.generateReport.error'],
  'canvas.heading': 'Borrador del informe',
  'canvas.summary': s_en['es']['intent.statusReportWorkspace.updateReportContent.form.field.summary.label'],
  'canvas.tasksOverview': s_en['es']['intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label'],
  'canvas.timeLogsOverview': s_en['es']['intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label'],
  'canvas.materialsOverview': s_en['es']['intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label'],
  'canvas.delayRiskAssessment': s_en['es']['intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label'],
  'canvas.pmNotes': s_en['es']['intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label'],
  'canvas.save': 'Guardar borrador',
  'canvas.saving': 'Guardando…',
  'canvas.saveSuccess': s_en['es']['action.updateReportContent.success'],
  'canvas.saveError': s_en['es']['action.updateReportContent.error'],
  'lifecycle.heading': 'Avanzar informe',
  'lifecycle.current': 'Estado actual',
  'lifecycle.markReviewed': 'Marcar como revisado',
  'lifecycle.shareWithClient': 'Compartir con el cliente',
  'lifecycle.loading': 'Actualizando…',
  'lifecycle.success': s_en['es']['action.updateReportStatus.success'],
  'lifecycle.error': s_en['es']['action.updateReportStatus.error'],
  'lifecycle.confirmShare': '¿Compartir este informe con el cliente?',
  'status.draft': 'Borrador',
  'status.reviewed': 'Revisado',
  'status.shared': 'Compartido',
  'empty.canvas': 'Genere un informe para un período del proyecto para empezar a editar el borrador aquí.',
  'dismiss.feedback': 'Descartar',
};
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

@customElement('build-flow-fsm--desktop--page31--status-report-workspace-102045')
export class BuildFlowFsmDesktopPage31StatusReportWorkspacePage extends BuildFlowFsmStatusReportWorkspaceBase {
  get msg(): MessageType {
    const lang = (typeof document !== 'undefined' && document.documentElement.lang)
      ? document.documentElement.lang.toLowerCase()
      : 'en';
    return messages[lang] ?? messages['en']!;
  }

  render() {
    const msg = this.msg;
    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
          <header class="mb-6">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
          </header>
          <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div class="lg:col-span-2 space-y-6">
              ${this.renderGeneratePanel()}
              ${this.renderCanvas()}
            </div>
            <aside class="space-y-6">
              ${this.renderLifecycleRail()}
            </aside>
          </div>
        </div>
      </div>
    `;
  }

  renderGeneratePanel() {
    const msg = this.msg;
    const isLoading = this.generateReportState === 'loading';
    const canGenerate =
      !!this.generateReportProjectId &&
      !!this.generateReportReportPeriodStart &&
      !!this.generateReportReportPeriodEnd &&
      !isLoading;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
        <h2 class="mb-3 text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['generate.heading']}</h2>
        <div class="mb-3 flex flex-wrap items-center gap-2">
          <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['generate.projectContext']}</span>
          <span class="inline-flex items-center rounded-md bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-1 text-sm text-[var(--status-neutral-text,#334155)]">
            ${this.generateReportProjectId || '—'}
          </span>
        </div>
        <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['generate.periodStart']}</span>
            <input
              type="date"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.generateReportReportPeriodStart}
              ?disabled=${isLoading}
              @change=${(e: Event) => this.handleGenerateReportReportPeriodStartChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['generate.periodEnd']}</span>
            <input
              type="date"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.generateReportReportPeriodEnd}
              ?disabled=${isLoading}
              @change=${(e: Event) => this.handleGenerateReportReportPeriodEndChange(e)}
            />
          </label>
        </div>
        <div class="mt-4 flex flex-wrap items-center gap-3">
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${!canGenerate}
            @click=${(e: Event) => this.handleGenerateReportClick(e)}
          >
            ${isLoading ? msg['generate.loading'] : msg['generate.action']}
          </button>
          ${this.renderGenerateFeedback()}
        </div>
      </section>
    `;
  }

  renderGenerateFeedback() {
    const msg = this.msg;
    if (this.generateReportState === 'success') {
      return html`
        <div class="flex items-center gap-2 rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-1.5 text-sm text-[var(--status-success-text,#166534)]">
          <span>${msg['generate.success']}</span>
        </div>
      `;
    }
    if (this.generateReportState === 'error') {
      const errText = this.generateReportError || msg['generate.error'];
      return html`
        <div class="flex items-center gap-2 rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-1.5 text-sm text-[var(--status-error-text,#991b1b)]">
          <span>${errText}</span>
          <button
            type="button"
            class="underline"
            @click=${(e: Event) => this.handleGenerateReportClick(e)}
          >${msg['generate.action']}</button>
        </div>
      `;
    }
    return nothing;
  }

  renderCanvas() {
    const msg = this.msg;
    const report =
      this.updateReportContentOutput ??
      this.generateReportOutput ??
      null;
    const hasDraft =
      !!this.updateReportContentStatusReportId ||
      !!report ||
      !!this.updateReportContentSummary ||
      !!this.generateReportOutput;
    const isLoading = this.updateReportContentState === 'loading';
    const canSave =
      !!this.updateReportContentStatusReportId &&
      !!this.updateReportContentSummary &&
      !isLoading;

    if (!hasDraft) {
      return html`
        <section class="rounded-lg border border-dashed border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 text-center text-[var(--text-muted,#64748b)]">
          <p>${msg['empty.canvas']}</p>
        </section>
      `;
    }

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm md:p-6">
        <div class="mb-4 flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['canvas.heading']}</h2>
          <div class="flex flex-wrap items-center gap-2">
            <button
              type="button"
              class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${!canSave}
              @click=${(e: Event) => this.handleUpdateReportContentClick(e)}
            >
              ${isLoading ? msg['canvas.saving'] : msg['canvas.save']}
            </button>
            ${this.renderSaveFeedback()}
          </div>
        </div>
        <div class="mx-auto max-w-3xl space-y-4">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['canvas.summary']}</span>
            <textarea
              rows="5"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentSummary}
              ?disabled=${isLoading}
              @change=${(e: Event) => this.handleUpdateReportContentSummaryChange(e)}
              @input=${(e: Event) => this.handleUpdateReportContentSummaryChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['canvas.tasksOverview']}</span>
            <textarea
              rows="4"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentTasksOverview}
              ?disabled=${isLoading}
              @change=${(e: Event) => this.handleUpdateReportContentTasksOverviewChange(e)}
              @input=${(e: Event) => this.handleUpdateReportContentTasksOverviewChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['canvas.timeLogsOverview']}</span>
            <textarea
              rows="4"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentTimeLogsOverview}
              ?disabled=${isLoading}
              @change=${(e: Event) => this.handleUpdateReportContentTimeLogsOverviewChange(e)}
              @input=${(e: Event) => this.handleUpdateReportContentTimeLogsOverviewChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['canvas.materialsOverview']}</span>
            <textarea
              rows="4"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentMaterialsOverview}
              ?disabled=${isLoading}
              @change=${(e: Event) => this.handleUpdateReportContentMaterialsOverviewChange(e)}
              @input=${(e: Event) => this.handleUpdateReportContentMaterialsOverviewChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['canvas.delayRiskAssessment']}</span>
            <textarea
              rows="4"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentDelayRiskAssessment}
              ?disabled=${isLoading}
              @change=${(e: Event) => this.handleUpdateReportContentDelayRiskAssessmentChange(e)}
              @input=${(e: Event) => this.handleUpdateReportContentDelayRiskAssessmentChange(e)}
            ></textarea>
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['canvas.pmNotes']}</span>
            <textarea
              rows="4"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.updateReportContentPmNotes}
              ?disabled=${isLoading}
              @change=${(e: Event) => this.handleUpdateReportContentPmNotesChange(e)}
              @input=${(e: Event) => this.handleUpdateReportContentPmNotesChange(e)}
            ></textarea>
          </label>
        </div>
      </section>
    `;
  }

  renderSaveFeedback() {
    const msg = this.msg;
    if (this.updateReportContentState === 'success') {
      return html`
        <span class="rounded-md bg-[var(--status-success-bg,#dcfce7)] px-2 py-1 text-sm text-[var(--status-success-text,#166534)]">
          ${msg['canvas.saveSuccess']}
        </span>
      `;
    }
    if (this.updateReportContentState === 'error') {
      const errText = this.updateReportContentError || msg['canvas.saveError'];
      return html`
        <span class="flex items-center gap-2 rounded-md bg-[var(--status-error-bg,#fee2e2)] px-2 py-1 text-sm text-[var(--status-error-text,#991b1b)]">
          <span>${errText}</span>
          <button
            type="button"
            class="underline"
            @click=${(e: Event) => this.handleUpdateReportContentClick(e)}
          >${msg['canvas.save']}</button>
        </span>
      `;
    }
    return nothing;
  }

  renderLifecycleRail() {
    const msg = this.msg;
    const reportId =
      this.updateReportStatusStatusReportId ||
      this.updateReportContentStatusReportId ||
      '';
    if (!reportId) {
      return nothing;
    }

    const currentStatusRaw =
      (this.updateReportStatusOutput && (this.updateReportStatusOutput as { status?: string }).status) ||
      (this.generateReportOutput && (this.generateReportOutput as { status?: string }).status) ||
      (this.updateReportContentOutput && (this.updateReportContentOutput as { status?: string }).status) ||
      this.updateReportStatusStatus ||
      'draft';
    const currentStatus = String(currentStatusRaw).toLowerCase();

    const isLoading = this.updateReportStatusState === 'loading';
    const nextTransitions: Array<{ value: string; label: string; confirm?: string }> = [];
    if (currentStatus === 'draft' || currentStatus === '') {
      nextTransitions.push({ value: 'reviewed', label: msg['lifecycle.markReviewed'] });
    }
    if (currentStatus === 'reviewed') {
      nextTransitions.push({
        value: 'shared',
        label: msg['lifecycle.shareWithClient'],
        confirm: msg['lifecycle.confirmShare'],
      });
    }

    const statusLabel =
      currentStatus === 'shared'
        ? msg['status.shared']
        : currentStatus === 'reviewed'
          ? msg['status.reviewed']
          : msg['status.draft'];

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
        <h2 class="mb-3 text-base font-medium text-[var(--text-strong,#0f172a)]">${msg['lifecycle.heading']}</h2>
        <div class="mb-4 flex items-center gap-2 text-sm">
          <span class="text-[var(--text-muted,#64748b)]">${msg['lifecycle.current']}</span>
          <span class="inline-flex items-center rounded-md bg-[var(--status-info-bg,#e0f2fe)] px-2 py-1 text-[var(--status-info-text,#075985)]">
            ${statusLabel}
          </span>
        </div>
        <div class="flex flex-col gap-2">
          ${nextTransitions.length > 0
            ? nextTransitions.map(
                (t) => html`
                  <button
                    type="button"
                    class="rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
                    ?disabled=${isLoading}
                    @click=${(e: Event) => {
                      if (t.confirm && typeof window !== 'undefined' && !window.confirm(t.confirm)) {
                        return;
                      }
                      this.setUpdateReportStatusStatus(t.value);
                      this.handleUpdateReportStatusClick(e);
                    }}
                  >
                    ${isLoading ? msg['lifecycle.loading'] : t.label}
                  </button>
                `,
              )
            : nothing}
          ${this.renderLifecycleFeedback()}
        </div>
      </section>
    `;
  }

  renderLifecycleFeedback() {
    const msg = this.msg;
    if (this.updateReportStatusState === 'success') {
      return html`
        <div class="mt-2 rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
          ${msg['lifecycle.success']}
        </div>
      `;
    }
    if (this.updateReportStatusState === 'error') {
      const errText = this.updateReportStatusError || msg['lifecycle.error'];
      return html`
        <div class="mt-2 flex flex-col gap-1 rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
          <span>${errText}</span>
          <button
            type="button"
            class="self-start underline"
            @click=${(e: Event) => this.handleUpdateReportStatusClick(e)}
          >${msg['lifecycle.markReviewed']}</button>
        </div>
      `;
    }
    return nothing;
  }
}
