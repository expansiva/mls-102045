/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import type {
  CreateProjectCmdInput,
  CreateProjectCmdOutput,
  UpdateProjectCmdInput,
  UpdateProjectCmdOutput,
  UpdateProjectStatusCmdInput,
  UpdateProjectStatusCmdOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/projectLifecycleWorkspace.js';
import {
  createProjectCmdRoute,
  updateProjectCmdRoute,
  updateProjectStatusCmdRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/projectLifecycleWorkspace.js';

export type {
  CreateProjectCmdInput,
  CreateProjectCmdOutput,
  UpdateProjectCmdInput,
  UpdateProjectCmdOutput,
  UpdateProjectStatusCmdInput,
  UpdateProjectStatusCmdOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/projectLifecycleWorkspace.js';

/// **collab_i18n_start**
const message_en = {
  'section.projectLifecycleWorkspace.createProjectSection.title': 'Create Project',
  'organism.projectLifecycleWorkspace.createProjectCmd.title': 'Create project',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.title': 'Create project',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd': 'Create project',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label': 'Name',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label': 'Client Id',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label': 'Site Address',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label': 'Budget',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label': 'Start Date',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label': 'End Date',
  'section.projectLifecycleWorkspace.editProjectSection.title': 'Edit Project Details',
  'organism.projectLifecycleWorkspace.updateProjectCmd.title': 'Update project details',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.title': 'Update project details',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd': 'Update project details',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label': 'Name',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label': 'Client Id',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label': 'Site Address',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label': 'Budget',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label': 'Start Date',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label': 'End Date',
  'section.projectLifecycleWorkspace.projectStatusSection.title': 'Update Project Status',
  'organism.projectLifecycleWorkspace.updateProjectStatusCmd.title': 'Update project status',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.title': 'Update project status',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd': 'Update project status',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label': 'Status',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label': 'Hold Reason',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label': 'Cancellation Reason',
  'action.createProjectCmd.success': 'Create project: OK',
  'action.createProjectCmd.error': 'Create project: falhou',
  'action.updateProjectCmd.success': 'Update project details: OK',
  'action.updateProjectCmd.error': 'Update project details: falhou',
  'action.updateProjectStatusCmd.success': 'Update project status: OK',
  'action.updateProjectStatusCmd.error': 'Update project status: falhou',
  'section.projectLifecycleWorkspace.sec-project-board.title': 'Project Board',
  'organism.projectLifecycleWorkspace.card-board10.title': 'Card board',
  'intent.projectLifecycleWorkspace.card-board10.content.title': 'Card board',
  'section.projectLifecycleWorkspace.sec-project-detail.title': 'Project Detail & Lifecycle',
  'organism.projectLifecycleWorkspace.summary-first10.title': 'Summary first',
  'intent.projectLifecycleWorkspace.summary-first10.content.title': 'Summary first',
  'section.projectLifecycleWorkspace.sec-create-project.title': 'Create New Project',
  'section.projectLifecycleWorkspace.sec-edit-project.title': 'Edit Project Details',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.projectLifecycleWorkspace.createProjectSection.title': 'Criar Projeto',
  'organism.projectLifecycleWorkspace.createProjectCmd.title': 'Criar projeto',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.title': 'Criar projeto',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd': 'Criar projeto',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label': 'Nome',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label': 'ID do Cliente',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label': 'Endereço do Site',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label': 'Orçamento',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label': 'Data de Início',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label': 'Data de Término',
  'section.projectLifecycleWorkspace.editProjectSection.title': 'Editar Detalhes do Projeto',
  'organism.projectLifecycleWorkspace.updateProjectCmd.title': 'Atualizar detalhes do projeto',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.title': 'Atualizar detalhes do projeto',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd': 'Atualizar detalhes do projeto',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label': 'Nome',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label': 'ID do Cliente',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label': 'Endereço do Site',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label': 'Orçamento',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label': 'Data de Início',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label': 'Data de Término',
  'section.projectLifecycleWorkspace.projectStatusSection.title': 'Atualizar Status do Projeto',
  'organism.projectLifecycleWorkspace.updateProjectStatusCmd.title': 'Atualizar status do projeto',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.title': 'Atualizar status do projeto',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd': 'Atualizar status do projeto',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label': 'Status',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label': 'Motivo da Suspensão',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label': 'Motivo do Cancelamento',
  'action.createProjectCmd.success': 'Criar projeto: OK',
  'action.createProjectCmd.error': 'Criar projeto: falhou',
  'action.updateProjectCmd.success': 'Atualizar detalhes do projeto: OK',
  'action.updateProjectCmd.error': 'Atualizar detalhes do projeto: falhou',
  'action.updateProjectStatusCmd.success': 'Atualizar status do projeto: OK',
  'action.updateProjectStatusCmd.error': 'Atualizar status do projeto: falhou',
  'section.projectLifecycleWorkspace.sec-project-board.title': 'Quadro do Projeto',
  'organism.projectLifecycleWorkspace.card-board10.title': 'Quadro de Cartões',
  'intent.projectLifecycleWorkspace.card-board10.content.title': 'Quadro de Cartões',
  'section.projectLifecycleWorkspace.sec-project-detail.title': 'Detalhes & Ciclo de Vida do Projeto',
  'organism.projectLifecycleWorkspace.summary-first10.title': 'Resumo inicial',
  'intent.projectLifecycleWorkspace.summary-first10.content.title': 'Resumo inicial',
  'section.projectLifecycleWorkspace.sec-create-project.title': 'Criar Novo Projeto',
  'section.projectLifecycleWorkspace.sec-edit-project.title': 'Editar Detalhes do Projeto',
};
const message_es: MessageType = {
  'section.projectLifecycleWorkspace.createProjectSection.title': 'Crear Proyecto',
  'organism.projectLifecycleWorkspace.createProjectCmd.title': 'Crear proyecto',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.title': 'Crear proyecto',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd': 'Crear proyecto',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label': 'Nombre',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label': 'ID del Cliente',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label': 'Dirección del Sitio',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label': 'Presupuesto',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label': 'Fecha de Inicio',
  'intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label': 'Fecha de Fin',
  'section.projectLifecycleWorkspace.editProjectSection.title': 'Editar Detalles del Proyecto',
  'organism.projectLifecycleWorkspace.updateProjectCmd.title': 'Actualizar detalles del proyecto',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.title': 'Actualizar detalles del proyecto',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd': 'Actualizar detalles del proyecto',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label': 'Nombre',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label': 'ID del Cliente',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label': 'Dirección del Sitio',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label': 'Presupuesto',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label': 'Fecha de Inicio',
  'intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label': 'Fecha de Fin',
  'section.projectLifecycleWorkspace.projectStatusSection.title': 'Actualizar Estado del Proyecto',
  'organism.projectLifecycleWorkspace.updateProjectStatusCmd.title': 'Actualizar estado del proyecto',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.title': 'Actualizar estado del proyecto',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd': 'Actualizar estado del proyecto',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label': 'Estado',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label': 'Motivo de Pausa',
  'intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label': 'Motivo de Cancelación',
  'action.createProjectCmd.success': 'Crear proyecto: OK',
  'action.createProjectCmd.error': 'Crear proyecto: falló',
  'action.updateProjectCmd.success': 'Actualizar detalles del proyecto: OK',
  'action.updateProjectCmd.error': 'Actualizar detalles del proyecto: falló',
  'action.updateProjectStatusCmd.success': 'Actualizar estado del proyecto: OK',
  'action.updateProjectStatusCmd.error': 'Actualizar estado del proyecto: falló',
  'section.projectLifecycleWorkspace.sec-project-board.title': 'Tablero del Proyecto',
  'organism.projectLifecycleWorkspace.card-board10.title': 'Tablero de Tarjetas',
  'intent.projectLifecycleWorkspace.card-board10.content.title': 'Tablero de Tarjetas',
  'section.projectLifecycleWorkspace.sec-project-detail.title': 'Detalle y Ciclo de Vida del Proyecto',
  'organism.projectLifecycleWorkspace.summary-first10.title': 'Resumen inicial',
  'intent.projectLifecycleWorkspace.summary-first10.content.title': 'Resumen inicial',
  'section.projectLifecycleWorkspace.sec-create-project.title': 'Crear Nuevo Proyecto',
  'section.projectLifecycleWorkspace.sec-edit-project.title': 'Editar Detalles del Proyecto',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.projectLifecycleWorkspace.status',
  'ui.projectLifecycleWorkspace.action.createProjectCmd.status',
  'ui.projectLifecycleWorkspace.input.createProjectCmd.name',
  'ui.projectLifecycleWorkspace.input.createProjectCmd.clientId',
  'ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress',
  'ui.projectLifecycleWorkspace.input.createProjectCmd.budget',
  'ui.projectLifecycleWorkspace.input.createProjectCmd.startDate',
  'ui.projectLifecycleWorkspace.input.createProjectCmd.endDate',
  'ui.projectLifecycleWorkspace.output.createProjectCmd',
  'ui.projectLifecycleWorkspace.action.createProjectCmd.error',
  'ui.projectLifecycleWorkspace.action.updateProjectCmd.status',
  'ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId',
  'ui.projectLifecycleWorkspace.input.updateProjectCmd.name',
  'ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId',
  'ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress',
  'ui.projectLifecycleWorkspace.input.updateProjectCmd.budget',
  'ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate',
  'ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate',
  'ui.projectLifecycleWorkspace.output.updateProjectCmd',
  'ui.projectLifecycleWorkspace.action.updateProjectCmd.error',
  'ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status',
  'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId',
  'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status',
  'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason',
  'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason',
  'ui.projectLifecycleWorkspace.output.updateProjectStatusCmd',
  'ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error',
];

export class BuildFlowFsmProjectLifecycleWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state createProjectCmdState — actionStatus, values: idle|loading|success|error */
  @property() createProjectCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state createProjectCmdName — input */
  @property() createProjectCmdName: string = '';
  /** state createProjectCmdClientId — input */
  @property() createProjectCmdClientId: string = '';
  /** state createProjectCmdSiteAddress — input */
  @property() createProjectCmdSiteAddress: string = '';
  /** state createProjectCmdBudget — input */
  @property() createProjectCmdBudget: string = '';
  /** state createProjectCmdStartDate — input */
  @property() createProjectCmdStartDate: string = '';
  /** state createProjectCmdEndDate — input */
  @property() createProjectCmdEndDate: string = '';
  /** state createProjectCmdOutput — commandOutput */
  @property() createProjectCmdOutput: CreateProjectCmdOutput | null = null;
  /** state createProjectCmdError — actionError */
  @property() createProjectCmdError: string = '';
  /** state updateProjectCmdState — actionStatus, values: idle|loading|success|error */
  @property() updateProjectCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state updateProjectCmdProjectId — input */
  @property() updateProjectCmdProjectId: string = '';
  /** state updateProjectCmdName — input */
  @property() updateProjectCmdName: string = '';
  /** state updateProjectCmdClientId — input */
  @property() updateProjectCmdClientId: string = '';
  /** state updateProjectCmdSiteAddress — input */
  @property() updateProjectCmdSiteAddress: string = '';
  /** state updateProjectCmdBudget — input */
  @property() updateProjectCmdBudget: string = '';
  /** state updateProjectCmdStartDate — input */
  @property() updateProjectCmdStartDate: string = '';
  /** state updateProjectCmdEndDate — input */
  @property() updateProjectCmdEndDate: string = '';
  /** state updateProjectCmdOutput — commandOutput */
  @property() updateProjectCmdOutput: UpdateProjectCmdOutput | null = null;
  /** state updateProjectCmdError — actionError */
  @property() updateProjectCmdError: string = '';
  /** state updateProjectStatusCmdState — actionStatus, values: idle|loading|success|error */
  @property() updateProjectStatusCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state updateProjectStatusCmdProjectId — input */
  @property() updateProjectStatusCmdProjectId: string = '';
  /** state updateProjectStatusCmdStatus — input */
  @property() updateProjectStatusCmdStatus: string = '';
  /** state updateProjectStatusCmdHoldReason — input */
  @property() updateProjectStatusCmdHoldReason: string = '';
  /** state updateProjectStatusCmdCancellationReason — input */
  @property() updateProjectStatusCmdCancellationReason: string = '';
  /** state updateProjectStatusCmdOutput — commandOutput */
  @property() updateProjectStatusCmdOutput: UpdateProjectStatusCmdOutput | null = null;
  /** state updateProjectStatusCmdError — actionError */
  @property() updateProjectStatusCmdError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.projectLifecycleWorkspace.status', '');
    this.initStateValue('ui.projectLifecycleWorkspace.action.createProjectCmd.status', 'idle');
    this.initStateValue('ui.projectLifecycleWorkspace.input.createProjectCmd.name', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.createProjectCmd.clientId', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.createProjectCmd.budget', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.createProjectCmd.startDate', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.createProjectCmd.endDate', '');
    this.initStateValue('ui.projectLifecycleWorkspace.output.createProjectCmd', null);
    this.initStateValue('ui.projectLifecycleWorkspace.action.createProjectCmd.error', '');
    this.initStateValue('ui.projectLifecycleWorkspace.action.updateProjectCmd.status', 'idle');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectCmd.name', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectCmd.budget', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate', '');
    this.initStateValue('ui.projectLifecycleWorkspace.output.updateProjectCmd', null);
    this.initStateValue('ui.projectLifecycleWorkspace.action.updateProjectCmd.error', '');
    this.initStateValue('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status', 'idle');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason', '');
    this.initStateValue('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason', '');
    this.initStateValue('ui.projectLifecycleWorkspace.output.updateProjectStatusCmd', null);
    this.initStateValue('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error', '');
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
      case 'ui.projectLifecycleWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.action.createProjectCmd.status':
        this.createProjectCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.name':
        this.createProjectCmdName = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.clientId':
        this.createProjectCmdClientId = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress':
        this.createProjectCmdSiteAddress = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.budget':
        this.createProjectCmdBudget = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.startDate':
        this.createProjectCmdStartDate = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.endDate':
        this.createProjectCmdEndDate = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.output.createProjectCmd':
        this.createProjectCmdOutput = (value as CreateProjectCmdOutput | null) ?? null;
        break;
      case 'ui.projectLifecycleWorkspace.action.createProjectCmd.error':
        this.createProjectCmdError = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.action.updateProjectCmd.status':
        this.updateProjectCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId':
        this.updateProjectCmdProjectId = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.name':
        this.updateProjectCmdName = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId':
        this.updateProjectCmdClientId = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress':
        this.updateProjectCmdSiteAddress = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.budget':
        this.updateProjectCmdBudget = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate':
        this.updateProjectCmdStartDate = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate':
        this.updateProjectCmdEndDate = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.output.updateProjectCmd':
        this.updateProjectCmdOutput = (value as UpdateProjectCmdOutput | null) ?? null;
        break;
      case 'ui.projectLifecycleWorkspace.action.updateProjectCmd.error':
        this.updateProjectCmdError = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status':
        this.updateProjectStatusCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId':
        this.updateProjectStatusCmdProjectId = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status':
        this.updateProjectStatusCmdStatus = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason':
        this.updateProjectStatusCmdHoldReason = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason':
        this.updateProjectStatusCmdCancellationReason = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.output.updateProjectStatusCmd':
        this.updateProjectStatusCmdOutput = (value as UpdateProjectStatusCmdOutput | null) ?? null;
        break;
      case 'ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error':
        this.updateProjectStatusCmdError = (value as string) ?? '';
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
      case 'ui.projectLifecycleWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.action.createProjectCmd.status':
        this.createProjectCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.name':
        this.createProjectCmdName = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.clientId':
        this.createProjectCmdClientId = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress':
        this.createProjectCmdSiteAddress = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.budget':
        this.createProjectCmdBudget = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.startDate':
        this.createProjectCmdStartDate = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.createProjectCmd.endDate':
        this.createProjectCmdEndDate = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.output.createProjectCmd':
        this.createProjectCmdOutput = (value as CreateProjectCmdOutput | null) ?? null;
        break;
      case 'ui.projectLifecycleWorkspace.action.createProjectCmd.error':
        this.createProjectCmdError = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.action.updateProjectCmd.status':
        this.updateProjectCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId':
        this.updateProjectCmdProjectId = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.name':
        this.updateProjectCmdName = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId':
        this.updateProjectCmdClientId = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress':
        this.updateProjectCmdSiteAddress = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.budget':
        this.updateProjectCmdBudget = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate':
        this.updateProjectCmdStartDate = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate':
        this.updateProjectCmdEndDate = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.output.updateProjectCmd':
        this.updateProjectCmdOutput = (value as UpdateProjectCmdOutput | null) ?? null;
        break;
      case 'ui.projectLifecycleWorkspace.action.updateProjectCmd.error':
        this.updateProjectCmdError = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status':
        this.updateProjectStatusCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId':
        this.updateProjectStatusCmdProjectId = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status':
        this.updateProjectStatusCmdStatus = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason':
        this.updateProjectStatusCmdHoldReason = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason':
        this.updateProjectStatusCmdCancellationReason = (value as string) ?? '';
        break;
      case 'ui.projectLifecycleWorkspace.output.updateProjectStatusCmd':
        this.updateProjectStatusCmdOutput = (value as UpdateProjectStatusCmdOutput | null) ?? null;
        break;
      case 'ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error':
        this.updateProjectStatusCmdError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/projectLifecycleWorkspace(?:\/([^/]+))?\/?$/,
    );
    const rawProjectId: string = match && match[1] ? match[1] : '';
    let projectId: string = '';
    if (rawProjectId) {
      try {
        projectId = decodeURIComponent(rawProjectId);
      } catch {
        projectId = rawProjectId;
      }
    }
    if (projectId) {
      if (!this.updateProjectCmdProjectId) {
        this.updateProjectCmdProjectId = projectId;
        setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId', projectId);
      }
      if (!this.updateProjectStatusCmdProjectId) {
        this.updateProjectStatusCmdProjectId = projectId;
        setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId', projectId);
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

  /** action createProjectCmd (command) — route buildFlowFsm.projectLifecycleWorkspace.createProjectCmd; inputs: name, clientId, siteAddress, budget, startDate, endDate; writes ui.projectLifecycleWorkspace.output.createProjectCmd; status ui.projectLifecycleWorkspace.action.createProjectCmd.status; feedback keys action.createProjectCmd.success / action.createProjectCmd.error */
  async createProjectCmd(): Promise<void> {
    this.syncRouteParams();
    this.createProjectCmdState = 'loading';
    setState('ui.projectLifecycleWorkspace.action.createProjectCmd.status', 'loading');
    this.createProjectCmdError = '';
    setState('ui.projectLifecycleWorkspace.action.createProjectCmd.error', '');
    const budgetNum = Number(this.createProjectCmdBudget);
    const params: CreateProjectCmdInput = {
      name: this.createProjectCmdName,
      clientId: this.createProjectCmdClientId,
      siteAddress: this.createProjectCmdSiteAddress,
      budget: Number.isNaN(budgetNum) ? 0 : budgetNum,
      startDate: this.createProjectCmdStartDate,
      endDate: this.createProjectCmdEndDate,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CreateProjectCmdOutput>(createProjectCmdRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.createProjectCmd.error');
      this.createProjectCmdError = errMsg;
      setState('ui.projectLifecycleWorkspace.action.createProjectCmd.error', errMsg);
      this.createProjectCmdState = 'error';
      setState('ui.projectLifecycleWorkspace.action.createProjectCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CreateProjectCmdOutput | null = response.data ?? null;
    this.createProjectCmdOutput = data;
    setState('ui.projectLifecycleWorkspace.output.createProjectCmd', data);
    this.createProjectCmdName = '';
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.name', '');
    this.createProjectCmdClientId = '';
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.clientId', '');
    this.createProjectCmdSiteAddress = '';
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress', '');
    this.createProjectCmdBudget = '';
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.budget', '');
    this.createProjectCmdStartDate = '';
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.startDate', '');
    this.createProjectCmdEndDate = '';
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.endDate', '');
    this.createProjectCmdState = 'success';
    setState('ui.projectLifecycleWorkspace.action.createProjectCmd.status', 'success');
    this.requestUpdate();
  }

  /** handler for action createProjectCmd — bind UI events here */
  handleCreateProjectCmdClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createProjectCmd();
    });
  }

  /** action updateProjectCmd (command) — route buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd; inputs: projectId, name, clientId, siteAddress, budget, startDate, endDate; writes ui.projectLifecycleWorkspace.output.updateProjectCmd; status ui.projectLifecycleWorkspace.action.updateProjectCmd.status; feedback keys action.updateProjectCmd.success / action.updateProjectCmd.error */
  async updateProjectCmd(): Promise<void> {
    this.syncRouteParams();
    if (!this.updateProjectCmdProjectId) {
      this.updateProjectCmdState = 'idle';
      setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.updateProjectCmdState = 'loading';
    setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.status', 'loading');
    this.updateProjectCmdError = '';
    setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.error', '');
    const budgetNum = Number(this.updateProjectCmdBudget);
    const params: UpdateProjectCmdInput = {
      projectId: this.updateProjectCmdProjectId,
      name: this.updateProjectCmdName,
      clientId: this.updateProjectCmdClientId,
      siteAddress: this.updateProjectCmdSiteAddress,
      budget: Number.isNaN(budgetNum) ? 0 : budgetNum,
      startDate: this.updateProjectCmdStartDate,
      endDate: this.updateProjectCmdEndDate,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<UpdateProjectCmdOutput>(updateProjectCmdRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.updateProjectCmd.error');
      this.updateProjectCmdError = errMsg;
      setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.error', errMsg);
      this.updateProjectCmdState = 'error';
      setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: UpdateProjectCmdOutput | null = response.data ?? null;
    this.updateProjectCmdOutput = data;
    setState('ui.projectLifecycleWorkspace.output.updateProjectCmd', data);
    this.updateProjectCmdName = '';
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.name', '');
    this.updateProjectCmdClientId = '';
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId', '');
    this.updateProjectCmdSiteAddress = '';
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress', '');
    this.updateProjectCmdBudget = '';
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.budget', '');
    this.updateProjectCmdStartDate = '';
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate', '');
    this.updateProjectCmdEndDate = '';
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate', '');
    this.updateProjectCmdState = 'success';
    setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.status', 'success');
    this.requestUpdate();
  }

  /** handler for action updateProjectCmd — bind UI events here */
  handleUpdateProjectCmdClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateProjectCmd();
    });
  }

  /** action updateProjectStatusCmd (command) — route buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd; inputs: projectId, status, holdReason, cancellationReason; writes ui.projectLifecycleWorkspace.output.updateProjectStatusCmd; status ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status; feedback keys action.updateProjectStatusCmd.success / action.updateProjectStatusCmd.error */
  async updateProjectStatusCmd(): Promise<void> {
    this.syncRouteParams();
    if (!this.updateProjectStatusCmdProjectId) {
      this.updateProjectStatusCmdState = 'idle';
      setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.updateProjectStatusCmdState = 'loading';
    setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status', 'loading');
    this.updateProjectStatusCmdError = '';
    setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error', '');
    const params: UpdateProjectStatusCmdInput = {
      projectId: this.updateProjectStatusCmdProjectId,
      status: this.updateProjectStatusCmdStatus,
    };
    if (this.updateProjectStatusCmdHoldReason) {
      params.holdReason = this.updateProjectStatusCmdHoldReason;
    }
    if (this.updateProjectStatusCmdCancellationReason) {
      params.cancellationReason = this.updateProjectStatusCmdCancellationReason;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<UpdateProjectStatusCmdOutput>(updateProjectStatusCmdRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.updateProjectStatusCmd.error');
      this.updateProjectStatusCmdError = errMsg;
      setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error', errMsg);
      this.updateProjectStatusCmdState = 'error';
      setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: UpdateProjectStatusCmdOutput | null = response.data ?? null;
    this.updateProjectStatusCmdOutput = data;
    setState('ui.projectLifecycleWorkspace.output.updateProjectStatusCmd', data);
    this.updateProjectStatusCmdStatus = '';
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status', '');
    this.updateProjectStatusCmdHoldReason = '';
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason', '');
    this.updateProjectStatusCmdCancellationReason = '';
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason', '');
    this.updateProjectStatusCmdState = 'success';
    setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status', 'success');
    this.requestUpdate();
  }

  /** handler for action updateProjectStatusCmd — bind UI events here */
  handleUpdateProjectStatusCmdClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateProjectStatusCmd();
    });
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.name */
  setCreateProjectCmdName(value: string): void {
    this.createProjectCmdName = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.name', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdName — bind UI events here */
  handleCreateProjectCmdNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateProjectCmdName(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.clientId */
  setCreateProjectCmdClientId(value: string): void {
    this.createProjectCmdClientId = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdClientId — bind UI events here */
  handleCreateProjectCmdClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateProjectCmdClientId(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress */
  setCreateProjectCmdSiteAddress(value: string): void {
    this.createProjectCmdSiteAddress = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdSiteAddress — bind UI events here */
  handleCreateProjectCmdSiteAddressChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateProjectCmdSiteAddress(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.budget */
  setCreateProjectCmdBudget(value: string): void {
    this.createProjectCmdBudget = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.budget', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdBudget — bind UI events here */
  handleCreateProjectCmdBudgetChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateProjectCmdBudget(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.startDate */
  setCreateProjectCmdStartDate(value: string): void {
    this.createProjectCmdStartDate = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.startDate', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdStartDate — bind UI events here */
  handleCreateProjectCmdStartDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateProjectCmdStartDate(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.endDate */
  setCreateProjectCmdEndDate(value: string): void {
    this.createProjectCmdEndDate = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.endDate', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdEndDate — bind UI events here */
  handleCreateProjectCmdEndDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateProjectCmdEndDate(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId */
  setUpdateProjectCmdProjectId(value: string): void {
    this.updateProjectCmdProjectId = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdProjectId — bind UI events here */
  handleUpdateProjectCmdProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectCmdProjectId(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.name */
  setUpdateProjectCmdName(value: string): void {
    this.updateProjectCmdName = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.name', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdName — bind UI events here */
  handleUpdateProjectCmdNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectCmdName(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId */
  setUpdateProjectCmdClientId(value: string): void {
    this.updateProjectCmdClientId = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdClientId — bind UI events here */
  handleUpdateProjectCmdClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectCmdClientId(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress */
  setUpdateProjectCmdSiteAddress(value: string): void {
    this.updateProjectCmdSiteAddress = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdSiteAddress — bind UI events here */
  handleUpdateProjectCmdSiteAddressChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectCmdSiteAddress(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.budget */
  setUpdateProjectCmdBudget(value: string): void {
    this.updateProjectCmdBudget = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.budget', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdBudget — bind UI events here */
  handleUpdateProjectCmdBudgetChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectCmdBudget(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate */
  setUpdateProjectCmdStartDate(value: string): void {
    this.updateProjectCmdStartDate = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdStartDate — bind UI events here */
  handleUpdateProjectCmdStartDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectCmdStartDate(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate */
  setUpdateProjectCmdEndDate(value: string): void {
    this.updateProjectCmdEndDate = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdEndDate — bind UI events here */
  handleUpdateProjectCmdEndDateChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectCmdEndDate(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId */
  setUpdateProjectStatusCmdProjectId(value: string): void {
    this.updateProjectStatusCmdProjectId = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectStatusCmdProjectId — bind UI events here */
  handleUpdateProjectStatusCmdProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectStatusCmdProjectId(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status */
  setUpdateProjectStatusCmdStatus(value: string): void {
    this.updateProjectStatusCmdStatus = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectStatusCmdStatus — bind UI events here */
  handleUpdateProjectStatusCmdStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectStatusCmdStatus(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason */
  setUpdateProjectStatusCmdHoldReason(value: string): void {
    this.updateProjectStatusCmdHoldReason = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectStatusCmdHoldReason — bind UI events here */
  handleUpdateProjectStatusCmdHoldReasonChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectStatusCmdHoldReason(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason */
  setUpdateProjectStatusCmdCancellationReason(value: string): void {
    this.updateProjectStatusCmdCancellationReason = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectStatusCmdCancellationReason — bind UI events here */
  handleUpdateProjectStatusCmdCancellationReasonChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateProjectStatusCmdCancellationReason(value);
  }
}
