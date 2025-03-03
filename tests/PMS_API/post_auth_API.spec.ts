import {test, expect} from "@playwright/test";
const auth_API_body=require("../../test_Data/PMS_Data/Auth_body.json")

test("Auth API", async({request})=>{
    const apiResponse=await request.post(`api//Authentication/authenticate`,{
        data:auth_API_body,
        ignoreHTTPSErrors:true
    })

    const apiResponseBody= await apiResponse.json();
    console.log("API response: "+apiResponseBody)
    
})