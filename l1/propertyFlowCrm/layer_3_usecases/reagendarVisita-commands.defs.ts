/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/reagendarVisita-commands.defs.ts" enhancement="_blank"/>

export const reagendarVisitaCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "reagendarVisita",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 51,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "reagendarVisita",
      "commands": [
        {
          "commandId": "reagendarVisita",
          "input": [
            {
              "name": "visitaId",
              "type": "string",
              "required": true
            },
            {
              "name": "novaDataHora",
              "type": "date",
              "required": true
            }
          ],
          "output": [
            {
              "name": "visitaId",
              "type": "string"
            },
            {
              "name": "dataHora",
              "type": "date"
            }
          ]
        }
      ]
    }
  }
} as const;

export default reagendarVisitaCommands;
