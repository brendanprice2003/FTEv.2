import fs from 'fs';
const log = console.log.bind(console);

// @param inputString {string}  - Input string to form cyclic rotations of
// @returns {array}             - Array of cyclic rotations of inputString

// Form cyclic rotations
function getRotations(str) {

    // Init, concat str to itself
    let concatStr = str + str;
    let len = str.length;
    let rotationsArray = [];

    // Get all rotations (this is stupidly fast)
    for (let i = 0; i < len; i++) {
        rotationsArray.push(concatStr.substr(i, len));
    };

    // Sort rotationsArray
    return rotationsArray.sort();
};


// @param inputChunk {string}  - Input chunk from file stream
// @param blockSize {number}   - The size of each block for sorting
// @param sentinel {string}    - The sentinel character
// @returns {string}           - The BST encoded string

// Local function
export function bst(inputChunk, blockSize = 24, sentinel = '$') {

    let output = [];

    // Loop over input chunk
    for (let i=0; i<inputChunk.length; i+=blockSize) {

        let block;

        // Check if blockSize is set to max bit length
        if (!(blockSize >= 65536)) {

            // Get block from inputChunk
            block = inputChunk.slice(i, i+blockSize);
        }
        else block = inputChunk; // else, assign inputChunk to block

        // Add sentinel character to block
        block = block + sentinel;

        // Form (sorted) cyclic rotations of block
        let rotations = getRotations(block);
        
        // Get last char from each rotation
        let lastChars = rotations.map(str => str.substring(str.length - 1, str.length)).join('');

        // Push lastChars (last column of table)
        output.push(lastChars);
    };

    // Concatenate output together
    return output.join('');
};


// @param {string} filePath        - The path to the input file
// @param {number} blockSize       - The size of each block for sorting
// @param {string} outputFilePath  - the path to the output file

// Global function
export default async (filePath, blockSize, outputFilePath) => {

    let fileStream = fs.createReadStream(filePath, { encoding: 'utf8' });
    let encodedOutput = '';

    // Apply BST to chunk and append to encoded output
    fileStream.on('data', (chunk) => {
        encodedOutput += blockSortTransform(chunk, blockSize);
    });

    // Write encoded output to specified file
    fileStream.on('end', () => {
        fs.writeFileSync(outputFilePath, encodedOutput, 'utf8');
        log('BST encoding complete.');
    });
};