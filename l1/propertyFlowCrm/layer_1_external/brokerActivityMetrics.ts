/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/brokerActivityMetrics.ts" enhancement="_blank" />
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const brokerActivityMetricsTableDef: TableDefinition = {
  moduleId: 'propertyFlowCrm',
  repositoryName: 'propertyFlowCrmBrokerActivityMetrics',
  tableName: 'broker_activity_metrics',
  purpose: 'controle',
  description: 'Métricas de Atividade dos Corretores. Consolidar a atividade operacional dos corretores em um índice temporal unificado.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'event_time',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora do evento de atividade consolidado.',
    },
    {
      name: 'broker_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'ID do corretor responsável pela atividade.',
    },
    {
      name: 'activity_type',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Tipo de atividade registrada.',
    },
    {
      name: 'property_id',
      postgresType: 'UUID',
      nullable: true,
      description: 'Imóvel associado à atividade, quando aplicável.',
    },
    {
      name: 'lead_id',
      postgresType: 'UUID',
      nullable: true,
      description: 'Lead associado à atividade, quando aplicável.',
    },
    {
      name: 'activity_count',
      postgresType: 'INTEGER',
      nullable: false,
      defaultSql: '1',
      description: 'Contagem unitária da atividade registrada.',
    },
  ],
  primaryKey: ['event_time', 'broker_id', 'activity_type', 'property_id', 'lead_id'],
  indexes: [
    {
      name: 'idx_broker_activity_metrics_event_time',
      columns: ['event_time'],
      unique: false,
    },
    {
      name: 'idx_broker_activity_metrics_broker_time',
      columns: ['broker_id', 'event_time'],
      unique: false,
    },
    {
      name: 'idx_broker_activity_metrics_activity_time',
      columns: ['activity_type', 'event_time'],
      unique: false,
    },
    {
      name: 'idx_broker_activity_metrics_property_time',
      columns: ['property_id', 'event_time'],
      unique: false,
    },
    {
      name: 'idx_broker_activity_metrics_lead_time',
      columns: ['lead_id', 'event_time'],
      unique: false,
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
