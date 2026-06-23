/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/leadDetails.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LeadDetailsLeadDetailsBase } from '/_102045_/l2/propertyFlowCrm/web/shared/leadDetails.js';

@customElement('property-flow-crm--web--desktop--page11--lead-details-102045')
export class LeadDetailsDesktopPage11LeadDetailsPage extends LeadDetailsLeadDetailsBase {
  render() {
    const atualizarLeadBusy = this.atualizarLeadState === 'loading';

    return html`
      <div class="min-h-screen bg-slate-50 text-slate-900">
        <header class="border-b border-slate-200 bg-white">
          <div class="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
            <div class="flex flex-col gap-1">
              <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">
                ${this.msg.brand}
              </span>
              <h1 class="text-2xl font-semibold text-slate-900">
                ${this.msg.pageTitle}
              </h1>
            </div>
            <div class="text-sm text-slate-500">${this.status ?? ''}</div>
          </div>
        </header>

        <main class="mx-auto grid w-full max-w-6xl gap-6 px-6 py-8 lg:grid-cols-[2fr_1fr]">
          <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="mb-6 flex items-center justify-between">
              <div>
                <h2 class="text-lg font-semibold text-slate-900">${this.msg.atualizarLeadLabel}</h2>
                <p class="text-sm text-slate-500">${this.msg.loaded}</p>
              </div>
              <div class="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                ${this.leadId ?? ''}
              </div>
            </div>

            <div class="grid gap-5">
              <label class="grid gap-2">
                <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  ${this.msg.loadingObterLead}
                </span>
                <input
                  class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  .value=${this.name ?? ''}
                  @input=${(e: Event) => {
                    this.name = (e.target as HTMLInputElement).value;
                  }}
                  aria-label=${this.msg.loadingObterLead}
                  placeholder=${this.msg.loadingObterLead}
                />
              </label>

              <label class="grid gap-2">
                <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  ${this.msg.loaded}
                </span>
                <input
                  type="email"
                  class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  .value=${this.email ?? ''}
                  @input=${(e: Event) => {
                    this.email = (e.target as HTMLInputElement).value;
                  }}
                  aria-label=${this.msg.loaded}
                  placeholder=${this.msg.loaded}
                />
              </label>

              <label class="grid gap-2">
                <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  ${this.msg.couldNotLoad}
                </span>
                <input
                  type="tel"
                  class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  .value=${this.phone ?? ''}
                  @input=${(e: Event) => {
                    this.phone = (e.target as HTMLInputElement).value;
                  }}
                  aria-label=${this.msg.couldNotLoad}
                  placeholder=${this.msg.couldNotLoad}
                />
              </label>

              <label class="grid gap-2">
                <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  ${this.msg.atualizarLeadLoading}
                </span>
                <input
                  class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  .value=${this.preferences ?? ''}
                  @input=${(e: Event) => {
                    this.preferences = (e.target as HTMLInputElement).value;
                  }}
                  aria-label=${this.msg.atualizarLeadLoading}
                  placeholder=${this.msg.atualizarLeadLoading}
                />
              </label>

              <label class="grid gap-2">
                <span class="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  ${this.msg.atualizarLeadLabel}
                </span>
                <input
                  class="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  .value=${this.stage ?? ''}
                  @input=${(e: Event) => {
                    this.stage = (e.target as HTMLInputElement).value;
                  }}
                  aria-label=${this.msg.atualizarLeadLabel}
                  placeholder=${this.msg.atualizarLeadLabel}
                />
              </label>
            </div>

            <div class="mt-6 flex flex-wrap items-center gap-4">
              <button
                class="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                @click=${this.handleAtualizarLeadClick}
                ?disabled=${atualizarLeadBusy}
              >
                ${atualizarLeadBusy ? this.msg.atualizarLeadLoading : this.msg.atualizarLeadLabel}
              </button>
              <span class="text-sm text-slate-500">${this.status ?? ''}</span>
            </div>
          </section>

          <section class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div class="mb-4">
              <h2 class="text-lg font-semibold text-slate-900">${this.msg.loadingObterLead}</h2>
              <p class="text-sm text-slate-500">${this.msg.couldNotLoad}</p>
            </div>
            <div class="space-y-4 text-sm text-slate-700">
              <div class="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div class="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  ${this.msg.loaded}
                </div>
                <div class="mt-2 text-base font-medium text-slate-900">
                  ${this.history ?? ''}
                </div>
              </div>
              <div class="rounded-xl border border-slate-100 bg-slate-50 p-4">
                <div class="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  ${this.msg.atualizarLeadLabel}
                </div>
                <div class="mt-2 text-base font-medium text-slate-900">
                  ${this.stage ?? ''}
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    `;
  }
}
