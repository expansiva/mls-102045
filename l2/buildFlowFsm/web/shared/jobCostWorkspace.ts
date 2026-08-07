/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/jobCostWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import type {
  ViewJobCostSummaryInput,
  ViewJobCostSummaryOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/jobCostWorkspace.js';
import {
  viewJobCostSummaryRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/jobCostWorkspace.js';

export type {
  ViewJobCostSummaryInput,
  ViewJobCostSummaryOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/jobCostWorkspace.js';

/// **collab_i18n_start**
const message_en = {
  'section.jobCostWorkspace.sec-costSummary.title': 'Cost Summary',
  'organism.jobCostWorkspace.viewJobCostSummary.title': 'View job cost summary',
  'intent.jobCostWorkspace.viewJobCostSummary.list.title': 'View job cost summary',
  'intent.jobCostWorkspace.viewJobCostSummary.list.empty': 'Nenhum registro encontrado',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label': 'Project Id',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label': 'Name',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label': 'Client Id',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label': 'Client Name',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label': 'Budget',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label': 'Status',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label': 'Start Date',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label': 'End Date',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label': 'Labor Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label': 'Material Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label': 'Change Order Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label': 'Total Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label': 'Budget Variance',
  'section.jobCostWorkspace.sec-project-header.title': 'Project Identity',
  'section.jobCostWorkspace.sec-cost-summary.title': 'Budget & Cost Summary',
  'section.jobCostWorkspace.sec-cost-kpis.title': 'Budget vs Actual',
  'section.jobCostWorkspace.sec-cost-breakdown.title': 'Cost Breakdown',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.jobCostWorkspace.sec-costSummary.title': 'Cost Summary',
  'organism.jobCostWorkspace.viewJobCostSummary.title': 'View job cost summary',
  'intent.jobCostWorkspace.viewJobCostSummary.list.title': 'View job cost summary',
  'intent.jobCostWorkspace.viewJobCostSummary.list.empty': 'Nenhum registro encontrado',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label': 'Project Id',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label': 'Name',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label': 'Client Id',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label': 'Client Name',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label': 'Budget',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label': 'Status',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label': 'Start Date',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label': 'End Date',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label': 'Labor Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label': 'Material Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label': 'Change Order Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label': 'Total Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label': 'Budget Variance',
  'section.jobCostWorkspace.sec-project-header.title': 'Project Identity',
  'section.jobCostWorkspace.sec-cost-summary.title': 'Budget & Cost Summary',
  'section.jobCostWorkspace.sec-cost-kpis.title': 'Budget vs Actual',
  'section.jobCostWorkspace.sec-cost-breakdown.title': 'Cost Breakdown',
};
const message_es: MessageType = {
  'section.jobCostWorkspace.sec-costSummary.title': 'Cost Summary',
  'organism.jobCostWorkspace.viewJobCostSummary.title': 'View job cost summary',
  'intent.jobCostWorkspace.viewJobCostSummary.list.title': 'View job cost summary',
  'intent.jobCostWorkspace.viewJobCostSummary.list.empty': 'Nenhum registro encontrado',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.projectId.label': 'Project Id',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.name.label': 'Name',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.clientId.label': 'Client Id',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.clientName.label': 'Client Name',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.budget.label': 'Budget',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.status.label': 'Status',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.startDate.label': 'Start Date',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.endDate.label': 'End Date',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.laborCost.label': 'Labor Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.materialCost.label': 'Material Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.changeOrderCost.label': 'Change Order Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.totalCost.label': 'Total Cost',
  'intent.jobCostWorkspace.viewJobCostSummary.list.column.budgetVariance.label': 'Budget Variance',
  'section.jobCostWorkspace.sec-project-header.title': 'Project Identity',
  'section.jobCostWorkspace.sec-cost-summary.title': 'Budget & Cost Summary',
  'section.jobCostWorkspace.sec-cost-kpis.title': 'Budget vs Actual',
  'section.jobCostWorkspace.sec-cost-breakdown.title': 'Cost Breakdown',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const SUBSCRIBED_STATE_KEYS: string[] = [
  'ui.jobCostWorkspace.status',
  'ui.jobCostWorkspace.action.viewJobCostSummary.status',
  'ui.jobCostWorkspace.input.viewJobCostSummary.projectId',
  'ui.jobCostWorkspace.data.viewJobCostSummary',
];

export class BuildFlowFsmJobCostWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state viewJobCostSummaryState — actionStatus, values: idle|loading|success|error */
  @property() viewJobCostSummaryState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state viewJobCostSummaryProjectId — input */
  @property() viewJobCostSummaryProjectId: string = '';
  /** state viewJobCostSummaryData — queryResult, outputShape: object */
  @property() viewJobCostSummaryData: ViewJobCostSummaryOutput | null = null;

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.jobCostWorkspace.status', '');
    this.initStateValue('ui.jobCostWorkspace.action.viewJobCostSummary.status', 'idle');
    this.initStateValue('ui.jobCostWorkspace.input.viewJobCostSummary.projectId', '');
    this.initStateValue('ui.jobCostWorkspace.data.viewJobCostSummary', null);
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
      case 'ui.jobCostWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.jobCostWorkspace.action.viewJobCostSummary.status':
        this.viewJobCostSummaryState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.jobCostWorkspace.input.viewJobCostSummary.projectId':
        this.viewJobCostSummaryProjectId = (value as string) ?? '';
        break;
      case 'ui.jobCostWorkspace.data.viewJobCostSummary':
        this.viewJobCostSummaryData = (value as ViewJobCostSummaryOutput | null) ?? null;
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
      case 'ui.jobCostWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.jobCostWorkspace.action.viewJobCostSummary.status':
        this.viewJobCostSummaryState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.jobCostWorkspace.input.viewJobCostSummary.projectId':
        this.viewJobCostSummaryProjectId = (value as string) ?? '';
        break;
      case 'ui.jobCostWorkspace.data.viewJobCostSummary':
        this.viewJobCostSummaryData = (value as ViewJobCostSummaryOutput | null) ?? null;
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
      /^\/buildFlowFsm\/jobCostWorkspace(?:\/([^/]+))?\/?$/,
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
      if (!this.viewJobCostSummaryProjectId) {
        this.viewJobCostSummaryProjectId = projectId;
        setState('ui.jobCostWorkspace.input.viewJobCostSummary.projectId', projectId);
      }
    }
  }

  /** action viewJobCostSummary (query) — route buildFlowFsm.jobCostWorkspace.viewJobCostSummary; inputs: projectId; writes ui.jobCostWorkspace.data.viewJobCostSummary; status ui.jobCostWorkspace.action.viewJobCostSummary.status */
  async loadViewJobCostSummary(): Promise<void> {
    this.syncRouteParams();
    if (!this.viewJobCostSummaryProjectId) {
      this.viewJobCostSummaryState = 'idle';
      setState('ui.jobCostWorkspace.action.viewJobCostSummary.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.viewJobCostSummaryState = 'loading';
    setState('ui.jobCostWorkspace.action.viewJobCostSummary.status', 'loading');
    const params: ViewJobCostSummaryInput = {
      projectId: this.viewJobCostSummaryProjectId,
    };
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ViewJobCostSummaryOutput>(viewJobCostSummaryRoute, params, options);
    if (response.ok) {
      const data = response.data ?? null;
      this.viewJobCostSummaryData = data;
      setState('ui.jobCostWorkspace.data.viewJobCostSummary', data);
      this.viewJobCostSummaryState = 'success';
      setState('ui.jobCostWorkspace.action.viewJobCostSummary.status', 'success');
    } else {
      this.viewJobCostSummaryState = 'error';
      setState('ui.jobCostWorkspace.action.viewJobCostSummary.status', 'error');
      if (response.error) {
        console.error('viewJobCostSummary failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action viewJobCostSummary — bind UI events here */
  handleViewJobCostSummaryClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
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
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setViewJobCostSummaryProjectId(value);
  }
}
