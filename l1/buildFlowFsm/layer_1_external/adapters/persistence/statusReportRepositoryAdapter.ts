/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReportRepositoryAdapter.ts" enhancement="_blank"/>
import { AppError, type RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import type { IStatusReportRepository, StatusReportListFilter } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { StatusReport, StatusReportStatus, DelayRiskSuggestion } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';

interface StatusReportRow {
  status_report_id: string;
  project_id: string;
  status: string;
  created_at: string;
  details: string | null;
}

interface StatusReportDetails {
  reportPeriodStart: string;
  reportPeriodEnd: string;
  summary: string;
  tasksOverview: string | null;
  timeLogsOverview: string | null;
  materialsOverview: string | null;
  delayRiskAssessment: string | null;
  pmNotes: string | null;
  generatedAt: string;
  reviewedAt: string | null;
  sharedAt: string | null;
  updatedAt: string;
  delayRiskSuggestions: DelayRiskSuggestion[];
}

function toRow(report: StatusReport): StatusReportRow {
  const details: StatusReportDetails = {
    reportPeriodStart: report.reportPeriodStart,
    reportPeriodEnd: report.reportPeriodEnd,
    summary: report.summary,
    tasksOverview: report.tasksOverview,
    timeLogsOverview: report.timeLogsOverview,
    materialsOverview: report.materialsOverview,
    delayRiskAssessment: report.delayRiskAssessment,
    pmNotes: report.pmNotes,
    generatedAt: report.generatedAt,
    reviewedAt: report.reviewedAt,
    sharedAt: report.sharedAt,
    updatedAt: report.updatedAt,
    delayRiskSuggestions: report.delayRiskSuggestions,
  };
  return {
    status_report_id: report.statusReportId,
    project_id: report.projectId,
    status: report.status,
    created_at: report.createdAt,
    details: JSON.stringify(details),
  };
}

function detailsDefaults(row: StatusReportRow): StatusReportDetails {
  return {
    reportPeriodStart: '',
    reportPeriodEnd: '',
    summary: '',
    tasksOverview: null,
    timeLogsOverview: null,
    materialsOverview: null,
    delayRiskAssessment: null,
    pmNotes: null,
    generatedAt: row.created_at,
    reviewedAt: null,
    sharedAt: null,
    updatedAt: row.created_at,
    delayRiskSuggestions: [],
  };
}

function parseDetails(row: StatusReportRow): StatusReportDetails {
  let parsed: Partial<StatusReportDetails> = {};
  try {
    parsed = (JSON.parse(row.details ?? '{}') ?? {}) as Partial<StatusReportDetails>;
  } catch {
    parsed = {};
  }
  return { ...detailsDefaults(row), ...parsed };
}

function toDomain(row: StatusReportRow): StatusReport {
  const d = parseDetails(row);
  return {
    statusReportId: row.status_report_id,
    projectId: row.project_id,
    status: row.status as StatusReportStatus,
    reportPeriodStart: d.reportPeriodStart,
    reportPeriodEnd: d.reportPeriodEnd,
    summary: d.summary,
    tasksOverview: d.tasksOverview,
    timeLogsOverview: d.timeLogsOverview,
    materialsOverview: d.materialsOverview,
    delayRiskAssessment: d.delayRiskAssessment,
    pmNotes: d.pmNotes,
    generatedAt: d.generatedAt,
    reviewedAt: d.reviewedAt,
    sharedAt: d.sharedAt,
    createdAt: row.created_at,
    updatedAt: d.updatedAt,
    delayRiskSuggestions: d.delayRiskSuggestions ?? [],
  };
}

export function createStatusReportRepositoryAdapter(ctx: RequestContext): IStatusReportRepository {
  const getTable = () => ctx.data.moduleData.getTable<StatusReportRow>('status_report');

  return {
    async getById(statusReportId) {
      let row: StatusReportRow | null;
      try {
        row = await (await getTable()).findOne({ where: { status_report_id: statusReportId } });
      } catch (err) {
        // Driver input/format rejection — the id cannot match any row.
        throw new AppError('NOT_FOUND', `StatusReport ${statusReportId} not found`, 404, { statusReportId: String(err) });
      }
      if (!row) throw new AppError('NOT_FOUND', `StatusReport ${statusReportId} not found`, 404, { statusReportId });
      return toDomain(row);
    },

    async list(filter?: StatusReportListFilter) {
      const where: Partial<StatusReportRow> = {};
      if (filter?.projectId) where.project_id = filter.projectId;
      if (filter?.status) where.status = filter.status;
      const rows = await (await getTable()).findMany({
        where,
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      let domain = rows.map(toDomain);
      if (filter?.reportPeriodStart) {
        domain = domain.filter((r) => r.reportPeriodStart >= filter.reportPeriodStart!);
      }
      if (filter?.reportPeriodEnd) {
        domain = domain.filter((r) => r.reportPeriodEnd <= filter.reportPeriodEnd!);
      }
      return domain;
    },

    async save(report) {
      const repo = await getTable();
      const existing = await repo.findOne({ where: { status_report_id: report.statusReportId } });
      if (existing) {
        await repo.update({ where: { status_report_id: report.statusReportId }, patch: toRow(report) });
      } else {
        await repo.insert({ record: toRow(report) });
      }
    },

    async findByProject(projectId) {
      const rows = await (await getTable()).findMany({
        where: { project_id: projectId },
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      return rows.map(toDomain);
    },

    async findByPeriod(from, to) {
      const rows = await (await getTable()).findMany({
        orderBy: { field: 'created_at', direction: 'desc' },
      });
      const domain = rows.map(toDomain);
      // Reports whose reporting period overlaps [from, to].
      return domain.filter(
        (r) => r.reportPeriodStart <= to && r.reportPeriodEnd >= from,
      );
    },

    async findLatestByProject(projectId) {
      const rows = await (await getTable()).findMany({
        where: { project_id: projectId },
        orderBy: { field: 'created_at', direction: 'desc' },
        limit: 1,
      });
      return rows.length > 0 ? toDomain(rows[0]) : null;
    },
  };
}
