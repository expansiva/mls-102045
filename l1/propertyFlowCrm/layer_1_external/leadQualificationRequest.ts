/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/leadQualificationRequest.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const leadQualificationRequestTableDef: TableDefinition = {
  moduleId: 'propertyFlowCrm',
  repositoryName: 'propertyFlowCrmLeadQualificationRequest',
  tableName: 'lead_qualification_request',
  purpose: 'transacao',
  description: 'Solicitação de qualificação do lead. Registrar solicitações de qualificação de leads via IA e resultados.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'lead_qualification_request_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Identificador único da solicitação de qualificação do lead.',
    },
    {
      name: 'lead_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Referência ao lead alvo da qualificação.',
    },
    {
      name: 'lead_temperature',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Temperatura/classificação do lead sugerida (frio/morno/quente).',
    },
    {
      name: 'follow_up_suggestion',
      postgresType: 'TEXT',
      nullable: true,
      description: 'Sugestão de ação de follow-up para o lead.',
    },
    {
      name: 'ai_generated',
      postgresType: 'BOOLEAN',
      nullable: false,
      description: 'Indica se a qualificação e sugestão foram geradas por IA.',
    },
    {
      name: 'review_status',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Status de revisão humana da qualificação gerada por IA (pendente/aprovado/rejeitado).',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Status da solicitação (pendente/emRevisao/concluida/cancelada).',
    },
    {
      name: 'created_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data/hora de criação da solicitação.',
    },
    {
      name: 'updated_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data/hora da última atualização da solicitação.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
      description: 'Armazenar dados adicionais da classificação e auditoria sem uso frequente em filtros.',
    },
  ],
  primaryKey: ['lead_qualification_request_id'],
  indexes: [
    {
      name: 'idx_lead_qualification_request_lead_id',
      columns: ['lead_id'],
      unique: false,
    },
    {
      name: 'idx_lead_qualification_request_status',
      columns: ['status'],
      unique: false,
    },
    {
      name: 'idx_lead_qualification_request_review_status',
      columns: ['review_status'],
      unique: false,
    },
    {
      name: 'idx_lead_qualification_request_created_at',
      columns: ['created_at'],
      unique: false,
    },
  ],
  version: 1,
};
