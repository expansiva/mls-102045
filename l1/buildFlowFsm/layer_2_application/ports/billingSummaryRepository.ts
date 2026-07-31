/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/billingSummaryRepository.ts" enhancement="_blank"/>
import type { BillingSummary, BillingSummaryStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/billingSummary.js';

export interface BillingSummaryListFilter {
  projectId?: string;
  status?: BillingSummaryStatus;
  periodStart?: string;
  periodEnd?: string;
}

export interface IBillingSummaryRepository {
  /** Retrieve a billing summary by its unique identifier. Throws NOT_FOUND if absent. */
  getById(billingSummaryId: string): Promise<BillingSummary>;

  /** List billing summaries matching the given filter criteria. */
  list(filter?: BillingSummaryListFilter): Promise<BillingSummary[]>;

  /** Persist or update the billing summary aggregate. */
  save(summary: BillingSummary): Promise<void>;

  /** Find the billing summary for a given project. Throws NOT_FOUND if absent. */
  findByProject(projectId: string): Promise<BillingSummary>;

  /** Find billing summaries within a billing period. */
  findByPeriod(periodStart: string, periodEnd: string): Promise<BillingSummary[]>;
}
