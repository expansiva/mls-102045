/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listLeads.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listLeads",
  "title": "Listar Leads",
  "purpose": "Listar leads com filtros e paginação para o pipeline",
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
  "writesTables": [],
  "rulesApplied": [],
  "commands": [
    {
      "commandId": "listLeads",
      "input": [
        {
          "name": "status",
          "type": "LeadStatusEnum",
          "required": false
        },
        {
          "name": "brokerId",
          "type": "string",
          "required": false
        },
        {
          "name": "source",
          "type": "string",
          "required": false
        },
        {
          "name": "temperature",
          "type": "string",
          "required": false
        },
        {
          "name": "page",
          "type": "number",
          "required": false
        },
        {
          "name": "pageSize",
          "type": "number",
          "required": false
        }
      ],
      "output": [
        {
          "name": "leads",
          "type": "Lead[]"
        },
        {
          "name": "total",
          "type": "number"
        },
        {
          "name": "page",
          "type": "number"
        },
        {
          "name": "pageSize",
          "type": "number"
        }
      ]
    }
  ]
} as const;

export default useCase;
