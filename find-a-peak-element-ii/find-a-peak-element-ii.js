/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findPeakGrid = function(mat) {
  let start = 0;
  let end = mat[0].length - 1;
  let colMaxRow = 0;
  while(start <= end) {
    const midCol = Math.floor((end + start) / 2);
    for(let i = 0; i < mat.length; i++) {
      colMaxRow =  mat[colMaxRow][midCol] >= mat[i][midCol] ? colMaxRow : i;
    }
    const peakLeft = mat[colMaxRow][midCol - 1] && mat[colMaxRow][midCol - 1] > mat[colMaxRow][midCol];
    const peakRight = mat[colMaxRow][midCol + 1] && mat[colMaxRow][midCol + 1] > mat[colMaxRow][midCol];
    if (peakRight){
      start = midCol + 1;
    } else if (peakLeft) {
      end = midCol - 1;
    } else {
      return [colMaxRow, midCol];
    }
  }
};