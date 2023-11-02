export function bwt(s) {

    s = s + "$";
    let suffixes = [];
    for (let i = 0; i < s.length; i++) {
        suffixes.push({index: i, suffix: s.slice(i)});
    };
    suffixes.sort((a, b) => a.suffix < b.suffix ? -1 : (a.suffix > b.suffix ? 1 : 0));
    return suffixes.map(({index}) => s[(index - 1 + s.length) % s.length]).join("");
};