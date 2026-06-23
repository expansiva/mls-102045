/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/leadQualificationRequest.defs.ts" enhancement="_blank"/>

export const leadQualificationRequestTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "leadQualificationRequest",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 48,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "leadQualificationRequest",
      "tableName": "lead_qualification_request",
      "moduleId": "propertyFlowCrm",
      "title": "Solicitação de qualificação do lead",
      "purpose": "Registrar solicitações de qualificação de leads via IA e resultados.",
      "ownership": "moduleOwned",
      "rootEntity": "LeadQualificationRequest",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "lead_qualification_request_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da solicitação de qualificação do lead."
        },
        {
          "name": "lead_id",
          "type": "uuid",
          "nullable": false,
          "description": "Referência ao lead alvo da qualificação."
        },
        {
          "name": "lead_temperature",
          "type": "string",
          "nullable": false,
          "description": "Temperatura/classificação do lead sugerida (frio/morno/quente)."
        },
        {
          "name": "follow_up_suggestion",
          "type": "text",
          "nullable": true,
          "description": "Sugestão de ação de follow-up para o lead."
        },
        {
          "name": "ai_generated",
          "type": "boolean",
          "nullable": false,
          "description": "Indica se a qualificação e sugestão foram geradas por IA."
        },
        {
          "name": "review_status",
          "type": "string",
          "nullable": false,
          "description": "Status de revisão humana da qualificação gerada por IA (pendente/aprovado/rejeitado)."
        },
        {
          "name": "status",
          "type": "string",
          "nullable": false,
          "description": "Status da solicitação (pendente/emRevisao/concluida/cancelada)."
        },
        {
          "name": "created_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data/hora de criação da solicitação."
        },
        {
          "name": "updated_at",
          "type": "datetime",
          "nullable": false,
          "description": "Data/hora da última atualização da solicitação."
        }
      ],
      "primaryKey": [
        "lead_qualification_request_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "lead_id",
          "targetEntity": "Lead",
          "targetOwnership": "mdmOwned",
          "reason": "Relacionar solicitação ao lead qualificado."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_lead_qualification_request_lead_id",
          "columns": [
            "lead_id"
          ],
          "unique": false,
          "reason": "Busca de solicitações por lead."
        },
        {
          "indexName": "idx_lead_qualification_request_status",
          "columns": [
            "status"
          ],
          "unique": false,
          "reason": "Filtrar por status da solicitação."
        },
        {
          "indexName": "idx_lead_qualification_request_review_status",
          "columns": [
            "review_status"
          ],
          "unique": false,
          "reason": "Filtrar por status de revisão."
        },
        {
          "indexName": "idx_lead_qualification_request_created_at",
          "columns": [
            "created_at"
          ],
          "unique": false,
          "reason": "Ordenação e filtros por data de criação."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "jsonSchemaRef": "LeadQualificationRequestDetails",
        "reason": "Armazenar dados adicionais da classificação e auditoria sem uso frequente em filtros."
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
        "ruleAiHumanReview"
      ]
    },
    "defsPlan": {
      "fileName": "tables/leadQualificationRequest.defs.ts",
      "exportName": "leadQualificationRequestTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default leadQualificationRequestTableDefinition;

export const pipeline = [
  {
    "id": "leadQualificationRequest__layer_1_external",
    "type": "layer_1_external",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_1_external/leadQualificationRequest.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_1_external/leadQualificationRequest.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_1.md",
      "_102034_.d.ts"
    ],
    "afterSaveBackEnd": "_102021_/l2/agentMaterializeSolution/registerBackEnd.ts?registerLayer1",
    "agent": "agentMaterializeGen"
  }
] as const;
