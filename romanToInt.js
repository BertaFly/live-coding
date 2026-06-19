/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const dic = {
        I: 1,
        V: 5,
        IX: 9,
        X: 10,
        XL: 40,
        L: 50,
        XC: 90,
        C: 100,
        CD: 400,
        D: 500,
        CM: 900,
        M: 1000
    }
    const romNums = s.split('');
    let res = 0;
    for (let i = 0; i < romNums.length; i++) {
        if ((romNums[i] === 'I' && (romNums[i + 1] === 'V' || romNums[i + 1] === 'X')) || (romNums[i] === 'X' && (romNums[i + 1] === 'L' || romNums[i + 1] === 'C')) || (romNums[i] === 'C' && (romNums[i + 1] === 'D' || romNums[i + 1] === 'M'))) {
            res = res + (dic[romNums[i + 1]] - dic[romNums[i]]);
            i++;
        } else {
            res = res + dic[romNums[i]];
        }
    }
    return res;
};

console.log(romanToInt("III"));