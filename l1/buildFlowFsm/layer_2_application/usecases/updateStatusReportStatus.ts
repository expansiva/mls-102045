/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/updateStatusReportStatus.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { StatusReport, StatusReportStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';
import { canTransitionStatusReport } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

export interface UpdateStatusReportStatusInput {
  statusReportId: string;
  status: string;
}

export interface UpdateStatusReportStatusOutput {
  statusReportId: string;
  projectId: string;
  status: string;
  reviewedAt: string | null;
  sharedAt: string | null;
  updatedAt: string;
}

export async function updateStatusReportStatus(
  ctx: RequestContext,
  input: UpdateStatusReportStatusInput,
): Promise<UpdateStatusReportStatusOutput> {
  const reports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');

  // rule: pmControlsStatusReportLifecycle — only the project manager can update status report lifecycle status
  const actorScope = ctx.sessionContext.actorSession.scope ?? [];
  if (!actorScope.includes('project_manager')) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Only the project manager can update status report lifecycle status',
      400,
      { ruleId: 'pmControlsStatusReportLifecycle' },
    );
  }

  const report = await reports.getById(input.statusReportId);
  if (!report) {
    throw new AppError('VALIDATION_ERROR', 'StatusReport not found', 400, {
      statusReportId: input.statusReportId,
    });
  }

  const targetStatus = input.status as StatusReportStatus;
  const currentStatus = report.status;

  // rule: pmControlsStatusReportLifecycle — validate lifecycle transition
  if (!canTransitionStatusReport(currentStatus, targetStatus)) {
    throw new AppError(
      'VALIDATION_ERROR',
      `Invalid status transition from ${currentStatus} to ${targetStatus}`,
      400,
      { ruleId: 'pmControlsStatusReportLifecycle', currentStatus, targetStatus },
    );
  }

  const now = ctx.clock.nowIso();

  const updatedReport: StatusReport = {
    ...report,
    status: targetStatus,
    updatedAt: now,
    reviewedAt: targetStatus === 'reviewed' ? now : report.reviewedAt,
    sharedAt: targetStatus === 'shared' ? now : report.sharedAt,
  };

  await ctx.data.runInTransaction(async () => {
    await reports.save(updatedReport);
  });

  return {
    statusReportId: updatedReport.statusReportId,
    projectId: updatedReport.projectId,
    status: updatedReport.status,
    reviewedAt: updatedReport.reviewedAt,
    sharedAt: updatedReport.sharedAt,
    updatedAt: updatedReport.updatedAt,
  };
}
