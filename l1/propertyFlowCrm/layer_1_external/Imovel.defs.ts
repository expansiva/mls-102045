/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_1_external/Imovel.defs.ts" enhancement="_blank"/>

export const ImovelMdm = {
  "schemaVersion": "2026-06-06",
  "artifactType": "mdmEntity",
  "artifactId": "Imovel",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanMDM",
    "stepId": 12,
    "planId": "plan-mdm"
  },
  "data": {
    "kind": "mdmEntity",
    "entity": "Imovel",
    "ownership": "mdmOwned",
    "generateTable": false,
    "moduleId": "propertyFlowCrm",
    "domainId": "property",
    "infrastructureModuleRef": "102034",
    "domainTitle": "Imóvel",
    "sourceOfTruth": "102034",
    "governanceRules": [
      "imovelActiveStatus",
      "dashboardMetricsRefresh"
    ],
    "title": "Imóvel",
    "description": "Cadastro de imóvel com endereço, tipo, preço, status e características.",
    "fields": [
      {
        "fieldId": "imovelId",
        "type": "uuid",
        "required": true,
        "description": "Identificador único do imóvel."
      },
      {
        "fieldId": "titulo",
        "type": "string",
        "required": true,
        "description": "Título curto do anúncio do imóvel."
      },
      {
        "fieldId": "endereco",
        "type": "string",
        "required": true,
        "description": "Endereço completo do imóvel."
      },
      {
        "fieldId": "tipo",
        "type": "string",
        "required": true,
        "description": "Tipo de imóvel (ex.: apartamento, casa)."
      },
      {
        "fieldId": "preco",
        "type": "money",
        "required": true,
        "description": "Preço de venda ou locação."
      },
      {
        "fieldId": "status",
        "type": "string",
        "required": true,
        "description": "Status do imóvel: ativo, reservado, inativo."
      },
      {
        "fieldId": "caracteristicas",
        "type": "string[]",
        "required": false,
        "description": "Lista de características e diferenciais."
      },
      {
        "fieldId": "fotosMock",
        "type": "string[]",
        "required": false,
        "description": "Referências das fotos mock do imóvel."
      },
      {
        "fieldId": "descricaoGeradaIa",
        "type": "string",
        "required": false,
        "description": "Descrição gerada por IA para o imóvel."
      },
      {
        "fieldId": "corretorResponsavelId",
        "type": "uuid",
        "required": false,
        "description": "Corretor responsável pelo imóvel."
      },
      {
        "fieldId": "criadoEm",
        "type": "datetime",
        "required": true,
        "description": "Data de criação do imóvel."
      },
      {
        "fieldId": "atualizadoEm",
        "type": "datetime",
        "required": true,
        "description": "Data da última atualização do imóvel."
      }
    ]
  }
} as const;

export default ImovelMdm;
