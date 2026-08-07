/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/invoiceWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmInvoiceWorkspaceBase,
  messages as sharedMessages,
  type ListInvoicesOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/invoiceWorkspace.js';

const s_en = sharedMessages['en'];
const s_pt_br = sharedMessages['pt-br'];
const s_es = sharedMessages['es'];

const message_en = {
  'page.title': s_en['section.invoiceWorkspace.invoiceListSection.title'],
  'list.section': s_en['section.invoiceWorkspace.sec-invoice-list.title'],
  'list.empty': s_en['intent.invoiceWorkspace.listInvoices.list.empty'],
  'list.column.invoices': s_en['intent.invoiceWorkspace.listInvoices.list.column.invoices.label'],
  'list.column.total': s_en['intent.invoiceWorkspace.listInvoices.list.column.total.label'],
  'filter.status': s_en['intent.invoiceWorkspace.listInvoices.list.filter.status.label'],
  'filter.projectId': s_en['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label'],
  'filter.clientId': s_en['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label'],
  'create.section': s_en['section.invoiceWorkspace.createInvoiceSection.title'],
  'create.action': s_en['intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd'],
  'create.invoiceNumber': s_en['intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label'],
  'create.success': s_en['action.createInvoiceCmd.success'],
  'create.error': s_en['action.createInvoiceCmd.error'],
  'send.action': s_en['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd'],
  'send.success': s_en['action.sendInvoiceCmd.success'],
  'send.error': s_en['action.sendInvoiceCmd.error'],
  'btn.applyFilters': 'Apply filters',
  'btn.prev': 'Previous',
  'btn.next': 'Next',
  'btn.dismiss': 'Dismiss',
  'btn.select': 'Select',
  'label.selected': 'Selected for actions',
  'label.project': 'Project',
  'label.client': 'Client',
  'label.status': 'Status',
  'label.invoiceNumber': 'Invoice #',
  'label.invoiceId': 'Invoice',
  'empty.selection': 'Select an invoice row to send it, or to reuse its project and client when creating.',
  'loading': 'Loading…',
  'confirm.send': 'Send this invoice to the client?',
  'pager.total': 'Total',
  'col.actions': 'Actions',
};

const message_pt_br: typeof message_en = {
  'page.title': s_pt_br['section.invoiceWorkspace.invoiceListSection.title'],
  'list.section': s_pt_br['section.invoiceWorkspace.sec-invoice-list.title'],
  'list.empty': s_pt_br['intent.invoiceWorkspace.listInvoices.list.empty'],
  'list.column.invoices': s_pt_br['intent.invoiceWorkspace.listInvoices.list.column.invoices.label'],
  'list.column.total': s_pt_br['intent.invoiceWorkspace.listInvoices.list.column.total.label'],
  'filter.status': s_pt_br['intent.invoiceWorkspace.listInvoices.list.filter.status.label'],
  'filter.projectId': s_pt_br['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label'],
  'filter.clientId': s_pt_br['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label'],
  'create.section': s_pt_br['section.invoiceWorkspace.createInvoiceSection.title'],
  'create.action': s_pt_br['intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd'],
  'create.invoiceNumber': s_pt_br['intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label'],
  'create.success': s_pt_br['action.createInvoiceCmd.success'],
  'create.error': s_pt_br['action.createInvoiceCmd.error'],
  'send.action': s_pt_br['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd'],
  'send.success': s_pt_br['action.sendInvoiceCmd.success'],
  'send.error': s_pt_br['action.sendInvoiceCmd.error'],
  'btn.applyFilters': 'Aplicar filtros',
  'btn.prev': 'Anterior',
  'btn.next': 'Próxima',
  'btn.dismiss': 'Dispensar',
  'btn.select': 'Selecionar',
  'label.selected': 'Selecionado para ações',
  'label.project': 'Projeto',
  'label.client': 'Cliente',
  'label.status': 'Status',
  'label.invoiceNumber': 'Nº da fatura',
  'label.invoiceId': 'Fatura',
  'empty.selection': 'Selecione uma fatura para enviá-la, ou para reutilizar projeto e cliente ao criar.',
  'loading': 'Carregando…',
  'confirm.send': 'Enviar esta fatura ao cliente?',
  'pager.total': 'Total',
  'col.actions': 'Ações',
};

const message_es: typeof message_en = {
  'page.title': s_es['section.invoiceWorkspace.invoiceListSection.title'],
  'list.section': s_es['section.invoiceWorkspace.sec-invoice-list.title'],
  'list.empty': s_es['intent.invoiceWorkspace.listInvoices.list.empty'],
  'list.column.invoices': s_es['intent.invoiceWorkspace.listInvoices.list.column.invoices.label'],
  'list.column.total': s_es['intent.invoiceWorkspace.listInvoices.list.column.total.label'],
  'filter.status': s_es['intent.invoiceWorkspace.listInvoices.list.filter.status.label'],
  'filter.projectId': s_es['intent.invoiceWorkspace.listInvoices.list.filter.projectId.label'],
  'filter.clientId': s_es['intent.invoiceWorkspace.listInvoices.list.filter.clientId.label'],
  'create.section': s_es['section.invoiceWorkspace.createInvoiceSection.title'],
  'create.action': s_es['intent.invoiceWorkspace.createInvoiceCmd.form.action.createInvoiceCmd'],
  'create.invoiceNumber': s_es['intent.invoiceWorkspace.createInvoiceCmd.form.field.invoiceNumber.label'],
  'create.success': s_es['action.createInvoiceCmd.success'],
  'create.error': s_es['action.createInvoiceCmd.error'],
  'send.action': s_es['intent.invoiceWorkspace.sendInvoiceCmd.form.action.sendInvoiceCmd'],
  'send.success': s_es['action.sendInvoiceCmd.success'],
  'send.error': s_es['action.sendInvoiceCmd.error'],
  'btn.applyFilters': 'Aplicar filtros',
  'btn.prev': 'Anterior',
  'btn.next': 'Siguiente',
  'btn.dismiss': 'Descartar',
  'btn.select': 'Seleccionar',
  'label.selected': 'Seleccionado para acciones',
  'label.project': 'Proyecto',
  'label.client': 'Cliente',
  'label.status': 'Estado',
  'label.invoiceNumber': 'N.º de factura',
  'label.invoiceId': 'Factura',
  'empty.selection': 'Seleccione una factura para enviarla, o para reutilizar su proyecto y cliente al crear.',
  'loading': 'Cargando…',
  'confirm.send': '¿Enviar esta factura al cliente?',
  'pager.total': 'Total',
  'col.actions': 'Acciones',
};

type PageMessageType = typeof message_en;

const pageMessages: { [key: string]: PageMessageType } = {
  en: message_en,
  'pt-br': message_pt_br,
  es: message_es,
};

type InvoiceRow = ListInvoicesOutput['invoices'][number];

@customElement('build-flow-fsm--web--desktop--page11--invoice-workspace-102045')
export class BuildFlowFsmDesktopPage11InvoiceWorkspacePage extends BuildFlowFsmInvoiceWorkspaceBase {
  msg: PageMessageType = pageMessages['en'] ?? message_en;

  render(): ReturnType<typeof html> {
    const localeCandidate = (this as unknown as { lang?: string; locale?: string }).lang
      ?? (this as unknown as { locale?: string }).locale
      ?? 'en';
    this.msg = pageMessages[localeCandidate] ?? message_en;

    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          ${this.renderHeader()}
          ${this.renderInvoiceList()}
          ${this.renderCreateInvoice()}
        </div>
      </div>
    `;
  }

  renderHeader(): ReturnType<typeof html> {
    const msg = this.msg;
    return html`
      <header class="space-y-1">
        <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
      </header>
    `;
  }

  renderInvoiceList(): ReturnType<typeof html> {
    const msg = this.msg;
    const loading = this.listInvoicesState === 'loading';
    const data = this.listInvoicesData;
    const rows: InvoiceRow[] = data && Array.isArray(data.invoices) ? data.invoices : [];
    const total = data && typeof data.total === 'number' ? data.total : 0;
    const pageNum = this.listInvoicesPage !== '' && !Number.isNaN(Number(this.listInvoicesPage))
      ? Number(this.listInvoicesPage)
      : 1;
    const pageSizeNum = this.listInvoicesPageSize !== '' && !Number.isNaN(Number(this.listInvoicesPageSize))
      ? Number(this.listInvoicesPageSize)
      : 10;
    const canPrev = pageNum > 1;
    const canNext = pageNum * pageSizeNum < total;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['list.section']}</h2>
          <span class="text-sm text-[var(--text-muted,#64748b)]">
            ${msg['pager.total']}: ${total}
          </span>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.status']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.listInvoicesStatus}
              @change=${(e: Event) => this.handleListInvoicesStatusChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.projectId']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.listInvoicesProjectId}
              @change=${(e: Event) => this.handleListInvoicesProjectIdChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['filter.clientId']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.listInvoicesClientId}
              @change=${(e: Event) => this.handleListInvoicesClientIdChange(e)}
            />
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            class="rounded-md px-3 py-2 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
            ?disabled=${loading}
            @click=${(e: Event) => this.handleListInvoicesClick(e)}
          >
            ${loading ? msg['loading'] : msg['btn.applyFilters']}
          </button>
          <div class="flex items-center gap-2 ml-auto">
            <button
              type="button"
              class="rounded-md px-3 py-2 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
              ?disabled=${loading || !canPrev}
              @click=${() => {
                this.setListInvoicesPage(String(Math.max(1, pageNum - 1)));
                void this.loadListInvoices();
              }}
            >
              ${msg['btn.prev']}
            </button>
            <span class="text-sm text-[var(--text-muted,#64748b)]">${pageNum}</span>
            <button
              type="button"
              class="rounded-md px-3 py-2 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
              ?disabled=${loading || !canNext}
              @click=${() => {
                this.setListInvoicesPage(String(pageNum + 1));
                void this.loadListInvoices();
              }}
            >
              ${msg['btn.next']}
            </button>
          </div>
        </div>

        ${loading
          ? html`<div class="py-8 text-center text-[var(--text-muted,#64748b)]">${msg['loading']}</div>`
          : rows.length === 0
            ? html`<div class="py-8 text-center text-[var(--text-muted,#64748b)]">${msg['list.empty']}</div>`
            : html`
              <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                  <thead>
                    <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
                      <th class="py-2 pr-3 font-medium">${msg['label.invoiceId']}</th>
                      <th class="py-2 pr-3 font-medium">${msg['label.invoiceNumber']}</th>
                      <th class="py-2 pr-3 font-medium">${msg['label.project']}</th>
                      <th class="py-2 pr-3 font-medium">${msg['label.client']}</th>
                      <th class="py-2 pr-3 font-medium">${msg['label.status']}</th>
                      <th class="py-2 pr-3 font-medium">${msg['col.actions']}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${rows.map((row: InvoiceRow) => this.renderInvoiceRow(row))}
                  </tbody>
                </table>
              </div>
            `}

        ${this.renderSendFeedback()}
        ${this.renderSelectionSummary()}
      </section>
    `;
  }

  renderInvoiceRow(row: InvoiceRow): ReturnType<typeof html> {
    const msg = this.msg;
    const record = row as Record<string, unknown>;
    const invoiceId = record['invoiceId'] != null ? String(record['invoiceId']) : '';
    const invoiceNumber = record['invoiceNumber'] != null ? String(record['invoiceNumber']) : '';
    const projectId = record['projectId'] != null ? String(record['projectId']) : '';
    const clientId = record['clientId'] != null ? String(record['clientId']) : '';
    const status = record['status'] != null ? String(record['status']) : '';
    const selected = this.sendInvoiceCmdInvoiceId !== '' && this.sendInvoiceCmdInvoiceId === invoiceId;
    const sendLoading = this.sendInvoiceCmdState === 'loading';

    return html`
      <tr
        class="border-b border-[var(--border-subtle,#e2e8f0)] ${selected
          ? 'bg-[var(--selected-bg,#e0f2fe)] text-[var(--selected-text,#0c4a6e)]'
          : ''}"
      >
        <td class="py-2 pr-3">${invoiceId}</td>
        <td class="py-2 pr-3">${invoiceNumber}</td>
        <td class="py-2 pr-3">${projectId}</td>
        <td class="py-2 pr-3">${clientId}</td>
        <td class="py-2 pr-3">${status}</td>
        <td class="py-2 pr-3">
          <div class="flex flex-wrap gap-2">
            <button
              type="button"
              class="rounded-md px-2 py-1 text-xs bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
              @click=${() => {
                this.setSendInvoiceCmdInvoiceId(invoiceId);
                this.setCreateInvoiceCmdProjectId(projectId);
                this.setCreateInvoiceCmdClientId(clientId);
              }}
            >
              ${msg['btn.select']}
            </button>
            <button
              type="button"
              class="rounded-md px-2 py-1 text-xs bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]"
              ?disabled=${sendLoading || !invoiceId}
              @click=${(e: Event) => {
                this.setSendInvoiceCmdInvoiceId(invoiceId);
                const label = invoiceNumber || invoiceId;
                if (typeof window !== 'undefined' && window.confirm(`${msg['confirm.send']} (${label})`)) {
                  this.handleSendInvoiceCmdClick(e);
                }
              }}
            >
              ${sendLoading && this.sendInvoiceCmdInvoiceId === invoiceId ? msg['loading'] : msg['send.action']}
            </button>
          </div>
        </td>
      </tr>
    `;
  }

  renderSelectionSummary(): ReturnType<typeof html> | typeof nothing {
    const msg = this.msg;
    const hasSelection =
      this.sendInvoiceCmdInvoiceId !== '' ||
      this.createInvoiceCmdProjectId !== '' ||
      this.createInvoiceCmdClientId !== '';
    if (!hasSelection) {
      return html`
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['empty.selection']}</p>
      `;
    }
    return html`
      <div class="rounded-md border border-[var(--selected-border,#7dd3fc)] bg-[var(--selected-bg,#e0f2fe)] text-[var(--selected-text,#0c4a6e)] px-3 py-2 text-sm space-y-1">
        <div class="font-medium">${msg['label.selected']}</div>
        ${this.sendInvoiceCmdInvoiceId
          ? html`<div>${msg['label.invoiceId']}: ${this.sendInvoiceCmdInvoiceId}</div>`
          : nothing}
        ${this.createInvoiceCmdProjectId
          ? html`<div>${msg['label.project']}: ${this.createInvoiceCmdProjectId}</div>`
          : nothing}
        ${this.createInvoiceCmdClientId
          ? html`<div>${msg['label.client']}: ${this.createInvoiceCmdClientId}</div>`
          : nothing}
      </div>
    `;
  }

  renderSendFeedback(): ReturnType<typeof html> | typeof nothing {
    const msg = this.msg;
    if (this.sendInvoiceCmdState === 'success') {
      return html`
        <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#14532d)] px-3 py-2 text-sm">
          <span>${msg['send.success']}</span>
          <button
            type="button"
            class="underline"
            @click=${() => {
              this.sendInvoiceCmdState = 'idle';
            }}
          >
            ${msg['btn.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.sendInvoiceCmdState === 'error') {
      const errText = this.sendInvoiceCmdError || msg['send.error'];
      return html`
        <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#7f1d1d)] px-3 py-2 text-sm">
          <span>${errText}</span>
          <button
            type="button"
            class="underline"
            @click=${() => {
              this.sendInvoiceCmdState = 'idle';
              this.sendInvoiceCmdError = '';
            }}
          >
            ${msg['btn.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderCreateInvoice(): ReturnType<typeof html> {
    const msg = this.msg;
    const loading = this.createInvoiceCmdState === 'loading';
    const canSubmit =
      this.createInvoiceCmdProjectId !== '' &&
      this.createInvoiceCmdClientId !== '' &&
      this.createInvoiceCmdInvoiceNumber !== '' &&
      !loading;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['create.section']}</h2>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['label.project']}</span>
            <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-3 py-2 min-h-[2.5rem]">
              ${this.createInvoiceCmdProjectId || '—'}
            </div>
          </div>
          <div class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['label.client']}</span>
            <div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-3 py-2 min-h-[2.5rem]">
              ${this.createInvoiceCmdClientId || '—'}
            </div>
          </div>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['create.invoiceNumber']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              .value=${this.createInvoiceCmdInvoiceNumber}
              @change=${(e: Event) => this.handleCreateInvoiceCmdInvoiceNumberChange(e)}
              @input=${(e: Event) => this.handleCreateInvoiceCmdInvoiceNumberChange(e)}
            />
          </label>
        </div>

        <div class="flex flex-wrap items-center gap-2">
          <button
            type="button"
            class="rounded-md px-4 py-2 text-sm bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${!canSubmit}
            @click=${(e: Event) => this.handleCreateInvoiceCmdClick(e)}
          >
            ${loading ? msg['loading'] : msg['create.action']}
          </button>
        </div>

        ${this.renderCreateFeedback()}
      </section>
    `;
  }

  renderCreateFeedback(): ReturnType<typeof html> | typeof nothing {
    const msg = this.msg;
    if (this.createInvoiceCmdState === 'success') {
      return html`
        <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#14532d)] px-3 py-2 text-sm">
          <span>${msg['create.success']}</span>
          <button
            type="button"
            class="underline"
            @click=${() => {
              this.createInvoiceCmdState = 'idle';
            }}
          >
            ${msg['btn.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.createInvoiceCmdState === 'error') {
      const errText = this.createInvoiceCmdError || msg['create.error'];
      return html`
        <div class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#7f1d1d)] px-3 py-2 text-sm">
          <span>${errText}</span>
          <button
            type="button"
            class="underline"
            @click=${() => {
              this.createInvoiceCmdState = 'idle';
              this.createInvoiceCmdError = '';
            }}
          >
            ${msg['btn.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }
}
