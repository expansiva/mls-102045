/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/criarImovel-commands.defs.ts" enhancement="_blank"/>

export const criarImovelCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "criarImovel",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 48,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "criarImovel",
      "commands": [
        {
          "commandId": "criarImovel",
          "input": [
            {
              "name": "imovel",
              "type": "imovelEntity",
              "required": true
            }
          ],
          "output": [
            {
              "name": "imovel",
              "type": "imovelEntity"
            }
          ]
        }
      ]
    }
  }
} as const;

export default criarImovelCommands;
