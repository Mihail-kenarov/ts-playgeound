 import {Invoice} from "./classes/Invoice.js"
import { ListTemplate } from "./classes/ListTemplate.js";
import {Payment} from "./classes/Payments.js"
import {HasFormatter} from "./interfaces/HasFormatter.js"

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul); 


form.addEventListener("submit",(e: Event) =>{
    e.preventDefault();

    let doc:HasFormatter;

if(type.value === "invoice"){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
}else{
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
}

list.render(doc,type.value, "end")
})


//ENUMS
enum ResourceType{
    BOOK,
    AUTHOR,
    LIST,
    FILM,
    PERSON,
    DIRECTOR
}



//GENERICS with INTERFACES
interface Resource <T> {
    uid: number;
    resourseType:ResourceType;
    data:T;
}

const docThree:Resource<object> = {
    uid:2,
    resourseType:ResourceType.AUTHOR,
    data: {NAME:"SHAWN"},
}

const docFour: Resource<string[]> = {
    uid:4,
    resourseType:ResourceType.LIST,
    data: ["bread","cheese","toilet roll","milk"]
}

console.log(docThree,docFour);