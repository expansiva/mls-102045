/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState } from '/_102029_/l2/collabState.js';

import type { ViewJobCostSummaryInput, ViewJobCostSummaryOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/jobCostWorkspace.js';
import { viewJobCostSummaryRoute } from '/_102045_/l2/buildFlowFsm/web/contracts/jobCostWorkspace.js';

export type { ViewJobCostSummaryInput, ViewJobCostSummaryOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/jobCostWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.jobCostWorkspace.sec-costSummary.title": "Cost Summary",
"organism.jobCostWorkspace.viewJobCostSummary.title": "View job cost summary",
"intent.jobCostWorkspace.viewJobCostSummary.list.title": "View job cost summary",
"intent.jobCostWorkspace.viewJobCostSummary.list.empty": "Nenhum registro encontrado",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label": "Project Id",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label": "Name",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label": "Client Id",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label": "Client Name",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label": "Budget",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label": "Status",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label": "Start Date",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label": "End Date",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label": "Labor Cost",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label": "Material Cost",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label": "Change Order Cost",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label": "Total Cost",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label": "Budget Variance",
"section.jobCostWorkspace.sec-cost-summary.title": "Job Cost Summary"
};

const message_pt_br = {
"section.jobCostWorkspace.sec-costSummary.title": "Resumo de Custos",
"organism.jobCostWorkspace.viewJobCostSummary.title": "Visualizar resumo de custos do trabalho",
"intent.jobCostWorkspace.viewJobCostSummary.list.title": "Visualizar resumo de custos do trabalho",
"intent.jobCostWorkspace.viewJobCostSummary.list.empty": "Nenhum registro encontrado",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label": "ID do Projeto",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label": "Nome",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label": "ID do Cliente",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label": "Nome do Cliente",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label": "Orçamento",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label": "Status",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label": "Data de Início",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label": "Data de Término",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label": "Custo de Mão de Obra",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label": "Custo de Material",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label": "Custo de Ordem de Mudança",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label": "Custo Total",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label": "Variação do Orçamento",
"section.jobCostWorkspace.sec-cost-summary.title": "Resumo de Custos do Trabalho"
};

const message_es = {
"section.jobCostWorkspace.sec-costSummary.title": "Resumen de Costos",
"organism.jobCostWorkspace.viewJobCostSummary.title": "Ver resumen de costos del trabajo",
"intent.jobCostWorkspace.viewJobCostSummary.list.title": "Ver resumen de costos del trabajo",
"intent.jobCostWorkspace.viewJobCostSummary.list.empty": "No se encontraron registros",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label": "ID del Proyecto",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label": "Nombre",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label": "ID del Cliente",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label": "Nombre del Cliente",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label": "Presupuesto",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label": "Estado",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label": "Fecha de Inicio",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label": "Fecha de Fin",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label": "Costo de Mano de Obra",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label": "Costo de Material",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label": "Costo de Orden de Cambio",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label": "Costo Total",
"intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label": "Variación del Presupuesto",
"section.jobCostWorkspace.sec-cost-summary.title": "Resumen de Costos del Trabajo"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmJobCostWorkspaceBase extends CollabLitElement {
  /** state ui.jobCostWorkspace.status — pageStatus */
  @property({ type: String }) status: string = '';

  /** state ui.jobCostWorkspace.action.viewJobCostSummary.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) viewJobCostSummaryState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.jobCostWorkspace.input.viewJobCostSummary.projectId — input (route) */
  @property({ type: String }) viewJobCostSummaryProjectId: string = '';

  /** state ui.jobCostWorkspace.data.viewJobCostSummary — queryResult, outputShape: object */
  @property({ type: Object }) viewJobCostSummaryData: ViewJobCostSummaryOutput | null = null;

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  /**
   * Parse route params from the current URL and populate mapped state properties.
   * Returns true when all required route params are present.
   */
  private parseRouteParams(): boolean {
    const pattern = '/buildFlowFsm/jobCostWorkspace/:projectId?';
    const path = window.location.pathname;
    const patternParts = pattern.split('/').filter((p: string) => p.length > 0);
    const pathParts = path.split('/').filter((p: string) => p.length > 0);

    let paramIndex = 0;
    for (let i = 0; i < patternParts.length && i < pathParts.length; i++) {
      const part = patternParts[i];
      if (part.startsWith(':')) {
        const isOptional = part.endsWith('?');
        const rawName = isOptional ? part.slice(1, -1) : part.slice(1);
        const value = decodeURIComponent(pathParts[i]);
        if (rawName === 'projectId') {
          if (value && value.length > 0) {
            this.viewJobCostSummaryProjectId = value;
            setState('ui.jobCostWorkspace.input.viewJobCostSummary.projectId', value);
          }
        }
        paramIndex++;
      }
    }
    return true;
  }

  /** action viewJobCostSummary (query) — route buildFlowFsm.jobCostWorkspace.viewJobCostSummary; inputs: projectId; writes ui.jobCostWorkspace.data.viewJobCostSummary; status ui.jobCostWorkspace.action.viewJobCostSummary.status */
  async loadViewJobCostSummary(): Promise<void> {
    this.parseRouteParams();

    const projectId: string = this.viewJobCostSummaryProjectId;
    if (!projectId || projectId.length === 0) {
      this.viewJobCostSummaryState = 'idle';
      this.viewJobCostSummaryData = null;
      setState('ui.jobCostWorkspace.action.viewJobCostSummary.status', 'idle');
      setState('ui.jobCostWorkspace.data.viewJobCostSummary', null);
      this.requestUpdate();
      return;
    }

    this.viewJobCostSummaryState = 'loading';
    setState('ui.jobCostWorkspace.action.viewJobCostSummary.status', 'loading');
    this.requestUpdate();

    const params: ViewJobCostSummaryInput = { projectId };
    const options: BffClientOptions = { mode: 'silent' };

    const response = await execBff<ViewJobCostSummaryOutput>(viewJobCostSummaryRoute, params, options);

    if (response.ok) {
      const data: ViewJobCostSummaryOutput | null = response.data ?? null;
      this.viewJobCostSummaryData = data;
      setState('ui.jobCostWorkspace.data.viewJobCostSummary', data);
      this.viewJobCostSummaryState = 'success';
      setState('ui.jobCostWorkspace.action.viewJobCostSummary.status', 'success');
    } else {
      this.viewJobCostSummaryData = null;
      setState('ui.jobCostWorkspace.data.viewJobCostSummary', null);
      this.viewJobCostSummaryState = 'error';
      setState('ui.jobCostWorkspace.action.viewJobCostSummary.status', 'error');
      if (response.error) {
        console.error('viewJobCostSummary failed:', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action viewJobCostSummary — bind UI events here */
  handleViewJobCostSummaryClick(_event: Event): void {
    void this.loadViewJobCostSummary();
  }

  /** setter for state ui.jobCostWorkspace.input.viewJobCostSummary.projectId */
  setViewJobCostSummaryProjectId(value: string): void {
    this.viewJobCostSummaryProjectId = value;
    setState('ui.jobCostWorkspace.input.viewJobCostSummary.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.viewJobCostSummaryProjectId — bind UI events here */
  handleViewJobCostSummaryProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | null;
    if (!target) return;
    const value: string = target.value;
    this.setViewJobCostSummaryProjectId(value);
  }

  override connectedCallback(): void {
    super.connectedCallback();

    const storedProjectId = getState('ui.jobCostWorkspace.input.viewJobCostSummary.projectId') as string | undefined;
    if (storedProjectId !== undefined && storedProjectId !== null) {
      this.viewJobCostSummaryProjectId = storedProjectId;
    }

    const storedStatus = getState('ui.jobCostWorkspace.status') as string | undefined;
    if (storedStatus !== undefined && storedStatus !== null) {
      this.status = storedStatus;
    }

    const storedActionStatus = getState('ui.jobCostWorkspace.action.viewJobCostSummary.status') as string | undefined;
    if (storedActionStatus !== undefined && storedActionStatus !== null) {
      this.viewJobCostSummaryState = storedActionStatus as 'idle' | 'loading' | 'success' | 'error';
    }

    const storedData = getState('ui.jobCostWorkspace.data.viewJobCostSummary') as ViewJobCostSummaryOutput | null | undefined;
    if (storedData !== undefined && storedData !== null) {
      this.viewJobCostSummaryData = storedData;
    }
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
  }
}
