/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/dealsTracker.ts" enhancement="_102027_/l2/enhancementLit.ts" />

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
  DealsTrackerListarNegociosInput,
  DealsTrackerListarNegociosOutput,
  DealsTrackerObterNegocioInput,
  DealsTrackerObterNegocioOutput,
  DealsTrackerCriarNegocioInput,
  DealsTrackerCriarNegocioOutput,
  DealsTrackerAvancarEtapaNegocioInput,
  DealsTrackerAvancarEtapaNegocioOutput,
  DealsTrackerListarMudancasEtapaNegocioInput,
  DealsTrackerListarMudancasEtapaNegocioOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/dealsTracker.js';

/// **collab_i18n_start**
const message_pt = {
  brand: 'Property Flow CRM',
  pageTitle: 'Deals Tracker',
  loaded: 'Dados carregados',
  couldNotLoad: 'Não foi possível carregar',
  loadingListarNegocios: 'Carregando negócios...',
  loadingObterNegocio: 'Carregando negócio...',
  loadingListarMudancasEtapaNegocio: 'Carregando histórico...',
  criarNegocioLabel: 'Criar negócio',
  criarNegocioLoading: 'Criando negócio...',
  couldNotCriarNegocio: 'Não foi possível criar o negócio',
  avancarEtapaNegocioLabel: 'Avançar etapa',
  avancarEtapaNegocioLoading: 'Avançando etapa...',
  couldNotAvancarEtapaNegocio: 'Não foi possível avançar a etapa',
};

const message_en = {
  brand: 'Property Flow CRM',
  pageTitle: 'Deals Tracker',
  loaded: 'Data loaded',
  couldNotLoad: 'Could not load',
  loadingListarNegocios: 'Loading deals...',
  loadingObterNegocio: 'Loading deal...',
  loadingListarMudancasEtapaNegocio: 'Loading history...',
  criarNegocioLabel: 'Create deal',
  criarNegocioLoading: 'Creating deal...',
  couldNotCriarNegocio: 'Could not create deal',
  avancarEtapaNegocioLabel: 'Advance stage',
  avancarEtapaNegocioLoading: 'Advancing stage...',
  couldNotAvancarEtapaNegocio: 'Could not advance stage',
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class DealsTrackerDealsTrackerBase extends CollabLitElement {
  private readonly _stateKeys = [
    'ui.dealsTracker.negocios',
    'ui.dealsTracker.dealId',
    'ui.dealsTracker.status',
    'ui.dealsTracker.leadId',
    'ui.dealsTracker.propertyId',
    'ui.dealsTracker.valorProposta',
    'ui.dealsTracker.descricao',
    'ui.dealsTracker.updatedAt',
    'ui.dealsTracker.mudancasEtapaNegocio',
    'ui.dealsTracker.criarNegocio',
    'ui.dealsTracker.avancarEtapaNegocio',
  ] as const;

  @property() negocios: DealsTrackerListarNegociosOutput = [];
  @property() dealId: DealsTrackerObterNegocioOutput['dealId'] | undefined = undefined;
  @property() negocioStatus: DealsTrackerObterNegocioOutput['status'] | undefined = undefined;
  @property() leadId: DealsTrackerObterNegocioOutput['leadId'] | undefined = undefined;
  @property() propertyId: DealsTrackerObterNegocioOutput['propertyId'] | undefined = undefined;
  @property() valorProposta: DealsTrackerObterNegocioOutput['valorProposta'] | undefined = undefined;
  @property() descricao: DealsTrackerObterNegocioOutput['descricao'] | undefined = undefined;
  @property() updatedAt: DealsTrackerObterNegocioOutput['updatedAt'] | undefined = undefined;
  @property() mudancasEtapaNegocio: DealsTrackerListarMudancasEtapaNegocioOutput = [];
  @property() criarNegocioState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property() avancarEtapaNegocioState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property() status: string = '';

  protected msg: MessageType = messages['en'];

  createRenderRoot() { return this; }

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
      case 'ui.dealsTracker.negocios':
        this.negocios = value ?? [];
        break;
      case 'ui.dealsTracker.dealId':
        this.dealId = value ?? undefined;
        break;
      case 'ui.dealsTracker.status':
        this.negocioStatus = value ?? undefined;
        break;
      case 'ui.dealsTracker.leadId':
        this.leadId = value ?? undefined;
        break;
      case 'ui.dealsTracker.propertyId':
        this.propertyId = value ?? undefined;
        break;
      case 'ui.dealsTracker.valorProposta':
        this.valorProposta = value ?? undefined;
        break;
      case 'ui.dealsTracker.descricao':
        this.descricao = value ?? undefined;
        break;
      case 'ui.dealsTracker.updatedAt':
        this.updatedAt = value ?? undefined;
        break;
      case 'ui.dealsTracker.mudancasEtapaNegocio':
        this.mudancasEtapaNegocio = value ?? [];
        break;
      case 'ui.dealsTracker.criarNegocio':
        this.criarNegocioState = value ?? 'idle';
        break;
      case 'ui.dealsTracker.avancarEtapaNegocio':
        this.avancarEtapaNegocioState = value ?? 'idle';
        break;
    }
  }

  async loadInitialData(params?: unknown, options?: BffClientOptions): Promise<void> {
    await this.loadListarNegocios(params as DealsTrackerListarNegociosInput, options);
    await this.loadObterNegocio(params as DealsTrackerObterNegocioInput, options);
    await this.loadListarMudancasEtapaNegocio(params as DealsTrackerListarMudancasEtapaNegocioInput, options);
  }

  async loadListarNegocios(params?: DealsTrackerListarNegociosInput, options?: BffClientOptions): Promise<void> {
    if ((window as any).mls) {
      this.negocios = [
        { dealId: 'id-001', status: 'prospect', leadId: 'lead-001', propertyId: 'prop-001', valorProposta: 450000, updatedAt: '2026-06-23T00:00:00Z' },
        { dealId: 'id-002', status: 'negotiation', leadId: 'lead-002', propertyId: 'prop-002', valorProposta: 320000, updatedAt: '2026-06-22T00:00:00Z' },
      ] as DealsTrackerListarNegociosOutput;
      setState('ui.dealsTracker.negocios', this.negocios);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<DealsTrackerListarNegociosOutput>(
      'propertyFlowCrm.dealsTracker.listarNegocios',
      params ?? ({} as DealsTrackerListarNegociosInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies MasterFrontendNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.negocios = response.data;
    setState('ui.dealsTracker.negocios', this.negocios);
    this.status = this.msg.loaded;
  }

  async loadObterNegocio(params?: DealsTrackerObterNegocioInput, options?: BffClientOptions): Promise<void> {
    if ((window as any).mls) {
      this.dealId = 'id-001';
      this.negocioStatus = 'prospect';
      this.leadId = 'lead-001';
      this.propertyId = 'prop-001';
      this.valorProposta = 450000;
      this.descricao = 'Proposta inicial';
      this.updatedAt = '2026-06-23T00:00:00Z';
      setState('ui.dealsTracker.dealId', this.dealId);
      setState('ui.dealsTracker.status', this.negocioStatus);
      setState('ui.dealsTracker.leadId', this.leadId);
      setState('ui.dealsTracker.propertyId', this.propertyId);
      setState('ui.dealsTracker.valorProposta', this.valorProposta);
      setState('ui.dealsTracker.descricao', this.descricao);
      setState('ui.dealsTracker.updatedAt', this.updatedAt);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<DealsTrackerObterNegocioOutput>(
      'propertyFlowCrm.dealsTracker.obterNegocio',
      params ?? ({} as DealsTrackerObterNegocioInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies MasterFrontendNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.dealId = response.data.dealId;
    this.negocioStatus = response.data.status;
    this.leadId = response.data.leadId;
    this.propertyId = response.data.propertyId;
    this.valorProposta = response.data.valorProposta;
    this.descricao = response.data.descricao;
    this.updatedAt = response.data.updatedAt;
    setState('ui.dealsTracker.dealId', this.dealId);
    setState('ui.dealsTracker.status', this.negocioStatus);
    setState('ui.dealsTracker.leadId', this.leadId);
    setState('ui.dealsTracker.propertyId', this.propertyId);
    setState('ui.dealsTracker.valorProposta', this.valorProposta);
    setState('ui.dealsTracker.descricao', this.descricao);
    setState('ui.dealsTracker.updatedAt', this.updatedAt);
    this.status = this.msg.loaded;
  }

  async loadListarMudancasEtapaNegocio(params?: DealsTrackerListarMudancasEtapaNegocioInput, options?: BffClientOptions): Promise<void> {
    if ((window as any).mls) {
      this.mudancasEtapaNegocio = [
        { dealStageChangeId: 'dsc-001', dealId: 'id-001', fromStage: 'prospect', toStage: 'negotiation', changedAt: '2026-06-22T00:00:00Z' },
        { dealStageChangeId: 'dsc-002', dealId: 'id-001', fromStage: 'negotiation', toStage: 'closed', changedAt: '2026-06-23T00:00:00Z' },
      ] as DealsTrackerListarMudancasEtapaNegocioOutput;
      setState('ui.dealsTracker.mudancasEtapaNegocio', this.mudancasEtapaNegocio);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<DealsTrackerListarMudancasEtapaNegocioOutput>(
      'propertyFlowCrm.dealsTracker.listarMudancasEtapaNegocio',
      params ?? ({} as DealsTrackerListarMudancasEtapaNegocioInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies MasterFrontendNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.mudancasEtapaNegocio = response.data;
    setState('ui.dealsTracker.mudancasEtapaNegocio', this.mudancasEtapaNegocio);
    this.status = this.msg.loaded;
  }

  async criarNegocio(params: DealsTrackerCriarNegocioInput, signal?: AbortSignal): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.dealsTracker.criarNegocio', params);
      this.criarNegocioState = 'success';
      setState('ui.dealsTracker.criarNegocio', 'success');
      return;
    }
    this.criarNegocioState = 'loading';
    setState('ui.dealsTracker.criarNegocio', 'loading');
    try {
      const response = await execBff<DealsTrackerCriarNegocioOutput>(
        'propertyFlowCrm.dealsTracker.criarNegocio',
        params,
        signal ? { signal } : undefined
      );
      if (!response.ok) throw response.error;
      this.criarNegocioState = 'success';
      setState('ui.dealsTracker.criarNegocio', 'success');
    } catch (e) {
      this.criarNegocioState = 'error';
      setState('ui.dealsTracker.criarNegocio', 'error');
      throw e;
    }
  }

  handleCriarNegocioClick(): void {
    const params = {
      leadId: this.leadId ?? '',
      propertyId: this.propertyId ?? '',
      valorProposta: this.valorProposta ?? 0,
      termosIniciais: this.descricao ?? '',
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => { await this.criarNegocio(params, signal); },
      {
        busyLabel: this.msg.criarNegocioLoading,
        errorTitle: this.msg.couldNotCriarNegocio,
        retry: () => this.criarNegocio(params),
      },
    );
  }

  async avancarEtapaNegocio(params: DealsTrackerAvancarEtapaNegocioInput, signal?: AbortSignal): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.dealsTracker.avancarEtapaNegocio', params);
      this.avancarEtapaNegocioState = 'success';
      setState('ui.dealsTracker.avancarEtapaNegocio', 'success');
      return;
    }
    this.avancarEtapaNegocioState = 'loading';
    setState('ui.dealsTracker.avancarEtapaNegocio', 'loading');
    try {
      const response = await execBff<DealsTrackerAvancarEtapaNegocioOutput>(
        'propertyFlowCrm.dealsTracker.avancarEtapaNegocio',
        params,
        signal ? { signal } : undefined
      );
      if (!response.ok) throw response.error;
      this.avancarEtapaNegocioState = 'success';
      setState('ui.dealsTracker.avancarEtapaNegocio', 'success');
    } catch (e) {
      this.avancarEtapaNegocioState = 'error';
      setState('ui.dealsTracker.avancarEtapaNegocio', 'error');
      throw e;
    }
  }

  handleAvancarEtapaNegocioClick(): void {
    const params = {
      dealId: this.dealId ?? '',
      toStage: '',
      termosAtualizados: this.descricao ?? '',
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => { await this.avancarEtapaNegocio(params, signal); },
      {
        busyLabel: this.msg.avancarEtapaNegocioLoading,
        errorTitle: this.msg.couldNotAvancarEtapaNegocio,
        retry: () => this.avancarEtapaNegocio(params),
      },
    );
  }
}
