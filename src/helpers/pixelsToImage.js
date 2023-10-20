import fs from 'fs';
import imageEncode from 'image-encode';
import config from '../config.js';

export function pixelsToImage(path, data, width, height) {
    fs.writeFileSync(path, Buffer.from(imageEncode(data, [width, height], `${config.format}`)));
};