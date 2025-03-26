import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate{
    constructor( private container: HTMLUListElement){}

    render(item: HasFormatter,heading: string, position: "start" | "end"){
        const li = document.createElement("li")
        const h4 = document.createElement("h4")
        const p = document.createElement("p")

        h4.innerText = heading;
        li.append(h4);
        p.innerText = item.format();
        li.append(p);

        if(position === "start"){
            this.container.prepend(li);
        }else{
            this.container.append(li);
        }

    }
}


// 1.register a list container (ul) in the constructor
// 2. create a render method to render a new 'li' to the container
//     -- accepts arguments: invoice or PaymentAddress, a heading, a position
//     -- create the html template (li,h4,p)
//     -- add the 'li' template to the start/end of the list

