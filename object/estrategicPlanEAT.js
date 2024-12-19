import { logInProfesional } from '../object/login';
import path from 'path';
import { selectBirthDay } from './utils/utils';


class EstrategicPlanEAT {
    async formEstrategicPlan(page) {
        let keyword = {
            keywordRoute: path.resolve(__dirname, './utils/files/pdf_prueba.pdf'),
            loremIpsumText: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.'
        }

        console.log('Iniciando sesión como Profesional...');
        await logInProfesional.formLogIn(page);

        // Navegar y extraer el correo electrónico
        console.log('Navegando por las secciones...');
        await page.getByText('Usuario EAT aprobado', { exact: true }).nth(0).click();
        await page.getByText('Datos de acceso al sistema').click();

        const emailElement = await page.locator('p.email');
        const email = await emailElement.innerText();
        console.log('Correo copiado:', email);
        await page.getByText('Cerrar sesión').click();
        // Abrir Yopmail y buscar el correo
        console.log('Abriendo Yopmail para obtener la contraseña...');
        await page.goto('https://yopmail.com/es/');
        await page.locator('#login').fill(email);
        await page.locator('i.material-icons-outlined.f36').click();

        // Acceder al iframe del correo
        const iframe = page.frameLocator('iframe#ifmail'); // Nombre correcto del iframe en Yopmail
        const preLocator = iframe.locator('pre'); // Buscar el elemento <pre>

        // Esperar que el elemento cargue y obtener su contenido
        console.log('Esperando el contenido del correo...');
        await preLocator.waitFor({ state: 'visible', timeout: 30000 });

        const emailText = await preLocator.innerText();
        console.log('Contenido del correo:', emailText);

        // Extraer la contraseña usando una expresión regular
        const regexPassword = /Contraseña:\s*([\S]+)/;
        const match = emailText.match(regexPassword);
        const password = match ? match[1] : null;

        if (password) {
            console.log('Contraseña extraída:', password);

            // Iniciar sesión en SISGEAT
            console.log('Iniciando sesión en SISGEAT...');
            await page.goto('https://sisgeatqa.opitech.com.co/sisgeat/');
            await page.fill('#email', email);
            await page.fill('#confirm-password', password);
            await page.click('span.p-button-label.ng-star-inserted');
            console.log('Inicio de sesión realizado con éxito.');
        } else {
            throw new Error('No se pudo encontrar la contraseña en el correo.');
        }

        await page.locator('#first-session-password').fill('Opi12345#')
        await page.locator('#confirm-session-password-confirmation').fill('Opi12345#')
        await page.getByText('Establecer contraseña').click()
        await page.getByText('Acuerdos y ordenanzas').click()
        await page.locator('input[type="file"]').nth(0).setInputFiles(keyword.keywordRoute);
        await page.locator('input[type="file"]').nth(1).setInputFiles(keyword.keywordRoute);
        
        await page.locator('#eat-agreement-number').fill('1231231232')
        await page.locator('#eat-agreement-date').fill(selectBirthDay())
        await page.getByText('Cargar', { exact: true }).click()
        await page.getByText('Detalle del DNP').click()
        await page.locator("span.p-element,p-dropdown-label.p-inputtext.p-dropdown-label-empty.ng-star-inserted").first().click()
        await page.getByText('Modificado por observaciones DNP').click()
        await page.locator('#currentDevelopmentPlans').fill(keyword.loremIpsumText)
        await page.locator('#currentTerritorialPlanningPlans').fill(keyword.loremIpsumText)
        await page.locator('#sectoralPlansOrRelatedStrategicProjects').fill(keyword.loremIpsumText)
        await page.locator('#territorialVision').fill(keyword.loremIpsumText)
        await page.locator('#generalObjectives').fill(keyword.loremIpsumText)
        await page.locator('input.p-element').first().fill(keyword.loremIpsumText);
        await page.locator('input.p-element').first().press('Enter');
        await page.locator('#strategic-plan-validity').fill(selectBirthDay())
        await page.locator('#participationSpaces').fill(keyword.loremIpsumText)
        await page.locator('input[type="file"]').nth(1).setInputFiles(keyword.keywordRoute);
        await page.getByText('Cargar', {exact: true}).click()
        await page.getByText('Hechos', {exact: true}).click()
        await page.getByText('Crear hecho').first().click()
        await page.locator('#name').fill('Hechos de prueba automatizada3')
        await page.getByText('Crear hecho').nth(1).click()
        await page.getByText('Hechos de prueba automatizada3').click()
        await page.getByText('CREAR LÍNEA ESTRATÉGICA').nth(1).click()
        await page.locator('#name').fill('Lineas de prueba automatizada3')
        await page.getByText('CREAR LÍNEA ESTRATÉGICA').nth(1).click()
        await page.getByText('Lineas de prueba automatizada3').click()
        await page.getByText('Crear Programas').click()
        await page.locator('#name').nth(0).fill('Programas de prueba automatizada3')
        await page.locator('input.p-element.p-autocomplete-input.p-inputtext.p-component.ng-star-inserted').nth(0).fill('1')
        await page.waitForTimeout(300)
        await page.getByText('01').click()
        await page.locator('input.p-element.p-autocomplete-input.p-inputtext.p-component.ng-star-inserted').nth(1).fill('1')
        await page.waitForTimeout(300)
        await page.getByText('0199').click()
        await page.getByText('Crear Programa').nth(1).click()
        await page.getByText('Programas de prueba automatizada3').click()
        await page.getByText('Crear proyecto').nth(1).click()
        await page.locator('#undefined').nth(0).fill(keyword.loremIpsumText)
        await page.locator('#undefined').nth(1).fill(keyword.loremIpsumText)
        await page.locator('#undefined').nth(2).fill(keyword.loremIpsumText)
        await page.locator('#undefined').nth(3).fill('2000')
        await page.locator('#undefined').nth(4).fill(keyword.loremIpsumText)
        await page.locator('#undefined').nth(5).fill('2')
        await page.getByText('Siguiente').click()
        await page.locator('input.p-element.p-autocomplete-input.p-inputtext.p-component.ng-star-inserted').nth(0).fill('1')
        await page.waitForTimeout(300)
        await page.getByText('0101002').click()
        await page.locator('input.p-element.p-autocomplete-input.p-inputtext.p-component.ng-star-inserted').nth(1).fill('1')
        await page.waitForTimeout(300)
        await page.getByText('010100200').click()
        await page.getByText('Siguiente').click()
        await page.locator('#undefined').nth(9).fill('500000000')
        await page.locator('#undefined').nth(10).fill('500000000')
        await page.locator('#undefined').nth(11).fill('500000000')
        await page.locator('#undefined').nth(12).fill('500000000')
        await page.locator('#undefined').nth(13).fill('500000000')
        await page.locator('#undefined').nth(14).fill('500000000')
        await page.getByText('Siguiente').click()
        await page.locator('#code-0').fill('500000000')
        await page.getByText('Siguiente').click()
        await page.getByText('Terminar').click()
        await page.waitForTimeout(2000)
        await page.getByText('Radicar información').click()
        await page.waitForTimeout(2000)

        
    }
}

export const estrategicPlanEAT = new EstrategicPlanEAT();
