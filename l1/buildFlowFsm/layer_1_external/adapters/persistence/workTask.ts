/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/workTask.ts" enhancement="_blank"/>
import type { TableDefinition } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const workTaskTableDef: TableDefinition = {
  moduleId: 'buildFlowFsm',
  repositoryName: 'buildFlowFsmWorkTask',
  tableName: 'work_task',
  purpose: 'transacao',
  description: 'Work tasks assigned to workers within a project. Non-indexed fields (title, description, dueDate, completedAt, cancelledAt, cancellationReason, updatedAt) stored in details JSONB.',
  backupHot: false,
  storageProfile: 'postgres',
  writeMode: 'sync',
  columns: [
    { name: 'work_task_id', postgresType: 'UUID', description: 'PK' },
    { name: 'project_id', postgresType: 'UUID', description: 'FK to project' },
    { name: 'assigned_worker_id', postgresType: 'UUID', nullable: true, description: 'FK to worker' },
    { name: 'status', postgresType: 'TEXT', description: 'Task status' },
    { name: 'created_at', postgresType: 'TIMESTAMPTZ', defaultSql: 'NOW()', description: 'Ordering timestamp' },
    { name: 'details', postgresType: 'JSONB', nullable: true, description: 'title, description, dueDate, completedAt, cancelledAt, cancellationReason, updatedAt' },
  ],
  primaryKey: ['work_task_id'],
  indexes: [
    { name: 'idx_work_task_project_id', columns: ['project_id'] },
    { name: 'idx_work_task_assigned_worker_id', columns: ['assigned_worker_id'] },
    { name: 'idx_work_task_status', columns: ['status'] },
    { name: 'idx_work_task_created_at', columns: ['created_at'] },
  ],
  version: 1,
};
