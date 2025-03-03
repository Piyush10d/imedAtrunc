import {test,expect} from "@playwright/test";
const authAPIBody=require("../../test_Data/PMS_Data/authAPIBody.json")
import {stringFormat} from "../../utils/common.ts"
const globalVaribles= require("../../test_Data/PMS_Data/globalVariable.json")
const patData= require("../../test_Data/PMS_Data/patCreationData.json")



test("Auth API Token generation",async({request})=>{
    const authAPI_Response=await request.post("https://rd-vm76.rd.dtcs.local/iM1AS_OA828GN/api//Authentication/authenticate",{
        data:authAPIBody,ignoreHTTPSErrors:true,
        headers:{
            accept:"application/json, text/plain, */*"
        }
    })
    const authAPIResponseBody=await authAPI_Response.json();
    console.log(authAPIResponseBody);
    const serverAccessToken= authAPIResponseBody.data.serverAccessToken;
    const clientAccessToken_fetch= authAPIResponseBody.data.clientAccessToken;
    console.log("=========API Token=======");
    console.log("Machine Name is: "+authAPIResponseBody.data.machineName);

    const newDynamicJsonData=stringFormat(JSON.stringify(globalVaribles),serverAccessToken,clientAccessToken_fetch)

    const globalVariablJSON=JSON.parse(newDynamicJsonData)

    console.log("ServerAccessToken is "+globalVariablJSON.serverAccessToken)
    
    const patCreationResponseback=await request.post("https://rd-vm76.rd.dtcs.local/iM1AS_OA828GN/api//patientAdmission/admitPatient",{
        data:patData,
        ignoreHTTPSErrors: true,
        headers:{
            accept:"application/json, text/plain, */*",
            content_type: "application/json",
            //clientAccessToken:globalVariablJSON.clientAccessToken,
            clientAccessToken:clientAccessToken_fetch
        }
    })
        const patCreationBody=await patCreationResponseback.json()
        console.log("=======Pat creation body========");
        console.log(patCreationBody);

})