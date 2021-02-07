import { Vec2 } from "./vec2";

export class HTMLPoint {

    constructor(public calculation:(previousPoint:Vec2) => Vec2 = (previousPoint:Vec2) => { return {x:0, y:0} } ) {}

    static getHTMLPosition(element:HTMLElement):Vec2 {

        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        return {x:element.getBoundingClientRect().left, y:element.getBoundingClientRect().top+scrollTop};

    }

}