/**
 * @param {number[]} nums
 * @return {number}
 */
 var findNumbers = function(nums) {
    let counter = 0
    for(let el of nums){
        if((el+"").length%2 === 0){
            counter++
        }
    }
    return counter
};