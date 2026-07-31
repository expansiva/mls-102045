/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTaskRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IWorkTaskRepository, WorkTaskListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { WorkTask, WorkTaskStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';

interface WorkTaskRow {
  work_task_id: string;
  project_id: string;
  assigned_worker_id: string | null;
  status: string;
  created_at: string;
  details: string | null;
}

interface WorkTaskDetails {
  title: string;
  description: string | null;
  dueDate: string;
  completedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  updatedAt: string;
}

function toRow(task: WorkTask): WorkTaskRow {
  const details: WorkTaskDetails = {
    title: task.title,
    description: task.description,
    dueDate: task.dueDate,
    completedAt: task.completedAt,
    cancelledAt: task.cancelledAt,
    cancellationReason: task.cancellationReason,
    updatedAt: task.updatedAt,
  };
  return {
    work_task_id: task.workTaskId,
    project_id: task.projectId,
    assigned_worker_id: task.assignedWorkerId,
    status: task.status,
    created_at: task.createdAt,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(row: WorkTaskRow): WorkTaskDetails {
  return {
    title: '',
    description: null,
    dueDate: row.created_at,
    completedAt: null,
    cancelledAt: null,
    cancellationReason: null,
    updatedAt: row.created_at,
  };
}

function parseDetails(row: WorkTaskRow): WorkTaskDetails {
  let parsed: Partial<WorkTaskDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<WorkTaskDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(row), ...parsed };
}

function toDomain(row: WorkTaskRow): WorkTask {
  const d = parseDetails(row);
  return {
    workTaskId: row.work_task_id,
    projectId: row.project_id,
    title: d.title,
    description: d.description,
    assignedWorkerId: row.assigned_worker_id ?? '',
    status: row.status as WorkTaskStatus,
    dueDate: d.dueDate,
    completedAt: d.completedAt,
    cancelledAt: d.cancelledAt,
    cancellationReason: d.cancellationReason,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createWorkTaskRepositoryAdapter(ctx: RequestContext): IWorkTaskRepository {
  const getTable = () => ctx.data.moduleData.getTable<WorkTaskRow>('work_task');

  return {
    async getById(workTaskId) {
      const repo = await getTable();
      let row: WorkTaskRow | null;
      try {
        row = await repo.findOne({ where: { work_task_id: workTaskId } });
      } catch (err) {
        // Driver input/format rejection — the id cannot identify an existing row.
        if (err instanceof AppError) throw err;
        throw new AppError('NOT_FOUND', `WorkTask ${workTaskId} not found`, 404, { workTaskId });
      }
      if (!row) throw new AppError('NOT_FOUND', `WorkTask ${workTaskId} not found`, 404, { workTaskId });
      return toDomain(row);
    },

    async list(filter?: WorkTaskListFilter) {
      const where: Partial<WorkTaskRow> = {};
      if (filter?.projectId) where.project_id = filter.projectId;
      if (filter?.assignedWorkerId) where.assigned_worker_id = filter.assignedWorkerId;
      if (filter?.status) where.status = filter.status;
      const repo = await getTable();
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async save(task) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { work_task_id: task.workTaskId } });
      if (existing) {
        await repo.update({ where: { work_task_id: task.workTaskId }, patch: toRow(task) });
      } else {
        await repo.insert({ record: toRow(task) });
      }
    },

    async findByProject(projectId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { project_id: projectId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async findByAssignee(assignedWorkerId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { assigned_worker_id: assignedWorkerId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async findByStatus(status) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { status },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },
  };
}
