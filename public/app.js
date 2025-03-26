import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payments.js";
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
//ENUMS
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["LIST"] = 2] = "LIST";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
    ResourceType[ResourceType["DIRECTOR"] = 5] = "DIRECTOR";
})(ResourceType || (ResourceType = {}));
const docThree = {
    uid: 2,
    resourseType: ResourceType.AUTHOR,
    data: { NAME: "SHAWN" },
};
const docFour = {
    uid: 4,
    resourseType: ResourceType.LIST,
    data: ["bread", "cheese", "toilet roll", "milk"]
};
console.log(docThree, docFour);
