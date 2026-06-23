/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "leadEntity",
  "title": "Lead/Cliente",
  "purpose": "Gestão de leads e clientes",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "leadId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único do lead."
    },
    {
      "fieldId": "brokerId",
      "type": "Broker",
      "required": true,
      "description": "Corretor responsável pelo lead."
    },
    {
      "fieldId": "fullName",
      "type": "string",
      "required": true,
      "description": "Nome completo do lead."
    },
    {
      "fieldId": "email",
      "type": "string",
      "required": false,
      "description": "E-mail principal do lead."
    },
    {
      "fieldId": "phone",
      "type": "string",
      "required": false,
      "description": "Telefone de contato do lead."
    },
    {
      "fieldId": "notes",
      "type": "text",
      "required": false,
      "description": "Anotações sobre o lead."
    },
    {
      "fieldId": "leadTemperature",
      "type": "string",
      "required": false,
      "description": "Temperatura do lead (ex.: frio, morno, quente)."
    },
    {
      "fieldId": "source",
      "type": "string",
      "required": false,
      "description": "Origem do lead (ex.: indicação, portal, anúncio)."
    },
    {
      "fieldId": "leadStatus",
      "type": "string",
      "required": true,
      "description": "Status atual do lead no pipeline.",
      "enum": [
        "novo",
        "emContato",
        "qualificado",
        "proposta",
        "fechado",
        "perdido"
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
    "novo",
    "emContato",
    "qualificado",
    "proposta",
    "fechado",
    "perdido"
  ],
  "lifecycleStates": [
    "captado",
    "qualificado",
    "negociacao",
    "fechado",
    "perdido"
  ],
  "sourceTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Lead",
      "domainId": "lead",
      "sourceOfTruth": "102034",
      "governanceRules": [
        "ruleLeadPipelineStages"
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
    "listarLeads",
    "obterLead",
    "criarLead",
    "atualizarLead",
    "solicitarQualificacaoLead",
    "moverEtapaLead",
    "atualizarMetricasDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/LeadEntity.ts",
    "className": "LeadEntity",
    "contractName": "ILeadEntity"
  }
} as const;

export default entity;

export const pipeline = [
  {
    "id": "leadEntity__layer_4_entities",
    "type": "layer_4_entities",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_4.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
