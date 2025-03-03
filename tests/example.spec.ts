import { test, expect } from '@playwright/test';
import {Workbook} from "exceljs";
import * as fs from 'fs';
import { excelReadfromexcel, writeExcelFile } from "./excelRead";

/*
test.skip('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.skip('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

*/
test("testtttt",async()=>{
  factorial(5);
  function factorial(a:Number){
   var abc=15;
   var b=20;
   var c=1+b;
   console.log(c);

    console.log("5 ka factorial 120");
  }
})

/*
test.skip("Read excel",async({page})=>{
    await page.goto("https://i1imedengb.imedone.ap.dtcs.local/im1ws_imedengb/#/login");
    const data=excelReadfromexcel("C://iMed_Automation_Scripts//PlayWright//MyProject_playwright//src//Tests_P//Input//IMEDA//MyTest.xlsx");
    console.log('username is :',  data[0].usernameIS);
    console.log('password is :', data[0].passwordIS);

    const updatedData = data.map((row, index) => ({
      ...row,
      result: index % 2 === 0 ? 'Success' : 'Failure' // Example data modification
  }));

  writeExcelFile('output.xlsx', updatedData);
  console.log("Done");


})


test.skip("Read data from excel",async()=>{
  let execelObject = new Map<string, string>();
  const workbook = new Workbook();
  workbook.calcProperties.fullCalcOnLoad = true
  var data_key = new Array();
  var data_value = new Array();
  var counter = 0;
  workbook.calcProperties.fullCalcOnLoad = true
  const content = await workbook.xlsx.readFile("C:\iMed_Automation_Scripts\PlayWright\MyProject_playwright\src\Tests_P\Input\PMS\LOGIN.xlsx")
  const content_buf = await workbook.xlsx.load(fs.readFileSync("C:\iMed_Automation_Scripts\PlayWright\MyProject_playwright\src\Tests_P\Input\PMS\LOGIN.xlsx"))
  workbook.calcProperties.fullCalcOnLoad = true
  const sheet = content_buf.getWorksheet("Login");

})

 */
