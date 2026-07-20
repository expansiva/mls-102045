/// <mls fileReference="_102045_/l2/cafeFlow/web/desktop/page31/shiftManagement.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { CafeFlowShiftManagementBase } from '/_102045_/l2/cafeFlow/web/shared/shiftManagement.js';

@customElement('cafe-flow--web--desktop--page31--shift-management-102045')
export class CafeFlowDesktopPage31ShiftManagementPage extends CafeFlowShiftManagementBase {
  render() {
    const reportData = this.viewShiftClosingReportData;
    const reportLoading = this.viewShiftClosingReportState === 'loading';
    const openLoading = this.openShiftState === 'loading';
    const closeLoading = this.closeShiftState === 'loading';
    const hasSummary = this.openShiftOutput !== null || this.closeShiftOutput !== null;

    return html`
      <div class="min-h-full bg-slate-50">
        <div class="max-w-5xl mx-auto px-4 py-6 space-y-6">
          <h1 class="text-lg font-semibold text-slate-900">${this.msg['page.shiftManagement.title']}</h1>

          <!-- Section: Discover – Shift Closing Report -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-3">
            <div>
              <h2 class="text-lg font-semibold text-slate-900">${this.msg['sec.discover.title']}</h2>
              <p class="text-xs text-slate-500">${this.msg['org.shift.report.title']}</p>
            </div>

            ${reportLoading
              ? html`<div class="space-y-2 animate-pulse">
                  <div class="h-4 bg-slate-200 rounded w-3/4"></div>
                  <div class="h-4 bg-slate-200 rounded w-1/2"></div>
                  <div class="h-4 bg-slate-200 rounded w-2/3"></div>
                </div>`
              : reportData
                ? html`<dl class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                    <div>
                      <dt class="text-xs text-slate-500">${this.msg['field.shiftClosingReportId.label']}</dt>
                      <dd class="text-slate-900">${reportData.shiftClosingReportId}</dd>
                    </div>
                    <div>
                      <dt class="text-xs text-slate-500">${this.msg['field.shiftId.label']}</dt>
                      <dd class="text-slate-900">${reportData.shiftId}</dd>
                    </div>
                    <div>
                      <dt class="text-xs text-slate-500">${this.msg['field.totalApurado.label']}</dt>
                      <dd class="text-slate-900">
                        ${reportData.totalApurado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
                      </dd>
                    </div>
                    <div>
                      <dt class="text-xs text-slate-500">${this.msg['field.paidOrderCount.label']}</dt>
                      <dd class="text-slate-900">${reportData.paidOrderCount}</dd>
                    </div>
                    <div>
                      <dt class="text-xs text-slate-500">${this.msg['field.createdAt.label']}</dt>
                      <dd class="text-slate-900">${reportData.createdAt}</dd>
                    </div>
                    <div>
                      <dt class="text-xs text-slate-500">${this.msg['field.updatedAt.label']}</dt>
                      <dd class="text-slate-900">${reportData.updatedAt}</dd>
                    </div>
                  </dl>`
                : html`<p class="text-sm text-slate-500">${this.msg['empty.report']}</p>`}

            <div>
              <button
                type="button"
                class="rounded px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                ?disabled=${reportLoading}
                @click=${this.handleViewShiftClosingReportClick}
              >
                ${reportLoading ? '...' : this.msg['action.viewShiftClosingReport.label']}
              </button>
            </div>
          </section>

          <!-- Section: Execute – Shift Lifecycle Actions -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-4">
            <div>
              <h2 class="text-lg font-semibold text-slate-900">${this.msg['sec.execute.title']}</h2>
              <p class="text-xs text-slate-500">${this.msg['org.shift.lifecycle.title']}</p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <!-- Intent: openShift (commandForm) -->
              <div class="rounded border border-slate-200 p-3 space-y-3">
                <h3 class="text-sm font-medium text-slate-900">${this.msg['intent.openShift.title']}</h3>

                <div class="space-y-1">
                  <label class="text-xs font-medium text-slate-900" for="open-shift-notes">
                    ${this.msg['field.notes.label']}
                  </label>
                  <textarea
                    id="open-shift-notes"
                    class="w-full rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white"
                    rows="3"
                    .value=${this.openShiftNotes}
                    @input=${this.handleOpenShiftNotesChange}
                  ></textarea>
                </div>

                <button
                  type="button"
                  class="rounded px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                  ?disabled=${openLoading}
                  @click=${this.handleOpenShiftClick}
                >
                  ${openLoading ? '...' : this.msg['action.openShift.label']}
                </button>

                ${this.openShiftState === 'success'
                  ? html`<div class="rounded p-2 text-xs text-green-600">${this.msg['action.openShift.success']}</div>`
                  : null}
                ${this.openShiftState === 'error'
                  ? html`<div class="rounded p-2 text-xs text-red-600">
                      ${this.openShiftError || this.msg['action.openShift.error']}
                    </div>`
                  : null}
              </div>

              <!-- Intent: closeShift (commandForm) -->
              <div class="rounded border border-slate-200 p-3 space-y-3">
                <h3 class="text-sm font-medium text-slate-900">${this.msg['intent.closeShift.title']}</h3>

                <div class="space-y-1">
                  <label class="text-xs font-medium text-slate-900" for="close-shift-total">
                    ${this.msg['field.totalApurado.label']} <span class="text-red-600">*</span>
                  </label>
                  <input
                    id="close-shift-total"
                    type="number"
                    step="0.01"
                    class="w-full rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white"
                    .value=${this.closeShiftTotalApurado}
                    @input=${this.handleCloseShiftTotalApuradoChange}
                  />
                </div>

                <div class="space-y-1">
                  <label class="text-xs font-medium text-slate-900" for="close-shift-notes">
                    ${this.msg['field.notes.label']}
                  </label>
                  <textarea
                    id="close-shift-notes"
                    class="w-full rounded border border-slate-200 px-3 py-2 text-sm text-slate-900 bg-white"
                    rows="3"
                    .value=${this.closeShiftNotes}
                    @input=${this.handleCloseShiftNotesChange}
                  ></textarea>
                </div>

                <button
                  type="button"
                  class="rounded px-4 py-2 text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                  ?disabled=${closeLoading}
                  @click=${this.handleCloseShiftClick}
                >
                  ${closeLoading ? '...' : this.msg['action.closeShift.label']}
                </button>

                ${this.closeShiftState === 'success'
                  ? html`<div class="rounded p-2 text-xs text-green-600">${this.msg['action.closeShift.success']}</div>`
                  : null}
                ${this.closeShiftState === 'error'
                  ? html`<div class="rounded p-2 text-xs text-red-600">
                      ${this.closeShiftError || this.msg['action.closeShift.error']}
                    </div>`
                  : null}
              </div>
            </div>
          </section>

          <!-- Section: Review – Shift Summary -->
          <section class="rounded-lg border border-slate-200 bg-white p-4 space-y-3">
            <div>
              <h2 class="text-lg font-semibold text-slate-900">${this.msg['sec.review.title']}</h2>
              <p class="text-xs text-slate-500">${this.msg['org.summary.title']}</p>
            </div>

            ${hasSummary
              ? html`<dl class="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                  ${this.openShiftOutput
                    ? html`
                        <div>
                          <dt class="text-xs text-slate-500">${this.msg['field.shiftId.label']}</dt>
                          <dd class="text-slate-900">${this.openShiftOutput.shiftId}</dd>
                        </div>
                        <div>
                          <dt class="text-xs text-slate-500">${this.msg['field.status.label']}</dt>
                          <dd class="text-slate-900">
                            ${this.closeShiftOutput ? this.closeShiftOutput.status : this.openShiftOutput.status}
                          </dd>
                        </div>
                        <div>
                          <dt class="text-xs text-slate-500">${this.msg['field.openedAt.label']}</dt>
                          <dd class="text-slate-900">${this.openShiftOutput.openedAt}</dd>
                        </div>
                        <div>
                          <dt class="text-xs text-slate-500">${this.msg['field.openedBy.label']}</dt>
                          <dd class="text-slate-900">${this.openShiftOutput.openedBy}</dd>
                        </div>
                      `
                    : null}
                  ${this.closeShiftOutput
                    ? html`
                        <div>
                          <dt class="text-xs text-slate-500">${this.msg['field.closedAt.label']}</dt>
                          <dd class="text-slate-900">${this.closeShiftOutput.closedAt}</dd>
                        </div>
                        <div>
                          <dt class="text-xs text-slate-500">${this.msg['field.closedBy.label']}</dt>
                          <dd class="text-slate-900">${this.closeShiftOutput.closedBy}</dd>
                        </div>
                        <div>
                          <dt class="text-xs text-slate-500">${this.msg['field.totalApurado.label']}</dt>
                          <dd class="text-slate-900">
                            ${this.closeShiftOutput.totalApurado.toLocaleString('pt-BR', {
                              style: 'currency',
                              currency: 'BRL',
                            })}
                          </dd>
                        </div>
                        <div>
                          <dt class="text-xs text-slate-500">${this.msg['field.notes.label']}</dt>
                          <dd class="text-slate-900">${this.closeShiftOutput.notes}</dd>
                        </div>
                      `
                    : null}
                </dl>`
              : html`<p class="text-sm text-slate-500">${this.msg['empty.summary']}</p>`}
          </section>
        </div>
      </div>
    `;
  }
}
