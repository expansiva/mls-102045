/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/fieldLoggingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmFieldLoggingWorkspaceBase,
  messages as sharedMessages,
} from '/_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.js';

const s_en = sharedMessages['en'];
const s_pt_br = sharedMessages['pt-br'];
const s_es = sharedMessages['es'];

const message_en = {
  'page.title': 'Log Time & Materials',
  'time.section': s_en['section.fieldLoggingWorkspace.sec-time-logging.title'],
  'time.log.title': s_en['organism.fieldLoggingWorkspace.submitTimeLog.title'],
  'time.log.action': s_en['intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog'],
  'time.log.workTaskId': s_en['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label'],
  'time.log.logDate': s_en['intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label'],
  'time.log.hoursWorked': s_en['intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label'],
  'time.log.workerName': s_en['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label'],
  'time.void.title': s_en['organism.fieldLoggingWorkspace.submitVoidTimeLog.title'],
  'time.void.action': s_en['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog'],
  'time.void.reason': s_en['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label'],
  'time.void.confirm': 'Void time log',
  'time.void.needSelection': 'A time log must be selected before it can be voided.',
  'time.feedback.ok': s_en['action.submitTimeLog.success'],
  'time.feedback.err': s_en['action.submitTimeLog.error'],
  'time.void.feedback.ok': s_en['action.submitVoidTimeLog.success'],
  'time.void.feedback.err': s_en['action.submitVoidTimeLog.error'],
  'material.section': s_en['section.fieldLoggingWorkspace.sec-material-logging.title'],
  'material.log.title': s_en['organism.fieldLoggingWorkspace.submitMaterialUsage.title'],
  'material.log.action': s_en['intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage'],
  'material.log.materialName': s_en['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label'],
  'material.log.quantity': s_en['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label'],
  'material.log.unit': s_en['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label'],
  'material.log.unitCost': s_en['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label'],
  'material.log.costCode': s_en['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label'],
  'material.log.usageDate': s_en['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label'],
  'material.log.recordedBy': s_en['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label'],
  'material.log.project': 'Project',
  'material.log.needProject': 'Select a project before logging materials.',
  'material.void.title': s_en['organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title'],
  'material.void.action': s_en['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage'],
  'material.void.reason': s_en['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label'],
  'material.void.confirm': 'Void material usage',
  'material.void.needSelection': 'A material usage record must be selected before it can be voided.',
  'material.feedback.ok': s_en['action.submitMaterialUsage.success'],
  'material.feedback.err': s_en['action.submitMaterialUsage.error'],
  'material.void.feedback.ok': s_en['action.submitVoidMaterialUsage.success'],
  'material.void.feedback.err': s_en['action.submitVoidMaterialUsage.error'],
  'common.saving': 'Saving…',
  'common.dismiss': 'Dismiss',
  'common.selected': 'Selected',
  'common.sessionUser': 'Signed-in worker',
};

export type MessageType = typeof message_en;

const message_pt_br: MessageType = {
  'page.title': 'Registrar tempo e materiais',
  'time.section': s_pt_br['section.fieldLoggingWorkspace.sec-time-logging.title'],
  'time.log.title': s_pt_br['organism.fieldLoggingWorkspace.submitTimeLog.title'],
  'time.log.action': s_pt_br['intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog'],
  'time.log.workTaskId': s_pt_br['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label'],
  'time.log.logDate': s_pt_br['intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label'],
  'time.log.hoursWorked': s_pt_br['intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label'],
  'time.log.workerName': s_pt_br['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label'],
  'time.void.title': s_pt_br['organism.fieldLoggingWorkspace.submitVoidTimeLog.title'],
  'time.void.action': s_pt_br['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog'],
  'time.void.reason': s_pt_br['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label'],
  'time.void.confirm': 'Anular registro de tempo',
  'time.void.needSelection': 'Selecione um registro de tempo antes de anular.',
  'time.feedback.ok': s_pt_br['action.submitTimeLog.success'],
  'time.feedback.err': s_pt_br['action.submitTimeLog.error'],
  'time.void.feedback.ok': s_pt_br['action.submitVoidTimeLog.success'],
  'time.void.feedback.err': s_pt_br['action.submitVoidTimeLog.error'],
  'material.section': s_pt_br['section.fieldLoggingWorkspace.sec-material-logging.title'],
  'material.log.title': s_pt_br['organism.fieldLoggingWorkspace.submitMaterialUsage.title'],
  'material.log.action': s_pt_br['intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage'],
  'material.log.materialName': s_pt_br['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label'],
  'material.log.quantity': s_pt_br['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label'],
  'material.log.unit': s_pt_br['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label'],
  'material.log.unitCost': s_pt_br['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label'],
  'material.log.costCode': s_pt_br['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label'],
  'material.log.usageDate': s_pt_br['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label'],
  'material.log.recordedBy': s_pt_br['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label'],
  'material.log.project': 'Projeto',
  'material.log.needProject': 'Selecione um projeto antes de registrar materiais.',
  'material.void.title': s_pt_br['organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title'],
  'material.void.action': s_pt_br['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage'],
  'material.void.reason': s_pt_br['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label'],
  'material.void.confirm': 'Anular uso de material',
  'material.void.needSelection': 'Selecione um registro de uso de material antes de anular.',
  'material.feedback.ok': s_pt_br['action.submitMaterialUsage.success'],
  'material.feedback.err': s_pt_br['action.submitMaterialUsage.error'],
  'material.void.feedback.ok': s_pt_br['action.submitVoidMaterialUsage.success'],
  'material.void.feedback.err': s_pt_br['action.submitVoidMaterialUsage.error'],
  'common.saving': 'Salvando…',
  'common.dismiss': 'Dispensar',
  'common.selected': 'Selecionado',
  'common.sessionUser': 'Trabalhador conectado',
};

const message_es: MessageType = {
  'page.title': 'Registrar tiempo y materiales',
  'time.section': s_es['section.fieldLoggingWorkspace.sec-time-logging.title'],
  'time.log.title': s_es['organism.fieldLoggingWorkspace.submitTimeLog.title'],
  'time.log.action': s_es['intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog'],
  'time.log.workTaskId': s_es['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label'],
  'time.log.logDate': s_es['intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label'],
  'time.log.hoursWorked': s_es['intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label'],
  'time.log.workerName': s_es['intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label'],
  'time.void.title': s_es['organism.fieldLoggingWorkspace.submitVoidTimeLog.title'],
  'time.void.action': s_es['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog'],
  'time.void.reason': s_es['intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label'],
  'time.void.confirm': 'Anular registro de tiempo',
  'time.void.needSelection': 'Debe seleccionar un registro de tiempo antes de anularlo.',
  'time.feedback.ok': s_es['action.submitTimeLog.success'],
  'time.feedback.err': s_es['action.submitTimeLog.error'],
  'time.void.feedback.ok': s_es['action.submitVoidTimeLog.success'],
  'time.void.feedback.err': s_es['action.submitVoidTimeLog.error'],
  'material.section': s_es['section.fieldLoggingWorkspace.sec-material-logging.title'],
  'material.log.title': s_es['organism.fieldLoggingWorkspace.submitMaterialUsage.title'],
  'material.log.action': s_es['intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage'],
  'material.log.materialName': s_es['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label'],
  'material.log.quantity': s_es['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label'],
  'material.log.unit': s_es['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label'],
  'material.log.unitCost': s_es['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label'],
  'material.log.costCode': s_es['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label'],
  'material.log.usageDate': s_es['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label'],
  'material.log.recordedBy': s_es['intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label'],
  'material.log.project': 'Proyecto',
  'material.log.needProject': 'Seleccione un proyecto antes de registrar materiales.',
  'material.void.title': s_es['organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title'],
  'material.void.action': s_es['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage'],
  'material.void.reason': s_es['intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label'],
  'material.void.confirm': 'Anular uso de material',
  'material.void.needSelection': 'Debe seleccionar un registro de uso de material antes de anularlo.',
  'material.feedback.ok': s_es['action.submitMaterialUsage.success'],
  'material.feedback.err': s_es['action.submitMaterialUsage.error'],
  'material.void.feedback.ok': s_es['action.submitVoidMaterialUsage.success'],
  'material.void.feedback.err': s_es['action.submitVoidMaterialUsage.error'],
  'common.saving': 'Guardando…',
  'common.dismiss': 'Cerrar',
  'common.selected': 'Seleccionado',
  'common.sessionUser': 'Trabajador conectado',
};

export const messages: { [key: string]: MessageType } = {
  en: message_en,
  'pt-br': message_pt_br,
  es: message_es,
};

@customElement('build-flow-fsm--web--desktop--page11--field-logging-workspace-102045')
export class BuildFlowFsmDesktopPage11FieldLoggingWorkspacePage extends BuildFlowFsmFieldLoggingWorkspaceBase {
  declare msg: MessageType;

  render() {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">${msg['page.title']}</h1>
          </header>
          ${this.renderTimeLoggingSection()}
          ${this.renderMaterialLoggingSection()}
        </div>
      </div>
    `;
  }

  renderTimeLoggingSection() {
    const msg = this.msg;
    return html`
      <section class="space-y-4">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['time.section']}</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          ${this.renderSubmitTimeLogCard()}
          ${this.renderVoidTimeLogCard()}
        </div>
      </section>
    `;
  }

  renderSubmitTimeLogCard() {
    const msg = this.msg;
    const loading = this.submitTimeLogState === 'loading';
    const showSuccess = this.submitTimeLogState === 'success';
    const showError = this.submitTimeLogState === 'error';
    const errorText =
      this.submitTimeLogError && this.submitTimeLogError.trim().length > 0
        ? this.submitTimeLogError
        : msg['time.feedback.err'];

    return html`
      <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
        <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">${msg['time.log.title']}</h3>
        <form class="space-y-3" @submit=${(event: Event) => this.handleSubmitTimeLogClick(event)}>
          <label class="block space-y-1">
            <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['time.log.workTaskId']}</span>
            <input
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.submitTimeLogWorkTaskId}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleSubmitTimeLogWorkTaskIdChange(event)}
            />
          </label>
          <label class="block space-y-1">
            <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['time.log.logDate']}</span>
            <input
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="date"
              .value=${this.submitTimeLogLogDate}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleSubmitTimeLogLogDateChange(event)}
            />
          </label>
          <label class="block space-y-1">
            <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['time.log.hoursWorked']}</span>
            <input
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="number"
              min="0"
              step="0.25"
              .value=${this.submitTimeLogHoursWorked}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleSubmitTimeLogHoursWorkedChange(event)}
            />
          </label>
          <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2">
            <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['common.sessionUser']}</p>
            <p class="text-sm text-[var(--text-default,#0f172a)]">
              ${msg['time.log.workerName']}:
              ${this.submitTimeLogWorkerName && this.submitTimeLogWorkerName.trim().length > 0
                ? this.submitTimeLogWorkerName
                : '—'}
            </p>
          </div>
          <div class="flex items-center gap-3 pt-1">
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${loading}
            >
              ${loading ? msg['common.saving'] : msg['time.log.action']}
            </button>
          </div>
        </form>
        ${showSuccess
          ? html`
              <div
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                role="status"
              >
                ${msg['time.feedback.ok']}
              </div>
            `
          : nothing}
        ${showError
          ? html`
              <div
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                role="alert"
              >
                ${errorText}
              </div>
            `
          : nothing}
      </article>
    `;
  }

  renderVoidTimeLogCard() {
    const msg = this.msg;
    const loading = this.submitVoidTimeLogState === 'loading';
    const selectedId = this.submitVoidTimeLogTimeLogId;
    const hasSelection = Boolean(selectedId && selectedId.trim().length > 0);
    const showSuccess = this.submitVoidTimeLogState === 'success';
    const showError = this.submitVoidTimeLogState === 'error';
    const errorText =
      this.submitVoidTimeLogError && this.submitVoidTimeLogError.trim().length > 0
        ? this.submitVoidTimeLogError
        : msg['time.void.feedback.err'];

    return html`
      <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
        <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">${msg['time.void.title']}</h3>
        ${hasSelection
          ? html`
              <div class="rounded-md border border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)] px-3 py-2 text-sm text-[var(--selected-text,#1e3a8a)]">
                <span class="text-xs uppercase tracking-wide opacity-80">${msg['common.selected']}</span>
                <p class="font-medium">${selectedId}</p>
              </div>
              <form
                class="space-y-3"
                @submit=${(event: Event) => {
                  event.preventDefault();
                  const label = `${msg['time.void.confirm']}: ${selectedId}`;
                  if (typeof window !== 'undefined' && window.confirm(label)) {
                    this.handleSubmitVoidTimeLogClick(event);
                  }
                }}
              >
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['time.void.reason']}</span>
                  <textarea
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    rows="3"
                    .value=${this.submitVoidTimeLogVoidReason}
                    ?disabled=${loading}
                    required
                    @input=${(event: Event) => this.handleSubmitVoidTimeLogVoidReasonChange(event)}
                  ></textarea>
                </label>
                <button
                  type="submit"
                  class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${loading || !hasSelection}
                >
                  ${loading ? msg['common.saving'] : msg['time.void.action']}
                </button>
              </form>
            `
          : html`
              <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['time.void.needSelection']}</p>
            `}
        ${showSuccess
          ? html`
              <div
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                role="status"
              >
                ${msg['time.void.feedback.ok']}
              </div>
            `
          : nothing}
        ${showError
          ? html`
              <div
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                role="alert"
              >
                ${errorText}
              </div>
            `
          : nothing}
      </article>
    `;
  }

  renderMaterialLoggingSection() {
    const msg = this.msg;
    return html`
      <section class="space-y-4">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">${msg['material.section']}</h2>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
          ${this.renderSubmitMaterialUsageCard()}
          ${this.renderVoidMaterialUsageCard()}
        </div>
      </section>
    `;
  }

  renderSubmitMaterialUsageCard() {
    const msg = this.msg;
    const loading = this.submitMaterialUsageState === 'loading';
    const projectId = this.submitMaterialUsageProjectId;
    const hasProject = Boolean(projectId && projectId.trim().length > 0);
    const showSuccess = this.submitMaterialUsageState === 'success';
    const showError = this.submitMaterialUsageState === 'error';
    const errorText =
      this.submitMaterialUsageError && this.submitMaterialUsageError.trim().length > 0
        ? this.submitMaterialUsageError
        : msg['material.feedback.err'];

    return html`
      <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
        <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">${msg['material.log.title']}</h3>
        ${hasProject
          ? html`
              <div class="rounded-md border border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)] px-3 py-2 text-sm text-[var(--selected-text,#1e3a8a)]">
                <span class="text-xs uppercase tracking-wide opacity-80">${msg['material.log.project']}</span>
                <p class="font-medium">${projectId}</p>
              </div>
            `
          : html`
              <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['material.log.needProject']}</p>
            `}
        <form class="space-y-3" @submit=${(event: Event) => this.handleSubmitMaterialUsageClick(event)}>
          <label class="block space-y-1">
            <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['material.log.materialName']}</span>
            <input
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              .value=${this.submitMaterialUsageMaterialName}
              ?disabled=${loading || !hasProject}
              required
              @input=${(event: Event) => this.handleSubmitMaterialUsageMaterialNameChange(event)}
            />
          </label>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['material.log.quantity']}</span>
              <input
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                type="number"
                min="0"
                step="any"
                .value=${this.submitMaterialUsageQuantity}
                ?disabled=${loading || !hasProject}
                required
                @input=${(event: Event) => this.handleSubmitMaterialUsageQuantityChange(event)}
              />
            </label>
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['material.log.unit']}</span>
              <input
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                type="text"
                .value=${this.submitMaterialUsageUnit}
                ?disabled=${loading || !hasProject}
                required
                @input=${(event: Event) => this.handleSubmitMaterialUsageUnitChange(event)}
              />
            </label>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['material.log.unitCost']}</span>
              <input
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                type="number"
                min="0"
                step="0.01"
                .value=${this.submitMaterialUsageUnitCost}
                ?disabled=${loading || !hasProject}
                required
                @input=${(event: Event) => this.handleSubmitMaterialUsageUnitCostChange(event)}
              />
            </label>
            <label class="block space-y-1">
              <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['material.log.costCode']}</span>
              <input
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                type="text"
                .value=${this.submitMaterialUsageCostCode}
                ?disabled=${loading || !hasProject}
                @input=${(event: Event) => this.handleSubmitMaterialUsageCostCodeChange(event)}
              />
            </label>
          </div>
          <label class="block space-y-1">
            <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['material.log.usageDate']}</span>
            <input
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="date"
              .value=${this.submitMaterialUsageUsageDate}
              ?disabled=${loading || !hasProject}
              required
              @input=${(event: Event) => this.handleSubmitMaterialUsageUsageDateChange(event)}
            />
          </label>
          <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2">
            <p class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['common.sessionUser']}</p>
            <p class="text-sm text-[var(--text-default,#0f172a)]">
              ${msg['material.log.recordedBy']}:
              ${this.submitMaterialUsageRecordedBy && this.submitMaterialUsageRecordedBy.trim().length > 0
                ? this.submitMaterialUsageRecordedBy
                : '—'}
            </p>
          </div>
          <div class="flex items-center gap-3 pt-1">
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${loading || !hasProject}
            >
              ${loading ? msg['common.saving'] : msg['material.log.action']}
            </button>
          </div>
        </form>
        ${showSuccess
          ? html`
              <div
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                role="status"
              >
                ${msg['material.feedback.ok']}
              </div>
            `
          : nothing}
        ${showError
          ? html`
              <div
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                role="alert"
              >
                ${errorText}
              </div>
            `
          : nothing}
      </article>
    `;
  }

  renderVoidMaterialUsageCard() {
    const msg = this.msg;
    const loading = this.submitVoidMaterialUsageState === 'loading';
    const selectedId = this.submitVoidMaterialUsageMaterialUsageId;
    const hasSelection = Boolean(selectedId && selectedId.trim().length > 0);
    const showSuccess = this.submitVoidMaterialUsageState === 'success';
    const showError = this.submitVoidMaterialUsageState === 'error';
    const errorText =
      this.submitVoidMaterialUsageError && this.submitVoidMaterialUsageError.trim().length > 0
        ? this.submitVoidMaterialUsageError
        : msg['material.void.feedback.err'];

    return html`
      <article class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4 shadow-sm">
        <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">${msg['material.void.title']}</h3>
        ${hasSelection
          ? html`
              <div class="rounded-md border border-[var(--selected-border,#93c5fd)] bg-[var(--selected-bg,#eff6ff)] px-3 py-2 text-sm text-[var(--selected-text,#1e3a8a)]">
                <span class="text-xs uppercase tracking-wide opacity-80">${msg['common.selected']}</span>
                <p class="font-medium">${selectedId}</p>
              </div>
              <form
                class="space-y-3"
                @submit=${(event: Event) => {
                  event.preventDefault();
                  const label = `${msg['material.void.confirm']}: ${selectedId}`;
                  if (typeof window !== 'undefined' && window.confirm(label)) {
                    this.handleSubmitVoidMaterialUsageClick(event);
                  }
                }}
              >
                <label class="block space-y-1">
                  <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['material.void.reason']}</span>
                  <textarea
                    class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    rows="3"
                    .value=${this.submitVoidMaterialUsageVoidedReason}
                    ?disabled=${loading}
                    required
                    @input=${(event: Event) => this.handleSubmitVoidMaterialUsageVoidedReasonChange(event)}
                  ></textarea>
                </label>
                <button
                  type="submit"
                  class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${loading || !hasSelection}
                >
                  ${loading ? msg['common.saving'] : msg['material.void.action']}
                </button>
              </form>
            `
          : html`
              <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['material.void.needSelection']}</p>
            `}
        ${showSuccess
          ? html`
              <div
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                role="status"
              >
                ${msg['material.void.feedback.ok']}
              </div>
            `
          : nothing}
        ${showError
          ? html`
              <div
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                role="alert"
              >
                ${errorText}
              </div>
            `
          : nothing}
      </article>
    `;
  }
}
