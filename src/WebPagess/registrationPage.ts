
import { Page } from "@playwright/test"

export default class RegisterPage{
    constructor(public page:Page){
    }
    

    async enterFirstName(firstName:string){
       await this.page.locator("//input[@name='firstname']").fill(firstName);
    }
    async enterLastName(lastName:string){
        await this.page.locator("//input[@name='lastname']").fill(lastName);
     }
     async enterEmail(email:string){
        await this.page.locator("//input[@name='email']").fill(email);
     }
     async enterTelephone(telephone:string){
        await this.page.locator("//input[@name='telephone']").fill(telephone);
     }
     async enterPassword(password:string){
        await this.page.locator("//input[@name='password']").fill(password);
     }
     async confirmPassword(password:string){
        await this.page.locator("//input[@name='confirm']").fill(password);
     }
     async isSubscribed_no(){
      await this.page.locator("//label[@for='input-newsletter-no']").click();
      //return await this.page.locator("//input[@id='input-newsletter-no']");
     }
     async agreeTermsAndCondition(){
      await this.page.locator("//label[@for='input-agree']").click();
     }
     async clickContinue(){
      await Promise.all([
         this.page.waitForNavigation({waitUntil:"networkidle"}),
         this.page.locator("//input[@value='Continue']").click()
      ])
     }
}