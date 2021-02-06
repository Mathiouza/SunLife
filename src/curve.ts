import { Point } from "./point";
import { Vec2, VecOp } from "./vec2";

export class Curve {

    constructor(protected ctx:CanvasRenderingContext2D) {}

    draw(t:number): void {}

}

export class Line extends Curve {

    constructor(private beginPoint:Point, private endPoint:Point, ctx:CanvasRenderingContext2D) {
        super(ctx);
    }

    draw(t:number): void {

        const finalPoint = VecOp.add(this.beginPoint, VecOp.mul(VecOp.sub(this.endPoint, this.beginPoint), t));

        this.ctx.beginPath();
        this.ctx.lineTo(this.beginPoint.x, this.beginPoint.y);
        this.ctx.lineTo(finalPoint.x, finalPoint.y);
        this.ctx.stroke();

    }

}

export class Arc extends Curve {

    constructor(private centerPoint:Point, private startAngle:number, private endAngle:number, private radius:number, ctx:CanvasRenderingContext2D, private calculation:(radius:number) => number = (radius:number) => {return radius}) {
        super(ctx);

        this.startAngle = 2*Math.PI - this.startAngle;
        this.endAngle = 2*Math.PI - this.endAngle;
    }

    draw(t:number):void {
        const finalAngle = this.startAngle + t * (this.endAngle-this.startAngle);

        this.ctx.beginPath();
        this.ctx.arc(this.centerPoint.x, this.centerPoint.y, this.calculation(this.radius), this.startAngle, finalAngle, this.endAngle < this.startAngle);
        this.ctx.stroke();
    }

}