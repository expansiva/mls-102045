/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsage.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const materialUsageTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmMaterialUsage',
  tableName: 'material_usage',
  purpose: 'controle',
  description: 'Append-only material usage log. Non-indexed fields (materialName, quantity, unitCost, costCode, usageDate, recordedBy, voidedAt, voidedReason) stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'material_usage_id', postgresType: 'UUID' },
    { name: 'project_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'unit', postgresType: 'TEXT' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['material_usage_id'],
  indexes: [
    { name: 'idx_material_usage_project_id', columns: ['project_id'] },
    { name: 'idx_material_usage_status', columns: ['status'] },
    { name: 'idx_material_usage_unit', columns: ['unit'] },
    { name: 'idx_material_usage_created_at', columns: ['created_at'] },
  ],
  retentionDays: 2555,
  version: 1,
};
