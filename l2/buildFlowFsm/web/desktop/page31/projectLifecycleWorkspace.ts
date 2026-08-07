/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page31/projectLifecycleWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectLifecycleWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.js';
import type {
  CreateProjectCmdOutput,
  UpdateProjectCmdOutput,
  UpdateProjectStatusCmdOutput,
} from '/_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'header.identity': 'Current project',
  'header.noProject': 'No project selected — register one or open a project from its link.',
  'header.projectId': 'Project',
  'header.status': 'Status',
  'header.unknownStatus': 'Unknown',
  'header.client': 'Client',
  'header.site': 'Site',
  'header.budget': 'Budget',
  'header.dates': 'Dates',
  'header.transitions': 'Lifecycle actions',
  'header.noTransitions': 'No status changes are available for this project right now.',
  'transition.toActive': 'Activate',
  'transition.toOnHold': 'Put on hold',
  'transition.toClosed': 'Close project',
  'transition.toCancelled': 'Cancel project',
  'transition.toPlanned': 'Return to planning',
  'transition.confirm': 'Confirm status change',
  'transition.holdReason': s_en['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label'],
  'transition.cancellationReason': s_en['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label'],
  'transition.loading': 'Updating status…',
  'transition.success': s_en['action.updateProjectStatusCmd.success'],
  'transition.error': s_en['action.updateProjectStatusCmd.error'],
  'tab.details': 'Project details',
  'tab.create': 'Register project',
  'tab.detailsDisabled': 'Save the project first to edit details.',
  'details.heading': 'Details to keep current',
  'details.name': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label'],
  'details.clientId': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label'],
  'details.siteAddress': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label'],
  'details.budget': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label'],
  'details.startDate': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label'],
  'details.endDate': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label'],
  'details.save': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd'],
  'details.loading': 'Saving details…',
  'details.success': s_en['action.updateProjectCmd.success'],
  'details.error': s_en['action.updateProjectCmd.error'],
  'details.needProject': 'Open a project to edit its details.',
  'create.heading': 'Register a new project',
  'create.name': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label'],
  'create.clientId': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label'],
  'create.siteAddress': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label'],
  'create.budget': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label'],
  'create.startDate': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label'],
  'create.endDate': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label'],
  'create.save': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd'],
  'create.loading': 'Creating project…',
  'create.success': s_en['action.createProjectCmd.success'],
  'create.error': s_en['action.createProjectCmd.error'],
  'feedback.dismiss': 'Dismiss',
  'required': 'Required',
  'status.planned': 'Planning',
  'status.active': 'Active',
  'status.onHold': 'On hold',
  'status.on_hold': 'On hold',
  'status.closed': 'Closed',
  'status.cancelled': 'Cancelled',
  'status.canceled': 'Cancelled',
  'status.draft': 'Draft',
  'status.registered': 'Registered',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'header.identity': 'Projeto atual',
  'header.noProject': 'Nenhum projeto selecionado — registre um ou abra um projeto pelo link.',
  'header.projectId': 'Projeto',
  'header.status': 'Status',
  'header.unknownStatus': 'Desconhecido',
  'header.client': 'Cliente',
  'header.site': 'Local',
  'header.budget': 'Orçamento',
  'header.dates': 'Datas',
  'header.transitions': 'Ações do ciclo de vida',
  'header.noTransitions': 'Nenhuma mudança de status disponível para este projeto no momento.',
  'transition.toActive': 'Ativar',
  'transition.toOnHold': 'Colocar em espera',
  'transition.toClosed': 'Encerrar projeto',
  'transition.toCancelled': 'Cancelar projeto',
  'transition.toPlanned': 'Voltar ao planejamento',
  'transition.confirm': 'Confirmar mudança de status',
  'transition.holdReason': s_pt_br['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label'],
  'transition.cancellationReason': s_pt_br['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label'],
  'transition.loading': 'Atualizando status…',
  'transition.success': s_pt_br['action.updateProjectStatusCmd.success'],
  'transition.error': s_pt_br['action.updateProjectStatusCmd.error'],
  'tab.details': 'Detalhes do projeto',
  'tab.create': 'Registrar projeto',
  'tab.detailsDisabled': 'Salve o projeto primeiro para editar os detalhes.',
  'details.heading': 'Detalhes a manter atualizados',
  'details.name': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label'],
  'details.clientId': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label'],
  'details.siteAddress': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label'],
  'details.budget': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label'],
  'details.startDate': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label'],
  'details.endDate': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label'],
  'details.save': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd'],
  'details.loading': 'Salvando detalhes…',
  'details.success': s_pt_br['action.updateProjectCmd.success'],
  'details.error': s_pt_br['action.updateProjectCmd.error'],
  'details.needProject': 'Abra um projeto para editar os detalhes.',
  'create.heading': 'Registrar um novo projeto',
  'create.name': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label'],
  'create.clientId': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label'],
  'create.siteAddress': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label'],
  'create.budget': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label'],
  'create.startDate': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label'],
  'create.endDate': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label'],
  'create.save': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd'],
  'create.loading': 'Criando projeto…',
  'create.success': s_pt_br['action.createProjectCmd.success'],
  'create.error': s_pt_br['action.createProjectCmd.error'],
  'feedback.dismiss': 'Dispensar',
  'required': 'Obrigatório',
  'status.planned': 'Planejamento',
  'status.active': 'Ativo',
  'status.onHold': 'Em espera',
  'status.on_hold': 'Em espera',
  'status.closed': 'Encerrado',
  'status.cancelled': 'Cancelado',
  'status.canceled': 'Cancelado',
  'status.draft': 'Rascunho',
  'status.registered': 'Registrado',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'header.identity': 'Proyecto actual',
  'header.noProject': 'Ningún proyecto seleccionado — registre uno o abra un proyecto desde su enlace.',
  'header.projectId': 'Proyecto',
  'header.status': 'Estado',
  'header.unknownStatus': 'Desconocido',
  'header.client': 'Cliente',
  'header.site': 'Sitio',
  'header.budget': 'Presupuesto',
  'header.dates': 'Fechas',
  'header.transitions': 'Acciones del ciclo de vida',
  'header.noTransitions': 'No hay cambios de estado disponibles para este proyecto ahora.',
  'transition.toActive': 'Activar',
  'transition.toOnHold': 'Poner en espera',
  'transition.toClosed': 'Cerrar proyecto',
  'transition.toCancelled': 'Cancelar proyecto',
  'transition.toPlanned': 'Volver a planificación',
  'transition.confirm': 'Confirmar cambio de estado',
  'transition.holdReason': s_es['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label'],
  'transition.cancellationReason': s_es['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label'],
  'transition.loading': 'Actualizando estado…',
  'transition.success': s_es['action.updateProjectStatusCmd.success'],
  'transition.error': s_es['action.updateProjectStatusCmd.error'],
  'tab.details': 'Detalles del proyecto',
  'tab.create': 'Registrar proyecto',
  'tab.detailsDisabled': 'Guarde el proyecto primero para editar los detalles.',
  'details.heading': 'Detalles a mantener al día',
  'details.name': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label'],
  'details.clientId': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label'],
  'details.siteAddress': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label'],
  'details.budget': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label'],
  'details.startDate': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label'],
  'details.endDate': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label'],
  'details.save': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd'],
  'details.loading': 'Guardando detalles…',
  'details.success': s_es['action.updateProjectCmd.success'],
  'details.error': s_es['action.updateProjectCmd.error'],
  'details.needProject': 'Abra un proyecto para editar sus detalles.',
  'create.heading': 'Registrar un nuevo proyecto',
  'create.name': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label'],
  'create.clientId': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label'],
  'create.siteAddress': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label'],
  'create.budget': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label'],
  'create.startDate': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label'],
  'create.endDate': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label'],
  'create.save': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd'],
  'create.loading': 'Creando proyecto…',
  'create.success': s_es['action.createProjectCmd.success'],
  'create.error': s_es['action.createProjectCmd.error'],
  'feedback.dismiss': 'Descartar',
  'required': 'Obligatorio',
  'status.planned': 'Planificación',
  'status.active': 'Activo',
  'status.onHold': 'En espera',
  'status.on_hold': 'En espera',
  'status.closed': 'Cerrado',
  'status.cancelled': 'Cancelado',
  'status.canceled': 'Cancelado',
  'status.draft': 'Borrador',
  'status.registered': 'Registrado',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page31--project-lifecycle-workspace-102045')
export class BuildFlowFsmDesktopPage31ProjectLifecycleWorkspacePage extends BuildFlowFsmProjectLifecycleWorkspaceBase {
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
    const projectId = this.resolveProjectId();
    const hasProject = projectId.length > 0;
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="mx-auto flex w-full max-w-6xl flex-col gap-4 p-4 md:p-6">
          ${this.renderIdentityHeader(msg, projectId, hasProject)}
          ${this.renderTabShell(msg, hasProject)}
        </div>
      </div>
    `;
  }

  private resolveProjectId(): string {
    const fromUpdate = (this.updateProjectCmdProjectId || '').trim();
    if (fromUpdate) {
      return fromUpdate;
    }
    const fromStatus = (this.updateProjectStatusCmdProjectId || '').trim();
    if (fromStatus) {
      return fromStatus;
    }
    const created = this.readStringField(this.createProjectCmdOutput, 'projectId');
    return created;
  }

  private readStringField(source: unknown, key: string): string {
    if (!source || typeof source !== 'object') {
      return '';
    }
    const record = source as Record<string, unknown>;
    const value = record[key];
    if (value === null || value === undefined) {
      return '';
    }
    return String(value);
  }

  private resolveCurrentStatus(): string {
    const fromStatusOut = this.readStringField(this.updateProjectStatusCmdOutput, 'status');
    if (fromStatusOut) {
      return fromStatusOut;
    }
    const fromUpdateOut = this.readStringField(this.updateProjectCmdOutput, 'status');
    if (fromUpdateOut) {
      return fromUpdateOut;
    }
    const fromCreateOut = this.readStringField(this.createProjectCmdOutput, 'status');
    if (fromCreateOut) {
      return fromCreateOut;
    }
    const pending = (this.updateProjectStatusCmdStatus || '').trim();
    return pending;
  }

  private resolveDisplayName(): string {
    const typed = (this.updateProjectCmdName || '').trim();
    if (typed) {
      return typed;
    }
    const fromUpdate = this.readStringField(this.updateProjectCmdOutput, 'name');
    if (fromUpdate) {
      return fromUpdate;
    }
    const fromStatus = this.readStringField(this.updateProjectStatusCmdOutput, 'name');
    if (fromStatus) {
      return fromStatus;
    }
    return this.readStringField(this.createProjectCmdOutput, 'name');
  }

  private resolveClientId(): string {
    const typed = (this.updateProjectCmdClientId || '').trim();
    if (typed) {
      return typed;
    }
    const fromUpdate = this.readStringField(this.updateProjectCmdOutput, 'clientId');
    if (fromUpdate) {
      return fromUpdate;
    }
    return this.readStringField(this.createProjectCmdOutput, 'clientId');
  }

  private resolveSiteAddress(): string {
    const typed = (this.updateProjectCmdSiteAddress || '').trim();
    if (typed) {
      return typed;
    }
    const fromUpdate = this.readStringField(this.updateProjectCmdOutput, 'siteAddress');
    if (fromUpdate) {
      return fromUpdate;
    }
    return this.readStringField(this.createProjectCmdOutput, 'siteAddress');
  }

  private resolveBudget(): string {
    const typed = (this.updateProjectCmdBudget || '').trim();
    if (typed) {
      return typed;
    }
    const fromUpdate = this.readStringField(this.updateProjectCmdOutput, 'budget');
    if (fromUpdate) {
      return fromUpdate;
    }
    return this.readStringField(this.createProjectCmdOutput, 'budget');
  }

  private resolveDateRange(): string {
    const startTyped = (this.updateProjectCmdStartDate || '').trim();
    const endTyped = (this.updateProjectCmdEndDate || '').trim();
    const start =
      startTyped ||
      this.readStringField(this.updateProjectCmdOutput, 'startDate') ||
      this.readStringField(this.createProjectCmdOutput, 'startDate');
    const end =
      endTyped ||
      this.readStringField(this.updateProjectCmdOutput, 'endDate') ||
      this.readStringField(this.createProjectCmdOutput, 'endDate');
    if (start && end) {
      return `${start} → ${end}`;
    }
    return start || end || '';
  }

  private normalizeStatus(raw: string): string {
    return raw.trim().replace(/\s+/g, '_').replace(/-/g, '_').toLowerCase();
  }

  private statusLabel(msg: PageMessageType, raw: string): string {
    const normalized = this.normalizeStatus(raw);
    if (!normalized) {
      return msg['header.unknownStatus'];
    }
    const key = `status.${normalized}` as keyof PageMessageType;
    if (key in msg) {
      return msg[key];
    }
    const camelKey = `status.${raw.trim()}` as keyof PageMessageType;
    if (camelKey in msg) {
      return msg[camelKey];
    }
    return raw;
  }

  private allowedTransitions(currentRaw: string): string[] {
    const current = this.normalizeStatus(currentRaw);
    if (!current || current === 'draft' || current === 'planned' || current === 'registered') {
      return ['active', 'cancelled'];
    }
    if (current === 'active') {
      return ['onHold', 'closed', 'cancelled'];
    }
    if (current === 'onhold' || current === 'on_hold') {
      return ['active', 'cancelled'];
    }
    return [];
  }

  private transitionNeedsHoldReason(target: string): boolean {
    const n = this.normalizeStatus(target);
    return n === 'onhold' || n === 'on_hold';
  }

  private transitionNeedsCancellationReason(target: string): boolean {
    const n = this.normalizeStatus(target);
    return n === 'cancelled' || n === 'canceled';
  }

  private transitionLabel(msg: PageMessageType, target: string): string {
    const n = this.normalizeStatus(target);
    if (n === 'active') {
      return msg['transition.toActive'];
    }
    if (n === 'onhold' || n === 'on_hold') {
      return msg['transition.toOnHold'];
    }
    if (n === 'closed') {
      return msg['transition.toClosed'];
    }
    if (n === 'cancelled' || n === 'canceled') {
      return msg['transition.toCancelled'];
    }
    if (n === 'planned' || n === 'draft' || n === 'registered') {
      return msg['transition.toPlanned'];
    }
    return target;
  }

  private transitionButtonClass(target: string): string {
    const n = this.normalizeStatus(target);
    if (n === 'cancelled' || n === 'canceled') {
      return 'bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)] hover:bg-[var(--button-danger-bg-hover,#b91c1c)]';
    }
    if (n === 'closed') {
      return 'bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]';
    }
    return 'bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] hover:bg-[var(--button-primary-bg-hover,#1d4ed8)]';
  }

  private applyTransition(target: string): void {
    const statusValue = this.normalizeStatus(target) === 'onhold' ? 'onHold' : target;
    this.setUpdateProjectStatusCmdStatus(statusValue);
    if (!this.transitionNeedsHoldReason(target) && !this.transitionNeedsCancellationReason(target)) {
      this.setUpdateProjectStatusCmdHoldReason('');
      this.setUpdateProjectStatusCmdCancellationReason('');
      this.handleUpdateProjectStatusCmdClick();
    }
  }

  private confirmPendingTransition(): void {
    this.handleUpdateProjectStatusCmdClick();
  }

  renderIdentityHeader(msg: PageMessageType, projectId: string, hasProject: boolean): TemplateResult {
    const statusRaw = this.resolveCurrentStatus();
    const name = this.resolveDisplayName();
    const clientId = this.resolveClientId();
    const site = this.resolveSiteAddress();
    const budget = this.resolveBudget();
    const dates = this.resolveDateRange();
    const transitions = hasProject ? this.allowedTransitions(statusRaw) : [];
    const pendingTarget = (this.updateProjectStatusCmdStatus || '').trim();
    const showHoldReason =
      hasProject && pendingTarget.length > 0 && this.transitionNeedsHoldReason(pendingTarget);
    const showCancelReason =
      hasProject && pendingTarget.length > 0 && this.transitionNeedsCancellationReason(pendingTarget);
    const statusLoading = this.updateProjectStatusCmdState === 'loading';
    const statusSuccess = this.updateProjectStatusCmdState === 'success';
    const statusError = this.updateProjectStatusCmdState === 'error';

    return html`
      <header
        class="sticky top-0 z-10 rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 shadow-[var(--shadow-small,0_1px_2px_rgba(15,23,42,0.06))]"
      >
        <div class="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
          <div class="flex min-w-0 flex-col gap-2">
            <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">
              ${msg['header.identity']}
            </p>
            ${hasProject
              ? html`
                  <div class="flex flex-wrap items-center gap-2">
                    <h2 class="truncate text-xl font-semibold text-[var(--text-strong,#020617)]">
                      ${name || msg['header.projectId']}
                    </h2>
                    <span
                      class="inline-flex items-center rounded-full bg-[var(--status-info-bg,#dbeafe)] px-2.5 py-0.5 text-xs font-medium text-[var(--status-info-text,#1e3a8a)]"
                    >
                      ${msg['header.status']}: ${this.statusLabel(msg, statusRaw)}
                    </span>
                  </div>
                  <dl class="grid grid-cols-1 gap-2 text-sm sm:grid-cols-2 lg:grid-cols-4">
                    <div>
                      <dt class="text-[var(--text-muted,#64748b)]">${msg['header.projectId']}</dt>
                      <dd class="font-medium text-[var(--text-default,#0f172a)]">${projectId}</dd>
                    </div>
                    ${clientId
                      ? html`
                          <div>
                            <dt class="text-[var(--text-muted,#64748b)]">${msg['header.client']}</dt>
                            <dd class="font-medium text-[var(--text-default,#0f172a)]">${clientId}</dd>
                          </div>
                        `
                      : nothing}
                    ${site
                      ? html`
                          <div>
                            <dt class="text-[var(--text-muted,#64748b)]">${msg['header.site']}</dt>
                            <dd class="font-medium text-[var(--text-default,#0f172a)]">${site}</dd>
                          </div>
                        `
                      : nothing}
                    ${budget
                      ? html`
                          <div>
                            <dt class="text-[var(--text-muted,#64748b)]">${msg['header.budget']}</dt>
                            <dd class="font-medium text-[var(--text-default,#0f172a)]">${budget}</dd>
                          </div>
                        `
                      : nothing}
                    ${dates
                      ? html`
                          <div class="sm:col-span-2">
                            <dt class="text-[var(--text-muted,#64748b)]">${msg['header.dates']}</dt>
                            <dd class="font-medium text-[var(--text-default,#0f172a)]">${dates}</dd>
                          </div>
                        `
                      : nothing}
                  </dl>
                `
              : html`
                  <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['header.noProject']}</p>
                `}
          </div>
        </div>

        ${hasProject
          ? html`
              <div class="mt-4 border-t border-[var(--border-subtle,#f1f5f9)] pt-3">
                <p class="mb-2 text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">
                  ${msg['header.transitions']}
                </p>
                ${transitions.length > 0
                  ? html`
                      <div class="flex flex-wrap gap-2">
                        ${transitions.map((target) => {
                          const label = this.transitionLabel(msg, target);
                          const isPending = this.normalizeStatus(pendingTarget) === this.normalizeStatus(target);
                          return html`
                            <button
                              type="button"
                              class="rounded-md px-3 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60 ${this.transitionButtonClass(
                                target,
                              )} ${isPending ? 'ring-2 ring-[var(--focus-ring,#93c5fd)]' : ''}"
                              ?disabled=${statusLoading}
                              @click=${() => {
                                this.applyTransition(target);
                              }}
                            >
                              ${label}
                            </button>
                          `;
                        })}
                      </div>
                    `
                  : html`
                      <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['header.noTransitions']}</p>
                    `}

                ${showHoldReason || showCancelReason
                  ? html`
                      <div
                        class="mt-3 grid grid-cols-1 gap-3 rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] p-3 md:grid-cols-2"
                      >
                        ${showHoldReason
                          ? html`
                              <label class="flex flex-col gap-1 text-sm">
                                <span class="font-medium text-[var(--text-default,#0f172a)]">
                                  ${msg['transition.holdReason']}
                                  <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
                                </span>
                                <input
                                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                                  type="text"
                                  .value=${this.updateProjectStatusCmdHoldReason}
                                  ?disabled=${statusLoading}
                                  @input=${(event: Event) => this.handleUpdateProjectStatusCmdHoldReasonChange(event)}
                                />
                              </label>
                            `
                          : nothing}
                        ${showCancelReason
                          ? html`
                              <label class="flex flex-col gap-1 text-sm">
                                <span class="font-medium text-[var(--text-default,#0f172a)]">
                                  ${msg['transition.cancellationReason']}
                                  <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
                                </span>
                                <input
                                  class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                                  type="text"
                                  .value=${this.updateProjectStatusCmdCancellationReason}
                                  ?disabled=${statusLoading}
                                  @input=${(event: Event) =>
                                    this.handleUpdateProjectStatusCmdCancellationReasonChange(event)}
                                />
                              </label>
                            `
                          : nothing}
                        <div class="flex items-end md:col-span-2">
                          <button
                            type="button"
                            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-3 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
                            ?disabled=${statusLoading ||
                            (showHoldReason && !(this.updateProjectStatusCmdHoldReason || '').trim()) ||
                            (showCancelReason && !(this.updateProjectStatusCmdCancellationReason || '').trim())}
                            @click=${() => {
                              this.confirmPendingTransition();
                            }}
                          >
                            ${statusLoading ? msg['transition.loading'] : msg['transition.confirm']}
                          </button>
                        </div>
                      </div>
                    `
                  : nothing}

                ${statusSuccess
                  ? html`
                      <div
                        class="mt-3 flex items-start justify-between gap-2 rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                        role="status"
                      >
                        <span>${msg['transition.success']}</span>
                      </div>
                    `
                  : nothing}
                ${statusError
                  ? html`
                      <div
                        class="mt-3 flex flex-col gap-2 rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                        role="alert"
                      >
                        <span>${this.updateProjectStatusCmdError || msg['transition.error']}</span>
                        <button
                          type="button"
                          class="self-start rounded-md bg-[var(--button-secondary-bg,#e2e8f0)] px-2 py-1 text-xs font-medium text-[var(--button-secondary-text,#0f172a)]"
                          ?disabled=${statusLoading}
                          @click=${(event: Event) => this.handleUpdateProjectStatusCmdClick(event)}
                        >
                          ${msg['transition.confirm']}
                        </button>
                      </div>
                    `
                  : nothing}
              </div>
            `
          : nothing}
      </header>
    `;
  }

  renderTabShell(msg: PageMessageType, hasProject: boolean): TemplateResult {
    const detailsTabId = 'plw-tab-details';
    const createTabId = 'plw-tab-create';
    const groupName = 'plw-subject-tabs';
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)]">
        <div
          class="flex flex-wrap gap-1 border-b border-[var(--border-default,#e2e8f0)] bg-[var(--surface-alt-bg,#f8fafc)] px-2 pt-2"
          role="tablist"
          aria-label=${msg['tab.details']}
        >
          <input
            class="peer/details sr-only"
            type="radio"
            name=${groupName}
            id=${detailsTabId}
            ?checked=${hasProject}
            ?disabled=${!hasProject}
          />
          <label
            for=${detailsTabId}
            class="cursor-pointer rounded-t-md px-4 py-2 text-sm font-medium text-[var(--text-muted,#64748b)] peer-checked/details:bg-[var(--surface-bg,#ffffff)] peer-checked/details:text-[var(--text-strong,#020617)] peer-checked/details:shadow-[inset_0_-2px_0_0_var(--selected-border,#2563eb)] peer-disabled/details:cursor-not-allowed peer-disabled/details:opacity-50"
            title=${hasProject ? '' : msg['tab.detailsDisabled']}
          >
            ${msg['tab.details']}
          </label>

          <input
            class="peer/create sr-only"
            type="radio"
            name=${groupName}
            id=${createTabId}
            ?checked=${!hasProject}
          />
          <label
            for=${createTabId}
            class="cursor-pointer rounded-t-md px-4 py-2 text-sm font-medium text-[var(--text-muted,#64748b)] peer-checked/create:bg-[var(--surface-bg,#ffffff)] peer-checked/create:text-[var(--text-strong,#020617)] peer-checked/create:shadow-[inset_0_-2px_0_0_var(--selected-border,#2563eb)]"
          >
            ${msg['tab.create']}
          </label>

          <div class="hidden w-full peer-checked/details:block">
            ${this.renderDetailsTab(msg, hasProject)}
          </div>
          <div class="hidden w-full peer-checked/create:block">
            ${this.renderCreateTab(msg)}
          </div>
        </div>
      </section>
    `;
  }

  renderDetailsTab(msg: PageMessageType, hasProject: boolean): TemplateResult {
    const loading = this.updateProjectCmdState === 'loading';
    const success = this.updateProjectCmdState === 'success';
    const error = this.updateProjectCmdState === 'error';
    const canSave =
      hasProject &&
      !loading &&
      !!(this.updateProjectCmdName || '').trim() &&
      !!(this.updateProjectCmdClientId || '').trim() &&
      !!(this.updateProjectCmdSiteAddress || '').trim() &&
      !!(this.updateProjectCmdBudget || '').trim() &&
      !!(this.updateProjectCmdStartDate || '').trim() &&
      !!(this.updateProjectCmdEndDate || '').trim();

    if (!hasProject) {
      return html`
        <div class="p-4 text-sm text-[var(--text-muted,#64748b)]">${msg['details.needProject']}</div>
      `;
    }

    return html`
      <div class="flex flex-col gap-4 p-4">
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['details.heading']}</p>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">
              ${msg['details.name']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.updateProjectCmdName}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleUpdateProjectCmdNameChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">
              ${msg['details.clientId']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.updateProjectCmdClientId}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleUpdateProjectCmdClientIdChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm md:col-span-2">
            <span class="font-medium">
              ${msg['details.siteAddress']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.updateProjectCmdSiteAddress}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleUpdateProjectCmdSiteAddressChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">
              ${msg['details.budget']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="number"
              .value=${this.updateProjectCmdBudget}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleUpdateProjectCmdBudgetChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">
              ${msg['details.startDate']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="date"
              .value=${this.updateProjectCmdStartDate}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleUpdateProjectCmdStartDateChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">
              ${msg['details.endDate']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="date"
              .value=${this.updateProjectCmdEndDate}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleUpdateProjectCmdEndDateChange(event)}
            />
          </label>
        </div>

        ${error
          ? html`
              <div
                class="rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                role="alert"
              >
                ${this.updateProjectCmdError || msg['details.error']}
              </div>
            `
          : nothing}
        ${success
          ? html`
              <div
                class="rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                role="status"
              >
                ${msg['details.success']}
              </div>
            `
          : nothing}

        <div class="flex justify-end">
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
            ?disabled=${!canSave}
            @click=${(event: Event) => this.handleUpdateProjectCmdClick(event)}
          >
            ${loading ? msg['details.loading'] : msg['details.save']}
          </button>
        </div>
      </div>
    `;
  }

  renderCreateTab(msg: PageMessageType): TemplateResult {
    const loading = this.createProjectCmdState === 'loading';
    const success = this.createProjectCmdState === 'success';
    const error = this.createProjectCmdState === 'error';
    const canSave =
      !loading &&
      !!(this.createProjectCmdName || '').trim() &&
      !!(this.createProjectCmdClientId || '').trim() &&
      !!(this.createProjectCmdSiteAddress || '').trim() &&
      !!(this.createProjectCmdBudget || '').trim() &&
      !!(this.createProjectCmdStartDate || '').trim() &&
      !!(this.createProjectCmdEndDate || '').trim();

    return html`
      <div class="flex flex-col gap-4 p-4">
        <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['create.heading']}</p>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">
              ${msg['create.name']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.createProjectCmdName}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCreateProjectCmdNameChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">
              ${msg['create.clientId']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.createProjectCmdClientId}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCreateProjectCmdClientIdChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm md:col-span-2">
            <span class="font-medium">
              ${msg['create.siteAddress']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="text"
              .value=${this.createProjectCmdSiteAddress}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCreateProjectCmdSiteAddressChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">
              ${msg['create.budget']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="number"
              .value=${this.createProjectCmdBudget}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCreateProjectCmdBudgetChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">
              ${msg['create.startDate']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="date"
              .value=${this.createProjectCmdStartDate}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCreateProjectCmdStartDateChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium">
              ${msg['create.endDate']}
              <span class="text-[var(--status-error-text,#b91c1c)]">*</span>
            </span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2"
              type="date"
              .value=${this.createProjectCmdEndDate}
              ?disabled=${loading}
              required
              @input=${(event: Event) => this.handleCreateProjectCmdEndDateChange(event)}
            />
          </label>
        </div>

        ${error
          ? html`
              <div
                class="rounded-md bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
                role="alert"
              >
                ${this.createProjectCmdError || msg['create.error']}
              </div>
            `
          : nothing}
        ${success
          ? html`
              <div
                class="rounded-md bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
                role="status"
              >
                ${msg['create.success']}
              </div>
            `
          : nothing}

        <div class="flex justify-end">
          <button
            type="button"
            class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-4 py-2 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
            ?disabled=${!canSave}
            @click=${(event: Event) => this.handleCreateProjectCmdClick(event)}
          >
            ${loading ? msg['create.loading'] : msg['create.save']}
          </button>
        </div>
      </div>
    `;
  }
}
