/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/projectLifecycleWorkspace.test.ts" enhancement="_blank"/>

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
  "page": "projectLifecycleWorkspace",
  "variant": "page11",
  "actor": "projectManager",
  "cases": [
    {
      "id": "createProjectCmd.ok",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.createProjectCmd",
      "params": {
        "name": "teste",
        "clientId": "<seedRef>",
        "siteAddress": "teste",
        "budget": 1,
        "startDate": "2026-01-01",
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "createProjectCmd.name.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.createProjectCmd",
      "params": {
        "clientId": "<seedRef>",
        "siteAddress": "teste",
        "budget": 1,
        "startDate": "2026-01-01",
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createProjectCmd.clientId.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.createProjectCmd",
      "params": {
        "name": "teste",
        "siteAddress": "teste",
        "budget": 1,
        "startDate": "2026-01-01",
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createProjectCmd.siteAddress.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.createProjectCmd",
      "params": {
        "name": "teste",
        "clientId": "<seedRef>",
        "budget": 1,
        "startDate": "2026-01-01",
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createProjectCmd.budget.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.createProjectCmd",
      "params": {
        "name": "teste",
        "clientId": "<seedRef>",
        "siteAddress": "teste",
        "startDate": "2026-01-01",
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createProjectCmd.startDate.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.createProjectCmd",
      "params": {
        "name": "teste",
        "clientId": "<seedRef>",
        "siteAddress": "teste",
        "budget": 1,
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createProjectCmd.endDate.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.createProjectCmd",
      "params": {
        "name": "teste",
        "clientId": "<seedRef>",
        "siteAddress": "teste",
        "budget": 1,
        "startDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "updateProjectCmd.ok",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd",
      "params": {
        "projectId": "<seedRef>",
        "name": "teste",
        "clientId": "<seedRef>",
        "siteAddress": "teste",
        "budget": 1,
        "startDate": "2026-01-01",
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "updateProjectCmd.name.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd",
      "params": {
        "projectId": "<seedRef>",
        "clientId": "<seedRef>",
        "siteAddress": "teste",
        "budget": 1,
        "startDate": "2026-01-01",
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "updateProjectCmd.clientId.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd",
      "params": {
        "projectId": "<seedRef>",
        "name": "teste",
        "siteAddress": "teste",
        "budget": 1,
        "startDate": "2026-01-01",
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "updateProjectCmd.siteAddress.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd",
      "params": {
        "projectId": "<seedRef>",
        "name": "teste",
        "clientId": "<seedRef>",
        "budget": 1,
        "startDate": "2026-01-01",
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "updateProjectCmd.budget.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd",
      "params": {
        "projectId": "<seedRef>",
        "name": "teste",
        "clientId": "<seedRef>",
        "siteAddress": "teste",
        "startDate": "2026-01-01",
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "updateProjectCmd.startDate.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd",
      "params": {
        "projectId": "<seedRef>",
        "name": "teste",
        "clientId": "<seedRef>",
        "siteAddress": "teste",
        "budget": 1,
        "endDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "updateProjectCmd.endDate.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.updateProjectCmd",
      "params": {
        "projectId": "<seedRef>",
        "name": "teste",
        "clientId": "<seedRef>",
        "siteAddress": "teste",
        "budget": 1,
        "startDate": "2026-01-01"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "updateProjectStatusCmd.ok",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd",
      "params": {
        "projectId": "<seedRef>",
        "status": "active"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "updateProjectStatusCmd.status.required",
      "routine": "buildFlowFsm.projectLifecycleWorkspace.updateProjectStatusCmd",
      "params": {
        "projectId": "<seedRef>"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    }
  ]
} as const;
