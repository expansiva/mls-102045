/// <mls fileReference="_102045_/l1/buildFlowFsm/layer_1_external/adapters/persistence/seeds.ts" enhancement="_blank"/>

// Deterministic initial data for buildFlowFsm. Scenario planned by agentCbSeeds; rows and ids compiled locally.
// TableSeedRows exports are discovered by shape and merged by the persistence registry.

/* <agentCbSeedsPlan>
{
  "version": 1,
  "moduleName": "buildFlowFsm",
  "language": "en",
  "skipped": {
    "tables": [
      "BillingSummary",
      "ChangeOrder",
      "Invoice",
      "MaterialUsage",
      "Project",
      "StatusReport",
      "TimeLog",
      "WorkTask"
    ],
    "mdmEntities": [],
    "reason": "seed wave 3 did not converge after 2/2 attempts: localTables.Project.project-acme-renovation.endDate: date must fall within 2026-07-01..2026-07-08; localTables.Project.project-northwind-build.endDate: date must fall within 2026-07-01..2026-07-08; localTables.Project.project-riverside-remodel.endDate: date must fall within 2026-07-01..2026-07-08"
  },
  "plan": {
    "summary": "Wave 1: Seed 4 Client MDM rows covering individual and corporate clients with varied contact details. All timestamps within 2026-07-01 to 2026-07-08.",
    "localTables": [],
    "mdmEntities": [
      {
        "entityId": "Client",
        "rows": [
          {
            "key": "client-acme",
            "fields": [
              {
                "name": "clientId",
                "value": null
              },
              {
                "name": "name",
                "value": "Alice Carter"
              },
              {
                "name": "company",
                "value": "Acme Construction Ltd"
              },
              {
                "name": "email",
                "value": "alice@acmeconstruction.com"
              },
              {
                "name": "phone",
                "value": "+1-555-0101"
              },
              {
                "name": "address",
                "value": "120 Industrial Park Rd, Springfield, IL 62704"
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T09:15:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-02T14:30:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "client-northwind",
            "fields": [
              {
                "name": "clientId",
                "value": null
              },
              {
                "name": "name",
                "value": "Brian Foster"
              },
              {
                "name": "company",
                "value": "Northwind Logistics Inc"
              },
              {
                "name": "email",
                "value": "b.foster@northwindlogistics.com"
              },
              {
                "name": "phone",
                "value": "+1-555-0202"
              },
              {
                "name": "address",
                "value": "45 Harbor View Dr, Portland, OR 97201"
              },
              {
                "name": "createdAt",
                "value": "2026-07-01T11:00:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-03T10:45:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "client-summit",
            "fields": [
              {
                "name": "clientId",
                "value": null
              },
              {
                "name": "name",
                "value": "Carla Mendez"
              },
              {
                "name": "company",
                "value": "Summit Property Group"
              },
              {
                "name": "email",
                "value": "carla@summitproperty.com"
              },
              {
                "name": "phone",
                "value": "+1-555-0303"
              },
              {
                "name": "address",
                "value": "789 Highland Ave, Denver, CO 80205"
              },
              {
                "name": "createdAt",
                "value": "2026-07-02T08:20:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-04T16:10:00.000Z"
              }
            ],
            "relationships": []
          },
          {
            "key": "client-riverside",
            "fields": [
              {
                "name": "clientId",
                "value": null
              },
              {
                "name": "name",
                "value": "David Lin"
              },
              {
                "name": "company",
                "value": null
              },
              {
                "name": "email",
                "value": "david.lin@email.com"
              },
              {
                "name": "phone",
                "value": "+1-555-0404"
              },
              {
                "name": "address",
                "value": "23 River St, Austin, TX 78701"
              },
              {
                "name": "createdAt",
                "value": "2026-07-03T13:05:00.000Z"
              },
              {
                "name": "updatedAt",
                "value": "2026-07-05T09:30:00.000Z"
              }
            ],
            "relationships": []
          }
        ]
      }
    ]
  }
}
</agentCbSeedsPlan> */

// <agentCbSeedAssetUrls>
const seedAssetUrls: Record<string, string> = {};
const seedAssetWarnings: string[] = [];
// </agentCbSeedAssetUrls>

function seedAssetUrl(assetId: string): string | null { return seedAssetUrls[assetId] ?? null; }

import type { TableSeedRows } from '/_102034_/l1/server/layer_1_external/persistence/contracts.js';

export const mdmEntityIndexSeeds: TableSeedRows = {
  "seedFor": "mdmEntityIndex",
  "rows": [
    {
      "mdmId": "66cfa7a2-67cf-4935-84cf-a47c65cfa60f",
      "subtype": "Product",
      "name": "Alice Carter",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Client",
        "buildFlowFsm",
        "Client"
      ],
      "searchVector": "alice carter client buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "66cfa7a2-67cf-4935-84cf-a47c65cfa60f",
      "createdAt": "2026-07-01T09:15:00.000Z",
      "updatedAt": "2026-07-02T14:30:00.000Z"
    },
    {
      "mdmId": "472236d9-4622-4546-8522-33b344223220",
      "subtype": "Product",
      "name": "Brian Foster",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Client",
        "buildFlowFsm",
        "Client"
      ],
      "searchVector": "brian foster client buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "472236d9-4622-4546-8522-33b344223220",
      "createdAt": "2026-07-01T11:00:00.000Z",
      "updatedAt": "2026-07-03T10:45:00.000Z"
    },
    {
      "mdmId": "68aeeca3-67ae-4b10-8aae-efc969aeee36",
      "subtype": "Product",
      "name": "Carla Mendez",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Client",
        "buildFlowFsm",
        "Client"
      ],
      "searchVector": "carla mendez client buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "68aeeca3-67ae-4b10-8aae-efc969aeee36",
      "createdAt": "2026-07-02T08:20:00.000Z",
      "updatedAt": "2026-07-04T16:10:00.000Z"
    },
    {
      "mdmId": "448da321-438d-418e-828d-9ffb418d9e68",
      "subtype": "Product",
      "name": "David Lin",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Client",
        "buildFlowFsm",
        "Client"
      ],
      "searchVector": "david lin client buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "448da321-438d-418e-828d-9ffb418d9e68",
      "createdAt": "2026-07-03T13:05:00.000Z",
      "updatedAt": "2026-07-05T09:30:00.000Z"
    },
    {
      "mdmId": "d005e388-d105-451b-8205-e6aed305e841",
      "subtype": "Person",
      "name": "Project Manager 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "projectManager"
      ],
      "searchVector": "project manager 1 projectmanager buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "d005e388-d105-451b-8205-e6aed305e841",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "f059542d-ef59-429a-8e59-5107ed594f74",
      "subtype": "Person",
      "name": "Project Manager 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "projectManager"
      ],
      "searchVector": "project manager 2 projectmanager buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "f059542d-ef59-429a-8e59-5107ed594f74",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
      "subtype": "Person",
      "name": "Project Manager 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "projectManager"
      ],
      "searchVector": "project manager 3 projectmanager buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "c42001f2-c520-4385-821f-feccc320005f",
      "subtype": "Person",
      "name": "Field Worker 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "fieldWorker"
      ],
      "searchVector": "field worker 1 fieldworker buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "c42001f2-c520-4385-821f-feccc320005f",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "00fbf4c3-fffb-4330-82fb-f7e901fbf656",
      "subtype": "Person",
      "name": "Field Worker 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "fieldWorker"
      ],
      "searchVector": "field worker 2 fieldworker buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "00fbf4c3-fffb-4330-82fb-f7e901fbf656",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "2944e4a4-2a44-4637-8b44-e7ca2c44e95d",
      "subtype": "Person",
      "name": "Field Worker 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "fieldWorker"
      ],
      "searchVector": "field worker 3 fieldworker buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "2944e4a4-2a44-4637-8b44-e7ca2c44e95d",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "2aece0ad-29ec-4f1a-88ec-dd8727ecdbf4",
      "subtype": "Person",
      "name": "Billing Staff 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "billingStaff"
      ],
      "searchVector": "billing staff 1 billingstaff buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "2aece0ad-29ec-4f1a-88ec-dd8727ecdbf4",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "0a997008-0b99-419b-8c99-732e0d9974c1",
      "subtype": "Person",
      "name": "Billing Staff 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "billingStaff"
      ],
      "searchVector": "billing staff 2 billingstaff buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "0a997008-0b99-419b-8c99-732e0d9974c1",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "013a8d77-003a-4be4-833a-909d023a8f0a",
      "subtype": "Person",
      "name": "Billing Staff 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "billingStaff"
      ],
      "searchVector": "billing staff 3 billingstaff buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "013a8d77-003a-4be4-833a-909d023a8f0a",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "0d75fd85-0c75-4bf2-8b75-fa5f0a75f8cc",
      "subtype": "Person",
      "name": "Client 1",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "client"
      ],
      "searchVector": "client 1 client buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "0d75fd85-0c75-4bf2-8b75-fa5f0a75f8cc",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "6d235660-6e23-47f3-8f23-598670235b19",
      "subtype": "Person",
      "name": "Client 2",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "client"
      ],
      "searchVector": "client 2 client buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "6d235660-6e23-47f3-8f23-598670235b19",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    },
    {
      "mdmId": "63c473cf-62c4-423c-85c4-76f564c47562",
      "subtype": "Person",
      "name": "Client 3",
      "status": "Active",
      "docType": null,
      "docId": null,
      "countryCode": "US",
      "tags": [
        "buildFlowFsm.Person",
        "buildFlowFsm",
        "actor",
        "client"
      ],
      "searchVector": "client 3 client buildflowfsm",
      "mergedInto": null,
      "dynamoPk": "63c473cf-62c4-423c-85c4-76f564c47562",
      "createdAt": "2026-07-01T00:00:00.000Z",
      "updatedAt": "2026-07-01T00:00:00.000Z"
    }
  ]
};

export const mdmDocumentSeeds: TableSeedRows = {
  "seedFor": "mdmDocumentCache",
  "rows": [
    {
      "mdmId": "66cfa7a2-67cf-4935-84cf-a47c65cfa60f",
      "version": 1,
      "details": {
        "mdmId": "66cfa7a2-67cf-4935-84cf-a47c65cfa60f",
        "subtype": "Product",
        "name": "Alice Carter",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Client",
          "buildFlowFsm",
          "Client"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T09:15:00.000Z",
        "updatedAt": "2026-07-02T14:30:00.000Z",
        "buildFlowFsm": {
          "clientId": "66cfa7a2-67cf-4935-84cf-a47c65cfa60f",
          "name": "Alice Carter",
          "company": "Acme Construction Ltd",
          "email": "alice@acmeconstruction.com",
          "phone": "+1-555-0101",
          "address": "120 Industrial Park Rd, Springfield, IL 62704",
          "createdAt": "2026-07-01T09:15:00.000Z",
          "updatedAt": "2026-07-02T14:30:00.000Z"
        }
      }
    },
    {
      "mdmId": "472236d9-4622-4546-8522-33b344223220",
      "version": 1,
      "details": {
        "mdmId": "472236d9-4622-4546-8522-33b344223220",
        "subtype": "Product",
        "name": "Brian Foster",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Client",
          "buildFlowFsm",
          "Client"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T11:00:00.000Z",
        "updatedAt": "2026-07-03T10:45:00.000Z",
        "buildFlowFsm": {
          "clientId": "472236d9-4622-4546-8522-33b344223220",
          "name": "Brian Foster",
          "company": "Northwind Logistics Inc",
          "email": "b.foster@northwindlogistics.com",
          "phone": "+1-555-0202",
          "address": "45 Harbor View Dr, Portland, OR 97201",
          "createdAt": "2026-07-01T11:00:00.000Z",
          "updatedAt": "2026-07-03T10:45:00.000Z"
        }
      }
    },
    {
      "mdmId": "68aeeca3-67ae-4b10-8aae-efc969aeee36",
      "version": 1,
      "details": {
        "mdmId": "68aeeca3-67ae-4b10-8aae-efc969aeee36",
        "subtype": "Product",
        "name": "Carla Mendez",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Client",
          "buildFlowFsm",
          "Client"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-02T08:20:00.000Z",
        "updatedAt": "2026-07-04T16:10:00.000Z",
        "buildFlowFsm": {
          "clientId": "68aeeca3-67ae-4b10-8aae-efc969aeee36",
          "name": "Carla Mendez",
          "company": "Summit Property Group",
          "email": "carla@summitproperty.com",
          "phone": "+1-555-0303",
          "address": "789 Highland Ave, Denver, CO 80205",
          "createdAt": "2026-07-02T08:20:00.000Z",
          "updatedAt": "2026-07-04T16:10:00.000Z"
        }
      }
    },
    {
      "mdmId": "448da321-438d-418e-828d-9ffb418d9e68",
      "version": 1,
      "details": {
        "mdmId": "448da321-438d-418e-828d-9ffb418d9e68",
        "subtype": "Product",
        "name": "David Lin",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Client",
          "buildFlowFsm",
          "Client"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-03T13:05:00.000Z",
        "updatedAt": "2026-07-05T09:30:00.000Z",
        "buildFlowFsm": {
          "clientId": "448da321-438d-418e-828d-9ffb418d9e68",
          "name": "David Lin",
          "company": null,
          "email": "david.lin@email.com",
          "phone": "+1-555-0404",
          "address": "23 River St, Austin, TX 78701",
          "createdAt": "2026-07-03T13:05:00.000Z",
          "updatedAt": "2026-07-05T09:30:00.000Z"
        }
      }
    },
    {
      "mdmId": "d005e388-d105-451b-8205-e6aed305e841",
      "version": 1,
      "details": {
        "mdmId": "d005e388-d105-451b-8205-e6aed305e841",
        "subtype": "Person",
        "name": "Project Manager 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "projectManager"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "projectManager"
      }
    },
    {
      "mdmId": "f059542d-ef59-429a-8e59-5107ed594f74",
      "version": 1,
      "details": {
        "mdmId": "f059542d-ef59-429a-8e59-5107ed594f74",
        "subtype": "Person",
        "name": "Project Manager 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "projectManager"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "projectManager"
      }
    },
    {
      "mdmId": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
      "version": 1,
      "details": {
        "mdmId": "e9cba546-eacb-46d9-87cb-a220e8cba3b3",
        "subtype": "Person",
        "name": "Project Manager 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "projectManager"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "projectManager"
      }
    },
    {
      "mdmId": "c42001f2-c520-4385-821f-feccc320005f",
      "version": 1,
      "details": {
        "mdmId": "c42001f2-c520-4385-821f-feccc320005f",
        "subtype": "Person",
        "name": "Field Worker 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "fieldWorker"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "fieldWorker"
      }
    },
    {
      "mdmId": "00fbf4c3-fffb-4330-82fb-f7e901fbf656",
      "version": 1,
      "details": {
        "mdmId": "00fbf4c3-fffb-4330-82fb-f7e901fbf656",
        "subtype": "Person",
        "name": "Field Worker 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "fieldWorker"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "fieldWorker"
      }
    },
    {
      "mdmId": "2944e4a4-2a44-4637-8b44-e7ca2c44e95d",
      "version": 1,
      "details": {
        "mdmId": "2944e4a4-2a44-4637-8b44-e7ca2c44e95d",
        "subtype": "Person",
        "name": "Field Worker 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "fieldWorker"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "fieldWorker"
      }
    },
    {
      "mdmId": "2aece0ad-29ec-4f1a-88ec-dd8727ecdbf4",
      "version": 1,
      "details": {
        "mdmId": "2aece0ad-29ec-4f1a-88ec-dd8727ecdbf4",
        "subtype": "Person",
        "name": "Billing Staff 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "billingStaff"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "billingStaff"
      }
    },
    {
      "mdmId": "0a997008-0b99-419b-8c99-732e0d9974c1",
      "version": 1,
      "details": {
        "mdmId": "0a997008-0b99-419b-8c99-732e0d9974c1",
        "subtype": "Person",
        "name": "Billing Staff 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "billingStaff"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "billingStaff"
      }
    },
    {
      "mdmId": "013a8d77-003a-4be4-833a-909d023a8f0a",
      "version": 1,
      "details": {
        "mdmId": "013a8d77-003a-4be4-833a-909d023a8f0a",
        "subtype": "Person",
        "name": "Billing Staff 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "billingStaff"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "billingStaff"
      }
    },
    {
      "mdmId": "0d75fd85-0c75-4bf2-8b75-fa5f0a75f8cc",
      "version": 1,
      "details": {
        "mdmId": "0d75fd85-0c75-4bf2-8b75-fa5f0a75f8cc",
        "subtype": "Person",
        "name": "Client 1",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "client"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "client"
      }
    },
    {
      "mdmId": "6d235660-6e23-47f3-8f23-598670235b19",
      "version": 1,
      "details": {
        "mdmId": "6d235660-6e23-47f3-8f23-598670235b19",
        "subtype": "Person",
        "name": "Client 2",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "client"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "client"
      }
    },
    {
      "mdmId": "63c473cf-62c4-423c-85c4-76f564c47562",
      "version": 1,
      "details": {
        "mdmId": "63c473cf-62c4-423c-85c4-76f564c47562",
        "subtype": "Person",
        "name": "Client 3",
        "status": "Active",
        "docType": null,
        "docId": null,
        "countryCode": "US",
        "tags": [
          "buildFlowFsm.Person",
          "buildFlowFsm",
          "actor",
          "client"
        ],
        "aliases": [],
        "contacts": [],
        "relationshipRefs": {},
        "addresses": [],
        "mergedInto": null,
        "createdAt": "2026-07-01T00:00:00.000Z",
        "updatedAt": "2026-07-01T00:00:00.000Z",
        "actorId": "client"
      }
    }
  ]
};
