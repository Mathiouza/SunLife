import { Page } from "./page.js";


export class Reader {

    public index = 0;
    public pages:Page[] = [];

    private readerPage:HTMLImageElement = <HTMLImageElement> document.getElementById("reader-page");

    constructor() {

        for(let i = 0 ; i < 82 ; i++) {

            this.pages.push(new Page(i));

        }

        this.pages[0].load();
        this.pages[1].load();

        this.readerPage.src = this.pages[0].imgPath;
        this.checkIfLoaded();

    }

    next():void {

        this.index++;
        this.index = this.rectifyIndex(this.index);

        this.readerPage.src = this.pages[this.index].imgPath;

        this.loadNeighbors();
        this.checkIfLoaded();

    }

    prev():void {

        this.index--;
        this.index = this.rectifyIndex(this.index);

        this.readerPage.src = this.pages[this.index].imgPath;

        this.loadNeighbors();
        this.checkIfLoaded();

    }

    setPage(index:number):void {

        this.index = index;
        this.index = this.rectifyIndex(this.index);

        this.readerPage.src = this.pages[this.index].imgPath;

        this.loadNeighbors();
        this.checkIfLoaded();

    }

    private checkIfLoaded():void {

        if(this.pages[this.index].img == null) return;

        if(!this.pages[this.index].img.complete) {

            this.readerPage.src = "../BD/load.png";

            this.pages[this.index].img.onload = () => {

                this.readerPage.src = this.pages[this.index].imgPath;

            }

        }

    }

    private loadNeighbors():void {

        let index = this.index+1;
        index = this.rectifyIndex(index);

        this.pages[index].load();

        index = this.index-1;
        index = this.rectifyIndex(index);

        this.pages[index].load();

    }

    private rectifyIndex(index:number):number {

        if(index < 0) return 0;
        else if(index >= this.pages.length) return this.pages.length-1;

        return index;

    }

}