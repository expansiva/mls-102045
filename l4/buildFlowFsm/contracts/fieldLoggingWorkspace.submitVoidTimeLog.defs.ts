/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/fieldLoggingWorkspace.submitVoidTimeLog.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/fieldLoggingWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall submitVoidTimeLog (command); Output kind=object; route buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog.

export interface SubmitVoidTimeLogInput {
  timeLogId: string;
  voidReason: string;
}

export interface SubmitVoidTimeLogOutput {
  timeLogId: string;
  workTaskId: string;
  workerName: string;
  logDate: string;
  hoursWorked: number;
  laborCost: number;
  status: string;
  voidedAt: string;
  voidReason: string;
}

export const submitVoidTimeLogRoute = 'buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog' as const;
