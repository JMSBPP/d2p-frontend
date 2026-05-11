import { describe, it } from 'vitest'

describe('velite iteration schema', () => {
  it.todo('rejects iteration MDX missing replication_hash')
  it.todo('rejects FAIL status without disposition_memo (.refine())')
  it.todo('accepts PASS iteration with valid fields')
  it.todo('enforces replication_hash matches /^[a-f0-9]{64}$/')
})
