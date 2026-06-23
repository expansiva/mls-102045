/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/leadDetails.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { getLead } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/obterLead.js';
import { atualizarLead, type AtualizarLeadInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarLead.js';
import type {
  LeadDetailsObterLeadInput,
  LeadDetailsObterLeadOutput,
  LeadDetailsAtualizarLeadInput,
  LeadDetailsAtualizarLeadOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/leadDetails.js';

export const propertyFlowCrmLeadDetailsObterLeadHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as LeadDetailsObterLeadInput;

  if (!input.leadId) {
    throw new AppError('VALIDATION_ERROR', 'leadId is required', 400, { field: 'leadId' });
  }

  const result = await getLead(ctx, input);

  const output: LeadDetailsObterLeadOutput = {
    leadId: result.lead.leadId,
    name: result.lead.fullName,
    email: result.lead.email ?? '',
    phone: result.lead.phone ?? '',
    preferences: result.lead.leadTemperature ?? '',
    stage: result.lead.leadStatus,
    history: result.lead.notes ?? '',
  };

  return ok(output);
};

export const propertyFlowCrmLeadDetailsAtualizarLeadHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as LeadDetailsAtualizarLeadInput;

  if (!input.leadId) {
    throw new AppError('VALIDATION_ERROR', 'leadId is required', 400, { field: 'leadId' });
  }

  const usecaseInput: AtualizarLeadInput = {
    leadId: input.leadId,
    lead: input as unknown as AtualizarLeadInput['lead'],
  };

  const result = await atualizarLead(ctx, usecaseInput);

  const output: LeadDetailsAtualizarLeadOutput = {
    leadId: result.lead.leadId,
    stage: result.lead.leadStatus,
  };

  return ok(output);
};

export const leadDetailsRouter = {
  'propertyFlowCrm.leadDetails.obterLead': {
    handlerName: 'propertyFlowCrmLeadDetailsObterLeadHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/leadDetails.js',
  },
  'propertyFlowCrm.leadDetails.atualizarLead': {
    handlerName: 'propertyFlowCrmLeadDetailsAtualizarLeadHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/leadDetails.js',
  },
} as const;
