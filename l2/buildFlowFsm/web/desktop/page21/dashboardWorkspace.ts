/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/dashboardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  'summary.empty': m['intent.dashboardWorkspace.getDashboardSummary.list.empty'],
  'list.empty': m['intent.dashboardWorkspace.getProjectList.list.empty'],
  'col.projects': m['intent.dashboardWorkspace.getProjectList.list.column.projects.label'],
  'col.total': m['intent.dashboardWorkspace.getProjectList.list.column.total.label'],
  'filter.status': m['intent.dashboardWorkspace.getProjectList.list.filter.status.label'],
});
const pageMessage_en = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  // The copy you invent, with short keys. Only this part repeats per language.
  'kpi.totalProjects': 'Matching projects',
  'kpi.totalBudget': 'Total budget',
  'kpi.actualCost': 'Actual cost',
  'kpi.budgetVariance': 'Budget variance',
  'kpi.overBudget': 'Over budget',
  'kpi.taskUrgency': 'Urgent tasks',
  'status.all': 'All',
  'status.planning': 'Planning',
  'status.active': 'Active',
  'status.onHold': 'On hold',
  'status.completed': 'Completed',
  'status.cancelled': 'Cancelled',
  'table.name': 'Project',
  'table.client': 'Client',
  'table.site': 'Site',
  'table.budget': 'Budget',
  'table.actualCost': 'Actual cost',
  'table.variance': 'Variance',
  'table.startDate': 'Start',
  'table.endDate': 'End',
  'table.status': 'Status',
  'table.tasks': 'Open tasks',
  'table.overdue': 'Overdue',
  'pager.prev': 'Previous',
  'pager.next': 'Next',
  'pager.page': 'Page',
  'pager.of': 'of',
  'retry': 'Retry',
  'summary.error': 'Could not load KPI summary.',
  'list.error': 'Could not load project list.',
  'loading': 'Loading…',
  'dash': '—',
  'currency.suffix': '',
};
type PageMessageType = typeof pageMessage_en;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  // The SAME invented keys as pageMessage_en, translated to pt-br.
  'kpi.totalProjects': 'Projetos correspondentes',
  'kpi.totalBudget': 'Orçamento total',
  'kpi.actualCost': 'Custo real',
  'kpi.budgetVariance': 'Variação orçamentária',
  'kpi.overBudget': 'Acima do orçamento',
  'kpi.taskUrgency': 'Tarefas urgentes',
  'status.all': 'Todos',
  'status.planning': 'Planejamento',
  'status.active': 'Ativo',
  'status.onHold': 'Em espera',
  'status.completed': 'Concluído',
  'status.cancelled': 'Cancelado',
  'table.name': 'Projeto',
  'table.client': 'Cliente',
  'table.site': 'Obra',
  'table.budget': 'Orçamento',
  'table.actualCost': 'Custo real',
  'table.variance': 'Variação',
  'table.startDate': 'Início',
  'table.endDate': 'Fim',
  'table.status': 'Status',
  'table.tasks': 'Tarefas abertas',
  'table.overdue': 'Atrasadas',
  'pager.prev': 'Anterior',
  'pager.next': 'Próxima',
  'pager.page': 'Página',
  'pager.of': 'de',
  'retry': 'Tentar de novo',
  'summary.error': 'Não foi possível carregar o resumo de KPIs.',
  'list.error': 'Não foi possível carregar a lista de projetos.',
  'loading': 'Carregando…',
  'dash': '—',
  'currency.suffix': '',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  // The SAME invented keys as pageMessage_en, translated to es.
  'kpi.totalProjects': 'Proyectos coincidentes',
  'kpi.totalBudget': 'Presupuesto total',
  'kpi.actualCost': 'Costo real',
  'kpi.budgetVariance': 'Variación presupuestaria',
  'kpi.overBudget': 'Sobre presupuesto',
  'kpi.taskUrgency': 'Tareas urgentes',
  'status.all': 'Todos',
  'status.planning': 'Planificación',
  'status.active': 'Activo',
  'status.onHold': 'En espera',
  'status.completed': 'Completado',
  'status.cancelled': 'Cancelado',
  'table.name': 'Proyecto',
  'table.client': 'Cliente',
  'table.site': 'Obra',
  'table.budget': 'Presupuesto',
  'table.actualCost': 'Costo real',
  'table.variance': 'Variación',
  'table.startDate': 'Inicio',
  'table.endDate': 'Fin',
  'table.status': 'Estado',
  'table.tasks': 'Tareas abiertas',
  'table.overdue': 'Vencidas',
  'pager.prev': 'Anterior',
  'pager.next': 'Siguiente',
  'pager.page': 'Página',
  'pager.of': 'de',
  'retry': 'Reintentar',
  'summary.error': 'No se pudo cargar el resumen de KPI.',
  'list.error': 'No se pudo cargar la lista de proyectos.',
  'loading': 'Cargando…',
  'dash': '—',
  'currency.suffix': '',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page21--dashboard-workspace-102045')
export class BuildFlowFsmDesktopPage21DashboardWorkspacePage extends BuildFlowFsmDashboardWorkspaceBase {
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
        <div class="mx-auto flex w-full max-w-7xl flex-col gap-6 p-4 md:p-6">
          ${this.renderFilterBar(msg)}
          ${this.renderKpiRow(msg)}
          ${this.renderProjectTable(msg)}
        </div>
      </div>
    `;
  }

  renderFilterBar(msg: PageMessageType) {
    const statusChips: { value: string; label: string }[] = [
      { value: '', label: msg['status.all'] },
      { value: 'planning', label: msg['status.planning'] },
      { value: 'active', label: msg['status.active'] },
      { value: 'on_hold', label: msg['status.onHold'] },
      { value: 'completed', label: msg['status.completed'] },
      { value: 'cancelled', label: msg['status.cancelled'] },
    ];
    const current = this.getProjectListStatus || this.getDashboardSummaryStatus || '';
    return html`
      <div class="flex flex-wrap items-center gap-2 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3 shadow-sm">
        <span class="mr-1 text-sm font-medium text-[var(--text-muted,#64748b)]">${msg['filter.status']}</span>
        ${statusChips.map((chip) => {
          const selected = current === chip.value;
          return html`
            <button
              type="button"
              class=${selected
                ? 'rounded-full border border-[var(--selected-border,#2563eb)] bg-[var(--selected-bg,#dbeafe)] px-3 py-1.5 text-sm font-medium text-[var(--selected-text,#1e3a8a)]'
                : 'rounded-full border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f1f5f9)] px-3 py-1.5 text-sm text-[var(--text-default,#0f172a)] hover:border-[var(--border-subtle,#cbd5e1)]'}
              @click=${() => {
                this.setGetDashboardSummaryStatus(chip.value);
                this.setGetDashboardSummaryPage('1');
                this.setGetProjectListStatus(chip.value);
                this.setGetProjectListPage('1');
                void this.loadGetDashboardSummary();
                void this.loadGetProjectList();
              }}
            >
              ${chip.label}
            </button>
          `;
        })}
      </div>
    `;
  }

  renderKpiRow(msg: PageMessageType) {
    const loading = this.getDashboardSummaryState === 'loading';
    const errored = this.getDashboardSummaryState === 'error';
    const data: GetDashboardSummaryOutput = this.getDashboardSummaryData ?? { projects: [], total: 0 };
    const projects = Array.isArray(data.projects) ? data.projects : [];

    const toNumber = (value: unknown): number => {
      if (typeof value === 'number' && Number.isFinite(value)) {
        return value;
      }
      if (typeof value === 'string' && value.trim() !== '') {
        const n = Number(value);
        return Number.isFinite(n) ? n : 0;
      }
      return 0;
    };
    const readField = (row: unknown, keys: string[]): unknown => {
      if (!row || typeof row !== 'object') {
        return undefined;
      }
      const rec = row as Record<string, unknown>;
      for (const key of keys) {
        if (rec[key] !== undefined && rec[key] !== null) {
          return rec[key];
        }
      }
      return undefined;
    };
    const formatMoney = (value: number): string => {
      try {
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: 'BRL',
          maximumFractionDigits: 0,
        }).format(value);
      } catch {
        return String(value);
      }
    };
    const formatCount = (value: number): string => {
      try {
        return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(value);
      } catch {
        return String(value);
      }
    };

    let totalBudget = 0;
    let totalActual = 0;
    let overBudgetCount = 0;
    let urgentTasks = 0;
    for (const row of projects) {
      const budget = toNumber(readField(row, ['budget', 'budgetAmount', 'plannedBudget', 'totalBudget']));
      const actual = toNumber(readField(row, ['actualCost', 'actual', 'spent', 'totalActualCost']));
      const varianceRaw = readField(row, ['variance', 'budgetVariance', 'costVariance']);
      const variance = varianceRaw !== undefined ? toNumber(varianceRaw) : actual - budget;
      totalBudget += budget;
      totalActual += actual;
      if (variance > 0 || actual > budget) {
        overBudgetCount += 1;
      }
      urgentTasks += toNumber(
        readField(row, ['overdueTasks', 'urgentTasks', 'overdueTaskCount', 'taskUrgencyCount', 'openOverdueTasks']),
      );
    }
    const totalProjects = typeof data.total === 'number' ? data.total : projects.length;
    const budgetVariance = totalActual - totalBudget;

    const tileClass =
      'flex min-w-[9rem] flex-1 flex-col gap-1 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm';
    const valueClass = 'text-2xl font-semibold tabular-nums tracking-tight text-[var(--text-strong,#020617)]';
    const labelClass = 'text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]';
    const dimClass = loading ? 'opacity-50 transition-opacity' : '';

    if (errored) {
      return html`
        <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
          <p class="text-sm text-[var(--text-default,#0f172a)]">${msg['summary.error']}</p>
          <button
            type="button"
            class="mt-3 rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-3 py-1.5 text-sm text-[var(--button-secondary-text,#0f172a)]"
            @click=${(e: Event) => this.handleGetDashboardSummaryClick(e)}
          >
            ${msg['retry']}
          </button>
        </div>
      `;
    }

    const displayOrDash = (value: string) => (loading && projects.length === 0 ? msg['dash'] : value);
    const varianceTone =
      budgetVariance > 0
        ? 'text-[var(--status-error-text,#b91c1c)]'
        : budgetVariance < 0
          ? 'text-[var(--status-success-text,#15803d)]'
          : 'text-[var(--text-strong,#020617)]';

    return html`
      <div class="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6 ${dimClass}">
        <div class=${tileClass}>
          <span class=${valueClass}>${displayOrDash(formatCount(totalProjects))}</span>
          <span class=${labelClass}>${msg['kpi.totalProjects']}</span>
        </div>
        <div class=${tileClass}>
          <span class=${valueClass}>${displayOrDash(formatMoney(totalBudget))}</span>
          <span class=${labelClass}>${msg['kpi.totalBudget']}</span>
        </div>
        <div class=${tileClass}>
          <span class=${valueClass}>${displayOrDash(formatMoney(totalActual))}</span>
          <span class=${labelClass}>${msg['kpi.actualCost']}</span>
        </div>
        <div class=${tileClass}>
          <span class="${valueClass} ${varianceTone}">${displayOrDash(formatMoney(budgetVariance))}</span>
          <span class=${labelClass}>${msg['kpi.budgetVariance']}</span>
        </div>
        <div class=${tileClass}>
          <span class="${valueClass} ${overBudgetCount > 0 ? 'text-[var(--status-error-text,#b91c1c)]' : ''}">
            ${displayOrDash(formatCount(overBudgetCount))}
          </span>
          <span class=${labelClass}>${msg['kpi.overBudget']}</span>
        </div>
        <div class=${tileClass}>
          <span class="${valueClass} ${urgentTasks > 0 ? 'text-[var(--status-warning-text,#b45309)]' : ''}">
            ${displayOrDash(formatCount(urgentTasks))}
          </span>
          <span class=${labelClass}>${msg['kpi.taskUrgency']}</span>
        </div>
      </div>
    `;
  }

  renderProjectTable(msg: PageMessageType) {
    const loading = this.getProjectListState === 'loading';
    const errored = this.getProjectListState === 'error';
    const data: GetProjectListOutput = this.getProjectListData ?? { projects: [], total: 0 };
    const projects = Array.isArray(data.projects) ? data.projects : [];
    const total = typeof data.total === 'number' ? data.total : projects.length;

    const toNumber = (value: unknown): number => {
      if (typeof value === 'number' && Number.isFinite(value)) {
        return value;
      }
      if (typeof value === 'string' && value.trim() !== '') {
        const n = Number(value);
        return Number.isFinite(n) ? n : 0;
      }
      return 0;
    };
    const readField = (row: unknown, keys: string[]): unknown => {
      if (!row || typeof row !== 'object') {
        return undefined;
      }
      const rec = row as Record<string, unknown>;
      for (const key of keys) {
        if (rec[key] !== undefined && rec[key] !== null && rec[key] !== '') {
          return rec[key];
        }
      }
      return undefined;
    };
    const asText = (value: unknown): string => {
      if (value === undefined || value === null) {
        return '';
      }
      return String(value);
    };
    const formatMoney = (value: number): string => {
      try {
        return new Intl.NumberFormat(undefined, {
          style: 'currency',
          currency: 'BRL',
          maximumFractionDigits: 0,
        }).format(value);
      } catch {
        return String(value);
      }
    };
    const formatDate = (value: unknown): string => {
      const raw = asText(value);
      if (!raw) {
        return msg['dash'];
      }
      const d = new Date(raw);
      if (Number.isNaN(d.getTime())) {
        return raw;
      }
      try {
        return new Intl.DateTimeFormat(undefined, { year: 'numeric', month: 'short', day: '2-digit' }).format(d);
      } catch {
        return raw;
      }
    };
    const statusLabel = (status: string): string => {
      const normalized = status.toLowerCase().replace(/\s+/g, '_');
      if (normalized === 'planning') return msg['status.planning'];
      if (normalized === 'active') return msg['status.active'];
      if (normalized === 'on_hold' || normalized === 'onhold' || normalized === 'hold') return msg['status.onHold'];
      if (normalized === 'completed' || normalized === 'done') return msg['status.completed'];
      if (normalized === 'cancelled' || normalized === 'canceled') return msg['status.cancelled'];
      return status || msg['dash'];
    };

    const pageSizeRaw = this.getProjectListPageSize !== '' ? Number(this.getProjectListPageSize) : 10;
    const pageSize = !Number.isNaN(pageSizeRaw) && pageSizeRaw > 0 ? pageSizeRaw : 10;
    const pageRaw = this.getProjectListPage !== '' ? Number(this.getProjectListPage) : 1;
    const currentPage = !Number.isNaN(pageRaw) && pageRaw > 0 ? pageRaw : 1;
    const totalPages = Math.max(1, Math.ceil(total / pageSize) || 1);

    const goToPage = (next: number) => {
      const clamped = Math.min(Math.max(1, next), totalPages);
      this.setGetProjectListPage(String(clamped));
      void this.loadGetProjectList();
    };

    if (errored) {
      return html`
        <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
          <p class="text-sm text-[var(--text-default,#0f172a)]">${msg['list.error']}</p>
          <button
            type="button"
            class="mt-3 rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-3 py-1.5 text-sm text-[var(--button-secondary-text,#0f172a)]"
            @click=${(e: Event) => this.handleGetProjectListClick(e)}
          >
            ${msg['retry']}
          </button>
        </div>
      `;
    }

    const skeletonRows = [0, 1, 2, 3, 4].map(
      (i) => html`
        <tr class="border-t border-[var(--border-subtle,#e2e8f0)]" aria-hidden="true">
          <td class="px-3 py-3" colspan="9">
            <div class="h-4 w-full animate-pulse rounded bg-[var(--surface-alt-bg,#e2e8f0)] opacity-70" style="animation-delay:${i * 40}ms"></div>
          </td>
        </tr>
      `,
    );

    const body =
      loading && projects.length === 0
        ? skeletonRows
        : projects.length === 0
          ? html`
              <tr class="border-t border-[var(--border-subtle,#e2e8f0)]">
                <td class="px-3 py-8 text-center text-sm text-[var(--text-muted,#64748b)]" colspan="9">
                  ${msg['list.empty']}
                </td>
              </tr>
            `
          : projects.map((row) => {
              const name = asText(readField(row, ['name', 'projectName', 'title'])) || msg['dash'];
              const client = asText(readField(row, ['client', 'clientName', 'customerName'])) || msg['dash'];
              const site = asText(readField(row, ['site', 'siteName', 'location'])) || msg['dash'];
              const budget = toNumber(readField(row, ['budget', 'budgetAmount', 'plannedBudget', 'totalBudget']));
              const actual = toNumber(readField(row, ['actualCost', 'actual', 'spent', 'totalActualCost']));
              const varianceRaw = readField(row, ['variance', 'budgetVariance', 'costVariance']);
              const variance = varianceRaw !== undefined ? toNumber(varianceRaw) : actual - budget;
              const startDate = formatDate(readField(row, ['startDate', 'plannedStartDate', 'startsAt']));
              const endDate = formatDate(readField(row, ['endDate', 'plannedEndDate', 'endsAt']));
              const status = asText(readField(row, ['status', 'projectStatus', 'lifecycleStatus']));
              const openTasks = toNumber(readField(row, ['openTasks', 'taskCount', 'openTaskCount', 'tasksOpen']));
              const overdue = toNumber(
                readField(row, ['overdueTasks', 'urgentTasks', 'overdueTaskCount', 'taskUrgencyCount']),
              );
              const varianceClass =
                variance > 0
                  ? 'text-[var(--status-error-text,#b91c1c)]'
                  : variance < 0
                    ? 'text-[var(--status-success-text,#15803d)]'
                    : 'text-[var(--text-default,#0f172a)]';
              const overdueClass =
                overdue > 0 ? 'text-[var(--status-warning-text,#b45309)] font-medium' : 'text-[var(--text-default,#0f172a)]';
              return html`
                <tr class="border-t border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--surface-alt-bg,#f8fafc)]">
                  <td class="px-3 py-2.5 text-sm font-medium text-[var(--text-strong,#020617)]">${name}</td>
                  <td class="px-3 py-2.5 text-sm text-[var(--text-default,#0f172a)]">${client}</td>
                  <td class="px-3 py-2.5 text-sm text-[var(--text-default,#0f172a)]">${site}</td>
                  <td class="px-3 py-2.5 text-right text-sm tabular-nums text-[var(--text-default,#0f172a)]">${formatMoney(budget)}</td>
                  <td class="px-3 py-2.5 text-right text-sm tabular-nums text-[var(--text-default,#0f172a)]">${formatMoney(actual)}</td>
                  <td class="px-3 py-2.5 text-right text-sm tabular-nums ${varianceClass}">${formatMoney(variance)}</td>
                  <td class="px-3 py-2.5 text-sm text-[var(--text-muted,#64748b)]">${startDate}</td>
                  <td class="px-3 py-2.5 text-sm text-[var(--text-muted,#64748b)]">${endDate}</td>
                  <td class="px-3 py-2.5 text-sm">
                    <span class="inline-flex rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-2 py-0.5 text-xs font-medium text-[var(--status-neutral-text,#334155)]">
                      ${statusLabel(status)}
                    </span>
                  </td>
                  <td class="px-3 py-2.5 text-right text-sm tabular-nums text-[var(--text-default,#0f172a)]">${openTasks}</td>
                  <td class="px-3 py-2.5 text-right text-sm tabular-nums ${overdueClass}">${overdue}</td>
                </tr>
              `;
            });

    return html`
      <section class="overflow-hidden rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-sm">
        <div class="overflow-x-auto">
          <table class="min-w-full border-collapse text-left">
            <thead class="bg-[var(--surface-alt-bg,#f8fafc)]">
              <tr>
                <th class="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.name']}</th>
                <th class="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.client']}</th>
                <th class="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.site']}</th>
                <th class="px-3 py-2.5 text-right text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.budget']}</th>
                <th class="px-3 py-2.5 text-right text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.actualCost']}</th>
                <th class="px-3 py-2.5 text-right text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.variance']}</th>
                <th class="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.startDate']}</th>
                <th class="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.endDate']}</th>
                <th class="px-3 py-2.5 text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.status']}</th>
                <th class="px-3 py-2.5 text-right text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.tasks']}</th>
                <th class="px-3 py-2.5 text-right text-xs font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['table.overdue']}</th>
              </tr>
            </thead>
            <tbody class=${loading && projects.length > 0 ? 'opacity-60' : ''}>
              ${body}
            </tbody>
          </table>
        </div>
        <div class="flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border-default,#e2e8f0)] px-3 py-2.5">
          <span class="text-sm text-[var(--text-muted,#64748b)]">
            ${msg['col.total']}: <span class="font-medium tabular-nums text-[var(--text-default,#0f172a)]">${total}</span>
          </span>
          <div class="flex items-center gap-2">
            <button
              type="button"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#e2e8f0)] px-3 py-1.5 text-sm text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
              ?disabled=${currentPage <= 1 || loading}
              @click=${() => goToPage(currentPage - 1)}
            >
              ${msg['pager.prev']}
            </button>
            <span class="text-sm tabular-nums text-[var(--text-muted,#64748b)]">
              ${msg['pager.page']} ${currentPage} ${msg['pager.of']} ${totalPages}
            </span>
            <button
              type="button"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--button-secondary-bg,#e2e8f0)] px-3 py-1.5 text-sm text-[var(--button-secondary-text,#0f172a)] disabled:opacity-50"
              ?disabled=${currentPage >= totalPages || loading}
              @click=${() => goToPage(currentPage + 1)}
            >
              ${msg['pager.next']}
            </button>
          </div>
        </div>
      </section>
    `;
  }
}
