/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/changeOrderWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  'page.heading': 'Change Orders',
  'header.newRecord': 'New change order',
  'header.status': 'Status',
  'header.noStatus': 'Not set',
  'summary.heading': 'Impact overview',
  'summary.title': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'summary.description': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'summary.impactType': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'summary.cost': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'summary.schedule': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'summary.empty': 'No change order loaded yet. Create one below or open an existing record.',
  'summary.rejection': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label'],
  'transitions.heading': 'Decision',
  'transitions.approve': 'Approve change order',
  'transitions.reject': 'Reject change order',
  'transitions.confirmApprove': 'Approve this change order and apply its cost and schedule impact?',
  'transitions.confirmReject': 'Reject this change order? The rejection reason will be recorded.',
  'transitions.rejectionHint': 'Explain why this change order is being rejected',
  'transitions.applyReject': 'Confirm rejection',
  'transitions.unavailable': 'Status actions become available once a change order is open.',
  'edit.heading': 'Refine details',
  'edit.group.identity': 'Identity',
  'edit.group.impact': 'Cost and schedule impact',
  'edit.field.title': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'edit.field.description': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'edit.field.impactType': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'edit.field.costAdjustment': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'edit.field.scheduleAdjustmentDays': s_en['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'edit.save': 'Save change order',
  'edit.saving': 'Saving…',
  'edit.success': s_en['action.cmdUpdateChangeOrder.success'],
  'edit.error': s_en['action.cmdUpdateChangeOrder.error'],
  'edit.noRecord': 'Open a change order to edit its details.',
  'create.heading': 'Log a new change order',
  'create.group.identity': 'Identity',
  'create.group.impact': 'Cost and schedule impact',
  'create.field.title': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label'],
  'create.field.description': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label'],
  'create.field.impactType': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label'],
  'create.field.costAdjustment': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label'],
  'create.field.scheduleAdjustmentDays': s_en['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'create.projectCaption': 'Scoped to the active project',
  'create.projectMissing': 'Select a project in context before creating a change order.',
  'create.save': 'Save project change order',
  'create.saving': 'Creating…',
  'create.success': s_en['action.cmdCreateChangeOrder.success'],
  'create.error': s_en['action.cmdCreateChangeOrder.error'],
  'status.success': s_en['action.cmdUpdateChangeOrderStatus.success'],
  'status.error': s_en['action.cmdUpdateChangeOrderStatus.error'],
  'status.updating': 'Updating status…',
  'required.mark': 'Required',
  'dismiss': 'Dismiss',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'page.heading': 'Ordens de Mudança',
  'header.newRecord': 'Nova ordem de mudança',
  'header.status': 'Status',
  'header.noStatus': 'Não definido',
  'summary.heading': 'Visão do impacto',
  'summary.title': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'summary.description': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'summary.impactType': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'summary.cost': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'summary.schedule': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'summary.empty': 'Nenhuma ordem de mudança carregada. Crie uma abaixo ou abra um registro existente.',
  'summary.rejection': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label'],
  'transitions.heading': 'Decisão',
  'transitions.approve': 'Aprovar ordem de mudança',
  'transitions.reject': 'Rejeitar ordem de mudança',
  'transitions.confirmApprove': 'Aprovar esta ordem de mudança e aplicar o impacto de custo e cronograma?',
  'transitions.confirmReject': 'Rejeitar esta ordem de mudança? O motivo da rejeição será registrado.',
  'transitions.rejectionHint': 'Explique por que esta ordem de mudança está sendo rejeitada',
  'transitions.applyReject': 'Confirmar rejeição',
  'transitions.unavailable': 'As ações de status ficam disponíveis quando uma ordem de mudança estiver aberta.',
  'edit.heading': 'Refinar detalhes',
  'edit.group.identity': 'Identidade',
  'edit.group.impact': 'Impacto de custo e cronograma',
  'edit.field.title': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'edit.field.description': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'edit.field.impactType': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'edit.field.costAdjustment': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'edit.field.scheduleAdjustmentDays': s_pt_br['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'edit.save': 'Salvar ordem de mudança',
  'edit.saving': 'Salvando…',
  'edit.success': s_pt_br['action.cmdUpdateChangeOrder.success'],
  'edit.error': s_pt_br['action.cmdUpdateChangeOrder.error'],
  'edit.noRecord': 'Abra uma ordem de mudança para editar os detalhes.',
  'create.heading': 'Registrar nova ordem de mudança',
  'create.group.identity': 'Identidade',
  'create.group.impact': 'Impacto de custo e cronograma',
  'create.field.title': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label'],
  'create.field.description': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label'],
  'create.field.impactType': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label'],
  'create.field.costAdjustment': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label'],
  'create.field.scheduleAdjustmentDays': s_pt_br['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'create.projectCaption': 'Vinculada ao projeto ativo',
  'create.projectMissing': 'Selecione um projeto no contexto antes de criar uma ordem de mudança.',
  'create.save': 'Salvar ordem de mudança do projeto',
  'create.saving': 'Criando…',
  'create.success': s_pt_br['action.cmdCreateChangeOrder.success'],
  'create.error': s_pt_br['action.cmdCreateChangeOrder.error'],
  'status.success': s_pt_br['action.cmdUpdateChangeOrderStatus.success'],
  'status.error': s_pt_br['action.cmdUpdateChangeOrderStatus.error'],
  'status.updating': 'Atualizando status…',
  'required.mark': 'Obrigatório',
  'dismiss': 'Dispensar',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'page.heading': 'Órdenes de Cambio',
  'header.newRecord': 'Nueva orden de cambio',
  'header.status': 'Estado',
  'header.noStatus': 'Sin definir',
  'summary.heading': 'Resumen del impacto',
  'summary.title': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'summary.description': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'summary.impactType': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'summary.cost': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'summary.schedule': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'summary.empty': 'Aún no hay una orden de cambio cargada. Cree una abajo o abra un registro existente.',
  'summary.rejection': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrderStatus.form.field.rejectionReason.label'],
  'transitions.heading': 'Decisión',
  'transitions.approve': 'Aprobar orden de cambio',
  'transitions.reject': 'Rechazar orden de cambio',
  'transitions.confirmApprove': '¿Aprobar esta orden de cambio y aplicar su impacto de costo y cronograma?',
  'transitions.confirmReject': '¿Rechazar esta orden de cambio? Se registrará el motivo del rechazo.',
  'transitions.rejectionHint': 'Explique por qué se rechaza esta orden de cambio',
  'transitions.applyReject': 'Confirmar rechazo',
  'transitions.unavailable': 'Las acciones de estado estarán disponibles cuando haya una orden de cambio abierta.',
  'edit.heading': 'Refinar detalles',
  'edit.group.identity': 'Identidad',
  'edit.group.impact': 'Impacto de costo y cronograma',
  'edit.field.title': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.title.label'],
  'edit.field.description': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.description.label'],
  'edit.field.impactType': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.impactType.label'],
  'edit.field.costAdjustment': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.costAdjustment.label'],
  'edit.field.scheduleAdjustmentDays': s_es['intent.changeOrderWorkspace.cmdUpdateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'edit.save': 'Guardar orden de cambio',
  'edit.saving': 'Guardando…',
  'edit.success': s_es['action.cmdUpdateChangeOrder.success'],
  'edit.error': s_es['action.cmdUpdateChangeOrder.error'],
  'edit.noRecord': 'Abra una orden de cambio para editar sus detalles.',
  'create.heading': 'Registrar una nueva orden de cambio',
  'create.group.identity': 'Identidad',
  'create.group.impact': 'Impacto de costo y cronograma',
  'create.field.title': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.title.label'],
  'create.field.description': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.description.label'],
  'create.field.impactType': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.impactType.label'],
  'create.field.costAdjustment': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.costAdjustment.label'],
  'create.field.scheduleAdjustmentDays': s_es['intent.changeOrderWorkspace.cmdCreateChangeOrder.form.field.scheduleAdjustmentDays.label'],
  'create.projectCaption': 'Vinculada al proyecto activo',
  'create.projectMissing': 'Seleccione un proyecto en el contexto antes de crear una orden de cambio.',
  'create.save': 'Guardar orden de cambio del proyecto',
  'create.saving': 'Creando…',
  'create.success': s_es['action.cmdCreateChangeOrder.success'],
  'create.error': s_es['action.cmdCreateChangeOrder.error'],
  'status.success': s_es['action.cmdUpdateChangeOrderStatus.success'],
  'status.error': s_es['action.cmdUpdateChangeOrderStatus.error'],
  'status.updating': 'Actualizando estado…',
  'required.mark': 'Obligatorio',
  'dismiss': 'Descartar',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page21--change-order-workspace-102045')
export class BuildFlowFsmDesktopPage21ChangeOrderWorkspacePage extends BuildFlowFsmChangeOrderWorkspaceBase {
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
        <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 p-6">
          ${this.renderIdentityHeader(msg)}
          ${this.renderImpactSummary(msg)}
          ${this.renderStatusTransitions(msg)}
          ${this.renderEditForm(msg)}
          ${this.renderCreateForm(msg)}
        </div>
      </div>
    `;
  }

  private resolveRecordTitle(msg: PageMessageType): string {
    const editTitle = (this.cmdUpdateChangeOrderTitle || '').trim();
    if (editTitle) {
      return editTitle;
    }
    const createOut = this.cmdCreateChangeOrderOutput as CmdCreateChangeOrderOutput | null;
    if (createOut && typeof createOut === 'object') {
      const rec = createOut as { title?: unknown };
      if (typeof rec.title === 'string' && rec.title.trim()) {
        return rec.title;
      }
    }
    const updateOut = this.cmdUpdateChangeOrderOutput as CmdUpdateChangeOrderOutput | null;
    if (updateOut && typeof updateOut === 'object') {
      const rec = updateOut as { title?: unknown };
      if (typeof rec.title === 'string' && rec.title.trim()) {
        return rec.title;
      }
    }
    if (this.cmdUpdateChangeOrderChangeOrderId || this.cmdUpdateChangeOrderStatusChangeOrderId) {
      return msg['page.heading'];
    }
    return msg['header.newRecord'];
  }

  private resolveStatusLabel(msg: PageMessageType): string {
    const statusOut = this.cmdUpdateChangeOrderStatusOutput as CmdUpdateChangeOrderStatusOutput | null;
    if (statusOut && typeof statusOut === 'object') {
      const rec = statusOut as { status?: unknown };
      if (typeof rec.status === 'string' && rec.status.trim()) {
        return rec.status;
      }
    }
    const pending = (this.cmdUpdateChangeOrderStatusStatus || '').trim();
    if (pending) {
      return pending;
    }
    const updateOut = this.cmdUpdateChangeOrderOutput as CmdUpdateChangeOrderOutput | null;
    if (updateOut && typeof updateOut === 'object') {
      const rec = updateOut as { status?: unknown };
      if (typeof rec.status === 'string' && rec.status.trim()) {
        return rec.status;
      }
    }
    const createOut = this.cmdCreateChangeOrderOutput as CmdCreateChangeOrderOutput | null;
    if (createOut && typeof createOut === 'object') {
      const rec = createOut as { status?: unknown };
      if (typeof rec.status === 'string' && rec.status.trim()) {
        return rec.status;
      }
    }
    return msg['header.noStatus'];
  }

  private hasOpenRecord(): boolean {
    return Boolean(
      (this.cmdUpdateChangeOrderChangeOrderId || '').trim() ||
        (this.cmdUpdateChangeOrderStatusChangeOrderId || '').trim(),
    );
  }

  private isRejectIntent(): boolean {
    const status = (this.cmdUpdateChangeOrderStatusStatus || '').trim().toLowerCase();
    return status === 'rejected' || status === 'reject';
  }

  renderIdentityHeader(msg: PageMessageType): TemplateResult {
    const title = this.resolveRecordTitle(msg);
    const statusLabel = this.resolveStatusLabel(msg);
    return html`
      <header class="flex flex-col gap-3 border-b border-[var(--border-subtle,#e2e8f0)] pb-4">
        <div class="flex flex-wrap items-start justify-between gap-3">
          <div class="flex min-w-0 flex-col gap-1">
            <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${title}</h1>
            <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['page.heading']}</p>
          </div>
          <span
            class="inline-flex items-center rounded-full bg-[var(--status-neutral-bg,#f1f5f9)] px-3 py-1 text-sm font-medium text-[var(--status-neutral-text,#334155)]"
            title=${msg['header.status']}
          >
            ${statusLabel}
          </span>
        </div>
      </header>
    `;
  }

  renderImpactSummary(msg: PageMessageType): TemplateResult {
    const title =
      (this.cmdUpdateChangeOrderTitle || '').trim() ||
      (this.cmdCreateChangeOrderTitle || '').trim();
    const description =
      (this.cmdUpdateChangeOrderDescription || '').trim() ||
      (this.cmdCreateChangeOrderDescription || '').trim();
    const impactType =
      (this.cmdUpdateChangeOrderImpactType || '').trim() ||
      (this.cmdCreateChangeOrderImpactType || '').trim();
    const cost =
      (this.cmdUpdateChangeOrderCostAdjustment || '').trim() ||
      (this.cmdCreateChangeOrderCostAdjustment || '').trim();
    const schedule =
      (this.cmdUpdateChangeOrderScheduleAdjustmentDays || '').trim() ||
      (this.cmdCreateChangeOrderScheduleAdjustmentDays || '').trim();
    const rejection = (this.cmdUpdateChangeOrderStatusRejectionReason || '').trim();
    const hasData = Boolean(title || description || impactType || cost || schedule || this.hasOpenRecord());

    if (!hasData) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
          <h2 class="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
            ${msg['summary.heading']}
          </h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['summary.empty']}</p>
        </section>
      `;
    }

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
          ${msg['summary.heading']}
        </h2>
        <dl class="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <div class="flex flex-col gap-0.5">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['summary.title']}</dt>
            <dd class="text-sm font-medium text-[var(--text-default,#0f172a)]">${title || '—'}</dd>
          </div>
          <div class="flex flex-col gap-0.5">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['summary.impactType']}</dt>
            <dd class="text-sm font-medium text-[var(--text-default,#0f172a)]">${impactType || '—'}</dd>
          </div>
          <div class="flex flex-col gap-0.5 sm:col-span-2">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['summary.description']}</dt>
            <dd class="text-sm text-[var(--text-default,#0f172a)]">${description || '—'}</dd>
          </div>
          <div class="flex flex-col gap-0.5 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['summary.cost']}</dt>
            <dd class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${cost || '—'}</dd>
          </div>
          <div class="flex flex-col gap-0.5 rounded-md bg-[var(--surface-alt-bg,#f8fafc)] p-3">
            <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['summary.schedule']}</dt>
            <dd class="text-lg font-semibold text-[var(--text-strong,#0f172a)]">${schedule || '—'}</dd>
          </div>
          ${rejection
            ? html`
                <div class="flex flex-col gap-0.5 sm:col-span-2">
                  <dt class="text-xs text-[var(--text-muted,#64748b)]">${msg['summary.rejection']}</dt>
                  <dd class="text-sm text-[var(--status-error-text,#b91c1c)]">${rejection}</dd>
                </div>
              `
            : nothing}
        </dl>
      </section>
    `;
  }

  renderStatusTransitions(msg: PageMessageType): TemplateResult {
    const open = this.hasOpenRecord();
    const loading = this.cmdUpdateChangeOrderStatusState === 'loading';
    const success = this.cmdUpdateChangeOrderStatusState === 'success';
    const error = this.cmdUpdateChangeOrderStatusState === 'error';
    const rejectIntent = this.isRejectIntent();
    const errorText =
      (this.cmdUpdateChangeOrderStatusError || '').trim() || msg['status.error'];

    const onApprove = (event: Event): void => {
      event.preventDefault();
      if (!open || loading) {
        return;
      }
      const recordName = this.resolveRecordTitle(msg);
      const ok = window.confirm(`${msg['transitions.confirmApprove']}\n\n${recordName}`);
      if (!ok) {
        return;
      }
      this.setCmdUpdateChangeOrderStatusStatus('approved');
      this.setCmdUpdateChangeOrderStatusRejectionReason('');
      this.handleCmdUpdateChangeOrderStatusClick();
    };

    const onRejectPrepare = (event: Event): void => {
      event.preventDefault();
      if (!open || loading) {
        return;
      }
      this.setCmdUpdateChangeOrderStatusStatus('rejected');
    };

    const onRejectConfirm = (event: Event): void => {
      event.preventDefault();
      if (!open || loading) {
        return;
      }
      const recordName = this.resolveRecordTitle(msg);
      const ok = window.confirm(`${msg['transitions.confirmReject']}\n\n${recordName}`);
      if (!ok) {
        return;
      }
      this.setCmdUpdateChangeOrderStatusStatus('rejected');
      this.handleCmdUpdateChangeOrderStatusClick();
    };

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
        <h2 class="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
          ${msg['transitions.heading']}
        </h2>
        ${open
          ? html`
              <div class="flex flex-wrap items-center gap-3">
                <button
                  type="button"
                  class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
                  ?disabled=${loading}
                  @click=${onApprove}
                >
                  ${loading ? msg['status.updating'] : msg['transitions.approve']}
                </button>
                <button
                  type="button"
                  class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-sm font-medium text-[var(--button-danger-text,#ffffff)] disabled:opacity-50"
                  ?disabled=${loading}
                  @click=${onRejectPrepare}
                >
                  ${msg['transitions.reject']}
                </button>
              </div>
              ${rejectIntent
                ? html`
                    <div class="mt-4 flex flex-col gap-2">
                      <label class="text-sm font-medium text-[var(--text-default,#0f172a)]" for="co-reject-reason">
                        ${msg['summary.rejection']}
                      </label>
                      <textarea
                        id="co-reject-reason"
                        class="min-h-[88px] w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm text-[var(--text-default,#0f172a)]"
                        .value=${this.cmdUpdateChangeOrderStatusRejectionReason}
                        placeholder=${msg['transitions.rejectionHint']}
                        ?disabled=${loading}
                        @input=${(e: Event): void => this.handleCmdUpdateChangeOrderStatusRejectionReasonChange(e)}
                      ></textarea>
                      <div class="flex flex-wrap items-center gap-2">
                        <button
                          type="button"
                          class="rounded-md bg-[var(--button-danger-bg,#dc2626)] px-4 py-2 text-sm font-medium text-[var(--button-danger-text,#ffffff)] disabled:opacity-50"
                          ?disabled=${loading}
                          @click=${onRejectConfirm}
                        >
                          ${loading ? msg['status.updating'] : msg['transitions.applyReject']}
                        </button>
                      </div>
                    </div>
                  `
                : nothing}
              ${success
                ? html`
                    <div
                      class="mt-3 flex items-start justify-between gap-2 rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                      role="status"
                    >
                      <span>${msg['status.success']}</span>
                      <button
                        type="button"
                        class="text-xs underline"
                        @click=${(): void => {
                          this.cmdUpdateChangeOrderStatusState = 'idle';
                        }}
                      >
                        ${msg['dismiss']}
                      </button>
                    </div>
                  `
                : nothing}
              ${error
                ? html`
                    <div
                      class="mt-3 flex items-start justify-between gap-2 rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#b91c1c)]"
                      role="alert"
                    >
                      <span>${errorText}</span>
                      <button
                        type="button"
                        class="text-xs underline"
                        @click=${onRejectConfirm}
                      >
                        ${msg['dismiss']}
                      </button>
                    </div>
                  `
                : nothing}
            `
          : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['transitions.unavailable']}</p>`}
      </section>
    `;
  }

  renderEditForm(msg: PageMessageType): TemplateResult {
    const open = this.hasOpenRecord();
    const loading = this.cmdUpdateChangeOrderState === 'loading';
    const success = this.cmdUpdateChangeOrderState === 'success';
    const error = this.cmdUpdateChangeOrderState === 'error';
    const errorText = (this.cmdUpdateChangeOrderError || '').trim() || msg['edit.error'];
    const canSave =
      open &&
      !loading &&
      Boolean((this.cmdUpdateChangeOrderTitle || '').trim()) &&
      Boolean((this.cmdUpdateChangeOrderDescription || '').trim()) &&
      Boolean((this.cmdUpdateChangeOrderImpactType || '').trim()) &&
      Boolean((this.cmdUpdateChangeOrderCostAdjustment || '').trim());

    if (!open) {
      return html`
        <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
          <h2 class="mb-2 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
            ${msg['edit.heading']}
          </h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['edit.noRecord']}</p>
        </section>
      `;
    }

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
        <h2 class="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
          ${msg['edit.heading']}
        </h2>
        <form class="flex flex-col gap-5" @submit=${(e: Event): void => this.handleCmdUpdateChangeOrderClick(e)}>
          <fieldset class="flex flex-col gap-3 border-0 p-0">
            <legend class="mb-1 text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['edit.group.identity']}
            </legend>
            <div class="flex flex-col gap-1">
              <label class="text-sm text-[var(--text-default,#0f172a)]" for="co-edit-title">
                ${msg['edit.field.title']}
                <span class="text-[var(--text-muted,#64748b)]">(${msg['required.mark']})</span>
              </label>
              <input
                id="co-edit-title"
                type="text"
                required
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                .value=${this.cmdUpdateChangeOrderTitle}
                ?disabled=${loading}
                @input=${(e: Event): void => this.handleCmdUpdateChangeOrderTitleChange(e)}
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm text-[var(--text-default,#0f172a)]" for="co-edit-description">
                ${msg['edit.field.description']}
                <span class="text-[var(--text-muted,#64748b)]">(${msg['required.mark']})</span>
              </label>
              <textarea
                id="co-edit-description"
                required
                class="min-h-[96px] w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                .value=${this.cmdUpdateChangeOrderDescription}
                ?disabled=${loading}
                @input=${(e: Event): void => this.handleCmdUpdateChangeOrderDescriptionChange(e)}
              ></textarea>
            </div>
          </fieldset>

          <fieldset class="flex flex-col gap-3 border-0 p-0">
            <legend class="mb-1 text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['edit.group.impact']}
            </legend>
            <div class="flex flex-col gap-1">
              <label class="text-sm text-[var(--text-default,#0f172a)]" for="co-edit-impact">
                ${msg['edit.field.impactType']}
                <span class="text-[var(--text-muted,#64748b)]">(${msg['required.mark']})</span>
              </label>
              <input
                id="co-edit-impact"
                type="text"
                required
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                .value=${this.cmdUpdateChangeOrderImpactType}
                ?disabled=${loading}
                @input=${(e: Event): void => this.handleCmdUpdateChangeOrderImpactTypeChange(e)}
              />
            </div>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div class="flex flex-col gap-1">
                <label class="text-sm text-[var(--text-default,#0f172a)]" for="co-edit-cost">
                  ${msg['edit.field.costAdjustment']}
                  <span class="text-[var(--text-muted,#64748b)]">(${msg['required.mark']})</span>
                </label>
                <input
                  id="co-edit-cost"
                  type="number"
                  step="any"
                  required
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.cmdUpdateChangeOrderCostAdjustment}
                  ?disabled=${loading}
                  @input=${(e: Event): void => this.handleCmdUpdateChangeOrderCostAdjustmentChange(e)}
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="text-sm text-[var(--text-default,#0f172a)]" for="co-edit-schedule">
                  ${msg['edit.field.scheduleAdjustmentDays']}
                </label>
                <input
                  id="co-edit-schedule"
                  type="number"
                  step="1"
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.cmdUpdateChangeOrderScheduleAdjustmentDays}
                  ?disabled=${loading}
                  @input=${(e: Event): void => this.handleCmdUpdateChangeOrderScheduleAdjustmentDaysChange(e)}
                />
              </div>
            </div>
          </fieldset>

          ${error
            ? html`
                <div
                  class="rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#b91c1c)]"
                  role="alert"
                >
                  ${errorText}
                </div>
              `
            : nothing}
          ${success
            ? html`
                <div
                  class="flex items-start justify-between gap-2 rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                  role="status"
                >
                  <span>${msg['edit.success']}</span>
                  <button
                    type="button"
                    class="text-xs underline"
                    @click=${(): void => {
                      this.cmdUpdateChangeOrderState = 'idle';
                    }}
                  >
                    ${msg['dismiss']}
                  </button>
                </div>
              `
            : nothing}

          <div class="flex justify-end">
            <button
              type="submit"
              class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
              ?disabled=${!canSave}
            >
              ${loading ? msg['edit.saving'] : msg['edit.save']}
            </button>
          </div>
        </form>
      </section>
    `;
  }

  renderCreateForm(msg: PageMessageType): TemplateResult {
    const loading = this.cmdCreateChangeOrderState === 'loading';
    const success = this.cmdCreateChangeOrderState === 'success';
    const error = this.cmdCreateChangeOrderState === 'error';
    const errorText = (this.cmdCreateChangeOrderError || '').trim() || msg['create.error'];
    const hasProject = Boolean((this.cmdCreateChangeOrderProjectId || '').trim());
    const canSave =
      hasProject &&
      !loading &&
      Boolean((this.cmdCreateChangeOrderTitle || '').trim()) &&
      Boolean((this.cmdCreateChangeOrderDescription || '').trim()) &&
      Boolean((this.cmdCreateChangeOrderImpactType || '').trim()) &&
      Boolean((this.cmdCreateChangeOrderCostAdjustment || '').trim());

    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-sm">
        <h2 class="mb-1 text-sm font-semibold uppercase tracking-wide text-[var(--text-muted,#64748b)]">
          ${msg['create.heading']}
        </h2>
        <p class="mb-4 text-xs text-[var(--text-muted,#64748b)]">
          ${hasProject ? msg['create.projectCaption'] : msg['create.projectMissing']}
        </p>
        <form class="flex flex-col gap-5" @submit=${(e: Event): void => this.handleCmdCreateChangeOrderClick(e)}>
          <fieldset class="flex flex-col gap-3 border-0 p-0">
            <legend class="mb-1 text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['create.group.identity']}
            </legend>
            <div class="flex flex-col gap-1">
              <label class="text-sm text-[var(--text-default,#0f172a)]" for="co-create-title">
                ${msg['create.field.title']}
                <span class="text-[var(--text-muted,#64748b)]">(${msg['required.mark']})</span>
              </label>
              <input
                id="co-create-title"
                type="text"
                required
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                .value=${this.cmdCreateChangeOrderTitle}
                ?disabled=${loading}
                @input=${(e: Event): void => this.handleCmdCreateChangeOrderTitleChange(e)}
              />
            </div>
            <div class="flex flex-col gap-1">
              <label class="text-sm text-[var(--text-default,#0f172a)]" for="co-create-description">
                ${msg['create.field.description']}
                <span class="text-[var(--text-muted,#64748b)]">(${msg['required.mark']})</span>
              </label>
              <textarea
                id="co-create-description"
                required
                class="min-h-[96px] w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                .value=${this.cmdCreateChangeOrderDescription}
                ?disabled=${loading}
                @input=${(e: Event): void => this.handleCmdCreateChangeOrderDescriptionChange(e)}
              ></textarea>
            </div>
          </fieldset>

          <fieldset class="flex flex-col gap-3 border-0 p-0">
            <legend class="mb-1 text-sm font-medium text-[var(--text-default,#0f172a)]">
              ${msg['create.group.impact']}
            </legend>
            <div class="flex flex-col gap-1">
              <label class="text-sm text-[var(--text-default,#0f172a)]" for="co-create-impact">
                ${msg['create.field.impactType']}
                <span class="text-[var(--text-muted,#64748b)]">(${msg['required.mark']})</span>
              </label>
              <input
                id="co-create-impact"
                type="text"
                required
                class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                .value=${this.cmdCreateChangeOrderImpactType}
                ?disabled=${loading}
                @input=${(e: Event): void => this.handleCmdCreateChangeOrderImpactTypeChange(e)}
              />
            </div>
            <div class="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div class="flex flex-col gap-1">
                <label class="text-sm text-[var(--text-default,#0f172a)]" for="co-create-cost">
                  ${msg['create.field.costAdjustment']}
                  <span class="text-[var(--text-muted,#64748b)]">(${msg['required.mark']})</span>
                </label>
                <input
                  id="co-create-cost"
                  type="number"
                  step="any"
                  required
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.cmdCreateChangeOrderCostAdjustment}
                  ?disabled=${loading}
                  @input=${(e: Event): void => this.handleCmdCreateChangeOrderCostAdjustmentChange(e)}
                />
              </div>
              <div class="flex flex-col gap-1">
                <label class="text-sm text-[var(--text-default,#0f172a)]" for="co-create-schedule">
                  ${msg['create.field.scheduleAdjustmentDays']}
                </label>
                <input
                  id="co-create-schedule"
                  type="number"
                  step="1"
                  class="w-full rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-sm"
                  .value=${this.cmdCreateChangeOrderScheduleAdjustmentDays}
                  ?disabled=${loading}
                  @input=${(e: Event): void => this.handleCmdCreateChangeOrderScheduleAdjustmentDaysChange(e)}
                />
              </div>
            </div>
          </fieldset>

          ${error
            ? html`
                <div
                  class="rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#b91c1c)]"
                  role="alert"
                >
                  ${errorText}
                </div>
              `
            : nothing}
          ${success
            ? html`
                <div
                  class="flex items-start justify-between gap-2 rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                  role="status"
                >
                  <span>${msg['create.success']}</span>
                  <button
                    type="button"
                    class="text-xs underline"
                    @click=${(): void => {
                      this.cmdCreateChangeOrderState = 'idle';
                    }}
                  >
                    ${msg['dismiss']}
                  </button>
                </div>
              `
            : nothing}

          <div class="flex justify-end">
            <button
              type="submit"
              class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:opacity-50"
              ?disabled=${!canSave}
            >
              ${loading ? msg['create.saving'] : msg['create.save']}
            </button>
          </div>
        </form>
      </section>
    `;
  }
}
