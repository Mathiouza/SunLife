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

        let indexes = [

            this.rectifyIndex(this.index),
            this.rectifyIndex(this.index+1),
            this.rectifyIndex(this.index-1),
            this.rectifyIndex(this.index+2),
            this.rectifyIndex(this.index-2),

        ]

        if(!this.pages[indexes[0]].load(() => {
            this.fullscreenPages[2].src = this.pages[indexes[0]].imgPath;
        })) {
            this.fullscreenPages[2].src = '../BD/load.png';
        }

        if(!this.pages[indexes[1]].load(() => {
            this.fullscreenPages[3].src = this.pages[indexes[1]].imgPath;
        })) {
            this.fullscreenPages[3].src = '../BD/load.png';
        }

        if(!this.pages[indexes[2]].load(() => {
            this.fullscreenPages[1].src = this.pages[indexes[2]].imgPath;
        })) {
            this.fullscreenPages[1].src = '../BD/load.png';
        }

        if(!this.pages[indexes[3]].load(() => {
            this.fullscreenPages[4].src = this.pages[indexes[3]].imgPath;
        })) {
            this.fullscreenPages[4].src = '../BD/load.png';
        }

        if(!this.pages[indexes[4]].load(() => {
            this.fullscreenPages[0].src = this.pages[indexes[4]].imgPath;
        })) {
            this.fullscreenPages[0].src = '../BD/load.png';
        }

        for(let i = 0 ; i < this.pages.length ; i++) {

            if(i < this.index-2 || i > this.index+2) {

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