/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/registerRepositories.ts" enhancement="_blank"/>

// Composition root — generated deterministically by agentCbRegister; do not edit by hand.
// The 102034 moduleRegistry imports this file through the persistenceModules[].tableDefsDir
// config link before loading the module controllers, so usecases can resolveRepository().
import { registerRepository } from '/_102034_/l1/server/layer_2_application/repositoryRegistry.js';
import { createBillingSummaryRepositoryAdapter } from '/_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/billingSummaryRepositoryAdapter.js';
import { createChangeOrderRepositoryAdapter } from '/_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/changeOrderRepositoryAdapter.js';
import { createInvoiceRepositoryAdapter } from '/_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/invoiceRepositoryAdapter.js';
import { createMaterialUsageRepositoryAdapter } from '/_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/materialUsageRepositoryAdapter.js';
import { createProjectRepositoryAdapter } from '/_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/projectRepositoryAdapter.js';
import { createStatusReportRepositoryAdapter } from '/_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/statusReportRepositoryAdapter.js';
import { createTimeLogRepositoryAdapter } from '/_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/timeLogRepositoryAdapter.js';
import { createWorkTaskRepositoryAdapter } from '/_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTaskRepositoryAdapter.js';

registerRepository('BillingSummary', createBillingSummaryRepositoryAdapter);
registerRepository('ChangeOrder', createChangeOrderRepositoryAdapter);
registerRepository('Invoice', createInvoiceRepositoryAdapter);
registerRepository('MaterialUsage', createMaterialUsageRepositoryAdapter);
registerRepository('Project', createProjectRepositoryAdapter);
registerRepository('StatusReport', createStatusReportRepositoryAdapter);
registerRepository('TimeLog', createTimeLogRepositoryAdapter);
registerRepository('WorkTask', createWorkTaskRepositoryAdapter);
