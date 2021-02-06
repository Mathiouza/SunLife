export class Point {
    constructor(point) {
        this.point = point;
    }
    get x() {
        return this.point.x;
    }
    get y() {
        return this.point.y;
    }
}
export var Constraint;
(function (Constraint) {
    Constraint[Constraint["None"] = 'none'] = "None";
    Constraint[Constraint["OnlyX"] = 'onlyx'] = "OnlyX";
    Constraint[Constraint["OnlyY"] = 'onlyy'] = "OnlyY";
})(Constraint || (Constraint = {}));
export class HTMLPoint extends Point {
    constructor(constraint, element = null, point = { x: 0, y: 0 }, calculation = (point) => { return point; }) {
        super(point);
        this.constraint = constraint;
        this.element = element;
        this.calculation = calculation;
    }
    get x() {
        return this.calculation({ x: this.constraint === Constraint.OnlyY || this.element == null ? this.point.x : this.element.getBoundingClientRect().x, y: 0 }).x;
    }
    get y() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return this.calculation({ x: 0, y: this.constraint === Constraint.OnlyX || this.element == null ? this.point.y : this.element.getBoundingClientRect().y + scrollTop }).y;
    }
}
