import { Page } from "./page.js";


export class Reader {

    public index = 0;
    public pages:Page[] = [];

    private readerPage:HTMLImageElement = <HTMLImageElement> document.getElementById("reader-page");

    constructor() {

        for(let i = 0 ; i < 82 ; i++) {

            this.pages.push(new Page(i));

        }

        if(!this.pages[this.index].load(() => {
            this.readerPage.src = this.pages[this.index].imgPath;
        })) {
            this.readerPage.src = '../BD/load.png';
        }

        this.loadNeighbors();

    }

    next():void {

        this.index++;
        this.index = this.rectifyIndex(this.index);

        if(!this.pages[this.index].load(() => {
            this.readerPage.src = this.pages[this.index].imgPath;
        })) {
            this.readerPage.src = '../BD/load.png';
        }

        this.loadNeighbors();

    }

    prev():void {

        this.index--;
        this.index = this.rectifyIndex(this.index);

        if(!this.pages[this.index].load(() => {
            this.readerPage.src = this.pages[this.index].imgPath;
        })) {
            this.readerPage.src = '../BD/load.png';
        }

        this.loadNeighbors();

    }

    setPage(index:number):void {

        this.index = index;
        this.index = this.rectifyIndex(this.index);

        if(!this.pages[this.index].load(() => {
            this.readerPage.src = this.pages[this.index].imgPath;
        })) {
            this.readerPage.src = '../BD/load.png';
        }

        this.loadNeighbors();

    }

    private loadNeighbors():void {

        let index = this.index+1;
        index = this.rectifyIndex(index);

        this.pages[index].load();

        index = this.index-1;
        index = this.rectifyIndex(index);

        this.pages[index].load();

        for(let i = 0 ; i < this.pages.length ; i++) {

            if(i < this.index-1 || i > this.index+1) {

                this.pages[i].stopLoad();

            }

        }

    }

    private rectifyIndex(index:number):number {

        if(index < 0) return 0;
        else if(index >= this.pages.length) return this.pages.length-1;

        return index;

    }

}