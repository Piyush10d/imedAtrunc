import {chromium, test} from "@playwright/test"
import lib_PMS from "../../../Pages_P/PMS/lib_PMS";
import { testconfig } from "../../../../testConfig";

test.describe.configure({mode:"serial"});
let libPMS:lib_PMS;

test.beforeAll("Before all",async()=>{
    const browser= await chromium.launch();
    const context= await browser.newContext();
    const page=    await context.newPage();
    //const inputFilePath="C:\iMed_Automation_Scripts\PlayWright\MyProject_playwright\src\Tests_P\Input\PMS";
    libPMS= new lib_PMS(page);
})


test("Sanity test",async()=>{
    libPMS.libCommon.navigateToURL(testconfig.URL);
    libPMS.libCommon.doLogin();
})