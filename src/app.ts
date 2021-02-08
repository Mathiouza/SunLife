import { LinkedFunction, PathRenderer } from "./path-renderer";
import * as Constants from "./constants";
import { Arc, Dot, Line } from "./curve";
import { HTMLPoint } from "./point";
import { Vec2 } from "./vec2";
import { NumberAnimator } from "./number";

let canvas = document.getElementById('canvas');

let pathMainPage:PathRenderer;
let pathPersonnage:PathRenderer;
let pathMainPage2:PathRenderer;

let pagesNumber:NumberAnimator = new NumberAnimator(200, 2000, <HTMLElement>document.getElementById('pages').children[0]);
let doneNumber:NumberAnimator = new NumberAnimator(42, 2000, <HTMLElement>document.getElementById('done').children[0]);

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

const firstDate = new Date(2020, 1, 6).getTime();
const secondDate = Date.now();

const diffDays = Math.round(Math.abs((secondDate - firstDate) / oneDay));

let dateNumber:NumberAnimator = new NumberAnimator(diffDays, 2000, <HTMLElement>document.getElementById('date').children[0]);

if(canvas instanceof HTMLCanvasElement) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    pathPersonnage = new PathRenderer(canvas, [

        new Line(new HTMLPoint((p:Vec2) => {

            return {x:0.5*canvas.clientWidth, y:HTMLPoint.getHTMLPosition(document.getElementById('more-container')).y+100};

        }), new HTMLPoint((p:Vec2) => {

            return {x:0.5*canvas.clientWidth, y:HTMLPoint.getHTMLPosition(document.getElementById('persos')).y + document.getElementById('persos').getBoundingClientRect().height/2};

        }), 0),

        new Dot(new HTMLPoint((p:Vec2) => {

            return {x:p.x, y:p.y};

        }), 20, 1)

    ], [

        new LinkedFunction(0, 0, () => {

            document.styleSheets[0].addRule('.more-button', 'background-color: var(--tertiary-color)')

        }),

        new LinkedFunction(1, 0, () => {

            document.styleSheets[0].addRule('.more-button', 'color: var(--secondary-color)')

        }),

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, []);

    pathMainPage2 = new PathRenderer(canvas, [
        new Line(new HTMLPoint((p:Vec2) => {
            return {x:0.95*canvas.clientWidth, y:HTMLPoint.getHTMLPosition(document.getElementById('more-container')).y+200};
        }), new HTMLPoint((p:Vec2) => {
            return {x:0.95*canvas.clientWidth, y:HTMLPoint.getHTMLPosition(document.getElementById('pages')).y+document.getElementById('pages').getBoundingClientRect().height/2-100};
        }), 0),

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:p.x-100, y:p.y};
        }), 0, -Math.PI/2, 100, 1),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+100, y:p.y};
        }), 2)
    ], [
        new LinkedFunction(0, 0, () => {
            document.styleSheets[0].addRule('#stats-title', 'transform: translateY(0); color: var(--secondary--color)');
        }),

        new LinkedFunction(2, 0.25, () => {
            document.styleSheets[0].addRule('#done', 'transform: scaleY(1)');
            doneNumber.start();
        }),

        new LinkedFunction(2, 0.5, () => {
            document.styleSheets[0].addRule('#date', 'transform: scaleY(1)');
            dateNumber.start();
        }),

        new LinkedFunction(2, 0.75, () => {
            document.styleSheets[0].addRule('#pages', 'transform: scaleY(1)');
            pagesNumber.start();
        })
    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], true);

    pathMainPage = new PathRenderer(canvas,
    [

        new Line(new HTMLPoint((previousPoint:Vec2) => {

            return {x:0.05*canvas.clientWidth, y:300};

        }), new HTMLPoint((previousPoint:Vec2) => {

            return {x:0.05*canvas.clientWidth, y: HTMLPoint.getHTMLPosition(document.getElementById('more-container')).y };

        }), 0),

        new Arc(new HTMLPoint( (previousPoint:Vec2) => {
            return {x:previousPoint.x+100, y:previousPoint.y};
        }), Math.PI, 3*Math.PI/2, 100, 1),

        new Line(new HTMLPoint((previousPoint:Vec2) => {
            return {x:previousPoint.x, y:previousPoint.y};
        }), new HTMLPoint((previousPoint:Vec2) => {
            return {x:0.95*canvas.clientWidth-100, y:previousPoint.y};
        }), 2),

        new Arc(new HTMLPoint( (p:Vec2) => {
            return {x:p.x, y:p.y+100};
        }), Math.PI/2, 0, 100, 3),

        new Dot(new HTMLPoint( (p:Vec2) => {
            return {x:p.x, y:p.y};
        }), 20, 4)

    ], [

        new LinkedFunction(0, 0.2, () => {
            document.getElementById('summary').style.transform = 'translateX(0%)';
        }),

        new LinkedFunction(2, 0, () => {
            document.getElementById('more-title').style.transform = 'translateY(0%)';
            document.getElementById('more-title').style.color = 'var(--secondary-color)';
        }),

        new LinkedFunction(2, 0.5, () => {
            pathPersonnage.start(1000);
            document.getElementById('button-read-container').style.transform = 'translateX(0%)';
        }),

        new LinkedFunction(-1, 0, () => {
            pathMainPage2.start(2000);
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), true, [pathPersonnage, pathMainPage2]);
}

const fixBorderSize = () => {
    let borders = document.getElementsByClassName('border resize');

    for(let border of borders) {
        if(border instanceof HTMLElement) {
            border.style.height = '0';

            setTimeout((border: HTMLElement) => {
                const height = border.previousElementSibling.clientHeight;
                border.style.height = height+'px';
            }, 20, border);
            
        }
    }

}

const fixMoreButtonsSize = () => {
    let buttons = document.getElementsByClassName("more-button");

    let width = 0;

    for(let button of buttons) {
        if(button instanceof HTMLElement) {
            button.style.width = 'initial';
        }
    }

    setTimeout((buttons: Element[]) => {

        for(let button of buttons) {
            if(button instanceof HTMLElement) {
                if(button.clientWidth > width)
                    width = button.clientWidth;
            }
        }
    
        for(let button of buttons) {
            if(button instanceof HTMLElement) {
                button.style.width = width+'px';
            }
        }

    }, 20, buttons)
}

window.onresize = () => {
    fixBorderSize();
    fixMoreButtonsSize();

    if(canvas instanceof HTMLCanvasElement) {
        let height = document.body.getBoundingClientRect().height;

        canvas.width = canvas.clientWidth;
        canvas.height = height;

        pathMainPage.draw();
    }
};
window.onload = () => {
    fixBorderSize();
    fixMoreButtonsSize();

    setTimeout(() => {
        pathMainPage.start(Constants.PATH_ANIMATION_TIME);
    }, 500, Constants.PATH_ANIMATION_TIME);
}

document.getElementById("button-read-container").onclick = () => {
    window.location.href = "./BD.php";
}