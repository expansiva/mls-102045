/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientManagementWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientManagementWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';
import type { ListClientsOutput } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

// Return type for render<Name>() helpers: a template, or the Lit sentinel for an empty branch.
// Annotating them `: TemplateResult` alone is wrong — returning `nothing` is TS2322.
type Rendered = TemplateResult | typeof nothing;

type ClientRow = ListClientsOutput['clients'][number];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'empty': s_en['intent.clientManagementWorkspace.listClients.list.empty'],
  'filter.name': s_en['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'filter.company': s_en['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'filter.email': s_en['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'search': 'Search',
  'newClient': 'New client',
  'col.name': s_en['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'col.company': s_en['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'col.email': s_en['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'total': s_en['intent.clientManagementWorkspace.listClients.list.column.total.label'],
  'selectHint': 'Select a client to view their profile',
  'noSelection': 'No client selected',
  'identity': 'Identity',
  'companyBlock': 'Company',
  'contactBlock': 'Contact',
  'field.name': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.name.label'],
  'field.email': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.email.label'],
  'field.company': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.company.label'],
  'field.phone': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'field.address': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'required': 'Required',
  'createClient': s_en['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd'],
  'saveClient': 'Save client',
  'edit': 'Edit',
  'cancel': 'Cancel',
  'deleteClient': s_en['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'],
  'delete.confirmPrefix': 'Delete client',
  'delete.confirmSuffix': '? This cannot be undone.',
  'create.success': s_en['action.createClientCmd.success'],
  'create.error': s_en['action.createClientCmd.error'],
  'update.success': s_en['action.updateClientCmd.success'],
  'update.error': s_en['action.updateClientCmd.error'],
  'delete.success': s_en['action.deleteClientCmd.success'],
  'delete.error': s_en['action.deleteClientCmd.error'],
  'prev': 'Previous',
  'next': 'Next',
  'page': 'Page',
  'loading': 'Loading…',
  'saving': 'Saving…',
  'deleting': 'Deleting…',
  'creating': 'Creating…',
  'dismiss': 'Dismiss',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'empty': s_pt_br['intent.clientManagementWorkspace.listClients.list.empty'],
  'filter.name': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'filter.company': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'filter.email': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'search': 'Buscar',
  'newClient': 'Novo cliente',
  'col.name': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'col.company': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'col.email': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'total': s_pt_br['intent.clientManagementWorkspace.listClients.list.column.total.label'],
  'selectHint': 'Selecione um cliente para ver o perfil',
  'noSelection': 'Nenhum cliente selecionado',
  'identity': 'Identidade',
  'companyBlock': 'Empresa',
  'contactBlock': 'Contato',
  'field.name': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.name.label'],
  'field.email': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.email.label'],
  'field.company': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.company.label'],
  'field.phone': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'field.address': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'required': 'Obrigatório',
  'createClient': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd'],
  'saveClient': 'Salvar cliente',
  'edit': 'Editar',
  'cancel': 'Cancelar',
  'deleteClient': s_pt_br['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'],
  'delete.confirmPrefix': 'Excluir cliente',
  'delete.confirmSuffix': '? Esta ação não pode ser desfeita.',
  'create.success': s_pt_br['action.createClientCmd.success'],
  'create.error': s_pt_br['action.createClientCmd.error'],
  'update.success': s_pt_br['action.updateClientCmd.success'],
  'update.error': s_pt_br['action.updateClientCmd.error'],
  'delete.success': s_pt_br['action.deleteClientCmd.success'],
  'delete.error': s_pt_br['action.deleteClientCmd.error'],
  'prev': 'Anterior',
  'next': 'Próxima',
  'page': 'Página',
  'loading': 'Carregando…',
  'saving': 'Salvando…',
  'deleting': 'Excluindo…',
  'creating': 'Criando…',
  'dismiss': 'Fechar',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'empty': s_es['intent.clientManagementWorkspace.listClients.list.empty'],
  'filter.name': s_es['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'filter.company': s_es['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'filter.email': s_es['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'search': 'Buscar',
  'newClient': 'Nuevo cliente',
  'col.name': s_es['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'col.company': s_es['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'col.email': s_es['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'total': s_es['intent.clientManagementWorkspace.listClients.list.column.total.label'],
  'selectHint': 'Seleccione un cliente para ver su perfil',
  'noSelection': 'Ningún cliente seleccionado',
  'identity': 'Identidad',
  'companyBlock': 'Empresa',
  'contactBlock': 'Contacto',
  'field.name': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.name.label'],
  'field.email': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.email.label'],
  'field.company': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.company.label'],
  'field.phone': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'field.address': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'required': 'Obligatorio',
  'createClient': s_es['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd'],
  'saveClient': 'Guardar cliente',
  'edit': 'Editar',
  'cancel': 'Cancelar',
  'deleteClient': s_es['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'],
  'delete.confirmPrefix': 'Eliminar cliente',
  'delete.confirmSuffix': '? Esta acción no se puede deshacer.',
  'create.success': s_es['action.createClientCmd.success'],
  'create.error': s_es['action.createClientCmd.error'],
  'update.success': s_es['action.updateClientCmd.success'],
  'update.error': s_es['action.updateClientCmd.error'],
  'delete.success': s_es['action.deleteClientCmd.success'],
  'delete.error': s_es['action.deleteClientCmd.error'],
  'prev': 'Anterior',
  'next': 'Siguiente',
  'page': 'Página',
  'loading': 'Cargando…',
  'saving': 'Guardando…',
  'deleting': 'Eliminando…',
  'creating': 'Creando…',
  'dismiss': 'Cerrar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page21--client-management-workspace-102045')
export class BuildFlowFsmDesktopPage21ClientManagementWorkspacePage extends BuildFlowFsmClientManagementWorkspaceBase {
  #msgLang: string | null = null;
  #msgCache: PageMessageType = pageFallback;

  /** Presentation-only: view selected profile, edit it, or create a new client. */
  private _profileMode: 'view' | 'edit' | 'create' = 'view';

  /** i18n catalog — resolved once per language, refreshed only when the document language changes. */
  protected get msg(): PageMessageType {
    const lang = (document.documentElement.lang || '').toLowerCase();
    if (lang !== this.#msgLang) {
      this.#msgLang = lang;
      this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
    }
    return this.#msgCache;
  }

  private rowId(row: ClientRow): string {
    const r = row as { clientId?: string; id?: string };
    if (typeof r.clientId === 'string' && r.clientId) {
      return r.clientId;
    }
    if (typeof r.id === 'string' && r.id) {
      return r.id;
    }
    return '';
  }

  private rowName(row: ClientRow): string {
    const r = row as { name?: string };
    return typeof r.name === 'string' ? r.name : '';
  }

  private rowCompany(row: ClientRow): string {
    const r = row as { company?: string };
    return typeof r.company === 'string' ? r.company : '';
  }

  private rowEmail(row: ClientRow): string {
    const r = row as { email?: string };
    return typeof r.email === 'string' ? r.email : '';
  }

  private rowPhone(row: ClientRow): string {
    const r = row as { phone?: string };
    return typeof r.phone === 'string' ? r.phone : '';
  }

  private rowAddress(row: ClientRow): string {
    const r = row as { address?: string };
    return typeof r.address === 'string' ? r.address : '';
  }

  private currentPage(): number {
    const n = Number(this.listClientsPage);
    if (!Number.isNaN(n) && n > 0) {
      return n;
    }
    return 1;
  }

  private currentPageSize(): number {
    const n = Number(this.listClientsPageSize);
    if (!Number.isNaN(n) && n > 0) {
      return n;
    }
    return 10;
  }

  private selectedClient(): ClientRow | null {
    const selectedId = this.updateClientCmdClientId || this.deleteClientCmdClientId;
    if (!selectedId) {
      return null;
    }
    const clients: ClientRow[] = this.listClientsData?.clients ?? [];
    const found = clients.find((c: ClientRow) => this.rowId(c) === selectedId);
    return found ?? null;
  }

  private selectClient(row: ClientRow): void {
    const id = this.rowId(row);
    this.setUpdateClientCmdClientId(id);
    this.setDeleteClientCmdClientId(id);
    this.setUpdateClientCmdName(this.rowName(row));
    this.setUpdateClientCmdCompany(this.rowCompany(row));
    this.setUpdateClientCmdEmail(this.rowEmail(row));
    this.setUpdateClientCmdPhone(this.rowPhone(row));
    this.setUpdateClientCmdAddress(this.rowAddress(row));
    this._profileMode = 'view';
    this.requestUpdate();
  }

  private openCreate(): void {
    this._profileMode = 'create';
    this.setCreateClientCmdName('');
    this.setCreateClientCmdEmail('');
    this.setCreateClientCmdCompany('');
    this.setCreateClientCmdPhone('');
    this.setCreateClientCmdAddress('');
    this.requestUpdate();
  }

  private openEdit(): void {
    const selected = this.selectedClient();
    if (!selected) {
      return;
    }
    this.setUpdateClientCmdClientId(this.rowId(selected));
    this.setUpdateClientCmdName(this.rowName(selected));
    this.setUpdateClientCmdCompany(this.rowCompany(selected));
    this.setUpdateClientCmdEmail(this.rowEmail(selected));
    this.setUpdateClientCmdPhone(this.rowPhone(selected));
    this.setUpdateClientCmdAddress(this.rowAddress(selected));
    this._profileMode = 'edit';
    this.requestUpdate();
  }

  private cancelEdit(): void {
    const selected = this.selectedClient();
    if (selected) {
      this.setUpdateClientCmdName(this.rowName(selected));
      this.setUpdateClientCmdCompany(this.rowCompany(selected));
      this.setUpdateClientCmdEmail(this.rowEmail(selected));
      this.setUpdateClientCmdPhone(this.rowPhone(selected));
      this.setUpdateClientCmdAddress(this.rowAddress(selected));
    }
    this._profileMode = 'view';
    this.requestUpdate();
  }

  private cancelCreate(): void {
    this._profileMode = 'view';
    this.requestUpdate();
  }

  private confirmDelete(row: ClientRow | null): void {
    if (!row) {
      return;
    }
    const msg = this.msg;
    const name = this.rowName(row) || this.rowId(row);
    const ok = window.confirm(
      `${msg['delete.confirmPrefix']} "${name}"${msg['delete.confirmSuffix']}`,
    );
    if (!ok) {
      return;
    }
    this.setDeleteClientCmdClientId(this.rowId(row));
    this.handleDeleteClientCmdClick();
  }

  private goToPage(page: number): void {
    if (page < 1) {
      return;
    }
    this.setListClientsPage(String(page));
    this.handleListClientsClick();
  }

  /** Main render. Split the page into render<Name>() methods and call them from here. */
  render(): TemplateResult {
    if (this.createClientCmdState === 'success' && this._profileMode === 'create') {
      this._profileMode = 'view';
    }
    if (this.updateClientCmdState === 'success' && this._profileMode === 'edit') {
      this._profileMode = 'view';
    }
    if (this.deleteClientCmdState === 'success') {
      // selection may have been cleared by the base after delete
      if (!this.deleteClientCmdClientId && !this.updateClientCmdClientId) {
        this._profileMode = 'view';
      }
    }

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-4 md:p-6">
        <div class="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-start">
          <div class="md:col-span-2 flex flex-col gap-3">
            ${this.renderFinder()}
          </div>
          <div class="md:col-span-3 flex flex-col gap-3">
            ${this.renderProfilePanel()}
          </div>
        </div>
      </div>
    `;
  }

  renderFinder(): Rendered {
    const msg = this.msg;
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="p-3 border-b border-[var(--border-subtle,#e2e8f0)] flex flex-wrap items-end gap-2">
          <label class="flex flex-col gap-1 text-sm flex-1 min-w-[7rem]">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.name']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              type="search"
              .value=${this.listClientsName}
              @input=${(e: Event) => this.handleListClientsNameChange(e)}
              @keydown=${(e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  this.setListClientsPage('1');
                  this.handleListClientsClick();
                }
              }}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm flex-1 min-w-[7rem]">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.company']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              type="search"
              .value=${this.listClientsCompany}
              @input=${(e: Event) => this.handleListClientsCompanyChange(e)}
              @keydown=${(e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  this.setListClientsPage('1');
                  this.handleListClientsClick();
                }
              }}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm flex-1 min-w-[7rem]">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.email']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              type="search"
              .value=${this.listClientsEmail}
              @input=${(e: Event) => this.handleListClientsEmailChange(e)}
              @keydown=${(e: KeyboardEvent) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  this.setListClientsPage('1');
                  this.handleListClientsClick();
                }
              }}
            />
          </label>
          <button
            type="button"
            class="rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
            ?disabled=${this.listClientsState === 'loading'}
            @click=${(e: Event) => {
              e.preventDefault();
              this.setListClientsPage('1');
              this.handleListClientsClick();
            }}
          >
            ${msg['search']}
          </button>
          <button
            type="button"
            class="rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]"
            @click=${(e: Event) => {
              e.preventDefault();
              this.openCreate();
            }}
          >
            ${msg['newClient']}
          </button>
        </div>
        ${this.renderClientList()}
        ${this.renderPagination()}
      </section>
    `;
  }

  renderClientList(): Rendered {
    const msg = this.msg;
    if (this.listClientsState === 'loading' && !(this.listClientsData?.clients?.length)) {
      return html`
        <div class="p-4 text-sm text-[var(--text-muted,#64748b)]" aria-busy="true">
          ${msg['loading']}
        </div>
      `;
    }

    const clients: ClientRow[] = this.listClientsData?.clients ?? [];
    if (!clients.length) {
      return html`
        <div class="p-4 text-sm text-[var(--text-muted,#64748b)]">
          ${msg['empty']}
        </div>
      `;
    }

    const selectedId = this.updateClientCmdClientId || this.deleteClientCmdClientId;

    return html`
      <ul class="divide-y divide-[var(--border-subtle,#e2e8f0)] max-h-[28rem] overflow-y-auto" role="listbox">
        ${clients.map((row: ClientRow) => {
          const id = this.rowId(row);
          const isSelected = id !== '' && id === selectedId;
          return html`
            <li>
              <button
                type="button"
                role="option"
                aria-selected=${isSelected ? 'true' : 'false'}
                class="w-full text-left px-3 py-2.5 transition-colors ${isSelected
                  ? 'bg-[var(--selected-bg,#dbeafe)] text-[var(--selected-text,#0f172a)] border-l-2 border-[var(--selected-border,#2563eb)]'
                  : 'hover:bg-[var(--surface-alt-bg,#f8fafc)] text-[var(--text-default,#0f172a)]'}"
                @click=${(e: Event) => {
                  e.preventDefault();
                  this.selectClient(row);
                }}
              >
                <div class="font-medium text-[var(--text-strong,#0f172a)] truncate">
                  ${this.rowName(row) || id}
                </div>
                <div class="text-sm text-[var(--text-muted,#64748b)] truncate">
                  ${this.rowCompany(row) || this.rowEmail(row) || ''}
                </div>
              </button>
            </li>
          `;
        })}
      </ul>
    `;
  }

  renderPagination(): Rendered {
    const msg = this.msg;
    const total = typeof this.listClientsData?.total === 'number' ? this.listClientsData.total : 0;
    const page = this.currentPage();
    const pageSize = this.currentPageSize();
    const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);
    const canPrev = page > 1;
    const canNext = page < totalPages;

    return html`
      <div class="flex items-center justify-between gap-2 px-3 py-2 border-t border-[var(--border-subtle,#e2e8f0)] text-sm text-[var(--text-muted,#64748b)]">
        <span>${msg['total']}: ${total}</span>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="rounded-md px-2 py-1 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-50"
            ?disabled=${!canPrev || this.listClientsState === 'loading'}
            @click=${(e: Event) => {
              e.preventDefault();
              this.goToPage(page - 1);
            }}
          >
            ${msg['prev']}
          </button>
          <span>${msg['page']} ${page}</span>
          <button
            type="button"
            class="rounded-md px-2 py-1 bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-50"
            ?disabled=${!canNext || this.listClientsState === 'loading'}
            @click=${(e: Event) => {
              e.preventDefault();
              this.goToPage(page + 1);
            }}
          >
            ${msg['next']}
          </button>
        </div>
      </div>
    `;
  }

  renderProfilePanel(): Rendered {
    if (this._profileMode === 'create') {
      return this.renderCreateForm();
    }

    const selected = this.selectedClient();
    if (!selected && !this.updateClientCmdClientId) {
      return this.renderEmptyProfile();
    }

    if (this._profileMode === 'edit') {
      return this.renderEditForm(selected);
    }

    return this.renderProfileRead(selected);
  }

  renderEmptyProfile(): Rendered {
    const msg = this.msg;
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 min-h-[16rem] flex items-center justify-center">
        <p class="text-[var(--text-muted,#64748b)] text-sm">${msg['selectHint']}</p>
      </section>
    `;
  }

  renderProfileRead(selected: ClientRow | null): Rendered {
    const msg = this.msg;
    const name = selected ? this.rowName(selected) : this.updateClientCmdName;
    const company = selected ? this.rowCompany(selected) : this.updateClientCmdCompany;
    const email = selected ? this.rowEmail(selected) : this.updateClientCmdEmail;
    const phone = selected ? this.rowPhone(selected) : this.updateClientCmdPhone;
    const address = selected ? this.rowAddress(selected) : this.updateClientCmdAddress;
    const displayName = name || msg['noSelection'];

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="flex items-start justify-between gap-3 p-4 border-b border-[var(--border-subtle,#e2e8f0)]">
          <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)] m-0">${displayName}</h2>
          <button
            type="button"
            class="rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
            ?disabled=${!selected && !this.updateClientCmdClientId}
            @click=${(e: Event) => {
              e.preventDefault();
              this.openEdit();
            }}
          >
            ${msg['edit']}
          </button>
        </div>

        ${this.renderUpdateFeedback()}
        ${this.renderDeleteFeedback()}

        <div class="p-4 flex flex-col gap-5">
          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-2">${msg['identity']}</h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <dt class="text-[var(--text-muted,#64748b)]">${msg['field.name']}</dt>
                <dd class="m-0 text-[var(--text-default,#0f172a)] font-medium">${name || '—'}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-2">${msg['companyBlock']}</h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <dt class="text-[var(--text-muted,#64748b)]">${msg['field.company']}</dt>
                <dd class="m-0 text-[var(--text-default,#0f172a)]">${company || '—'}</dd>
              </div>
              <div>
                <dt class="text-[var(--text-muted,#64748b)]">${msg['field.address']}</dt>
                <dd class="m-0 text-[var(--text-default,#0f172a)]">${address || '—'}</dd>
              </div>
            </dl>
          </div>

          <div>
            <h3 class="text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)] mb-2">${msg['contactBlock']}</h3>
            <dl class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              <div>
                <dt class="text-[var(--text-muted,#64748b)]">${msg['field.email']}</dt>
                <dd class="m-0">
                  ${email
                    ? html`<a class="text-[var(--link-text,#2563eb)] underline-offset-2 hover:underline" href=${`mailto:${email}`}>${email}</a>`
                    : html`<span class="text-[var(--text-default,#0f172a)]">—</span>`}
                </dd>
              </div>
              <div>
                <dt class="text-[var(--text-muted,#64748b)]">${msg['field.phone']}</dt>
                <dd class="m-0">
                  ${phone
                    ? html`<a class="text-[var(--link-text,#2563eb)] underline-offset-2 hover:underline" href=${`tel:${phone}`}>${phone}</a>`
                    : html`<span class="text-[var(--text-default,#0f172a)]">—</span>`}
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div class="px-4 py-3 border-t border-[var(--border-subtle,#e2e8f0)] flex justify-end">
          <button
            type="button"
            class="rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-50"
            ?disabled=${this.deleteClientCmdState === 'loading' || (!selected && !this.deleteClientCmdClientId)}
            @click=${(e: Event) => {
              e.preventDefault();
              this.confirmDelete(selected);
            }}
          >
            ${this.deleteClientCmdState === 'loading' ? msg['deleting'] : msg['deleteClient']}
          </button>
        </div>
      </section>
    `;
  }

  renderCreateForm(): Rendered {
    const msg = this.msg;
    const loading = this.createClientCmdState === 'loading';
    const canSubmit =
      !loading &&
      this.createClientCmdName.trim() !== '' &&
      this.createClientCmdEmail.trim() !== '';

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="flex items-start justify-between gap-3 p-4 border-b border-[var(--border-subtle,#e2e8f0)]">
          <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)] m-0">${msg['newClient']}</h2>
          <button
            type="button"
            class="rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
            @click=${(e: Event) => {
              e.preventDefault();
              this.cancelCreate();
            }}
          >
            ${msg['cancel']}
          </button>
        </div>

        ${this.renderCreateFeedback()}

        <form
          class="p-4 flex flex-col gap-3"
          @submit=${(e: Event) => {
            e.preventDefault();
            if (canSubmit) {
              this.handleCreateClientCmdClick(e);
            }
          }}
        >
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['field.name']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span></span>
            <input
              required
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.createClientCmdName}
              @input=${(e: Event) => this.handleCreateClientCmdNameChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['field.email']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span></span>
            <input
              required
              type="email"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.createClientCmdEmail}
              @input=${(e: Event) => this.handleCreateClientCmdEmailChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['field.company']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.createClientCmdCompany}
              @input=${(e: Event) => this.handleCreateClientCmdCompanyChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['field.phone']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.createClientCmdPhone}
              @input=${(e: Event) => this.handleCreateClientCmdPhoneChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['field.address']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.createClientCmdAddress}
              @input=${(e: Event) => this.handleCreateClientCmdAddressChange(e)}
            />
          </label>

          <div class="flex justify-end pt-2">
            <button
              type="submit"
              class="rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
              ?disabled=${!canSubmit}
            >
              ${loading ? msg['creating'] : msg['createClient']}
            </button>
          </div>
        </form>
      </section>
    `;
  }

  renderEditForm(selected: ClientRow | null): Rendered {
    const msg = this.msg;
    const loading = this.updateClientCmdState === 'loading';
    const titleName =
      (selected ? this.rowName(selected) : '') ||
      this.updateClientCmdName ||
      msg['noSelection'];
    const canSubmit =
      !loading &&
      this.updateClientCmdClientId.trim() !== '' &&
      this.updateClientCmdName.trim() !== '' &&
      this.updateClientCmdEmail.trim() !== '';

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="flex items-start justify-between gap-3 p-4 border-b border-[var(--border-subtle,#e2e8f0)]">
          <h2 class="text-xl font-semibold text-[var(--text-strong,#0f172a)] m-0">${titleName}</h2>
          <button
            type="button"
            class="rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
            @click=${(e: Event) => {
              e.preventDefault();
              this.cancelEdit();
            }}
          >
            ${msg['cancel']}
          </button>
        </div>

        ${this.renderUpdateFeedback()}

        <form
          class="p-4 flex flex-col gap-3"
          @submit=${(e: Event) => {
            e.preventDefault();
            if (canSubmit) {
              this.handleUpdateClientCmdClick(e);
            }
          }}
        >
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['field.name']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span></span>
            <input
              required
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.updateClientCmdName}
              @input=${(e: Event) => this.handleUpdateClientCmdNameChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['field.email']} <span class="text-[var(--status-error-text,#b91c1c)]">*</span></span>
            <input
              required
              type="email"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.updateClientCmdEmail}
              @input=${(e: Event) => this.handleUpdateClientCmdEmailChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['field.company']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.updateClientCmdCompany}
              @input=${(e: Event) => this.handleUpdateClientCmdCompanyChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['field.phone']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.updateClientCmdPhone}
              @input=${(e: Event) => this.handleUpdateClientCmdPhoneChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['field.address']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-2 py-1.5 text-[var(--text-default,#0f172a)]"
              .value=${this.updateClientCmdAddress}
              @input=${(e: Event) => this.handleUpdateClientCmdAddressChange(e)}
            />
          </label>

          <div class="flex justify-end pt-2">
            <button
              type="submit"
              class="rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
              ?disabled=${!canSubmit}
            >
              ${loading ? msg['saving'] : msg['saveClient']}
            </button>
          </div>
        </form>
      </section>
    `;
  }

  renderCreateFeedback(): Rendered {
    const msg = this.msg;
    if (this.createClientCmdState === 'success') {
      return html`
        <div class="mx-4 mt-3 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]" role="status">
          ${msg['create.success']}
        </div>
      `;
    }
    if (this.createClientCmdState === 'error') {
      const errText =
        this.createClientCmdError && this.createClientCmdError !== 'action.createClientCmd.error'
          ? this.createClientCmdError
          : msg['create.error'];
      return html`
        <div class="mx-4 mt-3 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#b91c1c)]" role="alert">
          <div class="flex items-start justify-between gap-2">
            <span>${errText}</span>
            <button
              type="button"
              class="underline text-sm"
              @click=${(e: Event) => {
                e.preventDefault();
                this.handleCreateClientCmdClick(e);
              }}
            >
              ${msg['createClient']}
            </button>
          </div>
        </div>
      `;
    }
    return nothing;
  }

  renderUpdateFeedback(): Rendered {
    const msg = this.msg;
    if (this.updateClientCmdState === 'success') {
      return html`
        <div class="mx-4 mt-3 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]" role="status">
          ${msg['update.success']}
        </div>
      `;
    }
    if (this.updateClientCmdState === 'error') {
      const errText =
        this.updateClientCmdError && this.updateClientCmdError !== 'action.updateClientCmd.error'
          ? this.updateClientCmdError
          : msg['update.error'];
      return html`
        <div class="mx-4 mt-3 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#b91c1c)]" role="alert">
          <div class="flex items-start justify-between gap-2">
            <span>${errText}</span>
            <button
              type="button"
              class="underline text-sm"
              @click=${(e: Event) => {
                e.preventDefault();
                this.handleUpdateClientCmdClick(e);
              }}
            >
              ${msg['saveClient']}
            </button>
          </div>
        </div>
      `;
    }
    return nothing;
  }

  renderDeleteFeedback(): Rendered {
    const msg = this.msg;
    if (this.deleteClientCmdState === 'success') {
      return html`
        <div class="mx-4 mt-3 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]" role="status">
          ${msg['delete.success']}
        </div>
      `;
    }
    if (this.deleteClientCmdState === 'error') {
      const errText =
        this.deleteClientCmdError && this.deleteClientCmdError !== 'action.deleteClientCmd.error'
          ? this.deleteClientCmdError
          : msg['delete.error'];
      return html`
        <div class="mx-4 mt-3 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#b91c1c)]" role="alert">
          ${errText}
        </div>
      `;
    }
    return nothing;
  }
}
