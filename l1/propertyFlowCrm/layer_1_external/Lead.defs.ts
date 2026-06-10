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
    "domainId": "lead",
    "infrastructureModuleRef": "102034",
    "domainTitle": "Lead/Cliente",
    "sourceOfTruth": "Shared MDM platform (project 102034)",
    "governanceRules": [
      "ruleLeadRequiredFields",
      "ruleLeadPipelineTransition",
      "ruleBrokerAssignment"
    ],
    "title": "Lead/Cliente",
    "description": "Representa um potencial cliente interessado em imóveis, com informações de contato e histórico de interações.",
    "fields": [
      {
        "fieldId": "leadId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do lead."
      },
      {
        "fieldId": "fullName",
        "type": "string",
        "required": true,
        "description": "Nome completo do lead."
      },
      {
        "fieldId": "email",
        "type": "email",
        "required": false,
        "description": "E-mail de contato."
      },
      {
        "fieldId": "phone",
        "type": "string",
        "required": true,
        "description": "Telefone de contato."
      },
      {
        "fieldId": "source",
        "type": "enum",
        "required": false,
        "description": "Origem do lead (site, indicação, portal, redes sociais, etc.)."
      },
      {
        "fieldId": "pipelineStage",
        "type": "enum",
        "required": true,
        "description": "Etapa atual no pipeline (novo, em contato, qualificado, negociando, convertido, perdido)."
      },
      {
        "fieldId": "temperature",
        "type": "enum",
        "required": false,
        "description": "Classificação de temperatura do lead (quente, morno, frio)."
      },
      {
        "fieldId": "interestType",
        "type": "enum",
        "required": false,
        "description": "Tipo de interesse (compra, locação, ambos)."
      },
      {
        "fieldId": "preferredPropertyType",
        "type": "enum",
        "required": false,
        "description": "Tipo de imóvel de preferência."
      },
      {
        "fieldId": "budgetMin",
        "type": "decimal",
        "required": false,
        "description": "Orçamento mínimo do lead."
      },
      {
        "fieldId": "budgetMax",
        "type": "decimal",
        "required": false,
        "description": "Orçamento máximo do lead."
      },
      {
        "fieldId": "preferredNeighborhoods",
        "type": "array",
        "required": false,
        "description": "Bairros de preferência."
      },
      {
        "fieldId": "notes",
        "type": "text",
        "required": false,
        "description": "Anotações e observações sobre o lead."
      },
      {
        "fieldId": "assignedBrokerId",
        "type": "uuid",
        "required": true,
        "description": "ID do corretor responsável pelo lead."
      },
      {
        "fieldId": "lastContactAt",
        "type": "datetime",
        "required": false,
        "description": "Data do último contato."
      },
      {
        "fieldId": "nextFollowUpAt",
        "type": "datetime",
        "required": false,
        "description": "Data sugerida para próximo follow-up."
      },
      {
        "fieldId": "suggestedFollowUpMessage",
        "type": "text",
        "required": false,
        "description": "Mensagem de follow-up sugerida pela IA."
      },
      {
        "fieldId": "createdAt",
        "type": "datetime",
        "required": true,
        "description": "Data de criação do registro."
      },
      {
        "fieldId": "updatedAt",
        "type": "datetime",
        "required": true,
        "description": "Data da última atualização."
      }
    ]
  }
} as const;

export default LeadMdm;
