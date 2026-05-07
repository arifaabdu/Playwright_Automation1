// Import test and expect from Playwright test library
import { test, expect } from '@playwright/test';

// Define a test case named 'flow'
test('flow', async ({ page }) => {

    // Navigate to the practice site URL
    await page.goto('https://qabrains.com/practice-site');

    // Click the 'Sign In' button on the page
    await page.locator('span[class="after"]').click();
    await page.locator('//input[@placeholder="eg. user@user.com"]').fill('arifaabdul15@gmail.com');
    await page.locator('//input[@placeholder="Password"]').fill('Password@123');

    // Click the Sign In submit button
    await page.locator('button:has-text("Sign In")').click();


});
