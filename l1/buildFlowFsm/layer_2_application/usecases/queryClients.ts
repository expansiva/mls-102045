/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryClients.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

export interface QueryClientsInput {
  name?: string;
  company?: string;
  email?: string;
  page?: number;
  pageSize?: number;
}

export interface QueryClientItem {
  clientId: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  address?: string;
  createdAt: string;
  updatedAt: string;
}

export interface QueryClientsOutput {
  clients: QueryClientItem[];
  total: number;
}

function optionalString(value: unknown): string | undefined {
  return value != null ? String(value) : undefined;
}

export async function queryClients(ctx: RequestContext, input: QueryClientsInput): Promise<QueryClientsOutput> {
  const page = Math.max(1, input.page ?? 1);
  const pageSize = Math.min(100, Math.max(1, input.pageSize ?? 20));

  // Step 2: retrieve all Client master records from the shared MDM store.
  const listResult = await ctx.mdm.collection.listByType({ type: 'buildFlowFsm.Client' });

  const mdmIds = listResult.items.map((item) => item.mdmId);
  if (mdmIds.length === 0) {
    return { clients: [], total: 0 };
  }

  // Fetch full entity details (index records don't carry company/email/phone/address).
  const entities = await ctx.mdm.collection.getMany({ mdmIds });

  const nameFilter = input.name?.trim().toLowerCase() ?? '';
  const companyFilter = input.company?.trim().toLowerCase() ?? '';
  const emailFilter = input.email?.trim().toLowerCase() ?? '';

  // Step 3: apply optional in-memory filters.
  const filtered = entities.filter((entity) => {
    const details = entity.details as unknown as Record<string, unknown>;
    const moduleDetails = (details['buildFlowFsm'] ?? {}) as Record<string, unknown>;

    const name = String(details['name'] ?? entity.index.name ?? '');
    const company = String(details['company'] ?? moduleDetails['company'] ?? '');
    const email = String(details['email'] ?? moduleDetails['email'] ?? '');

    if (nameFilter && !name.toLowerCase().includes(nameFilter)) return false;
    if (companyFilter && !company.toLowerCase().includes(companyFilter)) return false;
    if (emailFilter && !email.toLowerCase().includes(emailFilter)) return false;

    return true;
  });

  // Step 4: sort by name ascending (case-insensitive).
  filtered.sort((a, b) => {
    const nameA = String(
      (a.details as unknown as Record<string, unknown>)['name'] ?? a.index.name ?? '',
    ).toLowerCase();
    const nameB = String(
      (b.details as unknown as Record<string, unknown>)['name'] ?? b.index.name ?? '',
    ).toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Step 5: compute total.
  const total = filtered.length;

  // Step 6: paginate.
  const offset = (page - 1) * pageSize;
  const pageItems = filtered.slice(offset, offset + pageSize);

  // Step 7: map each MDM record to the output projection.
  const clients: QueryClientItem[] = pageItems.map((entity) => {
    const details = entity.details as unknown as Record<string, unknown>;
    const moduleDetails = (details['buildFlowFsm'] ?? {}) as Record<string, unknown>;

    return {
      clientId: entity.mdmId,
      name: String(details['name'] ?? entity.index.name ?? ''),
      company: optionalString(details['company'] ?? moduleDetails['company'] ?? undefined),
      email: String(details['email'] ?? moduleDetails['email'] ?? ''),
      phone: optionalString(details['phone'] ?? moduleDetails['phone'] ?? undefined),
      address: optionalString(details['address'] ?? moduleDetails['address'] ?? undefined),
      createdAt: entity.index.createdAt,
      updatedAt: entity.index.updatedAt,
    };
  });

  // Step 8: return result.
  return { clients, total };
}
