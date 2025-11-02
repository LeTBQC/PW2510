import { test, expect } from '@playwright/test';

/**
 * https://the-internet.herokuapp.com/dropdown
    */

test ('verify dropdown list functionality', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    
    const dropdown = page.locator('#dropdown');
    await expect(dropdown).toBeVisible();

    // Select an option
    await dropdown.selectOption('1');
    await expect(dropdown).toHaveValue('1');

    await dropdown.selectOption('2');
    await expect(dropdown).toHaveValue('2');

    //verify options count
    const options = dropdown.locator('option');
    await expect(options).toHaveCount(3); // Including the default option

    // Verify the text of the options
    await expect(options.nth(0)).toHaveText('Please select an option');
    await expect(options.nth(1)).toHaveText('Option 1');
    await expect(options.nth(2)).toHaveText('Option 2');
    
});
