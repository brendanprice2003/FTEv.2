import config from '../config.js';
const log = console.log.bind(console);

export function compressColors(rgbArray) {

    let output = [];
    let target = config.colorDepth; // round to nearest <target>

    // Loop over each code and round to nearest <target>
    if (target !== 0) {

        for (let num of rgbArray) {

            let roundedCode = Math.ceil(num / target) * target;
            if (roundedCode > 255) roundedCode = 255; // Don't round past 255
            output.push(roundedCode);
        };

        return output;
    };
    
    // Else just return input parameter
    return rgbArray;
};

// This does NOT round past 255