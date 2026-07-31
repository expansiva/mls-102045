/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/clientManagementWorkspace.deleteClientCmd.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/clientManagementWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall deleteClientCmd (command); Output kind=object; route buildFlowFsm.clientManagementWorkspace.deleteClientCmd.

export interface DeleteClientCmdInput {
  clientId: string;
}

export interface DeleteClientCmdOutput {
  clientId: string;
  name: string;
}

export const deleteClientCmdRoute = 'buildFlowFsm.clientManagementWorkspace.deleteClientCmd' as const;
