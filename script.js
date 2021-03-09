const canvas = document.querySelector('.canvas');

const canvasWidth = 16;
const canvasHeight = 16;

function paintPixel() {

}

for (let i = 0; i < canvasWidth * canvasHeight; i++) {
    let pixel = document.createElement('div');
    pixel.classList.add('canvas-pixel');
    pixel.style.background = 'black';

    canvas.appendChild(pixel);
    canvas.style['grid-template-columns'] = `repeat(${canvasWidth}, 1fr)`;
    canvas.style['grid-template-rows'] = `repeat(${canvasHeight}, 1fr)`;
}

let pixels = document.querySelectorAll('.canvas-pixel');
pixels.forEach(pixel => {
    pixel.addEventListener('mouseover', function(e) {
        e.currentTarget.style.background = '#FFFFFF';
    });
});