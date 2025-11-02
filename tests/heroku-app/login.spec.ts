import { test, expect } from '@playwright/test';

const dataSet = [
    { username: 'tomsmith', password: 'SuperSecretPassword!', errorMessage: 'You logged into a secure area!' },
    { username: 'wrongUser', password: 'SuperSecretPassword!', errorMessage: 'Your username is invalid!' },
    { username: 'tomsmith', password: 'wrongPassword', errorMessage: 'Your password is invalid!' }
];
dataSet.forEach(({ username, password, errorMessage }) => {
    test(`Login with ${username} and ${password} then ${errorMessage}`, async ({ page }) => {
        await page.goto('https://the-internet.herokuapp.com/login');

        await page.getByRole('link', { name: 'Metric Units' }).click();


        await page.getByRole('textbox', {name: 'Username'}).fill(username);
        await page.getByRole('textbox', {name: 'Password'}).fill(password);
        await page.locator('button[type="submit"]').click();

        await expect(page.getByText(errorMessage)).toBeVisible();

    });
});


