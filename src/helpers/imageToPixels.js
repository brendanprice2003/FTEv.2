import fs from 'fs';
import imageDecode from 'image-decode';

export function imageToPixels(path) {
    let {data, width, height} = imageDecode(fs.readFileSync(path));
    return {data, width, height};
};