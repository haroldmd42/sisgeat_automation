import { numeroAleatorio8Digitos, listNameUser, listLastnameUser, selectBirthDay, numeroAleatorio4Digitos, selectTypeDirection, selectMunicipalityAmazonas, selectMunicipalityArauca, selectTypeDocuments, selectEscolarity, selectGender, selectChargeEAT, nombreSolicitudAleaotrio } from "./utils/utils";
import path from 'path';
class RequestEAT {

    async formRequestEAT(page) {
        let keyword = {
            keywordRoute: path.resolve(__dirname, './utils/files/pdf_prueba.pdf'),
            loremIpsumText: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original.'
        }

        let locator = {
            selectComboBox: 'span[role="combobox"]',
            inputFile: 'input[type="file"]',
            multiSelectBox: 'div.p-element.p-multiselect-label-container',
            autocompleteInput: 'div.p-autocomplete.p-component.p-inputwrapper input'
        }


        let selectAraucaMunicipality = selectMunicipalityArauca()
        await page.goto('https://sisgeatqa.opitech.com.co/sisgeat/auth/login');

        //Primer formulario Información Básica del EAT
        await page.getByText('REGISTRAR EAT').click();
        await page.locator('#nit').fill(numeroAleatorio8Digitos())
        await page.getByText('Siguiente').nth(1).click()
        await page.locator('#div').fill('1')
        await page.locator(locator.selectComboBox).nth(1).click()
        // Región de Planeación y Gestión - RPG, Asociación de Municipios, Provincia Administrativa de Planificación - PAP, Área Metropolitana, Región Administrativa de Planificación - RAP
        await page.getByText('Asociación de Municipios').click()
        await page.locator('#name').fill(nombreSolicitudAleaotrio())
        await page.locator(locator.selectComboBox).nth(2).click()
        await page.getByText(selectTypeDirection(), { exact: true }).click()
        await page.locator('#street').fill('25 sur')
        await page.locator('#first-number').fill('45')
        await page.locator('#second-number').fill('62')
        await page.locator('#floor').fill('Apartamento 400')
        await page.locator(locator.selectComboBox).nth(3).click()
        await page.waitForTimeout(400)
        await page.getByText('Amazonas').click()
        await page.locator(locator.selectComboBox).nth(4).click()
        await page.getByText(selectMunicipalityAmazonas()).click()
        await page.locator('.p-radiobutton-box').nth(0).click()
        await page.locator(locator.multiSelectBox).nth(0).click()
        await page.getByText('Arauca').click()
        await page.locator(locator.multiSelectBox).nth(1).click() 
        await page.getByText(selectAraucaMunicipality).click() 
        await page.locator(locator.multiSelectBox).nth(2).click()
        await page.waitForTimeout(300)
        //await page.getByText('Arauca').nth(1).click()
        await page.getByText(selectAraucaMunicipality).nth(1).click()
        await page.locator('#first-cell-phone').fill('3121231231')
        await page.locator('#second-cell-phone').fill('3121231231')
        await page.locator('#phone').fill('6122098765')
        await page.locator('#webpage').fill('https://sisgeatqa.opitech.com.co/sisgeat/register-eat')
        await page.locator('#eat-object').fill('Objeto del EAT')
        await page.locator('#time').fill('22')
        await page.locator(locator.autocompleteInput).fill('Pruebas de integración');
        await page.getByText('Siguiente').click()

        //Segundo formulario, Representante Legal
        await page.locator('#name').fill(listNameUser())
        await page.locator('#last-name').fill(listLastnameUser())
        await page.locator(locator.selectComboBox).nth(0).click()
        await page.waitForTimeout(100)
        await page.getByText(selectTypeDocuments(), { exact: true }).click()
        await page.locator(locator.selectComboBox).nth(1).click()
        await page.waitForTimeout(100)
        await page.getByText('Amazonas').click()
        await page.locator(locator.selectComboBox).nth(2).click()
        await page.waitForTimeout(400)
        await page.getByText('La victoria').click()
        await page.locator('#document').fill(numeroAleatorio8Digitos())
        await page.locator('#birth-date').fill(selectBirthDay())
        await page.locator(locator.selectComboBox).nth(3).click()
        await page.waitForTimeout(100)
        await page.getByText(selectGender()).click()
        await page.locator('#first-cell-phone').fill('3121231212')
        await page.locator('#second-cell-phone').fill('3121231212')
        await page.locator('#email').fill('yan.munozd+' + numeroAleatorio4Digitos() + '@opitech.com.co')
        await page.locator(locator.selectComboBox).nth(4).click()
        await page.waitForTimeout(100)
        await page.getByText(selectEscolarity(),{ exact: true }).click()
        await page.locator(locator.autocompleteInput).fill('Administración de empresas con enfasis en economia solidaria')
        await page.getByText('Administración de empresas con enfasis en economia solidaria').click()
        await page.locator(locator.selectComboBox).nth(5).click()
        await page.waitForTimeout(100)
        await page.getByText(selectChargeEAT()).click()
        await page.locator(locator.inputFile).nth(0).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(2).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(5).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(6).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(8).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(10).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(12).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(14).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(16).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(18).setInputFiles(keyword.keywordRoute);
        await page.getByText('Siguiente').click()
       


        //Tercer formulario Documentos de conformación
        await page.locator(locator.inputFile).nth(0).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(2).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(4).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(5).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(7).setInputFiles(keyword.keywordRoute);
        //await page.locator(locator.inputFile).nth(8).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.autocompleteInput).fill('Fabricación de muebles')
        await page.waitForTimeout(100)
        await page.getByText('Fabricación de muebles').click()
        //await page.locator('#eat-concept-number').fill(numeroAleatorio8Digitos())
        //await page.locator('#eat-concept-date').fill(selectBirthDay())
        await page.locator('#eat-agreement-number').fill(numeroAleatorio8Digitos())
        await page.locator('#eat-agreement-date').fill(selectBirthDay())
        await page.locator('#eat-statutes-number').fill(numeroAleatorio8Digitos())
        await page.locator('#eat-statutes-date').fill(selectBirthDay())
        await page.waitForTimeout(1000)
        await page.getByText('Siguiente').click()

        //Cuarto formulario Envio de solicitud
        await page.locator('#email').fill('ususarioeat' + numeroAleatorio4Digitos() + '@yopmail.com')
        await page.locator('#undefined').fill(keyword.loremIpsumText)
        await page.locator('button:has(span.p-button-label:has-text("Enviar"))').click();

    }
}

export const requestEAT = new RequestEAT();

//Nuevo cambio