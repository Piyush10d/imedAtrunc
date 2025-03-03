import test from "@playwright/test"
import moment from "moment";
import expect from "@playwright/test"

test.skip("Calender handling",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    let date="1996-10-08"
    const calender=await page.locator("//input[@id='birthday']").waitFor({state : "visible"});
    //await page.locator("//input[@id='birthday']").fill(date);
    await page.fill("//input[@id='birthday']",date);
    await page.waitForTimeout(3000);
})

test.skip("Calender handling by moment",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    //const startDate=await page.locator("//input[@placeholder='Start date']").waitFor({state:"visible"});
    //const prev= await page.locator("//div[@class='datepicker-days']//th[@class='prev']").waitFor({state:"visible"});
    //const nextB= await page.locator("//div[@class='datepicker-days']//th[@class='next']").waitFor({state:"visible"});

    //await startDate.click();
    await page.locator("//input[@placeholder='Start date']").click();
    //prev.click();
    await page.locator("//div[@class='datepicker-days']//th[@class='prev']").click();
    await page.click("//div[@class='datepicker-days']//td[@class='day'][text()='20']");
    await page.waitForTimeout(3000);
})

test("Calender handling: generic code",async({page})=>{
    //const context=await page.setDefaultNavigationTimeout(5000)
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");  
    await selectDate("10","May 2024","MMMM YYYY");
    await page.reload();
    await selectDate("15","January 2025","MMMM YYYY");
    await page.reload();
    await selectDate("16","December 2024","MMMM YYYY");

    async function selectDate(date:string,birthMMYY:string,formate:string) {
        const startDate=await page.locator("//input[@placeholder='Start date']");
        await startDate.click();
        const prev= await page.locator("//div[@class='datepicker-days']//th[@class='prev']");  //.waitFor({state:"visible"});
        const next= await page.locator("//div[@class='datepicker-days']//th[@class='next']");  //.waitFor({state:"visible"});
        //let birthMMYY:string ="May 2023"  // current month and year is Dec 2024
        let thisMonth= moment(birthMMYY,formate).isBefore(); //if date formate is like mar 2024 then use MMM,
        //here it is full length so used MMMM
        const mmYY=await page.locator("//div[@class='datepicker-days']//table[@class='table-condensed']//th[@class='datepicker-switch']");
        while(await mmYY.textContent() != birthMMYY){
            if(thisMonth){
                await prev.click();
            }
            else{
                await next.click();
            } 
        }
        await page.click(`//div[@class='datepicker-days']//td[@class='day'][text()='${date}']`);
        await startDate.press("Tab");
        await page.waitForTimeout(3000);
        
    }
})