import {test} from "@playwright/test"
import {Workbook} from "exceljs"

test("Read data from excel",async()=>{
    const workbook= new Workbook();
    const excelData=workbook.xlsx.readFile("../../../input/PMS/LOGIN.xlsx");
    const sheet=(await excelData).getWorksheet("Login");
    var a=sheet?.getRow(0).getCell(0);
    console.log(a);
})