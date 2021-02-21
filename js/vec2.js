export class VecOp {
    static sub(a, b) {
        return { x: a.x - b.x, y: a.y - b.y };
    }
    static mul(a, b) {
        return { x: a.x * b, y: a.y * b };
    }
    static add(a, b) {
        return { x: a.x + b.x, y: a.y + b.y };
    }
    static distance(a, b) {
        return Math.sqrt(Math.pow(this.sub(b, a).x, 2) + Math.pow(this.sub(b, a).y, 2));
    }
}
