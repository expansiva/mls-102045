/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/buscarImovel-commands.defs.ts" enhancement="_blank"/>

export const buscarImovelCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "buscarImovel",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 51,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "buscarImovel",
      "commands": [
        {
          "commandId": "buscarImovel",
          "input": [],
          "output": [
            {
              "name": "imoveis",
              "type": "imovelEntity[]"
            }
          ]
        }
      ]
    }
  }
} as const;

export default buscarImovelCommands;
