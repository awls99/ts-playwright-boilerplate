import { PlaywrightTestConfig, devices } from '@playwright/test';
import path, { resolve } from 'path';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  timeout: 10 * 1000,
  expect: {
    timeout: 1000,
  },
  reporter: 'html',
  use: {
    headless: true,
    actionTimeout: 0,
    baseURL: process.env.BASE_URL,
    trace: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        contextOptions: {
          permissions: ['clipboard-read', 'clipboard-write'],
        },
      },
    }
  ],
};

export default config;
