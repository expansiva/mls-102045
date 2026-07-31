/// <mls fileReference="_102045_/l4/buildFlowFsm/actors.defs.ts" enhancement="_blank"/>

export const buildFlowFsmActors = {
  "moduleName": "buildFlowFsm",
  "actors": [
    {
      "actorId": "projectManager",
      "title": "Project Manager",
      "description": "Owns project setup, budget oversight, task planning, change orders, and status reporting for one or more jobs. Reviews and shares status reports with clients and controls task status updates.",
      "roleScope": "buildFlowFsm:projectManager"
    },
    {
      "actorId": "fieldWorker",
      "title": "Field Worker",
      "description": "Receives assigned work tasks and records daily time and progress from the field via a mobile-friendly interface. Can update task status for tasks assigned to them.",
      "roleScope": "buildFlowFsm:fieldWorker"
    },
    {
      "actorId": "billingStaff",
      "title": "Billing Staff",
      "description": "Prepares and reviews client billing summaries and invoices from approved job cost and change-order data. Shares billing documents with clients.",
      "roleScope": "buildFlowFsm:billingStaff"
    },
    {
      "actorId": "client",
      "title": "Client",
      "description": "External customer who receives shared project status reports and billing summaries. Has limited read-only visibility with no ability to edit projects or create billing documents.",
      "roleScope": "buildFlowFsm:client"
    }
  ]
} as const;

export default buildFlowFsmActors;
