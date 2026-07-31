/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryTimeLogs.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { ITimeLogRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { TimeLog, TimeLogStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface QueryTimeLogsInput {
  workTaskId?: string;
  workerName?: string;
  logDate?: string;
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface QueryTimeLogItem {
  timeLogId: string;
  workTaskId: string;
  workerName: string;
  logDate: string;
  hoursWorked: number;
  laborCost: number;
  status: string;
  voidedAt?: string | null;
  voidReason?: string | null;
  createdAt: string;
}

export interface QueryTimeLogsOutput {
  timeLogs: QueryTimeLogItem[];
  total: number;
}

export async function queryTimeLogs(ctx: RequestContext, input: QueryTimeLogsInput): Promise<QueryTimeLogsOutput> {
  const repo = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');

  const page = input.page ?? 1;
  const pageSize = input.pageSize ?? 20;

  // Validate status filter if provided — must be 'posted' or 'voided'; invalid value yields empty result.
  if (input.status !== undefined && input.status !== null && input.status !== '') {
    if (input.status !== 'posted' && input.status !== 'voided') {
      // rule: timeLogLinkingRequired — invalid status yields empty result
      return { timeLogs: [], total: 0 };
    }
  }

  // Fetch records using the most specific port method available.
  let records: TimeLog[];

  if (input.workTaskId) {
    records = await repo.listByWorkTaskId(input.workTaskId);
  } else if (input.logDate) {
    records = await repo.listByPeriod(input.logDate, input.logDate);
  } else {
    // No port-level filter available; use a wide date range to retrieve all records.
    records = await repo.listByPeriod('1900-01-01', '2999-12-31');
  }

  // Apply in-memory filters for criteria not handled by the port query.
  let filtered: TimeLog[] = records;

  if (input.workerName) {
    filtered = filtered.filter((r) => r.workerName === input.workerName);
  }

  if (input.logDate && input.workTaskId) {
    // logDate was not used as the port query (workTaskId took precedence); filter in memory.
    filtered = filtered.filter((r) => r.logDate === input.logDate);
  }

  if (input.status) {
    const statusFilter = input.status as TimeLogStatus;
    filtered = filtered.filter((r) => r.status === statusFilter);
  }

  // rule: timeLogLinkingRequired — every time log must be linked to a work task and a worker; exclude orphaned records.
  filtered = filtered.filter(
    (r) => r.workTaskId != null && r.workTaskId !== '' && r.workerName != null && r.workerName !== '',
  );

  // rule: jobCostDerivation — labor cost values must be available for job cost derivation and budget-versus-actual review.
  filtered = filtered.filter((r) => r.laborCost != null && !Number.isNaN(r.laborCost));

  // Sort by logDate descending, then createdAt descending.
  filtered.sort((a, b) => {
    if (b.logDate !== a.logDate) {
      return b.logDate.localeCompare(a.logDate);
    }
    return b.createdAt.localeCompare(a.createdAt);
  });

  const total = filtered.length;

  // Apply pagination.
  const offset = (page - 1) * pageSize;
  const paged = filtered.slice(offset, offset + pageSize);

  // Project each TimeLog into the output shape.
  const timeLogs: QueryTimeLogItem[] = paged.map((r) => ({
    timeLogId: r.timeLogId,
    workTaskId: r.workTaskId,
    workerName: r.workerName,
    logDate: r.logDate,
    hoursWorked: r.hoursWorked,
    laborCost: r.laborCost,
    status: r.status,
    voidedAt: r.voidedAt,
    voidReason: r.voidReason,
    createdAt: r.createdAt,
  }));

  return { timeLogs, total };
}
