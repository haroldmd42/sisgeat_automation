import { logIn } from "./login";
import { test, expect } from '@playwright/test';
import { listLastnameUser, listNameUser, numeroAleatorio8Digitos, numeroAleatorioEntre0y20, selectBirthDay, selectGender, selectMunicipalityAmazonas, selectTypeDocuments } from "./utils/utils";
import path from "path";

class AdminEAT {
    async formAdminEAT(page) {
        let keyword = {
            buttonEat: 'Cargue de EAT',
            buttonNewEat: 'Cargar nuevo archivo .xlsx',
            buttonError: 'Visualizar errores',
            buttonDownloadErrors: 'descargar errores',
            buttonLogout: 'Cerrar sesión',
            keywordRoute: path.resolve(__dirname, './utils/files/pdf_prueba.pdf'),
        }

        let locator = {
            routesEatFile: 'c:/Users/User/Desktop/Entrega cliente/03-Errores validacion de campos/cargue_eat.xlsx',
            routesEATPDF: 'c:/Users/User/Desktop/Entrega cliente/pdf_prueba.pdf',
            iconCloseSideBar: '.cursor-pointer',
            iconDeleteFile: 'i.pi.pi-trash.icon--variant-filled',
            selectComboBox: 'span[role="combobox"]',
            inputFile: 'input[type="file"]',
            multiSelectBox: 'div.p-element.p-multiselect-label-container',
            autocompleteInput: 'div.p-autocomplete.p-component.p-inputwrapper input'
            
        }
        let munipiosAmazonas = selectMunicipalityAmazonas()

        await logIn.formLogIn(page)
        await page.getByText(keyword.buttonEat).click();
        await page.getByText('Pendiente de soportes EAT').first().click()
        await page.getByText('Detalles del registro').nth(0).click()
        await page.getByText('Cargar').nth(1).click()

        //Formulario Informacion básica del EAT
        await page.getByText('Información básica del EAT').click()
        await page.getByText('Cargar').nth(1).click()

        //Formulario información del representante legal
        await page.getByText('Información del representante legal').click()
        await page.locator('#name').fill(listNameUser())
        await page.locator('#last-name').fill(listLastnameUser())
        await page.locator('#document').fill(numeroAleatorio8Digitos())
        await page.locator('#birth-date').fill(selectBirthDay())
        await page.locator('#first-cell-phone').fill('3121231231')
        await page.locator('#second-cell-phone').fill('3121231231')
        await page.locator('#email').fill('preubacypress@yopmail.com')
        await page.locator(locator.inputFile).nth(0).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(2).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(4).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(6).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(8).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(10).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(12).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(14).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(16).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(18).setInputFiles(keyword.keywordRoute);
        
        
        
        await page.waitForTimeout(1000)
        await page.getByText('Cargar').nth(1).click()
        await page.waitForTimeout(1000)

        //Formulario Documentos de conformación
        await page.getByText('Documentos de conformación').click()
        await page.locator(locator.inputFile).nth(0).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(2).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(5).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.inputFile).nth(6).setInputFiles(keyword.keywordRoute);
        await page.locator(locator.autocompleteInput).fill('Fabricación de vehículos militares de combate')
        await page.getByText('Fabricación de vehículos militares de combate').click()
        await page.locator('#eat-agreement-number').fill('12345')
        await page.locator('#eat-agreement-date').fill(selectBirthDay())
        await page.locator('#eat-statutes-number').fill('12345')
        await page.locator('#eat-statutes-date').fill(selectBirthDay())
        await page.waitForTimeout(1000)
        await page.getByText('Cargar').nth(1).click()
        await page.waitForTimeout(1000)

        await page.getByText('Acuerdos y ordenanzas').click()
        await page.locator(locator.inputFile).nth(0).setInputFiles(keyword.keywordRoute);
        await page.locator('#eat-agreement-number').fill('1212312')
        await page.locator('#eat-agreement-date').fill(selectBirthDay())
        await page.waitForTimeout(1000)
        await page.getByText('Cargar').nth(1).click()
        await page.waitForTimeout(1000)

        await page.getByText('Resolución del EAT').click()
        await page.locator(locator.inputFile).nth(0).setInputFiles(keyword.keywordRoute);
        await page.waitForTimeout(1000)
        await page.getByText('Cargar').nth(1).click()
        await page.waitForTimeout(3000)
        await page.getByText('Cerrar sesión').click()
         
    }
}

export const adminEAT = new AdminEAT();