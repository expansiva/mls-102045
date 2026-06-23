/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "dashboardMetricEntity",
  "title": "Métricas do Dashboard",
  "purpose": "Consolidação de tabelas de métricas e controle de atualizações",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "dashboardMetricUpdateId",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da atualização de métricas do dashboard."
    },
    {
      "fieldId": "propertyIds",
      "type": "Property",
      "required": false,
      "description": "Imóveis agregados para cálculo das métricas nesta atualização."
    },
    {
      "fieldId": "leadIds",
      "type": "Lead",
      "required": false,
      "description": "Leads agregados para cálculo das métricas nesta atualização."
    },
    {
      "fieldId": "dealIds",
      "type": "Deal",
      "required": false,
      "description": "Negócios agregados para cálculo das métricas nesta atualização."
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação do evento de atualização."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização do registro."
    }
  ],
  "sourceTables": [
    {
      "tableName": "dashboard_metric_update",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "property_status_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "lead_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "deal_pipeline_metrics",
      "ownership": "moduleOwned"
    },
    {
      "tableName": "broker_activity_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "moduleTable",
      "tableId": "dashboardMetricUpdate",
      "tableName": "dashboard_metric_update",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/dashboardMetricUpdate.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "propertyStatusMetrics",
      "tableName": "property_status_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/propertyStatusMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "leadPipelineMetrics",
      "tableName": "lead_pipeline_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/leadPipelineMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "dealPipelineMetrics",
      "tableName": "deal_pipeline_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/dealPipelineMetrics.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "brokerActivityMetrics",
      "tableName": "broker_activity_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/brokerActivityMetrics.defs.ts"
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
    "criarImovel",
    "atualizarImovel",
    "criarLead",
    "atualizarLead",
    "agendarVisita",
    "atualizarStatusVisita",
    "criarNegocio",
    "avancarEtapaNegocio",
    "solicitarDescricaoImovel",
    "solicitarQualificacaoLead",
    "moverEtapaLead",
    "visualizarDashboard",
    "visualizarAdminDashboard",
    "listarAtualizacoesMetricas",
    "atualizarMetricasDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/DashboardMetricEntity.ts",
    "className": "DashboardMetricEntity",
    "contractName": "IDashboardMetricEntity"
  }
} as const;

export default entity;

export const pipeline = [
  {
    "id": "dashboardMetricEntity__layer_4_entities",
    "type": "layer_4_entities",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/dashboardMetricEntity.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_1_external/dashboardMetricUpdate.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_1_external/propertyStatusMetrics.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_1_external/leadPipelineMetrics.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_1_external/dealPipelineMetrics.d.ts",
      "_102045_/l1/propertyFlowCrm/layer_1_external/brokerActivityMetrics.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_4.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
