/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let map = new Map();
    let result = [];
    
    
    for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], map.get(nums[i]) + 1 || 1);
    }
    
    let sortedArray = [...map.entries()].sort((a, b) => b[1] - a[1]);
    
    for(let j = 0; j < k; j++){
        result.push(sortedArray[j][0]);
    }
    
    return result;
};