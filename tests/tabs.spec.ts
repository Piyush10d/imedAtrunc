import test from "@playwright/test"
import { Console } from "console";

test.skip("Interaction with multple tabs",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    console.log(page.url());
    //const link1= await page.locator("//a[text()='  Follow On Twitter ']");
    const [newWindow] =await Promise.all([
        page.waitForEvent("popup"),
        page.click("//a[text()='  Follow On Twitter ']")
    ])

    console.log(newWindow.url());
    //now to fill anything on new window , just use that window variable and perform action
    //newWindow.fill("Locator","text")
})


test("multple tabs",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("//a[@id='followboth']")
    ])
    await multiPage.waitForLoadState();

    const allPages=multiPage.context().pages();
    console.log("No of pages are: "+ allPages.length);
    allPages.forEach(tab=>{
        console.log(tab.url());
    })
  // Pass test data on different tabs
   // await noOfPages[1].fill("","");
   // To make code more generc , below code added, objective is to : interact with facebook tab

   var fbTabIndex;
   for(var i=0;i<allPages.length;i++){
        var tabUrl= allPages[i].url();
        if(tabUrl=="https://www.facebook.com/lambdatest/"){
            fbTabIndex=i;
            break;
        }
   }
   console.log("Facebok page index is "+ fbTabIndex);
   await allPages[fbTabIndex].locator("(//span[text()='Log in'])[3]").click();

   await page.waitForTimeout(3000)

})