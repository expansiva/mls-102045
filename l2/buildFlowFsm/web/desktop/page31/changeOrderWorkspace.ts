/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/changeOrderWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  BuildFlowFsmChangeOrderWorkspaceBase,
  messages as sharedMessages,
} from '/_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.js';
import type {
  CmdCreateChangeOrderOutput,
  CmdUpdateChangeOrderOutput,
  CmdUpdateChangeOrderStatusOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/changeOrderWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'page.subtitle': 'Document cost and schedule impacts, then approve or reject the change order.',
  'header.untitled': 'Change order',
  'header.status': 'Status',
  'header.status.unknown': 'Not set',
  'header.fact.impact': 'Impact',
  'header.fact.cost': 'Cost adjustment',
  'header.fact.schedule': 'Schedule (days)',
  'header.fact.rejection': 'Rejection reason',
  'tab.details': 'Details',
  'tab.create': 'New change order',
  'details.heading': 'Change order details',
  'details.save': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder'],
  'details.saving': 'Saving details…',
  'details.success': s_en['action.cmdUpdateChangeOrder.success'],
  'details.error': s_en['action.cmdUpdateChangeOrder.error'],
  'field.title': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'field.description': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'field.impactType': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'field.costAdjustment': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'field.scheduleAdjustmentDays': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'field.required': 'Required',
  'create.heading': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title'],
  'create.save': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
  'create.saving': 'Creating…',
  'create.success': s_en['action.cmdCreateChangeOrder.success'],
  'create.error': s_en['action.cmdCreateChangeOrder.error'],
  'create.projectContext': 'Project is taken from the current selection.',
  'create.projectMissing': 'Select a project before creating a change order.',
  'create.field.title': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label'],
  'create.field.description': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label'],
  'create.field.impactType': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label'],
  'create.field.costAdjustment': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label'],
  'create.field.scheduleAdjustmentDays': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'status.actions': 'Decision',
  'status.approve': 'Approve',
  'status.reject': 'Reject',
  'status.approving': 'Approving…',
  'status.rejecting': 'Rejecting…',
  'status.confirmApprove': 'Approve this change order and apply its cost and schedule impact?',
  'status.confirmReject': 'Reject this change order?',
  'status.rejectionReason': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label'],
  'status.rejectionHint': 'Explain why this change order is being rejected.',
  'status.success': s_en['action.cmdUpdateChangeOrderStatus.success'],
  'status.error': s_en['action.cmdUpdateChangeOrderStatus.error'],
  'status.closed': 'This change order is already closed.',
  'status.needRecord': 'Open a change order to review and decide.',
  'empty.noRecord': 'No change order is open. Create one or open an existing record from the project.',
  'feedback.dismiss': 'Dismiss',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'page.subtitle': 'Documente impactos de custo e cronograma e aprove ou rejeite a ordem de mudança.',
  'header.untitled': 'Ordem de mudança',
  'header.status': 'Status',
  'header.status.unknown': 'Não definido',
  'header.fact.impact': 'Impacto',
  'header.fact.cost': 'Ajuste de custo',
  'header.fact.schedule': 'Cronograma (dias)',
  'header.fact.rejection': 'Motivo da rejeição',
  'tab.details': 'Detalhes',
  'tab.create': 'Nova ordem de mudança',
  'details.heading': 'Detalhes da ordem de mudança',
  'details.save': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder'],
  'details.saving': 'Salvando detalhes…',
  'details.success': s_pt_br['action.cmdUpdateChangeOrder.success'],
  'details.error': s_pt_br['action.cmdUpdateChangeOrder.error'],
  'field.title': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'field.description': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'field.impactType': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'field.costAdjustment': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'field.scheduleAdjustmentDays': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'field.required': 'Obrigatório',
  'create.heading': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title'],
  'create.save': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
  'create.saving': 'Criando…',
  'create.success': s_pt_br['action.cmdCreateChangeOrder.success'],
  'create.error': s_pt_br['action.cmdCreateChangeOrder.error'],
  'create.projectContext': 'O projeto vem da seleção atual.',
  'create.projectMissing': 'Selecione um projeto antes de criar uma ordem de mudança.',
  'create.field.title': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label'],
  'create.field.description': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label'],
  'create.field.impactType': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label'],
  'create.field.costAdjustment': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label'],
  'create.field.scheduleAdjustmentDays': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'status.actions': 'Decisão',
  'status.approve': 'Aprovar',
  'status.reject': 'Rejeitar',
  'status.approving': 'Aprovando…',
  'status.rejecting': 'Rejeitando…',
  'status.confirmApprove': 'Aprovar esta ordem de mudança e aplicar o impacto de custo e cronograma?',
  'status.confirmReject': 'Rejeitar esta ordem de mudança?',
  'status.rejectionReason': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label'],
  'status.rejectionHint': 'Explique por que esta ordem de mudança está sendo rejeitada.',
  'status.success': s_pt_br['action.cmdUpdateChangeOrderStatus.success'],
  'status.error': s_pt_br['action.cmdUpdateChangeOrderStatus.error'],
  'status.closed': 'Esta ordem de mudança já está encerrada.',
  'status.needRecord': 'Abra uma ordem de mudança para revisar e decidir.',
  'empty.noRecord': 'Nenhuma ordem de mudança aberta. Crie uma ou abra um registro existente do projeto.',
  'feedback.dismiss': 'Dispensar',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'page.subtitle': 'Documente impactos de costo y cronograma y apruebe o rechace la orden de cambio.',
  'header.untitled': 'Orden de cambio',
  'header.status': 'Estado',
  'header.status.unknown': 'Sin definir',
  'header.fact.impact': 'Impacto',
  'header.fact.cost': 'Ajuste de costo',
  'header.fact.schedule': 'Cronograma (días)',
  'header.fact.rejection': 'Razón de rechazo',
  'tab.details': 'Detalles',
  'tab.create': 'Nueva orden de cambio',
  'details.heading': 'Detalles de la orden de cambio',
  'details.save': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.action.cmdUpdateChangeOrder'],
  'details.saving': 'Guardando detalles…',
  'details.success': s_es['action.cmdUpdateChangeOrder.success'],
  'details.error': s_es['action.cmdUpdateChangeOrder.error'],
  'field.title': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'field.description': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'field.impactType': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'field.costAdjustment': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'field.scheduleAdjustmentDays': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'field.required': 'Obligatorio',
  'create.heading': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.title'],
  'create.save': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.action.cmdCreateChangeOrder'],
  'create.saving': 'Creando…',
  'create.success': s_es['action.cmdCreateChangeOrder.success'],
  'create.error': s_es['action.cmdCreateChangeOrder.error'],
  'create.projectContext': 'El proyecto se toma de la selección actual.',
  'create.projectMissing': 'Seleccione un proyecto antes de crear una orden de cambio.',
  'create.field.title': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label'],
  'create.field.description': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label'],
  'create.field.impactType': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label'],
  'create.field.costAdjustment': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label'],
  'create.field.scheduleAdjustmentDays': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'status.actions': 'Decisión',
  'status.approve': 'Aprobar',
  'status.reject': 'Rechazar',
  'status.approving': 'Aprobando…',
  'status.rejecting': 'Rechazando…',
  'status.confirmApprove': '¿Aprobar esta orden de cambio y aplicar su impacto de costo y cronograma?',
  'status.confirmReject': '¿Rechazar esta orden de cambio?',
  'status.rejectionReason': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label'],
  'status.rejectionHint': 'Explique por qué se rechaza esta orden de cambio.',
  'status.success': s_es['action.cmdUpdateChangeOrderStatus.success'],
  'status.error': s_es['action.cmdUpdateChangeOrderStatus.error'],
  'status.closed': 'Esta orden de cambio ya está cerrada.',
  'status.needRecord': 'Abra una orden de cambio para revisar y decidir.',
  'empty.noRecord': 'No hay una orden de cambio abierta. Cree una o abra un registro existente del proyecto.',
  'feedback.dismiss': 'Descartar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page31--change-order-workspace-102045')
export class BuildFlowFsmDesktopPage31ChangeOrderWorkspacePage extends BuildFlowFsmChangeOrderWorkspaceBase {
  #msgLang: string | null = null;
  #msgCache: PageMessageType = pageFallback;
  #activeTab: 'details' | 'create' = 'details';
  #rejectMode: boolean = false;

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
    const recordId = this.cmdUpdateChangeOrderChangeOrderId || this.cmdUpdateChangeOrderStatusChangeOrderId;
    const hasRecord = Boolean(recordId);
    if (!hasRecord && this.#activeTab === 'details') {
      this.#activeTab = 'create';
    }
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)] p-6 md:p-8">
        <p class="text-sm text-[var(--text-muted,#64748b)] mb-6 max-w-3xl">${msg['page.subtitle']}</p>
        ${hasRecord ? this.renderIdentityHeader() : nothing}
        ${this.renderTabRail(hasRecord)}
        <div class="mt-4">
          ${this.#activeTab === 'details' && hasRecord ? this.renderDetailsTab() : nothing}
          ${this.#activeTab === 'create' ? this.renderCreateTab() : nothing}
          ${!hasRecord && this.#activeTab !== 'create'
            ? html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['empty.noRecord']}</p>`
            : nothing}
        </div>
      </div>
    `;
  }

  private readOutputRecord(
    output:
      | CmdCreateChangeOrderOutput
      | CmdUpdateChangeOrderOutput
      | CmdUpdateChangeOrderStatusOutput
      | null,
  ): Record<string, unknown> {
    if (output && typeof output === 'object') {
      return output as unknown as  Record<string, unknown>;
    }
    return {};
  }

  private readStringField(record: Record<string, unknown>, key: string): string {
    const value = record[key];
    if (typeof value === 'string') {
      return value;
    }
    if (typeof value === 'number' && Number.isFinite(value)) {
      return String(value);
    }
    return '';
  }

  private resolveIdentity() {
    const updateOut = this.readOutputRecord(this.cmdUpdateChangeOrderOutput);
    const statusOut = this.readOutputRecord(this.cmdUpdateChangeOrderStatusOutput);
    const createOut = this.readOutputRecord(this.cmdCreateChangeOrderOutput);
    const title =
      this.cmdUpdateChangeOrderTitle ||
      this.readStringField(updateOut, 'title') ||
      this.readStringField(statusOut, 'title') ||
      this.readStringField(createOut, 'title') ||
      '';
    const status =
      this.readStringField(statusOut, 'status') ||
      this.cmdUpdateChangeOrderStatusStatus ||
      this.readStringField(updateOut, 'status') ||
      this.readStringField(createOut, 'status') ||
      '';
    const impactType =
      this.cmdUpdateChangeOrderImpactType ||
      this.readStringField(updateOut, 'impactType') ||
      this.readStringField(statusOut, 'impactType') ||
      this.readStringField(createOut, 'impactType') ||
      '';
    const costAdjustment =
      this.cmdUpdateChangeOrderCostAdjustment ||
      this.readStringField(updateOut, 'costAdjustment') ||
      this.readStringField(statusOut, 'costAdjustment') ||
      this.readStringField(createOut, 'costAdjustment') ||
      '';
    const scheduleAdjustmentDays =
      this.cmdUpdateChangeOrderScheduleAdjustmentDays ||
      this.readStringField(updateOut, 'scheduleAdjustmentDays') ||
      this.readStringField(statusOut, 'scheduleAdjustmentDays') ||
      this.readStringField(createOut, 'scheduleAdjustmentDays') ||
      '';
    const rejectionReason =
      this.cmdUpdateChangeOrderStatusRejectionReason ||
      this.readStringField(statusOut, 'rejectionReason') ||
      '';
    const description =
      this.cmdUpdateChangeOrderDescription ||
      this.readStringField(updateOut, 'description') ||
      this.readStringField(statusOut, 'description') ||
      '';
    return {
      title,
      status,
      impactType,
      costAdjustment,
      scheduleAdjustmentDays,
      rejectionReason,
      description,
    };
  }

  private statusTone(status: string): { bg: string; text: string } {
    const normalized = status.trim().toLowerCase();
    if (normalized === 'approved' || normalized === 'aprovado') {
      return {
        bg: 'bg-[var(--status-success-bg,#dcfce7)]',
        text: 'text-[var(--status-success-text,#166534)]',
      };
    }
    if (normalized === 'rejected' || normalized === 'rejeitado' || normalized === 'rechazado') {
      return {
        bg: 'bg-[var(--status-error-bg,#fee2e2)]',
        text: 'text-[var(--status-error-text,#991b1b)]',
      };
    }
    if (normalized === 'pending' || normalized === 'submitted' || normalized === 'in_review') {
      return {
        bg: 'bg-[var(--status-warning-bg,#fef3c7)]',
        text: 'text-[var(--status-warning-text,#92400e)]',
      };
    }
    return {
      bg: 'bg-[var(--status-neutral-bg,#e2e8f0)]',
      text: 'text-[var(--status-neutral-text,#334155)]',
    };
  }

  private isTerminalStatus(status: string): boolean {
    const normalized = status.trim().toLowerCase();
    return (
      normalized === 'approved' ||
      normalized === 'rejected' ||
      normalized === 'aprovado' ||
      normalized === 'rejeitado' ||
      normalized === 'rechazado'
    );
  }

  renderIdentityHeader() {
    const msg = this.msg;
    const identity = this.resolveIdentity();
    const tone = this.statusTone(identity.status);
    const statusLabel = identity.status || msg['header.status.unknown'];
    return html`
      <header
        class="sticky top-0 z-10 mb-6 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] shadow-[var(--shadow-small,0_1px_2px_rgba(15,23,42,0.06))] p-4 md:p-5"
      >
        <div class="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div class="min-w-0 space-y-3">
            <div class="flex flex-wrap items-center gap-3">
              <h2 class="text-xl font-semibold text-[var(--text-strong,#020617)] truncate">
                ${identity.title || msg['header.untitled']}
              </h2>
              <span
                class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${tone.bg} ${tone.text}"
              >
                <span class="sr-only">${msg['header.status']}: </span>${statusLabel}
              </span>
            </div>
            ${identity.description
              ? html`<p class="text-sm text-[var(--text-muted,#64748b)] max-w-3xl line-clamp-2">${identity.description}</p>`
              : nothing}
            <dl class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              ${identity.impactType
                ? html`
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${msg['header.fact.impact']}</dt>
                      <dd class="font-medium text-[var(--text-default,#0f172a)]">${identity.impactType}</dd>
                    </div>
                  `
                : nothing}
              ${identity.costAdjustment !== ''
                ? html`
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${msg['header.fact.cost']}</dt>
                      <dd class="font-medium text-[var(--text-default,#0f172a)]">${identity.costAdjustment}</dd>
                    </div>
                  `
                : nothing}
              ${identity.scheduleAdjustmentDays !== ''
                ? html`
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${msg['header.fact.schedule']}</dt>
                      <dd class="font-medium text-[var(--text-default,#0f172a)]">${identity.scheduleAdjustmentDays}</dd>
                    </div>
                  `
                : nothing}
              ${identity.rejectionReason
                ? html`
                    <div class="max-w-md">
                      <dt class="text-[var(--text-muted,#64748b)]">${msg['header.fact.rejection']}</dt>
                      <dd class="font-medium text-[var(--text-default,#0f172a)]">${identity.rejectionReason}</dd>
                    </div>
                  `
                : nothing}
            </dl>
          </div>
          <div class="shrink-0 w-full lg:w-auto lg:min-w-[16rem]">
            ${this.renderStatusActions(identity.status)}
          </div>
        </div>
      </header>
    `;
  }

  renderStatusActions(currentStatus: string) {
    const msg = this.msg;
    const recordId = this.cmdUpdateChangeOrderStatusChangeOrderId || this.cmdUpdateChangeOrderChangeOrderId;
    if (!recordId) {
      return html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['status.needRecord']}</p>`;
    }
    if (this.isTerminalStatus(currentStatus)) {
      return html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['status.closed']}</p>`;
    }
    const loading = this.cmdUpdateChangeOrderStatusState === 'loading';
    const showRejectReason =
      this.#rejectMode || this.cmdUpdateChangeOrderStatusStatus.toLowerCase() === 'rejected';
    return html`
      <div class="rounded-lg border border-[var(--border-subtle,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 space-y-3">
        <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['status.actions']}</p>
        <div class="flex flex-wrap gap-2">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(event: Event) => {
              event.preventDefault();
              this.#rejectMode = false;
              if (!window.confirm(msg['status.confirmApprove'])) {
                return;
              }
              this.setCmdUpdateChangeOrderStatusRejectionReason('');
              this.setCmdUpdateChangeOrderStatusStatus('approved');
              this.handleCmdUpdateChangeOrderStatusClick();
            }}
          >
            ${loading && this.cmdUpdateChangeOrderStatusStatus === 'approved'
              ? msg['status.approving']
              : msg['status.approve']}
          </button>
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
            ?disabled=${loading}
            @click=${(event: Event) => {
              event.preventDefault();
              this.#rejectMode = true;
              this.setCmdUpdateChangeOrderStatusStatus('rejected');
              this.requestUpdate();
            }}
          >
            ${msg['status.reject']}
          </button>
        </div>
        ${showRejectReason
          ? html`
              <div class="space-y-2">
                <label class="block text-sm font-medium text-[var(--text-default,#0f172a)]" for="co-reject-reason">
                  ${msg['status.rejectionReason']}
                </label>
                <p class="text-xs text-[var(--text-muted,#64748b)]">${msg['status.rejectionHint']}</p>
                <textarea
                  id="co-reject-reason"
                  class="w-full min-h-[5rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                  .value=${this.cmdUpdateChangeOrderStatusRejectionReason}
                  @input=${(event: Event) => this.handleCmdUpdateChangeOrderStatusRejectionReasonChange(event)}
                ></textarea>
                <button
                  type="button"
                  class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] disabled:opacity-60"
                  ?disabled=${loading || !this.cmdUpdateChangeOrderStatusRejectionReason.trim()}
                  @click=${(event: Event) => {
                    event.preventDefault();
                    if (!window.confirm(msg['status.confirmReject'])) {
                      return;
                    }
                    this.setCmdUpdateChangeOrderStatusStatus('rejected');
                    this.handleCmdUpdateChangeOrderStatusClick();
                  }}
                >
                  ${loading && this.cmdUpdateChangeOrderStatusStatus === 'rejected'
                    ? msg['status.rejecting']
                    : msg['status.reject']}
                </button>
              </div>
            `
          : nothing}
        ${this.renderStatusFeedback()}
      </div>
    `;
  }

  renderStatusFeedback() {
    const msg = this.msg;
    if (this.cmdUpdateChangeOrderStatusState === 'success') {
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]"
          role="status"
        >
          <span>${msg['status.success']}</span>
          <button
            type="button"
            class="underline text-[var(--status-success-text,#166534)]"
            @click=${() => {
              this.cmdUpdateChangeOrderStatusState = 'idle';
              this.requestUpdate();
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.cmdUpdateChangeOrderStatusState === 'error') {
      const errText = this.cmdUpdateChangeOrderStatusError || msg['status.error'];
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]"
          role="alert"
        >
          <span>${errText}</span>
          <button
            type="button"
            class="underline text-[var(--status-error-text,#991b1b)]"
            @click=${() => {
              this.cmdUpdateChangeOrderStatusState = 'idle';
              this.requestUpdate();
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderTabRail(hasRecord: boolean) {
    const msg = this.msg;
    const detailsActive = this.#activeTab === 'details' && hasRecord;
    const createActive = this.#activeTab === 'create';
    const detailsDirty =
      Boolean(this.cmdUpdateChangeOrderTitle) ||
      Boolean(this.cmdUpdateChangeOrderDescription) ||
      Boolean(this.cmdUpdateChangeOrderImpactType) ||
      Boolean(this.cmdUpdateChangeOrderCostAdjustment) ||
      Boolean(this.cmdUpdateChangeOrderScheduleAdjustmentDays);
    const createDirty =
      Boolean(this.cmdCreateChangeOrderTitle) ||
      Boolean(this.cmdCreateChangeOrderDescription) ||
      Boolean(this.cmdCreateChangeOrderImpactType) ||
      Boolean(this.cmdCreateChangeOrderCostAdjustment) ||
      Boolean(this.cmdCreateChangeOrderScheduleAdjustmentDays);
    const tabBase =
      'relative px-4 py-2 text-sm font-medium rounded-t-md border-b-2 transition-colors';
    const tabIdle =
      'border-transparent text-[var(--text-muted,#64748b)] hover:text-[var(--text-default,#0f172a)]';
    const tabOn =
      'border-[var(--selected-border,#2563eb)] text-[var(--selected-text,#0f172a)] bg-[var(--selected-bg,#eff6ff)]';
    return html`
      <nav
        class="flex flex-wrap gap-1 border-b border-[var(--border-default,#e2e8f0)]"
        aria-label="subjects"
      >
        ${hasRecord
          ? html`
              <button
                type="button"
                class="${tabBase} ${detailsActive ? tabOn : tabIdle}"
                aria-current=${detailsActive ? 'page' : 'false'}
                @click=${() => {
                  if (this.#activeTab === 'create' && createDirty) {
                    const ok = window.confirm(
                      `${msg['tab.create']}`,
                    );
                    if (!ok) {
                      return;
                    }
                  }
                  this.#activeTab = 'details';
                  this.requestUpdate();
                }}
              >
                ${msg['tab.details']}
                ${detailsDirty
                  ? html`<span class="ml-2 inline-block h-2 w-2 rounded-full bg-[var(--status-warning-bg,#f59e0b)]" aria-hidden="true"></span>`
                  : nothing}
              </button>
            `
          : nothing}
        <button
          type="button"
          class="${tabBase} ${createActive ? tabOn : tabIdle}"
          aria-current=${createActive ? 'page' : 'false'}
          @click=${() => {
            if (this.#activeTab === 'details' && detailsDirty) {
              const ok = window.confirm(`${msg['tab.details']}`);
              if (!ok) {
                return;
              }
            }
            this.#activeTab = 'create';
            this.requestUpdate();
          }}
        >
          ${msg['tab.create']}
          ${createDirty
            ? html`<span class="ml-2 inline-block h-2 w-2 rounded-full bg-[var(--status-warning-bg,#f59e0b)]" aria-hidden="true"></span>`
            : nothing}
        </button>
      </nav>
    `;
  }

  renderDetailsTab() {
    const msg = this.msg;
    const loading = this.cmdUpdateChangeOrderState === 'loading';
    const canSave =
      Boolean(this.cmdUpdateChangeOrderChangeOrderId) &&
      Boolean(this.cmdUpdateChangeOrderTitle.trim()) &&
      Boolean(this.cmdUpdateChangeOrderDescription.trim()) &&
      Boolean(this.cmdUpdateChangeOrderImpactType.trim()) &&
      this.cmdUpdateChangeOrderCostAdjustment !== '' &&
      !loading;
    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 md:p-6 space-y-5"
      >
        <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">${msg['details.heading']}</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label class="block space-y-1 md:col-span-2">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['field.title']}
              <span class="text-[var(--status-error-text,#991b1b)]">*</span>
            </span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.cmdUpdateChangeOrderTitle}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCmdUpdateChangeOrderTitleChange(event)}
            />
          </label>
          <label class="block space-y-1 md:col-span-2">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['field.description']}
              <span class="text-[var(--status-error-text,#991b1b)]">*</span>
            </span>
            <textarea
              class="w-full min-h-[6rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.cmdUpdateChangeOrderDescription}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCmdUpdateChangeOrderDescriptionChange(event)}
            ></textarea>
          </label>
          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['field.impactType']}
              <span class="text-[var(--status-error-text,#991b1b)]">*</span>
            </span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.cmdUpdateChangeOrderImpactType}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCmdUpdateChangeOrderImpactTypeChange(event)}
            />
          </label>
          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['field.costAdjustment']}
              <span class="text-[var(--status-error-text,#991b1b)]">*</span>
            </span>
            <input
              type="number"
              step="any"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.cmdUpdateChangeOrderCostAdjustment}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCmdUpdateChangeOrderCostAdjustmentChange(event)}
            />
          </label>
          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['field.scheduleAdjustmentDays']}
            </span>
            <input
              type="number"
              step="1"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.cmdUpdateChangeOrderScheduleAdjustmentDays}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange(event)}
            />
          </label>
        </div>
        ${this.renderUpdateFeedback()}
        <div class="flex justify-end">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${!canSave}
            @click=${(event: Event) => this.handleCmdUpdateChangeOrderClick(event)}
          >
            ${loading ? msg['details.saving'] : msg['details.save']}
          </button>
        </div>
      </section>
    `;
  }

  renderUpdateFeedback() {
    const msg = this.msg;
    if (this.cmdUpdateChangeOrderState === 'success') {
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]"
          role="status"
        >
          <span>${msg['details.success']}</span>
          <button
            type="button"
            class="underline text-[var(--status-success-text,#166534)]"
            @click=${() => {
              this.cmdUpdateChangeOrderState = 'idle';
              this.requestUpdate();
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.cmdUpdateChangeOrderState === 'error') {
      const errText = this.cmdUpdateChangeOrderError || msg['details.error'];
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]"
          role="alert"
        >
          <span>${errText}</span>
          <button
            type="button"
            class="underline text-[var(--status-error-text,#991b1b)]"
            @click=${() => {
              this.cmdUpdateChangeOrderState = 'idle';
              this.requestUpdate();
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderCreateTab() {
    const msg = this.msg;
    const loading = this.cmdCreateChangeOrderState === 'loading';
    const hasProject = Boolean(this.cmdCreateChangeOrderProjectId);
    const canSave =
      hasProject &&
      Boolean(this.cmdCreateChangeOrderTitle.trim()) &&
      Boolean(this.cmdCreateChangeOrderDescription.trim()) &&
      Boolean(this.cmdCreateChangeOrderImpactType.trim()) &&
      this.cmdCreateChangeOrderCostAdjustment !== '' &&
      !loading;
    return html`
      <section
        class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 md:p-6 space-y-5"
      >
        <h3 class="text-base font-semibold text-[var(--text-strong,#020617)]">${msg['create.heading']}</h3>
        <p class="text-sm text-[var(--text-muted,#64748b)]">
          ${hasProject ? msg['create.projectContext'] : msg['create.projectMissing']}
        </p>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label class="block space-y-1 md:col-span-2">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['create.field.title']}
              <span class="text-[var(--status-error-text,#991b1b)]">*</span>
            </span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.cmdCreateChangeOrderTitle}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCmdCreateChangeOrderTitleChange(event)}
            />
          </label>
          <label class="block space-y-1 md:col-span-2">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['create.field.description']}
              <span class="text-[var(--status-error-text,#991b1b)]">*</span>
            </span>
            <textarea
              class="w-full min-h-[6rem] rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.cmdCreateChangeOrderDescription}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCmdCreateChangeOrderDescriptionChange(event)}
            ></textarea>
          </label>
          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['create.field.impactType']}
              <span class="text-[var(--status-error-text,#991b1b)]">*</span>
            </span>
            <input
              type="text"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.cmdCreateChangeOrderImpactType}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCmdCreateChangeOrderImpactTypeChange(event)}
            />
          </label>
          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['create.field.costAdjustment']}
              <span class="text-[var(--status-error-text,#991b1b)]">*</span>
            </span>
            <input
              type="number"
              step="any"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.cmdCreateChangeOrderCostAdjustment}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCmdCreateChangeOrderCostAdjustmentChange(event)}
            />
          </label>
          <label class="block space-y-1">
            <span class="text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['create.field.scheduleAdjustmentDays']}
            </span>
            <input
              type="number"
              step="1"
              class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
              .value=${this.cmdCreateChangeOrderScheduleAdjustmentDays}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleCmdCreateChangeOrderScheduleAdjustmentDaysChange(event)}
            />
          </label>
        </div>
        ${this.renderCreateFeedback()}
        <div class="flex justify-end">
          <button
            type="button"
            class="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
            ?disabled=${!canSave}
            @click=${(event: Event) => this.handleCmdCreateChangeOrderClick(event)}
          >
            ${loading ? msg['create.saving'] : msg['create.save']}
          </button>
        </div>
      </section>
    `;
  }

  renderCreateFeedback() {
    const msg = this.msg;
    if (this.cmdCreateChangeOrderState === 'success') {
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md px-3 py-2 text-sm bg-[var(--status-success-bg,#dcfce7)] text-[var(--status-success-text,#166534)]"
          role="status"
        >
          <span>${msg['create.success']}</span>
          <button
            type="button"
            class="underline text-[var(--status-success-text,#166534)]"
            @click=${() => {
              this.cmdCreateChangeOrderState = 'idle';
              this.requestUpdate();
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.cmdCreateChangeOrderState === 'error') {
      const errText = this.cmdCreateChangeOrderError || msg['create.error'];
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md px-3 py-2 text-sm bg-[var(--status-error-bg,#fee2e2)] text-[var(--status-error-text,#991b1b)]"
          role="alert"
        >
          <span>${errText}</span>
          <button
            type="button"
            class="underline text-[var(--status-error-text,#991b1b)]"
            @click=${() => {
              this.cmdCreateChangeOrderState = 'idle';
              this.requestUpdate();
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }
}
