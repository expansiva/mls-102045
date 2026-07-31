/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsageRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IMaterialUsageRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { MaterialUsage, MaterialUsageStatus, MaterialUsageUnit } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';
interface MaterialUsageRow {
material_usage_id: string;
project_id: string;
status: string;
unit: string;
created_at: string;
details: string | null;
}
interface MaterialUsageDetails {
materialName: string;
quantity: number;
unitCost: number;
costCode: string | null;
usageDate: string;
recordedBy: string | null;
voidedAt: string | null;
voidedReason: string | null;
}
function toRow(record: MaterialUsage): MaterialUsageRow {
const details: MaterialUsageDetails = {
materialName: record.materialName,
quantity: record.quantity,
unitCost: record.unitCost,
costCode: record.costCode,
usageDate: record.usageDate,
recordedBy: record.recordedBy,
voidedAt: record.voidedAt,
voidedReason: record.voidedReason,
};
return {
material_usage_id: record.materialUsageId,
project_id: record.projectId,
status: record.status,
unit: record.unit,
created_at: record.createdAt,
details: JSON.stringify(details),
};
}
function detailsDefaults(row: MaterialUsageRow): MaterialUsageDetails {
return {
materialName: '',
quantity: 0,
unitCost: 0,
costCode: null,
usageDate: row.created_at,
recordedBy: null,
voidedAt: null,
voidedReason: null,
};
}
function parseDetails(row: MaterialUsageRow): MaterialUsageDetails {
let parsed: Partial<MaterialUsageDetails> = {};
try {
parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<MaterialUsageDetails>;
} catch {
parsed = {};
}
return { ...detailsDefaults(row), ...parsed };
}
function toDomain(row: MaterialUsageRow): MaterialUsage {
const d = parseDetails(row);
return {
materialUsageId: row.material_usage_id,
projectId: row.project_id,
status: row.status as MaterialUsageStatus,
materialName: d.materialName,
quantity: d.quantity,
unit: row.unit as MaterialUsageUnit,
unitCost: d.unitCost,
costCode: d.costCode,
usageDate: d.usageDate,
recordedBy: d.recordedBy,
voidedAt: d.voidedAt,
voidedReason: d.voidedReason,
createdAt: row.created_at,
};
}
export function createMaterialUsageRepositoryAdapter(ctx: RequestContext): IMaterialUsageRepository {
const getTable = () => ctx.data.moduleData.getTable<MaterialUsageRow>('material_usage');
return {
async append(record: MaterialUsage): Promise<void> {
const repo = await getTable();
await repo.insert({ record: toRow(record) });
},
async listByProjectId(projectId: string): Promise<MaterialUsage[]> {
const repo = await getTable();
const rows = await repo.findMany({
where: { project_id: projectId },
orderBy: { field: 'created_at', direction: 'desc' },
});
return rows.map(toDomain);
},
async listByPeriod(from: string, to: string): Promise<MaterialUsage[]> {
const repo = await getTable();
const rows = await repo.findMany({
orderBy: { field: 'created_at', direction: 'desc' },
});
return rows
.map(toDomain)
.filter((m) => m.usageDate >= from && m.usageDate <= to);
},
async listByMaterialType(projectId: string, materialType: string): Promise<MaterialUsage[]> {
const repo = await getTable();
const rows = await repo.findMany({
where: { project_id: projectId, unit: materialType },
orderBy: { field: 'created_at', direction: 'desc' },
});
return rows.map(toDomain);
},
};
}
