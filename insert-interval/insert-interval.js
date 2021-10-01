/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    result = [];
    
    for (let int of intervals) {
        if (int[1] < newInterval[0]) {
            result.push(int);
        } else if (int[0] > newInterval[1]) {
            result.push(newInterval);
            newInterval = int;
        } else if (int[1] >= newInterval[0] || int[0] <= newInterval[1]) {
            newInterval[0] = Math.min(int[0], newInterval[0]);
            newInterval[1] = Math.max(newInterval[1], int[1]);
        }
    }
    result.push(newInterval);
    return result;
};