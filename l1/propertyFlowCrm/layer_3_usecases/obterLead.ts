/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterLead.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { LeadEntity, type LeadRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.js';

export interface GetLeadInput {
  leadId: string;
}

export interface GetLeadOutput {
  lead: LeadRecord;
}

export async function getLead(ctx: RequestContext, input: GetLeadInput): Promise<GetLeadOutput> {
  const lead = await LeadEntity.getById(ctx, input.leadId);
  return { lead };
}
