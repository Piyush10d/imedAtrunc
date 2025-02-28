//Load playwright module
//Piyush Branch2 
import {test, expect} from "@playwright/test";
const tokenData=require("../test_Data/tokenData.json")
const postRequestData=require("../test_Data/postRequest.json");
const patchAPIData=require("../test_Data/patchAPIData.json");
//create post API request
test("Patch request using request body",async({request})=>{
    // first get token
    const takenReaponse=await request.post(`/auth`,{
        data:tokenData
    });

    const responseBody=await takenReaponse.json();
    console.log(responseBody);
    const tokenValue=responseBody.token
    console.log(tokenValue);

    //Do Post and create one booking
    console.log("======create resource======");
    const postResponse=await request.post('/booking',{
        data: postRequestData
    })
    const postRequestBody= await postResponse.json();
    const bookingID= postRequestBody.bookingid;
    console.log(postRequestBody);
    console.log(bookingID);

    //Do put
    console.log("=======Update Resource=====");
    const patchResponse=await request.patch(`booking/${bookingID}`,{
        headers:{
            "Content-Type":"application/json",
            "Cookie":`token=${tokenValue}`
        },
        data:patchAPIData
    })
    const patchResponseBody=await patchResponse.json();
    console.log(patchResponseBody);
    expect(patchResponse.ok()).toBeTruthy();
    expect(patchResponse.status()).toBe(200);
    expect(patchResponseBody).toHaveProperty("lastname","Patch update");
    expect(patchResponseBody).toHaveProperty("additionalneeds","I love snacks");
    
})



