import { test as base } from '@playwright/test';

export const test = base.extend<{ authToken: string }>({
  authToken: async ({}, use) => {
    const token = 'mock-auth-token';  // Fetch or mock an auth token
    await use(token);
  },
});
