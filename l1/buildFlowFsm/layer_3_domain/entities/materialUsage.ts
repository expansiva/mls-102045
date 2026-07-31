/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.ts" enhancement="_blank"/>
export type MaterialUsageStatus = 'posted' | 'voided';
export type MaterialUsageUnit = 'kg' | 'liter' | 'meter' | 'unit' | 'bag' | 'box';

export interface MaterialUsage {
  materialUsageId: string;
  projectId: string;
  status: MaterialUsageStatus;
  materialName: string;
  quantity: number;
  unit: MaterialUsageUnit;
  unitCost: number;
  costCode: string | null;
  usageDate: string;
  recordedBy: string | null;
  voidedAt: string | null;
  voidedReason: string | null;
  createdAt: string;
}

export const MATERIAL_USAGE_STATUS_TRANSITIONS: Record<MaterialUsageStatus, MaterialUsageStatus[]> = {
  posted: ['voided'],
  voided: [],
};

export function canTransitionMaterialUsage(from: MaterialUsageStatus, to: MaterialUsageStatus): boolean {
  return MATERIAL_USAGE_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function computeMaterialUsageTotal(quantity: number, unitCost: number): number {
  return quantity * unitCost;
}
