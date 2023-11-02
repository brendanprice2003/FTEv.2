const log = console.log.bind(console);

export function hexToRgb(hexString) {

    let rgbArray = [];

    // Remove any '#' characters from the input string
    log(hexString);
    let cleanedHexString = hexString.replace(/#/g, '');

    // Iterate through the cleaned hex string in steps of 6 (to handle RGBA)
    for (let i = 0; i < cleanedHexString.length; i += 6) {

        let hexCode = cleanedHexString.substr(i, 6);

        // Parse the hex code into separate R, G, and B components
        let r = parseInt(hexCode.substr(0, 2), 16);
        let g = parseInt(hexCode.substr(2, 2), 16);
        let b = parseInt(hexCode.substr(4, 2), 16);

        // Push R, G, B, and A values into the result array
        rgbArray.push(r, g, b, 255); // Assuming alpha is 255 (fully opaque)
    };

    return rgbArray;
};