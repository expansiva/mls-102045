/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/dashboardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmDashboardWorkspaceBase,
  messages as sharedMessages,
  type MessageType,
  type GetDashboardSummaryOutput,
  type GetProjectListOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
//   'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'kpi.section': m['section.dashboardWorkspace.kpiAndBudgetSection.title'],
  'kpi.empty': m['intent.dashboardWorkspace.getDashboardSummary.list.empty'],
  'kpi.filter.status': m['intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label'],
  'kpi.col.projects': m['intent.dashboardWorkspace.getDashboardSummary.list.column.projects.label'],
  'kpi.col.total': m['intent.dashboardWorkspace.getDashboardSummary.list.column.total.label'],
  'projects.section': m['section.dashboardWorkspace.projectListSection.title'],
  'projects.empty': m['intent.dashboardWorkspace.getProjectList.list.empty'],
  'projects.filter.status': m['intent.dashboardWorkspace.getProjectList.list.filter.status.label'],
  'projects.col.projects': m['intent.dashboardWorkspace.getProjectList.list.column.projects.label'],
  'projects.col.total': m['intent.dashboardWorkspace.getProjectList.list.column.total.label'],
});
const pageMessage_en = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  // The copy you invent, with short keys. Only this part repeats per language.
  'page.title': 'Operational Dashboard',
  'page.subtitle': 'Quick overview of active projects, budget drift, and task urgency.',
  'kpi.refresh': 'Refresh overview',
  'kpi.loading': 'Loading overview…',
  'kpi.totalLabel': 'Total projects',
  'kpi.showing': 'Showing',
  'kpi.prev': 'Previous',
  'kpi.next': 'Next',
  'kpi.page': 'Page',
  'kpi.error': 'Could not load the operational overview. Try again.',
  'projects.refresh': 'Refresh projects',
  'projects.loading': 'Loading projects…',
  'projects.totalLabel': 'Projects found',
  'projects.showing': 'Showing',
  'projects.prev': 'Previous',
  'projects.next': 'Next',
  'projects.page': 'Page',
  'projects.error': 'Could not load the project list. Try again.',
  'projects.status': 'Status',
  'filter.apply': 'Apply filter',
  'filter.status.placeholder': 'All statuses',
};
type PageMessageType = typeof pageMessage_en;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  // The SAME invented keys as pageMessage_en, translated to pt-br.
  'page.title': 'Painel operacional',
  'page.subtitle': 'Visão rápida dos projetos ativos, desvio de orçamento e urgência das tarefas.',
  'kpi.refresh': 'Atualizar visão geral',
  'kpi.loading': 'Carregando visão geral…',
  'kpi.totalLabel': 'Total de projetos',
  'kpi.showing': 'Exibindo',
  'kpi.prev': 'Anterior',
  'kpi.next': 'Próxima',
  'kpi.page': 'Página',
  'kpi.error': 'Não foi possível carregar a visão operacional. Tente novamente.',
  'projects.refresh': 'Atualizar projetos',
  'projects.loading': 'Carregando projetos…',
  'projects.totalLabel': 'Projetos encontrados',
  'projects.showing': 'Exibindo',
  'projects.prev': 'Anterior',
  'projects.next': 'Próxima',
  'projects.page': 'Página',
  'projects.error': 'Não foi possível carregar a lista de projetos. Tente novamente.',
  'projects.status': 'Status',
  'filter.apply': 'Aplicar filtro',
  'filter.status.placeholder': 'Todos os status',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  // The SAME invented keys as pageMessage_en, translated to es.
  'page.title': 'Panel operativo',
  'page.subtitle': 'Vista rápida de proyectos activos, desvío de presupuesto y urgencia de tareas.',
  'kpi.refresh': 'Actualizar resumen',
  'kpi.loading': 'Cargando resumen…',
  'kpi.totalLabel': 'Total de proyectos',
  'kpi.showing': 'Mostrando',
  'kpi.prev': 'Anterior',
  'kpi.next': 'Siguiente',
  'kpi.page': 'Página',
  'kpi.error': 'No se pudo cargar el resumen operativo. Inténtelo de nuevo.',
  'projects.refresh': 'Actualizar proyectos',
  'projects.loading': 'Cargando proyectos…',
  'projects.totalLabel': 'Proyectos encontrados',
  'projects.showing': 'Mostrando',
  'projects.prev': 'Anterior',
  'projects.next': 'Siguiente',
  'projects.page': 'Página',
  'projects.error': 'No se pudo cargar la lista de proyectos. Inténtelo de nuevo.',
  'projects.status': 'Estado',
  'filter.apply': 'Aplicar filtro',
  'filter.status.placeholder': 'Todos los estados',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page11--dashboard-workspace-102045')
export class BuildFlowFsmDesktopPage11DashboardWorkspacePage extends BuildFlowFsmDashboardWorkspaceBase {
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
  render() {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#020617)]">${msg['page.title']}</h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['page.subtitle']}</p>
          </header>
          ${this.renderKpiSection()}
          ${this.renderProjectListSection()}
        </div>
      </div>
    `;
  }

  renderKpiSection() {
    const msg = this.msg;
    const loading = this.getDashboardSummaryState === 'loading';
    const errored = this.getDashboardSummaryState === 'error';
    const data: GetDashboardSummaryOutput = this.getDashboardSummaryData ?? { projects: [], total: 0 };
    const rows = Array.isArray(data.projects) ? data.projects : [];
    const total = typeof data.total === 'number' ? data.total : rows.length;
    const pageNum = Math.max(1, Number(this.getDashboardSummaryPage) || 1);
    const pageSizeNum = Math.max(1, Number(this.getDashboardSummaryPageSize) || 10);
    const totalPages = Math.max(1, Math.ceil(total / pageSizeNum) || 1);
    const readField = (row: (typeof rows)[number], key: string): string => {
      if (row && typeof row === 'object' && key in (row as object)) {
        const value = (row as Record<string, unknown>)[key];
        if (value === null || value === undefined) return '';
        return String(value);
      }
      return '';
    };
    const fieldKeys: string[] = rows.length > 0 && rows[0] && typeof rows[0] === 'object'
      ? Object.keys(rows[0] as object).filter((k) => !/imageUrl|photoUrl|logoUrl|avatarUrl|pictureUrl|thumbnailUrl/i.test(k))
      : [];

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle,#e2e8f0)] px-4 py-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">${msg['kpi.section']}</h2>
          <button
            type="button"
            class="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(e: Event) => this.handleGetDashboardSummaryClick(e)}
          >
            ${loading ? msg['kpi.loading'] : msg['kpi.refresh']}
          </button>
        </div>

        <div class="px-4 py-4 space-y-4">
          <div class="flex flex-wrap items-end gap-3">
            <label class="flex flex-col gap-1 text-sm min-w-[12rem]">
              <span class="text-[var(--text-muted,#64748b)]">${msg['kpi.filter.status']}</span>
              <input
                type="text"
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                .value=${this.getDashboardSummaryStatus ?? ''}
                placeholder=${msg['filter.status.placeholder']}
                @change=${(e: Event) => this.handleGetDashboardSummaryStatusChange(e)}
              />
            </label>
            <button
              type="button"
              class="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${loading}
              @click=${(e: Event) => this.handleGetDashboardSummaryClick(e)}
            >
              ${msg['filter.apply']}
            </button>
          </div>

          ${errored
            ? html`<div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">${msg['kpi.error']}</div>`
            : nothing}

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-3">
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['kpi.totalLabel']}</div>
              <div class="mt-1 text-2xl font-semibold text-[var(--text-strong,#020617)]">${loading ? '…' : total}</div>
              <div class="mt-1 text-xs text-[var(--text-muted,#64748b)]">${msg['kpi.col.total']}</div>
            </div>
            <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-3">
              <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['kpi.col.projects']}</div>
              <div class="mt-1 text-2xl font-semibold text-[var(--text-strong,#020617)]">${loading ? '…' : rows.length}</div>
              <div class="mt-1 text-xs text-[var(--text-muted,#64748b)]">${msg['kpi.showing']}</div>
            </div>
          </div>

          ${loading
            ? html`
                <div class="space-y-2" aria-busy="true">
                  <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                </div>
              `
            : rows.length === 0
              ? html`<p class="text-sm text-[var(--text-muted,#64748b)] py-4">${msg['kpi.empty']}</p>`
              : html`
                  <div class="overflow-x-auto rounded-md border border-[var(--border-default,#e2e8f0)]">
                    <table class="min-w-full text-sm">
                      <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-left text-[var(--text-muted,#64748b)]">
                        <tr>
                          ${fieldKeys.map(
                            (key) => html`<th class="px-3 py-2 font-medium whitespace-nowrap">${key}</th>`,
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        ${rows.map(
                          (row) => html`
                            <tr class="border-t border-[var(--border-subtle,#e2e8f0)]">
                              ${fieldKeys.map(
                                (key) => html`<td class="px-3 py-2 text-[var(--text-default,#0f172a)]">${readField(row, key)}</td>`,
                              )}
                            </tr>
                          `,
                        )}
                      </tbody>
                    </table>
                  </div>
                `}

          <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
            <span class="text-xs text-[var(--text-muted,#64748b)]">
              ${msg['kpi.page']} ${pageNum} / ${totalPages}
            </span>
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="rounded-md px-3 py-1.5 text-sm border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
                ?disabled=${loading || pageNum <= 1}
                @click=${() => {
                  this.setGetDashboardSummaryPage(String(Math.max(1, pageNum - 1)));
                  void this.loadGetDashboardSummary();
                }}
              >
                ${msg['kpi.prev']}
              </button>
              <button
                type="button"
                class="rounded-md px-3 py-1.5 text-sm border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
                ?disabled=${loading || pageNum >= totalPages}
                @click=${() => {
                  this.setGetDashboardSummaryPage(String(pageNum + 1));
                  void this.loadGetDashboardSummary();
                }}
              >
                ${msg['kpi.next']}
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  renderProjectListSection() {
    const msg = this.msg;
    const loading = this.getProjectListState === 'loading';
    const errored = this.getProjectListState === 'error';
    const data: GetProjectListOutput = this.getProjectListData ?? { projects: [], total: 0 };
    const rows = Array.isArray(data.projects) ? data.projects : [];
    const total = typeof data.total === 'number' ? data.total : rows.length;
    const pageNum = Math.max(1, Number(this.getProjectListPage) || 1);
    const pageSizeNum = Math.max(1, Number(this.getProjectListPageSize) || 10);
    const totalPages = Math.max(1, Math.ceil(total / pageSizeNum) || 1);
    const readField = (row: (typeof rows)[number], key: string): string => {
      if (row && typeof row === 'object' && key in (row as object)) {
        const value = (row as Record<string, unknown>)[key];
        if (value === null || value === undefined) return '';
        return String(value);
      }
      return '';
    };
    const fieldKeys: string[] = rows.length > 0 && rows[0] && typeof rows[0] === 'object'
      ? Object.keys(rows[0] as object).filter((k) => !/imageUrl|photoUrl|logoUrl|avatarUrl|pictureUrl|thumbnailUrl/i.test(k))
      : [];

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--border-subtle,#e2e8f0)] px-4 py-3">
          <h2 class="text-lg font-medium text-[var(--text-strong,#020617)]">${msg['projects.section']}</h2>
          <button
            type="button"
            class="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(e: Event) => this.handleGetProjectListClick(e)}
          >
            ${loading ? msg['projects.loading'] : msg['projects.refresh']}
          </button>
        </div>

        <div class="px-4 py-4 space-y-4">
          <div class="flex flex-wrap items-end gap-3">
            <label class="flex flex-col gap-1 text-sm min-w-[12rem]">
              <span class="text-[var(--text-muted,#64748b)]">${msg['projects.filter.status']}</span>
              <input
                type="text"
                class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                .value=${this.getProjectListStatus ?? ''}
                placeholder=${msg['filter.status.placeholder']}
                @change=${(e: Event) => this.handleGetProjectListStatusChange(e)}
              />
            </label>
            <button
              type="button"
              class="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${loading}
              @click=${(e: Event) => this.handleGetProjectListClick(e)}
            >
              ${msg['filter.apply']}
            </button>
          </div>

          ${errored
            ? html`<div class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--status-error-bg,#fef2f2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">${msg['projects.error']}</div>`
            : nothing}

          <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-4 py-3 inline-flex flex-col min-w-[10rem]">
            <div class="text-xs uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['projects.totalLabel']}</div>
            <div class="mt-1 text-xl font-semibold text-[var(--text-strong,#020617)]">${loading ? '…' : total}</div>
            <div class="mt-1 text-xs text-[var(--text-muted,#64748b)]">${msg['projects.col.total']}</div>
          </div>

          ${loading
            ? html`
                <div class="space-y-2" aria-busy="true">
                  <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                  <div class="h-10 rounded-md bg-[var(--surface-alt-bg,#f1f5f9)] animate-pulse"></div>
                </div>
              `
            : rows.length === 0
              ? html`<p class="text-sm text-[var(--text-muted,#64748b)] py-4">${msg['projects.empty']}</p>`
              : html`
                  <div class="overflow-x-auto rounded-md border border-[var(--border-default,#e2e8f0)]">
                    <table class="min-w-full text-sm">
                      <thead class="bg-[var(--surface-alt-bg,#f8fafc)] text-left text-[var(--text-muted,#64748b)]">
                        <tr>
                          ${fieldKeys.map(
                            (key) => html`<th class="px-3 py-2 font-medium whitespace-nowrap">${key}</th>`,
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        ${rows.map(
                          (row) => html`
                            <tr class="border-t border-[var(--border-subtle,#e2e8f0)]">
                              ${fieldKeys.map(
                                (key) => html`<td class="px-3 py-2 text-[var(--text-default,#0f172a)]">${readField(row, key)}</td>`,
                              )}
                            </tr>
                          `,
                        )}
                      </tbody>
                    </table>
                  </div>
                `}

          <div class="flex flex-wrap items-center justify-between gap-2 pt-1">
            <span class="text-xs text-[var(--text-muted,#64748b)]">
              ${msg['projects.page']} ${pageNum} / ${totalPages} · ${msg['projects.showing']} ${rows.length}
            </span>
            <div class="flex items-center gap-2">
              <button
                type="button"
                class="rounded-md px-3 py-1.5 text-sm border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
                ?disabled=${loading || pageNum <= 1}
                @click=${() => {
                  this.setGetProjectListPage(String(Math.max(1, pageNum - 1)));
                  void this.loadGetProjectList();
                }}
              >
                ${msg['projects.prev']}
              </button>
              <button
                type="button"
                class="rounded-md px-3 py-1.5 text-sm border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#f1f5f9)] text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
                ?disabled=${loading || pageNum >= totalPages}
                @click=${() => {
                  this.setGetProjectListPage(String(pageNum + 1));
                  void this.loadGetProjectList();
                }}
              >
                ${msg['projects.next']}
              </button>
            </div>
          </div>
        </div>
      </section>
    `;
  }
}
