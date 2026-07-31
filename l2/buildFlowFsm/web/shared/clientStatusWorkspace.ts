/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/clientStatusWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';

import type { ViewStatusReportInput, ViewStatusReportOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/clientStatusWorkspace.js';
import { viewStatusReportRoute } from '/_102045_/l2/buildFlowFsm/web/contracts/clientStatusWorkspace.js';

export type { ViewStatusReportInput, ViewStatusReportOutput } from '/_102045_/l2/buildFlowFsm/web/contracts/clientStatusWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.clientStatusWorkspace.sec-status-report-detail.title": "statusReportDetail",
"organism.clientStatusWorkspace.viewStatusReport.title": "View status report",
"intent.clientStatusWorkspace.viewStatusReport.list.title": "View status report",
"intent.clientStatusWorkspace.viewStatusReport.list.empty": "Nenhum registro encontrado",
"intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label": "Status Report Id",
"intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label": "Project Id",
"intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label": "Project Name",
"intent.clientStatusWorkspace.viewStatusReport.list.column.status.label": "Status",
"intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label": "Report Period Start",
"intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label": "Report Period End",
"intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label": "Summary",
"intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label": "Tasks Overview",
"intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label": "Time Logs Overview",
"intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label": "Materials Overview",
"intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label": "Delay Risk Assessment",
"intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label": "Pm Notes",
"intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label": "Generated At",
"intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label": "Shared At",
"intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label": "Client Id",
"section.clientStatusWorkspace.sec-report-header.title": "Report Header",
"section.clientStatusWorkspace.sec-report-body.title": "Status Report Detail",
"section.clientStatusWorkspace.sec-report-meta.title": "Report Metadata"
};

const message_pt_br = {
"section.clientStatusWorkspace.sec-status-report-detail.title": "detalheDoRelatorioDeStatus",
"organism.clientStatusWorkspace.viewStatusReport.title": "Visualizar relatório de status",
"intent.clientStatusWorkspace.viewStatusReport.list.title": "Visualizar relatório de status",
"intent.clientStatusWorkspace.viewStatusReport.list.empty": "Nenhum registro encontrado",
"intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label": "ID do Relatório de Status",
"intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label": "ID do Projeto",
"intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label": "Nome do Projeto",
"intent.clientStatusWorkspace.viewStatusReport.list.column.status.label": "Status",
"intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label": "Início do Período do Relatório",
"intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label": "Fim do Período do Relatório",
"intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label": "Resumo",
"intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label": "Visão Geral das Tarefas",
"intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label": "Visão Geral dos Registros de Tempo",
"intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label": "Visão Geral dos Materiais",
"intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label": "Avaliação de Risco de Atraso",
"intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label": "Notas do Gerente de Projeto",
"intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label": "Gerado em",
"intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label": "Compartilhado em",
"intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label": "ID do Cliente",
"section.clientStatusWorkspace.sec-report-header.title": "Cabeçalho do Relatório",
"section.clientStatusWorkspace.sec-report-body.title": "Detalhe do Relatório de Status",
"section.clientStatusWorkspace.sec-report-meta.title": "Metadados do Relatório"
};

const message_es = {
"section.clientStatusWorkspace.sec-status-report-detail.title": "detalleDelInformeDeEstado",
"organism.clientStatusWorkspace.viewStatusReport.title": "Ver informe de estado",
"intent.clientStatusWorkspace.viewStatusReport.list.title": "Ver informe de estado",
"intent.clientStatusWorkspace.viewStatusReport.list.empty": "No se encontraron registros",
"intent.clientStatusWorkspace.viewStatusReport.list.column.statusReportId.label": "ID del Informe de Estado",
"intent.clientStatusWorkspace.viewStatusReport.list.column.projectId.label": "ID del Proyecto",
"intent.clientStatusWorkspace.viewStatusReport.list.column.projectName.label": "Nombre del Proyecto",
"intent.clientStatusWorkspace.viewStatusReport.list.column.status.label": "Estado",
"intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodStart.label": "Inicio del Período del Informe",
"intent.clientStatusWorkspace.viewStatusReport.list.column.reportPeriodEnd.label": "Fin del Período del Informe",
"intent.clientStatusWorkspace.viewStatusReport.list.column.summary.label": "Resumen",
"intent.clientStatusWorkspace.viewStatusReport.list.column.tasksOverview.label": "Resumen de Tareas",
"intent.clientStatusWorkspace.viewStatusReport.list.column.timeLogsOverview.label": "Resumen de Registros de Tiempo",
"intent.clientStatusWorkspace.viewStatusReport.list.column.materialsOverview.label": "Resumen de Materiales",
"intent.clientStatusWorkspace.viewStatusReport.list.column.delayRiskAssessment.label": "Evaluación de Riesgo de Retraso",
"intent.clientStatusWorkspace.viewStatusReport.list.column.pmNotes.label": "Notas del PM",
"intent.clientStatusWorkspace.viewStatusReport.list.column.generatedAt.label": "Generado en",
"intent.clientStatusWorkspace.viewStatusReport.list.column.sharedAt.label": "Compartido en",
"intent.clientStatusWorkspace.viewStatusReport.list.filter.clientId.label": "ID del Cliente",
"section.clientStatusWorkspace.sec-report-header.title": "Encabezado del Informe",
"section.clientStatusWorkspace.sec-report-body.title": "Detalle del Informe de Estado",
"section.clientStatusWorkspace.sec-report-meta.title": "Metadatos del Informe"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmClientStatusWorkspaceBase extends CollabLitElement {
  /** state ui.clientStatusWorkspace.status — pageStatus */
  @property({ type: String }) status: string = '';

  /** state ui.clientStatusWorkspace.action.viewStatusReport.status — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) viewStatusReportState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state ui.clientStatusWorkspace.input.viewStatusReport.statusReportId — input */
  @property({ type: String }) viewStatusReportStatusReportId: string = '';

  /** state ui.clientStatusWorkspace.input.viewStatusReport.clientId — input */
  @property({ type: String }) viewStatusReportClientId: string = '';

  /** state ui.clientStatusWorkspace.data.viewStatusReport — queryResult, outputShape: object */
  @property({ type: Object }) viewStatusReportData: ViewStatusReportOutput | null = null;

  private readonly stateKeys: string[] = [
    'ui.clientStatusWorkspace.status',
    'ui.clientStatusWorkspace.action.viewStatusReport.status',
    'ui.clientStatusWorkspace.input.viewStatusReport.statusReportId',
    'ui.clientStatusWorkspace.input.viewStatusReport.clientId',
    'ui.clientStatusWorkspace.data.viewStatusReport'
  ];

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  /** Lifecycle hook — initialises state from collabState, subscribes to shared state keys */
  override connectedCallback(): void {
    super.connectedCallback();
    this.status = (getState('ui.clientStatusWorkspace.status') as string) ?? '';
    this.viewStatusReportState = (getState('ui.clientStatusWorkspace.action.viewStatusReport.status') as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
    this.viewStatusReportStatusReportId = (getState('ui.clientStatusWorkspace.input.viewStatusReport.statusReportId') as string) ?? '';
    this.viewStatusReportClientId = (getState('ui.clientStatusWorkspace.input.viewStatusReport.clientId') as string) ?? '';
    this.viewStatusReportData = (getState('ui.clientStatusWorkspace.data.viewStatusReport') as ViewStatusReportOutput | null) ?? null;
    subscribe(this.stateKeys, this);
  }

  /** Lifecycle hook — unsubscribes from shared state keys before removal */
  override disconnectedCallback(): void {
    unsubscribe(this.stateKeys, this);
    super.disconnectedCallback();
  }

  /** collabState notify handler — assigns incoming state values to mapped properties and requests update */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.clientStatusWorkspace.status':
        this.status = value as string;
        break;
      case 'ui.clientStatusWorkspace.action.viewStatusReport.status':
        this.viewStatusReportState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.clientStatusWorkspace.input.viewStatusReport.statusReportId':
        this.viewStatusReportStatusReportId = value as string;
        break;
      case 'ui.clientStatusWorkspace.input.viewStatusReport.clientId':
        this.viewStatusReportClientId = value as string;
        break;
      case 'ui.clientStatusWorkspace.data.viewStatusReport':
        this.viewStatusReportData = value as ViewStatusReportOutput | null;
        break;
    }
    this.requestUpdate();
  }

  /** action viewStatusReport (query) — route buildFlowFsm.clientStatusWorkspace.viewStatusReport; inputs: statusReportId, clientId; writes ui.clientStatusWorkspace.data.viewStatusReport; status ui.clientStatusWorkspace.action.viewStatusReport.status */
  async loadViewStatusReport(): Promise<void> {
    const routeParams = this.parseRouteParams();
    if (routeParams['statusReportId']) {
      this.viewStatusReportStatusReportId = routeParams['statusReportId'];
      setState('ui.clientStatusWorkspace.input.viewStatusReport.statusReportId', routeParams['statusReportId']);
    }

    const stateClientId = getState('ui.clientStatusWorkspace.input.viewStatusReport.clientId') as string;
    if (stateClientId) {
      this.viewStatusReportClientId = stateClientId;
    }

    const statusReportId = this.viewStatusReportStatusReportId;
    const clientId = this.viewStatusReportClientId;

    if (!statusReportId) {
      this.viewStatusReportState = 'idle';
      setState('ui.clientStatusWorkspace.action.viewStatusReport.status', 'idle');
      this.requestUpdate();
      return;
    }

    this.viewStatusReportState = 'loading';
    setState('ui.clientStatusWorkspace.action.viewStatusReport.status', 'loading');
    this.requestUpdate();

    const params: ViewStatusReportInput = {
      statusReportId,
      clientId
    };

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ViewStatusReportOutput>(viewStatusReportRoute, params, options);

    if (response.ok) {
      const data = response.data ?? null;
      this.viewStatusReportData = data;
      setState('ui.clientStatusWorkspace.data.viewStatusReport', data);
      this.viewStatusReportState = 'success';
      setState('ui.clientStatusWorkspace.action.viewStatusReport.status', 'success');
    } else {
      this.viewStatusReportState = 'error';
      setState('ui.clientStatusWorkspace.action.viewStatusReport.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action viewStatusReport — bind UI events here */
  handleViewStatusReportClick(): void {
    this.loadViewStatusReport();
  }

  /** setter for state ui.clientStatusWorkspace.input.viewStatusReport.statusReportId */
  setViewStatusReportStatusReportId(value: string): void {
    this.viewStatusReportStatusReportId = value;
    setState('ui.clientStatusWorkspace.input.viewStatusReport.statusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.viewStatusReportStatusReportId — bind UI events here */
  handleViewStatusReportStatusReportIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setViewStatusReportStatusReportId(value);
  }

  /** setter for state ui.clientStatusWorkspace.input.viewStatusReport.clientId */
  setViewStatusReportClientId(value: string): void {
    this.viewStatusReportClientId = value;
    setState('ui.clientStatusWorkspace.input.viewStatusReport.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.viewStatusReportClientId — bind UI events here */
  handleViewStatusReportClientIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setViewStatusReportClientId(value);
  }

  private parseRouteParams(): Record<string, string> {
    const pattern = '/buildFlowFsm/clientStatusWorkspace/:statusReportId?';
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = window.location.pathname.split('/').filter(Boolean);
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const part = patternParts[i];
      if (part.startsWith(':')) {
        const optional = part.endsWith('?');
        const name = optional ? part.slice(1, -1) : part.slice(1);
        const value = pathParts[i] ? decodeURIComponent(pathParts[i]) : '';
        if (value) {
          params[name] = value;
        }
      }
    }
    return params;
  }
}
