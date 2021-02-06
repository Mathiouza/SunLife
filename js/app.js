import { PathRenderer } from "./path-renderer";
import * as Constants from "./constants";
let canvas = document.getElementById('canvas');
let pathMainPage;
if (canvas instanceof HTMLCanvasElement) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;
    pathMainPage = new PathRenderer(canvas);
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
let time = Date.now();
let startTime = Date.now();
const drawPath = () => {
    time = Date.now();
    pathMainPage.draw(Math.pow((time - startTime) / Constants.PATH_ANIMATION_TIME, 1 / 2));
    if (time < startTime + Constants.PATH_ANIMATION_TIME)
        setTimeout(drawPath, 5);
};
window.onresize = () => {
    fixBorderSize();
    fixMoreButtonsSize();
    if (canvas instanceof HTMLCanvasElement) {
        let body = document.body;
        let html = document.documentElement;
        let height = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        canvas.width = canvas.clientWidth;
        canvas.height = height;
        pathMainPage.draw(1);
    }
};
window.onload = () => {
    fixBorderSize();
    fixMoreButtonsSize();
    setTimeout(() => {
        time = Date.now();
        startTime = Date.now();
        drawPath();
    }, 500);
};
document.getElementById("button-read-container").onclick = () => {
    window.location.href = "./BD.php";
};
