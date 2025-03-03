import {test} from "@playwright/test";
import { Console } from "console";

test.skip("Single select Dropdown",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    //await page.selectOption("//select[@id='select-demo']", "Tuesday"); // working fine
    //await page.selectOption("//select[@id='select-demo']", null); // working fine: nothing will be selected ,completely empty
    await page.selectOption("//select[@id='select-demo']", {
        //value:"Friday"
        //label:"Monday"
        index:3   //Tuesday
    }); 
    
    await page.waitForTimeout(2000);
})

test.skip("Multi select Dropdown",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
    await page.selectOption("//select[@id='multi-select']",[{value:"New Jersey"},{index:0},{label:"Texas"}]);
    // put all required feilds in array
    await page.waitForTimeout(3000);
})



test("BootStrap single select Dropdown",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");
    await page.click("#country+span"); //working fine 
    //await page.click("//li[text()='Bangladesh']") //working fine 
    //another approch 
    const cCount=await page.locator("//ul[@role='tree']").locator("//li[@class='select2-results__option']").count();
    console.log(cCount);
    const text=await page.locator("//ul[@role='tree']").locator("//li[@class='select2-results__option']").allInnerTexts();
    for(var i=0; i<cCount;i++){
        console.log(text[i]);
    }
    await page.click("#country+span");
    await selectCountry("India");
    await selectCountry("Netherlands");

    async function selectCountry(countryName) {
        await page.click("#country+span");
        await page.waitForTimeout(3000);
        await page.locator("//ul[@role='tree']").locator("//li[@class='select2-results__option']",{
            hasText:countryName
        }).click();
    }
})