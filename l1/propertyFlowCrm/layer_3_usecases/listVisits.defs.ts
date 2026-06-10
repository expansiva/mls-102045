/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listVisits.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listVisits",
  "title": "Listar Visitas",
  "purpose": "Listar visitas agendadas com filtros para o calendário",
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
    },
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [],
  "commands": [
    {
      "commandId": "listVisits",
      "input": [
        {
          "name": "brokerId",
          "type": "string",
          "required": false
        },
        {
          "name": "propertyId",
          "type": "string",
          "required": false
        },
        {
          "name": "leadId",
          "type": "string",
          "required": false
        },
        {
          "name": "status",
          "type": "VisitStatusEnum",
          "required": false
        },
        {
          "name": "startDate",
          "type": "date",
          "required": false
        },
        {
          "name": "endDate",
          "type": "date",
          "required": false
        }
      ],
      "output": [
        {
          "name": "visits",
          "type": "Visit[]"
        },
        {
          "name": "total",
          "type": "number"
        }
      ]
    }
  ]
} as const;

export default useCase;
