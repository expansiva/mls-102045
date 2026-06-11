/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/leadEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "leadEntity",
  "title": "Lead",
  "purpose": "Gestão de leads no pipeline, criação, movimentação no Kanban e qualificação por IA.",
  "layer": "layer_4_entities",
  "sourceTables": [
    {
      "tableName": "lead",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "lead_pipeline_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Lead",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/Lead.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "leadPipelineMetrics",
      "tableName": "lead_pipeline_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/leadPipelineMetrics.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "update"
  ],
  "rulesApplied": [
    "leadPipelineStages",
    "kanbanMoveUpdatesStatus"
  ],
  "usecaseRefs": [
    "criarLead",
    "moverLeadKanban",
    "classificarLeadIa",
    "visualizarDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/LeadEntity.ts",
    "className": "LeadEntity",
    "contractName": "ILeadEntity"
  }
} as const;

export default entity;
