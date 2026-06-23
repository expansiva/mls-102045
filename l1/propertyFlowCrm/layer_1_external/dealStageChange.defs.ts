/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/dealStageChange.defs.ts" enhancement="_blank"/>

export const dealStageChangeTableDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "table",
  "artifactId": "dealStageChange",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanTableDefinition",
    "stepId": 51,
    "planId": ""
  },
  "data": {
    "tableDefinition": {
      "tableId": "dealStageChange",
      "tableName": "deal_stage_change",
      "moduleId": "propertyFlowCrm",
      "title": "Mudança de etapa do negócio",
      "purpose": "Registrar avanços e mudanças de etapa do negócio/proposta.",
      "ownership": "moduleOwned",
      "rootEntity": "DealStageChange",
      "layer": "layer_1_external",
      "tableKind": "transactional",
      "columns": [
        {
          "name": "deal_stage_change_id",
          "type": "uuid",
          "nullable": false,
          "primaryKey": true,
          "description": "Identificador único da mudança de etapa do negócio."
        },
        {
          "name": "deal_id",
          "type": "uuid",
          "nullable": false,
          "description": "Negócio alvo cuja etapa será alterada."
        },
        {
          "name": "from_stage",
          "type": "varchar",
          "nullable": false,
          "description": "Etapa anterior do negócio antes da mudança."
        },
        {
          "name": "to_stage",
          "type": "varchar",
          "nullable": false,
          "description": "Nova etapa do negócio após a mudança."
        },
        {
          "name": "status",
          "type": "varchar",
          "nullable": false,
          "default": "active",
          "description": "Status do registro de mudança de etapa."
        },
        {
          "name": "changed_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora em que a mudança de etapa ocorreu."
        },
        {
          "name": "created_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora de criação do registro de mudança."
        },
        {
          "name": "updated_at",
          "type": "timestamptz",
          "nullable": false,
          "description": "Data e hora da última atualização do registro de mudança."
        }
      ],
      "primaryKey": [
        "deal_stage_change_id"
      ],
      "foreignRefs": [
        {
          "fieldName": "deal_id",
          "targetEntity": "Deal",
          "targetOwnership": "mdmOwned",
          "reason": "Mudança de etapa referencia o negócio alvo."
        }
      ],
      "indexes": [
        {
          "indexName": "idx_deal_stage_change_deal_id",
          "columns": [
            "deal_id"
          ],
          "reason": "Busca por mudanças por negócio."
        },
        {
          "indexName": "idx_deal_stage_change_changed_at",
          "columns": [
            "changed_at"
          ],
          "reason": "Ordenação e filtros por data da mudança."
        },
        {
          "indexName": "idx_deal_stage_change_deal_id_changed_at",
          "columns": [
            "deal_id",
            "changed_at"
          ],
          "reason": "Timeline de mudanças por negócio."
        }
      ],
      "detailsColumn": {
        "enabled": true,
        "columnName": "details",
        "reason": "Armazenar dados internos adicionais do evento sem impacto em filtros principais."
      },
      "metricUpdatePolicy": {
        "feedsMetrics": true,
        "updatedByLayer": "layer_3_usecases",
        "metricRefs": []
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
        "ruleDealStages"
      ]
    },
    "defsPlan": {
      "fileName": "tables/dealStageChange.defs.ts",
      "exportName": "dealStageChangeTableDefinition",
      "saveAsDefs": true
    }
  }
} as const;

export default dealStageChangeTableDefinition;

export const pipeline = [
  {
    "id": "dealStageChange__layer_1_external",
    "type": "layer_1_external",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_1_external/dealStageChange.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_1_external/dealStageChange.defs.ts",
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
