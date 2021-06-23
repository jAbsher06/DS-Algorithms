/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums, start = 0, end = nums.length - 1) {
  
  if (end >= start) {
    mid = Math.floor((start + end) / 2);
    if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
      return mid;
    } else if (mid === nums.length - 1 && nums[mid] > nums[mid - 1]) {
      return mid;
    } else {
      return findPeakElement(nums, start, mid - 1) || findPeakElement(nums, mid + 1, end);
    }
  }
  return 0;
};