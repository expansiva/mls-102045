/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';

import type {
  SubmitTimeLogOutput,
  SubmitVoidTimeLogOutput,
  SubmitMaterialUsageOutput,
  SubmitVoidMaterialUsageOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/fieldLoggingWorkspace.js';

import {
  submitTimeLogRoute,
  submitVoidTimeLogRoute,
  submitMaterialUsageRoute,
  submitVoidMaterialUsageRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/fieldLoggingWorkspace.js';

export type {
  SubmitTimeLogInput,
  SubmitTimeLogOutput,
  SubmitVoidTimeLogInput,
  SubmitVoidTimeLogOutput,
  SubmitMaterialUsageInput,
  SubmitMaterialUsageOutput,
  SubmitVoidMaterialUsageInput,
  SubmitVoidMaterialUsageOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/fieldLoggingWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.fieldLoggingWorkspace.sec-time-logging.title": "Time Logging",
"organism.fieldLoggingWorkspace.submitTimeLog.title": "Log hours worked",
"intent.fieldLoggingWorkspace.submitTimeLog.form.title": "Log hours worked",
"intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog": "Log hours worked",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label": "Work Task Id",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label": "Log Date",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label": "Hours Worked",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label": "Worker Name",
"organism.fieldLoggingWorkspace.submitVoidTimeLog.title": "Void time log",
"intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title": "Void time log",
"intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog": "Void time log",
"intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label": "Void Reason",
"section.fieldLoggingWorkspace.sec-material-logging.title": "Material Logging",
"organism.fieldLoggingWorkspace.submitMaterialUsage.title": "Log materials used",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.title": "Log materials used",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage": "Log materials used",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label": "Material Name",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label": "Quantity",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label": "Unit",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label": "Unit Cost",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label": "Cost Code",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label": "Usage Date",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label": "Recorded By",
"organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title": "Void material usage",
"intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title": "Void material usage",
"intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage": "Void material usage",
"intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label": "Voided Reason"
};

const message_pt_br = {
"section.fieldLoggingWorkspace.sec-time-logging.title": "Registro de Tempo",
"organism.fieldLoggingWorkspace.submitTimeLog.title": "Registrar horas trabalhadas",
"intent.fieldLoggingWorkspace.submitTimeLog.form.title": "Registrar horas trabalhadas",
"intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog": "Registrar horas trabalhadas",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label": "ID da Tarefa",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label": "Data do Registro",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label": "Horas Trabalhadas",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label": "Nome do Trabalhador",
"organism.fieldLoggingWorkspace.submitVoidTimeLog.title": "Anular registro de tempo",
"intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title": "Anular registro de tempo",
"intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog": "Anular registro de tempo",
"intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label": "Motivo da Anulação",
"section.fieldLoggingWorkspace.sec-material-logging.title": "Registro de Materiais",
"organism.fieldLoggingWorkspace.submitMaterialUsage.title": "Registrar materiais usados",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.title": "Registrar materiais usados",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage": "Registrar materiais usados",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label": "Nome do Material",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label": "Quantidade",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label": "Unidade",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label": "Custo Unitário",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label": "Código de Custo",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label": "Data de Uso",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label": "Registrado Por",
"organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title": "Anular uso de material",
"intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title": "Anular uso de material",
"intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage": "Anular uso de material",
"intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label": "Motivo da Anulação"
};

const message_es = {
"section.fieldLoggingWorkspace.sec-time-logging.title": "Registro de Tiempo",
"organism.fieldLoggingWorkspace.submitTimeLog.title": "Registrar horas trabajadas",
"intent.fieldLoggingWorkspace.submitTimeLog.form.title": "Registrar horas trabajadas",
"intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog": "Registrar horas trabajadas",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label": "ID de la Tarea",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label": "Fecha de Registro",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label": "Horas Trabajadas",
"intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label": "Nombre del Trabajador",
"organism.fieldLoggingWorkspace.submitVoidTimeLog.title": "Anular registro de tiempo",
"intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title": "Anular registro de tiempo",
"intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog": "Anular registro de tiempo",
"intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label": "Motivo de Anulación",
"section.fieldLoggingWorkspace.sec-material-logging.title": "Registro de Materiales",
"organism.fieldLoggingWorkspace.submitMaterialUsage.title": "Registrar materiales usados",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.title": "Registrar materiales usados",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage": "Registrar materiales usados",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label": "Nombre del Material",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label": "Cantidad",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label": "Unidad",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label": "Costo Unitario",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label": "Código de Costo",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label": "Fecha de Uso",
"intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label": "Registrado Por",
"organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title": "Anular uso de material",
"intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title": "Anular uso de material",
"intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage": "Anular uso de material",
"intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label": "Motivo de Anulación"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmFieldLoggingWorkspaceBase extends CollabLitElement {
  /** state ui.fieldLoggingWorkspace.status — pageStatus */
  @property({ type: String }) status: string = '';

  /** state ui.fieldLoggingWorkspace.action.submitTimeLog.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) submitTimeLogState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId — input, presentation: form */
  @property({ type: String }) submitTimeLogWorkTaskId: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitTimeLog.logDate — input, presentation: form */
  @property({ type: String }) submitTimeLogLogDate: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked — input, presentation: form */
  @property({ type: String }) submitTimeLogHoursWorked: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitTimeLog.workerName — input, presentation: form */
  @property({ type: String }) submitTimeLogWorkerName: string = '';

  /** state ui.fieldLoggingWorkspace.output.submitTimeLog — commandOutput, outputShape: object */
  @property({ type: Object }) submitTimeLogOutput: SubmitTimeLogOutput | null = null;

  /** state ui.fieldLoggingWorkspace.action.submitTimeLog.error — actionError */
  @property({ type: String }) submitTimeLogError: string = '';

  /** state ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) submitVoidTimeLogState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId — input, presentation: selection */
  @property({ type: String }) submitVoidTimeLogTimeLogId: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason — input, presentation: form */
  @property({ type: String }) submitVoidTimeLogVoidReason: string = '';

  /** state ui.fieldLoggingWorkspace.output.submitVoidTimeLog — commandOutput, outputShape: object */
  @property({ type: Object }) submitVoidTimeLogOutput: SubmitVoidTimeLogOutput | null = null;

  /** state ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error — actionError */
  @property({ type: String }) submitVoidTimeLogError: string = '';

  /** state ui.fieldLoggingWorkspace.action.submitMaterialUsage.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) submitMaterialUsageState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId — input, presentation: selection */
  @property({ type: String }) submitMaterialUsageProjectId: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName — input, presentation: form */
  @property({ type: String }) submitMaterialUsageMaterialName: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity — input, presentation: form */
  @property({ type: String }) submitMaterialUsageQuantity: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit — input, presentation: form */
  @property({ type: String }) submitMaterialUsageUnit: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost — input, presentation: form */
  @property({ type: String }) submitMaterialUsageUnitCost: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode — input, presentation: form */
  @property({ type: String }) submitMaterialUsageCostCode: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate — input, presentation: form */
  @property({ type: String }) submitMaterialUsageUsageDate: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy — input, presentation: form */
  @property({ type: String }) submitMaterialUsageRecordedBy: string = '';

  /** state ui.fieldLoggingWorkspace.output.submitMaterialUsage — commandOutput, outputShape: object */
  @property({ type: Object }) submitMaterialUsageOutput: SubmitMaterialUsageOutput | null = null;

  /** state ui.fieldLoggingWorkspace.action.submitMaterialUsage.error — actionError */
  @property({ type: String }) submitMaterialUsageError: string = '';

  /** state ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) submitVoidMaterialUsageState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId — input, presentation: selection */
  @property({ type: String }) submitVoidMaterialUsageMaterialUsageId: string = '';

  /** state ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason — input, presentation: form */
  @property({ type: String }) submitVoidMaterialUsageVoidedReason: string = '';

  /** state ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage — commandOutput, outputShape: object */
  @property({ type: Object }) submitVoidMaterialUsageOutput: SubmitVoidMaterialUsageOutput | null = null;

  /** state ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error — actionError */
  @property({ type: String }) submitVoidMaterialUsageError: string = '';

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  /** action submitTimeLog (command) — route buildFlowFsm.fieldLoggingWorkspace.submitTimeLog; inputs: workTaskId, logDate, hoursWorked, workerName; writes ui.fieldLoggingWorkspace.output.submitTimeLog; status ui.fieldLoggingWorkspace.action.submitTimeLog.status; feedback keys action.submitTimeLog.success / action.submitTimeLog.error */
  async submitTimeLog(signal?: AbortSignal): Promise<void> {
    this.submitTimeLogState = 'loading';
    setState('ui.fieldLoggingWorkspace.action.submitTimeLog.status', 'loading');

    const params = {
      workTaskId: this.submitTimeLogWorkTaskId,
      logDate: this.submitTimeLogLogDate,
      hoursWorked: Number(this.submitTimeLogHoursWorked),
      workerName: this.submitTimeLogWorkerName,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<SubmitTimeLogOutput>(submitTimeLogRoute, params, options);

    if (response.ok) {
      this.submitTimeLogOutput = response.data ?? null;
      setState('ui.fieldLoggingWorkspace.output.submitTimeLog', response.data ?? null);

      this.submitTimeLogWorkTaskId = '';
      this.submitTimeLogLogDate = '';
      this.submitTimeLogHoursWorked = '';
      this.submitTimeLogWorkerName = '';
      setState('ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId', '');
      setState('ui.fieldLoggingWorkspace.input.submitTimeLog.logDate', '');
      setState('ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked', '');
      setState('ui.fieldLoggingWorkspace.input.submitTimeLog.workerName', '');

      this.submitTimeLogError = '';
      setState('ui.fieldLoggingWorkspace.action.submitTimeLog.error', '');
      this.submitTimeLogState = 'success';
      setState('ui.fieldLoggingWorkspace.action.submitTimeLog.status', 'success');
    } else {
      const errorMsg: string = response.error ? String((response.error as { message?: string }).message ?? '') : '';
      this.submitTimeLogError = errorMsg;
      setState('ui.fieldLoggingWorkspace.action.submitTimeLog.error', errorMsg);
      this.submitTimeLogState = 'error';
      setState('ui.fieldLoggingWorkspace.action.submitTimeLog.status', 'error');
    }
  }

  /** handler for action submitTimeLog — bind UI events here */
  handleSubmitTimeLogClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.submitTimeLog(signal);
    });
  }

  /** action submitVoidTimeLog (command) — route buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog; inputs: timeLogId, voidReason; writes ui.fieldLoggingWorkspace.output.submitVoidTimeLog; status ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status; feedback keys action.submitVoidTimeLog.success / action.submitVoidTimeLog.error */
  async submitVoidTimeLog(signal?: AbortSignal): Promise<void> {
    this.submitVoidTimeLogState = 'loading';
    setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status', 'loading');

    const params = {
      timeLogId: this.submitVoidTimeLogTimeLogId,
      voidReason: this.submitVoidTimeLogVoidReason,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<SubmitVoidTimeLogOutput>(submitVoidTimeLogRoute, params, options);

    if (response.ok) {
      this.submitVoidTimeLogOutput = response.data ?? null;
      setState('ui.fieldLoggingWorkspace.output.submitVoidTimeLog', response.data ?? null);

      this.submitVoidTimeLogTimeLogId = '';
      this.submitVoidTimeLogVoidReason = '';
      setState('ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId', '');
      setState('ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason', '');

      this.submitVoidTimeLogError = '';
      setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error', '');
      this.submitVoidTimeLogState = 'success';
      setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status', 'success');
    } else {
      const errorMsg: string = response.error ? String((response.error as { message?: string }).message ?? '') : '';
      this.submitVoidTimeLogError = errorMsg;
      setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error', errorMsg);
      this.submitVoidTimeLogState = 'error';
      setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status', 'error');
    }
  }

  /** handler for action submitVoidTimeLog — bind UI events here */
  handleSubmitVoidTimeLogClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.submitVoidTimeLog(signal);
    });
  }

  /** action submitMaterialUsage (command) — route buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage; inputs: projectId, materialName, quantity, unit, unitCost, costCode, usageDate, recordedBy; writes ui.fieldLoggingWorkspace.output.submitMaterialUsage; status ui.fieldLoggingWorkspace.action.submitMaterialUsage.status; feedback keys action.submitMaterialUsage.success / action.submitMaterialUsage.error */
  async submitMaterialUsage(signal?: AbortSignal): Promise<void> {
    this.submitMaterialUsageState = 'loading';
    setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.status', 'loading');

    const params = {
      projectId: this.submitMaterialUsageProjectId,
      materialName: this.submitMaterialUsageMaterialName,
      quantity: Number(this.submitMaterialUsageQuantity),
      unit: this.submitMaterialUsageUnit,
      unitCost: Number(this.submitMaterialUsageUnitCost),
      costCode: this.submitMaterialUsageCostCode || undefined,
      usageDate: this.submitMaterialUsageUsageDate,
      recordedBy: this.submitMaterialUsageRecordedBy,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<SubmitMaterialUsageOutput>(submitMaterialUsageRoute, params, options);

    if (response.ok) {
      this.submitMaterialUsageOutput = response.data ?? null;
      setState('ui.fieldLoggingWorkspace.output.submitMaterialUsage', response.data ?? null);

      this.submitMaterialUsageProjectId = '';
      this.submitMaterialUsageMaterialName = '';
      this.submitMaterialUsageQuantity = '';
      this.submitMaterialUsageUnit = '';
      this.submitMaterialUsageUnitCost = '';
      this.submitMaterialUsageCostCode = '';
      this.submitMaterialUsageUsageDate = '';
      this.submitMaterialUsageRecordedBy = '';
      setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId', '');
      setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName', '');
      setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity', '');
      setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit', '');
      setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost', '');
      setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode', '');
      setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate', '');
      setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy', '');

      this.submitMaterialUsageError = '';
      setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.error', '');
      this.submitMaterialUsageState = 'success';
      setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.status', 'success');
    } else {
      const errorMsg: string = response.error ? String((response.error as { message?: string }).message ?? '') : '';
      this.submitMaterialUsageError = errorMsg;
      setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.error', errorMsg);
      this.submitMaterialUsageState = 'error';
      setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.status', 'error');
    }
  }

  /** handler for action submitMaterialUsage — bind UI events here */
  handleSubmitMaterialUsageClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.submitMaterialUsage(signal);
    });
  }

  /** action submitVoidMaterialUsage (command) — route buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage; inputs: materialUsageId, voidedReason; writes ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage; status ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status; feedback keys action.submitVoidMaterialUsage.success / action.submitVoidMaterialUsage.error */
  async submitVoidMaterialUsage(signal?: AbortSignal): Promise<void> {
    this.submitVoidMaterialUsageState = 'loading';
    setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status', 'loading');

    const params = {
      materialUsageId: this.submitVoidMaterialUsageMaterialUsageId,
      voidedReason: this.submitVoidMaterialUsageVoidedReason,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<SubmitVoidMaterialUsageOutput>(submitVoidMaterialUsageRoute, params, options);

    if (response.ok) {
      this.submitVoidMaterialUsageOutput = response.data ?? null;
      setState('ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage', response.data ?? null);

      this.submitVoidMaterialUsageMaterialUsageId = '';
      this.submitVoidMaterialUsageVoidedReason = '';
      setState('ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId', '');
      setState('ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason', '');

      this.submitVoidMaterialUsageError = '';
      setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error', '');
      this.submitVoidMaterialUsageState = 'success';
      setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status', 'success');
    } else {
      const errorMsg: string = response.error ? String((response.error as { message?: string }).message ?? '') : '';
      this.submitVoidMaterialUsageError = errorMsg;
      setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error', errorMsg);
      this.submitVoidMaterialUsageState = 'error';
      setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status', 'error');
    }
  }

  /** handler for action submitVoidMaterialUsage — bind UI events here */
  handleSubmitVoidMaterialUsageClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.submitVoidMaterialUsage(signal);
    });
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId */
  setSubmitTimeLogWorkTaskId(value: string): void {
    this.submitTimeLogWorkTaskId = value;
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.submitTimeLogWorkTaskId — bind UI events here */
  handleSubmitTimeLogWorkTaskIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitTimeLogWorkTaskId(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitTimeLog.logDate */
  setSubmitTimeLogLogDate(value: string): void {
    this.submitTimeLogLogDate = value;
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.logDate', value);
    this.requestUpdate();
  }

  /** handler for action set.submitTimeLogLogDate — bind UI events here */
  handleSubmitTimeLogLogDateChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitTimeLogLogDate(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked */
  setSubmitTimeLogHoursWorked(value: string): void {
    this.submitTimeLogHoursWorked = value;
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked', value);
    this.requestUpdate();
  }

  /** handler for action set.submitTimeLogHoursWorked — bind UI events here */
  handleSubmitTimeLogHoursWorkedChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitTimeLogHoursWorked(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitTimeLog.workerName */
  setSubmitTimeLogWorkerName(value: string): void {
    this.submitTimeLogWorkerName = value;
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.workerName', value);
    this.requestUpdate();
  }

  /** handler for action set.submitTimeLogWorkerName — bind UI events here */
  handleSubmitTimeLogWorkerNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitTimeLogWorkerName(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId */
  setSubmitVoidTimeLogTimeLogId(value: string): void {
    this.submitVoidTimeLogTimeLogId = value;
    setState('ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId', value);
    this.requestUpdate();
  }

  /** handler for action set.submitVoidTimeLogTimeLogId — bind UI events here */
  handleSubmitVoidTimeLogTimeLogIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitVoidTimeLogTimeLogId(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason */
  setSubmitVoidTimeLogVoidReason(value: string): void {
    this.submitVoidTimeLogVoidReason = value;
    setState('ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason', value);
    this.requestUpdate();
  }

  /** handler for action set.submitVoidTimeLogVoidReason — bind UI events here */
  handleSubmitVoidTimeLogVoidReasonChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitVoidTimeLogVoidReason(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId */
  setSubmitMaterialUsageProjectId(value: string): void {
    this.submitMaterialUsageProjectId = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageProjectId — bind UI events here */
  handleSubmitMaterialUsageProjectIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitMaterialUsageProjectId(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName */
  setSubmitMaterialUsageMaterialName(value: string): void {
    this.submitMaterialUsageMaterialName = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageMaterialName — bind UI events here */
  handleSubmitMaterialUsageMaterialNameChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitMaterialUsageMaterialName(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity */
  setSubmitMaterialUsageQuantity(value: string): void {
    this.submitMaterialUsageQuantity = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageQuantity — bind UI events here */
  handleSubmitMaterialUsageQuantityChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitMaterialUsageQuantity(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit */
  setSubmitMaterialUsageUnit(value: string): void {
    this.submitMaterialUsageUnit = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageUnit — bind UI events here */
  handleSubmitMaterialUsageUnitChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitMaterialUsageUnit(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost */
  setSubmitMaterialUsageUnitCost(value: string): void {
    this.submitMaterialUsageUnitCost = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageUnitCost — bind UI events here */
  handleSubmitMaterialUsageUnitCostChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitMaterialUsageUnitCost(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode */
  setSubmitMaterialUsageCostCode(value: string): void {
    this.submitMaterialUsageCostCode = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageCostCode — bind UI events here */
  handleSubmitMaterialUsageCostCodeChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitMaterialUsageCostCode(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate */
  setSubmitMaterialUsageUsageDate(value: string): void {
    this.submitMaterialUsageUsageDate = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageUsageDate — bind UI events here */
  handleSubmitMaterialUsageUsageDateChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitMaterialUsageUsageDate(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy */
  setSubmitMaterialUsageRecordedBy(value: string): void {
    this.submitMaterialUsageRecordedBy = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageRecordedBy — bind UI events here */
  handleSubmitMaterialUsageRecordedByChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitMaterialUsageRecordedBy(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId */
  setSubmitVoidMaterialUsageMaterialUsageId(value: string): void {
    this.submitVoidMaterialUsageMaterialUsageId = value;
    setState('ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId', value);
    this.requestUpdate();
  }

  /** handler for action set.submitVoidMaterialUsageMaterialUsageId — bind UI events here */
  handleSubmitVoidMaterialUsageMaterialUsageIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitVoidMaterialUsageMaterialUsageId(target.value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason */
  setSubmitVoidMaterialUsageVoidedReason(value: string): void {
    this.submitVoidMaterialUsageVoidedReason = value;
    setState('ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason', value);
    this.requestUpdate();
  }

  /** handler for action set.submitVoidMaterialUsageVoidedReason — bind UI events here */
  handleSubmitVoidMaterialUsageVoidedReasonChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setSubmitVoidMaterialUsageVoidedReason(target.value);
  }

  override connectedCallback(): void {
    super.connectedCallback();
    const savedStatus = getState('ui.fieldLoggingWorkspace.status') as string | undefined;
    if (savedStatus !== undefined && savedStatus !== null) {
      this.status = savedStatus;
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}
