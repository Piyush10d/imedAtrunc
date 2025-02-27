//Load playwright module
import {test, expect} from "@playwright/test";
//import faker and datetime 
import {faker} from "@faker-js/faker";
import {DateTime} from "luxon";
//const {DateTime}= require("luxon");

//create post API request
test.skip("Post request using Static Data from JSON file",async({request})=>{

    //create fake firstName ,lastName, checkinDate, checkOutDate
    const firstName= faker.person.firstName();
    const lastname= faker.person.lastName();
    const totalprice=faker.number.int(1000);

    const checkin=DateTime.now().toFormat('yyyy-MM-dd');
    const checkout=DateTime.now().plus({day:5}).toFormat('yyyy-MM-dd');

    const apiResponse=await request.post(`/booking`,{
        data:{
            "firstname": firstName,
            "lastname": lastname,
            "totalprice": totalprice,
            "depositpaid": true,
            "bookingdates": {
                "checkin": checkin,
                "checkout": checkout
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
    expect(apiResponseBody.booking).toHaveProperty("firstname", firstName);
    expect(apiResponseBody.booking).toHaveProperty("lastname", lastname);
    //validate nested JSON response object
    expect(apiResponseBody.booking.bookingdates).toHaveProperty("checkin", checkin);
    expect(apiResponseBody.booking.bookingdates).toHaveProperty("checkout", checkout);

})


