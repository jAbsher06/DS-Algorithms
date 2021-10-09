/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // let obj = {};
    // nums.forEach(val => {
    //     obj[val] = (obj[val] || 0) + 1
    // })
    // let values = Object.values(obj).sort((a,b ) => a-b);
    let map = [...new Set(nums)];
    console.log(map);
    return map.length !== nums.length; 
};