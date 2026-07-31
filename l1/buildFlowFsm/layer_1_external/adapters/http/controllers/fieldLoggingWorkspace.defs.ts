/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/fieldLoggingWorkspace.defs.ts" enhancement="_blank"/>

export const fieldLoggingWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "fieldLoggingWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "fieldLoggingWorkspace",
    "controllerName": "FieldLoggingWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "fieldLoggingWorkspace",
    "actors": [
      "fieldWorker"
    ],
    "allowedScopes": [
      "buildFlowFsm:fieldWorker"
    ],
    "handlers": [
      {
        "handlerName": "fieldLoggingWorkspaceSubmitTimeLogHandler",
        "command": "submitTimeLog",
        "bffId": "submitTimeLog",
        "route": "buildFlowFsm.fieldLoggingWorkspace.submitTimeLog",
        "kind": "command",
        "usecaseRef": "createTimeLog",
        "usecaseRefs": [
          "createTimeLog"
        ],
        "inputTypeName": "CreateTimeLogInput",
        "inputContract": [
          {
            "inputId": "workTaskId",
            "fieldRef": "TimeLog.workTaskId",
            "required": true,
            "source": "userInput",
            "description": "Work task the logged hours are recorded against"
          },
          {
            "inputId": "logDate",
            "fieldRef": "TimeLog.logDate",
            "required": true,
            "source": "userInput",
            "description": "Calendar date on which the work was performed"
          },
          {
            "inputId": "hoursWorked",
            "fieldRef": "TimeLog.hoursWorked",
            "required": true,
            "source": "userInput",
            "description": "Number of hours worked on the task for this log entry"
          },
          {
            "inputId": "workerName",
            "fieldRef": "TimeLog.workerName",
            "required": true,
            "source": "actorSession",
            "description": "Name of the signed-in field worker who performed the work"
          },
          {
            "inputId": "timeLogId",
            "fieldRef": "TimeLog.timeLogId",
            "required": true,
            "source": "systemDefault",
            "description": "System-generated primary identifier for the new time log"
          },
          {
            "inputId": "createdAt",
            "fieldRef": "TimeLog.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Server timestamp when the time log entry is created"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "timeLogId",
              "operationId": "createTimeLog",
              "path": [
                "timeLogId"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "createTimeLog",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "workerName",
              "operationId": "createTimeLog",
              "path": [
                "workerName"
              ],
              "fromItems": false
            },
            {
              "name": "logDate",
              "operationId": "createTimeLog",
              "path": [
                "logDate"
              ],
              "fromItems": false
            },
            {
              "name": "hoursWorked",
              "operationId": "createTimeLog",
              "path": [
                "hoursWorked"
              ],
              "fromItems": false
            },
            {
              "name": "laborCost",
              "operationId": "createTimeLog",
              "path": [
                "laborCost"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createTimeLog",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "createTimeLog",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "fieldLoggingWorkspaceSubmitVoidTimeLogHandler",
        "command": "submitVoidTimeLog",
        "bffId": "submitVoidTimeLog",
        "route": "buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog",
        "kind": "command",
        "usecaseRef": "voidTimeLog",
        "usecaseRefs": [
          "voidTimeLog"
        ],
        "inputTypeName": "VoidTimeLogInput",
        "inputContract": [
          {
            "inputId": "timeLogId",
            "fieldRef": "TimeLog.timeLogId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identifier of the posted time log entry to void"
          },
          {
            "inputId": "voidReason",
            "fieldRef": "TimeLog.voidReason",
            "required": true,
            "source": "userInput",
            "description": "Reason provided by the field worker for voiding this time log"
          },
          {
            "inputId": "status",
            "fieldRef": "TimeLog.status",
            "required": true,
            "source": "systemDefault",
            "description": "New lifecycle status set to voided when the entry is voided"
          },
          {
            "inputId": "voidedAt",
            "fieldRef": "TimeLog.voidedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp when the time log was voided"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "timeLogId",
              "operationId": "voidTimeLog",
              "path": [
                "timeLogId"
              ],
              "fromItems": false
            },
            {
              "name": "workTaskId",
              "operationId": "voidTimeLog",
              "path": [
                "workTaskId"
              ],
              "fromItems": false
            },
            {
              "name": "workerName",
              "operationId": "voidTimeLog",
              "path": [
                "workerName"
              ],
              "fromItems": false
            },
            {
              "name": "logDate",
              "operationId": "voidTimeLog",
              "path": [
                "logDate"
              ],
              "fromItems": false
            },
            {
              "name": "hoursWorked",
              "operationId": "voidTimeLog",
              "path": [
                "hoursWorked"
              ],
              "fromItems": false
            },
            {
              "name": "laborCost",
              "operationId": "voidTimeLog",
              "path": [
                "laborCost"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "voidTimeLog",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "voidedAt",
              "operationId": "voidTimeLog",
              "path": [
                "voidedAt"
              ],
              "fromItems": false
            },
            {
              "name": "voidReason",
              "operationId": "voidTimeLog",
              "path": [
                "voidReason"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "fieldLoggingWorkspaceSubmitMaterialUsageHandler",
        "command": "submitMaterialUsage",
        "bffId": "submitMaterialUsage",
        "route": "buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage",
        "kind": "command",
        "usecaseRef": "createMaterialUsage",
        "usecaseRefs": [
          "createMaterialUsage"
        ],
        "inputTypeName": "CreateMaterialUsageInput",
        "inputContract": [
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
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "materialUsageId",
              "operationId": "createMaterialUsage",
              "path": [
                "materialUsageId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "createMaterialUsage",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createMaterialUsage",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "materialName",
              "operationId": "createMaterialUsage",
              "path": [
                "materialName"
              ],
              "fromItems": false
            },
            {
              "name": "quantity",
              "operationId": "createMaterialUsage",
              "path": [
                "quantity"
              ],
              "fromItems": false
            },
            {
              "name": "unit",
              "operationId": "createMaterialUsage",
              "path": [
                "unit"
              ],
              "fromItems": false
            },
            {
              "name": "unitCost",
              "operationId": "createMaterialUsage",
              "path": [
                "unitCost"
              ],
              "fromItems": false
            },
            {
              "name": "costCode",
              "operationId": "createMaterialUsage",
              "path": [
                "costCode"
              ],
              "fromItems": false
            },
            {
              "name": "usageDate",
              "operationId": "createMaterialUsage",
              "path": [
                "usageDate"
              ],
              "fromItems": false
            },
            {
              "name": "recordedBy",
              "operationId": "createMaterialUsage",
              "path": [
                "recordedBy"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "createMaterialUsage",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "fieldLoggingWorkspaceSubmitVoidMaterialUsageHandler",
        "command": "submitVoidMaterialUsage",
        "bffId": "submitVoidMaterialUsage",
        "route": "buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage",
        "kind": "command",
        "usecaseRef": "voidMaterialUsage",
        "usecaseRefs": [
          "voidMaterialUsage"
        ],
        "inputTypeName": "VoidMaterialUsageInput",
        "inputContract": [
          {
            "inputId": "materialUsageId",
            "fieldRef": "MaterialUsage.materialUsageId",
            "required": true,
            "source": "selectedEntity",
            "description": "Identifier of the posted material usage record to void"
          },
          {
            "inputId": "voidedReason",
            "fieldRef": "MaterialUsage.voidedReason",
            "required": true,
            "source": "userInput",
            "description": "Reason provided by the field worker for voiding the material usage entry"
          },
          {
            "inputId": "voidedAt",
            "fieldRef": "MaterialUsage.voidedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp when the material usage record is voided"
          },
          {
            "inputId": "status",
            "fieldRef": "MaterialUsage.status",
            "required": true,
            "source": "systemDefault",
            "description": "New lifecycle status set to voided on confirmation"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "materialUsageId",
              "operationId": "voidMaterialUsage",
              "path": [
                "materialUsageId"
              ],
              "fromItems": false
            },
            {
              "name": "projectId",
              "operationId": "voidMaterialUsage",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "voidMaterialUsage",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "materialName",
              "operationId": "voidMaterialUsage",
              "path": [
                "materialName"
              ],
              "fromItems": false
            },
            {
              "name": "quantity",
              "operationId": "voidMaterialUsage",
              "path": [
                "quantity"
              ],
              "fromItems": false
            },
            {
              "name": "unit",
              "operationId": "voidMaterialUsage",
              "path": [
                "unit"
              ],
              "fromItems": false
            },
            {
              "name": "unitCost",
              "operationId": "voidMaterialUsage",
              "path": [
                "unitCost"
              ],
              "fromItems": false
            },
            {
              "name": "voidedAt",
              "operationId": "voidMaterialUsage",
              "path": [
                "voidedAt"
              ],
              "fromItems": false
            },
            {
              "name": "voidedReason",
              "operationId": "voidMaterialUsage",
              "path": [
                "voidedReason"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      }
    ],
    "routes": [
      {
        "key": "buildFlowFsm.fieldLoggingWorkspace.submitTimeLog",
        "handlerName": "fieldLoggingWorkspaceSubmitTimeLogHandler"
      },
      {
        "key": "buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog",
        "handlerName": "fieldLoggingWorkspaceSubmitVoidTimeLogHandler"
      },
      {
        "key": "buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage",
        "handlerName": "fieldLoggingWorkspaceSubmitMaterialUsageHandler"
      },
      {
        "key": "buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage",
        "handlerName": "fieldLoggingWorkspaceSubmitVoidMaterialUsageHandler"
      }
    ]
  }
} as const;

export default fieldLoggingWorkspaceController;

export const pipeline = [
  {
    "id": "fieldLoggingWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/fieldLoggingWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/fieldLoggingWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/fieldLoggingWorkspace.submitTimeLog.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/voidTimeLog.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/fieldLoggingWorkspace.submitVoidTimeLog.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createMaterialUsage.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/fieldLoggingWorkspace.submitMaterialUsage.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/voidMaterialUsage.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/fieldLoggingWorkspace.submitVoidMaterialUsage.defs.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/httpController.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
