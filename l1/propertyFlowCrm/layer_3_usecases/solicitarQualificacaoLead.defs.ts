/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/solicitarQualificacaoLead.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "solicitarQualificacaoLead",
  "title": "Solicitar qualificação do lead via IA",
  "purpose": "Criar solicitação de qualificação de temperatura para um lead",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "leadEntity"
  ],
  "outputEntities": [
    "leadQualificationRequestEntity"
  ],
  "readsTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [
    {
      "tableName": "lead_qualification_request",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "rulesApplied": [
    "ruleAiHumanReview",
    "ruleMetricRefresh"
  ],
  "entityRefs": [
    "dashboardMetricEntity",
    "leadEntity",
    "leadQualificationRequestEntity"
  ],
  "commands": [
    {
      "commandId": "solicitarQualificacaoLead",
      "input": [
        {
          "name": "leadId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "leadQualificationRequestId",
          "type": "string"
        }
      ]
    }
  ]
} as const;

export default useCase;
