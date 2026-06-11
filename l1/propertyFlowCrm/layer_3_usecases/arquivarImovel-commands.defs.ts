/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/arquivarImovel-commands.defs.ts" enhancement="_blank"/>

export const arquivarImovelCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "arquivarImovel",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 50,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "arquivarImovel",
      "commands": [
        {
          "commandId": "arquivarImovel",
          "input": [
            {
              "name": "imovelId",
              "type": "string",
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

export default arquivarImovelCommands;
