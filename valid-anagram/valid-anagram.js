/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    const obj1 = {};
    const obj2 = {};
    for (let val of s) {
        obj1[val] = (obj1[val] || 0) + 1;
    }
    for (let val of t) {
        obj2[val] = (obj2[val] || 0) + 1;
    }
    for (let key in obj1) {
        if (!obj2[key]) {
            return false;
        }
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
    
};