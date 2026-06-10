/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/scheduleVisit.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "scheduleVisit",
  "title": "Agendar Visita",
  "purpose": "Agendar uma visita a um imóvel para um lead",
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
      "tableName": "property",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    },
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
    "ruleVisitRequiredFields",
    "ruleVisitPropertyActive"
  ],
  "commands": [
    {
      "commandId": "scheduleVisit",
      "input": [
        {
          "name": "propertyId",
          "type": "string",
          "required": true
        },
        {
          "name": "leadId",
          "type": "string",
          "required": true
        },
        {
          "name": "brokerId",
          "type": "string",
          "required": true
        },
        {
          "name": "scheduledDate",
          "type": "date",
          "required": true
        },
        {
          "name": "scheduledTime",
          "type": "string",
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
