
export interface Vec2 {
    x: number;
    y: number;
}

export class VecOp {

    static sub(a:Vec2, b:Vec2):Vec2 {
        return {x:a.x-b.x, y:a.y-b.y};
    }

    static mul(a:Vec2, b:number):Vec2 {
        return {x:a.x*b, y:a.y*b};
    }

    static add(a:Vec2, b:Vec2):Vec2 {
        return {x:a.x+b.x, y:a.y+b.y};
    }

}