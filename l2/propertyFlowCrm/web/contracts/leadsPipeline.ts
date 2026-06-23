/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/leadsPipeline.ts" enhancement="_blank"/>
export interface LeadsPipelineListarLeadsInput {
  stageFilter?: string;
  searchText?: string;
}

export interface LeadsPipelineListarLeadsOutputItem {
  leadId: string;
  leadName: string;
  leadStage: string;
  leadTemperature: string;
  leadUpdatedAt: string;
}

export type LeadsPipelineListarLeadsOutput = LeadsPipelineListarLeadsOutputItem[];

export interface LeadsPipelineMoverEtapaLeadInput {
  leadId: string;
  fromStage: string;
  toStage: string;
  note?: string;
}

export interface LeadsPipelineMoverEtapaLeadOutput {
  leadId: string;
  leadStageChangeId: string;
}

export interface LeadsPipelineCriarLeadInput {
  leadName: string;
  leadEmail?: string;
  leadPhone?: string;
  leadSource?: string;
  leadInterest?: string;
  initialStage: string;
}

export interface LeadsPipelineCriarLeadOutput {
  leadId: string;
  leadStage: string;
}

export interface LeadsPipelineSolicitarQualificacaoLeadInput {
  leadId: string;
  leadContext?: string;
}

export interface LeadsPipelineSolicitarQualificacaoLeadOutput {
  leadQualificationRequestId: string;
  reviewStatus: string;
}

export interface LeadsPipelineListarMudancasEtapaLeadInput {
  leadId: string;
}

export interface LeadsPipelineListarMudancasEtapaLeadOutputItem {
  leadStageChangeId: string;
  fromStage: string;
  toStage: string;
  changedAt: string;
  changedByBrokerId: string;
  note: string;
}

export type LeadsPipelineListarMudancasEtapaLeadOutput = LeadsPipelineListarMudancasEtapaLeadOutputItem[];
