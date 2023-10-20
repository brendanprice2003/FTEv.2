export function rld(str) {

    let output = '';

    // Split the string into an array of hex codes and counts
    let codes = str.split('#').filter(Boolean);

    // Loop over each code
    for (let i=0; i<codes.length; i++) {

        // Get the hex color code and the count
        let hexCode = codes[i].substring(0, 6);
        let count = Number(codes[i].substring(6));

        // Repeat the hex color code 'count' number of times
        while (count-- > 0) {
            output += '#' + hexCode;
        };
    };

    return output;
};