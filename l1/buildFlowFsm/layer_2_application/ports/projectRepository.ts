/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.ts" enhancement="_blank"/>
import type { Project, ProjectStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface ProjectListFilter {
  clientId?: string;
  status?: ProjectStatus;
}

export interface IProjectRepository {
  getById(projectId: string): Promise<Project>;
  list(filter?: ProjectListFilter): Promise<Project[]>;
  save(project: Project): Promise<void>;
  findByClient(clientId: string): Promise<Project[]>;
  findByStatus(status: ProjectStatus): Promise<Project[]>;
  findActiveProjects(): Promise<Project[]>;
}
