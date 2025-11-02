<<<<<<< HEAD
import { test, expect } from '@playwright/test';

test('Body Mass Index (BMI) Calculator', () => {
    await page.goto('https://the-internet.herokuapp.com/login');
    await page.getByRole('link', { name: 'Metric Units' }).click();
    await page.locator('#cheightmeter').click();
    await page.locator('#cheightmeter').fill('170');

    await page.locator('#ckg').click();     
    await page.locator('#ckg').fill('70');
    await page.getByRole('button', { name: 'Calculate' }).click();
});
=======
// import { test, expect } from '@playwright/test';

// test('Body Mass Index (BMI) Calculator', () => {
//     await page.goto('https://the-internet.herokuapp.com/login');
//     await page.getByRole('link', { name: 'Metric Units' }).click();
//     await page.locator('#cheightmeter').click();
//     await page.locator('#cheightmeter').fill('170');

//     await page.locator('#ckg').click();     
//     await page.locator('#ckg').fill('70');
//     await page.getByRole('button', { name: 'Calculate' }).click();
// });
>>>>>>> 4a8e68f (Initial Playwright project)
