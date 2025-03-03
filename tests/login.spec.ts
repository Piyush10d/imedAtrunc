import {test, Browser, chromium,Page } from "@playwright/test"

test.skip('Login test',async()=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page=await context.newPage();

    //launch website
    await page.goto("https://ecommerce-playground.lambdatest.io/");
    await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]");
    await page.click("//span[contains(.,' Login')]");

});