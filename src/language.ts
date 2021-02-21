

if(document.cookie.match("lang")) {

    document.getElementById("language-window").style.display = "none";

    let selectedLanguage:string = "";

    document.cookie.split(";").forEach((value:string, index:number, array:string[]) => {

        if(value.match("lang")) {
            selectedLanguage = value.split("=")[1];
        }

    });

    if(!location.href.match("/"+selectedLanguage+"/")) {

        let elements = location.href.split("/");

        location.href = "../"+selectedLanguage+"/"+elements[elements.length-1];

    }

}
else {

    window.addEventListener('scroll', (e:Event) => {window.scrollTo(0, 0)});

    document.getElementById("button-select-language").onclick = (e:MouseEvent) => {

        let selection = document.getElementById("languages-selection") as HTMLSelectElement;

        document.cookie = "lang="+selection.value+";path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT";

        console.log(document.cookie);

        let elements = location.href.split("/");

        location.href = "../"+selection.value+"/"+elements[elements.length-1]

    }

}