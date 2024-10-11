const canvasSketch = require('canvas-sketch');
const { createGrid, createGridPoints } = require('../../../tools/create-gridPoints')

const settings = {
    dimensions: [2048, 2048]
};

const sketch = () => {

    const points = createGridPoints(10);

    return ({ context, width, height }) => {
        context.fillStyle = 'white';
        context.fillRect(0, 0, width, height);

        points.forEach(([u,v]) => {
            
            const x = u * width;
            const y = v * height;

            context.beginPath();
            context.arc(x,y,24,0,Math.PI * 2);
            context.fillStyle = 'red';
            context.fill();
        });
    };
};

canvasSketch(sketch, settings);