/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/fieldLoggingWorkspace.submitVoidMaterialUsage.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/fieldLoggingWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall submitVoidMaterialUsage (command); Output kind=object; route buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage.

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
