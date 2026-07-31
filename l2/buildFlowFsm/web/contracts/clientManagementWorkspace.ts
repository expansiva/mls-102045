/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/clientManagementWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace clientManagementWorkspace; one contract file per workspace, all bffCalls).

// bffCall listClients (query) — Output kind=paginated; route buildFlowFsm.clientManagementWorkspace.listClients.
export interface ListClientsInput {
  name?: string;
  company?: string;
  email?: string;
  page?: number;
  pageSize?: number;
}
export interface ListClientsOutput {
  clients: { clientId: string; name: string; company: string; email: string; phone: string; address: string; createdAt: string; updatedAt: string }[];
  total: number;
}
export const listClientsRoute = 'buildFlowFsm.clientManagementWorkspace.listClients' as const;

// bffCall createClientCmd (command) — Output kind=object; route buildFlowFsm.clientManagementWorkspace.createClientCmd.
export interface CreateClientCmdInput {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  address?: string;
}
export interface CreateClientCmdOutput {
  clientId: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
}
export const createClientCmdRoute = 'buildFlowFsm.clientManagementWorkspace.createClientCmd' as const;

// bffCall updateClientCmd (command) — Output kind=object; route buildFlowFsm.clientManagementWorkspace.updateClientCmd.
export interface UpdateClientCmdInput {
  clientId: string;
  name: string;
  company?: string;
  email: string;
  phone?: string;
  address?: string;
}
export interface UpdateClientCmdOutput {
  clientId: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  address: string;
  updatedAt: string;
}
export const updateClientCmdRoute = 'buildFlowFsm.clientManagementWorkspace.updateClientCmd' as const;

// bffCall deleteClientCmd (command) — Output kind=object; route buildFlowFsm.clientManagementWorkspace.deleteClientCmd.
export interface DeleteClientCmdInput {
  clientId: string;
}
export interface DeleteClientCmdOutput {
  clientId: string;
  name: string;
}
export const deleteClientCmdRoute = 'buildFlowFsm.clientManagementWorkspace.deleteClientCmd' as const;
