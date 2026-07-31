/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLogRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { ITimeLogRepository, TimeLogListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { TimeLog, TimeLogStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

interface TimeLogRow {
  time_log_id: string;
  work_task_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface TimeLogDetails {
  workerName: string;
  logDate: string;
  hoursWorked: number;
  laborCost: number;
  voidedAt: string | null;
  voidReason: string | null;
}

function toRow(record: TimeLog): TimeLogRow {
  const details: TimeLogDetails = {
    workerName: record.workerName,
    logDate: record.logDate,
    hoursWorked: record.hoursWorked,
    laborCost: record.laborCost,
    voidedAt: record.voidedAt,
    voidReason: record.voidReason,
  };
  return {
    time_log_id: record.timeLogId,
    work_task_id: record.workTaskId,
    status: record.status,
    created_at: record.createdAt,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(row: TimeLogRow): TimeLogDetails {
  return {
    workerName: '',
    logDate: row.created_at,
    hoursWorked: 0,
    laborCost: 0,
    voidedAt: null,
    voidReason: null,
  };
}

function parseDetails(row: TimeLogRow): TimeLogDetails {
  let parsed: Partial<TimeLogDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<TimeLogDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(row), ...parsed };
}

function toDomain(row: TimeLogRow): TimeLog {
  const d = parseDetails(row);
  return {
    timeLogId: row.time_log_id,
    workTaskId: row.work_task_id,
    workerName: d.workerName,
    logDate: d.logDate,
    hoursWorked: d.hoursWorked,
    laborCost: d.laborCost,
    status: row.status as TimeLogStatus,
    voidedAt: d.voidedAt,
    voidReason: d.voidReason,
    createdAt: row.created_at,
  };
}

export function createTimeLogRepositoryAdapter(ctx: RequestContext): ITimeLogRepository {
  const getTable = () => ctx.data.moduleData.getTable<TimeLogRow>('time_log');

  return {
    async append(record: TimeLog): Promise<void> {
      const repo = await getTable();
      await repo.insert({ record: toRow(record) });
    },

    async listByWorkTaskId(workTaskId: string): Promise<TimeLog[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { work_task_id: workTaskId },
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows.map(toDomain);
    },

    async listByPeriod(from: string, to: string): Promise<TimeLog[]> {
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows
        .filter((r) => r.created_at >= from && r.created_at <= to)
        .map(toDomain);
    },

    async listByUserId(userId: string, from: string, to: string): Promise<TimeLog[]> {
      // The time_log table has no dedicated user_id column; userId is not part of the
      // TimeLog entity. Filter by the requested period and match workerName against the
      // supplied userId (the caller may pass the worker's display name as userId).
      const repo = await getTable();
      const rows = await repo.findMany({
        orderBy: { field: 'created_at', direction: 'asc' },
      });
      return rows
        .filter((r) => r.created_at >= from && r.created_at <= to)
        .filter((r) => {
          const d = parseDetails(r);
          return d.workerName === userId;
        })
        .map(toDomain);
    },
  };
}
