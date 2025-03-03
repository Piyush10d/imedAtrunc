import { Page } from "@playwright/test";
import Wrapper from "../base/utils/wrapper"

export default class Workspace extends Wrapper{
    

    constructor (public page:Page){
        super(page);
    }

    public async clickHomePageButton(windowNo?:{
        tabNo?:number
    }){
        this.findLocator("//button[@id='home']")
        //await (await this.findLocator("//a[.='Edit']")).click();
    }
    public method1(no1:number):number{
        let a= no1+1;
        return a;
    }
    public method2(no2:number):number{
        let b=no2-2;
        return b; 
    } 

}