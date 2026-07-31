/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/clientManagementWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientManagementWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';
import type { ListClientsOutput } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';

type ClientRow = {
  clientId?: string;
  id?: string;
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  address?: string;
};

@customElement('build-flow-fsm--web--desktop--page31--client-management-workspace-102045')
export class BuildFlowFsmDesktopPage31ClientManagementWorkspacePage extends BuildFlowFsmClientManagementWorkspaceBase {
  render() {
    const listData = this.listClientsData as ListClientsOutput | null | undefined;
    const clientsRaw = listData && typeof listData === 'object' && 'clients' in listData
      ? (listData as { clients?: ClientRow[] }).clients
      : undefined;
    const clients: ClientRow[] = Array.isArray(clientsRaw) ? clientsRaw : [];
    const totalRaw = listData && typeof listData === 'object' && 'total' in listData
      ? (listData as { total?: number }).total
      : undefined;
    const total = typeof totalRaw === 'number' ? totalRaw : clients.length;

    const selectedId = this.updateClientCmdClientId || this.deleteClientCmdClientId || '';
    const selectedClient = clients.find((c: ClientRow) => {
      const rowId = c.clientId ?? c.id ?? '';
      return rowId !== '' && rowId === selectedId;
    });

    const selectClient = (item: ClientRow) => {
      const id = item.clientId ?? item.id ?? '';
      this.setUpdateClientCmdClientId(id);
      this.setDeleteClientCmdClientId(id);
      this.setUpdateClientCmdName(item.name ?? '');
      this.setUpdateClientCmdCompany(item.company ?? '');
      this.setUpdateClientCmdEmail(item.email ?? '');
      this.setUpdateClientCmdPhone(item.phone ?? '');
      this.setUpdateClientCmdAddress(item.address ?? '');
    };

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 space-y-6">
        <header class="space-y-1">
          <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['section.clientManagementWorkspace.clientListSection.title']}
          </h1>
        </header>

        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" aria-label=${this.msg['organism.clientManagementWorkspace.summary-first10.title']}>
          <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.clientManagementWorkspace.summary-first10.content.title']}
            </p>
            <p class="mt-2 text-3xl font-semibold text-[var(--text-strong,#020617)]">${total}</p>
            <p class="mt-1 text-xs text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.clientManagementWorkspace.listClients.list.column.total.label']}
            </p>
          </div>
          <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] p-4 shadow-sm">
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.clientManagementWorkspace.listClients.list.column.clients.label']}
            </p>
            <p class="mt-2 text-3xl font-semibold text-[var(--text-strong,#020617)]">${clients.length}</p>
          </div>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <section class="lg:col-span-2 space-y-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-3">
              <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['organism.clientManagementWorkspace.listClients.title']}
              </h2>
              <button
                type="button"
                class="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.listClientsState === 'loading'}
                @click=${() => this.handleListClientsClick()}
              >
                ${this.listClientsState === 'loading'
                  ? 'Loading…'
                  : this.msg['intent.clientManagementWorkspace.listClients.list.title']}
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.filter.name.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listClientsName}
                  @input=${(e: Event) => this.handleListClientsNameChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.filter.company.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listClientsCompany}
                  @input=${(e: Event) => this.handleListClientsCompanyChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.filter.email.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listClientsEmail}
                  @input=${(e: Event) => this.handleListClientsEmailChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.filter.page.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listClientsPage}
                  @input=${(e: Event) => this.handleListClientsPageChange(e)}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.filter.pageSize.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  .value=${this.listClientsPageSize}
                  @input=${(e: Event) => this.handleListClientsPageSizeChange(e)}
                />
              </label>
            </div>

            ${this.listClientsState === 'loading'
              ? html`
                  <div class="space-y-3 animate-pulse" aria-busy="true">
                    <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-16 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : clients.length === 0
                ? html`
                    <p class="rounded-md border border-dashed border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-4 py-8 text-center text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.clientManagementWorkspace.listClients.list.empty']}
                    </p>
                  `
                : html`
                    <ul class="divide-y divide-[var(--border-subtle,#e2e8f0)] rounded-md border border-[var(--border-default,#e2e8f0)]">
                      ${clients.map((item: ClientRow) => {
                        const rowId = item.clientId ?? item.id ?? '';
                        const isSelected = rowId !== '' && rowId === selectedId;
                        return html`
                          <li>
                            <button
                              type="button"
                              class="w-full text-left px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 transition-colors ${isSelected
                                ? 'bg-[var(--selected-bg,#dbeafe)] text-[var(--selected-text,#1e3a8a)] border-l-4 border-[var(--selected-border,#2563eb)]'
                                : 'bg-[var(--surface-bg,#ffffff)] hover:bg-[var(--surface-alt-bg,#f1f5f9)]'}"
                              @click=${() => selectClient(item)}
                            >
                              <div class="min-w-0">
                                <p class="font-medium truncate">${item.name ?? rowId}</p>
                                <p class="text-sm text-[var(--text-muted,#64748b)] truncate">
                                  ${item.company ?? ''}${item.company && item.email ? ' · ' : ''}${item.email ?? ''}
                                </p>
                              </div>
                              <div class="text-sm text-[var(--text-muted,#64748b)] shrink-0">
                                ${item.phone ?? ''}
                              </div>
                            </button>
                          </li>
                        `;
                      })}
                    </ul>
                  `}
          </section>

          <aside class="space-y-4">
            <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
              <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['organism.clientManagementWorkspace.updateClientCmd.title']}
              </h2>
              ${selectedClient || selectedId
                ? html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      ${selectedClient?.name ?? selectedId}
                    </p>
                    <div class="space-y-3">
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.name.label']}</span>
                        <input
                          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                          .value=${this.updateClientCmdName}
                          @input=${(e: Event) => this.handleUpdateClientCmdNameChange(e)}
                        />
                      </label>
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label']}</span>
                        <input
                          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                          .value=${this.updateClientCmdCompany}
                          @input=${(e: Event) => this.handleUpdateClientCmdCompanyChange(e)}
                        />
                      </label>
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label']}</span>
                        <input
                          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                          .value=${this.updateClientCmdEmail}
                          @input=${(e: Event) => this.handleUpdateClientCmdEmailChange(e)}
                        />
                      </label>
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label']}</span>
                        <input
                          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                          .value=${this.updateClientCmdPhone}
                          @input=${(e: Event) => this.handleUpdateClientCmdPhoneChange(e)}
                        />
                      </label>
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label']}</span>
                        <input
                          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                          .value=${this.updateClientCmdAddress}
                          @input=${(e: Event) => this.handleUpdateClientCmdAddressChange(e)}
                        />
                      </label>
                      <button
                        type="button"
                        class="w-full inline-flex justify-center items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                        ?disabled=${this.updateClientCmdState === 'loading' || !this.updateClientCmdClientId}
                        @click=${() => this.handleUpdateClientCmdClick()}
                      >
                        ${this.updateClientCmdState === 'loading'
                          ? 'Saving…'
                          : this.msg['intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd']}
                      </button>
                      ${this.updateClientCmdState === 'success'
                        ? html`
                            <div class="rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]" role="status">
                              <!-- TODO: action.updateClientCmd.success not in MessageType -->
                              Client updated successfully.
                            </div>
                          `
                        : nothing}
                      ${this.updateClientCmdState === 'error'
                        ? html`
                            <div class="rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]" role="alert">
                              ${this.updateClientCmdError || 'Update failed.'}
                            </div>
                          `
                        : nothing}
                    </div>

                    <div class="border-t border-[var(--border-subtle,#e2e8f0)] pt-4 space-y-3">
                      <h3 class="text-sm font-semibold text-[var(--text-strong,#020617)]">
                        ${this.msg['organism.clientManagementWorkspace.deleteClientCmd.title']}
                      </h3>
                      <button
                        type="button"
                        class="w-full inline-flex justify-center items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                        ?disabled=${this.deleteClientCmdState === 'loading' || !this.deleteClientCmdClientId}
                        @click=${() => this.handleDeleteClientCmdClick()}
                      >
                        ${this.deleteClientCmdState === 'loading'
                          ? 'Deleting…'
                          : this.msg['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd']}
                      </button>
                      ${this.deleteClientCmdState === 'success'
                        ? html`
                            <div class="rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]" role="status">
                              <!-- TODO: action.deleteClientCmd.success not in MessageType -->
                              Client deleted successfully.
                            </div>
                          `
                        : nothing}
                      ${this.deleteClientCmdState === 'error'
                        ? html`
                            <div class="rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]" role="alert">
                              ${this.deleteClientCmdError || 'Delete failed.'}
                            </div>
                          `
                        : nothing}
                    </div>
                  `
                : html`
                    <p class="text-sm text-[var(--text-muted,#64748b)]">
                      ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.title']}
                    </p>
                  `}
            </section>
          </aside>
        </div>

        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm space-y-4">
          <h2 class="text-lg font-semibold text-[var(--text-strong,#020617)]">
            ${this.msg['organism.clientManagementWorkspace.createClientCmd.title']}
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.name.label']}</span>
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                .value=${this.createClientCmdName}
                @input=${(e: Event) => this.handleCreateClientCmdNameChange(e)}
              />
            </label>
            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.email.label']}</span>
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                .value=${this.createClientCmdEmail}
                @input=${(e: Event) => this.handleCreateClientCmdEmailChange(e)}
              />
            </label>
            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.company.label']}</span>
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                .value=${this.createClientCmdCompany}
                @input=${(e: Event) => this.handleCreateClientCmdCompanyChange(e)}
              />
            </label>
            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label']}</span>
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                .value=${this.createClientCmdPhone}
                @input=${(e: Event) => this.handleCreateClientCmdPhoneChange(e)}
              />
            </label>
            <label class="flex flex-col gap-1 text-sm md:col-span-2">
              <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.address.label']}</span>
              <input
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
                .value=${this.createClientCmdAddress}
                @input=${(e: Event) => this.handleCreateClientCmdAddressChange(e)}
              />
            </label>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <button
              type="button"
              class="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${this.createClientCmdState === 'loading'}
              @click=${() => this.handleCreateClientCmdClick()}
            >
              ${this.createClientCmdState === 'loading'
                ? 'Creating…'
                : this.msg['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd']}
            </button>
            ${this.createClientCmdState === 'success'
              ? html`
                  <div class="rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]" role="status">
                    <!-- TODO: action.createClientCmd.success not in MessageType -->
                    Client created successfully.
                  </div>
                `
              : nothing}
            ${this.createClientCmdState === 'error'
              ? html`
                  <div class="rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]" role="alert">
                    ${this.createClientCmdError || 'Create failed.'}
                  </div>
                `
              : nothing}
          </div>
        </section>
      </div>
    `;
  }
}
