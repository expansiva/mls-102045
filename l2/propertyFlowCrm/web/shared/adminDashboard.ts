/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/adminDashboard.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import type { MasterFrontendNormalizedError } from '/_102029_/l2/contracts/bootstrap.js';
import type { BffClientOptions } from '/_102029_/l2/bffClient.js';
import { execBff } from '/_102029_/l2/bffClient.js';
import {
  bindExpectedNavigationLoad,
  consumeExpectedNavigationLoad,
  runBlockingUiAction,
} from '/_102029_/l2/interactionRuntime.js';
import { subscribe, unsubscribe, getState, setState } from '/_102029_/l2/collabState.js';
import type {
  AdminDashboardVisualizarAdminDashboardInput,
  AdminDashboardVisualizarAdminDashboardOutput,
  AdminDashboardListarAtualizacoesMetricasInput,
  AdminDashboardListarAtualizacoesMetricasOutputItem,
  AdminDashboardAtualizarMetricasDashboardInput,
  AdminDashboardAtualizarMetricasDashboardOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/adminDashboard.js';

/// **collab_i18n_start**
const message_pt = {
  brand: 'Property Flow CRM',
  pageTitle: 'Dashboard administrativo',
  loaded: 'Dados carregados',
  couldNotLoad: 'Nao foi possivel carregar',
  loadingVisualizarAdminDashboard: 'Carregando indicadores administrativos',
  loadingListarAtualizacoesMetricas: 'Carregando atualizações de métricas',
  atualizarMetricasDashboardLabel: 'Atualizar métricas',
  atualizarMetricasDashboardLoading: 'Atualizando métricas',
  couldNotAtualizarMetricasDashboard: 'Nao foi possivel atualizar métricas',
};
const message_en = {
  brand: 'Property Flow CRM',
  pageTitle: 'Admin dashboard',
  loaded: 'Data loaded',
  couldNotLoad: 'Could not load',
  loadingVisualizarAdminDashboard: 'Loading admin indicators',
  loadingListarAtualizacoesMetricas: 'Loading metric updates',
  atualizarMetricasDashboardLabel: 'Update metrics',
  atualizarMetricasDashboardLoading: 'Updating metrics',
  couldNotAtualizarMetricasDashboard: 'Could not update metrics',
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class AdminDashboardAdminDashboardBase extends CollabLitElement {
  private readonly _stateKeys = [
    'ui.adminDashboard.dashboardMetrics',
    'ui.adminDashboard.lastUpdateAt',
    'ui.adminDashboard.atualizacoesMetricas',
    'ui.adminDashboard.atualizarMetricasDashboard',
  ] as const;

  @property() dashboardMetrics: AdminDashboardVisualizarAdminDashboardOutput['dashboardMetrics'] | undefined = undefined;

  @property() lastUpdateAt: AdminDashboardVisualizarAdminDashboardOutput['lastUpdateAt'] | undefined = undefined;

  @property() atualizacoesMetricas: AdminDashboardListarAtualizacoesMetricasOutputItem[] = [];

  @property() atualizarMetricasDashboardState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

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
      case 'ui.adminDashboard.dashboardMetrics':
        this.dashboardMetrics = value ?? undefined;
        break;
      case 'ui.adminDashboard.lastUpdateAt':
        this.lastUpdateAt = value ?? undefined;
        break;
      case 'ui.adminDashboard.atualizacoesMetricas':
        this.atualizacoesMetricas = value ?? [];
        break;
      case 'ui.adminDashboard.atualizarMetricasDashboard':
        this.atualizarMetricasDashboardState = value ?? 'idle';
        break;
      default:
        break;
    }
  }

  async loadInitialData(params?: unknown, options?: BffClientOptions): Promise<void> {
    await this.loadVisualizarAdminDashboard(params as AdminDashboardVisualizarAdminDashboardInput, options);
    await this.loadListarAtualizacoesMetricas(params as AdminDashboardListarAtualizacoesMetricasInput, options);
  }

  async loadVisualizarAdminDashboard(
    params?: AdminDashboardVisualizarAdminDashboardInput,
    options?: BffClientOptions,
  ): Promise<void> {
    if ((window as any).mls) {
      this.dashboardMetrics = 'Resumo das métricas do período';
      setState('ui.adminDashboard.dashboardMetrics', this.dashboardMetrics);
      this.lastUpdateAt = '2026-06-23T10:00:00Z';
      setState('ui.adminDashboard.lastUpdateAt', this.lastUpdateAt);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<AdminDashboardVisualizarAdminDashboardOutput>(
      'propertyFlowCrm.adminDashboard.visualizarAdminDashboard',
      params ?? ({} as AdminDashboardVisualizarAdminDashboardInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies MasterFrontendNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.dashboardMetrics = response.data.dashboardMetrics;
    setState('ui.adminDashboard.dashboardMetrics', this.dashboardMetrics);
    this.lastUpdateAt = response.data.lastUpdateAt;
    setState('ui.adminDashboard.lastUpdateAt', this.lastUpdateAt);
    this.status = this.msg.loaded;
  }

  async loadListarAtualizacoesMetricas(
    params?: AdminDashboardListarAtualizacoesMetricasInput,
    options?: BffClientOptions,
  ): Promise<void> {
    if ((window as any).mls) {
      this.atualizacoesMetricas = [
        { dashboardMetricUpdates: '2026-06-22T18:00:00Z' },
        { dashboardMetricUpdates: '2026-06-21T18:00:00Z' },
      ];
      setState('ui.adminDashboard.atualizacoesMetricas', this.atualizacoesMetricas);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<AdminDashboardListarAtualizacoesMetricasOutputItem[]>(
      'propertyFlowCrm.adminDashboard.listarAtualizacoesMetricas',
      params ?? ({} as AdminDashboardListarAtualizacoesMetricasInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies MasterFrontendNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.atualizacoesMetricas = response.data;
    setState('ui.adminDashboard.atualizacoesMetricas', this.atualizacoesMetricas);
    this.status = this.msg.loaded;
  }

  async atualizarMetricasDashboard(
    params: AdminDashboardAtualizarMetricasDashboardInput,
    signal?: AbortSignal,
  ): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.adminDashboard.atualizarMetricasDashboard', params);
      this.atualizarMetricasDashboardState = 'success';
      setState('ui.adminDashboard.atualizarMetricasDashboard', 'success');
      return;
    }
    this.atualizarMetricasDashboardState = 'loading';
    setState('ui.adminDashboard.atualizarMetricasDashboard', 'loading');
    try {
      const response = await execBff<AdminDashboardAtualizarMetricasDashboardOutput>(
        'propertyFlowCrm.adminDashboard.atualizarMetricasDashboard',
        params,
        signal ? { signal } : undefined,
      );
      if (!response.ok) throw response.error;
      this.atualizarMetricasDashboardState = 'success';
      setState('ui.adminDashboard.atualizarMetricasDashboard', 'success');
      await this.loadVisualizarAdminDashboard(undefined, { mode: 'silent' });
      await this.loadListarAtualizacoesMetricas(undefined, { mode: 'silent' });
    } catch (e) {
      this.atualizarMetricasDashboardState = 'error';
      setState('ui.adminDashboard.atualizarMetricasDashboard', 'error');
      throw e;
    }
  }

  handleAtualizarMetricasDashboardClick(): void {
    const params: AdminDashboardAtualizarMetricasDashboardInput = {};
    void runBlockingUiAction(
      async (signal: AbortSignal) => {
        await this.atualizarMetricasDashboard(params, signal);
      },
      {
        busyLabel: this.msg.atualizarMetricasDashboardLoading,
        errorTitle: this.msg.couldNotAtualizarMetricasDashboard,
        retry: () => this.atualizarMetricasDashboard(params),
      },
    );
  }
}
