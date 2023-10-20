import fs from 'fs';

import config from './config.js';
import setup from './process/setup.js';
import compress from './process/compress.js';
import decompress from './process/decompress.js';
import { imageToPixels } from './helpers/imageToPixels.js';

// main
const main = function () {

    // Configurations
    setup();

    // Get image pixels, height, and width
    let image = imageToPixels(`${config.path}`);

    // Write raw pixels to file
    fs.writeFileSync('src/out/raw.txt', image.data);

    // Compress image (stores md)
    compress(image.data);

    // Decompress image
    decompress(image);
};
main();