/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const n = nums.length;
  let counterObject = {};
  for(let i = 0; i < nums.length; i++) {
    let curEle = nums[i];
    !counterObject[curEle] ? counterObject[curEle] = 1 : counterObject[curEle]++;
  }
  for(ele in counterObject) {
    if (counterObject[ele] > n / 2) {
      return ele;
    }
  }
};