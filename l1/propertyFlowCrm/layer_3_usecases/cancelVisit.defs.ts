/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/cancelVisit.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "cancelVisit",
  "title": "Cancelar Visita",
  "purpose": "Cancelar uma visita agendada",
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
    }
  ],
  "rulesApplied": [
    "ruleVisitStatusTransition"
  ],
  "commands": [
    {
      "commandId": "cancelVisit",
      "input": [
        {
          "name": "visitId",
          "type": "string",
          "required": true
        },
        {
          "name": "cancellationReason",
          "type": "string",
          "required": true
        },
        {
          "name": "cancelledBy",
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
