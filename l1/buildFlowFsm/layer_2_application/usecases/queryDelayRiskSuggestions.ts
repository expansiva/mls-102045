/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryDelayRiskSuggestions.ts" enhancement="_blank"/>
import { type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type {
  StatusReport,
  DelayRiskSuggestion,
  DelayRiskLevel,
} from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

export interface QueryDelayRiskSuggestionsInput {
  statusReportId: string;
  acknowledged?: boolean;
}

export interface QueryDelayRiskSuggestionsOutputItem {
  delayRiskSuggestionId: string;
  statusReportId: string;
  workTaskId: string;
  workTaskTitle: string;
  riskLevel: string;
  reason: string;
  suggestedAction?: string;
  acknowledged: boolean;
  createdAt: string;
}

export type QueryDelayRiskSuggestionsOutput = QueryDelayRiskSuggestionsOutputItem[];

const RISK_SEVERITY: Record<DelayRiskLevel, number> = {
  high: 3,
  medium: 2,
  low: 1,
};

export async function queryDelayRiskSuggestions(
  ctx: RequestContext,
  input: QueryDelayRiskSuggestionsInput,
): Promise<QueryDelayRiskSuggestionsOutput> {
  const statusReports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');

  // Step 1: Load the StatusReport aggregate by statusReportId. If not found, return empty array.
  let report: StatusReport;
  try {
    report = await statusReports.getById(input.statusReportId);
  } catch {
    return [];
  }

  // Step 2: Extract the embedded delayRiskSuggestions collection.
  let suggestions: DelayRiskSuggestion[] = report.delayRiskSuggestions ?? [];

  // Step 3: Filter by acknowledged flag if provided.
  if (input.acknowledged !== undefined) {
    suggestions = suggestions.filter((s) => s.acknowledged === input.acknowledged);
  }

  // Step 4: Sort by riskLevel severity descending (high > medium > low), then by createdAt ascending.
  suggestions = [...suggestions].sort((a, b) => {
    const sevA = RISK_SEVERITY[a.riskLevel] ?? 0;
    const sevB = RISK_SEVERITY[b.riskLevel] ?? 0;
    if (sevB !== sevA) return sevB - sevA;
    return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0;
  });

  // Step 5: Collect all unique workTaskId values.
  const workTaskIds = [...new Set(suggestions.map((s) => s.workTaskId))];

  // Step 6: Bulk-load WorkTask aggregates and build a lookup map of workTaskId -> title.
  const workTaskTitleMap = new Map<string, string>();
  if (workTaskIds.length > 0) {
    const taskResults = await Promise.all(
      workTaskIds.map(async (id) => {
        try {
          const task = await workTasks.getById(id);
          return { id, title: task.title };
        } catch {
          return { id, title: '' };
        }
      }),
    );
    for (const r of taskResults) {
      workTaskTitleMap.set(r.id, r.title);
    }
  }

  // rule: delayRiskSuggestionsAdvisory — this is a read-only query; suggestions are advisory only,
  // no WorkTask.status or any other entity is mutated.
  // Step 7: Map each suggestion to the output shape, joining workTaskTitle from the lookup map.
  const items: QueryDelayRiskSuggestionsOutputItem[] = suggestions.map((s) => ({
    delayRiskSuggestionId: s.delayRiskSuggestionId,
    statusReportId: s.statusReportId,
    workTaskId: s.workTaskId,
    workTaskTitle: workTaskTitleMap.get(s.workTaskId) ?? '',
    riskLevel: s.riskLevel,
    reason: s.reason,
    suggestedAction: s.suggestedAction ?? undefined,
    acknowledged: s.acknowledged,
    createdAt: s.createdAt,
  }));

  // Step 9: Return the suggestions array.
  return items;
}
