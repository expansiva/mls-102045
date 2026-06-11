/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/cancelarVisita-commands.defs.ts" enhancement="_blank"/>

export const cancelarVisitaCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "cancelarVisita",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 52,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "cancelarVisita",
      "commands": [
        {
          "commandId": "cancelarVisita",
          "input": [
            {
              "name": "visitaId",
              "type": "string",
              "required": true
            }
          ],
          "output": [
            {
              "name": "visitaId",
              "type": "string"
            },
            {
              "name": "status",
              "type": "string"
            }
          ]
        }
      ]
    }
  }
} as const;

export default cancelarVisitaCommands;
