/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateDelayRiskSuggestions.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { ITimeLogRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { IMaterialUsageRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type {
  StatusReport,
  DelayRiskSuggestion,
  DelayRiskLevel,
} from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';
import type { WorkTask } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import type { TimeLog } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';
import type { MaterialUsage } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

export interface GenerateDelayRiskSuggestionsInput {
  statusReportId: string;
}

export interface DelayRiskSuggestionItem {
  delayRiskSuggestionId: string;
  statusReportId: string;
  workTaskId: string;
  riskLevel: string;
  reason: string;
  suggestedAction?: string;
  acknowledged: boolean;
  createdAt: string;
}

export interface GenerateDelayRiskSuggestionsOutput {
  suggestions: DelayRiskSuggestionItem[];
}

const VALID_RISK_LEVELS: DelayRiskLevel[] = ['low', 'medium', 'high'];

function daysBetween(fromIso: string, toIso: string): number {
  const fromMs = new Date(fromIso).getTime();
  const toMs = new Date(toIso).getTime();
  return Math.ceil((toMs - fromMs) / (1000 * 60 * 60 * 24));
}

interface TaskRiskAnalysis {
  riskLevel: DelayRiskLevel;
  reason: string;
  suggestedAction: string | null;
}

function analyzeTaskDelayRisk(
  task: WorkTask,
  now: string,
  postedHours: number,
  materials: MaterialUsage[],
): TaskRiskAnalysis | null {
  const daysUntilDue = daysBetween(now, task.dueDate);
  const riskFactors: string[] = [];
  let riskLevel: DelayRiskLevel = 'low';
  let suggestedAction: string | null = null;

  // (a) assigned task within 3 days or past due → high risk
  if (task.status === 'assigned' && daysUntilDue <= 3) {
    riskFactors.push(
      `Task "${task.title}" is assigned but not started and due in ${daysUntilDue} day(s).`,
    );
    riskLevel = 'high';
    suggestedAction = 'Reassign or start the task immediately to avoid schedule slippage.';
  }

  // (b) inProgress task within 7 days or past due → medium risk
  if (task.status === 'inProgress' && daysUntilDue <= 7) {
    riskFactors.push(
      `Task "${task.title}" is in progress and due in ${daysUntilDue} day(s).`,
    );
    if (riskLevel !== 'high') {
      riskLevel = 'medium';
    }
    if (!suggestedAction) {
      suggestedAction = 'Monitor progress closely and consider adding resources to meet the deadline.';
    }
  }

  // (c) behind-schedule signal: hours logged but past due
  if (postedHours > 0 && task.status !== 'completed' && daysUntilDue <= 0) {
    riskFactors.push(
      `Task "${task.title}" has ${postedHours} hours logged but is past due (${daysUntilDue} day(s)).`,
    );
    if (riskLevel === 'low') {
      riskLevel = 'medium';
    }
    if (!suggestedAction) {
      suggestedAction = 'Review remaining work and adjust the due date or allocate additional resources.';
    }
  }

  // (d) voided or missing critical materials near task due date
  const voidedMaterials = materials.filter(
    (m) =>
      m.status === 'voided' &&
      daysBetween(m.usageDate, task.dueDate) >= -7 &&
      daysBetween(m.usageDate, task.dueDate) <= 7,
  );
  if (voidedMaterials.length > 0) {
    const names = voidedMaterials.map((m) => m.materialName).join(', ');
    riskFactors.push(`Voided material usage near task due date: ${names}.`);
    if (riskLevel === 'low') {
      riskLevel = 'medium';
    }
    if (!suggestedAction) {
      suggestedAction = 'Reorder critical materials and verify supply chain availability.';
    }
  }

  if (riskFactors.length === 0) {
    return null;
  }

  return {
    riskLevel,
    reason: riskFactors.join(' '),
    suggestedAction,
  };
}

export async function generateDelayRiskSuggestions(
  ctx: RequestContext,
  input: GenerateDelayRiskSuggestionsInput,
): Promise<GenerateDelayRiskSuggestionsOutput> {
  const statusReports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');
  const workTasksRepo = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const timeLogsRepo = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');
  const materialUsagesRepo = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');

  // Step 1: Load the StatusReport by statusReportId
  let statusReport: StatusReport;
  try {
    statusReport = await statusReports.getById(input.statusReportId);
  } catch {
    throw new AppError('VALIDATION_ERROR', 'Status report not found', 400, {
      statusReportId: input.statusReportId,
    });
  }

  // Step 2: Extract projectId from the loaded StatusReport
  const projectId = statusReport.projectId;

  // Step 3: Load the Project for context
  let project: Project;
  try {
    project = await projects.getById(projectId);
  } catch {
    throw new AppError('NOT_FOUND', `Project not found: ${projectId}`, 404, { projectId });
  }

  // Step 4: Load all WorkTasks for the project
  const tasks = await workTasksRepo.findByProject(projectId);

  // Step 5: Load MaterialUsage records for the project
  const materials = await materialUsagesRepo.listByProjectId(projectId);

  const now = ctx.clock.nowIso();
  const newSuggestions: DelayRiskSuggestion[] = [];

  for (const task of tasks) {
    // Skip completed or cancelled tasks — no delay risk to assess
    if (task.status === 'completed' || task.status === 'cancelled') continue;

    // Load time logs for this task to compute posted hours
    const taskTimeLogs: TimeLog[] = await timeLogsRepo.listByWorkTaskId(task.workTaskId);
    const postedHours = taskTimeLogs
      .filter((tl) => tl.status === 'posted')
      .reduce((sum, tl) => sum + tl.hoursWorked, 0);

    // Step 6: Perform delay-risk analysis
    const analysis = analyzeTaskDelayRisk(task, now, postedHours, materials);
    if (!analysis) continue;

    // Step 9: Validate each suggestion
    if (!VALID_RISK_LEVELS.includes(analysis.riskLevel)) {
      throw new AppError(
        'VALIDATION_ERROR',
        'Invalid risk level for delay risk suggestion.',
        400,
        { ruleId: 'delayRiskSuggestionsAdvisory', riskLevel: analysis.riskLevel },
      );
    }
    if (!analysis.reason || analysis.reason.trim() === '') {
      throw new AppError(
        'VALIDATION_ERROR',
        'Delay risk suggestion reason must be non-empty.',
        400,
        { ruleId: 'delayRiskSuggestionsAdvisory' },
      );
    }

    // Step 8: Build the DelayRiskSuggestion record
    const suggestion: DelayRiskSuggestion = {
      delayRiskSuggestionId: ctx.idGenerator.newId(),
      statusReportId: input.statusReportId,
      workTaskId: task.workTaskId,
      riskLevel: analysis.riskLevel,
      reason: analysis.reason,
      suggestedAction: analysis.suggestedAction,
      acknowledged: false,
      createdAt: now,
      updatedAt: now,
    };

    newSuggestions.push(suggestion);
  }

  // Step 10: Persist all suggestions by embedding into the StatusReport and saving inside a transaction
  // rule: delayRiskSuggestionsAdvisory — suggestions are advisory only; no WorkTask status or any other entity is modified.
  await ctx.data.runInTransaction(async () => {
    statusReport.delayRiskSuggestions = [
      ...statusReport.delayRiskSuggestions,
      ...newSuggestions,
    ];
    statusReport.updatedAt = now;
    await statusReports.save(statusReport);
  });

  // Step 11: Return the list of created suggestions
  const outputItems: DelayRiskSuggestionItem[] = newSuggestions.map((s) => ({
    delayRiskSuggestionId: s.delayRiskSuggestionId,
    statusReportId: s.statusReportId,
    workTaskId: s.workTaskId,
    riskLevel: s.riskLevel,
    reason: s.reason,
    suggestedAction: s.suggestedAction ?? undefined,
    acknowledged: s.acknowledged,
    createdAt: s.createdAt,
  }));

  return { suggestions: outputItems };
}
