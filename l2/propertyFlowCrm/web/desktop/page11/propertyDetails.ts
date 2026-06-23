/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/propertyDetails.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { PropertyDetailsPropertyDetailsBase } from '/_102045_/l2/propertyFlowCrm/web/shared/propertyDetails.js';

@customElement('property-flow-crm--web--desktop--page11--property-details-102045')
export class PropertyDetailsDesktopPage11PropertyDetailsPage extends PropertyDetailsPropertyDetailsBase {
  render() {
    const atualizarImovelBusy = this.atualizarImovelState === 'loading';
    const solicitarDescricaoImovelBusy = this.solicitarDescricaoImovelState === 'loading';

    return html`
      <div class="min-h-screen bg-slate-50 text-slate-900">
        <div class="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-8">
          <header class="flex flex-col gap-2">
            <div class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              ${this.msg.brand}
            </div>
            <div class="flex flex-wrap items-center justify-between gap-4">
              <div class="text-3xl font-semibold text-slate-900">${this.msg.pageTitle}</div>
              <div class="flex flex-col items-end gap-1 text-xs text-slate-500">
                <span>${this.propertyId ?? ''}</span>
                <span class="rounded-full bg-blue-100 px-3 py-1 text-[0.7rem] font-semibold uppercase text-blue-700">
                  ${this.status ?? ''}
                </span>
              </div>
            </div>
            <div class="text-sm text-slate-600">${this.status ?? ''}</div>
          </header>

          <section class="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div class="lg:col-span-2 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div class="flex flex-wrap items-center justify-between gap-4">
                <h2 class="text-lg font-semibold text-slate-800">${this.msg.loadingObterImovel}</h2>
                <button
                  class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                  @click=${this.handleAtualizarImovelClick}
                  ?disabled=${atualizarImovelBusy}
                >
                  ${atualizarImovelBusy
                    ? this.msg.atualizarImovelLoading
                    : this.msg.atualizarImovelLabel}
                </button>
              </div>

              <div class="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                <input
                  class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  .value=${this.propertyTitle ?? ''}
                  @input=${(e: Event) => {
                    this.propertyTitle = (e.target as HTMLInputElement).value;
                  }}
                  aria-label=${this.msg.pageTitle}
                />
                <input
                  class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  .value=${this.address ?? ''}
                  @input=${(e: Event) => {
                    this.address = (e.target as HTMLInputElement).value;
                  }}
                  aria-label=${this.msg.pageTitle}
                />
                <input
                  class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="number"
                  .value=${this.price ?? ''}
                  @input=${(e: Event) => {
                    const value = (e.target as HTMLInputElement).value;
                    this.price = value === '' ? undefined : Number(value);
                  }}
                  aria-label=${this.msg.pageTitle}
                />
                <input
                  class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  .value=${this.status ?? ''}
                  @input=${(e: Event) => {
                    this.status = (e.target as HTMLInputElement).value;
                  }}
                  aria-label=${this.msg.pageTitle}
                />
                <input
                  class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="number"
                  .value=${this.bedrooms ?? ''}
                  @input=${(e: Event) => {
                    const value = (e.target as HTMLInputElement).value;
                    this.bedrooms = value === '' ? undefined : Number(value);
                  }}
                  aria-label=${this.msg.pageTitle}
                />
                <input
                  class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="number"
                  .value=${this.bathrooms ?? ''}
                  @input=${(e: Event) => {
                    const value = (e.target as HTMLInputElement).value;
                    this.bathrooms = value === '' ? undefined : Number(value);
                  }}
                  aria-label=${this.msg.pageTitle}
                />
                <input
                  class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  type="number"
                  .value=${this.area ?? ''}
                  @input=${(e: Event) => {
                    const value = (e.target as HTMLInputElement).value;
                    this.area = value === '' ? undefined : Number(value);
                  }}
                  aria-label=${this.msg.pageTitle}
                />
                <input
                  class="w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  .value=${this.features ?? ''}
                  @input=${(e: Event) => {
                    this.features = (e.target as HTMLInputElement).value;
                  }}
                  aria-label=${this.msg.pageTitle}
                />
              </div>

              <div class="mt-4 grid grid-cols-1 gap-4">
                <textarea
                  class="min-h-[120px] w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  .value=${this.description ?? ''}
                  @input=${(e: Event) => {
                    this.description = (e.target as HTMLTextAreaElement).value;
                  }}
                  aria-label=${this.msg.pageTitle}
                ></textarea>
              </div>
            </div>

            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 class="text-lg font-semibold text-slate-800">
                ${this.msg.loadingListarSolicitacoesDescricaoImovel}
              </h2>
              <div class="mt-4 space-y-3">
                ${(this.solicitacoesDescricaoImovel ?? []).map(
                  (item: any) => html`
                    <div class="rounded-xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-700">
                      ${item.requests ?? ''}
                    </div>
                  `,
                )}
              </div>
            </div>
          </section>

          <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="flex flex-wrap items-center justify-between gap-4">
              <h2 class="text-lg font-semibold text-slate-800">
                ${this.msg.solicitarDescricaoImovelLabel}
              </h2>
              <button
                class="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 disabled:cursor-not-allowed disabled:bg-emerald-300"
                @click=${this.handleSolicitarDescricaoImovelClick}
                ?disabled=${solicitarDescricaoImovelBusy}
              >
                ${solicitarDescricaoImovelBusy
                  ? this.msg.solicitarDescricaoImovelLoading
                  : this.msg.solicitarDescricaoImovelLabel}
              </button>
            </div>
            <div class="mt-4">
              <textarea
                class="min-h-[120px] w-full rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                .value=${this.bullets ?? ''}
                @input=${(e: Event) => {
                  this.bullets = (e.target as HTMLTextAreaElement).value;
                }}
                aria-label=${this.msg.solicitarDescricaoImovelLabel}
              ></textarea>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
