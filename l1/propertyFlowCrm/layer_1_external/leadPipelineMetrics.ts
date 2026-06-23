/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/leadPipelineMetrics.ts" enhancement="_blank" />
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const leadPipelineMetricsTableDef: TableDefinition = {
  moduleId: 'propertyFlowCrm',
  repositoryName: 'propertyFlowCrmLeadPipelineMetrics',
  tableName: 'lead_pipeline_metrics',
  purpose: 'controle',
  description: 'Métricas de Pipeline de Leads. Monitorar o volume, qualificação e conversão de leads por etapa do pipeline e corretor.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'event_time',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Momento do evento agregado para o pipeline de leads.',
    },
    {
      name: 'lead_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'ID do lead.',
    },
    {
      name: 'broker_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'ID do corretor responsável.',
    },
    {
      name: 'stage',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Etapa atual do pipeline do lead.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Status do lead.',
    },
    {
      name: 'lead_count',
      postgresType: 'INTEGER',
      nullable: false,
      defaultSql: '0',
      description: 'Contagem de leads.',
    },
    {
      name: 'qualified_count',
      postgresType: 'INTEGER',
      nullable: false,
      defaultSql: '0',
      description: 'Contagem de leads qualificados.',
    },
  ],
  primaryKey: ['event_time', 'lead_id', 'broker_id', 'stage', 'status'],
  indexes: [
    {
      name: 'idx_lead_pipeline_metrics_event_time',
      columns: ['event_time'],
      unique: false,
    },
    {
      name: 'idx_lead_pipeline_metrics_lead_time',
      columns: ['lead_id', 'event_time'],
      unique: false,
    },
    {
      name: 'idx_lead_pipeline_metrics_broker_time',
      columns: ['broker_id', 'event_time'],
      unique: false,
    },
    {
      name: 'idx_lead_pipeline_metrics_stage_time',
      columns: ['stage', 'event_time'],
      unique: false,
    },
    {
      name: 'idx_lead_pipeline_metrics_status_time',
      columns: ['status', 'event_time'],
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
