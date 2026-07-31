/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/taskBoardWorkspace.test.ts" enhancement="_blank"/>

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
  "page": "taskBoardWorkspace",
  "variant": "page11",
  "actor": "projectManager",
  "cases": [
    {
      "id": "cmdCreateWorkTask.ok",
      "routine": "buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask",
      "params": {
        "projectId": "<seedRef>",
        "title": "teste",
        "assignedWorkerId": "<seedRef>",
        "dueDate": "2026-01-01"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "cmdCreateWorkTask.title.required",
      "routine": "buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask",
      "params": {
        "projectId": "<seedRef>",
        "assignedWorkerId": "<seedRef>",
        "dueDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateWorkTask.assignedWorkerId.required",
      "routine": "buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask",
      "params": {
        "projectId": "<seedRef>",
        "title": "teste",
        "dueDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdCreateWorkTask.dueDate.required",
      "routine": "buildFlowFsm.taskBoardWorkspace.cmdCreateWorkTask",
      "params": {
        "projectId": "<seedRef>",
        "title": "teste",
        "assignedWorkerId": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "cmdUpdateWorkTask.ok",
      "routine": "buildFlowFsm.taskBoardWorkspace.cmdUpdateWorkTask",
      "params": {
        "workTaskId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    }
  ]
} as const;
