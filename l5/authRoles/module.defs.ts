/// <mls fileReference="_102045_/l5/authRoles/module.defs.ts" enhancement="_blank"/>

export const authRolesModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "horizontalModule",
  "artifactId": "authRoles",
  "moduleName": "authRoles",
  "status": "draft",
  "source": {
    "agentName": "agentPlanHorizontals",
    "stepId": 13,
    "planId": "plan-horizontals"
  },
  "data": {
    "kind": "horizontal",
    "moduleId": "authRoles",
    "horizontalModuleId": "authRoles",
    "plannedByModule": "propertyFlowCrm",
    "referencesExisting": false,
    "module": {
      "horizontalModuleId": "authRoles",
      "priority": "now",
      "reason": "Existem atores distintos (admin da imobiliária e corretor) com responsabilidades diferentes, exigindo autenticação e autorização por papéis para o MVP coerente.",
      "reusedOntologyRefs": [
        "UserAccount",
        "Role",
        "Permission"
      ],
      "consumedByArtifacts": [
        "dashboardBasicoPage",
        "imoveisCrudPage",
        "leadsPipelinePage",
        "agendadorVisitasPage",
        "rastreadorNegociosPage",
        "corretoresPage",
        "movimentarLeadWorkflow",
        "agendarVisitaWorkflow",
        "evoluirNegocioWorkflow"
      ],
      "roles": [
        "adminImobiliaria",
        "corretor"
      ]
    }
  }
} as const;

export default authRolesModulePlan;
