export function rgbToHex(rgbArray) {

    let hexString = '';

    // One-liner that I found somewhere; turns rgb array into hex
    for (let i=0; i < rgbArray.length; i += 4) {
        hexString += `#${((1 << 24) | (rgbArray[i] << 16) | (rgbArray[i + 1] << 8) | rgbArray[i + 2]).toString(16).slice(1)}`;
    };

    return hexString;
};