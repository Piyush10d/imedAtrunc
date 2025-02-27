//Load playwright module
import {test, expect} from "@playwright/test";
const tokenData=require("../test_Data/tokenData.json")
const postRequestData=require("../test_Data/postRequest.json");
const putAPIData=require("../test_Data/putAPI_Data.json");

//create post API request
test("Put request using Static request body",async({request})=>{
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
    const putResponse=await request.put(`booking/${bookingID}`,{
        headers:{
            "Content-Type":"application/json",
            "Cookie":`token=${tokenValue}`
        },
        data:putAPIData
    })
    const putResponseBody=await putResponse.json();
    console.log(putResponseBody);
})



