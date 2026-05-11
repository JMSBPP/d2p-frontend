import { describe, it } from 'vitest'

// Vitest test (NOT Playwright). Plan 08 Task 1 replaces the .todo with a real
// execSync call to `npx impeccable detect tests/unit/fixtures/anti-patterns.html`
// and asserts non-zero exit + violation categories in stdout.
describe('impeccable anti-pattern detector', () => {
  it.todo(
    'detects each planted anti-pattern in fixtures (Inter, purple gradient, eyebrow, italic serif, nested cards, dark glow)',
  )
})
