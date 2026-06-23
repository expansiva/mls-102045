/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/desktop/page11/leadsPipeline.ts" enhancement="_102027_/l2/enhancementLit.ts" />
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { LeadsPipelineLeadsPipelineBase } from '/_102045_/l2/propertyFlowCrm/web/shared/leadsPipeline.js';

@customElement('property-flow-crm--web--desktop--page11--leads-pipeline-102045')
export class LeadsPipelineDesktopPage11LeadsPipelinePage extends LeadsPipelineLeadsPipelineBase {
  render() {
    const moverEtapaLeadBusy = this.moverEtapaLeadState === 'loading';
    const criarLeadBusy = this.criarLeadState === 'loading';
    const solicitarQualificacaoLeadBusy = this.solicitarQualificacaoLeadState === 'loading';
    const stages = Array.from(new Set((this.leads ?? []).map(lead => lead.leadStage)));

    return html`
      <div class="min-h-screen bg-slate-50 text-slate-900">
        <div class="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8">
          <header class="flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm">
            <div class="flex items-start justify-between gap-4">
              <div class="space-y-2">
                <p class="text-sm font-semibold uppercase tracking-widest text-slate-500">${this.msg.brand}</p>
                <h1 class="text-2xl font-semibold text-slate-900">${this.msg.pageTitle}</h1>
              </div>
              <div class="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm text-emerald-700">
                ${this.status ?? ''}
              </div>
            </div>
            <div class="flex flex-wrap items-center gap-3">
              <button
                class="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-blue-300"
                ?disabled=${criarLeadBusy}
                @click=${this.handleCriarLeadClick}
              >
                ${criarLeadBusy ? this.msg.criarLeadLoading : this.msg.criarLeadLabel}
              </button>
              <button
                class="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-slate-300 disabled:cursor-not-allowed disabled:text-slate-400"
                ?disabled=${moverEtapaLeadBusy}
                @click=${this.handleMoverEtapaLeadClick}
              >
                ${moverEtapaLeadBusy ? this.msg.moverEtapaLeadLoading : this.msg.moverEtapaLeadLabel}
              </button>
            </div>
          </header>

          <section class="grid gap-6 lg:grid-cols-[1.6fr_1fr]">
            <div class="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div class="flex items-center justify-between">
                <h2 class="text-lg font-semibold text-slate-900">${this.msg.loadingListarLeads}</h2>
                <div class="text-sm text-slate-500">${this.status ?? ''}</div>
              </div>
              <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                ${stages.map(stage => html`
                  <div class="flex h-full flex-col rounded-xl border border-slate-200 bg-slate-50/60 p-4">
                    <div class="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
                      ${stage ?? ''}
                    </div>
                    <div class="flex flex-1 flex-col gap-3">
                      ${(this.leads ?? []).filter(lead => lead.leadStage === stage).map(lead => html`
                        <div class="rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
                          <div class="text-sm font-semibold text-slate-900">${lead.leadName ?? ''}</div>
                          <div class="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                            <span class="rounded-full bg-slate-100 px-2 py-1">${lead.leadTemperature ?? ''}</span>
                            <span class="rounded-full bg-slate-100 px-2 py-1">${lead.leadUpdatedAt ?? ''}</span>
                          </div>
                          <button
                            class="mt-3 inline-flex items-center justify-center rounded-md border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700 transition hover:bg-blue-100"
                            @click=${() => this.handleNavigateToLeadDetailsClick({ leadId: lead.leadId })}
                          >
                            ${this.msg.navigateToLeadDetails}
                          </button>
                        </div>
                      `)}
                    </div>
                  </div>
                `)}
              </div>
            </div>

            <div class="flex flex-col gap-6">
              <div class="rounded-2xl bg-white p-6 shadow-sm">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-semibold text-slate-900">${this.msg.solicitarQualificacaoLeadLabel}</h2>
                  <button
                    class="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-emerald-300"
                    ?disabled=${solicitarQualificacaoLeadBusy}
                    @click=${this.handleSolicitarQualificacaoLeadClick}
                  >
                    ${solicitarQualificacaoLeadBusy ? this.msg.solicitarQualificacaoLeadLoading : this.msg.solicitarQualificacaoLeadLabel}
                  </button>
                </div>
                <div class="mt-4 space-y-2">
                  ${(this.leads ?? []).slice(0, 3).map(lead => html`
                    <div class="flex items-center justify-between rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                      <span class="font-medium text-slate-700">${lead.leadName ?? ''}</span>
                      <span class="rounded-full bg-slate-100 px-2 py-1 text-xs text-slate-500">${lead.leadStage ?? ''}</span>
                    </div>
                  `)}
                </div>
              </div>

              <div class="rounded-2xl bg-white p-6 shadow-sm">
                <div class="flex items-center justify-between">
                  <h2 class="text-lg font-semibold text-slate-900">${this.msg.loadingListarMudancasEtapaLead}</h2>
                  <div class="text-sm text-slate-500">${this.status ?? ''}</div>
                </div>
                <div class="mt-4 space-y-3">
                  ${(this.mudancasEtapaLead ?? []).map(change => html`
                    <div class="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm">
                      <div class="flex flex-wrap items-center justify-between gap-2">
                        <div class="text-xs font-semibold uppercase tracking-wide text-slate-500">${change.changedAt ?? ''}</div>
                        <div class="text-xs text-slate-500">${change.changedByBrokerId ?? ''}</div>
                      </div>
                      <div class="mt-2 flex items-center justify-between">
                        <span class="text-sm font-medium text-slate-700">${change.fromStage ?? ''}</span>
                        <span class="text-sm font-medium text-slate-700">${change.toStage ?? ''}</span>
                      </div>
                      <div class="mt-2 text-xs text-slate-500">${change.note ?? ''}</div>
                    </div>
                  `)}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    `;
  }
}
