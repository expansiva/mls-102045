/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/Property.defs.ts" enhancement="_blank"/>

export const PropertyEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "Property",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 38,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "Property",
      "title": "Imóvel",
      "description": "Cadastro mestre de imóveis com endereço, tipo, preço, status, características e fotos mock.",
      "ownership": "mdmOwned",
      "fields": [
        {
          "fieldId": "propertyId",
          "type": "uuid",
          "required": true,
          "description": "Identificador único do imóvel."
        },
        {
          "fieldId": "brokerId",
          "type": "Broker",
          "required": true,
          "description": "Corretor responsável pelo imóvel."
        },
        {
          "fieldId": "address",
          "type": "text",
          "required": true,
          "description": "Endereço completo do imóvel."
        },
        {
          "fieldId": "propertyType",
          "type": "string",
          "required": true,
          "description": "Tipo do imóvel (ex.: apartamento, casa, sala comercial)."
        },
        {
          "fieldId": "price",
          "type": "money",
          "required": true,
          "description": "Preço anunciado do imóvel."
        },
        {
          "fieldId": "status",
          "type": "string",
          "required": true,
          "description": "Status atual do imóvel.",
          "enum": [
            "ativo",
            "inativo",
            "vendido",
            "reservado"
          ]
        },
        {
          "fieldId": "lifecycleState",
          "type": "string",
          "required": true,
          "description": "Estado do ciclo de vida do imóvel.",
          "enum": [
            "captado",
            "publicado",
            "emNegociacao",
            "vendido",
            "arquivado"
          ]
        },
        {
          "fieldId": "features",
          "type": "text",
          "required": false,
          "description": "Características e detalhes do imóvel."
        },
        {
          "fieldId": "photosMock",
          "type": "text",
          "required": false,
          "description": "Referências ou descrições de fotos mock do imóvel."
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
        "inativo",
        "vendido",
        "reservado"
      ],
      "lifecycleStates": [
        "captado",
        "publicado",
        "emNegociacao",
        "vendido",
        "arquivado"
      ],
      "rulesApplied": [
        "rulePropertyStatusLifecycle"
      ]
    }
  }
} as const;

export default PropertyEntityDefinition;
