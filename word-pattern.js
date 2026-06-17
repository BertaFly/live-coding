/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let words = s.split(' ');
    if (pattern.length !== words.length) return false;
    const letters =  pattern.split('');
    const dictionary = {};
    for (let i = 0; i < letters.length; i++) {
        if (dictionary[letters[i]] !== undefined) {
            if (dictionary[letters[i]] !== words[i]) {
                return false;
            }
        } else {
            dictionary[letters[i]] = words[i];
        }
    }
    const parsedWords = [...new Set(Object.values(dictionary))];
    if (parsedWords.length !== Object.values(dictionary).length) return false;
    return true;
};
