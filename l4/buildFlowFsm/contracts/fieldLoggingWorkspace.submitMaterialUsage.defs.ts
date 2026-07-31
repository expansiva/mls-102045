/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/fieldLoggingWorkspace.submitMaterialUsage.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/fieldLoggingWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall submitMaterialUsage (command); Output kind=object; route buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage.

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
