/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++) {
        var firstNum = nums[i];
        for(var j = i + 1; j < nums.length; j++) {
            var secNum = nums[j];
            if(firstNum + secNum === target) {
                return [i, j];
            }
        }
    }
};