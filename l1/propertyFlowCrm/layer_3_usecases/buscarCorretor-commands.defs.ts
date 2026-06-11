/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/buscarCorretor-commands.defs.ts" enhancement="_blank"/>

export const buscarCorretorCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "buscarCorretor",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 51,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "buscarCorretor",
      "commands": [
        {
          "commandId": "listarCorretores",
          "input": [],
          "output": [
            {
              "name": "corretores",
              "type": "corretorEntity[]"
            }
          ]
        }
      ]
    }
  }
} as const;

export default buscarCorretorCommands;
