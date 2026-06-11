/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/alterarStatusCorretor-commands.defs.ts" enhancement="_blank"/>

export const alterarStatusCorretorCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "alterarStatusCorretor",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 48,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "alterarStatusCorretor",
      "commands": [
        {
          "commandId": "alterarStatusCorretor",
          "input": [
            {
              "name": "corretorId",
              "type": "string",
              "required": true
            },
            {
              "name": "ativo",
              "type": "boolean",
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

export default alterarStatusCorretorCommands;
