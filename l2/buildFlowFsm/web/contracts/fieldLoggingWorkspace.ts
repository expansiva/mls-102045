/// <mls fileReference="_102045_/l2/buildFlowFsm/web/contracts/fieldLoggingWorkspace.ts" enhancement="_blank"/>

// GENERATED from l4 bffCalls — do not edit (workspace fieldLoggingWorkspace; one contract file per workspace, all bffCalls).

// bffCall submitTimeLog (command) — Output kind=object; route buildFlowFsm.fieldLoggingWorkspace.submitTimeLog.
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

// bffCall submitVoidTimeLog (command) — Output kind=object; route buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog.
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

// bffCall submitMaterialUsage (command) — Output kind=object; route buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage.
export interface SubmitMaterialUsageInput {
  projectId: string;
  materialName: string;
  quantity: number;
  unit: string;
  unitCost: number;
  costCode?: string;
  usageDate: string;
  recordedBy: string;
}
export interface SubmitMaterialUsageOutput {
  materialUsageId: string;
  projectId: string;
  status: string;
  materialName: string;
  quantity: number;
  unit: string;
  unitCost: number;
  costCode: string;
  usageDate: string;
  recordedBy: string;
  createdAt: string;
}
export const submitMaterialUsageRoute = 'buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage' as const;

// bffCall submitVoidMaterialUsage (command) — Output kind=object; route buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage.
export interface SubmitVoidMaterialUsageInput {
  materialUsageId: string;
  voidedReason: string;
}
export interface SubmitVoidMaterialUsageOutput {
  materialUsageId: string;
  projectId: string;
  status: string;
  materialName: string;
  quantity: number;
  unit: string;
  unitCost: number;
  voidedAt: string;
  voidedReason: string;
}
export const submitVoidMaterialUsageRoute = 'buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage' as const;
