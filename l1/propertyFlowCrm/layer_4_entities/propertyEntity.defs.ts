/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/propertyEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "propertyEntity",
  "title": "Imóvel",
  "purpose": "Gestão completa de imóveis do CRM",
  "layer": "layer_4_entities",
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
  "sourceTables": [
    {
      "tableName": "property",
      "ownership": "mdmOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Property",
      "domainId": "property",
      "sourceOfTruth": "102034",
      "governanceRules": [
        "rulePropertyStatusLifecycle"
      ]
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "update",
    "list",
    "search"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "listarImoveis",
    "obterImovel",
    "criarImovel",
    "atualizarImovel",
    "solicitarDescricaoImovel",
    "atualizarMetricasDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/PropertyEntity.ts",
    "className": "PropertyEntity",
    "contractName": "IPropertyEntity"
  }
} as const;

export default entity;
