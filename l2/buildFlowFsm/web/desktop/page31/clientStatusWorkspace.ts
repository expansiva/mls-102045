/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/clientStatusWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  pageTitle: 'Project Status',
  documentTitle: 'Project Status Report',
  print: 'Print',
  loading: 'Loading status report…',
  loadError: 'The status report could not be loaded.',
  retry: 'Retry',
  empty: 'No status report is available.',
  projectName: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label'],
  status: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label'],
  reportPeriod: 'Reporting period',
  reportPeriodStart: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label'],
  reportPeriodEnd: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label'],
  summary: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label'],
  tasksOverview: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label'],
  timeLogsOverview: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label'],
  materialsOverview: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label'],
  delayRiskAssessment: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label'],
  pmNotes: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label'],
  generatedAt: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label'],
  sharedAt: s_en['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label'],
  footerAttribution: 'Report metadata'
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  pageTitle: 'Status do projeto',
  documentTitle: 'Relatório de status do projeto',
  print: 'Imprimir',
  loading: 'Carregando relatório de status…',
  loadError: 'Não foi possível carregar o relatório de status.',
  retry: 'Tentar novamente',
  empty: 'Nenhum relatório de status disponível.',
  projectName: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label'],
  status: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label'],
  reportPeriod: 'Período do relatório',
  reportPeriodStart: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label'],
  reportPeriodEnd: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label'],
  summary: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label'],
  tasksOverview: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label'],
  timeLogsOverview: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label'],
  materialsOverview: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label'],
  delayRiskAssessment: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label'],
  pmNotes: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label'],
  generatedAt: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label'],
  sharedAt: s_pt_br['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label'],
  footerAttribution: 'Metadados do relatório'
};
const message_es: MessageType = {
  pageTitle: 'Estado del proyecto',
  documentTitle: 'Informe de estado del proyecto',
  print: 'Imprimir',
  loading: 'Cargando informe de estado…',
  loadError: 'No se pudo cargar el informe de estado.',
  retry: 'Reintentar',
  empty: 'No hay informe de estado disponible.',
  projectName: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label'],
  status: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.status.label'],
  reportPeriod: 'Período del informe',
  reportPeriodStart: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label'],
  reportPeriodEnd: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label'],
  summary: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label'],
  tasksOverview: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label'],
  timeLogsOverview: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label'],
  materialsOverview: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label'],
  delayRiskAssessment: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label'],
  pmNotes: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label'],
  generatedAt: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label'],
  sharedAt: s_es['intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label'],
  footerAttribution: 'Metadatos del informe'
};
const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt-br': message_pt_br,
  'es': message_es
};
/// **collab_i18n_end**

@customElement('build-flow-fsm--web--desktop--page31--client-status-workspace-102045')
export class BuildFlowFsmDesktopPage31ClientStatusWorkspacePage extends BuildFlowFsmClientStatusWorkspaceBase {
  get msg(): MessageType {
    const lang = (document.documentElement.lang || 'en').toLowerCase();
    return messages[lang] ?? messages['en'];
  }

  render(): unknown {
    const msg = this.msg;

    if (
      this.viewStatusReportState === 'idle' &&
      this.viewStatusReportStatusReportId
    ) {
      void this.loadViewStatusReport();
    }

    return html`
      <div class="min-h-full w-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 py-6 sm:px-6">
          <div class="flex flex-wrap items-center justify-between gap-3 print:hidden">
            <h1 class="text-xl font-semibold text-[var(--text-strong,#020617)]">${msg['pageTitle']}</h1>
            <button
              type="button"
              class="rounded-md border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#ffffff)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
              ?disabled=${this.viewStatusReportState !== 'success' || !this.viewStatusReportData}
              @click=${() => window.print()}
            >
              ${msg['print']}
            </button>
          </div>
          ${this.renderDocumentRegion()}
        </div>
      </div>
    `;
  }

  renderDocumentRegion(): unknown {
    const msg = this.msg;
    const isLoading = this.viewStatusReportState === 'loading' ||
      (this.viewStatusReportState === 'idle' && !!this.viewStatusReportStatusReportId);
    const isError = this.viewStatusReportState === 'error';
    const data = this.viewStatusReportData;

    if (isError) {
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-6 py-10 text-center shadow-sm"
          role="alert"
        >
          <p class="text-[var(--text-default,#0f172a)]">${msg['loadError']}</p>
          <button
            type="button"
            class="mt-4 rounded-md bg-[var(--button-primary-bg,#0f172a)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#f8fafc)]"
            @click=${(e: Event) => this.handleViewStatusReportClick(e)}
          >
            ${msg['retry']}
          </button>
        </div>
      `;
    }

    if (isLoading) {
      return html`
        <div
          class="mx-auto w-full max-w-3xl rounded-sm border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-8 py-10 shadow-sm"
          aria-busy="true"
        >
          <div class="mb-8 h-6 w-2/3 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="mb-4 h-4 w-1/2 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="mb-10 h-4 w-1/3 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="space-y-3">
            <div class="h-3 w-full animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
            <div class="h-3 w-full animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
            <div class="h-3 w-5/6 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
            <div class="h-3 w-4/6 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          </div>
          <p class="mt-8 text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>
        </div>
      `;
    }

    if (!data) {
      return html`
        <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-6 py-10 text-center">
          <p class="text-[var(--text-muted,#64748b)]">${msg['empty']}</p>
        </div>
      `;
    }

    return this.renderSheet(data);
  }

  renderSheet(data: ViewStatusReportOutput): unknown {
    const msg = this.msg;
    const projectName = this.asDisplayText((data as { projectName?: unknown }).projectName);
    const status = this.asDisplayText((data as { status?: unknown }).status);
    const periodStart = this.asDisplayText((data as { reportPeriodStart?: unknown }).reportPeriodStart);
    const periodEnd = this.asDisplayText((data as { reportPeriodEnd?: unknown }).reportPeriodEnd);
    const summary = this.asDisplayText((data as { summary?: unknown }).summary);
    const tasksOverview = this.asDisplayText((data as { tasksOverview?: unknown }).tasksOverview);
    const timeLogsOverview = this.asDisplayText((data as { timeLogsOverview?: unknown }).timeLogsOverview);
    const materialsOverview = this.asDisplayText((data as { materialsOverview?: unknown }).materialsOverview);
    const delayRiskAssessment = this.asDisplayText((data as { delayRiskAssessment?: unknown }).delayRiskAssessment);
    const pmNotes = this.asDisplayText((data as { pmNotes?: unknown }).pmNotes);
    const generatedAt = this.asDisplayText((data as { generatedAt?: unknown }).generatedAt);
    const sharedAt = this.asDisplayText((data as { sharedAt?: unknown }).sharedAt);

    return html`
      <article
        class="mx-auto w-full max-w-3xl border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-8 py-10 text-[var(--text-default,#0f172a)] shadow-sm print:max-w-none print:border-0 print:px-0 print:py-0 print:shadow-none"
      >
        <header class="border-b border-[var(--border-subtle,#e2e8f0)] pb-6">
          <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['documentTitle']}</p>
          <h2 class="mt-2 text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${projectName || '—'}
          </h2>
          <div class="mt-4 grid gap-3 text-sm sm:grid-cols-2">
            <div>
              <div class="text-[var(--text-muted,#64748b)]">${msg['status']}</div>
              <div class="mt-0.5 font-medium text-[var(--text-default,#0f172a)]">${status || '—'}</div>
            </div>
            <div>
              <div class="text-[var(--text-muted,#64748b)]">${msg['reportPeriod']}</div>
              <div class="mt-0.5 font-medium tabular-nums text-[var(--text-default,#0f172a)]">
                ${periodStart || '—'}
                <span class="text-[var(--text-muted,#64748b)]"> — </span>
                ${periodEnd || '—'}
              </div>
            </div>
          </div>
        </header>

        <section class="border-b border-[var(--border-subtle,#e2e8f0)] py-6">
          <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['summary']}</h3>
          <p class="mt-3 whitespace-pre-wrap leading-relaxed text-[var(--text-default,#0f172a)]">${summary || '—'}</p>
        </section>

        <section class="border-b border-[var(--border-subtle,#e2e8f0)] py-6">
          <table class="w-full border-collapse text-sm">
            <tbody>
              <tr class="border-b border-[var(--border-subtle,#e2e8f0)] align-top">
                <th scope="row" class="w-1/3 py-3 pr-4 text-left font-medium text-[var(--text-muted,#64748b)]">${msg['tasksOverview']}</th>
                <td class="py-3 whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${tasksOverview || '—'}</td>
              </tr>
              <tr class="border-b border-[var(--border-subtle,#e2e8f0)] align-top">
                <th scope="row" class="w-1/3 py-3 pr-4 text-left font-medium text-[var(--text-muted,#64748b)]">${msg['timeLogsOverview']}</th>
                <td class="py-3 whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${timeLogsOverview || '—'}</td>
              </tr>
              <tr class="align-top">
                <th scope="row" class="w-1/3 py-3 pr-4 text-left font-medium text-[var(--text-muted,#64748b)]">${msg['materialsOverview']}</th>
                <td class="py-3 whitespace-pre-wrap text-[var(--text-default,#0f172a)]">${materialsOverview || '—'}</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section class="border-b border-[var(--border-subtle,#e2e8f0)] py-6">
          <h3 class="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['delayRiskAssessment']}</h3>
          <p class="mt-3 whitespace-pre-wrap leading-relaxed text-[var(--text-default,#0f172a)]">${delayRiskAssessment || '—'}</p>
          <h3 class="mt-6 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['pmNotes']}</h3>
          <p class="mt-3 whitespace-pre-wrap leading-relaxed text-[var(--text-default,#0f172a)]">${pmNotes || '—'}</p>
        </section>

        <footer class="pt-6 text-xs text-[var(--text-muted,#64748b)]">
          <p class="font-medium text-[var(--text-muted,#64748b)]">${msg['footerAttribution']}</p>
          <dl class="mt-3 grid gap-2 sm:grid-cols-2">
            <div>
              <dt class="inline">${msg['generatedAt']}: </dt>
              <dd class="inline tabular-nums">${generatedAt || '—'}</dd>
            </div>
            <div>
              <dt class="inline">${msg['sharedAt']}: </dt>
              <dd class="inline tabular-nums">${sharedAt || '—'}</dd>
            </div>
          </dl>
        </footer>
      </article>
    `;
  }

  private asDisplayText(value: unknown): string {
    if (value === null || value === undefined) {
      return '';
    }
    if (typeof value === 'string' || typeof value === 'number' || typeof value === 'boolean') {
      return String(value);
    }
    try {
      return JSON.stringify(value);
    } catch {
      return '';
    }
  }
}
