/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';

import type {
  ListClientsInput,
  ListClientsOutput,
  CreateClientCmdInput,
  CreateClientCmdOutput,
  UpdateClientCmdInput,
  UpdateClientCmdOutput,
  DeleteClientCmdInput,
  DeleteClientCmdOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/clientManagementWorkspace.js';

import {
  listClientsRoute,
  createClientCmdRoute,
  updateClientCmdRoute,
  deleteClientCmdRoute,
} from '/_102045_/l2/buildFlowFsm/web/contracts/clientManagementWorkspace.js';

export type {
  ListClientsInput,
  ListClientsOutput,
  CreateClientCmdInput,
  CreateClientCmdOutput,
  UpdateClientCmdInput,
  UpdateClientCmdOutput,
  DeleteClientCmdInput,
  DeleteClientCmdOutput,
} from '/_102045_/l2/buildFlowFsm/web/contracts/clientManagementWorkspace.js';

/// **collab_i18n_start**
const message_en = {
"section.clientManagementWorkspace.clientListSection.title": "Client Directory",
"organism.clientManagementWorkspace.listClients.title": "Browse clients",
"intent.clientManagementWorkspace.listClients.list.title": "Browse clients",
"intent.clientManagementWorkspace.listClients.list.empty": "Nenhum registro encontrado",
"intent.clientManagementWorkspace.listClients.list.column.clients.label": "Clients",
"intent.clientManagementWorkspace.listClients.list.column.total.label": "Total",
"intent.clientManagementWorkspace.listClients.list.filter.name.label": "Name",
"intent.clientManagementWorkspace.listClients.list.filter.company.label": "Company",
"intent.clientManagementWorkspace.listClients.list.filter.email.label": "Email",
"intent.clientManagementWorkspace.listClients.list.filter.page.label": "Page",
"intent.clientManagementWorkspace.listClients.list.filter.pageSize.label": "Page Size",
"organism.clientManagementWorkspace.createClientCmd.title": "Create client",
"intent.clientManagementWorkspace.createClientCmd.form.title": "Create client",
"intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd": "Create client",
"intent.clientManagementWorkspace.createClientCmd.form.field.name.label": "Name",
"intent.clientManagementWorkspace.createClientCmd.form.field.email.label": "Email",
"intent.clientManagementWorkspace.createClientCmd.form.field.company.label": "Company",
"intent.clientManagementWorkspace.createClientCmd.form.field.phone.label": "Phone",
"intent.clientManagementWorkspace.createClientCmd.form.field.address.label": "Address",
"organism.clientManagementWorkspace.updateClientCmd.title": "Update client",
"intent.clientManagementWorkspace.updateClientCmd.form.title": "Update client",
"intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd": "Update client",
"intent.clientManagementWorkspace.updateClientCmd.form.field.name.label": "Name",
"intent.clientManagementWorkspace.updateClientCmd.form.field.company.label": "Company",
"intent.clientManagementWorkspace.updateClientCmd.form.field.email.label": "Email",
"intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label": "Phone",
"intent.clientManagementWorkspace.updateClientCmd.form.field.address.label": "Address",
"organism.clientManagementWorkspace.deleteClientCmd.title": "Delete client",
"intent.clientManagementWorkspace.deleteClientCmd.form.title": "Delete client",
"intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd": "Delete client",
"organism.clientManagementWorkspace.summary-first10.title": "Summary first",
"intent.clientManagementWorkspace.summary-first10.content.title": "Summary first"
};

const message_pt_br = {
"section.clientManagementWorkspace.clientListSection.title": "Diretório de Clientes",
"organism.clientManagementWorkspace.listClients.title": "Navegar clientes",
"intent.clientManagementWorkspace.listClients.list.title": "Navegar clientes",
"intent.clientManagementWorkspace.listClients.list.empty": "Nenhum registro encontrado",
"intent.clientManagementWorkspace.listClients.list.column.clients.label": "Clientes",
"intent.clientManagementWorkspace.listClients.list.column.total.label": "Total",
"intent.clientManagementWorkspace.listClients.list.filter.name.label": "Nome",
"intent.clientManagementWorkspace.listClients.list.filter.company.label": "Empresa",
"intent.clientManagementWorkspace.listClients.list.filter.email.label": "Email",
"intent.clientManagementWorkspace.listClients.list.filter.page.label": "Página",
"intent.clientManagementWorkspace.listClients.list.filter.pageSize.label": "Tamanho da página",
"organism.clientManagementWorkspace.createClientCmd.title": "Criar cliente",
"intent.clientManagementWorkspace.createClientCmd.form.title": "Criar cliente",
"intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd": "Criar cliente",
"intent.clientManagementWorkspace.createClientCmd.form.field.name.label": "Nome",
"intent.clientManagementWorkspace.createClientCmd.form.field.email.label": "Email",
"intent.clientManagementWorkspace.createClientCmd.form.field.company.label": "Empresa",
"intent.clientManagementWorkspace.createClientCmd.form.field.phone.label": "Telefone",
"intent.clientManagementWorkspace.createClientCmd.form.field.address.label": "Endereço",
"organism.clientManagementWorkspace.updateClientCmd.title": "Atualizar cliente",
"intent.clientManagementWorkspace.updateClientCmd.form.title": "Atualizar cliente",
"intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd": "Atualizar cliente",
"intent.clientManagementWorkspace.updateClientCmd.form.field.name.label": "Nome",
"intent.clientManagementWorkspace.updateClientCmd.form.field.company.label": "Empresa",
"intent.clientManagementWorkspace.updateClientCmd.form.field.email.label": "Email",
"intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label": "Telefone",
"intent.clientManagementWorkspace.updateClientCmd.form.field.address.label": "Endereço",
"organism.clientManagementWorkspace.deleteClientCmd.title": "Excluir cliente",
"intent.clientManagementWorkspace.deleteClientCmd.form.title": "Excluir cliente",
"intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd": "Excluir cliente",
"organism.clientManagementWorkspace.summary-first10.title": "Resumo inicial",
"intent.clientManagementWorkspace.summary-first10.content.title": "Resumo inicial"
};

const message_es = {
"section.clientManagementWorkspace.clientListSection.title": "Directorio de Clientes",
"organism.clientManagementWorkspace.listClients.title": "Explorar clientes",
"intent.clientManagementWorkspace.listClients.list.title": "Explorar clientes",
"intent.clientManagementWorkspace.listClients.list.empty": "No se encontraron registros",
"intent.clientManagementWorkspace.listClients.list.column.clients.label": "Clientes",
"intent.clientManagementWorkspace.listClients.list.column.total.label": "Total",
"intent.clientManagementWorkspace.listClients.list.filter.name.label": "Nombre",
"intent.clientManagementWorkspace.listClients.list.filter.company.label": "Empresa",
"intent.clientManagementWorkspace.listClients.list.filter.email.label": "Correo electrónico",
"intent.clientManagementWorkspace.listClients.list.filter.page.label": "Página",
"intent.clientManagementWorkspace.listClients.list.filter.pageSize.label": "Tamaño de página",
"organism.clientManagementWorkspace.createClientCmd.title": "Crear cliente",
"intent.clientManagementWorkspace.createClientCmd.form.title": "Crear cliente",
"intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd": "Crear cliente",
"intent.clientManagementWorkspace.createClientCmd.form.field.name.label": "Nombre",
"intent.clientManagementWorkspace.createClientCmd.form.field.email.label": "Correo electrónico",
"intent.clientManagementWorkspace.createClientCmd.form.field.company.label": "Empresa",
"intent.clientManagementWorkspace.createClientCmd.form.field.phone.label": "Teléfono",
"intent.clientManagementWorkspace.createClientCmd.form.field.address.label": "Dirección",
"organism.clientManagementWorkspace.updateClientCmd.title": "Actualizar cliente",
"intent.clientManagementWorkspace.updateClientCmd.form.title": "Actualizar cliente",
"intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd": "Actualizar cliente",
"intent.clientManagementWorkspace.updateClientCmd.form.field.name.label": "Nombre",
"intent.clientManagementWorkspace.updateClientCmd.form.field.company.label": "Empresa",
"intent.clientManagementWorkspace.updateClientCmd.form.field.email.label": "Correo electrónico",
"intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label": "Teléfono",
"intent.clientManagementWorkspace.updateClientCmd.form.field.address.label": "Dirección",
"organism.clientManagementWorkspace.deleteClientCmd.title": "Eliminar cliente",
"intent.clientManagementWorkspace.deleteClientCmd.form.title": "Eliminar cliente",
"intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd": "Eliminar cliente",
"organism.clientManagementWorkspace.summary-first10.title": "Resumen inicial",
"intent.clientManagementWorkspace.summary-first10.content.title": "Resumen inicial"
};

type MessageType = typeof message_en;
const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

export class BuildFlowFsmClientManagementWorkspaceBase extends CollabLitElement {
  private static readonly allStateKeys: readonly string[] = [
    'ui.clientManagementWorkspace.status',
    'ui.clientManagementWorkspace.action.listClients.status',
    'ui.clientManagementWorkspace.input.listClients.name',
    'ui.clientManagementWorkspace.input.listClients.company',
    'ui.clientManagementWorkspace.input.listClients.email',
    'ui.clientManagementWorkspace.input.listClients.page',
    'ui.clientManagementWorkspace.input.listClients.pageSize',
    'ui.clientManagementWorkspace.data.listClients',
    'ui.clientManagementWorkspace.action.createClientCmd.status',
    'ui.clientManagementWorkspace.input.createClientCmd.name',
    'ui.clientManagementWorkspace.input.createClientCmd.email',
    'ui.clientManagementWorkspace.input.createClientCmd.company',
    'ui.clientManagementWorkspace.input.createClientCmd.phone',
    'ui.clientManagementWorkspace.input.createClientCmd.address',
    'ui.clientManagementWorkspace.output.createClientCmd',
    'ui.clientManagementWorkspace.action.createClientCmd.error',
    'ui.clientManagementWorkspace.action.updateClientCmd.status',
    'ui.clientManagementWorkspace.input.updateClientCmd.clientId',
    'ui.clientManagementWorkspace.input.updateClientCmd.name',
    'ui.clientManagementWorkspace.input.updateClientCmd.company',
    'ui.clientManagementWorkspace.input.updateClientCmd.email',
    'ui.clientManagementWorkspace.input.updateClientCmd.phone',
    'ui.clientManagementWorkspace.input.updateClientCmd.address',
    'ui.clientManagementWorkspace.output.updateClientCmd',
    'ui.clientManagementWorkspace.action.updateClientCmd.error',
    'ui.clientManagementWorkspace.action.deleteClientCmd.status',
    'ui.clientManagementWorkspace.input.deleteClientCmd.clientId',
    'ui.clientManagementWorkspace.output.deleteClientCmd',
    'ui.clientManagementWorkspace.action.deleteClientCmd.error',
  ];

  /** state status — pageStatus */
  @property({ type: String }) status = '';

  /** state listClientsState — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) listClientsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state listClientsName — input */
  @property({ type: String }) listClientsName = '';

  /** state listClientsCompany — input */
  @property({ type: String }) listClientsCompany = '';

  /** state listClientsEmail — input */
  @property({ type: String }) listClientsEmail = '';

  /** state listClientsPage — input */
  @property({ type: String }) listClientsPage = '';

  /** state listClientsPageSize — input */
  @property({ type: String }) listClientsPageSize = '';

  /** state listClientsData — queryResult, outputShape: paginated */
  @property({ type: Object }) listClientsData: ListClientsOutput = { clients: [], total: 0 };

  /** state createClientCmdState — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) createClientCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state createClientCmdName — input */
  @property({ type: String }) createClientCmdName = '';

  /** state createClientCmdEmail — input */
  @property({ type: String }) createClientCmdEmail = '';

  /** state createClientCmdCompany — input */
  @property({ type: String }) createClientCmdCompany = '';

  /** state createClientCmdPhone — input */
  @property({ type: String }) createClientCmdPhone = '';

  /** state createClientCmdAddress — input */
  @property({ type: String }) createClientCmdAddress = '';

  /** state createClientCmdOutput — commandOutput */
  @property({ type: Object }) createClientCmdOutput: CreateClientCmdOutput | null = null;

  /** state createClientCmdError — actionError */
  @property({ type: String }) createClientCmdError = '';

  /** state updateClientCmdState — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) updateClientCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state updateClientCmdClientId — input, presentation: route */
  @property({ type: String }) updateClientCmdClientId = '';

  /** state updateClientCmdName — input */
  @property({ type: String }) updateClientCmdName = '';

  /** state updateClientCmdCompany — input */
  @property({ type: String }) updateClientCmdCompany = '';

  /** state updateClientCmdEmail — input */
  @property({ type: String }) updateClientCmdEmail = '';

  /** state updateClientCmdPhone — input */
  @property({ type: String }) updateClientCmdPhone = '';

  /** state updateClientCmdAddress — input */
  @property({ type: String }) updateClientCmdAddress = '';

  /** state updateClientCmdOutput — commandOutput */
  @property({ type: Object }) updateClientCmdOutput: UpdateClientCmdOutput | null = null;

  /** state updateClientCmdError — actionError */
  @property({ type: String }) updateClientCmdError = '';

  /** state deleteClientCmdState — actionStatus, values: idle|loading|success|error */
  @property({ type: String }) deleteClientCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';

  /** state deleteClientCmdClientId — input, presentation: selection */
  @property({ type: String }) deleteClientCmdClientId = '';

  /** state deleteClientCmdOutput — commandOutput */
  @property({ type: Object }) deleteClientCmdOutput: DeleteClientCmdOutput | null = null;

  /** state deleteClientCmdError — actionError */
  @property({ type: String }) deleteClientCmdError = '';

  /** i18n catalog — MessageType keys are the CLOSED msg vocabulary for page renders */
  protected get msg(): MessageType {
    const lang: string = this.getMessageKey(messages);
    return messages[lang] || message_en;
  }

  /**
   * Parse the route pattern against the current URL pathname and return
   * extracted route parameters as a key/value record.
   */
  private parseRouteParams(): Record<string, string> {
    const pattern = '/buildFlowFsm/clientManagementWorkspace/:clientId?';
    const path = window.location.pathname;
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = path.split('/').filter(Boolean);
    const result: Record<string, string> = {};
    for (let i = 0; i < patternParts.length; i++) {
      const pPart = patternParts[i]!;
      if (pPart.startsWith(':')) {
        const paramName = pPart.replace(':', '').replace('?', '');
        if (pathParts[i]) {
          result[paramName] = decodeURIComponent(pathParts[i]!);
        }
      }
    }
    return result;
  }

  /** action listClients (query) — route buildFlowFsm.clientManagementWorkspace.listClients; inputs: name, company, email, page, pageSize; writes listClientsData; status listClientsState */
  async loadListClients(): Promise<void> {
    this.listClientsState = 'loading';
    setState('ui.clientManagementWorkspace.action.listClients.status', 'loading');

    const params: ListClientsInput = {
      name: this.listClientsName || undefined,
      company: this.listClientsCompany || undefined,
      email: this.listClientsEmail || undefined,
      page: this.listClientsPage ? Number(this.listClientsPage) : undefined,
      pageSize: this.listClientsPageSize ? Number(this.listClientsPageSize) : undefined,
    };

    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListClientsOutput>(listClientsRoute, params, options);

    if (response.ok) {
      const data: ListClientsOutput = response.data ?? { clients: [], total: 0 };
      this.listClientsData = data;
      setState('ui.clientManagementWorkspace.data.listClients', data);
      this.listClientsState = 'success';
      setState('ui.clientManagementWorkspace.action.listClients.status', 'success');
    } else {
      this.listClientsState = 'error';
      setState('ui.clientManagementWorkspace.action.listClients.status', 'error');
    }
  }

  /** handler for action listClients — bind UI events here */
  handleListClientsClick(): void {
    this.loadListClients();
  }

  /** action createClientCmd (command) — route buildFlowFsm.clientManagementWorkspace.createClientCmd; inputs: name, email, company, phone, address; writes createClientCmdOutput; status createClientCmdState; feedback keys action.createClientCmd.success / action.createClientCmd.error */
  async createClientCmd(signal?: AbortSignal): Promise<void> {
    this.createClientCmdState = 'loading';
    setState('ui.clientManagementWorkspace.action.createClientCmd.status', 'loading');

    const params: CreateClientCmdInput = {
      name: this.createClientCmdName,
      email: this.createClientCmdEmail,
      company: this.createClientCmdCompany || undefined,
      phone: this.createClientCmdPhone || undefined,
      address: this.createClientCmdAddress || undefined,
    };

    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<CreateClientCmdOutput>(createClientCmdRoute, params, options);

    if (response.ok) {
      this.createClientCmdOutput = response.data ?? null;
      setState('ui.clientManagementWorkspace.output.createClientCmd', response.data ?? null);

      await this.loadListClients();
      if (this.listClientsState === 'error') {
        this.createClientCmdState = 'error';
        setState('ui.clientManagementWorkspace.action.createClientCmd.status', 'error');
        return;
      }

      this.createClientCmdName = '';
      setState('ui.clientManagementWorkspace.input.createClientCmd.name', '');
      this.createClientCmdEmail = '';
      setState('ui.clientManagementWorkspace.input.createClientCmd.email', '');
      this.createClientCmdCompany = '';
      setState('ui.clientManagementWorkspace.input.createClientCmd.company', '');
      this.createClientCmdPhone = '';
      setState('ui.clientManagementWorkspace.input.createClientCmd.phone', '');
      this.createClientCmdAddress = '';
      setState('ui.clientManagementWorkspace.input.createClientCmd.address', '');

      this.createClientCmdState = 'success';
      setState('ui.clientManagementWorkspace.action.createClientCmd.status', 'success');
    } else {
      const errorObj = response.error as { message?: string } | null;
      const errorMsg = errorObj?.message ?? '';
      this.createClientCmdError = errorMsg;
      setState('ui.clientManagementWorkspace.action.createClientCmd.error', errorMsg);
      this.createClientCmdState = 'error';
      setState('ui.clientManagementWorkspace.action.createClientCmd.status', 'error');
    }
  }

  /** handler for action createClientCmd — bind UI events here */
  handleCreateClientCmdClick(): void {
    runBlockingUiAction(async (signal: AbortSignal) => {
      await this.createClientCmd(signal);
    });
  }

  /** action updateClientCmd (command) — route buildFlowFsm.clientManagementWorkspace.updateClientCmd; inputs: clientId, name, company, email, phone, address; writes updateClientCmdOutput; status updateClientCmdState; feedback keys action.updateClientCmd.success / action.updateClientCmd.error */
  async updateClientCmd(signal?: AbortSignal): Promise<void> {
    const routeParams = this.parseRouteParams();
    const routeClientId = routeParams['clientId'];
    if (routeClientId) {
      this.updateClientCmdClientId = routeClientId;
      setState('ui.clientManagementWorkspace.input.updateClientCmd.clientId', routeClientId);
    }

    if (!this.updateClientCmdClientId) {
      this.updateClientCmdState = 'idle';
      setState('ui.clientManagementWorkspace.action.updateClientCmd.status', 'idle');
      return;
    }

    this.updateClientCmdState = 'loading';
    setState('ui.clientManagementWorkspace.action.updateClientCmd.status', 'loading');

    const params: UpdateClientCmdInput = {
      clientId: this.updateClientCmdClientId,
      name: this.updateClientCmdName,
      company: this.updateClientCmdCompany || undefined,
      email: this.updateClientCmdEmail,
      phone: this.updateClientCmdPhone || undefined,
      address: this.updateClientCmdAddress || undefined,
    };

    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<UpdateClientCmdOutput>(updateClientCmdRoute, params, options);

    if (response.ok) {
      this.updateClientCmdOutput = response.data ?? null;
      setState('ui.clientManagementWorkspace.output.updateClientCmd', response.data ?? null);

      await this.loadListClients();
      if (this.listClientsState === 'error') {
        this.updateClientCmdState = 'error';
        setState('ui.clientManagementWorkspace.action.updateClientCmd.status', 'error');
        return;
      }

      this.updateClientCmdName = '';
      setState('ui.clientManagementWorkspace.input.updateClientCmd.name', '');
      this.updateClientCmdCompany = '';
      setState('ui.clientManagementWorkspace.input.updateClientCmd.company', '');
      this.updateClientCmdEmail = '';
      setState('ui.clientManagementWorkspace.input.updateClientCmd.email', '');
      this.updateClientCmdPhone = '';
      setState('ui.clientManagementWorkspace.input.updateClientCmd.phone', '');
      this.updateClientCmdAddress = '';
      setState('ui.clientManagementWorkspace.input.updateClientCmd.address', '');

      this.updateClientCmdState = 'success';
      setState('ui.clientManagementWorkspace.action.updateClientCmd.status', 'success');
    } else {
      const errorObj = response.error as { message?: string } | null;
      const errorMsg = errorObj?.message ?? '';
      this.updateClientCmdError = errorMsg;
      setState('ui.clientManagementWorkspace.action.updateClientCmd.error', errorMsg);
      this.updateClientCmdState = 'error';
      setState('ui.clientManagementWorkspace.action.updateClientCmd.status', 'error');
    }
  }

  /** handler for action updateClientCmd — bind UI events here */
  handleUpdateClientCmdClick(): void {
    runBlockingUiAction(async (signal: AbortSignal) => {
      await this.updateClientCmd(signal);
    });
  }

  /** action deleteClientCmd (command) — route buildFlowFsm.clientManagementWorkspace.deleteClientCmd; inputs: clientId; writes deleteClientCmdOutput; status deleteClientCmdState; feedback keys action.deleteClientCmd.success / action.deleteClientCmd.error */
  async deleteClientCmd(signal?: AbortSignal): Promise<void> {
    if (!this.deleteClientCmdClientId) {
      this.deleteClientCmdState = 'idle';
      setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'idle');
      return;
    }

    this.deleteClientCmdState = 'loading';
    setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'loading');

    const params: DeleteClientCmdInput = {
      clientId: this.deleteClientCmdClientId,
    };

    const options: BffClientOptions = { mode: 'blocking', signal };
    const response = await execBff<DeleteClientCmdOutput>(deleteClientCmdRoute, params, options);

    if (response.ok) {
      this.deleteClientCmdOutput = response.data ?? null;
      setState('ui.clientManagementWorkspace.output.deleteClientCmd', response.data ?? null);

      await this.loadListClients();
      if (this.listClientsState === 'error') {
        this.deleteClientCmdState = 'error';
        setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'error');
        return;
      }

      this.deleteClientCmdClientId = '';
      setState('ui.clientManagementWorkspace.input.deleteClientCmd.clientId', '');

      this.deleteClientCmdState = 'success';
      setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'success');
    } else {
      const errorObj = response.error as { message?: string } | null;
      const errorMsg = errorObj?.message ?? '';
      this.deleteClientCmdError = errorMsg;
      setState('ui.clientManagementWorkspace.action.deleteClientCmd.error', errorMsg);
      this.deleteClientCmdState = 'error';
      setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'error');
    }
  }

  /** handler for action deleteClientCmd — bind UI events here */
  handleDeleteClientCmdClick(): void {
    runBlockingUiAction(async (signal: AbortSignal) => {
      await this.deleteClientCmd(signal);
    });
  }

  /** setter for state listClientsName */
  setListClientsName(value: string): void {
    this.listClientsName = value;
    setState('ui.clientManagementWorkspace.input.listClients.name', value);
    this.requestUpdate();
  }

  /** handler for action set.listClientsName — bind UI events here */
  handleListClientsNameChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setListClientsName(value);
  }

  /** setter for state listClientsCompany */
  setListClientsCompany(value: string): void {
    this.listClientsCompany = value;
    setState('ui.clientManagementWorkspace.input.listClients.company', value);
    this.requestUpdate();
  }

  /** handler for action set.listClientsCompany — bind UI events here */
  handleListClientsCompanyChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setListClientsCompany(value);
  }

  /** setter for state listClientsEmail */
  setListClientsEmail(value: string): void {
    this.listClientsEmail = value;
    setState('ui.clientManagementWorkspace.input.listClients.email', value);
    this.requestUpdate();
  }

  /** handler for action set.listClientsEmail — bind UI events here */
  handleListClientsEmailChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setListClientsEmail(value);
  }

  /** setter for state listClientsPage */
  setListClientsPage(value: string): void {
    this.listClientsPage = value;
    setState('ui.clientManagementWorkspace.input.listClients.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listClientsPage — bind UI events here */
  handleListClientsPageChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setListClientsPage(value);
  }

  /** setter for state listClientsPageSize */
  setListClientsPageSize(value: string): void {
    this.listClientsPageSize = value;
    setState('ui.clientManagementWorkspace.input.listClients.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listClientsPageSize — bind UI events here */
  handleListClientsPageSizeChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setListClientsPageSize(value);
  }

  /** setter for state createClientCmdName */
  setCreateClientCmdName(value: string): void {
    this.createClientCmdName = value;
    setState('ui.clientManagementWorkspace.input.createClientCmd.name', value);
    this.requestUpdate();
  }

  /** handler for action set.createClientCmdName — bind UI events here */
  handleCreateClientCmdNameChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateClientCmdName(value);
  }

  /** setter for state createClientCmdEmail */
  setCreateClientCmdEmail(value: string): void {
    this.createClientCmdEmail = value;
    setState('ui.clientManagementWorkspace.input.createClientCmd.email', value);
    this.requestUpdate();
  }

  /** handler for action set.createClientCmdEmail — bind UI events here */
  handleCreateClientCmdEmailChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateClientCmdEmail(value);
  }

  /** setter for state createClientCmdCompany */
  setCreateClientCmdCompany(value: string): void {
    this.createClientCmdCompany = value;
    setState('ui.clientManagementWorkspace.input.createClientCmd.company', value);
    this.requestUpdate();
  }

  /** handler for action set.createClientCmdCompany — bind UI events here */
  handleCreateClientCmdCompanyChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateClientCmdCompany(value);
  }

  /** setter for state createClientCmdPhone */
  setCreateClientCmdPhone(value: string): void {
    this.createClientCmdPhone = value;
    setState('ui.clientManagementWorkspace.input.createClientCmd.phone', value);
    this.requestUpdate();
  }

  /** handler for action set.createClientCmdPhone — bind UI events here */
  handleCreateClientCmdPhoneChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateClientCmdPhone(value);
  }

  /** setter for state createClientCmdAddress */
  setCreateClientCmdAddress(value: string): void {
    this.createClientCmdAddress = value;
    setState('ui.clientManagementWorkspace.input.createClientCmd.address', value);
    this.requestUpdate();
  }

  /** handler for action set.createClientCmdAddress — bind UI events here */
  handleCreateClientCmdAddressChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setCreateClientCmdAddress(value);
  }

  /** setter for state updateClientCmdClientId */
  setUpdateClientCmdClientId(value: string): void {
    this.updateClientCmdClientId = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdClientId — bind UI events here */
  handleUpdateClientCmdClientIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateClientCmdClientId(value);
  }

  /** setter for state updateClientCmdName */
  setUpdateClientCmdName(value: string): void {
    this.updateClientCmdName = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.name', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdName — bind UI events here */
  handleUpdateClientCmdNameChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateClientCmdName(value);
  }

  /** setter for state updateClientCmdCompany */
  setUpdateClientCmdCompany(value: string): void {
    this.updateClientCmdCompany = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.company', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdCompany — bind UI events here */
  handleUpdateClientCmdCompanyChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateClientCmdCompany(value);
  }

  /** setter for state updateClientCmdEmail */
  setUpdateClientCmdEmail(value: string): void {
    this.updateClientCmdEmail = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.email', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdEmail — bind UI events here */
  handleUpdateClientCmdEmailChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateClientCmdEmail(value);
  }

  /** setter for state updateClientCmdPhone */
  setUpdateClientCmdPhone(value: string): void {
    this.updateClientCmdPhone = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.phone', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdPhone — bind UI events here */
  handleUpdateClientCmdPhoneChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateClientCmdPhone(value);
  }

  /** setter for state updateClientCmdAddress */
  setUpdateClientCmdAddress(value: string): void {
    this.updateClientCmdAddress = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.address', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdAddress — bind UI events here */
  handleUpdateClientCmdAddressChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setUpdateClientCmdAddress(value);
  }

  /** setter for state deleteClientCmdClientId */
  setDeleteClientCmdClientId(value: string): void {
    this.deleteClientCmdClientId = value;
    setState('ui.clientManagementWorkspace.input.deleteClientCmd.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.deleteClientCmdClientId — bind UI events here */
  handleDeleteClientCmdClientIdChange(e: Event): void {
    const value = (e.target as HTMLInputElement).value;
    this.setDeleteClientCmdClientId(value);
  }

  /**
   * collabState notify contract — assigns incoming state values to mapped
   * class fields and requests a re-render.
   */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.clientManagementWorkspace.status':
        this.status = value as string;
        break;
      case 'ui.clientManagementWorkspace.action.listClients.status':
        this.listClientsState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.name':
        this.listClientsName = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.listClients.company':
        this.listClientsCompany = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.listClients.email':
        this.listClientsEmail = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.listClients.page':
        this.listClientsPage = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.listClients.pageSize':
        this.listClientsPageSize = value as string;
        break;
      case 'ui.clientManagementWorkspace.data.listClients':
        this.listClientsData = value as ListClientsOutput;
        break;
      case 'ui.clientManagementWorkspace.action.createClientCmd.status':
        this.createClientCmdState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.name':
        this.createClientCmdName = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.email':
        this.createClientCmdEmail = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.company':
        this.createClientCmdCompany = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.phone':
        this.createClientCmdPhone = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.address':
        this.createClientCmdAddress = value as string;
        break;
      case 'ui.clientManagementWorkspace.output.createClientCmd':
        this.createClientCmdOutput = value as CreateClientCmdOutput | null;
        break;
      case 'ui.clientManagementWorkspace.action.createClientCmd.error':
        this.createClientCmdError = value as string;
        break;
      case 'ui.clientManagementWorkspace.action.updateClientCmd.status':
        this.updateClientCmdState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.clientId':
        this.updateClientCmdClientId = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.name':
        this.updateClientCmdName = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.company':
        this.updateClientCmdCompany = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.email':
        this.updateClientCmdEmail = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.phone':
        this.updateClientCmdPhone = value as string;
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.address':
        this.updateClientCmdAddress = value as string;
        break;
      case 'ui.clientManagementWorkspace.output.updateClientCmd':
        this.updateClientCmdOutput = value as UpdateClientCmdOutput | null;
        break;
      case 'ui.clientManagementWorkspace.action.updateClientCmd.error':
        this.updateClientCmdError = value as string;
        break;
      case 'ui.clientManagementWorkspace.action.deleteClientCmd.status':
        this.deleteClientCmdState = value as 'idle' | 'loading' | 'success' | 'error';
        break;
      case 'ui.clientManagementWorkspace.input.deleteClientCmd.clientId':
        this.deleteClientCmdClientId = value as string;
        break;
      case 'ui.clientManagementWorkspace.output.deleteClientCmd':
        this.deleteClientCmdOutput = value as DeleteClientCmdOutput | null;
        break;
      case 'ui.clientManagementWorkspace.action.deleteClientCmd.error':
        this.deleteClientCmdError = value as string;
        break;
      default:
        break;
    }
    this.requestUpdate();
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.status = (getState('ui.clientManagementWorkspace.status') as string) ?? '';
    this.listClientsState = (getState('ui.clientManagementWorkspace.action.listClients.status') as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
    this.listClientsName = (getState('ui.clientManagementWorkspace.input.listClients.name') as string) ?? '';
    this.listClientsCompany = (getState('ui.clientManagementWorkspace.input.listClients.company') as string) ?? '';
    this.listClientsEmail = (getState('ui.clientManagementWorkspace.input.listClients.email') as string) ?? '';
    this.listClientsPage = (getState('ui.clientManagementWorkspace.input.listClients.page') as string) ?? '';
    this.listClientsPageSize = (getState('ui.clientManagementWorkspace.input.listClients.pageSize') as string) ?? '';
    const storedListClientsData = getState('ui.clientManagementWorkspace.data.listClients') as ListClientsOutput | undefined;
    this.listClientsData = storedListClientsData ?? { clients: [], total: 0 };
    this.createClientCmdState = (getState('ui.clientManagementWorkspace.action.createClientCmd.status') as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
    this.createClientCmdName = (getState('ui.clientManagementWorkspace.input.createClientCmd.name') as string) ?? '';
    this.createClientCmdEmail = (getState('ui.clientManagementWorkspace.input.createClientCmd.email') as string) ?? '';
    this.createClientCmdCompany = (getState('ui.clientManagementWorkspace.input.createClientCmd.company') as string) ?? '';
    this.createClientCmdPhone = (getState('ui.clientManagementWorkspace.input.createClientCmd.phone') as string) ?? '';
    this.createClientCmdAddress = (getState('ui.clientManagementWorkspace.input.createClientCmd.address') as string) ?? '';
    this.createClientCmdOutput = (getState('ui.clientManagementWorkspace.output.createClientCmd') as CreateClientCmdOutput | null) ?? null;
    this.createClientCmdError = (getState('ui.clientManagementWorkspace.action.createClientCmd.error') as string) ?? '';
    this.updateClientCmdState = (getState('ui.clientManagementWorkspace.action.updateClientCmd.status') as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
    this.updateClientCmdName = (getState('ui.clientManagementWorkspace.input.updateClientCmd.name') as string) ?? '';
    this.updateClientCmdCompany = (getState('ui.clientManagementWorkspace.input.updateClientCmd.company') as string) ?? '';
    this.updateClientCmdEmail = (getState('ui.clientManagementWorkspace.input.updateClientCmd.email') as string) ?? '';
    this.updateClientCmdPhone = (getState('ui.clientManagementWorkspace.input.updateClientCmd.phone') as string) ?? '';
    this.updateClientCmdAddress = (getState('ui.clientManagementWorkspace.input.updateClientCmd.address') as string) ?? '';
    this.updateClientCmdOutput = (getState('ui.clientManagementWorkspace.output.updateClientCmd') as UpdateClientCmdOutput | null) ?? null;
    this.updateClientCmdError = (getState('ui.clientManagementWorkspace.action.updateClientCmd.error') as string) ?? '';
    this.deleteClientCmdState = (getState('ui.clientManagementWorkspace.action.deleteClientCmd.status') as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
    this.deleteClientCmdClientId = (getState('ui.clientManagementWorkspace.input.deleteClientCmd.clientId') as string) ?? '';
    this.deleteClientCmdOutput = (getState('ui.clientManagementWorkspace.output.deleteClientCmd') as DeleteClientCmdOutput | null) ?? null;
    this.deleteClientCmdError = (getState('ui.clientManagementWorkspace.action.deleteClientCmd.error') as string) ?? '';

    const routeParams = this.parseRouteParams();
    const routeClientId = routeParams['clientId'];
    if (routeClientId) {
      this.updateClientCmdClientId = routeClientId;
      setState('ui.clientManagementWorkspace.input.updateClientCmd.clientId', routeClientId);
    }

    subscribe([...BuildFlowFsmClientManagementWorkspaceBase.allStateKeys], this);

    this.loadListClients();
  }

  disconnectedCallback(): void {
    unsubscribe([...BuildFlowFsmClientManagementWorkspaceBase.allStateKeys], this);
    super.disconnectedCallback();
  }
}
