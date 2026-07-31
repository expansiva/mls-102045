/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryClients.defs.ts" enhancement="_blank"/>

export const queryClientsUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "queryClients",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "queryClients",
    "ports": [],
    "functions": [
      {
        "functionName": "queryClients",
        "inputTypeName": "QueryClientsInput",
        "outputTypeName": "QueryClientsOutput",
        "input": [
          {
            "name": "name",
            "type": "string",
            "required": false,
            "description": "Optional filter on client display name.",
            "fieldRef": "Client.name"
          },
          {
            "name": "company",
            "type": "string",
            "required": false,
            "description": "Optional filter on client company or trading name.",
            "fieldRef": "Client.company"
          },
          {
            "name": "email",
            "type": "string",
            "required": false,
            "description": "Optional filter on client email address.",
            "fieldRef": "Client.email"
          },
          {
            "name": "page",
            "type": "number",
            "required": false,
            "description": "Optional page number for paginated client results."
          },
          {
            "name": "pageSize",
            "type": "number",
            "required": false,
            "description": "Optional page size for paginated client results."
          }
        ],
        "output": [
          {
            "name": "clients",
            "type": "array",
            "required": true
          },
          {
            "name": "total",
            "type": "number",
            "required": true
          }
        ],
        "ports": [],
        "rulesApplied": [],
        "transactional": false,
        "steps": [
          "1. Resolve pagination defaults: page = page ?? 1, pageSize = pageSize ?? 20 (clamp pageSize to max 100).",
          "2. Call ctx.mdm.collection.listByType({ type: 'Client' }) to retrieve all Client master records from the shared MDM store.",
          "3. Apply optional in-memory filters when provided: if name is set, keep records whose name contains the value (case-insensitive); if company is set, keep records whose company contains the value; if email is set, keep records whose email contains the value.",
          "4. Sort the filtered results by name ascending (case-insensitive).",
          "5. Compute total = filteredResults.length.",
          "6. Paginate: slice the sorted array from (page-1)*pageSize to (page-1)*pageSize + pageSize.",
          "7. Map each MDM record to the output projection { clientId, name, company, email, phone, address, createdAt, updatedAt } reading from the record's top-level fields (or details.<moduleId> when module-specific).",
          "8. Return { clients: projectedPage, total }."
        ],
        "outputShape": {
          "kind": "paginated",
          "fields": [
            {
              "name": "clients",
              "type": "array",
              "required": true,
              "item": {
                "fields": [
                  {
                    "name": "clientId",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Client.clientId"
                  },
                  {
                    "name": "name",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Client.name"
                  },
                  {
                    "name": "company",
                    "type": "string",
                    "required": false,
                    "fieldRef": "Client.company"
                  },
                  {
                    "name": "email",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Client.email"
                  },
                  {
                    "name": "phone",
                    "type": "string",
                    "required": false,
                    "fieldRef": "Client.phone"
                  },
                  {
                    "name": "address",
                    "type": "string",
                    "required": false,
                    "fieldRef": "Client.address"
                  },
                  {
                    "name": "createdAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Client.createdAt"
                  },
                  {
                    "name": "updatedAt",
                    "type": "string",
                    "required": true,
                    "fieldRef": "Client.updatedAt"
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
        }
      }
    ],
    "mdmRefs": [
      "Client"
    ]
  }
} as const;

export default queryClientsUsecase;

export const pipeline = [
  {
    "id": "queryClients__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryClients.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryClients.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
