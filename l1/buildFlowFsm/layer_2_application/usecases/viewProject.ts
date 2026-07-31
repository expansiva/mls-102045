/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewProject.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { IWorkTaskRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/workTaskRepository.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';
import type { WorkTask } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/workTask.js';

export interface ViewProjectInput {
  projectId: string;
}

export interface ViewProjectTask {
  workTaskId: string;
  title: string;
  description?: string | null;
  assignedWorkerId?: string | null;
  status: string;
  dueDate?: string | null;
  completedAt?: string | null;
}

export interface ViewProjectOutput {
  projectId: string;
  name: string;
  clientId: string;
  clientName: string;
  clientCompany?: string | null;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
  holdReason?: string | null;
  closedAt?: string | null;
  cancelledAt?: string | null;
  cancellationReason?: string | null;
  createdAt: string;
  updatedAt: string;
  tasks: ViewProjectTask[];
}

export async function viewProject(ctx: RequestContext, input: ViewProjectInput): Promise<ViewProjectOutput> {
  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const workTasks = resolveRepository<IWorkTaskRepository>(ctx, 'WorkTask');

  // 1. Load the Project aggregate by projectId.
  let project: Project;
  try {
    project = await projects.getById(input.projectId);
  } catch {
    // rule: operationsRequireActiveProject — the project must exist to be viewed.
    throw new AppError(
      'NOT_FOUND',
      `Project not found: ${input.projectId}`,
      404,
      { ruleId: 'operationsRequireActiveProject', projectId: input.projectId },
    );
  }

  // 2. rule: operationsRequireActiveProject — the project is returned regardless of status
  //    (registered, active, onHold, closed, or cancelled) so the manager can review all details.
  //    Only existence is enforced; no status-based blocking for this view operation.

  // 3. Read the Client master-data record via MDM facade.
  const clientEntity = await ctx.mdm.entity.get({ mdmId: project.clientId });
  const clientDetails = clientEntity.details as unknown as Record<string, unknown>;
  const clientName: string = clientEntity.details.name;
  const clientCompany: string | null =
    (clientDetails.company as string | undefined) ?? null;

  // 4. Load all WorkTask records scoped to this project, sorted by dueDate ascending.
  const taskRecords: WorkTask[] = await workTasks.findByProject(input.projectId);
  const sortedTasks = [...taskRecords].sort((a, b) => a.dueDate.localeCompare(b.dueDate));

  // 5. Assemble the tasks array.
  const tasks: ViewProjectTask[] = sortedTasks.map((t) => ({
    workTaskId: t.workTaskId,
    title: t.title,
    description: t.description,
    assignedWorkerId: t.assignedWorkerId,
    status: t.status,
    dueDate: t.dueDate,
    completedAt: t.completedAt,
  }));

  // 6. Assemble and return the output.
  const output: ViewProjectOutput = {
    projectId: project.projectId,
    name: project.name,
    clientId: project.clientId,
    clientName,
    clientCompany,
    siteAddress: project.siteAddress,
    budget: project.budget,
    startDate: project.startDate,
    endDate: project.endDate,
    status: project.status,
    holdReason: project.holdReason,
    closedAt: project.closedAt,
    cancelledAt: project.cancelledAt,
    cancellationReason: project.cancellationReason,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt,
    tasks,
  };

  return output;
}
