/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.defs.ts" enhancement="_blank"/>

export const materialUsageDomainEntity = {
  "schemaVersion": "2026-06-26",
  "artifactType": "domainEntity",
  "artifactId": "MaterialUsage",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbDomainEntity",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "MaterialUsage",
    "title": "Material Usage",
    "fields": [
      {
        "fieldId": "materialUsageId",
        "type": "uuid",
        "required": true,
        "description": "Primary identifier for the material usage record."
      },
      {
        "fieldId": "projectId",
        "type": "uuid",
        "required": true,
        "description": "Reference to the project this material usage was recorded against."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Lifecycle status of the material usage record.",
        "enum": [
          "posted",
          "voided"
        ]
      },
      {
        "fieldId": "materialName",
        "type": "string",
        "required": true,
        "description": "Name or description of the material consumed."
      },
      {
        "fieldId": "quantity",
        "type": "number",
        "required": true,
        "description": "Quantity of the material consumed."
      },
      {
        "fieldId": "unit",
        "type": "string",
        "required": true,
        "description": "Unit of measure for the material quantity.",
        "enum": [
          "kg",
          "liter",
          "meter",
          "unit",
          "bag",
          "box"
        ]
      },
      {
        "fieldId": "unitCost",
        "type": "money",
        "required": true,
        "description": "Cost per unit of the material at the time of usage."
      },
      {
        "fieldId": "costCode",
        "type": "string",
        "required": false,
        "description": "Internal cost classification code used for job costing detail."
      },
      {
        "fieldId": "usageDate",
        "type": "date",
        "required": true,
        "description": "Date the material was consumed on the project site."
      },
      {
        "fieldId": "recordedBy",
        "type": "string",
        "required": false,
        "description": "Name or identifier of the person who recorded the material usage."
      },
      {
        "fieldId": "voidedAt",
        "type": "datetime",
        "required": false,
        "description": "Timestamp when the material usage record was voided."
      },
      {
        "fieldId": "voidedReason",
        "type": "text",
        "required": false,
        "description": "Reason provided when voiding the material usage record."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Timestamp when the material usage record was created."
      }
    ],
    "valueObjects": [],
    "statusEnum": [
      "posted",
      "voided"
    ],
    "invariants": []
  }
} as const;

export default materialUsageDomainEntity;

export const pipeline = [
  {
    "id": "materialUsage__domainEntity",
    "type": "domainEntity",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/domainEntity.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
