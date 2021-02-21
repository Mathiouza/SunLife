export class HTMLPoint {
    constructor(calculation = (previousPoint) => { return { x: 0, y: 0 }; }) {
        this.calculation = calculation;
    }
    static getHTMLPosition(element) {
        return { x: element.getBoundingClientRect().left, y: element.getBoundingClientRect().top + window.pageYOffset };
    }
}
