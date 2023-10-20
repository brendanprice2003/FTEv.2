export function rle(str) {

    let output = '';

    // Loop over input, 7 chars a time (each block is 7 chars without reference char)
    for (let i=0; i<str.length; i+=7) {

        let count = 1;

        // If next code is same as current one, increment count, move to next
        while (i+7 < str.length && str.substring(i, i+7) === str.substring(i+7, i+14)) {
            i+=7;
            count++;
        };

        // Append code and count to output string
        output += str.substring(i, i+7) + count;
    };

    return output;
};