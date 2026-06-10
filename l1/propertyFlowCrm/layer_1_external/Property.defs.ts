/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/Property.defs.ts" enhancement="_blank"/>

export const PropertyMdm = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmEntity",
  "artifactId": "Property",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdmEntity",
    "entity": "Property",
    "ownership": "mdmOwned",
    "generateTable": false,
    "moduleId": "propertyFlowCrm",
    "domainId": "property",
    "infrastructureModuleRef": "102034",
    "domainTitle": "Imóvel",
    "sourceOfTruth": "Shared MDM platform (project 102034)",
    "governanceRules": [
      "rulePropertyRequiredFields",
      "rulePropertyStatusTransition",
      "ruleVisitPropertyActive",
      "ruleDealPropertyActive"
    ],
    "title": "Imóvel",
    "description": "Representa um imóvel disponível para venda ou locação, com todas as suas características, localização e fotos.",
    "fields": [
      {
        "fieldId": "propertyId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do imóvel."
      },
      {
        "fieldId": "title",
        "type": "string",
        "required": true,
        "description": "Título do anúncio do imóvel."
      },
      {
        "fieldId": "description",
        "type": "text",
        "required": false,
        "description": "Descrição comercial detalhada do imóvel."
      },
      {
        "fieldId": "propertyType",
        "type": "enum",
        "required": true,
        "description": "Tipo do imóvel (apartamento, casa, terreno, comercial, etc.)."
      },
      {
        "fieldId": "transactionType",
        "type": "enum",
        "required": true,
        "description": "Tipo de transação (venda, locação, venda e locação)."
      },
      {
        "fieldId": "price",
        "type": "decimal",
        "required": true,
        "description": "Preço de venda ou valor do aluguel."
      },
      {
        "fieldId": "status",
        "type": "enum",
        "required": true,
        "description": "Status atual do imóvel (ativo, inativo, vendido, alugado, reservado)."
      },
      {
        "fieldId": "addressStreet",
        "type": "string",
        "required": true,
        "description": "Logradouro do endereço."
      },
      {
        "fieldId": "addressNumber",
        "type": "string",
        "required": false,
        "description": "Número do endereço."
      },
      {
        "fieldId": "addressComplement",
        "type": "string",
        "required": false,
        "description": "Complemento do endereço."
      },
      {
        "fieldId": "addressNeighborhood",
        "type": "string",
        "required": true,
        "description": "Bairro do imóvel."
      },
      {
        "fieldId": "addressCity",
        "type": "string",
        "required": true,
        "description": "Cidade do imóvel."
      },
      {
        "fieldId": "addressState",
        "type": "string",
        "required": true,
        "description": "Estado/UF do imóvel."
      },
      {
        "fieldId": "addressZipCode",
        "type": "string",
        "required": false,
        "description": "CEP do imóvel."
      },
      {
        "fieldId": "area",
        "type": "decimal",
        "required": false,
        "description": "Área total em metros quadrados."
      },
      {
        "fieldId": "bedrooms",
        "type": "integer",
        "required": false,
        "description": "Número de quartos."
      },
      {
        "fieldId": "bathrooms",
        "type": "integer",
        "required": false,
        "description": "Número de banheiros."
      },
      {
        "fieldId": "parkingSpaces",
        "type": "integer",
        "required": false,
        "description": "Número de vagas de garagem."
      },
      {
        "fieldId": "features",
        "type": "array",
        "required": false,
        "description": "Lista de características adicionais (piscina, churrasqueira, etc.)."
      },
      {
        "fieldId": "photoUrls",
        "type": "array",
        "required": false,
        "description": "URLs das fotos mock do imóvel."
      },
      {
        "fieldId": "assignedBrokerId",
        "type": "uuid",
        "required": false,
        "description": "ID do corretor responsável pelo imóvel."
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

export default PropertyMdm;
