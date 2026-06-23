/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/propertyStatusMetrics.ts" enhancement="_blank" />
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const propertyStatusMetricsTableDef: TableDefinition = {
  moduleId: 'propertyFlowCrm',
  repositoryName: 'propertyFlowCrmPropertyStatusMetrics',
  tableName: 'property_status_metrics',
  purpose: 'controle',
  description: 'Métricas de Status dos Imóveis',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'event_time',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Timestamp do evento de status do imóvel.',
    },
    {
      name: 'property_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'ID do imóvel.',
    },
    {
      name: 'broker_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'ID do corretor responsável.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Status atual do imóvel.',
    },
    {
      name: 'lifecycle_state',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Estado do ciclo de vida do imóvel.',
    },
    {
      name: 'property_count',
      postgresType: 'INTEGER',
      nullable: false,
      defaultSql: '0',
      description: 'Contagem de imóveis.',
    },
    {
      name: 'total_value',
      postgresType: 'NUMERIC',
      nullable: false,
      defaultSql: '0',
      description: 'Valor total dos imóveis (BRL).',
    },
  ],
  primaryKey: ['event_time', 'property_id', 'broker_id', 'status', 'lifecycle_state'],
  indexes: [
    {
      name: 'idx_property_status_metrics_event_time',
      columns: ['event_time'],
    },
    {
      name: 'idx_property_status_metrics_property_time',
      columns: ['property_id', 'event_time'],
    },
    {
      name: 'idx_property_status_metrics_broker_time',
      columns: ['broker_id', 'event_time'],
    },
    {
      name: 'idx_property_status_metrics_status_time',
      columns: ['status', 'event_time'],
    },
    {
      name: 'idx_property_status_metrics_lifecycle_time',
      columns: ['lifecycle_state', 'event_time'],
    },
  ],
  timescale: {
    hypertable: {
      timeColumn: 'event_time',
      chunkTimeInterval: '7 days',
    },
  },
  version: 1,
};
