import fs from 'fs';

import config from '../config.js';
import { rld } from '../lib/rld.js';
import ibst from '../lib/ibst.js';
import { hexToRgb } from '../helpers/hexToRgb.js';
import { pixelsToImage } from '../helpers/pixelsToImage.js';
const log = console.log.bind(console);

// Modular compress function
export default async (image, compressOutput) => {

    // Get hex dump
    let hexDump = compressOutput;

    // Run-Length decode
    hexDump = rld(hexDump);

    // Burrows-Wheel decode (iBST)
    hexDump = await ibst(hexDump);
    
    // Convert hex codes to rgb codes
    let rgbCodes = hexToRgb(hexDump);
    
    // Draw output
    pixelsToImage(`src/out/out.${config.format}`, rgbCodes, image.width, image.height);
};