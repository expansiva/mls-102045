/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/dashboardMetricUpdate.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const dashboardMetricUpdateTableDef: TableDefinition = {
  moduleId: 'propertyFlowCrm',
  repositoryName: 'propertyFlowCrmDashboardMetricUpdate',
  tableName: 'dashboard_metric_update',
  purpose: 'transacao',
  description: 'Atualização de métricas do dashboard. Registrar execuções de atualização de métricas administrativas.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'dashboard_metric_update_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Identificador único da atualização de métricas do dashboard.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      nullable: false,
      defaultSql: "'completed'",
      description: 'Status de execução da atualização de métricas.',
    },
    {
      name: 'created_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora de criação do evento de atualização.',
    },
    {
      name: 'updated_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora da última atualização do registro.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
    },
  ],
  primaryKey: ['dashboard_metric_update_id'],
  indexes: [
    {
      name: 'idx_dashboard_metric_update_created_at',
      columns: ['created_at'],
      unique: false,
    },
    {
      name: 'idx_dashboard_metric_update_status',
      columns: ['status'],
      unique: false,
    },
  ],
  version: 1,
};
