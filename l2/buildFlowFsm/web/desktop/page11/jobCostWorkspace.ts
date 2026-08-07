/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/jobCostWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmJobCostWorkspaceBase,
  type MessageType,
  type ViewJobCostSummaryOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page11--job-cost-workspace-102045')
export class BuildFlowFsmDesktopPage11JobCostWorkspacePage extends BuildFlowFsmJobCostWorkspaceBase {
  declare msg: MessageType;

  render() {
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          ${this.renderHeader()}
          ${this.renderSummary()}
        </div>
      </div>
    `;
  }

  renderHeader() {
    const msg = this.msg;
    return html`
      <header class="space-y-1">
        <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.jobCostWorkspace.sec-costSummary.title']}
        </h1>
      </header>
    `;
  }

  renderSummary() {
    const msg = this.msg;
    const loading = this.viewJobCostSummaryState === 'loading';
    const data = this.viewJobCostSummaryData;

    if (loading) {
      return html`
        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-3"
          aria-busy="true"
        >
          <div class="h-4 w-1/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="h-4 w-2/3 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
          <div class="h-4 w-1/2 rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
        </section>
      `;
    }

    if (!data) {
      return html`
        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6"
        >
          <p class="text-[var(--text-muted,#64748b)]">
            ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.empty']}
          </p>
        </section>
      `;
    }

    return html`
      <div class="space-y-6">
        ${this.renderProjectIdentity(data)}
        ${this.renderBudgetKpis(data)}
        ${this.renderCostBreakdown(data)}
      </div>
    `;
  }

  renderProjectIdentity(data: ViewJobCostSummaryOutput) {
    const msg = this.msg;
    const formatText = (value: string | number | null | undefined): string => {
      if (value === null || value === undefined) {
        return '—';
      }
      const text = String(value).trim();
      return text.length > 0 ? text : '—';
    };

    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-4"
      >
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.jobCostWorkspace.sec-project-header.title']}
        </h2>
        <dl class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="space-y-1">
            <dt class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label']}
            </dt>
            <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatText(data.name)}</dd>
          </div>
          <div class="space-y-1">
            <dt class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label']}
            </dt>
            <dd class="text-[var(--text-default,#0f172a)]">${formatText(data.projectId)}</dd>
          </div>
          <div class="space-y-1">
            <dt class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label']}
            </dt>
            <dd class="text-[var(--text-default,#0f172a)]">${formatText(data.clientName)}</dd>
          </div>
          <div class="space-y-1">
            <dt class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label']}
            </dt>
            <dd class="text-[var(--text-default,#0f172a)]">${formatText(data.clientId)}</dd>
          </div>
          <div class="space-y-1">
            <dt class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label']}
            </dt>
            <dd class="text-[var(--text-default,#0f172a)]">${formatText(data.status)}</dd>
          </div>
          <div class="space-y-1">
            <dt class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label']}
            </dt>
            <dd class="text-[var(--text-default,#0f172a)]">${formatText(data.startDate)}</dd>
          </div>
          <div class="space-y-1">
            <dt class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label']}
            </dt>
            <dd class="text-[var(--text-default,#0f172a)]">${formatText(data.endDate)}</dd>
          </div>
        </dl>
      </section>
    `;
  }

  renderBudgetKpis(data: ViewJobCostSummaryOutput) {
    const msg = this.msg;
    const formatMoney = (value: number | null | undefined): string => {
      if (value === null || value === undefined || Number.isNaN(value)) {
        return '—';
      }
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(value);
    };

    const variance = data.budgetVariance;
    const variancePositive = typeof variance === 'number' && variance >= 0;
    const varianceClass = variancePositive
      ? 'text-[var(--status-success-text,#166534)] bg-[var(--status-success-bg,#dcfce7)]'
      : 'text-[var(--status-error-text,#991b1b)] bg-[var(--status-error-bg,#fee2e2)]';

    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-4"
      >
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.jobCostWorkspace.sec-cost-kpis.title']}
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div
            class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-1"
          >
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label']}
            </p>
            <p class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${formatMoney(data.budget)}
            </p>
          </div>
          <div
            class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-1"
          >
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label']}
            </p>
            <p class="text-xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${formatMoney(data.totalCost)}
            </p>
          </div>
          <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] p-4 space-y-1 ${varianceClass}">
            <p class="text-sm opacity-90">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label']}
            </p>
            <p class="text-xl font-semibold">${formatMoney(data.budgetVariance)}</p>
          </div>
        </div>
      </section>
    `;
  }

  renderCostBreakdown(data: ViewJobCostSummaryOutput) {
    const msg = this.msg;
    const formatMoney = (value: number | null | undefined): string => {
      if (value === null || value === undefined || Number.isNaN(value)) {
        return '—';
      }
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(value);
    };

    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 space-y-4"
      >
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.jobCostWorkspace.sec-cost-breakdown.title']}
        </h2>
        <dl class="divide-y divide-[var(--border-subtle,#e2e8f0)]">
          <div class="flex items-center justify-between py-3 gap-4">
            <dt class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label']}
            </dt>
            <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatMoney(data.laborCost)}</dd>
          </div>
          <div class="flex items-center justify-between py-3 gap-4">
            <dt class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label']}
            </dt>
            <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatMoney(data.materialCost)}</dd>
          </div>
          <div class="flex items-center justify-between py-3 gap-4">
            <dt class="text-[var(--text-muted,#64748b)]">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label']}
            </dt>
            <dd class="text-[var(--text-default,#0f172a)] font-medium">${formatMoney(data.changeOrderCost)}</dd>
          </div>
          <div class="flex items-center justify-between py-3 gap-4">
            <dt class="text-[var(--text-strong,#0f172a)] font-medium">
              ${msg['intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label']}
            </dt>
            <dd class="text-[var(--text-strong,#0f172a)] font-semibold">${formatMoney(data.totalCost)}</dd>
          </div>
        </dl>
      </section>
    `;
  }
}
