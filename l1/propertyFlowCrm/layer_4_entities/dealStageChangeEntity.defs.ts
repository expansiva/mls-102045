/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/dealStageChangeEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "dealStageChangeEntity",
  "title": "Mudança de Etapa do Negócio",
  "purpose": "Histórico de mudanças de etapa nos negócios",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "dealStageChangeId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da mudança de etapa do negócio."
    },
    {
      "fieldId": "dealId",
      "type": "Deal",
      "required": true,
      "description": "Negócio alvo cuja etapa será alterada."
    },
    {
      "fieldId": "fromStage",
      "type": "string",
      "required": true,
      "description": "Etapa anterior do negócio antes da mudança."
    },
    {
      "fieldId": "toStage",
      "type": "string",
      "required": true,
      "description": "Nova etapa do negócio após a mudança."
    },
    {
      "fieldId": "changedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora em que a mudança de etapa ocorreu."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do registro de mudança."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro de mudança."
    }
  ],
  "sourceTables": [
    {
      "tableName": "deal_stage_change",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "moduleTable",
      "tableId": "dealStageChange",
      "tableName": "deal_stage_change",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/dealStageChange.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "avancarEtapaNegocio",
    "listarMudancasEtapaNegocio",
    "obterMudancaEtapaNegocio",
    "atualizarMetricasDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/DealStageChangeEntity.ts",
    "className": "DealStageChangeEntity",
    "contractName": "IDealStageChangeEntity"
  }
} as const;

export default entity;
