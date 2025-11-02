// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://aws-test-phoenixweb.livegroup.com.au/Member/Create');
//   await page.locator('.form-body > div:nth-child(5)').click();
//   await page.getByLabel('Currency *').selectOption('AUD');
//   await page.getByLabel('Business Type *', { exact: true }).selectOption('29');
//   await page.getByLabel('Sub-business Type *').selectOption('56');
//   await page.locator('div:nth-child(8)').first().click();
//   await page.getByRole('textbox', { name: 'First Name *' }).click();
//   await page.getByRole('textbox', { name: 'First Name *' }).fill('Bau Le');
//   await page.getByRole('button', { name: ' Save' }).click();
// });