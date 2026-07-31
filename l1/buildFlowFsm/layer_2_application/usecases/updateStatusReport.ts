/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReport.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { StatusReport } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

export interface UpdateStatusReportInput {
  statusReportId: string;
  summary: string;
  tasksOverview?: string;
  timeLogsOverview?: string;
  materialsOverview?: string;
  delayRiskAssessment?: string;
  pmNotes?: string;
}

export interface UpdateStatusReportOutput {
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
  pmNotes?: string;
  updatedAt: string;
}

export async function updateStatusReport(
  ctx: RequestContext,
  input: UpdateStatusReportInput,
): Promise<UpdateStatusReportOutput> {
  const reports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');

  return ctx.data.runInTransaction(async () => {
    // Step 1: Load the StatusReport aggregate by id
    const report = await reports.getById(input.statusReportId);

    // Step 2: rule pmControlsStatusReportLifecycle — only 'draft' or 'reviewed' reports may be edited
    if (String(report.status) === 'shared') {
      throw new AppError(
        'VALIDATION_ERROR',
        'Cannot edit a status report that has already been shared with the client (rule: pmControlsStatusReportLifecycle).',
        400,
        { ruleId: 'pmControlsStatusReportLifecycle' },
      );
    }

    // Step 3 & 4: Apply content edits — do NOT change status or lifecycle timestamps (generatedAt, reviewedAt, sharedAt)
    const now = ctx.clock.nowIso();
    const updated: StatusReport = {
      ...report,
      summary: input.summary,
      tasksOverview: input.tasksOverview ?? report.tasksOverview,
      timeLogsOverview: input.timeLogsOverview ?? report.timeLogsOverview,
      materialsOverview: input.materialsOverview ?? report.materialsOverview,
      delayRiskAssessment: input.delayRiskAssessment ?? report.delayRiskAssessment,
      pmNotes: input.pmNotes ?? report.pmNotes,
      updatedAt: now,
    };

    // Step 5: Save the mutated aggregate inside the transaction
    await reports.save(updated);

    // Step 6: Return the updated aggregate fields
    return {
      statusReportId: updated.statusReportId,
      projectId: updated.projectId,
      status: updated.status,
      reportPeriodStart: updated.reportPeriodStart,
      reportPeriodEnd: updated.reportPeriodEnd,
      summary: updated.summary,
      tasksOverview: updated.tasksOverview ?? undefined,
      timeLogsOverview: updated.timeLogsOverview ?? undefined,
      materialsOverview: updated.materialsOverview ?? undefined,
      delayRiskAssessment: updated.delayRiskAssessment ?? undefined,
      pmNotes: updated.pmNotes ?? undefined,
      updatedAt: updated.updatedAt,
    };
  });
}
