import rgbHex from 'rgb-hex';
const log = console.log.bind(console);

export function rgbToHex(rgbArray) {

    let output = '';

    for (let i = 0; i < rgbArray.length-4; i += 4) {
        
        let r = Number(rgbArray[i]).toString(16) || 'ff';
        let g = Number(rgbArray[i+1]).toString(16) || 'ff';
        let b = Number(rgbArray[i+2]).toString(16) || 'ff';
        output += `#${r}${g}${b}`;
    };

    return output;
};