/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientManagementWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientManagementWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';

@customElement('build-flow-fsm--web--desktop--page11--client-management-workspace-102045')
export class BuildFlowFsmDesktopPage11ClientManagementWorkspacePage extends BuildFlowFsmClientManagementWorkspaceBase {
  render() {
    const clients = this.listClientsData?.clients ?? [];
    const total = this.listClientsData?.total;
    const listLoading = this.listClientsState === 'loading';
    const listEmpty = !listLoading && clients.length === 0;

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">
              ${this.msg['section.clientManagementWorkspace.clientListSection.title']}
            </h1>
          </header>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['organism.clientManagementWorkspace.listClients.title']}
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.filter.name.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.listClientsName ?? ''}
                  @input=${this.handleListClientsNameChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.filter.company.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.listClientsCompany ?? ''}
                  @input=${this.handleListClientsCompanyChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.filter.email.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.listClientsEmail ?? ''}
                  @input=${this.handleListClientsEmailChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.filter.page.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.listClientsPage ?? ''}
                  @input=${this.handleListClientsPageChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.filter.pageSize.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.listClientsPageSize ?? ''}
                  @input=${this.handleListClientsPageSizeChange}
                />
              </label>
            </div>

            <div class="flex flex-wrap items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${listLoading}
                @click=${this.handleListClientsClick}
              >
                ${listLoading
                  ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                  : nothing}
                ${this.msg['intent.clientManagementWorkspace.listClients.list.title']}
              </button>
              ${total !== undefined && total !== null
                ? html`<span class="text-sm text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.listClients.list.column.total.label']}: ${total}</span>`
                : nothing}
            </div>

            ${listLoading
              ? html`
                  <div class="space-y-2" aria-busy="true">
                    <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  </div>
                `
              : listEmpty
                ? html`<p class="text-sm text-[var(--text-muted,#64748b)] py-6">${this.msg['intent.clientManagementWorkspace.listClients.list.empty']}</p>`
                : html`
                    <div class="overflow-x-auto rounded-md border border-[var(--border-subtle,#e2e8f0)]">
                      <table class="min-w-full text-sm">
                        <thead class="bg-[var(--surface-alt-bg,#f1f5f9)] text-left text-[var(--text-muted,#64748b)]">
                          <tr>
                            <th class="px-3 py-2 font-medium">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.name.label']}</th>
                            <th class="px-3 py-2 font-medium">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.company.label']}</th>
                            <th class="px-3 py-2 font-medium">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.email.label']}</th>
                            <th class="px-3 py-2 font-medium">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label']}</th>
                            <th class="px-3 py-2 font-medium">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.address.label']}</th>
                            <th class="px-3 py-2 font-medium"></th>
                          </tr>
                        </thead>
                        <tbody>
                          ${clients.map((item) => {
                            const row = item as {
                              clientId?: string;
                              name?: string;
                              company?: string;
                              email?: string;
                              phone?: string;
                              address?: string;
                            };
                            const clientId = row.clientId ?? '';
                            const selected =
                              clientId !== '' &&
                              (this.updateClientCmdClientId === clientId || this.deleteClientCmdClientId === clientId);
                            return html`
                              <tr
                                class="border-t border-[var(--border-subtle,#e2e8f0)] ${selected
                                  ? 'bg-[var(--selected-bg,#dbeafe)] text-[var(--selected-text,#0f172a)]'
                                  : ''}"
                              >
                                <td class="px-3 py-2">${row.name ?? ''}</td>
                                <td class="px-3 py-2">${row.company ?? ''}</td>
                                <td class="px-3 py-2">${row.email ?? ''}</td>
                                <td class="px-3 py-2">${row.phone ?? ''}</td>
                                <td class="px-3 py-2">${row.address ?? ''}</td>
                                <td class="px-3 py-2 whitespace-nowrap">
                                  <button
                                    type="button"
                                    class="rounded-md px-2 py-1 text-xs bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
                                    @click=${() => {
                                      this.setUpdateClientCmdClientId(clientId);
                                      this.setDeleteClientCmdClientId(clientId);
                                      this.setUpdateClientCmdName(row.name ?? '');
                                      this.setUpdateClientCmdCompany(row.company ?? '');
                                      this.setUpdateClientCmdEmail(row.email ?? '');
                                      this.setUpdateClientCmdPhone(row.phone ?? '');
                                      this.setUpdateClientCmdAddress(row.address ?? '');
                                    }}
                                  >
                                    ${this.msg['organism.clientManagementWorkspace.updateClientCmd.title']}
                                  </button>
                                </td>
                              </tr>
                            `;
                          })}
                        </tbody>
                      </table>
                    </div>
                  `}
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['organism.clientManagementWorkspace.createClientCmd.title']}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.name.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.createClientCmdName ?? ''}
                  @input=${this.handleCreateClientCmdNameChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.email.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="email"
                  .value=${this.createClientCmdEmail ?? ''}
                  @input=${this.handleCreateClientCmdEmailChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.company.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.createClientCmdCompany ?? ''}
                  @input=${this.handleCreateClientCmdCompanyChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.createClientCmdPhone ?? ''}
                  @input=${this.handleCreateClientCmdPhoneChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm sm:col-span-2">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.address.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.createClientCmdAddress ?? ''}
                  @input=${this.handleCreateClientCmdAddressChange}
                />
              </label>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.createClientCmdState === 'loading'}
                @click=${this.handleCreateClientCmdClick}
              >
                ${this.createClientCmdState === 'loading'
                  ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                  : nothing}
                ${this.msg['intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd']}
              </button>
            </div>
            ${this.createClientCmdState === 'success'
              ? html`
                  <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]" role="status">
                    <span><!-- TODO: action.createClientCmd.success -->Client created successfully.</span>
                    <button type="button" class="text-[var(--status-success-text,#166534)] underline" @click=${() => this.createClientCmdState = 'idle'}>×</button>
                  </div>
                `
              : this.createClientCmdState === 'error'
                ? html`
                    <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
                      <span>${this.createClientCmdError || '<!-- TODO: action.createClientCmd.error -->Failed to create client.'}</span>
                      <button type="button" class="text-[var(--status-error-text,#991b1b)] underline" @click=${() => this.createClientCmdState = 'idle'}>×</button>
                    </div>
                  `
                : nothing}
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['organism.clientManagementWorkspace.updateClientCmd.title']}
            </h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.name.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.updateClientCmdName ?? ''}
                  @input=${this.handleUpdateClientCmdNameChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.updateClientCmdCompany ?? ''}
                  @input=${this.handleUpdateClientCmdCompanyChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="email"
                  .value=${this.updateClientCmdEmail ?? ''}
                  @input=${this.handleUpdateClientCmdEmailChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.updateClientCmdPhone ?? ''}
                  @input=${this.handleUpdateClientCmdPhoneChange}
                />
              </label>
              <label class="flex flex-col gap-1 text-sm sm:col-span-2">
                <span class="text-[var(--text-muted,#64748b)]">${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label']}</span>
                <input
                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                  type="text"
                  .value=${this.updateClientCmdAddress ?? ''}
                  @input=${this.handleUpdateClientCmdAddressChange}
                />
              </label>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.updateClientCmdState === 'loading' || !this.updateClientCmdClientId}
                @click=${this.handleUpdateClientCmdClick}
              >
                ${this.updateClientCmdState === 'loading'
                  ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                  : nothing}
                ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd']}
              </button>
            </div>
            ${this.updateClientCmdState === 'success'
              ? html`
                  <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]" role="status">
                    <span><!-- TODO: action.updateClientCmd.success -->Client updated successfully.</span>
                    <button type="button" class="text-[var(--status-success-text,#166534)] underline" @click=${() => this.updateClientCmdState = 'idle'}>×</button>
                  </div>
                `
              : this.updateClientCmdState === 'error'
                ? html`
                    <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
                      <span>${this.updateClientCmdError || '<!-- TODO: action.updateClientCmd.error -->Failed to update client.'}</span>
                      <button type="button" class="text-[var(--status-error-text,#991b1b)] underline" @click=${() => this.updateClientCmdState = 'idle'}>×</button>
                    </div>
                  `
                : nothing}
          </section>

          <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
            <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">
              ${this.msg['organism.clientManagementWorkspace.deleteClientCmd.title']}
            </h2>
            <p class="text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['intent.clientManagementWorkspace.deleteClientCmd.form.title']}
              ${this.deleteClientCmdClientId
                ? html`<span class="ml-1 font-medium text-[var(--text-default,#0f172a)]">(${this.deleteClientCmdClientId})</span>`
                : nothing}
            </p>
            <div class="flex flex-wrap items-center gap-3">
              <button
                type="button"
                class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                ?disabled=${this.deleteClientCmdState === 'loading' || !this.deleteClientCmdClientId}
                @click=${this.handleDeleteClientCmdClick}
              >
                ${this.deleteClientCmdState === 'loading'
                  ? html`<span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>`
                  : nothing}
                ${this.msg['intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd']}
              </button>
            </div>
            ${this.deleteClientCmdState === 'success'
              ? html`
                  <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]" role="status">
                    <span><!-- TODO: action.deleteClientCmd.success -->Client deleted successfully.</span>
                    <button type="button" class="text-[var(--status-success-text,#166534)] underline" @click=${() => this.deleteClientCmdState = 'idle'}>×</button>
                  </div>
                `
              : this.deleteClientCmdState === 'error'
                ? html`
                    <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
                      <span>${this.deleteClientCmdError || '<!-- TODO: action.deleteClientCmd.error -->Failed to delete client.'}</span>
                      <button type="button" class="text-[var(--status-error-text,#991b1b)] underline" @click=${() => this.deleteClientCmdState = 'idle'}>×</button>
                    </div>
                  `
                : nothing}
          </section>
        </div>
      </div>
    `;
  }
}
