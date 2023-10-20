import config from '../config.js';

export function compressColors(rgbArray) {

    let output = [];
    let factor = config.colorDepth;

    // Check if factor is not null, else don't round
    if (factor !== 0) {
        for (let num of rgbArray) {
            output.push(Math.ceil(num / factor) * factor);
        };
    }
    else {
        for (let num of rgbArray) {
            output.push(num);
        };
    };

    return output;
};