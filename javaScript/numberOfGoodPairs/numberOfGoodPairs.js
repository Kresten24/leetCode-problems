/**
 * @param {number[]} nums
 * @return {number}
 */
 var numIdenticalPairs = function(nums) {
    let obj = {}
    let count = 0
    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        }else{
            count+=obj[nums[i]]
                        obj[nums[i]]++

        }
    }
    return count
};