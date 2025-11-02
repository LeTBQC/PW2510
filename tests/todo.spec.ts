import { test, expect } from '@playwright/test';

test("verify add new todo successfully", async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');

    await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page.getByRole('textbox', { name: 'New Todo Input' }).fill('Buy groceries');
    await page.getByRole('textbox', { name: 'New Todo Input' }).press('Enter');

    await expect(page.getByTestId('todo-item-label'))
        .toHaveCount(2);

    await expect(page
        .getByTestId('todo-item-label'))
        .toHaveText(['Buy milk', 'Buy groceries']);
    
});
test("verifu mark a todo as completed", async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');

    await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page.getByRole('textbox', { name: 'New Todo Input' }).fill('Buy groceries');
    await page.getByRole('textbox', { name: 'New Todo Input' }).press('Enter');

    await page
        .getByRole('listitem') // return all
        .filter({ hasText: 'Buy milk' })
        .getByTestId('todo-item-toggle')
        .click()

    expect(await page.getByRole('listitem')
        .filter({ hasText: 'Buy milk' })
        .getByTestId('todo-item-toggle').isChecked())
        .toBeTruthy();

});

test("verify delete a todo completed", async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');

    await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page.getByPlaceholder('What needs to be done?').fill('Buy groceries');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page
        .getByRole('listitem') // return all
        .filter({ hasText: 'Buy milk' })
        .getByTestId('todo-item-toggle')
        .click()
    await page
        .getByRole('listitem') // return all
        .filter({ hasText: 'Buy milk' })
        .getByRole('button', { name: '×' })
        .click();


    await expect(page.getByTestId('todo-item-label'))
        .toHaveCount(1);

});

test("verify delete all todo completed by button", async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');

    await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page.getByPlaceholder('What needs to be done?').fill('Buy groceries');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

        await page
        .getByRole('listitem') // return all
        .filter({ hasText: 'Buy milk' })
        .getByTestId('todo-item-toggle')
        .click()

            await page
        .getByRole('listitem') // return all
        .filter({ hasText: 'Buy groceries' })
        .getByTestId('todo-item-toggle')
        .click()

    await page.getByRole('button', { name: 'Clear completed' }).click();

    await expect(page.getByTestId('todo-item-label'))
        .toHaveCount(0);

});

test("verify delete a todo not completed", async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');

    await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page.getByPlaceholder('What needs to be done?').fill('Buy groceries');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page
        .getByRole('listitem')
        .filter({ hasText: 'Buy milk' })
        .click();

    // const box = await page.getByText('Buy milk').boundingBox();
    //     if (box) {
    //     await page.mouse.move(box.x, box.y);
    //     }

    await page
        .getByRole('listitem') // return all
        .filter({ hasText: 'Buy milk' })
        .getByRole('button', { name: '×' })
        .click();

    await expect(page.getByTestId('todo-item-label'))
        .toHaveCount(1);

    await expect(page
    .getByTestId('todo-item-label'))
    .toHaveText(['Buy groceries']);

});



test("verify delete all todo not completed", async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');

    await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page.getByPlaceholder('What needs to be done?').fill('Buy groceries');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page
        .getByRole('listitem')
        .filter({ hasText: 'Buy milk' })
        .click();

    await page
        .getByRole('listitem') // return all
        .filter({ hasText: 'Buy milk' })
        .getByRole('button', { name: '×' })
        .click();

    await page
        .getByRole('listitem')
        .filter({ hasText: 'Buy groceries' })
        .click();

    await page
        .getByRole('listitem') // return all
        .filter({ hasText: 'Buy groceries' })
        .getByRole('button', { name: '×' })
        .click();

    await expect(page.getByTestId('todo-item-label'))
        .toHaveCount(0);

    await expect(page
    .getByTestId('todo-item-label'))
    .toHaveText([]);
});

// Hover will not show the delete button ???


//Rename 1 task success

test("verify Rename a todo", async ({ page }) => {
    await page.goto('https://todomvc.com/examples/react/dist/');

    await page.getByPlaceholder('What needs to be done?').fill('Buy milk');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page.getByPlaceholder('What needs to be done?').fill('Buy groceries');
    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page.getByRole('listitem').filter({ hasText: 'Buy milk' }).dblclick();
    await page.getByRole('listitem').filter({ hasText: 'Buy milk' }).fill('Buy meat');

    await expect(page
        .getByTestId('todo-item-label'))
        .toHaveText(['Buy meat','Buy groceries']);

});




