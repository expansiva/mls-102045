/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/closeDealWon.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "closeDealWon",
  "title": "Fechar Negócio como Ganho",
  "purpose": "Fechar um negócio como ganho/concluído com sucesso",
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
    },
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "deal",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "deal_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "crm_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleDealPipelineTransition"
  ],
  "commands": [
    {
      "commandId": "closeDealWon",
      "input": [
        {
          "name": "dealId",
          "type": "string",
          "required": true
        },
        {
          "name": "finalValue",
          "type": "number",
          "required": true
        },
        {
          "name": "closingDate",
          "type": "date",
          "required": true
        },
        {
          "name": "commissionPercentage",
          "type": "number",
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
        },
        {
          "name": "propertyNewStatus",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
