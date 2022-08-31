/**
 * @param {number[]} nums
 * @return {number}
 */
// var findMaxConsecutiveOnes = function(nums) {
//     let max = 0
//     let consOnes = 0
//     for(let i=0; i<nums.length; i++){
//         if(nums[i]===1)
//             consOnes++
//         else{
//             max = Math.max(max, consOnes)
//             consOnes = 0
//             }
//         }
//     max = Math.max(max, consOnes)
//     return max
// };

var findMaxConsecutiveOnes = function(nums) {
    return Math.max(...nums.join('').split('0').map(ones => ones.length));
};