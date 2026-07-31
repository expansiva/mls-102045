/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/changeOrderWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmChangeOrderWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--change-order-workspace-102045')
export class BuildFlowFsmDesktopPage31ChangeOrderWorkspacePage extends BuildFlowFsmChangeOrderWorkspaceBase {
  render() {
    const createLoading = this.cmdCreateChangeOrderState === 'loading';
    const updateLoading = this.cmdUpdateChangeOrderState === 'loading';
    const statusLoading = this.cmdUpdateChangeOrderStatusState === 'loading';

    const created = this.cmdCreateChangeOrderOutput;
    const updated = this.cmdUpdateChangeOrderOutput;
    const statused = this.cmdUpdateChangeOrderStatusOutput;

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.changeOrderWorkspace.sec-change-order-master.title']}
          </h1>
        </header>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)] mb-3">
            ${this.msg['organism.changeOrderWorkspace.summary-first10.title']}
          </h2>
          <p class="text-sm text-[var(--text-muted,#64748b)] mb-4">
            ${this.msg['intent.changeOrderWorkspace.summary-first10.content.title']}
          </p>
          <div class="grid gap-3 sm:grid-cols-3">
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">Create</div>
              <div class="mt-1 text-sm font-medium text-[var(--text-default,#0f172a)]">
                ${created
                  ? html`${String((created as { changeOrderId?: string }).changeOrderId ?? (created as { id?: string }).id ?? 'created')}`
                  : html`<span class="text-[var(--text-muted,#64748b)]">—</span>`}
              </div>
              <div class="mt-1 text-xs text-[var(--text-muted,#64748b)]">${this.cmdCreateChangeOrderState}</div>
            </div>
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">Update</div>
              <div class="mt-1 text-sm font-medium text-[var(--text-default,#0f172a)]">
                ${updated
                  ? html`${String((updated as { changeOrderId?: string }).changeOrderId ?? (updated as { id?: string }).id ?? 'updated')}`
                  : html`<span class="text-[var(--text-muted,#64748b)]">—</span>`}
              </div>
              <div class="mt-1 text-xs text-[var(--text-muted,#64748b)]">${this.cmdUpdateChangeOrderState}</div>
            </div>
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3">
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">Status</div>
              <div class="mt-1 text-sm font-medium text-[var(--text-default,#0f172a)]">
                ${statused
                  ? html`${String((statused as { status?: string }).status ?? (statused as { changeOrderId?: string }).changeOrderId ?? 'updated')}`
                  : html`<span class="text-[var(--text-muted,#64748b)]">—</span>`}
              </div>
              <div class="mt-1 text-xs text-[var(--text-muted,#64748b)]">${this.cmdUpdateChangeOrderStatusState}</div>
            </div>
          </div>
        </section>

        <div class="grid gap-6 lg:grid-cols-2">
          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['section.changeOrderWorkspace.sec-create-change-order.title']}
            </h2>
            <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
              ${this.msg['organism.changeOrderWorkspace.cmdCreateChangeOrder.title']}
            </h3>
            <div class="space-y-3">
              <p class="text-sm font-medium">${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title']}</p>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">Project ID</span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.cmdCreateChangeOrderProjectId}
                  @input=${(e: Event) => this.handleCmdCreateChangeOrderProjectIdChange(e)}
                />
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label']}
                </span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.cmdCreateChangeOrderTitle}
                  @input=${(e: Event) => this.handleCmdCreateChangeOrderTitleChange(e)}
                />
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label']}
                </span>
                <textarea
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm min-h-[80px]"
                  .value=${this.cmdCreateChangeOrderDescription}
                  @input=${(e: Event) => this.handleCmdCreateChangeOrderDescriptionChange(e)}
                ></textarea>
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label']}
                </span>
                <select
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.cmdCreateChangeOrderImpactType}
                  @change=${(e: Event) => this.handleCmdCreateChangeOrderImpactTypeChange(e)}
                >
                  <option value="">—</option>
                  <option value="cost">cost</option>
                  <option value="schedule">schedule</option>
                  <option value="scope">scope</option>
                  <option value="mixed">mixed</option>
                </select>
              </label>
              <div class="grid gap-3 sm:grid-cols-2">
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label']}
                  </span>
                  <input
                    type="number"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                    .value=${this.cmdCreateChangeOrderCostAdjustment}
                    @input=${(e: Event) => this.handleCmdCreateChangeOrderCostAdjustmentChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label']}
                  </span>
                  <input
                    type="number"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                    .value=${this.cmdCreateChangeOrderScheduleAdjustmentDays}
                    @input=${(e: Event) => this.handleCmdCreateChangeOrderScheduleAdjustmentDaysChange(e)}
                  />
                </label>
              </div>
              <div class="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${createLoading}
                  @click=${(e: Event) => this.handleCmdCreateChangeOrderClick(e)}
                >
                  ${createLoading
                    ? '…'
                    : this.msg['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder']}
                </button>
              </div>
              ${this.cmdCreateChangeOrderState === 'success'
                ? html`<div class="rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]">
                    <!-- TODO: action.cmdCreateChangeOrder.success -->
                    Change order created.
                  </div>`
                : nothing}
              ${this.cmdCreateChangeOrderState === 'error'
                ? html`<div class="rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]">
                    ${this.cmdCreateChangeOrderError || 'Error'}
                  </div>`
                : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
              ${this.msg['section.changeOrderWorkspace.sec-edit-change-order.title']}
            </h2>
            <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
              ${this.msg['organism.changeOrderWorkspace.cmdUpdateChangeOrder.title']}
            </h3>
            <div class="space-y-3">
              <p class="text-sm font-medium">${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.title']}</p>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">Change order ID</span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.cmdUpdateChangeOrderChangeOrderId}
                  @input=${(e: Event) => this.handleCmdUpdateChangeOrderChangeOrderIdChange(e)}
                />
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label']}
                </span>
                <input
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.cmdUpdateChangeOrderTitle}
                  @input=${(e: Event) => this.handleCmdUpdateChangeOrderTitleChange(e)}
                />
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label']}
                </span>
                <textarea
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm min-h-[80px]"
                  .value=${this.cmdUpdateChangeOrderDescription}
                  @input=${(e: Event) => this.handleCmdUpdateChangeOrderDescriptionChange(e)}
                ></textarea>
              </label>
              <label class="block space-y-1">
                <span class="text-sm text-[var(--text-default,#0f172a)]">
                  ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label']}
                </span>
                <select
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.cmdUpdateChangeOrderImpactType}
                  @change=${(e: Event) => this.handleCmdUpdateChangeOrderImpactTypeChange(e)}
                >
                  <option value="">—</option>
                  <option value="cost">cost</option>
                  <option value="schedule">schedule</option>
                  <option value="scope">scope</option>
                  <option value="mixed">mixed</option>
                </select>
              </label>
              <div class="grid gap-3 sm:grid-cols-2">
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label']}
                  </span>
                  <input
                    type="number"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                    .value=${this.cmdUpdateChangeOrderCostAdjustment}
                    @input=${(e: Event) => this.handleCmdUpdateChangeOrderCostAdjustmentChange(e)}
                  />
                </label>
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-default,#0f172a)]">
                    ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label']}
                  </span>
                  <input
                    type="number"
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                    .value=${this.cmdUpdateChangeOrderScheduleAdjustmentDays}
                    @input=${(e: Event) => this.handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange(e)}
                  />
                </label>
              </div>
              <div class="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${updateLoading}
                  @click=${(e: Event) => this.handleCmdUpdateChangeOrderClick(e)}
                >
                  ${updateLoading
                    ? '…'
                    : this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder']}
                </button>
              </div>
              ${this.cmdUpdateChangeOrderState === 'success'
                ? html`<div class="rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]">
                    <!-- TODO: action.cmdUpdateChangeOrder.success -->
                    Change order updated.
                  </div>`
                : nothing}
              ${this.cmdUpdateChangeOrderState === 'error'
                ? html`<div class="rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]">
                    ${this.cmdUpdateChangeOrderError || 'Error'}
                  </div>`
                : nothing}
            </div>
          </section>
        </div>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4 max-w-3xl">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">
            ${this.msg['section.changeOrderWorkspace.sec-review-change-order.title']}
          </h2>
          <h3 class="text-sm font-medium text-[var(--text-muted,#64748b)]">
            ${this.msg['organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title']}
          </h3>
          <div class="space-y-3">
            <p class="text-sm font-medium">${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.title']}</p>
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-default,#0f172a)]">Change order ID</span>
              <input
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                .value=${this.cmdUpdateChangeOrderStatusChangeOrderId}
                @input=${(e: Event) => this.handleCmdUpdateChangeOrderStatusChangeOrderIdChange(e)}
              />
            </label>
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-default,#0f172a)]">
                ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label']}
              </span>
              <select
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                .value=${this.cmdUpdateChangeOrderStatusStatus}
                @change=${(e: Event) => this.handleCmdUpdateChangeOrderStatusStatusChange(e)}
              >
                <option value="">—</option>
                <option value="draft">draft</option>
                <option value="submitted">submitted</option>
                <option value="approved">approved</option>
                <option value="rejected">rejected</option>
              </select>
            </label>
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-default,#0f172a)]">
                ${this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label']}
              </span>
              <textarea
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm min-h-[72px]"
                .value=${this.cmdUpdateChangeOrderStatusRejectionReason}
                @input=${(e: Event) => this.handleCmdUpdateChangeOrderStatusRejectionReasonChange(e)}
              ></textarea>
            </label>
            <div class="flex flex-wrap items-center gap-2 pt-1">
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${statusLoading}
                @click=${(e: Event) => {
                  this.setCmdUpdateChangeOrderStatusStatus('submitted');
                  this.handleCmdUpdateChangeOrderStatusClick(e);
                }}
              >
                ${statusLoading ? '…' : 'Submit'}
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${statusLoading}
                @click=${(e: Event) => {
                  this.setCmdUpdateChangeOrderStatusStatus('approved');
                  this.handleCmdUpdateChangeOrderStatusClick(e);
                }}
              >
                ${statusLoading ? '…' : 'Approve'}
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                ?disabled=${statusLoading}
                @click=${(e: Event) => {
                  this.setCmdUpdateChangeOrderStatusStatus('rejected');
                  this.handleCmdUpdateChangeOrderStatusClick(e);
                }}
              >
                ${statusLoading ? '…' : 'Reject'}
              </button>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
                ?disabled=${statusLoading}
                @click=${(e: Event) => this.handleCmdUpdateChangeOrderStatusClick(e)}
              >
                ${statusLoading
                  ? '…'
                  : this.msg['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus']}
              </button>
            </div>
            ${this.cmdUpdateChangeOrderStatusState === 'success'
              ? html`<div class="rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]">
                  <!-- TODO: action.cmdUpdateChangeOrderStatus.success -->
                  Change order status updated.
                </div>`
              : nothing}
            ${this.cmdUpdateChangeOrderStatusState === 'error'
              ? html`<div class="rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]">
                  ${this.cmdUpdateChangeOrderStatusError || 'Error'}
                </div>`
              : nothing}
          </div>
        </section>
      </div>
    `;
  }
}
