import {Page} from "@playwright/test"
import lib_COMMON from "./lib_COMMON"
import lib_BUSINESS from "./lib_BUSINESS"
import lib_DB_COMMON from "./lib_DB_COMMON";
import lib_EXCEL from "./lib_EXCEL";
export default class lib_BASE{
    page:Page;
    libCommon:lib_COMMON;
    libBusiness:lib_BUSINESS;
    libDBCommon:lib_DB_COMMON;
    libExcel:lib_EXCEL;

    constructor(page:Page,filePath:any){
        this.page=page;
        this.libCommon=new lib_COMMON(page)
        this.libBusiness=new lib_BUSINESS(page);
        this.libDBCommon=new lib_DB_COMMON(page);
        this.libExcel=new lib_EXCEL(page,filePath);
    }


}