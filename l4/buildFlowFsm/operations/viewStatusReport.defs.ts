/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/viewStatusReport.defs.ts" enhancement="_blank"/>

export const operationViewStatusReport = {
  "operationId": "viewStatusReport",
  "title": "View status report",
  "actors": [
    "client"
  ],
  "entity": "StatusReport",
  "kind": "view",
  "reads": [
    "StatusReport",
    "Project"
  ],
  "writes": [],
  "rulesApplied": [
    "pmControlsStatusReportLifecycle"
  ],
  "story": {
    "actor": "client",
    "goal": "Read a project status report shared by the project manager to stay informed on progress",
    "steps": [
      "Open the shared status report from the project status area",
      "Read the AI-generated summary covering tasks, time, materials, and delay risks",
      "Review any PM notes and the reporting period covered"
    ],
    "outcome": "The client sees the full shared status report content and understands current project trajectory"
  },
  "accessPattern": {
    "kind": "getById",
    "description": "Load one shared status report by id for the client to read",
    "entity": "StatusReport",
    "keyField": "StatusReport.statusReportId",
    "pagination": "none",
    "selection": "single",
    "output": [
      "StatusReport.statusReportId",
      "StatusReport.projectId",
      "StatusReport.status",
      "StatusReport.reportPeriodStart",
      "StatusReport.reportPeriodEnd",
      "StatusReport.summary",
      "StatusReport.tasksOverview",
      "StatusReport.timeLogsOverview",
      "StatusReport.materialsOverview",
      "StatusReport.delayRiskAssessment",
      "StatusReport.pmNotes",
      "StatusReport.generatedAt",
      "StatusReport.sharedAt"
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
        "name": "projectName",
        "type": "string",
        "required": true,
        "fieldRef": "Project.name"
      },
      {
        "name": "status",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.status"
      },
      {
        "name": "reportPeriodStart",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.reportPeriodStart"
      },
      {
        "name": "reportPeriodEnd",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.reportPeriodEnd"
      },
      {
        "name": "summary",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.summary"
      },
      {
        "name": "tasksOverview",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.tasksOverview"
      },
      {
        "name": "timeLogsOverview",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.timeLogsOverview"
      },
      {
        "name": "materialsOverview",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.materialsOverview"
      },
      {
        "name": "delayRiskAssessment",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.delayRiskAssessment"
      },
      {
        "name": "pmNotes",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.pmNotes"
      },
      {
        "name": "generatedAt",
        "type": "string",
        "required": true,
        "fieldRef": "StatusReport.generatedAt"
      },
      {
        "name": "sharedAt",
        "type": "string",
        "required": false,
        "fieldRef": "StatusReport.sharedAt"
      }
    ]
  },
  "inputs": [
    {
      "inputId": "statusReportId",
      "fieldRef": "StatusReport.statusReportId",
      "required": true,
      "source": "routeParam",
      "description": "Identifier of the shared status report to open"
    },
    {
      "inputId": "clientId",
      "fieldRef": "Client.clientId",
      "required": true,
      "source": "actorSession",
      "description": "Authenticated client viewing the report; used to enforce project ownership"
    }
  ],
  "contextResolution": [
    {
      "inputId": "statusReportId",
      "targetRef": "StatusReport.statusReportId",
      "source": "routeParam",
      "originRef": "routeParam.statusReportId",
      "description": "Resolve the status report primary key from the route parameter statusReportId"
    },
    {
      "inputId": "clientId",
      "targetRef": "Client.clientId",
      "source": "actorSession",
      "originRef": "actorSession.actorId",
      "description": "Resolve the authenticated client id from the actor session so only reports for projects owned by this client are returned"
    }
  ],
  "acceptanceAssertions": [
    "Only a StatusReport with status shared is returned to the client; draft or reviewed reports are not visible",
    "The returned report belongs to a Project whose clientId matches the authenticated client",
    "The response includes summary, report period dates, tasksOverview, timeLogsOverview, materialsOverview, delayRiskAssessment, and pmNotes when present",
    "After the project manager shares the report, the client can open it and read the progress summary covering tasks, time, materials, and delay risks"
  ],
  "pageId": "viewStatusReport",
  "commandName": "viewStatusReport",
  "bffName": "buildFlowFsm.viewStatusReport.viewStatusReport",
  "capability": {
    "capabilityId": "viewStatusReport",
    "title": "View status report",
    "actor": "client",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationViewStatusReport;
