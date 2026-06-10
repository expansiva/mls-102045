/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/moveLeadStage.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "moveLeadStage",
  "title": "Mover Lead de Etapa",
  "purpose": "Mover um lead para uma nova etapa do pipeline de vendas",
  "actor": "broker",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [],
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
      "tableName": "lead_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "crm_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleLeadPipelineTransition"
  ],
  "commands": [
    {
      "commandId": "moveLeadStage",
      "input": [
        {
          "name": "leadId",
          "type": "string",
          "required": true
        },
        {
          "name": "newStage",
          "type": "LeadStatusEnum",
          "required": true
        },
        {
          "name": "reason",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "leadId",
          "type": "string"
        },
        {
          "name": "previousStage",
          "type": "string"
        },
        {
          "name": "currentStage",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
