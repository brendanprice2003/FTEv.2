import fs from 'fs';

import config from '../config.js';
import { rld } from '../lib/rld.js';
import { hexToRgb } from '../helpers/hexToRgb.js';
import { pixelsToImage } from '../helpers/pixelsToImage.js';

// Modular compress function
export default (image) => {

    // Get hex dump
    let hexDump = fs.readFileSync('src/out/rle.out.txt').toString();

    // Run-Length decode
    hexDump = rld(hexDump);

    // Burrows-Wheel decode
    // hexDump = bwtd(hexDump);
    
    // Convert hex codes to rgb codes
    let rgbCodes = hexToRgb(hexDump);
    
    // Draw dev output
    pixelsToImage(`src/out/out.${config.format}`, rgbCodes, image.width, image.height);

};