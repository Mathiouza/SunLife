

export class NumberAnimator {

    private started = false;
    private startTime:number;

    constructor(private target:number, private duration:number, private element:HTMLElement) {}

    start():void {

        this.startTime = Date.now();
        this.started = true;

        this.update();

    }

    update():void {

        let value = Math.floor(this.target * Math.pow((Date.now() - this.startTime)/this.duration, 1/3));
        if(value > this.target)
            value = this.target;

        this.element.innerText = value+'';

        if(Date.now() - this.startTime < this.duration) {
            setTimeout(() => {
                this.update();
            }, 20);
        }

    }

}