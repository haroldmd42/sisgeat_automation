const { test, expect } = require('@playwright/test');
const { aproveEAT } = require('../object/aproveEAT');
const { logInCoordinador } = require('../object/assignReques');

test('Aprove EAT form', async ({ page }) => {
    
    await logInCoordinador.formLogIn(page);
    test.slow() 
    });