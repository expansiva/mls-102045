/// <mls fileReference="_102045_/l2/propertyFlowCrm/web/contracts/leadDetails.ts" enhancement="_blank" />

export interface LeadDetailsObterLeadInput {
  leadId: string;
}

export interface LeadDetailsObterLeadOutput {
  leadId: string;
  name: string;
  email: string;
  phone: string;
  preferences: string;
  stage: string;
  history: string;
}

export interface LeadDetailsAtualizarLeadInput {
  leadId: string;
  name?: string;
  email?: string;
  phone?: string;
  preferences?: string;
  stage?: string;
}

export interface LeadDetailsAtualizarLeadOutput {
  leadId: string;
  stage: string;
}
