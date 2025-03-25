"use strict";
//classes
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
const InvOne = new Invoice("marion", "work on the mario website", 360);
const InvTwo = new Invoice("luigi", "work on the luigi website", 340);
console.log(InvOne);
console.log(InvTwo);
let invoices = [];
invoices.push(InvOne);
invoices.push(InvTwo);
console.log(invoices);
InvOne.client = "Yoshi";
InvTwo.amount = 250;
console.log(InvOne, InvTwo);
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
