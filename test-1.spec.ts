import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('royal-login-button').click();
  await page.getByRole('button', { name: 'Log in' }).click({
    button: 'right'
  });
});