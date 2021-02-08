export class NumberAnimator {
    constructor(target, duration, element) {
        this.target = target;
        this.duration = duration;
        this.element = element;
        this.started = false;
    }
    start() {
        this.startTime = Date.now();
        this.started = true;
        this.update();
    }
    update() {
        let value = Math.floor(this.target * Math.pow((Date.now() - this.startTime) / this.duration, 1 / 3));
        if (value > this.target)
            value = this.target;
        this.element.innerText = value + '';
        if (Date.now() - this.startTime < this.duration) {
            setTimeout(() => {
                this.update();
            }, 20);
        }
    }
}
