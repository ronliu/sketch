const canvas = document.querySelector('.canvas');

/* Get viewport width and height */
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

console.log(vw);
console.log(vh);

/* Set number of pixels based on size of viewport */
const pixelSize = 10;
const canvasWidth = Math.ceil(vw / pixelSize);    
const canvasHeight = Math.ceil(vh / pixelSize);

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