/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/Broker.defs.ts" enhancement="_blank"/>

export const BrokerEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "Broker",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 42,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "Broker",
      "title": "Corretor",
      "description": "Cadastro de corretores responsáveis por imóveis, leads e negócios.",
      "ownership": "mdmOwned",
      "fields": [
        {
          "fieldId": "brokerId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do corretor."
        },
        {
          "fieldId": "fullName",
          "type": "string",
          "required": true,
          "description": "Nome completo do corretor."
        },
        {
          "fieldId": "email",
          "type": "string",
          "required": false,
          "description": "E-mail de contato do corretor."
        },
        {
          "fieldId": "phone",
          "type": "string",
          "required": false,
          "description": "Telefone de contato do corretor."
        },
        {
          "fieldId": "licenseNumber",
          "type": "string",
          "required": false,
          "description": "Número de registro/CRECI do corretor."
        },
        {
          "fieldId": "status",
          "type": "string",
          "required": true,
          "description": "Situação do corretor no sistema.",
          "enum": [
            "ativo",
            "inativo"
          ]
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
        "ativo",
        "inativo"
      ],
      "lifecycleStates": [
        "ativo",
        "inativo"
      ],
      "rulesApplied": []
    }
  }
} as const;

export default BrokerEntityDefinition;
