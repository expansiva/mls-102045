/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.ts" enhancement="_blank"/>
import type { TimeLog } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface TimeLogListFilter {
  workTaskId?: string;
  userId?: string;
  status?: TimeLog['status'];
  from?: string;
  to?: string;
}

export interface ITimeLogRepository {
  /** Append a new time log event record (append-only, no update or delete). */
  append(record: TimeLog): Promise<void>;
  /** List all time log events for a given work task. */
  listByWorkTaskId(workTaskId: string): Promise<TimeLog[]>;
  /** List time log events within a date range. */
  listByPeriod(from: string, to: string): Promise<TimeLog[]>;
  /** List time log events for a given user within a date range. */
  listByUserId(userId: string, from: string, to: string): Promise<TimeLog[]>;
}
