/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/classificarLeadIa-commands.defs.ts" enhancement="_blank"/>

export const classificarLeadIaCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "classificarLeadIa",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 48,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "classificarLeadIa",
      "commands": [
        {
          "commandId": "classificarLeadIa",
          "input": [
            {
              "name": "leadId",
              "type": "string",
              "required": true
            }
          ],
          "output": [
            {
              "name": "lead",
              "type": "leadEntity"
            }
          ]
        }
      ]
    }
  }
} as const;

export default classificarLeadIaCommands;
