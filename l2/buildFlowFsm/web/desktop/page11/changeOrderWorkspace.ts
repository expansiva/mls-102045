/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/changeOrderWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmChangeOrderWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.js';
import type {
  CmdCreateChangeOrderOutput,
  CmdUpdateChangeOrderOutput,
  CmdUpdateChangeOrderStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'page.title': 'Change Orders',
  'page.subtitle': 'Document, edit, and approve change orders, applying cost impact to the job.',
  'create.section': s_en['section.changeOrderWorkspace.sec-create-change-order.title'],
  'create.action': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
  'create.field.projectId': 'Project',
  'create.field.title': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label'],
  'create.field.description': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label'],
  'create.field.impactType': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label'],
  'create.field.costAdjustment': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label'],
  'create.field.scheduleAdjustmentDays': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'create.project.hint': 'Select the project this change order belongs to.',
  'create.project.empty': 'No project selected',
  'create.loading': 'Creating…',
  'create.success': s_en['action.cmdCreateChangeOrder.success'],
  'create.error': s_en['action.cmdCreateChangeOrder.error'],
  'create.result': 'Change order created',
  'edit.section': s_en['section.changeOrderWorkspace.sec-edit-change-order.title'],
  'edit.action': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder'],
  'edit.field.title': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'edit.field.description': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'edit.field.impactType': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'edit.field.costAdjustment': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'edit.field.scheduleAdjustmentDays': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'edit.context': 'Editing change order',
  'edit.missing': 'Open a change order to edit its details.',
  'edit.loading': 'Saving…',
  'edit.success': s_en['action.cmdUpdateChangeOrder.success'],
  'edit.error': s_en['action.cmdUpdateChangeOrder.error'],
  'edit.result': 'Change order updated',
  'review.section': s_en['section.changeOrderWorkspace.sec-review-change-order.title'],
  'review.action': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus'],
  'review.field.status': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label'],
  'review.field.rejectionReason': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label'],
  'review.context': 'Reviewing change order',
  'review.missing': 'Open a change order to review and update its status.',
  'review.loading': 'Updating status…',
  'review.success': s_en['action.cmdUpdateChangeOrderStatus.success'],
  'review.error': s_en['action.cmdUpdateChangeOrderStatus.error'],
  'review.result': 'Status updated',
  'feedback.dismiss': 'Dismiss',
  'label.id': 'ID',
  'label.status': 'Status',
  'label.costImpact': 'Cost impact',
  'label.scheduleImpact': 'Schedule impact (days)',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'page.title': 'Ordens de Mudança',
  'page.subtitle': 'Documente, edite e aprove ordens de mudança, aplicando o impacto de custo ao trabalho.',
  'create.section': s_pt_br['section.changeOrderWorkspace.sec-create-change-order.title'],
  'create.action': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
  'create.field.projectId': 'Projeto',
  'create.field.title': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label'],
  'create.field.description': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label'],
  'create.field.impactType': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label'],
  'create.field.costAdjustment': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label'],
  'create.field.scheduleAdjustmentDays': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'create.project.hint': 'Selecione o projeto ao qual esta ordem de mudança pertence.',
  'create.project.empty': 'Nenhum projeto selecionado',
  'create.loading': 'Criando…',
  'create.success': s_pt_br['action.cmdCreateChangeOrder.success'],
  'create.error': s_pt_br['action.cmdCreateChangeOrder.error'],
  'create.result': 'Ordem de mudança criada',
  'edit.section': s_pt_br['section.changeOrderWorkspace.sec-edit-change-order.title'],
  'edit.action': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder'],
  'edit.field.title': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'edit.field.description': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'edit.field.impactType': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'edit.field.costAdjustment': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'edit.field.scheduleAdjustmentDays': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'edit.context': 'Editando ordem de mudança',
  'edit.missing': 'Abra uma ordem de mudança para editar os detalhes.',
  'edit.loading': 'Salvando…',
  'edit.success': s_pt_br['action.cmdUpdateChangeOrder.success'],
  'edit.error': s_pt_br['action.cmdUpdateChangeOrder.error'],
  'edit.result': 'Ordem de mudança atualizada',
  'review.section': s_pt_br['section.changeOrderWorkspace.sec-review-change-order.title'],
  'review.action': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus'],
  'review.field.status': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label'],
  'review.field.rejectionReason': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label'],
  'review.context': 'Revisando ordem de mudança',
  'review.missing': 'Abra uma ordem de mudança para revisar e atualizar o status.',
  'review.loading': 'Atualizando status…',
  'review.success': s_pt_br['action.cmdUpdateChangeOrderStatus.success'],
  'review.error': s_pt_br['action.cmdUpdateChangeOrderStatus.error'],
  'review.result': 'Status atualizado',
  'feedback.dismiss': 'Dispensar',
  'label.id': 'ID',
  'label.status': 'Status',
  'label.costImpact': 'Impacto de custo',
  'label.scheduleImpact': 'Impacto no cronograma (dias)',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'page.title': 'Órdenes de Cambio',
  'page.subtitle': 'Documente, edite y apruebe órdenes de cambio, aplicando el impacto de costo al trabajo.',
  'create.section': s_es['section.changeOrderWorkspace.sec-create-change-order.title'],
  'create.action': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
  'create.field.projectId': 'Proyecto',
  'create.field.title': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label'],
  'create.field.description': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label'],
  'create.field.impactType': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label'],
  'create.field.costAdjustment': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label'],
  'create.field.scheduleAdjustmentDays': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'create.project.hint': 'Seleccione el proyecto al que pertenece esta orden de cambio.',
  'create.project.empty': 'Ningún proyecto seleccionado',
  'create.loading': 'Creando…',
  'create.success': s_es['action.cmdCreateChangeOrder.success'],
  'create.error': s_es['action.cmdCreateChangeOrder.error'],
  'create.result': 'Orden de cambio creada',
  'edit.section': s_es['section.changeOrderWorkspace.sec-edit-change-order.title'],
  'edit.action': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder'],
  'edit.field.title': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'edit.field.description': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'edit.field.impactType': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'edit.field.costAdjustment': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'edit.field.scheduleAdjustmentDays': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'edit.context': 'Editando orden de cambio',
  'edit.missing': 'Abra una orden de cambio para editar sus detalles.',
  'edit.loading': 'Guardando…',
  'edit.success': s_es['action.cmdUpdateChangeOrder.success'],
  'edit.error': s_es['action.cmdUpdateChangeOrder.error'],
  'edit.result': 'Orden de cambio actualizada',
  'review.section': s_es['section.changeOrderWorkspace.sec-review-change-order.title'],
  'review.action': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.action.cmdUpdateChangeOrderStatus'],
  'review.field.status': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.status.label'],
  'review.field.rejectionReason': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label'],
  'review.context': 'Revisando orden de cambio',
  'review.missing': 'Abra una orden de cambio para revisar y actualizar su estado.',
  'review.loading': 'Actualizando estado…',
  'review.success': s_es['action.cmdUpdateChangeOrderStatus.success'],
  'review.error': s_es['action.cmdUpdateChangeOrderStatus.error'],
  'review.result': 'Estado actualizado',
  'feedback.dismiss': 'Descartar',
  'label.id': 'ID',
  'label.status': 'Estado',
  'label.costImpact': 'Impacto de costo',
  'label.scheduleImpact': 'Impacto en cronograma (días)',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page11--change-order-workspace-102045')
export class BuildFlowFsmDesktopPage11ChangeOrderWorkspacePage extends BuildFlowFsmChangeOrderWorkspaceBase {
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
  render(): TemplateResult {
    const msg = this.msg;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          <header class="space-y-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['page.subtitle']}</p>
          </header>
          ${this.renderCreateSection()}
          ${this.renderEditSection()}
          ${this.renderReviewSection()}
        </div>
      </div>
    `;
  }

  renderCreateSection(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.cmdCreateChangeOrderState === 'loading';
    const canSubmit = Boolean(this.cmdCreateChangeOrderProjectId) && !isLoading;
    const output: CmdCreateChangeOrderOutput | null = this.cmdCreateChangeOrderOutput;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4 shadow-sm">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['create.section']}</h2>

        <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2 space-y-1">
          <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['create.field.projectId']}</p>
          ${this.cmdCreateChangeOrderProjectId
            ? html`<p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${this.cmdCreateChangeOrderProjectId}</p>`
            : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.project.empty']}</p>`}
          <p class="text-xs text-[var(--text-muted,#64748b)]">${msg['create.project.hint']}</p>
          <label class="sr-only" for="create-project-id">${msg['create.field.projectId']}</label>
          <input
            id="create-project-id"
            type="text"
            class="mt-1 w-full max-w-md rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
            .value=${this.cmdCreateChangeOrderProjectId}
            @input=${(event: Event) => this.handleCmdCreateChangeOrderProjectIdChange(event)}
            ?disabled=${isLoading}
          />
        </div>

        <form class="grid grid-cols-1 md:grid-cols-2 gap-4" @submit=${(event: Event) => this.handleCmdCreateChangeOrderClick(event)}>
          <label class="flex flex-col gap-1 md:col-span-2">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['create.field.title']}</span>
            <input
              type="text"
              required
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.cmdCreateChangeOrderTitle}
              @input=${(event: Event) => this.handleCmdCreateChangeOrderTitleChange(event)}
              ?disabled=${isLoading}
            />
          </label>

          <label class="flex flex-col gap-1 md:col-span-2">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['create.field.description']}</span>
            <textarea
              required
              rows="3"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.cmdCreateChangeOrderDescription}
              @input=${(event: Event) => this.handleCmdCreateChangeOrderDescriptionChange(event)}
              ?disabled=${isLoading}
            ></textarea>
          </label>

          <label class="flex flex-col gap-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['create.field.impactType']}</span>
            <input
              type="text"
              required
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.cmdCreateChangeOrderImpactType}
              @input=${(event: Event) => this.handleCmdCreateChangeOrderImpactTypeChange(event)}
              ?disabled=${isLoading}
            />
          </label>

          <label class="flex flex-col gap-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['create.field.costAdjustment']}</span>
            <input
              type="number"
              required
              step="any"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.cmdCreateChangeOrderCostAdjustment}
              @input=${(event: Event) => this.handleCmdCreateChangeOrderCostAdjustmentChange(event)}
              ?disabled=${isLoading}
            />
          </label>

          <label class="flex flex-col gap-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['create.field.scheduleAdjustmentDays']}</span>
            <input
              type="number"
              step="1"
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
              .value=${this.cmdCreateChangeOrderScheduleAdjustmentDays}
              @input=${(event: Event) => this.handleCmdCreateChangeOrderScheduleAdjustmentDaysChange(event)}
              ?disabled=${isLoading}
            />
          </label>

          <div class="md:col-span-2 flex items-center gap-3">
            <button
              type="submit"
              class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${!canSubmit}
            >
              ${isLoading ? msg['create.loading'] : msg['create.action']}
            </button>
          </div>
        </form>

        ${this.renderFeedback(
          this.cmdCreateChangeOrderState,
          this.cmdCreateChangeOrderError,
          msg['create.success'],
          msg['create.error'],
          () => {
            this.cmdCreateChangeOrderState = 'idle';
            this.cmdCreateChangeOrderError = '';
          },
        )}

        ${output
          ? html`
              <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-1 text-sm">
                <p class="font-medium text-[var(--text-strong,#0f172a)]">${msg['create.result']}</p>
                ${'changeOrderId' in output && output.changeOrderId
                  ? html`<p><span class="text-[var(--text-muted,#64748b)]">${msg['label.id']}:</span> ${String(output.changeOrderId)}</p>`
                  : nothing}
                ${'status' in output && output.status
                  ? html`<p><span class="text-[var(--text-muted,#64748b)]">${msg['label.status']}:</span> ${String(output.status)}</p>`
                  : nothing}
              </div>
            `
          : nothing}
      </section>
    `;
  }

  renderEditSection(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.cmdUpdateChangeOrderState === 'loading';
    const hasTarget = Boolean(this.cmdUpdateChangeOrderChangeOrderId);
    const canSubmit = hasTarget && !isLoading;
    const output: CmdUpdateChangeOrderOutput | null = this.cmdUpdateChangeOrderOutput;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4 shadow-sm">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['edit.section']}</h2>

        ${hasTarget
          ? html`
              <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2">
                <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['edit.context']}</p>
                <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${this.cmdUpdateChangeOrderChangeOrderId}</p>
              </div>

              <form class="grid grid-cols-1 md:grid-cols-2 gap-4" @submit=${(event: Event) => this.handleCmdUpdateChangeOrderClick(event)}>
                <label class="flex flex-col gap-1 md:col-span-2">
                  <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['edit.field.title']}</span>
                  <input
                    type="text"
                    required
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.cmdUpdateChangeOrderTitle}
                    @input=${(event: Event) => this.handleCmdUpdateChangeOrderTitleChange(event)}
                    ?disabled=${isLoading}
                  />
                </label>

                <label class="flex flex-col gap-1 md:col-span-2">
                  <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['edit.field.description']}</span>
                  <textarea
                    required
                    rows="3"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.cmdUpdateChangeOrderDescription}
                    @input=${(event: Event) => this.handleCmdUpdateChangeOrderDescriptionChange(event)}
                    ?disabled=${isLoading}
                  ></textarea>
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['edit.field.impactType']}</span>
                  <input
                    type="text"
                    required
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.cmdUpdateChangeOrderImpactType}
                    @input=${(event: Event) => this.handleCmdUpdateChangeOrderImpactTypeChange(event)}
                    ?disabled=${isLoading}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['edit.field.costAdjustment']}</span>
                  <input
                    type="number"
                    required
                    step="any"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.cmdUpdateChangeOrderCostAdjustment}
                    @input=${(event: Event) => this.handleCmdUpdateChangeOrderCostAdjustmentChange(event)}
                    ?disabled=${isLoading}
                  />
                </label>

                <label class="flex flex-col gap-1">
                  <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['edit.field.scheduleAdjustmentDays']}</span>
                  <input
                    type="number"
                    step="1"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.cmdUpdateChangeOrderScheduleAdjustmentDays}
                    @input=${(event: Event) => this.handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange(event)}
                    ?disabled=${isLoading}
                  />
                </label>

                <div class="md:col-span-2 flex items-center gap-3">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                    ?disabled=${!canSubmit}
                  >
                    ${isLoading ? msg['edit.loading'] : msg['edit.action']}
                  </button>
                </div>
              </form>
            `
          : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['edit.missing']}</p>`}

        ${this.renderFeedback(
          this.cmdUpdateChangeOrderState,
          this.cmdUpdateChangeOrderError,
          msg['edit.success'],
          msg['edit.error'],
          () => {
            this.cmdUpdateChangeOrderState = 'idle';
            this.cmdUpdateChangeOrderError = '';
          },
        )}

        ${output
          ? html`
              <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-1 text-sm">
                <p class="font-medium text-[var(--text-strong,#0f172a)]">${msg['edit.result']}</p>
                ${'changeOrderId' in output && output.changeOrderId
                  ? html`<p><span class="text-[var(--text-muted,#64748b)]">${msg['label.id']}:</span> ${String(output.changeOrderId)}</p>`
                  : nothing}
                ${'status' in output && output.status
                  ? html`<p><span class="text-[var(--text-muted,#64748b)]">${msg['label.status']}:</span> ${String(output.status)}</p>`
                  : nothing}
              </div>
            `
          : nothing}
      </section>
    `;
  }

  renderReviewSection(): TemplateResult {
    const msg = this.msg;
    const isLoading = this.cmdUpdateChangeOrderStatusState === 'loading';
    const hasTarget = Boolean(this.cmdUpdateChangeOrderStatusChangeOrderId);
    const canSubmit = hasTarget && !isLoading;
    const output: CmdUpdateChangeOrderStatusOutput | null = this.cmdUpdateChangeOrderStatusOutput;

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 space-y-4 shadow-sm">
        <h2 class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${msg['review.section']}</h2>

        ${hasTarget
          ? html`
              <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-3 py-2">
                <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['review.context']}</p>
                <p class="text-sm font-medium text-[var(--text-default,#0f172a)]">${this.cmdUpdateChangeOrderStatusChangeOrderId}</p>
              </div>

              <form class="grid grid-cols-1 md:grid-cols-2 gap-4" @submit=${(event: Event) => this.handleCmdUpdateChangeOrderStatusClick(event)}>
                <label class="flex flex-col gap-1">
                  <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['review.field.status']}</span>
                  <input
                    type="text"
                    required
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.cmdUpdateChangeOrderStatusStatus}
                    @input=${(event: Event) => this.handleCmdUpdateChangeOrderStatusStatusChange(event)}
                    ?disabled=${isLoading}
                  />
                </label>

                <label class="flex flex-col gap-1 md:col-span-2">
                  <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">${msg['review.field.rejectionReason']}</span>
                  <textarea
                    rows="2"
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                    .value=${this.cmdUpdateChangeOrderStatusRejectionReason}
                    @input=${(event: Event) => this.handleCmdUpdateChangeOrderStatusRejectionReasonChange(event)}
                    ?disabled=${isLoading}
                  ></textarea>
                </label>

                <div class="md:col-span-2 flex items-center gap-3">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                    ?disabled=${!canSubmit}
                  >
                    ${isLoading ? msg['review.loading'] : msg['review.action']}
                  </button>
                </div>
              </form>
            `
          : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['review.missing']}</p>`}

        ${this.renderFeedback(
          this.cmdUpdateChangeOrderStatusState,
          this.cmdUpdateChangeOrderStatusError,
          msg['review.success'],
          msg['review.error'],
          () => {
            this.cmdUpdateChangeOrderStatusState = 'idle';
            this.cmdUpdateChangeOrderStatusError = '';
          },
        )}

        ${output
          ? html`
              <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-1 text-sm">
                <p class="font-medium text-[var(--text-strong,#0f172a)]">${msg['review.result']}</p>
                ${'changeOrderId' in output && output.changeOrderId
                  ? html`<p><span class="text-[var(--text-muted,#64748b)]">${msg['label.id']}:</span> ${String(output.changeOrderId)}</p>`
                  : nothing}
                ${'status' in output && output.status
                  ? html`<p><span class="text-[var(--text-muted,#64748b)]">${msg['label.status']}:</span> ${String(output.status)}</p>`
                  : nothing}
              </div>
            `
          : nothing}
      </section>
    `;
  }

  renderFeedback(
    state: 'idle' | 'loading' | 'success' | 'error',
    errorText: string,
    successText: string,
    errorFallback: string,
    onDismiss: () => void,
  ): TemplateResult | typeof nothing {
    const msg = this.msg;
    if (state !== 'success' && state !== 'error') {
      return nothing;
    }
    const isSuccess = state === 'success';
    const text = isSuccess ? successText : (errorText || errorFallback);
    const bg = isSuccess
      ? 'bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]'
      : 'bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]';
    return html`
      <div class="flex items-start justify-between gap-3 rounded-md px-3 py-2 text-sm ${bg}" role="status">
        <p>${text}</p>
        <button
          type="button"
          class="shrink-0 underline text-inherit"
          @click=${(event: Event) => {
            event.preventDefault();
            onDismiss();
            this.requestUpdate();
          }}
        >
          ${msg['feedback.dismiss']}
        </button>
      </div>
    `;
  }
}
