/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/leadStageChangeEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "leadStageChangeEntity",
  "title": "Mudança de Etapa do Lead",
  "purpose": "Histórico de mudanças de etapa no pipeline de leads",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "leadStageChangeId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da mudança de etapa do lead."
    },
    {
      "fieldId": "leadId",
      "type": "Lead",
      "required": true,
      "description": "Lead alvo da mudança de etapa."
    },
    {
      "fieldId": "fromStage",
      "type": "string",
      "required": true,
      "description": "Etapa anterior do lead no pipeline."
    },
    {
      "fieldId": "toStage",
      "type": "string",
      "required": true,
      "description": "Nova etapa do lead no pipeline."
    },
    {
      "fieldId": "changedByBrokerId",
      "type": "Broker",
      "required": true,
      "description": "Responsável pela mudança de etapa."
    },
    {
      "fieldId": "changedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da mudança de etapa."
    },
    {
      "fieldId": "note",
      "type": "text",
      "required": false,
      "description": "Observações ou motivo da mudança de etapa."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data de criação do registro de mudança."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data da última atualização do registro de mudança."
    }
  ],
  "sourceTables": [
    {
      "tableName": "lead_stage_change",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "moduleTable",
      "tableId": "leadStageChange",
      "tableName": "lead_stage_change",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/leadStageChange.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "listarMudancasEtapaLead",
    "obterMudancaEtapaLead",
    "moverEtapaLead",
    "atualizarMetricasDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/LeadStageChangeEntity.ts",
    "className": "LeadStageChangeEntity",
    "contractName": "ILeadStageChangeEntity"
  }
} as const;

export default entity;

export const pipeline = [
  {
    "id": "leadStageChangeEntity__layer_4_entities",
    "type": "layer_4_entities",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/leadStageChangeEntity.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/leadStageChangeEntity.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_1_external/leadStageChange.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_4.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
