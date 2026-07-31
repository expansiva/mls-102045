/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState } from '/_102029_/l2/collabState.js';

import type {
  GenerateReportInput,
  GenerateReportOutput,
  UpdateReportContentInput,
  UpdateReportContentOutput,
  UpdateReportStatusInput,
  UpdateReportStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/statusReportWorkspace.js';

import {
  generateReportRoute,
  updateReportContentRoute,
  updateReportStatusRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/statusReportWorkspace.js';

export type {
  GenerateReportInput,
  GenerateReportOutput,
  UpdateReportContentInput,
  UpdateReportContentOutput,
  UpdateReportStatusInput,
  UpdateReportStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/statusReportWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.statusReportWorkspace.sec-generate.title": "Generate Report",
"organism.statusReportWorkspace.generateReport.title": "Generate status report",
"intent.statusReportWorkspace.generateReport.form.title": "Generate status report",
"intent.statusReportWorkspace.generateReport.form.action.generateReport": "Generate status report",
"intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label": "Report Period Start",
"intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label": "Report Period End",
"section.statusReportWorkspace.sec-review-share.title": "Review & Share Report",
"organism.statusReportWorkspace.updateReportContent.title": "Edit status report content",
"intent.statusReportWorkspace.updateReportContent.form.title": "Edit status report content",
"intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent": "Edit status report content",
"intent.statusReportWorkspace.updateReportContent.form.field.summary.label": "Summary",
"intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label": "Tasks Overview",
"intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label": "Time Logs Overview",
"intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label": "Materials Overview",
"intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label": "Delay Risk Assessment",
"intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label": "Pm Notes",
"organism.statusReportWorkspace.updateReportStatus.title": "Update status report status",
"intent.statusReportWorkspace.updateReportStatus.form.title": "Update status report status",
"intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus": "Update status report status",
"intent.statusReportWorkspace.updateReportStatus.form.field.status.label": "Status"
};

const message_pt_br = {
"section.statusReportWorkspace.sec-generate.title": "Gerar Relatório",
"organism.statusReportWorkspace.generateReport.title": "Gerar relatório de status",
"intent.statusReportWorkspace.generateReport.form.title": "Gerar relatório de status",
"intent.statusReportWorkspace.generateReport.form.action.generateReport": "Gerar relatório de status",
"intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label": "Início do Período do Relatório",
"intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label": "Fim do Período do Relatório",
"section.statusReportWorkspace.sec-review-share.title": "Revisar e Compartilhar Relatório",
"organism.statusReportWorkspace.updateReportContent.title": "Editar conteúdo do relatório de status",
"intent.statusReportWorkspace.updateReportContent.form.title": "Editar conteúdo do relatório de status",
"intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent": "Editar conteúdo do relatório de status",
"intent.statusReportWorkspace.updateReportContent.form.field.summary.label": "Resumo",
"intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label": "Visão Geral das Tarefas",
"intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label": "Visão Geral dos Registros de Tempo",
"intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label": "Visão Geral dos Materiais",
"intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label": "Avaliação de Risco de Atraso",
"intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label": "Notas do Gerente de Projeto",
"organism.statusReportWorkspace.updateReportStatus.title": "Atualizar status do relatório",
"intent.statusReportWorkspace.updateReportStatus.form.title": "Atualizar status do relatório",
"intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus": "Atualizar status do relatório",
"intent.statusReportWorkspace.updateReportStatus.form.field.status.label": "Status"
};

const message_es = {
"section.statusReportWorkspace.sec-generate.title": "Generar Informe",
"organism.statusReportWorkspace.generateReport.title": "Generar informe de estado",
"intent.statusReportWorkspace.generateReport.form.title": "Generar informe de estado",
"intent.statusReportWorkspace.generateReport.form.action.generateReport": "Generar informe de estado",
"intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label": "Inicio del Período del Informe",
"intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label": "Fin del Período del Informe",
"section.statusReportWorkspace.sec-review-share.title": "Revisar y Compartir Informe",
"organism.statusReportWorkspace.updateReportContent.title": "Editar contenido del informe de estado",
"intent.statusReportWorkspace.updateReportContent.form.title": "Editar contenido del informe de estado",
"intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent": "Editar contenido del informe de estado",
"intent.statusReportWorkspace.updateReportContent.form.field.summary.label": "Resumen",
"intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label": "Resumen de Tareas",
"intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label": "Resumen de Registros de Tiempo",
"intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label": "Resumen de Materiales",
"intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label": "Evaluación de Riesgo de Retraso",
"intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label": "Notas del PM",
"organism.statusReportWorkspace.updateReportStatus.title": "Actualizar estado del informe",
"intent.statusReportWorkspace.updateReportStatus.form.title": "Actualizar estado del informe",
"intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus": "Actualizar estado del informe",
"intent.statusReportWorkspace.updateReportStatus.form.field.status.label": "Estado"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmStatusReportWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status = '';

  /** state generateReportState — actionStatus, values: idle|loading|success|error */
  @property() generateReportState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state generateReportProjectId — input, selection */
  @property() generateReportProjectId = '';

  /** state generateReportReportPeriodStart — input, form */
  @property() generateReportReportPeriodStart = '';

  /** state generateReportReportPeriodEnd — input, form */
  @property() generateReportReportPeriodEnd = '';

  /** state generateReportOutput — commandOutput, outputShape: object */
  @property() generateReportOutput: GenerateReportOutput | null = null;

  /** state generateReportError — actionError */
  @property() generateReportError = '';

  /** state updateReportContentState — actionStatus, values: idle|loading|success|error */
  @property() updateReportContentState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state updateReportContentStatusReportId — input, route */
  @property() updateReportContentStatusReportId = '';

  /** state updateReportContentSummary — input, form */
  @property() updateReportContentSummary = '';

  /** state updateReportContentTasksOverview — input, form */
  @property() updateReportContentTasksOverview = '';

  /** state updateReportContentTimeLogsOverview — input, form */
  @property() updateReportContentTimeLogsOverview = '';

  /** state updateReportContentMaterialsOverview — input, form */
  @property() updateReportContentMaterialsOverview = '';

  /** state updateReportContentDelayRiskAssessment — input, form */
  @property() updateReportContentDelayRiskAssessment = '';

  /** state updateReportContentPmNotes — input, form */
  @property() updateReportContentPmNotes = '';

  /** state updateReportContentOutput — commandOutput, outputShape: object */
  @property() updateReportContentOutput: UpdateReportContentOutput | null = null;

  /** state updateReportContentError — actionError */
  @property() updateReportContentError = '';

  /** state updateReportStatusState — actionStatus, values: idle|loading|success|error */
  @property() updateReportStatusState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state updateReportStatusStatusReportId — input, route */
  @property() updateReportStatusStatusReportId = '';

  /** state updateReportStatusStatus — input, form */
  @property() updateReportStatusStatus = '';

  /** state updateReportStatusOutput — commandOutput, outputShape: object */
  @property() updateReportStatusOutput: UpdateReportStatusOutput | null = null;

  /** state updateReportStatusError — actionError */
  @property() updateReportStatusError = '';

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  connectedCallback(): void {
    super.connectedCallback();
    const routeParams = this.parseRouteParams();
    const statusReportId = routeParams['statusReportId'] ?? '';
    if (statusReportId) {
      this.updateReportContentStatusReportId = statusReportId;
      setState('ui.statusReportWorkspace.input.updateReportContent.statusReportId', statusReportId);
      this.updateReportStatusStatusReportId = statusReportId;
      setState('ui.statusReportWorkspace.input.updateReportStatus.statusReportId', statusReportId);
    }
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
  }

  private parseRouteParams(): Record<string, string> {
    const pattern = '/buildFlowFsm/statusReportWorkspace/:statusReportId?';
    const patternParts = pattern.split('/');
    const pathParts = window.location.pathname.split('/');
    const params: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const pPart = patternParts[i];
      if (pPart.startsWith(':')) {
        const paramName = pPart.replace(/[:?]/g, '');
        const isOptional = pPart.endsWith('?');
        const rawValue = pathParts[i] ?? '';
        const value = rawValue ? decodeURIComponent(rawValue) : '';
        if (value || !isOptional) {
          params[paramName] = value;
        }
      }
    }
    return params;
  }

  /** action generateReport (command) — route buildFlowFsm.statusReportWorkspace.generateReport; inputs: projectId, reportPeriodStart, reportPeriodEnd; writes generateReportOutput; status generateReportState; feedback keys action.generateReport.success / action.generateReport.error */
  async generateReport(signal?: AbortSignal): Promise<void> {
    this.generateReportState = 'loading';
    setState('ui.statusReportWorkspace.action.generateReport.status', 'loading');
    this.requestUpdate();

    const params: GenerateReportInput = {
      projectId: this.generateReportProjectId,
      reportPeriodStart: this.generateReportReportPeriodStart,
      reportPeriodEnd: this.generateReportReportPeriodEnd,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<GenerateReportOutput>(generateReportRoute, params, options);

    if (response.ok) {
      this.generateReportOutput = response.data ?? null;
      setState('ui.statusReportWorkspace.output.generateReport', this.generateReportOutput);
      this.generateReportProjectId = '';
      setState('ui.statusReportWorkspace.input.generateReport.projectId', '');
      this.generateReportReportPeriodStart = '';
      setState('ui.statusReportWorkspace.input.generateReport.reportPeriodStart', '');
      this.generateReportReportPeriodEnd = '';
      setState('ui.statusReportWorkspace.input.generateReport.reportPeriodEnd', '');
      this.generateReportState = 'success';
      setState('ui.statusReportWorkspace.action.generateReport.status', 'success');
    } else {
      this.generateReportError = response.error?.message ?? '';
      setState('ui.statusReportWorkspace.action.generateReport.error', this.generateReportError);
      this.generateReportState = 'error';
      setState('ui.statusReportWorkspace.action.generateReport.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action generateReport — bind UI events here */
  handleGenerateReportClick(): void {
    runBlockingUiAction(async (signal: AbortSignal) => {
      await this.generateReport(signal);
    });
  }

  /** action updateReportContent (command) — route buildFlowFsm.statusReportWorkspace.updateReportContent; inputs: statusReportId, summary, tasksOverview, timeLogsOverview, materialsOverview, delayRiskAssessment, pmNotes; writes updateReportContentOutput; status updateReportContentState; feedback keys action.updateReportContent.success / action.updateReportContent.error */
  async updateReportContent(signal?: AbortSignal): Promise<void> {
    const routeParams = this.parseRouteParams();
    const routeStatusReportId = routeParams['statusReportId'] ?? '';
    if (routeStatusReportId) {
      this.updateReportContentStatusReportId = routeStatusReportId;
      setState('ui.statusReportWorkspace.input.updateReportContent.statusReportId', routeStatusReportId);
    }
    const statusReportId = this.updateReportContentStatusReportId;
    if (!statusReportId) {
      this.updateReportContentState = 'idle';
      setState('ui.statusReportWorkspace.action.updateReportContent.status', 'idle');
      this.requestUpdate();
      return;
    }

    this.updateReportContentState = 'loading';
    setState('ui.statusReportWorkspace.action.updateReportContent.status', 'loading');
    this.requestUpdate();

    const params: UpdateReportContentInput = {
      statusReportId,
      summary: this.updateReportContentSummary,
      tasksOverview: this.updateReportContentTasksOverview,
      timeLogsOverview: this.updateReportContentTimeLogsOverview,
      materialsOverview: this.updateReportContentMaterialsOverview,
      delayRiskAssessment: this.updateReportContentDelayRiskAssessment,
      pmNotes: this.updateReportContentPmNotes,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<UpdateReportContentOutput>(updateReportContentRoute, params, options);

    if (response.ok) {
      this.updateReportContentOutput = response.data ?? null;
      setState('ui.statusReportWorkspace.output.updateReportContent', this.updateReportContentOutput);
      this.updateReportContentSummary = '';
      setState('ui.statusReportWorkspace.input.updateReportContent.summary', '');
      this.updateReportContentTasksOverview = '';
      setState('ui.statusReportWorkspace.input.updateReportContent.tasksOverview', '');
      this.updateReportContentTimeLogsOverview = '';
      setState('ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview', '');
      this.updateReportContentMaterialsOverview = '';
      setState('ui.statusReportWorkspace.input.updateReportContent.materialsOverview', '');
      this.updateReportContentDelayRiskAssessment = '';
      setState('ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment', '');
      this.updateReportContentPmNotes = '';
      setState('ui.statusReportWorkspace.input.updateReportContent.pmNotes', '');
      this.updateReportContentState = 'success';
      setState('ui.statusReportWorkspace.action.updateReportContent.status', 'success');
    } else {
      this.updateReportContentError = response.error?.message ?? '';
      setState('ui.statusReportWorkspace.action.updateReportContent.error', this.updateReportContentError);
      this.updateReportContentState = 'error';
      setState('ui.statusReportWorkspace.action.updateReportContent.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action updateReportContent — bind UI events here */
  handleUpdateReportContentClick(): void {
    runBlockingUiAction(async (signal: AbortSignal) => {
      await this.updateReportContent(signal);
    });
  }

  /** action updateReportStatus (command) — route buildFlowFsm.statusReportWorkspace.updateReportStatus; inputs: statusReportId, status; writes updateReportStatusOutput; status updateReportStatusState; feedback keys action.updateReportStatus.success / action.updateReportStatus.error */
  async updateReportStatus(signal?: AbortSignal): Promise<void> {
    const routeParams = this.parseRouteParams();
    const routeStatusReportId = routeParams['statusReportId'] ?? '';
    if (routeStatusReportId) {
      this.updateReportStatusStatusReportId = routeStatusReportId;
      setState('ui.statusReportWorkspace.input.updateReportStatus.statusReportId', routeStatusReportId);
    }
    const statusReportId = this.updateReportStatusStatusReportId;
    if (!statusReportId) {
      this.updateReportStatusState = 'idle';
      setState('ui.statusReportWorkspace.action.updateReportStatus.status', 'idle');
      this.requestUpdate();
      return;
    }

    this.updateReportStatusState = 'loading';
    setState('ui.statusReportWorkspace.action.updateReportStatus.status', 'loading');
    this.requestUpdate();

    const params: UpdateReportStatusInput = {
      statusReportId,
      status: this.updateReportStatusStatus,
    };

    const options: BffClientOptions = { mode: 'blocking' };
    if (signal) {
      options.signal = signal;
    }

    const response = await execBff<UpdateReportStatusOutput>(updateReportStatusRoute, params, options);

    if (response.ok) {
      this.updateReportStatusOutput = response.data ?? null;
      setState('ui.statusReportWorkspace.output.updateReportStatus', this.updateReportStatusOutput);
      this.updateReportStatusStatus = '';
      setState('ui.statusReportWorkspace.input.updateReportStatus.status', '');
      this.updateReportStatusState = 'success';
      setState('ui.statusReportWorkspace.action.updateReportStatus.status', 'success');
    } else {
      this.updateReportStatusError = response.error?.message ?? '';
      setState('ui.statusReportWorkspace.action.updateReportStatus.error', this.updateReportStatusError);
      this.updateReportStatusState = 'error';
      setState('ui.statusReportWorkspace.action.updateReportStatus.status', 'error');
    }
    this.requestUpdate();
  }

  /** handler for action updateReportStatus — bind UI events here */
  handleUpdateReportStatusClick(): void {
    runBlockingUiAction(async (signal: AbortSignal) => {
      await this.updateReportStatus(signal);
    });
  }

  /** setter for state generateReportProjectId */
  setGenerateReportProjectId(value: string): void {
    this.generateReportProjectId = value;
    setState('ui.statusReportWorkspace.input.generateReport.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.generateReportProjectId — bind UI events here */
  handleGenerateReportProjectIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGenerateReportProjectId(target.value);
  }

  /** setter for state generateReportReportPeriodStart */
  setGenerateReportReportPeriodStart(value: string): void {
    this.generateReportReportPeriodStart = value;
    setState('ui.statusReportWorkspace.input.generateReport.reportPeriodStart', value);
    this.requestUpdate();
  }

  /** handler for action set.generateReportReportPeriodStart — bind UI events here */
  handleGenerateReportReportPeriodStartChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGenerateReportReportPeriodStart(target.value);
  }

  /** setter for state generateReportReportPeriodEnd */
  setGenerateReportReportPeriodEnd(value: string): void {
    this.generateReportReportPeriodEnd = value;
    setState('ui.statusReportWorkspace.input.generateReport.reportPeriodEnd', value);
    this.requestUpdate();
  }

  /** handler for action set.generateReportReportPeriodEnd — bind UI events here */
  handleGenerateReportReportPeriodEndChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setGenerateReportReportPeriodEnd(target.value);
  }

  /** setter for state updateReportContentStatusReportId */
  setUpdateReportContentStatusReportId(value: string): void {
    this.updateReportContentStatusReportId = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.statusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentStatusReportId — bind UI events here */
  handleUpdateReportContentStatusReportIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateReportContentStatusReportId(target.value);
  }

  /** setter for state updateReportContentSummary */
  setUpdateReportContentSummary(value: string): void {
    this.updateReportContentSummary = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.summary', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentSummary — bind UI events here */
  handleUpdateReportContentSummaryChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateReportContentSummary(target.value);
  }

  /** setter for state updateReportContentTasksOverview */
  setUpdateReportContentTasksOverview(value: string): void {
    this.updateReportContentTasksOverview = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.tasksOverview', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentTasksOverview — bind UI events here */
  handleUpdateReportContentTasksOverviewChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateReportContentTasksOverview(target.value);
  }

  /** setter for state updateReportContentTimeLogsOverview */
  setUpdateReportContentTimeLogsOverview(value: string): void {
    this.updateReportContentTimeLogsOverview = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentTimeLogsOverview — bind UI events here */
  handleUpdateReportContentTimeLogsOverviewChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateReportContentTimeLogsOverview(target.value);
  }

  /** setter for state updateReportContentMaterialsOverview */
  setUpdateReportContentMaterialsOverview(value: string): void {
    this.updateReportContentMaterialsOverview = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.materialsOverview', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentMaterialsOverview — bind UI events here */
  handleUpdateReportContentMaterialsOverviewChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateReportContentMaterialsOverview(target.value);
  }

  /** setter for state updateReportContentDelayRiskAssessment */
  setUpdateReportContentDelayRiskAssessment(value: string): void {
    this.updateReportContentDelayRiskAssessment = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentDelayRiskAssessment — bind UI events here */
  handleUpdateReportContentDelayRiskAssessmentChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateReportContentDelayRiskAssessment(target.value);
  }

  /** setter for state updateReportContentPmNotes */
  setUpdateReportContentPmNotes(value: string): void {
    this.updateReportContentPmNotes = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.pmNotes', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentPmNotes — bind UI events here */
  handleUpdateReportContentPmNotesChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateReportContentPmNotes(target.value);
  }

  /** setter for state updateReportStatusStatusReportId */
  setUpdateReportStatusStatusReportId(value: string): void {
    this.updateReportStatusStatusReportId = value;
    setState('ui.statusReportWorkspace.input.updateReportStatus.statusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportStatusStatusReportId — bind UI events here */
  handleUpdateReportStatusStatusReportIdChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateReportStatusStatusReportId(target.value);
  }

  /** setter for state updateReportStatusStatus */
  setUpdateReportStatusStatus(value: string): void {
    this.updateReportStatusStatus = value;
    setState('ui.statusReportWorkspace.input.updateReportStatus.status', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportStatusStatus — bind UI events here */
  handleUpdateReportStatusStatusChange(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.setUpdateReportStatusStatus(target.value);
  }
}
