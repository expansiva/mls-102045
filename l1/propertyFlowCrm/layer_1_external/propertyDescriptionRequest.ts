/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/propertyDescriptionRequest.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const propertyDescriptionRequestTableDef: TableDefinition = {
  moduleId: 'propertyFlowCrm',
  repositoryName: 'propertyFlowCrmPropertyDescriptionRequest',
  tableName: 'property_description_request',
  purpose: 'transacao',
  description: 'Solicitação de descrição do imóvel. Registrar pedidos de geração de descrição via IA e seu histórico.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    {
      name: 'id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Identificador único da solicitação de descrição.',
    },
    {
      name: 'property_id',
      postgresType: 'UUID',
      nullable: false,
      description: 'Imóvel alvo para o qual a descrição será gerada.',
    },
    {
      name: 'bullets',
      postgresType: 'TEXT',
      nullable: false,
      description: 'Lista de pontos/bullets informados para compor a descrição.',
    },
    {
      name: 'ai_description',
      postgresType: 'TEXT',
      nullable: true,
      description: 'Descrição gerada por IA a partir dos bullets.',
    },
    {
      name: 'human_review_notes',
      postgresType: 'TEXT',
      nullable: true,
      description: 'Observações e ajustes realizados na revisão humana.',
    },
    {
      name: 'review_status',
      postgresType: 'VARCHAR(20)',
      nullable: false,
      description: 'Estado da revisão humana da descrição gerada.',
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
      description: 'Armazenar dados auxiliares e históricos eventuais sem impacto em filtros principais.',
    },
  ],
  primaryKey: ['id'],
  indexes: [
    {
      name: 'idx_property_description_request_property_id',
      columns: ['property_id'],
      unique: false,
    },
    {
      name: 'idx_property_description_request_review_status',
      columns: ['review_status'],
      unique: false,
    },
    {
      name: 'idx_property_description_request_created_at',
      columns: ['created_at'],
      unique: false,
    },
  ],
  version: 1,
};
