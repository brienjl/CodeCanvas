const canvasSketch = require('canvas-sketch');

const settings = {
    dimensions: [2048, 2048]
};

const sketch = () => {

    const createGrid = (num) => {
        const count = num;
        const points = [];
        for (let x = 0; x < count; x++ ){
            for (let y = 0; y < count; y++ ){
                const u = x / (count - 1);
                const v = y / (count - 1);
                points.push([u,v]);
            }
        }
        return points;
    };

    const points = createGrid(15);

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