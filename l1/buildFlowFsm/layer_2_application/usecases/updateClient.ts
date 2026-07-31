/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateClient.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface UpdateClientInput {
  clientId: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface UpdateClientOutput {
  clientId: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
}

export async function updateClient(ctx: RequestContext, input: UpdateClientInput): Promise<UpdateClientOutput> {
  // Validate required fields
  if (!input.name || input.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required and must be a non-empty string.', 400, { field: 'name' });
  }
  if (!input.email || input.email.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'email is required and must be a non-empty string.', 400, { field: 'email' });
  }

  // Fetch existing Client MDM record to verify existence and preserve createdAt / version
  const existing = await ctx.mdm.entity.get({ mdmId: input.clientId });

  const now = ctx.clock.nowIso();
  const existingDetails = existing.details as unknown as Record<string, unknown>;
  const existingModule = (existingDetails.buildFlowFsm ?? {}) as Record<string, unknown>;

  // Update the MDM master-data record: name at top level, module-specific fields under buildFlowFsm namespace
  const updated = await ctx.mdm.entity.update({
    mdmId: input.clientId,
    expectedVersion: existing.version,
    patch: {
      name: input.name,
      buildFlowFsm: {
        ...existingModule,
        company: input.company ?? null,
        email: input.email,
        phone: input.phone ?? null,
        address: input.address ?? null,
        updatedAt: now,
      },
    } as unknown as Partial<typeof existing.details>,
  });

  const updatedDetails = updated.details as unknown as Record<string, unknown>;
  const updatedModule = (updatedDetails.buildFlowFsm ?? {}) as Record<string, unknown>;

  return {
    clientId: updated.mdmId,
    name: updated.details.name,
    company: (updatedModule.company as string | null) ?? undefined,
    email: updatedModule.email as string,
    phone: (updatedModule.phone as string | null) ?? undefined,
    address: (updatedModule.address as string | null) ?? undefined,
    createdAt: updated.index.createdAt,
    updatedAt: updated.index.updatedAt,
  };
}
