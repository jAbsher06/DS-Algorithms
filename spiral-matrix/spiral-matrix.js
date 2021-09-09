/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const resArray = [];
    
    while(matrix.length) {
        const first = matrix.shift();
        resArray.push(...first);
        for(const m of matrix) {
            let val = m.pop();
            if(val) {
                resArray.push(val);
                m.reverse()
            }
        }
        matrix.reverse();
    }
    
    return resArray;
};