import { FullscreenReader } from "./fullscreen-reader";
import { Reader } from "./reader";


let reader = new Reader();
let fullscreenReader = new FullscreenReader();

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

document.getElementById("chapter1-summary").onclick = (e:Event) => {

    reader.setPage(1);
    input.value = (reader.index+1)+"";

}

document.getElementById("chapter2-summary").onclick = (e:Event) => {

    reader.setPage(29);
    input.value = (reader.index+1)+"";

}

document.getElementById("control-full").onclick = (e:Event) => {

    document.getElementById("simple-reader").style.display = "none";
    document.getElementById("fullscreen-reader").style.display = "initial";

    let elem:any = document.getElementById("fullscreen-reader");

    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }

    fullscreenReader.setPage(reader.index);

    setTimeout(() => {

        document.getElementById("fullscreen-reader").scrollTo(0, document.getElementById("reader-page-fullscreen3").getBoundingClientRect().top);

    }, 20)

}

document.getElementById("fullscreen-reader").onfullscreenchange = (e:Event) => {

    if(!document.fullscreenElement) {

        document.getElementById("simple-reader").style.display = "initial";
        document.getElementById("fullscreen-reader").style.display = "none";

        reader.setPage(fullscreenReader.index);
        input.value = (reader.index+1)+"";

    }

}

document.getElementById("fullscreen-reader").onscroll = (e:Event) => {

    if(fullscreenReader.index === 0 && document.getElementById("reader-page-fullscreen3").getBoundingClientRect().top > 0) {

        document.getElementById("fullscreen-reader").scrollTo(0, document.getElementById("reader-page-fullscreen3").getBoundingClientRect().top+document.getElementById("fullscreen-reader").scrollTop);

    }

    if(fullscreenReader.index === fullscreenReader.pages.length-1 && document.getElementById("reader-page-fullscreen4").getBoundingClientRect().top < window.innerHeight) {

        document.getElementById("fullscreen-reader").scrollTo(0, document.getElementById("reader-page-fullscreen4").getBoundingClientRect().top-window.innerHeight+document.getElementById("fullscreen-reader").scrollTop);

    }

    if(document.getElementById("reader-page-fullscreen4").getBoundingClientRect().top < 0) {

        document.getElementById("fullscreen-reader").scrollTo(0, document.getElementById("reader-page-fullscreen3").getBoundingClientRect().top+document.getElementById("fullscreen-reader").scrollTop);
        fullscreenReader.next();

    }

    if(document.getElementById("reader-page-fullscreen2").getBoundingClientRect().top >= 0) {

        document.getElementById("fullscreen-reader").scrollTo(0, document.getElementById("reader-page-fullscreen3").getBoundingClientRect().top+document.getElementById("fullscreen-reader").scrollTop);
        fullscreenReader.prev();

    }

}