const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math');
const { createGridPoints } = require('../../../tools/create-gridPoints');

const settings = {
    dimensions: [ 2048, 2048 ]
};

const sketch = () => {

//variable control
const padding = .075;
const fsColor = 'white';
const numPoints = 25;
const strokeStyleColor = 'black'
const strokeSize = 20;
const strokeFullness = 0;
const lineWidthWeight = 10;

const points = createGridPoints(numPoints);

return ({ context, width, height }) => {
    const margin = width * padding;

    context.fillStyle = fsColor;
    context.fillRect(0, 0, width, height);

    points.forEach(([ u, v ]) => {
    const x = lerp(margin, width - margin, u);
    const y = lerp(margin, height - margin, v);

    context.beginPath();
    context.arc(x, y, strokeSize, strokeFullness, Math.PI * 2);
    context.strokeStyle = strokeStyleColor;
    context.lineWidth = lineWidthWeight;
    context.stroke();
    });
};
};

canvasSketch(sketch, settings);