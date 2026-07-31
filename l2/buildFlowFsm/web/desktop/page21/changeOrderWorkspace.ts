/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/changeOrderWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmChangeOrderWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page21--change-order-workspace-102045')
export class BuildFlowFsmDesktopPage21ChangeOrderWorkspacePage extends BuildFlowFsmChangeOrderWorkspaceBase {
  render() {
    const statusLoading = this.cmdUpdateChangeOrderStatusState === 'loading';
    const updateLoading = this.cmdUpdateChangeOrderState === 'loading';
    const createLoading = this.cmdCreateChangeOrderState === 'loading';
    const showRejectReason =
      this.cmdUpdateChangeOrderStatusStatus === 'rejected' ||
      this.cmdUpdateChangeOrderStatusStatus === 'Rejected';
    const selectedStatus = this.cmdUpdateChangeOrderStatusStatus;

    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.changeOrderWorkspace.sec-change-order-master.title']}
          </h1>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['intent.changeOrderWorkspace.summary-first10.content.title']}
          </p>
        </header>

        <section class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 space-y-6">
            <article
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4"
            >
              <div class="flex items-start justify-between gap-3">
                <div>
                  <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                    ${this.msg['organism.changeOrderWorkspace.summary-first10.title']}
                  </h2>
                  <p class="text-sm text-[var(--text-muted,#64748b)] mt-1">
                    ${this.msg['section.changeOrderWorkspace.sec-review-change-order.title']}
                  </p>
                </div>
                ${selectedStatus
                  ? html`
                      <span
                        class="inline-flex items-center rounded-md px-2.5 py-1 text-xs font-medium bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]"
                      >
                        ${selectedStatus}
                      </span>
                    `
                  : nothing}
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] border border-[var(--border-subtle,#e2e8f0)] p-3">
                  <div class="text-[var(--text-muted,#64748b)] text-xs uppercase tracking-wide">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label']}
                  </div>
                  <div class="mt-1 font-medium text-[var(--text-default,#0f172a)]">
                    ${this.cmdUpdateChangeOrderTitle || '—'}
                  </div>
                </div>
                <div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] border border-[var(--border-subtle,#e2e8f0)] p-3">
                  <div class="text-[var(--text-muted,#64748b)] text-xs uppercase tracking-wide">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label']}
                  </div>
                  <div class="mt-1 font-medium text-[var(--text-default,#0f172a)]">
                    ${this.cmdUpdateChangeOrderImpactType || '—'}
                  </div>
                </div>
                <div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] border border-[var(--border-subtle,#e2e8f0)] p-3">
                  <div class="text-[var(--text-muted,#64748b)] text-xs uppercase tracking-wide">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label']}
                  </div>
                  <div class="mt-1 font-medium text-[var(--text-default,#0f172a)]">
                    ${this.cmdUpdateChangeOrderCostAdjustment || '—'}
                  </div>
                </div>
                <div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] border border-[var(--border-subtle,#e2e8f0)] p-3">
                  <div class="text-[var(--text-muted,#64748b)] text-xs uppercase tracking-wide">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label']}
                  </div>
                  <div class="mt-1 font-medium text-[var(--text-default,#0f172a)]">
                    ${this.cmdUpdateChangeOrderScheduleAdjustmentDays || '—'}
                  </div>
                </div>
              </div>

              <div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] border border-[var(--border-subtle,#e2e8f0)] p-3 text-sm">
                <div class="text-[var(--text-muted,#64748b)] text-xs uppercase tracking-wide">
                  ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label']}
                </div>
                <div class="mt-1 text-[var(--text-default,#0f172a)] whitespace-pre-wrap">
                  ${this.cmdUpdateChangeOrderDescription || '—'}
                </div>
              </div>
            </article>

            <article
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4"
            >
              <div>
                <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                  ${this.msg['organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title']}
                </h2>
                <p class="text-sm text-[var(--text-muted,#64748b)] mt-1">
                  ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.title']}
                </p>
              </div>

              <div class="flex flex-wrap gap-3">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${statusLoading}
                  @click=${() => {
                    this.setCmdUpdateChangeOrderStatusStatus('approved');
                    this.cmdUpdateChangeOrderStatus();
                  }}
                >
                  ${statusLoading && selectedStatus === 'approved'
                    ? html`${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus']}…`
                    : html`Approve`}
                </button>
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${statusLoading}
                  @click=${() => {
                    this.setCmdUpdateChangeOrderStatusStatus('rejected');
                    if (this.cmdUpdateChangeOrderStatusRejectionReason.trim()) {
                      this.cmdUpdateChangeOrderStatus();
                    }
                  }}
                >
                  ${statusLoading && selectedStatus === 'rejected'
                    ? html`${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus']}…`
                    : html`Reject`}
                </button>
              </div>

              ${showRejectReason
                ? html`
                    <label class="block space-y-1.5">
                      <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
                        ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label']}
                      </span>
                      <textarea
                        class="w-full min-h-[88px] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                        .value=${this.cmdUpdateChangeOrderStatusRejectionReason}
                        ?disabled=${statusLoading}
                        @input=${this.handleCmdUpdateChangeOrderStatusRejectionReasonChange}
                      ></textarea>
                    </label>
                    <button
                      type="button"
                      class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                      ?disabled=${statusLoading || !this.cmdUpdateChangeOrderStatusRejectionReason.trim()}
                      @click=${this.handleCmdUpdateChangeOrderStatusClick}
                    >
                      ${statusLoading
                        ? html`${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus']}…`
                        : this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus']}
                    </button>
                  `
                : nothing}

              ${this.cmdUpdateChangeOrderStatusState === 'success'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm"
                      role="status"
                    >
                      <!-- TODO: feedback key action.cmdUpdateChangeOrderStatus.success not in MessageType -->
                      Status updated successfully.
                    </div>
                  `
                : nothing}
              ${this.cmdUpdateChangeOrderStatusState === 'error'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm"
                      role="alert"
                    >
                      ${this.cmdUpdateChangeOrderStatusError ||
                      html`<!-- TODO: feedback key action.cmdUpdateChangeOrderStatus.error not in MessageType -->Update failed.`}
                    </div>
                  `
                : nothing}
            </article>
          </div>

          <div class="space-y-6">
            <article
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4"
            >
              <div>
                <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                  ${this.msg['section.changeOrderWorkspace.sec-edit-change-order.title']}
                </h2>
                <p class="text-sm text-[var(--text-muted,#64748b)] mt-1">
                  ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.title']}
                </p>
              </div>

              <div class="space-y-3">
                <label class="block space-y-1.5">
                  <span class="text-sm font-medium">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label']}
                  </span>
                  <input
                    type="text"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                    .value=${this.cmdUpdateChangeOrderTitle}
                    ?disabled=${updateLoading}
                    @input=${this.handleCmdUpdateChangeOrderTitleChange}
                  />
                </label>

                <label class="block space-y-1.5">
                  <span class="text-sm font-medium">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label']}
                  </span>
                  <textarea
                    class="w-full min-h-[88px] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                    .value=${this.cmdUpdateChangeOrderDescription}
                    ?disabled=${updateLoading}
                    @input=${this.handleCmdUpdateChangeOrderDescriptionChange}
                  ></textarea>
                </label>

                <label class="block space-y-1.5">
                  <span class="text-sm font-medium">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label']}
                  </span>
                  <input
                    type="text"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                    .value=${this.cmdUpdateChangeOrderImpactType}
                    ?disabled=${updateLoading}
                    @input=${this.handleCmdUpdateChangeOrderImpactTypeChange}
                  />
                </label>

                <label class="block space-y-1.5">
                  <span class="text-sm font-medium">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label']}
                  </span>
                  <input
                    type="text"
                    inputmode="decimal"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                    .value=${this.cmdUpdateChangeOrderCostAdjustment}
                    ?disabled=${updateLoading}
                    @input=${this.handleCmdUpdateChangeOrderCostAdjustmentChange}
                  />
                </label>

                <label class="block space-y-1.5">
                  <span class="text-sm font-medium">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label']}
                  </span>
                  <input
                    type="text"
                    inputmode="numeric"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                    .value=${this.cmdUpdateChangeOrderScheduleAdjustmentDays}
                    ?disabled=${updateLoading}
                    @input=${this.handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange}
                  />
                </label>
              </div>

              <button
                type="button"
                class="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
                ?disabled=${updateLoading}
                @click=${this.handleCmdUpdateChangeOrderClick}
              >
                ${updateLoading
                  ? html`${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder']}…`
                  : this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder']}
              </button>

              ${this.cmdUpdateChangeOrderState === 'success'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm"
                      role="status"
                    >
                      <!-- TODO: feedback key action.cmdUpdateChangeOrder.success not in MessageType -->
                      Change order updated successfully.
                    </div>
                  `
                : nothing}
              ${this.cmdUpdateChangeOrderState === 'error'
                ? html`
                    <div
                      class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm"
                      role="alert"
                    >
                      ${this.cmdUpdateChangeOrderError ||
                      html`<!-- TODO: feedback key action.cmdUpdateChangeOrder.error not in MessageType -->Update failed.`}
                    </div>
                  `
                : nothing}
            </article>
          </div>
        </section>

        <section
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4"
        >
          <div>
            <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['section.changeOrderWorkspace.sec-create-change-order.title']}
            </h2>
            <p class="text-sm text-[var(--text-muted,#64748b)] mt-1">
              ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title']}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <label class="block space-y-1.5">
              <span class="text-sm font-medium">
                ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label']}
              </span>
              <input
                type="text"
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                .value=${this.cmdCreateChangeOrderTitle}
                ?disabled=${createLoading}
                @input=${this.handleCmdCreateChangeOrderTitleChange}
              />
            </label>

            <label class="block space-y-1.5">
              <span class="text-sm font-medium">
                ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label']}
              </span>
              <input
                type="text"
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                .value=${this.cmdCreateChangeOrderImpactType}
                ?disabled=${createLoading}
                @input=${this.handleCmdCreateChangeOrderImpactTypeChange}
              />
            </label>

            <label class="block space-y-1.5 md:col-span-2">
              <span class="text-sm font-medium">
                ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label']}
              </span>
              <textarea
                class="w-full min-h-[96px] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                .value=${this.cmdCreateChangeOrderDescription}
                ?disabled=${createLoading}
                @input=${this.handleCmdCreateChangeOrderDescriptionChange}
              ></textarea>
            </label>

            <label class="block space-y-1.5">
              <span class="text-sm font-medium">
                ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label']}
              </span>
              <input
                type="text"
                inputmode="decimal"
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                .value=${this.cmdCreateChangeOrderCostAdjustment}
                ?disabled=${createLoading}
                @input=${this.handleCmdCreateChangeOrderCostAdjustmentChange}
              />
            </label>

            <label class="block space-y-1.5">
              <span class="text-sm font-medium">
                ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label']}
              </span>
              <input
                type="text"
                inputmode="numeric"
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#93c5fd)]"
                .value=${this.cmdCreateChangeOrderScheduleAdjustmentDays}
                ?disabled=${createLoading}
                @input=${this.handleCmdCreateChangeOrderScheduleAdjustmentDaysChange}
              />
            </label>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button
              type="button"
              class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${createLoading}
              @click=${this.handleCmdCreateChangeOrderClick}
            >
              ${createLoading
                ? html`${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder']}…`
                : this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder']}
            </button>
          </div>

          ${this.cmdCreateChangeOrderState === 'success'
            ? html`
                <div
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm"
                  role="status"
                >
                  <!-- TODO: feedback key action.cmdCreateChangeOrder.success not in MessageType -->
                  Change order created successfully.
                </div>
              `
            : nothing}
          ${this.cmdCreateChangeOrderState === 'error'
            ? html`
                <div
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm"
                  role="alert"
                >
                  ${this.cmdCreateChangeOrderError ||
                  html`<!-- TODO: feedback key action.cmdCreateChangeOrder.error not in MessageType -->Create failed.`}
                </div>
              `
            : nothing}
        </section>
      </div>
    `;
  }
}
