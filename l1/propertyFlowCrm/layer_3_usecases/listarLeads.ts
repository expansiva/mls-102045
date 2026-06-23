/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarLeads.ts" enhancement="_blank" />
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { LeadEntity, type LeadRecord } from '/_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.js';

export interface ListarLeadsInput {}

export interface ListarLeadsOutput {
  leads: LeadRecord[];
}

export async function listarLeads(
  ctx: RequestContext,
  _input: ListarLeadsInput
): Promise<ListarLeadsOutput> {
  const leads = await LeadEntity.list(ctx);
  return { leads };
}
