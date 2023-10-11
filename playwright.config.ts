import { defineConfig, devices } from '@playwright/test';
 
 import type { PlaywrightTestConfig } from '@serenity-js/playwright-test';

const config: PlaywrightTestConfig = {
  testDir: './tests',

  reporter: [
    [ 'line' ],
    [ 'html', { open: 'always' } ],
    [ '@serenity-js/playwright-test', {
      crew: [
        '@serenity-js/serenity-bdd',
        [ '@serenity-js/core:ArtifactArchiver', { outputDirectory: 'target/site/serenity' } ],
      ]
    }]
  ],

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
}
 