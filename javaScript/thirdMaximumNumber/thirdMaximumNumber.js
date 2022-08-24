/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    let res = [...new Set(nums.sort((a,b)=>a-b))]
     return res.length >= 3 ? res[res.length-3] : res[res.length-1]
     
 };