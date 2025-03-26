import { Invoice } from "./classes/Invoice.js";
const me = {
    name: "Shawn",
    age: 30,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spent ${amount}`);
        return amount;
    },
};
const greatPerson = (person) => {
    console.log("hello", person.name);
};
greatPerson(me);
console.log(me);
const InvOne = new Invoice("marion", "work on the mario website", 360);
const InvTwo = new Invoice("luigi", "work on the luigi website", 340);
let invoices = [];
invoices.push(InvOne);
invoices.push(InvTwo);
invoices.forEach(inv => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
