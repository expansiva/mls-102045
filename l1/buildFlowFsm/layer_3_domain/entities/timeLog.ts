/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.ts" enhancement="_blank"/>
export type TimeLogStatus = 'posted' | 'voided';

export interface TimeLog {
  timeLogId: string;
  workTaskId: string;
  workerName: string;
  logDate: string;
  hoursWorked: number;
  laborCost: number;
  status: TimeLogStatus;
  voidedAt: string | null;
  voidReason: string | null;
  createdAt: string;
}

export const TIME_LOG_STATUS_TRANSITIONS: Record<TimeLogStatus, TimeLogStatus[]> = {
  posted: ['voided'],
  voided: [],
};

export function canTransitionTimeLog(from: TimeLogStatus, to: TimeLogStatus): boolean {
  return TIME_LOG_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function computeLaborCost(hoursWorked: number, hourlyRate: number): number {
  return Math.round(hoursWorked * hourlyRate * 100) / 100;
}

export function isTimeLogVoided(timeLog: Pick<TimeLog, 'status'>): boolean {
  return timeLog.status === 'voided';
}
