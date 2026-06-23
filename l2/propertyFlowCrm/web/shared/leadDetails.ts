/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/leadDetails.ts" enhancement="_102027_/l2/enhancementLit.ts" />
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
  LeadDetailsObterLeadInput,
  LeadDetailsObterLeadOutput,
  LeadDetailsAtualizarLeadInput,
  LeadDetailsAtualizarLeadOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/leadDetails.js';

/// **collab_i18n_start**
const message_pt = {
  brand: 'Property Flow Crm',
  pageTitle: 'Detalhes do Lead',
  loaded: 'Dados carregados',
  couldNotLoad: 'Não foi possível carregar',
  loadingObterLead: 'Carregando lead',
  atualizarLeadLabel: 'Atualizar lead',
  atualizarLeadLoading: 'Atualizando lead',
  couldNotAtualizarLead: 'Não foi possível atualizar lead',
};
const message_en = {
  brand: 'Property Flow Crm',
  pageTitle: 'Lead Details',
  loaded: 'Data loaded',
  couldNotLoad: 'Could not load',
  loadingObterLead: 'Loading lead',
  atualizarLeadLabel: 'Update lead',
  atualizarLeadLoading: 'Updating lead',
  couldNotAtualizarLead: 'Could not update lead',
};
type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class LeadDetailsLeadDetailsBase extends CollabLitElement {
  private readonly _stateKeys = [
    'ui.leadDetails.leadId',
    'ui.leadDetails.name',
    'ui.leadDetails.email',
    'ui.leadDetails.phone',
    'ui.leadDetails.preferences',
    'ui.leadDetails.stage',
    'ui.leadDetails.history',
    'ui.leadDetails.atualizarLead',
  ] as const;

  @property() leadId: LeadDetailsObterLeadOutput['leadId'] | undefined = undefined;

  @property() name: LeadDetailsObterLeadOutput['name'] | undefined = undefined;

  @property() email: LeadDetailsObterLeadOutput['email'] | undefined = undefined;

  @property() phone: LeadDetailsObterLeadOutput['phone'] | undefined = undefined;

  @property() preferences: LeadDetailsObterLeadOutput['preferences'] | undefined = undefined;

  @property() stage: LeadDetailsObterLeadOutput['stage'] | undefined = undefined;

  @property() history: LeadDetailsObterLeadOutput['history'] | undefined = undefined;

  @property() atualizarLeadState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

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
      case 'ui.leadDetails.leadId':
        this.leadId = (value ?? undefined) as LeadDetailsObterLeadOutput['leadId'];
        break;
      case 'ui.leadDetails.name':
        this.name = (value ?? undefined) as LeadDetailsObterLeadOutput['name'];
        break;
      case 'ui.leadDetails.email':
        this.email = (value ?? undefined) as LeadDetailsObterLeadOutput['email'];
        break;
      case 'ui.leadDetails.phone':
        this.phone = (value ?? undefined) as LeadDetailsObterLeadOutput['phone'];
        break;
      case 'ui.leadDetails.preferences':
        this.preferences = (value ?? undefined) as LeadDetailsObterLeadOutput['preferences'];
        break;
      case 'ui.leadDetails.stage':
        this.stage = (value ?? undefined) as LeadDetailsObterLeadOutput['stage'];
        break;
      case 'ui.leadDetails.history':
        this.history = (value ?? undefined) as LeadDetailsObterLeadOutput['history'];
        break;
      case 'ui.leadDetails.atualizarLead':
        this.atualizarLeadState = (value ?? 'idle') as 'idle' | 'loading' | 'success' | 'error';
        break;
      default:
        break;
    }
  }

  async loadInitialData(params?: unknown, options?: BffClientOptions): Promise<void> {
    await this.loadObterLead(params as LeadDetailsObterLeadInput | undefined, options);
  }

  async loadObterLead(params?: LeadDetailsObterLeadInput, options?: BffClientOptions): Promise<void> {
    if ((window as any).mls) {
      this.leadId = 'id-001';
      setState('ui.leadDetails.leadId', this.leadId);
      this.name = 'Ana Silva';
      setState('ui.leadDetails.name', this.name);
      this.email = 'ana@exemplo.com';
      setState('ui.leadDetails.email', this.email);
      this.phone = '11999990000';
      setState('ui.leadDetails.phone', this.phone);
      this.preferences = 'Apartamento com varanda';
      setState('ui.leadDetails.preferences', this.preferences);
      this.stage = 'Qualificado';
      setState('ui.leadDetails.stage', this.stage);
      this.history = 'Contato inicial em 2026-06-20';
      setState('ui.leadDetails.history', this.history);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<LeadDetailsObterLeadOutput>(
      'propertyFlowCrm.leadDetails.obterLead',
      params ?? ({} as LeadDetailsObterLeadInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? {
          code: 'UNEXPECTED_ERROR',
          message: this.msg.couldNotLoad,
        }) satisfies AuraNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.leadId = response.data.leadId;
    setState('ui.leadDetails.leadId', this.leadId);
    this.name = response.data.name;
    setState('ui.leadDetails.name', this.name);
    this.email = response.data.email;
    setState('ui.leadDetails.email', this.email);
    this.phone = response.data.phone;
    setState('ui.leadDetails.phone', this.phone);
    this.preferences = response.data.preferences;
    setState('ui.leadDetails.preferences', this.preferences);
    this.stage = response.data.stage;
    setState('ui.leadDetails.stage', this.stage);
    this.history = response.data.history;
    setState('ui.leadDetails.history', this.history);
    this.status = this.msg.loaded;
  }

  async atualizarLead(params: LeadDetailsAtualizarLeadInput, signal?: AbortSignal): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.leadDetails.atualizarLead', params);
      this.atualizarLeadState = 'success';
      setState('ui.leadDetails.atualizarLead', 'success');
      return;
    }
    this.atualizarLeadState = 'loading';
    setState('ui.leadDetails.atualizarLead', 'loading');
    try {
      const response = await execBff<LeadDetailsAtualizarLeadOutput>(
        'propertyFlowCrm.leadDetails.atualizarLead',
        params,
        signal ? { signal } : undefined,
      );
      if (!response.ok) throw response.error;
      this.atualizarLeadState = 'success';
      setState('ui.leadDetails.atualizarLead', 'success');
      await this.loadObterLead({ leadId: params.leadId }, { mode: 'silent' });
    } catch (e) {
      this.atualizarLeadState = 'error';
      setState('ui.leadDetails.atualizarLead', 'error');
      throw e;
    }
  }

  handleAtualizarLeadClick(): void {
    const params: LeadDetailsAtualizarLeadInput = {
      leadId: this.leadId ?? '',
      name: this.name,
      email: this.email,
      phone: this.phone,
      preferences: this.preferences,
      stage: this.stage,
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => {
        await this.atualizarLead(params, signal);
      },
      {
        busyLabel: this.msg.atualizarLeadLoading,
        errorTitle: this.msg.couldNotAtualizarLead,
        retry: () => this.atualizarLead(params),
      },
    );
  }
}
