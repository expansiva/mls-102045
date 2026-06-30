/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/propertyDetails.ts" enhancement="_102027_/l2/enhancementLit.ts" />
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
  PropertyDetailsObterImovelInput,
  PropertyDetailsObterImovelOutput,
  PropertyDetailsAtualizarImovelInput,
  PropertyDetailsAtualizarImovelOutput,
  PropertyDetailsSolicitarDescricaoImovelInput,
  PropertyDetailsSolicitarDescricaoImovelOutput,
  PropertyDetailsListarSolicitacoesDescricaoImovelInput,
  PropertyDetailsListarSolicitacoesDescricaoImovelOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/propertyDetails.js';

/// **collab_i18n_start**
const message_pt = {
  brand: 'Property Flow CRM',
  pageTitle: 'Detalhes do Imóvel',
  loaded: 'Dados carregados',
  couldNotLoad: 'Não foi possível carregar',
  loadingObterImovel: 'Carregando imóvel...',
  loadingListarSolicitacoesDescricaoImovel: 'Carregando solicitações...',
  atualizarImovelLabel: 'Atualizar imóvel',
  atualizarImovelLoading: 'Atualizando imóvel...',
  couldNotAtualizarImovel: 'Não foi possível atualizar o imóvel',
  solicitarDescricaoImovelLabel: 'Solicitar descrição',
  solicitarDescricaoImovelLoading: 'Solicitando descrição...',
  couldNotSolicitarDescricaoImovel: 'Não foi possível solicitar a descrição',
};

const message_en = {
  brand: 'Property Flow CRM',
  pageTitle: 'Property Details',
  loaded: 'Data loaded',
  couldNotLoad: 'Could not load',
  loadingObterImovel: 'Loading property...',
  loadingListarSolicitacoesDescricaoImovel: 'Loading requests...',
  atualizarImovelLabel: 'Update property',
  atualizarImovelLoading: 'Updating property...',
  couldNotAtualizarImovel: 'Could not update property',
  solicitarDescricaoImovelLabel: 'Request description',
  solicitarDescricaoImovelLoading: 'Requesting description...',
  couldNotSolicitarDescricaoImovel: 'Could not request description',
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class PropertyDetailsPropertyDetailsBase extends CollabLitElement {
  private readonly _stateKeys = [
    'ui.propertyDetails.propertyId',
    'ui.propertyDetails.title',
    'ui.propertyDetails.address',
    'ui.propertyDetails.price',
    'ui.propertyDetails.status',
    'ui.propertyDetails.description',
    'ui.propertyDetails.features',
    'ui.propertyDetails.bedrooms',
    'ui.propertyDetails.bathrooms',
    'ui.propertyDetails.area',
    'ui.propertyDetails.solicitacoesDescricaoImovel',
    'ui.propertyDetails.atualizarImovel',
    'ui.propertyDetails.solicitarDescricaoImovel',
  ] as const;

  @property() propertyId: PropertyDetailsObterImovelOutput['propertyId'] | undefined = undefined;
  @property() propertyTitle: PropertyDetailsObterImovelOutput['title'] | undefined = undefined;
  @property() address: PropertyDetailsObterImovelOutput['address'] | undefined = undefined;
  @property() price: PropertyDetailsObterImovelOutput['price'] | undefined = undefined;
  @property() propertyStatus: PropertyDetailsObterImovelOutput['status'] | undefined = undefined;
  @property() description: PropertyDetailsObterImovelOutput['description'] | undefined = undefined;
  @property() features: PropertyDetailsObterImovelOutput['features'] | undefined = undefined;
  @property() bedrooms: PropertyDetailsObterImovelOutput['bedrooms'] | undefined = undefined;
  @property() bathrooms: PropertyDetailsObterImovelOutput['bathrooms'] | undefined = undefined;
  @property() area: PropertyDetailsObterImovelOutput['area'] | undefined = undefined;
  @property() solicitacoesDescricaoImovel: PropertyDetailsListarSolicitacoesDescricaoImovelOutput = [];
  @property() bullets: string = '';
  @property() atualizarImovelState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property() solicitarDescricaoImovelState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
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
      case 'ui.propertyDetails.propertyId':
        this.propertyId = value ?? undefined;
        break;
      case 'ui.propertyDetails.title':
        this.propertyTitle = value ?? undefined;
        break;
      case 'ui.propertyDetails.address':
        this.address = value ?? undefined;
        break;
      case 'ui.propertyDetails.price':
        this.price = value ?? undefined;
        break;
      case 'ui.propertyDetails.status':
        this.propertyStatus = value ?? undefined;
        break;
      case 'ui.propertyDetails.description':
        this.description = value ?? undefined;
        break;
      case 'ui.propertyDetails.features':
        this.features = value ?? undefined;
        break;
      case 'ui.propertyDetails.bedrooms':
        this.bedrooms = value ?? undefined;
        break;
      case 'ui.propertyDetails.bathrooms':
        this.bathrooms = value ?? undefined;
        break;
      case 'ui.propertyDetails.area':
        this.area = value ?? undefined;
        break;
      case 'ui.propertyDetails.solicitacoesDescricaoImovel':
        this.solicitacoesDescricaoImovel = value ?? [];
        break;
      case 'ui.propertyDetails.atualizarImovel':
        this.atualizarImovelState = value ?? 'idle';
        break;
      case 'ui.propertyDetails.solicitarDescricaoImovel':
        this.solicitarDescricaoImovelState = value ?? 'idle';
        break;
    }
  }

  async loadInitialData(params?: unknown, options?: BffClientOptions): Promise<void> {
    await this.loadObterImovel(params as PropertyDetailsObterImovelInput, options);
    await this.loadListarSolicitacoesDescricaoImovel(params as PropertyDetailsListarSolicitacoesDescricaoImovelInput, options);
  }

  async loadObterImovel(params?: PropertyDetailsObterImovelInput, options?: BffClientOptions): Promise<void> {
    if ((window as any).mls) {
      this.propertyId = 'id-001';
      this.propertyTitle = 'Casa Espaçosa';
      this.address = 'Rua das Flores, 123';
      this.price = 450000;
      this.propertyStatus = 'ativo';
      this.description = 'Linda casa com jardim';
      this.features = 'Piscina, Churrasqueira';
      this.bedrooms = 3;
      this.bathrooms = 2;
      this.area = 180;
      setState('ui.propertyDetails.propertyId', this.propertyId);
      setState('ui.propertyDetails.title', this.propertyTitle);
      setState('ui.propertyDetails.address', this.address);
      setState('ui.propertyDetails.price', this.price);
      setState('ui.propertyDetails.status', this.propertyStatus);
      setState('ui.propertyDetails.description', this.description);
      setState('ui.propertyDetails.features', this.features);
      setState('ui.propertyDetails.bedrooms', this.bedrooms);
      setState('ui.propertyDetails.bathrooms', this.bathrooms);
      setState('ui.propertyDetails.area', this.area);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<PropertyDetailsObterImovelOutput>(
      'propertyFlowCrm.propertyDetails.obterImovel',
      params ?? ({} as PropertyDetailsObterImovelInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies MasterFrontendNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.propertyId = response.data.propertyId;
    this.propertyTitle = response.data.title;
    this.address = response.data.address;
    this.price = response.data.price;
    this.propertyStatus = response.data.status;
    this.description = response.data.description;
    this.features = response.data.features;
    this.bedrooms = response.data.bedrooms;
    this.bathrooms = response.data.bathrooms;
    this.area = response.data.area;
    setState('ui.propertyDetails.propertyId', this.propertyId);
    setState('ui.propertyDetails.title', this.propertyTitle);
    setState('ui.propertyDetails.address', this.address);
    setState('ui.propertyDetails.price', this.price);
    setState('ui.propertyDetails.status', this.propertyStatus);
    setState('ui.propertyDetails.description', this.description);
    setState('ui.propertyDetails.features', this.features);
    setState('ui.propertyDetails.bedrooms', this.bedrooms);
    setState('ui.propertyDetails.bathrooms', this.bathrooms);
    setState('ui.propertyDetails.area', this.area);
    this.status = this.msg.loaded;
  }

  async loadListarSolicitacoesDescricaoImovel(params?: PropertyDetailsListarSolicitacoesDescricaoImovelInput, options?: BffClientOptions): Promise<void> {
    if ((window as any).mls) {
      this.solicitacoesDescricaoImovel = [
        { requests: 'req-001' },
        { requests: 'req-002' },
      ] as PropertyDetailsListarSolicitacoesDescricaoImovelOutput;
      setState('ui.propertyDetails.solicitacoesDescricaoImovel', this.solicitacoesDescricaoImovel);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<PropertyDetailsListarSolicitacoesDescricaoImovelOutput>(
      'propertyFlowCrm.propertyDetails.listarSolicitacoesDescricaoImovel',
      params ?? ({} as PropertyDetailsListarSolicitacoesDescricaoImovelInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies MasterFrontendNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.solicitacoesDescricaoImovel = response.data;
    setState('ui.propertyDetails.solicitacoesDescricaoImovel', this.solicitacoesDescricaoImovel);
    this.status = this.msg.loaded;
  }

  async atualizarImovel(params: PropertyDetailsAtualizarImovelInput, signal?: AbortSignal): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.propertyDetails.atualizarImovel', params);
      this.atualizarImovelState = 'success';
      setState('ui.propertyDetails.atualizarImovel', 'success');
      return;
    }
    this.atualizarImovelState = 'loading';
    setState('ui.propertyDetails.atualizarImovel', 'loading');
    try {
      const response = await execBff<PropertyDetailsAtualizarImovelOutput>(
        'propertyFlowCrm.propertyDetails.atualizarImovel',
        params,
        signal ? { signal } : undefined
      );
      if (!response.ok) throw response.error;
      this.atualizarImovelState = 'success';
      setState('ui.propertyDetails.atualizarImovel', 'success');
      await this.loadObterImovel({ propertyId: params.propertyId });
    } catch (e) {
      this.atualizarImovelState = 'error';
      setState('ui.propertyDetails.atualizarImovel', 'error');
      throw e;
    }
  }

  handleAtualizarImovelClick(): void {
    const params: PropertyDetailsAtualizarImovelInput = {
      propertyId: this.propertyId ?? '',
      title: this.propertyTitle,
      address: this.address,
      price: this.price,
      status: this.propertyStatus,
      description: this.description,
      features: this.features,
      bedrooms: this.bedrooms,
      bathrooms: this.bathrooms,
      area: this.area,
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => { await this.atualizarImovel(params, signal); },
      {
        busyLabel: this.msg.atualizarImovelLoading,
        errorTitle: this.msg.couldNotAtualizarImovel,
        retry: () => this.atualizarImovel(params),
      },
    );
  }

  async solicitarDescricaoImovel(params: PropertyDetailsSolicitarDescricaoImovelInput, signal?: AbortSignal): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.propertyDetails.solicitarDescricaoImovel', params);
      this.solicitarDescricaoImovelState = 'success';
      setState('ui.propertyDetails.solicitarDescricaoImovel', 'success');
      return;
    }
    this.solicitarDescricaoImovelState = 'loading';
    setState('ui.propertyDetails.solicitarDescricaoImovel', 'loading');
    try {
      const response = await execBff<PropertyDetailsSolicitarDescricaoImovelOutput>(
        'propertyFlowCrm.propertyDetails.solicitarDescricaoImovel',
        params,
        signal ? { signal } : undefined
      );
      if (!response.ok) throw response.error;
      this.solicitarDescricaoImovelState = 'success';
      setState('ui.propertyDetails.solicitarDescricaoImovel', 'success');
      await this.loadListarSolicitacoesDescricaoImovel({ propertyId: params.propertyId });
    } catch (e) {
      this.solicitarDescricaoImovelState = 'error';
      setState('ui.propertyDetails.solicitarDescricaoImovel', 'error');
      throw e;
    }
  }

  handleSolicitarDescricaoImovelClick(): void {
    const params: PropertyDetailsSolicitarDescricaoImovelInput = {
      propertyId: this.propertyId ?? '',
      bullets: this.bullets,
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => { await this.solicitarDescricaoImovel(params, signal); },
      {
        busyLabel: this.msg.solicitarDescricaoImovelLoading,
        errorTitle: this.msg.couldNotSolicitarDescricaoImovel,
        retry: () => this.solicitarDescricaoImovel(params),
      },
    );
  }
}
