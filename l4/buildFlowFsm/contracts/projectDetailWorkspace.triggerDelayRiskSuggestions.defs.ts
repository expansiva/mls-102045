/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.triggerDelayRiskSuggestions.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectDetailWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall triggerDelayRiskSuggestions (command); Output kind=list; route buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions.

export interface TriggerDelayRiskSuggestionsInput {
  statusReportId: string;
}

export interface TriggerDelayRiskSuggestionsItem {
  delayRiskSuggestionId: string;
  statusReportId: string;
  workTaskId: string;
  riskLevel: string;
  reason: string;
  suggestedAction?: string;
  acknowledged: boolean;
  createdAt: string;
}

export type TriggerDelayRiskSuggestionsOutput = TriggerDelayRiskSuggestionsItem[];

export const triggerDelayRiskSuggestionsRoute = 'buildFlowFsm.projectDetailWorkspace.triggerDelayRiskSuggestions' as const;
