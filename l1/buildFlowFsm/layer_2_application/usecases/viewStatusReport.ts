/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/usecases/viewStatusReport.ts" enhancement="_blank"/>
import type { RequestContext } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { resolveRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import type { IStatusReportRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/statusReportRepository.js';
import type { IProjectRepository } from '/_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.js';
import type { StatusReport } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/statusReport.js';
import type { Project } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.js';

export interface ViewStatusReportInput {
  statusReportId: string;
}

export interface ViewStatusReportOutput {
  statusReportId: string;
  projectId: string;
  projectName: string;
  status: string;
  reportPeriodStart: string;
  reportPeriodEnd: string;
  summary: string;
  tasksOverview?: string;
  timeLogsOverview?: string;
  materialsOverview?: string;
  delayRiskAssessment?: string;
  pmNotes?: string;
  generatedAt: string;
  sharedAt?: string;
}

export async function viewStatusReport(
  ctx: RequestContext,
  input: ViewStatusReportInput,
): Promise<ViewStatusReportOutput | null> {
  // Step 1: Resolve clientId from the actor session context (never a public input).
  const clientId = ctx.sessionContext.actorId;
  if (!clientId) {
    return null;
  }

  // Step 2: Load the StatusReport by statusReportId through the StatusReport port.
  let report: StatusReport;
  try {
    const reports = resolveRepository<IStatusReportRepository>(ctx, 'StatusReport');
    report = await reports.getById(input.statusReportId);
  } catch {
    // Report does not exist or is not accessible.
    return null;
  }

  // Step 3: Apply rule pmControlsStatusReportLifecycle — only 'shared' reports are visible to the client.
  // rule: pmControlsStatusReportLifecycle
  if (String(report.status) !== 'shared') {
    // Status is 'draft' or 'reviewed' — not visible to the client.
    return null;
  }

  // Step 4: Load the Project by report.projectId through the Project port.
  let project: Project;
  try {
    const projects = resolveRepository<IProjectRepository>(ctx, 'Project');
    project = await projects.getById(report.projectId);
  } catch {
    return null;
  }

  // Step 5: Verify project.clientId === resolved clientId (client ownership check).
  if (project.clientId !== clientId) {
    return null;
  }

  // Step 6: Map the StatusReport fields and Project.name into the output object.
  return {
    statusReportId: report.statusReportId,
    projectId: report.projectId,
    projectName: project.name,
    status: report.status,
    reportPeriodStart: report.reportPeriodStart,
    reportPeriodEnd: report.reportPeriodEnd,
    summary: report.summary,
    tasksOverview: report.tasksOverview ?? undefined,
    timeLogsOverview: report.timeLogsOverview ?? undefined,
    materialsOverview: report.materialsOverview ?? undefined,
    delayRiskAssessment: report.delayRiskAssessment ?? undefined,
    pmNotes: report.pmNotes ?? undefined,
    generatedAt: report.generatedAt,
    sharedAt: report.sharedAt ?? undefined,
  };
}
