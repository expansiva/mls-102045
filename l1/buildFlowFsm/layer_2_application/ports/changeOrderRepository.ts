/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/changeOrderRepository.ts" enhancement="_blank"/>
import type { ChangeOrder, ChangeOrderStatus } from '/_102045_/l1/buildFlowFsm/layer_3_domain/entities/changeOrder.js';

export interface ChangeOrderListFilter {
  projectId?: string;
  status?: ChangeOrderStatus;
  impactType?: 'scope' | 'cost' | 'schedule';
}

export interface IChangeOrderRepository {
  getById(changeOrderId: string): Promise<ChangeOrder>;
  list(filter?: ChangeOrderListFilter): Promise<ChangeOrder[]>;
  save(order: ChangeOrder): Promise<void>;
  findByProject(projectId: string): Promise<ChangeOrder[]>;
  findByStatus(status: ChangeOrderStatus): Promise<ChangeOrder[]>;
}
