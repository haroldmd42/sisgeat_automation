import { logIn } from "./login";
import { test, expect } from '@playwright/test';
import path from "path";

class CreateEatError{
    async formCrateEatError(page){
        let keyword = {
            buttonEat: 'Cargue de EAT',
            buttonNewEat: 'Cargar nuevo archivo .xlsx',
            buttonError: 'Visualizar errores',
            buttonDownloadErrors: 'descargar errores',
            buttonLogout: 'Cerrar sesión'
        }

        let locator = {
            loadEatButton:'input[type="file"]',
            routesEatFile: path.resolve(__dirname, './utils/files/03-Errores validacion de campos/cargue_eat.xlsx'),
            eatFileNameError: path.resolve(__dirname, './utils/files/01-Errores de nombre y tipo/eat_cargas.xlsx'),  
            eatFileOtherExtention:path.resolve(__dirname, './utils/files/01-Errores de nombre y tipo/cargue_eat.pdf'), 
            eatFileContentError:path.resolve(__dirname, './utils/files/02-Errores de contenido/cargue_eat.xlsx'),
            eatFileEntityError:path.resolve(__dirname, './utils/files/04-Error entidades territoriales/cargue_eat.xlsx'),
            iconCloseSideBar: '.cursor-pointer',
            iconDeleteFile: 'i.pi.pi-trash.icon--variant-filled',
        }
        await logIn.formLogIn(page)
        await page.getByText(keyword.buttonEat).click();
        await page.getByText(keyword.buttonEat).nth(0).click();
        await page.getByText(keyword.buttonNewEat).click()
        await page.waitForTimeout(2000);
        await page.setInputFiles(locator.loadEatButton, locator.eatFileNameError);
        await page.waitForTimeout(3000)
        await page.locator(locator.iconDeleteFile).click()
        await page.setInputFiles(locator.loadEatButton, locator.eatFileOtherExtention);
        await page.waitForTimeout(3000)
        await page.locator(locator.iconDeleteFile).click()
        await page.setInputFiles(locator.loadEatButton, locator.eatFileContentError);
        await page.waitForTimeout(3000)
        await page.locator(locator.iconDeleteFile).click()
        await page.setInputFiles(locator.loadEatButton, locator.eatFileEntityError);
        await page.getByText(keyword.buttonError).click()
        
        await page.locator(locator.iconCloseSideBar).nth(1).click()
        await page.locator(locator.iconDeleteFile).click()
        await page.setInputFiles(locator.loadEatButton, locator.routesEatFile);
        await page.getByText(keyword.buttonError).click()
        await page.waitForTimeout(3000)
        await page.getByText(keyword.buttonDownloadErrors).click()
        await page.locator(locator.iconCloseSideBar).nth(1).click()
        await page.waitForTimeout(1000);
        await page.getByText(keyword.buttonLogout).click();
        
    }
}

export const createEatError = new CreateEatError();