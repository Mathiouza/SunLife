import { HTMLPoint } from "./point.js";
import { Vec2, VecOp } from "./vec2.js";

export class Curve {

    protected curves:Curve[];
    protected ctx:CanvasRenderingContext2D;

    constructor(protected index:number) {}

    draw(t:number): void {}

    init(curves:Curve[], ctx:CanvasRenderingContext2D):void {
        this.curves = curves;
        this.ctx = ctx;
    }

    getEndPoint():Vec2 {
        return {x:0, y:0};
    }

    getStartPoint():Vec2 {
        return {x:0, y:0};
    }

    getPreviousPoint():Vec2 {

        return this.index == 0 ? {x:0, y:0} : this.curves[this.index-1].getEndPoint();

    }

    getLength():number {
        return 0;
    }

    get i():number {
        return this.index;
    }

}

export class Line extends Curve {

    constructor(private beginPoint:HTMLPoint, private endPoint:HTMLPoint, index:number) {
        super(index);
    }

    draw(t:number): void {

        let previousPoint = this.getPreviousPoint();

        const finalPoint = VecOp.add(this.beginPoint.calculation(previousPoint), VecOp.mul(VecOp.sub(this.endPoint.calculation(previousPoint), this.beginPoint.calculation(previousPoint)), t));

        this.ctx.beginPath();
        this.ctx.lineTo(this.beginPoint.calculation(previousPoint).x, this.beginPoint.calculation(previousPoint).y);
        this.ctx.lineTo(finalPoint.x, finalPoint.y);
        this.ctx.stroke();

    }

    getEndPoint():Vec2 {
        return this.endPoint.calculation(this.getPreviousPoint());
    }

    getStartPoint():Vec2 {
        return this.beginPoint.calculation(this.getPreviousPoint());
    }

    getLength():number {
        return VecOp.distance(this.beginPoint.calculation(this.getPreviousPoint()), this.endPoint.calculation(this.getPreviousPoint()));
    }

}

export class Arc extends Curve {

    constructor(private centerPoint:HTMLPoint, private startAngle:number, private endAngle:number, private radius:number, index:number) {
        super(index);

        this.startAngle = 2*Math.PI - this.startAngle;
        this.endAngle = 2*Math.PI - this.endAngle;
    }

    draw(t:number):void {
        let previousPoint = this.getPreviousPoint();

        const finalAngle = this.startAngle + t * (this.endAngle-this.startAngle);

        this.ctx.beginPath();
        this.ctx.arc(this.centerPoint.calculation(previousPoint).x, this.centerPoint.calculation(previousPoint).y, this.radius, this.startAngle, finalAngle, this.endAngle < this.startAngle);
        this.ctx.stroke();

    }

    getEndPoint():Vec2 {

        const center = this.centerPoint.calculation(this.getPreviousPoint());
        
        return {x: center.x + this.radius*Math.cos(this.endAngle), y: center.y + this.radius*Math.sin(this.endAngle) };

    }

    getStartPoint():Vec2 {
        const center = this.centerPoint.calculation(this.getPreviousPoint());
        
        return {x: center.x + this.radius*Math.cos(this.startAngle), y: center.y + this.radius*Math.sin(this.startAngle) };
    }

    getLength():number {
        return Math.abs(this.radius*(this.endAngle-this.startAngle));
    }

}

export class Dot extends Curve {

    constructor(private point:HTMLPoint, private radius:number, index:number) {
        super(index);
    }

    draw(t:number):void {

        let previousPoint = this.getPreviousPoint();
        let newRadius = this.radius*t;

        this.ctx.beginPath();
        this.ctx.arc(this.point.calculation(previousPoint).x, this.point.calculation(previousPoint).y, newRadius, 0, 2*Math.PI);
        this.ctx.fill();

    }

    getStartPoint():Vec2 {

        return this.point.calculation(this.getPreviousPoint());

    }

    getEndPoint():Vec2 {

        return this.point.calculation(this.getPreviousPoint());

    }

    getLength():number {
        return this.radius;
    }

}