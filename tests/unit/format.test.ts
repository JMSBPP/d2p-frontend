import { describe, expect, it } from 'vitest'

describe('lib/format/currency', () => {
  it.todo('formats COP for es-CO by default')
  it.todo('formats USD for en by default')
  it.todo('honors user-preference cookie override')
})

describe('lib/format/date', () => {
  it.todo('formats 2026-05-11 as "11 de mayo de 2026" for es-CO')
  it.todo('formats 2026-05-11 as "May 11, 2026" for en')
  it.todo('never uses en-US')
})

describe('lib/format/number', () => {
  it.todo('uses "." thousands and "," decimal for es-CO')
  it.todo('uses "," thousands and "." decimal for en')
})

describe('Intl primitives sanity (proves test infra)', () => {
  it('formats es-CO date as "11 de mayo de 2026"', () => {
    const d = new Date('2026-05-11T12:00:00Z')
    const f = new Intl.DateTimeFormat('es-CO', { dateStyle: 'long' })
    expect(f.format(d)).toMatch(/11 de mayo de 2026/)
  })
  it('formats en date as "May 11, 2026"', () => {
    const d = new Date('2026-05-11T12:00:00Z')
    const f = new Intl.DateTimeFormat('en', { dateStyle: 'long' })
    expect(f.format(d)).toBe('May 11, 2026')
  })
})
