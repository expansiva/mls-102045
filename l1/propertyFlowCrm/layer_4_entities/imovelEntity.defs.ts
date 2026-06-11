/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/imovelEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "imovelEntity",
  "title": "Imóvel",
  "purpose": "Gestão completa de imóveis, incluindo criação, edição, arquivamento, busca e geração de descrição por IA.",
  "layer": "layer_4_entities",
  "sourceTables": [
    {
      "tableName": "imovel",
      "ownership": "mdmOwned"
    },
    {
      "tableName": "imovel_inventory_metrics",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "mdm",
      "moduleRef": "102034",
      "entity": "Imovel",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/Imovel.defs.ts"
    },
    {
      "kind": "metricTable",
      "metricTableId": "imovelInventoryMetrics",
      "tableName": "imovel_inventory_metrics",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/imovelInventoryMetrics.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "update"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "criarImovel",
    "editarImovel",
    "arquivarImovel",
    "buscarImovel",
    "agendarVisita",
    "gerarDescricaoImovelIa",
    "visualizarDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/ImovelEntity.ts",
    "className": "ImovelEntity",
    "contractName": "IImovelEntity"
  }
} as const;

export default entity;
