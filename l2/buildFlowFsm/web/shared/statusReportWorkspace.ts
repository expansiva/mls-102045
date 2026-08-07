/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/statusReportWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
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
  'section.statusReportWorkspace.generateSection.title': 'Generate Status Report',
  'organism.statusReportWorkspace.generateReport.title': 'Generate status report',
  'intent.statusReportWorkspace.generateReport.form.title': 'Generate status report',
  'intent.statusReportWorkspace.generateReport.form.action.generateReport': 'Generate status report',
  'intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label': 'Report Period Start',
  'intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label': 'Report Period End',
  'section.statusReportWorkspace.reviewAndShareSection.title': 'Review, Edit & Share Report',
  'organism.statusReportWorkspace.updateReportContent.title': 'Edit status report content',
  'intent.statusReportWorkspace.updateReportContent.form.title': 'Edit status report content',
  'intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent': 'Edit status report content',
  'intent.statusReportWorkspace.updateReportContent.form.field.summary.label': 'Summary',
  'intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label': 'Tasks Overview',
  'intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label': 'Time Logs Overview',
  'intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label': 'Materials Overview',
  'intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label': 'Delay Risk Assessment',
  'intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label': 'Pm Notes',
  'organism.statusReportWorkspace.updateReportStatus.title': 'Update status report status',
  'intent.statusReportWorkspace.updateReportStatus.form.title': 'Update status report status',
  'intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus': 'Update status report status',
  'intent.statusReportWorkspace.updateReportStatus.form.field.status.label': 'Status',
  'action.generateReport.success': 'Generate status report: OK',
  'action.generateReport.error': 'Generate status report: falhou',
  'action.updateReportContent.success': 'Edit status report content: OK',
  'action.updateReportContent.error': 'Edit status report content: falhou',
  'action.updateReportStatus.success': 'Update status report status: OK',
  'action.updateReportStatus.error': 'Update status report status: falhou',
  'section.statusReportWorkspace.sec-generate.title': 'Generate Report',
  'section.statusReportWorkspace.sec-review-edit.title': 'Review & Edit Report',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.statusReportWorkspace.generateSection.title': 'Generate Status Report',
  'organism.statusReportWorkspace.generateReport.title': 'Generate status report',
  'intent.statusReportWorkspace.generateReport.form.title': 'Generate status report',
  'intent.statusReportWorkspace.generateReport.form.action.generateReport': 'Generate status report',
  'intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label': 'Report Period Start',
  'intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label': 'Report Period End',
  'section.statusReportWorkspace.reviewAndShareSection.title': 'Review, Edit & Share Report',
  'organism.statusReportWorkspace.updateReportContent.title': 'Edit status report content',
  'intent.statusReportWorkspace.updateReportContent.form.title': 'Edit status report content',
  'intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent': 'Edit status report content',
  'intent.statusReportWorkspace.updateReportContent.form.field.summary.label': 'Summary',
  'intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label': 'Tasks Overview',
  'intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label': 'Time Logs Overview',
  'intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label': 'Materials Overview',
  'intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label': 'Delay Risk Assessment',
  'intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label': 'Pm Notes',
  'organism.statusReportWorkspace.updateReportStatus.title': 'Update status report status',
  'intent.statusReportWorkspace.updateReportStatus.form.title': 'Update status report status',
  'intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus': 'Update status report status',
  'intent.statusReportWorkspace.updateReportStatus.form.field.status.label': 'Status',
  'action.generateReport.success': 'Generate status report: OK',
  'action.generateReport.error': 'Generate status report: falhou',
  'action.updateReportContent.success': 'Edit status report content: OK',
  'action.updateReportContent.error': 'Edit status report content: falhou',
  'action.updateReportStatus.success': 'Update status report status: OK',
  'action.updateReportStatus.error': 'Update status report status: falhou',
  'section.statusReportWorkspace.sec-generate.title': 'Generate Report',
  'section.statusReportWorkspace.sec-review-edit.title': 'Review & Edit Report',
};
const message_es: MessageType = {
  'section.statusReportWorkspace.generateSection.title': 'Generate Status Report',
  'organism.statusReportWorkspace.generateReport.title': 'Generate status report',
  'intent.statusReportWorkspace.generateReport.form.title': 'Generate status report',
  'intent.statusReportWorkspace.generateReport.form.action.generateReport': 'Generate status report',
  'intent.statusReportWorkspace.generateReport.form.field.reportPeriodStart.label': 'Report Period Start',
  'intent.statusReportWorkspace.generateReport.form.field.reportPeriodEnd.label': 'Report Period End',
  'section.statusReportWorkspace.reviewAndShareSection.title': 'Review, Edit & Share Report',
  'organism.statusReportWorkspace.updateReportContent.title': 'Edit status report content',
  'intent.statusReportWorkspace.updateReportContent.form.title': 'Edit status report content',
  'intent.statusReportWorkspace.updateReportContent.form.action.updateReportContent': 'Edit status report content',
  'intent.statusReportWorkspace.updateReportContent.form.field.summary.label': 'Summary',
  'intent.statusReportWorkspace.updateReportContent.form.field.tasksOverview.label': 'Tasks Overview',
  'intent.statusReportWorkspace.updateReportContent.form.field.timeLogsOverview.label': 'Time Logs Overview',
  'intent.statusReportWorkspace.updateReportContent.form.field.materialsOverview.label': 'Materials Overview',
  'intent.statusReportWorkspace.updateReportContent.form.field.delayRiskAssessment.label': 'Delay Risk Assessment',
  'intent.statusReportWorkspace.updateReportContent.form.field.pmNotes.label': 'Pm Notes',
  'organism.statusReportWorkspace.updateReportStatus.title': 'Update status report status',
  'intent.statusReportWorkspace.updateReportStatus.form.title': 'Update status report status',
  'intent.statusReportWorkspace.updateReportStatus.form.action.updateReportStatus': 'Update status report status',
  'intent.statusReportWorkspace.updateReportStatus.form.field.status.label': 'Status',
  'action.generateReport.success': 'Generate status report: OK',
  'action.generateReport.error': 'Generate status report: falhou',
  'action.updateReportContent.success': 'Edit status report content: OK',
  'action.updateReportContent.error': 'Edit status report content: falhou',
  'action.updateReportStatus.success': 'Update status report status: OK',
  'action.updateReportStatus.error': 'Update status report status: falhou',
  'section.statusReportWorkspace.sec-generate.title': 'Generate Report',
  'section.statusReportWorkspace.sec-review-edit.title': 'Review & Edit Report',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.statusReportWorkspace.status',
  'ui.statusReportWorkspace.action.generateReport.status',
  'ui.statusReportWorkspace.input.generateReport.projectId',
  'ui.statusReportWorkspace.input.generateReport.reportPeriodStart',
  'ui.statusReportWorkspace.input.generateReport.reportPeriodEnd',
  'ui.statusReportWorkspace.output.generateReport',
  'ui.statusReportWorkspace.action.generateReport.error',
  'ui.statusReportWorkspace.action.updateReportContent.status',
  'ui.statusReportWorkspace.input.updateReportContent.statusReportId',
  'ui.statusReportWorkspace.input.updateReportContent.summary',
  'ui.statusReportWorkspace.input.updateReportContent.tasksOverview',
  'ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview',
  'ui.statusReportWorkspace.input.updateReportContent.materialsOverview',
  'ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment',
  'ui.statusReportWorkspace.input.updateReportContent.pmNotes',
  'ui.statusReportWorkspace.output.updateReportContent',
  'ui.statusReportWorkspace.action.updateReportContent.error',
  'ui.statusReportWorkspace.action.updateReportStatus.status',
  'ui.statusReportWorkspace.input.updateReportStatus.statusReportId',
  'ui.statusReportWorkspace.input.updateReportStatus.status',
  'ui.statusReportWorkspace.output.updateReportStatus',
  'ui.statusReportWorkspace.action.updateReportStatus.error',
];

export class BuildFlowFsmStatusReportWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state generateReportState — actionStatus, values: idle|loading|success|error */
  @property() generateReportState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state generateReportProjectId — input */
  @property() generateReportProjectId: string = '';
  /** state generateReportReportPeriodStart — input */
  @property() generateReportReportPeriodStart: string = '';
  /** state generateReportReportPeriodEnd — input */
  @property() generateReportReportPeriodEnd: string = '';
  /** state generateReportOutput — commandOutput */
  @property() generateReportOutput: GenerateReportOutput | null = null;
  /** state generateReportError — actionError */
  @property() generateReportError: string = '';
  /** state updateReportContentState — actionStatus, values: idle|loading|success|error */
  @property() updateReportContentState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state updateReportContentStatusReportId — input */
  @property() updateReportContentStatusReportId: string = '';
  /** state updateReportContentSummary — input */
  @property() updateReportContentSummary: string = '';
  /** state updateReportContentTasksOverview — input */
  @property() updateReportContentTasksOverview: string = '';
  /** state updateReportContentTimeLogsOverview — input */
  @property() updateReportContentTimeLogsOverview: string = '';
  /** state updateReportContentMaterialsOverview — input */
  @property() updateReportContentMaterialsOverview: string = '';
  /** state updateReportContentDelayRiskAssessment — input */
  @property() updateReportContentDelayRiskAssessment: string = '';
  /** state updateReportContentPmNotes — input */
  @property() updateReportContentPmNotes: string = '';
  /** state updateReportContentOutput — commandOutput */
  @property() updateReportContentOutput: UpdateReportContentOutput | null = null;
  /** state updateReportContentError — actionError */
  @property() updateReportContentError: string = '';
  /** state updateReportStatusState — actionStatus, values: idle|loading|success|error */
  @property() updateReportStatusState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state updateReportStatusStatusReportId — input */
  @property() updateReportStatusStatusReportId: string = '';
  /** state updateReportStatusStatus — input */
  @property() updateReportStatusStatus: string = '';
  /** state updateReportStatusOutput — commandOutput */
  @property() updateReportStatusOutput: UpdateReportStatusOutput | null = null;
  /** state updateReportStatusError — actionError */
  @property() updateReportStatusError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.statusReportWorkspace.status', '');
    this.initStateValue('ui.statusReportWorkspace.action.generateReport.status', 'idle');
    this.initStateValue('ui.statusReportWorkspace.input.generateReport.projectId', '');
    this.initStateValue('ui.statusReportWorkspace.input.generateReport.reportPeriodStart', '');
    this.initStateValue('ui.statusReportWorkspace.input.generateReport.reportPeriodEnd', '');
    this.initStateValue('ui.statusReportWorkspace.output.generateReport', null);
    this.initStateValue('ui.statusReportWorkspace.action.generateReport.error', '');
    this.initStateValue('ui.statusReportWorkspace.action.updateReportContent.status', 'idle');
    this.initStateValue('ui.statusReportWorkspace.input.updateReportContent.statusReportId', '');
    this.initStateValue('ui.statusReportWorkspace.input.updateReportContent.summary', '');
    this.initStateValue('ui.statusReportWorkspace.input.updateReportContent.tasksOverview', '');
    this.initStateValue('ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview', '');
    this.initStateValue('ui.statusReportWorkspace.input.updateReportContent.materialsOverview', '');
    this.initStateValue('ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment', '');
    this.initStateValue('ui.statusReportWorkspace.input.updateReportContent.pmNotes', '');
    this.initStateValue('ui.statusReportWorkspace.output.updateReportContent', null);
    this.initStateValue('ui.statusReportWorkspace.action.updateReportContent.error', '');
    this.initStateValue('ui.statusReportWorkspace.action.updateReportStatus.status', 'idle');
    this.initStateValue('ui.statusReportWorkspace.input.updateReportStatus.statusReportId', '');
    this.initStateValue('ui.statusReportWorkspace.input.updateReportStatus.status', '');
    this.initStateValue('ui.statusReportWorkspace.output.updateReportStatus', null);
    this.initStateValue('ui.statusReportWorkspace.action.updateReportStatus.error', '');
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
      case 'ui.statusReportWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.action.generateReport.status':
        this.generateReportState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.statusReportWorkspace.input.generateReport.projectId':
        this.generateReportProjectId = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.generateReport.reportPeriodStart':
        this.generateReportReportPeriodStart = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.generateReport.reportPeriodEnd':
        this.generateReportReportPeriodEnd = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.output.generateReport':
        this.generateReportOutput = (value as GenerateReportOutput | null) ?? null;
        break;
      case 'ui.statusReportWorkspace.action.generateReport.error':
        this.generateReportError = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.action.updateReportContent.status':
        this.updateReportContentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.statusReportId':
        this.updateReportContentStatusReportId = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.summary':
        this.updateReportContentSummary = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.tasksOverview':
        this.updateReportContentTasksOverview = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview':
        this.updateReportContentTimeLogsOverview = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.materialsOverview':
        this.updateReportContentMaterialsOverview = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment':
        this.updateReportContentDelayRiskAssessment = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.pmNotes':
        this.updateReportContentPmNotes = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.output.updateReportContent':
        this.updateReportContentOutput = (value as UpdateReportContentOutput | null) ?? null;
        break;
      case 'ui.statusReportWorkspace.action.updateReportContent.error':
        this.updateReportContentError = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.action.updateReportStatus.status':
        this.updateReportStatusState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.statusReportWorkspace.input.updateReportStatus.statusReportId':
        this.updateReportStatusStatusReportId = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportStatus.status':
        this.updateReportStatusStatus = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.output.updateReportStatus':
        this.updateReportStatusOutput = (value as UpdateReportStatusOutput | null) ?? null;
        break;
      case 'ui.statusReportWorkspace.action.updateReportStatus.error':
        this.updateReportStatusError = (value as string) ?? '';
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
      case 'ui.statusReportWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.action.generateReport.status':
        this.generateReportState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.statusReportWorkspace.input.generateReport.projectId':
        this.generateReportProjectId = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.generateReport.reportPeriodStart':
        this.generateReportReportPeriodStart = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.generateReport.reportPeriodEnd':
        this.generateReportReportPeriodEnd = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.output.generateReport':
        this.generateReportOutput = (value as GenerateReportOutput | null) ?? null;
        break;
      case 'ui.statusReportWorkspace.action.generateReport.error':
        this.generateReportError = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.action.updateReportContent.status':
        this.updateReportContentState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.statusReportId':
        this.updateReportContentStatusReportId = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.summary':
        this.updateReportContentSummary = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.tasksOverview':
        this.updateReportContentTasksOverview = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview':
        this.updateReportContentTimeLogsOverview = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.materialsOverview':
        this.updateReportContentMaterialsOverview = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment':
        this.updateReportContentDelayRiskAssessment = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportContent.pmNotes':
        this.updateReportContentPmNotes = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.output.updateReportContent':
        this.updateReportContentOutput = (value as UpdateReportContentOutput | null) ?? null;
        break;
      case 'ui.statusReportWorkspace.action.updateReportContent.error':
        this.updateReportContentError = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.action.updateReportStatus.status':
        this.updateReportStatusState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.statusReportWorkspace.input.updateReportStatus.statusReportId':
        this.updateReportStatusStatusReportId = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.input.updateReportStatus.status':
        this.updateReportStatusStatus = (value as string) ?? '';
        break;
      case 'ui.statusReportWorkspace.output.updateReportStatus':
        this.updateReportStatusOutput = (value as UpdateReportStatusOutput | null) ?? null;
        break;
      case 'ui.statusReportWorkspace.action.updateReportStatus.error':
        this.updateReportStatusError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/statusReportWorkspace(?:\/([^/]+))?\/?$/,
    );
    const rawStatusReportId: string = match && match[1] ? match[1] : '';
    let statusReportId: string = '';
    if (rawStatusReportId) {
      try {
        statusReportId = decodeURIComponent(rawStatusReportId);
      } catch {
        statusReportId = rawStatusReportId;
      }
    }
    if (statusReportId) {
      if (!this.updateReportContentStatusReportId) {
        this.updateReportContentStatusReportId = statusReportId;
        setState('ui.statusReportWorkspace.input.updateReportContent.statusReportId', statusReportId);
      }
      if (!this.updateReportStatusStatusReportId) {
        this.updateReportStatusStatusReportId = statusReportId;
        setState('ui.statusReportWorkspace.input.updateReportStatus.statusReportId', statusReportId);
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

  /** action generateReport (command) — route buildFlowFsm.statusReportWorkspace.generateReport; inputs: projectId, reportPeriodStart, reportPeriodEnd; writes ui.statusReportWorkspace.output.generateReport; status ui.statusReportWorkspace.action.generateReport.status; feedback keys action.generateReport.success / action.generateReport.error */
  async generateReport(): Promise<void> {
    this.syncRouteParams();
    if (!this.generateReportProjectId) {
      this.generateReportState = 'idle';
      setState('ui.statusReportWorkspace.action.generateReport.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.generateReportState = 'loading';
    setState('ui.statusReportWorkspace.action.generateReport.status', 'loading');
    this.generateReportError = '';
    setState('ui.statusReportWorkspace.action.generateReport.error', '');
    const params: GenerateReportInput = {
      projectId: this.generateReportProjectId,
      reportPeriodStart: this.generateReportReportPeriodStart,
      reportPeriodEnd: this.generateReportReportPeriodEnd,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<GenerateReportOutput>(generateReportRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.generateReport.error');
      this.generateReportError = errMsg;
      setState('ui.statusReportWorkspace.action.generateReport.error', errMsg);
      this.generateReportState = 'error';
      setState('ui.statusReportWorkspace.action.generateReport.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: GenerateReportOutput | null = response.data ?? null;
    this.generateReportOutput = data;
    setState('ui.statusReportWorkspace.output.generateReport', data);
    this.generateReportProjectId = '';
    setState('ui.statusReportWorkspace.input.generateReport.projectId', '');
    this.generateReportReportPeriodStart = '';
    setState('ui.statusReportWorkspace.input.generateReport.reportPeriodStart', '');
    this.generateReportReportPeriodEnd = '';
    setState('ui.statusReportWorkspace.input.generateReport.reportPeriodEnd', '');
    this.generateReportState = 'success';
    setState('ui.statusReportWorkspace.action.generateReport.status', 'success');
    this.requestUpdate();
  }

  /** handler for action generateReport — bind UI events here */
  handleGenerateReportClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.generateReport();
    });
  }

  /** action updateReportContent (command) — route buildFlowFsm.statusReportWorkspace.updateReportContent; inputs: statusReportId, summary, tasksOverview, timeLogsOverview, materialsOverview, delayRiskAssessment, pmNotes; writes ui.statusReportWorkspace.output.updateReportContent; status ui.statusReportWorkspace.action.updateReportContent.status; feedback keys action.updateReportContent.success / action.updateReportContent.error */
  async updateReportContent(): Promise<void> {
    this.syncRouteParams();
    if (!this.updateReportContentStatusReportId) {
      this.updateReportContentState = 'idle';
      setState('ui.statusReportWorkspace.action.updateReportContent.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.updateReportContentState = 'loading';
    setState('ui.statusReportWorkspace.action.updateReportContent.status', 'loading');
    this.updateReportContentError = '';
    setState('ui.statusReportWorkspace.action.updateReportContent.error', '');
    const params: UpdateReportContentInput = {
      statusReportId: this.updateReportContentStatusReportId,
      summary: this.updateReportContentSummary,
    };
    if (this.updateReportContentTasksOverview) {
      params.tasksOverview = this.updateReportContentTasksOverview;
    }
    if (this.updateReportContentTimeLogsOverview) {
      params.timeLogsOverview = this.updateReportContentTimeLogsOverview;
    }
    if (this.updateReportContentMaterialsOverview) {
      params.materialsOverview = this.updateReportContentMaterialsOverview;
    }
    if (this.updateReportContentDelayRiskAssessment) {
      params.delayRiskAssessment = this.updateReportContentDelayRiskAssessment;
    }
    if (this.updateReportContentPmNotes) {
      params.pmNotes = this.updateReportContentPmNotes;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<UpdateReportContentOutput>(updateReportContentRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.updateReportContent.error');
      this.updateReportContentError = errMsg;
      setState('ui.statusReportWorkspace.action.updateReportContent.error', errMsg);
      this.updateReportContentState = 'error';
      setState('ui.statusReportWorkspace.action.updateReportContent.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: UpdateReportContentOutput | null = response.data ?? null;
    this.updateReportContentOutput = data;
    setState('ui.statusReportWorkspace.output.updateReportContent', data);
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
    this.requestUpdate();
  }

  /** handler for action updateReportContent — bind UI events here */
  handleUpdateReportContentClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateReportContent();
    });
  }

  /** action updateReportStatus (command) — route buildFlowFsm.statusReportWorkspace.updateReportStatus; inputs: statusReportId, status; writes ui.statusReportWorkspace.output.updateReportStatus; status ui.statusReportWorkspace.action.updateReportStatus.status; feedback keys action.updateReportStatus.success / action.updateReportStatus.error */
  async updateReportStatus(): Promise<void> {
    this.syncRouteParams();
    if (!this.updateReportStatusStatusReportId) {
      this.updateReportStatusState = 'idle';
      setState('ui.statusReportWorkspace.action.updateReportStatus.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.updateReportStatusState = 'loading';
    setState('ui.statusReportWorkspace.action.updateReportStatus.status', 'loading');
    this.updateReportStatusError = '';
    setState('ui.statusReportWorkspace.action.updateReportStatus.error', '');
    const params: UpdateReportStatusInput = {
      statusReportId: this.updateReportStatusStatusReportId,
      status: this.updateReportStatusStatus,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<UpdateReportStatusOutput>(updateReportStatusRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.updateReportStatus.error');
      this.updateReportStatusError = errMsg;
      setState('ui.statusReportWorkspace.action.updateReportStatus.error', errMsg);
      this.updateReportStatusState = 'error';
      setState('ui.statusReportWorkspace.action.updateReportStatus.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: UpdateReportStatusOutput | null = response.data ?? null;
    this.updateReportStatusOutput = data;
    setState('ui.statusReportWorkspace.output.updateReportStatus', data);
    this.updateReportStatusStatus = '';
    setState('ui.statusReportWorkspace.input.updateReportStatus.status', '');
    this.updateReportStatusState = 'success';
    setState('ui.statusReportWorkspace.action.updateReportStatus.status', 'success');
    this.requestUpdate();
  }

  /** handler for action updateReportStatus — bind UI events here */
  handleUpdateReportStatusClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateReportStatus();
    });
  }

  /** setter for state ui.statusReportWorkspace.input.generateReport.projectId */
  setGenerateReportProjectId(value: string): void {
    this.generateReportProjectId = value;
    setState('ui.statusReportWorkspace.input.generateReport.projectId', value);
    this.requestUpdate();
  }

  /** handler for action set.generateReportProjectId — bind UI events here */
  handleGenerateReportProjectIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGenerateReportProjectId(value);
  }

  /** setter for state ui.statusReportWorkspace.input.generateReport.reportPeriodStart */
  setGenerateReportReportPeriodStart(value: string): void {
    this.generateReportReportPeriodStart = value;
    setState('ui.statusReportWorkspace.input.generateReport.reportPeriodStart', value);
    this.requestUpdate();
  }

  /** handler for action set.generateReportReportPeriodStart — bind UI events here */
  handleGenerateReportReportPeriodStartChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGenerateReportReportPeriodStart(value);
  }

  /** setter for state ui.statusReportWorkspace.input.generateReport.reportPeriodEnd */
  setGenerateReportReportPeriodEnd(value: string): void {
    this.generateReportReportPeriodEnd = value;
    setState('ui.statusReportWorkspace.input.generateReport.reportPeriodEnd', value);
    this.requestUpdate();
  }

  /** handler for action set.generateReportReportPeriodEnd — bind UI events here */
  handleGenerateReportReportPeriodEndChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setGenerateReportReportPeriodEnd(value);
  }

  /** setter for state ui.statusReportWorkspace.input.updateReportContent.statusReportId */
  setUpdateReportContentStatusReportId(value: string): void {
    this.updateReportContentStatusReportId = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.statusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentStatusReportId — bind UI events here */
  handleUpdateReportContentStatusReportIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateReportContentStatusReportId(value);
  }

  /** setter for state ui.statusReportWorkspace.input.updateReportContent.summary */
  setUpdateReportContentSummary(value: string): void {
    this.updateReportContentSummary = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.summary', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentSummary — bind UI events here */
  handleUpdateReportContentSummaryChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateReportContentSummary(value);
  }

  /** setter for state ui.statusReportWorkspace.input.updateReportContent.tasksOverview */
  setUpdateReportContentTasksOverview(value: string): void {
    this.updateReportContentTasksOverview = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.tasksOverview', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentTasksOverview — bind UI events here */
  handleUpdateReportContentTasksOverviewChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateReportContentTasksOverview(value);
  }

  /** setter for state ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview */
  setUpdateReportContentTimeLogsOverview(value: string): void {
    this.updateReportContentTimeLogsOverview = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.timeLogsOverview', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentTimeLogsOverview — bind UI events here */
  handleUpdateReportContentTimeLogsOverviewChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateReportContentTimeLogsOverview(value);
  }

  /** setter for state ui.statusReportWorkspace.input.updateReportContent.materialsOverview */
  setUpdateReportContentMaterialsOverview(value: string): void {
    this.updateReportContentMaterialsOverview = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.materialsOverview', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentMaterialsOverview — bind UI events here */
  handleUpdateReportContentMaterialsOverviewChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateReportContentMaterialsOverview(value);
  }

  /** setter for state ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment */
  setUpdateReportContentDelayRiskAssessment(value: string): void {
    this.updateReportContentDelayRiskAssessment = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.delayRiskAssessment', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentDelayRiskAssessment — bind UI events here */
  handleUpdateReportContentDelayRiskAssessmentChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateReportContentDelayRiskAssessment(value);
  }

  /** setter for state ui.statusReportWorkspace.input.updateReportContent.pmNotes */
  setUpdateReportContentPmNotes(value: string): void {
    this.updateReportContentPmNotes = value;
    setState('ui.statusReportWorkspace.input.updateReportContent.pmNotes', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportContentPmNotes — bind UI events here */
  handleUpdateReportContentPmNotesChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateReportContentPmNotes(value);
  }

  /** setter for state ui.statusReportWorkspace.input.updateReportStatus.statusReportId */
  setUpdateReportStatusStatusReportId(value: string): void {
    this.updateReportStatusStatusReportId = value;
    setState('ui.statusReportWorkspace.input.updateReportStatus.statusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportStatusStatusReportId — bind UI events here */
  handleUpdateReportStatusStatusReportIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateReportStatusStatusReportId(value);
  }

  /** setter for state ui.statusReportWorkspace.input.updateReportStatus.status */
  setUpdateReportStatusStatus(value: string): void {
    this.updateReportStatusStatus = value;
    setState('ui.statusReportWorkspace.input.updateReportStatus.status', value);
    this.requestUpdate();
  }

  /** handler for action set.updateReportStatusStatus — bind UI events here */
  handleUpdateReportStatusStatusChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateReportStatusStatus(value);
  }
}
