/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.defs.ts" enhancement="_blank"/>

export const projectRepositoryPort = {
  "schemaVersion": "2026-06-26",
  "artifactType": "repositoryPort",
  "artifactId": "ProjectRepository",
  "moduleName": "buildFlowFsm",
  "status": "draft",
  "source": {
    "agentName": "agentCbRepositoryPort",
    "stepId": 0,
    "planId": ""
  },
  "data": {
    "entityId": "Project",
    "interfaceName": "IProjectRepository",
    "methods": [
      {
        "name": "getById",
        "returns": "Project",
        "description": "Retrieve a project by its unique identifier"
      },
      {
        "name": "list",
        "returns": "Project[]",
        "description": "List projects matching the given filter criteria"
      },
      {
        "name": "save",
        "returns": "void",
        "description": "Persist or update the project aggregate"
      },
      {
        "name": "findByClient",
        "returns": "Project[]",
        "description": "Find all projects for a given client"
      },
      {
        "name": "findByStatus",
        "returns": "Project[]",
        "description": "Find projects by their current lifecycle status"
      },
      {
        "name": "findActiveProjects",
        "returns": "Project[]",
        "description": "Find all projects that are currently active"
      }
    ]
  }
} as const;

export default projectRepositoryPort;

export const pipeline = [
  {
    "id": "projectRepository__repositoryPort",
    "type": "repositoryPort",
    "outputPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.ts",
    "defPath": "_102045_/l1/buildFlowFsm/layer_2_application/ports/projectRepository.defs.ts",
    "dependsFiles": [
      "_102045_/l1/buildFlowFsm/layer_3_domain/entities/project.d.ts"
    ],
    "dependsOn": [],
    "skills": [
      "_102021_/l2/agentChangeBackend/skills/architecture.md",
      "_102021_/l2/agentChangeBackend/skills/repositoryPort.md",
      "_102034_.d.ts"
    ],
    "agent": "agentCbMaterialize"
  }
] as const;
