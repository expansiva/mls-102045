/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewDashboard.defs.ts" enhancement="_blank"/>

export const viewDashboardUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "viewDashboard",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "viewDashboard",
    "ports": [
      "Project",
      "WorkTask",
      "ChangeOrder",
      "TimeLog",
      "MaterialUsage"
    ],
    "functions": [
      {
        "functionName": "viewDashboard",
        "inputTypeName": "ViewDashboardInput",
        "outputTypeName": "ViewDashboardOutput",
        "input": [
          {
            "name": "status",
            "type": "string",
            "required": false,
            "description": "Optional project status filter; when omitted the dashboard defaults to active projects only",
            "fieldRef": "Project.status"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Optional page number for paginated dashboard results"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Optional page size for paginated dashboard results"
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
          "Project",
          "WorkTask",
          "ChangeOrder",
          "TimeLog",
          "MaterialUsage"
        ],
        "rulesApplied": [
          "dashboardShowsActiveProjects",
          "jobCostingRequiresBudgetAndSchedule"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve the status filter: if the 'status' input is provided use it, otherwise default to 'active' (rule dashboardShowsActiveProjects).",
          "2. Determine pagination parameters: page defaults to 1, pageSize defaults to 20 when not provided.",
          "3. List projects via Project port filtered by status (or 'active' default), sorted by name, with pagination. Capture the total count of matching projects.",
          "4. Collect all clientIds from the returned projects and hydrate Client master data in bulk via ctx.mdm.collection.getMany({ mdmIds: clientIds }). Build a clientId->clientName lookup map.",
          "5. Collect all projectIds from the returned projects.",
          "6. List WorkTask records via WorkTask port filtered by projectIds. Group work tasks by projectId. Collect all workTaskIds.",
          "7. List TimeLog records via TimeLog port filtered by the collected workTaskIds where status='posted'. Sum laborCost per workTaskId, then aggregate to laborCost per projectId by mapping workTaskId->projectId from step 6.",
          "8. List MaterialUsage records via MaterialUsage port filtered by projectIds where status='posted'. For each record compute quantity * unitCost and sum to materialCost per projectId.",
          "9. List ChangeOrder records via ChangeOrder port filtered by projectIds where status='approved'. Sum costAdjustment per projectId to get approvedChangeOrderCost.",
          "10. For each project compute actualCost = laborCost + materialCost + approvedChangeOrderCost (defaulting each component to 0 when no records exist).",
          "11. Compute budgetVariance = budget - actualCost for each project.",
          "12. Apply rule jobCostingRequiresBudgetAndSchedule: for any project missing budget (<=0) or missing startDate/endDate, set actualCost=0 and budgetVariance=0 to exclude it from job-costing signals. (All Project fields are required in the entity model, so this is a data-integrity guard.)",
          "13. For each project compute upcomingTaskCount = count of WorkTasks with status in ['assigned','inProgress'] and dueDate >= today (2026-07-31).",
          "14. For each project compute overdueTaskCount = count of WorkTasks with status in ['assigned','inProgress'] and dueDate < today (2026-07-31).",
          "15. Assemble the paginated response: projects array with projectId, name, clientId, clientName (from MDM lookup), budget, startDate, endDate, status, actualCost, budgetVariance, upcomingTaskCount, overdueTaskCount; and total = total count from step 3."
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
                  },
                  {
                    "name": "actualCost",
                    "type": "number",
                    "required": true
                  },
                  {
                    "name": "budgetVariance",
                    "type": "number",
                    "required": true
                  },
                  {
                    "name": "upcomingTaskCount",
                    "type": "number",
                    "required": true
                  },
                  {
                    "name": "overdueTaskCount",
                    "type": "number",
                    "required": true
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
    "mdmRefs": [
      "Client"
    ]
  }
} as const;

export default viewDashboardUsecase;

export const pipeline = [
  {
    "id": "viewDashboard__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewDashboard.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewDashboard.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
