/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createClient.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface CreateClientInput {
  name: string;
  company?: string;
  email: string;
  phone?: string;
  address?: string;
}

export interface CreateClientOutput {
  clientId: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
}

export async function createClient(ctx: RequestContext, input: CreateClientInput): Promise<CreateClientOutput> {
  // Step 1: Validate required fields
  if (!input.name || input.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'name is required and must be non-empty.', 400, { field: 'name' });
  }
  if (!input.email || input.email.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'email is required and must be non-empty.', 400, { field: 'email' });
  }

  // Step 2 & 3: Generate id and timestamp
  const clientId = ctx.idGenerator.newId();
  const now = ctx.clock.nowIso();

  // Step 4: Persist the new client as an MDM master-data record
  const created = await ctx.mdm.entity.create({
    details: {
      subtype: 'Client',
      name: input.name,
      status: 'Active',
      moduleTypes: ['buildFlowFsm.Client'],
      tags: ['buildFlowFsm'],
      buildFlowFsm: {
        clientId,
        company: input.company ?? null,
        email: input.email,
        phone: input.phone ?? null,
        address: input.address ?? null,
        createdAt: now,
        updatedAt: now,
      },
    },
  });

  // Step 5: Read back the created MDM entity to confirm persistence and obtain canonical values
  const entity = await ctx.mdm.entity.get({ mdmId: created.mdmId });
  const moduleDetails = (entity.details as unknown as Record<string, unknown>).buildFlowFsm as
    | Record<string, unknown>
    | undefined;

  // Step 6: Map the returned MDM record fields into the CreateClientOutput shape
  return {
    clientId: String(moduleDetails?.clientId ?? clientId),
    name: entity.details.name,
    company: moduleDetails?.company != null ? String(moduleDetails.company) : undefined,
    email: String(moduleDetails?.email ?? input.email),
    phone: moduleDetails?.phone != null ? String(moduleDetails.phone) : undefined,
    address: moduleDetails?.address != null ? String(moduleDetails.address) : undefined,
    createdAt: String(moduleDetails?.createdAt ?? now),
    updatedAt: String(moduleDetails?.updatedAt ?? now),
  };
}
