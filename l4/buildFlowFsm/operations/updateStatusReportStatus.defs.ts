/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/updateStatusReportStatus.defs.ts" enhancement="_blank"/>

export const operationUpdateStatusReportStatus = {
  "operationId": "updateStatusReportStatus",
  "title": "Update status report status",
  "actors": [
    "projectManager"
  ],
  "entity": "StatusReport",
  "kind": "update",
  "reads": [
    "StatusReport"
  ],
  "writes": [
    "StatusReport"
  ],
  "rulesApplied": [
    "pmControlsStatusReportLifecycle"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Advance a status report through its lifecycle by marking it reviewed or sharing it with the client",
    "steps": [
      "Open the status report to update",
      "Choose the next lifecycle status (reviewed or shared)",
      "Confirm the status change so timestamps and visibility update"
    ],
    "outcome": "The status report status is updated, review or share timestamps are recorded, and when shared the client can view the report"
  },
  "accessPattern": {
    "kind": "commandInput",
    "description": "Command form to advance the selected status report to the next lifecycle state (reviewed or shared)",
    "entity": "StatusReport",
    "keyField": "StatusReport.statusReportId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "StatusReport.statusReportId",
      "StatusReport.projectId",
      "StatusReport.status",
      "StatusReport.reviewedAt",
      "StatusReport.sharedAt",
      "StatusReport.updatedAt"
    ]
  },
  "outputShape": {
    "kind": "object",
    "fields": [
      {
        "name": "statusReportId",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.statusReportId"
      },
      {
        "name": "projectId",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.projectId"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.status"
      },
      {
        "name": "reviewedAt",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.reviewedAt"
      },
      {
        "name": "sharedAt",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.sharedAt"
      },
      {
        "name": "updatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.updatedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "statusReportId",
      "fieldRef": "StatusReport.statusReportId",
      "required": true,
      "source": "routeParam",
      "description": "Identifier of the status report whose lifecycle status is being updated"
    },
    {
      "inputId": "status",
      "fieldRef": "StatusReport.status",
      "required": true,
      "source": "userInput",
      "description": "Target lifecycle status for the report: reviewed after PM review, or shared when releasing to the client"
    },
    {
      "inputId": "updatedAt",
      "fieldRef": "StatusReport.updatedAt",
      "required": true,
      "source": "systemDefault",
      "description": "Server timestamp recorded when the status change is applied"
    },
    {
      "inputId": "reviewedAt",
      "fieldRef": "StatusReport.reviewedAt",
      "required": false,
      "source": "systemDefault",
      "description": "Server timestamp set when the report is moved to reviewed"
    },
    {
      "inputId": "sharedAt",
      "fieldRef": "StatusReport.sharedAt",
      "required": false,
      "source": "systemDefault",
      "description": "Server timestamp set when the report is moved to shared with the client"
    }
  ],
  "contextResolution": [
    {
      "inputId": "statusReportId",
      "targetRef": "StatusReport.statusReportId",
      "source": "routeParam",
      "originRef": "routeParam.statusReportId",
      "description": "Resolved from the statusReportId route parameter identifying the report being updated"
    },
    {
      "inputId": "updatedAt",
      "targetRef": "StatusReport.updatedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Backend sets updatedAt to the current server time on every status change"
    },
    {
      "inputId": "reviewedAt",
      "targetRef": "StatusReport.reviewedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Backend sets reviewedAt to now when the new status is reviewed"
    },
    {
      "inputId": "sharedAt",
      "targetRef": "StatusReport.sharedAt",
      "source": "systemDefault",
      "originRef": "systemDefault.now",
      "description": "Backend sets sharedAt to now when the new status is shared"
    }
  ],
  "acceptanceAssertions": [
    "After the project manager confirms a status change to reviewed, the status report exists with status reviewed and reviewedAt set to the change timestamp",
    "After the project manager confirms a status change to shared, the status report exists with status shared and sharedAt set to the change timestamp",
    "Only the project manager can update status report lifecycle status; the operation rejects attempts by other actors",
    "When status becomes shared, the client can subsequently receive and view the status report",
    "updatedAt is always refreshed to the server time of the status change"
  ],
  "pageId": "statusReportLifecycle",
  "commandName": "updateStatusReportStatus",
  "bffName": "buildFlowFsm.statusReportLifecycle.updateStatusReportStatus",
  "capability": {
    "capabilityId": "statusReportLifecycle",
    "title": "Status report lifecycle",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationUpdateStatusReportStatus;
