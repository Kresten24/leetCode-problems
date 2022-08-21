/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    if(target < nums[0]) return 0
    if(target > nums[nums.length-1]) return nums.length
   for(let index=0; index<nums.length; index++){
        if(nums[index]===target){
            return index
        }else if(nums[index-1] < target && nums[index]>target){
            return index
        }
    }
};