/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/leadQualificationRequestEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "leadQualificationRequestEntity",
  "title": "Solicitação de Qualificação do Lead",
  "purpose": "Solicitações de qualificação de lead via IA",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "leadQualificationRequestId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da solicitação de qualificação do lead."
    },
    {
      "fieldId": "leadId",
      "type": "Lead",
      "required": true,
      "description": "Referência ao lead alvo da qualificação."
    },
    {
      "fieldId": "leadTemperature",
      "type": "string",
      "required": true,
      "description": "Temperatura/classificação do lead sugerida.",
      "enum": [
        "frio",
        "morno",
        "quente"
      ]
    },
    {
      "fieldId": "followUpSuggestion",
      "type": "text",
      "required": false,
      "description": "Sugestão de ação de follow-up para o lead."
    },
    {
      "fieldId": "aiGenerated",
      "type": "boolean",
      "required": true,
      "description": "Indica se a qualificação e sugestão foram geradas por IA."
    },
    {
      "fieldId": "reviewStatus",
      "type": "string",
      "required": true,
      "description": "Status de revisão humana da qualificação gerada por IA.",
      "enum": [
        "pendente",
        "aprovado",
        "rejeitado"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data/hora de criação da solicitação."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data/hora da última atualização da solicitação."
    }
  ],
  "statusEnum": [
    "pendente",
    "emRevisao",
    "concluida",
    "cancelada"
  ],
  "lifecycleStates": [
    "criada",
    "qualificada",
    "revisada",
    "finalizada"
  ],
  "sourceTables": [
    {
      "tableName": "lead_qualification_request",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "moduleTable",
      "tableId": "leadQualificationRequest",
      "tableName": "lead_qualification_request",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/leadQualificationRequest.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "listarSolicitacoesQualificacaoLead",
    "obterSolicitacaoQualificacaoLead",
    "solicitarQualificacaoLead",
    "atualizarMetricasDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/LeadQualificationRequestEntity.ts",
    "className": "LeadQualificationRequestEntity",
    "contractName": "ILeadQualificationRequestEntity"
  }
} as const;

export default entity;
