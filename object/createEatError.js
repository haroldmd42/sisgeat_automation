import { logIn } from "./login";

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
            routesEatFile: 'C:/Users/User/Desktop/SISGEAT/Eats/cargue_eat.xlsx',
            iconCloseSideBar: '.cursor-pointer',
        }
        await logIn.formLogIn(page)
        await page.getByText(keyword.buttonEat).click();
        await page.getByText(keyword.buttonEat).nth(0).click();
        await page.getByText(keyword.buttonNewEat).click()
        await page.waitForTimeout(2000);
        await page.setInputFiles(locator.loadEatButton, locator.routesEatFile);
        await page.getByText(keyword.buttonError).click()
        await page.waitForTimeout(10000);
        await page.getByText(keyword.buttonDownloadErrors).click()
        await page.locator(locator.iconCloseSideBar).nth(1).click()
        await page.waitForTimeout(1000);
        await page.getByText(keyword.buttonLogout).click();
        
    }
}

export const createEatError = new CreateEatError();