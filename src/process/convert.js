import fs from 'fs';

import config from '../config.js';
import { imageToPixels } from '../helpers/imageToPixels.js';
const log = console.log.bind(console);

// Main entry point
const main = async function () {

    // Get image pixels rgb array, height, width
    let dat = imageToPixels(`${config.path}`);
    log(dat);
    
    // Write newObj to file
    fs.writeFileSync('src/out/mainout/convert.out.txt', dat.data.toString(), {encoding: 'utf8'});

};
main();