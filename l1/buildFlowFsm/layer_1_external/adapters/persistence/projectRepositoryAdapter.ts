/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IProjectRepository, ProjectListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { Project, ProjectStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

interface ProjectRow {
  project_id: string;
  client_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface ProjectDetails {
  name: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  holdReason: string | null;
  closedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  updatedAt: string;
}

function toRow(project: Project): ProjectRow {
  const details: ProjectDetails = {
    name: project.name,
    siteAddress: project.siteAddress,
    budget: project.budget,
    startDate: project.startDate,
    endDate: project.endDate,
    holdReason: project.holdReason,
    closedAt: project.closedAt,
    cancelledAt: project.cancelledAt,
    cancellationReason: project.cancellationReason,
    updatedAt: project.updatedAt,
  };
  return {
    project_id: project.projectId,
    client_id: project.clientId,
    status: project.status,
    created_at: project.createdAt,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(row: ProjectRow): ProjectDetails {
  return {
    name: '',
    siteAddress: '',
    budget: 0,
    startDate: '',
    endDate: '',
    holdReason: null,
    closedAt: null,
    cancelledAt: null,
    cancellationReason: null,
    updatedAt: row.created_at,
  };
}

function parseDetails(row: ProjectRow): ProjectDetails {
  let parsed: Partial<ProjectDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<ProjectDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(row), ...parsed };
}

function toDomain(row: ProjectRow): Project {
  const d = parseDetails(row);
  return {
    projectId: row.project_id,
    name: d.name,
    clientId: row.client_id,
    siteAddress: d.siteAddress,
    budget: d.budget,
    startDate: d.startDate,
    endDate: d.endDate,
    status: row.status as ProjectStatus,
    holdReason: d.holdReason,
    closedAt: d.closedAt,
    cancelledAt: d.cancelledAt,
    cancellationReason: d.cancellationReason,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
  };
}

export function createProjectRepositoryAdapter(ctx: RequestContext): IProjectRepository {
  const getTable = () => ctx.data.moduleData.getTable<ProjectRow>('project');

  return {
    async getById(projectId) {
      const repo = await getTable();
      const row = await repo.findOne({ where: { project_id: projectId } });
      if (!row) {
        throw new AppError('NOT_FOUND', `Project ${projectId} not found`, 404, { projectId });
      }
      return toDomain(row);
    },

    async list(filter?: ProjectListFilter) {
      const where: Partial<ProjectRow> = {};
      if (filter?.clientId) where.client_id = filter.clientId;
      if (filter?.status) where.status = filter.status;
      const repo = await getTable();
      const rows = await repo.findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async save(project) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { project_id: project.projectId } });
      if (existing) {
        await repo.update({ where: { project_id: project.projectId }, patch: toRow(project) });
      } else {
        await repo.insert({ record: toRow(project) });
      }
    },

    async findByClient(clientId) {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { client_id: clientId },
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

    async findActiveProjects() {
      const repo = await getTable();
      const rows = await repo.findMany({
        where: { status: 'active' },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },
  };
}
