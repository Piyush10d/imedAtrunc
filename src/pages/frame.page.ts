import { Page } from "@playwright/test";
import Wrapper from "../base/utils/wrapper";

export default class Frame extends Wrapper{

    constructor (public page:Page){
        super(page);
    }

    public async enterUserName(username:string){
        const email=await this.findLocator("//input[@name='email']",{
            frame:"#firstFr"
        })
        await email.waitFor({state:"visible"});
        await email.fill(username);
    }

    public async enterPassword(Password:string){
        const password=await this.findLocator("//input[@name='password']",{
            frame:"#firstFr"
        });
        await password.waitFor({state:"visible"});
        await password.fill(Password);
    }

    



}