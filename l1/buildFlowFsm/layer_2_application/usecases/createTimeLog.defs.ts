/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.defs.ts" enhancement="_blank"/>

export const createTimeLogUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "createTimeLog",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "createTimeLog",
    "ports": [
      "WorkTask",
      "TimeLog"
    ],
    "functions": [
      {
        "functionName": "createTimeLog",
        "inputTypeName": "CreateTimeLogInput",
        "outputTypeName": "CreateTimeLogOutput",
        "input": [
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog",
            "description": "Work task the logged hours are recorded against"
          },
          {
            "name": "logDate",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog",
            "description": "Calendar date on which the work was performed"
          },
          {
            "name": "hoursWorked",
            "type": "number",
            "required": true,
            "ofEntity": "TimeLog",
            "description": "Number of hours worked on the task for this log entry"
          }
        ],
        "output": [
          {
            "name": "timeLogId",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "workTaskId",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "workerName",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "logDate",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "hoursWorked",
            "type": "number",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "laborCost",
            "type": "number",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          },
          {
            "name": "createdAt",
            "type": "string",
            "required": true,
            "ofEntity": "TimeLog"
          }
        ],
        "ports": [
          "WorkTask",
          "TimeLog"
        ],
        "rulesApplied": [
          "jobCostDerivation",
          "timeLogLinkingRequired"
        ],
        "transactional": true,
        "steps": [
          "1. Load the WorkTask referenced by workTaskId through the WorkTask port (getById). If not found, reject with validation error citing rule timeLogLinkingRequired — a time log must be linked to a valid, existing work task.",
          "2. Resolve workerName from ctx.sessionContext.actorName (actorSession context). If unavailable, reject with a context-resolution error.",
          "3. Generate timeLogId via ctx.idGenerator.uuid().",
          "4. Stamp createdAt with ctx.clock.now() (ISO datetime).",
          "5. Apply rule jobCostDerivation: compute laborCost = hoursWorked * STANDARD_HOURLY_RATE (a domain constant, e.g. 75.0). This derived cost allows the time log to contribute to job-cost and budget-vs-actual roll-ups.",
          "6. Set status = 'posted' (initial state for a newly created time log).",
          "7. Build the TimeLog aggregate root with all fields: timeLogId, workTaskId, workerName, logDate, hoursWorked, laborCost, status, createdAt.",
          "8. Persist the TimeLog through the TimeLog port (create) inside a single transaction via ctx.data transaction wrapper.",
          "9. Return the persisted TimeLog projection: timeLogId, workTaskId, workerName, logDate, hoursWorked, laborCost, status, createdAt."
        ],
        "outputShape": {
          "kind": "object",
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
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "TimeLog.createdAt"
            }
          ]
        }
      }
    ],
    "rulesApplied": [
      "jobCostDerivation",
      "timeLogLinkingRequired"
    ],
    "mdmRefs": []
  }
} as const;

export default createTimeLogUsecase;

export const pipeline = [
  {
    "id": "createTimeLog__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "rulesApplied": [
      "jobCostDerivation",
      "timeLogLinkingRequired"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
