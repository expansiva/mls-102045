/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarStatusVisita.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarStatusVisita",
  "title": "Atualizar status da visita",
  "purpose": "Alterar status de uma visita existente",
  "actor": "corretor",
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
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "visit",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleVisitStatus",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "visitEntity"
  ],
  "commands": [
    {
      "commandId": "atualizarStatusVisita",
      "input": [
        {
          "name": "visitId",
          "type": "string",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
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
