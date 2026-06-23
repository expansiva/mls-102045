/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/propertyDescriptionRequest.defs.ts" enhancement="_blank"/>

export const propertyDescriptionRequestTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "propertyDescriptionRequest",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 47,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "propertyDescriptionRequest",
      "tableName": "property_description_request",
      "moduleId": "propertyFlowCrm",
      "title": "Solicitação de descrição do imóvel",
      "purpose": "Registrar pedidos de geração de descrição via IA e seu histórico.",
      "ownership": "moduleOwned",
      "rootEntity": "PropertyDescriptionRequest",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da solicitação de descrição."
        },
        {
          "name": "property_id",
          "type": "uuid",
          "nullable": false,
          "description": "Imóvel alvo para o qual a descrição será gerada."
        },
        {
          "name": "bullets",
          "type": "text",
          "nullable": false,
          "description": "Lista de pontos/bullets informados para compor a descrição."
        },
        {
          "name": "ai_description",
          "type": "text",
          "nullable": true,
          "description": "Descrição gerada por IA a partir dos bullets."
        },
        {
          "name": "human_review_notes",
          "type": "text",
          "nullable": true,
          "description": "Observações e ajustes realizados na revisão humana."
        },
        {
          "name": "review_status",
          "type": "varchar(20)",
          "nullable": false,
          "description": "Estado da revisão humana da descrição gerada."
        },
        {
          "name": "created_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora de criação da solicitação."
        },
        {
          "name": "updated_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora da última atualização da solicitação."
        }
      ],
      "primaryKey": [
        "id"
      ],
      "foreignRefs": [
        {
          "fieldName": "property_id",
          "targetEntity": "Property",
          "targetOwnership": "mdmOwned",
          "reason": "Solicitação vinculada ao imóvel alvo."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_property_description_request_property_id",
          "columns": [
            "property_id"
          ],
          "unique": false,
          "reason": "Busca por solicitações do imóvel."
        },
        {
          "indexName": "idx_property_description_request_review_status",
          "columns": [
            "review_status"
          ],
          "unique": false,
          "reason": "Filtrar por estado de revisão."
        },
        {
          "indexName": "idx_property_description_request_created_at",
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
        "reason": "Armazenar dados auxiliares e históricos eventuais sem impacto em filtros principais."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": false,
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
      "fileName": "tables/propertyDescriptionRequest.defs.ts",
      "exportName": "propertyDescriptionRequestTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default propertyDescriptionRequestTableDefinition;

export const pipeline = [
  {
    "id": "propertyDescriptionRequest__layer_1_external",
    "type": "layer_1_external",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_1_external/propertyDescriptionRequest.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_1_external/propertyDescriptionRequest.defs.ts",
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
