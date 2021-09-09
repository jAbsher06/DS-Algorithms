/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    let mLen = matrix.length;
    // create variable to store value of matrix length divided by 2 - given each iteration over matrix reduces length by 2
    let depth = Math.floor(mLen / 2);
    
    // iterate over matrix starting at 0 until you reach depth
    for(let i = 0; i < depth; i++) {
        let newLen = mLen - 2 * i - 1;
        let oppCell = mLen - 1 - i;
        
        //iterate over matrix starting at 0 until you reach new length of matrix
        for(let j = 0; j < newLen; j++) {
            // make 4 swaps - square shape
            let temp = matrix[i][i+j];
            matrix[i][i+j] = matrix[oppCell-j][i];
            matrix[oppCell-j][i] = matrix[oppCell][oppCell-j];
            matrix[oppCell][oppCell-j] = matrix[i+j][oppCell]
            matrix[i+j][oppCell] = temp;
        }
    }
};