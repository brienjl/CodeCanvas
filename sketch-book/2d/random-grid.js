const canvasSketch = require('canvas-sketch');
const { createGridPoints } = require('../../tools/create-gridPoints')
const { lerp } = require('canvas-sketch-util/math');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = ({ width, height }) => {
  const count = 50;
  const margin = width * 0.15;
  const padding = 20;
  const tileSize = (width - margin * 2) / count - padding;


  // Get N% of full grid
  const points = createGridPoints(count).filter(() => Math.random() > 0.5);

  return ({ context, width, height }) => {
    context.fillStyle = '#cc8080';
    context.fillRect(0, 0, width, height);

    points.forEach(([ u, v ]) => {
      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      context.beginPath();
      context.arc(x, y, tileSize * 1, 0, Math.PI * 2);
      context.fillStyle = '#fff';
      context.fill();
    });
  };
};

canvasSketch(sketch, settings);