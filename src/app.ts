//classes
class Invoice {
    // readonly client: string;
    // private details: string;
    // public amount: number;


    constructor(
        readonly client: string,
        private details: string,
        public amount: number,
    ){   
    }

    // constructor(c: string, d:string, a:number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }


format(){
    return `${this.client} owes $ ${this.amount} for ${this.details}`
}
}

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