import { test, expect } from '@playwright/test';

test('login flow', async ({ page }) => {
  await page.goto('https://qabrains.com/');

  await page.getByRole('button', { name: /^Sign In$/ }).click();

  await page.getByPlaceholder('eg. user@user.com').fill('arifaabdul15@gmail.com');
  await page.getByPlaceholder('Password').fill('Password@123!123#');

  await Promise.all([
    page.waitForNavigation(),
    page.getByRole('button', { name: /^Sign In$/ }).click()
  ]);

  // Assertion (VERY IMPORTANT)
  await expect(page).not.toHaveURL(/login/);
});