import fs from 'fs';

import { compressColors } from '../helpers/compressColors.js';
import { rgbToHex } from '../helpers/rgbToHex.js';
import { rle } from '../lib/rle.js';
import { bwt } from '../lib/bwt.js';
import { bwtd } from '../lib/bwtd.js';

// Modular compress function
export default (rawRgb) => {

    // Compress color depth (Lossy & non-reversable)
    let rgbPixels = compressColors(rawRgb);
    
    // Convert to rgb codes to hex codes
    let hexDump = rgbToHex(rgbPixels);
    fs.writeFileSync('src/out/raw.txt', hexDump);

    // Burrows-Wheeler encode the hex dump
    // hexDump = bwt(hexDump);

    // Run-Length encode the hex dump
    hexDump = rle(hexDump);

    // Write dump to rle.out.txt
    fs.writeFileSync('src/out/rle.out.txt', hexDump);
};