/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/createProject.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface CreateProjectInput {
  name: string;
  clientId: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
}

export interface CreateProjectOutput {
  projectId: string;
  name: string;
  clientId: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export async function createProject(ctx: RequestContext, input: CreateProjectInput): Promise<CreateProjectOutput> {
  // rule: projectActivationRequiresCoreFields — reject if name, clientId, or siteAddress is missing or blank
  if (!input.name || input.name.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'Project name is required.', 400, { ruleId: 'projectActivationRequiresCoreFields', field: 'name' });
  }
  if (!input.clientId || input.clientId.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'Project clientId is required.', 400, { ruleId: 'projectActivationRequiresCoreFields', field: 'clientId' });
  }
  if (!input.siteAddress || input.siteAddress.trim().length === 0) {
    throw new AppError('VALIDATION_ERROR', 'Project siteAddress is required.', 400, { ruleId: 'projectActivationRequiresCoreFields', field: 'siteAddress' });
  }

  // rule: jobCostingRequiresBudgetAndSchedule — reject if budget is null/undefined or <= 0, or if startDate or endDate is missing, or if endDate < startDate
  if (input.budget == null || input.budget <= 0) {
    throw new AppError('VALIDATION_ERROR', 'Budget must be greater than zero.', 400, { ruleId: 'jobCostingRequiresBudgetAndSchedule', field: 'budget' });
  }
  if (!input.startDate || !input.endDate) {
    throw new AppError('VALIDATION_ERROR', 'startDate and endDate are required.', 400, { ruleId: 'jobCostingRequiresBudgetAndSchedule' });
  }
  if (input.endDate < input.startDate) {
    throw new AppError('VALIDATION_ERROR', 'endDate must be on or after startDate.', 400, { ruleId: 'jobCostingRequiresBudgetAndSchedule' });
  }

  // Verify the referenced client exists in MDM and is active
  let clientEntity;
  try {
    clientEntity = await ctx.mdm.entity.get({ mdmId: input.clientId });
  } catch {
    throw new AppError('VALIDATION_ERROR', `Client not found: ${input.clientId}`, 400, { clientId: input.clientId });
  }
  if (String(clientEntity.index.status) !== 'Active') {
    throw new AppError('VALIDATION_ERROR', `Client is not active: ${input.clientId}`, 400, { clientId: input.clientId, clientStatus: clientEntity.index.status });
  }

  const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
  const now = ctx.clock.nowIso();
  const projectId = ctx.idGenerator.newId();

  // rule: operationsRequireActiveProject — project starts in 'active' status so tasks, time logs, materials, and change orders can be recorded
  const project: Project = {
    projectId,
    name: input.name,
    clientId: input.clientId,
    siteAddress: input.siteAddress,
    budget: input.budget,
    startDate: input.startDate,
    endDate: input.endDate,
    status: 'active',
    holdReason: null,
    closedAt: null,
    cancelledAt: null,
    cancellationReason: null,
    createdAt: now,
    updatedAt: now,
  };

  await ctx.data.runInTransaction(async () => {
    await projects.save(project);
  });

  return {
    projectId: project.projectId,
    name: project.name,
    clientId: project.clientId,
    siteAddress: project.siteAddress,
    budget: project.budget,
    startDate: project.startDate,
    endDate: project.endDate,
    status: project.status,
    createdAt: project.createdAt,
    updatedAt: project.updatedAt,
  };
}
