const { test, expect } = require('@playwright/test');
const { createEatError } = require('../object/createEatError');


test('Create EATS error', async ({ page }) => {
    
await createEatError.formCrateEatError(page)
});