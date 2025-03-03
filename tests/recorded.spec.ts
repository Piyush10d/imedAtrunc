import { test, expect } from '@playwright/test';
/*
test.skip('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]");
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('piyushdhawas10@gmail.com');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('Dummy@123');
  await page.getByPlaceholder('Password').press('Tab');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: ' Edit your account' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Piyu');
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('Piyushk');
  await page.getByRole('button', { name: 'Continue' }).click();
  //await page.getByRole('button', { name: ' My account' }).click();
  //await page.getByRole('button', { name: ' My account' }).click();
  await page.hover("//a[@data-toggle='dropdown']//span[contains(.,' My account')]");
  await page.click("//span[contains(.,' Logout')]");
  await page.getByRole('link', { name: 'Continue' }).click();
});

*/

test.describe("Sanity test",async()=>{

  test.beforeAll(async()=>{

  })

  test.skip("Test 1",async({page})=>{
      await page.goto("https://en-gb.facebook.com/login/web/");
      console.log("Facebook login page open");
      var a=15,b=12;
      var c=a+b;
      expect(c).toBe(27);
  })
  test.skip("Test 2",async({page})=>{
      await page.goto("https://workspace.google.com/intl/en-US/gmail/");
      console.log("Gmail login page open");
  })
  test.skip("Test 3",async({page})=>{
      await page.goto("https://www.instagram.com/accounts/emailsignup/");
      console.log("insta login page open");
  })
})

test.describe("System test",async()=>{

  const logindata=[
    {email:"Piyush", pass:"Pass123"},
    {email:"Ramesh", pass:"Pass123"},
    {email:"Dhawas", pass:"Pass123"}
  ]


  test.skip("Test 4",async({page})=>{
      await page.goto("https://www.postman.com/");
      console.log("postman login page open");
  })
  test.skip("Test 5",async({page})=>{
      await page.goto("https://www.usebruno.com/");
      console.log("Bruno login page open");
  })
  
  
  logindata.forEach(data=>{
    test(`Test 6 ${data.email} `,async({page})=>{
      await page.goto("https://en-gb.facebook.com/login/web/");
      console.log("Bruno login page open");
      await page.locator("//input[@id='email']").fill(data.email);
      await page.locator("//input[@id='pass']").fill(data.pass);
      //await page.locator("//button[@id='loginbutton']").click();
    })
  })

})