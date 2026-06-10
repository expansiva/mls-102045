/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listLeadInteractions.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listLeadInteractions",
  "title": "Listar Interações do Lead",
  "purpose": "Listar histórico de interações de um lead específico",
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
      "tableName": "lead_interaction",
      "ownership": "moduleOwned"
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
      "commandId": "listLeadInteractions",
      "input": [
        {
          "name": "leadId",
          "type": "string",
          "required": true
        },
        {
          "name": "interactionType",
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
          "name": "interactions",
          "type": "LeadInteraction[]"
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
