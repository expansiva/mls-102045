/// <mls fileReference="_102045_/l2/cafeFlow/web/desktop/page31/kitchenQueue.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowKitchenQueueBase } from '/_102045_/l2/cafeFlow/web/shared/kitchenQueue.js';
import type { CafeFlowViewKitchenBoardOutputItem } from '/_102045_/l2/cafeFlow/web/contracts/kitchenQueue.js';

@customElement('cafe-flow--web--desktop--page31--kitchen-queue-102045')
export class CafeFlowDesktopPage31KitchenQueuePage extends CafeFlowKitchenQueueBase {
  render() {
    const items: CafeFlowViewKitchenBoardOutputItem[] = this.viewKitchenBoardData?.items ?? [];
    const boardLoading = this.viewKitchenBoardState === 'loading';

    // org-kitchen-board rulesApplied: only received/inPreparation orders shown, priority first,
    // then ordered by receivedAt (arrival order).
    const queueItems = items
      .filter(
        (i: CafeFlowViewKitchenBoardOutputItem) =>
          i.status === 'received' || i.status === 'inPreparation'
      )
      .slice()
      .sort((a: CafeFlowViewKitchenBoardOutputItem, b: CafeFlowViewKitchenBoardOutputItem) => {
        if (a.priority !== b.priority) return a.priority ? -1 : 1;
        return a.receivedAt.localeCompare(b.receivedAt);
      });

    const boardEmpty = queueItems.length === 0;

    const statusLabel = (s: string): string => {
      if (s === 'received') return this.msg['status.received.label'];
      if (s === 'inPreparation') return this.msg['status.inPreparation.label'];
      if (s === 'ready') return this.msg['status.ready.label'];
      if (s === 'delivered') return this.msg['status.delivered.label'];
      if (s === 'registered') return this.msg['status.registered.label'];
      return s;
    };

    const renderOrderCard = (item: CafeFlowViewKitchenBoardOutputItem): unknown => {
      const isSelected = this.updateOrderStatusOrderId === item.orderId;
      return html`
        <div
          class="rounded-lg border p-4 space-y-2 bg-white transition-colors ${isSelected
            ? 'border-blue-600 ring-1 ring-blue-600'
            : 'border-slate-200'}"
        >
          <div class="flex items-center justify-between gap-2">
            <span class="text-sm font-semibold text-slate-900"
              >${this.msg['column.orderId']}: ${item.orderId}</span
            >
            ${item.priority
              ? html`<span class="px-2 py-0.5 rounded text-xs font-medium text-white bg-blue-600"
                  >${this.msg['column.priority']}</span
                >`
              : null}
          </div>
          <div class="text-sm text-slate-500 space-y-1">
            <div>
              ${this.msg['column.status']}:
              <span class="text-slate-900 font-medium">${statusLabel(item.status)}</span>
            </div>
            <div>${this.msg['column.orderType']}: <span class="text-slate-900">${item.orderType}</span></div>
            ${item.tableNumber
              ? html`<div>
                  ${this.msg['column.tableNumber']}: <span class="text-slate-900">${item.tableNumber}</span>
                </div>`
              : null}
            ${item.priorityReason
              ? html`<div>
                  ${this.msg['column.priorityReason']}:
                  <span class="text-slate-900">${item.priorityReason}</span>
                </div>`
              : null}
            <div>${this.msg['column.receivedAt']}: <span class="text-slate-900">${item.receivedAt}</span></div>
            ${item.inPreparationAt
              ? html`<div>
                  ${this.msg['column.inPreparationAt']}:
                  <span class="text-slate-900">${item.inPreparationAt}</span>
                </div>`
              : null}
          </div>
          <button
            class="w-full px-3 py-1.5 rounded text-sm font-medium border border-slate-200 text-slate-900 hover:bg-slate-50 ${isSelected
              ? 'bg-blue-50'
              : ''}"
            @click=${() => this.setUpdateOrderStatusOrderId(item.orderId)}
          >
            ${isSelected ? '✓ ' : ''}${this.msg['action.selectOrder']}
          </button>
        </div>
      `;
    };

    return html`
      <div class="min-h-full bg-slate-50">
        <div class="max-w-5xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-lg font-semibold text-slate-900">${this.msg['page.title']}</h1>

          <!-- sec-kitchen-queue / org-kitchen-board: queryList -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-4">
            <div class="flex items-center justify-between gap-3">
              <div>
                <h2 class="text-lg font-semibold text-slate-900">${this.msg['sec.kitchen.queue.title']}</h2>
                <p class="text-sm text-slate-500">${this.msg['org.kitchen.board.title']}</p>
              </div>
              <button
                class="px-3 py-1.5 rounded text-sm font-medium border border-slate-200 text-slate-900 hover:bg-slate-50 disabled:opacity-50"
                @click=${(e: Event) => this.handleViewKitchenBoardClick(e)}
                ?disabled=${boardLoading}
              >
                ${boardLoading ? '...' : this.msg['action.viewKitchenBoard.label']}
              </button>
            </div>

            ${boardLoading
              ? html`<div class="py-8 text-center text-sm text-slate-500">...</div>`
              : boardEmpty
                ? html`<div class="py-8 text-center text-sm text-slate-500">${this.msg['empty.kitchenBoard']}</div>`
                : html`<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                    ${queueItems.map(renderOrderCard)}
                  </div>`}
          </section>

          <!-- sec-order-transition / org-status-transition: commandForm -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-4">
            <div>
              <h2 class="text-lg font-semibold text-slate-900">${this.msg['sec.order.transition.title']}</h2>
              <p class="text-sm text-slate-500">${this.msg['org.status.transition.title']}</p>
            </div>

            ${!this.updateOrderStatusOrderId
              ? html`<div class="py-6 text-center text-sm text-slate-500">
                  ${this.msg['empty.transitionPanel']}
                </div>`
              : html`
                  <div class="space-y-3">
                    <div>
                      <label class="block text-xs font-medium text-slate-500 mb-1"
                        >${this.msg['field.orderId.label']}</label
                      >
                      <!-- rulesApplied: orderId é derivado do pedido selecionado na fila, nunca digitado manualmente -->
                      <input
                        type="text"
                        .value=${this.updateOrderStatusOrderId}
                        readonly
                        class="w-full px-3 py-2 rounded border border-slate-200 bg-slate-50 text-slate-900 text-sm"
                      />
                    </div>
                    <div>
                      <label class="block text-xs font-medium text-slate-500 mb-1"
                        >${this.msg['field.status.label']}</label
                      >
                      <select
                        .value=${this.updateOrderStatusStatus}
                        @change=${(e: Event) => this.handleUpdateOrderStatusStatusChange(e)}
                        class="w-full px-3 py-2 rounded border border-slate-200 bg-white text-slate-900 text-sm"
                      >
                        <option value="">--</option>
                        <!-- rulesApplied: ciclo de vida received->inPreparation->ready, apenas transições futuras oferecidas -->
                        <option
                          value="inPreparation"
                          ?selected=${this.updateOrderStatusStatus === 'inPreparation'}
                        >
                          ${this.msg['status.inPreparation.label']}
                        </option>
                        <option value="ready" ?selected=${this.updateOrderStatusStatus === 'ready'}>
                          ${this.msg['status.ready.label']}
                        </option>
                      </select>
                    </div>

                    ${this.updateOrderStatusState === 'success'
                      ? html`<div class="rounded px-3 py-2 text-sm text-white bg-green-600">
                          ${this.msg['action.updateOrderStatus.success']}
                        </div>`
                      : null}
                    ${this.updateOrderStatusState === 'error'
                      ? html`<div class="rounded px-3 py-2 text-sm text-white bg-red-600">
                          ${this.updateOrderStatusError || this.msg['action.updateOrderStatus.error']}
                        </div>`
                      : null}

                    <button
                      class="px-4 py-2 rounded font-medium text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
                      @click=${(e: Event) => this.handleUpdateOrderStatusClick(e)}
                      ?disabled=${this.updateOrderStatusState === 'loading' || !this.updateOrderStatusStatus}
                    >
                      ${this.updateOrderStatusState === 'loading'
                        ? '...'
                        : this.msg['action.updateOrderStatus.submit']}
                    </button>
                  </div>
                `}
          </section>
        </div>
      </div>
    `;
  }
}
