
import { Page } from "@playwright/test";
import { testconfig } from "../../testConfig";
export default class lib_COMMON {
    page:Page;

    constructor(page:Page){
        this.page=page;
    }
    
    async navigateToURL(URL:string){
        this.page.goto(URL);
    }
    async doLogin(Data:Map<String,String>){
        await this.page.fill("//input[@id='userName']",Data.Username);
        await this.page.fill("//input[@id='password']",Data.Password);
        await this.page.click("//button[@id='btnLogin']");

    }
}