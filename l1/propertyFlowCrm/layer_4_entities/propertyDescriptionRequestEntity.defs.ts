/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_4_entities/propertyDescriptionRequestEntity.defs.ts" enhancement="_blank"/>

export const entity = {
  "entityId": "propertyDescriptionRequestEntity",
  "title": "Solicitação de Descrição do Imóvel",
  "purpose": "Solicitações de geração de descrição via IA",
  "layer": "layer_4_entities",
  "fields": [
    {
      "fieldId": "id",
      "type": "uuid",
      "required": true,
      "description": "Identificador único da solicitação de descrição."
    },
    {
      "fieldId": "propertyId",
      "type": "Property",
      "required": true,
      "description": "Imóvel alvo para o qual a descrição será gerada."
    },
    {
      "fieldId": "bullets",
      "type": "text",
      "required": true,
      "description": "Lista de pontos/bullets informados para compor a descrição."
    },
    {
      "fieldId": "aiDescription",
      "type": "text",
      "required": false,
      "description": "Descrição gerada por IA a partir dos bullets."
    },
    {
      "fieldId": "humanReviewNotes",
      "type": "text",
      "required": false,
      "description": "Observações e ajustes realizados na revisão humana."
    },
    {
      "fieldId": "reviewStatus",
      "type": "string",
      "required": true,
      "description": "Estado da revisão humana da descrição gerada.",
      "enum": [
        "pendente",
        "aprovada",
        "rejeitada"
      ]
    },
    {
      "fieldId": "createdAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora de criação da solicitação."
    },
    {
      "fieldId": "updatedAt",
      "type": "datetime",
      "required": true,
      "description": "Data e hora da última atualização da solicitação."
    }
  ],
  "sourceTables": [
    {
      "tableName": "property_description_request",
      "ownership": "moduleOwned"
    }
  ],
  "storage": [
    {
      "kind": "moduleTable",
      "tableId": "propertyDescriptionRequest",
      "tableName": "property_description_request",
      "fileRef": "_102045_/l1/propertyFlowCrm/layer_1_external/propertyDescriptionRequest.defs.ts"
    }
  ],
  "allowedOperations": [
    "create",
    "read",
    "list"
  ],
  "rulesApplied": [],
  "usecaseRefs": [
    "listarSolicitacoesDescricaoImovel",
    "obterSolicitacaoDescricaoImovel",
    "solicitarDescricaoImovel",
    "atualizarMetricasDashboard"
  ],
  "materialization": {
    "fileName": "layer_4_entities/PropertyDescriptionRequestEntity.ts",
    "className": "PropertyDescriptionRequestEntity",
    "contractName": "IPropertyDescriptionRequestEntity"
  }
} as const;

export default entity;

export const pipeline = [
  {
    "id": "propertyDescriptionRequestEntity__layer_4_entities",
    "type": "layer_4_entities",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/propertyDescriptionRequestEntity.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_4_entities/propertyDescriptionRequestEntity.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_1_external/propertyDescriptionRequest.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_4.md",
      "_102034_.d.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
