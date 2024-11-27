const { test, expect } = require('@playwright/test');
const { adminEAT } = require('../object/adminEAT');



test('Administration EAT ', async ({ page }) => {
    
await adminEAT.formAdminEAT(page)
});