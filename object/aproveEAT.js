import { logInProfesional } from './login';
import { logInCoordinador } from './assignReques';
import path from 'path';

class AproveEAT {
    async formAproveEAT(page) {
        let keyword = {
            keywordRoute: path.resolve(__dirname, './utils/files/pdf_prueba.pdf'),
            loremIpsumText: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto.',
        };

        let locator = {
            inputFile: 'input[type="file"]',
        };

        // Ejecuta primero el inicio de sesión del coordinador
        console.log('Iniciando sesión como Coordinador...');
        await logInCoordinador.formLogIn(page);

        // Si necesitas iniciar sesión también como profesional
        console.log('Iniciando sesión como Profesional...');
        await logInProfesional.formLogIn(page);

        // Continuar con el flujo de "Aprobar EAT"
        console.log('Navegando por las secciones...');
        await page.getByText('Revisión', { exact: true }).first().click();

        
        await page.getByText('Aprobar paso').click();
        await page.getByText('Aprobar paso').nth(0).click();

        await page.getByText('Información del representante legal').click();
        await page.getByText('Aprobar paso').click();
        await page.getByText('Aprobar paso').nth(0).click();

        await page.getByText('Documentos de conformación').click();
        await page.getByText('Aprobar paso').click();
        await page.getByText('Aprobar paso').nth(0).click();

        await page.getByText('Datos de acceso al sistema').click();
        await page.getByText('Aprobar paso').click();
        await page.getByText('Aprobar paso').nth(0).click();

        await page.getByText('Resultado de la revisión EAT').click();
        await page.getByText('Aprobar solicitud').click();
        await page.getByText('Aprobar y enviar').click();
        await page.getByText('Cerrar sesión').click();
    }
}

export const aproveEAT = new AproveEAT();
