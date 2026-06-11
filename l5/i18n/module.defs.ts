/// <mls fileReference="_102045_/l5/i18n/module.defs.ts" enhancement="_blank"/>

export const i18nModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "horizontalModule",
  "artifactId": "i18n",
  "moduleName": "i18n",
  "status": "draft",
  "source": {
    "agentName": "agentPlanHorizontals",
    "stepId": 13,
    "planId": "plan-horizontals"
  },
  "data": {
    "kind": "horizontal",
    "moduleId": "i18n",
    "horizontalModuleId": "i18n",
    "plannedByModule": "propertyFlowCrm",
    "referencesExisting": false,
    "module": {
      "horizontalModuleId": "i18n",
      "priority": "now",
      "reason": "A solução declara interface em pt-BR e en e há capability de internacionalização para o MVP.",
      "reusedOntologyRefs": [],
      "consumedByArtifacts": [
        "dashboardBasicoPage",
        "imoveisCrudPage",
        "leadsPipelinePage",
        "agendadorVisitasPage",
        "rastreadorNegociosPage",
        "corretoresPage"
      ],
      "languages": [
        "pt-BR",
        "en"
      ]
    }
  }
} as const;

export default i18nModulePlan;
