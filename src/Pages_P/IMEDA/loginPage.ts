import { Locator, Page } from "playwright";

export class LoginPage{
    page:Page;
    username: Locator;
    password:Locator;
    loginButton:Locator;

   constructor(page:Page){
    this.page=page;
    this.username=  page.locator("//input[@id='login_field']");
    this.password= page.locator("//input[@id='password']");
    this.loginButton= page.locator("//input[@name='commit']");
   }

   async doLogin(sName:string,sPassword:string){
    await this.username.fill(sName);
    await this.page.waitForTimeout(5000);
    await this.password.fill(sPassword);
    await this.page.waitForTimeout(5000);
    await this.loginButton.click();
    await this.page.waitForTimeout(5000);
   }





}