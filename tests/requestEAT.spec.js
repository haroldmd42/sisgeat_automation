const { test, expect } = require('@playwright/test');
import { requestEAT } from '../object/requestEAT.js';

//Radicar una nueva solicitud
test('Request EAT form', async ({ page }) => {
    
await requestEAT.formRequestEAT(page)
});