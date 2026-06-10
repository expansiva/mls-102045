/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/advanceDealStage.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "advanceDealStage",
  "title": "Avançar Etapa do Negócio",
  "purpose": "Avançar um negócio para a próxima etapa do pipeline",
  "actor": "broker",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "dealEntity"
  ],
  "outputEntities": [
    "dealEntity"
  ],
  "readsTables": [
    {
      "tableName": "deal",
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "deal",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "deal_pipeline_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleDealPipelineTransition"
  ],
  "commands": [
    {
      "commandId": "advanceDealStage",
      "input": [
        {
          "name": "dealId",
          "type": "string",
          "required": true
        },
        {
          "name": "newStage",
          "type": "DealStatusEnum",
          "required": true
        },
        {
          "name": "notes",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "dealId",
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
