/// <mls fileReference="_102045_/l4/workflows/dashboardMetricsWorkflow.defs.ts" enhancement="_blank"/>

export const dashboardMetricsWorkflowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "dashboardMetricsWorkflow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 26,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "dashboardMetricsWorkflow",
      "title": "Atualização de Métricas do Dashboard",
      "purpose": "Consolidar e atualizar as métricas exibidas no dashboard administrativo, integrando dados de leads, visitas, negócios, imóveis e corretores.",
      "executionMode": "automation",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "adminImobiliaria"
      ],
      "states": [
        {
          "stateId": "metricsIdle",
          "description": "Métricas aguardando próxima consolidação automática."
        },
        {
          "stateId": "metricsRefreshing",
          "description": "Consolidação automática em execução para atualizar métricas do dashboard."
        },
        {
          "stateId": "metricsUpdated",
          "description": "Métricas consolidadas e prontas para consumo no dashboard."
        },
        {
          "stateId": "metricsFailed",
          "description": "Falha na consolidação automática de métricas."
        }
      ],
      "transitions": [
        {
          "from": "metricsIdle",
          "to": "metricsRefreshing",
          "trigger": "scheduledRefresh",
          "actor": "adminImobiliaria",
          "conditions": [],
          "actions": [],
          "rulesApplied": [
            "dashboardMetricsRefresh"
          ]
        },
        {
          "from": "metricsRefreshing",
          "to": "metricsUpdated",
          "trigger": "refreshSucceeded",
          "actor": "adminImobiliaria",
          "conditions": [],
          "actions": [],
          "rulesApplied": [
            "dashboardMetricsRefresh"
          ]
        },
        {
          "from": "metricsRefreshing",
          "to": "metricsFailed",
          "trigger": "refreshFailed",
          "actor": "adminImobiliaria",
          "conditions": [],
          "actions": [],
          "rulesApplied": [
            "dashboardMetricsRefresh"
          ]
        },
        {
          "from": "metricsFailed",
          "to": "metricsRefreshing",
          "trigger": "scheduledRetry",
          "actor": "adminImobiliaria",
          "conditions": [],
          "actions": [],
          "rulesApplied": [
            "dashboardMetricsRefresh"
          ]
        }
      ],
      "requiredEntities": [
        "dashboardMetricsEntity"
      ],
      "persistenceRefs": [
        "leadPipelineMetrics",
        "visitaMetrics",
        "negocioMetrics",
        "imovelInventoryMetrics",
        "corretorStatusMetrics"
      ],
      "usecaseRefs": [
        "visualizarDashboard"
      ],
      "metricRefs": [
        "leadPipelineMetrics",
        "visitaMetrics",
        "negocioMetrics",
        "imovelInventoryMetrics",
        "corretorStatusMetrics"
      ],
      "userActions": [
        "triggerMetricsRefresh",
        "viewDashboardMetrics"
      ],
      "relatedPages": [
        "dashboardAdministrativo"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "dashboardMetricsRefresh"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "atualizacao-incremental",
          "title": "Implementar atualização incremental em vez de full refresh",
          "priority": "soon",
          "description": "Reduzir carga no banco de dados e melhorar a performance da consolidação.",
          "tradeoff": "A lógica incremental exige controle de janela temporal e pode aumentar a complexidade de auditoria."
        },
        {
          "suggestionId": "cache-metricas",
          "title": "Cachear métricas por curto período",
          "priority": "now",
          "description": "Melhorar o tempo de resposta na carga do dashboard administrativo.",
          "tradeoff": "Pode exibir métricas levemente desatualizadas durante o período de cache."
        },
        {
          "suggestionId": "sem-tarefa-operacional",
          "title": "Manter atualização como automação sem tarefas",
          "priority": "now",
          "description": "Evitar criação de tarefas para um fluxo automático e recorrente, mantendo o processo silencioso para o admin.",
          "tradeoff": "Falhas de atualização não geram alerta operacional imediato sem monitoramento adicional."
        }
      ],
      "workflowScope": "singleModule",
      "moduleRefs": [
        "propertyFlowCrm"
      ],
      "pageRefsByModule": [],
      "entityRefsByModule": [
        {
          "moduleId": "propertyFlowCrm",
          "entity": "dashboardMetricsEntity"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "workflow",
          "artifactId": "dashboardMetricsWorkflow"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/dashboardMetricsWorkflow.defs.ts",
      "exportName": "dashboardMetricsWorkflowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default dashboardMetricsWorkflowDef;
