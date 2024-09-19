
class LogIn {
    async formLogIn(page) {
        let keyword = {
            userEmail: 'yan.munozd@opitech.com.co',
            userPassword: 'Opi12345#',
            buttonCreateUser: 'Crear usuario',
            buttonNext: 'Siguiente'
        };

        let locator = {
            fieldUserEmail: '#email',
            fieldPassword: '#confirm-password',
            buttonLogin: 'span.p-button-label.ng-star-inserted',
            buttonRoll: 'div[role="radio"]'
        };

       
        // Navega a la página de inicio de sesión
        await page.goto('https://sisgeatqa.opitech.com.co/sisgeat/auth/login');

        // Completa el formulario de inicio de sesión
        await page.locator(locator.fieldUserEmail).fill(keyword.userEmail)
        await page.waitForTimeout(1000);
        await page.locator(locator.fieldPassword).click();
        await page.locator(locator.fieldPassword).fill('Opi12345#');
        await page.locator(locator.buttonLogin, { hasText: 'Iniciar sesión' }).click();
    }
}

export const logIn = new LogIn();