import {test, expect} from "@playwright/test";
const auth_API_body=require("../test_Data/PMS_data/Auth_body.json");

test("Auth API", async({request})=>{
    const apiResponse=await request.post(`api//Authentication/authenticate`,{
        data:auth_API_body
    })

    const apiResponseBody=await apiResponse.json();
    console.log("API response: "+apiResponseBody)
    
})