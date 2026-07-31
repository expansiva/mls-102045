/// <mls fileReference="_102045_/l4/buildFlowFsm/operations/queryMaterialUsages.defs.ts" enhancement="_blank"/>

export const operationQueryMaterialUsages = {
  "operationId": "queryMaterialUsages",
  "title": "Browse material usage",
  "actors": [
    "projectManager"
  ],
  "entity": "MaterialUsage",
  "kind": "query",
  "reads": [
    "MaterialUsage"
  ],
  "writes": [],
  "rulesApplied": [
    "jobCostDerivation",
    "materialUsageIsProjectLevel"
  ],
  "story": {
    "actor": "projectManager",
    "goal": "Browse material usage records attributed to a project so material costs feeding job costing are visible and auditable",
    "steps": [
      "Open the material usage list for the selected project",
      "Review material name, quantity, unit, unit cost, cost code, usage date, and status of each entry",
      "Optionally filter by status to separate posted costs from voided corrections"
    ],
    "outcome": "The project manager sees the project-level material usage entries that contribute to budget-vs-actual and job cost totals"
  },
  "accessPattern": {
    "kind": "list",
    "description": "List material usage records for a project so the project manager can review materials consumed for job costing",
    "entity": "MaterialUsage",
    "keyField": "MaterialUsage.materialUsageId",
    "filters": [
      "MaterialUsage.projectId",
      "MaterialUsage.status",
      "MaterialUsage.usageDate"
    ],
    "sort": [
      "MaterialUsage.usageDate",
      "MaterialUsage.createdAt"
    ],
    "pagination": "optional",
    "selection": "single",
    "output": [
      "MaterialUsage.materialUsageId",
      "MaterialUsage.projectId",
      "MaterialUsage.status",
      "MaterialUsage.materialName",
      "MaterialUsage.quantity",
      "MaterialUsage.unit",
      "MaterialUsage.unitCost",
      "MaterialUsage.costCode",
      "MaterialUsage.usageDate",
      "MaterialUsage.recordedBy",
      "MaterialUsage.voidedAt",
      "MaterialUsage.voidedReason",
      "MaterialUsage.createdAt"
    ]
  },
  "outputShape": {
    "kind": "paginated",
    "fields": [
      {
        "name": "materialUsages",
        "type": "array",
        "required": true,
        "item": {
          "fields": [
            {
              "name": "materialUsageId",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.materialUsageId"
            },
            {
              "name": "projectId",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.projectId"
            },
            {
              "name": "status",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.status"
            },
            {
              "name": "materialName",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.materialName"
            },
            {
              "name": "quantity",
              "type": "number",
              "required": true,
              "fieldRef": "MaterialUsage.quantity"
            },
            {
              "name": "unit",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.unit"
            },
            {
              "name": "unitCost",
              "type": "number",
              "required": true,
              "fieldRef": "MaterialUsage.unitCost"
            },
            {
              "name": "costCode",
              "type": "string",
              "required": false,
              "fieldRef": "MaterialUsage.costCode"
            },
            {
              "name": "usageDate",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.usageDate"
            },
            {
              "name": "recordedBy",
              "type": "string",
              "required": false,
              "fieldRef": "MaterialUsage.recordedBy"
            },
            {
              "name": "voidedAt",
              "type": "string",
              "required": false,
              "fieldRef": "MaterialUsage.voidedAt"
            },
            {
              "name": "voidedReason",
              "type": "string",
              "required": false,
              "fieldRef": "MaterialUsage.voidedReason"
            },
            {
              "name": "createdAt",
              "type": "string",
              "required": true,
              "fieldRef": "MaterialUsage.createdAt"
            }
          ]
        }
      },
      {
        "name": "total",
        "type": "number",
        "required": true
      }
    ]
  },
  "inputs": [
    {
      "inputId": "projectId",
      "fieldRef": "MaterialUsage.projectId",
      "required": true,
      "source": "selectedEntity",
      "description": "Project whose material usage records are listed for job costing review"
    },
    {
      "inputId": "status",
      "fieldRef": "MaterialUsage.status",
      "required": false,
      "source": "userInput",
      "description": "Optional filter by lifecycle status (posted or voided)"
    },
    {
      "inputId": "page",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Optional page number for paginated results"
    },
    {
      "inputId": "pageSize",
      "type": "number",
      "required": false,
      "source": "userInput",
      "description": "Optional page size for paginated results"
    }
  ],
  "contextResolution": [
    {
      "inputId": "projectId",
      "targetRef": "MaterialUsage.projectId",
      "source": "selectedEntity",
      "originRef": "Project.projectId",
      "description": "Resolved from the project currently selected in the workspace when the manager opens material usage"
    }
  ],
  "acceptanceAssertions": [
    "After the query runs, only material usage records for the selected project are returned",
    "Each returned entry includes materialName, quantity, unit, unitCost, usageDate, and status so material costs are reviewable for job costing",
    "Posted and voided material usage records are both available so the project manager can audit corrections without treating entries as warehouse stock",
    "Returned material usage data is project-level job cost input consistent with budget-vs-actual derivation from time logs, material usage, and approved change orders"
  ],
  "pageId": "queryMaterialUsages",
  "commandName": "queryMaterialUsages",
  "bffName": "buildFlowFsm.queryMaterialUsages.queryMaterialUsages",
  "capability": {
    "capabilityId": "queryMaterialUsages",
    "title": "Browse material usage",
    "actor": "projectManager",
    "priority": "now"
  },
  "statusFrontend": "toCreate",
  "statusBackend": "toCreate"
} as const;

export default operationQueryMaterialUsages;
