// export function bwtd(s) {

//     let T = new Array(s.length);
//     let counts = new Map();

//     for (let i = 0; i < s.length; i++) {
//         counts.set(s[i], (counts.get(s[i]) || 0) + 1);
//     };


//     let sorted = Array.from(counts.keys()).sort();
//     let sums = new Map();
//     let total = 0;

//     for (let char of sorted) {
//         sums.set(char, total);
//         total += counts.get(char);
//     };
//     for (let i = 0; i < s.length; i++) {
//         T[sums.get(s[i])] = i;
//         sums.set(s[i], sums.get(s[i]) + 1);
//     };

//     let result = [];
//     let r = T[0];

//     for (let i = 0; i < s.length - 1; i++) {
//         result.push(s[r]);
//         r = T[r];
//     };

//     return result.join('');
// };

// export function bwtd(input) {

//     const len = input.length;
//     const indices = new Array(len);

//     // Find the positions of the '$' character in the sorted BWT
//     const sortedIndices = [];
//     for (let i = 0; i < len; i++) {
//         if (input[i] === '$') {
//             sortedIndices.push(i);
//         }
//     }

//     // Find the original index of the BWT transformation
//     let originalIndex = sortedIndices[0];
//     for (let i = 1; i < len; i++) {
//         originalIndex = sortedIndices[originalIndex];
//         indices.unshift(originalIndex);
//     }

//     // Reconstruct the original string
//     let originalString = '';
//     for (let i = 0; i < len; i++) {
//         originalString += input[indices[i]];
//     }

//     return originalString;
// };

const log = console.log.bind(console);
export function bwtd(str) {

    str = 'nd$nraeb'; // dev
    str = str.split('$');
    str = str[0] + str[1];
    log(str);

    
};