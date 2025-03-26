import {Invoice} from "./classes/Invoice.js"


//interfaces
interface IsPerson {
    name:string;
    age:number;
    speak(a:string): void;
    spend(a:number): number;
}


const me: IsPerson = {
    name:"Shawn",
    age:30,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount:number):number {
        console.log(`I spent ${amount}`)
        return amount;
    },
}; 

const greatPerson = (person:IsPerson) => {
    console.log("hello",person.name)
}

greatPerson(me);

console.log(me)


const InvOne = new Invoice("marion","work on the mario website", 360);
const InvTwo = new Invoice("luigi","work on the luigi website", 340);


let invoices: Invoice[] = [];
invoices.push(InvOne);
invoices.push(InvTwo);



invoices.forEach(inv => {
    console.log(inv.client , inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit",(e: Event) =>{
    e.preventDefault();
    console.log(
        type.value, 
        tofrom.value,
        details.value,
        amount.valueAsNumber
    )
})