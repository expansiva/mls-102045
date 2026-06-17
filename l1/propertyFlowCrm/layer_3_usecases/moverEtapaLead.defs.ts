/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/moverEtapaLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "moverEtapaLead",
  "title": "Mover lead no pipeline",
  "purpose": "Alterar etapa de um lead e registrar transição",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "leadEntity"
  ],
  "outputEntities": [
    "leadEntity",
    "leadStageChangeEntity"
  ],
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
    },
    {
      "tableName": "lead_stage_change",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "lead_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleLeadPipelineStages",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "leadEntity",
    "leadStageChangeEntity"
  ],
  "commands": [
    {
      "commandId": "moveLeadStage",
      "input": [
        {
          "name": "leadId",
          "type": "string",
          "required": true
        },
        {
          "name": "toStageId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "lead",
          "type": "leadEntity"
        },
        {
          "name": "leadStageChange",
          "type": "leadStageChangeEntity"
        }
      ]
    }
  ]
} as const;

export default useCase;
