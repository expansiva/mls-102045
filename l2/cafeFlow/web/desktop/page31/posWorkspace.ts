/// <mls fileReference="_102045_/l2/cafeFlow/web/desktop/page31/posWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowPosWorkspaceBase } from '/_102045_/l2/cafeFlow/web/shared/posWorkspace.js';

@customElement('cafe-flow--web--desktop--page31--pos-workspace-102045')
export class CafeFlowDesktopPage31PosWorkspacePage extends CafeFlowPosWorkspaceBase {
  render() {
    const boardItems = this.viewOrderBoardData?.items ?? [];
    const boardLoading = this.viewOrderBoardState === 'loading';
    const createLoading = this.createOrderState === 'loading';
    const deliverLoading = this.deliverOrderState === 'loading';

    const statusLabel = (s: string): string => {
      if (s === 'registered') return this.msg['lane.registered'];
      if (s === 'received') return this.msg['lane.received'];
      if (s === 'inPreparation') return this.msg['lane.inPreparation'];
      if (s === 'ready') return this.msg['lane.ready'];
      if (s === 'delivered') return this.msg['lane.delivered'];
      return s;
    };

    const statusBadgeClass = (s: string): string => {
      if (s === 'ready') return 'bg-green-100 text-green-700';
      if (s === 'inPreparation') return 'bg-amber-100 text-amber-700';
      if (s === 'received') return 'bg-blue-100 text-blue-700';
      if (s === 'delivered') return 'bg-slate-200 text-slate-600';
      return 'bg-slate-100 text-slate-600';
    };

    return html`
      <div class="min-h-full bg-slate-50">
        <div class="max-w-5xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-lg font-semibold text-slate-900">${this.msg['page.posWorkspace.title']}</h1>

          <!-- ═══ Section: queueSection / organism: orderBoard (queryList + commandTransition) ═══ -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-3">
            <div class="flex items-center justify-between gap-3">
              <div>
                <h2 class="text-lg font-semibold text-slate-900">${this.msg['queueSection.title']}</h2>
                <p class="text-xs text-slate-500">${this.msg['orderBoard.title']}</p>
              </div>
              <button
                type="button"
                class="rounded px-3 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                ?disabled=${boardLoading}
                @click=${this.handleViewOrderBoardClick}
              >
                ${boardLoading ? '...' : this.msg['action.viewOrderBoard.label']}
              </button>
            </div>

            ${boardLoading
              ? html`
                  <div class="space-y-2">
                    <div class="h-16 rounded-lg border border-slate-200 bg-slate-100 animate-pulse"></div>
                    <div class="h-16 rounded-lg border border-slate-200 bg-slate-100 animate-pulse"></div>
                    <div class="h-16 rounded-lg border border-slate-200 bg-slate-100 animate-pulse"></div>
                  </div>
                `
              : boardItems.length === 0
                ? html`<p class="text-sm text-slate-500">${this.msg['empty.orderBoard']}</p>`
                : html`
                    <div class="space-y-2">
                      ${boardItems.map(
                        (item) => html`
                          <div class="rounded-lg border border-slate-200 bg-white p-3 space-y-2">
                            <div class="flex items-center justify-between gap-2">
                              <div class="flex items-center gap-2">
                                <span class="text-xs text-slate-500">${this.msg['column.orderId']}</span>
                                <span class="text-sm font-semibold text-slate-900">${item.orderId}</span>
                              </div>
                              <span
                                class="inline-flex items-center rounded px-2 py-0.5 text-xs font-medium ${statusBadgeClass(
                                  item.status,
                                )}"
                              >
                                ${statusLabel(item.status)}
                              </span>
                            </div>

                            <dl class="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-1 text-xs">
                              <div>
                                <dt class="text-slate-500">${this.msg['column.orderType']}</dt>
                                <dd class="text-slate-900">${item.orderType}</dd>
                              </div>
                              <div>
                                <dt class="text-slate-500">${this.msg['column.tableNumber']}</dt>
                                <dd class="text-slate-900">${item.tableNumber || '—'}</dd>
                              </div>
                              <div>
                                <dt class="text-slate-500">${this.msg['column.receivedAt']}</dt>
                                <dd class="text-slate-900">${item.receivedAt || '—'}</dd>
                              </div>
                              <div>
                                <dt class="text-slate-500">${this.msg['column.inPreparationAt']}</dt>
                                <dd class="text-slate-900">${item.inPreparationAt || '—'}</dd>
                              </div>
                              <div>
                                <dt class="text-slate-500">${this.msg['column.readyAt']}</dt>
                                <dd class="text-slate-900">${item.readyAt || '—'}</dd>
                              </div>
                              <div>
                                <dt class="text-slate-500">${this.msg['column.createdAt']}</dt>
                                <dd class="text-slate-900">${item.createdAt}</dd>
                              </div>
                              ${item.priority
                                ? html`
                                    <div>
                                      <dt class="text-slate-500">${this.msg['column.priority']}</dt>
                                      <dd class="font-medium text-amber-600">★</dd>
                                    </div>
                                    <div>
                                      <dt class="text-slate-500">${this.msg['column.priorityReason']}</dt>
                                      <dd class="text-slate-900">${item.priorityReason || '—'}</dd>
                                    </div>
                                  `
                                : null}
                            </dl>

                            ${item.status === 'ready'
                              ? html`
                                  <button
                                    type="button"
                                    class="rounded px-3 py-1.5 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                                    ?disabled=${deliverLoading}
                                    @click=${() => {
                                      this.setDeliverOrderOrderId(item.orderId);
                                      this.handleDeliverOrderClick();
                                    }}
                                  >
                                    ${deliverLoading ? '...' : this.msg['action.deliverOrder.label']}
                                  </button>
                                `
                              : null}
                          </div>
                        `,
                      )}
                    </div>
                  `}

            ${this.deliverOrderState === 'success'
              ? html`<div class="rounded p-2 text-xs text-green-600">${this.msg['action.deliverOrder.success']}</div>`
              : null}
            ${this.deliverOrderState === 'error'
              ? html`
                  <div class="rounded p-2 text-xs text-red-600">
                    ${this.deliverOrderError || this.msg['action.deliverOrder.error']}
                  </div>
                `
              : null}
          </section>

          <!-- ═══ Section: createOrderSection / organism: createOrderForm (commandForm) ═══ -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-3">
            <div>
              <h2 class="text-lg font-semibold text-slate-900">${this.msg['createOrderSection.title']}</h2>
              <p class="text-xs text-slate-500">${this.msg['createOrderForm.title']}</p>
            </div>

            <div class="space-y-3">
              <div class="space-y-1">
                <label class="block text-xs font-medium text-slate-900" for="fld-order-type">
                  ${this.msg['field.orderType']} <span class="text-red-600">*</span>
                </label>
                <select
                  id="fld-order-type"
                  class="w-full rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white"
                  .value=${this.createOrderOrderType}
                  @change=${this.handleCreateOrderOrderTypeChange}
                >
                  <option value="">—</option>
                  <option value="table">table</option>
                  <option value="takeout">takeout</option>
                </select>
              </div>

              ${this.createOrderOrderType === 'table'
                ? html`
                    <div class="space-y-1">
                      <label class="block text-xs font-medium text-slate-900" for="fld-table-number">
                        ${this.msg['field.tableNumber']} <span class="text-red-600">*</span>
                      </label>
                      <input
                        id="fld-table-number"
                        type="text"
                        class="w-full rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white"
                        .value=${this.createOrderTableNumber}
                        @input=${this.handleCreateOrderTableNumberChange}
                      />
                    </div>
                  `
                : null}

              <div class="space-y-1">
                <label class="block text-xs font-medium text-slate-900" for="fld-order-items">
                  ${this.msg['field.orderItems']} <span class="text-red-600">*</span>
                </label>
                <textarea
                  id="fld-order-items"
                  class="w-full rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white"
                  rows="3"
                  .value=${this.createOrderOrderItems}
                  @input=${this.handleCreateOrderOrderItemsChange}
                ></textarea>
              </div>

              <div class="flex items-center gap-2">
                <input
                  id="fld-priority"
                  type="checkbox"
                  class="rounded border-slate-200"
                  .checked=${this.createOrderPriority === 'true'}
                  @change=${this.handleCreateOrderPriorityChange}
                />
                <label class="text-xs font-medium text-slate-900" for="fld-priority">
                  ${this.msg['field.priority']}
                </label>
              </div>

              ${this.createOrderPriority === 'true'
                ? html`
                    <div class="space-y-1">
                      <label class="block text-xs font-medium text-slate-900" for="fld-priority-reason">
                        ${this.msg['field.priorityReason']} <span class="text-red-600">*</span>
                      </label>
                      <input
                        id="fld-priority-reason"
                        type="text"
                        class="w-full rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white"
                        .value=${this.createOrderPriorityReason}
                        @input=${this.handleCreateOrderPriorityReasonChange}
                      />
                    </div>
                  `
                : null}

              <button
                type="button"
                class="rounded px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                ?disabled=${createLoading}
                @click=${this.handleCreateOrderClick}
              >
                ${createLoading ? '...' : this.msg['action.createOrder.label']}
              </button>
            </div>

            ${this.createOrderState === 'success'
              ? html`<div class="rounded p-2 text-xs text-green-600">${this.msg['action.createOrder.success']}</div>`
              : null}
            ${this.createOrderState === 'error'
              ? html`
                  <div class="rounded p-2 text-xs text-red-600">
                    ${this.createOrderError || this.msg['action.createOrder.error']}
                  </div>
                `
              : null}
          </section>

          <!-- ═══ Section: reviewSection / organism: actionSummary (summary) ═══ -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-4">
            <div>
              <h2 class="text-lg font-semibold text-slate-900">${this.msg['reviewSection.title']}</h2>
              <p class="text-xs text-slate-500">${this.msg['actionSummary.title']}</p>
            </div>

            <div class="space-y-2">
              <h3 class="text-sm font-medium text-slate-500">${this.msg['intention.reviewCreate.title']}</h3>
              ${this.createOrderOutput
                ? html`
                    <dl class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-sm">
                      <div>
                        <dt class="text-xs text-slate-500">${this.msg['field.orderId']}</dt>
                        <dd class="font-medium text-slate-900">${this.createOrderOutput.orderId}</dd>
                      </div>
                      <div>
                        <dt class="text-xs text-slate-500">${this.msg['field.status.label']}</dt>
                        <dd class="font-medium text-slate-900">${statusLabel(this.createOrderOutput.status)}</dd>
                      </div>
                      <div>
                        <dt class="text-xs text-slate-500">${this.msg['field.orderType']}</dt>
                        <dd class="font-medium text-slate-900">${this.createOrderOutput.orderType}</dd>
                      </div>
                      <div>
                        <dt class="text-xs text-slate-500">${this.msg['field.tableNumber']}</dt>
                        <dd class="font-medium text-slate-900">${this.createOrderOutput.tableNumber || '—'}</dd>
                      </div>
                      <div>
                        <dt class="text-xs text-slate-500">${this.msg['field.createdAt.label']}</dt>
                        <dd class="font-medium text-slate-900">${this.createOrderOutput.createdAt}</dd>
                      </div>
                    </dl>
                  `
                : html`<p class="text-sm text-slate-500">${this.msg['empty.review']}</p>`}
            </div>

            <div class="space-y-2">
              <h3 class="text-sm font-medium text-slate-500">${this.msg['intention.reviewDeliver.title']}</h3>
              ${this.deliverOrderOutput
                ? html`
                    <dl class="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-1 text-sm">
                      <div>
                        <dt class="text-xs text-slate-500">${this.msg['field.orderId']}</dt>
                        <dd class="font-medium text-slate-900">${this.deliverOrderOutput.orderId}</dd>
                      </div>
                      <div>
                        <dt class="text-xs text-slate-500">${this.msg['field.status.label']}</dt>
                        <dd class="font-medium text-slate-900">${statusLabel(this.deliverOrderOutput.status)}</dd>
                      </div>
                      <!-- TODO: field.deliveredAt absent from shared i18n -->
                      <div>
                        <dt class="text-xs text-slate-500">Entregue em</dt>
                        <dd class="font-medium text-slate-900">${this.deliverOrderOutput.deliveredAt || '—'}</dd>
                      </div>
                      <!-- TODO: field.updatedAt absent from shared i18n -->
                      <div>
                        <dt class="text-xs text-slate-500">Atualizado em</dt>
                        <dd class="font-medium text-slate-900">${this.deliverOrderOutput.updatedAt || '—'}</dd>
                      </div>
                    </dl>
                  `
                : html`<p class="text-sm text-slate-500">${this.msg['empty.review']}</p>`}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
