/**
 *  "colorDepth": 25   -- Minimal compression
 *  "colorDepth": 50   -- Optimal lossy compression
 *  "colorDepth": 100  -- Image is not discernible
 * 
 *  "types": png,jpeg,bmp,tiff,gif
 * 
 *  "path": <path to input image (can be relative or absolute)>
 * 
 *  "autoFormat": gets file format from input path automatically (false is default)
 */
export default {
    colorDepth: 0,
    format: 'jpeg',
    BST_blockSize: 12,
    autoFormat: false,
    path: '/Users/user/Documents/SoftwareDev/FTEv.2/img5.jpeg'
};