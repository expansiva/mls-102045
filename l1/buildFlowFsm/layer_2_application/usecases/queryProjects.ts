/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/queryProjects.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository, ProjectListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { Project, ProjectStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface QueryProjectsInput {
  status?: string;
  page?: number;
  pageSize?: number;
}

export interface QueryProjectsItem {
  projectId: string;
  name: string;
  clientId: string;
  clientName: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
}

export interface QueryProjectsOutput {
  projects: QueryProjectsItem[];
  total: number;
}

export async function queryProjects(ctx: RequestContext, input: QueryProjectsInput): Promise<QueryProjectsOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');

  // rule: dashboardShowsActiveProjects — when no status is supplied, default to 'active'
  const effectiveStatus: ProjectStatus | undefined = input.status
    ? (input.status as ProjectStatus)
    : 'active';

  const page = Math.max(1, input.page ?? 1);
  const pageSize = Math.max(1, input.pageSize ?? 20);

  const filter: ProjectListFilter = {};
  if (effectiveStatus) {
    filter.status = effectiveStatus;
  }

  const allProjects = await projects.list(filter);

  // Sort by name ascending (in-memory since the port does not support orderBy)
  const sorted = [...allProjects].sort((a, b) => a.name.localeCompare(b.name));

  const total = sorted.length;
  const offset = (page - 1) * pageSize;
  const pageSlice = sorted.slice(offset, offset + pageSize);

  // Collect distinct clientIds (plural-first: never fetch clients one-by-one)
  const clientIds = [...new Set(pageSlice.map((p) => p.clientId).filter((id) => id.length > 0))];

  // Bulk-resolve Client master-data records via MDM facade
  const clientNameMap = new Map<string, string>();
  if (clientIds.length > 0) {
    const clientEntities = await ctx.mdm.collection.getMany({ mdmIds: clientIds });
    for (const entity of clientEntities) {
      const name = (entity.details as unknown as Record<string, unknown>).name;
      if (typeof name === 'string') {
        clientNameMap.set(entity.mdmId, name);
      }
    }
  }

  const mappedItems: QueryProjectsItem[] = pageSlice.map((project: Project) => ({
    projectId: project.projectId,
    name: project.name,
    clientId: project.clientId,
    clientName: clientNameMap.get(project.clientId) ?? '',
    siteAddress: project.siteAddress,
    budget: project.budget,
    startDate: project.startDate,
    endDate: project.endDate,
    status: project.status,
  }));

  return {
    projects: mappedItems,
    total,
  };
}
