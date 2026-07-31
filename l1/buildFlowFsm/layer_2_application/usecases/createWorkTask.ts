/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createWorkTask.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { ITimeLogRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/timeLogRepository.js';
import type { WorkTask } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import type { TimeLog } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/timeLog.js';

export interface CreateWorkTaskInput {
  projectId: string;
  title: string;
  description?: string;
  assignedWorkerId: string;
  dueDate: string;
}

export interface CreateWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  title: string;
  description?: string;
  assignedWorkerId: string;
  status: string;
  dueDate: string;
  createdAt: string;
  updatedAt: string;
}

export async function createWorkTask(
  ctx: RequestContext,
  input: CreateWorkTaskInput,
): Promise<CreateWorkTaskOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const timeLogs = resolveRepository<ITimeLogRepository>(ctx, 'TimeLog');

  // Step 1: Load the Project referenced by projectId
  let project: Project;
  try {
    project = await projects.getById(input.projectId);
  } catch {
    throw new AppError(
      'NOT_FOUND',
      `Project not found: ${input.projectId}`,
      404,
      { projectId: input.projectId },
    );
  }

  // Rule: operationsRequireActiveProject — project must be active to create work tasks
  if (String(project.status) !== 'active') {
    throw new AppError(
      'VALIDATION_ERROR',
      'operationsRequireActiveProject: project must be active to create work tasks.',
      400,
      { ruleId: 'operationsRequireActiveProject', projectStatus: project.status },
    );
  }

  // Rule: taskDueDateWithinSchedule — dueDate must fall within project.startDate … project.endDate
  if (input.dueDate < project.startDate || input.dueDate > project.endDate) {
    throw new AppError(
      'VALIDATION_ERROR',
      'taskDueDateWithinSchedule: dueDate must be within the project schedule.',
      400,
      {
        ruleId: 'taskDueDateWithinSchedule',
        dueDate: input.dueDate,
        projectStartDate: project.startDate,
        projectEndDate: project.endDate,
      },
    );
  }

  // Rule: singleTaskAssignment — assignedWorkerId must be a single non-empty value
  if (
    typeof input.assignedWorkerId !== 'string' ||
    input.assignedWorkerId.trim() === '' ||
    input.assignedWorkerId.includes(',')
  ) {
    throw new AppError(
      'VALIDATION_ERROR',
      'singleTaskAssignment: assignedWorkerId must be a single non-empty worker id.',
      400,
      { ruleId: 'singleTaskAssignment', assignedWorkerId: input.assignedWorkerId },
    );
  }

  const now = ctx.clock.nowIso();
  const workTaskId = ctx.idGenerator.newId();

  const task: WorkTask = {
    workTaskId,
    projectId: input.projectId,
    title: input.title,
    description: input.description ?? null,
    assignedWorkerId: input.assignedWorkerId,
    status: 'assigned',
    dueDate: input.dueDate,
    completedAt: null,
    cancelledAt: null,
    cancellationReason: null,
    createdAt: now,
    updatedAt: now,
  };

  // Step 10: Build a TimeLog audit event for the task creation
  const auditLog: TimeLog = {
    timeLogId: ctx.idGenerator.newId(),
    workTaskId,
    workerName: input.assignedWorkerId,
    logDate: now,
    hoursWorked: 0,
    laborCost: 0,
    status: 'posted',
    voidedAt: null,
    voidReason: null,
    createdAt: now,
  };

  // Steps 9–10: persist WorkTask and append TimeLog audit event in a single transaction
  await ctx.data.runInTransaction(async () => {
    await workTasks.save(task);
    await timeLogs.append(auditLog);
  });

  // Step 11: Return the created WorkTask projection
  return {
    workTaskId: task.workTaskId,
    projectId: task.projectId,
    title: task.title,
    description: task.description ?? undefined,
    assignedWorkerId: task.assignedWorkerId,
    status: task.status,
    dueDate: task.dueDate,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };
}
