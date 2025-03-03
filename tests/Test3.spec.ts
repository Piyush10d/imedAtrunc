import test from "@playwright/test";
import {factorial} from "../src/Pages_P/IMEDA/Test1.ts"
test("Test Run",async()=>{
    console.log("Use function");
    factorial(5);
})

