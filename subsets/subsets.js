/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const result = [];
  backtrack(0, []);
  
  function backtrack (index, list) {
    result.push(list);
    for(var i = index; i < nums.length; i++) {
      backtrack(i + 1, [...list, nums[i]]);
    }
  }
  return result;
};