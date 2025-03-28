import {expect, test} from "@playwright/test"

test("interaction test",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const msgInput=await page.locator("//input[@id='sum1']");
    msgInput.scrollIntoViewIfNeeded();
    const attributeValue=await msgInput.getAttribute("placeholder");
    //first Assertion locator.getAttribute("attributeName")
    expect(msgInput).toHaveAttribute("placeholder","Please enter first value");
    console.log(attributeValue);
    //second assertion :locator.inputValue()
    console.log("value before filling data : "+ await  msgInput.inputValue());
    await msgInput.fill("Piyush D");
    console.log("value after filling data : "+ await  msgInput.inputValue());
    
});

test.skip("Text assertion", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const sum1= await page.locator("//input[@id='sum1']");
    const sum2= await page.locator("//input[@id='sum2']");
    const GetSum= await page.locator("//button[text()='Get Sum']");
    const result=await page.locator("//div[@id='user-message']/p[@id='addmessage']");

    await sum1.fill("12");
    await sum2.fill("14");
    await GetSum.click();

    await page.waitForTimeout(2000);
    expect(result).toHaveText("26");
});

test.skip("Checkbox assertion",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");
    const loc1= await page.locator("//input[@id='isAgeSelected']");
    expect(loc1).not.toBeChecked();
    await loc1.check();
    expect(loc1).toBeChecked();
    await page.waitForTimeout(3000);
});

