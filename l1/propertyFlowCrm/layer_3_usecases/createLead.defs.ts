/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/createLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "createLead",
  "title": "Cadastrar Lead",
  "purpose": "Criar um novo lead/cliente potencial no sistema",
  "actor": "broker",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [],
  "readsTables": [],
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
    "ruleLeadRequiredFields"
  ],
  "commands": [
    {
      "commandId": "createLead",
      "input": [
        {
          "name": "name",
          "type": "string",
          "required": true
        },
        {
          "name": "email",
          "type": "string",
          "required": false
        },
        {
          "name": "phone",
          "type": "string",
          "required": true
        },
        {
          "name": "source",
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
        },
        {
          "name": "brokerId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "leadId",
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
