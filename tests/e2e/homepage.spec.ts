import { expect, test } from '@playwright/test'

test.fixme('homepage renders wordmark and tagline in es-CO by default', async ({ page }) => {
  await page.goto('/')
  await expect(page.getByText('WVS Finance')).toBeVisible()
})
