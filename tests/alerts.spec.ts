import {expect, test} from "@playwright/test"

test("Handling alerts",async({page})=>{
   // await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
   // const simpleAlert= await page.locator("//p[text()='JavaScript Alerts']/button[text()='Click Me']");
   // const confirmationAlert= await page.locator("//p[text()='Confirm box:']/button[text()='Click Me']");
   // const promptAlert= await page.locator("//p[text()='Prompt box:']/button[text()='Click Me']");
   
 //To handle alert , add code before clicking on any alert showing button, this is reverse process but this is how alerts work
 /*    page.on("dialog", async(alert)=>{
        const msgAlert= await alert.message();
        console.log(msgAlert);
        await alert.accept();
    });
    await simpleAlert.click();
    await page.waitForTimeout(5000);   */

    //Confirmation alert
    /*
    const msg=await page.locator("//p[@id='confirm-demo']");
    page.on("dialog",async(alert)=>{
        const msgAlert2= await alert.message();
        console.log(msgAlert2);
        await alert.dismiss();
    });
    await confirmationAlert.click();
    expect(msg).toHaveText("You pressed Cancel!");  
    */
    /*
    //Prompt alert
    const text= page.locator("//p[@id='prompt-demo']")
    page.on("dialog",async(alert)=>{
        const Dvalue=await alert.defaultValue();
        console.log(Dvalue);
        await alert.accept("hello");
    })
    await page.waitForTimeout(5000);
    await promptAlert.click();
    await page.waitForTimeout(5000);
    expect(text).toHaveText("You have entered 'hello' !");
    */

    // Modal Alert
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.waitForTimeout(5000);
    //const launch= await page.locator("//div[text()='Single Modal']//following-sibling::*");
    await page.click("//div[text()='Single Modal']//following-sibling::*");
    await page.waitForTimeout(5000);
    await page.click("//div[@id='myModal']//button[contains(text(),'Save Changes')]");
    await page.waitForTimeout(5000);
    

});