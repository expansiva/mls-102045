/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/jobCostWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmJobCostWorkspaceBase,
  messages as sharedMessages,
} from '/_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.js';
import type { ViewJobCostSummaryOutput } from '/_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  totalCost: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label'],
  budget: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label'],
  budgetVariance: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label'],
  laborCost: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label'],
  materialCost: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label'],
  changeOrderCost: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label'],
  name: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label'],
  clientName: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label'],
  status: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label'],
  startDate: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label'],
  endDate: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label'],
  projectId: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label'],
  clientId: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label'],
  empty: s_en['intent.jobCostWorkspace.viewJobCostSummary.list.empty'],
  costBreakdown: s_en['section.jobCostWorkspace.sec-cost-breakdown.title'],
  budgetVsActual: s_en['section.jobCostWorkspace.sec-cost-kpis.title'],
  headlineLabel: 'Total actual cost',
  loading: 'Loading cost summary…',
  retry: 'Retry',
  errorLoad: 'Could not load the job cost summary.',
  underBudget: 'Under budget',
  overBudget: 'Over budget',
  onBudget: 'On budget',
  currencySuffix: '',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  totalCost: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label'],
  budget: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label'],
  budgetVariance: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label'],
  laborCost: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label'],
  materialCost: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label'],
  changeOrderCost: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label'],
  name: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label'],
  clientName: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label'],
  status: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label'],
  startDate: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label'],
  endDate: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label'],
  projectId: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label'],
  clientId: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label'],
  empty: s_pt_br['intent.jobCostWorkspace.viewJobCostSummary.list.empty'],
  costBreakdown: s_pt_br['section.jobCostWorkspace.sec-cost-breakdown.title'],
  budgetVsActual: s_pt_br['section.jobCostWorkspace.sec-cost-kpis.title'],
  headlineLabel: 'Custo real total',
  loading: 'Carregando resumo de custos…',
  retry: 'Tentar novamente',
  errorLoad: 'Não foi possível carregar o resumo de custos do projeto.',
  underBudget: 'Abaixo do orçamento',
  overBudget: 'Acima do orçamento',
  onBudget: 'Dentro do orçamento',
  currencySuffix: '',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  totalCost: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label'],
  budget: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label'],
  budgetVariance: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label'],
  laborCost: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label'],
  materialCost: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label'],
  changeOrderCost: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label'],
  name: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label'],
  clientName: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label'],
  status: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label'],
  startDate: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label'],
  endDate: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label'],
  projectId: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label'],
  clientId: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label'],
  empty: s_es['intent.jobCostWorkspace.viewJobCostSummary.list.empty'],
  costBreakdown: s_es['section.jobCostWorkspace.sec-cost-breakdown.title'],
  budgetVsActual: s_es['section.jobCostWorkspace.sec-cost-kpis.title'],
  headlineLabel: 'Costo real total',
  loading: 'Cargando resumen de costos…',
  retry: 'Reintentar',
  errorLoad: 'No se pudo cargar el resumen de costos del proyecto.',
  underBudget: 'Por debajo del presupuesto',
  overBudget: 'Por encima del presupuesto',
  onBudget: 'Dentro del presupuesto',
  currencySuffix: '',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page21--job-cost-workspace-102045')
export class BuildFlowFsmDesktopPage21JobCostWorkspacePage extends BuildFlowFsmJobCostWorkspaceBase {
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
    if (
      this.viewJobCostSummaryState === 'idle' &&
      this.viewJobCostSummaryProjectId &&
      !this.viewJobCostSummaryData
    ) {
      void this.loadViewJobCostSummary();
    }
    return html`
      <div class="min-h-full w-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="mx-auto flex w-full max-w-5xl flex-col gap-6 p-6">
          ${this.renderHeadline(msg)}
          ${this.renderReferenceFacts(msg)}
          ${this.renderBudgetStrip(msg)}
          ${this.renderBreakdown(msg)}
        </div>
      </div>
    `;
  }

  renderHeadline(msg: PageMessageType): TemplateResult {
    const loading: boolean = this.viewJobCostSummaryState === 'loading';
    const errored: boolean = this.viewJobCostSummaryState === 'error';
    const data: ViewJobCostSummaryOutput | null = this.viewJobCostSummaryData;

    if (loading && !data) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-8 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]" aria-busy="true">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['headlineLabel']}</p>
          <div class="mt-4 h-16 w-2/3 max-w-md animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="mt-3 h-4 w-40 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
        </section>
      `;
    }

    if (errored && !data) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-8 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]">
          <p class="text-[var(--text-default,#0f172a)]">${msg['errorLoad']}</p>
          <button
            type="button"
            class="mt-4 rounded-md bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
            @click=${(e: Event) => this.handleViewJobCostSummaryClick(e)}
          >
            ${msg['retry']}
          </button>
        </section>
      `;
    }

    if (!data) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-8 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['headlineLabel']}</p>
          <p class="mt-4 text-[var(--text-muted,#64748b)]">${msg['empty']}</p>
        </section>
      `;
    }

    const totalCost: unknown = (data as { totalCost?: unknown }).totalCost;
    const budget: unknown = (data as { budget?: unknown }).budget;
    const budgetVariance: unknown = (data as { budgetVariance?: unknown }).budgetVariance;
    const totalNum: number | null = typeof totalCost === 'number' ? totalCost : null;
    const budgetNum: number | null = typeof budget === 'number' ? budget : null;
    const varianceNum: number | null =
      typeof budgetVariance === 'number'
        ? budgetVariance
        : totalNum !== null && budgetNum !== null
          ? budgetNum - totalNum
          : null;
    const overBudget: boolean =
      varianceNum !== null ? varianceNum < 0 : totalNum !== null && budgetNum !== null ? totalNum > budgetNum : false;
    const onBudget: boolean = varianceNum === 0 || (totalNum !== null && budgetNum !== null && totalNum === budgetNum);
    const varianceLabel: string = overBudget
      ? msg['overBudget']
      : onBudget
        ? msg['onBudget']
        : msg['underBudget'];
    const varianceToneBg: string = overBudget
      ? 'bg-[var(--status-warning-bg,#fef3c7)]'
      : onBudget
        ? 'bg-[var(--status-neutral-bg,#f1f5f9)]'
        : 'bg-[var(--status-success-bg,#dcfce7)]';
    const varianceToneText: string = overBudget
      ? 'text-[var(--status-warning-text,#92400e)]'
      : onBudget
        ? 'text-[var(--status-neutral-text,#334155)]'
        : 'text-[var(--status-success-text,#166534)]';
    const headlineValueClass: string = overBudget
      ? 'text-[var(--status-warning-text,#92400e)]'
      : 'text-[var(--text-strong,#020617)]';

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-8 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]">
        <p class="text-sm font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['headlineLabel']}</p>
        <p class="mt-2 text-5xl font-bold tabular-nums tracking-tight ${headlineValueClass} sm:text-6xl">
          ${this.formatAmount(totalCost)}
        </p>
        <div class="mt-4 flex flex-wrap items-center gap-3">
          <span class="inline-flex items-center rounded-md px-3 py-1 text-sm font-medium ${varianceToneBg} ${varianceToneText}">
            ${varianceLabel}
          </span>
          <span class="text-sm text-[var(--text-muted,#64748b)]">
            ${msg['budgetVariance']}:
            <span class="ml-1 font-semibold tabular-nums text-[var(--text-default,#0f172a)]">${this.formatAmount(varianceNum ?? budgetVariance)}</span>
          </span>
        </div>
      </section>
    `;
  }

  renderReferenceFacts(msg: PageMessageType): TemplateResult {
    const data: ViewJobCostSummaryOutput | null = this.viewJobCostSummaryData;
    if (!data) {
      return html`${nothing}`;
    }

    const name: unknown = (data as { name?: unknown }).name;
    const clientName: unknown = (data as { clientName?: unknown }).clientName;
    const status: unknown = (data as { status?: unknown }).status;
    const startDate: unknown = (data as { startDate?: unknown }).startDate;
    const endDate: unknown = (data as { endDate?: unknown }).endDate;
    const projectId: unknown = (data as { projectId?: unknown }).projectId;
    const clientId: unknown = (data as { clientId?: unknown }).clientId;

    return html`
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-5 py-4">
        <dl class="grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['name']}</dt>
            <dd class="mt-0.5 text-sm font-medium text-[var(--text-default,#0f172a)]">${this.formatText(name)}</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['clientName']}</dt>
            <dd class="mt-0.5 text-sm font-medium text-[var(--text-default,#0f172a)]">${this.formatText(clientName)}</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['status']}</dt>
            <dd class="mt-0.5">
              <span class="inline-flex rounded-md bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-0.5 text-sm font-medium text-[var(--status-neutral-text,#334155)] ring-1 ring-inset ring-[var(--border-default,#e2e8f0)]">
                ${this.formatText(status)}
              </span>
            </dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['startDate']}</dt>
            <dd class="mt-0.5 text-sm text-[var(--text-default,#0f172a)]">${this.formatDate(startDate)}</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['endDate']}</dt>
            <dd class="mt-0.5 text-sm text-[var(--text-default,#0f172a)]">${this.formatDate(endDate)}</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['projectId']}</dt>
            <dd class="mt-0.5 text-sm tabular-nums text-[var(--text-muted,#64748b)]">${this.formatText(projectId)}</dd>
          </div>
          <div>
            <dt class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['clientId']}</dt>
            <dd class="mt-0.5 text-sm tabular-nums text-[var(--text-muted,#64748b)]">${this.formatText(clientId)}</dd>
          </div>
        </dl>
      </section>
    `;
  }

  renderBudgetStrip(msg: PageMessageType): TemplateResult {
    const data: ViewJobCostSummaryOutput | null = this.viewJobCostSummaryData;
    if (!data) {
      return html`${nothing}`;
    }

    const budget: unknown = (data as { budget?: unknown }).budget;
    const totalCost: unknown = (data as { totalCost?: unknown }).totalCost;
    const budgetVariance: unknown = (data as { budgetVariance?: unknown }).budgetVariance;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]">
        <p class="mb-4 text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['budgetVsActual']}</p>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] px-4 py-3">
            <p class="text-xs text-[var(--text-muted,#64748b)]">${msg['budget']}</p>
            <p class="mt-1 text-xl font-semibold tabular-nums text-[var(--text-strong,#020617)]">${this.formatAmount(budget)}</p>
          </div>
          <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] px-4 py-3">
            <p class="text-xs text-[var(--text-muted,#64748b)]">${msg['totalCost']}</p>
            <p class="mt-1 text-xl font-semibold tabular-nums text-[var(--text-strong,#020617)]">${this.formatAmount(totalCost)}</p>
          </div>
          <div class="rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] px-4 py-3">
            <p class="text-xs text-[var(--text-muted,#64748b)]">${msg['budgetVariance']}</p>
            <p class="mt-1 text-xl font-semibold tabular-nums text-[var(--text-strong,#020617)]">${this.formatAmount(budgetVariance)}</p>
          </div>
        </div>
      </section>
    `;
  }

  renderBreakdown(msg: PageMessageType): TemplateResult {
    const data: ViewJobCostSummaryOutput | null = this.viewJobCostSummaryData;
    if (!data) {
      return html`${nothing}`;
    }

    const laborCost: unknown = (data as { laborCost?: unknown }).laborCost;
    const materialCost: unknown = (data as { materialCost?: unknown }).materialCost;
    const changeOrderCost: unknown = (data as { changeOrderCost?: unknown }).changeOrderCost;
    const totalCost: unknown = (data as { totalCost?: unknown }).totalCost;

    const rows: Array<{ label: string; value: unknown }> = [
      { label: msg['laborCost'], value: laborCost },
      { label: msg['materialCost'], value: materialCost },
      { label: msg['changeOrderCost'], value: changeOrderCost },
    ];

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))]">
        <p class="mb-4 text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['costBreakdown']}</p>
        <div class="overflow-hidden rounded-md border border-[var(--border-subtle,#e2e8f0)]">
          <table class="w-full border-collapse text-sm">
            <tbody>
              ${rows.map(
                (row: { label: string; value: unknown }, index: number) => html`
                  <tr class="${index % 2 === 0 ? 'bg-[var(--surface-bg,#ffffff)]' : 'bg-[var(--surface-alt-bg,#f1f5f9)]'}">
                    <th scope="row" class="px-4 py-3 text-left font-normal text-[var(--text-default,#0f172a)]">${row.label}</th>
                    <td class="px-4 py-3 text-right font-medium tabular-nums text-[var(--text-strong,#020617)]">${this.formatAmount(row.value)}</td>
                  </tr>
                `,
              )}
              <tr class="border-t border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)]">
                <th scope="row" class="px-4 py-3 text-left font-semibold text-[var(--text-strong,#020617)]">${msg['totalCost']}</th>
                <td class="px-4 py-3 text-right font-bold tabular-nums text-[var(--text-strong,#020617)]">${this.formatAmount(totalCost)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    `;
  }

  private formatAmount(value: unknown): string {
    if (value === null || value === undefined || value === '') {
      return '—';
    }
    if (typeof value === 'number' && Number.isFinite(value)) {
      try {
        return new Intl.NumberFormat(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }).format(value);
      } catch {
        return String(value);
      }
    }
    if (typeof value === 'string') {
      const parsed: number = Number(value);
      if (!Number.isNaN(parsed) && value.trim() !== '') {
        try {
          return new Intl.NumberFormat(undefined, {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(parsed);
        } catch {
          return value;
        }
      }
      return value;
    }
    return String(value);
  }

  private formatText(value: unknown): string {
    if (value === null || value === undefined || value === '') {
      return '—';
    }
    return String(value);
  }

  private formatDate(value: unknown): string {
    if (value === null || value === undefined || value === '') {
      return '—';
    }
    if (typeof value === 'string' || typeof value === 'number') {
      const date: Date = new Date(value);
      if (!Number.isNaN(date.getTime())) {
        try {
          return new Intl.DateTimeFormat(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          }).format(date);
        } catch {
          return String(value);
        }
      }
    }
    return String(value);
  }
}
