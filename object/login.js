
class LogIn {
    async formLogIn(page) {
        let keyword = {
            userEmail: 'juan.barrerao+03@opitech.com.co',
            userPassword1: 'Opitech2024$',
            buttonCreateUser: 'Crear usuario',
            buttonNext: 'Siguiente'
        };

        let locator = {
            fieldUserEmail: '#email',
            fieldPassword: '#confirm-password',
            buttonLogin: 'span.p-button-label.ng-star-inserted',
            buttonRoll: 'div[role="radio"]'
        };

        //URL DEV
        await page.goto('https://sisgeatdev.opitech.com.co/sisgeat/auth/login');

        // Navega a la página de inicio de sesión
        //await page.goto('https://sisgeatqa.opitech.com.co/sisgeat/auth/login');

        // Completa el formulario de inicio de sesión
        await page.locator(locator.fieldUserEmail).fill(keyword.userEmail)
        await page.waitForTimeout(1000);
        await page.locator(locator.fieldPassword).click();
        await page.locator(locator.fieldPassword).fill('Opi12345#');
        await page.locator(locator.buttonLogin, { hasText: 'Iniciar sesión' }).click();
    }
}

export const logIn = new LogIn();


class LogInProfesional {
    async formLogIn(page) {
        let keyword = {
            userEmail: 'yan.munozd+7776@opitech.com.co',
            userPassword: 'Opi12345#',
            
            //Credecniales dev profesional
            //userEmail: 'juan.barrerao+03@opitech.com.co',
            //userPassword: 'Opitech2024$',
            buttonCreateUser: 'Crear usuario',
            buttonNext: 'Siguiente'
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
        await page.locator(locator.fieldUserEmail).fill(keyword.userEmail)
        await page.waitForTimeout(1000);
        await page.locator(locator.fieldPassword).click();
        await page.locator(locator.fieldPassword).fill(keyword.userPassword);
        await page.locator(locator.buttonLogin, { hasText: 'Iniciar sesión' }).click();
    }
}

export const logInProfesional = new LogInProfesional();



class AprobarRachazar{
    async cargarORechazar(page) {
        try {
            console.log('Intentando verificar visibilidad del botón Cargar...');
            const cargarVisible = await page.locator('button:has(span.p-button-label.ng-star-inserted:has-text("Cargar"))').isVisible();
            if (cargarVisible) {
                
                await page.locator('button:has(span.p-button-label.ng-star-inserted:has-text("Cargar"))').click();
                console.log('Botón Cargar encontrado y ejecutado.');
            } else {
                await page.getByText('Rechazar paso').click();
                console.log('Botón Cargar no encontrado, ejecutando la opción Rechazar.');
            }
        } catch (error) {
            console.error('Error en cargarORechazar:', error);
        }
    }
    
}
export const aprovarRachazar = new AprobarRachazar()