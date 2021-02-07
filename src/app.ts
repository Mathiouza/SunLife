import { LinkedFunction, PathRenderer } from "./path-renderer";
import * as Constants from "./constants";
import { Arc, Dot, Line } from "./curve";
import { HTMLPoint } from "./point";
import { Vec2 } from "./vec2";

let canvas = document.getElementById('canvas');

let pathMainPage:PathRenderer;
let pathPersonnage:PathRenderer;

if(canvas instanceof HTMLCanvasElement) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    pathPersonnage = new PathRenderer(canvas, [

        new Line(new HTMLPoint((p:Vec2) => {

            return {x:0.5*canvas.clientWidth, y:HTMLPoint.getHTMLPosition(document.getElementById('more-container')).y+120};

        }), new HTMLPoint((p:Vec2) => {

            return {x:0.5*canvas.clientWidth, y:HTMLPoint.getHTMLPosition(document.getElementById('more-container')).y+120+90};

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

        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, []);

    pathMainPage = new PathRenderer(canvas,
    [

        new Line(new HTMLPoint((previousPoint:Vec2) => {

            return {x:0.05*canvas.clientWidth, y:300};

        }), new HTMLPoint((previousPoint:Vec2) => {

            return {x:0.05*canvas.clientWidth, y: HTMLPoint.getHTMLPosition(document.getElementById('more-container')).y };

        }), 0),

        new Arc(new HTMLPoint( (previousPoint:Vec2) => {
            return {x:previousPoint.x+120, y:previousPoint.y};
        }), Math.PI, 3*Math.PI/2, 120, 1),

        new Line(new HTMLPoint((previousPoint:Vec2) => {
            return {x:previousPoint.x, y:previousPoint.y};
        }), new HTMLPoint((previousPoint:Vec2) => {
            return {x:0.95*canvas.clientWidth-120, y:previousPoint.y};
        }), 2),

        new Arc(new HTMLPoint( (p:Vec2) => {
            return {x:p.x, y:p.y+120};
        }), Math.PI/2, 0, 120, 3)

    ], [

        new LinkedFunction(0, 0.2, () => {
            document.getElementById('summary').style.transform = 'translateX(0%)';
        }),

        new LinkedFunction(2, 0, () => {
            document.getElementById('more-title').style.transform = 'translateY(0%)';
            document.getElementById('more-title').style.color = 'var(--secondary-color)';
        }),

        new LinkedFunction(2, 0.5, () => {
            document.getElementById('button-read-container').style.transform = 'translateX(0%)';
            pathPersonnage.start(1000);
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), true, [pathPersonnage]);
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