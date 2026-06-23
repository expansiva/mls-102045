/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/router.ts" enhancement="_blank" />
import type { BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';

import {
  propertyFlowCrmPropertiesListListarImoveisHandler,
  propertyFlowCrmPropertiesListCriarImovelHandler,
} from '/_102045_/l1/propertyFlowCrm/layer_2_controllers/propertiesList.js';
import {
  propertyFlowCrmVisitsAgendaListarVisitasHandler,
  propertyFlowCrmVisitsAgendaAgendarVisitaHandler,
  propertyFlowCrmVisitsAgendaObterVisitaHandler,
  propertyFlowCrmVisitsAgendaAtualizarStatusVisitaHandler,
  propertyFlowCrmVisitsAgendaListarSolicitacoesAgendamentoVisitaHandler,
} from '/_102045_/l1/propertyFlowCrm/layer_2_controllers/visitsAgenda.js';
import {
  propertyFlowCrmLeadsPipelineListarLeadsHandler,
  propertyFlowCrmLeadsPipelineMoverEtapaLeadHandler,
  propertyFlowCrmLeadsPipelineCriarLeadHandler,
  propertyFlowCrmLeadsPipelineSolicitarQualificacaoLeadHandler,
  propertyFlowCrmLeadsPipelineListarMudancasEtapaLeadHandler,
} from '/_102045_/l1/propertyFlowCrm/layer_2_controllers/leadsPipeline.js';
import {
  propertyFlowCrmLeadDetailsObterLeadHandler,
  propertyFlowCrmLeadDetailsAtualizarLeadHandler,
} from '/_102045_/l1/propertyFlowCrm/layer_2_controllers/leadDetails.js';
export function createPropertyFlowCrmRouter(): Map<string, BffHandler> {
  return new Map<string, BffHandler>([
    ['propertyFlowCrm.propertiesList.listarImoveis', propertyFlowCrmPropertiesListListarImoveisHandler],
    ['propertyFlowCrm.propertiesList.criarImovel', propertyFlowCrmPropertiesListCriarImovelHandler],
    ['propertyFlowCrm.visitsAgenda.listarVisitas', propertyFlowCrmVisitsAgendaListarVisitasHandler],
    ['propertyFlowCrm.visitsAgenda.agendarVisita', propertyFlowCrmVisitsAgendaAgendarVisitaHandler],
    ['propertyFlowCrm.visitsAgenda.obterVisita', propertyFlowCrmVisitsAgendaObterVisitaHandler],
    ['propertyFlowCrm.visitsAgenda.atualizarStatusVisita', propertyFlowCrmVisitsAgendaAtualizarStatusVisitaHandler],
    ['propertyFlowCrm.visitsAgenda.listarSolicitacoesAgendamentoVisita', propertyFlowCrmVisitsAgendaListarSolicitacoesAgendamentoVisitaHandler],
    ['propertyFlowCrm.leadsPipeline.listarLeads', propertyFlowCrmLeadsPipelineListarLeadsHandler],
    ['propertyFlowCrm.leadsPipeline.moverEtapaLead', propertyFlowCrmLeadsPipelineMoverEtapaLeadHandler],
    ['propertyFlowCrm.leadsPipeline.criarLead', propertyFlowCrmLeadsPipelineCriarLeadHandler],
    ['propertyFlowCrm.leadsPipeline.solicitarQualificacaoLead', propertyFlowCrmLeadsPipelineSolicitarQualificacaoLeadHandler],
    ['propertyFlowCrm.leadsPipeline.listarMudancasEtapaLead', propertyFlowCrmLeadsPipelineListarMudancasEtapaLeadHandler],
    ['propertyFlowCrm.leadDetails.obterLead', propertyFlowCrmLeadDetailsObterLeadHandler],
    ['propertyFlowCrm.leadDetails.atualizarLead', propertyFlowCrmLeadDetailsAtualizarLeadHandler],
  ]);
}
