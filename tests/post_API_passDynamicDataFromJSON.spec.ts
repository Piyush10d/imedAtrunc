//Load playwright module
import {test, expect} from "@playwright/test";
//import 
import {stringFormat} from "../utils/common.ts"
//import
const dynamicJSONBody= require("../test_Data/postDynamicData.json");

//create post API request
test.describe.configure({mode:"serial"});
test("Post request using Dynamic Data from JSON file",async({request})=>{

    const newDynamicJsonData=stringFormat(JSON.stringify(dynamicJSONBody),"Piyush","Dhawas","Snacks")
    //newDynamicJsonData is new string, need to convert string into JSON, so JSON.parse() is used
    const apiResponse=await request.post(`/booking`,{
        data:JSON.parse(newDynamicJsonData)
    })
    const apiResponseBody=await apiResponse.json();
    console.log(apiResponseBody);
    //validate status code
    expect(apiResponse.ok()).toBeTruthy();
    expect(apiResponse.status()).toBe(200);
    //validate JSON response object
    expect(apiResponseBody.booking).toHaveProperty("firstname", "Piyush");
    expect(apiResponseBody.booking).toHaveProperty("lastname", "Dhawas");
    //validate nested JSON response object
    //expect(apiResponseBody.booking.bookingdates).toHaveProperty("checkin", checkin);
    //expect(apiResponseBody.booking.bookingdates).toHaveProperty("checkout", checkout);
})


