import fs from 'fs';
const log = console.log.bind(console);

// @param inputChunk {string} - Input chunk from file stream
// @param blockSize (deprecated) {number} - The size of each block for sorting
// @return {string} - The iBST decoded string

// Local function
export async function inverseBlockSortTransform(inputChunk, sentinel) {

    let output = '';
    let currentIndex = 0; // Index that the prev step points to
    sentinel = sentinel || '$';

    // Get first column and last column
    let L = inputChunk;
    let F = inputChunk.split('').sort().join('');
  
    // Use do while to ignore first loop checking for sentinel
    do {

        // Count the occurrences of the current character in F
        let occurrences = 0;
        for (let i=0; i <= currentIndex; i++) {
            if (F[i] === F[currentIndex]) {
                occurrences++;
            };
        };

        // Find the index of the character in L using its occurrences
        let targetIndex = 0; // I have no clue why this has to be -1
        for (let i = 0; i < L.length; i++) {
            if (L[i] === F[currentIndex]) {
                occurrences--;
                if (occurrences === 0) {
                    targetIndex = i;
                    break;
                };
            };
        };
  
        // Append the character from L to the output
        output += L[targetIndex];
        log(output);

        // Update the current index for the next iteration
        currentIndex = targetIndex;

    } while (F[currentIndex] !== sentinel);

    // Just clear these anyways
    L = '';
    F = '';

    // Remove sentinel character from string and return
    return output.split('$')[1];
    return '';
};


// @param {string} filePath        - The path to the BST encoded file
// @param {nmuber} blockSize       - The size of each block for sorting
// @param {string} outputFilePath  - The path to the output file
export default (filePath, blockSize, outputFilePath) => {

    filePath = 'src/out/mainout/rld.decompress.out.txt';
    outputFilePath = 'src/out/mainout/ibst.decompress.out.txt';
    let fileStream = fs.createReadStream(filePath, { encoding: 'utf8' });
    let decodedOutput = '';

    // Apply IBST to chunk and append to decoded output
    fileStream.on('data', async (chunk) => {
        decodedOutput += await inverseBlockSortTransform(chunk);
    });

    // Write decoded output to specified file
    fileStream.on('end', () => {
        fs.writeFileSync(outputFilePath, decodedOutput, 'utf8');
        log('iBST decoding complete.');
    });
};