import { Locator, Page } from "@playwright/test";

export default class Wrapper{

    constructor(public page:Page){

    }

    public async findLocator(xpath:string,options?:{
        frame?:string,
        tabID?:number,
        timeout?:number
    }) :Promise<Locator> {
        if(options?.frame){
           return  await this.page.frameLocator(options.frame).locator(xpath);
        }
        if(options?.tabID){
            this.page=await this.page.context().pages()[options.tabID];
        }
        
            return await this.page.locator(xpath); 
    }

    public async getURL(): Promise<string> {
        return await this.page.url();
    }
}