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
    let values: [string,string,number]
    values = [tofrom.value, details.value, amount.valueAsNumber];


if(type.value === "invoice"){
    doc = new Invoice(...values)
}else{
    doc = new Payment(...values)
}

list.render(doc,type.value, "end")
})


//Tuples 

let arr = ["ryu",25,true];
arr[0] = false;
arr[1] = "yoshi";
arr = [25,false,"ryu"];


let tup: [string,number,boolean] = ["ryu",25,true];
tup[0] = "ken";
tup[1] = 23;

let student: [string, number];
student = ["George",12483];

