import fs from 'fs';

import config from './config.js';
// import compress from './process/compress.js';
import decompress from './process/decompress.js';
import { imageToPixels } from './helpers/imageToPixels.js';
const log = console.log.bind(console);

// Main entry point
const main = async function () {

    // Get image pixels, height, and width
    let imageData = imageToPixels(`${config.path}`);
    fs.writeFileSync('src/out/devout/main.out.txt', imageData); // Write file

    // Compress file in chunks
    

    // // Compress image
    // let compressOutput = await compress(image.data);

    // // Decompress image
    // decompress(image, compressOutput);
};
main()

// Notes:

// Remove blockSize functionality from BST function
// Fix compress function not working and logging *something* to console
// Change the compress/decompress sequence to use FS, instead of memory