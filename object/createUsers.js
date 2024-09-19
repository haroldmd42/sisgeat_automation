import { listLastnameUser, listNameUser, numeroAleatorio10Digitos, rollUserRandom } from "./utils/utils";

class CreateUser {
    async formCreateUser(page) {
        let keyword = {
            userEmail: 'yan.munozd@opitech.com.co',
            userPassword: 'Opi12345#',
            buttonCreateUser: 'Crear usuario',
            buttonNext: 'Siguiente'
        };

        let locator = {
            fieldUserEmail: '#forgot-password-email',
            fieldPassword: '#confirm-password',
            buttonLogin: 'body > app-root > app-login > div > section > app-login-form > div > form > div > button.p-element.p-ripple.w-full.p-button-rounded.p-button-secondary.uppercase.flex.justify-content-center.p-button.p-component',
            buttonRoll: 'div[role="radio"]'
        };

        let userNames = listLastnameUser()
        let lastNames = listNameUser()
        // Navega a la página de inicio de sesión
        await page.goto('https://sisgeatqa.opitech.com.co/sisgeat/auth/login');

        // Completa el formulario de inicio de sesión
        await page.locator(locator.fieldUserEmail).fill(keyword.userEmail)
        await page.waitForTimeout(1000);
        await page.locator(locator.fieldPassword).click();
        await page.locator('body > app-root > app-login > div > section > app-login-form > div > form > div > button.p-element.p-ripple.w-full.p-button-rounded.p-button-secondary.uppercase.flex.justify-content-center.p-button.p-component').fill(keyword.userPassword);
        await page.locator(locator.buttonLogin).click();

        // Navega a la sección de creación de usuario
        await page.getByText(keyword.buttonCreateUser).click();
        const roleName = rollUserRandom();
        function numeroAleatorio2() {
            return Math.floor(Math.random() * 8);
        }
        await page.locator(locator.buttonRoll).nth(numeroAleatorio2()).click();
        //await page.click('span.p-button-label:has-text("${saveRollser}")');
        await page.getByText(keyword.buttonNext).click();
        // Completa el formulario de creación de usuario
        await page.locator('#create-name').fill(userNames);
        await page.locator('#create-last-name').fill(lastNames);
        await page.locator('#user-create-documentNumber').fill(numeroAleatorio10Digitos());
        await page.locator('#create-user-birthdate').fill('2000-02-02');
        await page.locator('#user-edit-phone').fill('3123215325');
        await page.waitForTimeout(2000);
        await page.getByText(keyword.buttonNext).click();
        // Completa el siguiente paso del formulario
        function numeroAleatorio() {
            return Math.floor(Math.random() * 100) + 1;
        }
        const emailrandom = ('yan.munozd+' + numeroAleatorio() + '@opitech.com.co').replace(/\s+/g, '').toLowerCase();
        await page.locator('#forgot-password-email').fill(emailrandom, { delay: 100 });
        await page.waitForTimeout(2000);
        await page.getByText(keyword.buttonNext).click();
        await page.waitForTimeout(2000);
        await page.getByText('Terminar').click()
        // Cierra la creación sin guardar       
        await page.waitForTimeout(2000);
        // Cerrar sesión
        await page.getByText('Cerrar sesión').click();
    }
}

// Exporta una instancia de la clase para usarla en otros archivos
export const createUser = new CreateUser();
