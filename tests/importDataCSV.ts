import {test} from "@playwright/test";
import fs from "fs";
import path from "path";
import {parse} from "csv-parse/sync"

const records=parse(
    fs.readFileSync(path.join(__dirname,"../src/base/utils/DataProvider/CSVFile.csv")),
    {
        columns:true,
        skip_empty_lines:true
    }
);


for (const record of records ) {
    test(`Test data from json data:${record.TestID}`,async({page})=>{
        await page.goto("https://www.google.co.in/");
        await page.locator("//textarea[@id='APjFqb']").fill(record.Value);
        await page.locator("//div[@jsname='uFMOof']").click();
    }) 
}