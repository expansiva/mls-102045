/// <mls fileReference="_102045_/l1/propertyFlowCrm/layer_2_controllers/visitsAgenda.ts" enhancement="_blank"/>
import { ok, AppError, type BffHandler } from '/_102034_/l1/server/layer_2_controllers/contracts.js';
import { listarVisitas, type ListarVisitasInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/listarVisitas.js';
import { agendarVisita, type AgendarVisitaInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/agendarVisita.js';
import { obterVisita, type ObterVisitaInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/obterVisita.js';
import { atualizarStatusVisita, type AtualizarStatusVisitaInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/atualizarStatusVisita.js';
import { listarSolicitacoesAgendamentoVisita, type ListarSolicitacoesAgendamentoVisitaInput } from '/_102045_/l1/propertyFlowCrm/layer_3_usecases/listarSolicitacoesAgendamentoVisita.js';
import type {
VisitsAgendaListarVisitasInput,
VisitsAgendaListarVisitasOutput,
VisitsAgendaAgendarVisitaInput,
VisitsAgendaAgendarVisitaOutput,
VisitsAgendaObterVisitaInput,
VisitsAgendaObterVisitaOutput,
VisitsAgendaAtualizarStatusVisitaInput,
VisitsAgendaAtualizarStatusVisitaOutput,
VisitsAgendaListarSolicitacoesAgendamentoVisitaInput,
VisitsAgendaListarSolicitacoesAgendamentoVisitaOutput,
} from '/_102045_/l2/propertyFlowCrm/web/contracts/visitsAgenda.js';
export const propertyFlowCrmVisitsAgendaListarVisitasHandler: BffHandler = async ({ request, ctx }) => {
const input = request.params as VisitsAgendaListarVisitasInput;
if (!input.dataInicio) throw new AppError('VALIDATION_ERROR', 'dataInicio is required', 400, { field: 'dataInicio' });
if (!input.dataFim) throw new AppError('VALIDATION_ERROR', 'dataFim is required', 400, { field: 'dataFim' });
const result = await listarVisitas(ctx, input as ListarVisitasInput);
const output: VisitsAgendaListarVisitasOutput = result.visitas.map((visita) => ({
visitId: visita.visitId,
status: visita.status,
scheduledAt: visita.scheduledAt,
propertyId: visita.propertyId,
leadId: visita.leadId,
}));
return ok(output);
};
export const propertyFlowCrmVisitsAgendaAgendarVisitaHandler: BffHandler = async ({ request, ctx }) => {
const input = request.params as VisitsAgendaAgendarVisitaInput;
if (!input.propertyId) throw new AppError('VALIDATION_ERROR', 'propertyId is required', 400, { field: 'propertyId' });
if (!input.leadId) throw new AppError('VALIDATION_ERROR', 'leadId is required', 400, { field: 'leadId' });
if (!input.requestedStartAt) throw new AppError('VALIDATION_ERROR', 'requestedStartAt is required', 400, { field: 'requestedStartAt' });
const result = await agendarVisita(ctx, input as AgendarVisitaInput);
const output: VisitsAgendaAgendarVisitaOutput = {
visitId: result.visitId,
status: ((result as unknown) as { status?: string }).status ?? 'agendada',
};
return ok(output);
};
export const propertyFlowCrmVisitsAgendaObterVisitaHandler: BffHandler = async ({ request, ctx }) => {
const input = request.params as VisitsAgendaObterVisitaInput;
if (!input.visitId) throw new AppError('VALIDATION_ERROR', 'visitId is required', 400, { field: 'visitId' });
const result = await obterVisita(ctx, input as ObterVisitaInput);
const output: VisitsAgendaObterVisitaOutput = {
visitId: result.visit.visitId,
status: result.visit.status,
scheduledAt: result.visit.scheduledAt,
propertyId: result.visit.propertyId,
leadId: result.visit.leadId,
};
return ok(output);
};
export const propertyFlowCrmVisitsAgendaAtualizarStatusVisitaHandler: BffHandler = async ({ request, ctx }) => {
const input = request.params as VisitsAgendaAtualizarStatusVisitaInput;
if (!input.visitId) throw new AppError('VALIDATION_ERROR', 'visitId is required', 400, { field: 'visitId' });
if (!input.novoStatus) throw new AppError('VALIDATION_ERROR', 'novoStatus is required', 400, { field: 'novoStatus' });
const usecaseInput: AtualizarStatusVisitaInput = {
visitId: input.visitId,
status: input.novoStatus,
};
const result = await atualizarStatusVisita(ctx, usecaseInput);
const output: VisitsAgendaAtualizarStatusVisitaOutput = {
visitId: result.visitId,
status: result.status,
scheduledAt: ((result as unknown) as { scheduledAt?: string }).scheduledAt ?? input.requestedStartAt ?? '',
};
return ok(output);
};
export const propertyFlowCrmVisitsAgendaListarSolicitacoesAgendamentoVisitaHandler: BffHandler = async ({ request, ctx }) => {
const input = request.params as VisitsAgendaListarSolicitacoesAgendamentoVisitaInput;
const result = await listarSolicitacoesAgendamentoVisita(ctx, input as ListarSolicitacoesAgendamentoVisitaInput);
const output: VisitsAgendaListarSolicitacoesAgendamentoVisitaOutput = result.solicitacoesAgendamentoVisita.map((solicitacao) => ({
visitScheduleRequestId: solicitacao.visit_schedule_request_id,
status: solicitacao.status,
requestedStartAt: solicitacao.requested_start_at,
propertyId: solicitacao.property_id,
leadId: solicitacao.lead_id,
visitId: solicitacao.visit_id as string,
}));
return ok(output);
};
export const visitsAgendaRouter = {
'propertyFlowCrm.visitsAgenda.listarVisitas': {
handlerName: 'propertyFlowCrmVisitsAgendaListarVisitasHandler',
importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/visitsAgenda.js',
},
'propertyFlowCrm.visitsAgenda.agendarVisita': {
handlerName: 'propertyFlowCrmVisitsAgendaAgendarVisitaHandler',
importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/visitsAgenda.js',
},
'propertyFlowCrm.visitsAgenda.obterVisita': {
handlerName: 'propertyFlowCrmVisitsAgendaObterVisitaHandler',
importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/visitsAgenda.js',
},
'propertyFlowCrm.visitsAgenda.atualizarStatusVisita': {
handlerName: 'propertyFlowCrmVisitsAgendaAtualizarStatusVisitaHandler',
importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/visitsAgenda.js',
},
'propertyFlowCrm.visitsAgenda.listarSolicitacoesAgendamentoVisita': {
handlerName: 'propertyFlowCrmVisitsAgendaListarSolicitacoesAgendamentoVisitaHandler',
importPath: '/_102045_/l1/propertyFlowCrm/layer_2_controllers/visitsAgenda.js',
},
};
