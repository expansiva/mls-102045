/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/propertiesList.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import {
  listarImoveis,
  type ListarImoveisInput,
  type ListarImoveisOutput,
} from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/listarImoveis.js';
import {
  criarImovel,
  type CriarImovelInput,
  type CriarImovelOutput,
} from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/criarImovel.js';
import {
  type PropertiesListListarImoveisInput,
  type PropertiesListListarImoveisOutput,
  type PropertiesListCriarImovelInput,
  type PropertiesListCriarImovelOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/propertiesList.js';

const allowedPropertyStatuses = ['ativo', 'inativo', 'vendido', 'reservado'] as const;

export const propertyFlowCrmPropertiesListListarImoveisHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as PropertiesListListarImoveisInput;
  if (input.status && !(allowedPropertyStatuses as readonly string[]).includes(input.status)) {
    throw new AppError('VALIDATION_ERROR', 'status must be one of ativo, inativo, vendido, reservado', 400, {
      field: 'status',
    });
  }
  if (input.page !== undefined && typeof input.page !== 'number') {
    throw new AppError('VALIDATION_ERROR', 'page must be a number', 400, { field: 'page' });
  }
  if (input.pageSize !== undefined && typeof input.pageSize !== 'number') {
    throw new AppError('VALIDATION_ERROR', 'pageSize must be a number', 400, { field: 'pageSize' });
  }
  const result: ListarImoveisOutput = await listarImoveis(ctx, input as ListarImoveisInput);
  const output: PropertiesListListarImoveisOutput = result.properties.map((property) => ({
    propertyId: property.propertyId,
    title: property.address,
    status: property.status,
    price: property.price,
    city: '',
    neighborhood: '',
  }));
  return ok(output);
};

export const propertyFlowCrmPropertiesListCriarImovelHandler: BffHandler = async ({ request, ctx }) => {
  const input = request.params as PropertiesListCriarImovelInput;
  if (!input.title) {
    throw new AppError('VALIDATION_ERROR', 'title is required', 400, { field: 'title' });
  }
  if (!input.propertyType) {
    throw new AppError('VALIDATION_ERROR', 'propertyType is required', 400, { field: 'propertyType' });
  }
  if (input.price === undefined || typeof input.price !== 'number') {
    throw new AppError('VALIDATION_ERROR', 'price is required', 400, { field: 'price' });
  }
  if (!input.city) {
    throw new AppError('VALIDATION_ERROR', 'city is required', 400, { field: 'city' });
  }
  if (!input.neighborhood) {
    throw new AppError('VALIDATION_ERROR', 'neighborhood is required', 400, { field: 'neighborhood' });
  }
  if (!input.status) {
    throw new AppError('VALIDATION_ERROR', 'status is required', 400, { field: 'status' });
  }
  if (!(allowedPropertyStatuses as readonly string[]).includes(input.status)) {
    throw new AppError('VALIDATION_ERROR', 'status must be one of ativo, inativo, vendido, reservado', 400, {
      field: 'status',
    });
  }
  if (!input.brokerId) {
    throw new AppError('VALIDATION_ERROR', 'brokerId is required', 400, { field: 'brokerId' });
  }
  const result: CriarImovelOutput = await criarImovel(ctx, input as CriarImovelInput);
  const output: PropertiesListCriarImovelOutput = {
    propertyId: result.property.propertyId,
    status: result.property.status,
  };
  return ok(output);
};

export const propertiesListRouter = {
  'propertyFlowCrm.propertiesList.listarImoveis': {
    handlerName: 'propertyFlowCrmPropertiesListListarImoveisHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/propertiesList.js',
  },
  'propertyFlowCrm.propertiesList.criarImovel': {
    handlerName: 'propertyFlowCrmPropertiesListCriarImovelHandler',
    importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/propertiesList.js',
  },
};
