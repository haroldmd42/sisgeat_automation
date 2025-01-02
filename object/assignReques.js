class LogInCoordinador {
    async formLogIn(page) {
        let keyword = {
            userEmail: 'pepe@yopmail.com',
            userPassword: 'Prueba123*',
            
            //userEmail: 'carlos.garzong+8@opitech.com.co',
            //userPassword: 'Anacar0312$',
        };

        let locator = {
            fieldUserEmail: '#email',
            fieldPassword: '#confirm-password',
            buttonLogin: 'span.p-button-label.ng-star-inserted',
            buttonRoll: 'div[role="radio"]'
        };

        //URL DEV
        //await page.goto('https://sisgeatdev.opitech.com.co/sisgeat/auth/login');

        // Navega a la página de inicio de sesión
        await page.goto('https://sisgeatqa.opitech.com.co/sisgeat/auth/login');

        // Completa el formulario de inicio de sesión
        await page.locator(locator.fieldUserEmail).fill(keyword.userEmail);
        await page.waitForTimeout(500);
        await page.locator(locator.fieldPassword).click();
        await page.locator(locator.fieldPassword).fill(keyword.userPassword);
        await page.locator(locator.buttonLogin, { hasText: 'Iniciar sesión' }).click();
        await page.getByText('Radicada', { exact: true }).first().click();
        await page.getByText('Asignar Profesional EAT').click()
        await page.locator('#professionals').click();
        await page.getByText("Yan Harold").click()
        await page.getByText('Asignar Profesional EAT').nth(2).click()
        await page.getByText('confirmar').click()
        await page.waitForTimeout(500)
        await page.getByText('Cerrar sesión').click();

    }
}

export const logInCoordinador = new LogInCoordinador();
