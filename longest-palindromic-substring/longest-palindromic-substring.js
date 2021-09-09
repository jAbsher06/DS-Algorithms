/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if(s.length <= 1) {
        return s;
    }
    
    let longestPal = '';
    
    // create array to store previous solutions
    const table = [...new Array(s.length + 1)].map(() => new Array(s.length + 1). fill(false));
    
    // create result for 1 letter substring
    for(let i = 0; i < s.length; i++) {
        table[i][i] = true;
        longestPal = s[i];
    }
    
    // calculate result for 2 letter substring
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i+1]) {
            table[i][i+1] = true;
        }
        if(table[i][i+1]) {
            longestPal = s.substring(i, i + 2);
        }
    }
    
    //calculate result for 3 or more characters
    for(let i = s.length - 1; i >= 0; i--) {
        for(let j = i + 2; j < s.length; j++) {
            table[i][j] = table[i+1][j-1] && s[i] === s[j];
            if(table[i][j]) {
                longestPal = longestPal.length < (j - i + 1) ? s.substring(i, j + 1) : longestPal;
            }
        }
    }
    
    return longestPal;
};