/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.ts" enhancement="_blank"/>

export type ProjectStatus = 'registered' | 'active' | 'onHold' | 'closed' | 'cancelled';

export interface Project {
  projectId: string;
  name: string;
  clientId: string;
  siteAddress: string;
  budget: number;
  startDate: string;
  endDate: string;
  status: ProjectStatus;
  holdReason: string | null;
  closedAt: string | null;
  cancelledAt: string | null;
  cancellationReason: string | null;
  createdAt: string;
  updatedAt: string;
}

export const PROJECT_STATUS_TRANSITIONS: Record<ProjectStatus, ProjectStatus[]> = {
  registered: ['active', 'cancelled'],
  active: ['onHold', 'closed', 'cancelled'],
  onHold: ['active', 'closed', 'cancelled'],
  closed: [],
  cancelled: [],
};

export function canTransitionProject(from: ProjectStatus, to: ProjectStatus): boolean {
  return PROJECT_STATUS_TRANSITIONS[from]?.includes(to) ?? false;
}

export function projectDateRangeValid(project: Pick<Project, 'startDate' | 'endDate'>): boolean {
  return project.startDate <= project.endDate;
}

export function projectBudgetValid(project: Pick<Project, 'budget'>): boolean {
  return project.budget >= 0;
}

export function projectHoldReasonValid(project: Pick<Project, 'status' | 'holdReason'>): boolean {
  if (project.status === 'onHold') {
    return project.holdReason !== null && project.holdReason.trim().length > 0;
  }
  return project.holdReason === null || project.holdReason.trim().length === 0;
}

export function projectClosedAtValid(project: Pick<Project, 'status' | 'closedAt'>): boolean {
  if (project.status === 'closed') {
    return project.closedAt !== null;
  }
  return project.closedAt === null;
}

export function projectCancelledFieldsValid(
  project: Pick<Project, 'status' | 'cancelledAt' | 'cancellationReason'>,
): boolean {
  if (project.status === 'cancelled') {
    return (
      project.cancelledAt !== null &&
      project.cancellationReason !== null &&
      project.cancellationReason.trim().length > 0
    );
  }
  return (
    project.cancelledAt === null &&
    (project.cancellationReason === null || project.cancellationReason.trim().length === 0)
  );
}

export function projectNotBothClosedAndCancelled(
  project: Pick<Project, 'closedAt' | 'cancelledAt'>,
): boolean {
  return !(project.closedAt !== null && project.cancelledAt !== null);
}

export function projectUpdatedAtValid(
  project: Pick<Project, 'createdAt' | 'updatedAt'>,
): boolean {
  return project.updatedAt >= project.createdAt;
}

export function projectClosedAtAfterCreation(
  project: Pick<Project, 'createdAt' | 'closedAt'>,
): boolean {
  if (project.closedAt === null) return true;
  return project.closedAt >= project.createdAt;
}

export function projectCancelledAtAfterCreation(
  project: Pick<Project, 'createdAt' | 'cancelledAt'>,
): boolean {
  if (project.cancelledAt === null) return true;
  return project.cancelledAt >= project.createdAt;
}

export function projectAllowsFieldEntries(project: Pick<Project, 'status'>): boolean {
  return project.status === 'active';
}

export function projectAllowsChangeOrders(project: Pick<Project, 'status'>): boolean {
  return project.status === 'active';
}

export function validateProjectInvariants(project: Project): string[] {
  const errors: string[] = [];

  if (!projectDateRangeValid(project)) {
    errors.push('startDate must be on or before endDate.');
  }
  if (!projectBudgetValid(project)) {
    errors.push('budget must be greater than or equal to zero.');
  }
  if (!projectHoldReasonValid(project)) {
    errors.push('holdReason is required when status is onHold and must be empty otherwise.');
  }
  if (!projectClosedAtValid(project)) {
    errors.push('closedAt is required when status is closed and must be empty otherwise.');
  }
  if (!projectCancelledFieldsValid(project)) {
    errors.push('cancelledAt and cancellationReason are required when status is cancelled and must be empty otherwise.');
  }
  if (!projectNotBothClosedAndCancelled(project)) {
    errors.push('A project cannot be both closed and cancelled; closedAt and cancelledAt are mutually exclusive.');
  }
  if (!projectUpdatedAtValid(project)) {
    errors.push('updatedAt must be greater than or equal to createdAt.');
  }
  if (!projectClosedAtAfterCreation(project)) {
    errors.push('closedAt, when present, must be greater than or equal to createdAt.');
  }
  if (!projectCancelledAtAfterCreation(project)) {
    errors.push('cancelledAt, when present, must be greater than or equal to createdAt.');
  }

  return errors;
}
