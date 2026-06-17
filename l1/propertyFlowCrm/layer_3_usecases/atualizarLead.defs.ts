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
