/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/jobCostWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmJobCostWorkspaceBase,
  messages,
  type MessageType,
  type ViewJobCostSummaryOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--job-cost-workspace-102045')
export class BuildFlowFsmDesktopPage31JobCostWorkspacePage extends BuildFlowFsmJobCostWorkspaceBase {
  /** Typed message catalog — CollabLitElement supplies locale at runtime. */
  get msg(): MessageType {
    const host = this as unknown as { locale?: string };
    const locale: string = host.locale && messages[host.locale] ? host.locale : 'en';
    return messages[locale] ?? messages['en']!;
  }

  override render() {
    const msg = this.msg;
    const isLoading: boolean = this.viewJobCostSummaryState === 'loading';
    const isError: boolean = this.viewJobCostSummaryState === 'error';
    const data: ViewJobCostSummaryOutput | null = this.viewJobCostSummaryData;

    if (
      this.viewJobCostSummaryState === 'idle' &&
      this.viewJobCostSummaryProjectId
    ) {
      void this.loadViewJobCostSummary();
    }

    const formatMoney = (value: unknown): string => {
      if (value === null || value === undefined || value === '') {
        return '—';
      }
      const num: number = typeof value === 'number' ? value : Number(value);
      if (Number.isNaN(num)) {
        return String(value);
      }
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(num);
    };

    const formatDate = (value: unknown): string => {
      if (value === null || value === undefined || value === '') {
        return '—';
      }
      const raw: string = String(value);
      const parsed: Date = new Date(raw);
      if (Number.isNaN(parsed.getTime())) {
        return raw;
      }
      return parsed.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      });
    };

    const formatText = (value: unknown): string => {
      if (value === null || value === undefined || value === '') {
        return '—';
      }
      return String(value);
    };

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 print:p-0 print:bg-white">
        <div class="mx-auto max-w-3xl print:max-w-none">
          <div class="mb-4 flex items-center justify-end gap-3 print:hidden">
            <button
              type="button"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] px-4 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)] hover:opacity-90 disabled:opacity-50"
              ?disabled=${isLoading || !data}
              @click=${() => window.print()}
            >
              Print
            </button>
          </div>

          <div
            class="mx-auto max-w-3xl rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-8 py-10 shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,0.05))] print:shadow-none print:border-0 print:rounded-none print:px-0 print:py-0"
          >
            ${isLoading
              ? html`
                  <div class="space-y-6 animate-pulse" aria-busy="true">
                    <div class="h-6 w-2/5 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="grid grid-cols-2 gap-6">
                      <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-16 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    </div>
                    <div class="h-px bg-[var(--border-subtle,#e2e8f0)]"></div>
                    <div class="space-y-3">
                      <div class="h-4 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-4 w-full rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-4 w-3/4 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    </div>
                    <div class="h-8 w-1/3 ml-auto rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : isError
                ? html`
                    <div class="py-10 text-center">
                      <p class="text-[var(--text-default,#0f172a)] mb-4">
                        ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.empty']}
                      </p>
                      <button
                        type="button"
                        class="rounded-md bg-[var(--button-primary-bg,#0f172a)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] print:hidden"
                        @click=${(e: Event) => this.handleViewJobCostSummaryClick(e)}
                      >
                        ${msg['organism.jobCostWorkspace.viewJobCostSummary.title']}
                      </button>
                    </div>
                  `
                : !data
                  ? html`
                      <div class="py-10 text-center text-[var(--text-muted,#64748b)]">
                        ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.empty']}
                      </div>
                    `
                  : this.renderSheet(data, msg, formatMoney, formatDate, formatText)}
          </div>
        </div>
      </div>
    `;
  }

  renderSheet(
    data: ViewJobCostSummaryOutput,
    msg: MessageType,
    formatMoney: (value: unknown) => string,
    formatDate: (value: unknown) => string,
    formatText: (value: unknown) => string,
  ) {
    const record = data as ViewJobCostSummaryOutput & Record<string, unknown>;
    const varianceRaw: unknown = record['budgetVariance'];
    const varianceNum: number =
      typeof varianceRaw === 'number' ? varianceRaw : Number(varianceRaw);
    const varianceOver: boolean = !Number.isNaN(varianceNum) && varianceNum > 0;
    const varianceUnder: boolean = !Number.isNaN(varianceNum) && varianceNum < 0;

    return html`
      <header class="mb-8 pb-6 border-b border-[var(--border-default,#e2e8f0)]">
        <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-2">
          ${msg['section.jobCostWorkspace.sec-costSummary.title']}
        </p>
        <div class="flex flex-col gap-6 sm:flex-row sm:justify-between">
          <div class="min-w-0">
            <h2 class="text-xl font-semibold text-[var(--text-strong,#020617)] leading-tight">
              ${formatText(record['name'])}
            </h2>
            <p class="mt-1 text-sm text-[var(--text-default,#0f172a)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label']}:
              <span class="font-medium">${formatText(record['clientName'])}</span>
            </p>
            <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label']}:
              ${formatText(record['projectId'])}
            </p>
          </div>
          <div class="text-sm sm:text-right shrink-0 space-y-1">
            <p>
              <span class="text-[var(--text-muted,#64748b)]">
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label']}:
              </span>
              <span class="font-medium text-[var(--text-default,#0f172a)]">
                ${formatText(record['status'])}
              </span>
            </p>
            <p>
              <span class="text-[var(--text-muted,#64748b)]">
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label']}:
              </span>
              <span class="text-[var(--text-default,#0f172a)]">
                ${formatDate(record['startDate'])}
              </span>
            </p>
            <p>
              <span class="text-[var(--text-muted,#64748b)]">
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label']}:
              </span>
              <span class="text-[var(--text-default,#0f172a)]">
                ${formatDate(record['endDate'])}
              </span>
            </p>
          </div>
        </div>
      </header>

      <section class="mb-8">
        <h3 class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-3">
          ${msg['section.jobCostWorkspace.sec-cost-kpis.title']}
        </h3>
        <table class="w-full text-sm border-collapse">
          <tbody>
            <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
              <th
                scope="row"
                class="py-2 pr-4 text-left font-normal text-[var(--text-muted,#64748b)]"
              >
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label']}
              </th>
              <td class="py-2 text-right tabular-nums text-[var(--text-default,#0f172a)]">
                ${formatMoney(record['budget'])}
              </td>
            </tr>
            <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
              <th
                scope="row"
                class="py-2 pr-4 text-left font-normal text-[var(--text-muted,#64748b)]"
              >
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label']}
              </th>
              <td class="py-2 text-right tabular-nums font-medium text-[var(--text-strong,#020617)]">
                ${formatMoney(record['totalCost'])}
              </td>
            </tr>
            <tr>
              <th
                scope="row"
                class="py-3 pr-4 text-left font-medium text-[var(--text-default,#0f172a)]"
              >
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label']}
              </th>
              <td
                class="py-3 text-right tabular-nums font-semibold ${varianceOver
                  ? 'text-[var(--status-error-text,#b91c1c)]'
                  : varianceUnder
                    ? 'text-[var(--status-success-text,#15803d)]'
                    : 'text-[var(--text-strong,#020617)]'}"
              >
                ${formatMoney(record['budgetVariance'])}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section class="mb-10">
        <h3 class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-3">
          ${msg['section.jobCostWorkspace.sec-cost-breakdown.title']}
        </h3>
        <table class="w-full text-sm border-collapse">
          <thead>
            <tr class="border-b border-[var(--border-default,#e2e8f0)]">
              <th
                scope="col"
                class="py-2 pr-4 text-left font-normal text-[var(--text-muted,#64748b)]"
              >
                ${msg['section.jobCostWorkspace.sec-cost-breakdown.title']}
              </th>
              <th
                scope="col"
                class="py-2 text-right font-normal text-[var(--text-muted,#64748b)]"
              >
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label']}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
              <td class="py-2 pr-4 text-[var(--text-default,#0f172a)]">
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label']}
              </td>
              <td class="py-2 text-right tabular-nums text-[var(--text-default,#0f172a)]">
                ${formatMoney(record['laborCost'])}
              </td>
            </tr>
            <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
              <td class="py-2 pr-4 text-[var(--text-default,#0f172a)]">
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label']}
              </td>
              <td class="py-2 text-right tabular-nums text-[var(--text-default,#0f172a)]">
                ${formatMoney(record['materialCost'])}
              </td>
            </tr>
            <tr class="border-b border-[var(--border-subtle,#e2e8f0)]">
              <td class="py-2 pr-4 text-[var(--text-default,#0f172a)]">
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label']}
              </td>
              <td class="py-2 text-right tabular-nums text-[var(--text-default,#0f172a)]">
                ${formatMoney(record['changeOrderCost'])}
              </td>
            </tr>
            <tr>
              <td class="py-3 pr-4 font-semibold text-[var(--text-strong,#020617)]">
                ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label']}
              </td>
              <td class="py-3 text-right tabular-nums font-semibold text-[var(--text-strong,#020617)]">
                ${formatMoney(record['totalCost'])}
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <footer class="pt-6 border-t border-[var(--border-subtle,#e2e8f0)] text-xs text-[var(--text-muted,#64748b)] space-y-1">
        <p>
          ${msg['section.jobCostWorkspace.sec-project-header.title']}
          · ${formatText(record['name'])}
          · ${formatText(record['projectId'])}
        </p>
        <p>
          ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label']}:
          ${formatText(record['clientName'])}
          ${record['clientId']
            ? html` · ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label']}:
                ${formatText(record['clientId'])}`
            : nothing}
        </p>
        <p>
          ${msg['section.jobCostWorkspace.sec-cost-summary.title']}
          · ${formatDate(record['startDate'])}
          – ${formatDate(record['endDate'])}
        </p>
      </footer>
    `;
  }
}
