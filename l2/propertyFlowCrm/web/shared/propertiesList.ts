/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/propertiesList.ts" enhancement="_102027_/l2/enhancementLit.ts" />
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
  PropertiesListListarImoveisInput,
  PropertiesListListarImoveisOutput,
  PropertiesListCriarImovelInput,
  PropertiesListCriarImovelOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/propertiesList.js';

/// **collab_i18n_start**
const message_pt = {
  brand: 'Property Flow CRM',
  pageTitle: 'Lista de imóveis',
  loaded: 'Dados carregados',
  couldNotLoad: 'Nao foi possivel carregar',
  loadingListarImoveis: 'Carregando imóveis',
  criarImovelLabel: 'Cadastrar imóvel',
  criarImovelLoading: 'Cadastrando imóvel',
  couldNotCriarImovel: 'Nao foi possivel criar imóvel',
  navigateToPropertyDetails: 'selecionar imóvel',
};
const message_en = {
  brand: 'Property Flow CRM',
  pageTitle: 'Properties List',
  loaded: 'Data loaded',
  couldNotLoad: 'Could not load',
  loadingListarImoveis: 'Loading properties',
  criarImovelLabel: 'Create property',
  criarImovelLoading: 'Creating property',
  couldNotCriarImovel: 'Could not create property',
  navigateToPropertyDetails: 'select property',
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class PropertiesListPropertiesListBase extends CollabLitElement {
  private readonly _stateKeys = [
    'ui.propertiesList.imoveis',
    'ui.propertiesList.criarImovel',
  ] as const;

  @property() imoveis: PropertiesListListarImoveisOutput = [];

  @property() criarImovelState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

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
      case 'ui.propertiesList.imoveis':
        this.imoveis = (value ?? []) as PropertiesListListarImoveisOutput;
        break;
      case 'ui.propertiesList.criarImovel':
        this.criarImovelState = (value ?? 'idle') as 'idle' | 'loading' | 'success' | 'error';
        break;
      default:
        break;
    }
  }

  async loadInitialData(params?: unknown, options?: BffClientOptions): Promise<void> {
    await this.loadListarImoveis(params as PropertiesListListarImoveisInput, options);
  }

  async loadListarImoveis(params?: PropertiesListListarImoveisInput, options?: BffClientOptions): Promise<void> {
    if ((window as any).mls) {
      this.imoveis = [
        {
          propertyId: 'id-001',
          title: 'Apartamento Central',
          status: 'ativo',
          price: 350000,
          city: 'São Paulo',
          neighborhood: 'Centro',
        },
        {
          propertyId: 'id-002',
          title: 'Casa Jardim',
          status: 'reservado',
          price: 520000,
          city: 'Campinas',
          neighborhood: 'Jardim das Flores',
        },
        {
          propertyId: 'id-003',
          title: 'Cobertura Vista Mar',
          status: 'vendido',
          price: 980000,
          city: 'Rio de Janeiro',
          neighborhood: 'Copacabana',
        },
      ] as PropertiesListListarImoveisOutput;
      setState('ui.propertiesList.imoveis', this.imoveis);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<PropertiesListListarImoveisOutput>(
      'propertyFlowCrm.propertiesList.listarImoveis',
      params ?? ({} as PropertiesListListarImoveisInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies MasterFrontendNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.imoveis = response.data;
    setState('ui.propertiesList.imoveis', this.imoveis);
    this.status = this.msg.loaded;
  }

  async criarImovel(params: PropertiesListCriarImovelInput, signal?: AbortSignal): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.propertiesList.criarImovel', params);
      this.criarImovelState = 'success';
      setState('ui.propertiesList.criarImovel', 'success');
      return;
    }
    this.criarImovelState = 'loading';
    setState('ui.propertiesList.criarImovel', 'loading');
    try {
      const response = await execBff<PropertiesListCriarImovelOutput>(
        'propertyFlowCrm.propertiesList.criarImovel',
        params,
        signal ? { signal } : undefined,
      );
      if (!response.ok) throw response.error;
      this.criarImovelState = 'success';
      setState('ui.propertiesList.criarImovel', 'success');
      await this.loadListarImoveis(undefined);
    } catch (e) {
      this.criarImovelState = 'error';
      setState('ui.propertiesList.criarImovel', 'error');
      throw e;
    }
  }

  handleCriarImovelClick(): void {
    const params: PropertiesListCriarImovelInput = {
      title: '',
      propertyType: '',
      price: 0,
      city: '',
      neighborhood: '',
      status: '',
      brokerId: '',
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => { await this.criarImovel(params, signal); },
      {
        busyLabel: this.msg.criarImovelLoading,
        errorTitle: this.msg.couldNotCriarImovel,
        retry: () => this.criarImovel(params),
      },
    );
  }

  handleNavigateToPropertyDetailsClick(params?: Record<string, unknown>): void {
    if ((window as any).mls) {
      console.log('[mls mock] navigate to propertyDetails', params);
      return;
    }
    setState('navigation.request', { pageId: 'propertyDetails', params: params ?? {} });
  }
}
