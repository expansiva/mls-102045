/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/obterVisita.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "obterVisita",
  "title": "Obter visita",
  "purpose": "Recuperar detalhes de uma visita",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [
    "visitEntity"
  ],
  "outputEntities": [
    "visitEntity"
  ],
  "readsTables": [
    {
      "tableName": "visit",
      "ownership": "mdmOwned"
    }
  ],
  "writesTables": [],
  "rulesApplied": [
    "ruleVisitStatus"
  ],
  "entityRefs": [
    "visitEntity"
  ],
  "commands": [
    {
      "commandId": "obterVisita",
      "input": [
        {
          "name": "visitId",
          "type": "string",
          "required": true
        }
      ],
      "output": [
        {
          "name": "visit",
          "type": "visitEntity"
        }
      ]
    }
  ],
  "pendingQuestions": [
    "Qual é o identificador de entrada esperado para recuperar a visita (ex.: visitId)?",
    "Quais campos compõem o visitEntity retornado?"
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "obterVisita__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterVisita.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/obterVisita.defs.ts",
    "dependsFiles": [
      "_102045_/l1/propertyFlowCrm/layer_4_entities/visitEntity.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/skills/layer_3.md"
    ],
    "rulesPath": "_102045_/l5/propertyFlowCrm/rules.defs.ts",
    "rulesApplied": [
      "ruleVisitStatus"
    ],
    "agent": "agentMaterializeGen"
  }
] as const;
