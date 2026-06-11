/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/Visita.defs.ts" enhancement="_blank"/>

export const VisitaMdm = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmEntity",
  "artifactId": "Visita",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdmEntity",
    "entity": "Visita",
    "ownership": "mdmOwned",
    "generateTable": false,
    "moduleId": "propertyFlowCrm",
    "domainId": "visitAppointment",
    "infrastructureModuleRef": "102034",
    "domainTitle": "Visita/Agendamento",
    "sourceOfTruth": "102034",
    "governanceRules": [
      "visitaRequiresLinks",
      "imovelActiveStatus"
    ],
    "title": "Visita/Agendamento",
    "description": "Agendamento de visita vinculado a imóvel e lead.",
    "fields": [
      {
        "fieldId": "visitaId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único da visita."
      },
      {
        "fieldId": "imovelId",
        "type": "uuid",
        "required": true,
        "description": "Imóvel associado à visita."
      },
      {
        "fieldId": "leadId",
        "type": "uuid",
        "required": true,
        "description": "Lead associado à visita."
      },
      {
        "fieldId": "corretorId",
        "type": "uuid",
        "required": true,
        "description": "Corretor responsável pela visita."
      },
      {
        "fieldId": "dataHora",
        "type": "datetime",
        "required": true,
        "description": "Data e hora agendada para a visita."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Status da visita: agendada, concluida, cancelada."
      },
      {
        "fieldId": "observacoes",
        "type": "string",
        "required": false,
        "description": "Observações adicionais da visita."
      },
      {
        "fieldId": "criadoEm",
        "type": "datetime",
        "required": true,
        "description": "Data de criação do agendamento."
      },
      {
        "fieldId": "atualizadoEm",
        "type": "datetime",
        "required": true,
        "description": "Data da última atualização do agendamento."
      }
    ]
  }
} as const;

export default VisitaMdm;
