/// <mls fileReference="_102045_/l4/workflows/dashboardMetricsUpdateFlow.defs.ts" enhancement="_blank"/>

export const dashboardMetricsUpdateFlowDef = {
  "schemaVersion": "2026-06-06",
  "artifactType": "workflow",
  "artifactId": "dashboardMetricsUpdateFlow",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanWorkflowDefinition",
    "stepId": 29,
    "planId": "plan-validate-solution-coverage"
  },
  "data": {
    "workflowDefinition": {
      "workflowId": "dashboardMetricsUpdateFlow",
      "title": "Atualização de Métricas do Dashboard",
      "purpose": "Atualizar métricas consolidadas para dashboards de gestor e admin.",
      "executionMode": "automation",
      "createsTask": false,
      "taskConfig": {
        "taskTitleTemplate": "",
        "assigneeRules": [],
        "slaRules": [],
        "taskRoomRequired": false
      },
      "actors": [
        "admin",
        "gestor",
        "system"
      ],
      "states": [
        {
          "stateId": "idle",
          "description": "Aguardando evento de mudança de dados que impactam métricas."
        },
        {
          "stateId": "refreshRequested",
          "description": "Atualização de métricas solicitada e registrada."
        },
        {
          "stateId": "metricsUpdated",
          "description": "Métricas recalculadas e persistidas com sucesso."
        },
        {
          "stateId": "refreshFailed",
          "description": "Falha ao recalcular métricas e registrar atualização."
        }
      ],
      "transitions": [
        {
          "from": "idle",
          "to": "refreshRequested",
          "trigger": "metricChangeDetected",
          "actor": "system",
          "conditions": [
            "ruleMetricRefresh"
          ],
          "actions": [
            "set DashboardMetricUpdate.createdAt=now",
            "set DashboardMetricUpdate.updatedAt=now"
          ],
          "rulesApplied": [
            "ruleMetricRefresh"
          ]
        },
        {
          "from": "refreshRequested",
          "to": "metricsUpdated",
          "trigger": "runMetricsRefresh",
          "actor": "system",
          "conditions": [
            "ruleMetricRefresh"
          ],
          "actions": [
            "set DashboardMetricUpdate.updatedAt=now"
          ],
          "rulesApplied": [
            "ruleMetricRefresh"
          ]
        },
        {
          "from": "refreshRequested",
          "to": "refreshFailed",
          "trigger": "metricsRefreshFailed",
          "actor": "system",
          "conditions": [
            "ruleMetricRefresh"
          ],
          "actions": [
            "set DashboardMetricUpdate.updatedAt=now"
          ],
          "rulesApplied": [
            "ruleMetricRefresh"
          ]
        }
      ],
      "requiredEntities": [
        "DashboardMetricUpdate"
      ],
      "persistenceRefs": [
        "dashboardMetricUpdate",
        "propertyStatusMetrics",
        "leadPipelineMetrics",
        "dealPipelineMetrics",
        "brokerActivityMetrics"
      ],
      "usecaseRefs": [
        "listarAtualizacoesMetricas",
        "atualizarMetricasDashboard",
        "visualizarDashboard",
        "visualizarAdminDashboard"
      ],
      "metricRefs": [
        "propertyStatusMetrics",
        "leadPipelineMetrics",
        "dealPipelineMetrics",
        "brokerActivityMetrics"
      ],
      "userActions": [],
      "relatedPages": [
        "adminDashboard",
        "dashboard"
      ],
      "relatedAgents": [],
      "relatedPlugins": [],
      "rulesApplied": [
        "ruleMetricRefresh"
      ],
      "implementationSuggestions": [
        {
          "suggestionId": "scheduledRefresh",
          "title": "Rotina de atualização agendada",
          "priority": "soon",
          "description": "Garante dados consistentes sem depender apenas de ação manual.",
          "tradeoff": "Pode aumentar uso de recursos em horários de pico."
        },
        {
          "suggestionId": "noTaskAutomation",
          "title": "Automação sem criação de tarefa",
          "priority": "now",
          "description": "Manter fluxo automático sem tarefas porque a atualização é executada por use case e não requer intervenção humana.",
          "tradeoff": "Falhas precisam de monitoramento e alertas para não passarem despercebidas."
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
          "entity": "DashboardMetricUpdate"
        }
      ],
      "writesArtifacts": [
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "workflow",
          "artifactId": "dashboardMetricsUpdateFlow"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "usecase",
          "artifactId": "atualizarMetricasDashboard"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "propertyStatusMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "leadPipelineMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "dealPipelineMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "metricTable",
          "artifactId": "brokerActivityMetrics"
        },
        {
          "moduleId": "propertyFlowCrm",
          "artifactType": "table",
          "artifactId": "dashboardMetricUpdate"
        }
      ]
    },
    "defsPlan": {
      "fileName": "workflows/dashboardMetricsUpdateFlow.defs.ts",
      "exportName": "dashboardMetricsUpdateFlowDef",
      "saveAsDefs": true
    }
  }
} as const;

export default dashboardMetricsUpdateFlowDef;
