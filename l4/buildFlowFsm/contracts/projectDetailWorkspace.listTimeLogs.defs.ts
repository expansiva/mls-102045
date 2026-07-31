/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.listTimeLogs.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectDetailWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall listTimeLogs (query); Output kind=paginated; route buildFlowFsm.projectDetailWorkspace.listTimeLogs.

export interface ListTimeLogsInput {
  workTaskId?: string;
  workerName?: string;
  logDate?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface ListTimeLogsTimeLogsItem {
  timeLogId: string;
  workTaskId: string;
  workerName: string;
  logDate: string;
  hoursWorked: number;
  laborCost: number;
  status: string;
}

export interface ListTimeLogsOutput {
  timeLogs: ListTimeLogsTimeLogsItem[];
  total: number;
}

export const listTimeLogsRoute = 'buildFlowFsm.projectDetailWorkspace.listTimeLogs' as const;
