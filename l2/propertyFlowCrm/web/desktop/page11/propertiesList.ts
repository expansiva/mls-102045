/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/propertiesList.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PropertiesListPropertiesListBase } from '/_102045_/l2/propertyFlowCrm/web/shared/propertiesList.js';

@customElement('property-flow-crm--web--desktop--page11--properties-list-102045')
export class PropertiesListDesktopPage11PropertiesListPage extends PropertiesListPropertiesListBase {
  render() {
    const criarImovelBusy = this.criarImovelState === 'loading';
    const cities = Array.from(new Set((this.imoveis ?? []).map(item => item.city).filter(Boolean)));
    const neighborhoods = Array.from(new Set((this.imoveis ?? []).map(item => item.neighborhood).filter(Boolean)));

    return html`
      <div class="min-h-screen bg-slate-50 text-slate-900">
        <div class="max-w-6xl mx-auto px-6 py-6 space-y-6">
          <header class="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div class="space-y-1">
              <div class="text-sm font-semibold text-slate-500">${this.msg.brand}</div>
              <h1 class="text-2xl font-semibold tracking-tight">${this.msg.pageTitle}</h1>
            </div>
            <div class="px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-medium">
              ${this.status ?? ''}
            </div>
          </header>

          <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
            <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h2 class="text-lg font-semibold text-slate-800">${this.msg.loaded}</h2>
              <div class="text-sm text-slate-500">${this.msg.loadingListarImoveis}</div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="flex flex-wrap gap-2">
                ${cities.map(city => html`
                  <span class="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">${city}</span>
                `)}
              </div>
              <div class="flex flex-wrap gap-2">
                ${neighborhoods.map(neighborhood => html`
                  <span class="px-3 py-1 rounded-full bg-slate-100 text-sm text-slate-600">${neighborhood}</span>
                `)}
              </div>
            </div>
          </section>

          <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
            <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h2 class="text-lg font-semibold text-slate-800">${this.msg.loadingListarImoveis}</h2>
              <div class="text-sm text-slate-500">${this.msg.pageTitle}</div>
            </div>
            <div class="divide-y divide-slate-100">
              ${(this.imoveis ?? []).map(item => html`
                <div class="py-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                  <div class="space-y-1">
                    <div class="text-base font-semibold text-slate-900">${item.title}</div>
                    <div class="text-sm text-slate-500">${item.city} ${item.neighborhood}</div>
                  </div>
                  <div class="flex flex-wrap items-center gap-4">
                    <div class="text-sm font-medium text-slate-600">${item.status}</div>
                    <div class="text-sm font-semibold text-slate-800">${item.price}</div>
                    <button
                      class="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition"
                      @click=${() => this.handleNavigateToPropertyDetailsClick({ propertyId: item.propertyId })}
                    >
                      ${this.msg.navigateToPropertyDetails}
                    </button>
                  </div>
                </div>
              `)}
            </div>
          </section>

          <section class="bg-white rounded-2xl border border-slate-200 shadow-sm p-5 space-y-4">
            <div class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <h2 class="text-lg font-semibold text-slate-800">${this.msg.criarImovelLabel}</h2>
              <div class="text-sm text-slate-500">${this.msg.pageTitle}</div>
            </div>
            <div class="flex items-center justify-end">
              <button
                class="px-5 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700 transition disabled:opacity-60"
                ?disabled=${criarImovelBusy}
                @click=${this.handleCriarImovelClick}
              >
                ${criarImovelBusy ? this.msg.criarImovelLoading : this.msg.criarImovelLabel}
              </button>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
