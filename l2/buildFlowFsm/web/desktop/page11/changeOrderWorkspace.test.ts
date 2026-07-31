/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/changeOrderWorkspace.test.ts" enhancement="_blank"/>

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
  "page": "changeOrderWorkspace",
  "variant": "page11",
  "actor": "projectManager",
  "cases": [
    {
      "id": "cmdCreateChangeOrder.ok",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder",
      "params": {
        "projectId": "<seedRef>",
        "title": "teste",
        "description": "teste",
        "impactType": "cost",
        "costAdjustment": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdCreateChangeOrder.title.required",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder",
      "params": {
        "projectId": "<seedRef>",
        "description": "teste",
        "impactType": "cost",
        "costAdjustment": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateChangeOrder.description.required",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder",
      "params": {
        "projectId": "<seedRef>",
        "title": "teste",
        "impactType": "cost",
        "costAdjustment": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateChangeOrder.impactType.required",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder",
      "params": {
        "projectId": "<seedRef>",
        "title": "teste",
        "description": "teste",
        "costAdjustment": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateChangeOrder.costAdjustment.required",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdCreateChangeOrder",
      "params": {
        "projectId": "<seedRef>",
        "title": "teste",
        "description": "teste",
        "impactType": "cost"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateChangeOrder.ok",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>",
        "title": "teste",
        "description": "teste",
        "impactType": "cost",
        "costAdjustment": 1
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdUpdateChangeOrder.title.required",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>",
        "description": "teste",
        "impactType": "cost",
        "costAdjustment": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateChangeOrder.description.required",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>",
        "title": "teste",
        "impactType": "cost",
        "costAdjustment": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateChangeOrder.impactType.required",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>",
        "title": "teste",
        "description": "teste",
        "costAdjustment": 1
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateChangeOrder.costAdjustment.required",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrder",
      "params": {
        "changeOrderId": "<seedRef>",
        "title": "teste",
        "description": "teste",
        "impactType": "cost"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateChangeOrderStatus.ok",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus",
      "params": {
        "changeOrderId": "<seedRef>",
        "status": "pendingReview"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdUpdateChangeOrderStatus.status.required",
      "routine": "buildFlowFsm.changeOrderWorkspace.cmdUpdateChangeOrderStatus",
      "params": {
        "changeOrderId": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    }
  ]
} as const;
