/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectLifecycleWorkspace.ts" enhancement="_102020_/l2/enhancementAura"/>

import { html, nothing, type TemplateResult } from 'lit';
import { customElement } from 'lit/decorators.js';
import { BuildFlowFsmProjectLifecycleWorkspaceBase, messages as sharedMessages } from '/_102045_/l2/buildFlowFsm/web/shared/projectLifecycleWorkspace.js';

const sharedFallback = sharedMessages[Object.keys(sharedMessages)[0]];

/// **collab_i18n_start**
const s_en = sharedMessages['en'] ?? sharedFallback;
const pageMessage_en = {
  'page.title': s_en['section.projectLifecycleWorkspace.sec-project-detail.title'],
  'create.section': s_en['section.projectLifecycleWorkspace.sec-create-project.title'],
  'create.action': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd'],
  'create.name': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label'],
  'create.clientId': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label'],
  'create.siteAddress': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label'],
  'create.budget': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label'],
  'create.startDate': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label'],
  'create.endDate': s_en['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label'],
  'create.success': s_en['action.createProjectCmd.success'],
  'create.error': s_en['action.createProjectCmd.error'],
  'edit.section': s_en['section.projectLifecycleWorkspace.sec-edit-project.title'],
  'edit.action': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd'],
  'edit.name': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label'],
  'edit.clientId': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label'],
  'edit.siteAddress': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label'],
  'edit.budget': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label'],
  'edit.startDate': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label'],
  'edit.endDate': s_en['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label'],
  'edit.success': s_en['action.updateProjectCmd.success'],
  'edit.error': s_en['action.updateProjectCmd.error'],
  'status.section': s_en['section.projectLifecycleWorkspace.projectStatusSection.title'],
  'status.action': s_en['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd'],
  'status.status': s_en['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label'],
  'status.holdReason': s_en['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label'],
  'status.cancellationReason': s_en['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label'],
  'status.success': s_en['action.updateProjectStatusCmd.success'],
  'status.error': s_en['action.updateProjectStatusCmd.error'],
  'feedback.dismiss': 'Dismiss',
  'loading': 'Working…',
  'edit.noProject': 'Open a project from the route to edit its details.',
  'status.noProject': 'Open a project from the route to update its status.',
};
type PageMessageType = typeof pageMessage_en;
const s_pt_br = sharedMessages['pt-br'] ?? sharedFallback;
const pageMessage_pt_br: PageMessageType = {
  'page.title': s_pt_br['section.projectLifecycleWorkspace.sec-project-detail.title'],
  'create.section': s_pt_br['section.projectLifecycleWorkspace.sec-create-project.title'],
  'create.action': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd'],
  'create.name': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label'],
  'create.clientId': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label'],
  'create.siteAddress': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label'],
  'create.budget': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label'],
  'create.startDate': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label'],
  'create.endDate': s_pt_br['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label'],
  'create.success': s_pt_br['action.createProjectCmd.success'],
  'create.error': s_pt_br['action.createProjectCmd.error'],
  'edit.section': s_pt_br['section.projectLifecycleWorkspace.sec-edit-project.title'],
  'edit.action': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd'],
  'edit.name': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label'],
  'edit.clientId': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label'],
  'edit.siteAddress': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label'],
  'edit.budget': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label'],
  'edit.startDate': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label'],
  'edit.endDate': s_pt_br['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label'],
  'edit.success': s_pt_br['action.updateProjectCmd.success'],
  'edit.error': s_pt_br['action.updateProjectCmd.error'],
  'status.section': s_pt_br['section.projectLifecycleWorkspace.projectStatusSection.title'],
  'status.action': s_pt_br['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd'],
  'status.status': s_pt_br['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label'],
  'status.holdReason': s_pt_br['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label'],
  'status.cancellationReason': s_pt_br['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label'],
  'status.success': s_pt_br['action.updateProjectStatusCmd.success'],
  'status.error': s_pt_br['action.updateProjectStatusCmd.error'],
  'feedback.dismiss': 'Dispensar',
  'loading': 'Processando…',
  'edit.noProject': 'Abra um projeto pela rota para editar os detalhes.',
  'status.noProject': 'Abra um projeto pela rota para atualizar o status.',
};
const s_es = sharedMessages['es'] ?? sharedFallback;
const pageMessage_es: PageMessageType = {
  'page.title': s_es['section.projectLifecycleWorkspace.sec-project-detail.title'],
  'create.section': s_es['section.projectLifecycleWorkspace.sec-create-project.title'],
  'create.action': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.action.createProjectCmd'],
  'create.name': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.name.label'],
  'create.clientId': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.clientId.label'],
  'create.siteAddress': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.siteAddress.label'],
  'create.budget': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.budget.label'],
  'create.startDate': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.startDate.label'],
  'create.endDate': s_es['intent.projectLifecycleWorkspace.createProjectCmd.form.field.endDate.label'],
  'create.success': s_es['action.createProjectCmd.success'],
  'create.error': s_es['action.createProjectCmd.error'],
  'edit.section': s_es['section.projectLifecycleWorkspace.sec-edit-project.title'],
  'edit.action': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.action.updateProjectCmd'],
  'edit.name': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.name.label'],
  'edit.clientId': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.clientId.label'],
  'edit.siteAddress': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.siteAddress.label'],
  'edit.budget': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.budget.label'],
  'edit.startDate': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.startDate.label'],
  'edit.endDate': s_es['intent.projectLifecycleWorkspace.updateProjectCmd.form.field.endDate.label'],
  'edit.success': s_es['action.updateProjectCmd.success'],
  'edit.error': s_es['action.updateProjectCmd.error'],
  'status.section': s_es['section.projectLifecycleWorkspace.projectStatusSection.title'],
  'status.action': s_es['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.action.updateProjectStatusCmd'],
  'status.status': s_es['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.status.label'],
  'status.holdReason': s_es['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.holdReason.label'],
  'status.cancellationReason': s_es['intent.projectLifecycleWorkspace.updateProjectStatusCmd.form.field.cancellationReason.label'],
  'status.success': s_es['action.updateProjectStatusCmd.success'],
  'status.error': s_es['action.updateProjectStatusCmd.error'],
  'feedback.dismiss': 'Descartar',
  'loading': 'Procesando…',
  'edit.noProject': 'Abra un proyecto desde la ruta para editar sus detalles.',
  'status.noProject': 'Abra un proyecto desde la ruta para actualizar su estado.',
};
const pageMessages: { [key: string]: PageMessageType } = { 'en': pageMessage_en, 'pt-br': pageMessage_pt_br, 'es': pageMessage_es };
/// **collab_i18n_end**

const pageFallback = pageMessages[Object.keys(pageMessages)[0]];

@customElement('build-flow-fsm--web--desktop--page11--project-lifecycle-workspace-102045')
export class BuildFlowFsmDesktopPage11ProjectLifecycleWorkspacePage extends BuildFlowFsmProjectLifecycleWorkspaceBase {
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
    return html`
      <div class="min-h-full bg-[var(--page-bg,#f8fafc)]">
        <div class="max-w-6xl mx-auto px-4 py-6 space-y-6">
          ${this.renderHeader()}
          ${this.renderCreateProject()}
          ${this.renderUpdateProject()}
          ${this.renderUpdateProjectStatus()}
        </div>
      </div>
    `;
  }

  renderHeader(): TemplateResult {
    const msg = this.msg;
    return html`
      <header class="space-y-1">
        <h1 class="text-2xl font-semibold text-[var(--text-strong,#0f172a)]">${msg['page.title']}</h1>
      </header>
    `;
  }

  renderCreateProject(): TemplateResult {
    const msg = this.msg;
    const loading = this.createProjectCmdState === 'loading';
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['create.section']}</h2>
        ${this.renderCreateFeedback()}
        <form class="grid grid-cols-1 md:grid-cols-2 gap-4" @submit=${(e: Event) => this.handleCreateProjectCmdClick(e)}>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['create.name']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              name="name"
              required
              .value=${this.createProjectCmdName}
              ?disabled=${loading}
              @input=${(e: Event) => this.handleCreateProjectCmdNameChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['create.clientId']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              name="clientId"
              required
              .value=${this.createProjectCmdClientId}
              ?disabled=${loading}
              @input=${(e: Event) => this.handleCreateProjectCmdClientIdChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)] md:col-span-2">
            <span>${msg['create.siteAddress']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="text"
              name="siteAddress"
              required
              .value=${this.createProjectCmdSiteAddress}
              ?disabled=${loading}
              @input=${(e: Event) => this.handleCreateProjectCmdSiteAddressChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['create.budget']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="number"
              name="budget"
              required
              .value=${this.createProjectCmdBudget}
              ?disabled=${loading}
              @input=${(e: Event) => this.handleCreateProjectCmdBudgetChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['create.startDate']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="date"
              name="startDate"
              required
              .value=${this.createProjectCmdStartDate}
              ?disabled=${loading}
              @input=${(e: Event) => this.handleCreateProjectCmdStartDateChange(e)}
            />
          </label>
          <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
            <span>${msg['create.endDate']}</span>
            <input
              class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
              type="date"
              name="endDate"
              required
              .value=${this.createProjectCmdEndDate}
              ?disabled=${loading}
              @input=${(e: Event) => this.handleCreateProjectCmdEndDateChange(e)}
            />
          </label>
          <div class="md:col-span-2 flex justify-end">
            <button
              type="submit"
              class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
              ?disabled=${loading}
            >
              ${loading ? msg['loading'] : msg['create.action']}
            </button>
          </div>
        </form>
      </section>
    `;
  }

  renderCreateFeedback(): TemplateResult | typeof nothing {
    const msg = this.msg;
    if (this.createProjectCmdState === 'success') {
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
          role="status"
        >
          <span>${msg['create.success']}</span>
          <button
            type="button"
            class="underline text-[var(--status-success-text,#166534)]"
            @click=${() => {
              this.createProjectCmdState = 'idle';
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.createProjectCmdState === 'error') {
      const errText = this.createProjectCmdError || msg['create.error'];
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
          role="alert"
        >
          <span>${errText}</span>
          <button
            type="button"
            class="underline text-[var(--status-error-text,#991b1b)]"
            @click=${() => {
              this.createProjectCmdState = 'idle';
              this.createProjectCmdError = '';
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderUpdateProject(): TemplateResult {
    const msg = this.msg;
    const loading = this.updateProjectCmdState === 'loading';
    const hasProject = Boolean(this.updateProjectCmdProjectId);
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['edit.section']}</h2>
        ${this.renderUpdateFeedback()}
        ${hasProject
          ? html`
              <form class="grid grid-cols-1 md:grid-cols-2 gap-4" @submit=${(e: Event) => this.handleUpdateProjectCmdClick(e)}>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span>${msg['edit.name']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    name="name"
                    required
                    .value=${this.updateProjectCmdName}
                    ?disabled=${loading}
                    @input=${(e: Event) => this.handleUpdateProjectCmdNameChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span>${msg['edit.clientId']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    name="clientId"
                    required
                    .value=${this.updateProjectCmdClientId}
                    ?disabled=${loading}
                    @input=${(e: Event) => this.handleUpdateProjectCmdClientIdChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)] md:col-span-2">
                  <span>${msg['edit.siteAddress']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    name="siteAddress"
                    required
                    .value=${this.updateProjectCmdSiteAddress}
                    ?disabled=${loading}
                    @input=${(e: Event) => this.handleUpdateProjectCmdSiteAddressChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span>${msg['edit.budget']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="number"
                    name="budget"
                    required
                    .value=${this.updateProjectCmdBudget}
                    ?disabled=${loading}
                    @input=${(e: Event) => this.handleUpdateProjectCmdBudgetChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span>${msg['edit.startDate']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    name="startDate"
                    required
                    .value=${this.updateProjectCmdStartDate}
                    ?disabled=${loading}
                    @input=${(e: Event) => this.handleUpdateProjectCmdStartDateChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span>${msg['edit.endDate']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="date"
                    name="endDate"
                    required
                    .value=${this.updateProjectCmdEndDate}
                    ?disabled=${loading}
                    @input=${(e: Event) => this.handleUpdateProjectCmdEndDateChange(e)}
                  />
                </label>
                <div class="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                    ?disabled=${loading}
                  >
                    ${loading ? msg['loading'] : msg['edit.action']}
                  </button>
                </div>
              </form>
            `
          : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['edit.noProject']}</p>`}
      </section>
    `;
  }

  renderUpdateFeedback(): TemplateResult | typeof nothing {
    const msg = this.msg;
    if (this.updateProjectCmdState === 'success') {
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
          role="status"
        >
          <span>${msg['edit.success']}</span>
          <button
            type="button"
            class="underline text-[var(--status-success-text,#166534)]"
            @click=${() => {
              this.updateProjectCmdState = 'idle';
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.updateProjectCmdState === 'error') {
      const errText = this.updateProjectCmdError || msg['edit.error'];
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
          role="alert"
        >
          <span>${errText}</span>
          <button
            type="button"
            class="underline text-[var(--status-error-text,#991b1b)]"
            @click=${() => {
              this.updateProjectCmdState = 'idle';
              this.updateProjectCmdError = '';
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    return nothing;
  }

  renderUpdateProjectStatus(): TemplateResult {
    const msg = this.msg;
    const loading = this.updateProjectStatusCmdState === 'loading';
    const hasProject = Boolean(this.updateProjectStatusCmdProjectId);
    return html`
      <section class="rounded-lg border border-[var(--border-default,#e2e8f0)] bg-[var(--surface-bg,#ffffff)] p-4 space-y-4">
        <h2 class="text-lg font-medium text-[var(--text-strong,#0f172a)]">${msg['status.section']}</h2>
        ${this.renderStatusFeedback()}
        ${hasProject
          ? html`
              <form class="grid grid-cols-1 md:grid-cols-2 gap-4" @submit=${(e: Event) => this.handleUpdateProjectStatusCmdClick(e)}>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span>${msg['status.status']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    name="status"
                    required
                    .value=${this.updateProjectStatusCmdStatus}
                    ?disabled=${loading}
                    @input=${(e: Event) => this.handleUpdateProjectStatusCmdStatusChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)]">
                  <span>${msg['status.holdReason']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    name="holdReason"
                    .value=${this.updateProjectStatusCmdHoldReason}
                    ?disabled=${loading}
                    @input=${(e: Event) => this.handleUpdateProjectStatusCmdHoldReasonChange(e)}
                  />
                </label>
                <label class="flex flex-col gap-1 text-sm text-[var(--text-default,#0f172a)] md:col-span-2">
                  <span>${msg['status.cancellationReason']}</span>
                  <input
                    class="rounded-md border border-[var(--border-default,#e2e8f0)] bg-[var(--input-bg,#ffffff)] px-3 py-2 text-[var(--text-default,#0f172a)]"
                    type="text"
                    name="cancellationReason"
                    .value=${this.updateProjectStatusCmdCancellationReason}
                    ?disabled=${loading}
                    @input=${(e: Event) => this.handleUpdateProjectStatusCmdCancellationReasonChange(e)}
                  />
                </label>
                <div class="md:col-span-2 flex justify-end">
                  <button
                    type="submit"
                    class="inline-flex items-center gap-2 rounded-md px-4 py-2 bg-[var(--button-primary-bg,#2563eb)] text-[var(--button-primary-text,#ffffff)] disabled:opacity-60"
                    ?disabled=${loading}
                  >
                    ${loading ? msg['loading'] : msg['status.action']}
                  </button>
                </div>
              </form>
            `
          : html`<p class="text-sm text-[var(--text-muted,#64748b)]">${msg['status.noProject']}</p>`}
      </section>
    `;
  }

  renderStatusFeedback(): TemplateResult | typeof nothing {
    const msg = this.msg;
    if (this.updateProjectStatusCmdState === 'success') {
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-success-bg,#dcfce7)] px-3 py-2 text-sm text-[var(--status-success-text,#166534)]"
          role="status"
        >
          <span>${msg['status.success']}</span>
          <button
            type="button"
            class="underline text-[var(--status-success-text,#166534)]"
            @click=${() => {
              this.updateProjectStatusCmdState = 'idle';
            }}
          >
            ${msg['feedback.dismiss']}
          </button>
        </div>
      `;
    }
    if (this.updateProjectStatusCmdState === 'error') {
      const errText = this.updateProjectStatusCmdError || msg['status.error'];
      return html`
        <div
          class="flex items-start justify-between gap-3 rounded-md border border-[var(--border-subtle,#e2e8f0)] bg-[var(--status-error-bg,#fee2e2)] px-3 py-2 text-sm text-[var(--status-error-text,#991b1b)]"
          role="alert"
        >
          <span>${errText}</span>
          <button
            type="button"
            class="underline text-[var(--status-error-text,#991b1b)]"
            @click=${() => {
              this.updateProjectStatusCmdState = 'idle';
              this.updateProjectStatusCmdError = '';
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
