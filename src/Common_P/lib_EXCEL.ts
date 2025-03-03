import { Page } from "@playwright/test";
import {Workbook} from "exceljs";

export default class lib_EXCEL{
    execelFilePath:string;
    constructor(page:Page,filePath:any){
        this.execelFilePath=filePath;
    }

    async retriveExcelValueBy_Row(shetName:string, row:Number){
        const workbook= new Workbook();
        const content = await workbook.xlsx.readFile(this.execelFilePath);
        const content_buf = await workbook.xlsx.load(fs.readFileSync(this.execelFilePath));
        const sheet = content_buf.getWorksheet(shetName);
        var data= sheet.getRow(0).getCell(0).toString();

        console.log(data)

    }

}