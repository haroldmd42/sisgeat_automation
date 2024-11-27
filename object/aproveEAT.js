import { aprovarRachazar, logInProfesional } from "./login";
import path from "path";
class AproveEAT{
    
    async formAproveEAT(page){
        let keyword = {
            keywordRoute: path.resolve(__dirname, './utils/files/pdf_prueba.pdf'),
            loremIpsumText: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.'
        }

        let locator = {
            inputFile: 'input[type="file"]',
        }
        await logInProfesional.formLogIn(page);
        await page.locator('.table-content-container--items').nth(0).click();
        await page.getByText('Rechazar paso').click();
        await page.locator('.p-inputtextarea').fill(keyword.loremIpsumText)
        await page.getByText('Rechazar paso').nth(1).click();
        await page.getByText('Información del representante legal').click()
        await page.locator('input[type="file"]').nth(13).setInputFiles(keyword.keywordRoute);
        await page.locator('input[type="file"]').nth(15).setInputFiles(keyword.keywordRoute);
        await page.locator('input[type="file"]').nth(16).setInputFiles(keyword.keywordRoute);
        await page.locator('input[type="file"]').nth(17).setInputFiles(keyword.keywordRoute);
        await page.locator('input[type="file"]').nth(18).setInputFiles(keyword.keywordRoute);
        await page.locator('input[type="file"]').nth(19).setInputFiles(keyword.keywordRoute);
        await aprovarRachazar.cargarORechazar(page);
        await page.locator('.p-inputtextarea').fill(keyword.loremIpsumText)
        await page.getByText('Rechazar paso').nth(1).click();
        await page.getByText('Documentos de conformación').click()
        await page.getByText('Rechazar paso').click();
        await page.locator('.p-inputtextarea').fill(keyword.loremIpsumText)
        await page.getByText('Rechazar paso').nth(1).click();
        await page.getByText('Datos de acceso al sistema').click()
        await page.getByText('Rechazar paso').click();
        await page.locator('.p-inputtextarea').fill(keyword.loremIpsumText)
        await page.getByText('Rechazar paso').nth(1).click();
        
        await page.waitForTimeout(3000)
        //Aprobar todos los pasos
        await page.getByText('Información básica del EAT').click()
        await page.getByText('Aprobar paso').click()
        await page.getByText('Aprobar paso').nth(0).click()

        await page.getByText('Información del representante legal').click()
        await page.getByText('Aprobar paso').click()
        await page.getByText('Aprobar paso').nth(0).click()

        await page.getByText('Documentos de conformación').click()
        await page.getByText('Aprobar paso').click()
        await page.getByText('Aprobar paso').nth(0).click()

        await page.getByText('Datos de acceso al sistema').click()
        await page.getByText('Aprobar paso').click()
        await page.getByText('Aprobar paso').nth(0).click()

        await page.getByText('Cerrar sesión').click()
    }

    
}

export const aproveEAT = new AproveEAT();