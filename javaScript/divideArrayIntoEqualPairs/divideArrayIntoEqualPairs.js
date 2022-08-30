/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var divideArray = function(nums) {
    let obj = {}
    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]])
            obj[nums[i]] = 1
        else
            delete obj[nums[i]]
    }
    return Object.keys(obj).length === 0 ? true : false
};