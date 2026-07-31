/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/fieldLoggingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmFieldLoggingWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.js';
import type {
  SubmitTimeLogOutput,
  SubmitMaterialUsageOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page21--field-logging-workspace-102045')
export class BuildFlowFsmDesktopPage21FieldLoggingWorkspacePage extends BuildFlowFsmFieldLoggingWorkspaceBase {
  render() {
    const readStringField = (obj: object | null | undefined, key: string): string => {
      if (!obj || typeof obj !== 'object') return '';
      const rec = obj as Record<string, unknown>;
      const value = rec[key];
      if (typeof value === 'string') return value;
      if (typeof value === 'number' || typeof value === 'boolean') return String(value);
      return '';
    };

    const timeLogOutput: SubmitTimeLogOutput | null = this.submitTimeLogOutput;
    const materialOutput: SubmitMaterialUsageOutput | null = this.submitMaterialUsageOutput;
    const postedTimeLogId = readStringField(timeLogOutput, 'timeLogId');
    const postedMaterialUsageId = readStringField(materialOutput, 'materialUsageId');
    const selectedTimeLogId = this.submitVoidTimeLogTimeLogId;
    const selectedMaterialUsageId = this.submitVoidMaterialUsageMaterialUsageId;

    const timeLogLoading = this.submitTimeLogState === 'loading';
    const voidTimeLogLoading = this.submitVoidTimeLogState === 'loading';
    const materialLoading = this.submitMaterialUsageState === 'loading';
    const voidMaterialLoading = this.submitVoidMaterialUsageState === 'loading';

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.fieldLoggingWorkspace.sec-time-logging.title']}
          </h1>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['organism.fieldLoggingWorkspace.submitTimeLog.title']}
          </p>
        </header>

        <!-- 1. Time logging panel -->
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 md:p-5 space-y-4 shadow-sm">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.title']}
            </h2>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs bg-[var(--status-info-bg,#e0f2fe)] text-[var(--status-info-text,#0c4a6e)]">
              ${this.submitTimeLogWorkerName || '—'}
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            <label class="flex flex-col gap-1 min-w-0">
              <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="text"
                .value=${this.submitTimeLogWorkTaskId}
                @change=${(e: Event) => this.handleSubmitTimeLogWorkTaskIdChange(e)}
                ?disabled=${timeLogLoading}
              />
            </label>

            <label class="flex flex-col gap-1 min-w-0">
              <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="date"
                .value=${this.submitTimeLogLogDate}
                @change=${(e: Event) => this.handleSubmitTimeLogLogDateChange(e)}
                ?disabled=${timeLogLoading}
              />
            </label>

            <label class="flex flex-col gap-1 min-w-0">
              <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base text-[var(--text-default,#0f172a)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="number"
                inputmode="decimal"
                min="0"
                step="0.25"
                .value=${this.submitTimeLogHoursWorked}
                @change=${(e: Event) => this.handleSubmitTimeLogHoursWorkedChange(e)}
                ?disabled=${timeLogLoading}
              />
            </label>

            <label class="flex flex-col gap-1 min-w-0">
              <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
                ${this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-3 text-base text-[var(--text-muted,#64748b)]"
                type="text"
                .value=${this.submitTimeLogWorkerName}
                readonly
                tabindex="-1"
                aria-readonly="true"
              />
            </label>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button
              type="button"
              class="min-h-11 px-5 rounded-md font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${timeLogLoading}
              @click=${() => this.handleSubmitTimeLogClick()}
            >
              ${timeLogLoading
                ? '…'
                : this.msg['intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog']}
            </button>
          </div>

          ${this.submitTimeLogState === 'success'
            ? html`
                <div
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#14532d)] px-3 py-2 text-sm"
                  role="status"
                >
                  <!-- TODO: action.submitTimeLog.success not in MessageType -->
                  Time log posted.
                </div>
              `
            : nothing}
          ${this.submitTimeLogState === 'error'
            ? html`
                <div
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#7f1d1d)] px-3 py-2 text-sm"
                  role="alert"
                >
                  ${this.submitTimeLogError ||
                  html`<!-- TODO: action.submitTimeLog.error not in MessageType -->Failed to post time log.`}
                </div>
              `
            : nothing}
        </section>

        <!-- 2. Posted time logs (session) + contextual void -->
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 md:p-5 space-y-4 shadow-sm">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['organism.fieldLoggingWorkspace.submitVoidTimeLog.title']}
          </h2>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-3">
              ${timeLogOutput
                ? html`
                    <article
                      class="rounded-lg border p-3 space-y-2 ${selectedTimeLogId &&
                      postedTimeLogId &&
                      selectedTimeLogId === postedTimeLogId
                        ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]'
                        : 'border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)]'}"
                    >
                      <div class="flex items-start justify-between gap-2">
                        <div class="min-w-0 space-y-1 text-sm">
                          <p class="font-medium text-[var(--text-strong,#020617)] truncate">
                            ${readStringField(timeLogOutput, 'workTaskId') ||
                            this.submitTimeLogWorkTaskId ||
                            postedTimeLogId ||
                            'Time log'}
                          </p>
                          <p class="text-[var(--text-muted,#64748b)]">
                            ${readStringField(timeLogOutput, 'logDate') || this.submitTimeLogLogDate || '—'}
                            ·
                            ${readStringField(timeLogOutput, 'hoursWorked') ||
                            this.submitTimeLogHoursWorked ||
                            '—'}h
                          </p>
                          <p class="text-[var(--text-muted,#64748b)]">
                            ${readStringField(timeLogOutput, 'workerName') ||
                            this.submitTimeLogWorkerName ||
                            ''}
                          </p>
                          ${postedTimeLogId
                            ? html`<p class="text-xs text-[var(--text-muted,#64748b)] truncate">${postedTimeLogId}</p>`
                            : nothing}
                        </div>
                        ${postedTimeLogId
                          ? html`
                              <button
                                type="button"
                                class="shrink-0 min-h-11 px-3 rounded-md text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                                ?disabled=${voidTimeLogLoading}
                                @click=${() => this.setSubmitVoidTimeLogTimeLogId(postedTimeLogId)}
                              >
                                ${this.msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog']}
                              </button>
                            `
                          : nothing}
                      </div>
                    </article>
                  `
                : html`
                    <div
                      class="rounded-md border border-dashed border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-6 text-sm text-center text-[var(--text-muted,#64748b)]"
                    >
                      ${this.msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title']}
                    </div>
                  `}
            </div>

            <div class="space-y-3">
              ${selectedTimeLogId
                ? html`
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 space-y-3"
                    >
                      <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                        ${this.msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title']}
                      </h3>
                      <p class="text-xs text-[var(--text-muted,#64748b)] truncate">${selectedTimeLogId}</p>
                      <label class="flex flex-col gap-1">
                        <span class="text-sm font-medium">
                          ${this.msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label']}
                        </span>
                        <input
                          class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                          type="text"
                          .value=${this.submitVoidTimeLogVoidReason}
                          @change=${(e: Event) => this.handleSubmitVoidTimeLogVoidReasonChange(e)}
                          ?disabled=${voidTimeLogLoading}
                        />
                      </label>
                      <button
                        type="button"
                        class="min-h-11 w-full sm:w-auto px-4 rounded-md font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                        ?disabled=${voidTimeLogLoading || !this.submitVoidTimeLogVoidReason}
                        @click=${() => this.handleSubmitVoidTimeLogClick()}
                      >
                        ${voidTimeLogLoading
                          ? '…'
                          : this.msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog']}
                      </button>
                    </div>
                  `
                : nothing}

              ${this.submitVoidTimeLogState === 'success'
                ? html`
                    <div
                      class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#14532d)] px-3 py-2 text-sm"
                      role="status"
                    >
                      <!-- TODO: action.submitVoidTimeLog.success not in MessageType -->
                      Time log voided.
                    </div>
                  `
                : nothing}
              ${this.submitVoidTimeLogState === 'error'
                ? html`
                    <div
                      class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#7f1d1d)] px-3 py-2 text-sm"
                      role="alert"
                    >
                      ${this.submitVoidTimeLogError ||
                      html`<!-- TODO: action.submitVoidTimeLog.error not in MessageType -->Failed to void time log.`}
                    </div>
                  `
                : nothing}
            </div>
          </div>
        </section>

        <!-- Material section header -->
        <header class="pt-2 space-y-1">
          <h2 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.fieldLoggingWorkspace.sec-material-logging.title']}
          </h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${this.msg['organism.fieldLoggingWorkspace.submitMaterialUsage.title']}
          </p>
        </header>

        <!-- 3. Material usage logging panel -->
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 md:p-5 space-y-4 shadow-sm">
          <div class="flex items-center justify-between gap-3 flex-wrap">
            <h3 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.title']}
            </h3>
            <span class="inline-flex items-center rounded-md px-2 py-1 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
              ${this.submitMaterialUsageRecordedBy || '—'}
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            <label class="flex flex-col gap-1 min-w-0">
              <span class="text-sm font-medium">
                ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="text"
                .value=${this.submitMaterialUsageMaterialName}
                @change=${(e: Event) => this.handleSubmitMaterialUsageMaterialNameChange(e)}
                ?disabled=${materialLoading}
              />
            </label>

            <label class="flex flex-col gap-1 min-w-0">
              <span class="text-sm font-medium">
                ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="number"
                inputmode="decimal"
                min="0"
                step="any"
                .value=${this.submitMaterialUsageQuantity}
                @change=${(e: Event) => this.handleSubmitMaterialUsageQuantityChange(e)}
                ?disabled=${materialLoading}
              />
            </label>

            <label class="flex flex-col gap-1 min-w-0">
              <span class="text-sm font-medium">
                ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="text"
                .value=${this.submitMaterialUsageUnit}
                @change=${(e: Event) => this.handleSubmitMaterialUsageUnitChange(e)}
                ?disabled=${materialLoading}
              />
            </label>

            <label class="flex flex-col gap-1 min-w-0">
              <span class="text-sm font-medium">
                ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="number"
                inputmode="decimal"
                min="0"
                step="0.01"
                .value=${this.submitMaterialUsageUnitCost}
                @change=${(e: Event) => this.handleSubmitMaterialUsageUnitCostChange(e)}
                ?disabled=${materialLoading}
              />
            </label>

            <label class="flex flex-col gap-1 min-w-0">
              <span class="text-sm font-medium">
                ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="text"
                .value=${this.submitMaterialUsageCostCode}
                @change=${(e: Event) => this.handleSubmitMaterialUsageCostCodeChange(e)}
                ?disabled=${materialLoading}
              />
            </label>

            <label class="flex flex-col gap-1 min-w-0">
              <span class="text-sm font-medium">
                ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                type="date"
                .value=${this.submitMaterialUsageUsageDate}
                @change=${(e: Event) => this.handleSubmitMaterialUsageUsageDateChange(e)}
                ?disabled=${materialLoading}
              />
            </label>

            <label class="flex flex-col gap-1 min-w-0 sm:col-span-2 lg:col-span-1">
              <span class="text-sm font-medium">
                ${this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label']}
              </span>
              <input
                class="min-h-11 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-3 text-base text-[var(--text-muted,#64748b)]"
                type="text"
                .value=${this.submitMaterialUsageRecordedBy}
                readonly
                tabindex="-1"
                aria-readonly="true"
              />
            </label>
          </div>

          <div class="flex flex-wrap items-center gap-3">
            <button
              type="button"
              class="min-h-11 px-5 rounded-md font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${materialLoading}
              @click=${() => this.handleSubmitMaterialUsageClick()}
            >
              ${materialLoading
                ? '…'
                : this.msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage']}
            </button>
          </div>

          ${this.submitMaterialUsageState === 'success'
            ? html`
                <div
                  class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#14532d)] px-3 py-2 text-sm"
                  role="status"
                >
                  <!-- TODO: action.submitMaterialUsage.success not in MessageType -->
                  Material usage posted.
                </div>
              `
            : nothing}
          ${this.submitMaterialUsageState === 'error'
            ? html`
                <div
                  class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#7f1d1d)] px-3 py-2 text-sm"
                  role="alert"
                >
                  ${this.submitMaterialUsageError ||
                  html`<!-- TODO: action.submitMaterialUsage.error not in MessageType -->Failed to post material usage.`}
                </div>
              `
            : nothing}
        </section>

        <!-- 4. Posted material usages + contextual void -->
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 md:p-5 space-y-4 shadow-sm">
          <h3 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title']}
          </h3>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="space-y-3">
              ${materialOutput
                ? html`
                    <article
                      class="rounded-lg border p-3 space-y-2 ${selectedMaterialUsageId &&
                      postedMaterialUsageId &&
                      selectedMaterialUsageId === postedMaterialUsageId
                        ? 'border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]'
                        : 'border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)]'}"
                    >
                      <div class="flex items-start justify-between gap-2">
                        <div class="min-w-0 space-y-1 text-sm">
                          <p class="font-medium text-[var(--text-strong,#020617)] truncate">
                            ${readStringField(materialOutput, 'materialName') ||
                            this.submitMaterialUsageMaterialName ||
                            postedMaterialUsageId ||
                            'Material usage'}
                          </p>
                          <p class="text-[var(--text-muted,#64748b)]">
                            ${readStringField(materialOutput, 'quantity') ||
                            this.submitMaterialUsageQuantity ||
                            '—'}
                            ${readStringField(materialOutput, 'unit') || this.submitMaterialUsageUnit || ''}
                            ·
                            ${readStringField(materialOutput, 'usageDate') ||
                            this.submitMaterialUsageUsageDate ||
                            '—'}
                          </p>
                          <p class="text-[var(--text-muted,#64748b)]">
                            ${readStringField(materialOutput, 'costCode') ||
                            this.submitMaterialUsageCostCode ||
                            ''}
                            ${readStringField(materialOutput, 'unitCost') || this.submitMaterialUsageUnitCost
                              ? html` · ${readStringField(materialOutput, 'unitCost') || this.submitMaterialUsageUnitCost}`
                              : nothing}
                          </p>
                          ${postedMaterialUsageId
                            ? html`<p class="text-xs text-[var(--text-muted,#64748b)] truncate">${postedMaterialUsageId}</p>`
                            : nothing}
                        </div>
                        ${postedMaterialUsageId
                          ? html`
                              <button
                                type="button"
                                class="shrink-0 min-h-11 px-3 rounded-md text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                                ?disabled=${voidMaterialLoading}
                                @click=${() => this.setSubmitVoidMaterialUsageMaterialUsageId(postedMaterialUsageId)}
                              >
                                ${this.msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage']}
                              </button>
                            `
                          : nothing}
                      </div>
                    </article>
                  `
                : html`
                    <div
                      class="rounded-md border border-dashed border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-6 text-sm text-center text-[var(--text-muted,#64748b)]"
                    >
                      ${this.msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title']}
                    </div>
                  `}
            </div>

            <div class="space-y-3">
              ${selectedMaterialUsageId
                ? html`
                    <div
                      class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 space-y-3"
                    >
                      <h4 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                        ${this.msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title']}
                      </h4>
                      <p class="text-xs text-[var(--text-muted,#64748b)] truncate">${selectedMaterialUsageId}</p>
                      <label class="flex flex-col gap-1">
                        <span class="text-sm font-medium">
                          ${this.msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label']}
                        </span>
                        <input
                          class="min-h-11 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 text-base focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
                          type="text"
                          .value=${this.submitVoidMaterialUsageVoidedReason}
                          @change=${(e: Event) => this.handleSubmitVoidMaterialUsageVoidedReasonChange(e)}
                          ?disabled=${voidMaterialLoading}
                        />
                      </label>
                      <button
                        type="button"
                        class="min-h-11 w-full sm:w-auto px-4 rounded-md font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                        ?disabled=${voidMaterialLoading || !this.submitVoidMaterialUsageVoidedReason}
                        @click=${() => this.handleSubmitVoidMaterialUsageClick()}
                      >
                        ${voidMaterialLoading
                          ? '…'
                          : this.msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage']}
                      </button>
                    </div>
                  `
                : nothing}

              ${this.submitVoidMaterialUsageState === 'success'
                ? html`
                    <div
                      class="rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#14532d)] px-3 py-2 text-sm"
                      role="status"
                    >
                      <!-- TODO: action.submitVoidMaterialUsage.success not in MessageType -->
                      Material usage voided.
                    </div>
                  `
                : nothing}
              ${this.submitVoidMaterialUsageState === 'error'
                ? html`
                    <div
                      class="rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#7f1d1d)] px-3 py-2 text-sm"
                      role="alert"
                    >
                      ${this.submitVoidMaterialUsageError ||
                      html`<!-- TODO: action.submitVoidMaterialUsage.error not in MessageType -->Failed to void material usage.`}
                    </div>
                  `
                : nothing}
            </div>
          </div>
        </section>
      </div>
    `;
  }
}
