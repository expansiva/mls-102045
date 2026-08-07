/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/billingSummaryWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  'share.action': s_en['intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd'],
  'create.success': s_en['action.createBillingSummaryCmd.success'],
  'create.error': s_en['action.createBillingSummaryCmd.error'],
  'share.success': s_en['action.shareBillingSummaryCmd.success'],
  'share.error': s_en['action.shareBillingSummaryCmd.error'],
  'summary.in': 'Total billed',
  'summary.labor': 'Labor',
  'summary.material': 'Materials',
  'summary.changeOrders': 'Change orders',
  'summary.count': 'Summaries',
  'filter.status': 'Status',
  'filter.all': 'All statuses',
  'filter.apply': 'Apply filters',
  'filter.draft': 'Draft',
  'filter.shared': 'Shared',
  'loading': 'Loading billing summaries…',
  'retry': 'Retry',
  'load.error': 'Could not load billing summaries.',
  'no.movement': 'No summaries in this period',
  'detail.title': 'Cost breakdown',
  'detail.empty': 'Select a billing summary to review its costs.',
  'detail.period': 'Billing period',
  'detail.status': 'Status',
  'detail.sharedAt': 'Shared on',
  'detail.labor': 'Labor cost',
  'detail.material': 'Material cost',
  'detail.changeOrders': 'Change-order cost',
  'detail.total': 'Total cost',
  'create.heading': 'New billing period',
  'create.working': 'Creating…',
  'share.working': 'Sharing…',
  'share.confirm': 'Share this draft summary with the client?',
  'pager.prev': 'Previous',
  'pager.next': 'Next',
  'pager.page': 'Page',
  'em.dash': '—',
  'status.draft': 'Draft',
  'status.shared': 'Shared',
  'group.subtotal': 'Subtotal',
  'line.period': 'Period',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'list.empty': s_pt_br['intent.billingSummaryWorkspace.listBillingSummaries.list.empty'],
  'create.action': s_pt_br['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd'],
  'create.periodStart': s_pt_br['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label'],
  'create.periodEnd': s_pt_br['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label'],
  'share.action': s_pt_br['intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd'],
  'create.success': s_pt_br['action.createBillingSummaryCmd.success'],
  'create.error': s_pt_br['action.createBillingSummaryCmd.error'],
  'share.success': s_pt_br['action.shareBillingSummaryCmd.success'],
  'share.error': s_pt_br['action.shareBillingSummaryCmd.error'],
  'summary.in': 'Total faturado',
  'summary.labor': 'Mão de obra',
  'summary.material': 'Materiais',
  'summary.changeOrders': 'Aditivos',
  'summary.count': 'Resumos',
  'filter.status': 'Status',
  'filter.all': 'Todos os status',
  'filter.apply': 'Aplicar filtros',
  'filter.draft': 'Rascunho',
  'filter.shared': 'Compartilhado',
  'loading': 'Carregando resumos de faturamento…',
  'retry': 'Tentar de novo',
  'load.error': 'Não foi possível carregar os resumos de faturamento.',
  'no.movement': 'Nenhum resumo neste período',
  'detail.title': 'Detalhamento de custos',
  'detail.empty': 'Selecione um resumo de faturamento para revisar os custos.',
  'detail.period': 'Período de faturamento',
  'detail.status': 'Status',
  'detail.sharedAt': 'Compartilhado em',
  'detail.labor': 'Custo de mão de obra',
  'detail.material': 'Custo de materiais',
  'detail.changeOrders': 'Custo de aditivos',
  'detail.total': 'Custo total',
  'create.heading': 'Novo período de faturamento',
  'create.working': 'Criando…',
  'share.working': 'Compartilhando…',
  'share.confirm': 'Compartilhar este rascunho com o cliente?',
  'pager.prev': 'Anterior',
  'pager.next': 'Próxima',
  'pager.page': 'Página',
  'em.dash': '—',
  'status.draft': 'Rascunho',
  'status.shared': 'Compartilhado',
  'group.subtotal': 'Subtotal',
  'line.period': 'Período',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'list.empty': s_es['intent.billingSummaryWorkspace.listBillingSummaries.list.empty'],
  'create.action': s_es['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd'],
  'create.periodStart': s_es['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label'],
  'create.periodEnd': s_es['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label'],
  'share.action': s_es['intent.billingSummaryWorkspace.shareBillingSummaryCmd.form.action.shareBillingSummaryCmd'],
  'create.success': s_es['action.createBillingSummaryCmd.success'],
  'create.error': s_es['action.createBillingSummaryCmd.error'],
  'share.success': s_es['action.shareBillingSummaryCmd.success'],
  'share.error': s_es['action.shareBillingSummaryCmd.error'],
  'summary.in': 'Total facturado',
  'summary.labor': 'Mano de obra',
  'summary.material': 'Materiales',
  'summary.changeOrders': 'Órdenes de cambio',
  'summary.count': 'Resúmenes',
  'filter.status': 'Estado',
  'filter.all': 'Todos los estados',
  'filter.apply': 'Aplicar filtros',
  'filter.draft': 'Borrador',
  'filter.shared': 'Compartido',
  'loading': 'Cargando resúmenes de facturación…',
  'retry': 'Reintentar',
  'load.error': 'No se pudieron cargar los resúmenes de facturación.',
  'no.movement': 'Sin resúmenes en este período',
  'detail.title': 'Desglose de costos',
  'detail.empty': 'Seleccione un resumen de facturación para revisar sus costos.',
  'detail.period': 'Período de facturación',
  'detail.status': 'Estado',
  'detail.sharedAt': 'Compartido el',
  'detail.labor': 'Costo de mano de obra',
  'detail.material': 'Costo de materiales',
  'detail.changeOrders': 'Costo de órdenes de cambio',
  'detail.total': 'Costo total',
  'create.heading': 'Nuevo período de facturación',
  'create.working': 'Creando…',
  'share.working': 'Compartiendo…',
  'pager.prev': 'Anterior',
  'pager.next': 'Siguiente',
  'pager.page': 'Página',
  'em.dash': '—',
  'status.draft': 'Borrador',
  'status.shared': 'Compartido',
  'group.subtotal': 'Subtotal',
  'line.period': 'Período',
  'share.confirm': '¿Compartir este borrador con el cliente?',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

type BillingSummaryRow = ListBillingSummariesOutput['billingSummaries'][number] & {
  billingSummaryId?: string;
  id?: string;
  projectId?: string;
  periodStart?: string;
  periodEnd?: string;
  laborCost?: number | string;
  materialCost?: number | string;
  changeOrderCost?: number | string;
  totalCost?: number | string;
  status?: string;
  sharedAt?: string;
};

type PeriodGroup = {
  key: string;
  label: string;
  rows: BillingSummaryRow[];
  subtotal: number;
};

@customElement('build-flow-fsm--web--desktop--page31--billing-summary-workspace-102045')
export class BuildFlowFsmDesktopPage31BillingSummaryWorkspacePage extends BuildFlowFsmBillingSummaryWorkspaceBase {
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
      <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 p-6 bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        ${this.renderPeriodSummary()}
        <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          ${this.renderFilters()}
          ${this.renderCreateForm()}
        </div>
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div class="lg:col-span-2 flex flex-col gap-4">
            ${this.renderStatement()}
          </div>
          <div class="lg:col-span-1">
            ${this.renderDetailPanel()}
          </div>
        </div>
        <span class="sr-only">${msg['summary.count']}</span>
      </div>
    `;
  }

  private rowId(row: BillingSummaryRow): string {
    if (row.billingSummaryId) {
      return String(row.billingSummaryId);
    }
    if (row.id) {
      return String(row.id);
    }
    return '';
  }

  private asNumber(value: number | string | undefined): number {
    if (typeof value === 'number' && Number.isFinite(value)) {
      return value;
    }
    if (typeof value === 'string' && value.trim() !== '') {
      const n = Number(value);
      if (!Number.isNaN(n)) {
        return n;
      }
    }
    return 0;
  }

  private formatMoney(value: number | string | undefined): string {
    const msg = this.msg;
    if (value === undefined || value === null || value === '') {
      return msg['em.dash'];
    }
    const n = this.asNumber(value);
    try {
      return new Intl.NumberFormat(undefined, {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2,
      }).format(n);
    } catch {
      return String(n);
    }
  }

  private formatDate(value: string | undefined): string {
    const msg = this.msg;
    if (!value) {
      return msg['em.dash'];
    }
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) {
      return value;
    }
    try {
      return new Intl.DateTimeFormat(undefined, {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }).format(d);
    } catch {
      return value;
    }
  }

  private statusLabel(status: string | undefined): string {
    const msg = this.msg;
    const normalized = (status || '').toLowerCase();
    if (normalized === 'draft') {
      return msg['status.draft'];
    }
    if (normalized === 'shared') {
      return msg['status.shared'];
    }
    if (!status) {
      return msg['em.dash'];
    }
    return status;
  }

  private isDraft(row: BillingSummaryRow): boolean {
    return (row.status || '').toLowerCase() === 'draft';
  }

  private rows(): BillingSummaryRow[] {
    const data = this.listBillingSummariesData;
    const list = data && Array.isArray(data.billingSummaries) ? data.billingSummaries : [];
    return list as BillingSummaryRow[];
  }

  private selectedRow(): BillingSummaryRow | null {
    const selectedId = this.shareBillingSummaryCmdBillingSummaryId;
    if (!selectedId) {
      return null;
    }
    const found = this.rows().find((row: BillingSummaryRow) => this.rowId(row) === selectedId);
    return found ?? null;
  }

  private groupRows(rows: BillingSummaryRow[]): PeriodGroup[] {
    const map = new Map<string, PeriodGroup>();
    for (const row of rows) {
      const start = row.periodStart || '';
      const end = row.periodEnd || '';
      const key = `${start}|${end}`;
      const label =
        start || end
          ? `${this.formatDate(start)} – ${this.formatDate(end)}`
          : this.msg['line.period'];
      let group = map.get(key);
      if (!group) {
        group = { key, label, rows: [], subtotal: 0 };
        map.set(key, group);
      }
      group.rows.push(row);
      group.subtotal += this.asNumber(row.totalCost);
    }
    return Array.from(map.values()).sort((a: PeriodGroup, b: PeriodGroup) => {
      const aStart = a.rows[0]?.periodStart || '';
      const bStart = b.rows[0]?.periodStart || '';
      return aStart < bStart ? 1 : aStart > bStart ? -1 : 0;
    });
  }

  private aggregateTotals(rows: BillingSummaryRow[]): {
    labor: number;
    material: number;
    changeOrders: number;
    total: number;
    count: number;
  } {
    let labor = 0;
    let material = 0;
    let changeOrders = 0;
    let total = 0;
    for (const row of rows) {
      labor += this.asNumber(row.laborCost);
      material += this.asNumber(row.materialCost);
      changeOrders += this.asNumber(row.changeOrderCost);
      total += this.asNumber(row.totalCost);
    }
    return { labor, material, changeOrders, total, count: rows.length };
  }

  private currentPage(): number {
    const n = Number(this.listBillingSummariesPage);
    if (!Number.isNaN(n) && n > 0) {
      return n;
    }
    return 1;
  }

  private currentPageSize(): number {
    const n = Number(this.listBillingSummariesPageSize);
    if (!Number.isNaN(n) && n > 0) {
      return n;
    }
    return 20;
  }

  private selectRow(row: BillingSummaryRow): void {
    const id = this.rowId(row);
    if (!id) {
      return;
    }
    this.setShareBillingSummaryCmdBillingSummaryId(id);
  }

  private shareRow(row: BillingSummaryRow): void {
    const id = this.rowId(row);
    if (!id) {
      return;
    }
    const msg = this.msg;
    const period = `${this.formatDate(row.periodStart)} – ${this.formatDate(row.periodEnd)}`;
    const amount = this.formatMoney(row.totalCost);
    const ok = window.confirm(`${msg['share.confirm']} ${period} · ${amount}`);
    if (!ok) {
      return;
    }
    this.setShareBillingSummaryCmdBillingSummaryId(id);
    this.setShareBillingSummaryCmdStatus('shared');
    this.handleShareBillingSummaryCmdClick();
  }

  private goToPage(page: number): void {
    if (page < 1) {
      return;
    }
    this.setListBillingSummariesPage(String(page));
    this.handleListBillingSummariesClick();
  }

  renderPeriodSummary(): TemplateResult {
    const msg = this.msg;
    const loading = this.listBillingSummariesState === 'loading';
    const rows = this.rows();
    const totals = this.aggregateTotals(rows);
    const dash = msg['em.dash'];

    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] px-4 py-3 shadow-sm"
        aria-label=${msg['summary.in']}
      >
        <div class="flex flex-wrap items-baseline gap-x-8 gap-y-2 text-sm">
          <div class="flex flex-col gap-0.5">
            <span class="text-[var(--text-muted,#64748b)]">${msg['summary.in']}</span>
            <span class="tabular-nums text-lg font-semibold text-[var(--text-strong,#020617)]">
              ${loading ? dash : this.formatMoney(totals.total)}
            </span>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[var(--text-muted,#64748b)]">${msg['summary.labor']}</span>
            <span class="tabular-nums text-[var(--text-default,#0f172a)]">
              ${loading ? dash : this.formatMoney(totals.labor)}
            </span>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[var(--text-muted,#64748b)]">${msg['summary.material']}</span>
            <span class="tabular-nums text-[var(--text-default,#0f172a)]">
              ${loading ? dash : this.formatMoney(totals.material)}
            </span>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[var(--text-muted,#64748b)]">${msg['summary.changeOrders']}</span>
            <span class="tabular-nums text-[var(--text-default,#0f172a)]">
              ${loading ? dash : this.formatMoney(totals.changeOrders)}
            </span>
          </div>
          <div class="flex flex-col gap-0.5">
            <span class="text-[var(--text-muted,#64748b)]">${msg['summary.count']}</span>
            <span class="tabular-nums text-[var(--text-default,#0f172a)]">
              ${loading ? dash : String(totals.count)}
            </span>
          </div>
        </div>
      </section>
    `;
  }

  renderFilters(): TemplateResult {
    const msg = this.msg;
    return html`
      <div class="flex flex-wrap items-end gap-3">
        <label class="flex flex-col gap-1 text-sm">
          <span class="text-[var(--text-muted,#64748b)]">${msg['filter.status']}</span>
          <select
            class="min-w-[10rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
            .value=${this.listBillingSummariesStatus}
            @change=${(event: Event) => this.handleListBillingSummariesStatusChange(event)}
          >
            <option value="">${msg['filter.all']}</option>
            <option value="draft">${msg['filter.draft']}</option>
            <option value="shared">${msg['filter.shared']}</option>
          </select>
        </label>
        <button
          type="button"
          class="rounded-md border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-sm text-[var(--button-secondary-text,#0f172a)]"
          @click=${(event: Event) => this.handleListBillingSummariesClick(event)}
        >
          ${msg['filter.apply']}
        </button>
      </div>
    `;
  }

  renderCreateForm(): TemplateResult {
    const msg = this.msg;
    const creating = this.createBillingSummaryCmdState === 'loading';
    const createDisabled =
      creating ||
      !this.createBillingSummaryCmdPeriodStart ||
      !this.createBillingSummaryCmdPeriodEnd;

    return html`
      <section
        class="flex flex-wrap items-end gap-3 rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-3"
      >
        <div class="flex flex-col gap-1">
          <span class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">
            ${msg['create.heading']}
          </span>
          <div class="flex flex-wrap items-end gap-3">
            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">${msg['create.periodStart']}</span>
              <input
                type="date"
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                .value=${this.createBillingSummaryCmdPeriodStart}
                ?disabled=${creating}
                @change=${(event: Event) => this.handleCreateBillingSummaryCmdPeriodStartChange(event)}
              />
            </label>
            <label class="flex flex-col gap-1 text-sm">
              <span class="text-[var(--text-muted,#64748b)]">${msg['create.periodEnd']}</span>
              <input
                type="date"
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                .value=${this.createBillingSummaryCmdPeriodEnd}
                ?disabled=${creating}
                @change=${(event: Event) => this.handleCreateBillingSummaryCmdPeriodEndChange(event)}
              />
            </label>
            <button
              type="button"
              class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${createDisabled}
              @click=${(event: Event) => this.handleCreateBillingSummaryCmdClick(event)}
            >
              ${creating ? msg['create.working'] : msg['create.action']}
            </button>
          </div>
        </div>
        ${this.renderCreateFeedback()}
      </section>
    `;
  }

  renderCreateFeedback(): TemplateResult {
    const msg = this.msg;
    if (this.createBillingSummaryCmdState === 'success') {
      return html`
        <p class="w-full text-sm text-[var(--status-success-text,#166534)]" role="status">
          ${msg['create.success']}
        </p>
      `;
    }
    if (this.createBillingSummaryCmdState === 'error') {
      const errText = this.createBillingSummaryCmdError || msg['create.error'];
      return html`
        <p class="w-full text-sm text-[var(--status-error-text,#b91c1c)]" role="alert">
          ${errText}
        </p>
      `;
    }
    return html`${nothing}`;
  }

  renderStatement(): TemplateResult {
    const msg = this.msg;
    const loading = this.listBillingSummariesState === 'loading';
    const errored = this.listBillingSummariesState === 'error';
    const rows = this.rows();

    if (loading && rows.length === 0) {
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 text-[var(--text-muted,#64748b)]"
        >
          ${msg['loading']}
        </div>
      `;
    }

    if (errored && rows.length === 0) {
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 text-[var(--text-default,#0f172a)]"
        >
          <p class="mb-3">${msg['load.error']}</p>
          <button
            type="button"
            class="rounded-md border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-2 text-sm text-[var(--button-secondary-text,#0f172a)]"
            @click=${(event: Event) => this.handleListBillingSummariesClick(event)}
          >
            ${msg['retry']}
          </button>
        </div>
      `;
    }

    if (rows.length === 0) {
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6 text-[var(--text-muted,#64748b)]"
        >
          ${msg['list.empty']}
        </div>
      `;
    }

    const groups = this.groupRows(rows);
    return html`
      <div class="flex flex-col gap-4">
        ${groups.map((group: PeriodGroup) => this.renderGroup(group))}
        ${this.renderPager()}
      </div>
    `;
  }

  renderGroup(group: PeriodGroup): TemplateResult {
    const msg = this.msg;
    return html`
      <section
        class="overflow-hidden rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]"
      >
        <header
          class="flex items-baseline justify-between gap-4 border-b border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-3"
        >
          <h2 class="text-sm font-semibold text-[var(--text-strong,#020617)]">${group.label}</h2>
          <div class="flex items-baseline gap-2 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['group.subtotal']}</span>
            <span class="tabular-nums font-medium text-[var(--text-default,#0f172a)]">
              ${this.formatMoney(group.subtotal)}
            </span>
          </div>
        </header>
        ${group.rows.length === 0
          ? html`
              <p class="px-4 py-3 text-sm text-[var(--text-muted,#64748b)]">${msg['no.movement']}</p>
            `
          : html`
              <ul class="divide-y divide-[var(--border-subtle,#e2e8f0)]">
                ${group.rows.map((row: BillingSummaryRow) => this.renderEntryLine(row))}
              </ul>
            `}
      </section>
    `;
  }

  renderEntryLine(row: BillingSummaryRow): TemplateResult {
    const msg = this.msg;
    const id = this.rowId(row);
    const selected = id !== '' && id === this.shareBillingSummaryCmdBillingSummaryId;
    const sharing =
      this.shareBillingSummaryCmdState === 'loading' &&
      this.shareBillingSummaryCmdBillingSummaryId === id;
    const draft = this.isDraft(row);

    return html`
      <li
        class="flex flex-wrap items-center gap-3 px-4 py-3 ${selected
          ? 'bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]'
          : ''}"
      >
        <button
          type="button"
          class="min-w-0 flex-1 text-left"
          @click=${() => this.selectRow(row)}
        >
          <div class="flex flex-wrap items-baseline justify-between gap-2">
            <div class="min-w-0">
              <span class="font-medium text-[var(--text-default,#0f172a)]">
                ${this.formatDate(row.periodStart)} – ${this.formatDate(row.periodEnd)}
              </span>
              <span class="ml-2 text-sm text-[var(--text-muted,#64748b)]">
                ${this.statusLabel(row.status)}
              </span>
            </div>
            <span class="tabular-nums font-medium text-[var(--text-strong,#020617)]">
              ${this.formatMoney(row.totalCost)}
            </span>
          </div>
          <div class="mt-1 flex flex-wrap gap-x-4 gap-y-0.5 text-xs text-[var(--text-muted,#64748b)]">
            <span>${msg['summary.labor']}: <span class="tabular-nums">${this.formatMoney(row.laborCost)}</span></span>
            <span>${msg['summary.material']}: <span class="tabular-nums">${this.formatMoney(row.materialCost)}</span></span>
            <span>${msg['summary.changeOrders']}: <span class="tabular-nums">${this.formatMoney(row.changeOrderCost)}</span></span>
          </div>
        </button>
        ${draft
          ? html`
              <button
                type="button"
                class="shrink-0 rounded-md border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-1.5 text-xs text-[var(--button-secondary-text,#0f172a)] disabled:opacity-60"
                ?disabled=${sharing}
                @click=${(event: Event) => {
                  event.preventDefault();
                  event.stopPropagation();
                  this.shareRow(row);
                }}
              >
                ${sharing ? msg['share.working'] : msg['share.action']}
              </button>
            `
          : nothing}
        ${selected && this.shareBillingSummaryCmdState === 'success' && this.shareBillingSummaryCmdBillingSummaryId === id
          ? html`
              <span class="w-full text-xs text-[var(--status-success-text,#166534)]" role="status">
                ${msg['share.success']}
              </span>
            `
          : nothing}
        ${selected && this.shareBillingSummaryCmdState === 'error' && this.shareBillingSummaryCmdBillingSummaryId === id
          ? html`
              <span class="w-full text-xs text-[var(--status-error-text,#b91c1c)]" role="alert">
                ${this.shareBillingSummaryCmdError || msg['share.error']}
              </span>
            `
          : nothing}
      </li>
    `;
  }

  renderPager(): TemplateResult {
    const msg = this.msg;
    const page = this.currentPage();
    const pageSize = this.currentPageSize();
    const total = this.listBillingSummariesData?.total ?? 0;
    const totalPages = pageSize > 0 ? Math.max(1, Math.ceil(total / pageSize)) : 1;
    if (total <= pageSize && page <= 1) {
      return html`${nothing}`;
    }
    return html`
      <div class="flex items-center justify-between gap-3 text-sm text-[var(--text-muted,#64748b)]">
        <span>${msg['pager.page']} ${page}${totalPages > 1 ? ` / ${totalPages}` : ''}</span>
        <div class="flex gap-2">
          <button
            type="button"
            class="rounded-md border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-1.5 text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
            ?disabled=${page <= 1 || this.listBillingSummariesState === 'loading'}
            @click=${() => this.goToPage(page - 1)}
          >
            ${msg['pager.prev']}
          </button>
          <button
            type="button"
            class="rounded-md border border-[var(--button-secondary-border,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] px-3 py-1.5 text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
            ?disabled=${page >= totalPages || this.listBillingSummariesState === 'loading'}
            @click=${() => this.goToPage(page + 1)}
          >
            ${msg['pager.next']}
          </button>
        </div>
      </div>
    `;
  }

  renderDetailPanel(): TemplateResult {
    const msg = this.msg;
    const row = this.selectedRow();
    if (!row) {
      return html`
        <aside
          class="rounded-lg border border-dashed border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 text-sm text-[var(--text-muted,#64748b)]"
        >
          ${msg['detail.empty']}
        </aside>
      `;
    }

    const draft = this.isDraft(row);
    const sharing =
      this.shareBillingSummaryCmdState === 'loading' &&
      this.shareBillingSummaryCmdBillingSummaryId === this.rowId(row);

    return html`
      <aside
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-sm"
      >
        <h2 class="mb-4 text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['detail.title']}</h2>
        <dl class="flex flex-col gap-3 text-sm">
          <div class="flex justify-between gap-3">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['detail.period']}</dt>
            <dd class="tabular-nums text-right text-[var(--text-default,#0f172a)]">
              ${this.formatDate(row.periodStart)} – ${this.formatDate(row.periodEnd)}
            </dd>
          </div>
          <div class="flex justify-between gap-3">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['detail.status']}</dt>
            <dd class="text-right text-[var(--text-default,#0f172a)]">${this.statusLabel(row.status)}</dd>
          </div>
          <div class="flex justify-between gap-3">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['detail.sharedAt']}</dt>
            <dd class="tabular-nums text-right text-[var(--text-default,#0f172a)]">
              ${row.sharedAt ? this.formatDate(row.sharedAt) : msg['em.dash']}
            </dd>
          </div>
          <div class="my-1 border-t border-[var(--border-subtle,#e2e8f0)]"></div>
          <div class="flex justify-between gap-3">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['detail.labor']}</dt>
            <dd class="tabular-nums text-right text-[var(--text-default,#0f172a)]">
              ${this.formatMoney(row.laborCost)}
            </dd>
          </div>
          <div class="flex justify-between gap-3">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['detail.material']}</dt>
            <dd class="tabular-nums text-right text-[var(--text-default,#0f172a)]">
              ${this.formatMoney(row.materialCost)}
            </dd>
          </div>
          <div class="flex justify-between gap-3">
            <dt class="text-[var(--text-muted,#64748b)]">${msg['detail.changeOrders']}</dt>
            <dd class="tabular-nums text-right text-[var(--text-default,#0f172a)]">
              ${this.formatMoney(row.changeOrderCost)}
            </dd>
          </div>
          <div class="flex justify-between gap-3 border-t border-[var(--border-subtle,#e2e8f0)] pt-3">
            <dt class="font-medium text-[var(--text-strong,#020617)]">${msg['detail.total']}</dt>
            <dd class="tabular-nums text-right font-semibold text-[var(--text-strong,#020617)]">
              ${this.formatMoney(row.totalCost)}
            </dd>
          </div>
        </dl>
        ${draft
          ? html`
              <div class="mt-5">
                <button
                  type="button"
                  class="w-full rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${sharing}
                  @click=${() => this.shareRow(row)}
                >
                  ${sharing ? msg['share.working'] : msg['share.action']}
                </button>
                ${this.shareBillingSummaryCmdState === 'success'
                  ? html`
                      <p class="mt-2 text-sm text-[var(--status-success-text,#166534)]" role="status">
                        ${msg['share.success']}
                      </p>
                    `
                  : nothing}
                ${this.shareBillingSummaryCmdState === 'error'
                  ? html`
                      <p class="mt-2 text-sm text-[var(--status-error-text,#b91c1c)]" role="alert">
                        ${this.shareBillingSummaryCmdError || msg['share.error']}
                      </p>
                    `
                  : nothing}
              </div>
            `
          : nothing}
      </aside>
    `;
  }
}
