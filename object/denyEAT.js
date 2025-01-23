import { aprovarRachazar, logInProfesional } from "./login";
import { logInCoordinador } from './assignReques';
import path from "path";
import { selectBirthDay } from "./utils/utils";
class DenyEAT {

    async formDenyEAT(page) {
        let keyword = {
            keywordRoute: path.resolve(__dirname, './utils/files/pdf_prueba.pdf'),
            loremIpsumText: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.'
        }

        let locator = {
            inputFile: 'input[type="file"]',
        }
        console.log('Iniciando sesión como Coordinador...')
        await logInCoordinador.formLogIn(page);
        console.log('Iniciando sesión como Profesional...')
        await logInProfesional.formLogIn(page);
        await page.getByText('Revisión', { exact: true }).first().click()
        await page.waitForTimeout(1000)
        await page.locator('#AdditionalEatDetail').fill('123')
        await page.getByText('Cargar', { exact: true }).click()
        await page.getByText('Rechazar paso').click()
        await page.locator('#undefined').fill(keyword.loremIpsumText)
        await page.getByText('Rechazar paso').nth(1).click()
        await page.waitForTimeout(1000)
        await page.getByText('Información del representante legal').click();
        await page.waitForTimeout(1000)
        await page.locator('#appointmentCertificateNumber').fill('1231312')
        await page.locator('#appointmentCertificate-date').fill(selectBirthDay())
        await page.locator('#posessionCertificateNumber').fill('1212112')
        await page.locator('#posessionCertificateNumber-date').fill(selectBirthDay())
        await page.getByText('Cargar', { exact: true }).click()
        await page.getByText('Rechazar paso').click();
        await page.locator('#undefined').fill(keyword.loremIpsumText)
        await page.getByText('Rechazar paso').nth(1).click();

        await page.getByText('Documentos de conformación').click();
        await page.waitForTimeout(1000)
        await page.locator('#undefined').nth(0).fill(keyword.loremIpsumText)
        await page.locator('#undefined').nth(1).fill(keyword.loremIpsumText)
        await page.locator('#statutesTarget').fill('123123123')
        await page.locator('#constitutionRecords').fill('12312312')
        await page.locator('#constitution-date').fill(selectBirthDay())
        await page.getByText('Cargar', { exact: true }).click()
        await page.getByText('Rechazar paso').click();
        await page.locator('#undefined').nth(2).fill(keyword.loremIpsumText)
        await page.getByText('Rechazar paso').nth(1).click();
        await page.waitForTimeout(1000)
        await page.getByText('Datos de acceso al sistema').click()
        await page.waitForTimeout(1000)
        await page.getByText('Rechazar paso').click();
        await page.locator('#undefined').fill(keyword.loremIpsumText)
        await page.getByText('Rechazar paso').nth(1).click();
        await page.waitForTimeout(1000)
        await page.getByText('Resultado de la revisión EAT').click()
        await page.waitForTimeout(1000)
        await page.getByText('Rechazar solicitud').click()
        await page.waitForTimeout(800)
        await page.locator('span.p-radiobutton-icon').nth(0).click({force:true})
        await page.locator('#undefined').fill(keyword.loremIpsumText)
        await page.getByText('Rechazar y enviar').click()
        await page.waitForTimeout(3000)
        await page.getByText('Cerrar sesión').click()
    }


}

export const denyEAT = new DenyEAT();