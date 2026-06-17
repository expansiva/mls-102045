/// <mls fileReference="_102045_/l5/propertyFlowCrm/ontology/PropertyDescriptionRequest.defs.ts" enhancement="_blank"/>

export const PropertyDescriptionRequestEntityDefinition = {
  "schemaVersion": "2026-06-06",
  "artifactType": "ontologyEntity",
  "artifactId": "PropertyDescriptionRequest",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanEntityDefinition",
    "stepId": 41,
    "planId": ""
  },
  "data": {
    "entityDefinition": {
      "entityId": "PropertyDescriptionRequest",
      "title": "Solicitação de descrição do imóvel",
      "description": "Comando de geração de descrição com base em bullets informados.",
      "ownership": "moduleOwned",
      "kind": "usecaseEntity",
      "fields": [
        {
          "fieldId": "id",
          "type": "uuid",
          "required": true,
          "description": "Identificador único da solicitação de descrição."
        },
        {
          "fieldId": "propertyId",
          "type": "Property",
          "required": true,
          "description": "Imóvel alvo para o qual a descrição será gerada."
        },
        {
          "fieldId": "bullets",
          "type": "text",
          "required": true,
          "description": "Lista de pontos/bullets informados para compor a descrição."
        },
        {
          "fieldId": "aiDescription",
          "type": "text",
          "required": false,
          "description": "Descrição gerada por IA a partir dos bullets."
        },
        {
          "fieldId": "humanReviewNotes",
          "type": "text",
          "required": false,
          "description": "Observações e ajustes realizados na revisão humana."
        },
        {
          "fieldId": "reviewStatus",
          "type": "string",
          "required": true,
          "description": "Estado da revisão humana da descrição gerada.",
          "enum": [
            "pendente",
            "aprovada",
            "rejeitada"
          ]
        },
        {
          "fieldId": "createdAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora de criação da solicitação."
        },
        {
          "fieldId": "updatedAt",
          "type": "datetime",
          "required": true,
          "description": "Data e hora da última atualização da solicitação."
        }
      ],
      "rulesApplied": [
        "ruleAiHumanReview"
      ]
    }
  }
} as const;

export default PropertyDescriptionRequestEntityDefinition;
