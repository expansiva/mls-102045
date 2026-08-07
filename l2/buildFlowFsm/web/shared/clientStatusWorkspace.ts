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
  "section.clientStatusWorkspace.sec-report-header.title": "Report Identity & Period",
  "section.clientStatusWorkspace.sec-report-summary.title": "Executive Summary",
  "section.clientStatusWorkspace.sec-report-overviews.title": "Progress Overviews",
  "section.clientStatusWorkspace.sec-risk-and-notes.title": "Risk & PM Notes",
  "section.clientStatusWorkspace.sec-report-body.title": "Status Report Detail"
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
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
  "section.clientStatusWorkspace.sec-report-header.title": "Report Identity & Period",
  "section.clientStatusWorkspace.sec-report-summary.title": "Executive Summary",
  "section.clientStatusWorkspace.sec-report-overviews.title": "Progress Overviews",
  "section.clientStatusWorkspace.sec-risk-and-notes.title": "Risk & PM Notes",
  "section.clientStatusWorkspace.sec-report-body.title": "Status Report Detail"
};
const message_es: MessageType = {
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
  "section.clientStatusWorkspace.sec-report-header.title": "Report Identity & Period",
  "section.clientStatusWorkspace.sec-report-summary.title": "Executive Summary",
  "section.clientStatusWorkspace.sec-report-overviews.title": "Progress Overviews",
  "section.clientStatusWorkspace.sec-risk-and-notes.title": "Risk & PM Notes",
  "section.clientStatusWorkspace.sec-report-body.title": "Status Report Detail"
};
export const messages: { [key: string]: MessageType } = {
  'en': message_en,
  'pt-br': message_pt_br,
  'es': message_es
};
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.clientStatusWorkspace.status',
  'ui.clientStatusWorkspace.action.viewStatusReport.status',
  'ui.clientStatusWorkspace.input.viewStatusReport.statusReportId',
  'ui.clientStatusWorkspace.input.viewStatusReport.clientId',
  'ui.clientStatusWorkspace.data.viewStatusReport'
];

export class BuildFlowFsmClientStatusWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state viewStatusReportState — actionStatus, values: idle|loading|success|error */
  @property() viewStatusReportState: "idle" | "loading" | "success" | "error" = 'idle';
  /** state viewStatusReportStatusReportId — input */
  @property() viewStatusReportStatusReportId: string = '';
  /** state viewStatusReportClientId — input */
  @property() viewStatusReportClientId: string = '';
  /** state viewStatusReportData — queryResult, outputShape: object */
  @property() viewStatusReportData: ViewStatusReportOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.status = (getState('ui.clientStatusWorkspace.status') as string | undefined) ?? '';
    this.viewStatusReportState = (getState('ui.clientStatusWorkspace.action.viewStatusReport.status') as "idle" | "loading" | "success" | "error" | undefined) ?? 'idle';
    this.viewStatusReportStatusReportId = (getState('ui.clientStatusWorkspace.input.viewStatusReport.statusReportId') as string | undefined) ?? '';
    this.viewStatusReportClientId = (getState('ui.clientStatusWorkspace.input.viewStatusReport.clientId') as string | undefined) ?? '';
    this.viewStatusReportData = (getState('ui.clientStatusWorkspace.data.viewStatusReport') as ViewStatusReportOutput | null | undefined) ?? null;
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    this.applyRouteParamsFromLocation();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.clientStatusWorkspace.status':
        this.status = (value as string | undefined) ?? '';
        break;
      case 'ui.clientStatusWorkspace.action.viewStatusReport.status':
        this.viewStatusReportState = (value as "idle" | "loading" | "success" | "error" | undefined) ?? 'idle';
        break;
      case 'ui.clientStatusWorkspace.input.viewStatusReport.statusReportId':
        this.viewStatusReportStatusReportId = (value as string | undefined) ?? '';
        break;
      case 'ui.clientStatusWorkspace.input.viewStatusReport.clientId':
        this.viewStatusReportClientId = (value as string | undefined) ?? '';
        break;
      case 'ui.clientStatusWorkspace.data.viewStatusReport':
        this.viewStatusReportData = (value as ViewStatusReportOutput | null | undefined) ?? null;
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  private applyRouteParamsFromLocation(): void {
    const patternParts = '/buildFlowFsm/clientStatusWorkspace/:statusReportId?'.split('/').filter(Boolean);
    const pathParts = (window.location.pathname || '').split('/').filter(Boolean);
    const params: { [key: string]: string } = {};
    for (let i = 0; i < patternParts.length; i++) {
      const part = patternParts[i];
      if (part.startsWith(':')) {
        const optional = part.endsWith('?');
        const name = optional ? part.slice(1, -1) : part.slice(1);
        const raw = pathParts[i];
        if (raw !== undefined && raw !== '') {
          try {
            params[name] = decodeURIComponent(raw);
          } catch {
            params[name] = raw;
          }
        }
      }
    }
    if (params['statusReportId'] !== undefined && params['statusReportId'] !== '') {
      this.viewStatusReportStatusReportId = params['statusReportId'];
      setState('ui.clientStatusWorkspace.input.viewStatusReport.statusReportId', this.viewStatusReportStatusReportId);
    }
  }

  /** action viewStatusReport (query) — route buildFlowFsm.clientStatusWorkspace.viewStatusReport; inputs: statusReportId, clientId; writes ui.clientStatusWorkspace.data.viewStatusReport; status ui.clientStatusWorkspace.action.viewStatusReport.status */
  async loadViewStatusReport(): Promise<void> {
    this.applyRouteParamsFromLocation();
    if (!this.viewStatusReportStatusReportId) {
      this.viewStatusReportState = 'idle';
      setState('ui.clientStatusWorkspace.action.viewStatusReport.status', 'idle');
      this.viewStatusReportData = null;
      setState('ui.clientStatusWorkspace.data.viewStatusReport', null);
      return;
    }
    this.viewStatusReportState = 'loading';
    setState('ui.clientStatusWorkspace.action.viewStatusReport.status', 'loading');
    const params: ViewStatusReportInput = {
      statusReportId: this.viewStatusReportStatusReportId,
      clientId: this.viewStatusReportClientId
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
      if (response.error) {
        console.error('viewStatusReport failed', response.error);
      }
      this.viewStatusReportState = 'error';
      setState('ui.clientStatusWorkspace.action.viewStatusReport.status', 'error');
    }
  }

  /** handler for action viewStatusReport — bind UI events here */
  handleViewStatusReportClick(_event?: Event): void {
    void this.loadViewStatusReport();
  }

  /** setter for state ui.clientStatusWorkspace.input.viewStatusReport.statusReportId */
  setViewStatusReportStatusReportId(value: string): void {
    this.viewStatusReportStatusReportId = value;
    setState('ui.clientStatusWorkspace.input.viewStatusReport.statusReportId', value);
    this.requestUpdate();
  }

  /** handler for action set.viewStatusReportStatusReportId — bind UI events here */
  handleViewStatusReportStatusReportIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setViewStatusReportStatusReportId(value);
  }

  /** setter for state ui.clientStatusWorkspace.input.viewStatusReport.clientId */
  setViewStatusReportClientId(value: string): void {
    this.viewStatusReportClientId = value;
    setState('ui.clientStatusWorkspace.input.viewStatusReport.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.viewStatusReportClientId — bind UI events here */
  handleViewStatusReportClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value = target?.value ?? '';
    this.setViewStatusReportClientId(value);
  }
}
