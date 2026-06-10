/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/updateLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "updateLead",
  "title": "Atualizar Lead",
  "purpose": "Atualizar dados de um lead existente",
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
    }
  ],
  "rulesApplied": [
    "ruleLeadRequiredFields"
  ],
  "commands": [
    {
      "commandId": "updateLead",
      "input": [
        {
          "name": "leadId",
          "type": "string",
          "required": true
        },
        {
          "name": "name",
          "type": "string",
          "required": false
        },
        {
          "name": "email",
          "type": "string",
          "required": false
        },
        {
          "name": "phone",
          "type": "string",
          "required": false
        },
        {
          "name": "interestedPropertyType",
          "type": "string",
          "required": false
        },
        {
          "name": "budget",
          "type": "number",
          "required": false
        },
        {
          "name": "preferredRegion",
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
          "name": "leadId",
          "type": "string"
        },
        {
          "name": "updated",
          "type": "boolean"
        }
      ]
    }
  ]
} as const;

export default useCase;
