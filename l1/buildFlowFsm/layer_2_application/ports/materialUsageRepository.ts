/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/materialUsageRepository.ts" enhancement="_blank"/>
import type { MaterialUsage } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/materialUsage.js';

export interface MaterialUsageListFilter {
  projectId?: string;
  materialType?: string;
  from?: string;
  to?: string;
}

export interface IMaterialUsageRepository {
  /** Append a new material usage event record (append-only, no update or delete) */
  append(record: MaterialUsage): Promise<void>;
  /** List all material usage events for a given project */
  listByProjectId(projectId: string): Promise<MaterialUsage[]>;
  /** List material usage events within a date range */
  listByPeriod(from: string, to: string): Promise<MaterialUsage[]>;
  /** List material usage events for a given material type within a project */
  listByMaterialType(projectId: string, materialType: string): Promise<MaterialUsage[]>;
}
