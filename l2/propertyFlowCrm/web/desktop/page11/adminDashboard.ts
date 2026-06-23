/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/adminDashboard.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AdminDashboardAdminDashboardBase } from '/_102045_/l2/propertyFlowCrm/web/shared/adminDashboard.js';

@customElement('property-flow-crm--web--desktop--page11--admin-dashboard-102045')
export class AdminDashboardDesktopPage11AdminDashboardPage extends AdminDashboardAdminDashboardBase {
  render() {
    const atualizarMetricasDashboardBusy = this.atualizarMetricasDashboardState === 'loading';

    return html`
      <div class="min-h-screen bg-slate-50 text-slate-900">
        <header class="bg-slate-900 text-slate-50">
          <div class="mx-auto flex max-w-6xl items-center justify-between px-8 py-6">
            <div>
              <p class="text-sm uppercase tracking-[0.2em] text-slate-300">${this.msg.brand}</p>
              <h1 class="text-2xl font-semibold">${this.msg.pageTitle}</h1>
            </div>
            <div class="text-sm text-slate-200">${this.status ?? ''}</div>
          </div>
        </header>

        <main class="mx-auto grid max-w-6xl gap-6 px-8 py-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex items-start justify-between">
              <div>
                <h2 class="text-lg font-semibold text-slate-800">${this.msg.loadingVisualizarAdminDashboard}</h2>
                <p class="text-sm text-slate-500">${this.msg.loaded}</p>
              </div>
              <span class="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                ${this.msg.loaded}
              </span>
            </div>

            <div class="mt-6 rounded-xl border border-slate-100 bg-slate-50 p-4">
              <div class="text-sm font-medium text-slate-600">${this.msg.pageTitle}</div>
              <div class="mt-2 text-xl font-semibold text-slate-900">
                ${this.dashboardMetrics ?? ''}
              </div>
              <div class="mt-4 text-xs uppercase tracking-wide text-slate-400">${this.msg.loaded}</div>
              <div class="text-sm text-slate-600">${this.lastUpdateAt ?? ''}</div>
            </div>
          </section>

          <section class="flex flex-col gap-6">
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 class="text-lg font-semibold text-slate-800">${this.msg.loadingListarAtualizacoesMetricas}</h2>
              <div class="mt-4 divide-y divide-slate-200">
                ${(this.atualizacoesMetricas ?? []).map(
                  item => html`
                    <div class="flex items-center justify-between py-3 text-sm text-slate-600">
                      <span>${this.msg.loaded}</span>
                      <span class="font-medium text-slate-900">${item.dashboardMetricUpdates ?? ''}</span>
                    </div>
                  `,
                )}
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div class="flex items-center justify-between">
                <div>
                  <h2 class="text-lg font-semibold text-slate-800">${this.msg.atualizarMetricasDashboardLabel}</h2>
                  <p class="text-sm text-slate-500">${this.msg.couldNotAtualizarMetricasDashboard}</p>
                </div>
                <button
                  class="rounded-lg bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                  ?disabled=${atualizarMetricasDashboardBusy}
                  @click=${this.handleAtualizarMetricasDashboardClick}
                >
                  ${atualizarMetricasDashboardBusy
                    ? this.msg.atualizarMetricasDashboardLoading
                    : this.msg.atualizarMetricasDashboardLabel}
                </button>
              </div>
              <div class="mt-4 rounded-lg bg-slate-50 p-3 text-sm text-slate-600">
                ${this.status ?? ''}
              </div>
            </div>
          </section>
        </main>
      </div>
    `;
  }
}
