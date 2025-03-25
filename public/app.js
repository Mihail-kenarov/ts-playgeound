"use strict";
//classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // constructor(c: string, d:string, a:number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    format() {
        return `${this.client} owes $ ${this.amount} for ${this.details}`;
    }
}
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
