/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/dashboardWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmDashboardWorkspaceBase, messages as sharedMessages, type MessageType } from '/_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.js';
import type {
  GetDashboardSummaryOutput,
  GetProjectListOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/dashboardWorkspace.js';
import { chart } from '/_102033_/l2/shared/chartRuntime.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
// Text from the shared catalog, mapped ONCE — the locale is the parameter. Reference it, never
// inline the string: the reference is what keeps this file translated. Use SHORT keys:
//   'orders.empty': m['intent.<page>.<bff>.list.empty'],
const fromShared = (m: MessageType) => ({
  'summary.empty': m['intent.dashboardWorkspace.getDashboardSummary.list.empty'],
  'projects.empty': m['intent.dashboardWorkspace.getProjectList.list.empty'],
  'filter.status': m['intent.dashboardWorkspace.getDashboardSummary.list.filter.status.label'],
  'projects.filter.status': m['intent.dashboardWorkspace.getProjectList.list.filter.status.label'],
  'col.projects': m['intent.dashboardWorkspace.getProjectList.list.column.projects.label'],
  'col.total': m['intent.dashboardWorkspace.getProjectList.list.column.total.label'],
});
const pageMessage_en = {
  ...fromShared(sharedMessages['en'] ?? sharedFallback),
  // The copy you invent, with short keys. Only this part repeats per language.
  'chart.title': 'Budget drift by project status',
  'chart.series.budget': 'Budget',
  'chart.series.actual': 'Actual cost',
  'chart.series.variance': 'Variance',
  'chart.axis.status': 'Status',
  'chart.axis.amount': 'Amount',
  'selection.showing': 'Showing',
  'selection.all': 'All statuses',
  'selection.clear': 'Clear selection',
  'selection.empty': 'No projects match this slice.',
  'filter.apply': 'Apply',
  'filter.all': 'All',
  'loading': 'Loading…',
  'error.retry': 'Retry',
  'error.summary': 'Could not load the dashboard chart.',
  'error.projects': 'Could not load the project list.',
  'pager.prev': 'Previous',
  'pager.next': 'Next',
  'pager.page': 'Page',
  'pager.of': 'of',
  'pager.results': 'results',
  'table.name': 'Project',
  'table.client': 'Client',
  'table.site': 'Site',
  'table.budget': 'Budget',
  'table.actual': 'Actual cost',
  'table.variance': 'Variance',
  'table.schedule': 'Schedule',
  'table.status': 'Status',
  'table.tasks': 'Tasks',
  'status.planning': 'Planning',
  'status.active': 'Active',
  'status.onHold': 'On hold',
  'status.completed': 'Completed',
  'status.cancelled': 'Cancelled',
};
type PageMessageType = typeof pageMessage_en;
const pageMessage_pt_br: PageMessageType = {
  ...fromShared(sharedMessages['pt-br'] ?? sharedFallback),
  // The SAME invented keys as pageMessage_en, translated to pt-br.
  'chart.title': 'Desvio de orçamento por status do projeto',
  'chart.series.budget': 'Orçamento',
  'chart.series.actual': 'Custo real',
  'chart.series.variance': 'Variação',
  'chart.axis.status': 'Status',
  'chart.axis.amount': 'Valor',
  'selection.showing': 'Exibindo',
  'selection.all': 'Todos os status',
  'selection.clear': 'Limpar seleção',
  'selection.empty': 'Nenhum projeto corresponde a este recorte.',
  'filter.apply': 'Aplicar',
  'filter.all': 'Todos',
  'loading': 'Carregando…',
  'error.retry': 'Tentar de novo',
  'error.summary': 'Não foi possível carregar o gráfico do painel.',
  'error.projects': 'Não foi possível carregar a lista de projetos.',
  'pager.prev': 'Anterior',
  'pager.next': 'Próxima',
  'pager.page': 'Página',
  'pager.of': 'de',
  'pager.results': 'resultados',
  'table.name': 'Projeto',
  'table.client': 'Cliente',
  'table.site': 'Obra',
  'table.budget': 'Orçamento',
  'table.actual': 'Custo real',
  'table.variance': 'Variação',
  'table.schedule': 'Cronograma',
  'table.status': 'Status',
  'table.tasks': 'Tarefas',
  'status.planning': 'Planejamento',
  'status.active': 'Ativo',
  'status.onHold': 'Em espera',
  'status.completed': 'Concluído',
  'status.cancelled': 'Cancelado',
};
const pageMessage_es: PageMessageType = {
  ...fromShared(sharedMessages['es'] ?? sharedFallback),
  // The SAME invented keys as pageMessage_en, translated to es.
  'chart.title': 'Desviación de presupuesto por estado del proyecto',
  'chart.series.budget': 'Presupuesto',
  'chart.series.actual': 'Costo real',
  'chart.series.variance': 'Variación',
  'chart.axis.status': 'Estado',
  'chart.axis.amount': 'Importe',
  'selection.showing': 'Mostrando',
  'selection.all': 'Todos los estados',
  'selection.clear': 'Borrar selección',
  'selection.empty': 'Ningún proyecto coincide con este recorte.',
  'filter.apply': 'Aplicar',
  'filter.all': 'Todos',
  'loading': 'Cargando…',
  'error.retry': 'Reintentar',
  'error.summary': 'No se pudo cargar el gráfico del panel.',
  'error.projects': 'No se pudo cargar la lista de proyectos.',
  'pager.prev': 'Anterior',
  'pager.next': 'Siguiente',
  'pager.page': 'Página',
  'pager.of': 'de',
  'pager.results': 'resultados',
  'table.name': 'Proyecto',
  'table.client': 'Cliente',
  'table.site': 'Obra',
  'table.budget': 'Presupuesto',
  'table.actual': 'Costo real',
  'table.variance': 'Variación',
  'table.schedule': 'Cronograma',
  'table.status': 'Estado',
  'table.tasks': 'Tareas',
  'status.planning': 'Planificación',
  'status.active': 'Activo',
  'status.onHold': 'En espera',
  'status.completed': 'Completado',
  'status.cancelled': 'Cancelado',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

type SummaryRow = GetDashboardSummaryOutput['projects'][number];
type ProjectRow = GetProjectListOutput['projects'][number];

function asRecord(row: unknown): Record<string, unknown> {
  return row !== null && typeof row === 'object' ? (row as Record<string, unknown>) : {};
}

function readStr(row: Record<string, unknown>, ...keys: string[]): string {
  for (const key of keys) {
    const value = row[key];
    if (value !== undefined && value !== null && String(value).length > 0) {
      return String(value);
    }
  }
  return '';
}

function readNum(row: Record<string, unknown>, ...keys: string[]): number {
  for (const key of keys) {
    const value = row[key];
    if (value !== undefined && value !== null && value !== '') {
      const n = Number(value);
      if (Number.isFinite(n)) {
        return n;
      }
    }
  }
  return 0;
}

function formatAmount(value: number): string {
  try {
    return new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(value);
  } catch {
    return String(value);
  }
}

function pageNumber(raw: string): number {
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 1) {
    return 1;
  }
  return Math.floor(n);
}

function pageSizeNumber(raw: string): number {
  const n = Number(raw);
  if (!Number.isFinite(n) || n < 1) {
    return 10;
  }
  return Math.floor(n);
}

@customElement('build-flow-fsm--web--desktop--page31--dashboard-workspace-102045')
export class BuildFlowFsmDesktopPage31DashboardWorkspacePage extends BuildFlowFsmDashboardWorkspaceBase {
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
      <div class="flex flex-col gap-6 p-4 md:p-6 bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] min-h-full">
        ${this.renderChartControls(msg)}
        ${this.renderLeadChart(msg)}
        ${this.renderSelectionSentence(msg)}
        ${this.renderProjectTable(msg)}
      </div>
    `;
  }

  renderChartControls(msg: PageMessageType) {
    const loading = this.getDashboardSummaryState === 'loading';
    return html`
      <div class="flex flex-wrap items-end gap-3 rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-3">
        <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#64748b)] min-w-[12rem]">
          <span>${msg['filter.status']}</span>
          <select
            class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
            .value=${this.getDashboardSummaryStatus}
            ?disabled=${loading}
            @change=${(event: Event) => {
              this.handleGetDashboardSummaryStatusChange(event);
              this.setGetDashboardSummaryPage('1');
              void this.loadGetDashboardSummary();
            }}
          >
            <option value="">${msg['filter.all']}</option>
            <option value="planning">${msg['status.planning']}</option>
            <option value="active">${msg['status.active']}</option>
            <option value="onHold">${msg['status.onHold']}</option>
            <option value="completed">${msg['status.completed']}</option>
            <option value="cancelled">${msg['status.cancelled']}</option>
          </select>
        </label>
        <button
          type="button"
          class="rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-60"
          ?disabled=${loading}
          @click=${() => {
            this.setGetDashboardSummaryPage('1');
            this.handleGetDashboardSummaryClick();
          }}
        >
          ${loading ? msg['loading'] : msg['filter.apply']}
        </button>
        ${this.renderSummaryPager(msg)}
      </div>
    `;
  }

  renderSummaryPager(msg: PageMessageType) {
    const total = Number(this.getDashboardSummaryData?.total ?? 0);
    const size = pageSizeNumber(this.getDashboardSummaryPageSize);
    const page = pageNumber(this.getDashboardSummaryPage);
    const totalPages = Math.max(1, Math.ceil((Number.isFinite(total) ? total : 0) / size) || 1);
    const loading = this.getDashboardSummaryState === 'loading';
    return html`
      <div class="ml-auto flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted,#64748b)]">
        <span>${msg['pager.page']} ${page} ${msg['pager.of']} ${totalPages}</span>
        <span class="tabular-nums">${Number.isFinite(total) ? total : 0} ${msg['pager.results']}</span>
        <button
          type="button"
          class="rounded-md px-3 py-1.5 bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50"
          ?disabled=${loading || page <= 1}
          @click=${() => {
            const next = Math.max(1, page - 1);
            this.setGetDashboardSummaryPage(String(next));
            void this.loadGetDashboardSummary();
          }}
        >
          ${msg['pager.prev']}
        </button>
        <button
          type="button"
          class="rounded-md px-3 py-1.5 bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50"
          ?disabled=${loading || page >= totalPages}
          @click=${() => {
            const next = Math.min(totalPages, page + 1);
            this.setGetDashboardSummaryPage(String(next));
            void this.loadGetDashboardSummary();
          }}
        >
          ${msg['pager.next']}
        </button>
      </div>
    `;
  }

  renderLeadChart(msg: PageMessageType) {
    if (this.getDashboardSummaryState === 'loading' && !(this.getDashboardSummaryData?.projects?.length)) {
      return html`
        <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
          <div class="h-80 animate-pulse rounded-md bg-[var(--surface-alt-bg,#f1f5f9)]" aria-busy="true"></div>
          <p class="mt-2 text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>
        </div>
      `;
    }

    if (this.getDashboardSummaryState === 'error') {
      return html`
        <div class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4">
          <p class="text-sm text-[var(--text-default,#0f172a)]">${msg['error.summary']}</p>
          <button
            type="button"
            class="mt-3 rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]"
            @click=${() => this.handleGetDashboardSummaryClick()}
          >
            ${msg['error.retry']}
          </button>
        </div>
      `;
    }

    const projects: SummaryRow[] = Array.isArray(this.getDashboardSummaryData?.projects)
      ? this.getDashboardSummaryData.projects
      : [];

    if (projects.length === 0) {
      return html`
        <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-6">
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['summary.empty']}</p>
        </div>
      `;
    }

    type Bucket = { status: string; budget: number; actual: number; variance: number; count: number };
    const buckets = new Map<string, Bucket>();
    for (const row of projects) {
      const rec = asRecord(row);
      const status = readStr(rec, 'status', 'projectStatus', 'lifecycleStatus') || 'unknown';
      const budget = readNum(rec, 'budget', 'budgetAmount', 'plannedBudget');
      const actual = readNum(rec, 'actualCost', 'actual', 'costActual', 'spent');
      const varianceRaw = readNum(rec, 'variance', 'budgetVariance', 'drift');
      const variance = varianceRaw !== 0 ? varianceRaw : actual - budget;
      const current = buckets.get(status) ?? { status, budget: 0, actual: 0, variance: 0, count: 0 };
      current.budget += budget;
      current.actual += actual;
      current.variance += variance;
      current.count += 1;
      buckets.set(status, current);
    }

    const categories = Array.from(buckets.keys());
    const budgetSeries = categories.map((key) => buckets.get(key)?.budget ?? 0);
    const actualSeries = categories.map((key) => buckets.get(key)?.actual ?? 0);
    const varianceSeries = categories.map((key) => buckets.get(key)?.variance ?? 0);
    const selectedStatus = (this.getProjectListStatus || this.getDashboardSummaryStatus || '').trim();

    const labelForStatus = (status: string): string => {
      const map: Record<string, string> = {
        planning: msg['status.planning'],
        active: msg['status.active'],
        onHold: msg['status.onHold'],
        completed: msg['status.completed'],
        cancelled: msg['status.cancelled'],
      };
      return map[status] ?? status;
    };

    const categoryLabels = categories.map((c) => labelForStatus(c));

    const option = {
      color: [
        'var(--chart-series-1, #2563eb)',
        'var(--chart-series-2, #0d9488)',
        'var(--chart-series-3, #d97706)',
      ],
      tooltip: { trigger: 'axis' },
      legend: {
        data: [msg['chart.series.budget'], msg['chart.series.actual'], msg['chart.series.variance']],
        textStyle: { color: 'var(--text-muted, #64748b)' },
      },
      grid: { left: 48, right: 24, top: 48, bottom: 40, containLabel: true },
      xAxis: {
        type: 'category',
        name: msg['chart.axis.status'],
        data: categoryLabels,
        axisLabel: { color: 'var(--text-muted, #64748b)' },
      },
      yAxis: {
        type: 'value',
        name: msg['chart.axis.amount'],
        axisLabel: { color: 'var(--text-muted, #64748b)' },
        splitLine: { lineStyle: { color: 'var(--border-subtle, #e2e8f0)' } },
      },
      series: [
        {
          name: msg['chart.series.budget'],
          type: 'bar',
          data: budgetSeries.map((value, index) => ({
            value,
            statusKey: categories[index],
            itemStyle: {
              opacity: selectedStatus && categories[index] !== selectedStatus ? 0.35 : 1,
            },
          })),
          emphasis: { focus: 'series' },
        },
        {
          name: msg['chart.series.actual'],
          type: 'bar',
          data: actualSeries.map((value, index) => ({
            value,
            statusKey: categories[index],
            itemStyle: {
              opacity: selectedStatus && categories[index] !== selectedStatus ? 0.35 : 1,
            },
          })),
          emphasis: { focus: 'series' },
        },
        {
          name: msg['chart.series.variance'],
          type: 'bar',
          data: varianceSeries.map((value, index) => ({
            value,
            statusKey: categories[index],
            itemStyle: {
              opacity: selectedStatus && categories[index] !== selectedStatus ? 0.35 : 1,
            },
          })),
          emphasis: { focus: 'series' },
        },
      ],
    };

    const host = this;
    return html`
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
        <p class="mb-2 text-sm font-medium text-[var(--text-strong,#0f172a)]">${msg['chart.title']}</p>
        <div
          class="h-80 w-full"
          ${chart(option, {
            click: (params: { data?: { statusKey?: string }; name?: string; dataIndex?: number }) => {
              const fromData = params?.data && typeof params.data === 'object' ? params.data.statusKey : undefined;
              let statusKey = typeof fromData === 'string' ? fromData : '';
              if (!statusKey && typeof params?.dataIndex === 'number' && categories[params.dataIndex]) {
                statusKey = categories[params.dataIndex];
              }
              if (!statusKey && typeof params?.name === 'string') {
                const idx = categoryLabels.indexOf(params.name);
                statusKey = idx >= 0 ? categories[idx] : '';
              }
              if (!statusKey) {
                return;
              }
              const next = host.getProjectListStatus === statusKey ? '' : statusKey;
              host.setGetProjectListStatus(next);
              host.setGetProjectListPage('1');
              void host.loadGetProjectList();
            },
          })}
        ></div>
      </section>
    `;
  }

  renderSelectionSentence(msg: PageMessageType) {
    const selected = (this.getProjectListStatus || '').trim();
    const labelMap: Record<string, string> = {
      planning: msg['status.planning'],
      active: msg['status.active'],
      onHold: msg['status.onHold'],
      completed: msg['status.completed'],
      cancelled: msg['status.cancelled'],
    };
    const label = selected ? (labelMap[selected] ?? selected) : msg['selection.all'];
    return html`
      <div class="flex flex-wrap items-center gap-3 text-sm text-[var(--text-muted,#64748b)]">
        <p>
          <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['selection.showing']}:</span>
          ${label}
        </p>
        ${selected
          ? html`
              <button
                type="button"
                class="rounded-md px-3 py-1.5 text-sm bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]"
                @click=${() => {
                  this.setGetProjectListStatus('');
                  this.setGetProjectListPage('1');
                  void this.loadGetProjectList();
                }}
              >
                ${msg['selection.clear']}
              </button>
            `
          : nothing}
      </div>
    `;
  }

  renderProjectTable(msg: PageMessageType) {
    const loading = this.getProjectListState === 'loading';
    const errored = this.getProjectListState === 'error';
    const projects: ProjectRow[] = Array.isArray(this.getProjectListData?.projects)
      ? this.getProjectListData.projects
      : [];
    const total = Number(this.getProjectListData?.total ?? 0);
    const selected = (this.getProjectListStatus || '').trim();

    return html`
      <section class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] overflow-hidden">
        <div class="flex flex-wrap items-end gap-3 border-b border-[var(--border-subtle,#e2e8f0)] p-3">
          <label class="flex flex-col gap-1 text-sm text-[var(--text-muted,#64748b)] min-w-[12rem]">
            <span>${msg['projects.filter.status']}</span>
            <select
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              .value=${this.getProjectListStatus}
              ?disabled=${loading}
              @change=${(event: Event) => {
                this.handleGetProjectListStatusChange(event);
                this.setGetProjectListPage('1');
                void this.loadGetProjectList();
              }}
            >
              <option value="">${msg['filter.all']}</option>
              <option value="planning">${msg['status.planning']}</option>
              <option value="active">${msg['status.active']}</option>
              <option value="onHold">${msg['status.onHold']}</option>
              <option value="completed">${msg['status.completed']}</option>
              <option value="cancelled">${msg['status.cancelled']}</option>
            </select>
          </label>
          ${this.renderProjectPager(msg)}
        </div>

        ${errored
          ? html`
              <div class="p-4">
                <p class="text-sm text-[var(--text-default,#0f172a)]">${msg['error.projects']}</p>
                <button
                  type="button"
                  class="mt-3 rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)]"
                  @click=${() => this.handleGetProjectListClick()}
                >
                  ${msg['error.retry']}
                </button>
              </div>
            `
          : nothing}

        ${loading
          ? html`
              <div class="p-4 space-y-2" aria-busy="true">
                <div class="h-10 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                <div class="h-10 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                <div class="h-10 animate-pulse rounded bg-[var(--surface-alt-bg,#f1f5f9)]"></div>
                <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['loading']}</p>
              </div>
            `
          : nothing}

        ${!loading && !errored && projects.length === 0
          ? html`
              <div class="p-4">
                <p class="text-sm text-[var(--text-muted,#64748b)]">
                  ${selected ? msg['selection.empty'] : msg['projects.empty']}
                </p>
              </div>
            `
          : nothing}

        ${!loading && !errored && projects.length > 0
          ? html`
              <div class="overflow-x-auto">
                <table class="min-w-full text-sm">
                  <thead class="bg-[var(--surface-alt-bg,#f1f5f9)] text-left text-[var(--text-muted,#64748b)]">
                    <tr>
                      <th class="px-3 py-2 font-medium">${msg['table.name']}</th>
                      <th class="px-3 py-2 font-medium">${msg['table.client']}</th>
                      <th class="px-3 py-2 font-medium">${msg['table.site']}</th>
                      <th class="px-3 py-2 font-medium text-right">${msg['table.budget']}</th>
                      <th class="px-3 py-2 font-medium text-right">${msg['table.actual']}</th>
                      <th class="px-3 py-2 font-medium text-right">${msg['table.variance']}</th>
                      <th class="px-3 py-2 font-medium">${msg['table.schedule']}</th>
                      <th class="px-3 py-2 font-medium">${msg['table.status']}</th>
                      <th class="px-3 py-2 font-medium text-right">${msg['table.tasks']}</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${projects.map((row) => this.renderProjectRow(msg, row))}
                  </tbody>
                </table>
              </div>
              <div class="border-t border-[var(--border-subtle,#e2e8f0)] px-3 py-2 text-xs text-[var(--text-muted,#64748b)] tabular-nums">
                ${Number.isFinite(total) ? total : projects.length} ${msg['pager.results']}
              </div>
            `
          : nothing}
      </section>
    `;
  }

  renderProjectRow(msg: PageMessageType, row: ProjectRow) {
    const rec = asRecord(row);
    const name = readStr(rec, 'name', 'projectName', 'title');
    const client = readStr(rec, 'client', 'clientName', 'customerName');
    const site = readStr(rec, 'site', 'siteName', 'location');
    const budget = readNum(rec, 'budget', 'budgetAmount', 'plannedBudget');
    const actual = readNum(rec, 'actualCost', 'actual', 'costActual', 'spent');
    const varianceRaw = readNum(rec, 'variance', 'budgetVariance', 'drift');
    const variance = varianceRaw !== 0 ? varianceRaw : actual - budget;
    const schedule = readStr(rec, 'schedule', 'scheduleLabel', 'endDate', 'plannedEndDate', 'dueDate');
    const status = readStr(rec, 'status', 'projectStatus', 'lifecycleStatus');
    const tasksOpen = readNum(rec, 'openTasks', 'tasksOpen', 'taskOpenCount');
    const tasksOverdue = readNum(rec, 'overdueTasks', 'tasksOverdue', 'taskOverdueCount');
    const tasksTotal = readNum(rec, 'taskCount', 'tasksTotal', 'totalTasks');
    const taskLabel =
      tasksOverdue > 0
        ? `${tasksOverdue}/${tasksTotal || tasksOpen || tasksOverdue}`
        : tasksTotal > 0
          ? String(tasksTotal)
          : tasksOpen > 0
            ? String(tasksOpen)
            : '—';

    const statusLabels: Record<string, string> = {
      planning: msg['status.planning'],
      active: msg['status.active'],
      onHold: msg['status.onHold'],
      completed: msg['status.completed'],
      cancelled: msg['status.cancelled'],
    };
    const statusLabel = statusLabels[status] ?? (status || '—');
    const varianceClass =
      variance > 0
        ? 'text-[var(--status-warning-text,#b45309)]'
        : variance < 0
          ? 'text-[var(--status-success-text,#15803d)]'
          : 'text-[var(--text-default,#0f172a)]';

    return html`
      <tr class="border-t border-[var(--border-subtle,#e2e8f0)] hover:bg-[var(--surface-alt-bg,#f8fafc)]">
        <td class="px-3 py-2 text-[var(--text-strong,#0f172a)] font-medium">${name || '—'}</td>
        <td class="px-3 py-2">${client || '—'}</td>
        <td class="px-3 py-2">${site || '—'}</td>
        <td class="px-3 py-2 text-right tabular-nums">${formatAmount(budget)}</td>
        <td class="px-3 py-2 text-right tabular-nums">${formatAmount(actual)}</td>
        <td class="px-3 py-2 text-right tabular-nums ${varianceClass}">${formatAmount(variance)}</td>
        <td class="px-3 py-2">${schedule || '—'}</td>
        <td class="px-3 py-2">
          <span class="inline-flex rounded-md px-2 py-0.5 text-xs bg-[var(--status-neutral-bg,#f1f5f9)] text-[var(--status-neutral-text,#334155)]">
            ${statusLabel}
          </span>
        </td>
        <td class="px-3 py-2 text-right tabular-nums ${tasksOverdue > 0 ? 'text-[var(--status-warning-text,#b45309)]' : ''}">
          ${taskLabel}
        </td>
      </tr>
    `;
  }

  renderProjectPager(msg: PageMessageType) {
    const total = Number(this.getProjectListData?.total ?? 0);
    const size = pageSizeNumber(this.getProjectListPageSize);
    const page = pageNumber(this.getProjectListPage);
    const totalPages = Math.max(1, Math.ceil((Number.isFinite(total) ? total : 0) / size) || 1);
    const loading = this.getProjectListState === 'loading';
    return html`
      <div class="ml-auto flex flex-wrap items-center gap-2 text-sm text-[var(--text-muted,#64748b)]">
        <span>${msg['pager.page']} ${page} ${msg['pager.of']} ${totalPages}</span>
        <button
          type="button"
          class="rounded-md px-3 py-1.5 bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50"
          ?disabled=${loading || page <= 1}
          @click=${() => {
            const next = Math.max(1, page - 1);
            this.setGetProjectListPage(String(next));
            void this.loadGetProjectList();
          }}
        >
          ${msg['pager.prev']}
        </button>
        <button
          type="button"
          class="rounded-md px-3 py-1.5 bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)] disabled:opacity-50"
          ?disabled=${loading || page >= totalPages}
          @click=${() => {
            const next = Math.min(totalPages, page + 1);
            this.setGetProjectListPage(String(next));
            void this.loadGetProjectList();
          }}
        >
          ${msg['pager.next']}
        </button>
      </div>
    `;
  }
}
