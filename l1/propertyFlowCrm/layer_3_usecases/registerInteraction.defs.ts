/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/registerInteraction.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "registerInteraction",
  "title": "Registrar Interação",
  "purpose": "Registrar uma interação com um lead (ligação, email, reunião, etc.)",
  "actor": "broker",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "leadInteractionEntity"
  ],
  "outputEntities": [
    "leadInteractionEntity"
  ],
  "readsTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "lead_interaction",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "crm_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleInteractionRequiredFields"
  ],
  "commands": [
    {
      "commandId": "registerInteraction",
      "input": [
        {
          "name": "leadId",
          "type": "string",
          "required": true
        },
        {
          "name": "interactionType",
          "type": "string",
          "required": true
        },
        {
          "name": "description",
          "type": "string",
          "required": true
        },
        {
          "name": "interactionDate",
          "type": "date",
          "required": true
        },
        {
          "name": "brokerId",
          "type": "string",
          "required": true
        },
        {
          "name": "outcome",
          "type": "string",
          "required": false
        },
        {
          "name": "nextAction",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "interactionId",
          "type": "string"
        },
        {
          "name": "leadId",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
