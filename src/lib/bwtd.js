export function bwtd(s) {

    let T = Array(s.length);
    let counts = new Map();
    for (let i = 0; i < s.length; i++) {
        counts.set(s[i], (counts.get(s[i]) || 0) + 1);
    }
    let sorted = Array.from(counts.keys()).sort();
    let sums = new Map();
    let total = 0;
    for (let char of sorted) {
        sums.set(char, total);
        total += counts.get(char);
    }
    for (let i = 0; i < s.length; i++) {
        T[sums.get(s[i])] = i;
        sums.set(s[i], sums.get(s[i]) + 1);
    }
    let result = [];
    let r = T[0];
    for (let i = 0; i < s.length - 1; i++) {
        result.push(s[r]);
        r = T[r];
    }
    return result.join("");
};