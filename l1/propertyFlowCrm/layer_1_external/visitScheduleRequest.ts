/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/visitScheduleRequest.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const visitScheduleRequestTableDef: TableDefinition = {
  moduleId: 'propertyFlowCrm',
  repositoryName: 'propertyFlowCrmVisitScheduleRequest',
  tableName: 'visit_schedule_request',
  purpose: 'transacao',
  description: 'Solicitação de agendamento de visita. Registrar pedidos de agendamento e alterações de visita.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'visit_schedule_request_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Identificador único da solicitação de agendamento de visita.',
    },
    {
      name: 'visit_id',
      postgresType: 'UUID',
      nullable: true,
      description: 'Referência à visita criada ou alterada pela solicitação.',
    },
    {
      name: 'property_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Imóvel alvo da solicitação de agendamento.',
    },
    {
      name: 'lead_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Lead alvo da solicitação de agendamento.',
    },
    {
      name: 'requested_start_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora solicitadas para início da visita.',
    },
    {
      name: 'requested_end_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: true,
      description: 'Data e hora solicitadas para término da visita.',
    },
    {
      name: 'status',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Status atual da solicitação de agendamento.',
    },
    {
      name: 'notes',
      postgresType: 'TEXT',
      nullable: true,
      description: 'Observações adicionais para o agendamento.',
    },
    {
      name: 'created_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora de criação da solicitação.',
    },
    {
      name: 'updated_at',
      postgresType: 'TIMESTAMPTZ',
      nullable: false,
      description: 'Data e hora da última atualização da solicitação.',
    },
    {
      name: 'details',
      postgresType: 'JSONB',
      nullable: true,
      description: 'Armazenar dados adicionais da solicitação que não exigem filtro/consulta frequente.',
    },
  ],
  primaryKey: ['visit_schedule_request_id'],
  indexes: [
    {
      name: 'idx_visit_schedule_request_property',
      columns: ['property_id', 'requested_start_at'],
      unique: false,
    },
    {
      name: 'idx_visit_schedule_request_lead',
      columns: ['lead_id', 'requested_start_at'],
      unique: false,
    },
    {
      name: 'idx_visit_schedule_request_status',
      columns: ['status', 'requested_start_at'],
      unique: false,
    },
    {
      name: 'idx_visit_schedule_request_visit',
      columns: ['visit_id'],
      unique: false,
    },
  ],
  version: 1,
};
