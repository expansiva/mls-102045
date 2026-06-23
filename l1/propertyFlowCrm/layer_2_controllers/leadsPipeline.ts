/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/leadsPipeline.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listarLeads, type ListarLeadsInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/listarLeads.js';
import { moveLeadStage, type MoveLeadStageInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/moverEtapaLead.js';
import { createLead, type CreateLeadInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/criarLead.js';
import { solicitarQualificacaoLead, type SolicitarQualificacaoLeadInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/solicitarQualificacaoLead.js';
import { listarMudancasEtapaLead, type ListarMudancasEtapaLeadInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaLead.js';
import type {
  LeadsPipelineListarLeadsInput,
  LeadsPipelineListarLeadsOutput,
  LeadsPipelineMoverEtapaLeadInput,
  LeadsPipelineMoverEtapaLeadOutput,
  LeadsPipelineCriarLeadInput,
  LeadsPipelineCriarLeadOutput,
  LeadsPipelineSolicitarQualificacaoLeadInput,
  LeadsPipelineSolicitarQualificacaoLeadOutput,
  LeadsPipelineListarMudancasEtapaLeadInput,
  LeadsPipelineListarMudancasEtapaLeadOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/leadsPipeline.js';

export const propertyFlowCrmLeadsPipelineListarLeadsHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as LeadsPipelineListarLeadsInput;
  const result = await listarLeads(ctx, input as ListarLeadsInput);
  const payload: LeadsPipelineListarLeadsOutput = result.leads.map((lead) => ({
    leadId: lead.leadId,
    leadName: lead.fullName,
    leadStage: lead.leadStatus,
    leadTemperature: lead.leadTemperature ?? '',
    leadUpdatedAt: lead.updatedAt,
  }));
  return ok(payload);
};

export const propertyFlowCrmLeadsPipelineMoverEtapaLeadHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as LeadsPipelineMoverEtapaLeadInput;
  if (!input.leadId) throw new AppError('VALIDATION_ERROR', 'leadId is required', 400, { field: 'leadId' });
  if (!input.fromStage) throw new AppError('VALIDATION_ERROR', 'fromStage is required', 400, { field: 'fromStage' });
  if (!input.toStage) throw new AppError('VALIDATION_ERROR', 'toStage is required', 400, { field: 'toStage' });
  const result = await moveLeadStage(ctx, {
    leadId: input.leadId,
    toStageId: input.toStage,
  } as MoveLeadStageInput);
  const payload: LeadsPipelineMoverEtapaLeadOutput = {
    leadId: result.lead.leadId,
    leadStageChangeId: result.leadStageChange.lead_stage_change_id,
  };
  return ok(payload);
};

export const propertyFlowCrmLeadsPipelineCriarLeadHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as LeadsPipelineCriarLeadInput;
  if (!input.leadName) throw new AppError('VALIDATION_ERROR', 'leadName is required', 400, { field: 'leadName' });
  if (!input.initialStage) throw new AppError('VALIDATION_ERROR', 'initialStage is required', 400, { field: 'initialStage' });
  const result = await createLead(ctx, input as CreateLeadInput);
  const payload: LeadsPipelineCriarLeadOutput = {
    leadId: result.lead.leadId,
    leadStage: result.lead.leadStatus,
  };
  return ok(payload);
};

export const propertyFlowCrmLeadsPipelineSolicitarQualificacaoLeadHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as LeadsPipelineSolicitarQualificacaoLeadInput;
  if (!input.leadId) throw new AppError('VALIDATION_ERROR', 'leadId is required', 400, { field: 'leadId' });
  const result = await solicitarQualificacaoLead(ctx, {
    leadId: input.leadId,
  } as SolicitarQualificacaoLeadInput);
  const payload: LeadsPipelineSolicitarQualificacaoLeadOutput = {
    leadQualificationRequestId: result.leadQualificationRequestId,
    reviewStatus: 'pending_review',
  };
  return ok(payload);
};

export const propertyFlowCrmLeadsPipelineListarMudancasEtapaLeadHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as LeadsPipelineListarMudancasEtapaLeadInput;
  if (!input.leadId) throw new AppError('VALIDATION_ERROR', 'leadId is required', 400, { field: 'leadId' });
  const result = await listarMudancasEtapaLead(ctx, input as ListarMudancasEtapaLeadInput);
  const payload: LeadsPipelineListarMudancasEtapaLeadOutput = result.leadStageChanges.map((change) => ({
    leadStageChangeId: change.lead_stage_change_id,
    fromStage: change.from_stage,
    toStage: change.to_stage,
    changedAt: change.changed_at,
    changedByBrokerId: change.changed_by_broker_id,
    note: change.note ?? '',
  }));
  return ok(payload);
};

export const leadsPipelineRouterEntries = {
  'propertyFlowCrm.leadsPipeline.listarLeads': {
    handlerName: 'propertyFlowCrmLeadsPipelineListarLeadsHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/leadsPipeline.js',
  },
  'propertyFlowCrm.leadsPipeline.moverEtapaLead': {
    handlerName: 'propertyFlowCrmLeadsPipelineMoverEtapaLeadHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/leadsPipeline.js',
  },
  'propertyFlowCrm.leadsPipeline.criarLead': {
    handlerName: 'propertyFlowCrmLeadsPipelineCriarLeadHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/leadsPipeline.js',
  },
  'propertyFlowCrm.leadsPipeline.solicitarQualificacaoLead': {
    handlerName: 'propertyFlowCrmLeadsPipelineSolicitarQualificacaoLeadHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/leadsPipeline.js',
  },
  'propertyFlowCrm.leadsPipeline.listarMudancasEtapaLead': {
    handlerName: 'propertyFlowCrmLeadsPipelineListarMudancasEtapaLeadHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/leadsPipeline.js',
  },
} as const;
