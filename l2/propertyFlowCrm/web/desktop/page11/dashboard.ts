/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/dashboard.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DashboardDashboardBase } from '/_102045_/l2/propertyFlowCrm/web/shared/dashboard.js';

@customElement('property-flow-crm--web--desktop--page11--dashboard-102045')
export class DashboardDesktopPage11DashboardPage extends DashboardDashboardBase {
  render() {
    return html`
      <div class="min-h-screen bg-slate-50 text-slate-900">
        <div class="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-8">
          <header class="flex flex-col gap-2">
            <div class="text-3xl font-semibold tracking-tight">${this.msg.pageTitle}</div>
            <div class="text-sm text-slate-500">${this.msg.brand}</div>
          </header>

          <div class="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <div class="text-sm font-medium text-slate-600">${this.msg.loaded}</div>
            <div class="mt-1 text-lg font-semibold text-slate-900">${this.status ?? ''}</div>
          </div>

          <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="flex flex-col gap-1">
                <div class="text-sm font-medium text-slate-500">${this.msg.pageTitle}</div>
                <div class="text-xl font-semibold">${this.msg.brand}</div>
              </div>
              <div class="rounded-lg bg-slate-100 px-4 py-2 text-sm text-slate-600">
                ${this.lastUpdatedAt ?? ''}
              </div>
            </div>
          </section>

          <section class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.pageTitle}</div>
              <div class="mt-3 text-3xl font-semibold text-slate-900">${this.totalProperties ?? 0}</div>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.brand}</div>
              <div class="mt-3 text-3xl font-semibold text-slate-900">${this.activeProperties ?? 0}</div>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.pageTitle}</div>
              <div class="mt-3 text-3xl font-semibold text-slate-900">${this.leadsThisMonth ?? 0}</div>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.brand}</div>
              <div class="mt-3 text-3xl font-semibold text-slate-900">${this.qualifiedLeads ?? 0}</div>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.pageTitle}</div>
              <div class="mt-3 text-3xl font-semibold text-slate-900">${this.dealCount ?? 0}</div>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.brand}</div>
              <div class="mt-3 text-3xl font-semibold text-slate-900">${this.dealValue ?? 0}</div>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.pageTitle}</div>
              <div class="mt-3 text-3xl font-semibold text-slate-900">${this.avgDealValue ?? 0}</div>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.brand}</div>
              <div class="mt-3 text-3xl font-semibold text-slate-900">${this.activityCount ?? 0}</div>
            </div>
          </section>

          <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="text-base font-semibold text-slate-900">${this.msg.pageTitle}</div>
            <div class="mt-4 grid gap-4 md:grid-cols-2">
              <div class="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.brand}</div>
                <div class="mt-2 text-sm text-slate-700">${this.propertyStatusSeries ?? ''}</div>
              </div>
              <div class="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.pageTitle}</div>
                <div class="mt-2 text-sm text-slate-700">${this.leadStageSeries ?? ''}</div>
              </div>
              <div class="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.brand}</div>
                <div class="mt-2 text-sm text-slate-700">${this.dealStageSeries ?? ''}</div>
              </div>
              <div class="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div class="text-xs uppercase tracking-wide text-slate-500">${this.msg.pageTitle}</div>
                <div class="mt-2 text-sm text-slate-700">${this.brokerActivitySeries ?? ''}</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
