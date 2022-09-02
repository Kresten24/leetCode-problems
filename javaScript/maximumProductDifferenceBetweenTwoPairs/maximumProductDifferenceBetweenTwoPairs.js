/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProductDifference = function(nums) {
    let sortedArray = nums.sort((a,b)=>a-b)
    let max2Products = nums[nums.length-1]*nums[nums.length-2]
    let min2Products = nums[0]*nums[1]
    return max2Products - min2Products
};