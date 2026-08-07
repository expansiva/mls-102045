/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientManagementWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientManagementWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';
import type { ListClientsOutput } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'page.title': s_en['section.clientManagementWorkspace.clientListSection.title'],
  'list.title': s_en['intent.clientManagementWorkspace.listClients.list.title'],
  'list.empty': s_en['intent.clientManagementWorkspace.listClients.list.empty'],
  'list.loading': 'Loading clients…',
  'list.total': s_en['intent.clientManagementWorkspace.listClients.list.column.total.label'],
  'filter.name': s_en['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'filter.company': s_en['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'filter.email': s_en['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'filter.search': 'Search',
  'col.name': s_en['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'col.company': s_en['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'col.email': s_en['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'col.phone': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'col.address': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'col.actions': 'Actions',
  'pager.prev': 'Previous',
  'pager.next': 'Next',
  'pager.page': 'Page',
  'select.edit': 'Edit',
  'create.title': s_en['intent.clientManagementWorkspace.createClientCmd.form.title'],
  'create.action': s_en['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd'],
  'create.field.name': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.name.label'],
  'create.field.email': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.email.label'],
  'create.field.company': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.company.label'],
  'create.field.phone': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'create.field.address': s_en['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'create.loading': 'Creating…',
  'create.success': s_en['action.createClientCmd.success'],
  'create.error': s_en['action.createClientCmd.error'],
  'update.title': s_en['intent.clientManagementWorkspace.updateClientCmd.form.title'],
  'update.action': s_en['intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd'],
  'update.field.name': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.name.label'],
  'update.field.company': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label'],
  'update.field.email': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label'],
  'update.field.phone': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label'],
  'update.field.address': s_en['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label'],
  'update.empty': 'Select a client from the list to edit.',
  'update.loading': 'Updating…',
  'update.success': s_en['action.updateClientCmd.success'],
  'update.error': s_en['action.updateClientCmd.error'],
  'delete.action': s_en['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'],
  'delete.confirm': 'Delete this client? This cannot be undone.',
  'delete.loading': 'Deleting…',
  'delete.success': s_en['action.deleteClientCmd.success'],
  'delete.error': s_en['action.deleteClientCmd.error'],
  'feedback.dismiss': 'Dismiss',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'page.title': s_pt_br['section.clientManagementWorkspace.clientListSection.title'],
  'list.title': s_pt_br['intent.clientManagementWorkspace.listClients.list.title'],
  'list.empty': s_pt_br['intent.clientManagementWorkspace.listClients.list.empty'],
  'list.loading': 'Carregando clientes…',
  'list.total': s_pt_br['intent.clientManagementWorkspace.listClients.list.column.total.label'],
  'filter.name': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'filter.company': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'filter.email': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'filter.search': 'Buscar',
  'col.name': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'col.company': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'col.email': s_pt_br['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'col.phone': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'col.address': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'col.actions': 'Ações',
  'pager.prev': 'Anterior',
  'pager.next': 'Próxima',
  'pager.page': 'Página',
  'select.edit': 'Editar',
  'create.title': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.title'],
  'create.action': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd'],
  'create.field.name': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.name.label'],
  'create.field.email': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.email.label'],
  'create.field.company': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.company.label'],
  'create.field.phone': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'create.field.address': s_pt_br['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'create.loading': 'Criando…',
  'create.success': s_pt_br['action.createClientCmd.success'],
  'create.error': s_pt_br['action.createClientCmd.error'],
  'update.title': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.title'],
  'update.action': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd'],
  'update.field.name': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.name.label'],
  'update.field.company': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label'],
  'update.field.email': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label'],
  'update.field.phone': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label'],
  'update.field.address': s_pt_br['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label'],
  'update.empty': 'Selecione um cliente da lista para editar.',
  'update.loading': 'Atualizando…',
  'update.success': s_pt_br['action.updateClientCmd.success'],
  'update.error': s_pt_br['action.updateClientCmd.error'],
  'delete.action': s_pt_br['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'],
  'delete.confirm': 'Excluir este cliente? Esta ação não pode ser desfeita.',
  'delete.loading': 'Excluindo…',
  'delete.success': s_pt_br['action.deleteClientCmd.success'],
  'delete.error': s_pt_br['action.deleteClientCmd.error'],
  'feedback.dismiss': 'Dispensar',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'page.title': s_es['section.clientManagementWorkspace.clientListSection.title'],
  'list.title': s_es['intent.clientManagementWorkspace.listClients.list.title'],
  'list.empty': s_es['intent.clientManagementWorkspace.listClients.list.empty'],
  'list.loading': 'Cargando clientes…',
  'list.total': s_es['intent.clientManagementWorkspace.listClients.list.column.total.label'],
  'filter.name': s_es['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'filter.company': s_es['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'filter.email': s_es['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'filter.search': 'Buscar',
  'col.name': s_es['intent.clientManagementWorkspace.listClients.list.filter.name.label'],
  'col.company': s_es['intent.clientManagementWorkspace.listClients.list.filter.company.label'],
  'col.email': s_es['intent.clientManagementWorkspace.listClients.list.filter.email.label'],
  'col.phone': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'col.address': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'col.actions': 'Acciones',
  'pager.prev': 'Anterior',
  'pager.next': 'Siguiente',
  'pager.page': 'Página',
  'select.edit': 'Editar',
  'create.title': s_es['intent.clientManagementWorkspace.createClientCmd.form.title'],
  'create.action': s_es['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd'],
  'create.field.name': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.name.label'],
  'create.field.email': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.email.label'],
  'create.field.company': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.company.label'],
  'create.field.phone': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label'],
  'create.field.address': s_es['intent.clientManagementWorkspace.createClientCmd.form.field.address.label'],
  'create.loading': 'Creando…',
  'create.success': s_es['action.createClientCmd.success'],
  'create.error': s_es['action.createClientCmd.error'],
  'update.title': s_es['intent.clientManagementWorkspace.updateClientCmd.form.title'],
  'update.action': s_es['intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd'],
  'update.field.name': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.name.label'],
  'update.field.company': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label'],
  'update.field.email': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label'],
  'update.field.phone': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label'],
  'update.field.address': s_es['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label'],
  'update.empty': 'Seleccione un cliente de la lista para editar.',
  'update.loading': 'Actualizando…',
  'update.success': s_es['action.updateClientCmd.success'],
  'update.error': s_es['action.updateClientCmd.error'],
  'delete.action': s_es['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'],
  'delete.confirm': '¿Eliminar este cliente? Esta acción no se puede deshacer.',
  'delete.loading': 'Eliminando…',
  'delete.success': s_es['action.deleteClientCmd.success'],
  'delete.error': s_es['action.deleteClientCmd.error'],
  'feedback.dismiss': 'Cerrar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

type ClientRow = ListClientsOutput['clients'][number];

@customElement('build-flow-fsm--web--desktop--page11--client-management-workspace-102045')
export class BuildFlowFsmDesktopPage11ClientManagementWorkspacePage extends BuildFlowFsmClientManagementWorkspaceBase {
  #msgLang: string | null = null;
  #msgCache: PageMessageType = pageFallback;

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
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
          </header>
          ${this.renderClientList()}
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            ${this.renderCreateClient()}
            ${this.renderUpdateClient()}
          </div>
        </div>
      </div>
    `;
  }

  renderClientList(): TemplateResult {
    const msg = this.msg;
    const loading = this.listClientsState === 'loading';
    const data: ListClientsOutput = this.listClientsData ?? { clients: [], total: 0 };
    const rows: ClientRow[] = Array.isArray(data.clients) ? data.clients : [];
    const total = typeof data.total === 'number' ? data.total : rows.length;
    const pageNum = this.listClientsPage !== '' && !Number.isNaN(Number(this.listClientsPage))
      ? Math.max(1, Number(this.listClientsPage))
      : 1;
    const pageSizeNum = this.listClientsPageSize !== '' && !Number.isNaN(Number(this.listClientsPageSize))
      ? Math.max(1, Number(this.listClientsPageSize))
      : 10;
    const totalPages = Math.max(1, Math.ceil(total / pageSizeNum) || 1);
    const selectedId = this.updateClientCmdClientId || this.deleteClientCmdClientId;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['list.title']}</h2>
          <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.total']}: ${total}</span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.name']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.listClientsName}
              @input=${(e: Event) => this.handleListClientsNameChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.company']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.listClientsCompany}
              @input=${(e: Event) => this.handleListClientsCompanyChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.email']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.listClientsEmail}
              @input=${(e: Event) => this.handleListClientsEmailChange(e)}
            />
          </label>
          <div class="flex items-end">
            <button
              type="button"
              class="w-full rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${loading}
              @click=${(e: Event) => this.handleListClientsClick(e)}
            >
              ${loading ? msg['list.loading'] : msg['filter.search']}
            </button>
          </div>
        </div>

        ${loading
          ? html`<div class="py-8 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['list.loading']}</div>`
          : rows.length === 0
            ? html`<div class="py-8 text-center text-sm text-[var(--text-muted,#64748b)]">${msg['list.empty']}</div>`
            : html`
              <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                  <thead>
                    <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
                      <th class="py-2 pr-3 font-medium">${msg['col.name']}</th>
                      <th class="py-2 pr-3 font-medium">${msg['col.company']}</th>
                      <th class="py-2 pr-3 font-medium">${msg['col.email']}</th>
                      <th class="py-2 pr-3 font-medium">${msg['col.phone']}</th>
                      <th class="py-2 pr-3 font-medium">${msg['col.address']}</th>
                      <th class="py-2 font-medium">${msg['col.actions']}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rows.map((row: ClientRow) => {
                      const clientId = String((row as { clientId?: string }).clientId ?? '');
                      const name = String((row as { name?: string }).name ?? '');
                      const company = String((row as { company?: string }).company ?? '');
                      const email = String((row as { email?: string }).email ?? '');
                      const phone = String((row as { phone?: string }).phone ?? '');
                      const address = String((row as { address?: string }).address ?? '');
                      const isSelected = !!clientId && clientId === selectedId;
                      return html`
                        <tr
                          class="border-b border-[var(--border-subtle,#e2e8f0)] ${isSelected
                            ? 'bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]'
                            : ''}"
                        >
                          <td class="py-2 pr-3">${name}</td>
                          <td class="py-2 pr-3">${company}</td>
                          <td class="py-2 pr-3">${email}</td>
                          <td class="py-2 pr-3">${phone}</td>
                          <td class="py-2 pr-3">${address}</td>
                          <td class="py-2">
                            <button
                              type="button"
                              class="rounded-md px-3 py-1 border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)]"
                              ?disabled=${!clientId}
                              @click=${() => {
                                if (!clientId) return;
                                this.setUpdateClientCmdClientId(clientId);
                                this.setUpdateClientCmdName(name);
                                this.setUpdateClientCmdCompany(company);
                                this.setUpdateClientCmdEmail(email);
                                this.setUpdateClientCmdPhone(phone);
                                this.setUpdateClientCmdAddress(address);
                                this.setDeleteClientCmdClientId(clientId);
                              }}
                            >
                              ${msg['select.edit']}
                            </button>
                          </td>
                        </tr>
                      `;
                    })}
                  </tbody>
                </table>
              </div>
            `}

        <div class="flex flex-wrap items-center justify-between gap-3 pt-2">
          <span class="text-sm text-[var(--text-muted,#64748b)]">${msg['pager.page']} ${pageNum} / ${totalPages}</span>
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="rounded-md px-3 py-1.5 border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
              ?disabled=${loading || pageNum <= 1}
              @click=${() => {
                this.setListClientsPage(String(Math.max(1, pageNum - 1)));
                void this.loadListClients();
              }}
            >
              ${msg['pager.prev']}
            </button>
            <button
              type="button"
              class="rounded-md px-3 py-1.5 border border-[var(--button-secondary-border,#cbd5e1)] bg-[var(--button-secondary-bg,#ffffff)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
              ?disabled=${loading || pageNum >= totalPages}
              @click=${() => {
                this.setListClientsPage(String(pageNum + 1));
                void this.loadListClients();
              }}
            >
              ${msg['pager.next']}
            </button>
          </div>
        </div>
      </section>
    `;
  }

  renderCreateClient(): TemplateResult {
    const msg = this.msg;
    const loading = this.createClientCmdState === 'loading';
    const showSuccess = this.createClientCmdState === 'success';
    const showError = this.createClientCmdState === 'error';
    const errorText = this.createClientCmdError || msg['create.error'];

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['create.title']}</h2>
        <div class="grid grid-cols-1 gap-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['create.field.name']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.createClientCmdName}
              @input=${(e: Event) => this.handleCreateClientCmdNameChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['create.field.email']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="email"
              .value=${this.createClientCmdEmail}
              @input=${(e: Event) => this.handleCreateClientCmdEmailChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['create.field.company']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.createClientCmdCompany}
              @input=${(e: Event) => this.handleCreateClientCmdCompanyChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['create.field.phone']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.createClientCmdPhone}
              @input=${(e: Event) => this.handleCreateClientCmdPhoneChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['create.field.address']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.createClientCmdAddress}
              @input=${(e: Event) => this.handleCreateClientCmdAddressChange(e)}
            />
          </label>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(e: Event) => this.handleCreateClientCmdClick(e)}
          >
            ${loading ? msg['create.loading'] : msg['create.action']}
          </button>
        </div>
        ${showSuccess
          ? html`
            <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
              <span>${msg['create.success']}</span>
              <button type="button" class="underline" @click=${() => { this.createClientCmdState = 'idle'; }}>${msg['feedback.dismiss']}</button>
            </div>
          `
          : nothing}
        ${showError
          ? html`
            <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
              <span>${errorText}</span>
              <button type="button" class="underline" @click=${() => { this.createClientCmdState = 'idle'; this.createClientCmdError = ''; }}>${msg['feedback.dismiss']}</button>
            </div>
          `
          : nothing}
      </section>
    `;
  }

  renderUpdateClient(): TemplateResult {
    const msg = this.msg;
    const hasSelection = !!this.updateClientCmdClientId;
    const loading = this.updateClientCmdState === 'loading';
    const deleteLoading = this.deleteClientCmdState === 'loading';
    const showSuccess = this.updateClientCmdState === 'success';
    const showError = this.updateClientCmdState === 'error';
    const errorText = this.updateClientCmdError || msg['update.error'];
    const showDeleteSuccess = this.deleteClientCmdState === 'success';
    const showDeleteError = this.deleteClientCmdState === 'error';
    const deleteErrorText = this.deleteClientCmdError || msg['delete.error'];
    const selectedName = this.updateClientCmdName || this.updateClientCmdClientId;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['update.title']}</h2>
        ${!hasSelection
          ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['update.empty']}</p>`
          : html`
            <div class="grid grid-cols-1 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${msg['update.field.name']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  type="text"
                  .value=${this.updateClientCmdName}
                  @input=${(e: Event) => this.handleUpdateClientCmdNameChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${msg['update.field.email']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  type="email"
                  .value=${this.updateClientCmdEmail}
                  @input=${(e: Event) => this.handleUpdateClientCmdEmailChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${msg['update.field.company']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  type="text"
                  .value=${this.updateClientCmdCompany}
                  @input=${(e: Event) => this.handleUpdateClientCmdCompanyChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${msg['update.field.phone']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  type="text"
                  .value=${this.updateClientCmdPhone}
                  @input=${(e: Event) => this.handleUpdateClientCmdPhoneChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${msg['update.field.address']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                  type="text"
                  .value=${this.updateClientCmdAddress}
                  @input=${(e: Event) => this.handleUpdateClientCmdAddressChange(e)}
                />
              </label>
            </div>
            <div class="flex flex-wrap items-center gap-2">
              <button
                type="button"
                class="rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${loading || deleteLoading}
                @click=${(e: Event) => this.handleUpdateClientCmdClick(e)}
              >
                ${loading ? msg['update.loading'] : msg['update.action']}
              </button>
              <button
                type="button"
                class="rounded-md px-4 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                ?disabled=${loading || deleteLoading || !this.deleteClientCmdClientId}
                @click=${(e: Event) => {
                  const label = selectedName || this.deleteClientCmdClientId;
                  const ok = window.confirm(`${msg['delete.confirm']} (${label})`);
                  if (!ok) return;
                  this.handleDeleteClientCmdClick(e);
                }}
              >
                ${deleteLoading ? msg['delete.loading'] : msg['delete.action']}
              </button>
            </div>
          `}
        ${showSuccess
          ? html`
            <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
              <span>${msg['update.success']}</span>
              <button type="button" class="underline" @click=${() => { this.updateClientCmdState = 'idle'; }}>${msg['feedback.dismiss']}</button>
            </div>
          `
          : nothing}
        ${showError
          ? html`
            <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
              <span>${errorText}</span>
              <button type="button" class="underline" @click=${() => { this.updateClientCmdState = 'idle'; this.updateClientCmdError = ''; }}>${msg['feedback.dismiss']}</button>
            </div>
          `
          : nothing}
        ${showDeleteSuccess
          ? html`
            <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
              <span>${msg['delete.success']}</span>
              <button type="button" class="underline" @click=${() => { this.deleteClientCmdState = 'idle'; }}>${msg['feedback.dismiss']}</button>
            </div>
          `
          : nothing}
        ${showDeleteError
          ? html`
            <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
              <span>${deleteErrorText}</span>
              <button type="button" class="underline" @click=${() => { this.deleteClientCmdState = 'idle'; this.deleteClientCmdError = ''; }}>${msg['feedback.dismiss']}</button>
            </div>
          `
          : nothing}
      </section>
    `;
  }
}
