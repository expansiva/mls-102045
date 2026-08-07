/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/fieldLoggingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmFieldLoggingWorkspaceBase,
  messages,
  type MessageType,
} from '/_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.js';

@customElement('build-flow-fsm--desktop--page21--field-logging-workspace-102045')
export class BuildFlowFsmDesktopPage21FieldLoggingWorkspacePage extends BuildFlowFsmFieldLoggingWorkspaceBase {
  private readMsg(): MessageType {
    const localeCandidates: string[] = [];
    const langAttr =
      typeof document !== 'undefined' && document.documentElement
        ? document.documentElement.lang
        : '';
    if (langAttr) {
      localeCandidates.push(langAttr.toLowerCase());
      localeCandidates.push(langAttr.toLowerCase().split('-')[0] ?? '');
    }
    localeCandidates.push('en');
    for (const locale of localeCandidates) {
      const table = messages[locale];
      if (table) {
        return table;
      }
    }
    return messages['en'] as MessageType;
  }

  private readOutputId(output: unknown, preferredKeys: string[]): string {
    if (!output || typeof output !== 'object') {
      return '';
    }
    const record = output as Record<string, unknown>;
    for (const key of preferredKeys) {
      const value = record[key];
      if (typeof value === 'string' && value) {
        return value;
      }
      if (typeof value === 'number' && Number.isFinite(value)) {
        return String(value);
      }
    }
    return '';
  }

  render() {
    const msg = this.readMsg();
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6">
        <div class="mx-auto max-w-6xl space-y-4">
          <div class="grid grid-cols-1 gap-4 lg:grid-cols-2">
            ${this.renderTimeLogCard(msg)}
            ${this.renderMaterialUsageCard(msg)}
          </div>
          ${this.renderSessionStrip(msg)}
        </div>
      </div>
    `;
  }

  renderTimeLogCard(msg: MessageType) {
    const isLoading = this.submitTimeLogState === 'loading';
    const canSubmit =
      Boolean(this.submitTimeLogWorkTaskId?.trim()) &&
      Boolean(this.submitTimeLogLogDate?.trim()) &&
      Boolean(this.submitTimeLogHoursWorked?.trim()) &&
      !isLoading;
    const workerCaption = this.submitTimeLogWorkerName?.trim()
      ? this.submitTimeLogWorkerName.trim()
      : '';

    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"
      >
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.fieldLoggingWorkspace.sec-time-logging.title']}
        </h2>
        ${workerCaption
          ? html`<p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${workerCaption}</p>`
          : nothing}

        <div class="mt-4 space-y-3">
          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.submitTimeLogWorkTaskId}
              ?disabled=${isLoading}
              required
              @input=${(event: Event) => this.handleSubmitTimeLogWorkTaskIdChange(event)}
            />
          </label>

          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="date"
              .value=${this.submitTimeLogLogDate}
              ?disabled=${isLoading}
              required
              @input=${(event: Event) => this.handleSubmitTimeLogLogDateChange(event)}
            />
          </label>

          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="number"
              inputmode="decimal"
              min="0"
              step="0.25"
              .value=${this.submitTimeLogHoursWorked}
              ?disabled=${isLoading}
              required
              @input=${(event: Event) => this.handleSubmitTimeLogHoursWorkedChange(event)}
            />
          </label>
        </div>

        ${this.submitTimeLogState === 'error'
          ? html`
              <div
                class="mt-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#b91c1c)]"
                role="alert"
              >
                ${this.submitTimeLogError || msg['action.submitTimeLog.error']}
              </div>
            `
          : nothing}
        ${this.submitTimeLogState === 'success'
          ? html`
              <div
                class="mt-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#f0fdf4)] px-3 py-2 text-sm text-[var(--status-success-text,#15803d)]"
                role="status"
              >
                ${msg['action.submitTimeLog.success']}
              </div>
            `
          : nothing}

        <div class="mt-4">
          <button
            type="button"
            class="min-h-11 w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 font-medium text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
            ?disabled=${!canSubmit}
            @click=${(event: Event) => this.handleSubmitTimeLogClick(event)}
          >
            ${isLoading
              ? msg['intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog']
              : msg['intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog']}
          </button>
        </div>

        ${this.renderTimeLogVoidPanel(msg)}
      </section>
    `;
  }

  renderTimeLogVoidPanel(msg: MessageType) {
    const postedId = this.readOutputId(this.submitTimeLogOutput, [
      'timeLogId',
      'id',
      'logId',
    ]);
    const selectedId = this.submitVoidTimeLogTimeLogId || postedId;
    if (!selectedId && this.submitVoidTimeLogState === 'idle' && !this.submitVoidTimeLogOutput) {
      return nothing;
    }

    if (postedId && this.submitVoidTimeLogTimeLogId !== postedId) {
      this.setSubmitVoidTimeLogTimeLogId(postedId);
    }

    const isLoading = this.submitVoidTimeLogState === 'loading';
    const canVoid =
      Boolean(selectedId) && Boolean(this.submitVoidTimeLogVoidReason?.trim()) && !isLoading;

    return html`
      <div class="mt-4 border-t border-[var(--border-subtle,#e2e8f0)] pt-4">
        <div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${selectedId}</p>
          <label class="mt-2 block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.submitVoidTimeLogVoidReason}
              ?disabled=${isLoading || !selectedId}
              required
              @input=${(event: Event) => this.handleSubmitVoidTimeLogVoidReasonChange(event)}
            />
          </label>

          ${this.submitVoidTimeLogState === 'error'
            ? html`
                <div
                  class="mt-2 rounded-md bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#b91c1c)]"
                  role="alert"
                >
                  ${this.submitVoidTimeLogError || msg['action.submitVoidTimeLog.error']}
                </div>
              `
            : nothing}
          ${this.submitVoidTimeLogState === 'success'
            ? html`
                <div
                  class="mt-2 rounded-md bg-[var(--status-success-bg,#f0fdf4)] px-3 py-2 text-sm text-[var(--status-success-text,#15803d)]"
                  role="status"
                >
                  ${msg['action.submitVoidTimeLog.success']}
                </div>
              `
            : nothing}

          <button
            type="button"
            class="mt-3 min-h-11 rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-sm font-medium text-[var(--button-danger-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
            ?disabled=${!canVoid}
            @click=${(event: Event) => this.handleSubmitVoidTimeLogClick(event)}
          >
            ${msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog']}
          </button>
        </div>
      </div>
    `;
  }

  renderMaterialUsageCard(msg: MessageType) {
    const isLoading = this.submitMaterialUsageState === 'loading';
    const canSubmit =
      Boolean(this.submitMaterialUsageProjectId?.trim()) &&
      Boolean(this.submitMaterialUsageMaterialName?.trim()) &&
      Boolean(this.submitMaterialUsageQuantity?.trim()) &&
      Boolean(this.submitMaterialUsageUnit?.trim()) &&
      Boolean(this.submitMaterialUsageUnitCost?.trim()) &&
      Boolean(this.submitMaterialUsageUsageDate?.trim()) &&
      !isLoading;
    const recordedByCaption = this.submitMaterialUsageRecordedBy?.trim()
      ? this.submitMaterialUsageRecordedBy.trim()
      : '';
    const projectCaption = this.submitMaterialUsageProjectId?.trim()
      ? this.submitMaterialUsageProjectId.trim()
      : '';

    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"
      >
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">
          ${msg['section.fieldLoggingWorkspace.sec-material-logging.title']}
        </h2>
        ${recordedByCaption || projectCaption
          ? html`
              <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">
                ${[recordedByCaption, projectCaption].filter(Boolean).join(' · ')}
              </p>
            `
          : nothing}

        <div class="mt-4 space-y-3">
          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.submitMaterialUsageMaterialName}
              ?disabled=${isLoading}
              required
              @input=${(event: Event) => this.handleSubmitMaterialUsageMaterialNameChange(event)}
            />
          </label>

          <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <label class="block space-y-1">
              <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
                ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label']}
                <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
              </span>
              <input
                class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                type="number"
                inputmode="decimal"
                min="0"
                step="any"
                .value=${this.submitMaterialUsageQuantity}
                ?disabled=${isLoading}
                required
                @input=${(event: Event) => this.handleSubmitMaterialUsageQuantityChange(event)}
              />
            </label>

            <label class="block space-y-1">
              <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
                ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label']}
                <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
              </span>
              <input
                class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                type="text"
                .value=${this.submitMaterialUsageUnit}
                ?disabled=${isLoading}
                required
                @input=${(event: Event) => this.handleSubmitMaterialUsageUnitChange(event)}
              />
            </label>
          </div>

          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="number"
              inputmode="decimal"
              min="0"
              step="any"
              .value=${this.submitMaterialUsageUnitCost}
              ?disabled=${isLoading}
              required
              @input=${(event: Event) => this.handleSubmitMaterialUsageUnitCostChange(event)}
            />
          </label>

          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label']}
            </span>
            <input
              class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.submitMaterialUsageCostCode}
              ?disabled=${isLoading}
              @input=${(event: Event) => this.handleSubmitMaterialUsageCostCodeChange(event)}
            />
          </label>

          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="date"
              .value=${this.submitMaterialUsageUsageDate}
              ?disabled=${isLoading}
              required
              @input=${(event: Event) => this.handleSubmitMaterialUsageUsageDateChange(event)}
            />
          </label>
        </div>

        ${this.submitMaterialUsageState === 'error'
          ? html`
              <div
                class="mt-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#b91c1c)]"
                role="alert"
              >
                ${this.submitMaterialUsageError || msg['action.submitMaterialUsage.error']}
              </div>
            `
          : nothing}
        ${this.submitMaterialUsageState === 'success'
          ? html`
              <div
                class="mt-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#f0fdf4)] px-3 py-2 text-sm text-[var(--status-success-text,#15803d)]"
                role="status"
              >
                ${msg['action.submitMaterialUsage.success']}
              </div>
            `
          : nothing}

        <div class="mt-4">
          <button
            type="button"
            class="min-h-11 w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 font-medium text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
            ?disabled=${!canSubmit}
            @click=${(event: Event) => this.handleSubmitMaterialUsageClick(event)}
          >
            ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage']}
          </button>
        </div>

        ${this.renderMaterialVoidPanel(msg)}
      </section>
    `;
  }

  renderMaterialVoidPanel(msg: MessageType) {
    const postedId = this.readOutputId(this.submitMaterialUsageOutput, [
      'materialUsageId',
      'id',
      'usageId',
    ]);
    const selectedId = this.submitVoidMaterialUsageMaterialUsageId || postedId;
    if (
      !selectedId &&
      this.submitVoidMaterialUsageState === 'idle' &&
      !this.submitVoidMaterialUsageOutput
    ) {
      return nothing;
    }

    if (postedId && this.submitVoidMaterialUsageMaterialUsageId !== postedId) {
      this.setSubmitVoidMaterialUsageMaterialUsageId(postedId);
    }

    const isLoading = this.submitVoidMaterialUsageState === 'loading';
    const canVoid =
      Boolean(selectedId) &&
      Boolean(this.submitVoidMaterialUsageVoidedReason?.trim()) &&
      !isLoading;

    return html`
      <div class="mt-4 border-t border-[var(--border-subtle,#e2e8f0)] pt-4">
        <div class="rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${selectedId}</p>
          <label class="mt-2 block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="min-h-11 w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.submitVoidMaterialUsageVoidedReason}
              ?disabled=${isLoading || !selectedId}
              required
              @input=${(event: Event) => this.handleSubmitVoidMaterialUsageVoidedReasonChange(event)}
            />
          </label>

          ${this.submitVoidMaterialUsageState === 'error'
            ? html`
                <div
                  class="mt-2 rounded-md bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#b91c1c)]"
                  role="alert"
                >
                  ${this.submitVoidMaterialUsageError ||
                  msg['action.submitVoidMaterialUsage.error']}
                </div>
              `
            : nothing}
          ${this.submitVoidMaterialUsageState === 'success'
            ? html`
                <div
                  class="mt-2 rounded-md bg-[var(--status-success-bg,#f0fdf4)] px-3 py-2 text-sm text-[var(--status-success-text,#15803d)]"
                  role="status"
                >
                  ${msg['action.submitVoidMaterialUsage.success']}
                </div>
              `
            : nothing}

          <button
            type="button"
            class="mt-3 min-h-11 rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-sm font-medium text-[var(--button-danger-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
            ?disabled=${!canVoid}
            @click=${(event: Event) => this.handleSubmitVoidMaterialUsageClick(event)}
          >
            ${msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage']}
          </button>
        </div>
      </div>
    `;
  }

  renderSessionStrip(msg: MessageType) {
    const timeLogId = this.readOutputId(this.submitTimeLogOutput, [
      'timeLogId',
      'id',
      'logId',
    ]);
    const materialId = this.readOutputId(this.submitMaterialUsageOutput, [
      'materialUsageId',
      'id',
      'usageId',
    ]);
    const hasTime = Boolean(this.submitTimeLogOutput) && this.submitTimeLogState === 'success';
    const hasMaterial =
      Boolean(this.submitMaterialUsageOutput) && this.submitMaterialUsageState === 'success';
    const hasEntries = hasTime || hasMaterial;

    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4"
      >
        <div class="space-y-2">
          ${!hasEntries
            ? html`
                <p class="text-sm text-[var(--text-muted,#64748b)]">
                  ${msg['section.fieldLoggingWorkspace.sec-time-logging.title']} ·
                  ${msg['section.fieldLoggingWorkspace.sec-material-logging.title']}
                </p>
              `
            : nothing}
          ${hasTime
            ? html`
                <div
                  class="flex flex-wrap items-center justify-between gap-2 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2"
                >
                  <div class="min-w-0">
                    <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">
                      ${msg['organism.fieldLoggingWorkspace.submitTimeLog.title']}
                    </p>
                    <p class="truncate text-xs text-[var(--text-muted,#64748b)]">${timeLogId}</p>
                  </div>
                  <button
                    type="button"
                    class="min-h-10 rounded-md border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#ffffff)] px-3 py-1.5 text-sm text-[var(--button-secondary-text,#0f172a)]"
                    @click=${() => {
                      if (timeLogId) {
                        this.setSubmitVoidTimeLogTimeLogId(timeLogId);
                      }
                    }}
                  >
                    ${msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog']}
                  </button>
                </div>
              `
            : nothing}
          ${hasMaterial
            ? html`
                <div
                  class="flex flex-wrap items-center justify-between gap-2 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2"
                >
                  <div class="min-w-0">
                    <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">
                      ${msg['organism.fieldLoggingWorkspace.submitMaterialUsage.title']}
                    </p>
                    <p class="truncate text-xs text-[var(--text-muted,#64748b)]">${materialId}</p>
                  </div>
                  <button
                    type="button"
                    class="min-h-10 rounded-md border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#ffffff)] px-3 py-1.5 text-sm text-[var(--button-secondary-text,#0f172a)]"
                    @click=${() => {
                      if (materialId) {
                        this.setSubmitVoidMaterialUsageMaterialUsageId(materialId);
                      }
                    }}
                  >
                    ${msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage']}
                  </button>
                </div>
              `
            : nothing}
        </div>
      </section>
    `;
  }
}
