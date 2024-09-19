const { test, expect } = require('@playwright/test');
import { createUser } from '../object/createUsers.js';

test('Create User', async ({ page }) => {
    
await createUser.formCreateUser(page)
});