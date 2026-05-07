import { test, expect } from '@playwright/test';

test('permit flow', async ({ page }) => {
  // Navigate to the site
  await page.goto('https://lacps--qa2.sandbox.my.site.com/s/');

  // Close any popup/modal
  await page.getByRole('button', { name: 'close' }).click();

  // Click Log in button
  await page.getByRole('button', { name: 'Log in' }).click();

  // Fill in the username
  await page.fill('#username', 'arifa.a@unisys.com');

  // Click Continue
  await page.getByRole('button', { name: 'continue' }).click();

  // Fill in the password
  await page.fill('#password', 'YourPasswordHere');

  // Submit login
  await page.getByRole('button', { name: 'Log In' }).click();

  // Wait for the page to load after login
  await page.waitForLoadState('networkidle');

  // Verify successful login (update selector as needed)
  await expect(page).toHaveURL(/lacps--qa2\.sandbox\.my\.site\.com/);

  // Navigate to permit section (update selector as needed)
  await page.getByRole('link', { name: 'Permits' }).click();

  // Verify permits page is visible
  await expect(page.getByRole('heading', { name: 'Permits' })).toBeVisible();
});