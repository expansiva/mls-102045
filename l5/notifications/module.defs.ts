/// <mls fileReference="_102045_/l5/notifications/module.defs.ts" enhancement="_blank"/>

export const notificationsModulePlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "horizontalModule",
  "artifactId": "notifications",
  "moduleName": "notifications",
  "status": "draft",
  "source": {
    "agentName": "agentPlanHorizontals",
    "stepId": 15,
    "planId": "plan-horizontals"
  },
  "data": {
    "kind": "horizontal",
    "moduleId": "notifications",
    "horizontalModuleId": "notifications",
    "plannedByModule": "propertyFlowCrm",
    "referencesExisting": false,
    "module": {
      "horizontalModuleId": "notifications",
      "priority": "soon",
      "reason": "Há agente de lembrete de visitas e necessidades de alertas/reminders, exigindo envio de notificações externas.",
      "reusedOntologyRefs": [
        "NotificationTemplate",
        "NotificationDelivery",
        "NotificationPreference"
      ],
      "consumedByArtifacts": [
        "visitReminderAgent",
        "visitSchedulingWorkflow",
        "visitSchedulerPage"
      ]
    }
  }
} as const;

export default notificationsModulePlan;
