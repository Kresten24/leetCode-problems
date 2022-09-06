/**
 * @param {number[]} nums
 * @return {number}
 */

// return nums.findIndex((n, i) => i % 10 === n)

var smallestEqual = function(nums) {
    let res = []
    for(let i=0; i<nums.length; i++){
        if(i%10 === nums[i])
            res.push(i)
    }
    return res.length === 0 ? -1 : Math.min(...res)
};