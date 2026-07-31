/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/voidTimeLog.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { ITimeLogRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { TimeLog } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';
import { canTransitionTimeLog } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface VoidTimeLogInput {
  timeLogId: string;
  voidReason: string;
}

export interface VoidTimeLogOutput {
  timeLogId: string;
  workTaskId: string;
  workerName: string;
  logDate: string;
  hoursWorked: number;
  laborCost: number;
  status: string;
  voidedAt: string;
  voidReason: string;
}

export async function voidTimeLog(ctx: RequestContext, input: VoidTimeLogInput): Promise<VoidTimeLogOutput> {
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');

  // Modeling gap: port has no getById; using listByPeriod with a wide range to locate the record by id.
  const candidates = await timeLogs.listByPeriod('1970-01-01', '2999-12-31');
  const existing: TimeLog | null = candidates.find((tl) => tl.timeLogId === input.timeLogId) ?? null;

  if (!existing) {
    throw new AppError('VALIDATION_ERROR', 'TimeLog not found', 400, { timeLogId: input.timeLogId });
  }

  if (String(existing.status) !== 'posted') {
    throw new AppError(
      'VALIDATION_ERROR',
      'Only a time log that was previously posted can be voided',
      400,
      { ruleId: 'jobCostDerivation', currentStatus: existing.status },
    );
  }

  if (!canTransitionTimeLog(existing.status, 'voided')) {
    throw new AppError(
      'CONFLICT',
      `Cannot transition TimeLog from '${existing.status}' to 'voided'`,
      409,
      { ruleId: 'jobCostDerivation', from: existing.status, to: 'voided' },
    );
  }

  const now = ctx.clock.nowIso();

  const voided: TimeLog = {
    timeLogId: existing.timeLogId,
    workTaskId: existing.workTaskId,
    workerName: existing.workerName,
    logDate: existing.logDate,
    // rule: jobCostDerivation — preserve original hoursWorked and laborCost for audit (do not zero out)
    hoursWorked: existing.hoursWorked,
    laborCost: existing.laborCost,
    status: 'voided',
    voidedAt: now,
    voidReason: input.voidReason,
    createdAt: existing.createdAt,
  };

  await ctx.data.runInTransaction(async () => {
    await timeLogs.append(voided);
  });

  return {
    timeLogId: voided.timeLogId,
    workTaskId: voided.workTaskId,
    workerName: voided.workerName,
    logDate: voided.logDate,
    hoursWorked: voided.hoursWorked,
    laborCost: voided.laborCost,
    status: voided.status,
    voidedAt: now,
    voidReason: input.voidReason,
  };
}
