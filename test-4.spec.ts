import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await expect(page.getByTestId('royal-login-button')).toBeVisible();
  await page.getByText('Create a Page for a celebrity').click();
  await page.locator('body').press('Enter');
  await page.getByTestId('royal-login-button').click();
  await page.getByTestId('royal-login-button').click();
});