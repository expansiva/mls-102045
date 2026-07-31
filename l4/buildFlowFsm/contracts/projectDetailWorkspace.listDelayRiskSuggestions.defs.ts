/// <mls fileReference="_102045_/l4/buildFlowFsm/contracts/projectDetailWorkspace.listDelayRiskSuggestions.defs.ts" enhancement="_blank"/>

// GENERATED MECHANICALLY from _102045_/l4/buildFlowFsm/workspaces/projectDetailWorkspace.defs.ts — DO NOT EDIT.
// Contract of record: bffCall listDelayRiskSuggestions (query); Output kind=list; route buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions.

export interface ListDelayRiskSuggestionsInput {
  statusReportId: string;
  acknowledged?: boolean;
}

export interface ListDelayRiskSuggestionsItem {
  delayRiskSuggestionId: string;
  workTaskId: string;
  workTaskTitle: string;
  riskLevel: string;
  reason: string;
  suggestedAction: string;
  acknowledged: boolean;
  createdAt: string;
}

export type ListDelayRiskSuggestionsOutput = ListDelayRiskSuggestionsItem[];

export const listDelayRiskSuggestionsRoute = 'buildFlowFsm.projectDetailWorkspace.listDelayRiskSuggestions' as const;
