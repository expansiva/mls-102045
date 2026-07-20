/// <mls fileReference="_102045_/l2/cafeFlow/web/desktop/page31/managerDashboard.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowManagerDashboardBase } from '/_102045_/l2/cafeFlow/web/shared/managerDashboard.js';

@customElement('cafe-flow--web--desktop--page31--manager-dashboard-102045')
export class CafeFlowDesktopPage31ManagerDashboardPage extends CafeFlowManagerDashboardBase {
  render() {
    return html`
      <div class="min-h-full bg-slate-50">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-lg font-semibold text-slate-900">
            ${this.msg['page.title']}
          </h1>

          <!-- Section: Dashboard do dia -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-6 shadow-sm">
            <h2 class="text-lg font-semibold text-slate-900">
              ${this.msg['section.discover.title']}
            </h2>

            <!-- Organism: Pedidos do dia -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-semibold text-slate-900">
                  ${this.msg['organism.dashboard.title']}
                </h3>
                <button
                  type="button"
                  class="rounded px-3 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                  ?disabled=${this.viewDashboardState === 'loading'}
                  @click=${this.handleViewDashboardClick}
                >
                  ${this.viewDashboardState === 'loading'
                    ? '...'
                    : this.msg['action.viewDashboard.label']}
                </button>
              </div>

              ${this.viewDashboardState === 'loading'
                ? html`
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      <div class="h-20 rounded-lg border border-slate-200 bg-slate-100 animate-pulse"></div>
                      <div class="h-20 rounded-lg border border-slate-200 bg-slate-100 animate-pulse"></div>
                      <div class="h-20 rounded-lg border border-slate-200 bg-slate-100 animate-pulse"></div>
                    </div>
                  `
                : this.viewDashboardData.length === 0
                  ? html`
                      <p class="text-sm text-slate-500">${this.msg['organism.dashboard.empty']}</p>
                    `
                  : html`
                      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        ${this.viewDashboardData.map(
                          (item) => html`
                            <div class="rounded-lg border border-slate-200 bg-white p-4 shadow-sm space-y-2">
                              <div class="flex items-center justify-between gap-2">
                                <span class="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                                  ${item.status}
                                </span>
                                <span class="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                                  ${item.orderType}
                                </span>
                              </div>
                              <dl class="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                                <dt class="text-slate-500">${this.msg['column.createdAt']}</dt>
                                <dd class="text-slate-900">${item.createdAt}</dd>
                                <dt class="text-slate-500">${this.msg['column.shiftId']}</dt>
                                <dd class="text-slate-900">${item.shiftId}</dd>
                                <dt class="text-slate-500">${this.msg['column.deliveredAt']}</dt>
                                <dd class="text-slate-900">${item.deliveredAt || '—'}</dd>
                              </dl>
                            </div>
                          `,
                        )}
                      </div>
                    `}

              ${this.viewDashboardState === 'success'
                ? html`
                    <details open class="rounded-lg border border-green-600 p-3">
                      <summary class="text-sm text-green-600 cursor-pointer">
                        ${this.msg['action.viewDashboard.success']}
                      </summary>
                    </details>
                  `
                : null}
              ${this.viewDashboardState === 'error'
                ? html`
                    <details open class="rounded-lg border border-red-600 p-3">
                      <summary class="text-sm text-red-600 cursor-pointer">
                        ${this.msg['action.viewDashboard.error']}
                      </summary>
                    </details>
                  `
                : null}
            </div>

            <!-- Organism: Resumo de vendas por IA -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-semibold text-slate-900">
                  ${this.msg['organism.aiSales.title']}
                </h3>
                <button
                  type="button"
                  class="rounded px-3 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                  ?disabled=${this.requestAiSalesSummaryState === 'loading'}
                  @click=${this.handleRequestAiSalesSummaryClick}
                >
                  ${this.requestAiSalesSummaryState === 'loading'
                    ? '...'
                    : this.msg['action.requestAiSalesSummary.label']}
                </button>
              </div>

              ${this.requestAiSalesSummaryState === 'loading'
                ? html`
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      <div class="h-20 rounded-lg border border-slate-200 bg-slate-100 animate-pulse"></div>
                      <div class="h-20 rounded-lg border border-slate-200 bg-slate-100 animate-pulse"></div>
                    </div>
                  `
                : this.requestAiSalesSummaryData.length === 0
                  ? html`
                      <p class="text-sm text-slate-500">${this.msg['organism.aiSales.empty']}</p>
                    `
                  : html`
                      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        ${this.requestAiSalesSummaryData.map(
                          (item) => html`
                            <div class="rounded-lg border border-slate-200 bg-white p-4 shadow-sm space-y-2">
                              <div class="flex items-center justify-between gap-2">
                                <span class="text-sm font-medium text-slate-900">
                                  ${this.msg['column.orderId']}: ${item.orderId}
                                </span>
                                <span class="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                                  ${item.status}
                                </span>
                              </div>
                              <dl class="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                                <dt class="text-slate-500">${this.msg['column.orderType']}</dt>
                                <dd class="text-slate-900">${item.orderType}</dd>
                                <dt class="text-slate-500">${this.msg['column.createdAt']}</dt>
                                <dd class="text-slate-900">${item.createdAt}</dd>
                                <dt class="text-slate-500">${this.msg['column.deliveredAt']}</dt>
                                <dd class="text-slate-900">${item.deliveredAt || '—'}</dd>
                              </dl>
                            </div>
                          `,
                        )}
                      </div>
                    `}

              ${this.requestAiSalesSummaryState === 'success'
                ? html`
                    <details open class="rounded-lg border border-green-600 p-3">
                      <summary class="text-sm text-green-600 cursor-pointer">
                        ${this.msg['action.requestAiSalesSummary.success']}
                      </summary>
                    </details>
                  `
                : null}
              ${this.requestAiSalesSummaryState === 'error'
                ? html`
                    <details open class="rounded-lg border border-red-600 p-3">
                      <summary class="text-sm text-red-600 cursor-pointer">
                        ${this.msg['action.requestAiSalesSummary.error']}
                      </summary>
                    </details>
                  `
                : null}
            </div>

            <!-- Organism: Sugestões de promoção por IA -->
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <h3 class="text-sm font-semibold text-slate-900">
                  ${this.msg['organism.aiPromo.title']}
                </h3>
                <button
                  type="button"
                  class="rounded px-3 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                  ?disabled=${this.requestAiPromoSuggestionsState === 'loading'}
                  @click=${this.handleRequestAiPromoSuggestionsClick}
                >
                  ${this.requestAiPromoSuggestionsState === 'loading'
                    ? '...'
                    : this.msg['action.requestAiPromoSuggestions.label']}
                </button>
              </div>

              ${this.requestAiPromoSuggestionsState === 'loading'
                ? html`
                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                      <div class="h-20 rounded-lg border border-slate-200 bg-slate-100 animate-pulse"></div>
                      <div class="h-20 rounded-lg border border-slate-200 bg-slate-100 animate-pulse"></div>
                    </div>
                  `
                : this.requestAiPromoSuggestionsData.length === 0
                  ? html`
                      <p class="text-sm text-slate-500">${this.msg['organism.aiPromo.empty']}</p>
                    `
                  : html`
                      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                        ${this.requestAiPromoSuggestionsData.map(
                          (item) => html`
                            <div class="rounded-lg border border-slate-200 bg-white p-4 shadow-sm space-y-2">
                              <div class="flex items-center justify-between gap-2">
                                <span class="text-sm font-medium text-slate-900">
                                  ${this.msg['column.orderId']}: ${item.orderId}
                                </span>
                                <span class="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200">
                                  ${item.status}
                                </span>
                              </div>
                              <dl class="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
                                <dt class="text-slate-500">${this.msg['column.orderType']}</dt>
                                <dd class="text-slate-900">${item.orderType}</dd>
                                <dt class="text-slate-500">${this.msg['column.createdAt']}</dt>
                                <dd class="text-slate-900">${item.createdAt}</dd>
                              </dl>
                            </div>
                          `,
                        )}
                      </div>
                    `}

              ${this.requestAiPromoSuggestionsState === 'success'
                ? html`
                    <details open class="rounded-lg border border-green-600 p-3">
                      <summary class="text-sm text-green-600 cursor-pointer">
                        ${this.msg['action.requestAiPromoSuggestions.success']}
                      </summary>
                    </details>
                  `
                : null}
              ${this.requestAiPromoSuggestionsState === 'error'
                ? html`
                    <details open class="rounded-lg border border-red-600 p-3">
                      <summary class="text-sm text-red-600 cursor-pointer">
                        ${this.msg['action.requestAiPromoSuggestions.error']}
                      </summary>
                    </details>
                  `
                : null}
            </div>
          </section>

          <!-- Section: Revisão -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-4 shadow-sm">
            <h2 class="text-lg font-semibold text-slate-900">
              ${this.msg['section.review.title']}
            </h2>

            <!-- Organism: Resumo geral -->
            <div class="space-y-3">
              <h3 class="text-sm font-semibold text-slate-900">
                ${this.msg['organism.review.title']}
              </h3>

              <p class="text-sm text-slate-500">${this.msg['organism.review.empty']}</p>

              <dl class="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                <div class="rounded-lg border border-slate-200 p-3 space-y-1">
                  <dt class="text-slate-500">${this.msg['organism.dashboard.title']}</dt>
                  <dd class="text-slate-900 font-medium">${this.viewDashboardState}</dd>
                  <dd class="text-slate-500">${this.viewDashboardData.length}</dd>
                </div>
                <div class="rounded-lg border border-slate-200 p-3 space-y-1">
                  <dt class="text-slate-500">${this.msg['organism.aiSales.title']}</dt>
                  <dd class="text-slate-900 font-medium">${this.requestAiSalesSummaryState}</dd>
                  <dd class="text-slate-500">${this.requestAiSalesSummaryData.length}</dd>
                </div>
                <div class="rounded-lg border border-slate-200 p-3 space-y-1">
                  <dt class="text-slate-500">${this.msg['organism.aiPromo.title']}</dt>
                  <dd class="text-slate-900 font-medium">${this.requestAiPromoSuggestionsState}</dd>
                  <dd class="text-slate-500">${this.requestAiPromoSuggestionsData.length}</dd>
                </div>
              </dl>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
