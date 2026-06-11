/// <mls fileReference="_102045_/l2/plugins/llmProvider/plugin.defs.ts" enhancement="_blank"/>

export const llmProviderPluginPlan = {
  "schemaVersion": "2026-06-06",
  "artifactType": "pluginDraft",
  "artifactId": "llmProvider",
  "moduleName": "propertyFlowCrm",
  "status": "draft",
  "source": {
    "agentName": "agentPlanPlugins",
    "stepId": 14,
    "planId": "plan-plugins"
  },
  "data": {
    "plugin": {
      "pluginId": "llmProvider",
      "provider": "Llm Provider",
      "priority": "soon",
      "reason": "Integração de IA para geração de descrição de imóvel e qualificação de leads foi aceita como melhoria pós‑MVP.",
      "events": [
        "gerarDescricaoImovel",
        "classificarLead"
      ],
      "requiredCredentials": [],
      "inputData": [
        "caracteristicasImovel",
        "anotacoesLead"
      ],
      "outputData": [
        "descricaoImovel",
        "classificacaoLead",
        "sugestaoFollowUp"
      ],
      "webhooks": [],
      "risks": [
        "Escolha do provedor de IA pode impactar custo e qualidade das respostas.",
        "Dependência de dados sensíveis para qualificação de leads requer cuidados de privacidade."
      ],
      "questions": [
        "Qual provedor de LLM será usado (ex.: OpenAI, Anthropic, Azure)?",
        "Há requisitos de compliance/privacidade para os dados enviados ao LLM?"
      ],
      "resolution": "create_draft",
      "pluginDefsFileRef": "_102045_/l2/plugins/llmProvider/plugin.defs.ts",
      "moduleConnectionDefsFileRef": "_102045_/l2/propertyFlowCrm/plugins/llmProvider.defs.ts"
    }
  }
} as const;

export default llmProviderPluginPlan;
