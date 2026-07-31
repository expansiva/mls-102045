/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/deleteClient.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface DeleteClientInput {
  clientId: string;
}

export interface DeleteClientOutput {
  clientId: string;
  name: string;
}

export async function deleteClient(
  ctx: RequestContext,
  input: DeleteClientInput,
): Promise<DeleteClientOutput> {
  const entity = await ctx.mdm.entity.get({ mdmId: input.clientId });
  if (!entity) {
    throw new AppError('NOT_FOUND', `Client not found: ${input.clientId}`, 404, {
      clientId: input.clientId,
    });
  }

  const name = entity.details.name ?? '';

  await ctx.mdm.entity.delete({ mdmId: input.clientId });

  return {
    clientId: input.clientId,
    name,
  };
}
