import { Page } from "@playwright/test";
import { promiseHooks } from "v8";

export default class LoginPage{
    constructor(public page:Page){
    }

    async login(email:string, password:string){
        this.enterEmail(email);
        this.enterPassword(password);
        this.clickLogin();
    }

    async enterEmail(email:string){
        await this.page.locator("//input[@name='email']").fill(email);
    }
    async enterPassword(password:string){
        await this.page.locator("//input[@name='password']").fill(password);
    }
    async clickLogin(){
        await Promise.all([
            //this.page.waitForNavigation({waitUntil:"networkidle"}),
            //this.page.waitForEvent("load"),
            this.page.locator("//input[@value='Login']").click()
        ])
    }





}