/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/dealsTracker.ts" enhancement="_blank"/>
export interface DealsTrackerListarNegociosInput {
  etapa?: string;
  termoPesquisa?: string;
}

export interface DealsTrackerListarNegociosOutputItem {
  dealId: string;
  status: string;
  leadId: string;
  propertyId: string;
  valorProposta: number;
  updatedAt: string;
}

export type DealsTrackerListarNegociosOutput = DealsTrackerListarNegociosOutputItem[];

export interface DealsTrackerObterNegocioInput {
  dealId: string;
}

export interface DealsTrackerObterNegocioOutput {
  dealId: string;
  status: string;
  leadId: string;
  propertyId: string;
  valorProposta: number;
  descricao: string;
  updatedAt: string;
}

export interface DealsTrackerCriarNegocioInput {
  leadId: string;
  propertyId: string;
  valorProposta: number;
  termosIniciais?: string;
}

export interface DealsTrackerCriarNegocioOutput {
  dealId: string;
  status: string;
}

export interface DealsTrackerAvancarEtapaNegocioInput {
  dealId: string;
  toStage: string;
  termosAtualizados?: string;
}

export interface DealsTrackerAvancarEtapaNegocioOutput {
  dealId: string;
  status: string;
  dealStageChangeId: string;
}

export interface DealsTrackerListarMudancasEtapaNegocioInput {
  dealId: string;
}

export interface DealsTrackerListarMudancasEtapaNegocioOutputItem {
  dealStageChangeId: string;
  dealId: string;
  fromStage: string;
  toStage: string;
  changedAt: string;
}

export type DealsTrackerListarMudancasEtapaNegocioOutput = DealsTrackerListarMudancasEtapaNegocioOutputItem[];
