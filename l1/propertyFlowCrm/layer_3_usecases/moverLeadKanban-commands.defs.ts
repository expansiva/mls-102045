/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/moverLeadKanban-commands.defs.ts" enhancement="_blank"/>

export const moverLeadKanbanCommands = {
  "schemaVersion": "2026-06-06",
  "artifactType": "usecaseCommands",
  "artifactId": "moverLeadKanban",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanUsecaseDefinition",
    "stepId": 50,
    "planId": ""
  },
  "data": {
    "usecaseDefinition": {
      "usecaseId": "moverLeadKanban",
      "commands": [
        {
          "commandId": "moverLeadKanban",
          "input": [
            {
              "name": "leadId",
              "type": "string",
              "required": true
            },
            {
              "name": "pipelineStageId",
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

export default moverLeadKanbanCommands;
