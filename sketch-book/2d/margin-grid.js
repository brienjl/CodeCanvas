const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math');
const { createGridPoints } = require('../../tools/create-gridPoints');

const settings = {
    dimensions: [ 2048, 2048 ]
};

const sketch = () => {

const points = createGridPoints(5);

return ({ context, width, height }) => {
    const margin = width * 0.075;

    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    points.forEach(([ u, v ]) => {
    const x = lerp(margin, width - margin, u);
    const y = lerp(margin, height - margin, v);

    context.beginPath();
    context.arc(x, y, 40, 0, Math.PI * 2);
    context.strokeStyle = 'black';
    context.lineWidth = 20;
    context.stroke();
    });
};
};

canvasSketch(sketch, settings);