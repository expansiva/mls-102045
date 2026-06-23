/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/propertyDetails.defs.ts" enhancement="_blank"/>

export const definition = [
  {
    "commandName": "obterImovel",
    "purpose": "Carregar detalhes completos do imóvel.",
    "kind": "query",
    "input": [
      {
        "name": "propertyId",
        "type": "PropertyId",
        "required": true
      }
    ],
    "output": [
      {
        "name": "propertyId",
        "type": "PropertyId"
      },
      {
        "name": "title",
        "type": "string"
      },
      {
        "name": "address",
        "type": "string"
      },
      {
        "name": "price",
        "type": "number"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "description",
        "type": "string"
      },
      {
        "name": "features",
        "type": "string"
      },
      {
        "name": "bedrooms",
        "type": "number"
      },
      {
        "name": "bathrooms",
        "type": "number"
      },
      {
        "name": "area",
        "type": "number"
      }
    ],
    "readsEntities": [
      "Property"
    ],
    "writesEntities": [],
    "readsTables": [],
    "writesTables": [],
    "usecaseRefs": [
      "obterImovel"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "rulePropertyStatusLifecycle"
    ]
  },
  {
    "commandName": "atualizarImovel",
    "purpose": "Salvar atualizações do imóvel.",
    "kind": "command",
    "input": [
      {
        "name": "propertyId",
        "type": "PropertyId",
        "required": true
      },
      {
        "name": "title",
        "type": "string",
        "required": false
      },
      {
        "name": "address",
        "type": "string",
        "required": false
      },
      {
        "name": "price",
        "type": "number",
        "required": false
      },
      {
        "name": "status",
        "type": "string",
        "required": false
      },
      {
        "name": "description",
        "type": "string",
        "required": false
      },
      {
        "name": "features",
        "type": "string",
        "required": false
      },
      {
        "name": "bedrooms",
        "type": "number",
        "required": false
      },
      {
        "name": "bathrooms",
        "type": "number",
        "required": false
      },
      {
        "name": "area",
        "type": "number",
        "required": false
      }
    ],
    "output": [
      {
        "name": "propertyId",
        "type": "PropertyId"
      },
      {
        "name": "status",
        "type": "string"
      },
      {
        "name": "updatedAt",
        "type": "date"
      }
    ],
    "readsEntities": [
      "Property"
    ],
    "writesEntities": [
      "Property"
    ],
    "readsTables": [],
    "writesTables": [
      "property_status_metrics",
      "broker_activity_metrics"
    ],
    "usecaseRefs": [
      "atualizarImovel"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "rulePropertyStatusLifecycle"
    ]
  },
  {
    "commandName": "solicitarDescricaoImovel",
    "purpose": "Solicitar geração de descrição via IA.",
    "kind": "command",
    "input": [
      {
        "name": "propertyId",
        "type": "PropertyId",
        "required": true
      },
      {
        "name": "bullets",
        "type": "string",
        "required": true
      }
    ],
    "output": [
      {
        "name": "requestId",
        "type": "PropertyDescriptionRequestId"
      },
      {
        "name": "reviewStatus",
        "type": "string"
      },
      {
        "name": "createdAt",
        "type": "date"
      }
    ],
    "readsEntities": [
      "Property"
    ],
    "writesEntities": [
      "PropertyDescriptionRequest"
    ],
    "readsTables": [],
    "writesTables": [
      "property_description_request",
      "broker_activity_metrics"
    ],
    "usecaseRefs": [
      "solicitarDescricaoImovel"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleAiHumanReview"
    ]
  },
  {
    "commandName": "listarSolicitacoesDescricaoImovel",
    "purpose": "Listar histórico de solicitações de descrição do imóvel.",
    "kind": "query",
    "input": [
      {
        "name": "propertyId",
        "type": "PropertyId",
        "required": true
      }
    ],
    "output": [
      {
        "name": "requests",
        "type": "PropertyDescriptionRequest[]"
      }
    ],
    "readsEntities": [
      "PropertyDescriptionRequest"
    ],
    "writesEntities": [],
    "readsTables": [
      "property_description_request"
    ],
    "writesTables": [],
    "usecaseRefs": [
      "listarSolicitacoesDescricaoImovel"
    ],
    "layerContract": {
      "controllerLayer": "layer_2_controllers",
      "mustCallLayer": "layer_3_usecases",
      "directTableAccessForbidden": true
    },
    "rulesApplied": [
      "ruleAiHumanReview"
    ]
  }
];

export const pipeline = [
  {
    "id": "propertyDetails__l2_contract",
    "type": "l2_contract",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/contracts/propertyDetails.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/contracts/propertyDetails.defs.ts",
    "dependsFiles": [],
    "dependsOn": [],
    "skills": [
      "_102020_/l2/agentMaterializeSolution/skills/genContract.ts"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
