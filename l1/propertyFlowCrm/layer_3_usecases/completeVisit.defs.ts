/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/completeVisit.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "completeVisit",
  "title": "Registrar Visita Realizada",
  "purpose": "Registrar que uma visita foi realizada com sucesso",
  "actor": "broker",
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
      "ownership": "moduleOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "visit",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "visit_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "crm_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleVisitStatusTransition"
  ],
  "commands": [
    {
      "commandId": "completeVisit",
      "input": [
        {
          "name": "visitId",
          "type": "string",
          "required": true
        },
        {
          "name": "feedback",
          "type": "string",
          "required": false
        },
        {
          "name": "leadInterest",
          "type": "string",
          "required": false
        },
        {
          "name": "nextSteps",
          "type": "string",
          "required": false
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
