/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.ts" enhancement="_blank"/>
import type { WorkTask, WorkTaskStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';

export interface WorkTaskListFilter {
  projectId?: string;
  assignedWorkerId?: string;
  status?: WorkTaskStatus;
}

export interface IWorkTaskRepository {
  getById(workTaskId: string): Promise<WorkTask>;
  list(filter?: WorkTaskListFilter): Promise<WorkTask[]>;
  save(task: WorkTask): Promise<void>;
  findByProject(projectId: string): Promise<WorkTask[]>;
  findByAssignee(assignedWorkerId: string): Promise<WorkTask[]>;
  findByStatus(status: WorkTaskStatus): Promise<WorkTask[]>;
}
