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
}
