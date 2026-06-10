/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/getDashboardMetrics.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "getDashboardMetrics",
  "title": "Obter Métricas do Dashboard",
  "purpose": "Obter métricas consolidadas para o dashboard do gerente",
  "actor": "agencyManager",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [],
  "readsTables": [
    {
      "tableName": "property_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "lead_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "deal_pipeline_metrics",
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
  "writesTables": [],
  "rulesApplied": [],
  "commands": [
    {
      "commandId": "getDashboardMetrics",
      "input": [
        {
          "name": "period",
          "type": "string",
          "required": false
        },
        {
          "name": "brokerId",
          "type": "string",
          "required": false
        }
      ],
      "output": [
        {
          "name": "activeProperties",
          "type": "number"
        },
        {
          "name": "newLeadsThisMonth",
          "type": "number"
        },
        {
          "name": "scheduledVisits",
          "type": "number"
        },
        {
          "name": "openDeals",
          "type": "number"
        },
        {
          "name": "closedDealsValue",
          "type": "number"
        },
        {
          "name": "conversionRate",
          "type": "number"
        },
        {
          "name": "brokerPerformance",
          "type": "BrokerMetric[]"
        }
      ]
    }
  ]
} as const;

export default useCase;
