import fs from 'fs';

import {compressColors} from '../helpers/compressColors.js';
import {rgbToHex} from '../helpers/rgbToHex.js';
import config from '../config.js';
import {bst} from '../lib/bst.js';
import {rle} from '../lib/rle.js';
const log = console.log.bind(console);

// Compress function
async function compress () {

    return new Promise((resolve, reject) => {

        // Create read/write stream
        let readStream  = fs.createReadStream('src/out/mainout/convert.out.txt', {encoding: 'utf8'});
        let writeStream = fs.createWriteStream('src/out/mainout/compress.out.txt', {encoding: 'utf8'});

        // Compress each chunk
        readStream.on('data', async (chunk) => {

            // ..
            // log(chunk);

            // Compression sequence 
            let rgbPixels = compressColors(chunk); // Compress colors
            let dump = rgbToHex(rgbPixels.split(',')); // Convert rgb codes to hex
            let bstDump = bst(dump, config.BST_blockSize); // Transform using BST
            let rleDump = rle(bstDump); // Compress using RLE

            // Write chunk to file
            writeStream.write(bstDump);
            
            // NOTE: Implement manual garbage collection
            //       after a variable is not being used anymore
        });

        // Handling
        readStream.on('end', (e) => { resolve(e) });
        readStream.on('error', (e) => { reject(e) });

    });
};
compress();