/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/fieldLoggingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmFieldLoggingWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page31--field-logging-workspace-102045')
export class BuildFlowFsmDesktopPage31FieldLoggingWorkspacePage extends BuildFlowFsmFieldLoggingWorkspaceBase {
  render() {
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-8">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.fieldLoggingWorkspace.sec-time-logging.title']}
          </h1>
        </header>

        <section class="space-y-4" aria-labelledby="sec-time-logging">
          <h2 id="sec-time-logging" class="text-lg font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.fieldLoggingWorkspace.sec-time-logging.title']}
          </h2>

          <div class="grid gap-4 md:grid-cols-2">
            <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
              <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['organism.fieldLoggingWorkspace.submitTimeLog.title']}
              </h3>
              <p class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.title']}
              </p>

              <div class="space-y-3">
                <label class="block space-y-1">
                  <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label']}</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitTimeLogWorkTaskId}
                    @input=${(e: Event) => this.handleSubmitTimeLogWorkTaskIdChange(e)}
                  />
                </label>

                <label class="block space-y-1">
                  <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label']}</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    .value=${this.submitTimeLogLogDate}
                    @input=${(e: Event) => this.handleSubmitTimeLogLogDateChange(e)}
                  />
                </label>

                <label class="block space-y-1">
                  <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label']}</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="number"
                    min="0"
                    step="0.25"
                    .value=${this.submitTimeLogHoursWorked}
                    @input=${(e: Event) => this.handleSubmitTimeLogHoursWorkedChange(e)}
                  />
                </label>

                <label class="block space-y-1">
                  <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label']}</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitTimeLogWorkerName}
                    @input=${(e: Event) => this.handleSubmitTimeLogWorkerNameChange(e)}
                  />
                </label>
              </div>

              <div class="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.submitTimeLogState === 'loading'}
                  @click=${() => this.handleSubmitTimeLogClick()}
                >
                  ${this.submitTimeLogState === 'loading'
                    ? '…'
                    : this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog']}
                </button>
              </div>

              ${this.submitTimeLogState === 'success'
                ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] text-sm" role="status">
                    <!-- TODO: action.submitTimeLog.success -->
                    Time log submitted.
                  </div>`
                : nothing}
              ${this.submitTimeLogState === 'error'
                ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] text-sm" role="alert">
                    ${this.submitTimeLogError || 'Error submitting time log'}
                  </div>`
                : nothing}
            </article>

            <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
              <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['organism.fieldLoggingWorkspace.submitVoidTimeLog.title']}
              </h3>
              <p class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title']}
              </p>

              <div class="space-y-3">
                <label class="block space-y-1">
                  <span class="text-sm font-medium">Time log id</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitVoidTimeLogTimeLogId}
                    @input=${(e: Event) => this.handleSubmitVoidTimeLogTimeLogIdChange(e)}
                  />
                </label>

                <label class="block space-y-1">
                  <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label']}</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitVoidTimeLogVoidReason}
                    @input=${(e: Event) => this.handleSubmitVoidTimeLogVoidReasonChange(e)}
                  />
                </label>
              </div>

              <div class="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  class="rounded-md px-4 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.submitVoidTimeLogState === 'loading'}
                  @click=${() => this.handleSubmitVoidTimeLogClick()}
                >
                  ${this.submitVoidTimeLogState === 'loading'
                    ? '…'
                    : this.msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog']}
                </button>
              </div>

              ${this.submitVoidTimeLogState === 'success'
                ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] text-sm" role="status">
                    <!-- TODO: action.submitVoidTimeLog.success -->
                    Time log voided.
                  </div>`
                : nothing}
              ${this.submitVoidTimeLogState === 'error'
                ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] text-sm" role="alert">
                    ${this.submitVoidTimeLogError || 'Error voiding time log'}
                  </div>`
                : nothing}
            </article>
          </div>
        </section>

        <section class="space-y-4" aria-labelledby="sec-material-logging">
          <h2 id="sec-material-logging" class="text-lg font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.fieldLoggingWorkspace.sec-material-logging.title']}
          </h2>

          <div class="grid gap-4 md:grid-cols-2">
            <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
              <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['organism.fieldLoggingWorkspace.submitMaterialUsage.title']}
              </h3>
              <p class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.title']}
              </p>

              <div class="space-y-3">
                <label class="block space-y-1">
                  <span class="text-sm font-medium">Project id</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitMaterialUsageProjectId}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageProjectIdChange(e)}
                  />
                </label>

                <label class="block space-y-1">
                  <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label']}</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitMaterialUsageMaterialName}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageMaterialNameChange(e)}
                  />
                </label>

                <div class="grid grid-cols-2 gap-3">
                  <label class="block space-y-1">
                    <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label']}</span>
                    <input
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="number"
                      min="0"
                      step="any"
                      .value=${this.submitMaterialUsageQuantity}
                      @input=${(e: Event) => this.handleSubmitMaterialUsageQuantityChange(e)}
                    />
                  </label>

                  <label class="block space-y-1">
                    <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label']}</span>
                    <input
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="text"
                      .value=${this.submitMaterialUsageUnit}
                      @input=${(e: Event) => this.handleSubmitMaterialUsageUnitChange(e)}
                    />
                  </label>
                </div>

                <div class="grid grid-cols-2 gap-3">
                  <label class="block space-y-1">
                    <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label']}</span>
                    <input
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="number"
                      min="0"
                      step="any"
                      .value=${this.submitMaterialUsageUnitCost}
                      @input=${(e: Event) => this.handleSubmitMaterialUsageUnitCostChange(e)}
                    />
                  </label>

                  <label class="block space-y-1">
                    <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label']}</span>
                    <input
                      class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                      type="text"
                      .value=${this.submitMaterialUsageCostCode}
                      @input=${(e: Event) => this.handleSubmitMaterialUsageCostCodeChange(e)}
                    />
                  </label>
                </div>

                <label class="block space-y-1">
                  <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label']}</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    .value=${this.submitMaterialUsageUsageDate}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageUsageDateChange(e)}
                  />
                </label>

                <label class="block space-y-1">
                  <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label']}</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitMaterialUsageRecordedBy}
                    @input=${(e: Event) => this.handleSubmitMaterialUsageRecordedByChange(e)}
                  />
                </label>
              </div>

              <div class="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.submitMaterialUsageState === 'loading'}
                  @click=${() => this.handleSubmitMaterialUsageClick()}
                >
                  ${this.submitMaterialUsageState === 'loading'
                    ? '…'
                    : this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage']}
                </button>
              </div>

              ${this.submitMaterialUsageState === 'success'
                ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] text-sm" role="status">
                    <!-- TODO: action.submitMaterialUsage.success -->
                    Material usage submitted.
                  </div>`
                : nothing}
              ${this.submitMaterialUsageState === 'error'
                ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] text-sm" role="alert">
                    ${this.submitMaterialUsageError || 'Error submitting material usage'}
                  </div>`
                : nothing}
            </article>

            <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
              <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title']}
              </h3>
              <p class="text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title']}
              </p>

              <div class="space-y-3">
                <label class="block space-y-1">
                  <span class="text-sm font-medium">Material usage id</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitVoidMaterialUsageMaterialUsageId}
                    @input=${(e: Event) => this.handleSubmitVoidMaterialUsageMaterialUsageIdChange(e)}
                  />
                </label>

                <label class="block space-y-1">
                  <span class="text-sm font-medium">${this.msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label']}</span>
                  <input
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    .value=${this.submitVoidMaterialUsageVoidedReason}
                    @input=${(e: Event) => this.handleSubmitVoidMaterialUsageVoidedReasonChange(e)}
                  />
                </label>
              </div>

              <div class="flex items-center gap-3 pt-1">
                <button
                  type="button"
                  class="rounded-md px-4 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${this.submitVoidMaterialUsageState === 'loading'}
                  @click=${() => this.handleSubmitVoidMaterialUsageClick()}
                >
                  ${this.submitVoidMaterialUsageState === 'loading'
                    ? '…'
                    : this.msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage']}
                </button>
              </div>

              ${this.submitVoidMaterialUsageState === 'success'
                ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] text-sm" role="status">
                    <!-- TODO: action.submitVoidMaterialUsage.success -->
                    Material usage voided.
                  </div>`
                : nothing}
              ${this.submitVoidMaterialUsageState === 'error'
                ? html`<div class="rounded-md px-3 py-2 bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] text-sm" role="alert">
                    ${this.submitVoidMaterialUsageError || 'Error voiding material usage'}
                  </div>`
                : nothing}
            </article>
          </div>
        </section>
      </div>
    `;
  }
}
