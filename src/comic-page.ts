import { Reader } from "./reader";


let reader = new Reader();

let form = <HTMLFormElement> document.getElementById("bd-page-selector-form");
let input = <HTMLInputElement> document.getElementById("page-input");

form.onsubmit = (e:Event) => {

    e.preventDefault();

    reader.setPage(parseInt(input.value)-1);

};

document.getElementById("control-prev").onclick = (e:Event) => {

    reader.prev();
    input.value = (reader.index+1)+"";

}

document.getElementById("control-next").onclick = (e:Event) => {

    reader.next();
    input.value = (reader.index+1)+"";

}

document.getElementById("reader-page").onclick = (e:Event) => {

    reader.next();
    input.value = (reader.index+1)+"";

}