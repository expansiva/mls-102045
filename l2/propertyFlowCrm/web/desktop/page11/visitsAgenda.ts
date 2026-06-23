/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/visitsAgenda.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { VisitsAgendaVisitsAgendaBase } from '/_102045_/l2/propertyFlowCrm/web/shared/visitsAgenda.js';

@customElement('property-flow-crm--web--desktop--page11--visits-agenda-102045')
export class VisitsAgendaDesktopPage11VisitsAgendaPage extends VisitsAgendaVisitsAgendaBase {
  render() {
    const agendarVisitaBusy = this.agendarVisitaState === 'loading';
    const atualizarStatusVisitaBusy = this.atualizarStatusVisitaState === 'loading';
    return html`
      <div class="min-h-screen bg-slate-50 text-slate-900">
        <header class="flex items-center justify-between px-6 py-5 border-b border-slate-200 bg-white">
          <div class="flex flex-col">
            <span class="text-sm uppercase tracking-wide text-slate-500">${this.msg.brand}</span>
            <h1 class="text-2xl font-semibold">${this.msg.pageTitle}</h1>
          </div>
          <div class="text-sm text-slate-600 bg-slate-100 px-3 py-1 rounded-full">${this.status ?? ''}</div>
        </header>

        <main class="p-6 grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
          <section class="space-y-6">
            <div class="bg-white rounded-xl shadow-sm border border-slate-200">
              <div class="px-5 py-4 border-b border-slate-100 flex items-center justify-between">
                <h2 class="text-lg font-semibold">${this.msg.loadingListarVisitas}</h2>
                <span class="text-sm text-slate-500">${this.msg.loaded}</span>
              </div>
              <div class="p-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div class="space-y-3">
                  ${(this.visitas ?? []).map((item: any) => html`
                    <div class="flex items-start justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3">
                      <div class="flex flex-col gap-1">
                        <span class="text-sm font-medium">${item.visitId}</span>
                        <span class="text-xs text-slate-500">${item.status}</span>
                      </div>
                      <div class="text-right text-xs text-slate-500">
                        <div>${item.scheduledAt}</div>
                        <div>${item.propertyId}</div>
                        <div>${item.leadId}</div>
                      </div>
                    </div>
                  `)}
                </div>
                <div class="space-y-3">
                  ${(this.visitas ?? []).map((item: any) => html`
                    <div class="rounded-lg border border-slate-100 px-4 py-3">
                      <div class="flex items-center justify-between">
                        <span class="text-sm font-semibold">${item.scheduledAt}</span>
                        <span class="text-xs text-slate-500">${item.status}</span>
                      </div>
                      <div class="mt-2 grid grid-cols-2 gap-2 text-xs text-slate-500">
                        <span>${item.visitId}</span>
                        <span class="text-right">${item.propertyId}</span>
                        <span>${item.leadId}</span>
                        <span class="text-right">${item.propertyId}</span>
                      </div>
                    </div>
                  `)}
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-slate-200">
              <div class="px-5 py-4 border-b border-slate-100">
                <h2 class="text-lg font-semibold">${this.msg.loadingListarSolicitacoesAgendamentoVisita}</h2>
              </div>
              <div class="p-5 space-y-3">
                ${(this.solicitacoesAgendamentoVisita ?? []).map((item: any) => html`
                  <div class="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3">
                    <div class="flex flex-col gap-1">
                      <span class="text-sm font-medium">${item.visitScheduleRequestId}</span>
                      <span class="text-xs text-slate-500">${item.status}</span>
                    </div>
                    <div class="text-right text-xs text-slate-500">
                      <div>${item.requestedStartAt}</div>
                      <div>${item.propertyId}</div>
                      <div>${item.leadId}</div>
                      <div>${item.visitId}</div>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          </section>

          <aside class="space-y-6">
            <div class="bg-white rounded-xl shadow-sm border border-slate-200">
              <div class="px-5 py-4 border-b border-slate-100">
                <h2 class="text-lg font-semibold">${this.msg.agendarVisitaLabel}</h2>
              </div>
              <div class="p-5 space-y-3">
                <input
                  class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  .value=${this.agendarPropertyId ?? ''}
                  @input=${(e: Event) => { this.agendarPropertyId = (e.target as HTMLInputElement).value; }}
                />
                <input
                  class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  .value=${this.agendarLeadId ?? ''}
                  @input=${(e: Event) => { this.agendarLeadId = (e.target as HTMLInputElement).value; }}
                />
                <input
                  type="datetime-local"
                  class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  .value=${this.agendarRequestedStartAt ?? ''}
                  @input=${(e: Event) => { this.agendarRequestedStartAt = (e.target as HTMLInputElement).value; }}
                />
                <input
                  type="datetime-local"
                  class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  .value=${this.agendarRequestedEndAt ?? ''}
                  @input=${(e: Event) => { this.agendarRequestedEndAt = (e.target as HTMLInputElement).value; }}
                />
                <textarea
                  class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  .value=${this.agendarNotes ?? ''}
                  @input=${(e: Event) => { this.agendarNotes = (e.target as HTMLTextAreaElement).value; }}
                ></textarea>
                <button
                  class="w-full rounded-lg bg-blue-600 text-white py-2 text-sm font-semibold disabled:opacity-60"
                  ?disabled=${agendarVisitaBusy}
                  @click=${this.handleAgendarVisitaClick}
                >
                  ${agendarVisitaBusy ? this.msg.agendarVisitaLoading : this.msg.agendarVisitaLabel}
                </button>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-slate-200">
              <div class="px-5 py-4 border-b border-slate-100">
                <h2 class="text-lg font-semibold">${this.msg.loadingObterVisita}</h2>
              </div>
              <div class="p-5 space-y-2 text-sm text-slate-600">
                <div class="flex items-center justify-between">
                  <span>${this.visita?.visitId ?? ''}</span>
                  <span>${this.visita?.status ?? ''}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>${this.visita?.scheduledAt ?? ''}</span>
                  <span>${this.visita?.propertyId ?? ''}</span>
                </div>
                <div class="flex items-center justify-between">
                  <span>${this.visita?.leadId ?? ''}</span>
                  <span>${this.visita?.visitId ?? ''}</span>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-xl shadow-sm border border-slate-200">
              <div class="px-5 py-4 border-b border-slate-100">
                <h2 class="text-lg font-semibold">${this.msg.atualizarStatusVisitaLabel}</h2>
              </div>
              <div class="p-5 space-y-3">
                <input
                  class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  .value=${this.atualizarNovoStatus ?? ''}
                  @input=${(e: Event) => { this.atualizarNovoStatus = (e.target as HTMLInputElement).value; }}
                />
                <input
                  type="datetime-local"
                  class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  .value=${this.atualizarRequestedStartAt ?? ''}
                  @input=${(e: Event) => { this.atualizarRequestedStartAt = (e.target as HTMLInputElement).value; }}
                />
                <input
                  type="datetime-local"
                  class="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
                  .value=${this.atualizarRequestedEndAt ?? ''}
                  @input=${(e: Event) => { this.atualizarRequestedEndAt = (e.target as HTMLInputElement).value; }}
                />
                <button
                  class="w-full rounded-lg bg-emerald-600 text-white py-2 text-sm font-semibold disabled:opacity-60"
                  ?disabled=${atualizarStatusVisitaBusy}
                  @click=${this.handleAtualizarStatusVisitaClick}
                >
                  ${atualizarStatusVisitaBusy ? this.msg.atualizarStatusVisitaLoading : this.msg.atualizarStatusVisitaLabel}
                </button>
              </div>
            </div>
          </aside>
        </main>
      </div>
    `;
  }
}
