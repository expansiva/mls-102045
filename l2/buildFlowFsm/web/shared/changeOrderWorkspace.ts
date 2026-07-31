/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';

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
"section.changeOrderWorkspace.sec-create-change-order.title": "New Change Order",
"organism.changeOrderWorkspace.cmdCreateChangeOrder.title": "Create change order",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title": "Create change order",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder": "Create change order",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label": "Title",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label": "Description",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label": "Impact Type",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label": "Cost Adjustment",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label": "Schedule Adjustment Days",
"section.changeOrderWorkspace.sec-edit-change-order.title": "Edit Change Order",
"organism.changeOrderWorkspace.cmdUpdateChangeOrder.title": "Update change order details",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.title": "Update change order details",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder": "Update change order details",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label": "Title",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label": "Description",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label": "Impact Type",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label": "Cost Adjustment",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label": "Schedule Adjustment Days",
"section.changeOrderWorkspace.sec-review-change-order.title": "Review & Approve Change Order",
"organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title": "Update change order status",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.title": "Update change order status",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus": "Update change order status",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label": "Status",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label": "Rejection Reason",
"section.changeOrderWorkspace.sec-change-order-master.title": "Change Orders",
"organism.changeOrderWorkspace.summary-first10.title": "Summary first",
"intent.changeOrderWorkspace.summary-first10.content.title": "Summary first"
};

const message_pt_br = {
"section.changeOrderWorkspace.sec-create-change-order.title": "Nova Ordem de Mudança",
"organism.changeOrderWorkspace.cmdCreateChangeOrder.title": "Criar ordem de mudança",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title": "Criar ordem de mudança",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder": "Criar ordem de mudança",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label": "Título",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label": "Descrição",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label": "Tipo de Impacto",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label": "Ajuste de Custo",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label": "Dias de Ajuste de Cronograma",
"section.changeOrderWorkspace.sec-edit-change-order.title": "Editar Ordem de Mudança",
"organism.changeOrderWorkspace.cmdUpdateChangeOrder.title": "Atualizar detalhes da ordem de mudança",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.title": "Atualizar detalhes da ordem de mudança",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder": "Atualizar detalhes da ordem de mudança",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label": "Título",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label": "Descrição",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label": "Tipo de Impacto",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label": "Ajuste de Custo",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label": "Dias de Ajuste de Cronograma",
"section.changeOrderWorkspace.sec-review-change-order.title": "Revisar e Aprovar Ordem de Mudança",
"organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title": "Atualizar status da ordem de mudança",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.title": "Atualizar status da ordem de mudança",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus": "Atualizar status da ordem de mudança",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label": "Status",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label": "Motivo da Rejeição",
"section.changeOrderWorkspace.sec-change-order-master.title": "Ordens de Mudança",
"organism.changeOrderWorkspace.summary-first10.title": "Resumo inicial",
"intent.changeOrderWorkspace.summary-first10.content.title": "Resumo inicial"
};

const message_es = {
"section.changeOrderWorkspace.sec-create-change-order.title": "Nueva Orden de Cambio",
"organism.changeOrderWorkspace.cmdCreateChangeOrder.title": "Crear orden de cambio",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title": "Crear orden de cambio",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder": "Crear orden de cambio",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label": "Título",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label": "Descripción",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label": "Tipo de Impacto",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label": "Ajuste de Costos",
"intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label": "Días de Ajuste de Cronograma",
"section.changeOrderWorkspace.sec-edit-change-order.title": "Editar Orden de Cambio",
"organism.changeOrderWorkspace.cmdUpdateChangeOrder.title": "Actualizar detalles de la orden de cambio",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.title": "Actualizar detalles de la orden de cambio",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder": "Actualizar detalles de la orden de cambio",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label": "Título",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label": "Descripción",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label": "Tipo de Impacto",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label": "Ajuste de Costos",
"intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label": "Días de Ajuste de Cronograma",
"section.changeOrderWorkspace.sec-review-change-order.title": "Revisar y Aprobar Orden de Cambio",
"organism.changeOrderWorkspace.cmdUpdateChangeOrderStatus.title": "Actualizar estado de la orden de cambio",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.title": "Actualizar estado de la orden de cambio",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus": "Actualizar estado de la orden de cambio",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label": "Estado",
"intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label": "Motivo de Rechazo",
"section.changeOrderWorkspace.sec-change-order-master.title": "Órdenes de Cambio",
"organism.changeOrderWorkspace.summary-first10.title": "Resumen inicial",
"intent.changeOrderWorkspace.summary-first10.content.title": "Resumen inicial"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmChangeOrderWorkspaceBase extends CollabLitElement {
  /** state ui.changeOrderWorkspace.status — pageStatus */
  @property({ type: String }) status: string = '';

  /** state ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) cmdCreateChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.projectId — input, presentation: selection */
  @property({ type: String }) cmdCreateChangeOrderProjectId: string = '';

  /** state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title — input, presentation: form */
  @property({ type: String }) cmdCreateChangeOrderTitle: string = '';

  /** state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description — input, presentation: form */
  @property({ type: String }) cmdCreateChangeOrderDescription: string = '';

  /** state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType — input, presentation: form */
  @property({ type: String }) cmdCreateChangeOrderImpactType: string = '';

  /** state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment — input, presentation: form */
  @property({ type: String }) cmdCreateChangeOrderCostAdjustment: string = '';

  /** state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays — input, presentation: form */
  @property({ type: String }) cmdCreateChangeOrderScheduleAdjustmentDays: string = '';

  /** state ui.changeOrderWorkspace.output.cmdCreateChangeOrder — commandOutput, outputShape: object */
  @property({ type: Object }) cmdCreateChangeOrderOutput: CmdCreateChangeOrderOutput | null = null;

  /** state ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error — actionError */
  @property({ type: String }) cmdCreateChangeOrderError: string = '';

  /** state ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) cmdUpdateChangeOrderState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId — input, presentation: route */
  @property({ type: String }) cmdUpdateChangeOrderChangeOrderId: string = '';

  /** state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title — input, presentation: form */
  @property({ type: String }) cmdUpdateChangeOrderTitle: string = '';

  /** state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description — input, presentation: form */
  @property({ type: String }) cmdUpdateChangeOrderDescription: string = '';

  /** state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType — input, presentation: form */
  @property({ type: String }) cmdUpdateChangeOrderImpactType: string = '';

  /** state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment — input, presentation: form */
  @property({ type: String }) cmdUpdateChangeOrderCostAdjustment: string = '';

  /** state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays — input, presentation: form */
  @property({ type: String }) cmdUpdateChangeOrderScheduleAdjustmentDays: string = '';

  /** state ui.changeOrderWorkspace.output.cmdUpdateChangeOrder — commandOutput, outputShape: object */
  @property({ type: Object }) cmdUpdateChangeOrderOutput: CmdUpdateChangeOrderOutput | null = null;

  /** state ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error — actionError */
  @property({ type: String }) cmdUpdateChangeOrderError: string = '';

  /** state ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) cmdUpdateChangeOrderStatusState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId — input, presentation: route */
  @property({ type: String }) cmdUpdateChangeOrderStatusChangeOrderId: string = '';

  /** state ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status — input, presentation: form */
  @property({ type: String }) cmdUpdateChangeOrderStatusStatus: string = '';

  /** state ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason — input, presentation: form */
  @property({ type: String }) cmdUpdateChangeOrderStatusRejectionReason: string = '';

  /** state ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus — commandOutput, outputShape: object */
  @property({ type: Object }) cmdUpdateChangeOrderStatusOutput: CmdUpdateChangeOrderStatusOutput | null = null;

  /** state ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error — actionError */
  @property({ type: String }) cmdUpdateChangeOrderStatusError: string = '';

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.parseRouteParams();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  private parseRouteParams(): void {
    const path = window.location.pathname;
    const segments = path.split('/').filter((s: string) => s.length > 0);
    // Expected: ['buildFlowFsm', 'changeOrderWorkspace', changeOrderId?]
    if (segments.length >= 3) {
      const raw = segments[2];
      if (raw) {
        const changeOrderId = decodeURIComponent(raw);
        if (changeOrderId) {
          this.cmdUpdateChangeOrderChangeOrderId = changeOrderId;
          setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId', changeOrderId);
          this.cmdUpdateChangeOrderStatusChangeOrderId = changeOrderId;
          setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId', changeOrderId);
        }
      }
    }
  }

  /** action cmdCreateChangeOrder (command) — route buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder; inputs: projectId, title, description, impactType, costAdjustment, scheduleAdjustmentDays; writes cmdCreateChangeOrderOutput; status cmdCreateChangeOrderState; feedback keys action.cmdCreateChangeOrder.success / action.cmdCreateChangeOrder.error */
  async cmdCreateChangeOrder(): Promise<void> {
    this.cmdCreateChangeOrderState = 'loading';
    setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status', 'loading');

    const params: CmdCreateChangeOrderInput = {
      projectId: this.cmdCreateChangeOrderProjectId,
      title: this.cmdCreateChangeOrderTitle,
      description: this.cmdCreateChangeOrderDescription,
      impactType: this.cmdCreateChangeOrderImpactType,
      costAdjustment: this.cmdCreateChangeOrderCostAdjustment ? Number(this.cmdCreateChangeOrderCostAdjustment) : 0,
      scheduleAdjustmentDays: this.cmdCreateChangeOrderScheduleAdjustmentDays ? Number(this.cmdCreateChangeOrderScheduleAdjustmentDays) : undefined,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdCreateChangeOrderOutput>(cmdCreateChangeOrderRoute, params, options);

    if (response.ok) {
      this.cmdCreateChangeOrderOutput = response.data ?? null;
      setState('ui.changeOrderWorkspace.output.cmdCreateChangeOrder', response.data ?? null);

      // Clear form inputs
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

      this.cmdCreateChangeOrderError = '';
      setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error', '');
      this.cmdCreateChangeOrderState = 'success';
      setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status', 'success');
    } else {
      const errorMsg = (response.error as { message?: string } | null)?.message ?? '';
      this.cmdCreateChangeOrderError = errorMsg;
      setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.error', errorMsg);
      this.cmdCreateChangeOrderState = 'error';
      setState('ui.changeOrderWorkspace.action.cmdCreateChangeOrder.status', 'error');
    }
  }

  /** handler for action cmdCreateChangeOrder — bind UI events here */
  handleCmdCreateChangeOrderClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdCreateChangeOrder();
    });
  }

  /** action cmdUpdateChangeOrder (command) — route buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder; inputs: changeOrderId, title, description, impactType, costAdjustment, scheduleAdjustmentDays; writes cmdUpdateChangeOrderOutput; status cmdUpdateChangeOrderState; feedback keys action.cmdUpdateChangeOrder.success / action.cmdUpdateChangeOrder.error */
  async cmdUpdateChangeOrder(): Promise<void> {
    // Parse route params before calling
    this.parseRouteParams();

    if (!this.cmdUpdateChangeOrderChangeOrderId) {
      this.cmdUpdateChangeOrderState = 'idle';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status', 'idle');
      return;
    }

    this.cmdUpdateChangeOrderState = 'loading';
    setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status', 'loading');

    const params: CmdUpdateChangeOrderInput = {
      changeOrderId: this.cmdUpdateChangeOrderChangeOrderId,
      title: this.cmdUpdateChangeOrderTitle,
      description: this.cmdUpdateChangeOrderDescription,
      impactType: this.cmdUpdateChangeOrderImpactType,
      costAdjustment: this.cmdUpdateChangeOrderCostAdjustment ? Number(this.cmdUpdateChangeOrderCostAdjustment) : 0,
      scheduleAdjustmentDays: this.cmdUpdateChangeOrderScheduleAdjustmentDays ? Number(this.cmdUpdateChangeOrderScheduleAdjustmentDays) : undefined,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateChangeOrderOutput>(cmdUpdateChangeOrderRoute, params, options);

    if (response.ok) {
      this.cmdUpdateChangeOrderOutput = response.data ?? null;
      setState('ui.changeOrderWorkspace.output.cmdUpdateChangeOrder', response.data ?? null);

      // Clear form inputs (not changeOrderId)
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

      this.cmdUpdateChangeOrderError = '';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error', '');
      this.cmdUpdateChangeOrderState = 'success';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status', 'success');
    } else {
      const errorMsg = (response.error as { message?: string } | null)?.message ?? '';
      this.cmdUpdateChangeOrderError = errorMsg;
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.error', errorMsg);
      this.cmdUpdateChangeOrderState = 'error';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrder.status', 'error');
    }
  }

  /** handler for action cmdUpdateChangeOrder — bind UI events here */
  handleCmdUpdateChangeOrderClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.cmdUpdateChangeOrder();
    });
  }

  /** action cmdUpdateChangeOrderStatus (command) — route buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus; inputs: changeOrderId, status, rejectionReason; writes cmdUpdateChangeOrderStatusOutput; status cmdUpdateChangeOrderStatusState; feedback keys action.cmdUpdateChangeOrderStatus.success / action.cmdUpdateChangeOrderStatus.error */
  async cmdUpdateChangeOrderStatus(): Promise<void> {
    // Parse route params before calling
    this.parseRouteParams();

    if (!this.cmdUpdateChangeOrderStatusChangeOrderId) {
      this.cmdUpdateChangeOrderStatusState = 'idle';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status', 'idle');
      return;
    }

    this.cmdUpdateChangeOrderStatusState = 'loading';
    setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status', 'loading');

    const params: CmdUpdateChangeOrderStatusInput = {
      changeOrderId: this.cmdUpdateChangeOrderStatusChangeOrderId,
      status: this.cmdUpdateChangeOrderStatusStatus,
      rejectionReason: this.cmdUpdateChangeOrderStatusRejectionReason || undefined,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CmdUpdateChangeOrderStatusOutput>(cmdUpdateChangeOrderStatusRoute, params, options);

    if (response.ok) {
      this.cmdUpdateChangeOrderStatusOutput = response.data ?? null;
      setState('ui.changeOrderWorkspace.output.cmdUpdateChangeOrderStatus', response.data ?? null);

      // Clear form inputs (not changeOrderId)
      this.cmdUpdateChangeOrderStatusStatus = '';
      setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status', '');
      this.cmdUpdateChangeOrderStatusRejectionReason = '';
      setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason', '');

      this.cmdUpdateChangeOrderStatusError = '';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error', '');
      this.cmdUpdateChangeOrderStatusState = 'success';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status', 'success');
    } else {
      const errorMsg = (response.error as { message?: string } | null)?.message ?? '';
      this.cmdUpdateChangeOrderStatusError = errorMsg;
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.error', errorMsg);
      this.cmdUpdateChangeOrderStatusState = 'error';
      setState('ui.changeOrderWorkspace.action.cmdUpdateChangeOrderStatus.status', 'error');
    }
  }

  /** handler for action cmdUpdateChangeOrderStatus — bind UI events here */
  handleCmdUpdateChangeOrderStatusClick(e: Event): void {
    e.preventDefault();
    runBlockingUiAction(async (_signal: AbortSignal) => {
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
  handleCmdCreateChangeOrderProjectIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdCreateChangeOrderProjectId(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title */
  setCmdCreateChangeOrderTitle(value: string): void {
    this.cmdCreateChangeOrderTitle = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.title', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderTitle — bind UI events here */
  handleCmdCreateChangeOrderTitleChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdCreateChangeOrderTitle(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description */
  setCmdCreateChangeOrderDescription(value: string): void {
    this.cmdCreateChangeOrderDescription = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderDescription — bind UI events here */
  handleCmdCreateChangeOrderDescriptionChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdCreateChangeOrderDescription(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType */
  setCmdCreateChangeOrderImpactType(value: string): void {
    this.cmdCreateChangeOrderImpactType = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.impactType', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderImpactType — bind UI events here */
  handleCmdCreateChangeOrderImpactTypeChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdCreateChangeOrderImpactType(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment */
  setCmdCreateChangeOrderCostAdjustment(value: string): void {
    this.cmdCreateChangeOrderCostAdjustment = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.costAdjustment', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderCostAdjustment — bind UI events here */
  handleCmdCreateChangeOrderCostAdjustmentChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdCreateChangeOrderCostAdjustment(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays */
  setCmdCreateChangeOrderScheduleAdjustmentDays(value: string): void {
    this.cmdCreateChangeOrderScheduleAdjustmentDays = value;
    setState('ui.changeOrderWorkspace.input.cmdCreateChangeOrder.scheduleAdjustmentDays', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdCreateChangeOrderScheduleAdjustmentDays — bind UI events here */
  handleCmdCreateChangeOrderScheduleAdjustmentDaysChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdCreateChangeOrderScheduleAdjustmentDays(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId */
  setCmdUpdateChangeOrderChangeOrderId(value: string): void {
    this.cmdUpdateChangeOrderChangeOrderId = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.changeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderChangeOrderId — bind UI events here */
  handleCmdUpdateChangeOrderChangeOrderIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdUpdateChangeOrderChangeOrderId(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title */
  setCmdUpdateChangeOrderTitle(value: string): void {
    this.cmdUpdateChangeOrderTitle = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.title', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderTitle — bind UI events here */
  handleCmdUpdateChangeOrderTitleChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdUpdateChangeOrderTitle(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description */
  setCmdUpdateChangeOrderDescription(value: string): void {
    this.cmdUpdateChangeOrderDescription = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.description', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderDescription — bind UI events here */
  handleCmdUpdateChangeOrderDescriptionChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdUpdateChangeOrderDescription(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType */
  setCmdUpdateChangeOrderImpactType(value: string): void {
    this.cmdUpdateChangeOrderImpactType = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.impactType', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderImpactType — bind UI events here */
  handleCmdUpdateChangeOrderImpactTypeChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdUpdateChangeOrderImpactType(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment */
  setCmdUpdateChangeOrderCostAdjustment(value: string): void {
    this.cmdUpdateChangeOrderCostAdjustment = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.costAdjustment', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderCostAdjustment — bind UI events here */
  handleCmdUpdateChangeOrderCostAdjustmentChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdUpdateChangeOrderCostAdjustment(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays */
  setCmdUpdateChangeOrderScheduleAdjustmentDays(value: string): void {
    this.cmdUpdateChangeOrderScheduleAdjustmentDays = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrder.scheduleAdjustmentDays', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderScheduleAdjustmentDays — bind UI events here */
  handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdUpdateChangeOrderScheduleAdjustmentDays(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId */
  setCmdUpdateChangeOrderStatusChangeOrderId(value: string): void {
    this.cmdUpdateChangeOrderStatusChangeOrderId = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.changeOrderId', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderStatusChangeOrderId — bind UI events here */
  handleCmdUpdateChangeOrderStatusChangeOrderIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdUpdateChangeOrderStatusChangeOrderId(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status */
  setCmdUpdateChangeOrderStatusStatus(value: string): void {
    this.cmdUpdateChangeOrderStatusStatus = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.status', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderStatusStatus — bind UI events here */
  handleCmdUpdateChangeOrderStatusStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdUpdateChangeOrderStatusStatus(value);
  }

  /** setter for state ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason */
  setCmdUpdateChangeOrderStatusRejectionReason(value: string): void {
    this.cmdUpdateChangeOrderStatusRejectionReason = value;
    setState('ui.changeOrderWorkspace.input.cmdUpdateChangeOrderStatus.rejectionReason', value);
    this.requestUpdate();
  }

  /** handler for action set.cmdUpdateChangeOrderStatusRejectionReason — bind UI events here */
  handleCmdUpdateChangeOrderStatusRejectionReasonChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCmdUpdateChangeOrderStatusRejectionReason(value);
  }
}
