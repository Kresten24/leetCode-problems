/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
 var shuffle = function(nums, n) {
    let ans = []
    for(let i=0; i<nums.length/2; i++){
        ans.push(nums[i],nums[n+i])
    }
    return ans
};