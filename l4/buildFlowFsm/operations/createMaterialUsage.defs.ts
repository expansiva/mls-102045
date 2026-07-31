/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/createMaterialUsage.defs.ts" enhancement="_blank"/>

export const operationCreateMaterialUsage = {
  "operationId": "createMaterialUsage",
  "title": "Log materials used",
  "actors": [
    "fieldWorker"
  ],
  "entity": "MaterialUsage",
  "kind": "create",
  "reads": [
    "Project"
  ],
  "writes": [
    "MaterialUsage"
  ],
  "rulesApplied": [
    "jobCostDerivation",
    "materialUsageIsProjectLevel"
  ],
  "story": {
    "actor": "fieldWorker",
    "goal": "Record materials consumed on a project so material costs are attributed for accurate job costing",
    "steps": [
      "Open the active project context",
      "Enter material name, quantity, unit, unit cost, usage date, and optional cost code",
      "Confirm to post the material usage record against the project"
    ],
    "outcome": "A posted material usage entry exists on the project and contributes to job cost and budget-vs-actual figures"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Form for the field worker to log materials consumed against the current project",
    "entity": "MaterialUsage",
    "keyField": "MaterialUsage.materialUsageId",
    "pagination": "none",
    "selection": "none",
    "output": [
      "MaterialUsage.materialUsageId",
      "MaterialUsage.projectId",
      "MaterialUsage.status",
      "MaterialUsage.materialName",
      "MaterialUsage.quantity",
      "MaterialUsage.unit",
      "MaterialUsage.unitCost",
      "MaterialUsage.costCode",
      "MaterialUsage.usageDate",
      "MaterialUsage.recordedBy",
      "MaterialUsage.createdAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "materialUsageId",
        "type": "string",
        "required": true,
        "fieldRef": "MaterialUsage.materialUsageId"
      },
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "MaterialUsage.projectId"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "MaterialUsage.status"
      },
      {
        "name": "materialName",
        "type": "string",
        "required": true,
        "fieldRef": "MaterialUsage.materialName"
      },
      {
        "name": "quantity",
        "type": "number",
        "required": true,
        "fieldRef": "MaterialUsage.quantity"
      },
      {
        "name": "unit",
        "type": "string",
        "required": true,
        "fieldRef": "MaterialUsage.unit"
      },
      {
        "name": "unitCost",
        "type": "number",
        "required": true,
        "fieldRef": "MaterialUsage.unitCost"
      },
      {
        "name": "costCode",
        "type": "string",
        "required": false,
        "fieldRef": "MaterialUsage.costCode"
      },
      {
        "name": "usageDate",
        "type": "string",
        "required": true,
        "fieldRef": "MaterialUsage.usageDate"
      },
      {
        "name": "recordedBy",
        "type": "string",
        "required": false,
        "fieldRef": "MaterialUsage.recordedBy"
      },
      {
        "name": "createdAt",
        "type": "string",
        "required": true,
        "fieldRef": "MaterialUsage.createdAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectId",
      "fieldRef": "MaterialUsage.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Project the material usage is recorded against"
    },
    {
      "inputId": "materialName",
      "fieldRef": "MaterialUsage.materialName",
      "required": true,
      "source": "userInput",
      "description": "Name or description of the material consumed"
    },
    {
      "inputId": "quantity",
      "fieldRef": "MaterialUsage.quantity",
      "required": true,
      "source": "userInput",
      "description": "Quantity of the material consumed"
    },
    {
      "inputId": "unit",
      "fieldRef": "MaterialUsage.unit",
      "required": true,
      "source": "userInput",
      "description": "Unit of measure for the material quantity"
    },
    {
      "inputId": "unitCost",
      "fieldRef": "MaterialUsage.unitCost",
      "required": true,
      "source": "userInput",
      "description": "Cost per unit of the material at the time of usage"
    },
    {
      "inputId": "costCode",
      "fieldRef": "MaterialUsage.costCode",
      "required": false,
      "source": "userInput",
      "description": "Optional internal cost classification code for job costing detail"
    },
    {
      "inputId": "usageDate",
      "fieldRef": "MaterialUsage.usageDate",
      "required": true,
      "source": "userInput",
      "description": "Date the material was consumed on the project site"
    },
    {
      "inputId": "materialUsageId",
      "fieldRef": "MaterialUsage.materialUsageId",
      "required": true,
      "source": "systemDefault",
      "description": "System-generated primary identifier for the new material usage record"
    },
    {
      "inputId": "status",
      "fieldRef": "MaterialUsage.status",
      "required": true,
      "source": "systemDefault",
      "description": "Initial lifecycle status set to posted on create"
    },
    {
      "inputId": "recordedBy",
      "fieldRef": "MaterialUsage.recordedBy",
      "required": false,
      "source": "actorSession",
      "description": "Identifier of the field worker recording the usage"
    },
    {
      "inputId": "createdAt",
      "fieldRef": "MaterialUsage.createdAt",
      "required": true,
      "source": "systemDefault",
      "description": "Timestamp when the material usage record is created"
    }
  ],
  "contextResolution": [
    {
      "inputId": "projectId",
      "targetRef": "MaterialUsage.projectId",
      "source": "selectedEntity",
      "originRef": "Project.projectId",
      "description": "Resolve projectId from the project currently selected in the field worker workspace"
    },
    {
      "inputId": "materialUsageId",
      "targetRef": "MaterialUsage.materialUsageId",
      "source": "systemDefault",
      "originRef": "systemDefault.uuid",
      "description": "Generate a new UUID for the material usage primary key"
    },
    {
      "inputId": "status",
      "targetRef": "MaterialUsage.status",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Set status to posted when the material usage record is created"
    },
    {
      "inputId": "recordedBy",
      "targetRef": "MaterialUsage.recordedBy",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Take the authenticated field worker actor id as the recorder"
    },
    {
      "inputId": "createdAt",
      "targetRef": "MaterialUsage.createdAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Stamp createdAt with the current server time on insert"
    }
  ],
  "acceptanceAssertions": [
    "After confirmation a MaterialUsage record exists with status posted",
    "The material usage is linked to the selected project via projectId",
    "materialName, quantity, unit, unitCost, and usageDate match the values submitted by the field worker",
    "Optional costCode is stored when provided and omitted when not",
    "recordedBy is set from the authenticated field worker session",
    "createdAt is set to the server timestamp at creation time",
    "The posted material usage contributes to project job cost and budget-vs-actual derivation",
    "The record is treated as project-level job costing data and not as warehouse stock movement"
  ],
  "pageId": "createMaterialUsage",
  "commandName": "createMaterialUsage",
  "bffName": "buildFlowFsm.createMaterialUsage.createMaterialUsage",
  "capability": {
    "capabilityId": "createMaterialUsage",
    "title": "Log materials used",
    "actor": "fieldWorker",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationCreateMaterialUsage;
