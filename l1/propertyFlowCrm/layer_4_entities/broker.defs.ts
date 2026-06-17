/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/broker.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "broker",
  "title": "Corretor",
  "purpose": "MDM-backed entity for Broker (data lives in the shared MDM infrastructure, project 102034)",
  "layer": "layer_4_entities",
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
  "sourceTables": [
    {
      "tableName": "Broker",
      "ownership": "mdmOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Broker",
      "domainId": "broker",
      "sourceOfTruth": "102034"
    }
  ],
  "allowedOperations": [
    "read",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [],
  "materialization": {
    "fileName": "layer_4_entities/BrokerEntity.ts",
    "className": "BrokerEntity",
    "contractName": "IBrokerEntity"
  }
} as const;

export default entity;
