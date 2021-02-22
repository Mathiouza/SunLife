import { Page } from "./page";


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

    }

    next():void {

        this.index++;
        this.index = this.rectifyIndex(this.index);

        this.readerPage.src = this.pages[this.index].imgPath;

        this.loadNeighbors();

    }

    prev():void {

        this.index--;
        this.index = this.rectifyIndex(this.index);

        this.readerPage.src = this.pages[this.index].imgPath;

        this.loadNeighbors();

    }

    setPage(index:number):void {

        this.index = index;
        this.index = this.rectifyIndex(this.index);

        this.readerPage.src = this.pages[this.index].imgPath;

        this.loadNeighbors();

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