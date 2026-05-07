import { test, expect } from '@playwright/test';

test('permit flow', async ({ page }) => {

  await page.goto('https://lacps--qa1.sandbox.my.site.com/s/');

  await page.getByRole('button', { name: 'Close' }).click();
  await page.getByRole('button', { name: 'Log In' }).click();

  await page.getByRole('textbox', { name: 'Email address' }).fill('arifa.a@unisys.com');
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('textbox', { name: 'Password' }).fill('Password@123');
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('button', { name: 'Permits' }).click();
  await page.getByRole('link', { name: 'New Permit Application' }).click();
  await page.getByRole('button', { name: 'Start New Application' }).click();

  await page.getByRole('radio', { name: 'Guided Help I need help' }).click();

  await page.getByText('Pre-Defined Scope').click();

  await page.getByRole('combobox', { name: 'Address' }).click();
  await page.getByText('613B S Hill St').click();

  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByLabel('*Applicant Role').selectOption('vUsersApplicantRoleValues.2');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByLabel('*Use Class').selectOption('UseclassPicklist.Commercial');
  await page.getByRole('button', { name: 'Next' }).click();

});