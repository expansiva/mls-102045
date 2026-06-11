/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/editarCorretor-commands.defs.ts" enhancement="_blank"/>

export const editarCorretorCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "editarCorretor",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 52,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "editarCorretor",
      "commands": [
        {
          "commandId": "editarCorretor",
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

export default editarCorretorCommands;
