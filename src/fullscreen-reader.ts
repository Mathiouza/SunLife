import { Page } from "./page.js";


export class FullscreenReader {

    public pages:Page[] = [];
    public index:number = 0;

    private fullscreenPages = [

        <HTMLImageElement> document.getElementById("reader-page-fullscreen1"),
        <HTMLImageElement> document.getElementById("reader-page-fullscreen2"),
        <HTMLImageElement> document.getElementById("reader-page-fullscreen3"),
        <HTMLImageElement> document.getElementById("reader-page-fullscreen4"),
        <HTMLImageElement> document.getElementById("reader-page-fullscreen5"),

    ]

    constructor() {

        for(let i = 0 ; i < 82 ; i++) {

            this.pages.push(new Page(i));

        }

        this.pages[0].load();
        this.pages[1].load();
        this.pages[2].load();
        this.pages[3].load();

        this.fullscreenPages[2].src = this.pages[0].imgPath;

        this.display();

    }

    next():void {

        this.index++;
        this.index = this.rectifyIndex(this.index);

        this.display();

    }

    prev():void {

        this.index--;
        this.index = this.rectifyIndex(this.index);

        this.display();

    }

    setPage(index:number):void {

        this.index = index;
        this.index = this.rectifyIndex(this.index);

        this.display();

    }

    private display():void {

        let index = this.index;
        index = this.rectifyIndex(index);
        this.fullscreenPages[2].src = this.pages[index].imgPath;

        index = this.index+1;
        index = this.rectifyIndex(index);
        this.fullscreenPages[3].src = this.pages[index].imgPath;

        index = this.index-1;
        index = this.rectifyIndex(index);
        this.fullscreenPages[1].src = this.pages[index].imgPath;

        index = this.index+2;
        index = this.rectifyIndex(index);
        this.fullscreenPages[4].src = this.pages[index].imgPath;

        index = this.index-2;
        index = this.rectifyIndex(index);
        this.fullscreenPages[0].src = this.pages[index].imgPath;

        this.loadNeighbors();

    }

    private loadNeighbors():void {

        let index = this.index+3;
        index = this.rectifyIndex(index);

        this.pages[index].load();

        index = this.index-3;
        index = this.rectifyIndex(index);

        this.pages[index].load();

    }

    private rectifyIndex(index:number):number {

        if(index < 0) return 0;
        else if(index >= this.pages.length) return this.pages.length-1;

        return index;

    }

}