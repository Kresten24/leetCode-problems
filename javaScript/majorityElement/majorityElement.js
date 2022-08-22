/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    let obj={}
    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1
        }
        else
            obj[nums[i]]++
    }
    let result = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
    return parseInt(result)
};