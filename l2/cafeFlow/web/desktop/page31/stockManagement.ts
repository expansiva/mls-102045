/// <mls fileReference="_102045_/l2/cafeFlow/web/desktop/page31/stockManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowStockManagementBase } from '/_102045_/l2/cafeFlow/web/shared/stockManagement.js';
import type { CafeFlowBrowseStockItemsOutputItem } from '/_102045_/l2/cafeFlow/web/contracts/stockManagement.js';

@customElement('cafe-flow--web--desktop--page31--stock-management-102045')
export class CafeFlowDesktopPage31StockManagementPage extends CafeFlowStockManagementBase {
  render() {
    const items: CafeFlowBrowseStockItemsOutputItem[] = this.browseStockItemsData?.items ?? [];
    const isBrowseLoading = this.browseStockItemsState === 'loading';
    const isManageLoading = this.manageStockItemState === 'loading';
    const isManageIdle = this.manageStockItemState === 'idle';
    const isManageSuccess = this.manageStockItemState === 'success';
    const isManageError = this.manageStockItemState === 'error';
    const hasSelectedItem = this.manageStockItemStockItemId !== '';

    return html`
      <div class="min-h-full bg-slate-50">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-2xl font-semibold text-slate-900">${this.msg['page.title']}</h1>

          <!-- Section: stockItemsList / organism: stockItemsBrowser (queryList) -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-4 shadow-sm">
            <div>
              <h2 class="text-lg font-semibold text-slate-900">
                ${this.msg['section.stockItemsList.title']}
              </h2>
              <p class="text-sm text-slate-500">${this.msg['org.stockItemsBrowser.title']}</p>
            </div>

            <div class="flex items-center gap-3">
              <input
                type="text"
                class="flex-1 rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                placeholder="${this.msg['field.searchTerm.label']}"
                .value="${this.browseStockItemsSearchTerm}"
                @input="${(e: Event) => this.handleBrowseStockItemsSearchTermChange(e)}"
              />
              <button
                class="rounded px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                ?disabled="${isBrowseLoading}"
                @click="${(e: Event) => this.handleBrowseStockItemsClick(e)}"
              >
                ${isBrowseLoading
                  ? this.msg['action.browseStockItems.label'] + '…'
                  : this.msg['action.browseStockItems.label']}
              </button>
            </div>

            ${isBrowseLoading
              ? html`
                  <div class="py-8 text-center text-sm text-slate-500">
                    ${this.msg['action.browseStockItems.label']}…
                  </div>
                `
              : items.length === 0
                ? html`
                    <div class="py-8 text-center text-sm text-slate-500">
                      ${this.msg['empty.browseStockItems']}
                    </div>
                  `
                : html`
                    <div class="overflow-x-auto">
                      <table class="w-full text-sm">
                        <thead>
                          <tr class="border-b border-slate-200 text-left text-slate-900">
                            <th class="py-2 px-3 font-medium">
                              ${this.msg['column.stockItemId.label']}
                            </th>
                            <th class="py-2 px-3 font-medium">
                              ${this.msg['column.name.label']}
                            </th>
                            <th class="py-2 px-3 font-medium">
                              ${this.msg['column.unit.label']}
                            </th>
                            <th class="py-2 px-3 font-medium">
                              ${this.msg['column.minimumLevel.label']}
                            </th>
                            <th class="py-2 px-3 font-medium">
                              ${this.msg['column.createdAt.label']}
                            </th>
                            <th class="py-2 px-3 font-medium">
                              ${this.msg['column.updatedAt.label']}
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          ${items.map(
                            (item: CafeFlowBrowseStockItemsOutputItem) => html`
                              <tr class="border-b border-slate-200">
                                <td class="py-2 px-3 text-slate-900">${item.stockItemId}</td>
                                <td class="py-2 px-3 text-slate-900">${item.name}</td>
                                <td class="py-2 px-3 text-slate-900">${item.unit}</td>
                                <!--
                                  TODO: rulesApplied for this organism calls for highlighting rows
                                  whose current quantity (StockLevel.currentQuantity) is at/below
                                  minimumLevel, but no shared state/property exposes a current
                                  quantity here (only minimumLevel) — left unimplemented rather
                                  than inventing a field.
                                -->
                                <td class="py-2 px-3 text-slate-900">${item.minimumLevel}</td>
                                <td class="py-2 px-3 text-slate-900">${item.createdAt}</td>
                                <td class="py-2 px-3 text-slate-900">${item.updatedAt}</td>
                              </tr>
                            `,
                          )}
                        </tbody>
                      </table>
                    </div>
                  `}
          </section>

          <!-- Section: stockItemDetailPanel / organism: stockItemManager (commandForm) -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-4 shadow-sm">
            <div>
              <h2 class="text-lg font-semibold text-slate-900">
                ${this.msg['section.stockItemDetailPanel.title']}
              </h2>
              <p class="text-sm text-slate-500">${this.msg['org.stockItemManager.title']}</p>
            </div>

            ${!hasSelectedItem
              ? html`
                  <div class="py-6 text-center text-sm text-slate-500">
                    ${this.msg['empty.manageStockItem']}
                  </div>
                `
              : html`
                  <form
                    class="space-y-4"
                    @submit="${(e: Event) => {
                      e.preventDefault();
                      this.handleManageStockItemClick(e);
                    }}"
                  >
                    <!-- stockItemId is routeParam-derived (rulesApplied: "não é editado manualmente") -->
                    <div>
                      <span class="block text-sm font-medium text-slate-900 mb-1">
                        ${this.msg['field.stockItemId.label']}
                      </span>
                      <span class="block text-sm text-slate-500">
                        ${this.manageStockItemStockItemId}
                      </span>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-slate-900 mb-1">
                        ${this.msg['field.name.label']}
                      </label>
                      <input
                        type="text"
                        class="w-full rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                        .value="${this.manageStockItemName}"
                        @input="${(e: Event) => this.handleManageStockItemNameChange(e)}"
                      />
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-slate-900 mb-1">
                        ${this.msg['field.unit.label']}
                      </label>
                      <select
                        class="w-full rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                        .value="${this.manageStockItemUnit}"
                        @change="${(e: Event) => this.handleManageStockItemUnitChange(e)}"
                      >
                        <option value="">--</option>
                        <option value="kg">kg</option>
                        <option value="liter">liter</option>
                        <option value="portion">portion</option>
                        <option value="unit">unit</option>
                      </select>
                    </div>

                    <div>
                      <label class="block text-sm font-medium text-slate-900 mb-1">
                        ${this.msg['field.minimumLevel.label']}
                      </label>
                      <input
                        type="number"
                        class="w-full rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white focus:outline-none focus:ring-1 focus:ring-blue-600"
                        .value="${this.manageStockItemMinimumLevel}"
                        @input="${(e: Event) => this.handleManageStockItemMinimumLevelChange(e)}"
                      />
                    </div>

                    <button
                      type="submit"
                      class="rounded px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                      ?disabled="${isManageLoading}"
                    >
                      ${isManageLoading
                        ? this.msg['action.manageStockItem.label'] + '…'
                        : this.msg['action.manageStockItem.label']}
                    </button>
                  </form>

                  ${isManageSuccess
                    ? html`
                        <div class="rounded border border-slate-200 bg-white px-4 py-3 text-sm text-green-600">
                          ${this.msg['action.manageStockItem.success']}
                        </div>
                      `
                    : ''}
                  ${isManageError
                    ? html`
                        <div class="rounded border border-slate-200 bg-white px-4 py-3 text-sm text-red-600">
                          ${this.manageStockItemError || this.msg['action.manageStockItem.error']}
                        </div>
                      `
                    : ''}
                `}
          </section>

          <!-- Section: reviewSummary / organism: actionSummary (summary) -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-2 shadow-sm">
            <div>
              <h2 class="text-lg font-semibold text-slate-900">
                ${this.msg['section.reviewSummary.title']}
              </h2>
              <p class="text-sm text-slate-500">${this.msg['org.actionSummary.title']}</p>
            </div>

            ${isManageIdle
              ? html`
                  <div class="py-4 text-center text-sm text-slate-500">
                    ${this.msg['empty.noActionsYet']}
                  </div>
                `
              : isManageLoading
                ? html`
                    <div class="py-4 text-center text-sm text-slate-500">
                      ${this.msg['action.manageStockItem.label']}…
                    </div>
                  `
                : isManageSuccess
                  ? html`
                      <div class="py-2 text-sm text-green-600">
                        ${this.msg['action.manageStockItem.success']}
                      </div>
                    `
                  : html`
                      <div class="py-2 text-sm text-red-600">
                        ${this.manageStockItemError || this.msg['action.manageStockItem.error']}
                      </div>
                    `}
          </section>
        </div>
      </div>
    `;
  }
}
