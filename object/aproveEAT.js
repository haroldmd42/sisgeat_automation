import { logInProfesional } from './login';
import { logInCoordinador } from './assignReques';
import path from 'path';
import { selectBirthDay } from './utils/utils';

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
        //await logInCoordinador.formLogIn(page);

        // Si necesitas iniciar sesión también como profesional
        console.log('Iniciando sesión como Profesional...');
        await logInProfesional.formLogIn(page);

        // Continuar con el flujo de "Aprobar EAT"
        console.log('Navegando por las secciones...');
        await page.getByText('Revisión', { exact: true }).first().click();

        await page.locator('#AdditionalEatDetail').fill('123')
        await page.getByText('Gargar', {exact:true}).click()
        await page.getByText('Aprobar paso').click();
        await page.getByText('Aprobar paso').nth(0).click();

        await page.getByText('Información del representante legal').click();
        await page.locator('#appointmentCertificateNumber').fill('1231312')
        await page.locator('#appointmentCertificate-date').fill(selectBirthDay())
        await page.locator('#posessionCertificateNumber').fill('1212112')
        await page.locator('#posessionCertificateNumber-date').fill(selectBirthDay())
        await page.getByText('Gargar', {exact:true}).click()
        await page.reload();
        await page.getByText('Información del representante legal').click();
        await page.getByText('Aprobar paso').click();
        await page.getByText('Aprobar paso').nth(0).click();


        await page.getByText('Documentos de conformación').click();
        await page.locator('#undefined').nth(0).fill(keyword.loremIpsumText)
        await page.locator('#undefined').nth(1).fill(keyword.loremIpsumText)
        await page.locator('#statutesTarget').fill('123123123')
        await page.locator('#constitutionRecords').fill('12312312')
        await page.locator('#constitution-date').fill(selectBirthDay())
        await page.getByText('Gargar', {exact:true}).click()
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
