/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_3_usecases/listarVisitas.defs.ts" enhancement="_blank"/>

export const useCase = {
  "usecaseId": "listarVisitas",
  "title": "Listar visitas",
  "purpose": "Listagem de visitas agendadas",
  "actor": "corretor",
  "layer": "layer_3_usecases",
  "inputEntities": [],
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
      "commandId": "listarVisitas",
      "input": [],
      "output": [
        {
          "name": "visitas",
          "type": "visitEntity[]"
        }
      ]
    }
  ]
} as const;

export default useCase;

export const pipeline = [
  {
    "id": "listarVisitas__layer_3_usecases",
    "type": "layer_3_usecases",
    "outputPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarVisitas.ts",
    "defPath": "_102045_/l1/propertyFlowCrm/layer_3_usecases/listarVisitas.defs.ts",
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
