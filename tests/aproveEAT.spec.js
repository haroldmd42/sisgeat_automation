const { test, expect } = require('@playwright/test');
const { aproveEAT } = require('../object/aproveEAT');

test('Aprove EAT form', async ({ page }) => {
    
    await aproveEAT.formAproveEAT(page);
    });