/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/clientManagementWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientManagementWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';
import type { ListClientsOutput } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

// Return type for render<Name>() helpers: a template, or the Lit sentinel for an empty branch.
// Annotating them `: TemplateResult` alone is wrong — returning `nothing` is TS2322.
type Rendered = TemplateResult | typeof nothing;

type ClientRow = {
  clientId?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  address?: string;
};

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'page.subtitle': 'Know this client at a glance and keep the record current.',
  'picker.label': 'Switch client',
  'picker.placeholder': 'Select a client',
  'picker.search': 'Find clients',
  'filter.name': s_en['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'filter.company': s_en['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'filter.email': s_en['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'filter.apply': 'Search',
  'filter.loading': 'Loading…',
  'list.empty': s_en['intent.clientManagementWorkspace.listClients.list.empty'],
  'pager.prev': 'Previous',
  'pager.next': 'Next',
  'pager.page': 'Page',
  'band.noSelection': 'Choose a client to open their profile.',
  'band.fact.company': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label'],
  'band.fact.email': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label'],
  'band.fact.phone': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label'],
  'band.fact.address': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label'],
  'edit.heading': 'Contact details',
  'edit.name': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.name.label'],
  'edit.company': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label'],
  'edit.email': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label'],
  'edit.phone': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label'],
  'edit.address': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label'],
  'edit.submit': s_en['intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd'],
  'edit.submitting': 'Saving…',
  'edit.success': s_en['action.updateClientCmd.success'],
  'edit.error': s_en['action.updateClientCmd.error'],
  'edit.dismiss': 'Dismiss',
  'delete.heading': 'Remove from directory',
  'delete.confirm': 'Permanently remove',
  'delete.submit': s_en['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'],
  'delete.submitting': 'Removing…',
  'delete.success': s_en['action.deleteClientCmd.success'],
  'delete.error': s_en['action.deleteClientCmd.error'],
  'delete.dismiss': 'Dismiss',
  'create.heading': 'Add a client',
  'create.name': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.name.label'],
  'create.email': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.email.label'],
  'create.company': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.company.label'],
  'create.phone': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'create.address': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'create.submit': s_en['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd'],
  'create.submitting': 'Creating…',
  'create.success': s_en['action.createClientCmd.success'],
  'create.error': s_en['action.createClientCmd.error'],
  'create.dismiss': 'Dismiss',
  'total.label': s_en['intent.clientManagementWorkspace.listClients.list.column.total.label'],
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'page.subtitle': 'Conheça este cliente de relance e mantenha o registro atualizado.',
  'picker.label': 'Trocar cliente',
  'picker.placeholder': 'Selecione um cliente',
  'picker.search': 'Buscar clientes',
  'filter.name': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'filter.company': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'filter.email': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'filter.apply': 'Buscar',
  'filter.loading': 'Carregando…',
  'list.empty': s_pt_br['intent.clientManagementWorkspace.listClients.list.empty'],
  'pager.prev': 'Anterior',
  'pager.next': 'Próxima',
  'pager.page': 'Página',
  'band.noSelection': 'Escolha um cliente para abrir o perfil.',
  'band.fact.company': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label'],
  'band.fact.email': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label'],
  'band.fact.phone': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label'],
  'band.fact.address': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label'],
  'edit.heading': 'Dados de contato',
  'edit.name': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.name.label'],
  'edit.company': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label'],
  'edit.email': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label'],
  'edit.phone': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label'],
  'edit.address': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label'],
  'edit.submit': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd'],
  'edit.submitting': 'Salvando…',
  'edit.success': s_pt_br['action.updateClientCmd.success'],
  'edit.error': s_pt_br['action.updateClientCmd.error'],
  'edit.dismiss': 'Dispensar',
  'delete.heading': 'Remover do diretório',
  'delete.confirm': 'Remover permanentemente',
  'delete.submit': s_pt_br['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'],
  'delete.submitting': 'Removendo…',
  'delete.success': s_pt_br['action.deleteClientCmd.success'],
  'delete.error': s_pt_br['action.deleteClientCmd.error'],
  'delete.dismiss': 'Dispensar',
  'create.heading': 'Adicionar cliente',
  'create.name': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.name.label'],
  'create.email': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.email.label'],
  'create.company': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.company.label'],
  'create.phone': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'create.address': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'create.submit': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd'],
  'create.submitting': 'Criando…',
  'create.success': s_pt_br['action.createClientCmd.success'],
  'create.error': s_pt_br['action.createClientCmd.error'],
  'create.dismiss': 'Dispensar',
  'total.label': s_pt_br['intent.clientManagementWorkspace.listClients.list.column.total.label'],
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'page.subtitle': 'Conozca a este cliente de un vistazo y mantenga el registro al día.',
  'picker.label': 'Cambiar cliente',
  'picker.placeholder': 'Seleccione un cliente',
  'picker.search': 'Buscar clientes',
  'filter.name': s_es['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'filter.company': s_es['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'filter.email': s_es['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'filter.apply': 'Buscar',
  'filter.loading': 'Cargando…',
  'list.empty': s_es['intent.clientManagementWorkspace.listClients.list.empty'],
  'pager.prev': 'Anterior',
  'pager.next': 'Siguiente',
  'pager.page': 'Página',
  'band.noSelection': 'Elija un cliente para abrir su perfil.',
  'band.fact.company': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label'],
  'band.fact.email': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label'],
  'band.fact.phone': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label'],
  'band.fact.address': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label'],
  'edit.heading': 'Datos de contacto',
  'edit.name': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.name.label'],
  'edit.company': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label'],
  'edit.email': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label'],
  'edit.phone': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label'],
  'edit.address': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label'],
  'edit.submit': s_es['intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd'],
  'edit.submitting': 'Guardando…',
  'edit.success': s_es['action.updateClientCmd.success'],
  'edit.error': s_es['action.updateClientCmd.error'],
  'edit.dismiss': 'Descartar',
  'delete.heading': 'Quitar del directorio',
  'delete.confirm': 'Eliminar permanentemente',
  'delete.submit': s_es['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'],
  'delete.submitting': 'Eliminando…',
  'delete.success': s_es['action.deleteClientCmd.success'],
  'delete.error': s_es['action.deleteClientCmd.error'],
  'delete.dismiss': 'Descartar',
  'create.heading': 'Añadir cliente',
  'create.name': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.name.label'],
  'create.email': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.email.label'],
  'create.company': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.company.label'],
  'create.phone': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'create.address': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'create.submit': s_es['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd'],
  'create.submitting': 'Creando…',
  'create.success': s_es['action.createClientCmd.success'],
  'create.error': s_es['action.createClientCmd.error'],
  'create.dismiss': 'Descartar',
  'total.label': s_es['intent.clientManagementWorkspace.listClients.list.column.total.label'],
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page31--client-management-workspace-102045')
export class BuildFlowFsmDesktopPage31ClientManagementWorkspacePage extends BuildFlowFsmClientManagementWorkspaceBase {
  #msgLang: string | null = null;
  #msgCache: PageMessageType = pageFallback;
  #deleteConfirmId: string = '';

  /** i18n catalog — resolved once per language, refreshed only when the document language changes. */
  protected get msg(): PageMessageType {
    const lang = (document.documentElement.lang || '').toLowerCase();
    if (lang !== this.#msgLang) {
      this.#msgLang = lang;
      this.#msgCache = pageMessages[this.getMessageKey(pageMessages)] || pageFallback;
    }
    return this.#msgCache;
  }

  /** Main render. Split the page into render<Name>() methods and call them from here. */
  render(): TemplateResult {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <p class="text-sm text-[var(--text-muted,#64748b)] m-0">${msg['page.subtitle']}</p>
        ${this.renderPicker()}
        ${this.renderHighlightBand()}
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div class="lg:col-span-2 space-y-6">
            ${this.renderEditSection()}
          </div>
          <div class="space-y-6">
            ${this.renderCreateSection()}
            ${this.renderDeleteSection()}
          </div>
        </div>
      </div>
    `;
  }

  private readClients(): ClientRow[] {
    const data: ListClientsOutput | null | undefined = this.listClientsData;
    if (!data || !Array.isArray(data.clients)) {
      return [];
    }
    return data.clients as ClientRow[];
  }

  private readTotal(): number {
    const data: ListClientsOutput | null | undefined = this.listClientsData;
    if (!data || typeof data.total !== 'number') {
      return 0;
    }
    return data.total;
  }

  private currentPage(): number {
    const raw: string = this.listClientsPage;
    const n: number = raw !== '' ? Number(raw) : 1;
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : 1;
  }

  private currentPageSize(): number {
    const raw: string = this.listClientsPageSize;
    const n: number = raw !== '' ? Number(raw) : 10;
    return Number.isFinite(n) && n > 0 ? Math.floor(n) : 10;
  }

  private selectedClient(): ClientRow | null {
    const id: string = this.updateClientCmdClientId || this.deleteClientCmdClientId;
    if (!id) {
      return null;
    }
    const found: ClientRow | undefined = this.readClients().find(
      (row: ClientRow) => String(row.clientId ?? '') === id,
    );
    if (found) {
      return found;
    }
    if (this.updateClientCmdName || this.updateClientCmdEmail) {
      return {
        clientId: id,
        name: this.updateClientCmdName,
        company: this.updateClientCmdCompany,
        email: this.updateClientCmdEmail,
        phone: this.updateClientCmdPhone,
        address: this.updateClientCmdAddress,
      };
    }
    return { clientId: id };
  }

  private selectClient(row: ClientRow): void {
    const id: string = String(row.clientId ?? '');
    if (!id) {
      return;
    }
    this.setUpdateClientCmdClientId(id);
    this.setUpdateClientCmdName(String(row.name ?? ''));
    this.setUpdateClientCmdCompany(String(row.company ?? ''));
    this.setUpdateClientCmdEmail(String(row.email ?? ''));
    this.setUpdateClientCmdPhone(String(row.phone ?? ''));
    this.setUpdateClientCmdAddress(String(row.address ?? ''));
    this.setDeleteClientCmdClientId(id);
    this.#deleteConfirmId = '';
    this.requestUpdate();
  }

  private handlePickerChange(event: Event): void {
    const target = event.target as HTMLSelectElement | null;
    const id: string = target && 'value' in target ? String(target.value) : '';
    if (!id) {
      this.setUpdateClientCmdClientId('');
      this.setDeleteClientCmdClientId('');
      this.setUpdateClientCmdName('');
      this.setUpdateClientCmdCompany('');
      this.setUpdateClientCmdEmail('');
      this.setUpdateClientCmdPhone('');
      this.setUpdateClientCmdAddress('');
      this.#deleteConfirmId = '';
      this.requestUpdate();
      return;
    }
    const row: ClientRow | undefined = this.readClients().find(
      (item: ClientRow) => String(item.clientId ?? '') === id,
    );
    if (row) {
      this.selectClient(row);
    } else {
      this.setUpdateClientCmdClientId(id);
      this.setDeleteClientCmdClientId(id);
    }
  }

  private goToPage(page: number): void {
    const next: number = page < 1 ? 1 : page;
    this.setListClientsPage(String(next));
    if (!this.listClientsPageSize) {
      this.setListClientsPageSize(String(this.currentPageSize()));
    }
    this.handleListClientsClick();
  }

  private clearUpdateFeedback(): void {
    this.updateClientCmdState = 'idle';
    this.updateClientCmdError = '';
    this.requestUpdate();
  }

  private clearCreateFeedback(): void {
    this.createClientCmdState = 'idle';
    this.createClientCmdError = '';
    this.requestUpdate();
  }

  private clearDeleteFeedback(): void {
    this.deleteClientCmdState = 'idle';
    this.deleteClientCmdError = '';
    this.#deleteConfirmId = '';
    this.requestUpdate();
  }

  private renderPicker(): Rendered {
    const msg = this.msg;
    const clients: ClientRow[] = this.readClients();
    const total: number = this.readTotal();
    const page: number = this.currentPage();
    const pageSize: number = this.currentPageSize();
    const maxPage: number = Math.max(1, Math.ceil(total / pageSize) || 1);
    const selectedId: string = this.updateClientCmdClientId || this.deleteClientCmdClientId;
    const loading: boolean = this.listClientsState === 'loading';

    return html`
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
        <div class="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div class="flex-1 space-y-2 min-w-0">
            <label class="block text-xs font-medium text-[var(--text-muted,#64748b)]" for="client-picker">
              ${msg['picker.label']}
            </label>
            <select
              id="client-picker"
              class="w-full max-w-md rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${selectedId}
              ?disabled=${loading}
              @change=${(event: Event) => this.handlePickerChange(event)}
            >
              <option value="">${msg['picker.placeholder']}</option>
              ${clients.map((row: ClientRow) => {
                const id: string = String(row.clientId ?? '');
                const label: string = [row.name, row.company].filter(Boolean).join(' · ') || id;
                return html`<option value=${id} ?selected=${id === selectedId}>${label}</option>`;
              })}
            </select>
          </div>
          <p class="text-xs text-[var(--text-muted,#64748b)] m-0 shrink-0">
            ${msg['total.label']}: ${total}
          </p>
        </div>

        <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
          <label class="block text-xs space-y-1">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.name']}</span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.listClientsName}
              @input=${(event: Event) => this.handleListClientsNameChange(event)}
            />
          </label>
          <label class="block text-xs space-y-1">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.company']}</span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.listClientsCompany}
              @input=${(event: Event) => this.handleListClientsCompanyChange(event)}
            />
          </label>
          <label class="block text-xs space-y-1">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.email']}</span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.listClientsEmail}
              @input=${(event: Event) => this.handleListClientsEmailChange(event)}
            />
          </label>
        </div>

        <div class="mt-3 flex flex-wrap items-center gap-2">
          <button
            type="button"
            class="rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(event: Event) => this.handleListClientsClick(event)}
          >
            ${loading ? msg['filter.loading'] : msg['filter.apply']}
          </button>
          <div class="flex items-center gap-2 ml-auto text-sm text-[var(--text-muted,#64748b)]">
            <button
              type="button"
              class="rounded-md px-2 py-1 border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] disabled:opacity-50"
              ?disabled=${loading || page <= 1}
              @click=${() => this.goToPage(page - 1)}
            >
              ${msg['pager.prev']}
            </button>
            <span>${msg['pager.page']} ${page} / ${maxPage}</span>
            <button
              type="button"
              class="rounded-md px-2 py-1 border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] disabled:opacity-50"
              ?disabled=${loading || page >= maxPage}
              @click=${() => this.goToPage(page + 1)}
            >
              ${msg['pager.next']}
            </button>
          </div>
        </div>

        ${!loading && clients.length === 0
          ? html`<p class="mt-3 text-sm text-[var(--text-muted,#64748b)] m-0">${msg['list.empty']}</p>`
          : nothing}
      </section>
    `;
  }

  private renderHighlightBand(): Rendered {
    const msg = this.msg;
    const client: ClientRow | null = this.selectedClient();
    if (!client || !client.clientId) {
      return html`
        <section class="rounded-lg border border-dashed border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-6 py-8">
          <p class="m-0 text-sm text-[var(--text-muted,#64748b)]">${msg['band.noSelection']}</p>
        </section>
      `;
    }

    const name: string = String(client.name ?? this.updateClientCmdName ?? '');
    const company: string = String(client.company ?? this.updateClientCmdCompany ?? '');
    const email: string = String(client.email ?? this.updateClientCmdEmail ?? '');
    const phone: string = String(client.phone ?? this.updateClientCmdPhone ?? '');
    const address: string = String(client.address ?? this.updateClientCmdAddress ?? '');

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-6 py-5 shadow-sm">
        <div class="flex flex-col gap-4">
          <h2 class="m-0 text-2xl font-semibold text-[var(--text-strong,#020617)] tracking-tight">
            ${name || msg['picker.placeholder']}
          </h2>
          <dl class="m-0 grid grid-cols-2 md:grid-cols-4 gap-4">
            ${company
              ? html`
                  <div>
                    <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['band.fact.company']}</dt>
                    <dd class="m-0 mt-1 text-sm font-medium text-[var(--text-default,#0f172a)]">${company}</dd>
                  </div>
                `
              : nothing}
            ${email
              ? html`
                  <div>
                    <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['band.fact.email']}</dt>
                    <dd class="m-0 mt-1 text-sm font-medium text-[var(--text-default,#0f172a)]">${email}</dd>
                  </div>
                `
              : nothing}
            ${phone
              ? html`
                  <div>
                    <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['band.fact.phone']}</dt>
                    <dd class="m-0 mt-1 text-sm font-medium text-[var(--text-default,#0f172a)]">${phone}</dd>
                  </div>
                `
              : nothing}
            ${address
              ? html`
                  <div>
                    <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['band.fact.address']}</dt>
                    <dd class="m-0 mt-1 text-sm font-medium text-[var(--text-default,#0f172a)]">${address}</dd>
                  </div>
                `
              : nothing}
          </dl>
        </div>
      </section>
    `;
  }

  private renderEditSection(): Rendered {
    const msg = this.msg;
    const hasSelection: boolean = Boolean(this.updateClientCmdClientId);
    if (!hasSelection) {
      return nothing;
    }

    const loading: boolean = this.updateClientCmdState === 'loading';
    const canSubmit: boolean =
      Boolean(this.updateClientCmdName?.trim()) &&
      Boolean(this.updateClientCmdEmail?.trim()) &&
      !loading;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4">
        <h3 class="m-0 text-base font-semibold text-[var(--text-strong,#020617)]">${msg['edit.heading']}</h3>

        ${this.updateClientCmdState === 'success'
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm">
                <span>${msg['edit.success']}</span>
                <button type="button" class="underline text-xs" @click=${() => this.clearUpdateFeedback()}>${msg['edit.dismiss']}</button>
              </div>
            `
          : nothing}
        ${this.updateClientCmdState === 'error'
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm">
                <span>${this.updateClientCmdError || msg['edit.error']}</span>
                <button type="button" class="underline text-xs" @click=${() => this.clearUpdateFeedback()}>${msg['edit.dismiss']}</button>
              </div>
            `
          : nothing}

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label class="block text-xs space-y-1 sm:col-span-1">
            <span class="text-[var(--text-muted,#64748b)]">${msg['edit.name']}</span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.updateClientCmdName}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleUpdateClientCmdNameChange(event)}
            />
          </label>
          <label class="block text-xs space-y-1">
            <span class="text-[var(--text-muted,#64748b)]">${msg['edit.email']}</span>
            <input
              type="email"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.updateClientCmdEmail}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleUpdateClientCmdEmailChange(event)}
            />
          </label>
          <label class="block text-xs space-y-1">
            <span class="text-[var(--text-muted,#64748b)]">${msg['edit.company']}</span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.updateClientCmdCompany}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleUpdateClientCmdCompanyChange(event)}
            />
          </label>
          <label class="block text-xs space-y-1">
            <span class="text-[var(--text-muted,#64748b)]">${msg['edit.phone']}</span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.updateClientCmdPhone}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleUpdateClientCmdPhoneChange(event)}
            />
          </label>
          <label class="block text-xs space-y-1 sm:col-span-2">
            <span class="text-[var(--text-muted,#64748b)]">${msg['edit.address']}</span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.updateClientCmdAddress}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleUpdateClientCmdAddressChange(event)}
            />
          </label>
        </div>

        <div class="flex justify-end">
          <button
            type="button"
            class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${!canSubmit}
            @click=${(event: Event) => this.handleUpdateClientCmdClick(event)}
          >
            ${loading ? msg['edit.submitting'] : msg['edit.submit']}
          </button>
        </div>
      </section>
    `;
  }

  private renderCreateSection(): Rendered {
    const msg = this.msg;
    const loading: boolean = this.createClientCmdState === 'loading';
    const canSubmit: boolean =
      Boolean(this.createClientCmdName?.trim()) &&
      Boolean(this.createClientCmdEmail?.trim()) &&
      !loading;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm space-y-4">
        <h3 class="m-0 text-base font-semibold text-[var(--text-strong,#020617)]">${msg['create.heading']}</h3>

        ${this.createClientCmdState === 'success'
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm">
                <span>${msg['create.success']}</span>
                <button type="button" class="underline text-xs" @click=${() => this.clearCreateFeedback()}>${msg['create.dismiss']}</button>
              </div>
            `
          : nothing}
        ${this.createClientCmdState === 'error'
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm">
                <span>${this.createClientCmdError || msg['create.error']}</span>
                <button type="button" class="underline text-xs" @click=${() => this.clearCreateFeedback()}>${msg['create.dismiss']}</button>
              </div>
            `
          : nothing}

        <label class="block text-xs space-y-1">
          <span class="text-[var(--text-muted,#64748b)]">${msg['create.name']}</span>
          <input
            type="text"
            class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
            .value=${this.createClientCmdName}
            ?disabled=${loading}
            @input=${(event: Event) => this.handleCreateClientCmdNameChange(event)}
          />
        </label>
        <label class="block text-xs space-y-1">
          <span class="text-[var(--text-muted,#64748b)]">${msg['create.email']}</span>
          <input
            type="email"
            class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
            .value=${this.createClientCmdEmail}
            ?disabled=${loading}
            @input=${(event: Event) => this.handleCreateClientCmdEmailChange(event)}
          />
        </label>
        <label class="block text-xs space-y-1">
          <span class="text-[var(--text-muted,#64748b)]">${msg['create.company']}</span>
          <input
            type="text"
            class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
            .value=${this.createClientCmdCompany}
            ?disabled=${loading}
            @input=${(event: Event) => this.handleCreateClientCmdCompanyChange(event)}
          />
        </label>
        <label class="block text-xs space-y-1">
          <span class="text-[var(--text-muted,#64748b)]">${msg['create.phone']}</span>
          <input
            type="text"
            class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
            .value=${this.createClientCmdPhone}
            ?disabled=${loading}
            @input=${(event: Event) => this.handleCreateClientCmdPhoneChange(event)}
          />
        </label>
        <label class="block text-xs space-y-1">
          <span class="text-[var(--text-muted,#64748b)]">${msg['create.address']}</span>
          <input
            type="text"
            class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
            .value=${this.createClientCmdAddress}
            ?disabled=${loading}
            @input=${(event: Event) => this.handleCreateClientCmdAddressChange(event)}
          />
        </label>

        <button
          type="button"
          class="w-full rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
          ?disabled=${!canSubmit}
          @click=${(event: Event) => this.handleCreateClientCmdClick(event)}
        >
          ${loading ? msg['create.submitting'] : msg['create.submit']}
        </button>
      </section>
    `;
  }

  private renderDeleteSection(): Rendered {
    const msg = this.msg;
    const client: ClientRow | null = this.selectedClient();
    const id: string = this.deleteClientCmdClientId || (client?.clientId ? String(client.clientId) : '');
    if (!id) {
      return nothing;
    }

    const displayName: string =
      String(client?.name ?? this.updateClientCmdName ?? '').trim() || id;
    const loading: boolean = this.deleteClientCmdState === 'loading';
    const confirming: boolean = this.#deleteConfirmId === id;

    return html`
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-5 space-y-3">
        <h3 class="m-0 text-sm font-medium text-[var(--text-muted,#64748b)]">${msg['delete.heading']}</h3>

        ${this.deleteClientCmdState === 'success'
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-3 py-2 text-sm">
                <span>${msg['delete.success']}</span>
                <button type="button" class="underline text-xs" @click=${() => this.clearDeleteFeedback()}>${msg['delete.dismiss']}</button>
              </div>
            `
          : nothing}
        ${this.deleteClientCmdState === 'error'
          ? html`
              <div class="flex items-start justify-between gap-3 rounded-md bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-3 py-2 text-sm">
                <span>${this.deleteClientCmdError || msg['delete.error']}</span>
                <button type="button" class="underline text-xs" @click=${() => this.clearDeleteFeedback()}>${msg['delete.dismiss']}</button>
              </div>
            `
          : nothing}

        ${confirming
          ? html`
              <p class="m-0 text-sm text-[var(--text-default,#0f172a)]">
                ${msg['delete.confirm']}: <strong>${displayName}</strong>
              </p>
              <div class="flex flex-wrap gap-2">
                <button
                  type="button"
                  class="rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${loading}
                  @click=${(event: Event) => {
                    this.setDeleteClientCmdClientId(id);
                    this.handleDeleteClientCmdClick(event);
                  }}
                >
                  ${loading ? msg['delete.submitting'] : msg['delete.submit']}
                </button>
                <button
                  type="button"
                  class="rounded-md px-3 py-2 text-sm bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#e2e8f0)]"
                  ?disabled=${loading}
                  @click=${() => {
                    this.#deleteConfirmId = '';
                    this.requestUpdate();
                  }}
                >
                  ${msg['delete.dismiss']}
                </button>
              </div>
            `
          : html`
              <button
                type="button"
                class="rounded-md px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)] border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]"
                @click=${() => {
                  this.setDeleteClientCmdClientId(id);
                  this.#deleteConfirmId = id;
                  this.requestUpdate();
                }}
              >
                ${msg['delete.submit']} — ${displayName}
              </button>
            `}
      </section>
    `;
  }
}
