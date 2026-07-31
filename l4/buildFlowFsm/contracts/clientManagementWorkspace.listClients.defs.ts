/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/clientManagementWorkspace.listClients.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/clientManagementWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall listClients (query); Output kind=paginated; route buildFlowFsm.clientManagementWorkspace.listClients.

export interface ListClientsInput {
  name?: string;
  company?: string;
  email?: string;
  page?: number;
  pageSize?: number;
}

export interface ListClientsClientsItem {
  clientId: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}

export interface ListClientsOutput {
  clients: ListClientsClientsItem[];
  total: number;
}

export const listClientsRoute = 'buildFlowFsm.clientManagementWorkspace.listClients' as const;
