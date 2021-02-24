import { Arc, Curve, Line } from './curve.js';
import { HTMLPoint } from './point.js';
import {Vec2} from './vec2.js';

export class PathRenderer {

    private ctx:CanvasRenderingContext2D;
    private size:Vec2;
    private duration:number;
    private startTime:number;

    private started:boolean;

    constructor(canvas:HTMLCanvasElement, private curves:Curve[], private linkedFunctions:LinkedFunction[], private strokeStyle:string | CanvasGradient | CanvasPattern, private main:boolean, private paths:PathRenderer[], private scroll:boolean = false) {

        this.ctx = canvas.getContext('2d');

        this.size = {x:canvas.clientWidth, y:canvas.clientHeight};

        for(let curve of this.curves) {
            curve.init(this.curves, this.ctx);
        }

        this.started = false;

    }

    start(duration:number):void {

        this.started = true;
        this.duration = duration;
        this.startTime = Date.now();

        if(this.main)
            this.draw();

    }

    public draw():void {

        if(!this.started)
            return;

        if(this.scroll) {

            this.startTime = Date.now();

            if(window.pageYOffset >= this.curves[0].getStartPoint().y-window.innerHeight/2 || window.pageYOffset + window.innerHeight >= document.documentElement.offsetHeight-100) {
                this.scroll = false;
            }
            else return;

        }

        if(this.main)
            this.ctx.clearRect(0, 0, this.size.x, this.size.y);

        this.ctx.lineWidth = 20;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = this.strokeStyle;
        this.ctx.fillStyle = this.strokeStyle;

        let time = 0;
        let t = (Date.now() - this.startTime)/this.duration;

        let length = this.calculateLength();

        for(let curve of this.curves) {

            if(time + curve.getLength()/length > t) {
                curve.draw( (t-time)/(curve.getLength()/length) );

                for(let l of this.linkedFunctions) {

                    if(!l.isChanged && l.i === curve.i && (t-time)/(curve.getLength()/length) >= l.t ) {
                        l.toRun();
                        l.isChanged = true;
                    }
    
                }

                break;
            }
            else {
                curve.draw(1);
            }

            time += curve.getLength()/length;

        }

        if(this.isEnded()) {
            for(let l of this.linkedFunctions) {
                if(!l.isChanged && l.i == -1) {
                    l.toRun();
                    l.isChanged = true;
                }
            }
        }

        if(this.main && (Date.now() - this.startTime < this.duration || !this.areAllPathsEnded() )) {

            setTimeout(() => {
                this.draw();
            }, 20);

        }

        for(let path of this.paths) {
            path.draw();
        }
    }

    private calculateLength():number {

        let distance = 0;

        for(let curve of this.curves) {
            distance += curve.getLength();
        }

        return distance;

    }

    private areAllPathsEnded():boolean {

        for(let path of this.paths) {
            if(!path.isEnded())
                return false;
        }

        return true;

    }

    private isEnded():boolean {

        return this.started && Date.now() - this.startTime > this.duration;

    }

}

export class LinkedFunction {

    public isChanged = false;

    constructor(private index:number, private time:number, public toRun:() => void) {}

    get i():number {
        return this.index;
    }

    get t():number {
        return this.time;
    }

}