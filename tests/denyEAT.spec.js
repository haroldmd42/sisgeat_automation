const { test, expect } = require('@playwright/test');
const { denyEAT } = require('../object/denyEAT');


test('Deny EAT form', async ({ page }) => {
    
    await denyEAT.formDenyEAT(page)
    });