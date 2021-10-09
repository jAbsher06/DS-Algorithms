/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let store = {};
    
    for(i of arr) {
        store[i] ? store[i]++ : store[i] = 1;
    }
    
    let values = Object.values(store);
    let unique = [...new Set(values)]
    return values.length === unique.length;
};