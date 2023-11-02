
import fs from 'fs';
import bst from './lib/bst.js';
import ibst from './lib/ibst.js';


// Testing area
const log = console.log.bind(console);



// ..
let inputFilePath = '/Users/user/Documents/SoftwareDev/FTEv.2/src/out/hex.out.txt';
let encodedOutputFilePath = '/Users/user/Documents/SoftwareDev/FTEv.2/src/out/devout/bst.out.txt';
let decodedOutputFilePath = '/Users/user/Documents/SoftwareDev/FTEv.2/src/out/devout/ibst.out.txt';
let blockSize = 24; // Max - 65536, Min - 7

// Check integer value limit
if (blockSize >= 65536) {
    blockSize = 65536;
};

// bst(inputFilePath, blockSize, encodedOutputFilePath);
ibst(encodedOutputFilePath, blockSize, decodedOutputFilePath);


// // BST emulation
// // init
// let input;
// let output;
// input = 'brendan price is the best person on the planet, he is 20 years old!';
// output = [];
// let blockSize = 12;

// // loop over input to get blocks
// for (let i=0; i<input.length; i+=blockSize) {
//     let block = input.slice(i, i+blockSize);
//     let sortedBlock = block.split('').sort().join('');
//     output.push(sortedBlock);
// };
// output = output.join('');
// log(output);


// // IBST emulation
// // init
// input = output;
// output = [];

// // loop over input to get blocks
// for (let i=0; i<input.length; i+=blockSize) {
//     let block = input.slice(i, i+blockSize);
//     let reverseBlock = block.split('').reverse().sort().join('');
//     output.push(reverseBlock);
// };
// output.join('');
// log(output);
