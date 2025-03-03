import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.facebook.com/');
  await page.getByTestId('open-registration-form-button').click();
  await page.getByRole('button', { name: 'Sign Up' }).click({
    button: 'right'
  });
  await page.goto('https://www.facebook.com/r.php?entry_point=login');
  await page.getByRole('button', { name: 'Sign Up' }).click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Sign Up' }).click({
    button: 'right'
  });
  await page.getByRole('button', { name: 'Sign Up' }).click({
    button: 'right'
  });
});