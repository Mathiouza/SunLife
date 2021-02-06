import { Vec2 } from "./vec2";


export class Point {

    constructor(protected point:Vec2) {}

    get x():number {
        return this.point.x;
    }

    get y():number {
        return this.point.y;
    }

}

export enum Constraint {

    None = 'none',
    OnlyX = 'onlyx',
    OnlyY = 'onlyy'

}

export class HTMLPoint extends Point {

    constructor(private constraint:Constraint, private element:HTMLElement = null, point:Vec2 = {x:0, y:0}, private calculation:(point:Vec2) => Vec2 = (point:Vec2) => { return point }) {
        super(point);
    }

    get x():number {
        return this.calculation({x:this.constraint === Constraint.OnlyY || this.element == null ? this.point.x : this.element.getBoundingClientRect().x, y:0}).x;
    }

    get y():number {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return this.calculation({x:0, y:this.constraint === Constraint.OnlyX || this.element == null ? this.point.y : this.element.getBoundingClientRect().y+scrollTop}).y;
    }

}