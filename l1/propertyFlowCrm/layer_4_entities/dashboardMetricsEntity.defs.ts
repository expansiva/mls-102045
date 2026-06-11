/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricsEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "dashboardMetricsEntity",
  "title": "Métricas do Dashboard",
  "purpose": "Consolidação de métricas para visualização no dashboard administrativo.",
  "layer": "layer_4_entities",
  "sourceTables": [
    {
      "tableName": "lead_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "visita_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "negocio_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "imovel_inventory_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "corretor_status_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "metricTable",
      "metricTableId": "leadPipelineMetrics",
      "tableName": "lead_pipeline_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/leadPipelineMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "visitaMetrics",
      "tableName": "visita_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/visitaMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "negocioMetrics",
      "tableName": "negocio_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/negocioMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "imovelInventoryMetrics",
      "tableName": "imovel_inventory_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/imovelInventoryMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "corretorStatusMetrics",
      "tableName": "corretor_status_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/corretorStatusMetrics.defs.ts"
    }
  ],
  "allowedOperations": [
    "read"
  ],
  "rulesApplied": [
    "dashboardMetricsRefresh"
  ],
  "usecaseRefs": [
    "criarImovel",
    "editarImovel",
    "arquivarImovel",
    "criarLead",
    "moverLeadKanban",
    "agendarVisita",
    "reagendarVisita",
    "cancelarVisita",
    "criarProposta",
    "atualizarStatusProposta",
    "visualizarDashboard",
    "criarCorretor",
    "editarCorretor",
    "alterarStatusCorretor"
  ],
  "materialization": {
    "fileName": "layer_4_entities/DashboardMetricsEntity.ts",
    "className": "DashboardMetricsEntity",
    "contractName": "IDashboardMetricsEntity"
  }
} as const;

export default entity;
