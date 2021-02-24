

export class Page {

    public imgPath:string;
    public img:HTMLImageElement;

    constructor(public page:number) {

        let selectedLanguage:string = "";

        document.cookie.split(";").forEach((value:string, index:number, array:string[]) => {

            if(value.match("lang")) {
                selectedLanguage = value.split("=")[1];
            }

        });

        this.imgPath = "../BD/"+selectedLanguage+"/"+this.pad(page, 3)+".png";

    }

    load(onload:() => void = () => {}):boolean {

        if(this.img == null) {
            this.img = <HTMLImageElement> document.createElement('img');
        }

        this.img.src = this.imgPath;
        this.img.onload = onload;

        if(this.img.complete) onload();

        return this.img.complete;

    }

    stopLoad():void {

        if(this.img != null && !this.img.complete) {
            this.img.src = "";
            this.img.onload = null;
            this.img.onerror = null;
        }

    }

    private pad(value:number, n:number):string {

        let retour:string = value+"";

        while(retour.length < n) retour = "0"+retour;

        return retour;

    }

}