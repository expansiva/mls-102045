/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/dealStageChange.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const dealStageChangeTableDef: TableDefinition = {
  moduleId: 'propertyFlowCrm',
  repositoryName: 'propertyFlowCrmDealStageChange',
  tableName: 'deal_stage_change',
  purpose: 'transacao',
  description: 'Mudança de etapa do negócio. Registrar avanços e mudanças de etapa do negócio/proposta.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'deal_stage_change_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Identificador único da mudança de etapa do negócio.',
    },
    {
      name: 'deal_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Negócio alvo cuja etapa será alterada.',
    },
    {
      name: 'from_stage',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Etapa anterior do negócio antes da mudança.',
    },
    {
      name: 'to_stage',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Nova etapa do negócio após a mudança.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      nullable: false,
      defaultSql: "'active'",
      description: 'Status do registro de mudança de etapa.',
    },
    {
      name: 'changed_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora em que a mudança de etapa ocorreu.',
    },
    {
      name: 'created_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora de criação do registro de mudança.',
    },
    {
      name: 'updated_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora da última atualização do registro de mudança.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
      description: 'Armazenar dados internos adicionais do evento sem impacto em filtros principais.',
    },
  ],
  primaryKey: ['deal_stage_change_id'],
  indexes: [
    {
      name: 'idx_deal_stage_change_deal_id',
      columns: ['deal_id'],
      unique: false,
    },
    {
      name: 'idx_deal_stage_change_changed_at',
      columns: ['changed_at'],
      unique: false,
    },
    {
      name: 'idx_deal_stage_change_deal_id_changed_at',
      columns: ['deal_id', 'changed_at'],
      unique: false,
    },
  ],
  version: 1,
};
