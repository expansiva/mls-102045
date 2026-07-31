/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/billingSummary.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const billingSummaryTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmBillingSummary',
  tableName: 'billing_summary',
  purpose: 'transacao',
  description:
    'Billing summaries per project. Non-indexed fields (periodStart, periodEnd, laborCost, materialCost, changeOrderCost, totalCost, sharedAt, updatedAt) stored in details (JSONB).',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'billing_summary_id', postgresType: 'UUID' },
    { name: 'project_id', postgresType: 'UUID' },
    { name: 'status', postgresType: 'TEXT' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()' },
    { name: 'details', postgresType: 'JSONB', nullable: true },
  ],
  primaryKey: ['billing_summary_id'],
  indexes: [
    { name: 'idx_billing_summary_project_id', columns: ['project_id'] },
    { name: 'idx_billing_summary_status', columns: ['status'] },
    { name: 'idx_billing_summary_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
