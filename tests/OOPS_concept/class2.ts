import { Class1 } from "./class1";

export class Class2 extends Class1{
    surname:String;
    weight:number;

    async printSurName(){
        console.log(this.surname);
    }
    async printWeight(){
        console.log(this.weight);
    }

}

