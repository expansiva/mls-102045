/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/corretorEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "corretorEntity",
  "title": "Corretor",
  "purpose": "Gestão de corretores da imobiliária, incluindo cadastro, edição e controle de status.",
  "layer": "layer_4_entities",
  "sourceTables": [
    {
      "tableName": "corretor",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "corretor_status_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Corretor",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/Corretor.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "corretorStatusMetrics",
      "tableName": "corretor_status_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/corretorStatusMetrics.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "update"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "visualizarDashboard",
    "criarCorretor",
    "editarCorretor",
    "alterarStatusCorretor",
    "buscarCorretor"
  ],
  "materialization": {
    "fileName": "layer_4_entities/CorretorEntity.ts",
    "className": "CorretorEntity",
    "contractName": "ICorretorEntity"
  }
} as const;

export default entity;
