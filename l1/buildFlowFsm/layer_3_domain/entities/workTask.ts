/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.ts" enhancement="_blank"/>

export type WorkTaskStatus = 'assigned' | 'inProgress' | 'completed' | 'cancelled';

export interface WorkTask {
  workTaskId: string;
  projectId: string;
  title: string;
  description: string | null;
  assignedWorkerId: string;
  status: WorkTaskStatus;
  dueDate: string;
  completedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  createdAt: string;
  updatedAt: string;
}

export const WORK_TASK_STATUS_TRANSITIONS: Record<WorkTaskStatus, WorkTaskStatus[]> = {
  assigned: ['inProgress', 'cancelled'],
  inProgress: ['completed', 'cancelled'],
  completed: [],
  cancelled: [],
};

export function canTransitionWorkTask(from: WorkTaskStatus, to: WorkTaskStatus): boolean {
  return WORK_TASK_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function isInitialWorkTaskStatus(status: WorkTaskStatus): boolean {
  return status === 'assigned';
}

export function workTaskCompletedInvariant(task: Pick<WorkTask, 'status' | 'completedAt'>): boolean {
  if (task.status === 'completed') {
    return task.completedAt !== null;
  }
  return task.completedAt === null;
}

export function workTaskCancelledInvariant(
  task: Pick<WorkTask, 'status' | 'cancelledAt' | 'cancellationReason'>,
): boolean {
  if (task.status === 'cancelled') {
    return task.cancelledAt !== null && task.cancellationReason !== null && task.cancellationReason.trim() !== '';
  }
  return task.cancelledAt === null && (task.cancellationReason === null || task.cancellationReason.trim() === '');
}

export function workTaskMutuallyExclusiveTimestamps(
  task: Pick<WorkTask, 'completedAt' | 'cancelledAt'>,
): boolean {
  return !(task.completedAt !== null && task.cancelledAt !== null);
}

export function workTaskTimestampOrdering(
  task: Pick<WorkTask, 'createdAt' | 'updatedAt' | 'completedAt' | 'cancelledAt' | 'dueDate'>,
): boolean {
  if (task.createdAt > task.updatedAt) return false;
  if (task.completedAt !== null && task.completedAt < task.createdAt) return false;
  if (task.cancelledAt !== null && task.cancelledAt < task.createdAt) return false;
  if (task.dueDate < task.createdAt) return false;
  return true;
}

export function validateWorkTaskInvariants(task: WorkTask): string[] {
  const errors: string[] = [];

  if (!isInitialWorkTaskStatus(task.status) && task.createdAt === task.updatedAt) {
    // Not strictly an error — initial status check is for creation, not re-validation.
  }

  if (!workTaskCompletedInvariant(task)) {
    errors.push('completedAt is required when status is completed and must be null otherwise.');
  }

  if (!workTaskCancelledInvariant(task)) {
    errors.push('cancelledAt and cancellationReason are both required when status is cancelled and must be null/empty otherwise.');
  }

  if (!workTaskMutuallyExclusiveTimestamps(task)) {
    errors.push('A task cannot be both completed and cancelled.');
  }

  if (!workTaskTimestampOrdering(task)) {
    errors.push('Timestamp ordering violated: createdAt <= updatedAt, completedAt/cancelledAt >= createdAt, dueDate >= createdAt.');
  }

  return errors;
}
