import {expect, test} from "@playwright/test"
import RegisterPage from "../../src/WebPagess/registrationPage";
import LoginPage from "../../src/WebPagess/loginPage"
import HomePAge from "../../src/WebPagess/homePage"

const email="piyushdhawas1@gmail.com";
const password="Myaccount@123";
test("Registration test01",async({page,baseURL})=>{
    const register=new RegisterPage(page);
    const homePage= new HomePAge(page);
    await page.goto(`${baseURL}route=account/register`);
    await register.enterFirstName("Piyush");
    await register.enterLastName("Dhawas");
    await register.enterEmail(email);
    await register.enterTelephone("123456789");
    await register.enterPassword(password);
    await register.confirmPassword(password);
    await register.isSubscribed_no();
    await register.agreeTermsAndCondition();
    await register.clickContinue();
    const webElement=await page.locator("//*[contains(text(),' Your Account Has Been Created!')]").textContent();
    expect(webElement).toBe(" Your Account Has Been Created!");
    console.log(await page.title());
    //expect(await page.title()).toBe("My Account");
    await homePage.logout();
    expect(await page.locator("//h1[@class='page-title my-3']").textContent()).toBe(" Account Logout");
})

test.skip("Login test",async({page,baseURL})=>{
    const login=new LoginPage(page);
    const homePage= new HomePAge(page);
    //await page.goto(`${baseURL}}route=account/login`);
    await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login");
    await login.login(email,password);
    await homePage.logout();
    expect(await page.locator("//h1[@class='page-title my-3']").textContent()).toBe(" Account Logout");
})

