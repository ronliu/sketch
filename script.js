const canvas = document.querySelector('.canvas');

const pixelSize = 10;

function fillCanvas() {
    /* Get viewport width and height */
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    /* Determine width and height of canvas based on how many "pixels" fit in the viewport */
    const canvasWidth = Math.ceil(vw / pixelSize);    
    const canvasHeight = Math.ceil(vh / pixelSize);

    /* Create a grid of divs to represent "pixels" */
    for (let i = 0; i < canvasWidth * canvasHeight; i++) {
        let pixel = document.createElement('div');
        pixel.classList.add('canvas-pixel');
        pixel.style.background = 'black';

        canvas.appendChild(pixel);
        canvas.style['grid-template-columns'] = `repeat(${canvasWidth}, 1fr)`;
        canvas.style['grid-template-rows'] = `repeat(${canvasHeight}, 1fr)`;
    }

    /* Make pixels change color when moused over */
    let pixels = document.querySelectorAll('.canvas-pixel');
    pixels.forEach(pixel => {
        pixel.addEventListener('mouseover', function(e) {
            e.currentTarget.style.background = '#FFFFFF';
        });
    });
}

fillCanvas();