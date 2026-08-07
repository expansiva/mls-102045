/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientStatusWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmClientStatusWorkspaceBase,
  messages as sharedMessages
} from '/_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.js';

/// **collab_i18n_start**
const s_en = sharedMessages['en'];
const s_pt_br = sharedMessages['pt-br'];
const s_es = sharedMessages['es'];

const message_en = {
  'statusLabel': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label'],
  'projectName': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label'],
  'periodStart': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label'],
  'periodEnd': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label'],
  'generatedAt': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label'],
  'sharedAt': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label'],
  'summary': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label'],
  'tasksOverview': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label'],
  'timeLogsOverview': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label'],
  'materialsOverview': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label'],
  'delayRisk': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label'],
  'pmNotes': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label'],
  'periodRange': 'Reporting period',
  'empty': s_en['intent.clientStatusWorkspace.viewStatusReport.list.empty'],
  'loading': 'Loading status report…',
  'loadError': 'Could not load the status report.',
  'retry': 'Try again',
  'noRisk': 'No delay risk flagged for this period.'
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'statusLabel': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label'],
  'projectName': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label'],
  'periodStart': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label'],
  'periodEnd': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label'],
  'generatedAt': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label'],
  'sharedAt': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label'],
  'summary': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label'],
  'tasksOverview': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label'],
  'timeLogsOverview': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label'],
  'materialsOverview': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label'],
  'delayRisk': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label'],
  'pmNotes': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label'],
  'periodRange': 'Período do relatório',
  'empty': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.empty'],
  'loading': 'Carregando relatório de status…',
  'loadError': 'Não foi possível carregar o relatório de status.',
  'retry': 'Tentar de novo',
  'noRisk': 'Nenhum risco de atraso sinalizado neste período.'
};
const message_es: MessageType = {
  'statusLabel': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label'],
  'projectName': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label'],
  'periodStart': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label'],
  'periodEnd': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label'],
  'generatedAt': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label'],
  'sharedAt': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label'],
  'summary': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label'],
  'tasksOverview': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label'],
  'timeLogsOverview': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label'],
  'materialsOverview': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label'],
  'delayRisk': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label'],
  'pmNotes': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label'],
  'periodRange': 'Período del informe',
  'empty': s_es['intent.clientStatusWorkspace.viewStatusReport.list.empty'],
  'loading': 'Cargando informe de estado…',
  'loadError': 'No se pudo cargar el informe de estado.',
  'retry': 'Reintentar',
  'noRisk': 'Sin riesgo de retraso señalado en este período.'
};
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt-br': message_pt_br,
  'es': message_es
};
/// **collab_i18n_end**

@customElement('build-flow-fsm--web--desktop--page21--client-status-workspace-102045')
export class BuildFlowFsmDesktopPage21ClientStatusWorkspacePage extends BuildFlowFsmClientStatusWorkspaceBase {
  get msg(): MessageType {
    const lang = (typeof document !== 'undefined' && document.documentElement.lang)
      ? document.documentElement.lang.toLowerCase()
      : 'en';
    return messages[lang] ?? messages['en'] ?? message_en;
  }

  render() {
    const msg = this.msg;

    if (
      this.viewStatusReportState === 'idle' &&
      this.viewStatusReportStatusReportId
    ) {
      void this.loadViewStatusReport();
    }

    return html`
      <div class="min-h-full w-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-6 md:p-8">
          ${this.renderBody(msg)}
        </div>
      </div>
    `;
  }

  renderBody(msg: MessageType) {
    if (this.viewStatusReportState === 'loading' || (this.viewStatusReportState === 'idle' && this.viewStatusReportStatusReportId)) {
      return this.renderLoading(msg);
    }

    if (this.viewStatusReportState === 'error') {
      return this.renderError(msg);
    }

    const data = this.viewStatusReportData;
    if (!data) {
      return html`
        <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-8 text-center text-[var(--text-muted,#64748b)]">
          ${msg['empty']}
        </div>
      `;
    }

    return html`
      ${this.renderHeadline(msg, data)}
      ${this.renderReference(msg, data)}
      ${this.renderSummary(msg, data)}
      ${this.renderOverviews(msg, data)}
      ${this.renderRisk(msg, data)}
      ${this.renderNotes(msg, data)}
    `;
  }

  renderLoading(msg: MessageType) {
    return html`
      <div class="flex flex-col gap-6" aria-busy="true" aria-live="polite">
        <div class="flex flex-col items-start gap-3">
          <div class="h-4 w-24 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="h-16 w-2/3 max-w-md animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="h-5 w-1/2 max-w-xs animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
        </div>
        <div class="h-20 w-full animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
        <div class="h-32 w-full animate-pulse rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>
      </div>
    `;
  }

  renderError(msg: MessageType) {
    return html`
      <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6">
        <p class="text-[var(--text-default,#0f172a)]">${msg['loadError']}</p>
        <button
          type="button"
          class="mt-4 rounded-lg bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
          @click=${(e: Event) => this.handleViewStatusReportClick(e)}
        >
          ${msg['retry']}
        </button>
      </div>
    `;
  }

  renderHeadline(msg: MessageType, data: NonNullable<typeof this.viewStatusReportData>) {
    const statusText = data.status != null && String(data.status) !== '' ? String(data.status) : '—';
    const projectName = data.projectName != null && String(data.projectName) !== '' ? String(data.projectName) : '';

    return html`
      <header class="flex flex-col gap-2">
        <p class="text-sm font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">
          ${msg['statusLabel']}
        </p>
        <p class="text-5xl font-bold leading-tight text-[var(--text-strong,#020617)] md:text-6xl">
          ${statusText}
        </p>
        ${projectName
          ? html`
              <p class="text-lg text-[var(--text-default,#0f172a)]">
                <span class="text-[var(--text-muted,#64748b)]">${msg['projectName']}:</span>
                ${projectName}
              </p>
            `
          : nothing}
      </header>
    `;
  }

  renderReference(msg: MessageType, data: NonNullable<typeof this.viewStatusReportData>) {
    const start = data.reportPeriodStart != null ? String(data.reportPeriodStart) : '';
    const end = data.reportPeriodEnd != null ? String(data.reportPeriodEnd) : '';
    const generatedAt = data.generatedAt != null ? String(data.generatedAt) : '';
    const sharedAt = data.sharedAt != null ? String(data.sharedAt) : '';
    const period =
      start && end ? `${start} → ${end}` : start || end || '';

    if (!period && !generatedAt && !sharedAt) {
      return nothing;
    }

    return html`
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-4 py-3">
        <dl class="grid grid-cols-1 gap-2 text-sm text-[var(--text-muted,#64748b)] sm:grid-cols-2">
          ${period
            ? html`
                <div class="flex flex-col gap-0.5">
                  <dt class="font-medium">${msg['periodRange']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] tabular-nums">${period}</dd>
                </div>
              `
            : nothing}
          ${generatedAt
            ? html`
                <div class="flex flex-col gap-0.5">
                  <dt class="font-medium">${msg['generatedAt']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] tabular-nums">${generatedAt}</dd>
                </div>
              `
            : nothing}
          ${sharedAt
            ? html`
                <div class="flex flex-col gap-0.5">
                  <dt class="font-medium">${msg['sharedAt']}</dt>
                  <dd class="text-[var(--text-default,#0f172a)] tabular-nums">${sharedAt}</dd>
                </div>
              `
            : nothing}
        </dl>
      </section>
    `;
  }

  renderSummary(msg: MessageType, data: NonNullable<typeof this.viewStatusReportData>) {
    const summary = data.summary != null ? String(data.summary) : '';
    if (!summary) {
      return nothing;
    }

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm">
        <p class="mb-2 text-sm font-medium text-[var(--text-muted,#64748b)]">${msg['summary']}</p>
        <p class="whitespace-pre-wrap text-base leading-relaxed text-[var(--text-default,#0f172a)]">${summary}</p>
      </section>
    `;
  }

  renderOverviews(msg: MessageType, data: NonNullable<typeof this.viewStatusReportData>) {
    const tasks = data.tasksOverview != null ? String(data.tasksOverview) : '';
    const timeLogs = data.timeLogsOverview != null ? String(data.timeLogsOverview) : '';
    const materials = data.materialsOverview != null ? String(data.materialsOverview) : '';

    if (!tasks && !timeLogs && !materials) {
      return nothing;
    }

    return html`
      <section class="flex flex-col gap-3">
        ${tasks
          ? html`
              <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
                <p class="mb-1 text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['tasksOverview']}</p>
                <p class="whitespace-pre-wrap text-sm tabular-nums text-[var(--text-default,#0f172a)]">${tasks}</p>
              </div>
            `
          : nothing}
        ${timeLogs
          ? html`
              <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
                <p class="mb-1 text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['timeLogsOverview']}</p>
                <p class="whitespace-pre-wrap text-sm tabular-nums text-[var(--text-default,#0f172a)]">${timeLogs}</p>
              </div>
            `
          : nothing}
        ${materials
          ? html`
              <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
                <p class="mb-1 text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['materialsOverview']}</p>
                <p class="whitespace-pre-wrap text-sm tabular-nums text-[var(--text-default,#0f172a)]">${materials}</p>
              </div>
            `
          : nothing}
      </section>
    `;
  }

  renderRisk(msg: MessageType, data: NonNullable<typeof this.viewStatusReportData>) {
    const risk = data.delayRiskAssessment != null ? String(data.delayRiskAssessment).trim() : '';
    const hasRisk = risk !== '';

    if (!hasRisk) {
      return html`
        <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-4 py-3">
          <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['delayRisk']}</p>
          <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['noRisk']}</p>
        </section>
      `;
    }

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-warning-bg,#fef3c7)] px-4 py-4">
        <p class="text-xs font-medium uppercase tracking-wide text-[var(--status-warning-text,#92400e)]">${msg['delayRisk']}</p>
        <p class="mt-2 whitespace-pre-wrap text-base font-medium text-[var(--status-warning-text,#92400e)]">${risk}</p>
      </section>
    `;
  }

  renderNotes(msg: MessageType, data: NonNullable<typeof this.viewStatusReportData>) {
    const notes = data.pmNotes != null ? String(data.pmNotes) : '';
    if (!notes) {
      return nothing;
    }

    return html`
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
        <p class="mb-1 text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['pmNotes']}</p>
        <p class="whitespace-pre-wrap text-sm leading-relaxed text-[var(--text-muted,#64748b)]">${notes}</p>
      </section>
    `;
  }
}
