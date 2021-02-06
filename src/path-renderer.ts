import { Arc, Curve, Line } from './curve';
import { Constraint, HTMLPoint, Point } from './point';
import {Vec2} from './vec2';

export class PathRenderer {

    private ctx:CanvasRenderingContext2D;
    private size:Vec2;
    private curves:Curve[];

    constructor(private canvas:HTMLCanvasElement) {

        this.ctx = canvas.getContext('2d');

        this.size = {x:canvas.clientWidth, y:canvas.clientHeight};

        this.curves = [

            new Line(new HTMLPoint(
                Constraint.None,
                null,
                {x:0.05, y:300},
                (point:Vec2) => {
                    return {x:point.x*canvas.clientWidth, y:point.y};
                }
            ), new HTMLPoint(
                Constraint.OnlyY,
                document.getElementById('more-container'),
                {x:0.05, y:0},
                (point:Vec2) => {
                    return {x:point.x*canvas.clientWidth, y:point.y};
                }
            ), this.ctx),

            new Arc(new HTMLPoint(
                Constraint.OnlyY,
                document.getElementById('more-container'),
                {x:120, y:0},
                (point:Vec2) => {
                    return {x:0.05*canvas.clientWidth+point.x, y:point.y};
                }
            ), Math.PI, 3*Math.PI/2, 120, this.ctx)

        ]

    }

    draw(t:number):void {
        this.ctx.clearRect(0, 0, this.size.x, this.size.y);

        this.ctx.lineWidth = 20;
        this.ctx.lineCap = 'round';
        this.ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color');

        let time = 0;

        for(let curve of this.curves) {

            if(time + 1/this.curves.length > t) {
                curve.draw( (t-time)/(1/this.curves.length) );
                break;
            }
            else {
                curve.draw(1);
            }

            time += 1/this.curves.length;

        }
    }

}