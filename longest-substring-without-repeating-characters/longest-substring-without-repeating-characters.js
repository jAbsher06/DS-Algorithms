/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let curString = '';
    let maxLength = 0;
    
    for(let i = 0; i < s.length; i++) {
        
        let curLetter = s[i];
        let indexOfCurStr = curString.indexOf(curLetter);
        
        if(indexOfCurStr > -1) {
            curString = curString.substring(indexOfCurStr + 1);
        }
        
        curString += curLetter;
        maxLength = Math.max(maxLength, curString.length);

    }
    return maxLength;
};