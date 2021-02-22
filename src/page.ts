

export class Page {

    public imgPath:string;

    constructor(public page:number) {

        let selectedLanguage:string = "";

        document.cookie.split(";").forEach((value:string, index:number, array:string[]) => {

            if(value.match("lang")) {
                selectedLanguage = value.split("=")[1];
            }

        });

        this.imgPath = "../BD/"+selectedLanguage+"/"+this.pad(page, 3)+".png";

    }

    load():void {

        let img = document.createElement('img');

        if(img instanceof HTMLImageElement) {

            img.src = this.imgPath;

        }

    }

    private pad(value:number, n:number):string {

        let retour:string = value+"";

        while(retour.length < n) retour = "0"+retour;

        return retour;

    }

}