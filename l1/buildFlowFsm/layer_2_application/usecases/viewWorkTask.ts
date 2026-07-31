/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewWorkTask.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { WorkTask } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface ViewWorkTaskInput {
  workTaskId: string;
}

export interface ViewWorkTaskOutput {
  workTaskId: string;
  projectId: string;
  projectName: string;
  title: string;
  description: string | null;
  assignedWorkerId: string;
  status: string;
  dueDate: string;
  isOverdue: boolean;
  completedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  createdAt: string;
  updatedAt: string;
}

export async function viewWorkTask(ctx: RequestContext, input: ViewWorkTaskInput): Promise<ViewWorkTaskOutput> {
  const actorId = ctx.sessionContext.actorId;

  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  const task: WorkTask | null = await workTasks.getById(input.workTaskId);
  if (!task) {
    throw new AppError('NOT_FOUND', `Work task not found: ${input.workTaskId}`, 404, { workTaskId: input.workTaskId });
  }

  // rule: fieldWorkerTaskVisibility — only the assigned worker may view the task; throw the same NOT_FOUND to avoid leaking other workers' assignments
  if (task.assignedWorkerId !== actorId) {
    throw new AppError('NOT_FOUND', `Work task not found: ${input.workTaskId}`, 404, { workTaskId: input.workTaskId });
  }

  const project: Project | null = await projects.getById(task.projectId);
  if (!project) {
    throw new AppError('NOT_FOUND', `Project not found: ${task.projectId}`, 404, { projectId: task.projectId });
  }

  const today = ctx.clock.nowIso().slice(0, 10);
  // rule: overdueTaskHighlighting — compute isOverdue when dueDate has passed and the task is not completed or cancelled
  const isOverdue = task.dueDate < today && task.status !== 'completed' && task.status !== 'cancelled';

  // rule: mobileFieldUsability — assemble the complete detail payload for the mobile field-worker detail screen
  const output: ViewWorkTaskOutput = {
    workTaskId: task.workTaskId,
    projectId: task.projectId,
    projectName: project.name,
    title: task.title,
    description: task.description,
    assignedWorkerId: task.assignedWorkerId,
    status: task.status,
    dueDate: task.dueDate,
    isOverdue,
    completedAt: task.completedAt,
    cancelledAt: task.cancelledAt,
    cancellationReason: task.cancellationReason,
    createdAt: task.createdAt,
    updatedAt: task.updatedAt,
  };

  return output;
}
