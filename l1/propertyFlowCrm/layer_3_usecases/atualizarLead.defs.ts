/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarLead",
  "title": "Atualizar lead",
  "purpose": "Atualizar dados de um lead",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "leadEntity"
  ],
  "outputEntities": [
    "leadEntity"
  ],
  "readsTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "lead_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleLeadPipelineStages",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "leadEntity"
  ],
  "commands": [
    {
      "commandId": "atualizarLead",
      "input": [
        {
          "name": "leadId",
          "type": "string",
          "required": true
        },
        {
          "name": "lead",
          "type": "leadEntity",
          "required": true
        }
      ],
      "output": [
        {
          "name": "lead",
          "type": "leadEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "atualizarLead__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarLead.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarLead.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleLeadPipelineStages",
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
