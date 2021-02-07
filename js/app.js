import { LinkedFunction, PathRenderer } from "./path-renderer";
import * as Constants from "./constants";
import { Arc, Dot, Line } from "./curve";
import { HTMLPoint } from "./point";
let canvas = document.getElementById('canvas');
let pathMainPage;
let pathPersonnage;
if (canvas instanceof HTMLCanvasElement) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    pathPersonnage = new PathRenderer(canvas, [
        new Line(new HTMLPoint((p) => {
            return { x: 0.5 * canvas.clientWidth, y: HTMLPoint.getHTMLPosition(document.getElementById('more-container')).y + 100 };
        }), new HTMLPoint((p) => {
            return { x: 0.5 * canvas.clientWidth, y: HTMLPoint.getHTMLPosition(document.getElementById('persos')).y + document.getElementById('persos').getBoundingClientRect().height / 2 };
        }), 0),
        new Dot(new HTMLPoint((p) => {
            return { x: p.x, y: p.y };
        }), 20, 1)
    ], [
        new LinkedFunction(0, 0, () => {
            document.styleSheets[0].addRule('.more-button', 'background-color: var(--tertiary-color)');
        }),
        new LinkedFunction(1, 0, () => {
            document.styleSheets[0].addRule('.more-button', 'color: var(--secondary-color)');
        }),
    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, []);
    pathMainPage = new PathRenderer(canvas, [
        new Line(new HTMLPoint((previousPoint) => {
            return { x: 0.05 * canvas.clientWidth, y: 300 };
        }), new HTMLPoint((previousPoint) => {
            return { x: 0.05 * canvas.clientWidth, y: HTMLPoint.getHTMLPosition(document.getElementById('more-container')).y };
        }), 0),
        new Arc(new HTMLPoint((previousPoint) => {
            return { x: previousPoint.x + 100, y: previousPoint.y };
        }), Math.PI, 3 * Math.PI / 2, 100, 1),
        new Line(new HTMLPoint((previousPoint) => {
            return { x: previousPoint.x, y: previousPoint.y };
        }), new HTMLPoint((previousPoint) => {
            return { x: 0.95 * canvas.clientWidth - 100, y: previousPoint.y };
        }), 2),
        new Arc(new HTMLPoint((p) => {
            return { x: p.x, y: p.y + 100 };
        }), Math.PI / 2, 0, 100, 3)
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
    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), true, [pathPersonnage]);
}
const fixBorderSize = () => {
    let borders = document.getElementsByClassName('border resize');
    for (let border of borders) {
        if (border instanceof HTMLElement) {
            border.style.height = '0';
            setTimeout((border) => {
                const height = border.previousElementSibling.clientHeight;
                border.style.height = height + 'px';
            }, 20, border);
        }
    }
};
const fixMoreButtonsSize = () => {
    let buttons = document.getElementsByClassName("more-button");
    let width = 0;
    for (let button of buttons) {
        if (button instanceof HTMLElement) {
            button.style.width = 'initial';
        }
    }
    setTimeout((buttons) => {
        for (let button of buttons) {
            if (button instanceof HTMLElement) {
                if (button.clientWidth > width)
                    width = button.clientWidth;
            }
        }
        for (let button of buttons) {
            if (button instanceof HTMLElement) {
                button.style.width = width + 'px';
            }
        }
    }, 20, buttons);
};
window.onresize = () => {
    fixBorderSize();
    fixMoreButtonsSize();
    if (canvas instanceof HTMLCanvasElement) {
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
};
document.getElementById("button-read-container").onclick = () => {
    window.location.href = "./BD.php";
};
