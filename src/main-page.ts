import { LinkedFunction, PathRenderer } from "./path-renderer.js";
import * as Constants from "./constants.js";
import { Arc, Dot, Line } from "./curve.js";
import { HTMLPoint } from "./point.js";
import { Vec2 } from "./vec2.js";
import { NumberAnimator } from "./number.js";

let canvas = document.getElementById('canvas');

let pathMainPage:PathRenderer;
let pathPersonnage:PathRenderer;
let pathMainPage2:PathRenderer;
let pathMainPage3:PathRenderer;
let pathMainPage4:PathRenderer;

let arcChapter1:PathRenderer;
let arcChapter2:PathRenderer;
let arcChapter3:PathRenderer;
let arcChapter4:PathRenderer;
let arcChapter5:PathRenderer;
let arcChapter6:PathRenderer;

let pathChapter1:PathRenderer;
let pathChapter2:PathRenderer;
let pathChapter3:PathRenderer;
let pathChapter4:PathRenderer;
let pathChapter5:PathRenderer;
let pathChapter6:PathRenderer;

let arcDA:PathRenderer;
let arcYT:PathRenderer;
let arcIG:PathRenderer;
let arcFB:PathRenderer;

let pagesNumber:NumberAnimator = new NumberAnimator(200, 2000, <HTMLElement>document.getElementById('pages').children[0]);
let doneNumber:NumberAnimator = new NumberAnimator(42, 2000, <HTMLElement>document.getElementById('done').children[0]);

const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

const firstDate = new Date(2020, 1, 10).getTime();
const secondDate = Date.now();

const diffDays = Math.round(Math.abs((secondDate - firstDate) / oneDay));

let dateNumber:NumberAnimator = new NumberAnimator(diffDays, 2000, <HTMLElement>document.getElementById('date').children[0]);

if(canvas instanceof HTMLCanvasElement) {
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    arcChapter1 = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-1')).y}
        }), Math.PI, 3*Math.PI/2, 60, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x+30, y:p.y};
        }), 1)

    ], [

        new LinkedFunction(-1, 0, () => {
            pathChapter1.start(2000);
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false);

    arcChapter2 = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-2')).y}
        }), Math.PI, 3*Math.PI/2, 60, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x+30, y:p.y};
        }), 1)

    ], [

        new LinkedFunction(-1, 0, () => {
            pathChapter2.start(2000);
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false);

    arcChapter3 = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-3')).y}
        }), Math.PI, 3*Math.PI/2, 60, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x+30, y:p.y};
        }), 1)

    ], [

        new LinkedFunction(-1, 0, () => {
            pathChapter3.start(2000);
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false);

    arcChapter4 = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-4')).y}
        }), Math.PI, 3*Math.PI/2, 60, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x+30, y:p.y};
        }), 1)

    ], [

        new LinkedFunction(-1, 0, () => {
            pathChapter4.start(2000);
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false);

    arcChapter5 = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-5')).y}
        }), Math.PI, 3*Math.PI/2, 60, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x+30, y:p.y};
        }), 1)

    ], [

        new LinkedFunction(-1, 0, () => {
            pathChapter5.start(2000);
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false);

    arcChapter6 = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-6')).y}
        }), Math.PI, 3*Math.PI/2, 60, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x+30, y:p.y};
        }), 1)

    ], [

        new LinkedFunction(-1, 0, () => {
            pathChapter6.start(2000);
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false);

    pathChapter1 = new PathRenderer(canvas, [

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-1')).y+60};
        }), new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30+0.3*canvas.clientWidth*(Constants.PAGES_DONE_CHAPTER_1/Constants.PAGES_CHAPTER_1), y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-1')).y+60};
        }), 0)

    ], [], getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color'), false, [], false)

    pathChapter2 = new PathRenderer(canvas, [

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-2')).y+60};
        }), new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30+0.3*canvas.clientWidth*(Constants.PAGES_DONE_CHAPTER_2/Constants.PAGES_CHAPTER_2), y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-2')).y+60};
        }), 0)

    ], [], getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color'), false, [], false)

    pathChapter3 = new PathRenderer(canvas, [

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-3')).y+60};
        }), new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30+0.3*canvas.clientWidth*(Constants.PAGES_DONE_CHAPTER_3/Constants.PAGES_CHAPTER_3), y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-3')).y+60};
        }), 0)

    ], [], getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color'), false, [], false)

    pathChapter4 = new PathRenderer(canvas, [

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-4')).y+60};
        }), new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30+0.3*canvas.clientWidth*(Constants.PAGES_DONE_CHAPTER_4/Constants.PAGES_CHAPTER_4), y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-4')).y+60};
        }), 0)

    ], [], getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color'), false, [], false)

    pathChapter5 = new PathRenderer(canvas, [

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-5')).y+60};
        }), new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30+0.3*canvas.clientWidth*(Constants.PAGES_DONE_CHAPTER_5/Constants.PAGES_CHAPTER_5), y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-5')).y+60};
        }), 0)

    ], [], getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color'), false, [], false)

    pathChapter6 = new PathRenderer(canvas, [

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-6')).y+60};
        }), new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+60+30+0.3*canvas.clientWidth*(Constants.PAGES_DONE_CHAPTER_6/Constants.PAGES_CHAPTER_6), y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-6')).y+60};
        }), 0)

    ], [], getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color'), false, [], false)






    arcDA = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.95*canvas.clientWidth-50, y:HTMLPoint.getHTMLPosition(document.getElementById('img-deviant-art')).y+document.getElementById('img-deviant-art').getBoundingClientRect().height/2-50}
        }), 0, -Math.PI/2, 50, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), new HTMLPoint((p:Vec2) => {
            return {x:HTMLPoint.getHTMLPosition(document.getElementById('deviant-art')).x+130, y:p.y}
        }), 1),

        new Dot(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), 20, 2)

    ], [

        new LinkedFunction(-1, 0, () => {
            document.styleSheets[1].addRule('#img-deviant-art', 'transform: rotate(0) scale(1)');
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false)

    arcIG = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.95*canvas.clientWidth-50, y:HTMLPoint.getHTMLPosition(document.getElementById('img-instagram')).y+document.getElementById('img-instagram').getBoundingClientRect().height/2-50}
        }), 0, -Math.PI/2, 50, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), new HTMLPoint((p:Vec2) => {
            return {x:HTMLPoint.getHTMLPosition(document.getElementById('instagram')).x+130, y:p.y}
        }), 1),

        new Dot(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), 20, 2)

    ], [

        new LinkedFunction(-1, 0, () => {
            document.styleSheets[1].addRule('#img-instagram', 'transform: rotate(0) scale(1)');
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false)

    arcYT = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.95*canvas.clientWidth-50, y:HTMLPoint.getHTMLPosition(document.getElementById('img-youtube')).y+document.getElementById('img-youtube').getBoundingClientRect().height/2-50}
        }), 0, -Math.PI/2, 50, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), new HTMLPoint((p:Vec2) => {
            return {x:HTMLPoint.getHTMLPosition(document.getElementById('youtube')).x+130, y:p.y}
        }), 1),

        new Dot(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), 20, 2)

    ], [

        new LinkedFunction(-1, 0, () => {
            document.styleSheets[1].addRule('#img-youtube', 'transform: rotate(0) scale(1)');
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false)

    arcFB = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.95*canvas.clientWidth-50, y:HTMLPoint.getHTMLPosition(document.getElementById('img-facebook')).y+document.getElementById('img-facebook').getBoundingClientRect().height/2-50}
        }), 0, -Math.PI/2, 50, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), new HTMLPoint((p:Vec2) => {
            return {x:HTMLPoint.getHTMLPosition(document.getElementById('facebook')).x+130, y:p.y}
        }), 1),

        new Dot(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), 20, 2)

    ], [

        new LinkedFunction(-1, 0, () => {
            document.styleSheets[1].addRule('#img-facebook', 'transform: rotate(0) scale(1)');
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false)








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

            document.styleSheets[1].addRule('.more-button', 'background-color: var(--tertiary-color)')

        }),

        new LinkedFunction(1, 0, () => {

            document.styleSheets[1].addRule('.more-button', 'color: var(--secondary-color)')

        }),

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, []);








    pathMainPage4 = new PathRenderer(canvas, [

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth+100, y:HTMLPoint.getHTMLPosition(document.getElementById('pages')).y+document.getElementById('pages').getBoundingClientRect().height/2+100};
        }), Math.PI, 3*Math.PI/2, 100, 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:0.95*canvas.clientWidth-100, y:p.y}
        }), 1),

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y+100}
        }), Math.PI/2, 0, 100, 2),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:HTMLPoint.getHTMLPosition(document.getElementById('deviant-art')).y-10}
        }), 3),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:HTMLPoint.getHTMLPosition(document.getElementById('youtube')).y-10}
        }), 4),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:HTMLPoint.getHTMLPosition(document.getElementById('instagram')).y-10}
        }), 5),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y}
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:HTMLPoint.getHTMLPosition(document.getElementById('facebook')).y-10}
        }), 6),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:HTMLPoint.getHTMLPosition(document.getElementById('github-title')).y-150}
        }), 7),

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:p.x-100, y:p.y};
        }), 0, -Math.PI/2, 100, 8),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:canvas.clientWidth/2, y:p.y};
        }), 9),

        new Dot(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), 20, 10)

    ], [

        new LinkedFunction(1, 0.5, () => {

            document.styleSheets[1].addRule('#follow-title', 'transform: translateX(0); color: var(--secondary--color)');

        }),

        new LinkedFunction(4, 0, () => {

            arcDA.start(500);

        }),

        new LinkedFunction(5, 0, () => {

            arcYT.start(500);

        }),

        new LinkedFunction(6, 0, () => {

            arcIG.start(500);

        }),

        new LinkedFunction(7, 0, () => {

            arcFB.start(500);

        }),

        new LinkedFunction(-1, 0, () => {

            document.getElementById("github-title").style.color = "var(--tertiary-color)";
            document.getElementById("github-button").style.color = "var(--secondary-color)";
            document.styleSheets[1].addRule('#github-button', 'background-color: var(--tertiary-color);');

        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], false)

    pathMainPage3 = new PathRenderer(canvas, [

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth, y:HTMLPoint.getHTMLPosition(document.getElementById('pages')).y+document.getElementById('pages').getBoundingClientRect().height/2+100};
        }), new HTMLPoint((p:Vec2) => {
            return {x:0.05*canvas.clientWidth, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-1')).y};
        }), 0),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-2')).y};
        }), 1),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-3')).y};
        }), 2),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-4')).y};
        }), 3),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-5')).y};
        }), 4),

        new Line(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:HTMLPoint.getHTMLPosition(document.getElementById('chapter-6')).y};
        }), 5)

    ], [

        new LinkedFunction(0, 0, () => {
            document.styleSheets[1].addRule('#avancement-title', 'transform: translateX(0); color: var(--secondary--color)');
            pathMainPage4.start(5000);
        }),

        new LinkedFunction(1, 0, () => {
            arcChapter1.start(500);
            document.styleSheets[1].addRule('#chapter-1', 'transform: translateX(0); color: var(--secondary--color)');
        }),

        new LinkedFunction(2, 0, () => {
            arcChapter2.start(500);
            document.styleSheets[1].addRule('#chapter-2', 'transform: translateX(0); color: var(--secondary--color)');
        }),

        new LinkedFunction(3, 0, () => {
            arcChapter3.start(500);
            document.styleSheets[1].addRule('#chapter-3', 'transform: translateX(0); color: var(--secondary--color)');
        }),

        new LinkedFunction(4, 0, () => {
            arcChapter4.start(500);
            document.styleSheets[1].addRule('#chapter-4', 'transform: translateX(0); color: var(--secondary--color)');
        }),

        new LinkedFunction(5, 0, () => {
            arcChapter5.start(500);
            document.styleSheets[1].addRule('#chapter-5', 'transform: translateX(0); color: var(--secondary--color)');
        }),

        new LinkedFunction(-1, 0, () => {
            arcChapter6.start(500);
            document.styleSheets[1].addRule('#chapter-6', 'transform: translateX(0); color: var(--secondary--color)');
        }),

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], true);

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
        }), 2),

        new Arc(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y+100};
        }), Math.PI/2, Math.PI, 100, 3),

        new Dot(new HTMLPoint((p:Vec2) => {
            return {x:p.x, y:p.y};
        }), 20, 4)
    ], [
        new LinkedFunction(0, 0, () => {
            document.styleSheets[1].addRule('#stats-title', 'transform: translateY(0); color: var(--secondary--color)');
        }),

        new LinkedFunction(2, 0.25, () => {
            document.styleSheets[1].addRule('#done', 'transform: scaleY(1)');
            doneNumber.start();
        }),

        new LinkedFunction(2, 0.5, () => {
            document.styleSheets[1].addRule('#date', 'transform: scaleY(1)');
            dateNumber.start();
        }),

        new LinkedFunction(2, 0.75, () => {
            document.styleSheets[1].addRule('#pages', 'transform: scaleY(1)');
            pagesNumber.start();
        }),

        new LinkedFunction(-1, 0, () => {
            pathMainPage3.start(2000);
        })

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), false, [], true);

    pathMainPage = new PathRenderer(canvas, [

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

    ], getComputedStyle(document.documentElement).getPropertyValue('--secondary-color'), true, [
        pathPersonnage,
        pathMainPage2,
        pathMainPage3,
        arcChapter1,
        arcChapter2,
        arcChapter3,
        arcChapter4,
        arcChapter5,
        arcChapter6,
        pathChapter1,
        pathChapter2,
        pathChapter3,
        pathChapter4,
        pathChapter5,
        pathChapter6,
        pathMainPage4,
        arcDA,
        arcYT,
        arcIG,
        arcFB,
    ]);
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

window.onresize = () => {
    fixBorderSize();

    if(canvas instanceof HTMLCanvasElement) {
        let height = document.body.getBoundingClientRect().height;

        canvas.width = canvas.clientWidth;
        canvas.height = height;

        pathMainPage.draw();
    }
};

window.onload = () => {
    fixBorderSize();

    setTimeout(() => {
        pathMainPage.start(Constants.PATH_ANIMATION_TIME);
    }, 500, Constants.PATH_ANIMATION_TIME);
}

document.getElementById("button-read-container").onclick = () => {
    window.location.href = "./BD.php";
}

document.getElementById("github-button").onclick = () => {

    window.open('https://github.com/Mathiouza/SunLife', '_blank');

}