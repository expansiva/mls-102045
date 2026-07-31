/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/clientManagementWorkspace.updateClientCmd.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/clientManagementWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall updateClientCmd (command); Output kind=object; route buildFlowFsm.clientManagementWorkspace.updateClientCmd.

export interface UpdateClientCmdInput {
  clientId: string;
  name?: string;
  company?: string;
  email?: string;
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
