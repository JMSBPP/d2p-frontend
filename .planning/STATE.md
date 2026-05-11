# Project State: WVS Finance Frontend (d2p/frontend)

**Last updated:** 2026-05-11
**Session type:** Roadmap initialization

---

## Project Reference

**Core value:** Make the lab's research outputs and live hedging instruments accessible — to humans browsing, to participants transacting, and to AI agents consuming — through a single coherent surface that treats agent-first interaction as a primary design constraint.

**Milestone:** v1 — Uniswap Hook Incubator Cohort 9 Hookathon demo (~June 2, 2026)

**Hard deadline:** ~June 2, 2026 (~3 weeks from initialization). Hackathon demo critical path must ship by end of Phase 2.

---

## Current Position

**Active phase:** None (roadmap just created — planning not yet started)
**Active plan:** None
**Status:** Awaiting Phase 1 planning (`/gsd:plan-phase 1`)

**Progress:**
```
[          ] Phase 1: Foundation and Scaffold
[          ] Phase 2: Research Lab Presence and Iteration Catalog
[          ] Phase 3: Data Layer and On-Chain Dashboard
[          ] Phase 4: Agent Surface (MCP)
[          ] Phase 5: Read-First Wallet and DeFi Surface

Overall: 0/5 phases complete
```

---

## Performance Metrics

| Metric | Target | Current |
|--------|--------|---------|
| Requirements mapped | 60/60 | 60/60 |
| Phases defined | 5 | 5 |
| Plans created | TBD | 0 |
| Plans complete | TBD | 0 |

---

## Accumulated Context

### Key Decisions Made

| Decision | Rationale | Phase Impact |
|----------|-----------|--------------|
| CROSS-01 through CROSS-10 assigned to Phase 1, not a separate phase | They are CI enforcement infrastructure, not feature polish. Retrofitting accessibility, i18n, performance budgets, or design-token rules after the fact is 10x more expensive than wiring them in at scaffold time. | Phase 1 scope expanded; all downstream phases are smaller and safer |
| Phase 4 and Phase 5 are parallelizable after Phase 3 | Agent surface (AGENT-*) and DeFi surface (DEFI-*) have no inter-dependencies; both require only Phase 3 BFF routes and Phase 1 wagmi config | Enables time-boxing of final 2 phases together to meet hackathon deadline |
| Demo critical path gates Phase 2 completion | The Hookathon demo requires `/` + `/iterations` + Pair D detail + FX-vol-fail detail — all of which are Phase 2 deliverables. Phase 2 is non-negotiable before the June 2 deadline. | Phase 2 is the milestone gate |
| DEFI-* scope is read-first only in v1 | Transact path requires explicit threat-model review (v2). Wallet connection and per-instrument views are safe to ship without that review. | Phase 5 delivers DEFI-01 through DEFI-07 as read-only |
| Single Next.js app, no monorepo | Per architecture research: monorepo adds cross-package overhead with no isolation benefit at this team size. MCP server is an API route, not a separate service. | Phase 1 scaffolds one app; no workspace bootstrap needed |

### Critical Path Summary

```
Phase 1 (Foundation) → Phase 2 (Demo path) → [HACKATHON DEMO CUT]
                                            → Phase 3 (Data Layer)
                                                → Phase 4 (Agent MCP)  [parallel]
                                                → Phase 5 (DeFi)       [parallel]
```

### Technical Context

- **Primary chain:** Celo mainnet (deployed instruments); Base, Arbitrum, Optimism as secondary
- **Stack locked:** Next.js 16.2, React 19, TypeScript 5.8, Tailwind v4, shadcn/ui (Feb 2026), wagmi v2 + viem v2 + RainbowKit v2, next-intl v4, Velite 0.3+, Visx 3.x, mcp-handler (Vercel), Zod v3, Vitest + Playwright + MSW
- **Deployment target:** Vercel (preview-per-PR, Vercel KV for caching)
- **i18n languages:** `es-CO` (primary, Colombian Spanish) and `en` (secondary)
- **Content source:** Iteration MDX from `../abrigo/scratch/` and `../abrigo/docs/` synced to `frontend/content/iterations/` by CI
- **BFF caching:** Vercel KV (chain reads 30s TTL, HuggingFace 1h TTL, GitHub meta 6h TTL)

### Known Constraints to Track

- `impeccable detect --fail-on-error` must run in CI on every PR (FOUND-07)
- Lighthouse CI LCP < 2.5s on Moto G Power 3G profile (FOUND-08)
- axe-core WCAG 2.2 AA CI enforcement (FOUND-09)
- No Inter / Geist / Mona Sans / Plus Jakarta as typefaces — `impeccable` anti-pattern blocklist
- No purple-to-blue gradients — `impeccable` anti-pattern
- No card-nested-in-card — `impeccable` anti-pattern
- `(lab)` route group must never hydrate wallet state
- Wallet state is client-only — never SSR
- Chat shell (CHAT-*) is v2 scope — not in this milestone
- Transact path (TXN-*) is v2 scope — not in this milestone

### Blockers

None currently. Roadmap creation is complete.

### Open Questions

- What ABI JSON files are currently available in `../abrigo/` Foundry artifacts? (Needed for FOUND-06 in Phase 1 / wagmi CLI codegen)
- Are `../abrigo/scratch/*.md` and `../abrigo/docs/*.md` files ready to sync? (Needed for LAB-03, LAB-04, ITER-05, ITER-06 in Phase 2)
- What is the deployed Celo mainnet contract address for the Abrigo instrument? (Needed for DASH-* in Phase 3 and DEFI-* in Phase 5)

---

## Session Continuity

### How to Resume

1. Read `/home/jmsbpp/apps/d2p/frontend/.planning/ROADMAP.md` — current phase structure and success criteria
2. Read this file — current position and accumulated context
3. Read `/home/jmsbpp/apps/d2p/frontend/.planning/REQUIREMENTS.md` — traceability table shows which requirements belong to the active phase
4. Run `/gsd:plan-phase 1` to begin planning Phase 1

### Phase Planning Order

```
/gsd:plan-phase 1   # Foundation (do first — gates everything)
/gsd:plan-phase 2   # Research Lab + Catalog (demo critical path)
/gsd:plan-phase 3   # Data Layer + Dashboard (gates 4 and 5)
/gsd:plan-phase 4   # Agent Surface (parallel with 5 after 3)
/gsd:plan-phase 5   # Wallet + DeFi (parallel with 4 after 3)
```

---
*State initialized: 2026-05-11 after roadmap creation*
