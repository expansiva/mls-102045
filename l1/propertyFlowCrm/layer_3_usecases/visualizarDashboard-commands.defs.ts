/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/visualizarDashboard-commands.defs.ts" enhancement="_blank"/>

export const visualizarDashboardCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "visualizarDashboard",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 49,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "visualizarDashboard",
      "commands": [
        {
          "commandId": "getDashboardMetrics",
          "input": [],
          "output": [
            {
              "name": "dashboardMetrics",
              "type": "dashboardMetricsEntity"
            }
          ]
        }
      ]
    }
  }
} as const;

export default visualizarDashboardCommands;
