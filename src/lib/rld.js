// export function rld(str) {

//     let output = '';

//     // Split the string into an array of hex codes and counts
//     let codes = str.split('#').filter(Boolean);

//     // Loop over each code
//     for (let i=0; i<codes.length; i++) {

//         // Get the hex color code and the count
//         let hexCode = codes[i].substring(0, 6);
//         let count = Number(codes[i].substring(6));

//         // Repeat the hex color code 'count' number of times
//         while (count-- > 0) {
//             output += '#' + hexCode;
//         };
//     };

//     return output;
// };

export function rld(str) {

    let output = '';

    let chunks = str.split('.');
    let dict = chunks.map(v => v.split('^'));

    for (let i=0; i<dict.length; i++) {

        let char = dict[i][0];
        let count = dict[i][1];

        if (dict[i][0]) {
            
            while (count-- > 0) {
                output += char;
            };
        };
    };

    return output;
};