/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/visitsAgenda.ts" enhancement="_102027_/l2/enhancementLit.ts" />

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
  VisitsAgendaListarVisitasInput,
  VisitsAgendaListarVisitasOutput,
  VisitsAgendaAgendarVisitaInput,
  VisitsAgendaAgendarVisitaOutput,
  VisitsAgendaObterVisitaInput,
  VisitsAgendaObterVisitaOutput,
  VisitsAgendaAtualizarStatusVisitaInput,
  VisitsAgendaAtualizarStatusVisitaOutput,
  VisitsAgendaListarSolicitacoesAgendamentoVisitaInput,
  VisitsAgendaListarSolicitacoesAgendamentoVisitaOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/visitsAgenda.js';

/// **collab_i18n_start**
const message_pt = {
  brand: 'Property Flow CRM',
  pageTitle: 'Agenda de Visitas',
  loaded: 'Dados carregados',
  couldNotLoad: 'Não foi possível carregar',
  loadingListarVisitas: 'Carregando visitas...',
  loadingObterVisita: 'Carregando visita...',
  loadingListarSolicitacoesAgendamentoVisita: 'Carregando solicitações...',
  agendarVisitaLabel: 'Agendar visita',
  agendarVisitaLoading: 'Agendando...',
  couldNotAgendarVisita: 'Não foi possível agendar',
  atualizarStatusVisitaLabel: 'Atualizar status',
  atualizarStatusVisitaLoading: 'Atualizando...',
  couldNotAtualizarStatusVisita: 'Não foi possível atualizar',
};

const message_en = {
  brand: 'Property Flow CRM',
  pageTitle: 'Visits Agenda',
  loaded: 'Data loaded',
  couldNotLoad: 'Could not load',
  loadingListarVisitas: 'Loading visits...',
  loadingObterVisita: 'Loading visit...',
  loadingListarSolicitacoesAgendamentoVisita: 'Loading requests...',
  agendarVisitaLabel: 'Schedule visit',
  agendarVisitaLoading: 'Scheduling...',
  couldNotAgendarVisita: 'Could not schedule',
  atualizarStatusVisitaLabel: 'Update status',
  atualizarStatusVisitaLoading: 'Updating...',
  couldNotAtualizarStatusVisita: 'Could not update',
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { en: message_en, pt: message_pt };
/// **collab_i18n_end**

export class VisitsAgendaVisitsAgendaBase extends CollabLitElement {
  private readonly _stateKeys = [
    'ui.visitsAgenda.visitas',
    'ui.visitsAgenda.visita',
    'ui.visitsAgenda.solicitacoesAgendamentoVisita',
    'ui.visitsAgenda.agendarVisita',
    'ui.visitsAgenda.atualizarStatusVisita',
  ] as const;

  @property() visitas: VisitsAgendaListarVisitasOutput = [];
  @property() visita: VisitsAgendaObterVisitaOutput | undefined = undefined;
  @property() solicitacoesAgendamentoVisita: VisitsAgendaListarSolicitacoesAgendamentoVisitaOutput = [];
  @property() agendarVisitaState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property() atualizarStatusVisitaState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  @property() status: string = '';
  @property() agendarPropertyId: string = '';
  @property() agendarLeadId: string = '';
  @property() agendarRequestedStartAt: string = '';
  @property() agendarRequestedEndAt: string | undefined = undefined;
  @property() agendarNotes: string | undefined = undefined;
  @property() atualizarNovoStatus: string = '';
  @property() atualizarRequestedStartAt: string | undefined = undefined;
  @property() atualizarRequestedEndAt: string | undefined = undefined;

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
      case 'ui.visitsAgenda.visitas':
        this.visitas = value ?? [];
        break;
      case 'ui.visitsAgenda.visita':
        this.visita = value;
        break;
      case 'ui.visitsAgenda.solicitacoesAgendamentoVisita':
        this.solicitacoesAgendamentoVisita = value ?? [];
        break;
      case 'ui.visitsAgenda.agendarVisita':
        this.agendarVisitaState = value ?? 'idle';
        break;
      case 'ui.visitsAgenda.atualizarStatusVisita':
        this.atualizarStatusVisitaState = value ?? 'idle';
        break;
    }
  }

  async loadInitialData(params?: unknown, options?: BffClientOptions): Promise<void> {
    await this.loadListarVisitas(params as VisitsAgendaListarVisitasInput, options);
    await this.loadObterVisita(undefined, options);
    await this.loadListarSolicitacoesAgendamentoVisita(undefined, options);
  }

  async loadListarVisitas(params?: VisitsAgendaListarVisitasInput, options?: BffClientOptions): Promise<void> {
    if ((window as any).mls) {
      this.visitas = [
        {
          visitId: 'id-001',
          status: 'scheduled',
          scheduledAt: '2026-06-23T10:00:00Z',
          propertyId: 'prop-001',
          leadId: 'lead-001',
        },
        {
          visitId: 'id-002',
          status: 'completed',
          scheduledAt: '2026-06-24T14:00:00Z',
          propertyId: 'prop-002',
          leadId: 'lead-002',
        },
      ] as VisitsAgendaListarVisitasOutput;
      setState('ui.visitsAgenda.visitas', this.visitas);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<VisitsAgendaListarVisitasOutput>(
      'propertyFlowCrm.visitsAgenda.listarVisitas',
      params ?? ({} as VisitsAgendaListarVisitasInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies AuraNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.visitas = response.data;
    setState('ui.visitsAgenda.visitas', this.visitas);
    this.status = this.msg.loaded;
  }

  async loadObterVisita(params?: VisitsAgendaObterVisitaInput, options?: BffClientOptions): Promise<void> {
    if ((window as any).mls) {
      this.visita = {
        visitId: 'id-001',
        status: 'scheduled',
        scheduledAt: '2026-06-23T10:00:00Z',
        propertyId: 'prop-001',
        leadId: 'lead-001',
      };
      setState('ui.visitsAgenda.visita', this.visita);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<VisitsAgendaObterVisitaOutput>(
      'propertyFlowCrm.visitsAgenda.obterVisita',
      params ?? ({} as VisitsAgendaObterVisitaInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies AuraNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.visita = response.data;
    setState('ui.visitsAgenda.visita', this.visita);
    this.status = this.msg.loaded;
  }

  async loadListarSolicitacoesAgendamentoVisita(params?: VisitsAgendaListarSolicitacoesAgendamentoVisitaInput, options?: BffClientOptions): Promise<void> {
    if ((window as any).mls) {
      this.solicitacoesAgendamentoVisita = [
        {
          visitScheduleRequestId: 'id-001',
          status: 'pending',
          requestedStartAt: '2026-06-25T09:00:00Z',
          propertyId: 'prop-001',
          leadId: 'lead-001',
          visitId: 'visit-001',
        },
        {
          visitScheduleRequestId: 'id-002',
          status: 'approved',
          requestedStartAt: '2026-06-26T11:00:00Z',
          propertyId: 'prop-002',
          leadId: 'lead-002',
          visitId: 'visit-002',
        },
      ] as VisitsAgendaListarSolicitacoesAgendamentoVisitaOutput;
      setState('ui.visitsAgenda.solicitacoesAgendamentoVisita', this.solicitacoesAgendamentoVisita);
      this.status = this.msg.loaded;
      return;
    }
    const response = await execBff<VisitsAgendaListarSolicitacoesAgendamentoVisitaOutput>(
      'propertyFlowCrm.visitsAgenda.listarSolicitacoesAgendamentoVisita',
      params ?? ({} as VisitsAgendaListarSolicitacoesAgendamentoVisitaInput),
      options,
    );
    if (!response.ok || !response.data) {
      if (options?.mode === 'blocking') {
        throw (response.error ?? { code: 'UNEXPECTED_ERROR', message: this.msg.couldNotLoad }) satisfies AuraNormalizedError;
      }
      this.status = this.msg.couldNotLoad;
      return;
    }
    this.solicitacoesAgendamentoVisita = response.data;
    setState('ui.visitsAgenda.solicitacoesAgendamentoVisita', this.solicitacoesAgendamentoVisita);
    this.status = this.msg.loaded;
  }

  async agendarVisita(params: VisitsAgendaAgendarVisitaInput, signal?: AbortSignal): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.visitsAgenda.agendarVisita', params);
      this.agendarVisitaState = 'success';
      setState('ui.visitsAgenda.agendarVisita', 'success');
      return;
    }
    this.agendarVisitaState = 'loading';
    setState('ui.visitsAgenda.agendarVisita', 'loading');
    try {
      const response = await execBff<VisitsAgendaAgendarVisitaOutput>(
        'propertyFlowCrm.visitsAgenda.agendarVisita',
        params,
        signal ? { signal } : undefined
      );
      if (!response.ok) throw response.error;
      this.agendarVisitaState = 'success';
      setState('ui.visitsAgenda.agendarVisita', 'success');
    } catch (e) {
      this.agendarVisitaState = 'error';
      setState('ui.visitsAgenda.agendarVisita', 'error');
      throw e;
    }
  }

  handleAgendarVisitaClick(): void {
    const params = {
      propertyId: this.agendarPropertyId,
      leadId: this.agendarLeadId,
      requestedStartAt: this.agendarRequestedStartAt,
      requestedEndAt: this.agendarRequestedEndAt,
      notes: this.agendarNotes,
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => { await this.agendarVisita(params, signal); },
      {
        busyLabel: this.msg.agendarVisitaLoading,
        errorTitle: this.msg.couldNotAgendarVisita,
        retry: () => this.agendarVisita(params),
      },
    );
  }

  async atualizarStatusVisita(params: VisitsAgendaAtualizarStatusVisitaInput, signal?: AbortSignal): Promise<void> {
    if ((window as any).mls) {
      console.log('[mls mock] propertyFlowCrm.visitsAgenda.atualizarStatusVisita', params);
      this.atualizarStatusVisitaState = 'success';
      setState('ui.visitsAgenda.atualizarStatusVisita', 'success');
      return;
    }
    this.atualizarStatusVisitaState = 'loading';
    setState('ui.visitsAgenda.atualizarStatusVisita', 'loading');
    try {
      const response = await execBff<VisitsAgendaAtualizarStatusVisitaOutput>(
        'propertyFlowCrm.visitsAgenda.atualizarStatusVisita',
        params,
        signal ? { signal } : undefined
      );
      if (!response.ok) throw response.error;
      this.atualizarStatusVisitaState = 'success';
      setState('ui.visitsAgenda.atualizarStatusVisita', 'success');
    } catch (e) {
      this.atualizarStatusVisitaState = 'error';
      setState('ui.visitsAgenda.atualizarStatusVisita', 'error');
      throw e;
    }
  }

  handleAtualizarStatusVisitaClick(): void {
    const params = {
      visitId: this.visita?.visitId ?? '',
      novoStatus: this.atualizarNovoStatus,
      requestedStartAt: this.atualizarRequestedStartAt,
      requestedEndAt: this.atualizarRequestedEndAt,
    };
    void runBlockingUiAction(
      async (signal: AbortSignal) => { await this.atualizarStatusVisita(params, signal); },
      {
        busyLabel: this.msg.atualizarStatusVisitaLoading,
        errorTitle: this.msg.couldNotAtualizarStatusVisita,
        retry: () => this.atualizarStatusVisita(params),
      },
    );
  }
}
