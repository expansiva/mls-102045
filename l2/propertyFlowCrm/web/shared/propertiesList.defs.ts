/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/shared/propertiesList.defs.ts" enhancement="_blank"/>

export const definition = {
  "bffCommands": [
    {
      "commandName": "listarImoveis",
      "purpose": "Carregar lista e filtros de imóveis.",
      "kind": "query",
      "input": [
        {
          "name": "status",
          "type": "string",
          "required": false
        },
        {
          "name": "city",
          "type": "string",
          "required": false
        },
        {
          "name": "neighborhood",
          "type": "string",
          "required": false
        },
        {
          "name": "page",
          "type": "number",
          "required": false
        },
        {
          "name": "pageSize",
          "type": "number",
          "required": false
        }
      ],
      "output": [
        {
          "name": "propertyId",
          "type": "string"
        },
        {
          "name": "title",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        },
        {
          "name": "price",
          "type": "number"
        },
        {
          "name": "city",
          "type": "string"
        },
        {
          "name": "neighborhood",
          "type": "string"
        }
      ],
      "readsEntities": [
        "propertyEntity"
      ],
      "writesEntities": [],
      "readsTables": [],
      "writesTables": [],
      "usecaseRefs": [
        "listarImoveis"
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
      "commandName": "criarImovel",
      "purpose": "Cadastrar novo imóvel a partir do formulário.",
      "kind": "command",
      "input": [
        {
          "name": "title",
          "type": "string",
          "required": true
        },
        {
          "name": "propertyType",
          "type": "string",
          "required": true
        },
        {
          "name": "price",
          "type": "number",
          "required": true
        },
        {
          "name": "city",
          "type": "string",
          "required": true
        },
        {
          "name": "neighborhood",
          "type": "string",
          "required": true
        },
        {
          "name": "status",
          "type": "string",
          "required": true
        },
        {
          "name": "brokerId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "propertyId",
          "type": "string"
        },
        {
          "name": "status",
          "type": "string"
        }
      ],
      "readsEntities": [],
      "writesEntities": [
        "propertyEntity",
        "dashboardMetricEntity"
      ],
      "readsTables": [],
      "writesTables": [
        "property_status_metrics",
        "broker_activity_metrics"
      ],
      "usecaseRefs": [
        "criarImovel"
      ],
      "layerContract": {
        "controllerLayer": "layer_2_controllers",
        "mustCallLayer": "layer_3_usecases",
        "directTableAccessForbidden": true
      },
      "rulesApplied": [
        "rulePropertyStatusLifecycle",
        "ruleMetricRefresh"
      ]
    }
  ],
  "navigationRefs": [
    {
      "direction": "outbound",
      "pageId": "propertyDetails",
      "trigger": "selecionar imóvel",
      "description": "Abrir detalhes do imóvel selecionado na lista."
    }
  ]
};

export const pipeline = [
  {
    "id": "propertiesList__l2_shared",
    "type": "l2_shared",
    "outputPath": "_102045_/l2/propertyFlowCrm/web/shared/propertiesList.ts",
    "defPath": "_102045_/l2/propertyFlowCrm/web/shared/propertiesList.defs.ts",
    "dependsFiles": [
      "_102045_/l2/propertyFlowCrm/web/contracts/propertiesList.ts"
    ],
    "dependsOn": [],
    "skills": [
      "/_102020_/l2/agentMaterializeSolution/skills/genPageShared.ts"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "rulePropertyStatusLifecycle",
      "ruleMetricRefresh"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
