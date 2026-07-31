/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/fieldLoggingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmFieldLoggingWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page11--field-logging-workspace-102045')
export class BuildFlowFsmDesktopPage11FieldLoggingWorkspacePage extends BuildFlowFsmFieldLoggingWorkspaceBase {
  render() {
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              Log Time &amp; Materials
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.fieldLoggingWorkspace.sec-time-logging.title']}
            </h2>

            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-4">
              <h3 class="text-base font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['organism.fieldLoggingWorkspace.submitTimeLog.title']}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitTimeLogWorkTaskId}
                    @input=${(e: Event) => this.handleSubmitTimeLogWorkTaskIdChange(e)}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    .value=${this.submitTimeLogLogDate}
                    @input=${(e: Event) => this.handleSubmitTimeLogLogDateChange(e)}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="number"
                    step="0.25"
                    min="0"
                    .value=${this.submitTimeLogHoursWorked}
                    @input=${(e: Event) => this.handleSubmitTimeLogHoursWorkedChange(e)}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-muted,#64748b)]"
                    type="text"
                    .value=${this.submitTimeLogWorkerName}
                    readonly
                  />
                </label>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.submitTimeLogState === 'loading'}
                  @click=${() => this.handleSubmitTimeLogClick()}
                >
                  ${this.submitTimeLogState === 'loading'
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                    : nothing}
                  ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog']}
                </button>
              </div>

              ${this.submitTimeLogState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]" role="status">
                      <!-- TODO: action.submitTimeLog.success not in MessageType -->
                      Time log submitted successfully.
                    </div>
                  `
                : nothing}
              ${this.submitTimeLogState === 'error'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]" role="alert">
                      ${this.submitTimeLogError
                        ? this.submitTimeLogError
                        : html`<!-- TODO: action.submitTimeLog.error not in MessageType -->Failed to submit time log.`}
                    </div>
                  `
                : nothing}
            </div>

            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-4">
              <h3 class="text-base font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['organism.fieldLoggingWorkspace.submitVoidTimeLog.title']}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitVoidTimeLogVoidReason}
                    @input=${(e: Event) => this.handleSubmitVoidTimeLogVoidReasonChange(e)}
                  />
                </label>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.submitVoidTimeLogState === 'loading'}
                  @click=${() => this.handleSubmitVoidTimeLogClick()}
                >
                  ${this.submitVoidTimeLogState === 'loading'
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                    : nothing}
                  ${this.msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog']}
                </button>
              </div>

              ${this.submitVoidTimeLogState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]" role="status">
                      <!-- TODO: action.submitVoidTimeLog.success not in MessageType -->
                      Time log voided successfully.
                    </div>
                  `
                : nothing}
              ${this.submitVoidTimeLogState === 'error'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]" role="alert">
                      ${this.submitVoidTimeLogError
                        ? this.submitVoidTimeLogError
                        : html`<!-- TODO: action.submitVoidTimeLog.error not in MessageType -->Failed to void time log.`}
                    </div>
                  `
                : nothing}
            </div>
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.fieldLoggingWorkspace.sec-material-logging.title']}
            </h2>

            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-4">
              <h3 class="text-base font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['organism.fieldLoggingWorkspace.submitMaterialUsage.title']}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitMaterialUsageMaterialName}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageMaterialNameChange(e)}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="number"
                    step="any"
                    min="0"
                    .value=${this.submitMaterialUsageQuantity}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageQuantityChange(e)}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitMaterialUsageUnit}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageUnitChange(e)}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="number"
                    step="0.01"
                    min="0"
                    .value=${this.submitMaterialUsageUnitCost}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageUnitCostChange(e)}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitMaterialUsageCostCode}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageCostCodeChange(e)}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    .value=${this.submitMaterialUsageUsageDate}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageUsageDateChange(e)}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitMaterialUsageRecordedBy}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageRecordedByChange(e)}
                  />
                </label>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.submitMaterialUsageState === 'loading'}
                  @click=${() => this.handleSubmitMaterialUsageClick()}
                >
                  ${this.submitMaterialUsageState === 'loading'
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                    : nothing}
                  ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage']}
                </button>
              </div>

              ${this.submitMaterialUsageState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]" role="status">
                      <!-- TODO: action.submitMaterialUsage.success not in MessageType -->
                      Material usage submitted successfully.
                    </div>
                  `
                : nothing}
              ${this.submitMaterialUsageState === 'error'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]" role="alert">
                      ${this.submitMaterialUsageError
                        ? this.submitMaterialUsageError
                        : html`<!-- TODO: action.submitMaterialUsage.error not in MessageType -->Failed to submit material usage.`}
                    </div>
                  `
                : nothing}
            </div>

            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-4 space-y-4">
              <h3 class="text-base font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title']}
              </h3>

              <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label class="flex flex-col gap-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitVoidMaterialUsageVoidedReason}
                    @input=${(e: Event) => this.handleSubmitVoidMaterialUsageVoidedReasonChange(e)}
                  />
                </label>
              </div>

              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.submitVoidMaterialUsageState === 'loading'}
                  @click=${() => this.handleSubmitVoidMaterialUsageClick()}
                >
                  ${this.submitVoidMaterialUsageState === 'loading'
                    ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                    : nothing}
                  ${this.msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage']}
                </button>
              </div>

              ${this.submitVoidMaterialUsageState === 'success'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-[var(--status-success-text,#166534)]" role="status">
                      <!-- TODO: action.submitVoidMaterialUsage.success not in MessageType -->
                      Material usage voided successfully.
                    </div>
                  `
                : nothing}
              ${this.submitVoidMaterialUsageState === 'error'
                ? html`
                    <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-[var(--status-error-text,#991b1b)]" role="alert">
                      ${this.submitVoidMaterialUsageError
                        ? this.submitVoidMaterialUsageError
                        : html`<!-- TODO: action.submitVoidMaterialUsage.error not in MessageType -->Failed to void material usage.`}
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
