/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page21/projectLifecycleWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

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
  'page.eyebrow': 'Project workspace',
  'header.newTitle': 'New project',
  'header.editTitle': 'Project details',
  'header.statusUnknown': 'No status yet',
  'group.identity': 'Identity',
  'group.schedule': 'Schedule & budget',
  'group.site': 'Site',
  'label.name': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label'],
  'label.clientId': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label'],
  'label.siteAddress': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label'],
  'label.budget': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label'],
  'label.startDate': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label'],
  'label.endDate': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label'],
  'label.holdReason': s_en['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label'],
  'label.cancellationReason': s_en['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label'],
  'required': 'Required',
  'save.create': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd'],
  'save.update': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd'],
  'save.saving': 'Saving…',
  'create.success': s_en['action.createProjectCmd.success'],
  'create.error': s_en['action.createProjectCmd.error'],
  'update.success': s_en['action.updateProjectCmd.success'],
  'update.error': s_en['action.updateProjectCmd.error'],
  'status.success': s_en['action.updateProjectStatusCmd.success'],
  'status.error': s_en['action.updateProjectStatusCmd.error'],
  'transitions.title': 'Lifecycle actions',
  'transitions.hint': 'Only actions allowed from the current stage are shown. Reasons are required before hold or cancel.',
  'transition.activate': 'Activate project',
  'transition.hold': 'Put on hold',
  'transition.resume': 'Resume project',
  'transition.close': 'Close project',
  'transition.cancel': 'Cancel project',
  'transition.working': 'Updating status…',
  'transition.confirm.hold': 'Put this project on hold? Work will pause until it is resumed.',
  'transition.confirm.close': 'Close this project? Closure is intended as a final completion step.',
  'transition.confirm.cancel': 'Cancel this project? Cancellation should name the reason below.',
  'empty.route': 'Open a project from its link to edit details and run lifecycle actions, or register a new one below.',
  'feedback.createdId': 'Created project',
  'feedback.updatedId': 'Updated project',
  'feedback.statusId': 'Status updated for',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'page.eyebrow': 'Espaço de projetos',
  'header.newTitle': 'Novo projeto',
  'header.editTitle': 'Detalhes do projeto',
  'header.statusUnknown': 'Sem status ainda',
  'group.identity': 'Identidade',
  'group.schedule': 'Cronograma e orçamento',
  'group.site': 'Local',
  'label.name': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label'],
  'label.clientId': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label'],
  'label.siteAddress': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label'],
  'label.budget': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label'],
  'label.startDate': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label'],
  'label.endDate': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label'],
  'label.holdReason': s_pt_br['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label'],
  'label.cancellationReason': s_pt_br['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label'],
  'required': 'Obrigatório',
  'save.create': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd'],
  'save.update': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd'],
  'save.saving': 'Salvando…',
  'create.success': s_pt_br['action.createProjectCmd.success'],
  'create.error': s_pt_br['action.createProjectCmd.error'],
  'update.success': s_pt_br['action.updateProjectCmd.success'],
  'update.error': s_pt_br['action.updateProjectCmd.error'],
  'status.success': s_pt_br['action.updateProjectStatusCmd.success'],
  'status.error': s_pt_br['action.updateProjectStatusCmd.error'],
  'transitions.title': 'Ações do ciclo de vida',
  'transitions.hint': 'Somente ações permitidas a partir do estágio atual são exibidas. Motivos são obrigatórios antes de suspender ou cancelar.',
  'transition.activate': 'Ativar projeto',
  'transition.hold': 'Colocar em espera',
  'transition.resume': 'Retomar projeto',
  'transition.close': 'Encerrar projeto',
  'transition.cancel': 'Cancelar projeto',
  'transition.working': 'Atualizando status…',
  'transition.confirm.hold': 'Colocar este projeto em espera? O trabalho pausa até a retomada.',
  'transition.confirm.close': 'Encerrar este projeto? O encerramento é a etapa final de conclusão.',
  'transition.confirm.cancel': 'Cancelar este projeto? Informe o motivo abaixo.',
  'empty.route': 'Abra um projeto pelo link para editar detalhes e executar ações de ciclo de vida, ou registre um novo abaixo.',
  'feedback.createdId': 'Projeto criado',
  'feedback.updatedId': 'Projeto atualizado',
  'feedback.statusId': 'Status atualizado para',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'page.eyebrow': 'Espacio de proyectos',
  'header.newTitle': 'Nuevo proyecto',
  'header.editTitle': 'Detalles del proyecto',
  'header.statusUnknown': 'Sin estado aún',
  'group.identity': 'Identidad',
  'group.schedule': 'Cronograma y presupuesto',
  'group.site': 'Sitio',
  'label.name': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label'],
  'label.clientId': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label'],
  'label.siteAddress': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label'],
  'label.budget': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label'],
  'label.startDate': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label'],
  'label.endDate': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label'],
  'label.holdReason': s_es['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label'],
  'label.cancellationReason': s_es['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label'],
  'required': 'Obligatorio',
  'save.create': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd'],
  'save.update': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd'],
  'save.saving': 'Guardando…',
  'create.success': s_es['action.createProjectCmd.success'],
  'create.error': s_es['action.createProjectCmd.error'],
  'update.success': s_es['action.updateProjectCmd.success'],
  'update.error': s_es['action.updateProjectCmd.error'],
  'status.success': s_es['action.updateProjectStatusCmd.success'],
  'status.error': s_es['action.updateProjectStatusCmd.error'],
  'transitions.title': 'Acciones del ciclo de vida',
  'transitions.hint': 'Solo se muestran acciones permitidas desde la etapa actual. Los motivos son obligatorios antes de pausar o cancelar.',
  'transition.activate': 'Activar proyecto',
  'transition.hold': 'Poner en pausa',
  'transition.resume': 'Reanudar proyecto',
  'transition.close': 'Cerrar proyecto',
  'transition.cancel': 'Cancelar proyecto',
  'transition.working': 'Actualizando estado…',
  'transition.confirm.hold': '¿Poner este proyecto en pausa? El trabajo se detiene hasta reanudarlo.',
  'transition.confirm.close': '¿Cerrar este proyecto? El cierre es el paso final de finalización.',
  'transition.confirm.cancel': '¿Cancelar este proyecto? Indique el motivo abajo.',
  'empty.route': 'Abra un proyecto desde su enlace para editar detalles y ejecutar acciones de ciclo de vida, o registre uno nuevo abajo.',
  'feedback.createdId': 'Proyecto creado',
  'feedback.updatedId': 'Proyecto actualizado',
  'feedback.statusId': 'Estado actualizado para',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page21--project-lifecycle-workspace-102045')
export class BuildFlowFsmDesktopPage21ProjectLifecycleWorkspacePage extends BuildFlowFsmProjectLifecycleWorkspaceBase {
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
    const projectId: string = this.updateProjectCmdProjectId || this.updateProjectStatusCmdProjectId || '';
    const isEdit: boolean = projectId.length > 0;
    return html`
      <div class="min-h-full w-full bg-[var(--page-bg,#f8fafc)] text-[var(--text-default,#0f172a)]">
        <div class="mx-auto flex w-full max-w-3xl flex-col gap-6 px-4 py-6 md:px-8">
          ${this.renderIdentityHeader(msg, isEdit, projectId)}
          ${isEdit ? this.renderLifecycleTransitions(msg, projectId) : nothing}
          ${isEdit ? this.renderEditForm(msg, projectId) : this.renderCreateForm(msg)}
        </div>
      </div>
    `;
  }

  private renderIdentityHeader(msg: PageMessageType, isEdit: boolean, projectId: string): TemplateResult {
    const displayName: string = isEdit
      ? (this.updateProjectCmdName || msg['header.editTitle'])
      : (this.createProjectCmdName || msg['header.newTitle']);
    const statusLabel: string = this.resolveStatusLabel(msg);
    return html`
      <header class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(15,23,42,0.06))]">
        <p class="text-xs font-medium uppercase tracking-wide text-[var(--text-muted,#64748b)]">${msg['page.eyebrow']}</p>
        <div class="mt-2 flex flex-wrap items-start justify-between gap-3">
          <div class="min-w-0">
            <h1 class="truncate text-2xl font-semibold text-[var(--text-strong,#020617)]">${displayName}</h1>
            ${isEdit
              ? html`<p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${projectId}</p>`
              : html`<p class="mt-1 text-sm text-[var(--text-muted,#64748b)]">${msg['empty.route']}</p>`}
          </div>
          <span
            class="inline-flex items-center rounded-full border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-neutral-bg,#f1f5f9)] px-3 py-1 text-xs font-medium text-[var(--status-neutral-text,#334155)]"
          >
            ${statusLabel}
          </span>
        </div>
      </header>
    `;
  }

  private renderLifecycleTransitions(msg: PageMessageType, projectId: string): TemplateResult {
    const currentStatus: string = (this.updateProjectStatusCmdStatus || this.readOutputStatus() || '').toLowerCase();
    const loading: boolean = this.updateProjectStatusCmdState === 'loading';
    const transitions = this.allowedTransitions(currentStatus);
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(15,23,42,0.06))]">
        <div class="flex flex-col gap-1">
          <h2 class="text-sm font-semibold text-[var(--text-strong,#020617)]">${msg['transitions.title']}</h2>
          <p class="text-sm text-[var(--text-muted,#64748b)]">${msg['transitions.hint']}</p>
        </div>
        ${this.renderStatusFeedback(msg)}
        <div class="mt-4 grid gap-3 md:grid-cols-2">
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['label.holdReason']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
              type="text"
              .value=${this.updateProjectStatusCmdHoldReason}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleUpdateProjectStatusCmdHoldReasonChange(event)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm">
            <span class="font-medium text-[var(--text-default,#0f172a)]">${msg['label.cancellationReason']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
              type="text"
              .value=${this.updateProjectStatusCmdCancellationReason}
              ?disabled=${loading}
              @input=${(event: Event) => this.handleUpdateProjectStatusCmdCancellationReasonChange(event)}
            />
          </label>
        </div>
        <div class="mt-4 flex flex-wrap gap-2">
          ${transitions.length > 0
            ? transitions.map((item) => this.renderTransitionButton(msg, projectId, item.target, item.labelKey, item.confirmKey, item.needsHold, item.needsCancel, loading))
            : nothing}
        </div>
      </section>
    `;
  }

  private renderTransitionButton(
    msg: PageMessageType,
    projectId: string,
    targetStatus: string,
    labelKey: keyof PageMessageType,
    confirmKey: keyof PageMessageType | null,
    needsHold: boolean,
    needsCancel: boolean,
    loading: boolean,
  ): TemplateResult {
    const disabled: boolean =
      loading ||
      !projectId ||
      (needsHold && !this.updateProjectStatusCmdHoldReason.trim()) ||
      (needsCancel && !this.updateProjectStatusCmdCancellationReason.trim());
    const isDanger: boolean = targetStatus === 'cancelled' || targetStatus === 'closed';
    const btnClass: string = isDanger
      ? 'bg-[var(--button-danger-bg,#dc2626)] text-[var(--button-danger-text,#ffffff)]'
      : 'bg-[var(--button-secondary-bg,#e2e8f0)] text-[var(--button-secondary-text,#0f172a)] border border-[var(--button-secondary-border,#cbd5e1)]';
    return html`
      <button
        type="button"
        class="rounded-md px-4 py-2 text-sm font-medium disabled:cursor-not-allowed disabled:opacity-60 ${btnClass}"
        ?disabled=${disabled}
        @click=${(event: Event) => {
          if (confirmKey) {
            const ok: boolean = window.confirm(String(msg[confirmKey]));
            if (!ok) {
              return;
            }
          }
          this.setUpdateProjectStatusCmdProjectId(projectId);
          this.setUpdateProjectStatusCmdStatus(targetStatus);
          this.handleUpdateProjectStatusCmdClick(event);
        }}
      >
        ${loading ? msg['transition.working'] : msg[labelKey]}
      </button>
    `;
  }

  private renderCreateForm(msg: PageMessageType): TemplateResult {
    const loading: boolean = this.createProjectCmdState === 'loading';
    const canSave: boolean =
      !!this.createProjectCmdName.trim() &&
      !!this.createProjectCmdClientId.trim() &&
      !!this.createProjectCmdSiteAddress.trim() &&
      !!this.createProjectCmdBudget.trim() &&
      !!this.createProjectCmdStartDate.trim() &&
      !!this.createProjectCmdEndDate.trim();
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(15,23,42,0.06))]">
        <div class="flex flex-col gap-5">
          ${this.renderFieldGroup(msg['group.identity'], html`
            ${this.renderTextField(msg['label.name'], true, this.createProjectCmdName, loading, (e: Event) => this.handleCreateProjectCmdNameChange(e))}
            ${this.renderTextField(msg['label.clientId'], true, this.createProjectCmdClientId, loading, (e: Event) => this.handleCreateProjectCmdClientIdChange(e))}
          `)}
          ${this.renderFieldGroup(msg['group.site'], html`
            ${this.renderTextField(msg['label.siteAddress'], true, this.createProjectCmdSiteAddress, loading, (e: Event) => this.handleCreateProjectCmdSiteAddressChange(e))}
          `)}
          ${this.renderFieldGroup(msg['group.schedule'], html`
            ${this.renderTextField(msg['label.budget'], true, this.createProjectCmdBudget, loading, (e: Event) => this.handleCreateProjectCmdBudgetChange(e), 'number')}
            ${this.renderTextField(msg['label.startDate'], true, this.createProjectCmdStartDate, loading, (e: Event) => this.handleCreateProjectCmdStartDateChange(e), 'date')}
            ${this.renderTextField(msg['label.endDate'], true, this.createProjectCmdEndDate, loading, (e: Event) => this.handleCreateProjectCmdEndDateChange(e), 'date')}
          `)}
          ${this.renderCommandFeedback(
            this.createProjectCmdState,
            this.createProjectCmdError,
            msg['create.success'],
            msg['create.error'],
            this.formatCreateOutput(msg, this.createProjectCmdOutput),
          )}
          <div class="flex justify-end">
            <button
              type="button"
              class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-5 py-2.5 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
              ?disabled=${loading || !canSave}
              @click=${(event: Event) => this.handleCreateProjectCmdClick(event)}
            >
              ${loading ? msg['save.saving'] : msg['save.create']}
            </button>
          </div>
        </div>
      </section>
    `;
  }

  private renderEditForm(msg: PageMessageType, projectId: string): TemplateResult {
    const loading: boolean = this.updateProjectCmdState === 'loading';
    const canSave: boolean =
      !!projectId &&
      !!this.updateProjectCmdName.trim() &&
      !!this.updateProjectCmdClientId.trim() &&
      !!this.updateProjectCmdSiteAddress.trim() &&
      !!this.updateProjectCmdBudget.trim() &&
      !!this.updateProjectCmdStartDate.trim() &&
      !!this.updateProjectCmdEndDate.trim();
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-5 shadow-[var(--shadow-small,0_1px_2px_rgba(15,23,42,0.06))]">
        <div class="flex flex-col gap-5">
          ${this.renderFieldGroup(msg['group.identity'], html`
            ${this.renderTextField(msg['label.name'], true, this.updateProjectCmdName, loading, (e: Event) => this.handleUpdateProjectCmdNameChange(e))}
            ${this.renderTextField(msg['label.clientId'], true, this.updateProjectCmdClientId, loading, (e: Event) => this.handleUpdateProjectCmdClientIdChange(e))}
          `)}
          ${this.renderFieldGroup(msg['group.site'], html`
            ${this.renderTextField(msg['label.siteAddress'], true, this.updateProjectCmdSiteAddress, loading, (e: Event) => this.handleUpdateProjectCmdSiteAddressChange(e))}
          `)}
          ${this.renderFieldGroup(msg['group.schedule'], html`
            ${this.renderTextField(msg['label.budget'], true, this.updateProjectCmdBudget, loading, (e: Event) => this.handleUpdateProjectCmdBudgetChange(e), 'number')}
            ${this.renderTextField(msg['label.startDate'], true, this.updateProjectCmdStartDate, loading, (e: Event) => this.handleUpdateProjectCmdStartDateChange(e), 'date')}
            ${this.renderTextField(msg['label.endDate'], true, this.updateProjectCmdEndDate, loading, (e: Event) => this.handleUpdateProjectCmdEndDateChange(e), 'date')}
          `)}
          ${this.renderCommandFeedback(
            this.updateProjectCmdState,
            this.updateProjectCmdError,
            msg['update.success'],
            msg['update.error'],
            this.formatUpdateOutput(msg, this.updateProjectCmdOutput),
          )}
          <div class="flex justify-end">
            <button
              type="button"
              class="rounded-md bg-[var(--button-primary-bg,#2563eb)] px-5 py-2.5 text-sm font-medium text-[var(--button-primary-text,#ffffff)] disabled:cursor-not-allowed disabled:opacity-60"
              ?disabled=${loading || !canSave}
              @click=${(event: Event) => {
                this.setUpdateProjectCmdProjectId(projectId);
                this.handleUpdateProjectCmdClick(event);
              }}
            >
              ${loading ? msg['save.saving'] : msg['save.update']}
            </button>
          </div>
        </div>
      </section>
    `;
  }

  private renderFieldGroup(title: string, fields: TemplateResult): TemplateResult {
    return html`
      <div class="flex flex-col gap-3">
        <h2 class="text-sm font-semibold text-[var(--text-muted,#64748b)]">${title}</h2>
        <div class="grid gap-3 md:grid-cols-2">${fields}</div>
      </div>
    `;
  }

  private renderTextField(
    label: string,
    required: boolean,
    value: string,
    disabled: boolean,
    onInput: (event: Event) => void,
    type: string = 'text',
  ): TemplateResult {
    const msg = this.msg;
    return html`
      <label class="flex flex-col gap-1 text-sm md:col-span-1">
        <span class="font-medium text-[var(--text-default,#0f172a)]">
          ${label}
          ${required
            ? html`<span class="ml-1 text-xs font-normal text-[var(--text-muted,#64748b)]">(${msg['required']})</span>`
            : nothing}
        </span>
        <input
          class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)] outline-none focus:ring-2 focus:ring-[var(--focus-ring,#94a3b8)]"
          type=${type}
          .value=${value}
          ?disabled=${disabled}
          ?required=${required}
          @input=${onInput}
        />
      </label>
    `;
  }

  private renderCommandFeedback(
    state: 'idle' | 'loading' | 'success' | 'error',
    errorText: string,
    successMessage: string,
    errorMessage: string,
    detail: string,
  ): TemplateResult | typeof nothing {
    if (state === 'success') {
      return html`
        <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]" role="status">
          <p>${successMessage}</p>
          ${detail ? html`<p class="mt-1 text-xs opacity-90">${detail}</p>` : nothing}
        </div>
      `;
    }
    if (state === 'error') {
      return html`
        <div class="rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
          <p>${errorText || errorMessage}</p>
        </div>
      `;
    }
    return nothing;
  }

  private renderStatusFeedback(msg: PageMessageType): TemplateResult | typeof nothing {
    if (this.updateProjectStatusCmdState === 'success') {
      const detail: string = this.formatStatusOutput(msg, this.updateProjectStatusCmdOutput);
      return html`
        <div class="mt-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]" role="status">
          <p>${msg['status.success']}</p>
          ${detail ? html`<p class="mt-1 text-xs opacity-90">${detail}</p>` : nothing}
        </div>
      `;
    }
    if (this.updateProjectStatusCmdState === 'error') {
      return html`
        <div class="mt-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]" role="alert">
          <p>${this.updateProjectStatusCmdError || msg['status.error']}</p>
        </div>
      `;
    }
    return nothing;
  }

  private resolveStatusLabel(msg: PageMessageType): string {
    const fromInput: string = this.updateProjectStatusCmdStatus.trim();
    if (fromInput) {
      return fromInput;
    }
    const fromOutput: string = this.readOutputStatus();
    if (fromOutput) {
      return fromOutput;
    }
    return msg['header.statusUnknown'];
  }

  private readOutputStatus(): string {
    const statusOut: UpdateProjectStatusCmdOutput | null = this.updateProjectStatusCmdOutput;
    if (statusOut && typeof statusOut === 'object') {
      const record = statusOut as { status?: unknown };
      if (typeof record.status === 'string' && record.status) {
        return record.status;
      }
    }
    const updateOut: UpdateProjectCmdOutput | null = this.updateProjectCmdOutput;
    if (updateOut && typeof updateOut === 'object') {
      const record = updateOut as { status?: unknown };
      if (typeof record.status === 'string' && record.status) {
        return record.status;
      }
    }
    const createOut: CreateProjectCmdOutput | null = this.createProjectCmdOutput;
    if (createOut && typeof createOut === 'object') {
      const record = createOut as { status?: unknown };
      if (typeof record.status === 'string' && record.status) {
        return record.status;
      }
    }
    return '';
  }

  private allowedTransitions(
    currentStatus: string,
  ): Array<{
    target: string;
    labelKey: keyof PageMessageType;
    confirmKey: keyof PageMessageType | null;
    needsHold: boolean;
    needsCancel: boolean;
  }> {
    const status: string = currentStatus || 'draft';
    if (status === 'draft' || status === 'registered' || status === 'planned' || status === '') {
      return [
        { target: 'active', labelKey: 'transition.activate', confirmKey: null, needsHold: false, needsCancel: false },
        { target: 'cancelled', labelKey: 'transition.cancel', confirmKey: 'transition.confirm.cancel', needsHold: false, needsCancel: true },
      ];
    }
    if (status === 'active') {
      return [
        { target: 'on_hold', labelKey: 'transition.hold', confirmKey: 'transition.confirm.hold', needsHold: true, needsCancel: false },
        { target: 'closed', labelKey: 'transition.close', confirmKey: 'transition.confirm.close', needsHold: false, needsCancel: false },
        { target: 'cancelled', labelKey: 'transition.cancel', confirmKey: 'transition.confirm.cancel', needsHold: false, needsCancel: true },
      ];
    }
    if (status === 'on_hold' || status === 'hold' || status === 'paused') {
      return [
        { target: 'active', labelKey: 'transition.resume', confirmKey: null, needsHold: false, needsCancel: false },
        { target: 'cancelled', labelKey: 'transition.cancel', confirmKey: 'transition.confirm.cancel', needsHold: false, needsCancel: true },
      ];
    }
    if (status === 'closed' || status === 'cancelled') {
      return [];
    }
    return [
      { target: 'active', labelKey: 'transition.activate', confirmKey: null, needsHold: false, needsCancel: false },
      { target: 'on_hold', labelKey: 'transition.hold', confirmKey: 'transition.confirm.hold', needsHold: true, needsCancel: false },
      { target: 'closed', labelKey: 'transition.close', confirmKey: 'transition.confirm.close', needsHold: false, needsCancel: false },
      { target: 'cancelled', labelKey: 'transition.cancel', confirmKey: 'transition.confirm.cancel', needsHold: false, needsCancel: true },
    ];
  }

  private formatCreateOutput(msg: PageMessageType, output: CreateProjectCmdOutput | null): string {
    if (!output || typeof output !== 'object') {
      return '';
    }
    const record = output as { projectId?: unknown; id?: unknown };
    const id: string =
      typeof record.projectId === 'string'
        ? record.projectId
        : typeof record.id === 'string'
          ? record.id
          : '';
    return id ? `${msg['feedback.createdId']}: ${id}` : '';
  }

  private formatUpdateOutput(msg: PageMessageType, output: UpdateProjectCmdOutput | null): string {
    if (!output || typeof output !== 'object') {
      return '';
    }
    const record = output as { projectId?: unknown; id?: unknown };
    const id: string =
      typeof record.projectId === 'string'
        ? record.projectId
        : typeof record.id === 'string'
          ? record.id
          : '';
    return id ? `${msg['feedback.updatedId']}: ${id}` : '';
  }

  private formatStatusOutput(msg: PageMessageType, output: UpdateProjectStatusCmdOutput | null): string {
    if (!output || typeof output !== 'object') {
      return '';
    }
    const record = output as { projectId?: unknown; id?: unknown; status?: unknown };
    const id: string =
      typeof record.projectId === 'string'
        ? record.projectId
        : typeof record.id === 'string'
          ? record.id
          : '';
    const status: string = typeof record.status === 'string' ? record.status : '';
    if (id && status) {
      return `${msg['feedback.statusId']} ${id}: ${status}`;
    }
    if (status) {
      return status;
    }
    return id ? `${msg['feedback.statusId']} ${id}` : '';
  }
}
