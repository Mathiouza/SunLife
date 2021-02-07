export class PathRenderer {
    constructor(canvas, curves, linkedFunctions, strokeStyle, main = true, paths) {
        this.canvas = canvas;
        this.curves = curves;
        this.linkedFunctions = linkedFunctions;
        this.strokeStyle = strokeStyle;
        this.main = main;
        this.paths = paths;
        this.ctx = canvas.getContext('2d');
        this.size = { x: canvas.clientWidth, y: canvas.clientHeight };
        for (let curve of this.curves) {
            curve.init(this.curves, this.ctx);
        }
        this.started = false;
    }
    start(duration) {
        this.started = true;
        this.duration = duration;
        this.startTime = Date.now();
        if (this.main)
            this.draw();
    }
    draw() {
        if (!this.started)
            return;
        if (this.main)
            this.ctx.clearRect(0, 0, this.size.x, this.size.y);
        this.ctx.lineWidth = 20;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.strokeStyle;
        let time = 0;
        let t = (Date.now() - this.startTime) / this.duration;
        let length = this.calculateLength();
        for (let curve of this.curves) {
            if (time + curve.getLength() / length > t) {
                curve.draw((t - time) / (curve.getLength() / length));
                for (let l of this.linkedFunctions) {
                    if (!l.isChanged && l.i === curve.i && (t - time) / (curve.getLength() / length) >= l.t) {
                        l.toRun();
                        l.isChanged = true;
                    }
                }
                break;
            }
            else {
                curve.draw(1);
            }
            time += curve.getLength() / length;
        }
        if (this.main && (Date.now() - this.startTime < this.duration || !this.areAllPathsEnded())) {
            setTimeout(() => {
                this.draw();
            }, 20);
        }
        for (let path of this.paths) {
            path.draw();
        }
    }
    calculateLength() {
        let distance = 0;
        for (let curve of this.curves) {
            distance += curve.getLength();
        }
        return distance;
    }
    areAllPathsEnded() {
        for (let path of this.paths) {
            if (!path.isEnded())
                return false;
        }
        return true;
    }
    isEnded() {
        return this.started && Date.now() - this.startTime > this.duration || !this.started;
    }
}
export class LinkedFunction {
    constructor(index, time, toRun) {
        this.index = index;
        this.time = time;
        this.toRun = toRun;
        this.isChanged = false;
    }
    get i() {
        return this.index;
    }
    get t() {
        return this.time;
    }
}
