/// <mls fileReference="_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { CollabLitElement } from '/_102029_/l2/collabLitElement.js';
import { property } from 'lit/decorators.js';
import { execBff, type BffClientOptions } from '/_102029_/l2/bffClient.js';
import { getState, setState, subscribe, unsubscribe } from '/_102029_/l2/collabState.js';
import { runBlockingUiAction } from '/_102029_/l2/interactionRuntime.js';
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
  'section.clientManagementWorkspace.clientListSection.title': 'Client Directory',
  'organism.clientManagementWorkspace.listClients.title': 'Browse clients',
  'intent.clientManagementWorkspace.listClients.list.title': 'Browse clients',
  'intent.clientManagementWorkspace.listClients.list.empty': 'Nenhum registro encontrado',
  'intent.clientManagementWorkspace.listClients.list.column.clients.label': 'Clients',
  'intent.clientManagementWorkspace.listClients.list.column.total.label': 'Total',
  'intent.clientManagementWorkspace.listClients.list.filter.name.label': 'Name',
  'intent.clientManagementWorkspace.listClients.list.filter.company.label': 'Company',
  'intent.clientManagementWorkspace.listClients.list.filter.email.label': 'Email',
  'intent.clientManagementWorkspace.listClients.list.filter.page.label': 'Page',
  'intent.clientManagementWorkspace.listClients.list.filter.pageSize.label': 'Page Size',
  'organism.clientManagementWorkspace.createClientCmd.title': 'Create client',
  'intent.clientManagementWorkspace.createClientCmd.form.title': 'Create client',
  'intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd': 'Create client',
  'intent.clientManagementWorkspace.createClientCmd.form.field.name.label': 'Name',
  'intent.clientManagementWorkspace.createClientCmd.form.field.email.label': 'Email',
  'intent.clientManagementWorkspace.createClientCmd.form.field.company.label': 'Company',
  'intent.clientManagementWorkspace.createClientCmd.form.field.phone.label': 'Phone',
  'intent.clientManagementWorkspace.createClientCmd.form.field.address.label': 'Address',
  'organism.clientManagementWorkspace.updateClientCmd.title': 'Update client',
  'intent.clientManagementWorkspace.updateClientCmd.form.title': 'Update client',
  'intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd': 'Update client',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.name.label': 'Name',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.company.label': 'Company',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.email.label': 'Email',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label': 'Phone',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.address.label': 'Address',
  'organism.clientManagementWorkspace.deleteClientCmd.title': 'Delete client',
  'intent.clientManagementWorkspace.deleteClientCmd.form.title': 'Delete client',
  'intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd': 'Delete client',
  'action.createClientCmd.success': 'Create client: OK',
  'action.createClientCmd.error': 'Create client: falhou',
  'action.updateClientCmd.success': 'Update client: OK',
  'action.updateClientCmd.error': 'Update client: falhou',
  'action.deleteClientCmd.success': 'Delete client: OK',
  'action.deleteClientCmd.error': 'Delete client: falhou',
};
export type MessageType = typeof message_en;
const message_pt_br: MessageType = {
  'section.clientManagementWorkspace.clientListSection.title': 'Client Directory',
  'organism.clientManagementWorkspace.listClients.title': 'Browse clients',
  'intent.clientManagementWorkspace.listClients.list.title': 'Browse clients',
  'intent.clientManagementWorkspace.listClients.list.empty': 'Nenhum registro encontrado',
  'intent.clientManagementWorkspace.listClients.list.column.clients.label': 'Clients',
  'intent.clientManagementWorkspace.listClients.list.column.total.label': 'Total',
  'intent.clientManagementWorkspace.listClients.list.filter.name.label': 'Name',
  'intent.clientManagementWorkspace.listClients.list.filter.company.label': 'Company',
  'intent.clientManagementWorkspace.listClients.list.filter.email.label': 'Email',
  'intent.clientManagementWorkspace.listClients.list.filter.page.label': 'Page',
  'intent.clientManagementWorkspace.listClients.list.filter.pageSize.label': 'Page Size',
  'organism.clientManagementWorkspace.createClientCmd.title': 'Create client',
  'intent.clientManagementWorkspace.createClientCmd.form.title': 'Create client',
  'intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd': 'Create client',
  'intent.clientManagementWorkspace.createClientCmd.form.field.name.label': 'Name',
  'intent.clientManagementWorkspace.createClientCmd.form.field.email.label': 'Email',
  'intent.clientManagementWorkspace.createClientCmd.form.field.company.label': 'Company',
  'intent.clientManagementWorkspace.createClientCmd.form.field.phone.label': 'Phone',
  'intent.clientManagementWorkspace.createClientCmd.form.field.address.label': 'Address',
  'organism.clientManagementWorkspace.updateClientCmd.title': 'Update client',
  'intent.clientManagementWorkspace.updateClientCmd.form.title': 'Update client',
  'intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd': 'Update client',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.name.label': 'Name',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.company.label': 'Company',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.email.label': 'Email',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label': 'Phone',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.address.label': 'Address',
  'organism.clientManagementWorkspace.deleteClientCmd.title': 'Delete client',
  'intent.clientManagementWorkspace.deleteClientCmd.form.title': 'Delete client',
  'intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd': 'Delete client',
  'action.createClientCmd.success': 'Create client: OK',
  'action.createClientCmd.error': 'Create client: falhou',
  'action.updateClientCmd.success': 'Update client: OK',
  'action.updateClientCmd.error': 'Update client: falhou',
  'action.deleteClientCmd.success': 'Delete client: OK',
  'action.deleteClientCmd.error': 'Delete client: falhou',
};
const message_es: MessageType = {
  'section.clientManagementWorkspace.clientListSection.title': 'Client Directory',
  'organism.clientManagementWorkspace.listClients.title': 'Browse clients',
  'intent.clientManagementWorkspace.listClients.list.title': 'Browse clients',
  'intent.clientManagementWorkspace.listClients.list.empty': 'Nenhum registro encontrado',
  'intent.clientManagementWorkspace.listClients.list.column.clients.label': 'Clients',
  'intent.clientManagementWorkspace.listClients.list.column.total.label': 'Total',
  'intent.clientManagementWorkspace.listClients.list.filter.name.label': 'Name',
  'intent.clientManagementWorkspace.listClients.list.filter.company.label': 'Company',
  'intent.clientManagementWorkspace.listClients.list.filter.email.label': 'Email',
  'intent.clientManagementWorkspace.listClients.list.filter.page.label': 'Page',
  'intent.clientManagementWorkspace.listClients.list.filter.pageSize.label': 'Page Size',
  'organism.clientManagementWorkspace.createClientCmd.title': 'Create client',
  'intent.clientManagementWorkspace.createClientCmd.form.title': 'Create client',
  'intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd': 'Create client',
  'intent.clientManagementWorkspace.createClientCmd.form.field.name.label': 'Name',
  'intent.clientManagementWorkspace.createClientCmd.form.field.email.label': 'Email',
  'intent.clientManagementWorkspace.createClientCmd.form.field.company.label': 'Company',
  'intent.clientManagementWorkspace.createClientCmd.form.field.phone.label': 'Phone',
  'intent.clientManagementWorkspace.createClientCmd.form.field.address.label': 'Address',
  'organism.clientManagementWorkspace.updateClientCmd.title': 'Update client',
  'intent.clientManagementWorkspace.updateClientCmd.form.title': 'Update client',
  'intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd': 'Update client',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.name.label': 'Name',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.company.label': 'Company',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.email.label': 'Email',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label': 'Phone',
  'intent.clientManagementWorkspace.updateClientCmd.form.field.address.label': 'Address',
  'organism.clientManagementWorkspace.deleteClientCmd.title': 'Delete client',
  'intent.clientManagementWorkspace.deleteClientCmd.form.title': 'Delete client',
  'intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd': 'Delete client',
  'action.createClientCmd.success': 'Create client: OK',
  'action.createClientCmd.error': 'Create client: falhou',
  'action.updateClientCmd.success': 'Update client: OK',
  'action.updateClientCmd.error': 'Update client: falhou',
  'action.deleteClientCmd.success': 'Delete client: OK',
  'action.deleteClientCmd.error': 'Delete client: falhou',
};
export const messages: { [key: string]: MessageType } = { 'en': message_en, 'pt-br': message_pt_br, 'es': message_es };
/// **collab_i18n_end**

const LIST_CLIENTS_DATA_DEFAULT: ListClientsOutput = { clients: [], total: 0 };

const SUBSCRIBED_STATE_KEYS: string[] = [
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

export class BuildFlowFsmClientManagementWorkspaceBase extends CollabLitElement {
  /** state status — pageStatus */
  @property() status: string = '';
  /** state listClientsState — actionStatus, values: idle|loading|success|error */
  @property() listClientsState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state listClientsName — input */
  @property() listClientsName: string = '';
  /** state listClientsCompany — input */
  @property() listClientsCompany: string = '';
  /** state listClientsEmail — input */
  @property() listClientsEmail: string = '';
  /** state listClientsPage — input */
  @property() listClientsPage: string = '';
  /** state listClientsPageSize — input */
  @property() listClientsPageSize: string = '';
  /** state listClientsData — queryResult, outputShape: paginated */
  @property() listClientsData: ListClientsOutput = LIST_CLIENTS_DATA_DEFAULT;
  /** state createClientCmdState — actionStatus, values: idle|loading|success|error */
  @property() createClientCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state createClientCmdName — input */
  @property() createClientCmdName: string = '';
  /** state createClientCmdEmail — input */
  @property() createClientCmdEmail: string = '';
  /** state createClientCmdCompany — input */
  @property() createClientCmdCompany: string = '';
  /** state createClientCmdPhone — input */
  @property() createClientCmdPhone: string = '';
  /** state createClientCmdAddress — input */
  @property() createClientCmdAddress: string = '';
  /** state createClientCmdOutput — commandOutput */
  @property() createClientCmdOutput: CreateClientCmdOutput | null = null;
  /** state createClientCmdError — actionError */
  @property() createClientCmdError: string = '';
  /** state updateClientCmdState — actionStatus, values: idle|loading|success|error */
  @property() updateClientCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state updateClientCmdClientId — input */
  @property() updateClientCmdClientId: string = '';
  /** state updateClientCmdName — input */
  @property() updateClientCmdName: string = '';
  /** state updateClientCmdCompany — input */
  @property() updateClientCmdCompany: string = '';
  /** state updateClientCmdEmail — input */
  @property() updateClientCmdEmail: string = '';
  /** state updateClientCmdPhone — input */
  @property() updateClientCmdPhone: string = '';
  /** state updateClientCmdAddress — input */
  @property() updateClientCmdAddress: string = '';
  /** state updateClientCmdOutput — commandOutput */
  @property() updateClientCmdOutput: UpdateClientCmdOutput | null = null;
  /** state updateClientCmdError — actionError */
  @property() updateClientCmdError: string = '';
  /** state deleteClientCmdState — actionStatus, values: idle|loading|success|error */
  @property() deleteClientCmdState: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  /** state deleteClientCmdClientId — input */
  @property() deleteClientCmdClientId: string = '';
  /** state deleteClientCmdOutput — commandOutput */
  @property() deleteClientCmdOutput: DeleteClientCmdOutput | null = null;
  /** state deleteClientCmdError — actionError */
  @property() deleteClientCmdError: string = '';

  connectedCallback(): void {
    super.connectedCallback();
    this.initStateValue('ui.clientManagementWorkspace.status', '');
    this.initStateValue('ui.clientManagementWorkspace.action.listClients.status', 'idle');
    this.initStateValue('ui.clientManagementWorkspace.input.listClients.name', '');
    this.initStateValue('ui.clientManagementWorkspace.input.listClients.company', '');
    this.initStateValue('ui.clientManagementWorkspace.input.listClients.email', '');
    this.initStateValue('ui.clientManagementWorkspace.input.listClients.page', '');
    this.initStateValue('ui.clientManagementWorkspace.input.listClients.pageSize', '');
    this.initStateValue('ui.clientManagementWorkspace.data.listClients', LIST_CLIENTS_DATA_DEFAULT);
    this.initStateValue('ui.clientManagementWorkspace.action.createClientCmd.status', 'idle');
    this.initStateValue('ui.clientManagementWorkspace.input.createClientCmd.name', '');
    this.initStateValue('ui.clientManagementWorkspace.input.createClientCmd.email', '');
    this.initStateValue('ui.clientManagementWorkspace.input.createClientCmd.company', '');
    this.initStateValue('ui.clientManagementWorkspace.input.createClientCmd.phone', '');
    this.initStateValue('ui.clientManagementWorkspace.input.createClientCmd.address', '');
    this.initStateValue('ui.clientManagementWorkspace.output.createClientCmd', null);
    this.initStateValue('ui.clientManagementWorkspace.action.createClientCmd.error', '');
    this.initStateValue('ui.clientManagementWorkspace.action.updateClientCmd.status', 'idle');
    this.initStateValue('ui.clientManagementWorkspace.input.updateClientCmd.clientId', '');
    this.initStateValue('ui.clientManagementWorkspace.input.updateClientCmd.name', '');
    this.initStateValue('ui.clientManagementWorkspace.input.updateClientCmd.company', '');
    this.initStateValue('ui.clientManagementWorkspace.input.updateClientCmd.email', '');
    this.initStateValue('ui.clientManagementWorkspace.input.updateClientCmd.phone', '');
    this.initStateValue('ui.clientManagementWorkspace.input.updateClientCmd.address', '');
    this.initStateValue('ui.clientManagementWorkspace.output.updateClientCmd', null);
    this.initStateValue('ui.clientManagementWorkspace.action.updateClientCmd.error', '');
    this.initStateValue('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'idle');
    this.initStateValue('ui.clientManagementWorkspace.input.deleteClientCmd.clientId', '');
    this.initStateValue('ui.clientManagementWorkspace.output.deleteClientCmd', null);
    this.initStateValue('ui.clientManagementWorkspace.action.deleteClientCmd.error', '');
    this.syncRouteParams();
    subscribe(SUBSCRIBED_STATE_KEYS, this);
    void this.loadListClients();
  }

  disconnectedCallback(): void {
    unsubscribe(SUBSCRIBED_STATE_KEYS, this);
    super.disconnectedCallback();
  }

  /** handleIcaStateChange — collabState notify contract; maps state keys onto class fields */
  handleIcaStateChange(key: string, value: unknown): void {
    switch (key) {
      case 'ui.clientManagementWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.action.listClients.status':
        this.listClientsState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.name':
        this.listClientsName = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.company':
        this.listClientsCompany = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.email':
        this.listClientsEmail = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.page':
        this.listClientsPage = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.pageSize':
        this.listClientsPageSize = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.data.listClients':
        this.listClientsData = (value as ListClientsOutput) ?? LIST_CLIENTS_DATA_DEFAULT;
        break;
      case 'ui.clientManagementWorkspace.action.createClientCmd.status':
        this.createClientCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.name':
        this.createClientCmdName = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.email':
        this.createClientCmdEmail = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.company':
        this.createClientCmdCompany = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.phone':
        this.createClientCmdPhone = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.address':
        this.createClientCmdAddress = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.output.createClientCmd':
        this.createClientCmdOutput = (value as CreateClientCmdOutput | null) ?? null;
        break;
      case 'ui.clientManagementWorkspace.action.createClientCmd.error':
        this.createClientCmdError = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.action.updateClientCmd.status':
        this.updateClientCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.clientId':
        this.updateClientCmdClientId = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.name':
        this.updateClientCmdName = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.company':
        this.updateClientCmdCompany = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.email':
        this.updateClientCmdEmail = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.phone':
        this.updateClientCmdPhone = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.address':
        this.updateClientCmdAddress = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.output.updateClientCmd':
        this.updateClientCmdOutput = (value as UpdateClientCmdOutput | null) ?? null;
        break;
      case 'ui.clientManagementWorkspace.action.updateClientCmd.error':
        this.updateClientCmdError = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.action.deleteClientCmd.status':
        this.deleteClientCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientManagementWorkspace.input.deleteClientCmd.clientId':
        this.deleteClientCmdClientId = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.output.deleteClientCmd':
        this.deleteClientCmdOutput = (value as DeleteClientCmdOutput | null) ?? null;
        break;
      case 'ui.clientManagementWorkspace.action.deleteClientCmd.error':
        this.deleteClientCmdError = (value as string) ?? '';
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
      case 'ui.clientManagementWorkspace.status':
        this.status = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.action.listClients.status':
        this.listClientsState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.name':
        this.listClientsName = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.company':
        this.listClientsCompany = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.email':
        this.listClientsEmail = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.page':
        this.listClientsPage = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.listClients.pageSize':
        this.listClientsPageSize = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.data.listClients':
        this.listClientsData = (value as ListClientsOutput) ?? LIST_CLIENTS_DATA_DEFAULT;
        break;
      case 'ui.clientManagementWorkspace.action.createClientCmd.status':
        this.createClientCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.name':
        this.createClientCmdName = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.email':
        this.createClientCmdEmail = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.company':
        this.createClientCmdCompany = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.phone':
        this.createClientCmdPhone = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.createClientCmd.address':
        this.createClientCmdAddress = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.output.createClientCmd':
        this.createClientCmdOutput = (value as CreateClientCmdOutput | null) ?? null;
        break;
      case 'ui.clientManagementWorkspace.action.createClientCmd.error':
        this.createClientCmdError = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.action.updateClientCmd.status':
        this.updateClientCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.clientId':
        this.updateClientCmdClientId = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.name':
        this.updateClientCmdName = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.company':
        this.updateClientCmdCompany = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.email':
        this.updateClientCmdEmail = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.phone':
        this.updateClientCmdPhone = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.input.updateClientCmd.address':
        this.updateClientCmdAddress = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.output.updateClientCmd':
        this.updateClientCmdOutput = (value as UpdateClientCmdOutput | null) ?? null;
        break;
      case 'ui.clientManagementWorkspace.action.updateClientCmd.error':
        this.updateClientCmdError = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.action.deleteClientCmd.status':
        this.deleteClientCmdState = (value as 'idle' | 'loading' | 'success' | 'error') ?? 'idle';
        break;
      case 'ui.clientManagementWorkspace.input.deleteClientCmd.clientId':
        this.deleteClientCmdClientId = (value as string) ?? '';
        break;
      case 'ui.clientManagementWorkspace.output.deleteClientCmd':
        this.deleteClientCmdOutput = (value as DeleteClientCmdOutput | null) ?? null;
        break;
      case 'ui.clientManagementWorkspace.action.deleteClientCmd.error':
        this.deleteClientCmdError = (value as string) ?? '';
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
      /^\/buildFlowFsm\/clientManagementWorkspace(?:\/([^/]+))?\/?$/,
    );
    const rawClientId: string = match && match[1] ? match[1] : '';
    let clientId: string = '';
    if (rawClientId) {
      try {
        clientId = decodeURIComponent(rawClientId);
      } catch {
        clientId = rawClientId;
      }
    }
    if (clientId) {
      if (!this.updateClientCmdClientId) {
        this.updateClientCmdClientId = clientId;
        setState('ui.clientManagementWorkspace.input.updateClientCmd.clientId', clientId);
      }
    }
  }

  private readErrorMessage(error: unknown, fallback: string): string {
    if (error && typeof error === 'object') {
      const record = error as { message?: unknown; error?: unknown };
      if (typeof record.message === 'string' && record.message) {
        return record.message;
      }
      if (typeof record.error === 'string' && record.error) {
        return record.error;
      }
    }
    return fallback;
  }

  /** action listClients (query) — route buildFlowFsm.clientManagementWorkspace.listClients; inputs: name, company, email, page, pageSize; writes ui.clientManagementWorkspace.data.listClients; status ui.clientManagementWorkspace.action.listClients.status */
  async loadListClients(): Promise<void> {
    this.syncRouteParams();
    this.listClientsState = 'loading';
    setState('ui.clientManagementWorkspace.action.listClients.status', 'loading');
    const params: ListClientsInput = {
    };
    if (this.listClientsName) {
      params.name = this.listClientsName;
    }
    if (this.listClientsCompany) {
      params.company = this.listClientsCompany;
    }
    if (this.listClientsEmail) {
      params.email = this.listClientsEmail;
    }
    if (this.listClientsPage !== '') {
      const pageNum = Number(this.listClientsPage);
      if (!Number.isNaN(pageNum)) {
        params.page = pageNum;
      }
    }
    if (this.listClientsPageSize !== '') {
      const pageSizeNum = Number(this.listClientsPageSize);
      if (!Number.isNaN(pageSizeNum)) {
        params.pageSize = pageSizeNum;
      }
    }
    const options: BffClientOptions = { mode: 'silent' };
    const response = await execBff<ListClientsOutput>(listClientsRoute, params, options);
    if (response.ok) {
      const data = response.data ?? LIST_CLIENTS_DATA_DEFAULT;
      this.listClientsData = data;
      setState('ui.clientManagementWorkspace.data.listClients', data);
      this.listClientsState = 'success';
      setState('ui.clientManagementWorkspace.action.listClients.status', 'success');
    } else {
      this.listClientsState = 'error';
      setState('ui.clientManagementWorkspace.action.listClients.status', 'error');
      if (response.error) {
        console.error('listClients failed', response.error);
      }
    }
    this.requestUpdate();
  }

  /** handler for action listClients — bind UI events here */
  handleListClientsClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void this.loadListClients();
  }

  /** action createClientCmd (command) — route buildFlowFsm.clientManagementWorkspace.createClientCmd; inputs: name, email, company, phone, address; writes ui.clientManagementWorkspace.output.createClientCmd; status ui.clientManagementWorkspace.action.createClientCmd.status; feedback keys action.createClientCmd.success / action.createClientCmd.error */
  async createClientCmd(): Promise<void> {
    this.syncRouteParams();
    this.createClientCmdState = 'loading';
    setState('ui.clientManagementWorkspace.action.createClientCmd.status', 'loading');
    this.createClientCmdError = '';
    setState('ui.clientManagementWorkspace.action.createClientCmd.error', '');
    const params: CreateClientCmdInput = {
      name: this.createClientCmdName,
      email: this.createClientCmdEmail,
    };
    if (this.createClientCmdCompany) {
      params.company = this.createClientCmdCompany;
    }
    if (this.createClientCmdPhone) {
      params.phone = this.createClientCmdPhone;
    }
    if (this.createClientCmdAddress) {
      params.address = this.createClientCmdAddress;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<CreateClientCmdOutput>(createClientCmdRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.createClientCmd.error');
      this.createClientCmdError = errMsg;
      setState('ui.clientManagementWorkspace.action.createClientCmd.error', errMsg);
      this.createClientCmdState = 'error';
      setState('ui.clientManagementWorkspace.action.createClientCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: CreateClientCmdOutput | null = response.data ?? null;
    this.createClientCmdOutput = data;
    setState('ui.clientManagementWorkspace.output.createClientCmd', data);
    try {
      await this.loadListClients();
      if (this.listClientsState === 'error') {
        this.createClientCmdState = 'error';
        setState('ui.clientManagementWorkspace.action.createClientCmd.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('createClientCmd refresh failed', refreshError);
      this.createClientCmdState = 'error';
      setState('ui.clientManagementWorkspace.action.createClientCmd.status', 'error');
      this.requestUpdate();
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
    this.requestUpdate();
  }

  /** handler for action createClientCmd — bind UI events here */
  handleCreateClientCmdClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.createClientCmd();
    });
  }

  /** action updateClientCmd (command) — route buildFlowFsm.clientManagementWorkspace.updateClientCmd; inputs: clientId, name, company, email, phone, address; writes ui.clientManagementWorkspace.output.updateClientCmd; status ui.clientManagementWorkspace.action.updateClientCmd.status; feedback keys action.updateClientCmd.success / action.updateClientCmd.error */
  async updateClientCmd(): Promise<void> {
    this.syncRouteParams();
    if (!this.updateClientCmdClientId) {
      this.updateClientCmdState = 'idle';
      setState('ui.clientManagementWorkspace.action.updateClientCmd.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.updateClientCmdState = 'loading';
    setState('ui.clientManagementWorkspace.action.updateClientCmd.status', 'loading');
    this.updateClientCmdError = '';
    setState('ui.clientManagementWorkspace.action.updateClientCmd.error', '');
    const params: UpdateClientCmdInput = {
      clientId: this.updateClientCmdClientId,
      name: this.updateClientCmdName,
      email: this.updateClientCmdEmail,
    };
    if (this.updateClientCmdCompany) {
      params.company = this.updateClientCmdCompany;
    }
    if (this.updateClientCmdPhone) {
      params.phone = this.updateClientCmdPhone;
    }
    if (this.updateClientCmdAddress) {
      params.address = this.updateClientCmdAddress;
    }
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<UpdateClientCmdOutput>(updateClientCmdRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.updateClientCmd.error');
      this.updateClientCmdError = errMsg;
      setState('ui.clientManagementWorkspace.action.updateClientCmd.error', errMsg);
      this.updateClientCmdState = 'error';
      setState('ui.clientManagementWorkspace.action.updateClientCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: UpdateClientCmdOutput | null = response.data ?? null;
    this.updateClientCmdOutput = data;
    setState('ui.clientManagementWorkspace.output.updateClientCmd', data);
    try {
      await this.loadListClients();
      if (this.listClientsState === 'error') {
        this.updateClientCmdState = 'error';
        setState('ui.clientManagementWorkspace.action.updateClientCmd.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('updateClientCmd refresh failed', refreshError);
      this.updateClientCmdState = 'error';
      setState('ui.clientManagementWorkspace.action.updateClientCmd.status', 'error');
      this.requestUpdate();
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
    this.requestUpdate();
  }

  /** handler for action updateClientCmd — bind UI events here */
  handleUpdateClientCmdClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.updateClientCmd();
    });
  }

  /** action deleteClientCmd (command) — route buildFlowFsm.clientManagementWorkspace.deleteClientCmd; inputs: clientId; writes ui.clientManagementWorkspace.output.deleteClientCmd; status ui.clientManagementWorkspace.action.deleteClientCmd.status; feedback keys action.deleteClientCmd.success / action.deleteClientCmd.error */
  async deleteClientCmd(): Promise<void> {
    this.syncRouteParams();
    if (!this.deleteClientCmdClientId) {
      this.deleteClientCmdState = 'idle';
      setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'idle');
      this.requestUpdate();
      return;
    }
    this.deleteClientCmdState = 'loading';
    setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'loading');
    this.deleteClientCmdError = '';
    setState('ui.clientManagementWorkspace.action.deleteClientCmd.error', '');
    const params: DeleteClientCmdInput = {
      clientId: this.deleteClientCmdClientId,
    };
    const options: BffClientOptions = { mode: 'blocking' };
    const response = await execBff<DeleteClientCmdOutput>(deleteClientCmdRoute, params, options);
    if (!response.ok) {
      const errMsg: string = this.readErrorMessage(response.error, 'action.deleteClientCmd.error');
      this.deleteClientCmdError = errMsg;
      setState('ui.clientManagementWorkspace.action.deleteClientCmd.error', errMsg);
      this.deleteClientCmdState = 'error';
      setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    const data: DeleteClientCmdOutput | null = response.data ?? null;
    this.deleteClientCmdOutput = data;
    setState('ui.clientManagementWorkspace.output.deleteClientCmd', data);
    try {
      await this.loadListClients();
      if (this.listClientsState === 'error') {
        this.deleteClientCmdState = 'error';
        setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'error');
        this.requestUpdate();
        return;
      }
    } catch (refreshError: unknown) {
      console.error('deleteClientCmd refresh failed', refreshError);
      this.deleteClientCmdState = 'error';
      setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'error');
      this.requestUpdate();
      return;
    }
    this.deleteClientCmdClientId = '';
    setState('ui.clientManagementWorkspace.input.deleteClientCmd.clientId', '');
    this.deleteClientCmdState = 'success';
    setState('ui.clientManagementWorkspace.action.deleteClientCmd.status', 'success');
    this.requestUpdate();
  }

  /** handler for action deleteClientCmd — bind UI events here */
  handleDeleteClientCmdClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    void runBlockingUiAction(async (_signal: AbortSignal) => {
      await this.deleteClientCmd();
    });
  }

  /** setter for state ui.clientManagementWorkspace.input.listClients.name */
  setListClientsName(value: string): void {
    this.listClientsName = value;
    setState('ui.clientManagementWorkspace.input.listClients.name', value);
    this.requestUpdate();
  }

  /** handler for action set.listClientsName — bind UI events here */
  handleListClientsNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListClientsName(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.listClients.company */
  setListClientsCompany(value: string): void {
    this.listClientsCompany = value;
    setState('ui.clientManagementWorkspace.input.listClients.company', value);
    this.requestUpdate();
  }

  /** handler for action set.listClientsCompany — bind UI events here */
  handleListClientsCompanyChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListClientsCompany(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.listClients.email */
  setListClientsEmail(value: string): void {
    this.listClientsEmail = value;
    setState('ui.clientManagementWorkspace.input.listClients.email', value);
    this.requestUpdate();
  }

  /** handler for action set.listClientsEmail — bind UI events here */
  handleListClientsEmailChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListClientsEmail(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.listClients.page */
  setListClientsPage(value: string): void {
    this.listClientsPage = value;
    setState('ui.clientManagementWorkspace.input.listClients.page', value);
    this.requestUpdate();
  }

  /** handler for action set.listClientsPage — bind UI events here */
  handleListClientsPageChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListClientsPage(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.listClients.pageSize */
  setListClientsPageSize(value: string): void {
    this.listClientsPageSize = value;
    setState('ui.clientManagementWorkspace.input.listClients.pageSize', value);
    this.requestUpdate();
  }

  /** handler for action set.listClientsPageSize — bind UI events here */
  handleListClientsPageSizeChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setListClientsPageSize(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.createClientCmd.name */
  setCreateClientCmdName(value: string): void {
    this.createClientCmdName = value;
    setState('ui.clientManagementWorkspace.input.createClientCmd.name', value);
    this.requestUpdate();
  }

  /** handler for action set.createClientCmdName — bind UI events here */
  handleCreateClientCmdNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateClientCmdName(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.createClientCmd.email */
  setCreateClientCmdEmail(value: string): void {
    this.createClientCmdEmail = value;
    setState('ui.clientManagementWorkspace.input.createClientCmd.email', value);
    this.requestUpdate();
  }

  /** handler for action set.createClientCmdEmail — bind UI events here */
  handleCreateClientCmdEmailChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateClientCmdEmail(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.createClientCmd.company */
  setCreateClientCmdCompany(value: string): void {
    this.createClientCmdCompany = value;
    setState('ui.clientManagementWorkspace.input.createClientCmd.company', value);
    this.requestUpdate();
  }

  /** handler for action set.createClientCmdCompany — bind UI events here */
  handleCreateClientCmdCompanyChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateClientCmdCompany(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.createClientCmd.phone */
  setCreateClientCmdPhone(value: string): void {
    this.createClientCmdPhone = value;
    setState('ui.clientManagementWorkspace.input.createClientCmd.phone', value);
    this.requestUpdate();
  }

  /** handler for action set.createClientCmdPhone — bind UI events here */
  handleCreateClientCmdPhoneChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateClientCmdPhone(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.createClientCmd.address */
  setCreateClientCmdAddress(value: string): void {
    this.createClientCmdAddress = value;
    setState('ui.clientManagementWorkspace.input.createClientCmd.address', value);
    this.requestUpdate();
  }

  /** handler for action set.createClientCmdAddress — bind UI events here */
  handleCreateClientCmdAddressChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setCreateClientCmdAddress(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.updateClientCmd.clientId */
  setUpdateClientCmdClientId(value: string): void {
    this.updateClientCmdClientId = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdClientId — bind UI events here */
  handleUpdateClientCmdClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateClientCmdClientId(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.updateClientCmd.name */
  setUpdateClientCmdName(value: string): void {
    this.updateClientCmdName = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.name', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdName — bind UI events here */
  handleUpdateClientCmdNameChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateClientCmdName(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.updateClientCmd.company */
  setUpdateClientCmdCompany(value: string): void {
    this.updateClientCmdCompany = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.company', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdCompany — bind UI events here */
  handleUpdateClientCmdCompanyChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateClientCmdCompany(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.updateClientCmd.email */
  setUpdateClientCmdEmail(value: string): void {
    this.updateClientCmdEmail = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.email', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdEmail — bind UI events here */
  handleUpdateClientCmdEmailChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateClientCmdEmail(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.updateClientCmd.phone */
  setUpdateClientCmdPhone(value: string): void {
    this.updateClientCmdPhone = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.phone', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdPhone — bind UI events here */
  handleUpdateClientCmdPhoneChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateClientCmdPhone(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.updateClientCmd.address */
  setUpdateClientCmdAddress(value: string): void {
    this.updateClientCmdAddress = value;
    setState('ui.clientManagementWorkspace.input.updateClientCmd.address', value);
    this.requestUpdate();
  }

  /** handler for action set.updateClientCmdAddress — bind UI events here */
  handleUpdateClientCmdAddressChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setUpdateClientCmdAddress(value);
  }

  /** setter for state ui.clientManagementWorkspace.input.deleteClientCmd.clientId */
  setDeleteClientCmdClientId(value: string): void {
    this.deleteClientCmdClientId = value;
    setState('ui.clientManagementWorkspace.input.deleteClientCmd.clientId', value);
    this.requestUpdate();
  }

  /** handler for action set.deleteClientCmdClientId — bind UI events here */
  handleDeleteClientCmdClientIdChange(event: Event): void {
    const target = event.target as HTMLInputElement | HTMLSelectElement | null;
    const value: string = target && 'value' in target ? String(target.value) : '';
    this.setDeleteClientCmdClientId(value);
  }
}
