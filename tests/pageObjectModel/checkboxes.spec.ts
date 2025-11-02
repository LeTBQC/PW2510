import { test, expect } from '@playwright/test';
/**
 * https://the-internet.herokuapp.com/checkboxes
 */

test ('verify checkboxes functionality', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/checkboxes');

    const checkbox1 = page.locator('input[type="checkbox"]').first();
    const checkbox2 = page.locator('input[type="checkbox"]').nth(1);
    
    // Verify initial states
    await expect(checkbox1).not.toBeChecked();
    await expect(checkbox2).toBeChecked();
    // Check the first checkbox
    await checkbox1.check();
    await expect(checkbox1).toBeChecked();

    // Uncheck the second checkbox
    await checkbox2.uncheck();
    await expect(checkbox2).not.toBeChecked();
});



