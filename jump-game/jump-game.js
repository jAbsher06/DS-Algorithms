/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    // create variable that stores current index
    let index = 0;
    
    // create variable that stores maximum index after "jumping"
    let max = 0;
    
    //create variable that represents max index of array
    const target = nums.length - 1
    
    // create while loop that runs so long as the index is less than the length of the array
    while(index < nums.length) {
        // create variable that sets max to greater of values - current max or index                plus value at index
        max = Math.max(max, index + nums[index])
        
        // if max is greater than or equal to the target return true
        if(max >= target){
            return true;
        }
        
        if(max <= index && nums[index] === 0) {
            return false;
        }
        index++;
    }
    
        
        
    
    
    return false;
};