{
  "savedAt": "2026-07-31T05:16:02.876Z",
  "agentName": "agentCbUsecase",
  "stepId": 32,
  "planning": null,
  "status": "waiting_after_prompt",
  "payload": {
    "type": "flexible",
    "result": {
      "toolName": "submitUsecase",
      "arguments": {
        "status": "ok",
        "result": {
          "usecaseId": "voidTimeLog",
          "ports": [
            "TimeLog"
          ],
          "functions": [
            {
              "functionName": "voidTimeLog",
              "inputTypeName": "VoidTimeLogInput",
              "outputTypeName": "VoidTimeLogOutput",
              "input": [
                {
                  "name": "timeLogId",
                  "type": "string",
                  "required": true,
                  "ofEntity": "TimeLog",
                  "description": "Identifier of the posted time log entry to void"
                },
                {
                  "name": "voidReason",
                  "type": "string",
                  "required": true,
                  "ofEntity": "TimeLog",
                  "description": "Reason provided by the field worker for voiding this time log"
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
                  "name": "voidedAt",
                  "type": "string",
                  "required": true,
                  "ofEntity": "TimeLog"
                },
                {
                  "name": "voidReason",
                  "type": "string",
                  "required": true,
                  "ofEntity": "TimeLog"
                }
              ],
              "ports": [
                "TimeLog"
              ],
              "rulesApplied": [
                "jobCostDerivation"
              ],
              "transactional": true,
              "steps": [
                "1. Load the TimeLog aggregate by timeLogId via the TimeLog port (getById). If not found, throw a validation error 'TimeLog not found'.",
                "2. Validate that the loaded TimeLog.status is 'posted'. If it is not 'posted' (e.g. already 'voided'), throw a validation error with rule 'jobCostDerivation': 'Only a time log that was previously posted can be voided'.",
                "3. Set TimeLog.status to 'voided' (systemDefault — fixed value, not user input).",
                "4. Set TimeLog.voidedAt to ctx.clock.now() (systemDefault — current server timestamp).",
                "5. Set TimeLog.voidReason to the voidReason provided by the field worker.",
                "6. Preserve the original hoursWorked and laborCost values on the record for audit (do not zero them out).",
                "7. Persist the updated TimeLog aggregate through the TimeLog port inside a single transaction (ctx.data transaction wrapper).",
                "8. Return the updated TimeLog record with all fields: timeLogId, workTaskId, workerName, logDate, hoursWorked, laborCost, status ('voided'), voidedAt, voidReason."
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
                    "name": "voidedAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "TimeLog.voidedAt"
                  },
                  {
                    "name": "voidReason",
                    "type": "string",
                    "required": true,
                    "fieldRef": "TimeLog.voidReason"
                  }
                ]
              }
            }
          ],
          "rulesApplied": [
            "jobCostDerivation"
          ],
          "mdmRefs": []
        },
        "questions": [],
        "trace": [
          "Generated voidTimeLog usecase: commandInput update on TimeLog aggregate root",
          "Public inputs: timeLogId (selectedEntity), voidReason (userInput)",
          "System defaults resolved server-side: status='voided', voidedAt=ctx.clock.now()",
          "Port: TimeLog (parent aggregate root, load+mutate+save)",
          "Rule jobCostDerivation applied: only posted logs can be voided; voided logs excluded from cost totals",
          "Output shape matches outputShape exactly: 9 fields from TimeLog entity",
          "Transactional: single transaction wrapping load+validate+mutate+persist"
        ]
      }
    },
    "status": "completed",
    "stepId": 7,
    "interaction": null,
    "nextSteps": null
  }
}
