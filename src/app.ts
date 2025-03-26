import {Invoice} from "./classes/Invoice.js"
import {Payment} from "./classes/Payments.js"
import {HasFormatter} from "./interfaces/HasFormatter.js"


// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi","webwork",250);
// docTwo = new Payment("mario","plumming work",200);

// let docs:HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// console.log(docs)

// const InvOne = new Invoice("marion","work on the mario website", 360);
// const InvTwo = new Invoice("luigi","work on the luigi website", 340);


// let invoices: Invoice[] = [];
// invoices.push(InvOne);
// invoices.push(InvTwo);



// invoices.forEach(inv => {
//     console.log(inv.client , inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit",(e: Event) =>{
    e.preventDefault();

    let doc:HasFormatter;

if(type.value === "invoice"){
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
}else{
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
}

    console.log(doc)
    
})