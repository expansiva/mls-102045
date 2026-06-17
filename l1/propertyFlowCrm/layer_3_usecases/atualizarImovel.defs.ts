/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarImovel.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "atualizarImovel",
  "title": "Atualizar imóvel",
  "purpose": "Atualizar dados e status de um imóvel",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "propertyEntity"
  ],
  "outputEntities": [
    "propertyEntity"
  ],
  "readsTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "property_status_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "rulePropertyStatusLifecycle",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "propertyEntity"
  ],
  "commands": [
    {
      "commandId": "atualizarImovel",
      "input": [
        {
          "name": "propertyEntity",
          "type": "propertyEntity",
          "required": true
        }
      ],
      "output": [
        {
          "name": "propertyEntity",
          "type": "propertyEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
