/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    let obj = {}
    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]])
            obj[nums[i]] =1
        else
            obj[nums[i]]++
    }
    return nums.sort((a,b)=>obj[a]-obj[b]||b-a)
};