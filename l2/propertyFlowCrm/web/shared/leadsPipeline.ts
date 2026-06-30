/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/leadsPipeline.ts" enhancement="_102027_/l2/enhancementLit.ts" />
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
  LeadsPipelineListarLeadsInput,
  LeadsPipelineListarLeadsOutputItem,
  LeadsPipelineMoverEtapaLeadInput,
  LeadsPipelineMoverEtapaLeadOutput,
  LeadsPipelineCriarLeadInput,
  LeadsPipelineCriarLeadOutput,
  LeadsPipelineSolicitarQualificacaoLeadInput,
  LeadsPipelineSolicitarQualificacaoLeadOutput,
  LeadsPipelineListarMudancasEtapaLeadInput,
  LeadsPipelineListarMudancasEtapaLeadOutputItem,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/leadsPipeline.js';

/// **collab_i18n_start**
const message_pt = {
  brand: 'Property Flow CRM',
  pageTitle: 'Pipeline de Leads',
  loaded: 'Dados carregados',
  couldNotLoad: 'Não foi possível carregar',
  loadingListarLeads: 'Carregando leads',
  loadingListarMudancasEtapaLead: 'Carregando mudanças de etapa',
  moverEtapaLeadLabel: 'Mover etapa',
  moverEtapaLeadLoading: 'Movendo etapa',
  couldNotMoverEtapaLead: 'Não foi possível mover etapa',
  criarLeadLabel: 'Criar lead',
  criarLeadLoading: 'Criando lead',
  couldNotCriarLead: 'Não foi possível criar lead',
  solicitarQualificacaoLeadLabel: 'Solicitar qualificação',
  solicitarQualificacaoLeadLoading: 'Solicitando qualificação',
  couldNotSolicitarQualificacaoLead: 'Não foi possível solicitar qualificação',
  navigateToLeadDetails: 'abrir detalhes do lead',
};
const message_en = {
  brand: 'Property Flow CRM',
  pageTitle: 'Leads Pipeline',
  loaded: 'Data loaded',
  couldNotLoad: 'Could not load',
  loadingListarLeads: 'Loading leads',
  loadingListarMudancasEtapaLead: 'Loading stage changes',
  moverEtapaLeadLabel: 'Move stage',
  moverEtapaLeadLoading: 'Moving stage',
  couldNotMoverEtapaLead: 'Could not move stage',
  criarLeadLabel: 'Create lead',
  criarLeadLoading: 'Creating lead',
  couldNotCriarLead: 'Could not create lead',
  solicitarQualificacaoLeadLabel: 'Request qualification',
  solicitarQualificacaoLeadLoading: 'Requesting qualification',
  couldNotSolicitarQualificacaoLead: 'Could not request qualification',
  navigateToLeadDetails: 'open lead details',
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class LeadsPipelineLeadsPipelineBase extends CollabLitElement {
  private readonly _stateKeys = [
    'ui.leadsPipeline.leads',
    'ui.leadsPipeline.mudancasEtapaLead',
    'ui.leadsPipeline.moverEtapaLead',
    'ui.leadsPipeline.criarLead',
    'ui.leadsPipeline.solicitarQualificacaoLead',
  ] as const;

  @property() leads: LeadsPipelineListarLeadsOutputItem[] = [];
  @property() mudancasEtapaLead: LeadsPipelineListarMudancasEtapaLeadOutputItem[] = [];
  @property() moverEtapaLeadState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property() criarLeadState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property() solicitarQualificacaoLeadState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
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
      case 'ui.leadsPipeline.leads':
        this.leads = value ?? [];
        break;
      case 'ui.leadsPipeline.mudancasEtapaLead':
        this.mudancasEtapaLead = value ?? [];
        break;
      case 'ui.leadsPipeline.moverEtapaLead':
        this.moverEtapaLeadState = value ?? 'idle';
        break;
      case 'ui.leadsPipeline.criarLead':
        this.criarLeadState = value ?? 'idle';
        break;
      case 'ui.leadsPipeline.solicitarQualificacaoLead':
        this.solicitarQualificacaoLeadState = value ?? 'idle';
        break;
      default:
        break;
    }
  }

  async loadInitialData(params?: unknown, options?: BffClientOptions): Promise<void> {
    await this.loadListarLeads(params as LeadsPipelineListarLeadsInput, options);
    await this.loadListarMudancasEtapaLead(params as LeadsPipelineListarMudancasEtapaLeadInput, options);
  }

  async loadListarLeads(
    params?: LeadsPipelineListarLeadsInput,
    options?: BffClientOptions,
  ): Promise<void> {
    if ((window as any).mls) {
      this.leads = [
        {
          leadId: 'id-001',
          leadName: 'Ana Silva',
          leadStage: 'novo',
          leadTemperature: 'quente',
          leadUpdatedAt: '2026-06-23',
        },
        {
          leadId: 'id-002',
          leadName: 'Bruno Lima',
          leadStage: 'contato',
          leadTemperature: 'morno',
          leadUpdatedAt: '2026-06-22',
        },
      ] as LeadsPipelineListarLeadsOutputItem[];
      setState('ui.leadsPipeline.leads', this.leads);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<LeadsPipelineListarLeadsOutputItem[]>(
      'propertyFlowCrm.leadsPipeline.listarLeads',
      params ?? ({} as LeadsPipelineListarLeadsInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies MasterFrontendNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.leads = response.data;
    setState('ui.leadsPipeline.leads', this.leads);
    this.status = this.msg.loaded;
  }

  async loadListarMudancasEtapaLead(
    params?: LeadsPipelineListarMudancasEtapaLeadInput,
    options?: BffClientOptions,
  ): Promise<void> {
    if ((window as any).mls) {
      this.mudancasEtapaLead = [
        {
          leadStageChangeId: 'id-001',
          fromStage: 'novo',
          toStage: 'contato',
          changedAt: '2026-06-21',
          changedByBrokerId: 'id-001',
          note: 'Contato inicial realizado',
        },
        {
          leadStageChangeId: 'id-002',
          fromStage: 'contato',
          toStage: 'visita',
          changedAt: '2026-06-22',
          changedByBrokerId: 'id-002',
          note: 'Visita agendada',
        },
      ] as LeadsPipelineListarMudancasEtapaLeadOutputItem[];
      setState('ui.leadsPipeline.mudancasEtapaLead', this.mudancasEtapaLead);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<LeadsPipelineListarMudancasEtapaLeadOutputItem[]>(
      'propertyFlowCrm.leadsPipeline.listarMudancasEtapaLead',
      params ?? ({} as LeadsPipelineListarMudancasEtapaLeadInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies MasterFrontendNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.mudancasEtapaLead = response.data;
    setState('ui.leadsPipeline.mudancasEtapaLead', this.mudancasEtapaLead);
    this.status = this.msg.loaded;
  }

  async moverEtapaLead(params: LeadsPipelineMoverEtapaLeadInput, signal?: AbortSignal): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.leadsPipeline.moverEtapaLead', params);
      this.moverEtapaLeadState = 'success';
      setState('ui.leadsPipeline.moverEtapaLead', 'success');
      return;
    }
    this.moverEtapaLeadState = 'loading';
    setState('ui.leadsPipeline.moverEtapaLead', 'loading');
    try {
      const response = await execBff<LeadsPipelineMoverEtapaLeadOutput>(
        'propertyFlowCrm.leadsPipeline.moverEtapaLead',
        params,
        signal ? { signal } : undefined,
      );
      if (!response.ok) throw response.error;
      this.moverEtapaLeadState = 'success';
      setState('ui.leadsPipeline.moverEtapaLead', 'success');
      await this.loadListarLeads(undefined, { mode: 'silent' });
    } catch (e) {
      this.moverEtapaLeadState = 'error';
      setState('ui.leadsPipeline.moverEtapaLead', 'error');
      throw e;
    }
  }

  handleMoverEtapaLeadClick(): void {
    const lead = this.leads[0];
    const params: LeadsPipelineMoverEtapaLeadInput = {
      leadId: lead?.leadId ?? 'id-001',
      fromStage: lead?.leadStage ?? 'novo',
      toStage: 'contato',
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => {
        await this.moverEtapaLead(params, signal);
      },
      {
        busyLabel: this.msg.moverEtapaLeadLoading,
        errorTitle: this.msg.couldNotMoverEtapaLead,
        retry: () => this.moverEtapaLead(params),
      },
    );
  }

  async criarLead(params: LeadsPipelineCriarLeadInput, signal?: AbortSignal): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.leadsPipeline.criarLead', params);
      this.criarLeadState = 'success';
      setState('ui.leadsPipeline.criarLead', 'success');
      return;
    }
    this.criarLeadState = 'loading';
    setState('ui.leadsPipeline.criarLead', 'loading');
    try {
      const response = await execBff<LeadsPipelineCriarLeadOutput>(
        'propertyFlowCrm.leadsPipeline.criarLead',
        params,
        signal ? { signal } : undefined,
      );
      if (!response.ok) throw response.error;
      this.criarLeadState = 'success';
      setState('ui.leadsPipeline.criarLead', 'success');
      await this.loadListarLeads(undefined, { mode: 'silent' });
    } catch (e) {
      this.criarLeadState = 'error';
      setState('ui.leadsPipeline.criarLead', 'error');
      throw e;
    }
  }

  handleCriarLeadClick(): void {
    const params: LeadsPipelineCriarLeadInput = {
      leadName: 'Ana Silva',
      initialStage: 'novo',
      leadEmail: 'ana@exemplo.com',
      leadPhone: '11999999999',
      leadSource: 'Indicação',
      leadInterest: 'Apartamento',
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => {
        await this.criarLead(params, signal);
      },
      {
        busyLabel: this.msg.criarLeadLoading,
        errorTitle: this.msg.couldNotCriarLead,
        retry: () => this.criarLead(params),
      },
    );
  }

  async solicitarQualificacaoLead(
    params: LeadsPipelineSolicitarQualificacaoLeadInput,
    signal?: AbortSignal,
  ): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.leadsPipeline.solicitarQualificacaoLead', params);
      this.solicitarQualificacaoLeadState = 'success';
      setState('ui.leadsPipeline.solicitarQualificacaoLead', 'success');
      return;
    }
    this.solicitarQualificacaoLeadState = 'loading';
    setState('ui.leadsPipeline.solicitarQualificacaoLead', 'loading');
    try {
      const response = await execBff<LeadsPipelineSolicitarQualificacaoLeadOutput>(
        'propertyFlowCrm.leadsPipeline.solicitarQualificacaoLead',
        params,
        signal ? { signal } : undefined,
      );
      if (!response.ok) throw response.error;
      this.solicitarQualificacaoLeadState = 'success';
      setState('ui.leadsPipeline.solicitarQualificacaoLead', 'success');
      await this.loadListarLeads(undefined, { mode: 'silent' });
    } catch (e) {
      this.solicitarQualificacaoLeadState = 'error';
      setState('ui.leadsPipeline.solicitarQualificacaoLead', 'error');
      throw e;
    }
  }

  handleSolicitarQualificacaoLeadClick(): void {
    const lead = this.leads[0];
    const params: LeadsPipelineSolicitarQualificacaoLeadInput = {
      leadId: lead?.leadId ?? 'id-001',
      leadContext: 'Lead interessado em imóvel residencial',
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => {
        await this.solicitarQualificacaoLead(params, signal);
      },
      {
        busyLabel: this.msg.solicitarQualificacaoLeadLoading,
        errorTitle: this.msg.couldNotSolicitarQualificacaoLead,
        retry: () => this.solicitarQualificacaoLead(params),
      },
    );
  }

  handleNavigateToLeadDetailsClick(params?: Record<string, unknown>): void {
    if ((window as any).mls) {
      console.log('[mls mock] navigate to leadDetails', params);
      return;
    }
    setState('navigation.request', { pageId: 'leadDetails', params: params ?? {} });
  }
}
