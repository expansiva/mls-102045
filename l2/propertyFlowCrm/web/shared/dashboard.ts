/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/dashboard.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import type { AuraNormalizedError } from '/_102029_/l2/contracts/bootstrap.js';
import type { BffClientOptions } from '/_102029_/l2/bffClient.js';
import { execBff } from '/_102029_/l2/bffClient.js';
import {
  bindExpectedNavigationLoad,
  consumeExpectedNavigationLoad,
  runBlockingUiAction,
} from '/_102029_/l2/interactionRuntime.js';
import { subscribe, unsubscribe, getState, setState } from '/_102029_/l2/collabState.js';
import type {
  DashboardVisualizarDashboardInput,
  DashboardVisualizarDashboardOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/dashboard.js';

/// **collab_i18n_start**
const message_pt = {
  brand: 'Property Flow Crm',
  pageTitle: 'Dashboard',
  loaded: 'Dados carregados',
  couldNotLoad: 'Nao foi possivel carregar',
  loadingVisualizarDashboard: 'Carregando métricas do dashboard',
};
const message_en = {
  brand: 'Property Flow Crm',
  pageTitle: 'Dashboard',
  loaded: 'Data loaded',
  couldNotLoad: 'Could not load',
  loadingVisualizarDashboard: 'Loading dashboard metrics',
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class DashboardDashboardBase extends CollabLitElement {
  private readonly _stateKeys = [
    'ui.dashboard.totalProperties',
    'ui.dashboard.activeProperties',
    'ui.dashboard.leadsThisMonth',
    'ui.dashboard.qualifiedLeads',
    'ui.dashboard.dealCount',
    'ui.dashboard.dealValue',
    'ui.dashboard.avgDealValue',
    'ui.dashboard.activityCount',
    'ui.dashboard.propertyStatusSeries',
    'ui.dashboard.leadStageSeries',
    'ui.dashboard.dealStageSeries',
    'ui.dashboard.brokerActivitySeries',
    'ui.dashboard.lastUpdatedAt',
  ] as const;

  @property() totalProperties: DashboardVisualizarDashboardOutput['totalProperties'] | undefined = undefined;

  @property() activeProperties: DashboardVisualizarDashboardOutput['activeProperties'] | undefined = undefined;

  @property() leadsThisMonth: DashboardVisualizarDashboardOutput['leadsThisMonth'] | undefined = undefined;

  @property() qualifiedLeads: DashboardVisualizarDashboardOutput['qualifiedLeads'] | undefined = undefined;

  @property() dealCount: DashboardVisualizarDashboardOutput['dealCount'] | undefined = undefined;

  @property() dealValue: DashboardVisualizarDashboardOutput['dealValue'] | undefined = undefined;

  @property() avgDealValue: DashboardVisualizarDashboardOutput['avgDealValue'] | undefined = undefined;

  @property() activityCount: DashboardVisualizarDashboardOutput['activityCount'] | undefined = undefined;

  @property() propertyStatusSeries: DashboardVisualizarDashboardOutput['propertyStatusSeries'] | undefined = undefined;

  @property() leadStageSeries: DashboardVisualizarDashboardOutput['leadStageSeries'] | undefined = undefined;

  @property() dealStageSeries: DashboardVisualizarDashboardOutput['dealStageSeries'] | undefined = undefined;

  @property() brokerActivitySeries: DashboardVisualizarDashboardOutput['brokerActivitySeries'] | undefined = undefined;

  @property() lastUpdatedAt: DashboardVisualizarDashboardOutput['lastUpdatedAt'] | undefined = undefined;

  @property() status: string = '';

  protected msg: MessageType = messages['en'];

  createRenderRoot() {
    return this;
  }

  connectedCallback() {
    super.connectedCallback();
    const pendingLoad = consumeExpectedNavigationLoad();
    const task = this.loadInitialData(undefined, { mode: 'silent', signal: pendingLoad?.signal });
    bindExpectedNavigationLoad(pendingLoad, task);
    void task.catch(() => undefined);
    const lang: string = this.getMessageKey(messages);
    this.msg = messages[lang] || messages['en'];
    subscribe(this._stateKeys as unknown as string[], this);
    (this._stateKeys as unknown as string[]).forEach(key => {
      const v = getState(key);
      if (v !== undefined) this.handleIcaStateChange(key, v);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unsubscribe(this._stateKeys as unknown as string[], this);
  }

  handleIcaStateChange(key: string, value: any): void {
    switch (key) {
      case 'ui.dashboard.totalProperties':
        this.totalProperties = typeof value === 'number' ? value : undefined;
        break;
      case 'ui.dashboard.activeProperties':
        this.activeProperties = typeof value === 'number' ? value : undefined;
        break;
      case 'ui.dashboard.leadsThisMonth':
        this.leadsThisMonth = typeof value === 'number' ? value : undefined;
        break;
      case 'ui.dashboard.qualifiedLeads':
        this.qualifiedLeads = typeof value === 'number' ? value : undefined;
        break;
      case 'ui.dashboard.dealCount':
        this.dealCount = typeof value === 'number' ? value : undefined;
        break;
      case 'ui.dashboard.dealValue':
        this.dealValue = typeof value === 'number' ? value : undefined;
        break;
      case 'ui.dashboard.avgDealValue':
        this.avgDealValue = typeof value === 'number' ? value : undefined;
        break;
      case 'ui.dashboard.activityCount':
        this.activityCount = typeof value === 'number' ? value : undefined;
        break;
      case 'ui.dashboard.propertyStatusSeries':
        this.propertyStatusSeries = typeof value === 'string' ? value : undefined;
        break;
      case 'ui.dashboard.leadStageSeries':
        this.leadStageSeries = typeof value === 'string' ? value : undefined;
        break;
      case 'ui.dashboard.dealStageSeries':
        this.dealStageSeries = typeof value === 'string' ? value : undefined;
        break;
      case 'ui.dashboard.brokerActivitySeries':
        this.brokerActivitySeries = typeof value === 'string' ? value : undefined;
        break;
      case 'ui.dashboard.lastUpdatedAt':
        this.lastUpdatedAt = typeof value === 'string' ? value : undefined;
        break;
      default:
        break;
    }
  }

  async loadInitialData(params?: unknown, options?: BffClientOptions): Promise<void> {
    await this.loadVisualizarDashboard(params as DashboardVisualizarDashboardInput, options);
  }

  async loadVisualizarDashboard(
    params?: DashboardVisualizarDashboardInput,
    options?: BffClientOptions
  ): Promise<void> {
    if ((window as any).mls) {
      this.totalProperties = 128;
      setState('ui.dashboard.totalProperties', this.totalProperties);
      this.activeProperties = 96;
      setState('ui.dashboard.activeProperties', this.activeProperties);
      this.leadsThisMonth = 42;
      setState('ui.dashboard.leadsThisMonth', this.leadsThisMonth);
      this.qualifiedLeads = 18;
      setState('ui.dashboard.qualifiedLeads', this.qualifiedLeads);
      this.dealCount = 12;
      setState('ui.dashboard.dealCount', this.dealCount);
      this.dealValue = 950000;
      setState('ui.dashboard.dealValue', this.dealValue);
      this.avgDealValue = 79000;
      setState('ui.dashboard.avgDealValue', this.avgDealValue);
      this.activityCount = 74;
      setState('ui.dashboard.activityCount', this.activityCount);
      this.propertyStatusSeries = 'Disponível: 60, Em negociação: 28, Vendido: 8';
      setState('ui.dashboard.propertyStatusSeries', this.propertyStatusSeries);
      this.leadStageSeries = 'Novo: 20, Contato: 12, Visita: 10';
      setState('ui.dashboard.leadStageSeries', this.leadStageSeries);
      this.dealStageSeries = 'Proposta: 6, Fechado: 4, Perdido: 2';
      setState('ui.dashboard.dealStageSeries', this.dealStageSeries);
      this.brokerActivitySeries = 'Ana Silva: 18, Carlos Lima: 14, Julia Souza: 12';
      setState('ui.dashboard.brokerActivitySeries', this.brokerActivitySeries);
      this.lastUpdatedAt = '2026-06-23T09:30:00Z';
      setState('ui.dashboard.lastUpdatedAt', this.lastUpdatedAt);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<DashboardVisualizarDashboardOutput>(
      'propertyFlowCrm.dashboard.visualizarDashboard',
      params ?? ({} as DashboardVisualizarDashboardInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies AuraNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.totalProperties = response.data.totalProperties;
    setState('ui.dashboard.totalProperties', this.totalProperties);
    this.activeProperties = response.data.activeProperties;
    setState('ui.dashboard.activeProperties', this.activeProperties);
    this.leadsThisMonth = response.data.leadsThisMonth;
    setState('ui.dashboard.leadsThisMonth', this.leadsThisMonth);
    this.qualifiedLeads = response.data.qualifiedLeads;
    setState('ui.dashboard.qualifiedLeads', this.qualifiedLeads);
    this.dealCount = response.data.dealCount;
    setState('ui.dashboard.dealCount', this.dealCount);
    this.dealValue = response.data.dealValue;
    setState('ui.dashboard.dealValue', this.dealValue);
    this.avgDealValue = response.data.avgDealValue;
    setState('ui.dashboard.avgDealValue', this.avgDealValue);
    this.activityCount = response.data.activityCount;
    setState('ui.dashboard.activityCount', this.activityCount);
    this.propertyStatusSeries = response.data.propertyStatusSeries;
    setState('ui.dashboard.propertyStatusSeries', this.propertyStatusSeries);
    this.leadStageSeries = response.data.leadStageSeries;
    setState('ui.dashboard.leadStageSeries', this.leadStageSeries);
    this.dealStageSeries = response.data.dealStageSeries;
    setState('ui.dashboard.dealStageSeries', this.dealStageSeries);
    this.brokerActivitySeries = response.data.brokerActivitySeries;
    setState('ui.dashboard.brokerActivitySeries', this.brokerActivitySeries);
    this.lastUpdatedAt = response.data.lastUpdatedAt;
    setState('ui.dashboard.lastUpdatedAt', this.lastUpdatedAt);
    this.status = this.msg.loaded;
  }
}
