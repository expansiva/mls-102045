/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/negocioEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "negocioEntity",
  "title": "Negócio",
  "purpose": "Criação e acompanhamento de propostas e negócios.",
  "layer": "layer_4_entities",
  "sourceTables": [
    {
      "tableName": "negocio",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "negocio_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Negocio",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/Negocio.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "negocioMetrics",
      "tableName": "negocio_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/negocioMetrics.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "update"
  ],
  "rulesApplied": [
    "negocioRequiresLinks"
  ],
  "usecaseRefs": [
    "criarProposta",
    "atualizarStatusProposta",
    "visualizarDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/NegocioEntity.ts",
    "className": "NegocioEntity",
    "contractName": "INegocioEntity"
  }
} as const;

export default entity;
