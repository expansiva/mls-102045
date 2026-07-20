/// <mls fileReference="_102045_/l2/cafeFlow/web/desktop/page31/menuManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowMenuManagementBase } from '/_102045_/l2/cafeFlow/web/shared/menuManagement.js';
import type { CafeFlowBrowseMenuItemsOutputItem } from '/_102045_/l2/cafeFlow/web/contracts/menuManagement.js';

@customElement('cafe-flow--web--desktop--page31--menu-management-102045')
export class CafeFlowDesktopPage31MenuManagementPage extends CafeFlowMenuManagementBase {
  render() {
    const items: CafeFlowBrowseMenuItemsOutputItem[] = this.browseMenuItemsData?.items ?? [];
    const isBrowseLoading = this.browseMenuItemsState === 'loading';
    const isManageLoading = this.manageMenuItemState === 'loading';
    const isManageSuccess = this.manageMenuItemState === 'success';
    const isManageError = this.manageMenuItemState === 'error';
    const hasSelection = !!this.manageMenuItemMenuItemId;
    const output = this.manageMenuItemOutput;

    const statusBadgeClass = (status: string) =>
      status === 'active'
        ? 'bg-green-50 text-green-600 border border-green-600/20'
        : status === 'inactive'
          ? 'bg-red-50 text-red-600 border border-red-600/20'
          : 'bg-slate-100 text-slate-500 border border-slate-200';

    const statusLabel = (status: string) =>
      status === 'active'
        ? this.msg['status.active']
        : status === 'inactive'
          ? this.msg['status.inactive']
          : this.msg['status.draft'];

    return html`
      <div class="min-h-full bg-slate-50">
        <div class="max-w-5xl mx-auto px-4 py-6 space-y-6">
          <!-- Page header -->
          <div class="flex items-center justify-between">
            <h1 class="text-xl font-semibold text-slate-900">${this.msg['page.title']}</h1>
            ${this.activeCompanyId
              ? html`
                  <span
                    class="inline-flex items-center gap-1.5 px-3 py-1 rounded border border-slate-200 bg-white text-xs font-medium text-slate-500"
                  >
                    ${this.activeCompanyId}
                  </span>
                `
              : ''}
          </div>

          <!-- Section 1 (sec_discover): org_menuItemsCardList — queryList as compact cards -->
          <section class="rounded-lg bg-white border border-slate-200 p-4 space-y-3">
            <div>
              <p class="text-xs font-medium text-slate-500 uppercase tracking-wide">
                ${this.msg['sec.discover.title']}
              </p>
              <h2 class="text-base font-semibold text-slate-900 mt-0.5">
                ${this.msg['org.menuItemsCardList.title']}
              </h2>
            </div>

            <!-- Compact filters -->
            <div class="flex flex-wrap items-end gap-3">
              <label class="flex flex-col gap-1">
                <span class="text-xs text-slate-500">${this.msg['filter.statusFilter.label']}</span>
                <select
                  class="px-3 py-1.5 rounded border border-slate-200 bg-white text-sm text-slate-900"
                  .value="${this.browseMenuItemsStatusFilter}"
                  @change="${this.handleBrowseMenuItemsStatusFilterChange}"
                >
                  <option value="">—</option>
                  <option value="draft">${this.msg['status.draft']}</option>
                  <option value="active">${this.msg['status.active']}</option>
                  <option value="inactive">${this.msg['status.inactive']}</option>
                </select>
              </label>

              <label class="flex flex-col gap-1">
                <span class="text-xs text-slate-500"
                  >${this.msg['filter.menuCategoryIdFilter.label']}</span
                >
                <input
                  type="text"
                  class="px-3 py-1.5 rounded border border-slate-200 bg-white text-sm text-slate-900"
                  .value="${this.browseMenuItemsMenuCategoryIdFilter}"
                  @input="${this.handleBrowseMenuItemsMenuCategoryIdFilterChange}"
                />
              </label>

              <button
                type="button"
                class="px-3 py-1.5 rounded bg-slate-100 text-sm font-medium text-slate-900 hover:bg-slate-200"
                @click="${this.handleBrowseMenuItemsClick}"
              >
                ${this.msg['action.refresh.label']}
              </button>
            </div>

            <!-- Cards / loading / empty -->
            ${isBrowseLoading
              ? html`
                  <div class="py-8 text-center text-sm text-slate-500">
                    ${this.msg['action.refresh.label']}…
                  </div>
                `
              : items.length === 0
                ? html`
                    <div class="py-8 text-center text-sm text-slate-500">
                      ${this.msg['empty.menuItems']}
                    </div>
                  `
                : html`
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      ${items.map(
                        (item: CafeFlowBrowseMenuItemsOutputItem) => html`
                          <div
                            class="rounded-lg border p-3 space-y-2 ${this.manageMenuItemMenuItemId ===
                            item.menuItemId
                              ? 'border-blue-600'
                              : 'border-slate-200'}"
                          >
                            <div class="flex items-start justify-between gap-2">
                              <div>
                                <p class="text-xs text-slate-500">
                                  ${this.msg['column.menuItemId.label']}: ${item.menuItemId}
                                </p>
                                <p class="text-sm font-semibold text-slate-900">${item.name}</p>
                              </div>
                              <span
                                class="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${statusBadgeClass(
                                  item.status,
                                )}"
                              >
                                ${statusLabel(item.status)}
                              </span>
                            </div>

                            <p class="text-xs text-slate-500">
                              ${this.msg['column.description.label']}: ${item.description || '—'}
                            </p>

                            <div class="grid grid-cols-2 gap-1 text-xs text-slate-500">
                              <span>${this.msg['column.menuCategoryId.label']}: ${item.menuCategoryId}</span>
                              <span class="text-right"
                                >${this.msg['column.price.label']}: ${item.price.toFixed(2)}</span
                              >
                              <span>${this.msg['column.itemType.label']}: ${item.itemType}</span>
                              <span class="text-right"
                                >${this.msg['column.activatedAt.label']}: ${item.activatedAt || '—'}</span
                              >
                              <span>${this.msg['column.createdAt.label']}: ${item.createdAt || '—'}</span>
                              <span class="text-right"
                                >${this.msg['column.updatedAt.label']}: ${item.updatedAt || '—'}</span
                              >
                            </div>

                            <div class="flex justify-end">
                              <button
                                type="button"
                                class="px-3 py-1 rounded bg-blue-600 text-xs font-medium text-white hover:bg-blue-700"
                                @click="${() => {
                                  this.setManageMenuItemMenuItemId(item.menuItemId);
                                  this.setManageMenuItemName(item.name);
                                  this.setManageMenuItemDescription(item.description);
                                  this.setManageMenuItemMenuCategoryId(item.menuCategoryId);
                                  this.setManageMenuItemPrice(String(item.price));
                                  this.setManageMenuItemItemType(item.itemType);
                                  this.setManageMenuItemStatus(item.status);
                                }}"
                              >
                                ${this.msg['action.selectItem.label']}
                              </button>
                            </div>
                          </div>
                        `,
                      )}
                    </div>
                  `}
          </section>

          <!-- Section 2 (sec_execute): org_manageItemForm — commandForm -->
          <section class="rounded-lg bg-white border border-slate-200 p-4 space-y-3">
            <div>
              <p class="text-xs font-medium text-slate-500 uppercase tracking-wide">
                ${this.msg['sec.execute.title']}
              </p>
              <h2 class="text-base font-semibold text-slate-900 mt-0.5">
                ${this.msg['org.manageItemForm.title']}
              </h2>
            </div>

            ${!hasSelection
              ? html`
                  <div class="py-6 text-center text-sm text-slate-500">${this.msg['empty.detail']}</div>
                `
              : html`
                  <div class="space-y-3">
                    <p class="text-xs text-slate-500">
                      ${this.msg['field.menuItemId.label']}: ${this.manageMenuItemMenuItemId}
                    </p>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <label class="flex flex-col gap-1">
                        <span class="text-xs font-medium text-slate-500"
                          >${this.msg['field.name.label']}</span
                        >
                        <input
                          type="text"
                          class="px-3 py-2 rounded border border-slate-200 bg-white text-sm text-slate-900"
                          .value="${this.manageMenuItemName}"
                          @input="${this.handleManageMenuItemNameChange}"
                        />
                      </label>

                      <label class="flex flex-col gap-1">
                        <span class="text-xs font-medium text-slate-500"
                          >${this.msg['field.menuCategoryId.label']}</span
                        >
                        <input
                          type="text"
                          class="px-3 py-2 rounded border border-slate-200 bg-white text-sm text-slate-900"
                          .value="${this.manageMenuItemMenuCategoryId}"
                          @input="${this.handleManageMenuItemMenuCategoryIdChange}"
                        />
                      </label>

                      <label class="flex flex-col gap-1">
                        <span class="text-xs font-medium text-slate-500"
                          >${this.msg['field.price.label']}</span
                        >
                        <input
                          type="number"
                          step="0.01"
                          class="px-3 py-2 rounded border border-slate-200 bg-white text-sm text-slate-900"
                          .value="${this.manageMenuItemPrice}"
                          @input="${this.handleManageMenuItemPriceChange}"
                        />
                      </label>

                      <label class="flex flex-col gap-1">
                        <span class="text-xs font-medium text-slate-500"
                          >${this.msg['field.itemType.label']}</span
                        >
                        <select
                          class="px-3 py-2 rounded border border-slate-200 bg-white text-sm text-slate-900"
                          .value="${this.manageMenuItemItemType}"
                          @change="${this.handleManageMenuItemItemTypeChange}"
                        >
                          <!-- TODO: no msg key exists for itemType enum value labels (simple/variant) -->
                          <option value="">—</option>
                          <option value="simple">simple</option>
                          <option value="variant">variant</option>
                        </select>
                      </label>

                      <label class="flex flex-col gap-1">
                        <span class="text-xs font-medium text-slate-500"
                          >${this.msg['field.status.label']}</span
                        >
                        <select
                          class="px-3 py-2 rounded border border-slate-200 bg-white text-sm text-slate-900"
                          .value="${this.manageMenuItemStatus}"
                          @change="${this.handleManageMenuItemStatusChange}"
                        >
                          <option value="">—</option>
                          <option value="draft">${this.msg['status.draft']}</option>
                          <option value="active">${this.msg['status.active']}</option>
                          <option value="inactive">${this.msg['status.inactive']}</option>
                        </select>
                      </label>
                    </div>

                    <label class="flex flex-col gap-1">
                      <span class="text-xs font-medium text-slate-500"
                        >${this.msg['field.description.label']}</span
                      >
                      <textarea
                        rows="3"
                        class="px-3 py-2 rounded border border-slate-200 bg-white text-sm text-slate-900"
                        .value="${this.manageMenuItemDescription}"
                        @input="${this.handleManageMenuItemDescriptionChange}"
                      ></textarea>
                    </label>

                    <!-- rulesApplied: tipo 'simple' + ingrediente vinculado ao ativar — sem estado/campo
                         compartilhado para ingredientes vinculados nesta página; regra não implementável
                         sem inventar propriedade/estado, deixada sem UI dedicada. -->

                    <div class="flex justify-end">
                      <button
                        type="button"
                        class="px-4 py-2 rounded bg-blue-600 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
                        ?disabled="${isManageLoading}"
                        @click="${this.handleManageMenuItemClick}"
                      >
                        ${isManageLoading
                          ? html`${this.msg['action.manageMenuItem.label']}…`
                          : this.msg['action.manageMenuItem.label']}
                      </button>
                    </div>
                  </div>
                `}
          </section>

          <!-- Section 3 (sec_review): org_actionFeedback — summary -->
          <section class="rounded-lg bg-white border border-slate-200 p-4 space-y-3">
            <div>
              <p class="text-xs font-medium text-slate-500 uppercase tracking-wide">
                ${this.msg['sec.review.title']}
              </p>
              <h2 class="text-base font-semibold text-slate-900 mt-0.5">
                ${this.msg['org.actionFeedback.title']}
              </h2>
            </div>

            ${isManageSuccess
              ? html`
                  <div class="rounded border border-green-600/20 bg-green-50 p-3 space-y-2">
                    <p class="text-sm text-green-600">${this.msg['action.manageMenuItem.success']}</p>
                    ${output
                      ? html`
                          <div class="grid grid-cols-2 gap-1 text-xs text-slate-500">
                            <span>${this.msg['field.menuItemId.label']}: ${output.menuItemId}</span>
                            <span class="text-right">${this.msg['field.name.label']}: ${output.name}</span>
                            <span>${this.msg['field.status.label']}: ${statusLabel(output.status)}</span>
                            <span class="text-right"
                              >${this.msg['field.price.label']}: ${output.price.toFixed(2)}</span
                            >
                            <span>${this.msg['field.activatedAt']}: ${output.activatedAt || '—'}</span>
                            <span class="text-right"
                              >${this.msg['field.inactivatedAt']}: ${output.inactivatedAt || '—'}</span
                            >
                            <span>${this.msg['field.updatedAt']}: ${output.updatedAt || '—'}</span>
                          </div>
                        `
                      : ''}
                  </div>
                `
              : isManageError
                ? html`
                    <div class="rounded border border-red-600/20 bg-red-50 p-3">
                      <p class="text-sm text-red-600">
                        ${this.manageMenuItemError || this.msg['action.manageMenuItem.error']}
                      </p>
                    </div>
                  `
                : html`
                    <div class="py-4 text-center text-sm text-slate-500">
                      ${this.msg['section.review.empty']}
                    </div>
                  `}
          </section>
        </div>
      </div>
    `;
  }
}
