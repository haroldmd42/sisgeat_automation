const { test, expect } = require('@playwright/test');
const { estrategicPlanEAT } = require('../object/estrategicPlanEAT');


test('Estrategic plan EAT, radicate request', async ({ page }) => {
    test.slow()   
    await estrategicPlanEAT.formEstrategicPlan(page)
    });