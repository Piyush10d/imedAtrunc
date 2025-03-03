import test from "@playwright/test"

test.describe("Sanity test",async()=>{

    test("Test 1",async({page})=>{
        await page.goto("https://en-gb.facebook.com/login/web/");
        console.log("Facebook login page open");
    })
    test("Test 2",async({page})=>{
        await page.goto("https://workspace.google.com/intl/en-US/gmail/");
        console.log("Gmail login page open");
    })
    test("Test 3",async({page})=>{
        await page.goto("https://www.instagram.com/accounts/emailsignup/");
        console.log("insta login page open");
    })
});

test.describe("System test",async()=>{
    test("Test 4",async({page})=>{
        await page.goto("https://www.postman.com/");
        console.log("postman login page open");
    })
    test("Test 5",async({page})=>{
        await page.goto("https://www.usebruno.com/");
        console.log("Bruno login page open");
    })
});