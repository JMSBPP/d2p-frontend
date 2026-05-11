import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

// Plan 07 expands this with the full client + server schema.
// Phase 1 minimal placeholder so next.config.ts import side-effect succeeds.
export const env = createEnv({
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  },
  client: {},
  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
  },
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})
