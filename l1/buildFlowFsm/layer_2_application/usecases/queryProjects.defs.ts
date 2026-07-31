/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryProjects.defs.ts" enhancement="_blank"/>

export const queryProjectsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryProjects",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryProjects",
    "ports": [
      "Project",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "queryProjects",
        "inputTypeName": "QueryProjectsInput",
        "outputTypeName": "QueryProjectsOutput",
        "input": [
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Optional lifecycle status filter; when omitted defaults to active projects only per dashboard rule",
            "fieldRef": "Project.status"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Optional 1-based page number for paginated project results"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Optional page size for paginated project results"
          }
        ],
        "output": [
          {
            "name": "projects",
            "type": "array",
            "required": true
          },
          {
            "name": "total",
            "type": "number",
            "required": true
          }
        ],
        "ports": [
          "Project"
        ],
        "rulesApplied": [
          "dashboardShowsActiveProjects"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve the effective status filter: if the 'status' input is provided use it; otherwise default to 'active' per rule dashboardShowsActiveProjects (the operational dashboard shows active projects by default).",
          "2. Resolve pagination parameters: page defaults to 1, pageSize defaults to 20 when not supplied by the caller.",
          "3. Call ProjectPort.list with filter { status: effectiveStatus }, sort by name ascending, offset = (page - 1) * pageSize, limit = pageSize. Obtain both the page slice and the total matching count.",
          "4. Collect all distinct clientId values from the returned project records into an array (plural-first: never fetch clients one-by-one).",
          "5. If the collected clientId array is non-empty, call ctx.mdm.collection.getMany({ mdmIds: clientIds }) to bulk-resolve Client master-data records. Build a lookup map of clientId -> Client.name.",
          "6. Map each project record to the output item shape: projectId, name, clientId, clientName (from the lookup map, falling back to empty string if not found), siteAddress, budget, startDate, endDate, status.",
          "7. Return { projects: mappedItems, total: totalCount }."
        ],
        "outputShape": {
          "kind": "paginated",
          "fields": [
            {
              "name": "projects",
              "type": "array",
              "required": true,
              "item": {
                "fields": [
                  {
                    "name": "projectId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Project.projectId"
                  },
                  {
                    "name": "name",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Project.name"
                  },
                  {
                    "name": "clientId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Project.clientId"
                  },
                  {
                    "name": "clientName",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Client.name"
                  },
                  {
                    "name": "siteAddress",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Project.siteAddress"
                  },
                  {
                    "name": "budget",
                    "type": "number",
                    "required": true,
                    "fieldRef": "Project.budget"
                  },
                  {
                    "name": "startDate",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Project.startDate"
                  },
                  {
                    "name": "endDate",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Project.endDate"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Project.status"
                  }
                ]
              }
            },
            {
              "name": "total",
              "type": "number",
              "required": true
            }
          ]
        }
      }
    ],
    "rulesApplied": [
      "dashboardShowsActiveProjects"
    ],
    "mdmRefs": [
      "Client"
    ]
  }
} as const;

export default queryProjectsUsecase;

export const pipeline = [
  {
    "id": "queryProjects__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryProjects.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryProjects.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "dashboardShowsActiveProjects"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
