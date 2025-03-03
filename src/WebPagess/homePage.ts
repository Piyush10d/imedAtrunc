import { Page } from "@playwright/test";

export default class HomePAge{
    constructor(public page:Page){

    }
    async logout(){
        await this.page.hover("//li[@class='nav-item dropdown dropdown-hoverable']/descendant::span[contains(text(),' My account')]");
        await this.page.locator("//a[@class='icon-left both dropdown-item']//span[contains(text(),' Logout')]").click();
    }
    
    
}