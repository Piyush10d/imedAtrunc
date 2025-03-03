import { Page } from "@playwright/test";
import Wrapper from "../base/utils/wrapper";

export default class Login extends Wrapper{

    constructor(public page:Page){
        super(page);
    }

    public async enterUserName(username:string){
        const email=await this.findLocator("//input[@name='email']");
        await email.waitFor({state:"visible"});
        await email.fill(username);
    }

    public async enterPassword(Password:string){
        const password=await this.findLocator("//input[@name='password']");
        await password.waitFor({state:"visible"});
        await password.fill(Password);
    }

    public method3(no3:number):number{
        let c=no3*2;
        return c;
    }
    



} 