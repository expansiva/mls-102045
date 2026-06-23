/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/propertyDetails.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
obterImovel,
type ObterImovelInput,
type ObterImovelOutput,
} from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/obterImovel.js';
import {
atualizarImovel,
type AtualizarImovelInput,
type AtualizarImovelOutput,
} from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarImovel.js';
import {
solicitarDescricaoImovel,
type SolicitarDescricaoImovelInput,
type SolicitarDescricaoImovelOutput,
} from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/solicitarDescricaoImovel.js';
import {
listarSolicitacoesDescricaoImovel,
type ListarSolicitacoesDescricaoImovelInput,
type ListarSolicitacoesDescricaoImovelOutput,
} from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesDescricaoImovel.js';
import {
type PropertyDetailsObterImovelInput,
type PropertyDetailsObterImovelOutput,
type PropertyDetailsAtualizarImovelInput,
type PropertyDetailsAtualizarImovelOutput,
type PropertyDetailsSolicitarDescricaoImovelInput,
type PropertyDetailsSolicitarDescricaoImovelOutput,
type PropertyDetailsListarSolicitacoesDescricaoImovelInput,
type PropertyDetailsListarSolicitacoesDescricaoImovelOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/propertyDetails.js';
export const propertyFlowCrmPropertyDetailsObterImovelHandler: BffHandler = async ({ request, ctx }) => {
const input = request.params as PropertyDetailsObterImovelInput;
if (!input.propertyId) {
throw new AppError('VALIDATION_ERROR', 'propertyId is required', 400, { field: 'propertyId' });
}
const usecaseInput: ObterImovelInput = {
propertyId: input.propertyId,
};
const result: ObterImovelOutput = await obterImovel(ctx, usecaseInput);
const output: PropertyDetailsObterImovelOutput = {
propertyId: result.property.propertyId,
title: result.property.propertyType,
address: result.property.address,
price: result.property.price,
status: result.property.status,
description: '',
features: result.property.features ?? '',
bedrooms: 0,
bathrooms: 0,
area: 0,
};
return ok(output);
};
export const propertyFlowCrmPropertyDetailsAtualizarImovelHandler: BffHandler = async ({ request, ctx }) => {
const input = request.params as PropertyDetailsAtualizarImovelInput;
if (!input.propertyId) {
throw new AppError('VALIDATION_ERROR', 'propertyId is required', 400, { field: 'propertyId' });
}
const patch = {
...(input.title !== undefined ? { propertyType: input.title } : {}),
...(input.address !== undefined ? { address: input.address } : {}),
...(input.price !== undefined ? { price: input.price } : {}),
...(input.status !== undefined ? { status: input.status } : {}),
...(input.features !== undefined ? { features: input.features } : {}),
};
const usecaseInput: AtualizarImovelInput = {
propertyEntity: {
propertyId: input.propertyId,
patch,
} as AtualizarImovelInput['propertyEntity'],
};
const result: AtualizarImovelOutput = await atualizarImovel(ctx, usecaseInput);
const output: PropertyDetailsAtualizarImovelOutput = {
propertyId: result.propertyEntity.propertyId,
status: result.propertyEntity.status,
updatedAt: result.propertyEntity.updatedAt,
};
return ok(output);
};
export const propertyFlowCrmPropertyDetailsSolicitarDescricaoImovelHandler: BffHandler = async ({ request, ctx }) => {
const input = request.params as PropertyDetailsSolicitarDescricaoImovelInput;
if (!input.propertyId) {
throw new AppError('VALIDATION_ERROR', 'propertyId is required', 400, { field: 'propertyId' });
}
if (!input.bullets) {
throw new AppError('VALIDATION_ERROR', 'bullets is required', 400, { field: 'bullets' });
}
const brokerId = ctx.requestMeta?.userId;
if (!brokerId) {
throw new AppError('VALIDATION_ERROR', 'brokerId is required', 400, { field: 'brokerId' });
}
const usecaseInput: SolicitarDescricaoImovelInput = {
propertyId: input.propertyId,
brokerId,
bullets: input.bullets,
} as SolicitarDescricaoImovelInput;
const result: SolicitarDescricaoImovelOutput = await solicitarDescricaoImovel(ctx, usecaseInput);
const output: PropertyDetailsSolicitarDescricaoImovelOutput = {
requestId: result.propertyDescriptionRequestId,
reviewStatus: result.status,
createdAt: (result as { createdAt?: string }).createdAt ?? '',
};
return ok(output);
};
export const propertyFlowCrmPropertyDetailsListarSolicitacoesDescricaoImovelHandler: BffHandler = async ({ request, ctx }) => {
const input = request.params as PropertyDetailsListarSolicitacoesDescricaoImovelInput;
if (!input.propertyId) {
throw new AppError('VALIDATION_ERROR', 'propertyId is required', 400, { field: 'propertyId' });
}
const usecaseInput: ListarSolicitacoesDescricaoImovelInput = {
propertyId: input.propertyId,
} as ListarSolicitacoesDescricaoImovelInput;
const result: ListarSolicitacoesDescricaoImovelOutput = await listarSolicitacoesDescricaoImovel(
ctx,
usecaseInput,
);
const output: PropertyDetailsListarSolicitacoesDescricaoImovelOutput = result.solicitacoes.map(
(solicitacao) => ({
requests: solicitacao.id,
}),
);
return ok(output);
};
export const propertyDetailsRoutes = [
{
key: 'propertyFlowCrm.propertyDetails.obterImovel',
handlerName: 'propertyFlowCrmPropertyDetailsObterImovelHandler',
importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/propertyDetails.js',
},
{
key: 'propertyFlowCrm.propertyDetails.atualizarImovel',
handlerName: 'propertyFlowCrmPropertyDetailsAtualizarImovelHandler',
importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/propertyDetails.js',
},
{
key: 'propertyFlowCrm.propertyDetails.solicitarDescricaoImovel',
handlerName: 'propertyFlowCrmPropertyDetailsSolicitarDescricaoImovelHandler',
importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/propertyDetails.js',
},
{
key: 'propertyFlowCrm.propertyDetails.listarSolicitacoesDescricaoImovel',
handlerName: 'propertyFlowCrmPropertyDetailsListarSolicitacoesDescricaoImovelHandler',
importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/propertyDetails.js',
},
] as const;
