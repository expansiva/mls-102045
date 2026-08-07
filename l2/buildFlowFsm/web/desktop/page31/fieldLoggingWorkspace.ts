/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/fieldLoggingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmFieldLoggingWorkspaceBase,
  type MessageType,
} from '/_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.js';

type CaptureFlow =
  | 'chooser'
  | 'timeLog'
  | 'voidTimeLog'
  | 'materialUsage'
  | 'voidMaterialUsage';

type SuccessKind = 'timeLog' | 'voidTimeLog' | 'materialUsage' | 'voidMaterialUsage' | null;

@customElement('build-flow-fsm--desktop--page31--field-logging-workspace-102045')
export class BuildFlowFsmDesktopPage31FieldLoggingWorkspacePage extends BuildFlowFsmFieldLoggingWorkspaceBase {
  /** Runtime i18n bag provided by CollabLitElement; declared for strict typing. */
  declare msg: MessageType;

  private captureFlow: CaptureFlow = 'chooser';
  private beat = 0;
  private successKind: SuccessKind = null;
  private pendingDiscard = false;

  private startFlow(flow: CaptureFlow): void {
    this.captureFlow = flow;
    this.beat = 0;
    this.successKind = null;
    this.pendingDiscard = false;
    this.requestUpdate();
  }

  private goChooser(): void {
    this.captureFlow = 'chooser';
    this.beat = 0;
    this.successKind = null;
    this.pendingDiscard = false;
    this.requestUpdate();
  }

  private goBeat(next: number): void {
    this.beat = next;
    this.pendingDiscard = false;
    this.requestUpdate();
  }

  private requestDiscard(): void {
    this.pendingDiscard = true;
    this.requestUpdate();
  }

  private cancelDiscard(): void {
    this.pendingDiscard = false;
    this.requestUpdate();
  }

  private confirmDiscard(): void {
    this.pendingDiscard = false;
    this.successKind = null;
    this.beat = 0;
    this.captureFlow = 'chooser';
    this.requestUpdate();
  }

  private markSuccess(kind: Exclude<SuccessKind, null>): void {
    this.successKind = kind;
    this.beat = 0;
    this.requestUpdate();
  }

  private readRecordId(output: unknown, keys: string[]): string {
    if (!output || typeof output !== 'object') {
      return '';
    }
    const record = output as Record<string, unknown>;
    for (const key of keys) {
      const value = record[key];
      if (typeof value === 'string' && value.trim()) {
        return value.trim();
      }
    }
    return '';
  }

  private hasTimeLogDraft(): boolean {
    return Boolean(
      this.submitTimeLogWorkTaskId ||
        this.submitTimeLogLogDate ||
        this.submitTimeLogHoursWorked,
    );
  }

  private hasVoidTimeDraft(): boolean {
    return Boolean(this.submitVoidTimeLogTimeLogId || this.submitVoidTimeLogVoidReason);
  }

  private hasMaterialDraft(): boolean {
    return Boolean(
      this.submitMaterialUsageProjectId ||
        this.submitMaterialUsageMaterialName ||
        this.submitMaterialUsageQuantity ||
        this.submitMaterialUsageUnit ||
        this.submitMaterialUsageUnitCost ||
        this.submitMaterialUsageCostCode ||
        this.submitMaterialUsageUsageDate,
    );
  }

  private hasVoidMaterialDraft(): boolean {
    return Boolean(
      this.submitVoidMaterialUsageMaterialUsageId || this.submitVoidMaterialUsageVoidedReason,
    );
  }

  render(): TemplateResult {
    const msg = this.msg;

    if (this.successKind) {
      return html`
        <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6">
          ${this.renderSuccess(msg)}
        </div>
      `;
    }

    if (this.captureFlow === 'chooser') {
      return html`
        <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6">
          ${this.renderChooser(msg)}
        </div>
      `;
    }

    return html`
      <div class="min-h-screen bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6 max-w-xl mx-auto">
        ${this.captureFlow === 'timeLog' ? this.renderTimeLogFlow(msg) : nothing}
        ${this.captureFlow === 'voidTimeLog' ? this.renderVoidTimeLogFlow(msg) : nothing}
        ${this.captureFlow === 'materialUsage' ? this.renderMaterialFlow(msg) : nothing}
        ${this.captureFlow === 'voidMaterialUsage' ? this.renderVoidMaterialFlow(msg) : nothing}
        ${this.pendingDiscard ? this.renderDiscardConfirm(msg) : nothing}
      </div>
    `;
  }

  private renderChooser(msg: MessageType): TemplateResult {
    return html`
      <div class="max-w-xl mx-auto flex flex-col gap-4">
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${this.submitTimeLogWorkerName || this.submitMaterialUsageRecordedBy
            ? html`${this.submitTimeLogWorkerName || this.submitMaterialUsageRecordedBy}`
            : nothing}
        </p>
        <div class="grid gap-3">
          <button
            type="button"
            class="w-full min-h-[4.5rem] rounded-lg px-5 py-4 text-left text-lg font-semibold bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.06))]"
            @click=${() => this.startFlow('timeLog')}
          >
            ${msg['intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog']}
          </button>
          <button
            type="button"
            class="w-full min-h-[4.5rem] rounded-lg px-5 py-4 text-left text-lg font-semibold bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
            @click=${() => this.startFlow('voidTimeLog')}
          >
            ${msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog']}
          </button>
          <button
            type="button"
            class="w-full min-h-[4.5rem] rounded-lg px-5 py-4 text-left text-lg font-semibold bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] shadow-[var(--shadow-small,0_1px_2px_rgba(0,0,0,.06))]"
            @click=${() => this.startFlow('materialUsage')}
          >
            ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage']}
          </button>
          <button
            type="button"
            class="w-full min-h-[4.5rem] rounded-lg px-5 py-4 text-left text-lg font-semibold bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
            @click=${() => this.startFlow('voidMaterialUsage')}
          >
            ${msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage']}
          </button>
        </div>
      </div>
    `;
  }

  private renderProgress(total: number, current: number): TemplateResult {
    const dots: TemplateResult[] = [];
    for (let i = 0; i < total; i += 1) {
      const isCurrent = i === current;
      const isPast = i < current;
      dots.push(html`
        <span
          class="h-2.5 w-2.5 rounded-full ${isCurrent
            ? 'bg-[var(--button-primary-bg,#2563eb)]'
            : isPast
              ? 'bg-[var(--text-muted,#64748b)]'
              : 'bg-[var(--border-default,#e2e8f0)]'}"
          aria-hidden="true"
        ></span>
      `);
    }
    return html`
      <div class="flex items-center justify-center gap-2 py-3" aria-hidden="true">${dots}</div>
    `;
  }

  private renderBackRow(canBack: boolean, hasDraft: boolean): TemplateResult {
    return html`
      <div class="flex items-center justify-between gap-3 mb-2">
        <button
          type="button"
          class="min-h-12 px-4 rounded-lg text-[var(--text-default,#0f172a)] bg-[var(--surface-alt-bg,#f1f5f9)] border border-[var(--border-default,#e2e8f0)]"
          @click=${() => {
            if (canBack) {
              this.goBeat(this.beat - 1);
              return;
            }
            if (hasDraft) {
              this.requestDiscard();
              return;
            }
            this.goChooser();
          }}
        >
          Back
        </button>
      </div>
    `;
  }

  private renderDiscardConfirm(_msg: MessageType): TemplateResult {
    return html`
      <div
        class="fixed inset-0 z-40 flex items-end sm:items-center justify-center bg-[var(--overlay-backdrop-bg,rgba(15,23,42,.45))] p-4"
      >
        <div
          class="w-full max-w-md rounded-lg bg-[var(--surface-bg,#ffffff)] border border-[var(--border-default,#e2e8f0)] p-5 shadow-[var(--shadow-medium,0_8px_24px_rgba(0,0,0,.12))]"
        >
          <p class="text-base text-[var(--text-default,#0f172a)] mb-4">Discard this entry?</p>
          <div class="flex gap-3">
            <button
              type="button"
              class="flex-1 min-h-12 rounded-lg bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
              @click=${() => this.cancelDiscard()}
            >
              Keep editing
            </button>
            <button
              type="button"
              class="flex-1 min-h-12 rounded-lg bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)]"
              @click=${() => this.confirmDiscard()}
            >
              Discard
            </button>
          </div>
        </div>
      </div>
    `;
  }

  private renderContextCaption(label: string, value: string): TemplateResult {
    if (!value) {
      return html``;
    }
    return html`
      <p class="text-sm text-[var(--text-muted,#64748b)] mb-3">${label}: ${value}</p>
    `;
  }

  private renderNextButton(enabled: boolean, onNext: () => void): TemplateResult {
    return html`
      <button
        type="button"
        class="w-full min-h-14 mt-6 rounded-lg text-lg font-semibold bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50 disabled:cursor-not-allowed"
        ?disabled=${!enabled}
        @click=${() => {
          if (enabled) {
            onNext();
          }
        }}
      >
        Next
      </button>
    `;
  }

  private renderFieldShell(label: string, control: TemplateResult, errorText?: string): TemplateResult {
    return html`
      <label class="flex flex-col gap-2">
        <span class="text-xl font-semibold text-[var(--text-strong,#020617)]">${label}</span>
        ${control}
        ${errorText
          ? html`<span class="text-sm text-[var(--status-error-text,#b91c1c)]">${errorText}</span>`
          : nothing}
      </label>
    `;
  }

  private renderTimeLogFlow(msg: MessageType): TemplateResult {
    const totalBeats = 4;
    const current = Math.min(this.beat, totalBeats - 1);
    const worker = this.submitTimeLogWorkerName;
    const hoursNum = Number(this.submitTimeLogHoursWorked);
    const hoursValid =
      this.submitTimeLogHoursWorked.trim() !== '' && !Number.isNaN(hoursNum) && hoursNum > 0;

    if (this.submitTimeLogState === 'success' && this.successKind === null) {
      this.markSuccess('timeLog');
    }

    return html`
      ${this.renderBackRow(current > 0, this.hasTimeLogDraft())}
      ${this.renderProgress(totalBeats, current)}
      ${this.renderContextCaption(
        msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label'],
        worker,
      )}
      ${current === 0
        ? html`
            ${this.renderFieldShell(
              msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label'],
              html`<input
                class="w-full min-h-14 text-xl px-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                type="text"
                .value=${this.submitTimeLogWorkTaskId}
                @input=${(event: Event) => this.handleSubmitTimeLogWorkTaskIdChange(event)}
              />`,
            )}
            ${this.renderNextButton(Boolean(this.submitTimeLogWorkTaskId.trim()), () =>
              this.goBeat(1),
            )}
          `
        : nothing}
      ${current === 1
        ? html`
            ${this.renderFieldShell(
              msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label'],
              html`<input
                class="w-full min-h-14 text-xl px-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                type="date"
                .value=${this.submitTimeLogLogDate}
                @input=${(event: Event) => this.handleSubmitTimeLogLogDateChange(event)}
              />`,
            )}
            ${this.renderNextButton(Boolean(this.submitTimeLogLogDate.trim()), () => this.goBeat(2))}
          `
        : nothing}
      ${current === 2
        ? html`
            ${this.renderFieldShell(
              msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label'],
              html`<input
                class="w-full min-h-16 text-3xl px-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                type="number"
                inputmode="decimal"
                min="0"
                step="0.25"
                .value=${this.submitTimeLogHoursWorked}
                @input=${(event: Event) => this.handleSubmitTimeLogHoursWorkedChange(event)}
              />`,
              this.submitTimeLogHoursWorked.trim() !== '' && !hoursValid
                ? 'Hours must be more than zero'
                : undefined,
            )}
            ${this.renderNextButton(hoursValid, () => this.goBeat(3))}
          `
        : nothing}
      ${current === 3 ? this.renderTimeLogReview(msg) : nothing}
    `;
  }

  private renderTimeLogReview(msg: MessageType): TemplateResult {
    const loading = this.submitTimeLogState === 'loading';
    const err =
      this.submitTimeLogState === 'error'
        ? this.submitTimeLogError || msg['action.submitTimeLog.error']
        : '';
    return html`
      <div
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 flex flex-col gap-3"
      >
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label']}:
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitTimeLogWorkTaskId}</span
          >
        </p>
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label']}:
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitTimeLogLogDate}</span
          >
        </p>
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label']}:
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitTimeLogHoursWorked}</span
          >
        </p>
        ${this.submitTimeLogWorkerName
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label']}:
              <span class="text-[var(--text-default,#0f172a)] font-medium"
                >${this.submitTimeLogWorkerName}</span
              >
            </p>`
          : nothing}
        ${err
          ? html`<p class="text-sm text-[var(--text-default,#0f172a)]">${err}</p>`
          : nothing}
        <button
          type="button"
          class="w-full min-h-14 mt-2 rounded-lg text-lg font-semibold bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
          ?disabled=${loading}
          @click=${(event: Event) => {
            this.handleSubmitTimeLogClick(event);
            const check = window.setInterval(() => {
              if (this.submitTimeLogState === 'success') {
                window.clearInterval(check);
                this.markSuccess('timeLog');
              } else if (this.submitTimeLogState === 'error' || this.submitTimeLogState === 'idle') {
                window.clearInterval(check);
                this.requestUpdate();
              }
            }, 120);
          }}
        >
          ${loading
            ? '…'
            : msg['intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog']}
        </button>
      </div>
    `;
  }

  private renderVoidTimeLogFlow(msg: MessageType): TemplateResult {
    const totalBeats = 3;
    const current = Math.min(this.beat, totalBeats - 1);
    const lastId = this.readRecordId(this.submitTimeLogOutput, [
      'timeLogId',
      'id',
      'logId',
    ]);
    const selectedId = this.submitVoidTimeLogTimeLogId || lastId;

    if (lastId && !this.submitVoidTimeLogTimeLogId) {
      this.setSubmitVoidTimeLogTimeLogId(lastId);
    }

    if (this.submitVoidTimeLogState === 'success' && this.successKind === null) {
      this.markSuccess('voidTimeLog');
    }

    return html`
      ${this.renderBackRow(current > 0, this.hasVoidTimeDraft())}
      ${this.renderProgress(totalBeats, current)}
      ${current === 0
        ? html`
            <p class="text-xl font-semibold text-[var(--text-strong,#020617)] mb-3">
              ${msg['organism.fieldLoggingWorkspace.submitVoidTimeLog.title']}
            </p>
            ${selectedId
              ? html`
                  <button
                    type="button"
                    class="w-full min-h-16 rounded-lg px-4 py-4 text-left border-2 border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]"
                    @click=${() => {
                      this.setSubmitVoidTimeLogTimeLogId(selectedId);
                      this.goBeat(1);
                    }}
                  >
                    <span class="block text-base font-semibold">${selectedId}</span>
                  </button>
                `
              : html`
                  <p class="text-[var(--text-muted,#64748b)]">
                    ${msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title']}
                  </p>
                `}
          `
        : nothing}
      ${current === 1
        ? html`
            ${this.renderFieldShell(
              msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label'],
              html`<textarea
                class="w-full min-h-28 text-lg px-4 py-3 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                .value=${this.submitVoidTimeLogVoidReason}
                @input=${(event: Event) => this.handleSubmitVoidTimeLogVoidReasonChange(event)}
              ></textarea>`,
            )}
            ${this.renderNextButton(Boolean(this.submitVoidTimeLogVoidReason.trim()), () =>
              this.goBeat(2),
            )}
          `
        : nothing}
      ${current === 2 ? this.renderVoidTimeLogReview(msg) : nothing}
    `;
  }

  private renderVoidTimeLogReview(msg: MessageType): TemplateResult {
    const loading = this.submitVoidTimeLogState === 'loading';
    const err =
      this.submitVoidTimeLogState === 'error'
        ? this.submitVoidTimeLogError || msg['action.submitVoidTimeLog.error']
        : '';
    return html`
      <div
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 flex flex-col gap-3"
      >
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitVoidTimeLogTimeLogId}</span
          >
        </p>
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label']}:
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitVoidTimeLogVoidReason}</span
          >
        </p>
        ${err
          ? html`<p class="text-sm text-[var(--text-default,#0f172a)]">${err}</p>`
          : nothing}
        <button
          type="button"
          class="w-full min-h-14 mt-2 rounded-lg text-lg font-semibold bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-50"
          ?disabled=${loading || !this.submitVoidTimeLogTimeLogId}
          @click=${(event: Event) => {
            this.handleSubmitVoidTimeLogClick(event);
            const check = window.setInterval(() => {
              if (this.submitVoidTimeLogState === 'success') {
                window.clearInterval(check);
                this.markSuccess('voidTimeLog');
              } else if (
                this.submitVoidTimeLogState === 'error' ||
                this.submitVoidTimeLogState === 'idle'
              ) {
                window.clearInterval(check);
                this.requestUpdate();
              }
            }, 120);
          }}
        >
          ${loading
            ? '…'
            : msg['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog']}
        </button>
      </div>
    `;
  }

  private renderMaterialFlow(msg: MessageType): TemplateResult {
    const totalBeats = 6;
    const current = Math.min(this.beat, totalBeats - 1);
    const qtyNum = Number(this.submitMaterialUsageQuantity);
    const costNum = Number(this.submitMaterialUsageUnitCost);
    const qtyValid =
      this.submitMaterialUsageQuantity.trim() !== '' && !Number.isNaN(qtyNum) && qtyNum > 0;
    const costValid =
      this.submitMaterialUsageUnitCost.trim() !== '' && !Number.isNaN(costNum) && costNum >= 0;

    if (this.submitMaterialUsageState === 'success' && this.successKind === null) {
      this.markSuccess('materialUsage');
    }

    return html`
      ${this.renderBackRow(current > 0, this.hasMaterialDraft())}
      ${this.renderProgress(totalBeats, current)}
      ${this.renderContextCaption(
        msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label'],
        this.submitMaterialUsageRecordedBy,
      )}
      ${current === 0
        ? html`
            ${this.renderFieldShell(
              msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label'],
              html`<input
                class="w-full min-h-14 text-xl px-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                type="text"
                .value=${this.submitMaterialUsageProjectId}
                @input=${(event: Event) => this.handleSubmitMaterialUsageProjectIdChange(event)}
                placeholder="Project"
              />`,
            )}
            <p class="text-xs text-[var(--text-muted,#64748b)] mt-1">Project</p>
            ${this.renderNextButton(Boolean(this.submitMaterialUsageProjectId.trim()), () =>
              this.goBeat(1),
            )}
          `
        : nothing}
      ${current === 1
        ? html`
            ${this.renderFieldShell(
              msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label'],
              html`<input
                class="w-full min-h-14 text-xl px-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                type="text"
                .value=${this.submitMaterialUsageMaterialName}
                @input=${(event: Event) => this.handleSubmitMaterialUsageMaterialNameChange(event)}
              />`,
            )}
            ${this.renderNextButton(Boolean(this.submitMaterialUsageMaterialName.trim()), () =>
              this.goBeat(2),
            )}
          `
        : nothing}
      ${current === 2
        ? html`
            <div class="flex flex-col gap-4">
              ${this.renderFieldShell(
                msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label'],
                html`<input
                  class="w-full min-h-16 text-3xl px-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                  type="number"
                  inputmode="decimal"
                  min="0"
                  step="0.01"
                  .value=${this.submitMaterialUsageQuantity}
                  @input=${(event: Event) => this.handleSubmitMaterialUsageQuantityChange(event)}
                />`,
                this.submitMaterialUsageQuantity.trim() !== '' && !qtyValid
                  ? 'Quantity must be more than zero'
                  : undefined,
              )}
              ${this.renderFieldShell(
                msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label'],
                html`<input
                  class="w-full min-h-14 text-xl px-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.submitMaterialUsageUnit}
                  @input=${(event: Event) => this.handleSubmitMaterialUsageUnitChange(event)}
                />`,
              )}
            </div>
            ${this.renderNextButton(
              qtyValid && Boolean(this.submitMaterialUsageUnit.trim()),
              () => this.goBeat(3),
            )}
          `
        : nothing}
      ${current === 3
        ? html`
            ${this.renderFieldShell(
              msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label'],
              html`<input
                class="w-full min-h-16 text-3xl px-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                type="number"
                inputmode="decimal"
                min="0"
                step="0.01"
                .value=${this.submitMaterialUsageUnitCost}
                @input=${(event: Event) => this.handleSubmitMaterialUsageUnitCostChange(event)}
              />`,
            )}
            ${this.renderNextButton(costValid, () => this.goBeat(4))}
          `
        : nothing}
      ${current === 4
        ? html`
            ${this.renderFieldShell(
              msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label'],
              html`<input
                class="w-full min-h-14 text-xl px-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                type="date"
                .value=${this.submitMaterialUsageUsageDate}
                @input=${(event: Event) => this.handleSubmitMaterialUsageUsageDateChange(event)}
              />`,
            )}
            <div class="mt-4">
              ${this.renderFieldShell(
                msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label'],
                html`<input
                  class="w-full min-h-12 text-lg px-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.submitMaterialUsageCostCode}
                  @input=${(event: Event) => this.handleSubmitMaterialUsageCostCodeChange(event)}
                />`,
              )}
            </div>
            <div class="flex flex-col gap-2 mt-4">
              ${this.renderNextButton(Boolean(this.submitMaterialUsageUsageDate.trim()), () =>
                this.goBeat(5),
              )}
              <button
                type="button"
                class="w-full min-h-12 rounded-lg text-[var(--text-muted,#64748b)]"
                @click=${() => this.goBeat(5)}
              >
                Skip optional
              </button>
            </div>
          `
        : nothing}
      ${current === 5 ? this.renderMaterialReview(msg) : nothing}
    `;
  }

  private renderMaterialReview(msg: MessageType): TemplateResult {
    const loading = this.submitMaterialUsageState === 'loading';
    const err =
      this.submitMaterialUsageState === 'error'
        ? this.submitMaterialUsageError || msg['action.submitMaterialUsage.error']
        : '';
    return html`
      <div
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 flex flex-col gap-3"
      >
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label']}:
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitMaterialUsageMaterialName}</span
          >
        </p>
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label']}:
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitMaterialUsageQuantity}
            ${this.submitMaterialUsageUnit}</span
          >
        </p>
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label']}:
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitMaterialUsageUnitCost}</span
          >
        </p>
        ${this.submitMaterialUsageCostCode
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label']}:
              <span class="text-[var(--text-default,#0f172a)] font-medium"
                >${this.submitMaterialUsageCostCode}</span
              >
            </p>`
          : nothing}
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${msg['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label']}:
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitMaterialUsageUsageDate}</span
          >
        </p>
        ${err
          ? html`<p class="text-sm text-[var(--text-default,#0f172a)]">${err}</p>`
          : nothing}
        <button
          type="button"
          class="w-full min-h-14 mt-2 rounded-lg text-lg font-semibold bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
          ?disabled=${loading || !this.submitMaterialUsageProjectId}
          @click=${(event: Event) => {
            this.handleSubmitMaterialUsageClick(event);
            const check = window.setInterval(() => {
              if (this.submitMaterialUsageState === 'success') {
                window.clearInterval(check);
                this.markSuccess('materialUsage');
              } else if (
                this.submitMaterialUsageState === 'error' ||
                this.submitMaterialUsageState === 'idle'
              ) {
                window.clearInterval(check);
                this.requestUpdate();
              }
            }, 120);
          }}
        >
          ${loading
            ? '…'
            : msg[
                'intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage'
              ]}
        </button>
      </div>
    `;
  }

  private renderVoidMaterialFlow(msg: MessageType): TemplateResult {
    const totalBeats = 3;
    const current = Math.min(this.beat, totalBeats - 1);
    const lastId = this.readRecordId(this.submitMaterialUsageOutput, [
      'materialUsageId',
      'id',
      'usageId',
    ]);
    const selectedId = this.submitVoidMaterialUsageMaterialUsageId || lastId;

    if (lastId && !this.submitVoidMaterialUsageMaterialUsageId) {
      this.setSubmitVoidMaterialUsageMaterialUsageId(lastId);
    }

    if (this.submitVoidMaterialUsageState === 'success' && this.successKind === null) {
      this.markSuccess('voidMaterialUsage');
    }

    return html`
      ${this.renderBackRow(current > 0, this.hasVoidMaterialDraft())}
      ${this.renderProgress(totalBeats, current)}
      ${current === 0
        ? html`
            <p class="text-xl font-semibold text-[var(--text-strong,#020617)] mb-3">
              ${msg['organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title']}
            </p>
            ${selectedId
              ? html`
                  <button
                    type="button"
                    class="w-full min-h-16 rounded-lg px-4 py-4 text-left border-2 border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]"
                    @click=${() => {
                      this.setSubmitVoidMaterialUsageMaterialUsageId(selectedId);
                      this.goBeat(1);
                    }}
                  >
                    <span class="block text-base font-semibold">${selectedId}</span>
                  </button>
                `
              : html`
                  <p class="text-[var(--text-muted,#64748b)]">
                    ${msg['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title']}
                  </p>
                `}
          `
        : nothing}
      ${current === 1
        ? html`
            ${this.renderFieldShell(
              msg[
                'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label'
              ],
              html`<textarea
                class="w-full min-h-28 text-lg px-4 py-3 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] text-[var(--text-default,#0f172a)]"
                .value=${this.submitVoidMaterialUsageVoidedReason}
                @input=${(event: Event) =>
                  this.handleSubmitVoidMaterialUsageVoidedReasonChange(event)}
              ></textarea>`,
            )}
            ${this.renderNextButton(
              Boolean(this.submitVoidMaterialUsageVoidedReason.trim()),
              () => this.goBeat(2),
            )}
          `
        : nothing}
      ${current === 2 ? this.renderVoidMaterialReview(msg) : nothing}
    `;
  }

  private renderVoidMaterialReview(msg: MessageType): TemplateResult {
    const loading = this.submitVoidMaterialUsageState === 'loading';
    const err =
      this.submitVoidMaterialUsageState === 'error'
        ? this.submitVoidMaterialUsageError || msg['action.submitVoidMaterialUsage.error']
        : '';
    return html`
      <div
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 flex flex-col gap-3"
      >
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitVoidMaterialUsageMaterialUsageId}</span
          >
        </p>
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${msg[
            'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label'
          ]}:
          <span class="text-[var(--text-default,#0f172a)] font-medium"
            >${this.submitVoidMaterialUsageVoidedReason}</span
          >
        </p>
        ${err
          ? html`<p class="text-sm text-[var(--text-default,#0f172a)]">${err}</p>`
          : nothing}
        <button
          type="button"
          class="w-full min-h-14 mt-2 rounded-lg text-lg font-semibold bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-50"
          ?disabled=${loading || !this.submitVoidMaterialUsageMaterialUsageId}
          @click=${(event: Event) => {
            this.handleSubmitVoidMaterialUsageClick(event);
            const check = window.setInterval(() => {
              if (this.submitVoidMaterialUsageState === 'success') {
                window.clearInterval(check);
                this.markSuccess('voidMaterialUsage');
              } else if (
                this.submitVoidMaterialUsageState === 'error' ||
                this.submitVoidMaterialUsageState === 'idle'
              ) {
                window.clearInterval(check);
                this.requestUpdate();
              }
            }, 120);
          }}
        >
          ${loading
            ? '…'
            : msg[
                'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage'
              ]}
        </button>
      </div>
    `;
  }

  private renderSuccess(msg: MessageType): TemplateResult {
    const kind = this.successKind;
    let title = '';
    if (kind === 'timeLog') {
      title = msg['action.submitTimeLog.success'];
    } else if (kind === 'voidTimeLog') {
      title = msg['action.submitVoidTimeLog.success'];
    } else if (kind === 'materialUsage') {
      title = msg['action.submitMaterialUsage.success'];
    } else if (kind === 'voidMaterialUsage') {
      title = msg['action.submitVoidMaterialUsage.success'];
    }

    const restartFlow: CaptureFlow =
      kind === 'voidTimeLog'
        ? 'voidTimeLog'
        : kind === 'materialUsage'
          ? 'materialUsage'
          : kind === 'voidMaterialUsage'
            ? 'voidMaterialUsage'
            : 'timeLog';

    return html`
      <div class="max-w-xl mx-auto flex flex-col gap-5 py-10">
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] p-6"
        >
          <p class="text-xl font-semibold">${title}</p>
        </div>
        <button
          type="button"
          class="w-full min-h-14 rounded-lg text-lg font-semibold bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]"
          @click=${() => this.startFlow(restartFlow)}
        >
          Log another
        </button>
        <button
          type="button"
          class="w-full min-h-12 rounded-lg text-[var(--text-muted,#64748b)]"
          @click=${() => this.goChooser()}
        >
          Done
        </button>
      </div>
    `;
  }
}
