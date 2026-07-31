/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectLifecycleWorkspace.defs.ts" enhancement="_blank"/>

export const projectLifecycleWorkspaceController = {
  "schemaVersion": "2026-06-26",
  "artifactType": "httpController",
  "artifactId": "projectLifecycleWorkspace",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbHttpController",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "pageId": "projectLifecycleWorkspace",
    "controllerName": "ProjectLifecycleWorkspaceController",
    "ownerKind": "workspace",
    "workspaceId": "projectLifecycleWorkspace",
    "actors": [
      "projectManager"
    ],
    "allowedScopes": [
      "buildFlowFsm:projectManager"
    ],
    "handlers": [
      {
        "handlerName": "projectLifecycleWorkspaceCreateProjectCmdHandler",
        "command": "createProjectCmd",
        "bffId": "createProjectCmd",
        "route": "buildFlowFsm.projectLifecycleWorkspace.createProjectCmd",
        "kind": "command",
        "usecaseRef": "createProject",
        "usecaseRefs": [
          "createProject"
        ],
        "inputTypeName": "CreateProjectInput",
        "inputContract": [
          {
            "inputId": "name",
            "fieldRef": "Project.name",
            "required": true,
            "source": "userInput",
            "description": "Human-readable project name entered by the project manager"
          },
          {
            "inputId": "clientId",
            "fieldRef": "Project.clientId",
            "required": true,
            "source": "userInput",
            "description": "Identifier of the client who owns this project, selected or created during entry"
          },
          {
            "inputId": "siteAddress",
            "fieldRef": "Project.siteAddress",
            "required": true,
            "source": "userInput",
            "description": "Physical address of the construction or service site"
          },
          {
            "inputId": "budget",
            "fieldRef": "Project.budget",
            "required": true,
            "source": "userInput",
            "description": "Approved total budget used as the job costing baseline"
          },
          {
            "inputId": "startDate",
            "fieldRef": "Project.startDate",
            "required": true,
            "source": "userInput",
            "description": "Planned start date of the project schedule"
          },
          {
            "inputId": "endDate",
            "fieldRef": "Project.endDate",
            "required": true,
            "source": "userInput",
            "description": "Planned completion date of the project schedule"
          },
          {
            "inputId": "projectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "systemDefault",
            "description": "System-generated unique identifier for the new project"
          },
          {
            "inputId": "status",
            "fieldRef": "Project.status",
            "required": true,
            "source": "systemDefault",
            "description": "Initial lifecycle status set to active so field work can begin"
          },
          {
            "inputId": "createdAt",
            "fieldRef": "Project.createdAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp when the project record is created"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Project.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Timestamp of the initial project record write"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "createProject",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "createProject",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "createProject",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "siteAddress",
              "operationId": "createProject",
              "path": [
                "siteAddress"
              ],
              "fromItems": false
            },
            {
              "name": "budget",
              "operationId": "createProject",
              "path": [
                "budget"
              ],
              "fromItems": false
            },
            {
              "name": "startDate",
              "operationId": "createProject",
              "path": [
                "startDate"
              ],
              "fromItems": false
            },
            {
              "name": "endDate",
              "operationId": "createProject",
              "path": [
                "endDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "createProject",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "createdAt",
              "operationId": "createProject",
              "path": [
                "createdAt"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "createProject",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectLifecycleWorkspaceUpdateProjectCmdHandler",
        "command": "updateProjectCmd",
        "bffId": "updateProjectCmd",
        "route": "buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd",
        "kind": "command",
        "usecaseRef": "updateProject",
        "usecaseRefs": [
          "updateProject"
        ],
        "inputTypeName": "UpdateProjectInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the project being updated"
          },
          {
            "inputId": "name",
            "fieldRef": "Project.name",
            "required": true,
            "source": "userInput",
            "description": "Updated human-readable project name"
          },
          {
            "inputId": "clientId",
            "fieldRef": "Project.clientId",
            "required": true,
            "source": "userInput",
            "description": "Updated client who owns this project"
          },
          {
            "inputId": "siteAddress",
            "fieldRef": "Project.siteAddress",
            "required": true,
            "source": "userInput",
            "description": "Updated physical address of the work site"
          },
          {
            "inputId": "budget",
            "fieldRef": "Project.budget",
            "required": true,
            "source": "userInput",
            "description": "Updated approved total budget baseline"
          },
          {
            "inputId": "startDate",
            "fieldRef": "Project.startDate",
            "required": true,
            "source": "userInput",
            "description": "Updated planned project start date"
          },
          {
            "inputId": "endDate",
            "fieldRef": "Project.endDate",
            "required": true,
            "source": "userInput",
            "description": "Updated planned project completion date"
          },
          {
            "inputId": "updatedAt",
            "fieldRef": "Project.updatedAt",
            "required": true,
            "source": "systemDefault",
            "description": "Server-assigned timestamp of this modification"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "updateProject",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "updateProject",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "clientId",
              "operationId": "updateProject",
              "path": [
                "clientId"
              ],
              "fromItems": false
            },
            {
              "name": "siteAddress",
              "operationId": "updateProject",
              "path": [
                "siteAddress"
              ],
              "fromItems": false
            },
            {
              "name": "budget",
              "operationId": "updateProject",
              "path": [
                "budget"
              ],
              "fromItems": false
            },
            {
              "name": "startDate",
              "operationId": "updateProject",
              "path": [
                "startDate"
              ],
              "fromItems": false
            },
            {
              "name": "endDate",
              "operationId": "updateProject",
              "path": [
                "endDate"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateProject",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "updateProject",
              "path": [
                "updatedAt"
              ],
              "fromItems": false
            }
          ]
        },
        "optionalUses": []
      },
      {
        "handlerName": "projectLifecycleWorkspaceUpdateProjectStatusCmdHandler",
        "command": "updateProjectStatusCmd",
        "bffId": "updateProjectStatusCmd",
        "route": "buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd",
        "kind": "command",
        "usecaseRef": "updateProjectStatus",
        "usecaseRefs": [
          "updateProjectStatus"
        ],
        "inputTypeName": "UpdateProjectStatusInput",
        "inputContract": [
          {
            "inputId": "projectId",
            "fieldRef": "Project.projectId",
            "required": true,
            "source": "routeParam",
            "description": "Identifier of the project whose status is being updated"
          },
          {
            "inputId": "status",
            "fieldRef": "Project.status",
            "required": true,
            "source": "userInput",
            "description": "New lifecycle status for the project (registered, active, onHold, closed, or cancelled)"
          },
          {
            "inputId": "holdReason",
            "fieldRef": "Project.holdReason",
            "required": false,
            "source": "userInput",
            "description": "Reason recorded when the project is placed on hold"
          },
          {
            "inputId": "cancellationReason",
            "fieldRef": "Project.cancellationReason",
            "required": false,
            "source": "userInput",
            "description": "Reason recorded when the project is cancelled"
          }
        ],
        "projection": {
          "kind": "object",
          "arrayFieldName": null,
          "itemFields": [],
          "topFields": [
            {
              "name": "projectId",
              "operationId": "updateProjectStatus",
              "path": [
                "projectId"
              ],
              "fromItems": false
            },
            {
              "name": "name",
              "operationId": "updateProjectStatus",
              "path": [
                "name"
              ],
              "fromItems": false
            },
            {
              "name": "status",
              "operationId": "updateProjectStatus",
              "path": [
                "status"
              ],
              "fromItems": false
            },
            {
              "name": "holdReason",
              "operationId": "updateProjectStatus",
              "path": [
                "holdReason"
              ],
              "fromItems": false
            },
            {
              "name": "closedAt",
              "operationId": "updateProjectStatus",
              "path": [
                "closedAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancelledAt",
              "operationId": "updateProjectStatus",
              "path": [
                "cancelledAt"
              ],
              "fromItems": false
            },
            {
              "name": "cancellationReason",
              "operationId": "updateProjectStatus",
              "path": [
                "cancellationReason"
              ],
              "fromItems": false
            },
            {
              "name": "updatedAt",
              "operationId": "updateProjectStatus",
              "path": [
                "updatedAt"
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
        "key": "buildFlowFsm.projectLifecycleWorkspace.createProjectCmd",
        "handlerName": "projectLifecycleWorkspaceCreateProjectCmdHandler"
      },
      {
        "key": "buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd",
        "handlerName": "projectLifecycleWorkspaceUpdateProjectCmdHandler"
      },
      {
        "key": "buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd",
        "handlerName": "projectLifecycleWorkspaceUpdateProjectStatusCmdHandler"
      }
    ]
  }
} as const;

export default projectLifecycleWorkspaceController;

export const pipeline = [
  {
    "id": "projectLifecycleWorkspace__httpController",
    "type": "httpController",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectLifecycleWorkspace.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_1_external/adapters/http/controllers/projectLifecycleWorkspace.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createProject.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectLifecycleWorkspace.createProjectCmd.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProject.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectLifecycleWorkspace.updateProjectCmd.defs.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateProjectStatus.d.ts",
      "_102045_/l4/buildFlowFsm/contracts/projectLifecycleWorkspace.updateProjectStatusCmd.defs.ts"
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
