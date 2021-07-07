/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    let currentElement = nums[i];
    let currentString = currentElement.toString();
    if(currentString.length % 2 === 0) {
      counter++;
    }
  }
  return counter;
};