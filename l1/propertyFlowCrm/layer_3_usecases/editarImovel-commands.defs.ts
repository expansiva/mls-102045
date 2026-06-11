/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/editarImovel-commands.defs.ts" enhancement="_blank"/>

export const editarImovelCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "editarImovel",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 49,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "editarImovel",
      "commands": [
        {
          "commandId": "editarImovel",
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

export default editarImovelCommands;
