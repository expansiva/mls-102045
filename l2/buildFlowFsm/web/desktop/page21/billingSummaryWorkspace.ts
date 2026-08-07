/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/billingSummaryWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmBillingSummaryWorkspaceBase,
  messages as sharedMessages,
} from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';
import type { ListBillingSummariesOutput } from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'list.empty': s_en['intent.billingSummaryWorkspace.listBillingSummaries.list.empty'],
  'create.action': s_en['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd'],
  'create.periodStart': s_en['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label'],
  'create.periodEnd': s_en['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label'],
  'create.success': s_en['action.createBillingSummaryCmd.success'],
  'create.error': s_en['action.createBillingSummaryCmd.error'],
  'share.action': s_en['intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd'],
  'share.success': s_en['action.shareBillingSummaryCmd.success'],
  'share.error': s_en['action.shareBillingSummaryCmd.error'],
  'filter.status': s_en['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label'],
  'filter.projectId': s_en['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label'],
  'col.total': s_en['intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label'],
  'filter.apply': 'Apply filters',
  'filter.clear': 'Clear',
  'totals.count': 'Entries',
  'totals.sum': 'Sum total',
  'totals.selection': 'Selected total',
  'totals.unknown': '—',
  'col.period': 'Period',
  'col.labor': 'Labor',
  'col.material': 'Material',
  'col.changeOrder': 'Change orders',
  'col.status': 'Status',
  'col.sharedAt': 'Shared at',
  'create.heading': 'New billing period',
  'create.submitting': 'Creating…',
  'detail.heading': 'Cost breakdown',
  'detail.empty': 'Select a billing summary to review costs and share with the client.',
  'share.cta': 'Share with client',
  'share.submitting': 'Sharing…',
  'share.confirm': 'Share this draft summary with the client?',
  'status.draft': 'Draft',
  'status.shared': 'Shared',
  'status.all': 'All statuses',
  'pager.prev': 'Previous',
  'pager.next': 'Next',
  'pager.page': 'Page',
  'loading': 'Loading billing summaries…',
  'dismiss': 'Dismiss',
  'selected.badge': 'Selected',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'list.empty': s_pt_br['intent.billingSummaryWorkspace.listBillingSummaries.list.empty'],
  'create.action': s_pt_br['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd'],
  'create.periodStart': s_pt_br['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label'],
  'create.periodEnd': s_pt_br['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label'],
  'create.success': s_pt_br['action.createBillingSummaryCmd.success'],
  'create.error': s_pt_br['action.createBillingSummaryCmd.error'],
  'share.action': s_pt_br['intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd'],
  'share.success': s_pt_br['action.shareBillingSummaryCmd.success'],
  'share.error': s_pt_br['action.shareBillingSummaryCmd.error'],
  'filter.status': s_pt_br['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label'],
  'filter.projectId': s_pt_br['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label'],
  'col.total': s_pt_br['intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label'],
  'filter.apply': 'Aplicar filtros',
  'filter.clear': 'Limpar',
  'totals.count': 'Lançamentos',
  'totals.sum': 'Soma total',
  'totals.selection': 'Total selecionado',
  'totals.unknown': '—',
  'col.period': 'Período',
  'col.labor': 'Mão de obra',
  'col.material': 'Material',
  'col.changeOrder': 'Aditivos',
  'col.status': 'Status',
  'col.sharedAt': 'Compartilhado em',
  'create.heading': 'Novo período de faturamento',
  'create.submitting': 'Criando…',
  'detail.heading': 'Detalhamento de custos',
  'detail.empty': 'Selecione um resumo de faturamento para revisar custos e compartilhar com o cliente.',
  'share.cta': 'Compartilhar com o cliente',
  'share.submitting': 'Compartilhando…',
  'share.confirm': 'Compartilhar este rascunho com o cliente?',
  'status.draft': 'Rascunho',
  'status.shared': 'Compartilhado',
  'status.all': 'Todos os status',
  'pager.prev': 'Anterior',
  'pager.next': 'Próxima',
  'pager.page': 'Página',
  'loading': 'Carregando resumos de faturamento…',
  'dismiss': 'Dispensar',
  'selected.badge': 'Selecionado',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'list.empty': s_es['intent.billingSummaryWorkspace.listBillingSummaries.list.empty'],
  'create.action': s_es['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd'],
  'create.periodStart': s_es['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label'],
  'create.periodEnd': s_es['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label'],
  'create.success': s_es['action.createBillingSummaryCmd.success'],
  'create.error': s_es['action.createBillingSummaryCmd.error'],
  'share.action': s_es['intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd'],
  'share.success': s_es['action.shareBillingSummaryCmd.success'],
  'share.error': s_es['action.shareBillingSummaryCmd.error'],
  'filter.status': s_es['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label'],
  'filter.projectId': s_es['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label'],
  'col.total': s_es['intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label'],
  'filter.apply': 'Aplicar filtros',
  'filter.clear': 'Limpiar',
  'totals.count': 'Asientos',
  'totals.sum': 'Suma total',
  'totals.selection': 'Total seleccionado',
  'totals.unknown': '—',
  'col.period': 'Período',
  'col.labor': 'Mano de obra',
  'col.material': 'Material',
  'col.changeOrder': 'Órdenes de cambio',
  'col.status': 'Estado',
  'col.sharedAt': 'Compartido el',
  'create.heading': 'Nuevo período de facturación',
  'create.submitting': 'Creando…',
  'detail.heading': 'Desglose de costos',
  'detail.empty': 'Seleccione un resumen de facturación para revisar costos y compartir con el cliente.',
  'share.cta': 'Compartir con el cliente',
  'share.submitting': 'Compartiendo…',
  'share.confirm': '¿Compartir este borrador con el cliente?',
  'status.draft': 'Borrador',
  'status.shared': 'Compartido',
  'status.all': 'Todos los estados',
  'pager.prev': 'Anterior',
  'pager.next': 'Siguiente',
  'pager.page': 'Página',
  'loading': 'Cargando resúmenes de facturación…',
  'dismiss': 'Descartar',
  'selected.badge': 'Seleccionado',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

type BillingSummaryRow = NonNullable<ListBillingSummariesOutput['billingSummaries']>[number];

@customElement('build-flow-fsm--web--desktop--page21--billing-summary-workspace-102045')
export class BuildFlowFsmDesktopPage21BillingSummaryWorkspacePage extends BuildFlowFsmBillingSummaryWorkspaceBase {
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
      <div class="mx-auto flex w-full max-w-7xl flex-col gap-4 p-4 text-[var(--text-default,#0f172a)]">
        ${this.renderCreatePanel(msg)}
        ${this.renderTotalsBar(msg)}
        <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div class="md:col-span-2 flex flex-col gap-3">
            ${this.renderFilterBar(msg)}
            ${this.renderTable(msg)}
            ${this.renderPager(msg)}
          </div>
          <div class="md:col-span-1">
            ${this.renderDetailPanel(msg)}
          </div>
        </div>
      </div>
    `;
  }

  private formatAmount(value: unknown): string {
    const num = typeof value === 'number' ? value : Number(value);
    if (Number.isNaN(num)) {
      return '—';
    }
    try {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
      }).format(num);
    } catch {
      return String(num);
    }
  }

  private formatDate(value: unknown): string {
    if (value === null || value === undefined || value === '') {
      return '—';
    }
    const raw = String(value);
    const d = new Date(raw);
    if (Number.isNaN(d.getTime())) {
      return raw;
    }
    try {
      return new Intl.DateTimeFormat(undefined, { dateStyle: 'medium' }).format(d);
    } catch {
      return raw;
    }
  }

  private rowId(row: BillingSummaryRow): string {
    const r = row as Record<string, unknown>;
    const id = r['billingSummaryId'] ?? r['id'];
    return id === null || id === undefined ? '' : String(id);
  }

  private rowStatus(row: BillingSummaryRow): string {
    const r = row as Record<string, unknown>;
    const status = r['status'];
    return status === null || status === undefined ? '' : String(status);
  }

  private rowTotal(row: BillingSummaryRow): number {
    const r = row as Record<string, unknown>;
    const total = r['totalCost'] ?? r['total'];
    const num = typeof total === 'number' ? total : Number(total);
    return Number.isNaN(num) ? 0 : num;
  }

  private rows(): BillingSummaryRow[] {
    const data = this.listBillingSummariesData;
    if (!data || !Array.isArray(data.billingSummaries)) {
      return [];
    }
    return data.billingSummaries;
  }

  private selectedRow(): BillingSummaryRow | null {
    const selectedId = this.shareBillingSummaryCmdBillingSummaryId;
    if (!selectedId) {
      return null;
    }
    const found = this.rows().find((row) => this.rowId(row) === selectedId);
    return found ?? null;
  }

  private currentPage(): number {
    const n = Number(this.listBillingSummariesPage);
    if (!this.listBillingSummariesPage || Number.isNaN(n) || n < 1) {
      return 1;
    }
    return Math.floor(n);
  }

  private pageSize(): number {
    const n = Number(this.listBillingSummariesPageSize);
    if (!this.listBillingSummariesPageSize || Number.isNaN(n) || n < 1) {
      return 20;
    }
    return Math.floor(n);
  }

  private statusLabel(msg: PageMessageType, status: string): string {
    const normalized = status.toLowerCase();
    if (normalized === 'draft') {
      return msg['status.draft'];
    }
    if (normalized === 'shared') {
      return msg['status.shared'];
    }
    return status || '—';
  }

  private isDraftStatus(status: string): boolean {
    return status.toLowerCase() === 'draft';
  }

  private selectRow(row: BillingSummaryRow): void {
    const id = this.rowId(row);
    this.setShareBillingSummaryCmdBillingSummaryId(id);
  }

  private goToPage(page: number): void {
    const next = page < 1 ? 1 : page;
    this.setListBillingSummariesPage(String(next));
    void this.loadListBillingSummaries();
  }

  private clearFilters(): void {
    this.setListBillingSummariesProjectId('');
    this.setListBillingSummariesStatus('');
    this.setListBillingSummariesPage('1');
    void this.loadListBillingSummaries();
  }

  private onShareClick(event?: Event): void {
    if (event) {
      event.preventDefault();
    }
    const row = this.selectedRow();
    if (!row) {
      return;
    }
    const msg = this.msg;
    const totalLabel = this.formatAmount(this.rowTotal(row));
    const periodStart = (row as Record<string, unknown>)['periodStart'];
    const periodEnd = (row as Record<string, unknown>)['periodEnd'];
    const period = `${this.formatDate(periodStart)} – ${this.formatDate(periodEnd)}`;
    const ok = window.confirm(`${msg['share.confirm']}\n${period}\n${totalLabel}`);
    if (!ok) {
      return;
    }
    this.setShareBillingSummaryCmdStatus('shared');
    this.handleShareBillingSummaryCmdClick();
  }

  renderCreatePanel(msg: PageMessageType): TemplateResult {
    const creating = this.createBillingSummaryCmdState === 'loading';
    const showSuccess = this.createBillingSummaryCmdState === 'success';
    const showError = this.createBillingSummaryCmdState === 'error';
    const errorText = this.createBillingSummaryCmdError || msg['create.error'];
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
        <h2 class="mb-3 text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['create.heading']}</h2>
        <div class="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-end">
          <label class="flex min-w-[10rem] flex-1 flex-col gap-1 text-sm text-[var(--text-muted,#64748b)]">
            <span>${msg['create.periodStart']}</span>
            <input
              type="date"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.createBillingSummaryCmdPeriodStart || ''}
              ?disabled=${creating}
              @change=${(e: Event) => this.handleCreateBillingSummaryCmdPeriodStartChange(e)}
            />
          </label>
          <label class="flex min-w-[10rem] flex-1 flex-col gap-1 text-sm text-[var(--text-muted,#64748b)]">
            <span>${msg['create.periodEnd']}</span>
            <input
              type="date"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.createBillingSummaryCmdPeriodEnd || ''}
              ?disabled=${creating}
              @change=${(e: Event) => this.handleCreateBillingSummaryCmdPeriodEndChange(e)}
            />
          </label>
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${creating || !this.createBillingSummaryCmdPeriodStart || !this.createBillingSummaryCmdPeriodEnd}
            @click=${(e: Event) => this.handleCreateBillingSummaryCmdClick(e)}
          >
            ${creating ? msg['create.submitting'] : msg['create.action']}
          </button>
        </div>
        ${showSuccess
          ? html`
              <div class="mt-3 flex items-center justify-between rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                <span>${msg['create.success']}</span>
              </div>
            `
          : nothing}
        ${showError
          ? html`
              <div class="mt-3 flex items-center justify-between rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                <span>${errorText}</span>
              </div>
            `
          : nothing}
      </section>
    `;
  }

  renderTotalsBar(msg: PageMessageType): TemplateResult {
    const loading = this.listBillingSummariesState === 'loading';
    const rows = this.rows();
    const count = typeof this.listBillingSummariesData?.total === 'number'
      ? this.listBillingSummariesData.total
      : rows.length;
    let sum = 0;
    for (const row of rows) {
      sum += this.rowTotal(row);
    }
    const selected = this.selectedRow();
    const selectedTotal = selected ? this.rowTotal(selected) : null;
    return html`
      <section
        class="sticky top-0 z-10 flex flex-wrap items-stretch gap-3 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-3 shadow-sm"
      >
        <div class="flex min-w-[7rem] flex-col">
          <span class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['totals.count']}</span>
          <span class="font-semibold tabular-nums text-[var(--text-strong,#0f172a)]">
            ${loading ? msg['totals.unknown'] : String(count)}
          </span>
        </div>
        <div class="flex min-w-[9rem] flex-col">
          <span class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['totals.sum']}</span>
          <span class="font-semibold tabular-nums text-[var(--text-strong,#0f172a)]">
            ${loading ? msg['totals.unknown'] : this.formatAmount(sum)}
          </span>
        </div>
        ${selectedTotal !== null
          ? html`
              <div class="flex min-w-[9rem] flex-col border-l border-[var(--border-subtle,#e2e8f0)] pl-3">
                <span class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['totals.selection']}</span>
                <span class="font-semibold tabular-nums text-[var(--selected-text,#0f172a)]">
                  ${this.formatAmount(selectedTotal)}
                </span>
              </div>
            `
          : nothing}
      </section>
    `;
  }

  renderFilterBar(msg: PageMessageType): TemplateResult {
    return html`
      <div class="flex flex-col gap-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 sm:flex-row sm:flex-wrap sm:items-end">
        <label class="flex min-w-[10rem] flex-1 flex-col gap-1 text-sm text-[var(--text-muted,#64748b)]">
          <span>${msg['filter.projectId']}</span>
          <input
            type="text"
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
            .value=${this.listBillingSummariesProjectId || ''}
            @change=${(e: Event) => this.handleListBillingSummariesProjectIdChange(e)}
          />
        </label>
        <label class="flex min-w-[10rem] flex-1 flex-col gap-1 text-sm text-[var(--text-muted,#64748b)]">
          <span>${msg['filter.status']}</span>
          <select
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
            .value=${this.listBillingSummariesStatus || ''}
            @change=${(e: Event) => this.handleListBillingSummariesStatusChange(e)}
          >
            <option value="">${msg['status.all']}</option>
            <option value="draft">${msg['status.draft']}</option>
            <option value="shared">${msg['status.shared']}</option>
          </select>
        </label>
        <div class="flex gap-2">
          <button
            type="button"
            class="rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-3 py-2 text-sm font-medium text-[var(--button-secondary-text,#0f172a)]"
            @click=${(e: Event) => this.handleListBillingSummariesClick(e)}
          >
            ${msg['filter.apply']}
          </button>
          <button
            type="button"
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
            @click=${() => this.clearFilters()}
          >
            ${msg['filter.clear']}
          </button>
        </div>
      </div>
    `;
  }

  renderTable(msg: PageMessageType): TemplateResult {
    const loading = this.listBillingSummariesState === 'loading';
    const rows = this.rows();
    const selectedId = this.shareBillingSummaryCmdBillingSummaryId;
    const shareError = this.shareBillingSummaryCmdState === 'error';
    const shareErrorText = this.shareBillingSummaryCmdError || msg['share.error'];
    const shareSuccess = this.shareBillingSummaryCmdState === 'success';

    if (loading && rows.length === 0) {
      return html`
        <div class="overflow-hidden rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]">
          <div class="border-b border-[var(--border-subtle,#e2e8f0)] px-3 py-2 text-sm text-[var(--text-muted,#64748b)]">
            ${msg['loading']}
          </div>
          <div class="space-y-2 p-3">
            ${[0, 1, 2, 3, 4].map(
              () => html`
                <div class="flex gap-3">
                  <div class="h-8 flex-1 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  <div class="h-8 w-24 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                  <div class="h-8 w-20 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                </div>
              `,
            )}
          </div>
        </div>
      `;
    }

    return html`
      <div class="overflow-hidden rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]">
        ${shareError
          ? html`
              <div class="border-b border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]">
                ${shareErrorText}
              </div>
            `
          : nothing}
        ${shareSuccess
          ? html`
              <div class="border-b border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]">
                ${msg['share.success']}
              </div>
            `
          : nothing}
        <div class="overflow-x-auto">
          <table class="min-w-full border-collapse text-sm">
            <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-left text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">
              <tr>
                <th class="px-3 py-2 font-medium">${msg['col.period']}</th>
                <th class="px-3 py-2 font-medium">${msg['col.labor']}</th>
                <th class="px-3 py-2 font-medium">${msg['col.material']}</th>
                <th class="px-3 py-2 font-medium">${msg['col.changeOrder']}</th>
                <th class="px-3 py-2 font-medium">${msg['col.status']}</th>
                <th class="px-3 py-2 font-medium text-right">${msg['col.total']}</th>
              </tr>
            </thead>
            <tbody>
              ${rows.length === 0
                ? html`
                    <tr>
                      <td colspan="6" class="px-3 py-8 text-center text-[var(--text-muted,#64748b)]">
                        ${msg['list.empty']}
                      </td>
                    </tr>
                  `
                : rows.map((row) => {
                    const id = this.rowId(row);
                    const isSelected = id !== '' && id === selectedId;
                    const r = row as Record<string, unknown>;
                    const status = this.rowStatus(row);
                    const sharingThis =
                      this.shareBillingSummaryCmdState === 'loading' && isSelected;
                    return html`
                      <tr
                        class="cursor-pointer border-t border-[var(--border-subtle,#e2e8f0)] ${isSelected
                          ? 'bg-[var(--selected-bg,#e0e7ff)] text-[var(--selected-text,#0f172a)]'
                          : 'hover:bg-[var(--surface-alt-bg,#f8fafc)]'} ${sharingThis ? 'opacity-70' : ''}"
                        @click=${() => this.selectRow(row)}
                      >
                        <td class="px-3 py-2 whitespace-nowrap">
                          <span class="font-medium text-[var(--text-default,#0f172a)]">
                            ${this.formatDate(r['periodStart'])} – ${this.formatDate(r['periodEnd'])}
                          </span>
                          ${isSelected
                            ? html`<span class="ml-2 rounded-full bg-[var(--status-info-bg,#dbeafe)] px-2 py-0.5 text-xs text-[var(--status-info-text,#1e40af)]">${msg['selected.badge']}</span>`
                            : nothing}
                        </td>
                        <td class="px-3 py-2 text-right tabular-nums">${this.formatAmount(r['laborCost'])}</td>
                        <td class="px-3 py-2 text-right tabular-nums">${this.formatAmount(r['materialCost'])}</td>
                        <td class="px-3 py-2 text-right tabular-nums">${this.formatAmount(r['changeOrderCost'])}</td>
                        <td class="px-3 py-2">
                          <span
                            class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${status.toLowerCase() === 'shared'
                              ? 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]'
                              : 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]'}"
                          >
                            ${this.statusLabel(msg, status)}
                          </span>
                        </td>
                        <td class="px-3 py-2 text-right font-medium tabular-nums">${this.formatAmount(this.rowTotal(row))}</td>
                      </tr>
                    `;
                  })}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  renderPager(msg: PageMessageType): TemplateResult {
    const page = this.currentPage();
    const pageSize = this.pageSize();
    const total = typeof this.listBillingSummariesData?.total === 'number'
      ? this.listBillingSummariesData.total
      : this.rows().length;
    const maxPage = Math.max(1, Math.ceil(total / pageSize) || 1);
    const loading = this.listBillingSummariesState === 'loading';
    return html`
      <div class="flex items-center justify-between gap-2 text-sm text-[var(--text-muted,#64748b)]">
        <span>${msg['pager.page']} ${page} / ${maxPage}</span>
        <div class="flex gap-2">
          <button
            type="button"
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1.5 text-[var(--text-default,#0f172a)] disabled:opacity-50"
            ?disabled=${loading || page <= 1}
            @click=${() => this.goToPage(page - 1)}
          >
            ${msg['pager.prev']}
          </button>
          <button
            type="button"
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-3 py-1.5 text-[var(--text-default,#0f172a)] disabled:opacity-50"
            ?disabled=${loading || page >= maxPage}
            @click=${() => this.goToPage(page + 1)}
          >
            ${msg['pager.next']}
          </button>
        </div>
      </div>
    `;
  }

  renderDetailPanel(msg: PageMessageType): TemplateResult {
    const row = this.selectedRow();
    if (!row) {
      return html`
        <section class="h-full rounded-lg border border-dashed border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 text-sm text-[var(--text-muted,#64748b)]">
          ${msg['detail.empty']}
        </section>
      `;
    }
    const r = row as Record<string, unknown>;
    const status = this.rowStatus(row);
    const canShare = this.isDraftStatus(status);
    const sharing = this.shareBillingSummaryCmdState === 'loading';
    return html`
      <section class="flex h-full flex-col gap-4 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
        <h2 class="text-base font-semibold text-[var(--text-strong,#0f172a)]">${msg['detail.heading']}</h2>
        <dl class="grid grid-cols-1 gap-3 text-sm">
          <div class="flex justify-between gap-2 border-b border-[var(--border-subtle,#e2e8f0)] pb-2">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.period']}</dt>
            <dd class="font-medium tabular-nums">${this.formatDate(r['periodStart'])} – ${this.formatDate(r['periodEnd'])}</dd>
          </div>
          <div class="flex justify-between gap-2 border-b border-[var(--border-subtle,#e2e8f0)] pb-2">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.status']}</dt>
            <dd>
              <span
                class="inline-flex rounded-full px-2 py-0.5 text-xs font-medium ${status.toLowerCase() === 'shared'
                  ? 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]'
                  : 'bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]'}"
              >
                ${this.statusLabel(msg, status)}
              </span>
            </dd>
          </div>
          <div class="flex justify-between gap-2 border-b border-[var(--border-subtle,#e2e8f0)] pb-2">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.labor']}</dt>
            <dd class="tabular-nums">${this.formatAmount(r['laborCost'])}</dd>
          </div>
          <div class="flex justify-between gap-2 border-b border-[var(--border-subtle,#e2e8f0)] pb-2">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.material']}</dt>
            <dd class="tabular-nums">${this.formatAmount(r['materialCost'])}</dd>
          </div>
          <div class="flex justify-between gap-2 border-b border-[var(--border-subtle,#e2e8f0)] pb-2">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.changeOrder']}</dt>
            <dd class="tabular-nums">${this.formatAmount(r['changeOrderCost'])}</dd>
          </div>
          <div class="flex justify-between gap-2 border-b border-[var(--border-subtle,#e2e8f0)] pb-2">
            <dt class="font-medium text-[var(--text-strong,#0f172a)]">${msg['col.total']}</dt>
            <dd class="font-semibold tabular-nums text-[var(--text-strong,#0f172a)]">${this.formatAmount(this.rowTotal(row))}</dd>
          </div>
          <div class="flex justify-between gap-2">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['col.sharedAt']}</dt>
            <dd class="tabular-nums">${this.formatDate(r['sharedAt'])}</dd>
          </div>
        </dl>
        ${canShare
          ? html`
              <button
                type="button"
                class="mt-auto w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2.5 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                ?disabled=${sharing || !this.shareBillingSummaryCmdBillingSummaryId}
                @click=${(e: Event) => this.onShareClick(e)}
              >
                ${sharing ? msg['share.submitting'] : msg['share.cta']}
              </button>
            `
          : nothing}
      </section>
    `;
  }
}
