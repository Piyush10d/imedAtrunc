import {test} from "@playwright/test";

import {myJsonTestData} from "../src/base/utils/DataProvider/jsonFile.json"

for (const [key,value] of Object.entries(myJsonTestData) ) {
    test(`Test data from json data:${value}`,async({page})=>{
        await page.goto("https://www.google.co.in/");
        await page.locator("//textarea[@id='APjFqb']").fill(value);
        await page.locator("//div[@jsname='uFMOof']").click();
    }) 
}

