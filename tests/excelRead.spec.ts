import test from "@playwright/test";
import { excelReadfromexcel } from "./excelRead";
import { Page } from "playwright";

test("Read excel",async({page})=>{
    await page.goto("https://i1imedengb.imedone.ap.dtcs.local/im1ws_imedengb/#/login");
    const data=excelReadfromexcel("C://iMed_Automation_Scripts//PlayWright//MyProject_playwright//src//Tests_P//Input//IMEDA//MyTest.xlsx");
    console.log('Data is :', data);

})


