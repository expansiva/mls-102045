/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/visitaEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "visitaEntity",
  "title": "Visita",
  "purpose": "Agendamento, reagendamento e cancelamento de visitas a imóveis.",
  "layer": "layer_4_entities",
  "sourceTables": [
    {
      "tableName": "visita",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "visita_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Visita",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/Visita.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "visitaMetrics",
      "tableName": "visita_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/visitaMetrics.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "update"
  ],
  "rulesApplied": [
    "visitaRequiresLinks",
    "imovelActiveStatus"
  ],
  "usecaseRefs": [
    "agendarVisita",
    "reagendarVisita",
    "cancelarVisita",
    "visualizarDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/VisitaEntity.ts",
    "className": "VisitaEntity",
    "contractName": "IVisitaEntity"
  }
} as const;

export default entity;
