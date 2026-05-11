import { expect, test } from '@playwright/test'

test.fixme('/llms.txt returns 200 plaintext', async ({ request }) => {
  const r = await request.get('/llms.txt')
  expect(r.status()).toBe(200)
  expect(r.headers()['content-type']).toContain('text/plain')
})

test.fixme('/.well-known/mcp.json returns 200 JSON with server descriptor', async ({ request }) => {
  const r = await request.get('/.well-known/mcp.json')
  expect(r.status()).toBe(200)
  const body = await r.json()
  expect(body).toHaveProperty('mcp_servers')
})

test.fixme('/.well-known/openapi.yaml returns 200 YAML', async ({ request }) => {
  const r = await request.get('/.well-known/openapi.yaml')
  expect(r.status()).toBe(200)
})

test.fixme('root HTML contains JSON-LD WebSite + Organization', async ({ page }) => {
  await page.goto('/')
  const scripts = await page.locator('script[type="application/ld+json"]').count()
  expect(scripts).toBeGreaterThanOrEqual(2)
})
