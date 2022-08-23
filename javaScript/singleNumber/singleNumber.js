/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    let obj = {}
    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]]=1
        }
        else
            obj[nums[i]]++
    }
    
    for (const key in obj) {
    if(obj[key] === 1) return key
}
};