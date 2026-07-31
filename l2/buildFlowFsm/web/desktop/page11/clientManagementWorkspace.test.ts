/// <mls fileReference="_102045_/l2/buildFlowFsm/web/desktop/page11/clientManagementWorkspace.test.ts" enhancement="_blank"/>

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
  "page": "clientManagementWorkspace",
  "variant": "page11",
  "actor": "projectManager",
  "cases": [
    {
      "id": "listClients.ok",
      "routine": "buildFlowFsm.clientManagementWorkspace.listClients",
      "params": {},
      "expect": {
        "ok": true,
        "shape": "paginated",
        "minItems": 1,
        "itemsKey": "clients"
      }
    },
    {
      "id": "createClientCmd.ok",
      "routine": "buildFlowFsm.clientManagementWorkspace.createClientCmd",
      "params": {
        "name": "teste",
        "email": "teste"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "createClientCmd.name.required",
      "routine": "buildFlowFsm.clientManagementWorkspace.createClientCmd",
      "params": {
        "email": "teste"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "createClientCmd.email.required",
      "routine": "buildFlowFsm.clientManagementWorkspace.createClientCmd",
      "params": {
        "name": "teste"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "updateClientCmd.ok",
      "routine": "buildFlowFsm.clientManagementWorkspace.updateClientCmd",
      "params": {
        "clientId": "<seedRef>",
        "name": "teste",
        "email": "teste"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    },
    {
      "id": "updateClientCmd.name.required",
      "routine": "buildFlowFsm.clientManagementWorkspace.updateClientCmd",
      "params": {
        "clientId": "<seedRef>",
        "email": "teste"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "updateClientCmd.email.required",
      "routine": "buildFlowFsm.clientManagementWorkspace.updateClientCmd",
      "params": {
        "clientId": "<seedRef>",
        "name": "teste"
      },
      "expect": {
        "ok": false,
        "errorCode": "VALIDATION_ERROR"
      }
    },
    {
      "id": "deleteClientCmd.ok",
      "routine": "buildFlowFsm.clientManagementWorkspace.deleteClientCmd",
      "params": {
        "clientId": "<seedRef>"
      },
      "expect": {
        "ok": true,
        "shape": "object"
      },
      "mutating": true
    }
  ]
} as const;
