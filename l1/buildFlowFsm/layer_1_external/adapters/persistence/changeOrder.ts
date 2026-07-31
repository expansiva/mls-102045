/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrder.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const changeOrderTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmChangeOrder',
  tableName: 'change_order',
  purpose: 'transacao',
  description:
    'Change orders for construction projects. Non-indexed fields (title, description, costAdjustment, scheduleAdjustmentDays, rejectionReason, approvedAt, rejectedAt, updatedAt) stored in details JSONB.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'change_order_id', postgresType: 'UUID', description: 'PK' },
    { name: 'project_id', postgresType: 'UUID', description: 'FK to project' },
    { name: 'impact_type', postgresType: 'TEXT', description: 'Impact type filter' },
    { name: 'status', postgresType: 'TEXT', description: 'Change order status' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()', description: 'Ordering timestamp' },
    { name: 'details', postgresType: 'JSONB', nullable: true, description: 'title, description, costAdjustment, scheduleAdjustmentDays, rejectionReason, approvedAt, rejectedAt, updatedAt' },
  ],
  primaryKey: ['change_order_id'],
  indexes: [
    { name: 'idx_change_order_project_id', columns: ['project_id'] },
    { name: 'idx_change_order_impact_type', columns: ['impact_type'] },
    { name: 'idx_change_order_status', columns: ['status'] },
    { name: 'idx_change_order_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
