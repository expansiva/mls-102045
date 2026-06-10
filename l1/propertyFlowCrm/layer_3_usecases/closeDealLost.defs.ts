/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/closeDealLost.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "closeDealLost",
  "title": "Fechar Negócio como Perdido",
  "purpose": "Fechar um negócio como perdido/não concluído",
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
      "commandId": "closeDealLost",
      "input": [
        {
          "name": "dealId",
          "type": "string",
          "required": true
        },
        {
          "name": "lossReason",
          "type": "string",
          "required": true
        },
        {
          "name": "competitorInfo",
          "type": "string",
          "required": false
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
          "name": "status",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
