document.getElementById("change-lang").onclick = (e:Event) => {

    document.cookie = "lang=;path=/;expires=Fri, 31 Dec 1000 23:59:59 GMT";
    
    window.scrollTo(0, 0);

    document.getElementById("language-window").style.display = "initial";

    window.addEventListener('scroll', (e:Event) => {window.scrollTo(0, 0)});

    document.getElementById("button-select-language").onclick = (e:MouseEvent) => {

        let selection = document.getElementById("languages-selection");

        if(selection instanceof HTMLSelectElement) {
            document.cookie = "lang="+selection.value+";path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT";

            console.log(document.cookie);

            let elements = location.href.split("/");

            location.href = "../"+selection.value+"/"+elements[elements.length-1]
        }

    }

}