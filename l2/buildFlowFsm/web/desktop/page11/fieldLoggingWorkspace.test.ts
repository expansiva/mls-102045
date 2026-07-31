/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/fieldLoggingWorkspace.test.ts" enhancement="_blank"/>

// GENERATED — declarative BFF test cases run server-side by the monitor Tests runner (wherever
// TESTS_ENABLED is on).
// Data, not a runnable test module: no node:test import, so scripts/run-tests.mjs never captures it.
// Params valued "<seedRef>" are ENTITY IDS this page itself reads: the runner resolves them at
// run time from the harvested output of this page's read queries (including the rows of any array in
// the envelope). Every other param is a deterministic literal valid for its declared l4 type, because
// a "<seedRef>" on a domain field is unsolvable and the command would die in VALIDATION_ERROR
// before testing anything. expect.itemsKey names the collection the wire returns for a paginated
// query (the runner assumes "items" when it is absent). "actor" is this page's l4 actor: the run
// executes these cases as the seeded platform identity of that actor, so a route that reads the
// actor id from the session is runnable headless.
export const pageTests = {
  "moduleName": "buildFlowFsm",
  "page": "fieldLoggingWorkspace",
  "variant": "page11",
  "actor": "fieldWorker",
  "cases": [
    {
      "id": "submitTimeLog.ok",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitTimeLog",
      "params": {
        "workTaskId": "<seedRef>",
        "logDate": "2026-01-01",
        "hoursWorked": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "submitTimeLog.workTaskId.required",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitTimeLog",
      "params": {
        "logDate": "2026-01-01",
        "hoursWorked": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "submitTimeLog.logDate.required",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitTimeLog",
      "params": {
        "workTaskId": "<seedRef>",
        "hoursWorked": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "submitTimeLog.hoursWorked.required",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitTimeLog",
      "params": {
        "workTaskId": "<seedRef>",
        "logDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "submitVoidTimeLog.ok",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog",
      "params": {
        "timeLogId": "<seedRef>",
        "voidReason": "teste"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "submitVoidTimeLog.voidReason.required",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitVoidTimeLog",
      "params": {
        "timeLogId": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "submitMaterialUsage.ok",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage",
      "params": {
        "projectId": "<seedRef>",
        "materialName": "teste",
        "quantity": 1,
        "unit": "liter",
        "unitCost": 1,
        "usageDate": "2026-01-01"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "submitMaterialUsage.materialName.required",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage",
      "params": {
        "projectId": "<seedRef>",
        "quantity": 1,
        "unit": "liter",
        "unitCost": 1,
        "usageDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "submitMaterialUsage.quantity.required",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage",
      "params": {
        "projectId": "<seedRef>",
        "materialName": "teste",
        "unit": "liter",
        "unitCost": 1,
        "usageDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "submitMaterialUsage.unit.required",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage",
      "params": {
        "projectId": "<seedRef>",
        "materialName": "teste",
        "quantity": 1,
        "unitCost": 1,
        "usageDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "submitMaterialUsage.unitCost.required",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage",
      "params": {
        "projectId": "<seedRef>",
        "materialName": "teste",
        "quantity": 1,
        "unit": "liter",
        "usageDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "submitMaterialUsage.usageDate.required",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitMaterialUsage",
      "params": {
        "projectId": "<seedRef>",
        "materialName": "teste",
        "quantity": 1,
        "unit": "liter",
        "unitCost": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "submitVoidMaterialUsage.ok",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage",
      "params": {
        "materialUsageId": "<seedRef>",
        "voidedReason": "teste"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "submitVoidMaterialUsage.voidedReason.required",
      "routine": "buildFlowFsm.fieldLoggingWorkspace.submitVoidMaterialUsage",
      "params": {
        "materialUsageId": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    }
  ]
} as const;
