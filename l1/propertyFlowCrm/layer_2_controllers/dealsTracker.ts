/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/dealsTracker.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listarNegocios, type ListarNegociosInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/listarNegocios.js';
import { obterNegocio, type ObterNegocioInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/obterNegocio.js';
import { criarNegocio, type CriarNegocioInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/criarNegocio.js';
import { avancarEtapaNegocio, type AvancarEtapaNegocioInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/avancarEtapaNegocio.js';
import { listarMudancasEtapaNegocio, type ListarMudancasEtapaNegocioInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/listarMudancasEtapaNegocio.js';
import type {
  DealsTrackerListarNegociosInput,
  DealsTrackerListarNegociosOutput,
  DealsTrackerObterNegocioInput,
  DealsTrackerObterNegocioOutput,
  DealsTrackerCriarNegocioInput,
  DealsTrackerCriarNegocioOutput,
  DealsTrackerAvancarEtapaNegocioInput,
  DealsTrackerAvancarEtapaNegocioOutput,
  DealsTrackerListarMudancasEtapaNegocioInput,
  DealsTrackerListarMudancasEtapaNegocioOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/dealsTracker.js';

export const propertyFlowCrmDealsTrackerListarNegociosHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as DealsTrackerListarNegociosInput;
  const result = await listarNegocios(ctx, input as ListarNegociosInput);
  const response: DealsTrackerListarNegociosOutput = result.negocios.map((negocio) => ({
    dealId: negocio.dealId,
    status: negocio.status,
    leadId: negocio.leadId,
    propertyId: negocio.propertyId,
    valorProposta: negocio.amount,
    updatedAt: negocio.updatedAt,
  }));
  return ok(response);
};

export const propertyFlowCrmDealsTrackerObterNegocioHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as DealsTrackerObterNegocioInput;
  if (!input.dealId) {
    throw new AppError('VALIDATION_ERROR', 'dealId is required', 400, { field: 'dealId' });
  }
  const result = await obterNegocio(ctx, input as ObterNegocioInput);
  const response: DealsTrackerObterNegocioOutput = {
    dealId: result.deal.dealId,
    status: result.deal.status,
    leadId: result.deal.leadId,
    propertyId: result.deal.propertyId,
    valorProposta: result.deal.amount,
    descricao: result.deal.notes ?? '',
    updatedAt: result.deal.updatedAt,
  };
  return ok(response);
};

export const propertyFlowCrmDealsTrackerCriarNegocioHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as DealsTrackerCriarNegocioInput;
  if (!input.leadId) {
    throw new AppError('VALIDATION_ERROR', 'leadId is required', 400, { field: 'leadId' });
  }
  if (!input.propertyId) {
    throw new AppError('VALIDATION_ERROR', 'propertyId is required', 400, { field: 'propertyId' });
  }
  if (input.valorProposta === undefined || input.valorProposta === null) {
    throw new AppError('VALIDATION_ERROR', 'valorProposta is required', 400, { field: 'valorProposta' });
  }
  const result = await criarNegocio(ctx, input as CriarNegocioInput);
  const response: DealsTrackerCriarNegocioOutput = {
    dealId: result.dealEntity.dealId,
    status: result.dealEntity.status,
  };
  return ok(response);
};

export const propertyFlowCrmDealsTrackerAvancarEtapaNegocioHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as DealsTrackerAvancarEtapaNegocioInput;
  if (!input.dealId) {
    throw new AppError('VALIDATION_ERROR', 'dealId is required', 400, { field: 'dealId' });
  }
  if (!input.toStage) {
    throw new AppError('VALIDATION_ERROR', 'toStage is required', 400, { field: 'toStage' });
  }
  const result = await avancarEtapaNegocio(ctx, input as unknown as AvancarEtapaNegocioInput);
  const response: DealsTrackerAvancarEtapaNegocioOutput = {
    dealId: result.deal.dealId,
    status: result.deal.status,
    dealStageChangeId: result.dealStageChange.deal_stage_change_id,
  };
  return ok(response);
};

export const propertyFlowCrmDealsTrackerListarMudancasEtapaNegocioHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as DealsTrackerListarMudancasEtapaNegocioInput;
  if (!input.dealId) {
    throw new AppError('VALIDATION_ERROR', 'dealId is required', 400, { field: 'dealId' });
  }
  const result = await listarMudancasEtapaNegocio(ctx, input as ListarMudancasEtapaNegocioInput);
  const response: DealsTrackerListarMudancasEtapaNegocioOutput = result.mudancasEtapaNegocio.map((mudanca) => ({
    dealStageChangeId: mudanca.deal_stage_change_id,
    dealId: mudanca.deal_id,
    fromStage: mudanca.from_stage,
    toStage: mudanca.to_stage,
    changedAt: mudanca.changed_at,
  }));
  return ok(response);
};

export const dealsTrackerRouterEntries = [
  {
    key: 'propertyFlowCrm.dealsTracker.listarNegocios',
    handlerName: 'propertyFlowCrmDealsTrackerListarNegociosHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/dealsTracker.js',
  },
  {
    key: 'propertyFlowCrm.dealsTracker.obterNegocio',
    handlerName: 'propertyFlowCrmDealsTrackerObterNegocioHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/dealsTracker.js',
  },
  {
    key: 'propertyFlowCrm.dealsTracker.criarNegocio',
    handlerName: 'propertyFlowCrmDealsTrackerCriarNegocioHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/dealsTracker.js',
  },
  {
    key: 'propertyFlowCrm.dealsTracker.avancarEtapaNegocio',
    handlerName: 'propertyFlowCrmDealsTrackerAvancarEtapaNegocioHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/dealsTracker.js',
  },
  {
    key: 'propertyFlowCrm.dealsTracker.listarMudancasEtapaNegocio',
    handlerName: 'propertyFlowCrmDealsTrackerListarMudancasEtapaNegocioHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/dealsTracker.js',
  },
];
