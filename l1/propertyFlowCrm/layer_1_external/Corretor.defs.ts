/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/Corretor.defs.ts" enhancement="_blank"/>

export const CorretorMdm = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmEntity",
  "artifactId": "Corretor",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdmEntity",
    "entity": "Corretor",
    "ownership": "mdmOwned",
    "generateTable": false,
    "moduleId": "propertyFlowCrm",
    "domainId": "broker",
    "infrastructureModuleRef": "102034",
    "domainTitle": "Corretor",
    "sourceOfTruth": "102034",
    "governanceRules": [],
    "title": "Corretor",
    "description": "Cadastro de corretores que atuam no CRM.",
    "fields": [
      {
        "fieldId": "corretorId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do corretor."
      },
      {
        "fieldId": "nome",
        "type": "string",
        "required": true,
        "description": "Nome do corretor."
      },
      {
        "fieldId": "email",
        "type": "string",
        "required": true,
        "description": "E-mail corporativo do corretor."
      },
      {
        "fieldId": "telefone",
        "type": "string",
        "required": false,
        "description": "Telefone de contato do corretor."
      },
      {
        "fieldId": "creci",
        "type": "string",
        "required": false,
        "description": "Registro profissional do corretor."
      },
      {
        "fieldId": "ativo",
        "type": "boolean",
        "required": true,
        "description": "Indica se o corretor está ativo."
      },
      {
        "fieldId": "criadoEm",
        "type": "datetime",
        "required": true,
        "description": "Data de criação do corretor."
      },
      {
        "fieldId": "atualizadoEm",
        "type": "datetime",
        "required": true,
        "description": "Data da última atualização do corretor."
      }
    ]
  }
} as const;

export default CorretorMdm;
