/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarProposta-commands.defs.ts" enhancement="_blank"/>

export const criarPropostaCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "criarProposta",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 50,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "criarProposta",
      "commands": [
        {
          "commandId": "criarProposta",
          "input": [
            {
              "name": "negocio",
              "type": "negocioEntity",
              "required": true
            }
          ],
          "output": [
            {
              "name": "negocio",
              "type": "negocioEntity"
            }
          ]
        }
      ]
    }
  }
} as const;

export default criarPropostaCommands;
