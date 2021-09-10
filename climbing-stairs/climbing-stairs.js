/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let prevNum = 0;
    let curNum = 1;
    
    for(let i =0; i < n; i++) {
        let temp = prevNum;
        prevNum = curNum;
        curNum += temp;
    }
    return curNum;
};