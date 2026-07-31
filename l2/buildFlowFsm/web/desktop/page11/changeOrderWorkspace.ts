/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/changeOrderWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmChangeOrderWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page11--change-order-workspace-102045')
export class BuildFlowFsmDesktopPage11ChangeOrderWorkspacePage extends BuildFlowFsmChangeOrderWorkspaceBase {
  render() {
    const createLoading = this.cmdCreateChangeOrderState === 'loading';
    const updateLoading = this.cmdUpdateChangeOrderState === 'loading';
    const statusLoading = this.cmdUpdateChangeOrderStatusState === 'loading';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              <!-- TODO: no page title msg key in shared MessageType -->
              Change Orders
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.changeOrderWorkspace.sec-create-change-order.title']}
            </h2>

            <div class="space-y-4">
              <h3 class="text-base font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['organism.changeOrderWorkspace.cmdCreateChangeOrder.title']}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.cmdCreateChangeOrderTitle}
                    ?disabled=${createLoading}
                    @input=${this.handleCmdCreateChangeOrderTitleChange}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.cmdCreateChangeOrderImpactType}
                    ?disabled=${createLoading}
                    @input=${this.handleCmdCreateChangeOrderImpactTypeChange}
                  />
                </label>

                <label class="flex flex-col gap-1 md:col-span-2">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label']}
                  </span>
                  <textarea
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 min-h-[96px]"
                    .value=${this.cmdCreateChangeOrderDescription}
                    ?disabled=${createLoading}
                    @input=${this.handleCmdCreateChangeOrderDescriptionChange}
                  ></textarea>
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.cmdCreateChangeOrderCostAdjustment}
                    ?disabled=${createLoading}
                    @input=${this.handleCmdCreateChangeOrderCostAdjustmentChange}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.cmdCreateChangeOrderScheduleAdjustmentDays}
                    ?disabled=${createLoading}
                    @input=${this.handleCmdCreateChangeOrderScheduleAdjustmentDaysChange}
                  />
                </label>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${createLoading}
                  @click=${this.handleCmdCreateChangeOrderClick}
                >
                  ${createLoading
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"></span>`
                    : nothing}
                  ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder']}
                </button>
              </div>

              ${this.cmdCreateChangeOrderState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]" role="status">
                      <!-- TODO: action.cmdCreateChangeOrder.success not in MessageType -->
                      Change order created successfully.
                    </div>
                  `
                : nothing}
              ${this.cmdCreateChangeOrderState === 'error'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]" role="alert">
                      ${this.cmdCreateChangeOrderError
                        ? this.cmdCreateChangeOrderError
                        : html`<!-- TODO: action.cmdCreateChangeOrder.error not in MessageType -->Failed to create change order.`}
                    </div>
                  `
                : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.changeOrderWorkspace.sec-edit-change-order.title']}
            </h2>

            <div class="space-y-4">
              <h3 class="text-base font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['organism.changeOrderWorkspace.cmdUpdateChangeOrder.title']}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.cmdUpdateChangeOrderTitle}
                    ?disabled=${updateLoading}
                    @input=${this.handleCmdUpdateChangeOrderTitleChange}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.cmdUpdateChangeOrderImpactType}
                    ?disabled=${updateLoading}
                    @input=${this.handleCmdUpdateChangeOrderImpactTypeChange}
                  />
                </label>

                <label class="flex flex-col gap-1 md:col-span-2">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label']}
                  </span>
                  <textarea
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 min-h-[96px]"
                    .value=${this.cmdUpdateChangeOrderDescription}
                    ?disabled=${updateLoading}
                    @input=${this.handleCmdUpdateChangeOrderDescriptionChange}
                  ></textarea>
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.cmdUpdateChangeOrderCostAdjustment}
                    ?disabled=${updateLoading}
                    @input=${this.handleCmdUpdateChangeOrderCostAdjustmentChange}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.cmdUpdateChangeOrderScheduleAdjustmentDays}
                    ?disabled=${updateLoading}
                    @input=${this.handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange}
                  />
                </label>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${updateLoading}
                  @click=${this.handleCmdUpdateChangeOrderClick}
                >
                  ${updateLoading
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"></span>`
                    : nothing}
                  ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder']}
                </button>
              </div>

              ${this.cmdUpdateChangeOrderState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]" role="status">
                      <!-- TODO: action.cmdUpdateChangeOrder.success not in MessageType -->
                      Change order updated successfully.
                    </div>
                  `
                : nothing}
              ${this.cmdUpdateChangeOrderState === 'error'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]" role="alert">
                      ${this.cmdUpdateChangeOrderError
                        ? this.cmdUpdateChangeOrderError
                        : html`<!-- TODO: action.cmdUpdateChangeOrder.error not in MessageType -->Failed to update change order.`}
                    </div>
                  `
                : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.changeOrderWorkspace.sec-review-change-order.title']}
            </h2>

            <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-3">
              <h3 class="text-base font-medium text-[var(--text-default,#0f172a)]">
                <!-- TODO: organism.changeOrderWorkspace.detail10.title not in MessageType -->
                Change order detail
              </h3>
              ${this.cmdUpdateChangeOrderOutput
                ? html`
                    <dl class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <dt class="text-[var(--text-muted,#64748b)]">ID</dt>
                        <dd class="text-[var(--text-default,#0f172a)]">${(this.cmdUpdateChangeOrderOutput as { changeOrderId?: string }).changeOrderId ?? '—'}</dd>
                      </div>
                    </dl>
                  `
                : this.cmdCreateChangeOrderOutput
                  ? html`
                      <dl class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <dt class="text-[var(--text-muted,#64748b)]">ID</dt>
                          <dd class="text-[var(--text-default,#0f172a)]">${(this.cmdCreateChangeOrderOutput as { changeOrderId?: string }).changeOrderId ?? '—'}</dd>
                        </div>
                      </dl>
                    `
                  : html`
                      <p class="text-sm text-[var(--text-muted,#64748b)]">
                        <!-- TODO: intent.changeOrderWorkspace.detail10.content.title / empty not in MessageType -->
                        No change order selected.
                      </p>
                    `}
            </div>

            <div class="space-y-4">
              <h3 class="text-base font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title']}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.cmdUpdateChangeOrderStatusStatus}
                    ?disabled=${statusLoading}
                    @input=${this.handleCmdUpdateChangeOrderStatusStatusChange}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                    type="text"
                    .value=${this.cmdUpdateChangeOrderStatusRejectionReason}
                    ?disabled=${statusLoading}
                    @input=${this.handleCmdUpdateChangeOrderStatusRejectionReasonChange}
                  />
                </label>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${statusLoading}
                  @click=${this.handleCmdUpdateChangeOrderStatusClick}
                >
                  ${statusLoading
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"></span>`
                    : nothing}
                  ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus']}
                </button>
              </div>

              ${this.cmdUpdateChangeOrderStatusState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]" role="status">
                      <!-- TODO: action.cmdUpdateChangeOrderStatus.success not in MessageType -->
                      Change order status updated successfully.
                    </div>
                  `
                : nothing}
              ${this.cmdUpdateChangeOrderStatusState === 'error'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]" role="alert">
                      ${this.cmdUpdateChangeOrderStatusError
                        ? this.cmdUpdateChangeOrderStatusError
                        : html`<!-- TODO: action.cmdUpdateChangeOrderStatus.error not in MessageType -->Failed to update change order status.`}
                    </div>
                  `
                : nothing}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
