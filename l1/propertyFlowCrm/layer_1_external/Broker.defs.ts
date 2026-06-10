/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/Broker.defs.ts" enhancement="_blank"/>

export const BrokerMdm = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmEntity",
  "artifactId": "Broker",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdmEntity",
    "entity": "Broker",
    "ownership": "mdmOwned",
    "generateTable": false,
    "moduleId": "propertyFlowCrm",
    "domainId": "broker",
    "infrastructureModuleRef": "102034",
    "domainTitle": "Corretor",
    "sourceOfTruth": "Shared MDM platform (project 102034)",
    "governanceRules": [
      "ruleBrokerRequiredFields",
      "ruleBrokerAssignment"
    ],
    "title": "Corretor",
    "description": "Representa um corretor de imóveis que opera no sistema, com dados pessoais e área de atuação.",
    "fields": [
      {
        "fieldId": "brokerId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do corretor."
      },
      {
        "fieldId": "fullName",
        "type": "string",
        "required": true,
        "description": "Nome completo do corretor."
      },
      {
        "fieldId": "email",
        "type": "email",
        "required": true,
        "description": "E-mail do corretor."
      },
      {
        "fieldId": "phone",
        "type": "string",
        "required": true,
        "description": "Telefone de contato."
      },
      {
        "fieldId": "creci",
        "type": "string",
        "required": false,
        "description": "Número do registro CRECI."
      },
      {
        "fieldId": "status",
        "type": "enum",
        "required": true,
        "description": "Status do corretor (ativo, inativo)."
      },
      {
        "fieldId": "role",
        "type": "enum",
        "required": true,
        "description": "Perfil de acesso (corretor, gerente, administrador)."
      },
      {
        "fieldId": "specializations",
        "type": "array",
        "required": false,
        "description": "Especializações do corretor (residencial, comercial, luxo, etc.)."
      },
      {
        "fieldId": "workingAreas",
        "type": "array",
        "required": false,
        "description": "Bairros ou regiões de atuação."
      },
      {
        "fieldId": "photoUrl",
        "type": "string",
        "required": false,
        "description": "URL da foto do corretor."
      },
      {
        "fieldId": "hireDate",
        "type": "date",
        "required": false,
        "description": "Data de contratação."
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

export default BrokerMdm;
