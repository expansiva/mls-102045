/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/leadStageChange.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const leadStageChangeTableDef: TableDefinition = {
  moduleId: 'propertyFlowCrm',
  repositoryName: 'propertyFlowCrmLeadStageChange',
  tableName: 'lead_stage_change',
  purpose: 'transacao',
  description: 'Mudança de etapa do lead. Registrar movimentos do lead no pipeline.',
  storageProfile: 'postgres',
  writeMode: 'sync',
  backupHot: false,
  columns: [
    {
      name: 'lead_stage_change_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Identificador único da mudança de etapa do lead.',
    },
    {
      name: 'lead_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Lead alvo da mudança de etapa.',
    },
    {
      name: 'from_stage',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Etapa anterior do lead no pipeline.',
    },
    {
      name: 'to_stage',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Nova etapa do lead no pipeline.',
    },
    {
      name: 'changed_by_broker_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Responsável pela mudança de etapa.',
    },
    {
      name: 'changed_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora da mudança de etapa.',
    },
    {
      name: 'note',
      postgresType: 'TEXT',
      nullable: true,
      description: 'Observações ou motivo da mudança de etapa.',
    },
    {
      name: 'record_status',
      postgresType: 'TEXT',
      nullable: false,
      defaultSql: "'active'",
      description: 'Status do registro para controle de ciclo de vida.',
    },
    {
      name: 'created_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data de criação do registro de mudança.',
    },
    {
      name: 'updated_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data da última atualização do registro de mudança.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
      description: 'Metadados adicionais da mudança sem impactar filtros principais.',
    },
  ],
  primaryKey: ['lead_stage_change_id'],
  indexes: [
    {
      name: 'idx_lead_stage_change_lead',
      columns: ['lead_id', 'changed_at'],
      unique: false,
    },
    {
      name: 'idx_lead_stage_change_broker',
      columns: ['changed_by_broker_id', 'changed_at'],
      unique: false,
    },
    {
      name: 'idx_lead_stage_change_stage',
      columns: ['to_stage', 'changed_at'],
      unique: false,
    },
  ],
  version: 1,
};
