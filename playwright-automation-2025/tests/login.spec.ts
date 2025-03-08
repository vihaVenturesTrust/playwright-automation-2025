import { test } from './auth.fixture';
import { expect } from '@playwright/test';

test('User should be able to login', async ({ page }) => {
  test.fixme(true, 'Known issue with the website');
  await page.goto('https://example.com/login');
  
  await page.fill('#username', 'testuser');
  await page.fill('#password', 'securepassword');
  await page.click('button[type="submit"]');
  
  await expect(page).toHaveURL('https://example.com/dashboard');
});

test('Use authToken fixture', async ({ page, authToken }) => {
  test.fixme(true, 'Known issue with the website');
  await page.goto('https://example.com');
  await page.evaluate(token => localStorage.setItem('authToken', token), authToken);
  await page.reload();
  await expect(page).toHaveURL('https://example.com/dashboard');
});
