/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/Lead.defs.ts" enhancement="_blank"/>

export const LeadMdm = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmEntity",
  "artifactId": "Lead",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdmEntity",
    "entity": "Lead",
    "ownership": "mdmOwned",
    "generateTable": false,
    "moduleId": "propertyFlowCrm",
    "domainId": "leadCustomer",
    "infrastructureModuleRef": "102034",
    "domainTitle": "Lead/Cliente",
    "sourceOfTruth": "102034",
    "governanceRules": [
      "leadPipelineStages",
      "kanbanMoveUpdatesStatus",
      "dashboardMetricsRefresh"
    ],
    "title": "Lead/Cliente",
    "description": "Lead ou cliente potencial no pipeline comercial.",
    "fields": [
      {
        "fieldId": "leadId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do lead."
      },
      {
        "fieldId": "nome",
        "type": "string",
        "required": true,
        "description": "Nome do lead/cliente."
      },
      {
        "fieldId": "email",
        "type": "string",
        "required": false,
        "description": "E-mail principal do lead."
      },
      {
        "fieldId": "telefone",
        "type": "string",
        "required": false,
        "description": "Telefone principal do lead."
      },
      {
        "fieldId": "origem",
        "type": "string",
        "required": false,
        "description": "Origem do lead (ex.: site, indicação)."
      },
      {
        "fieldId": "statusFunil",
        "type": "string",
        "required": true,
        "description": "Etapa do funil: Novo, Contato, Visita agendada, Proposta enviada, Fechado."
      },
      {
        "fieldId": "qualificacao",
        "type": "string",
        "required": false,
        "description": "Qualificação do lead: quente, morno, frio."
      },
      {
        "fieldId": "anotacoes",
        "type": "string",
        "required": false,
        "description": "Anotações do corretor sobre o lead."
      },
      {
        "fieldId": "sugestaoFollowUp",
        "type": "string",
        "required": false,
        "description": "Sugestão de mensagem de follow-up gerada por IA."
      },
      {
        "fieldId": "corretorResponsavelId",
        "type": "uuid",
        "required": false,
        "description": "Corretor responsável pelo lead."
      },
      {
        "fieldId": "criadoEm",
        "type": "datetime",
        "required": true,
        "description": "Data de criação do lead."
      },
      {
        "fieldId": "atualizadoEm",
        "type": "datetime",
        "required": true,
        "description": "Data da última atualização do lead."
      }
    ]
  }
} as const;

export default LeadMdm;
