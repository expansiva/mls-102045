/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "dealEntity",
  "title": "Negócio/Proposta",
  "purpose": "Gestão de negócios e propostas",
  "layer": "layer_4_entities",
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
  "sourceTables": [
    {
      "tableName": "deal",
      "ownership": "mdmOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Deal",
      "domainId": "deal",
      "sourceOfTruth": "102034",
      "governanceRules": [
        "ruleDealStages"
      ]
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "update",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "listarNegocios",
    "obterNegocio",
    "criarNegocio",
    "avancarEtapaNegocio",
    "atualizarMetricasDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/DealEntity.ts",
    "className": "DealEntity",
    "contractName": "IDealEntity"
  }
} as const;

export default entity;

export const pipeline = [
  {
    "id": "dealEntity__layer_4_entities",
    "type": "layer_4_entities",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/dealEntity.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_4.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
