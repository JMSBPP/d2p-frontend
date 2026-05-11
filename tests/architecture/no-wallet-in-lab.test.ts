import { describe, it } from 'vitest'

// Vitest static-grep architecture test.
// Filename is .test.ts (NOT .spec.ts) so Vitest collects it and Playwright excludes it.
// Plan 04 Task 2 replaces the .todo with real fs.readdirSync + grep assertions.
describe('(lab) route group wallet isolation', () => {
  it.todo('app/(lab)/**/*.{ts,tsx} contains no wagmi imports')
  it.todo('app/(lab)/**/*.{ts,tsx} contains no @rainbow-me/rainbowkit imports')
  it.todo('app/(lab)/**/*.{ts,tsx} contains no @tanstack/react-query imports')
  it.todo('app/(lab)/**/*.{ts,tsx} contains no viem imports')
})
