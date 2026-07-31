/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createTimeLog.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { ITimeLogRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { TimeLog } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';
import { computeLaborCost } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

const STANDARD_HOURLY_RATE = 75.0;

export interface CreateTimeLogInput {
  workTaskId: string;
  logDate: string;
  hoursWorked: number;
}

export interface CreateTimeLogOutput {
  timeLogId: string;
  workTaskId: string;
  workerName: string;
  logDate: string;
  hoursWorked: number;
  laborCost: number;
  status: string;
  createdAt: string;
}

export async function createTimeLog(ctx: RequestContext, input: CreateTimeLogInput): Promise<CreateTimeLogOutput> {
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');

  // rule: timeLogLinkingRequired — a time log must be linked to a valid, existing work task
  let task: TimeLog extends never ? never : Awaited<ReturnType<typeof workTasks.getById>>;
  try {
    task = await workTasks.getById(input.workTaskId);
  } catch {
    throw new AppError(
      'VALIDATION_ERROR',
      'timeLogLinkingRequired: time log must be linked to a valid, existing work task.',
      400,
      { ruleId: 'timeLogLinkingRequired' },
    );
  }
  if (!task) {
    throw new AppError(
      'VALIDATION_ERROR',
      'timeLogLinkingRequired: time log must be linked to a valid, existing work task.',
      400,
      { ruleId: 'timeLogLinkingRequired' },
    );
  }

  const workerName = ctx.sessionContext.actorSession.actorId ?? ctx.sessionContext.actorId;
  if (!workerName) {
    throw new AppError(
      'VALIDATION_ERROR',
      'Worker name could not be resolved from the session context.',
      400,
    );
  }

  const now = ctx.clock.nowIso();
  const timeLogId = ctx.idGenerator.newId();

  // rule: jobCostDerivation — compute laborCost from hoursWorked and standard hourly rate
  const laborCost = computeLaborCost(input.hoursWorked, STANDARD_HOURLY_RATE);

  const record: TimeLog = {
    timeLogId,
    workTaskId: input.workTaskId,
    workerName,
    logDate: input.logDate,
    hoursWorked: input.hoursWorked,
    laborCost,
    status: 'posted',
    voidedAt: null,
    voidReason: null,
    createdAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    await timeLogs.append(record);
  });

  return {
    timeLogId: record.timeLogId,
    workTaskId: record.workTaskId,
    workerName: record.workerName,
    logDate: record.logDate,
    hoursWorked: record.hoursWorked,
    laborCost: record.laborCost,
    status: record.status,
    createdAt: record.createdAt,
  };
}
