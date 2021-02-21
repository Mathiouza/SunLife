import { VecOp } from "./vec2";
export class Curve {
    constructor(index) {
        this.index = index;
    }
    draw(t) { }
    init(curves, ctx) {
        this.curves = curves;
        this.ctx = ctx;
    }
    getEndPoint() {
        return { x: 0, y: 0 };
    }
    getStartPoint() {
        return { x: 0, y: 0 };
    }
    getPreviousPoint() {
        return this.index == 0 ? { x: 0, y: 0 } : this.curves[this.index - 1].getEndPoint();
    }
    getLength() {
        return 0;
    }
    get i() {
        return this.index;
    }
}
export class Line extends Curve {
    constructor(beginPoint, endPoint, index) {
        super(index);
        this.beginPoint = beginPoint;
        this.endPoint = endPoint;
    }
    draw(t) {
        let previousPoint = this.getPreviousPoint();
        const finalPoint = VecOp.add(this.beginPoint.calculation(previousPoint), VecOp.mul(VecOp.sub(this.endPoint.calculation(previousPoint), this.beginPoint.calculation(previousPoint)), t));
        this.ctx.beginPath();
        this.ctx.lineTo(this.beginPoint.calculation(previousPoint).x, this.beginPoint.calculation(previousPoint).y);
        this.ctx.lineTo(finalPoint.x, finalPoint.y);
        this.ctx.stroke();
    }
    getEndPoint() {
        return this.endPoint.calculation(this.getPreviousPoint());
    }
    getStartPoint() {
        return this.beginPoint.calculation(this.getPreviousPoint());
    }
    getLength() {
        return VecOp.distance(this.beginPoint.calculation(this.getPreviousPoint()), this.endPoint.calculation(this.getPreviousPoint()));
    }
}
export class Arc extends Curve {
    constructor(centerPoint, startAngle, endAngle, radius, index) {
        super(index);
        this.centerPoint = centerPoint;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
        this.radius = radius;
        this.startAngle = 2 * Math.PI - this.startAngle;
        this.endAngle = 2 * Math.PI - this.endAngle;
    }
    draw(t) {
        let previousPoint = this.getPreviousPoint();
        const finalAngle = this.startAngle + t * (this.endAngle - this.startAngle);
        this.ctx.beginPath();
        this.ctx.arc(this.centerPoint.calculation(previousPoint).x, this.centerPoint.calculation(previousPoint).y, this.radius, this.startAngle, finalAngle, this.endAngle < this.startAngle);
        this.ctx.stroke();
    }
    getEndPoint() {
        const center = this.centerPoint.calculation(this.getPreviousPoint());
        return { x: center.x + this.radius * Math.cos(this.endAngle), y: center.y + this.radius * Math.sin(this.endAngle) };
    }
    getStartPoint() {
        const center = this.centerPoint.calculation(this.getPreviousPoint());
        return { x: center.x + this.radius * Math.cos(this.startAngle), y: center.y + this.radius * Math.sin(this.startAngle) };
    }
    getLength() {
        return Math.abs(this.radius * (this.endAngle - this.startAngle));
    }
}
export class Dot extends Curve {
    constructor(point, radius, index) {
        super(index);
        this.point = point;
        this.radius = radius;
    }
    draw(t) {
        let previousPoint = this.getPreviousPoint();
        let newRadius = this.radius * t;
        this.ctx.beginPath();
        this.ctx.arc(this.point.calculation(previousPoint).x, this.point.calculation(previousPoint).y, newRadius, 0, 2 * Math.PI);
        this.ctx.fill();
    }
    getStartPoint() {
        return this.point.calculation(this.getPreviousPoint());
    }
    getEndPoint() {
        return this.point.calculation(this.getPreviousPoint());
    }
    getLength() {
        return this.radius;
    }
}
