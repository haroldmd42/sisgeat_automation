import { logIn } from "./login";
import { test, expect } from '@playwright/test';
import { listLastnameUser, listNameUser, numeroAleatorio8Digitos, numeroAleatorioEntre0y20, selectBirthDay, selectGender, selectMunicipalityAmazonas, selectTypeDocuments } from "./utils/utils";


class AdminEAT {
    async formAdminEAT(page) {
        let keyword = {
            buttonEat: 'Cargue de EAT',
            buttonNewEat: 'Cargar nuevo archivo .xlsx',
            buttonError: 'Visualizar errores',
            buttonDownloadErrors: 'descargar errores',
            buttonLogout: 'Cerrar sesión'
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
        await page.locator('div.eat-item').nth(1).click()
        await page.getByText('Detalles del registro').nth(0).click()
        await page.getByText('Cargar').click()

        //Formulario Informacion básica del EAT
        await page.getByText('Información básica del EAT').click()
        await page.locator('#nit').fill(numeroAleatorio8Digitos())
        await page.locator('#div').fill('1')
        await page.locator('#name').fill('Pruebas automatizadas')
        await page.locator('#address').fill('Calle de prueba cyres123 #4')
        await page.locator('#first-cell-phone').fill('3121231231')
        await page.locator('#second-cell-phone').fill('3121231231')
        await page.locator('#phone').fill('6022516569')
        await page.locator('#webpage').fill('https://sisgeatqa.opitech.com.co/sisgeat/nucleus/load-eat/eat-detail/d5e6b34c-9079-436b-a1d7-ddcb5ea039f4/0')
        await page.locator('#eat-object').fill('Objeto de un EAT modificado')
        await page.locator('#time').fill('333')
        await page.locator(locator.autocompleteInput).fill('Pruebas de integración');
        await page.getByText('Cargar').click()

        //Formulario información del representante legal
        await page.getByText('Información del representante legal').click()
        await page.locator('#name').fill(listNameUser())
        await page.locator('#last-name').fill(listLastnameUser())
        await page.locator('#document').fill(numeroAleatorio8Digitos())
        await page.locator('#birth-date').fill(selectBirthDay())
        await page.locator('#first-cell-phone').fill('3121231231')
        await page.locator('#second-cell-phone').fill('3121231231')
        await page.locator('#email').fill('preubacypress@yopmail.com')
        await page.locator(locator.inputFile).nth(0).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(1).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(3).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(4).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(5).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(6).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(7).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(8).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(11).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(12).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(14).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(15).setInputFiles(locator.routesEATPDF);
        
        await page.waitForTimeout(3000)
        await page.getByText('Cargar').click()
        await page.waitForTimeout(6000)

        //Formulario Documentos de conformación
        await page.getByText('Documentos de conformación').click()
        await page.locator(locator.inputFile).nth(0).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(2).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(5).setInputFiles(locator.routesEATPDF);
        await page.locator(locator.inputFile).nth(6).setInputFiles(locator.routesEATPDF);
        
        
       
    }
}

export const adminEAT = new AdminEAT();