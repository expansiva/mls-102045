/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/agendarVisita-commands.defs.ts" enhancement="_blank"/>

export const agendarVisitaCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "agendarVisita",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 49,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "agendarVisita",
      "commands": [
        {
          "commandId": "agendarVisita",
          "input": [
            {
              "name": "imovelId",
              "type": "string",
              "required": true
            },
            {
              "name": "leadId",
              "type": "string",
              "required": true
            },
            {
              "name": "dataHora",
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

export default agendarVisitaCommands;
