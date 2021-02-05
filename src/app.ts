const fixBorderSize = () => {
    let borders = document.getElementsByClassName('border');

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

window.onload = fixBorderSize;
window.onresize = fixBorderSize;