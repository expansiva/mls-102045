/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/visitsAgenda.ts" enhancement="_blank"/>
export interface VisitsAgendaListarVisitasInput {
  dataInicio: string;
  dataFim: string;
  propertyId?: string;
  leadId?: string;
  status?: string;
}

export interface VisitsAgendaListarVisitasOutputItem {
  visitId: string;
  status: string;
  scheduledAt: string;
  propertyId: string;
  leadId: string;
}

export type VisitsAgendaListarVisitasOutput = VisitsAgendaListarVisitasOutputItem[];

export interface VisitsAgendaAgendarVisitaInput {
  propertyId: string;
  leadId: string;
  requestedStartAt: string;
  requestedEndAt?: string;
  notes?: string;
}

export interface VisitsAgendaAgendarVisitaOutput {
  visitId: string;
  status: string;
}

export interface VisitsAgendaObterVisitaInput {
  visitId: string;
}

export interface VisitsAgendaObterVisitaOutput {
  visitId: string;
  status: string;
  scheduledAt: string;
  propertyId: string;
  leadId: string;
}

export interface VisitsAgendaAtualizarStatusVisitaInput {
  visitId: string;
  novoStatus: string;
  requestedStartAt?: string;
  requestedEndAt?: string;
}

export interface VisitsAgendaAtualizarStatusVisitaOutput {
  visitId: string;
  status: string;
  scheduledAt: string;
}

export interface VisitsAgendaListarSolicitacoesAgendamentoVisitaInput {
  dataInicio?: string;
  dataFim?: string;
  status?: string;
  propertyId?: string;
  leadId?: string;
}

export interface VisitsAgendaListarSolicitacoesAgendamentoVisitaOutputItem {
  visitScheduleRequestId: string;
  status: string;
  requestedStartAt: string;
  propertyId: string;
  leadId: string;
  visitId: string;
}

export type VisitsAgendaListarSolicitacoesAgendamentoVisitaOutput = VisitsAgendaListarSolicitacoesAgendamentoVisitaOutputItem[];
