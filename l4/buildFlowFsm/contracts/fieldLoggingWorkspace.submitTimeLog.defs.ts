/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/fieldLoggingWorkspace.submitTimeLog.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/fieldLoggingWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall submitTimeLog (command); Output kind=object; route buildFlowFsm.fieldLoggingWorkspace.submitTimeLog.

export interface SubmitTimeLogInput {
  workTaskId: string;
  logDate: string;
  hoursWorked: number;
  workerName: string;
}

export interface SubmitTimeLogOutput {
  timeLogId: string;
  workTaskId: string;
  workerName: string;
  logDate: string;
  hoursWorked: number;
  laborCost: number;
  status: string;
  createdAt: string;
}

export const submitTimeLogRoute = 'buildFlowFsm.fieldLoggingWorkspace.submitTimeLog' as const;
