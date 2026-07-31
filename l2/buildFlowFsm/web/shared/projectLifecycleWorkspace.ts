/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { setState } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';

import type { CreateProjectCmdOutput, UpdateProjectCmdOutput, UpdateProjectStatusCmdOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/projectLifecycleWorkspace.js';
import { createProjectCmdRoute, updateProjectCmdRoute, updateProjectStatusCmdRoute } from '/_102045_/l2/buildFlowFsm/web/contracts/projectLifecycleWorkspace.js';

export type { CreateProjectCmdInput, CreateProjectCmdOutput, UpdateProjectCmdInput, UpdateProjectCmdOutput, UpdateProjectStatusCmdInput, UpdateProjectStatusCmdOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/projectLifecycleWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.projectLifecycleWorkspace.sec-create-project.title": "Create New Project",
"organism.projectLifecycleWorkspace.createProjectCmd.title": "Create project",
"intent.projectLifecycleWorkspace.createProjectCmd.form.title": "Create project",
"intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd": "Create project",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label": "Name",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label": "Client Id",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label": "Site Address",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label": "Budget",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label": "Start Date",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label": "End Date",
"section.projectLifecycleWorkspace.sec-edit-project.title": "Edit Project Details",
"organism.projectLifecycleWorkspace.updateProjectCmd.title": "Update project details",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.title": "Update project details",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd": "Update project details",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label": "Name",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label": "Client Id",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label": "Site Address",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label": "Budget",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label": "Start Date",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label": "End Date",
"section.projectLifecycleWorkspace.sec-project-status.title": "Update Project Status",
"organism.projectLifecycleWorkspace.updateProjectStatusCmd.title": "Update project status",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.title": "Update project status",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd": "Update project status",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label": "Status",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label": "Hold Reason",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label": "Cancellation Reason",
"section.projectLifecycleWorkspace.sec-project-board.title": "Project Board & Lifecycle Actions",
"organism.projectLifecycleWorkspace.card-board10.title": "Card board",
"intent.projectLifecycleWorkspace.card-board10.content.title": "Card board",
"section.projectLifecycleWorkspace.sec-project-detail.title": "Project Details Editor"
};

const message_pt_br = {
"section.projectLifecycleWorkspace.sec-create-project.title": "Criar Novo Projeto",
"organism.projectLifecycleWorkspace.createProjectCmd.title": "Criar projeto",
"intent.projectLifecycleWorkspace.createProjectCmd.form.title": "Criar projeto",
"intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd": "Criar projeto",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label": "Nome",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label": "ID do Cliente",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label": "Endereço do Site",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label": "Orçamento",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label": "Data de Início",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label": "Data de Término",
"section.projectLifecycleWorkspace.sec-edit-project.title": "Editar Detalhes do Projeto",
"organism.projectLifecycleWorkspace.updateProjectCmd.title": "Atualizar detalhes do projeto",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.title": "Atualizar detalhes do projeto",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd": "Atualizar detalhes do projeto",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label": "Nome",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label": "ID do Cliente",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label": "Endereço do Site",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label": "Orçamento",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label": "Data de Início",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label": "Data de Término",
"section.projectLifecycleWorkspace.sec-project-status.title": "Atualizar Status do Projeto",
"organism.projectLifecycleWorkspace.updateProjectStatusCmd.title": "Atualizar status do projeto",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.title": "Atualizar status do projeto",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd": "Atualizar status do projeto",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label": "Status",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label": "Motivo da Suspensão",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label": "Motivo do Cancelamento",
"section.projectLifecycleWorkspace.sec-project-board.title": "Quadro do Projeto & Ações do Ciclo de Vida",
"organism.projectLifecycleWorkspace.card-board10.title": "Quadro de cartões",
"intent.projectLifecycleWorkspace.card-board10.content.title": "Quadro de cartões",
"section.projectLifecycleWorkspace.sec-project-detail.title": "Editor de Detalhes do Projeto"
};

const message_es = {
"section.projectLifecycleWorkspace.sec-create-project.title": "Crear Nuevo Proyecto",
"organism.projectLifecycleWorkspace.createProjectCmd.title": "Crear proyecto",
"intent.projectLifecycleWorkspace.createProjectCmd.form.title": "Crear proyecto",
"intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd": "Crear proyecto",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label": "Nombre",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label": "ID del Cliente",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label": "Dirección del Sitio",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label": "Presupuesto",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label": "Fecha de Inicio",
"intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label": "Fecha de Fin",
"section.projectLifecycleWorkspace.sec-edit-project.title": "Editar Detalles del Proyecto",
"organism.projectLifecycleWorkspace.updateProjectCmd.title": "Actualizar detalles del proyecto",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.title": "Actualizar detalles del proyecto",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd": "Actualizar detalles del proyecto",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label": "Nombre",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label": "ID del Cliente",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label": "Dirección del Sitio",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label": "Presupuesto",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label": "Fecha de Inicio",
"intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label": "Fecha de Fin",
"section.projectLifecycleWorkspace.sec-project-status.title": "Actualizar Estado del Proyecto",
"organism.projectLifecycleWorkspace.updateProjectStatusCmd.title": "Actualizar estado del proyecto",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.title": "Actualizar estado del proyecto",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd": "Actualizar estado del proyecto",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label": "Estado",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label": "Motivo de Suspensión",
"intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label": "Motivo de Cancelación",
"section.projectLifecycleWorkspace.sec-project-board.title": "Tablero del Proyecto y Acciones del Ciclo de Vida",
"organism.projectLifecycleWorkspace.card-board10.title": "Tablero de tarjetas",
"intent.projectLifecycleWorkspace.card-board10.content.title": "Tablero de tarjetas",
"section.projectLifecycleWorkspace.sec-project-detail.title": "Editor de Detalles del Proyecto"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmProjectLifecycleWorkspaceBase extends CollabLitElement {
  /** state ui.projectLifecycleWorkspace.status — pageStatus */
  @property({ type: String }) status = '';

  /** state ui.projectLifecycleWorkspace.action.createProjectCmd.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) createProjectCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.projectLifecycleWorkspace.input.createProjectCmd.name — input, form */
  @property({ type: String }) createProjectCmdName = '';

  /** state ui.projectLifecycleWorkspace.input.createProjectCmd.clientId — input, form */
  @property({ type: String }) createProjectCmdClientId = '';

  /** state ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress — input, form */
  @property({ type: String }) createProjectCmdSiteAddress = '';

  /** state ui.projectLifecycleWorkspace.input.createProjectCmd.budget — input, form */
  @property({ type: String }) createProjectCmdBudget = '';

  /** state ui.projectLifecycleWorkspace.input.createProjectCmd.startDate — input, form */
  @property({ type: String }) createProjectCmdStartDate = '';

  /** state ui.projectLifecycleWorkspace.input.createProjectCmd.endDate — input, form */
  @property({ type: String }) createProjectCmdEndDate = '';

  /** state ui.projectLifecycleWorkspace.output.createProjectCmd — commandOutput, outputShape: object */
  @property({ type: Object }) createProjectCmdOutput: CreateProjectCmdOutput | null = null;

  /** state ui.projectLifecycleWorkspace.action.createProjectCmd.error — actionError */
  @property({ type: String }) createProjectCmdError = '';

  /** state ui.projectLifecycleWorkspace.action.updateProjectCmd.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) updateProjectCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId — input, route */
  @property({ type: String }) updateProjectCmdProjectId = '';

  /** state ui.projectLifecycleWorkspace.input.updateProjectCmd.name — input, form */
  @property({ type: String }) updateProjectCmdName = '';

  /** state ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId — input, form */
  @property({ type: String }) updateProjectCmdClientId = '';

  /** state ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress — input, form */
  @property({ type: String }) updateProjectCmdSiteAddress = '';

  /** state ui.projectLifecycleWorkspace.input.updateProjectCmd.budget — input, form */
  @property({ type: String }) updateProjectCmdBudget = '';

  /** state ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate — input, form */
  @property({ type: String }) updateProjectCmdStartDate = '';

  /** state ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate — input, form */
  @property({ type: String }) updateProjectCmdEndDate = '';

  /** state ui.projectLifecycleWorkspace.output.updateProjectCmd — commandOutput, outputShape: object */
  @property({ type: Object }) updateProjectCmdOutput: UpdateProjectCmdOutput | null = null;

  /** state ui.projectLifecycleWorkspace.action.updateProjectCmd.error — actionError */
  @property({ type: String }) updateProjectCmdError = '';

  /** state ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) updateProjectStatusCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId — input, route */
  @property({ type: String }) updateProjectStatusCmdProjectId = '';

  /** state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status — input, form */
  @property({ type: String }) updateProjectStatusCmdStatus = '';

  /** state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason — input, form */
  @property({ type: String }) updateProjectStatusCmdHoldReason = '';

  /** state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason — input, form */
  @property({ type: String }) updateProjectStatusCmdCancellationReason = '';

  /** state ui.projectLifecycleWorkspace.output.updateProjectStatusCmd — commandOutput, outputShape: object */
  @property({ type: Object }) updateProjectStatusCmdOutput: UpdateProjectStatusCmdOutput | null = null;

  /** state ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error — actionError */
  @property({ type: String }) updateProjectStatusCmdError = '';

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  private parseRouteParams(): Record<string, string> {
    const pattern = '/buildFlowFsm/projectLifecycleWorkspace/:projectId?';
    const path = window.location.pathname;
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = path.split('/').filter(Boolean);
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const p = patternParts[i];
      if (p.startsWith(':')) {
        const name = p.replace(/^:/, '').replace(/\?$/, '');
        const value = pathParts[i] ? decodeURIComponent(pathParts[i]) : '';
        if (value) {
          params[name] = value;
        }
      }
    }
    return params;
  }

  /** action createProjectCmd (command) — route buildFlowFsm.projectLifecycleWorkspace.createProjectCmd; inputs: name, clientId, siteAddress, budget, startDate, endDate; writes createProjectCmdOutput; status createProjectCmdState; feedback keys action.createProjectCmd.success / action.createProjectCmd.error */
  async createProjectCmd(signal?: AbortSignal): Promise<void> {
    this.createProjectCmdState = 'loading';
    setState('ui.projectLifecycleWorkspace.action.createProjectCmd.status', 'loading');

    const params = {
      name: this.createProjectCmdName,
      clientId: this.createProjectCmdClientId,
      siteAddress: this.createProjectCmdSiteAddress,
      budget: this.createProjectCmdBudget ? Number(this.createProjectCmdBudget) : 0,
      startDate: this.createProjectCmdStartDate,
      endDate: this.createProjectCmdEndDate
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<CreateProjectCmdOutput>(createProjectCmdRoute, params, options);

    if (response.ok) {
      this.createProjectCmdOutput = response.data ?? null;
      setState('ui.projectLifecycleWorkspace.output.createProjectCmd', this.createProjectCmdOutput);

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

      this.createProjectCmdError = '';
      setState('ui.projectLifecycleWorkspace.action.createProjectCmd.error', '');
      this.createProjectCmdState = 'success';
      setState('ui.projectLifecycleWorkspace.action.createProjectCmd.status', 'success');
    } else {
      const errorMsg = (response.error as { message?: string } | null)?.message ?? this.msg['action.createProjectCmd.error'];
      this.createProjectCmdError = errorMsg;
      setState('ui.projectLifecycleWorkspace.action.createProjectCmd.error', errorMsg);
      this.createProjectCmdState = 'error';
      setState('ui.projectLifecycleWorkspace.action.createProjectCmd.status', 'error');
    }
  }

  /** handler for action createProjectCmd — bind UI events here */
  handleCreateProjectCmdClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.createProjectCmd(signal);
    });
  }

  /** action updateProjectCmd (command) — route buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd; inputs: projectId, name, clientId, siteAddress, budget, startDate, endDate; writes updateProjectCmdOutput; status updateProjectCmdState; feedback keys action.updateProjectCmd.success / action.updateProjectCmd.error */
  async updateProjectCmd(signal?: AbortSignal): Promise<void> {
    const routeParams = this.parseRouteParams();
    if (routeParams['projectId']) {
      this.updateProjectCmdProjectId = routeParams['projectId'];
      setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId', routeParams['projectId']);
    }

    if (!this.updateProjectCmdProjectId) {
      this.updateProjectCmdState = 'idle';
      setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.status', 'idle');
      return;
    }

    this.updateProjectCmdState = 'loading';
    setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.status', 'loading');

    const params = {
      projectId: this.updateProjectCmdProjectId,
      name: this.updateProjectCmdName,
      clientId: this.updateProjectCmdClientId,
      siteAddress: this.updateProjectCmdSiteAddress,
      budget: this.updateProjectCmdBudget ? Number(this.updateProjectCmdBudget) : 0,
      startDate: this.updateProjectCmdStartDate,
      endDate: this.updateProjectCmdEndDate
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<UpdateProjectCmdOutput>(updateProjectCmdRoute, params, options);

    if (response.ok) {
      this.updateProjectCmdOutput = response.data ?? null;
      setState('ui.projectLifecycleWorkspace.output.updateProjectCmd', this.updateProjectCmdOutput);

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

      this.updateProjectCmdError = '';
      setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.error', '');
      this.updateProjectCmdState = 'success';
      setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.status', 'success');
    } else {
      const errorMsg = (response.error as { message?: string } | null)?.message ?? this.msg['action.updateProjectCmd.error'];
      this.updateProjectCmdError = errorMsg;
      setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.error', errorMsg);
      this.updateProjectCmdState = 'error';
      setState('ui.projectLifecycleWorkspace.action.updateProjectCmd.status', 'error');
    }
  }

  /** handler for action updateProjectCmd — bind UI events here */
  handleUpdateProjectCmdClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.updateProjectCmd(signal);
    });
  }

  /** action updateProjectStatusCmd (command) — route buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd; inputs: projectId, status, holdReason, cancellationReason; writes updateProjectStatusCmdOutput; status updateProjectStatusCmdState; feedback keys action.updateProjectStatusCmd.success / action.updateProjectStatusCmd.error */
  async updateProjectStatusCmd(signal?: AbortSignal): Promise<void> {
    const routeParams = this.parseRouteParams();
    if (routeParams['projectId']) {
      this.updateProjectStatusCmdProjectId = routeParams['projectId'];
      setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId', routeParams['projectId']);
    }

    if (!this.updateProjectStatusCmdProjectId) {
      this.updateProjectStatusCmdState = 'idle';
      setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status', 'idle');
      return;
    }

    this.updateProjectStatusCmdState = 'loading';
    setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status', 'loading');

    const params: Record<string, string> = {
      projectId: this.updateProjectStatusCmdProjectId,
      status: this.updateProjectStatusCmdStatus
    };
    if (this.updateProjectStatusCmdHoldReason) {
      params.holdReason = this.updateProjectStatusCmdHoldReason;
    }
    if (this.updateProjectStatusCmdCancellationReason) {
      params.cancellationReason = this.updateProjectStatusCmdCancellationReason;
    }

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<UpdateProjectStatusCmdOutput>(updateProjectStatusCmdRoute, params, options);

    if (response.ok) {
      this.updateProjectStatusCmdOutput = response.data ?? null;
      setState('ui.projectLifecycleWorkspace.output.updateProjectStatusCmd', this.updateProjectStatusCmdOutput);

      this.updateProjectStatusCmdStatus = '';
      setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status', '');
      this.updateProjectStatusCmdHoldReason = '';
      setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason', '');
      this.updateProjectStatusCmdCancellationReason = '';
      setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason', '');

      this.updateProjectStatusCmdError = '';
      setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error', '');
      this.updateProjectStatusCmdState = 'success';
      setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status', 'success');
    } else {
      const errorMsg = (response.error as { message?: string } | null)?.message ?? this.msg['action.updateProjectStatusCmd.error'];
      this.updateProjectStatusCmdError = errorMsg;
      setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.error', errorMsg);
      this.updateProjectStatusCmdState = 'error';
      setState('ui.projectLifecycleWorkspace.action.updateProjectStatusCmd.status', 'error');
    }
  }

  /** handler for action updateProjectStatusCmd — bind UI events here */
  handleUpdateProjectStatusCmdClick(): void {
    runBlockingUiAction(async (signal: AbortSignal): Promise<void> => {
      await this.updateProjectStatusCmd(signal);
    });
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.name */
  setCreateProjectCmdName(value: string): void {
    this.createProjectCmdName = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.name', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdName — bind UI events here */
  handleCreateProjectCmdNameChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateProjectCmdName(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.clientId */
  setCreateProjectCmdClientId(value: string): void {
    this.createProjectCmdClientId = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdClientId — bind UI events here */
  handleCreateProjectCmdClientIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateProjectCmdClientId(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress */
  setCreateProjectCmdSiteAddress(value: string): void {
    this.createProjectCmdSiteAddress = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.siteAddress', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdSiteAddress — bind UI events here */
  handleCreateProjectCmdSiteAddressChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateProjectCmdSiteAddress(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.budget */
  setCreateProjectCmdBudget(value: string): void {
    this.createProjectCmdBudget = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.budget', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdBudget — bind UI events here */
  handleCreateProjectCmdBudgetChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateProjectCmdBudget(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.startDate */
  setCreateProjectCmdStartDate(value: string): void {
    this.createProjectCmdStartDate = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.startDate', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdStartDate — bind UI events here */
  handleCreateProjectCmdStartDateChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateProjectCmdStartDate(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.createProjectCmd.endDate */
  setCreateProjectCmdEndDate(value: string): void {
    this.createProjectCmdEndDate = value;
    setState('ui.projectLifecycleWorkspace.input.createProjectCmd.endDate', value);
    this.requestUpdate();
  }

  /** handler for action set.createProjectCmdEndDate — bind UI events here */
  handleCreateProjectCmdEndDateChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateProjectCmdEndDate(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId */
  setUpdateProjectCmdProjectId(value: string): void {
    this.updateProjectCmdProjectId = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdProjectId — bind UI events here */
  handleUpdateProjectCmdProjectIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectCmdProjectId(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.name */
  setUpdateProjectCmdName(value: string): void {
    this.updateProjectCmdName = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.name', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdName — bind UI events here */
  handleUpdateProjectCmdNameChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectCmdName(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId */
  setUpdateProjectCmdClientId(value: string): void {
    this.updateProjectCmdClientId = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdClientId — bind UI events here */
  handleUpdateProjectCmdClientIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectCmdClientId(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress */
  setUpdateProjectCmdSiteAddress(value: string): void {
    this.updateProjectCmdSiteAddress = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.siteAddress', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdSiteAddress — bind UI events here */
  handleUpdateProjectCmdSiteAddressChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectCmdSiteAddress(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.budget */
  setUpdateProjectCmdBudget(value: string): void {
    this.updateProjectCmdBudget = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.budget', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdBudget — bind UI events here */
  handleUpdateProjectCmdBudgetChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectCmdBudget(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate */
  setUpdateProjectCmdStartDate(value: string): void {
    this.updateProjectCmdStartDate = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.startDate', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdStartDate — bind UI events here */
  handleUpdateProjectCmdStartDateChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectCmdStartDate(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate */
  setUpdateProjectCmdEndDate(value: string): void {
    this.updateProjectCmdEndDate = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.endDate', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectCmdEndDate — bind UI events here */
  handleUpdateProjectCmdEndDateChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectCmdEndDate(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId */
  setUpdateProjectStatusCmdProjectId(value: string): void {
    this.updateProjectStatusCmdProjectId = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectStatusCmdProjectId — bind UI events here */
  handleUpdateProjectStatusCmdProjectIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectStatusCmdProjectId(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status */
  setUpdateProjectStatusCmdStatus(value: string): void {
    this.updateProjectStatusCmdStatus = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.status', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectStatusCmdStatus — bind UI events here */
  handleUpdateProjectStatusCmdStatusChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectStatusCmdStatus(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason */
  setUpdateProjectStatusCmdHoldReason(value: string): void {
    this.updateProjectStatusCmdHoldReason = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.holdReason', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectStatusCmdHoldReason — bind UI events here */
  handleUpdateProjectStatusCmdHoldReasonChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectStatusCmdHoldReason(value);
  }

  /** setter for state ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason */
  setUpdateProjectStatusCmdCancellationReason(value: string): void {
    this.updateProjectStatusCmdCancellationReason = value;
    setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.cancellationReason', value);
    this.requestUpdate();
  }

  /** handler for action set.updateProjectStatusCmdCancellationReason — bind UI events here */
  handleUpdateProjectStatusCmdCancellationReasonChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateProjectStatusCmdCancellationReason(value);
  }

  connectedCallback(): void {
    super.connectedCallback();
    const routeParams = this.parseRouteParams();
    if (routeParams['projectId']) {
      this.updateProjectCmdProjectId = routeParams['projectId'];
      setState('ui.projectLifecycleWorkspace.input.updateProjectCmd.projectId', routeParams['projectId']);
      this.updateProjectStatusCmdProjectId = routeParams['projectId'];
      setState('ui.projectLifecycleWorkspace.input.updateProjectStatusCmd.projectId', routeParams['projectId']);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}
