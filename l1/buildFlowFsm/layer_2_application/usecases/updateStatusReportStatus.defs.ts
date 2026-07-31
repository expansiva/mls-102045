/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReportStatus.defs.ts" enhancement="_blank"/>

export const updateStatusReportStatusUsecase = {
  "schemaVersion": "2026-06-26",
  "artifactType": "usecase",
  "artifactId": "updateStatusReportStatus",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbUsecase",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "usecaseId": "updateStatusReportStatus",
    "ports": [
      "StatusReport"
    ],
    "functions": [
      {
        "functionName": "updateStatusReportStatus",
        "inputTypeName": "UpdateStatusReportStatusInput",
        "outputTypeName": "UpdateStatusReportStatusOutput",
        "input": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.statusReportId",
            "description": "Identifier of the status report whose lifecycle status is being updated"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport",
            "fieldRef": "StatusReport.status",
            "description": "Target lifecycle status for the report: reviewed after PM review, or shared when releasing to the client"
          }
        ],
        "output": [
          {
            "name": "statusReportId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "projectId",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "status",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          },
          {
            "name": "reviewedAt",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "sharedAt",
            "type": "string",
            "required": false,
            "ofEntity": "StatusReport"
          },
          {
            "name": "updatedAt",
            "type": "string",
            "required": true,
            "ofEntity": "StatusReport"
          }
        ],
        "ports": [
          "StatusReport"
        ],
        "rulesApplied": [
          "pmControlsStatusReportLifecycle"
        ],
        "transactional": true,
        "steps": [
          "1. Resolve statusReportId from the route parameter and status from user input.",
          "2. Load the StatusReport aggregate from the StatusReport port by statusReportId; if not found, throw a validation error 'StatusReport not found'.",
          "3. Apply rule pmControlsStatusReportLifecycle: verify that the current actor's role (from ctx.sessionContext) is 'project_manager'; if not, throw a validation error 'Only the project manager can update status report lifecycle status' with ruleId pmControlsStatusReportLifecycle.",
          "4. Validate the lifecycle transition: allowed transitions are draft->reviewed and reviewed->shared. If the current status does not permit the requested target status, throw a validation error 'Invalid status transition from {currentStatus} to {targetStatus}' with ruleId pmControlsStatusReportLifecycle.",
          "5. Resolve server-side timestamps via ctx.clock: set updatedAt to now. If target status is 'reviewed', set reviewedAt to now (preserve sharedAt as null). If target status is 'shared', set sharedAt to now (preserve reviewedAt if already set).",
          "6. Mutate the StatusReport aggregate: set status, updatedAt, and the conditional timestamp fields.",
          "7. Save the StatusReport aggregate through its port inside the transaction (ctx.data transaction wrapper).",
          "8. Return the output object with statusReportId, projectId, status, reviewedAt, sharedAt, and updatedAt from the saved aggregate."
        ],
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
        }
      }
    ],
    "mdmRefs": []
  }
} as const;

export default updateStatusReportStatusUsecase;

export const pipeline = [
  {
    "id": "updateStatusReportStatus__applicationUsecase",
    "type": "applicationUsecase",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReportStatus.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReportStatus.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.d.ts",
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/applicationUsecase.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
