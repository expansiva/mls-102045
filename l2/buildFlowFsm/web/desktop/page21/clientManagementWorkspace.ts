/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/clientManagementWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmClientManagementWorkspaceBase } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';
import type { ListClientsOutput } from '/_102045_/l2/buildFlowFsm/web/shared/clientManagementWorkspace.js';

type ClientRow = {
  clientId?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  address?: string;
};

@customElement('build-flow-fsm--web--desktop--page21--client-management-workspace-102045')
export class BuildFlowFsmDesktopPage21ClientManagementWorkspacePage extends BuildFlowFsmClientManagementWorkspaceBase {
  render() {
    const listData: ListClientsOutput | null | undefined = this.listClientsData;
    const clientsRaw = listData && Array.isArray((listData as { clients?: unknown }).clients)
      ? ((listData as { clients: ClientRow[] }).clients)
      : [];
    const clients: ClientRow[] = clientsRaw;
    const totalRaw = listData && (listData as { total?: unknown }).total;
    const total = typeof totalRaw === 'number' ? totalRaw : clients.length;

    const listLoading = this.listClientsState === 'loading';
    const createLoading = this.createClientCmdState === 'loading';
    const updateLoading = this.updateClientCmdState === 'loading';
    const deleteLoading = this.deleteClientCmdState === 'loading';

    const selectedId = this.updateClientCmdClientId || this.deleteClientCmdClientId || '';
    const hasSelection = selectedId.trim().length > 0;

    const selectClient = (client: ClientRow): void => {
      const id = client.clientId ?? '';
      this.setUpdateClientCmdClientId(id);
      this.setUpdateClientCmdName(client.name ?? '');
      this.setUpdateClientCmdCompany(client.company ?? '');
      this.setUpdateClientCmdEmail(client.email ?? '');
      this.setUpdateClientCmdPhone(client.phone ?? '');
      this.setUpdateClientCmdAddress(client.address ?? '');
      this.setDeleteClientCmdClientId(id);
    };

    const onDeleteClient = (client: ClientRow): void => {
      const id = client.clientId ?? '';
      this.setDeleteClientCmdClientId(id);
      this.setUpdateClientCmdClientId(id);
      // TODO: confirmation copy has no msg key in shared MessageType
      if (typeof window !== 'undefined' && window.confirm('Delete this client?')) {
        this.handleDeleteClientCmdClick();
      }
    };

    return html`
      <div class="min-h-full p-6 bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <header class="mb-6 flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">
              ${this.msg['section.clientManagementWorkspace.clientListSection.title']}
            </h1>
            <p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">
              ${this.msg['organism.clientManagementWorkspace.listClients.title']}
            </p>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <div
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-4 py-2"
            >
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                ${this.msg['organism.clientManagementWorkspace.summary-first10.title']}
              </div>
              <div class="text-lg font-semibold text-[var(--text-strong,#020617)]">
                ${this.msg['intent.clientManagementWorkspace.listClients.list.column.total.label']}:
                ${listLoading ? '…' : total}
              </div>
            </div>
          </div>
        </header>

        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div class="lg:col-span-2 space-y-4">
            <section
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm"
            >
              <div
                class="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle,#e2e8f0)] px-4 py-3"
              >
                <h2 class="text-base font-medium text-[var(--text-strong,#020617)]">
                  ${this.msg['intent.clientManagementWorkspace.listClients.list.title']}
                </h2>
                <button
                  type="button"
                  class="rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${listLoading}
                  @click=${() => this.handleListClientsClick()}
                >
                  ${listLoading
                    ? '…'
                    : this.msg['organism.clientManagementWorkspace.listClients.title']}
                </button>
              </div>

              <div class="grid grid-cols-1 gap-3 border-b border-[var(--border-subtle,#e2e8f0)] p-4 md:grid-cols-3 lg:grid-cols-5">
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.clientManagementWorkspace.listClients.list.filter.name.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listClientsName}
                    @input=${(e: Event) => this.handleListClientsNameChange(e)}
                    @change=${() => this.handleListClientsClick()}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.clientManagementWorkspace.listClients.list.filter.company.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listClientsCompany}
                    @input=${(e: Event) => this.handleListClientsCompanyChange(e)}
                    @change=${() => this.handleListClientsClick()}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.clientManagementWorkspace.listClients.list.filter.email.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listClientsEmail}
                    @input=${(e: Event) => this.handleListClientsEmailChange(e)}
                    @change=${() => this.handleListClientsClick()}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.clientManagementWorkspace.listClients.list.filter.page.label']}
                  </span>
                  <input
                    type="number"
                    min="1"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listClientsPage}
                    @input=${(e: Event) => this.handleListClientsPageChange(e)}
                    @change=${() => this.handleListClientsClick()}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.clientManagementWorkspace.listClients.list.filter.pageSize.label']}
                  </span>
                  <input
                    type="number"
                    min="1"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.listClientsPageSize}
                    @input=${(e: Event) => this.handleListClientsPageSizeChange(e)}
                    @change=${() => this.handleListClientsClick()}
                  />
                </label>
              </div>

              ${listLoading
                ? html`
                    <div class="space-y-3 p-4" aria-busy="true">
                      <div class="h-10 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-10 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                      <div class="h-10 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                    </div>
                  `
                : clients.length === 0
                  ? html`
                      <div class="p-6 text-sm text-[var(--text-muted,#64748b)]">
                        ${this.msg['intent.clientManagementWorkspace.listClients.list.empty']}
                      </div>
                    `
                  : html`
                      <div class="overflow-x-auto">
                        <table class="min-w-full text-left text-sm">
                          <thead class="bg-[var(--surface-alt-bg,#f1f5f9)] text-[var(--text-muted,#64748b)]">
                            <tr>
                              <th class="px-4 py-3 font-medium">
                                ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.name.label']}
                              </th>
                              <th class="px-4 py-3 font-medium">
                                ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label']}
                              </th>
                              <th class="px-4 py-3 font-medium">
                                ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label']}
                              </th>
                              <th class="px-4 py-3 font-medium">
                                ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label']}
                              </th>
                              <th class="px-4 py-3 font-medium"></th>
                            </tr>
                          </thead>
                          <tbody>
                            ${clients.map((client: ClientRow) => {
                              const rowId = client.clientId ?? '';
                              const isSelected = hasSelection && rowId === selectedId;
                              return html`
                                <tr
                                  class="cursor-pointer border-t border-[var(--border-subtle,#e2e8f0)] ${isSelected
                                    ? 'bg-[var(--selected-bg,#dbeafe)] text-[var(--selected-text,#0f172a)]'
                                    : 'hover:bg-[var(--surface-alt-bg,#f1f5f9)]'}"
                                  @click=${() => selectClient(client)}
                                >
                                  <td class="px-4 py-3 font-medium">${client.name ?? ''}</td>
                                  <td class="px-4 py-3">${client.company ?? ''}</td>
                                  <td class="px-4 py-3">${client.email ?? ''}</td>
                                  <td class="px-4 py-3">${client.phone ?? ''}</td>
                                  <td class="px-4 py-3 text-right">
                                    <button
                                      type="button"
                                      class="rounded-md px-2 py-1 text-xs font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                                      ?disabled=${deleteLoading}
                                      @click=${(e: Event) => {
                                        e.stopPropagation();
                                        onDeleteClient(client);
                                      }}
                                    >
                                      ${deleteLoading
                                        ? '…'
                                        : this.msg[
                                            'intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'
                                          ]}
                                    </button>
                                  </td>
                                </tr>
                              `;
                            })}
                          </tbody>
                        </table>
                      </div>
                    `}

              ${this.listClientsState === 'error'
                ? html`
                    <div
                      class="m-4 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                    >
                      <!-- TODO: listClients error feedback key absent from MessageType -->
                      Error loading clients
                    </div>
                  `
                : nothing}
            </section>

            <section
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"
            >
              <div class="mb-4 flex items-center justify-between gap-3">
                <h2 class="text-base font-medium text-[var(--text-strong,#020617)]">
                  ${this.msg['organism.clientManagementWorkspace.createClientCmd.title']}
                </h2>
              </div>
              <p class="mb-3 text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.clientManagementWorkspace.createClientCmd.form.title']}
              </p>
              <div class="grid grid-cols-1 gap-3 md:grid-cols-2">
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.name.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.createClientCmdName}
                    @input=${(e: Event) => this.handleCreateClientCmdNameChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.email.label']}
                  </span>
                  <input
                    type="email"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.createClientCmdEmail}
                    @input=${(e: Event) => this.handleCreateClientCmdEmailChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.company.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.createClientCmdCompany}
                    @input=${(e: Event) => this.handleCreateClientCmdCompanyChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.phone.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.createClientCmdPhone}
                    @input=${(e: Event) => this.handleCreateClientCmdPhoneChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm md:col-span-2">
                  <span class="text-[var(--text-muted,#64748b)]">
                    ${this.msg['intent.clientManagementWorkspace.createClientCmd.form.field.address.label']}
                  </span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    .value=${this.createClientCmdAddress}
                    @input=${(e: Event) => this.handleCreateClientCmdAddressChange(e)}
                  />
                </label>
              </div>
              <div class="mt-4 flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${createLoading}
                  @click=${() => this.handleCreateClientCmdClick()}
                >
                  ${createLoading
                    ? '…'
                    : this.msg[
                        'intent.clientManagementWorkspace.createClientCmd.form.action.createClientCmd'
                      ]}
                </button>
                ${this.createClientCmdState === 'success'
                  ? html`
                      <div
                        class="rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                      >
                        <!-- TODO: action.createClientCmd.success absent from MessageType -->
                        OK
                      </div>
                    `
                  : nothing}
                ${this.createClientCmdState === 'error'
                  ? html`
                      <div
                        class="rounded-md bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                      >
                        ${this.createClientCmdError ||
                        '<!-- TODO: action.createClientCmd.error absent from MessageType --> Error'}
                      </div>
                    `
                  : nothing}
              </div>
            </section>
          </div>

          <aside class="space-y-4">
            <section
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm"
            >
              <h2 class="mb-1 text-base font-medium text-[var(--text-strong,#020617)]">
                ${this.msg['organism.clientManagementWorkspace.updateClientCmd.title']}
              </h2>
              <p class="mb-4 text-sm text-[var(--text-muted,#64748b)]">
                ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.title']}
              </p>

              ${hasSelection
                ? html`
                    <div class="grid grid-cols-1 gap-3">
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.name.label']}
                        </span>
                        <input
                          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                          .value=${this.updateClientCmdName}
                          @input=${(e: Event) => this.handleUpdateClientCmdNameChange(e)}
                        />
                      </label>
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.company.label']}
                        </span>
                        <input
                          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                          .value=${this.updateClientCmdCompany}
                          @input=${(e: Event) => this.handleUpdateClientCmdCompanyChange(e)}
                        />
                      </label>
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.email.label']}
                        </span>
                        <input
                          type="email"
                          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                          .value=${this.updateClientCmdEmail}
                          @input=${(e: Event) => this.handleUpdateClientCmdEmailChange(e)}
                        />
                      </label>
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.phone.label']}
                        </span>
                        <input
                          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                          .value=${this.updateClientCmdPhone}
                          @input=${(e: Event) => this.handleUpdateClientCmdPhoneChange(e)}
                        />
                      </label>
                      <label class="flex flex-col gap-1 text-sm">
                        <span class="text-[var(--text-muted,#64748b)]">
                          ${this.msg['intent.clientManagementWorkspace.updateClientCmd.form.field.address.label']}
                        </span>
                        <input
                          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                          .value=${this.updateClientCmdAddress}
                          @input=${(e: Event) => this.handleUpdateClientCmdAddressChange(e)}
                        />
                      </label>
                    </div>

                    <div class="mt-4 flex flex-col gap-2">
                      <button
                        type="button"
                        class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                        ?disabled=${updateLoading || !hasSelection}
                        @click=${() => this.handleUpdateClientCmdClick()}
                      >
                        ${updateLoading
                          ? '…'
                          : this.msg[
                              'intent.clientManagementWorkspace.updateClientCmd.form.action.updateClientCmd'
                            ]}
                      </button>
                      <button
                        type="button"
                        class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                        ?disabled=${deleteLoading || !hasSelection}
                        @click=${() => {
                          // TODO: confirmation copy has no msg key in shared MessageType
                          if (typeof window !== 'undefined' && window.confirm('Delete this client?')) {
                            this.handleDeleteClientCmdClick();
                          }
                        }}
                      >
                        ${deleteLoading
                          ? '…'
                          : this.msg[
                              'intent.clientManagementWorkspace.deleteClientCmd.form.action.deleteClientCmd'
                            ]}
                      </button>
                    </div>

                    ${this.updateClientCmdState === 'success'
                      ? html`
                          <div
                            class="mt-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                          >
                            <!-- TODO: action.updateClientCmd.success absent from MessageType -->
                            OK
                          </div>
                        `
                      : nothing}
                    ${this.updateClientCmdState === 'error'
                      ? html`
                          <div
                            class="mt-3 rounded-md bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                          >
                            ${this.updateClientCmdError ||
                            '<!-- TODO: action.updateClientCmd.error absent from MessageType --> Error'}
                          </div>
                        `
                      : nothing}
                    ${this.deleteClientCmdState === 'success'
                      ? html`
                          <div
                            class="mt-3 rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                          >
                            <!-- TODO: action.deleteClientCmd.success absent from MessageType -->
                            OK
                          </div>
                        `
                      : nothing}
                    ${this.deleteClientCmdState === 'error'
                      ? html`
                          <div
                            class="mt-3 rounded-md bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                          >
                            ${this.deleteClientCmdError ||
                            '<!-- TODO: action.deleteClientCmd.error absent from MessageType --> Error'}
                          </div>
                        `
                      : nothing}
                  `
                : html`
                    <div
                      class="rounded-md border border-dashed border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-3 py-6 text-center text-sm text-[var(--text-muted,#64748b)]"
                    >
                      ${this.msg['intent.clientManagementWorkspace.summary-first10.content.title']}
                    </div>
                  `}
            </section>
          </aside>
        </div>
      </div>
    `;
  }
}
