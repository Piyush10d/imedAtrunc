//Load playwright module
import {test, expect} from "@playwright/test";
//create post API request
test.skip("Post request using Static request body",async({request})=>{
    const apiResponse=await request.post(`/booking`,{
        data:{
            "firstname": "Playwright",
            "lastname": "Post API",
            "totalprice": 1000,
            "depositpaid": true,
            "bookingdates": {
                "checkin": "2025-01-01",
                "checkout": "2025-02-01"
            },
            "additionalneeds": "super bowls"
                }
    })
    const apiResponseBody=await apiResponse.json();
    console.log(apiResponseBody);
    //validate status code
    expect(apiResponse.ok()).toBeTruthy();
    expect(apiResponse.status()).toBe(200);
    //validate JSON response object
    expect(apiResponseBody.booking).toHaveProperty("firstname", "Playwright");
    expect(apiResponseBody.booking).toHaveProperty("lastname", "Post API");
    //validate nested JSON response object
    expect(apiResponseBody.booking.bookingdates).toHaveProperty("checkin", "2025-01-01");
    expect(apiResponseBody.booking.bookingdates).toHaveProperty("checkout", "2025-02-01");

})


