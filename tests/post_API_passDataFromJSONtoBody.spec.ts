//Load playwright module
import {test, expect} from "@playwright/test";
//import JSON data
const requestBodyJSONdata=require('../test_Data/postRequest.json');
//create post API request
test.skip("Post request using Static Data from JSON file",async({request})=>{
    const apiResponse=await request.post(`/booking`,{
        data:requestBodyJSONdata
    })
    const apiResponseBody=await apiResponse.json();
    console.log(apiResponseBody);
    //validate status code
    expect(apiResponse.ok()).toBeTruthy();
    expect(apiResponse.status()).toBe(200);
    //validate JSON response object
    expect(apiResponseBody.booking).toHaveProperty("firstname", "Playwright");
    expect(apiResponseBody.booking).toHaveProperty("lastname", "Rest Post API");
    //validate nested JSON response object
    expect(apiResponseBody.booking.bookingdates).toHaveProperty("checkin", "2025-01-01");
    expect(apiResponseBody.booking.bookingdates).toHaveProperty("checkout", "2025-02-01");

})


