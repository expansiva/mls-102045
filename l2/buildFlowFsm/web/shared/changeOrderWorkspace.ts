/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  CmdCreateChangeOrderInput,
  CmdCreateChangeOrderOutput,
  CmdUpdateChangeOrderInput,
  CmdUpdateChangeOrderOutput,
  CmdUpdateChangeOrderStatusInput,
  CmdUpdateChangeOrderStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/changeOrderWorkspace.js';
import {
  cmdCreateChangeOrderRoute,
  cmdUpdateChangeOrderRoute,
  cmdUpdateChangeOrderStatusRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/changeOrderWorkspace.js';

export type {
  CmdCreateChangeOrderInput,
  CmdCreateChangeOrderOutput,
  CmdUpdateChangeOrderInput,
  CmdUpdateChangeOrderOutput,
  CmdUpdateChangeOrderStatusInput,
  CmdUpdateChangeOrderStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/changeOrderWorkspace.js';

/// **collab_i18n_start**
const message_en = {
  'section.changeOrderWorkspace.sec-create-change-order.title': 'Create Change Order',
  'organism.changeOrderWorkspace.cmdCreateChangeOrder.title': 'Create change order',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title': 'Create change order',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Create change order',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label': 'Title',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label': 'Description',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label': 'Impact Type',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label': 'Cost Adjustment',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label': 'Schedule Adjustment Days',
  'section.changeOrderWorkspace.sec-edit-change-order.title': 'Edit Change Order Details',
  'organism.changeOrderWorkspace.cmdUpdateChangeOrder.title': 'Update change order details',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.title': 'Update change order details',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder': 'Update change order details',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label': 'Title',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label': 'Description',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label': 'Impact Type',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label': 'Cost Adjustment',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label': 'Schedule Adjustment Days',
  'section.changeOrderWorkspace.sec-review-change-order.title': 'Review & Approve Change Order',
  'organism.changeOrderWorkspace.detail10.title': 'Detail',
  'intent.changeOrderWorkspace.detail10.content.title': 'Detail',
  'organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title': 'Update change order status',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.title': 'Update change order status',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus': 'Update change order status',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label': 'Status',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label': 'Rejection Reason',
  'action.cmdCreateChangeOrder.success': 'Create change order: OK',
  'action.cmdCreateChangeOrder.error': 'Create change order: falhou',
  'action.cmdUpdateChangeOrder.success': 'Update change order details: OK',
  'action.cmdUpdateChangeOrder.error': 'Update change order details: falhou',
  'action.cmdUpdateChangeOrderStatus.success': 'Update change order status: OK',
  'action.cmdUpdateChangeOrderStatus.error': 'Update change order status: falhou',
  'section.changeOrderWorkspace.sec-review-approve.title': 'Review & Approve Change Order',
  'organism.changeOrderWorkspace.summary-first10.title': 'Summary first',
  'intent.changeOrderWorkspace.summary-first10.content.title': 'Summary first',
  'section.changeOrderWorkspace.sec-change-order-master-detail.title': 'Change Order Master-Detail',
  'organism.changeOrderWorkspace.master-detail10.title': 'Master detail',
  'intent.changeOrderWorkspace.master-detail10.content.title': 'Master detail',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.changeOrderWorkspace.sec-create-change-order.title': 'Criar Ordem de Mudança',
  'organism.changeOrderWorkspace.cmdCreateChangeOrder.title': 'Criar ordem de mudança',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title': 'Criar ordem de mudança',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Criar ordem de mudança',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label': 'Título',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label': 'Descrição',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label': 'Tipo de Impacto',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label': 'Ajuste de Custo',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label': 'Dias de Ajuste de Cronograma',
  'section.changeOrderWorkspace.sec-edit-change-order.title': 'Editar Detalhes da Ordem de Mudança',
  'organism.changeOrderWorkspace.cmdUpdateChangeOrder.title': 'Atualizar detalhes da ordem de mudança',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.title': 'Atualizar detalhes da ordem de mudança',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder': 'Atualizar detalhes da ordem de mudança',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label': 'Título',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label': 'Descrição',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label': 'Tipo de Impacto',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label': 'Ajuste de Custo',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label': 'Dias de Ajuste de Cronograma',
  'section.changeOrderWorkspace.sec-review-change-order.title': 'Revisar e Aprovar Ordem de Mudança',
  'organism.changeOrderWorkspace.detail10.title': 'Detalhe',
  'intent.changeOrderWorkspace.detail10.content.title': 'Detalhe',
  'organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title': 'Atualizar status da ordem de mudança',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.title': 'Atualizar status da ordem de mudança',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus': 'Atualizar status da ordem de mudança',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label': 'Status',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label': 'Motivo da Rejeição',
  'action.cmdCreateChangeOrder.success': 'Criar ordem de mudança: OK',
  'action.cmdCreateChangeOrder.error': 'Criar ordem de mudança: falhou',
  'action.cmdUpdateChangeOrder.success': 'Atualizar detalhes da ordem de mudança: OK',
  'action.cmdUpdateChangeOrder.error': 'Atualizar detalhes da ordem de mudança: falhou',
  'action.cmdUpdateChangeOrderStatus.success': 'Atualizar status da ordem de mudança: OK',
  'action.cmdUpdateChangeOrderStatus.error': 'Atualizar status da ordem de mudança: falhou',
  'section.changeOrderWorkspace.sec-review-approve.title': 'Revisar e Aprovar Ordem de Mudança',
  'organism.changeOrderWorkspace.summary-first10.title': 'Resumo inicial',
  'intent.changeOrderWorkspace.summary-first10.content.title': 'Resumo inicial',
  'section.changeOrderWorkspace.sec-change-order-master-detail.title': 'Detalhe Mestre da Ordem de Mudança',
  'organism.changeOrderWorkspace.master-detail10.title': 'Detalhe mestre',
  'intent.changeOrderWorkspace.master-detail10.content.title': 'Detalhe mestre',
};
const message_es: MessageType = {
  'section.changeOrderWorkspace.sec-create-change-order.title': 'Crear Orden de Cambio',
  'organism.changeOrderWorkspace.cmdCreateChangeOrder.title': 'Crear orden de cambio',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title': 'Crear orden de cambio',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder': 'Crear orden de cambio',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label': 'Título',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label': 'Descripción',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label': 'Tipo de Impacto',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label': 'Ajuste de Costos',
  'intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label': 'Días de Ajuste de Cronograma',
  'section.changeOrderWorkspace.sec-edit-change-order.title': 'Editar Detalles de la Orden de Cambio',
  'organism.changeOrderWorkspace.cmdUpdateChangeOrder.title': 'Actualizar detalles de la orden de cambio',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.title': 'Actualizar detalles de la orden de cambio',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder': 'Actualizar detalles de la orden de cambio',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label': 'Título',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label': 'Descripción',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label': 'Tipo de Impacto',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label': 'Ajuste de Costos',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label': 'Días de Ajuste de Cronograma',
  'section.changeOrderWorkspace.sec-review-change-order.title': 'Revisar y Aprobar Orden de Cambio',
  'organism.changeOrderWorkspace.detail10.title': 'Detalle',
  'intent.changeOrderWorkspace.detail10.content.title': 'Detalle',
  'organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title': 'Actualizar estado de la orden de cambio',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.title': 'Actualizar estado de la orden de cambio',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus': 'Actualizar estado de la orden de cambio',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label': 'Estado',
  'intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label': 'Razón de Rechazo',
  'action.cmdCreateChangeOrder.success': 'Crear orden de cambio: OK',
  'action.cmdCreateChangeOrder.error': 'Crear orden de cambio: falló',
  'action.cmdUpdateChangeOrder.success': 'Actualizar detalles de la orden de cambio: OK',
  'action.cmdUpdateChangeOrder.error': 'Actualizar detalles de la orden de cambio: falló',
  'action.cmdUpdateChangeOrderStatus.success': 'Actualizar estado de la orden de cambio: OK',
  'action.cmdUpdateChangeOrderStatus.error': 'Actualizar estado de la orden de cambio: falló',
  'section.changeOrderWorkspace.sec-review-approve.title': 'Revisar y Aprobar Orden de Cambio',
  'organism.changeOrderWorkspace.summary-first10.title': 'Resumen inicial',
  'intent.changeOrderWorkspace.summary-first10.content.title': 'Resumen inicial',
  'section.changeOrderWorkspace.sec-change-order-master-detail.title': 'Detalle Maestro de la Orden de Cambio',
  'organism.changeOrderWorkspace.master-detail10.title': 'Detalle maestro',
  'intent.changeOrderWorkspace.master-detail10.content.title': 'Detalle maestro',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.changeOrderWorkspace.status',
  'ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status',
  'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId',
  'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title',
  'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description',
  'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType',
  'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment',
  'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays',
  'ui.changeOrderWorkspace.output.cmdCreateChangeOrder',
  'ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error',
  'ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status',
  'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId',
  'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title',
  'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description',
  'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType',
  'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment',
  'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays',
  'ui.changeOrderWorkspace.output.cmdUpdateChangeOrder',
  'ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error',
  'ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status',
  'ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId',
  'ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status',
  'ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason',
  'ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus',
  'ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error',
];

export class BuildFlowFsmChangeOrderWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state cmdCreateChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() cmdCreateChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdCreateChangeOrderProjectId — input */
  @property() cmdCreateChangeOrderProjectId: string = '';
  /** state cmdCreateChangeOrderTitle — input */
  @property() cmdCreateChangeOrderTitle: string = '';
  /** state cmdCreateChangeOrderDescription — input */
  @property() cmdCreateChangeOrderDescription: string = '';
  /** state cmdCreateChangeOrderImpactType — input */
  @property() cmdCreateChangeOrderImpactType: string = '';
  /** state cmdCreateChangeOrderCostAdjustment — input */
  @property() cmdCreateChangeOrderCostAdjustment: string = '';
  /** state cmdCreateChangeOrderScheduleAdjustmentDays — input */
  @property() cmdCreateChangeOrderScheduleAdjustmentDays: string = '';
  /** state cmdCreateChangeOrderOutput — commandOutput */
  @property() cmdCreateChangeOrderOutput: CmdCreateChangeOrderOutput | null = null;
  /** state cmdCreateChangeOrderError — actionError */
  @property() cmdCreateChangeOrderError: string = '';
  /** state cmdUpdateChangeOrderState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateChangeOrderChangeOrderId — input */
  @property() cmdUpdateChangeOrderChangeOrderId: string = '';
  /** state cmdUpdateChangeOrderTitle — input */
  @property() cmdUpdateChangeOrderTitle: string = '';
  /** state cmdUpdateChangeOrderDescription — input */
  @property() cmdUpdateChangeOrderDescription: string = '';
  /** state cmdUpdateChangeOrderImpactType — input */
  @property() cmdUpdateChangeOrderImpactType: string = '';
  /** state cmdUpdateChangeOrderCostAdjustment — input */
  @property() cmdUpdateChangeOrderCostAdjustment: string = '';
  /** state cmdUpdateChangeOrderScheduleAdjustmentDays — input */
  @property() cmdUpdateChangeOrderScheduleAdjustmentDays: string = '';
  /** state cmdUpdateChangeOrderOutput — commandOutput */
  @property() cmdUpdateChangeOrderOutput: CmdUpdateChangeOrderOutput | null = null;
  /** state cmdUpdateChangeOrderError — actionError */
  @property() cmdUpdateChangeOrderError: string = '';
  /** state cmdUpdateChangeOrderStatusState — actionStatus, values: idle|loading|success|error */
  @property() cmdUpdateChangeOrderStatusState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state cmdUpdateChangeOrderStatusChangeOrderId — input */
  @property() cmdUpdateChangeOrderStatusChangeOrderId: string = '';
  /** state cmdUpdateChangeOrderStatusStatus — input */
  @property() cmdUpdateChangeOrderStatusStatus: string = '';
  /** state cmdUpdateChangeOrderStatusRejectionReason — input */
  @property() cmdUpdateChangeOrderStatusRejectionReason: string = '';
  /** state cmdUpdateChangeOrderStatusOutput — commandOutput */
  @property() cmdUpdateChangeOrderStatusOutput: CmdUpdateChangeOrderStatusOutput | null = null;
  /** state cmdUpdateChangeOrderStatusError — actionError */
  @property() cmdUpdateChangeOrderStatusError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.changeOrderWorkspace.status', '');
    this.initStateValue('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status', 'idle');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays', '');
    this.initStateValue('ui.changeOrderWorkspace.output.cmdCreateChangeOrder', null);
    this.initStateValue('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error', '');
    this.initStateValue('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status', 'idle');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays', '');
    this.initStateValue('ui.changeOrderWorkspace.output.cmdUpdateChangeOrder', null);
    this.initStateValue('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error', '');
    this.initStateValue('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status', 'idle');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status', '');
    this.initStateValue('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason', '');
    this.initStateValue('ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus', null);
    this.initStateValue('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error', '');
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.changeOrderWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status':
        this.cmdCreateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId':
        this.cmdCreateChangeOrderProjectId = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title':
        this.cmdCreateChangeOrderTitle = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description':
        this.cmdCreateChangeOrderDescription = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType':
        this.cmdCreateChangeOrderImpactType = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment':
        this.cmdCreateChangeOrderCostAdjustment = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays':
        this.cmdCreateChangeOrderScheduleAdjustmentDays = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.output.cmdCreateChangeOrder':
        this.cmdCreateChangeOrderOutput = (value as CmdCreateChangeOrderOutput | null) ?? null;
        break;
      case 'ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error':
        this.cmdCreateChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status':
        this.cmdUpdateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId':
        this.cmdUpdateChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title':
        this.cmdUpdateChangeOrderTitle = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description':
        this.cmdUpdateChangeOrderDescription = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType':
        this.cmdUpdateChangeOrderImpactType = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment':
        this.cmdUpdateChangeOrderCostAdjustment = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays':
        this.cmdUpdateChangeOrderScheduleAdjustmentDays = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.output.cmdUpdateChangeOrder':
        this.cmdUpdateChangeOrderOutput = (value as CmdUpdateChangeOrderOutput | null) ?? null;
        break;
      case 'ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error':
        this.cmdUpdateChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status':
        this.cmdUpdateChangeOrderStatusState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId':
        this.cmdUpdateChangeOrderStatusChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status':
        this.cmdUpdateChangeOrderStatusStatus = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason':
        this.cmdUpdateChangeOrderStatusRejectionReason = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus':
        this.cmdUpdateChangeOrderStatusOutput = (value as CmdUpdateChangeOrderStatusOutput | null) ?? null;
        break;
      case 'ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error':
        this.cmdUpdateChangeOrderStatusError = (value as string) ?? '';
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
      case 'ui.changeOrderWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status':
        this.cmdCreateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId':
        this.cmdCreateChangeOrderProjectId = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title':
        this.cmdCreateChangeOrderTitle = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description':
        this.cmdCreateChangeOrderDescription = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType':
        this.cmdCreateChangeOrderImpactType = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment':
        this.cmdCreateChangeOrderCostAdjustment = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays':
        this.cmdCreateChangeOrderScheduleAdjustmentDays = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.output.cmdCreateChangeOrder':
        this.cmdCreateChangeOrderOutput = (value as CmdCreateChangeOrderOutput | null) ?? null;
        break;
      case 'ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error':
        this.cmdCreateChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status':
        this.cmdUpdateChangeOrderState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId':
        this.cmdUpdateChangeOrderChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title':
        this.cmdUpdateChangeOrderTitle = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description':
        this.cmdUpdateChangeOrderDescription = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType':
        this.cmdUpdateChangeOrderImpactType = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment':
        this.cmdUpdateChangeOrderCostAdjustment = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays':
        this.cmdUpdateChangeOrderScheduleAdjustmentDays = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.output.cmdUpdateChangeOrder':
        this.cmdUpdateChangeOrderOutput = (value as CmdUpdateChangeOrderOutput | null) ?? null;
        break;
      case 'ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error':
        this.cmdUpdateChangeOrderError = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status':
        this.cmdUpdateChangeOrderStatusState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId':
        this.cmdUpdateChangeOrderStatusChangeOrderId = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status':
        this.cmdUpdateChangeOrderStatusStatus = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason':
        this.cmdUpdateChangeOrderStatusRejectionReason = (value as string) ?? '';
        break;
      case 'ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus':
        this.cmdUpdateChangeOrderStatusOutput = (value as CmdUpdateChangeOrderStatusOutput | null) ?? null;
        break;
      case 'ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error':
        this.cmdUpdateChangeOrderStatusError = (value as string) ?? '';
        break;
      default:
        break;
    }
    if (existing === undefined) {
      setState(stateKey, value);
    }
  }

  private syncRouteParams(): void {
    const pathname: string = window.location.pathname;
    const match: RegExpMatchArray | null = pathname.match(
      /^\/buildFlowFsm\/changeOrderWorkspace(?:\/([^/]+))?\/?$/,
    );
    const rawChangeOrderId: string = match && match[1] ? match[1] : '';
    let changeOrderId: string = '';
    if (rawChangeOrderId) {
      try {
        changeOrderId = decodeURIComponent(rawChangeOrderId);
      } catch {
        changeOrderId = rawChangeOrderId;
      }
    }
    if (changeOrderId) {
      if (!this.cmdUpdateChangeOrderChangeOrderId) {
        this.cmdUpdateChangeOrderChangeOrderId = changeOrderId;
        setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId', changeOrderId);
      }
      if (!this.cmdUpdateChangeOrderStatusChangeOrderId) {
        this.cmdUpdateChangeOrderStatusChangeOrderId = changeOrderId;
        setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId', changeOrderId);
      }
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

  /** action cmdCreateChangeOrder (command) — route buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder; inputs: projectId, title, description, impactType, costAdjustment, scheduleAdjustmentDays; writes ui.changeOrderWorkspace.output.cmdCreateChangeOrder; status ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status; feedback keys action.cmdCreateChangeOrder.success / action.cmdCreateChangeOrder.error */
  async cmdCreateChangeOrder(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdCreateChangeOrderProjectId) {
      this.cmdCreateChangeOrderState = 'idle';
      setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdCreateChangeOrderState = 'loading';
    setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status', 'loading');
    this.cmdCreateChangeOrderError = '';
    setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error', '');
    const costAdjustmentNum = Number(this.cmdCreateChangeOrderCostAdjustment);
    const params: CmdCreateChangeOrderInput = {
      projectId: this.cmdCreateChangeOrderProjectId,
      title: this.cmdCreateChangeOrderTitle,
      description: this.cmdCreateChangeOrderDescription,
      impactType: this.cmdCreateChangeOrderImpactType,
      costAdjustment: Number.isNaN(costAdjustmentNum) ? 0 : costAdjustmentNum,
    };
    if (this.cmdCreateChangeOrderScheduleAdjustmentDays !== '') {
      const scheduleAdjustmentDaysNum = Number(this.cmdCreateChangeOrderScheduleAdjustmentDays);
      if (!Number.isNaN(scheduleAdjustmentDaysNum)) {
        params.scheduleAdjustmentDays = scheduleAdjustmentDaysNum;
      }
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateChangeOrderOutput>(cmdCreateChangeOrderRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdCreateChangeOrder.error');
      this.cmdCreateChangeOrderError = errMsg;
      setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error', errMsg);
      this.cmdCreateChangeOrderState = 'error';
      setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdCreateChangeOrderOutput | null = response.data ?? null;
    this.cmdCreateChangeOrderOutput = data;
    setState('ui.changeOrderWorkspace.output.cmdCreateChangeOrder', data);
    this.cmdCreateChangeOrderProjectId = '';
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId', '');
    this.cmdCreateChangeOrderTitle = '';
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title', '');
    this.cmdCreateChangeOrderDescription = '';
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description', '');
    this.cmdCreateChangeOrderImpactType = '';
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType', '');
    this.cmdCreateChangeOrderCostAdjustment = '';
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment', '');
    this.cmdCreateChangeOrderScheduleAdjustmentDays = '';
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays', '');
    this.cmdCreateChangeOrderState = 'success';
    setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdCreateChangeOrder — bind UI events here */
  handleCmdCreateChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateChangeOrder();
    });
  }

  /** action cmdUpdateChangeOrder (command) — route buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder; inputs: changeOrderId, title, description, impactType, costAdjustment, scheduleAdjustmentDays; writes ui.changeOrderWorkspace.output.cmdUpdateChangeOrder; status ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status; feedback keys action.cmdUpdateChangeOrder.success / action.cmdUpdateChangeOrder.error */
  async cmdUpdateChangeOrder(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdUpdateChangeOrderChangeOrderId) {
      this.cmdUpdateChangeOrderState = 'idle';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateChangeOrderState = 'loading';
    setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status', 'loading');
    this.cmdUpdateChangeOrderError = '';
    setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error', '');
    const costAdjustmentNum = Number(this.cmdUpdateChangeOrderCostAdjustment);
    const params: CmdUpdateChangeOrderInput = {
      changeOrderId: this.cmdUpdateChangeOrderChangeOrderId,
      title: this.cmdUpdateChangeOrderTitle,
      description: this.cmdUpdateChangeOrderDescription,
      impactType: this.cmdUpdateChangeOrderImpactType,
      costAdjustment: Number.isNaN(costAdjustmentNum) ? 0 : costAdjustmentNum,
    };
    if (this.cmdUpdateChangeOrderScheduleAdjustmentDays !== '') {
      const scheduleAdjustmentDaysNum = Number(this.cmdUpdateChangeOrderScheduleAdjustmentDays);
      if (!Number.isNaN(scheduleAdjustmentDaysNum)) {
        params.scheduleAdjustmentDays = scheduleAdjustmentDaysNum;
      }
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateChangeOrderOutput>(cmdUpdateChangeOrderRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateChangeOrder.error');
      this.cmdUpdateChangeOrderError = errMsg;
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error', errMsg);
      this.cmdUpdateChangeOrderState = 'error';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateChangeOrderOutput | null = response.data ?? null;
    this.cmdUpdateChangeOrderOutput = data;
    setState('ui.changeOrderWorkspace.output.cmdUpdateChangeOrder', data);
    this.cmdUpdateChangeOrderTitle = '';
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title', '');
    this.cmdUpdateChangeOrderDescription = '';
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description', '');
    this.cmdUpdateChangeOrderImpactType = '';
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType', '');
    this.cmdUpdateChangeOrderCostAdjustment = '';
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment', '');
    this.cmdUpdateChangeOrderScheduleAdjustmentDays = '';
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays', '');
    this.cmdUpdateChangeOrderState = 'success';
    setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateChangeOrder — bind UI events here */
  handleCmdUpdateChangeOrderClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateChangeOrder();
    });
  }

  /** action cmdUpdateChangeOrderStatus (command) — route buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus; inputs: changeOrderId, status, rejectionReason; writes ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus; status ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status; feedback keys action.cmdUpdateChangeOrderStatus.success / action.cmdUpdateChangeOrderStatus.error */
  async cmdUpdateChangeOrderStatus(): Promise<void> {
    this.syncRouteParams();
    if (!this.cmdUpdateChangeOrderStatusChangeOrderId) {
      this.cmdUpdateChangeOrderStatusState = 'idle';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.cmdUpdateChangeOrderStatusState = 'loading';
    setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status', 'loading');
    this.cmdUpdateChangeOrderStatusError = '';
    setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error', '');
    const params: CmdUpdateChangeOrderStatusInput = {
      changeOrderId: this.cmdUpdateChangeOrderStatusChangeOrderId,
      status: this.cmdUpdateChangeOrderStatusStatus,
    };
    if (this.cmdUpdateChangeOrderStatusRejectionReason) {
      params.rejectionReason = this.cmdUpdateChangeOrderStatusRejectionReason;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateChangeOrderStatusOutput>(cmdUpdateChangeOrderStatusRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.cmdUpdateChangeOrderStatus.error');
      this.cmdUpdateChangeOrderStatusError = errMsg;
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error', errMsg);
      this.cmdUpdateChangeOrderStatusState = 'error';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CmdUpdateChangeOrderStatusOutput | null = response.data ?? null;
    this.cmdUpdateChangeOrderStatusOutput = data;
    setState('ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus', data);
    this.cmdUpdateChangeOrderStatusStatus = '';
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status', '');
    this.cmdUpdateChangeOrderStatusRejectionReason = '';
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason', '');
    this.cmdUpdateChangeOrderStatusState = 'success';
    setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status', 'success');
    this.requestUpdate();
  }

  /** handler for action cmdUpdateChangeOrderStatus — bind UI events here */
  handleCmdUpdateChangeOrderStatusClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateChangeOrderStatus();
    });
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId */
  setCmdCreateChangeOrderProjectId(value: string): void {
    this.cmdCreateChangeOrderProjectId = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderProjectId — bind UI events here */
  handleCmdCreateChangeOrderProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderProjectId(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title */
  setCmdCreateChangeOrderTitle(value: string): void {
    this.cmdCreateChangeOrderTitle = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderTitle — bind UI events here */
  handleCmdCreateChangeOrderTitleChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderTitle(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description */
  setCmdCreateChangeOrderDescription(value: string): void {
    this.cmdCreateChangeOrderDescription = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderDescription — bind UI events here */
  handleCmdCreateChangeOrderDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderDescription(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType */
  setCmdCreateChangeOrderImpactType(value: string): void {
    this.cmdCreateChangeOrderImpactType = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderImpactType — bind UI events here */
  handleCmdCreateChangeOrderImpactTypeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderImpactType(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment */
  setCmdCreateChangeOrderCostAdjustment(value: string): void {
    this.cmdCreateChangeOrderCostAdjustment = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderCostAdjustment — bind UI events here */
  handleCmdCreateChangeOrderCostAdjustmentChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderCostAdjustment(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays */
  setCmdCreateChangeOrderScheduleAdjustmentDays(value: string): void {
    this.cmdCreateChangeOrderScheduleAdjustmentDays = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderScheduleAdjustmentDays — bind UI events here */
  handleCmdCreateChangeOrderScheduleAdjustmentDaysChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdCreateChangeOrderScheduleAdjustmentDays(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId */
  setCmdUpdateChangeOrderChangeOrderId(value: string): void {
    this.cmdUpdateChangeOrderChangeOrderId = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderChangeOrderId — bind UI events here */
  handleCmdUpdateChangeOrderChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title */
  setCmdUpdateChangeOrderTitle(value: string): void {
    this.cmdUpdateChangeOrderTitle = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderTitle — bind UI events here */
  handleCmdUpdateChangeOrderTitleChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderTitle(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description */
  setCmdUpdateChangeOrderDescription(value: string): void {
    this.cmdUpdateChangeOrderDescription = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderDescription — bind UI events here */
  handleCmdUpdateChangeOrderDescriptionChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderDescription(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType */
  setCmdUpdateChangeOrderImpactType(value: string): void {
    this.cmdUpdateChangeOrderImpactType = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderImpactType — bind UI events here */
  handleCmdUpdateChangeOrderImpactTypeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderImpactType(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment */
  setCmdUpdateChangeOrderCostAdjustment(value: string): void {
    this.cmdUpdateChangeOrderCostAdjustment = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderCostAdjustment — bind UI events here */
  handleCmdUpdateChangeOrderCostAdjustmentChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderCostAdjustment(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays */
  setCmdUpdateChangeOrderScheduleAdjustmentDays(value: string): void {
    this.cmdUpdateChangeOrderScheduleAdjustmentDays = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderScheduleAdjustmentDays — bind UI events here */
  handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderScheduleAdjustmentDays(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId */
  setCmdUpdateChangeOrderStatusChangeOrderId(value: string): void {
    this.cmdUpdateChangeOrderStatusChangeOrderId = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderStatusChangeOrderId — bind UI events here */
  handleCmdUpdateChangeOrderStatusChangeOrderIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderStatusChangeOrderId(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status */
  setCmdUpdateChangeOrderStatusStatus(value: string): void {
    this.cmdUpdateChangeOrderStatusStatus = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderStatusStatus — bind UI events here */
  handleCmdUpdateChangeOrderStatusStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderStatusStatus(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason */
  setCmdUpdateChangeOrderStatusRejectionReason(value: string): void {
    this.cmdUpdateChangeOrderStatusRejectionReason = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderStatusRejectionReason — bind UI events here */
  handleCmdUpdateChangeOrderStatusRejectionReasonChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCmdUpdateChangeOrderStatusRejectionReason(value);
  }
}
