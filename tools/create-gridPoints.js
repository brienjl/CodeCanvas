module.exports = { createGridPoints };

function createGridPoints (num) {
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