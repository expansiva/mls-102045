/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/clientManagementWorkspace.createClientCmd.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/clientManagementWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall createClientCmd (command); Output kind=object; route buildFlowFsm.clientManagementWorkspace.createClientCmd.

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
