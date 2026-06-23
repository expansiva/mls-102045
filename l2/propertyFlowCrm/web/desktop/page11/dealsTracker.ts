/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/dealsTracker.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { DealsTrackerDealsTrackerBase } from '/_102045_/l2/propertyFlowCrm/web/shared/dealsTracker.js';

@customElement('property-flow-crm--web--desktop--page11--deals-tracker-102045')
export class DealsTrackerDesktopPage11DealsTrackerPage extends DealsTrackerDealsTrackerBase {
  render() {
    const criarNegocioBusy = this.criarNegocioState === 'loading';
    const avancarEtapaNegocioBusy = this.avancarEtapaNegocioState === 'loading';
    return html`
      <div class="min-h-screen bg-slate-50 text-slate-900">
        <div class="border-b border-slate-200 bg-white">
          <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
            <div>
              <div class="text-sm font-semibold text-slate-500">${this.msg.brand}</div>
              <div class="text-2xl font-semibold text-slate-900">${this.msg.pageTitle}</div>
            </div>
            <div class="rounded-full bg-slate-100 px-4 py-2 text-sm text-slate-600">
              ${this.status ?? ''}
            </div>
          </div>
        </div>

        <div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 py-6 lg:grid-cols-3">
          <section class="lg:col-span-2">
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="mb-4 flex items-center justify-between">
                <div class="text-lg font-semibold text-slate-900">${this.msg.loadingListarNegocios}</div>
                <button
                  class="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                  ?disabled=${criarNegocioBusy}
                  @click=${this.handleCriarNegocioClick}
                >
                  ${criarNegocioBusy ? this.msg.criarNegocioLoading : this.msg.criarNegocioLabel}
                </button>
              </div>
              <div class="divide-y divide-slate-100 rounded-xl border border-slate-100">
                ${(this.negocios ?? []).map((negocio: any) => html`
                  <div class="grid grid-cols-6 gap-3 px-4 py-3 text-sm text-slate-700">
                    <div class="col-span-1 font-medium text-slate-900">${negocio.dealId ?? ''}</div>
                    <div class="col-span-1 text-slate-600">${negocio.status ?? ''}</div>
                    <div class="col-span-1 text-slate-600">${negocio.leadId ?? ''}</div>
                    <div class="col-span-1 text-slate-600">${negocio.propertyId ?? ''}</div>
                    <div class="col-span-1 text-slate-600">${negocio.valorProposta ?? 0}</div>
                    <div class="col-span-1 text-right text-slate-500">${negocio.updatedAt ?? ''}</div>
                  </div>
                `)}
              </div>
            </div>
          </section>

          <section>
            <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div class="mb-4 text-lg font-semibold text-slate-900">${this.msg.loadingObterNegocio}</div>
              <div class="space-y-3 text-sm text-slate-700">
                <div class="rounded-lg bg-slate-50 px-4 py-3">${this.dealId ?? ''}</div>
                <div class="rounded-lg bg-slate-50 px-4 py-3">${this.negocioStatus ?? ''}</div>
                <div class="rounded-lg bg-slate-50 px-4 py-3">${this.leadId ?? ''}</div>
                <div class="rounded-lg bg-slate-50 px-4 py-3">${this.propertyId ?? ''}</div>
                <div class="rounded-lg bg-slate-50 px-4 py-3">${this.valorProposta ?? 0}</div>
                <div class="rounded-lg bg-slate-50 px-4 py-3">${this.descricao ?? ''}</div>
                <div class="rounded-lg bg-slate-50 px-4 py-3">${this.updatedAt ?? ''}</div>
              </div>
              <button
                class="mt-5 w-full rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-emerald-300"
                ?disabled=${avancarEtapaNegocioBusy}
                @click=${this.handleAvancarEtapaNegocioClick}
              >
                ${avancarEtapaNegocioBusy ? this.msg.avancarEtapaNegocioLoading : this.msg.avancarEtapaNegocioLabel}
              </button>
            </div>
          </section>
        </div>

        <div class="mx-auto max-w-6xl px-6 pb-8">
          <section class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div class="mb-4 text-lg font-semibold text-slate-900">${this.msg.loadingListarMudancasEtapaNegocio}</div>
            <div class="space-y-2">
              ${(this.mudancasEtapaNegocio ?? []).map((mudanca: any) => html`
                <div class="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                  <div class="font-medium text-slate-900">${mudanca.dealStageChangeId ?? ''}</div>
                  <div class="text-slate-600">${mudanca.dealId ?? ''}</div>
                  <div class="text-slate-600">${mudanca.fromStage ?? ''}</div>
                  <div class="text-slate-600">${mudanca.toStage ?? ''}</div>
                  <div class="text-slate-500">${mudanca.changedAt ?? ''}</div>
                </div>
              `)}
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
