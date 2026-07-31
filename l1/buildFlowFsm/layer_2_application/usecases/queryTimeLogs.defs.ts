/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryTimeLogs.defs.ts" enhancement="_blank"/>

export const queryTimeLogsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryTimeLogs",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryTimeLogs",
    "ports": [
      "TimeLog"
    ],
    "functions": [
      {
        "functionName": "queryTimeLogs",
        "inputTypeName": "QueryTimeLogsInput",
        "outputTypeName": "QueryTimeLogsOutput",
        "input": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": false,
            "ofEntity": "TimeLog",
            "description": "Optional filter to show time logs for a specific work task"
          },
          {
            "name": "workerName",
            "type": "string",
            "required": false,
            "ofEntity": "TimeLog",
            "description": "Optional filter by field worker name"
          },
          {
            "name": "logDate",
            "type": "string",
            "required": false,
            "ofEntity": "TimeLog",
            "description": "Optional filter by the calendar date the work was performed"
          },
          {
            "name": "status",
            "type": "string",
            "required": false,
            "ofEntity": "TimeLog",
            "description": "Optional filter by time log status (posted or voided)"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Page number for paginated results"
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Number of time log entries per page"
          }
        ],
        "output": [
          {
            "name": "timeLogs",
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
          "TimeLog"
        ],
        "rulesApplied": [
          "jobCostDerivation",
          "timeLogLinkingRequired"
        ],
        "transactional": false,
        "steps": [
          "1. Resolve pagination defaults: page = page ?? 1, pageSize = pageSize ?? 20.",
          "2. Build filter criteria from optional inputs: workTaskId, workerName, logDate, status. Only include filters that are provided (non-null/non-empty).",
          "3. Validate status filter if provided — must be one of 'posted' or 'voided' (rule: timeLogLinkingRequired ensures only properly linked logs are returned; invalid status value yields empty result).",
          "4. Query the TimeLog port (repository) with the assembled filter, sorted by logDate descending then createdAt descending, applying pagination offset = (page - 1) * pageSize and limit = pageSize.",
          "5. For each returned TimeLog, verify workTaskId and workerName are present (rule: timeLogLinkingRequired — every time log must be linked to a work task and a worker; exclude any orphaned records that lack these fields).",
          "6. Project each TimeLog into the output shape: timeLogId, workTaskId, workerName, logDate, hoursWorked, laborCost, status, voidedAt (nullable), voidReason (nullable), createdAt.",
          "7. Ensure laborCost is populated on every returned record (rule: jobCostDerivation — labor cost values must be available for job cost derivation and budget-versus-actual review; if laborCost is null/missing, compute it as hoursWorked * applicableRate or exclude the record).",
          "8. Return { timeLogs: projectedResults, total: totalCount } where total is the count of all matching records before pagination."
        ],
        "outputShape": {
          "kind": "paginated",
          "fields": [
            {
              "name": "timeLogs",
              "type": "array",
              "required": true,
              "item": {
                "fields": [
                  {
                    "name": "timeLogId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "TimeLog.timeLogId"
                  },
                  {
                    "name": "workTaskId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "TimeLog.workTaskId"
                  },
                  {
                    "name": "workerName",
                    "type": "string",
                    "required": true,
                    "fieldRef": "TimeLog.workerName"
                  },
                  {
                    "name": "logDate",
                    "type": "string",
                    "required": true,
                    "fieldRef": "TimeLog.logDate"
                  },
                  {
                    "name": "hoursWorked",
                    "type": "number",
                    "required": true,
                    "fieldRef": "TimeLog.hoursWorked"
                  },
                  {
                    "name": "laborCost",
                    "type": "number",
                    "required": true,
                    "fieldRef": "TimeLog.laborCost"
                  },
                  {
                    "name": "status",
                    "type": "string",
                    "required": true,
                    "fieldRef": "TimeLog.status"
                  },
                  {
                    "name": "voidedAt",
                    "type": "string",
                    "required": false,
                    "fieldRef": "TimeLog.voidedAt"
                  },
                  {
                    "name": "voidReason",
                    "type": "string",
                    "required": false,
                    "fieldRef": "TimeLog.voidReason"
                  },
                  {
                    "name": "createdAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "TimeLog.createdAt"
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
    "mdmRefs": []
  }
} as const;

export default queryTimeLogsUsecase;

export const pipeline = [
  {
    "id": "queryTimeLogs__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryTimeLogs.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryTimeLogs.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts"
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
