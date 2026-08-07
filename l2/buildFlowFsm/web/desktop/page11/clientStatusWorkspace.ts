/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientStatusWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmClientStatusWorkspaceBase,
  messages as sharedMessages
} from '/_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.js';
import type { ViewStatusReportOutput } from '/_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.js';

/// **collab_i18n_start**
const s_en = sharedMessages['en'];
const s_pt_br = sharedMessages['pt-br'];
const s_es = sharedMessages['es'];

const message_en = {
  'title': 'Project Status',
  'subtitle': 'Review the shared project status report for progress and budget.',
  'loading': 'Loading status report…',
  'empty': s_en['intent.clientStatusWorkspace.viewStatusReport.list.empty'],
  'error': 'Unable to load the status report. Please try again.',
  'retry': 'Reload report',
  'header.section': s_en['section.clientStatusWorkspace.sec-report-header.title'],
  'summary.section': s_en['section.clientStatusWorkspace.sec-report-summary.title'],
  'overviews.section': s_en['section.clientStatusWorkspace.sec-report-overviews.title'],
  'risk.section': s_en['section.clientStatusWorkspace.sec-risk-and-notes.title'],
  'field.projectName': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label'],
  'field.status': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label'],
  'field.reportPeriodStart': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label'],
  'field.reportPeriodEnd': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label'],
  'field.generatedAt': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label'],
  'field.sharedAt': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label'],
  'field.summary': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label'],
  'field.tasksOverview': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label'],
  'field.timeLogsOverview': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label'],
  'field.materialsOverview': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label'],
  'field.delayRiskAssessment': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label'],
  'field.pmNotes': s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label']
};

export type MessageType = typeof message_en;

const message_pt_br: MessageType = {
  'title': 'Status do projeto',
  'subtitle': 'Acompanhe o relatório compartilhado de status do projeto sobre progresso e orçamento.',
  'loading': 'Carregando relatório de status…',
  'empty': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.empty'],
  'error': 'Não foi possível carregar o relatório de status. Tente novamente.',
  'retry': 'Recarregar relatório',
  'header.section': s_pt_br['section.clientStatusWorkspace.sec-report-header.title'],
  'summary.section': s_pt_br['section.clientStatusWorkspace.sec-report-summary.title'],
  'overviews.section': s_pt_br['section.clientStatusWorkspace.sec-report-overviews.title'],
  'risk.section': s_pt_br['section.clientStatusWorkspace.sec-risk-and-notes.title'],
  'field.projectName': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label'],
  'field.status': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label'],
  'field.reportPeriodStart': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label'],
  'field.reportPeriodEnd': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label'],
  'field.generatedAt': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label'],
  'field.sharedAt': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label'],
  'field.summary': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label'],
  'field.tasksOverview': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label'],
  'field.timeLogsOverview': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label'],
  'field.materialsOverview': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label'],
  'field.delayRiskAssessment': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label'],
  'field.pmNotes': s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label']
};

const message_es: MessageType = {
  'title': 'Estado del proyecto',
  'subtitle': 'Revise el informe compartido de estado del proyecto sobre avance y presupuesto.',
  'loading': 'Cargando informe de estado…',
  'empty': s_es['intent.clientStatusWorkspace.viewStatusReport.list.empty'],
  'error': 'No se pudo cargar el informe de estado. Inténtelo de nuevo.',
  'retry': 'Recargar informe',
  'header.section': s_es['section.clientStatusWorkspace.sec-report-header.title'],
  'summary.section': s_es['section.clientStatusWorkspace.sec-report-summary.title'],
  'overviews.section': s_es['section.clientStatusWorkspace.sec-report-overviews.title'],
  'risk.section': s_es['section.clientStatusWorkspace.sec-risk-and-notes.title'],
  'field.projectName': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label'],
  'field.status': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label'],
  'field.reportPeriodStart': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label'],
  'field.reportPeriodEnd': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label'],
  'field.generatedAt': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label'],
  'field.sharedAt': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label'],
  'field.summary': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label'],
  'field.tasksOverview': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label'],
  'field.timeLogsOverview': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label'],
  'field.materialsOverview': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label'],
  'field.delayRiskAssessment': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label'],
  'field.pmNotes': s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label']
};

const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt-br': message_pt_br,
  'es': message_es
};
/// **collab_i18n_end**

@customElement('build-flow-fsm--web--desktop--page11--client-status-workspace-102045')
export class BuildFlowFsmDesktopPage11ClientStatusWorkspacePage extends BuildFlowFsmClientStatusWorkspaceBase {
  get msg(): MessageType {
    const raw = (typeof document !== 'undefined' ? document.documentElement.lang : 'en') || 'en';
    const lang = raw.toLowerCase();
    if (messages[lang]) return messages[lang];
    if (lang.startsWith('pt')) return messages['pt-br'] ?? message_en;
    if (lang.startsWith('es')) return messages['es'] ?? message_en;
    return messages['en'] ?? message_en;
  }

  render() {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-2">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">${msg['title']}</h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['subtitle']}</p>
          </header>
          ${this.renderReportDetail()}
        </div>
      </div>
    `;
  }

  renderReportDetail() {
    const msg = this.msg;
    const isLoading = this.viewStatusReportState === 'loading';
    const isError = this.viewStatusReportState === 'error';
    const report: ViewStatusReportOutput | null = this.viewStatusReportData;

    if (isLoading) {
      return html`
        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 shadow-sm"
          aria-busy="true"
        >
          <div class="animate-pulse space-y-4">
            <div class="h-4 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
            <div class="h-3 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
            <div class="h-3 w-5/6 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
            <div class="h-3 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          </div>
          <p class="mt-4 text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>
        </section>
      `;
    }

    if (isError) {
      return html`
        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] p-6 space-y-4"
          role="alert"
        >
          <p class="text-sm text-[var(--status-error-text,#b91c1c)]">${msg['error']}</p>
          <button
            type="button"
            class="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${isLoading}
            @click=${(event: Event) => this.handleViewStatusReportClick(event)}
          >
            ${msg['retry']}
          </button>
        </section>
      `;
    }

    if (!report) {
      return html`
        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-4"
        >
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['empty']}</p>
          <button
            type="button"
            class="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
            @click=${(event: Event) => this.handleViewStatusReportClick(event)}
          >
            ${msg['retry']}
          </button>
        </section>
      `;
    }

    const formatValue = (value: unknown): string => {
      if (value === null || value === undefined) return '—';
      if (typeof value === 'string') {
        const trimmed = value.trim();
        return trimmed === '' ? '—' : trimmed;
      }
      if (typeof value === 'number' || typeof value === 'boolean') return String(value);
      try {
        return JSON.stringify(value);
      } catch {
        return String(value);
      }
    };

    const projectName = formatValue((report as { projectName?: unknown }).projectName);
    const status = formatValue((report as { status?: unknown }).status);
    const reportPeriodStart = formatValue((report as { reportPeriodStart?: unknown }).reportPeriodStart);
    const reportPeriodEnd = formatValue((report as { reportPeriodEnd?: unknown }).reportPeriodEnd);
    const generatedAt = formatValue((report as { generatedAt?: unknown }).generatedAt);
    const sharedAt = formatValue((report as { sharedAt?: unknown }).sharedAt);
    const summary = formatValue((report as { summary?: unknown }).summary);
    const tasksOverview = formatValue((report as { tasksOverview?: unknown }).tasksOverview);
    const timeLogsOverview = formatValue((report as { timeLogsOverview?: unknown }).timeLogsOverview);
    const materialsOverview = formatValue((report as { materialsOverview?: unknown }).materialsOverview);
    const delayRiskAssessment = formatValue((report as { delayRiskAssessment?: unknown }).delayRiskAssessment);
    const pmNotes = formatValue((report as { pmNotes?: unknown }).pmNotes);

    return html`
      <div class="space-y-6">
        <div class="flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            class="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
            @click=${(event: Event) => this.handleViewStatusReportClick(event)}
          >
            ${msg['retry']}
          </button>
        </div>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-4 shadow-sm">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['header.section']}</h2>
          <dl class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div class="space-y-1">
              <dt class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.projectName']}</dt>
              <dd class="text-sm text-[var(--text-default,#0f172a)]">${projectName}</dd>
            </div>
            <div class="space-y-1">
              <dt class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.status']}</dt>
              <dd>
                <span class="inline-flex items-center rounded-md px-2 py-1 text-xs font-medium bg-[var(--status-info-bg,#eff6ff)] text-[var(--status-info-text,#1d4ed8)]">
                  ${status}
                </span>
              </dd>
            </div>
            <div class="space-y-1">
              <dt class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.reportPeriodStart']}</dt>
              <dd class="text-sm text-[var(--text-default,#0f172a)]">${reportPeriodStart}</dd>
            </div>
            <div class="space-y-1">
              <dt class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.reportPeriodEnd']}</dt>
              <dd class="text-sm text-[var(--text-default,#0f172a)]">${reportPeriodEnd}</dd>
            </div>
            <div class="space-y-1">
              <dt class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.generatedAt']}</dt>
              <dd class="text-sm text-[var(--text-default,#0f172a)]">${generatedAt}</dd>
            </div>
            <div class="space-y-1">
              <dt class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.sharedAt']}</dt>
              <dd class="text-sm text-[var(--text-default,#0f172a)]">${sharedAt}</dd>
            </div>
          </dl>
        </section>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-3 shadow-sm">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['summary.section']}</h2>
          <div class="space-y-1">
            <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.summary']}</p>
            <p class="text-sm leading-relaxed whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${summary}</p>
          </div>
        </section>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-4 shadow-sm">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['overviews.section']}</h2>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-2">
              <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.tasksOverview']}</p>
              <p class="text-sm whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${tasksOverview}</p>
            </div>
            <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-2">
              <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.timeLogsOverview']}</p>
              <p class="text-sm whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${timeLogsOverview}</p>
            </div>
            <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-2">
              <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.materialsOverview']}</p>
              <p class="text-sm whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${materialsOverview}</p>
            </div>
          </div>
        </section>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-4 shadow-sm">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['risk.section']}</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-1">
              <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.delayRiskAssessment']}</p>
              <p class="text-sm whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${delayRiskAssessment}</p>
            </div>
            <div class="space-y-1">
              <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['field.pmNotes']}</p>
              <p class="text-sm whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${pmNotes}</p>
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
