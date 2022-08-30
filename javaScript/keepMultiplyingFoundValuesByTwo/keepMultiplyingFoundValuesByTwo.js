/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
 var findFinalValue = function(nums, original) {
    return nums.sort((a,b)=>a-b).reduce((acc,curr)=> curr === acc? acc*2 : acc  , original)
};