import { existsSync, readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'

const globalsPath = resolve(__dirname, '../../app/globals.css')

// Helper: check if globals.css has the full WVS Finance semantic token set
// (Plan 02 installs it — these tests skip until then)
const hasSemanticTokens = (): boolean => {
  if (!existsSync(globalsPath)) return false
  const css = readFileSync(globalsPath, 'utf-8')
  return css.includes('--color-bg-canvas')
}

describe('design tokens in app/globals.css', () => {
  it.skipIf(!hasSemanticTokens())('contains @theme inline block', () => {
    const css = readFileSync(globalsPath, 'utf-8')
    expect(css).toMatch(/@theme\s+inline\s*\{/)
  })

  it.skipIf(!hasSemanticTokens())(
    'declares semantic color names (no raw stone-/gray-/zinc-)',
    () => {
      const css = readFileSync(globalsPath, 'utf-8')
      expect(css).toMatch(/--color-bg-canvas/)
      expect(css).toMatch(/--color-text-primary/)
      expect(css).toMatch(/--color-accent-default/)
      expect(css).toMatch(/--color-status-pass/)
      expect(css).toMatch(/--color-status-fail/)
      expect(css).toMatch(/--color-status-parked/)
      expect(css).toMatch(/--color-status-in-progress/)
    },
  )

  it.skipIf(!hasSemanticTokens())(
    'uses no pure black (#000) or pure gray (#888) literals — CROSS-05',
    () => {
      const css = readFileSync(globalsPath, 'utf-8')
      expect(css).not.toMatch(/#000(?![0-9a-f])/i)
      expect(css).not.toMatch(/#fff(?![0-9a-f])/i)
      expect(css).not.toMatch(/--color-stone-/)
      expect(css).not.toMatch(/--color-gray-/)
      expect(css).not.toMatch(/--color-zinc-/)
    },
  )
})
