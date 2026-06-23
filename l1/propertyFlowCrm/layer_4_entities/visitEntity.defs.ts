/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "visitEntity",
  "title": "Visita/Agendamento",
  "purpose": "Gestão de visitas e agendamentos",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "visitId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da visita."
    },
    {
      "fieldId": "status",
      "type": "string",
      "required": true,
      "description": "Status atual da visita.",
      "enum": [
        "agendada",
        "confirmada",
        "reagendada",
        "realizada",
        "cancelada"
      ]
    },
    {
      "fieldId": "propertyId",
      "type": "Property",
      "required": true,
      "description": "Imóvel vinculado à visita."
    },
    {
      "fieldId": "leadId",
      "type": "Lead",
      "required": true,
      "description": "Lead vinculado à visita."
    },
    {
      "fieldId": "brokerId",
      "type": "Broker",
      "required": false,
      "description": "Corretor responsável pela visita."
    },
    {
      "fieldId": "scheduledAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora agendadas para a visita."
    },
    {
      "fieldId": "notes",
      "type": "text",
      "required": false,
      "description": "Observações ou instruções para a visita."
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
    "agendada",
    "confirmada",
    "reagendada",
    "realizada",
    "cancelada"
  ],
  "sourceTables": [
    {
      "tableName": "visit",
      "ownership": "mdmOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Visit",
      "domainId": "visit",
      "sourceOfTruth": "102034",
      "governanceRules": [
        "ruleVisitStatus"
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
    "listarVisitas",
    "obterVisita",
    "agendarVisita",
    "atualizarStatusVisita",
    "atualizarMetricasDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/VisitEntity.ts",
    "className": "VisitEntity",
    "contractName": "IVisitEntity"
  }
} as const;

export default entity;

export const pipeline = [
  {
    "id": "visitEntity__layer_4_entities",
    "type": "layer_4_entities",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_4.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
