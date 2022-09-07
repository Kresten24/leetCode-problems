/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
 var nextGreaterElement = function(nums1, nums2) {

    return nums1.map((x)=>{
        let subArray = nums2.slice(nums2.indexOf(x))
        for(let el of subArray){
           if(subArray.length === 0) return -1
           if(el > x)
               return el
        }
        return -1
    })
};