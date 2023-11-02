import fs from 'fs';

import config from '../config.js';
import {rld} from '../lib/rld.js';
import ibst from '../lib/ibst.js';
import {hexToRgb} from '../helpers/hexToRgb.js';
const log = console.log.bind(console);

// Decompress function
async function decompress() {

    return new Promise((resolve, reject) => {

        // Create read/write stream
        let readStream = fs.createReadStream('src/out/mainout/compress.out.txt', {encoding: 'utf8'});
        let writeStream = fs.createWriteStream('src/out/mainout/decompress.out.txt', {encoding: 'utf8'});

        // Compress each chunk
        readStream.on('data', async (chunk) => {

            // ..
            // log(chunk);

            // Decompression sequence
            let dump = rld(chunk);

            // Write dump to file
            fs.writeFileSync('src/out/mainout/rld.decompress.out.txt', dump, {encoding: 'utf8'});

            // Decode using ibst sequence
            // (standalone for memory reasons)
            ibst(dump);

        });

        // Handling
        readStream.on('end', (e) => { resolve(e) });
        readStream.on('error', (e) => { reject(e) });

    });
};
decompress();