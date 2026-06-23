/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/dealPipelineMetrics.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const dealPipelineMetricsTableDef: TableDefinition = {
  moduleId: 'propertyFlowCrm',
  repositoryName: 'propertyFlowCrmDealPipelineMetrics',
  tableName: 'deal_pipeline_metrics',
  purpose: 'controle',
  description: 'Rastrear o volume e valor dos negócios por etapa, corretor, lead e imóvel relacionado.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'event_time',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora do evento de negócio usado para agregação temporal.',
    },
    {
      name: 'deal_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'ID do negócio relacionado ao evento.',
    },
    {
      name: 'lead_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'ID do lead relacionado ao negócio.',
    },
    {
      name: 'property_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'ID do imóvel relacionado ao negócio.',
    },
    {
      name: 'broker_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'ID do corretor responsável pelo negócio.',
    },
    {
      name: 'stage',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Etapa atual do negócio.',
    },
    {
      name: 'deal_count',
      postgresType: 'INTEGER',
      nullable: false,
      defaultSql: '0',
      description: 'Contagem de negócios.',
    },
    {
      name: 'deal_value',
      postgresType: 'NUMERIC',
      nullable: false,
      defaultSql: '0',
      description: 'Valor total dos negócios.',
    },
    {
      name: 'avg_deal_value',
      postgresType: 'NUMERIC',
      nullable: true,
      description: 'Valor médio dos negócios.',
    },
  ],
  primaryKey: ['event_time', 'deal_id', 'lead_id', 'property_id', 'broker_id', 'stage'],
  indexes: [
    {
      name: 'idx_deal_pipeline_metrics_event_time',
      columns: ['event_time'],
      unique: false,
    },
    {
      name: 'idx_deal_pipeline_metrics_stage_time',
      columns: ['stage', 'event_time'],
      unique: false,
    },
    {
      name: 'idx_deal_pipeline_metrics_broker_time',
      columns: ['broker_id', 'event_time'],
      unique: false,
    },
    {
      name: 'idx_deal_pipeline_metrics_lead_time',
      columns: ['lead_id', 'event_time'],
      unique: false,
    },
    {
      name: 'idx_deal_pipeline_metrics_property_time',
      columns: ['property_id', 'event_time'],
      unique: false,
    },
    {
      name: 'idx_deal_pipeline_metrics_deal_time',
      columns: ['deal_id', 'event_time'],
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
