/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/visualizarDashboard.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "visualizarDashboard",
  "title": "Visualizar dashboard",
  "purpose": "Consultar métricas consolidadas para o dashboard administrativo.",
  "actor": "adminImobiliaria",
  "layer": "layer_3_usecases",
  "inputEntities": [],
  "outputEntities": [
    "dashboardMetricsEntity"
  ],
  "readsTables": [
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
  "writesTables": [],
  "rulesApplied": [
    "dashboardMetricsRefresh"
  ],
  "entityRefs": [
    "corretorEntity",
    "dashboardMetricsEntity",
    "imovelEntity",
    "leadEntity",
    "negocioEntity",
    "visitaEntity"
  ]
} as const;

export default useCase;
