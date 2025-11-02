import { test, expect } from '@playwright/test';
/**
Classification  BMI range - kg/m2
Severe Thinness < 16
Moderate Thinness   16 - 17
Mild Thinness   17 - 18.5
Normal  18.5 - 25
Overweight  25 - 30
Obese Class I   30 - 35
Obese Class II  35 - 40
Obese Class III > 40
 */

const bmiDataSet = [
    { age: '25', gender: 'male', height: '180', weight: '65', expectedBmi: '20.1', expectedCategory: 'Normal weight' },
    { age: '30', gender: 'female', height: '160', weight: '45', expectedBmi: '17.6', expectedCategory: 'Mild Thinness' },
    { age: '40', gender: 'male', height: '175', weight: '85', expectedBmi: '27.8', expectedCategory: 'Overweight' },    
    { age: '35', gender: 'female', height: '165', weight: '95', expectedBmi: '34.9', expectedCategory: 'Obese Class I' },
    { age: '28', gender: 'male', height: '185', weight: '150', expectedBmi: '43.8', expectedCategory: 'Obese Class III' },
    { age: '22', gender: 'female', height: '170', weight: '35', expectedBmi: '12.1', expectedCategory: 'Severe Thinness' },
    { age: '45', gender: 'male', height: '150', weight: '80', expectedBmi: '35.6', expectedCategory: 'Obese Class II' },
]
bmiDataSet.forEach(({ age, gender, height, weight, expectedBmi, expectedCategory }) => {
    test(`veriffy BMI calculation for ${gender} gender with age ${age}, height ${height} cm and weight ${weight} kg`, async ({ page }) => {
        await page.goto('https://www.calculator.net/bmi-calculator.html');
        await page.getByRole('link', { name: 'Metric Units' }).click();
        await page.getByRole('button', { name: 'Clear' }).click();

        await page.locator('input[name="cage"]').fill(age);  
        if(await page.locator("#csex1").isChecked()) {
                if(gender==='female') {
                    await page.getByText('Female').click();
                }
        }   
    
        await page.locator('input[name="cheightmeter"]').fill(height);
        await page.locator('input[name="ckg"]').fill(weight);
        await page.getByRole('button', { name: 'Calculate' }).click();
        
        await expect(page.locator(`b:has-text("BMI = ${expectedBmi} kg/m2")`)).toBeVisible();
        await expect(page.locator(`text=${expectedCategory}`).first()).toBeVisible();
    });
});