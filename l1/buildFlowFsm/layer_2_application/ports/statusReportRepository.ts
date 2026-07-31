/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.ts" enhancement="_blank"/>
import type {
  StatusReport,
  StatusReportStatus,
} from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

export interface StatusReportListFilter {
  projectId?: string;
  status?: StatusReportStatus;
  reportPeriodStart?: string;
  reportPeriodEnd?: string;
}

export interface IStatusReportRepository {
  /** Retrieve a status report by its unique identifier (includes embedded DelayRiskSuggestion). Throws NOT_FOUND. */
  getById(statusReportId: string): Promise<StatusReport>;
  /** List status reports matching the given filter criteria. */
  list(filter?: StatusReportListFilter): Promise<StatusReport[]>;
  /** Persist or update the status report aggregate with its embedded DelayRiskSuggestion. */
  save(report: StatusReport): Promise<void>;
  /** Find all status reports for a given project. */
  findByProject(projectId: string): Promise<StatusReport[]>;
  /** Find status reports within a reporting period. */
  findByPeriod(from: string, to: string): Promise<StatusReport[]>;
  /** Find the most recent status report for a project. Returns null if none exists. */
  findLatestByProject(projectId: string): Promise<StatusReport | null>;
}
