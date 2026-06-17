/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/leadStageChange.defs.ts" enhancement="_blank"/>

export const leadStageChangeTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "leadStageChange",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 50,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "leadStageChange",
      "tableName": "lead_stage_change",
      "moduleId": "propertyFlowCrm",
      "title": "Mudança de etapa do lead",
      "purpose": "Registrar movimentos do lead no pipeline.",
      "ownership": "moduleOwned",
      "rootEntity": "LeadStageChange",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "lead_stage_change_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da mudança de etapa do lead."
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "Lead alvo da mudança de etapa."
        },
        {
          "name": "from_stage",
          "type": "string",
          "nullable": false,
          "description": "Etapa anterior do lead no pipeline."
        },
        {
          "name": "to_stage",
          "type": "string",
          "nullable": false,
          "description": "Nova etapa do lead no pipeline."
        },
        {
          "name": "changed_by_broker_id",
          "type": "uuid",
          "nullable": false,
          "description": "Responsável pela mudança de etapa."
        },
        {
          "name": "changed_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data e hora da mudança de etapa."
        },
        {
          "name": "note",
          "type": "text",
          "nullable": true,
          "description": "Observações ou motivo da mudança de etapa."
        },
        {
          "name": "record_status",
          "type": "string",
          "nullable": false,
          "default": "active",
          "description": "Status do registro para controle de ciclo de vida."
        },
        {
          "name": "created_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data de criação do registro de mudança."
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data da última atualização do registro de mudança."
        }
      ],
      "primaryKey": [
        "lead_stage_change_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "lead_id",
          "targetEntity": "Lead",
          "targetOwnership": "mdmOwned",
          "reason": "Mudança vinculada ao lead alvo."
        },
        {
          "fieldName": "changed_by_broker_id",
          "targetEntity": "Broker",
          "targetOwnership": "mdmOwned",
          "reason": "Responsável pela mudança de etapa."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_lead_stage_change_lead",
          "columns": [
            "lead_id",
            "changed_at"
          ],
          "unique": false,
          "reason": "Consulta do histórico de mudanças do lead em ordem temporal."
        },
        {
          "indexName": "idx_lead_stage_change_broker",
          "columns": [
            "changed_by_broker_id",
            "changed_at"
          ],
          "unique": false,
          "reason": "Auditoria de mudanças por corretor."
        },
        {
          "indexName": "idx_lead_stage_change_stage",
          "columns": [
            "to_stage",
            "changed_at"
          ],
          "unique": false,
          "reason": "Filtros por etapa atual no pipeline."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "jsonSchemaRef": "LeadStageChangeDetails",
        "reason": "Armazenar metadados adicionais da mudança sem impactar filtros principais."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "metricRefs": [],
        "updatedByLayer": "layer_3_usecases"
      },
      "accessPolicy": {
        "directAccessAllowedFor": [
          "layer_3_usecases"
        ],
        "forbiddenFor": [
          "pages",
          "layer_2_controllers",
          "agents"
        ]
      },
      "rulesApplied": [
        "ruleLeadPipelineStages"
      ]
    },
    "defsPlan": {
      "fileName": "tables/leadStageChange.defs.ts",
      "exportName": "leadStageChangeTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default leadStageChangeTableDefinition;
