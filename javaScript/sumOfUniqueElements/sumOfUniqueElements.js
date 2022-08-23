/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    let obj = {}
    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        }
        else
            obj[nums[i]]++
    }
    
   return Object.keys(obj).reduce( (previous, key)=> {
    return obj[key] === 1 ? previous + parseInt(key) : previous;
}, 0);
    
};