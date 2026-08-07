/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/fieldLoggingWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  SubmitTimeLogInput,
  SubmitTimeLogOutput,
  SubmitVoidTimeLogInput,
  SubmitVoidTimeLogOutput,
  SubmitMaterialUsageInput,
  SubmitMaterialUsageOutput,
  SubmitVoidMaterialUsageInput,
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
  'section.fieldLoggingWorkspace.sec-time-logging.title': 'Time Logging',
  'organism.fieldLoggingWorkspace.submitTimeLog.title': 'Log hours worked',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.title': 'Log hours worked',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog': 'Log hours worked',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label': 'Work Task Id',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label': 'Log Date',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label': 'Hours Worked',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label': 'Worker Name',
  'organism.fieldLoggingWorkspace.submitVoidTimeLog.title': 'Void time log',
  'intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title': 'Void time log',
  'intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog': 'Void time log',
  'intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label': 'Void Reason',
  'section.fieldLoggingWorkspace.sec-material-logging.title': 'Material Logging',
  'organism.fieldLoggingWorkspace.submitMaterialUsage.title': 'Log materials used',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.title': 'Log materials used',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage': 'Log materials used',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label': 'Material Name',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label': 'Quantity',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label': 'Unit',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label': 'Unit Cost',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label': 'Cost Code',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label': 'Usage Date',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label': 'Recorded By',
  'organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title': 'Void material usage',
  'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title': 'Void material usage',
  'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage': 'Void material usage',
  'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label': 'Voided Reason',
  'action.submitTimeLog.success': 'Log hours worked: OK',
  'action.submitTimeLog.error': 'Log hours worked: falhou',
  'action.submitVoidTimeLog.success': 'Void time log: OK',
  'action.submitVoidTimeLog.error': 'Void time log: falhou',
  'action.submitMaterialUsage.success': 'Log materials used: OK',
  'action.submitMaterialUsage.error': 'Log materials used: falhou',
  'action.submitVoidMaterialUsage.success': 'Void material usage: OK',
  'action.submitVoidMaterialUsage.error': 'Void material usage: falhou',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.fieldLoggingWorkspace.sec-time-logging.title': 'Registro de Tempo',
  'organism.fieldLoggingWorkspace.submitTimeLog.title': 'Registrar horas trabalhadas',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.title': 'Registrar horas trabalhadas',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog': 'Registrar horas trabalhadas',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label': 'ID da Tarefa de Trabalho',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label': 'Data do Registro',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label': 'Horas Trabalhadas',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label': 'Nome do Trabalhador',
  'organism.fieldLoggingWorkspace.submitVoidTimeLog.title': 'Anular registro de tempo',
  'intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title': 'Anular registro de tempo',
  'intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog': 'Anular registro de tempo',
  'intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label': 'Motivo da Anulação',
  'section.fieldLoggingWorkspace.sec-material-logging.title': 'Registro de Materiais',
  'organism.fieldLoggingWorkspace.submitMaterialUsage.title': 'Registrar materiais usados',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.title': 'Registrar materiais usados',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage': 'Registrar materiais usados',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label': 'Nome do Material',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label': 'Quantidade',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label': 'Unidade',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label': 'Custo Unitário',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label': 'Código de Custo',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label': 'Data de Uso',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label': 'Registrado Por',
  'organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title': 'Anular uso de material',
  'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title': 'Anular uso de material',
  'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage': 'Anular uso de material',
  'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label': 'Motivo da Anulação',
  'action.submitTimeLog.success': 'Registro de horas trabalhadas: OK',
  'action.submitTimeLog.error': 'Registro de horas trabalhadas: falhou',
  'action.submitVoidTimeLog.success': 'Anulação do registro de tempo: OK',
  'action.submitVoidTimeLog.error': 'Anulação do registro de tempo: falhou',
  'action.submitMaterialUsage.success': 'Registro de materiais usados: OK',
  'action.submitMaterialUsage.error': 'Registro de materiais usados: falhou',
  'action.submitVoidMaterialUsage.success': 'Anulação do uso de material: OK',
  'action.submitVoidMaterialUsage.error': 'Anulação do uso de material: falhou',
};
const message_es: MessageType = {
  'section.fieldLoggingWorkspace.sec-time-logging.title': 'Registro de Tiempo',
  'organism.fieldLoggingWorkspace.submitTimeLog.title': 'Registrar horas trabajadas',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.title': 'Registrar horas trabajadas',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.action.submitTimeLog': 'Registrar horas trabajadas',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.workTaskId.label': 'ID de la Tarea de Trabajo',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.logDate.label': 'Fecha del Registro',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.hoursWorked.label': 'Horas Trabajadas',
  'intent.fieldLoggingWorkspace.submitTimeLog.form.field.workerName.label': 'Nombre del Trabajador',
  'organism.fieldLoggingWorkspace.submitVoidTimeLog.title': 'Anular registro de tiempo',
  'intent.fieldLoggingWorkspace.submitVoidTimeLog.form.title': 'Anular registro de tiempo',
  'intent.fieldLoggingWorkspace.submitVoidTimeLog.form.action.submitVoidTimeLog': 'Anular registro de tiempo',
  'intent.fieldLoggingWorkspace.submitVoidTimeLog.form.field.voidReason.label': 'Motivo de la Anulación',
  'section.fieldLoggingWorkspace.sec-material-logging.title': 'Registro de Materiales',
  'organism.fieldLoggingWorkspace.submitMaterialUsage.title': 'Registrar materiales usados',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.title': 'Registrar materiales usados',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.action.submitMaterialUsage': 'Registrar materiales usados',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.materialName.label': 'Nombre del Material',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.quantity.label': 'Cantidad',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unit.label': 'Unidad',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.unitCost.label': 'Costo Unitario',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.costCode.label': 'Código de Costo',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.usageDate.label': 'Fecha de Uso',
  'intent.fieldLoggingWorkspace.submitMaterialUsage.form.field.recordedBy.label': 'Registrado Por',
  'organism.fieldLoggingWorkspace.submitVoidMaterialUsage.title': 'Anular uso de material',
  'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.title': 'Anular uso de material',
  'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.action.submitVoidMaterialUsage': 'Anular uso de material',
  'intent.fieldLoggingWorkspace.submitVoidMaterialUsage.form.field.voidedReason.label': 'Motivo de la Anulación',
  'action.submitTimeLog.success': 'Registro de horas trabajadas: OK',
  'action.submitTimeLog.error': 'Registro de horas trabajadas: falló',
  'action.submitVoidTimeLog.success': 'Anulación del registro de tiempo: OK',
  'action.submitVoidTimeLog.error': 'Anulación del registro de tiempo: falló',
  'action.submitMaterialUsage.success': 'Registro de materiales usados: OK',
  'action.submitMaterialUsage.error': 'Registro de materiales usados: falló',
  'action.submitVoidMaterialUsage.success': 'Anulación del uso de material: OK',
  'action.submitVoidMaterialUsage.error': 'Anulación del uso de material: falló',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.fieldLoggingWorkspace.status',
  'ui.fieldLoggingWorkspace.action.submitTimeLog.status',
  'ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId',
  'ui.fieldLoggingWorkspace.input.submitTimeLog.logDate',
  'ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked',
  'ui.fieldLoggingWorkspace.input.submitTimeLog.workerName',
  'ui.fieldLoggingWorkspace.output.submitTimeLog',
  'ui.fieldLoggingWorkspace.action.submitTimeLog.error',
  'ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status',
  'ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId',
  'ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason',
  'ui.fieldLoggingWorkspace.output.submitVoidTimeLog',
  'ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error',
  'ui.fieldLoggingWorkspace.action.submitMaterialUsage.status',
  'ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId',
  'ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName',
  'ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity',
  'ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit',
  'ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost',
  'ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode',
  'ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate',
  'ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy',
  'ui.fieldLoggingWorkspace.output.submitMaterialUsage',
  'ui.fieldLoggingWorkspace.action.submitMaterialUsage.error',
  'ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status',
  'ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId',
  'ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason',
  'ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage',
  'ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error',
];

export class BuildFlowFsmFieldLoggingWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state submitTimeLogState — actionStatus, values: idle|loading|success|error */
  @property() submitTimeLogState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state submitTimeLogWorkTaskId — input */
  @property() submitTimeLogWorkTaskId: string = '';
  /** state submitTimeLogLogDate — input */
  @property() submitTimeLogLogDate: string = '';
  /** state submitTimeLogHoursWorked — input */
  @property() submitTimeLogHoursWorked: string = '';
  /** state submitTimeLogWorkerName — input */
  @property() submitTimeLogWorkerName: string = '';
  /** state submitTimeLogOutput — commandOutput */
  @property() submitTimeLogOutput: SubmitTimeLogOutput | null = null;
  /** state submitTimeLogError — actionError */
  @property() submitTimeLogError: string = '';
  /** state submitVoidTimeLogState — actionStatus, values: idle|loading|success|error */
  @property() submitVoidTimeLogState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state submitVoidTimeLogTimeLogId — input */
  @property() submitVoidTimeLogTimeLogId: string = '';
  /** state submitVoidTimeLogVoidReason — input */
  @property() submitVoidTimeLogVoidReason: string = '';
  /** state submitVoidTimeLogOutput — commandOutput */
  @property() submitVoidTimeLogOutput: SubmitVoidTimeLogOutput | null = null;
  /** state submitVoidTimeLogError — actionError */
  @property() submitVoidTimeLogError: string = '';
  /** state submitMaterialUsageState — actionStatus, values: idle|loading|success|error */
  @property() submitMaterialUsageState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state submitMaterialUsageProjectId — input */
  @property() submitMaterialUsageProjectId: string = '';
  /** state submitMaterialUsageMaterialName — input */
  @property() submitMaterialUsageMaterialName: string = '';
  /** state submitMaterialUsageQuantity — input */
  @property() submitMaterialUsageQuantity: string = '';
  /** state submitMaterialUsageUnit — input */
  @property() submitMaterialUsageUnit: string = '';
  /** state submitMaterialUsageUnitCost — input */
  @property() submitMaterialUsageUnitCost: string = '';
  /** state submitMaterialUsageCostCode — input */
  @property() submitMaterialUsageCostCode: string = '';
  /** state submitMaterialUsageUsageDate — input */
  @property() submitMaterialUsageUsageDate: string = '';
  /** state submitMaterialUsageRecordedBy — input */
  @property() submitMaterialUsageRecordedBy: string = '';
  /** state submitMaterialUsageOutput — commandOutput */
  @property() submitMaterialUsageOutput: SubmitMaterialUsageOutput | null = null;
  /** state submitMaterialUsageError — actionError */
  @property() submitMaterialUsageError: string = '';
  /** state submitVoidMaterialUsageState — actionStatus, values: idle|loading|success|error */
  @property() submitVoidMaterialUsageState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state submitVoidMaterialUsageMaterialUsageId — input */
  @property() submitVoidMaterialUsageMaterialUsageId: string = '';
  /** state submitVoidMaterialUsageVoidedReason — input */
  @property() submitVoidMaterialUsageVoidedReason: string = '';
  /** state submitVoidMaterialUsageOutput — commandOutput */
  @property() submitVoidMaterialUsageOutput: SubmitVoidMaterialUsageOutput | null = null;
  /** state submitVoidMaterialUsageError — actionError */
  @property() submitVoidMaterialUsageError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.fieldLoggingWorkspace.status', '');
    this.initStateValue('ui.fieldLoggingWorkspace.action.submitTimeLog.status', 'idle');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitTimeLog.logDate', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitTimeLog.workerName', '');
    this.initStateValue('ui.fieldLoggingWorkspace.output.submitTimeLog', null);
    this.initStateValue('ui.fieldLoggingWorkspace.action.submitTimeLog.error', '');
    this.initStateValue('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status', 'idle');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason', '');
    this.initStateValue('ui.fieldLoggingWorkspace.output.submitVoidTimeLog', null);
    this.initStateValue('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error', '');
    this.initStateValue('ui.fieldLoggingWorkspace.action.submitMaterialUsage.status', 'idle');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy', '');
    this.initStateValue('ui.fieldLoggingWorkspace.output.submitMaterialUsage', null);
    this.initStateValue('ui.fieldLoggingWorkspace.action.submitMaterialUsage.error', '');
    this.initStateValue('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status', 'idle');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId', '');
    this.initStateValue('ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason', '');
    this.initStateValue('ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage', null);
    this.initStateValue('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error', '');
    subscribe(SUBSCRIBED_STATE_KEYS, this);
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.fieldLoggingWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.action.submitTimeLog.status':
        this.submitTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId':
        this.submitTimeLogWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitTimeLog.logDate':
        this.submitTimeLogLogDate = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked':
        this.submitTimeLogHoursWorked = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitTimeLog.workerName':
        this.submitTimeLogWorkerName = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.output.submitTimeLog':
        this.submitTimeLogOutput = (value as SubmitTimeLogOutput | null) ?? null;
        break;
      case 'ui.fieldLoggingWorkspace.action.submitTimeLog.error':
        this.submitTimeLogError = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status':
        this.submitVoidTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId':
        this.submitVoidTimeLogTimeLogId = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason':
        this.submitVoidTimeLogVoidReason = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.output.submitVoidTimeLog':
        this.submitVoidTimeLogOutput = (value as SubmitVoidTimeLogOutput | null) ?? null;
        break;
      case 'ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error':
        this.submitVoidTimeLogError = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.action.submitMaterialUsage.status':
        this.submitMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId':
        this.submitMaterialUsageProjectId = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName':
        this.submitMaterialUsageMaterialName = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity':
        this.submitMaterialUsageQuantity = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit':
        this.submitMaterialUsageUnit = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost':
        this.submitMaterialUsageUnitCost = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode':
        this.submitMaterialUsageCostCode = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate':
        this.submitMaterialUsageUsageDate = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy':
        this.submitMaterialUsageRecordedBy = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.output.submitMaterialUsage':
        this.submitMaterialUsageOutput = (value as SubmitMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.fieldLoggingWorkspace.action.submitMaterialUsage.error':
        this.submitMaterialUsageError = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status':
        this.submitVoidMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId':
        this.submitVoidMaterialUsageMaterialUsageId = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason':
        this.submitVoidMaterialUsageVoidedReason = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage':
        this.submitVoidMaterialUsageOutput = (value as SubmitVoidMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error':
        this.submitVoidMaterialUsageError = (value as string) ?? '';
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  private initStateValue(stateKey: string, defaultValue: unknown): void {
    const existing: unknown = getState(stateKey);
    const value: unknown = existing !== undefined ? existing : defaultValue;
    switch (stateKey) {
      case 'ui.fieldLoggingWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.action.submitTimeLog.status':
        this.submitTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId':
        this.submitTimeLogWorkTaskId = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitTimeLog.logDate':
        this.submitTimeLogLogDate = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked':
        this.submitTimeLogHoursWorked = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitTimeLog.workerName':
        this.submitTimeLogWorkerName = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.output.submitTimeLog':
        this.submitTimeLogOutput = (value as SubmitTimeLogOutput | null) ?? null;
        break;
      case 'ui.fieldLoggingWorkspace.action.submitTimeLog.error':
        this.submitTimeLogError = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status':
        this.submitVoidTimeLogState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId':
        this.submitVoidTimeLogTimeLogId = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason':
        this.submitVoidTimeLogVoidReason = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.output.submitVoidTimeLog':
        this.submitVoidTimeLogOutput = (value as SubmitVoidTimeLogOutput | null) ?? null;
        break;
      case 'ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error':
        this.submitVoidTimeLogError = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.action.submitMaterialUsage.status':
        this.submitMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId':
        this.submitMaterialUsageProjectId = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName':
        this.submitMaterialUsageMaterialName = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity':
        this.submitMaterialUsageQuantity = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit':
        this.submitMaterialUsageUnit = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost':
        this.submitMaterialUsageUnitCost = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode':
        this.submitMaterialUsageCostCode = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate':
        this.submitMaterialUsageUsageDate = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy':
        this.submitMaterialUsageRecordedBy = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.output.submitMaterialUsage':
        this.submitMaterialUsageOutput = (value as SubmitMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.fieldLoggingWorkspace.action.submitMaterialUsage.error':
        this.submitMaterialUsageError = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status':
        this.submitVoidMaterialUsageState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId':
        this.submitVoidMaterialUsageMaterialUsageId = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason':
        this.submitVoidMaterialUsageVoidedReason = (value as string) ?? '';
        break;
      case 'ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage':
        this.submitVoidMaterialUsageOutput = (value as SubmitVoidMaterialUsageOutput | null) ?? null;
        break;
      case 'ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error':
        this.submitVoidMaterialUsageError = (value as string) ?? '';
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  private readErrorMessage(error: unknown, fallback: string): string {
    if (error && typeof error === 'object') {
      const record = error as { message?: unknown; error?: unknown };
      if (typeof record.message === 'string' && record.message) {
        return record.message;
      }
      if (typeof record.error === 'string' && record.error) {
        return record.error;
      }
    }
    return fallback;
  }

  /** action submitTimeLog (command) — route buildFlowFsm.fieldLoggingWorkspace.submitTimeLog; inputs: workTaskId, logDate, hoursWorked, workerName; writes ui.fieldLoggingWorkspace.output.submitTimeLog; status ui.fieldLoggingWorkspace.action.submitTimeLog.status; feedback keys action.submitTimeLog.success / action.submitTimeLog.error */
  async submitTimeLog(): Promise<void> {
    this.submitTimeLogState = 'loading';
    setState('ui.fieldLoggingWorkspace.action.submitTimeLog.status', 'loading');
    this.submitTimeLogError = '';
    setState('ui.fieldLoggingWorkspace.action.submitTimeLog.error', '');
    const hoursWorkedNum = Number(this.submitTimeLogHoursWorked);
    const params: SubmitTimeLogInput = {
      workTaskId: this.submitTimeLogWorkTaskId,
      logDate: this.submitTimeLogLogDate,
      hoursWorked: Number.isNaN(hoursWorkedNum) ? 0 : hoursWorkedNum,
      workerName: this.submitTimeLogWorkerName,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<SubmitTimeLogOutput>(submitTimeLogRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.submitTimeLog.error');
      this.submitTimeLogError = errMsg;
      setState('ui.fieldLoggingWorkspace.action.submitTimeLog.error', errMsg);
      this.submitTimeLogState = 'error';
      setState('ui.fieldLoggingWorkspace.action.submitTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: SubmitTimeLogOutput | null = response.data ?? null;
    this.submitTimeLogOutput = data;
    setState('ui.fieldLoggingWorkspace.output.submitTimeLog', data);
    this.submitTimeLogWorkTaskId = '';
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId', '');
    this.submitTimeLogLogDate = '';
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.logDate', '');
    this.submitTimeLogHoursWorked = '';
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked', '');
    this.submitTimeLogWorkerName = '';
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.workerName', '');
    this.submitTimeLogState = 'success';
    setState('ui.fieldLoggingWorkspace.action.submitTimeLog.status', 'success');
    this.requestUpdate();
  }

  /** handler for action submitTimeLog — bind UI events here */
  handleSubmitTimeLogClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.submitTimeLog();
    });
  }

  /** action submitVoidTimeLog (command) — route buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog; inputs: timeLogId, voidReason; writes ui.fieldLoggingWorkspace.output.submitVoidTimeLog; status ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status; feedback keys action.submitVoidTimeLog.success / action.submitVoidTimeLog.error */
  async submitVoidTimeLog(): Promise<void> {
    if (!this.submitVoidTimeLogTimeLogId) {
      this.submitVoidTimeLogState = 'idle';
      setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.submitVoidTimeLogState = 'loading';
    setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status', 'loading');
    this.submitVoidTimeLogError = '';
    setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error', '');
    const params: SubmitVoidTimeLogInput = {
      timeLogId: this.submitVoidTimeLogTimeLogId,
      voidReason: this.submitVoidTimeLogVoidReason,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<SubmitVoidTimeLogOutput>(submitVoidTimeLogRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.submitVoidTimeLog.error');
      this.submitVoidTimeLogError = errMsg;
      setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.error', errMsg);
      this.submitVoidTimeLogState = 'error';
      setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: SubmitVoidTimeLogOutput | null = response.data ?? null;
    this.submitVoidTimeLogOutput = data;
    setState('ui.fieldLoggingWorkspace.output.submitVoidTimeLog', data);
    this.submitVoidTimeLogTimeLogId = '';
    setState('ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId', '');
    this.submitVoidTimeLogVoidReason = '';
    setState('ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason', '');
    this.submitVoidTimeLogState = 'success';
    setState('ui.fieldLoggingWorkspace.action.submitVoidTimeLog.status', 'success');
    this.requestUpdate();
  }

  /** handler for action submitVoidTimeLog — bind UI events here */
  handleSubmitVoidTimeLogClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.submitVoidTimeLog();
    });
  }

  /** action submitMaterialUsage (command) — route buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage; inputs: projectId, materialName, quantity, unit, unitCost, costCode, usageDate, recordedBy; writes ui.fieldLoggingWorkspace.output.submitMaterialUsage; status ui.fieldLoggingWorkspace.action.submitMaterialUsage.status; feedback keys action.submitMaterialUsage.success / action.submitMaterialUsage.error */
  async submitMaterialUsage(): Promise<void> {
    if (!this.submitMaterialUsageProjectId) {
      this.submitMaterialUsageState = 'idle';
      setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.submitMaterialUsageState = 'loading';
    setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.status', 'loading');
    this.submitMaterialUsageError = '';
    setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.error', '');
    const quantityNum = Number(this.submitMaterialUsageQuantity);
    const unitCostNum = Number(this.submitMaterialUsageUnitCost);
    const params: SubmitMaterialUsageInput = {
      projectId: this.submitMaterialUsageProjectId,
      materialName: this.submitMaterialUsageMaterialName,
      quantity: Number.isNaN(quantityNum) ? 0 : quantityNum,
      unit: this.submitMaterialUsageUnit,
      unitCost: Number.isNaN(unitCostNum) ? 0 : unitCostNum,
      usageDate: this.submitMaterialUsageUsageDate,
      recordedBy: this.submitMaterialUsageRecordedBy,
    };
    if (this.submitMaterialUsageCostCode) {
      params.costCode = this.submitMaterialUsageCostCode;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<SubmitMaterialUsageOutput>(submitMaterialUsageRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.submitMaterialUsage.error');
      this.submitMaterialUsageError = errMsg;
      setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.error', errMsg);
      this.submitMaterialUsageState = 'error';
      setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: SubmitMaterialUsageOutput | null = response.data ?? null;
    this.submitMaterialUsageOutput = data;
    setState('ui.fieldLoggingWorkspace.output.submitMaterialUsage', data);
    this.submitMaterialUsageProjectId = '';
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId', '');
    this.submitMaterialUsageMaterialName = '';
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName', '');
    this.submitMaterialUsageQuantity = '';
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity', '');
    this.submitMaterialUsageUnit = '';
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit', '');
    this.submitMaterialUsageUnitCost = '';
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost', '');
    this.submitMaterialUsageCostCode = '';
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode', '');
    this.submitMaterialUsageUsageDate = '';
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate', '');
    this.submitMaterialUsageRecordedBy = '';
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy', '');
    this.submitMaterialUsageState = 'success';
    setState('ui.fieldLoggingWorkspace.action.submitMaterialUsage.status', 'success');
    this.requestUpdate();
  }

  /** handler for action submitMaterialUsage — bind UI events here */
  handleSubmitMaterialUsageClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.submitMaterialUsage();
    });
  }

  /** action submitVoidMaterialUsage (command) — route buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage; inputs: materialUsageId, voidedReason; writes ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage; status ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status; feedback keys action.submitVoidMaterialUsage.success / action.submitVoidMaterialUsage.error */
  async submitVoidMaterialUsage(): Promise<void> {
    if (!this.submitVoidMaterialUsageMaterialUsageId) {
      this.submitVoidMaterialUsageState = 'idle';
      setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.submitVoidMaterialUsageState = 'loading';
    setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status', 'loading');
    this.submitVoidMaterialUsageError = '';
    setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error', '');
    const params: SubmitVoidMaterialUsageInput = {
      materialUsageId: this.submitVoidMaterialUsageMaterialUsageId,
      voidedReason: this.submitVoidMaterialUsageVoidedReason,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<SubmitVoidMaterialUsageOutput>(submitVoidMaterialUsageRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.submitVoidMaterialUsage.error');
      this.submitVoidMaterialUsageError = errMsg;
      setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.error', errMsg);
      this.submitVoidMaterialUsageState = 'error';
      setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: SubmitVoidMaterialUsageOutput | null = response.data ?? null;
    this.submitVoidMaterialUsageOutput = data;
    setState('ui.fieldLoggingWorkspace.output.submitVoidMaterialUsage', data);
    this.submitVoidMaterialUsageMaterialUsageId = '';
    setState('ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId', '');
    this.submitVoidMaterialUsageVoidedReason = '';
    setState('ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason', '');
    this.submitVoidMaterialUsageState = 'success';
    setState('ui.fieldLoggingWorkspace.action.submitVoidMaterialUsage.status', 'success');
    this.requestUpdate();
  }

  /** handler for action submitVoidMaterialUsage — bind UI events here */
  handleSubmitVoidMaterialUsageClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.submitVoidMaterialUsage();
    });
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId */
  setSubmitTimeLogWorkTaskId(value: string): void {
    this.submitTimeLogWorkTaskId = value;
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.workTaskId', value);
    this.requestUpdate();
  }

  /** handler for action set.submitTimeLogWorkTaskId — bind UI events here */
  handleSubmitTimeLogWorkTaskIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitTimeLogWorkTaskId(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitTimeLog.logDate */
  setSubmitTimeLogLogDate(value: string): void {
    this.submitTimeLogLogDate = value;
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.logDate', value);
    this.requestUpdate();
  }

  /** handler for action set.submitTimeLogLogDate — bind UI events here */
  handleSubmitTimeLogLogDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitTimeLogLogDate(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked */
  setSubmitTimeLogHoursWorked(value: string): void {
    this.submitTimeLogHoursWorked = value;
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.hoursWorked', value);
    this.requestUpdate();
  }

  /** handler for action set.submitTimeLogHoursWorked — bind UI events here */
  handleSubmitTimeLogHoursWorkedChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitTimeLogHoursWorked(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitTimeLog.workerName */
  setSubmitTimeLogWorkerName(value: string): void {
    this.submitTimeLogWorkerName = value;
    setState('ui.fieldLoggingWorkspace.input.submitTimeLog.workerName', value);
    this.requestUpdate();
  }

  /** handler for action set.submitTimeLogWorkerName — bind UI events here */
  handleSubmitTimeLogWorkerNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitTimeLogWorkerName(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId */
  setSubmitVoidTimeLogTimeLogId(value: string): void {
    this.submitVoidTimeLogTimeLogId = value;
    setState('ui.fieldLoggingWorkspace.input.submitVoidTimeLog.timeLogId', value);
    this.requestUpdate();
  }

  /** handler for action set.submitVoidTimeLogTimeLogId — bind UI events here */
  handleSubmitVoidTimeLogTimeLogIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitVoidTimeLogTimeLogId(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason */
  setSubmitVoidTimeLogVoidReason(value: string): void {
    this.submitVoidTimeLogVoidReason = value;
    setState('ui.fieldLoggingWorkspace.input.submitVoidTimeLog.voidReason', value);
    this.requestUpdate();
  }

  /** handler for action set.submitVoidTimeLogVoidReason — bind UI events here */
  handleSubmitVoidTimeLogVoidReasonChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitVoidTimeLogVoidReason(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId */
  setSubmitMaterialUsageProjectId(value: string): void {
    this.submitMaterialUsageProjectId = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageProjectId — bind UI events here */
  handleSubmitMaterialUsageProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitMaterialUsageProjectId(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName */
  setSubmitMaterialUsageMaterialName(value: string): void {
    this.submitMaterialUsageMaterialName = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.materialName', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageMaterialName — bind UI events here */
  handleSubmitMaterialUsageMaterialNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitMaterialUsageMaterialName(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity */
  setSubmitMaterialUsageQuantity(value: string): void {
    this.submitMaterialUsageQuantity = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.quantity', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageQuantity — bind UI events here */
  handleSubmitMaterialUsageQuantityChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitMaterialUsageQuantity(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit */
  setSubmitMaterialUsageUnit(value: string): void {
    this.submitMaterialUsageUnit = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.unit', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageUnit — bind UI events here */
  handleSubmitMaterialUsageUnitChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitMaterialUsageUnit(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost */
  setSubmitMaterialUsageUnitCost(value: string): void {
    this.submitMaterialUsageUnitCost = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.unitCost', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageUnitCost — bind UI events here */
  handleSubmitMaterialUsageUnitCostChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitMaterialUsageUnitCost(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode */
  setSubmitMaterialUsageCostCode(value: string): void {
    this.submitMaterialUsageCostCode = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.costCode', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageCostCode — bind UI events here */
  handleSubmitMaterialUsageCostCodeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitMaterialUsageCostCode(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate */
  setSubmitMaterialUsageUsageDate(value: string): void {
    this.submitMaterialUsageUsageDate = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.usageDate', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageUsageDate — bind UI events here */
  handleSubmitMaterialUsageUsageDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitMaterialUsageUsageDate(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy */
  setSubmitMaterialUsageRecordedBy(value: string): void {
    this.submitMaterialUsageRecordedBy = value;
    setState('ui.fieldLoggingWorkspace.input.submitMaterialUsage.recordedBy', value);
    this.requestUpdate();
  }

  /** handler for action set.submitMaterialUsageRecordedBy — bind UI events here */
  handleSubmitMaterialUsageRecordedByChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitMaterialUsageRecordedBy(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId */
  setSubmitVoidMaterialUsageMaterialUsageId(value: string): void {
    this.submitVoidMaterialUsageMaterialUsageId = value;
    setState('ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.materialUsageId', value);
    this.requestUpdate();
  }

  /** handler for action set.submitVoidMaterialUsageMaterialUsageId — bind UI events here */
  handleSubmitVoidMaterialUsageMaterialUsageIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitVoidMaterialUsageMaterialUsageId(value);
  }

  /** setter for state ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason */
  setSubmitVoidMaterialUsageVoidedReason(value: string): void {
    this.submitVoidMaterialUsageVoidedReason = value;
    setState('ui.fieldLoggingWorkspace.input.submitVoidMaterialUsage.voidedReason', value);
    this.requestUpdate();
  }

  /** handler for action set.submitVoidMaterialUsageVoidedReason — bind UI events here */
  handleSubmitVoidMaterialUsageVoidedReasonChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setSubmitVoidMaterialUsageVoidedReason(value);
  }
}
