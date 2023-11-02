import fs from 'fs';

import { compressColors } from '../helpers/compressColors.js';
import { rgbToHex } from '../helpers/rgbToHex.js';
import { rle } from '../lib/rle.js';
import bst from '../lib/bst.js';
const log = console.log.bind(console);

// Modular compress function
export default async (rawRgb) => {

    let rgbPixels = rawRgb;
    let hexDump = '';

    // Compress color depth (Lossy & non-reversable)
    rgbPixels = compressColors(rawRgb);
    
    // Convert to rgb codes to hex codes
    hexDump = await rgbToHex(rgbPixels);

    // Burrows-Wheeler (BST) encode the hex dump
    hexDump = bst(hexDump);

    // Run-Length encode the hex dump
    hexDump = rle(hexDump);

    return hexDump;
};