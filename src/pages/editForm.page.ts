import { Page } from "@playwright/test";
import Wrapper from "../base/utils/wrapper";

export default class EditForm extends Wrapper{
   
    constructor(public page:Page){
        super(page)
   }

   public async clickEditButton(){
    const editBtn=await this.findLocator("//a[text()='Edit']");
    await editBtn.waitFor({state:"visible"})
    await editBtn.click();
   }
}