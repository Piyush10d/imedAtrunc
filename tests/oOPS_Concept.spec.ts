import { Class2 } from "./OOPS_concept/class2";
import {test} from "@playwright/test"
import { Class4 } from "./OOPS_concept/class4";


test.skip("Inheritance",async()=>{
    const myOBJ=new Class2();

    myOBJ.name="Piyush";
    myOBJ.surname="Dhawas";
    myOBJ.age=24;
    myOBJ.weight=67;
    
    myOBJ.printAge();
    myOBJ.printWeight();
    myOBJ.printName();
    myOBJ.printSurName();
    
})

test("Constructor ",async()=>{
    const obj_4=new Class4();
    //output: Sum of number is: 34
})





