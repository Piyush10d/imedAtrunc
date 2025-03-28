import {test,expect} from "@playwright/test"
import {data} from "../testConfig"
import {LoginPage} from "../src/Pages_P/IMEDA/loginPage";


test.skip("Login test",async({page})=>{
    const loginPage= new LoginPage(page);
    await page.goto(data.URL);
    loginPage.doLogin(data.sName,data.sPassword);
    await page.waitForTimeout(8000);
    const dashboard= await page.locator("//span[text()='Dashboard']");
    //expect(dashboard).toHaveText("Dashboard")
})