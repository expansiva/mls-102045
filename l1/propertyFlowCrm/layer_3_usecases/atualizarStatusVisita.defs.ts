/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarStatusVisita.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarStatusVisita",
  "title": "Atualizar status da visita",
  "purpose": "Alterar status de uma visita existente",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "visitEntity"
  ],
  "outputEntities": [
    "visitEntity"
  ],
  "readsTables": [
    {
      "tableName": "visit",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "visit",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleVisitStatus",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "visitEntity"
  ],
  "commands": [
    {
      "commandId": "atualizarStatusVisita",
      "input": [
        {
          "name": "visitId",
          "type": "string",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "visitId",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "atualizarStatusVisita__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarStatusVisita.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarStatusVisita.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleVisitStatus",
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
