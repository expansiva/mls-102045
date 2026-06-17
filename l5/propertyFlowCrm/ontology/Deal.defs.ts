/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/Deal.defs.ts" enhancement="_blank"/>

export const DealEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "Deal",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 41,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "Deal",
      "title": "Negócio/Proposta",
      "description": "Proposta comercial vinculada a imóvel e lead, com valor e etapa.",
      "ownership": "mdmOwned",
      "kind": "core",
      "fields": [
        {
          "fieldId": "dealId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do negócio."
        },
        {
          "fieldId": "propertyId",
          "type": "Property",
          "required": true,
          "description": "Imóvel associado ao negócio."
        },
        {
          "fieldId": "leadId",
          "type": "Lead",
          "required": true,
          "description": "Lead associado ao negócio."
        },
        {
          "fieldId": "brokerId",
          "type": "Broker",
          "required": true,
          "description": "Corretor responsável pelo negócio."
        },
        {
          "fieldId": "status",
          "type": "string",
          "required": true,
          "description": "Etapa atual do negócio.",
          "enum": [
            "rascunho",
            "enviada",
            "emNegociacao",
            "aceita",
            "recusada",
            "fechada"
          ]
        },
        {
          "fieldId": "amount",
          "type": "money",
          "required": true,
          "description": "Valor proposto para o negócio."
        },
        {
          "fieldId": "notes",
          "type": "text",
          "required": false,
          "description": "Observações adicionais sobre o negócio."
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação do registro."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização do registro."
        }
      ],
      "statusEnum": [
        "rascunho",
        "enviada",
        "emNegociacao",
        "aceita",
        "recusada",
        "fechada"
      ],
      "lifecycleStates": [
        "rascunho",
        "enviada",
        "emNegociacao",
        "aceita",
        "recusada",
        "fechada"
      ],
      "rulesApplied": [
        "ruleDealStages"
      ]
    }
  }
} as const;

export default DealEntityDefinition;
