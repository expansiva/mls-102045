/// <mls fileReference="_102045_/l5/authRoles/module.defs.ts" enhancement="_blank"/>

export const authRolesModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "horizontalModule",
  "artifactId": "authRoles",
  "moduleName": "authRoles",
  "status": "draft",
  "source": {
    "agentName": "agentPlanHorizontals",
    "stepId": 15,
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
      "reason": "Há múltiplos atores (corretor, gestor, admin) exigindo controle de acesso por papéis, usando a infraestrutura de autenticação/RBAC da plataforma.",
      "reusedOntologyRefs": [
        "UserAccount",
        "Role",
        "Permission"
      ],
      "consumedByArtifacts": [
        "propertyCrudPage",
        "leadPipelinePage",
        "visitSchedulerPage",
        "dealTrackerPage",
        "dashboardPage",
        "adminDashboardPage"
      ],
      "roles": [
        "corretor",
        "gestor",
        "admin"
      ]
    }
  }
} as const;

export default authRolesModulePlan;
