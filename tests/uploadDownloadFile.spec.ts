import test from "@playwright/test"
import { promiseHooks } from "v8";

test.skip("Download file",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    //await page.fill("//textarea[@id='textbox']","Hello World");
    await page.type("//textarea[@id='textbox']","Hello World");
    await page.locator("//button[@id='create']").click();
    //await page.locator("//a[@id='link-to-download']").click();
    /*const [download]=await Promise.all([
        page.waitForEvent("download"),
        page.locator("//a[@id='link-to-download']").click()
    ])
    const filePath=await download.path();
    */
    // if we dont know destructuring concept then use below code, both will give same result
    const download=await Promise.all([
        page.waitForEvent("download"),
        page.locator("//a[@id='link-to-download']").click()
    ])
    //const filePath=await download[0].path();  this will give default path
    //now we want to store file at our dedicated path
    const fileName=await download[0].suggestedFilename();
    await download[0].saveAs('C://iMed_Automation_Scripts//PlayWright//' + fileName);
    //await download[0].saveAs(fileName);//This will save at project level path
})

test("Upload file",async({page})=>{
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    /*
    await page.setInputFiles("//input[@type='file']",
        ["C://Users//dhawapiy//Desktop//Piyush_Automation//Playwright//one.png",
            "C://Users//dhawapiy//Desktop//Piyush_Automation//Playwright//two.png"]);
    */
    const [upload]=await Promise.all([
        page.waitForEvent("filechooser"),
        page.locator("//input[@type='file']").click()
    ])
    
    const isMultipleFileUploadPossible=await upload.isMultiple();
    if(isMultipleFileUploadPossible){
        await upload.setFiles(["C://Users//dhawapiy//Desktop//Piyush_Automation//Playwright//one.png",
            "C://Users//dhawapiy//Desktop//Piyush_Automation//Playwright//two.png"])
    }

    await page.waitForTimeout(3000);
})