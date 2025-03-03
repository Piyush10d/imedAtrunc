import { expect } from "@playwright/test";
import test from "@playwright/test";

test.skip("iframe handling",async({page})=>{
    await page.goto("https://letcode.in/frame");
    //Find how many frames are there 
    const allFrames= page.frames();
    console.log("Total frames on page are: "+ allFrames.length)
    //iframes count may change due to adverticemnet,  adv is also an iframe
    //Now Find the frame and interact with elements inside it.
    const firstFrame=await page.frameLocator("//iframe[@id='firstFr']");
    await firstFrame.locator("//input[@placeholder='Enter name']").fill("Piyush");
    await page.waitForTimeout(3000);
    await firstFrame.locator("//input[@placeholder='Enter email']").fill("Dhawas");
    await page.waitForTimeout(3000);
    expect(await firstFrame.locator("//p[@class='title has-text-info']").textContent()).toContain("You have entered ");

    //await page.locator("//input[@placeholder='Enter name']").fill("Piyush");
    //await page.waitForTimeout(3000);
    //await page.locator("//input[@placeholder='Enter email']").fill("Dhawas");
    //await page.waitForTimeout(3000);

})

test.skip("iframe test",async({page})=>{
    await page.goto("https://letcode.in/frame");
    const myFrame= page.frame("//iframe[@id='firstFr']");

    await myFrame?.fill("//input[@placeholder='Enter name']","Dhawas");
    await myFrame?.fill("//input[@placeholder='Enter email']","Piyush");

    await page.waitForTimeout(3000);

})

test("Nested iframe handling",async({page})=>{
    await page.goto("https://letcode.in/frame");
    //Now Find the frame which is under another frame and interact with elements inside it.
    const firstFrame=await page.frameLocator("//iframe[@id='firstFr']");
    const anotherFrame=await firstFrame.frameLocator("//iframe[@src='innerFrame']");
    await anotherFrame.locator("//input[@name='email']").fill("my Email");
    await page.waitForTimeout(3000);
    
})