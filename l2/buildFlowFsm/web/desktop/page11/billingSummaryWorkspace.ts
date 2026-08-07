/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/billingSummaryWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmBillingSummaryWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';
import type { ListBillingSummariesOutput } from '/_102045_/l2/buildFlowFsm/web/shared/billingSummaryWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'title': s_en['section.billingSummaryWorkspace.sec-billing-summary-workspace.title'],
  'list.title': s_en['section.billingSummaryWorkspace.sec-billing-list.title'],
  'list.empty': s_en['intent.billingSummaryWorkspace.listBillingSummaries.list.empty'],
  'list.loading': 'Loading billing summaries…',
  'list.refresh': 'Refresh',
  'list.filter.projectId': s_en['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label'],
  'list.filter.status': s_en['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label'],
  'list.applyFilters': 'Apply filters',
  'list.col.id': 'Summary',
  'list.col.projectId': 'Project',
  'list.col.status': 'Status',
  'list.col.periodStart': 'Period start',
  'list.col.periodEnd': 'Period end',
  'list.col.total': s_en['intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label'],
  'list.col.actions': 'Actions',
  'list.pager.prev': 'Previous',
  'list.pager.next': 'Next',
  'list.pager.page': 'Page',
  'list.pager.of': 'of',
  'list.total': 'Total records',
  'list.share': 'Share with client',
  'list.share.confirm': 'Share this billing summary with the client?',
  'create.title': s_en['section.billingSummaryWorkspace.sec-create-billing.title'],
  'create.periodStart': s_en['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label'],
  'create.periodEnd': s_en['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label'],
  'create.submit': s_en['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd'],
  'create.helper': 'Compile a client-facing summary from approved job cost data for the selected period.',
  'create.loading': 'Creating…',
  'create.success': s_en['action.createBillingSummaryCmd.success'],
  'create.error': s_en['action.createBillingSummaryCmd.error'],
  'share.success': s_en['action.shareBillingSummaryCmd.success'],
  'share.error': s_en['action.shareBillingSummaryCmd.error'],
  'share.loading': 'Sharing…',
  'feedback.dismiss': 'Dismiss',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'title': s_pt_br['section.billingSummaryWorkspace.sec-billing-summary-workspace.title'],
  'list.title': s_pt_br['section.billingSummaryWorkspace.sec-billing-list.title'],
  'list.empty': s_pt_br['intent.billingSummaryWorkspace.listBillingSummaries.list.empty'],
  'list.loading': 'Carregando resumos de faturamento…',
  'list.refresh': 'Atualizar',
  'list.filter.projectId': s_pt_br['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label'],
  'list.filter.status': s_pt_br['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label'],
  'list.applyFilters': 'Aplicar filtros',
  'list.col.id': 'Resumo',
  'list.col.projectId': 'Projeto',
  'list.col.status': 'Status',
  'list.col.periodStart': 'Início do período',
  'list.col.periodEnd': 'Fim do período',
  'list.col.total': s_pt_br['intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label'],
  'list.col.actions': 'Ações',
  'list.pager.prev': 'Anterior',
  'list.pager.next': 'Próxima',
  'list.pager.page': 'Página',
  'list.pager.of': 'de',
  'list.total': 'Total de registros',
  'list.share': 'Compartilhar com o cliente',
  'list.share.confirm': 'Compartilhar este resumo de faturamento com o cliente?',
  'create.title': s_pt_br['section.billingSummaryWorkspace.sec-create-billing.title'],
  'create.periodStart': s_pt_br['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label'],
  'create.periodEnd': s_pt_br['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label'],
  'create.submit': s_pt_br['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd'],
  'create.helper': 'Compile um resumo para o cliente a partir dos custos de obra aprovados no período selecionado.',
  'create.loading': 'Criando…',
  'create.success': s_pt_br['action.createBillingSummaryCmd.success'],
  'create.error': s_pt_br['action.createBillingSummaryCmd.error'],
  'share.success': s_pt_br['action.shareBillingSummaryCmd.success'],
  'share.error': s_pt_br['action.shareBillingSummaryCmd.error'],
  'share.loading': 'Compartilhando…',
  'feedback.dismiss': 'Dispensar',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'title': s_es['section.billingSummaryWorkspace.sec-billing-summary-workspace.title'],
  'list.title': s_es['section.billingSummaryWorkspace.sec-billing-list.title'],
  'list.empty': s_es['intent.billingSummaryWorkspace.listBillingSummaries.list.empty'],
  'list.loading': 'Cargando resúmenes de facturación…',
  'list.refresh': 'Actualizar',
  'list.filter.projectId': s_es['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.projectId.label'],
  'list.filter.status': s_es['intent.billingSummaryWorkspace.listBillingSummaries.list.filter.status.label'],
  'list.applyFilters': 'Aplicar filtros',
  'list.col.id': 'Resumen',
  'list.col.projectId': 'Proyecto',
  'list.col.status': 'Estado',
  'list.col.periodStart': 'Inicio del período',
  'list.col.periodEnd': 'Fin del período',
  'list.col.total': s_es['intent.billingSummaryWorkspace.listBillingSummaries.list.column.total.label'],
  'list.col.actions': 'Acciones',
  'list.pager.prev': 'Anterior',
  'list.pager.next': 'Siguiente',
  'list.pager.page': 'Página',
  'list.pager.of': 'de',
  'list.total': 'Total de registros',
  'list.share': 'Compartir con el cliente',
  'list.share.confirm': '¿Compartir este resumen de facturación con el cliente?',
  'create.title': s_es['section.billingSummaryWorkspace.sec-create-billing.title'],
  'create.periodStart': s_es['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodStart.label'],
  'create.periodEnd': s_es['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.field.periodEnd.label'],
  'create.submit': s_es['intent.billingSummaryWorkspace.createBillingSummaryCmd.form.action.createBillingSummaryCmd'],
  'create.helper': 'Compile un resumen para el cliente a partir de los costos de obra aprobados del período seleccionado.',
  'create.loading': 'Creando…',
  'create.success': s_es['action.createBillingSummaryCmd.success'],
  'create.error': s_es['action.createBillingSummaryCmd.error'],
  'share.success': s_es['action.shareBillingSummaryCmd.success'],
  'share.error': s_es['action.shareBillingSummaryCmd.error'],
  'share.loading': 'Compartiendo…',
  'feedback.dismiss': 'Descartar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

type BillingSummaryRow = ListBillingSummariesOutput['billingSummaries'][number];

@customElement('build-flow-fsm--web--desktop--page11--billing-summary-workspace-102045')
export class BuildFlowFsmDesktopPage11BillingSummaryWorkspacePage extends BuildFlowFsmBillingSummaryWorkspaceBase {
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
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">${msg['title']}</h1>
          </header>
          ${this.renderCreateFeedback()}
          ${this.renderShareFeedback()}
          ${this.renderCreateForm()}
          ${this.renderListSection()}
        </div>
      </div>
    `;
  }

  renderCreateFeedback(): TemplateResult | typeof nothing {
    const msg = this.msg;
    if (this.createBillingSummaryCmdState === 'success') {
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-4 py-3 flex items-start justify-between gap-3"
          role="status"
        >
          <p class="text-sm">${msg['create.success']}</p>
          <button
            type="button"
            class="text-sm underline shrink-0"
            @click=${() => {
              this.createBillingSummaryCmdState = 'idle';
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.createBillingSummaryCmdState === 'error') {
      const errorText = this.createBillingSummaryCmdError || msg['create.error'];
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-4 py-3 flex items-start justify-between gap-3"
          role="alert"
        >
          <p class="text-sm">${errorText}</p>
          <button
            type="button"
            class="text-sm underline shrink-0"
            @click=${() => {
              this.createBillingSummaryCmdState = 'idle';
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderShareFeedback(): TemplateResult | typeof nothing {
    const msg = this.msg;
    if (this.shareBillingSummaryCmdState === 'success') {
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)] px-4 py-3 flex items-start justify-between gap-3"
          role="status"
        >
          <p class="text-sm">${msg['share.success']}</p>
          <button
            type="button"
            class="text-sm underline shrink-0"
            @click=${() => {
              this.shareBillingSummaryCmdState = 'idle';
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.shareBillingSummaryCmdState === 'error') {
      const errorText = this.shareBillingSummaryCmdError || msg['share.error'];
      return html`
        <div
          class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)] px-4 py-3 flex items-start justify-between gap-3"
          role="alert"
        >
          <p class="text-sm">${errorText}</p>
          <button
            type="button"
            class="text-sm underline shrink-0"
            @click=${() => {
              this.shareBillingSummaryCmdState = 'idle';
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderCreateForm(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.createBillingSummaryCmdState === 'loading';
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">${msg['create.title']}</h2>
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.helper']}</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['create.periodStart']}</span>
            <input
              type="date"
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.createBillingSummaryCmdPeriodStart}
              ?disabled=${isLoading}
              @change=${(event: Event) => this.handleCreateBillingSummaryCmdPeriodStartChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['create.periodEnd']}</span>
            <input
              type="date"
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.createBillingSummaryCmdPeriodEnd}
              ?disabled=${isLoading}
              @change=${(event: Event) => this.handleCreateBillingSummaryCmdPeriodEndChange(event)}
            />
          </label>
        </div>
        <div class="flex justify-end">
          <button
            type="button"
            class="inline-flex items-center gap-2 rounded-lg px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${isLoading || !this.createBillingSummaryCmdPeriodStart || !this.createBillingSummaryCmdPeriodEnd}
            @click=${(event: Event) => this.handleCreateBillingSummaryCmdClick(event)}
          >
            ${isLoading ? msg['create.loading'] : msg['create.submit']}
          </button>
        </div>
      </section>
    `;
  }

  renderListSection(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.listBillingSummariesState === 'loading';
    const data = this.listBillingSummariesData;
    const rows: BillingSummaryRow[] = data?.billingSummaries ?? [];
    const total = typeof data?.total === 'number' ? data.total : rows.length;
    const pageSizeRaw = this.listBillingSummariesPageSize !== '' ? Number(this.listBillingSummariesPageSize) : 10;
    const pageSize = !Number.isNaN(pageSizeRaw) && pageSizeRaw > 0 ? pageSizeRaw : 10;
    const pageRaw = this.listBillingSummariesPage !== '' ? Number(this.listBillingSummariesPage) : 1;
    const currentPage = !Number.isNaN(pageRaw) && pageRaw > 0 ? pageRaw : 1;
    const totalPages = Math.max(1, Math.ceil(total / pageSize));

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <div class="flex flex-wrap items-center justify-between gap-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">${msg['list.title']}</h2>
          <button
            type="button"
            class="inline-flex items-center rounded-lg px-3 py-2 border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] text-sm disabled:opacity-60"
            ?disabled=${isLoading}
            @click=${(event: Event) => this.handleListBillingSummariesClick(event)}
          >
            ${msg['list.refresh']}
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 items-end">
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['list.filter.projectId']}</span>
            <input
              type="text"
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.listBillingSummariesProjectId}
              ?disabled=${isLoading}
              @change=${(event: Event) => this.handleListBillingSummariesProjectIdChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="text-[var(--text-muted,#64748b)]">${msg['list.filter.status']}</span>
            <input
              type="text"
              class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.listBillingSummariesStatus}
              ?disabled=${isLoading}
              @change=${(event: Event) => this.handleListBillingSummariesStatusChange(event)}
            />
          </label>
          <div class="flex">
            <button
              type="button"
              class="inline-flex items-center rounded-lg px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] text-sm disabled:opacity-60"
              ?disabled=${isLoading}
              @click=${(event: Event) => {
                this.setListBillingSummariesPage('1');
                this.handleListBillingSummariesClick(event);
              }}
            >
              ${msg['list.applyFilters']}
            </button>
          </div>
        </div>

        ${isLoading
          ? html`
              <div class="space-y-2" aria-busy="true">
                <div class="h-10 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                <div class="h-10 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                <div class="h-10 rounded-lg bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['list.loading']}</p>
              </div>
            `
          : rows.length === 0
            ? html`<p class="text-sm text-[var(--text-muted,#64748b)] py-6">${msg['list.empty']}</p>`
            : html`
                <div class="overflow-x-auto">
                  <table class="min-w-full text-sm">
                    <thead>
                      <tr class="border-b border-[var(--border-subtle,#e2e8f0)] text-left text-[var(--text-muted,#64748b)]">
                        <th class="py-2 pr-3 font-medium">${msg['list.col.id']}</th>
                        <th class="py-2 pr-3 font-medium">${msg['list.col.projectId']}</th>
                        <th class="py-2 pr-3 font-medium">${msg['list.col.status']}</th>
                        <th class="py-2 pr-3 font-medium">${msg['list.col.periodStart']}</th>
                        <th class="py-2 pr-3 font-medium">${msg['list.col.periodEnd']}</th>
                        <th class="py-2 pr-3 font-medium">${msg['list.col.total']}</th>
                        <th class="py-2 font-medium">${msg['list.col.actions']}</th>
                      </tr>
                    </thead>
                    <tbody>
                      ${rows.map((row: BillingSummaryRow) => this.renderListRow(row))}
                    </tbody>
                  </table>
                </div>
              `}

        <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[var(--border-subtle,#e2e8f0)]">
          <p class="text-sm text-[var(--text-muted,#64748b)]">
            ${msg['list.total']}: ${total}
          </p>
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="rounded-lg px-3 py-1.5 border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] text-sm disabled:opacity-50"
              ?disabled=${isLoading || currentPage <= 1}
              @click=${(event: Event) => {
                const next = String(Math.max(1, currentPage - 1));
                this.setListBillingSummariesPage(next);
                this.handleListBillingSummariesClick(event);
              }}
            >
              ${msg['list.pager.prev']}
            </button>
            <span class="text-sm text-[var(--text-muted,#64748b)]">
              ${msg['list.pager.page']} ${currentPage} ${msg['list.pager.of']} ${totalPages}
            </span>
            <button
              type="button"
              class="rounded-lg px-3 py-1.5 border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] text-sm disabled:opacity-50"
              ?disabled=${isLoading || currentPage >= totalPages}
              @click=${(event: Event) => {
                const next = String(Math.min(totalPages, currentPage + 1));
                this.setListBillingSummariesPage(next);
                this.handleListBillingSummariesClick(event);
              }}
            >
              ${msg['list.pager.next']}
            </button>
          </div>
        </div>
      </section>
    `;
  }

  renderListRow(row: BillingSummaryRow): TemplateResult {
    const msg = this.msg;
    const record = row as BillingSummaryRow & {
      billingSummaryId?: string;
      id?: string;
      projectId?: string;
      status?: string;
      periodStart?: string;
      periodEnd?: string;
      total?: number | string;
    };
    const summaryId = String(record.billingSummaryId ?? record.id ?? '');
    const projectId = String(record.projectId ?? '');
    const status = String(record.status ?? '');
    const periodStart = String(record.periodStart ?? '');
    const periodEnd = String(record.periodEnd ?? '');
    const totalValue = record.total !== undefined && record.total !== null ? String(record.total) : '';
    const isSharing = this.shareBillingSummaryCmdState === 'loading' && this.shareBillingSummaryCmdBillingSummaryId === summaryId;
    const isSelected = this.shareBillingSummaryCmdBillingSummaryId === summaryId && summaryId !== '';

    return html`
      <tr
        class="border-b border-[var(--border-subtle,#e2e8f0)] ${isSelected
          ? 'bg-[var(--selected-bg,#eff6ff)] text-[var(--selected-text,#0f172a)]'
          : ''}"
      >
        <td class="py-2 pr-3">${summaryId}</td>
        <td class="py-2 pr-3">${projectId}</td>
        <td class="py-2 pr-3">${status}</td>
        <td class="py-2 pr-3">${periodStart}</td>
        <td class="py-2 pr-3">${periodEnd}</td>
        <td class="py-2 pr-3">${totalValue}</td>
        <td class="py-2">
          <button
            type="button"
            class="inline-flex items-center rounded-lg px-3 py-1.5 border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f8fafc)] text-[var(--button-secondary-text,#0f172a)] text-sm disabled:opacity-60"
            ?disabled=${!summaryId || isSharing || this.shareBillingSummaryCmdState === 'loading'}
            @click=${(event: Event) => {
              if (!summaryId) {
                return;
              }
              const confirmed = window.confirm(`${msg['list.share.confirm']} (${summaryId})`);
              if (!confirmed) {
                return;
              }
              this.setShareBillingSummaryCmdBillingSummaryId(summaryId);
              this.setShareBillingSummaryCmdStatus('shared');
              this.handleShareBillingSummaryCmdClick(event);
            }}
          >
            ${isSharing ? msg['share.loading'] : msg['list.share']}
          </button>
        </td>
      </tr>
    `;
  }
}
