/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/Negocio.defs.ts" enhancement="_blank"/>

export const NegocioMdm = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmEntity",
  "artifactId": "Negocio",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdmEntity",
    "entity": "Negocio",
    "ownership": "mdmOwned",
    "generateTable": false,
    "moduleId": "propertyFlowCrm",
    "domainId": "dealProposal",
    "infrastructureModuleRef": "102034",
    "domainTitle": "Negócio/Proposta",
    "sourceOfTruth": "102034",
    "governanceRules": [
      "negocioRequiresLinks",
      "dashboardMetricsRefresh"
    ],
    "title": "Negócio/Proposta",
    "description": "Proposta comercial vinculada a imóvel e lead.",
    "fields": [
      {
        "fieldId": "negocioId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do negócio/proposta."
      },
      {
        "fieldId": "imovelId",
        "type": "uuid",
        "required": true,
        "description": "Imóvel associado à proposta."
      },
      {
        "fieldId": "leadId",
        "type": "uuid",
        "required": true,
        "description": "Lead associado à proposta."
      },
      {
        "fieldId": "valor",
        "type": "money",
        "required": true,
        "description": "Valor da proposta."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Status da proposta: em negociacao, proposta enviada, fechado, perdido."
      },
      {
        "fieldId": "corretorId",
        "type": "uuid",
        "required": true,
        "description": "Corretor responsável pela proposta."
      },
      {
        "fieldId": "dataProposta",
        "type": "date",
        "required": true,
        "description": "Data de emissão da proposta."
      },
      {
        "fieldId": "observacoes",
        "type": "string",
        "required": false,
        "description": "Observações da negociação."
      },
      {
        "fieldId": "criadoEm",
        "type": "datetime",
        "required": true,
        "description": "Data de criação da proposta."
      },
      {
        "fieldId": "atualizadoEm",
        "type": "datetime",
        "required": true,
        "description": "Data da última atualização da proposta."
      }
    ]
  }
} as const;

export default NegocioMdm;
