/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.listMaterialUsages.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectDetailWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall listMaterialUsages (query); Output kind=paginated; route buildFlowFsm.projectDetailWorkspace.listMaterialUsages.

export interface ListMaterialUsagesInput {
  projectId: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface ListMaterialUsagesMaterialUsagesItem {
  materialUsageId: string;
  materialName: string;
  quantity: number;
  unit: string;
  unitCost: number;
  costCode: string;
  usageDate: string;
  status: string;
  recordedBy: string;
}

export interface ListMaterialUsagesOutput {
  materialUsages: ListMaterialUsagesMaterialUsagesItem[];
  total: number;
}

export const listMaterialUsagesRoute = 'buildFlowFsm.projectDetailWorkspace.listMaterialUsages' as const;
