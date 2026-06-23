/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/avancarEtapaNegocio.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "avancarEtapaNegocio",
  "title": "Avançar etapa do negócio",
  "purpose": "Mover negócio para próxima etapa e registrar mudança",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "dealEntity"
  ],
  "outputEntities": [
    "dealEntity",
    "dealStageChangeEntity"
  ],
  "readsTables": [
    {
      "tableName": "deal",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "deal",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "deal_stage_change",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "deal_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleDealStages",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "dealEntity",
    "dealStageChangeEntity"
  ],
  "commands": [
    {
      "commandId": "avancarEtapaNegocio",
      "input": [
        {
          "name": "dealId",
          "type": "string",
          "required": true
        },
        {
          "name": "currentStageId",
          "type": "string",
          "required": true
        },
        {
          "name": "nextStageId",
          "type": "string",
          "required": true
        },
        {
          "name": "brokerId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "deal",
          "type": "dealEntity"
        },
        {
          "name": "dealStageChange",
          "type": "dealStageChangeEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "avancarEtapaNegocio__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/avancarEtapaNegocio.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/avancarEtapaNegocio.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dealStageChangeEntity.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleDealStages",
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
