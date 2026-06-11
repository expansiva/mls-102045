/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarCorretor-commands.defs.ts" enhancement="_blank"/>

export const criarCorretorCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "criarCorretor",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 50,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "criarCorretor",
      "commands": [
        {
          "commandId": "criarCorretor",
          "input": [
            {
              "name": "corretor",
              "type": "corretorEntity",
              "required": true
            }
          ],
          "output": [
            {
              "name": "corretor",
              "type": "corretorEntity"
            }
          ]
        }
      ]
    }
  }
} as const;

export default criarCorretorCommands;
