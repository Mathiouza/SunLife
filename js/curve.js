import { VecOp } from "./vec2";
export class Curve {
    constructor(ctx) {
        this.ctx = ctx;
    }
    draw(t) { }
}
export class Line extends Curve {
    constructor(beginPoint, endPoint, ctx) {
        super(ctx);
        this.beginPoint = beginPoint;
        this.endPoint = endPoint;
    }
    draw(t) {
        const finalPoint = VecOp.add(this.beginPoint, VecOp.mul(VecOp.sub(this.endPoint, this.beginPoint), t));
        this.ctx.beginPath();
        this.ctx.lineTo(this.beginPoint.x, this.beginPoint.y);
        this.ctx.lineTo(finalPoint.x, finalPoint.y);
        this.ctx.stroke();
    }
}
export class Arc extends Curve {
    constructor(centerPoint, startAngle, endAngle, radius, ctx, calculation = (radius) => { return radius; }) {
        super(ctx);
        this.centerPoint = centerPoint;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.radius = radius;
        this.calculation = calculation;
        this.startAngle = 2 * Math.PI - this.startAngle;
        this.endAngle = 2 * Math.PI - this.endAngle;
    }
    draw(t) {
        const finalAngle = this.startAngle + t * (this.endAngle - this.startAngle);
        this.ctx.beginPath();
        this.ctx.arc(this.centerPoint.x, this.centerPoint.y, this.calculation(this.radius), this.startAngle, finalAngle, this.endAngle < this.startAngle);
        this.ctx.stroke();
    }
}
