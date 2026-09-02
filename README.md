# 102045 · buildFlowFsm (scaffold only)

Part of **collab.codes**.

`102045` is a **client project shell with no source on disk**. `l2/` and `l1/`
exist but are empty apart from `project.ts` / `designSystem.ts`; the
`l2/buildFlowFsm/web/desktop/` tree has no pages left in it, and
`.collab-fs-trash/2026-07-29T…` holds what was cleared out.

## Declared configuration

`l5/project.json` still declares module `buildFlowFsm`, the three layouts
(`Default`, `Ux 2`, `Ux 3`) and the masters wiring every client project uses:

| side | master (generation) | agent | runtime |
|---|---|---|---|
| frontend | `102020` | `agentChangeFrontend` | `102033` |
| backend | `102021` | `agentChangeBackend` | `102034` |

Last activity: 2026-08-21.

## Careful

Three projects carry the name `buildFlowFsm`. The applications are
[`102046`](../mls-102046) and [`102048`](../mls-102048); **this one is empty**.
