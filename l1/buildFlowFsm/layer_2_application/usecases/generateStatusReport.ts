/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/generateStatusReport.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { ITimeLogRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { IMaterialUsageRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.js';
import type { StatusReport } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';
import { validatePeriod } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

export interface GenerateStatusReportInput {
  projectId: string;
  reportPeriodStart: string;
  reportPeriodEnd: string;
}

export interface GenerateStatusReportOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  reportPeriodStart: string;
  reportPeriodEnd: string;
  summary: string;
  tasksOverview?: string;
  timeLogsOverview?: string;
  materialsOverview?: string;
  delayRiskAssessment?: string;
  generatedAt: string;
  createdAt: string;
  updatedAt: string;
}

export async function generateStatusReport(
  ctx: RequestContext,
  input: GenerateStatusReportInput,
): Promise<GenerateStatusReportOutput> {
  // Step 1: Validate reporting period
  if (!validatePeriod({ reportPeriodStart: input.reportPeriodStart, reportPeriodEnd: input.reportPeriodEnd })) {
    throw new AppError(
      'VALIDATION_ERROR',
      'reportPeriodStart must be on or before reportPeriodEnd',
      400,
      { ruleId: 'validatePeriod' },
    );
  }

  // Step 2: Load the Project
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  let project;
  try {
    project = await projects.getById(input.projectId);
  } catch {
    throw new AppError(
      'NOT_FOUND',
      `Project not found for projectId ${input.projectId}`,
      404,
      { projectId: input.projectId },
    );
  }

  // Step 3 — rule: pmControlsStatusReportLifecycle
  // Only the project manager can generate status reports.
  const scope = ctx.sessionContext.actorSession.scope ?? [];
  if (!scope.includes('project_manager')) {
    throw new AppError(
      'FORBIDDEN',
      'Only the project manager can generate status reports',
      403,
      { ruleId: 'pmControlsStatusReportLifecycle' },
    );
  }

  // Step 4: List WorkTask records for the project and filter by reporting period
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const allTasks = await workTasks.findByProject(input.projectId);
  const periodTasks = allTasks.filter((t) => {
    const dueInPeriod =
      t.dueDate >= input.reportPeriodStart && t.dueDate <= input.reportPeriodEnd;
    const completedInPeriod =
      t.completedAt !== null &&
      t.completedAt >= input.reportPeriodStart &&
      t.completedAt <= input.reportPeriodEnd;
    return dueInPeriod || completedInPeriod;
  });

  // Step 5 — rule: statusReportGenerationSource
  // Gather source data: TimeLog entries (children of WorkTask) and MaterialUsage entries
  // (children of Project) within the reporting period, only status 'posted'.
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');
  const materialUsages = resolveRepository<IMaterialUsageRepository>(ctx, 'MaterialUsage');

  const periodWorkTaskIds = new Set(periodTasks.map((t) => t.workTaskId));
  const periodTimeLogs = (await timeLogs.listByPeriod(input.reportPeriodStart, input.reportPeriodEnd))
    .filter((tl) => tl.status === 'posted')
    .filter((tl) => periodWorkTaskIds.has(tl.workTaskId));

  const projectMaterials = (await materialUsages.listByProjectId(input.projectId))
    .filter((mu) => mu.status === 'posted')
    .filter(
      (mu) => mu.usageDate >= input.reportPeriodStart && mu.usageDate <= input.reportPeriodEnd,
    );

  // Step 6: Build structured data payload
  const totalHours = periodTimeLogs.reduce((sum, tl) => sum + tl.hoursWorked, 0);
  const totalLaborCost = periodTimeLogs.reduce((sum, tl) => sum + tl.laborCost, 0);
  const totalMaterialCost = projectMaterials.reduce(
    (sum, mu) => sum + mu.quantity * mu.unitCost,
    0,
  );

  // Step 7: Generate text fields from the structured payload.
  // (Platform LLM proxy is not part of the RequestContext contract; text is derived
  //  deterministically from the gathered source data.)
  const taskLines = periodTasks.map(
    (t) =>
      `- ${t.title} (status: ${t.status}, due: ${t.dueDate}${t.completedAt ? `, completed: ${t.completedAt}` : ''})`,
  );
  const tasksOverview =
    taskLines.length > 0
      ? `Tasks in period (${periodTasks.length}):\n${taskLines.join('\n')}`
      : null;

  const timeLogsOverview =
    periodTimeLogs.length > 0
      ? `Time logs in period: ${periodTimeLogs.length} entries, ${totalHours} hours, labor cost ${totalLaborCost}.`
      : null;

  const materialsOverview =
    projectMaterials.length > 0
      ? `Materials in period: ${projectMaterials.length} entries, total cost ${totalMaterialCost}.\n` +
        projectMaterials
          .map((m) => `- ${m.materialName}: ${m.quantity} ${m.unit} @ ${m.unitCost}`)
          .join('\n')
      : null;

  const overdueTasks = periodTasks.filter(
    (t) =>
      t.status !== 'completed' &&
      t.status !== 'cancelled' &&
      t.dueDate < input.reportPeriodEnd,
  );
  const delayRiskAssessment =
    overdueTasks.length > 0
      ? `Delay risk: ${overdueTasks.length} task(s) overdue or at risk:\n` +
        overdueTasks
          .map((t) => `- ${t.title} (due ${t.dueDate}, status ${t.status})`)
          .join('\n')
      : 'No significant delay risks identified for this period.';

  const summary =
    `Status report for project "${project.name}" covering ` +
    `${input.reportPeriodStart} to ${input.reportPeriodEnd}. ` +
    `${periodTasks.length} task(s), ${totalHours} hours logged, ` +
    `labor cost ${totalLaborCost}, material cost ${totalMaterialCost}.`;

  // Step 8–9: Generate system defaults and construct the StatusReport aggregate
  const now = ctx.clock.nowIso();
  const statusReportId = ctx.idGenerator.newId();

  const report: StatusReport = {
    statusReportId,
    projectId: input.projectId,
    status: 'draft',
    reportPeriodStart: input.reportPeriodStart,
    reportPeriodEnd: input.reportPeriodEnd,
    summary,
    tasksOverview,
    timeLogsOverview,
    materialsOverview,
    delayRiskAssessment,
    pmNotes: null,
    generatedAt: now,
    reviewedAt: null,
    sharedAt: null,
    createdAt: now,
    updatedAt: now,
    delayRiskSuggestions: [],
  };

  // Step 10: Persist inside a single transaction
  await ctx.data.runInTransaction(async () => {
    const statusReports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');
    await statusReports.save(report);
  });

  // Step 11: Return the full output
  return {
    statusReportId: report.statusReportId,
    projectId: report.projectId,
    status: report.status,
    reportPeriodStart: report.reportPeriodStart,
    reportPeriodEnd: report.reportPeriodEnd,
    summary: report.summary,
    tasksOverview: report.tasksOverview ?? undefined,
    timeLogsOverview: report.timeLogsOverview ?? undefined,
    materialsOverview: report.materialsOverview ?? undefined,
    delayRiskAssessment: report.delayRiskAssessment ?? undefined,
    generatedAt: report.generatedAt,
    createdAt: report.createdAt,
    updatedAt: report.updatedAt,
  };
}
