/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/clientManagementWorkspace.ts" enhancement="_blank"/>
import { ok, fail, AppError, type BffHandler, type BffResponse, type ControllerRoute, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { queryClients, type QueryClientsInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryClients.js';
import { createClient, type CreateClientInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/createClient.js';
import { updateClient, type UpdateClientInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.js';
import { deleteClient, type DeleteClientInput } from '/_102045_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.js';

const ALLOWED: readonly string[] = ['buildFlowFsm:projectManager'];

function enforceActors(ctx: RequestContext, allowed: readonly string[], route: string): BffResponse | null {
  if (allowed.length === 0) return null;
  const scope = ctx.sessionContext?.actorScope ?? [];
  if (scope.length === 0) { ctx.log.info('bff.actor.no-scope', { route, allowed }); return null; }
  if (scope.some((s) => allowed.includes(s))) return null;
  return fail(new AppError('FORBIDDEN_ACTOR', 'actor scope not permitted for ' + route, 403, { route }));
}

function isValidId(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0 && !/\s/.test(value);
}

export const clientManagementWorkspaceListClientsHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientManagementWorkspace.listClients');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    name?: string;
    company?: string;
    email?: string;
    page?: number;
    pageSize?: number;
  };

  const input: QueryClientsInput = {
    name: params.name,
    company: params.company,
    email: params.email,
    page: params.page,
    pageSize: params.pageSize,
  };

  const result = await queryClients(ctx, input);

  const clients = (result.clients ?? []).map((row) => ({
    clientId: row.clientId,
    name: row.name,
    company: row.company ?? '',
    email: row.email,
    phone: row.phone ?? '',
    address: row.address ?? '',
    createdAt: row.createdAt,
    updatedAt: row.updatedAt,
  }));

  return ok({ clients, total: result.total });
};

export const clientManagementWorkspaceCreateClientCmdHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientManagementWorkspace.createClientCmd');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    address?: string;
  };

  if (!params.name) throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  if (!params.email) throw new AppError('VALIDATION_ERROR', 'email is required', 400, { field: 'email' });

  const input: CreateClientInput = {
    name: params.name,
    email: params.email,
    company: params.company,
    phone: params.phone,
    address: params.address,
  };

  const result = await createClient(ctx, input);

  return ok({
    clientId: result.clientId,
    name: result.name,
    company: result.company ?? '',
    email: result.email,
    phone: result.phone ?? '',
    address: result.address ?? '',
    createdAt: result.createdAt,
    updatedAt: result.updatedAt,
  });
};

export const clientManagementWorkspaceUpdateClientCmdHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientManagementWorkspace.updateClientCmd');
  if (denial) return denial;

  const params = (request.params ?? {}) as {
    clientId?: string;
    name?: string;
    company?: string;
    email?: string;
    phone?: string;
    address?: string;
  };

  if (!params.clientId) throw new AppError('VALIDATION_ERROR', 'clientId is required', 400, { field: 'clientId' });
  if (!isValidId(params.clientId)) throw new AppError('VALIDATION_ERROR', 'clientId is not a valid identifier', 400, { field: 'clientId' });
  if (!params.name) throw new AppError('VALIDATION_ERROR', 'name is required', 400, { field: 'name' });
  if (!params.email) throw new AppError('VALIDATION_ERROR', 'email is required', 400, { field: 'email' });

  const input: UpdateClientInput = {
    clientId: params.clientId,
    name: params.name,
    email: params.email,
    company: params.company,
    phone: params.phone,
    address: params.address,
  };

  const result = await updateClient(ctx, input);

  return ok({
    clientId: result.clientId,
    name: result.name,
    company: result.company ?? '',
    email: result.email,
    phone: result.phone ?? '',
    address: result.address ?? '',
    updatedAt: result.updatedAt,
  });
};

export const clientManagementWorkspaceDeleteClientCmdHandler: BffHandler = async ({ request, ctx }) => {
  const denial = enforceActors(ctx, ALLOWED, 'buildFlowFsm.clientManagementWorkspace.deleteClientCmd');
  if (denial) return denial;

  const params = (request.params ?? {}) as { clientId?: string };

  if (!params.clientId) throw new AppError('VALIDATION_ERROR', 'clientId is required', 400, { field: 'clientId' });
  if (!isValidId(params.clientId)) throw new AppError('VALIDATION_ERROR', 'clientId is not a valid identifier', 400, { field: 'clientId' });

  const input: DeleteClientInput = {
    clientId: params.clientId,
  };

  const result = await deleteClient(ctx, input);

  return ok({
    clientId: result.clientId,
    name: result.name,
  });
};

export const routes: ControllerRoute[] = [
  { key: 'buildFlowFsm.clientManagementWorkspace.listClients', handler: clientManagementWorkspaceListClientsHandler },
  { key: 'buildFlowFsm.clientManagementWorkspace.createClientCmd', handler: clientManagementWorkspaceCreateClientCmdHandler },
  { key: 'buildFlowFsm.clientManagementWorkspace.updateClientCmd', handler: clientManagementWorkspaceUpdateClientCmdHandler },
  { key: 'buildFlowFsm.clientManagementWorkspace.deleteClientCmd', handler: clientManagementWorkspaceDeleteClientCmdHandler },
];
